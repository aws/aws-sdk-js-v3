import { EndpointParameters, EndpointV2, HandlerExecutionContext } from "@aws-sdk/types";

import { EndpointResolvedConfig } from "../resolveEndpointConfig";
import { resolveParamsForS3 } from "../service-customizations";
import { EndpointParameterInstructions } from "../types";
import { createConfigValueProvider } from "./createConfigValueProvider";

export type EndpointParameterInstructionsSupplier = Partial<{
  getEndpointParameterInstructions(): EndpointParameterInstructions;
}>;

/**
 * This step in the endpoint resolution process is exposed as a function
 * to allow packages such as signers, lib-upload, etc. to get
 * the V2 Endpoint associated to an instance of some api operation command
 * without needing to send it or resolve its middleware stack.
 *
 * @private
 * @param commandInput         - the input of the Command in question.
 * @param instructionsSupplier - this is typically a Command constructor. A static function supplying the
 *                               endpoint parameter instructions will exist for commands in services
 *                               having an endpoints ruleset trait.
 * @param clientConfig         - config of the service client.
 * @param context              - optional context.
 */
export const getEndpointFromInstructions = async <
  T extends EndpointParameters,
  CommandInput extends Record<string, unknown>,
  Config extends Record<string, unknown>
>(
  commandInput: CommandInput,
  instructionsSupplier: EndpointParameterInstructionsSupplier,
  clientConfig: Partial<EndpointResolvedConfig<T>> & Config,
  context?: HandlerExecutionContext
): Promise<EndpointV2> => {
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);

  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint: EndpointV2 = clientConfig.endpointProvider!(endpointParams as T, context);

  return endpoint;
};

export const resolveParams = async <
  T extends EndpointParameters,
  CommandInput extends Record<string, unknown>,
  Config extends Record<string, unknown>
>(
  commandInput: CommandInput,
  instructionsSupplier: EndpointParameterInstructionsSupplier,
  clientConfig: Partial<EndpointResolvedConfig<T>> & Config
) => {
  const endpointParams: EndpointParameters = {};
  const instructions: EndpointParameterInstructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};

  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name] as string | boolean;
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider<Config>(instruction.name, name, clientConfig)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }

  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }

  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }

  return endpointParams;
};
