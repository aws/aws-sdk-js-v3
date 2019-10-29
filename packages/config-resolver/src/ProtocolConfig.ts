import { Protocol, HttpOptions } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export interface ClientProtocolConfigInput {
  /**
   * The serializing protocol to used in request
   */
  protocol?: Protocol<any, any>;
}
interface PreviouslyResolved {
  httpHandler: HttpHandler;
  protocolDefaultProvider: (
    handler: HttpHandler
  ) => Protocol<HttpRequest, HttpResponse, HttpOptions>;
}
export type ClientProtocolConfigResolved = Required<ClientProtocolConfigInput>;
export function resolveClientProtocolConfig<T>(
  input: T & ClientProtocolConfigInput & PreviouslyResolved
): T & ClientProtocolConfigResolved {
  return {
    ...input,
    protocol: input.protocol || input.protocolDefaultProvider(input.httpHandler)
  };
}
export function destroyClientProtocolConfig(
  config: ClientProtocolConfigResolved
): void {
  config.protocol.destroy();
}
