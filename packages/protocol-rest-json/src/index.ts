import {
  RequestSerializer,
  ResponseDeserializer,
  Protocol,
  TransferHandler,
  HttpOptions,
  SerializerUtils,
  DeserializerUtils
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
    serializer: RequestSerializer<HttpRequest, SerializerUtils>,
    input: any,
    utils: SerializerUtils
  ) {
    return serializer(input, "aws.rest-json-1.1", utils);
  }
  deserialize(
    deserializer: ResponseDeserializer<HttpResponse, any, DeserializerUtils>,
    output: HttpResponse,
    utils: DeserializerUtils
  ) {
    return deserializer(output, "aws.rest-json-1.1", utils) as any;
  }
}
