import {
  DeserializeHandlerOptions,
  Endpoint,
  EndpointBearer,
  MetadataBearer,
  MiddlewareStack,
  Pluggable,
  RequestSerializer,
  ResponseDeserializer,
  SerializeHandlerOptions,
  UrlParser,
} from "@aws-sdk/types";

import { deserializerMiddleware } from "./deserializerMiddleware";
import { serializerMiddleware } from "./serializerMiddleware";

export const deserializerMiddlewareOption: DeserializeHandlerOptions = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true,
};

export const serializerMiddlewareOption: SerializeHandlerOptions = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true,
};

// Type the modifies the EndpointBearer to make it compatible with Endpoints 2.0 change.
// Must be removed after all clients has been onboard the Endpoints 2.0
export type V1OrV2Endpoint<T extends EndpointBearer> = T & {
  urlParser?: UrlParser;
};

export function getSerdePlugin<
  InputType extends object,
  SerDeContext extends EndpointBearer,
  OutputType extends MetadataBearer
>(
  config: V1OrV2Endpoint<SerDeContext>,
  serializer: RequestSerializer<any, SerDeContext>,
  deserializer: ResponseDeserializer<OutputType, any, SerDeContext>
): Pluggable<InputType, OutputType> {
  return {
    applyToStack: (commandStack: MiddlewareStack<InputType, OutputType>) => {
      commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
    },
  };
}
