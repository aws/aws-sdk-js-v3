/* This file has been extracted from @types/http but matching stream-http api */
declare module "stream-http" {
  export * from "stream-http";
}

declare module "stream-http" {
  import * as stream from "readable-stream";
  class URL {}

  // outgoing headers allows numbers (as they are converted internally to strings)
  interface OutgoingHttpHeaders {
    [header: string]: number | string | string[] | undefined;
  }

  interface ClientRequestArgs {
    headers?: OutgoingHttpHeaders;
    timeout?: number;
    hostname?: string | null;
    path?: string | null;
    port?: number | string | null;
    host?: string | null;
    method?: string;
  }

  class ClientRequest extends stream.Writable {}

  class IncomingMessage extends stream.Readable {
    statusCode?: number;
  }

  interface AgentOptions {}

  class Agent {}

  interface RequestOptions extends ClientRequestArgs {}
  function request(options: RequestOptions | string | URL, callback?: (res: IncomingMessage) => void): ClientRequest;
  function request(
    url: string | URL,
    options: RequestOptions,
    callback?: (res: IncomingMessage) => void
  ): ClientRequest;
}
