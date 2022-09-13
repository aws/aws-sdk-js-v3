import { Pluggable, SerializeHandlerOptions } from "@aws-sdk/types";

import { endpointMiddleware } from "./endpointMiddleware";
import { EndpointParameterInstruction } from "./types";

export const endpointMiddlewareOptions: SerializeHandlerOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointMiddleware",
  override: true,
};

export const getEndpointPlugin = (
  config: any, //TODO(endpointsV2): should be ResolvedEndpointConfig interface
  instruction: EndpointParameterInstruction
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(
      endpointMiddleware({
        config,
        instruction,
      }),
      endpointMiddlewareOptions
    );
  },
});
