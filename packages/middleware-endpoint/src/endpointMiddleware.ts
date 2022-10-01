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
import { EndpointParameterInstructions } from "./types";

/**
 * @private
 */
export const endpointMiddleware = <T extends EndpointParameters>({
  config,
  instructions,
}: {
  config: EndpointResolvedConfig<T>;
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

      const authScheme: AuthScheme | undefined = context.authSchemes?.[0];
      if (authScheme) {
        context["signing_region"] = authScheme.signingRegion;
        context["signing_service"] = authScheme.signingName;
      }

      return next({
        ...args,
      });
    };
};
