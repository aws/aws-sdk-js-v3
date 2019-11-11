import { Protocol, HttpOptions } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export interface ClientProtocolInputConfig {
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
export type ClientProtocolResolvedConfig = Required<ClientProtocolInputConfig>;
export function resolveClientProtocolConfig<T>(
  input: T & ClientProtocolInputConfig & PreviouslyResolved
): T & ClientProtocolResolvedConfig {
  return {
    ...input,
    protocol: input.protocol || input.protocolDefaultProvider(input.httpHandler)
  };
}
export function destroyClientProtocolConfig(
  config: ClientProtocolResolvedConfig
): void {
  config.protocol.destroy();
}
