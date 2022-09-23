import { serializerMiddlewareOption } from "@aws-sdk/middleware-serde";
import { EndpointParameters, Pluggable, RelativeMiddlewareOptions, SerializeHandlerOptions } from "@aws-sdk/types";

import { endpointMiddleware, PreviouslyResolvedServiceId } from "./endpointMiddleware";
import { EndpointResolvedConfig } from "./resolveEndpointConfig";
import { EndpointParameterInstructions } from "./types";

export const endpointMiddlewareOptions: SerializeHandlerOptions & RelativeMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name!,
};

export const getEndpointPlugin = <T extends EndpointParameters>(
  config: EndpointResolvedConfig<T> & PreviouslyResolvedServiceId,
  instructions: EndpointParameterInstructions
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      endpointMiddleware<T>({
        config,
        instructions,
      }),
      endpointMiddlewareOptions
    );
  },
});
