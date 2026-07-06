// @ts-ignore
import { type InvokeStoreBase, InvokeStore } from "@aws/lambda-invoke-store";
import { HttpRequest } from "@smithy/core/protocols";
import type {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  HeaderBag,
  MetadataBearer,
} from "@smithy/types";

// env
const AWS_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const _X_AMZN_TRACE_ID = "_X_AMZN_TRACE_ID";

// headers
const X_AMZN_TRACE_ID = "X-Amzn-Trace-Id";
const TRACEPARENT = "traceparent";
const TRACESTATE = "tracestate";
const BAGGAGE = "baggage";

/**
 * Used for two Lambda-related responsibilities:
 * - Inject to trace ID to request header to detect recursion invocation in Lambda.
 * - Propagate W3C trace context headers from
 *   the Lambda InvokeStore onto outbound requests, enabling distributed trace
 *   context to flow to downstream calls without creating any spans.
 * @internal
 */
export const recursionDetectionMiddleware =
  (): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    const { request } = args;
    if (!HttpRequest.isInstance(request)) {
      return next(args);
    }

    let invokeStore: InvokeStoreBase | undefined;

    {
      // block: recursion detection
      const traceIdHeader =
        Object.keys(request.headers ?? {}).find((h) => h.toLowerCase() === X_AMZN_TRACE_ID.toLowerCase()) ??
        X_AMZN_TRACE_ID;

      if (!request.headers.hasOwnProperty(traceIdHeader)) {
        const functionName = process.env[AWS_LAMBDA_FUNCTION_NAME];

        const traceIdFromEnv = process.env[_X_AMZN_TRACE_ID];
        invokeStore ??= await InvokeStore.getInstanceAsync();
        const traceIdFromInvokeStore = invokeStore?.getXRayTraceId();
        const traceId = traceIdFromInvokeStore ?? traceIdFromEnv;

        const nonEmptyString = (str: unknown): str is string => typeof str === "string" && str.length > 0;
        if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
          request.headers[X_AMZN_TRACE_ID] = traceId;
        }
      }
    }

    {
      // block: w3c tracing headers

      sanitizeTraceHeaders(request.headers);

      const traceparent =
        request.headers[TRACEPARENT] ?? (invokeStore ??= await InvokeStore.getInstanceAsync())?.getTraceparent();
      if (traceparent) {
        // traceparent is required.
        request.headers[TRACEPARENT] = traceparent;

        const tracestate = invokeStore?.getTracestate?.();
        if (tracestate) {
          request.headers[TRACESTATE] = tracestate;
        }
        const baggage = invokeStore?.getBaggage?.();
        if (baggage) {
          request.headers[BAGGAGE] = baggage;
        }
      }
    }

    return next(args);
  };

/**
 * Rewrites any trace context header that is present under a non-canonical casing
 * (e.g. "TraceParent") to its lowercase canonical name, in place.
 */
function sanitizeTraceHeaders(headers: HeaderBag): void {
  for (const header of Object.keys(headers)) {
    const lower = header.toLowerCase();
    if (header !== lower && (lower === TRACEPARENT || lower === TRACESTATE || lower === BAGGAGE)) {
      headers[lower] = headers[header];
      delete headers[header];
    }
  }
}
