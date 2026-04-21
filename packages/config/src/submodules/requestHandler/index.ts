/*
There are other request handler implementations, but they have very specific applicability
and do not need to be discoverable via this submodule.
 */

export { HttpRequest, HttpResponse } from "@smithy/protocol-http";

export { FetchHttpHandler, type FetchHttpHandlerOptions } from "@smithy/fetch-http-handler";
export {
  NodeHttpHandler,
  type NodeHttpHandlerOptions,
  NodeHttp2Handler,
  type NodeHttp2HandlerOptions,
} from "@smithy/node-http-handler";
