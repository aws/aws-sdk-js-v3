import { Pluggable } from "@aws-sdk/types";
import { EventStreamResolvedConfig } from "./configuration";
import {
  eventStreamHandlingMiddleware,
  eventStreamHandlingMiddlewareOptions
} from "./handling-middleware";
import {
  eventStreamHeaderMiddleware,
  eventStreamHeaderMiddlewareOptions
} from "./headers-middleware";
import {
  recordSignatureMiddleware,
  recordSignatureMiddlewareOptions
} from "./record-signature-middleware";

export const getEventStreamPlugin = (
  options: EventStreamResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      eventStreamHandlingMiddleware(options),
      eventStreamHandlingMiddlewareOptions
    );
    clientStack.add(
      eventStreamHeaderMiddleware,
      eventStreamHeaderMiddlewareOptions
    );
    clientStack.addRelativeTo(
      recordSignatureMiddleware,
      recordSignatureMiddlewareOptions
    );
  }
});
