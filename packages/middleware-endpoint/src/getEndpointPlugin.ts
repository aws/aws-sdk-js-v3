import { Pluggable, SerializeHandlerOptions } from "@aws-sdk/types";

import { endpointMiddleware } from "./endpointMiddleware";
import { EndpointResolvedConfig } from "./resolveEndpointConfig";
import { EndpointParameterInstructions } from "./types";

export const endpointMiddlewareOptions: SerializeHandlerOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointsV2Middleware",
  override: true,
};

export const getEndpointPlugin = (
  config: EndpointResolvedConfig,
  instructions: EndpointParameterInstructions
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(
      endpointMiddleware({
        config,
        instructions,
      }),
      endpointMiddlewareOptions
    );
  },
});
