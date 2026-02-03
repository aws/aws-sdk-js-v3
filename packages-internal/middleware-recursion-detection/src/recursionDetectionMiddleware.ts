// @ts-ignore
import { InvokeStore } from "@aws/lambda-invoke-store";
import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
} from "@smithy/types";

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";

/**
 * Inject to trace ID to request header to detect recursion invocation in Lambda.
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
    const traceIdHeader =
      Object.keys(request.headers ?? {}).find((h) => h.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ??
      TRACE_ID_HEADER_NAME;

    if (request.headers.hasOwnProperty(traceIdHeader)) {
      return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];

    const traceIdFromEnv = process.env[ENV_TRACE_ID];
    const invokeStore = await InvokeStore.getInstanceAsync();
    const traceIdFromInvokeStore = invokeStore?.getXRayTraceId();
    const traceId = traceIdFromInvokeStore ?? traceIdFromEnv;

    const nonEmptyString = (str: unknown): str is string => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
      request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
      ...args,
      request,
    });
  };
