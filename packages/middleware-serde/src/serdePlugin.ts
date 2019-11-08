import {
  RequestSerializer,
  ResponseDeserializer,
  Pluggable,
  MetadataBearer,
  MiddlewareStack,
  EndpointBearer,
  RequestHandler
} from "@aws-sdk/types";
import { deserializerMiddleware } from "./deserializerMiddleware";
import { serializerMiddleware } from "./serializerMiddleware";

export function getSerdePlugin<
  InputType extends object,
  SerDeContext extends EndpointBearer,
  OutputType extends MetadataBearer
>(
  config: SerDeContext & {
    protocol: string;
    requestHandler: RequestHandler<any, any, any>;
  },
  serializer: RequestSerializer<any, SerDeContext>,
  deserializer: ResponseDeserializer<OutputType, any, SerDeContext>
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
