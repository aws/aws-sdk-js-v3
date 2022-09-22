import {
  AuthScheme,
  EndpointParameters,
  EndpointV2,
  HandlerExecutionContext,
  MetadataBearer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@aws-sdk/types";

import { getEndpointFromInstructions } from "./adaptors/getEndpointFromInstructions";
import { EndpointResolvedConfig } from "./resolveEndpointConfig";
import { s3Customizations } from "./service-customizations";
import { EndpointParameterInstructions } from "./types";

export type PreviouslyResolvedServiceId = {
  serviceId?: string;
};

/**
 * @private
 */
export const endpointMiddleware = <T extends EndpointParameters>({
  config,
  instructions,
}: {
  config: EndpointResolvedConfig<T> & PreviouslyResolvedServiceId;
  instructions: EndpointParameterInstructions;
}): SerializeMiddleware<any, any> => {
  return <Output extends MetadataBearer>(
      next: SerializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): SerializeHandler<any, Output> =>
    async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
      const endpoint: EndpointV2 = await getEndpointFromInstructions(
        args.input,
        {
          getEndpointParameterInstructions() {
            return instructions;
          },
        },
        { ...config },
        context
      );

      context.endpointV2 = endpoint;
      context.authSchemes = endpoint.properties?.authSchemes;

      const authScheme: AuthScheme = context.authSchemes?.[0];
      if (authScheme) {
        context["signing_region"] = authScheme.signingScope;
        context["signing_service"] = authScheme.signingName;
      }

      if (config.serviceId === "S3") {
        await s3Customizations(config, instructions, args, context);
      }

      return next({
        ...args,
      });
    };
};
