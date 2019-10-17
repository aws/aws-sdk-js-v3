import {
  RequestSerializer,
  ResponseDeserializer,
  Injectable,
  Protocol,
  MetadataBearer,
  MiddlewareStack
} from "@aws-sdk/types";
import { deserializerMiddleware } from "./deserializerMiddleware";
import { serializerMiddleware } from "./serializerMiddleware";

export function serdePlugin<
  InputType extends object,
  SerializerRuntimeUtils,
  OutputType extends MetadataBearer,
  DeserializerRuntimeUtils
>(
  config: SerializerRuntimeUtils &
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
