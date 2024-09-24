// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BatchGetMetricsCommandInput, BatchGetMetricsCommandOutput } from "../commands/BatchGetMetricsCommand";
import { BatchPutMetricsCommandInput, BatchPutMetricsCommandOutput } from "../commands/BatchPutMetricsCommand";
import { MetricQuery, MetricQueryResult, RawMetricData } from "../models/models_0";
import { SageMakerMetricsServiceException as __BaseException } from "../models/SageMakerMetricsServiceException";

/**
 * serializeAws_restJson1BatchGetMetricsCommand
 */
export const se_BatchGetMetricsCommand = async (
  input: BatchGetMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchGetMetrics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MetricQueries: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutMetricsCommand
 */
export const se_BatchPutMetricsCommand = async (
  input: BatchPutMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchPutMetrics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MetricData: (_) => se_RawMetricDataList(_, context),
      TrialComponentName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetMetricsCommand
 */
export const de_BatchGetMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MetricQueryResults: (_) => de_MetricQueryResultList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutMetricsCommand
 */
export const de_BatchPutMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  }) as never;
};

const throwDefaultError = withBaseException(__BaseException);
// se_MetricQuery omitted.

// se_MetricQueryList omitted.

/**
 * serializeAws_restJson1RawMetricData
 */
const se_RawMetricData = (input: RawMetricData, context: __SerdeContext): any => {
  return take(input, {
    MetricName: [],
    Step: [],
    Timestamp: (_) => _.getTime() / 1_000,
    Value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1RawMetricDataList
 */
const se_RawMetricDataList = (input: RawMetricData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RawMetricData(entry, context);
    });
};

// de_BatchPutMetricsError omitted.

// de_BatchPutMetricsErrorList omitted.

/**
 * deserializeAws_restJson1MetricQueryResult
 */
const de_MetricQueryResult = (output: any, context: __SerdeContext): MetricQueryResult => {
  return take(output, {
    Message: __expectString,
    MetricValues: (_: any) => de_MetricValues(_, context),
    Status: __expectString,
    XAxisValues: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1MetricQueryResultList
 */
const de_MetricQueryResultList = (output: any, context: __SerdeContext): MetricQueryResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricQueryResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricValues
 */
const de_MetricValues = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_XAxisValues omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
