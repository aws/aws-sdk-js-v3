// @ts-ignore
import { InvokeStore } from "@aws/lambda-invoke-store";
import { HttpRequest } from "@smithy/core/protocols";
import type {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  HeaderBag,
  MetadataBearer,
} from "@smithy/types";

const TRACEPARENT_HEADER_NAME = "traceparent";
const TRACESTATE_HEADER_NAME = "tracestate";
const BAGGAGE_HEADER_NAME = "baggage";

/**
 * Propagates W3C trace context headers (traceparent, tracestate, baggage) from
 * the Lambda InvokeStore onto outbound requests, enabling distributed trace
 * context to flow to downstream calls without creating any spans.
 *
 * Any already-present trace headers are first normalized to their canonical
 * lowercase name. If the request then already carries a `traceparent`, its
 * existing trace context is respected and nothing is injected. Otherwise the
 * trace context from the InvokeStore is injected: `traceparent` is required,
 * while `tracestate` and `baggage` are optional and only propagated when present.
 * @internal
 */
export const traceContextPropagationMiddleware =
  (): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) {
      return next(args);
    }

    // Normalize any already-present trace headers to their canonical lowercase
    // name. This runs regardless of whether we inject, since downstream
    // consumers rely on the canonical casing, and it makes the presence check
    // below a direct lookup.
    sanitizeTraceHeaders(request.headers);

    // If the request already carries trace context, respect it and do nothing.
    // traceparent is the anchor of W3C trace context (tracestate and baggage are
    // meaningless without it).
    if (request.headers[TRACEPARENT_HEADER_NAME]) {
      return next(args);
    }

    // Read the trace context from the InvokeStore. getInstanceAsync memoizes the
    // store as a module-level promise: the first call in the process pays the
    // small setup cost, and every later call (here or in any other middleware)
    // just awaits the cached promise.
    const invokeStore = await InvokeStore.getInstanceAsync();
    const traceparent = invokeStore?.getTraceparent();

    // traceparent is required; without it there is nothing to propagate.
    if (!traceparent) {
      return next(args);
    }

    request.headers[TRACEPARENT_HEADER_NAME] = traceparent;

    // tracestate and baggage are optional, and only propagated when present.
    const tracestate = invokeStore?.getTracestate();
    if (tracestate) {
      request.headers[TRACESTATE_HEADER_NAME] = tracestate;
    }

    const baggage = invokeStore?.getBaggage();
    if (baggage) {
      request.headers[BAGGAGE_HEADER_NAME] = baggage;
    }

    return next({
      ...args,
      request,
    });
  };

/**
 * Rewrites any trace context header that is present under a non-canonical casing
 * (e.g. "TraceParent") to its lowercase canonical name, in place.
 */
function sanitizeTraceHeaders(headers: HeaderBag): void {
  for (const header of Object.keys(headers)) {
    const lower = header.toLowerCase();
    if (
      header !== lower &&
      (lower === TRACEPARENT_HEADER_NAME || lower === TRACESTATE_HEADER_NAME || lower === BAGGAGE_HEADER_NAME)
    ) {
      headers[lower] = headers[header];
      delete headers[header];
    }
  }
}
