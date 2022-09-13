import {
  MetadataBearer,
  SerializeHandler,
  SerializeHandlerArguments,
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

