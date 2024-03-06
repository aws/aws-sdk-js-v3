// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetFreeTierUsageCommandInput, GetFreeTierUsageCommandOutput } from "../commands/GetFreeTierUsageCommand";
import { FreeTierServiceException as __BaseException } from "../models/FreeTierServiceException";
import {
  DimensionValues,
  Expression,
  FreeTierUsage,
  GetFreeTierUsageRequest,
  GetFreeTierUsageResponse,
  InternalServerException,
  MatchOption,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0GetFreeTierUsageCommand
 */
export const se_GetFreeTierUsageCommand = async (
  input: GetFreeTierUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFreeTierUsage");
  let body: any;
  body = JSON.stringify(se_GetFreeTierUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0GetFreeTierUsageCommand
 */
export const de_GetFreeTierUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFreeTierUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFreeTierUsageResponse(data, context);
  const response: GetFreeTierUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.freetier#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.freetier#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.freetier#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_DimensionValues omitted.

/**
 * serializeAws_json1_0Expression
 */
const se_Expression = (input: Expression, context: __SerdeContext): any => {
  return take(input, {
    And: (_) => se_Expressions(_, context),
    Dimensions: _json,
    Not: (_) => se_Expression(_, context),
    Or: (_) => se_Expressions(_, context),
  });
};

/**
 * serializeAws_json1_0Expressions
 */
const se_Expressions = (input: Expression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Expression(entry, context);
    });
};

/**
 * serializeAws_json1_0GetFreeTierUsageRequest
 */
const se_GetFreeTierUsageRequest = (input: GetFreeTierUsageRequest, context: __SerdeContext): any => {
  return take(input, {
    filter: (_) => se_Expression(_, context),
    maxResults: [],
    nextToken: [],
  });
};

// se_MatchOptions omitted.

// se_Values omitted.

/**
 * deserializeAws_json1_0FreeTierUsage
 */
const de_FreeTierUsage = (output: any, context: __SerdeContext): FreeTierUsage => {
  return take(output, {
    actualUsageAmount: __limitedParseDouble,
    description: __expectString,
    forecastedUsageAmount: __limitedParseDouble,
    freeTierType: __expectString,
    limit: __limitedParseDouble,
    operation: __expectString,
    region: __expectString,
    service: __expectString,
    unit: __expectString,
    usageType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0FreeTierUsages
 */
const de_FreeTierUsages = (output: any, context: __SerdeContext): FreeTierUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FreeTierUsage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetFreeTierUsageResponse
 */
const de_GetFreeTierUsageResponse = (output: any, context: __SerdeContext): GetFreeTierUsageResponse => {
  return take(output, {
    freeTierUsages: (_: any) => de_FreeTierUsages(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_InternalServerException omitted.

// de_ThrottlingException omitted.

// de_ValidationException omitted.

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

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AWSFreeTierService.${operation}`,
  };
}
