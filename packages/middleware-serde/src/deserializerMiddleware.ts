import {
  ResponseDeserializer,
  DeserializeMiddleware,
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput
} from "@aws-sdk/types";

export function deserializerMiddleware<
  Input extends object,
  Output extends object,
  RuntimeUtils = any
>(
  options: RuntimeUtils,
  deserializer: ResponseDeserializer<any, any, RuntimeUtils>
): DeserializeMiddleware<Input, Output> {
  return (
    next: DeserializeHandler<Input, Output>
  ): DeserializeHandler<Input, Output> => async (
    args: DeserializeHandlerArguments<Input>
  ): Promise<DeserializeHandlerOutput<Output>> => {
    const { response } = await next(args);
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed as Output
    };
  };
}
