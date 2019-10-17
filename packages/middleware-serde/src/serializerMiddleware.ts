import {
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
  Protocol
} from "@aws-sdk/types";

export function serializerMiddleware<
  Input extends object,
  Output extends object,
  RuntimeUtils = any
>(
  options: { protocol: Protocol<any, any> } & RuntimeUtils,
  serializer: RequestSerializer<any, RuntimeUtils>
): SerializeMiddleware<Input, Output> {
  return (
    next: SerializeHandler<Input, Output>
  ): SerializeHandler<Input, Output> => async (
    args: SerializeHandlerArguments<Input>
  ): Promise<SerializeHandlerOutput<Output>> => {
    const request = options.protocol.serialize(serializer, args.input, options);
    return next({
      ...args,
      request
    });
  };
}
