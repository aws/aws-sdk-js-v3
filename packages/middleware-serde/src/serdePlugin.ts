import {
  RequestSerializer,
  ResponseDeserializer,
  Pluggable,
  Protocol,
  MetadataBearer,
  MiddlewareStack,
  EndpointBearer
} from "@aws-sdk/types";
import { deserializerMiddleware } from "./deserializerMiddleware";
import { serializerMiddleware } from "./serializerMiddleware";

export function getSerdePlugin<
  InputType extends object,
  SerializerRuntimeUtils extends EndpointBearer,
  OutputType extends MetadataBearer,
  DeserializerRuntimeUtils
>(
  config: SerializerRuntimeUtils &
    DeserializerRuntimeUtils & { protocol: Protocol<any, any> },
  serializer: RequestSerializer<any, SerializerRuntimeUtils>,
  deserializer: ResponseDeserializer<OutputType, any, DeserializerRuntimeUtils>
): Pluggable<InputType, OutputType> {
  return {
    applyToStack: (commandStack: MiddlewareStack<InputType, OutputType>) => {
      commandStack.add(deserializerMiddleware(config, deserializer), {
        step: "deserialize",
        tags: { DESERIALIZER: true }
      });
      commandStack.add(serializerMiddleware(config, serializer), {
        step: "serialize",
        tags: { SERIALIZER: true }
      });
    }
  };
}
