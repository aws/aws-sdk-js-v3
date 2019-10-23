import {
  RequestSerializer,
  ResponseDeserializer,
  Protocol,
  TransferHandler,
  HttpOptions,
  SerializerContext,
  DeserializerContext
} from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export class RestJsonProtocol extends Protocol<
  HttpRequest,
  HttpResponse,
  HttpOptions
> {
  constructor(
    handler: TransferHandler<HttpRequest, HttpResponse, HttpOptions>
  ) {
    super(handler);
  }
  serialize(
    serializer: RequestSerializer<HttpRequest, SerializerContext>,
    input: any,
    utils: SerializerContext
  ) {
    return serializer(input, "aws.rest-json-1.1", utils);
  }
  deserialize(
    deserializer: ResponseDeserializer<HttpResponse, any, DeserializerContext>,
    output: HttpResponse,
    utils: DeserializerContext
  ) {
    return deserializer(output, "aws.rest-json-1.1", utils) as any;
  }
}
