const no = Symbol.for("node-only");

export { HttpRequest, HttpResponse } from "@smithy/core/protocols";

export { FetchHttpHandler, type FetchHttpHandlerOptions } from "@smithy/fetch-http-handler";
export { type NodeHttpHandlerOptions, type NodeHttp2HandlerOptions } from "@smithy/node-http-handler";

export const NodeHttpHandler = no;
export const NodeHttp2Handler = no;
