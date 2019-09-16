import {
  ResponseDeserializer,
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeMiddleware,
  DeserializeHandlerOutput,
  Protocol
} from "@aws-sdk/types";

export function deserializerMiddleware<
  Input extends object,
  Output extends object
>(
  protocol: Protocol<any, any>,
  deserializer: ResponseDeserializer<any>
): DeserializeMiddleware<Input, Output> {
  return (
    next: DeserializeHandler<Input, Output>
  ): DeserializeHandler<Input, Output> => async (
    args: DeserializeHandlerArguments<Input>
  ): Promise<DeserializeHandlerOutput<Output>> => {
    const { response } = await next(args);
    const parsed = await protocol.parse(deserializer, response);
    return {
      response,
      output: parsed as Output
    };
  };
}
