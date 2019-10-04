import {
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeMiddleware,
  SerializeHandlerOutput,
  Protocol,
  SerializerConfig,
  InjectableMiddleware
} from "@aws-sdk/types";

export function serializerMiddleware<
  Input extends object,
  Output extends object
>(
  options: SerializerMiddlewareConfig,
  serializer: RequestSerializer<any>
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

export interface SerializerMiddlewareConfig extends SerializerConfig {
  protocol: Protocol<any, any>;
}

export function serializerPlugin(
  config: SerializerMiddlewareConfig,
  serializer: RequestSerializer<any>
): InjectableMiddleware {
  return {
    middleware: serializerMiddleware(config, serializer),
    step: "serialize",
    tags: { SERIALIZER: true }
  };
}
