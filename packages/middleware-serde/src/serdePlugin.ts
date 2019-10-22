import {
  RequestSerializer,
  ResponseDeserializer,
  Injectable,
  Protocol,
  MetadataBearer,
  MiddlewareStack,
  EndpointBearer,
  Provider
} from "@aws-sdk/types";
import { deserializerMiddleware } from "./deserializerMiddleware";
import { serializerMiddleware } from "./serializerMiddleware";

export function serdePlugin<
  InputType extends object,
  SerializerRuntimeUtils extends EndpointBearer,
  OutputType extends MetadataBearer,
  DeserializerRuntimeUtils
>(
  config: PromisifyEndpoint<SerializerRuntimeUtils> &
    DeserializerRuntimeUtils & { protocol: Protocol<any, any> },
  serializer: RequestSerializer<any, SerializerRuntimeUtils>,
  deserializer: ResponseDeserializer<OutputType, any, DeserializerRuntimeUtils>
): Injectable<InputType, OutputType> {
  return (commandStack: MiddlewareStack<InputType, OutputType>) => {
    commandStack.add(deserializerMiddleware(config, deserializer), {
      step: "deserialize",
      tags: { DESERIALIZER: true }
    });
    commandStack.add(serializerMiddleware(config, serializer), {
      step: "serialize",
      tags: { SERIALIZER: true }
    });
  };
}

export type PromisifyEndpoint<T extends EndpointBearer> = {
  [K in keyof T]: K extends "endpoint" ? Provider<T[K]> : T[K];
};
