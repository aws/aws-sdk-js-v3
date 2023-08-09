import { HttpRequest } from "@smithy/protocol-http";
import {
  AbsoluteLocation,
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";

interface PreviouslyResolved {
  runtime: string;
}

/**
 * Inject to trace ID to request header to detect recursion invocation in Lambda.
 * @internal
 */
export const recursionDetectionMiddleware =
  (options: PreviouslyResolved): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    const { request } = args;
    if (
      !HttpRequest.isInstance(request) ||
      options.runtime !== "node" ||
      request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)
    ) {
      return next(args);
    }

    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str: unknown): str is string => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
      request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
      ...args,
      request,
    });
  };

// @internal
/**
 * @internal
 */
export const addRecursionDetectionMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low",
};

// @internal
/**
 * @internal
 */
export const getRecursionDetectionPlugin = (options: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  },
});
