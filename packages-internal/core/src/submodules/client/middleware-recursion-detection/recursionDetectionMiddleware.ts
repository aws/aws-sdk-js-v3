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
const BAGGAGE = "baggage";

/**
 * Used for two Lambda-related responsibilities:
 * - Inject to trace ID to request header to detect recursion invocation in Lambda.
 * - Propagate the W3C `baggage` header from the Lambda InvokeStore onto
 *   outbound requests, so caller-scoped context flows to downstream calls
 *   without creating any spans.
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
      // block: w3c baggage propagation

      sanitizeTraceHeaders(request.headers);

      const existingBaggage = request.headers[BAGGAGE];

      if (!existingBaggage) {
        const baggage = (invokeStore ??= await InvokeStore.getInstanceAsync())?.getBaggage?.();
        if (baggage) {
          request.headers[BAGGAGE] = baggage;
        }
      }
    }

    return next(args);
  };

/**
 * Rewrites the `baggage` header to its lowercase canonical name when
 * it is present under a non-canonical casing (e.g. "Baggage"), in place.
 */
function sanitizeTraceHeaders(headers: HeaderBag): void {
  for (const header of Object.keys(headers)) {
    const lower = header.toLowerCase();
    if (header !== lower && lower === BAGGAGE) {
      headers[lower] = headers[header];
      delete headers[header];
    }
  }
}
