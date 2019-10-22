import { Protocol, HttpOptions } from "@aws-sdk/types";
import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";

export namespace ProtocolConfig {
  export interface Input {
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
  export type Resolved = Required<Input>;
  export function resolve<T>(
    input: T & Input & PreviouslyResolved
  ): T & Resolved {
    return {
      ...input,
      protocol:
        input.protocol || input.protocolDefaultProvider(input.httpHandler)
    };
  }
}
//export separately for showing comment block in Intellisense
export type ProtocolConfigInput = ProtocolConfig.Input;
