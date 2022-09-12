import {
  MetadataBearer,
  Pluggable,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOptions,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@aws-sdk/types";

import { EndpointParameterInstruction } from "./types";

export const endpointMiddleware = (options: {
  config: any; // TODO(endpointsV2): should be ResolvedEndpointConfig interface
  instruction: EndpointParameterInstruction;
}): SerializeMiddleware<any, any> => {
  return <Output extends MetadataBearer>(next: SerializeHandler<any, Output>): SerializeHandler<any, Output> =>
    async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
      // TODO(endpointsV2): resolve async providers from client config and static values according to
      // instruction from input to populate endpoint parameters
      return next({
        ...args,
      });
    };
};

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
