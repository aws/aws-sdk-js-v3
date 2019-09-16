import {
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeMiddleware,
  SerializeHandlerOutput,
  Protocol
} from "@aws-sdk/types";

export function serializerMiddleware<
  Input extends object,
  Output extends object
>(
  protocol: Protocol<any, any>,
  serializer: RequestSerializer<any>
): SerializeMiddleware<Input, Output> {
  return (
    next: SerializeHandler<Input, Output>
  ): SerializeHandler<Input, Output> => async (
    args: SerializeHandlerArguments<Input>
  ): Promise<SerializeHandlerOutput<Output>> => {
    const request = protocol.serialize(serializer, args.input);
    return next({
      ...args,
      request
    });
  };
}
