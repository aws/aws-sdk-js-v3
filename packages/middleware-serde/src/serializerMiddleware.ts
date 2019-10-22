import {
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
  Protocol,
  EndpointBearer
} from "@aws-sdk/types";
import { PromisifyEndpoint } from "./serdePlugin";

export function serializerMiddleware<
  Input extends object,
  Output extends object,
  RuntimeUtils extends EndpointBearer
>(
  options: { protocol: Protocol<any, any> } & PromisifyEndpoint<RuntimeUtils>,
  serializer: RequestSerializer<any, RuntimeUtils>
): SerializeMiddleware<Input, Output> {
  return (
    next: SerializeHandler<Input, Output>
  ): SerializeHandler<Input, Output> => async (
    args: SerializeHandlerArguments<Input>
  ): Promise<SerializeHandlerOutput<Output>> => {
    const endpointResolvedOptions = {
      ...options,
      endpoint: await options.endpoint()
    };
    const request = options.protocol.serialize(
      serializer,
      args.input,
      endpointResolvedOptions
    );
    return next({
      ...args,
      request
    });
  };
}
