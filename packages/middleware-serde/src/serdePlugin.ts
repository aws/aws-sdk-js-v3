import {
  RequestSerializer,
  ResponseDeserializer,
  Pluggable,
  MetadataBearer,
  MiddlewareStack,
  EndpointBearer,
  RequestHandler,
  DeserializeHandlerOptions,
  SerializeHandlerOptions
} from "@aws-sdk/types";
import { deserializerMiddleware } from "./deserializerMiddleware";
import { serializerMiddleware } from "./serializerMiddleware";

export const deserializerMiddlewareOption: DeserializeHandlerOptions = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"]
};

export const serializerMiddlewareOption: SerializeHandlerOptions = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"]
};

export function getSerdePlugin<
  InputType extends object,
  SerDeContext extends EndpointBearer,
  OutputType extends MetadataBearer
>(
  config: SerDeContext,
  serializer: RequestSerializer<any, SerDeContext>,
  deserializer: ResponseDeserializer<OutputType, any, SerDeContext>
): Pluggable<InputType, OutputType> {
  return {
    applyToStack: (commandStack: MiddlewareStack<InputType, OutputType>) => {
      commandStack.add(
        deserializerMiddleware(config, deserializer),
        deserializerMiddlewareOption
      );
      commandStack.add(
        serializerMiddleware(config, serializer),
        serializerMiddlewareOption
      );
    }
  };
}
