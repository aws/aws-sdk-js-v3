import { HttpRequest } from "@smithy/protocol-http";
import { FinalizeRequestMiddleware, RelativeMiddlewareOptions } from "@smithy/types";

import { EventStreamResolvedConfig } from "./eventStreamConfiguration";

export const eventStreamHandlingMiddleware =
  (options: EventStreamResolvedConfig): FinalizeRequestMiddleware<any, any> =>
  (next, context) =>
  async (args) => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) return next(args);
    return options.eventStreamPayloadHandler.handle(next, args, context);
  };

export const eventStreamHandlingMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
  name: "eventStreamHandlingMiddleware",
  relation: "after",
  toMiddleware: "awsAuthMiddleware",
  override: true,
};
