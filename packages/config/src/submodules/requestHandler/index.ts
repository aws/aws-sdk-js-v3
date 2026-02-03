export { FetchHttpHandler } from "@smithy/fetch-http-handler";
export { NodeHttpHandler } from "@smithy/node-http-handler";

/*
There are other request handler implementations, but they have very specific applicability
and do not need to be discoverable via this submodule.
 */

export { HttpRequest, HttpResponse } from "@smithy/protocol-http";
