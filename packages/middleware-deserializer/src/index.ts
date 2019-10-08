import {
  ResponseDeserializer,
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeMiddleware,
  DeserializeHandlerOutput,
  Protocol,
  DeserializerUtils,
  InjectableMiddleware
} from "@aws-sdk/types";

export function deserializerMiddleware<
  Input extends object,
  Output extends object
>(
  options: DeserializerMiddlewareConfig,
  deserializer: ResponseDeserializer<any>
): DeserializeMiddleware<Input, Output> {
  return (
    next: DeserializeHandler<Input, Output>
  ): DeserializeHandler<Input, Output> => async (
    args: DeserializeHandlerArguments<Input>
  ): Promise<DeserializeHandlerOutput<Output>> => {
    const { response } = await next(args);
    const parsed = await options.protocol.deserialize(
      deserializer,
      response,
      options
    );
    return {
      response,
      output: parsed as Output
    };
  };
}

export interface DeserializerMiddlewareConfig extends DeserializerUtils {
  protocol: Protocol<any, any>;
}

export function deserializerPlugin<OutputType>(
  config: DeserializerMiddlewareConfig,
  serializer: ResponseDeserializer<OutputType>
): InjectableMiddleware {
  return {
    middleware: deserializerMiddleware(config, serializer),
    step: "deserialize",
    tags: { DESERIALIZER: true }
  };
}
