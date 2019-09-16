import {
  RequestSerializer,
  ResponseDeserializer,
  Protocol,
  TransferHandler,
  HttpOptions
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
  serialize(serializer: RequestSerializer<HttpRequest>, input: any) {
    return serializer(input, "aws.rest-json-1.1");
  }
  parse(parser: ResponseDeserializer<HttpResponse>, output: HttpResponse) {
    return parser(output, "aws.rest-json-1.1") as any;
  }
}
