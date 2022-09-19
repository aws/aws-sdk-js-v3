import { EndpointParameters, EndpointV2, HandlerExecutionContext } from "@aws-sdk/types";

import { EndpointResolvedConfig } from "../resolveEndpointConfig";
import { EndpointParameterInstructions } from "../types";

/**
 * This step in the endpoint resolution process is exposed as a function
 * to allow certain packages such as s3 signer, lib-upload to get
 * the V2 Endpoint associated to an instance of some (operation) command.
 *
 * @private
 */
export const getEndpointFromInstructions = async (
  commandInput: any,
  instructionsSupplier: Partial<{
    getEndpointParameterInstructions(): EndpointParameterInstructions;
  }>,
  clientConfig: Partial<EndpointResolvedConfig>,
  context?: HandlerExecutionContext
): Promise<EndpointV2> => {
  const endpointParams: EndpointParameters = {};
  const instructions: EndpointParameterInstructions =
    (instructionsSupplier.getEndpointParameterInstructions || (() => null))() || {};

  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }

  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigProvider(instruction.name, clientConfig)();
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }

  const endpoint: EndpointV2 = clientConfig.endpointProvider!(endpointParams, context);
  return endpoint;
};

/**
 * @private
 */
const createConfigProvider = (configKey: string, config: EndpointResolvedConfig & any) => {
  const configProvider = async () => {
    if (!(configKey in config)) {
      throw new Error(`The config key ${configKey} was not found in the config object.`);
    }
    const configValue = config[configKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  };
  return configProvider;
};
