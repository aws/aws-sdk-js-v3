// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetAccountActivityCommandInput, GetAccountActivityCommandOutput } from "../commands/GetAccountActivityCommand";
import {
  GetAccountPlanStateCommandInput,
  GetAccountPlanStateCommandOutput,
} from "../commands/GetAccountPlanStateCommand";
import { GetFreeTierUsageCommandInput, GetFreeTierUsageCommandOutput } from "../commands/GetFreeTierUsageCommand";
import {
  ListAccountActivitiesCommandInput,
  ListAccountActivitiesCommandOutput,
} from "../commands/ListAccountActivitiesCommand";
import { UpgradeAccountPlanCommandInput, UpgradeAccountPlanCommandOutput } from "../commands/UpgradeAccountPlanCommand";
import { FreeTierServiceException as __BaseException } from "../models/FreeTierServiceException";
import {
  AccessDeniedException,
  ActivityReward,
  ActivityStatus,
  ActivitySummary,
  DimensionValues,
  Expression,
  FreeTierUsage,
  GetAccountActivityRequest,
  GetAccountActivityResponse,
  GetAccountPlanStateRequest,
  GetAccountPlanStateResponse,
  GetFreeTierUsageRequest,
  GetFreeTierUsageResponse,
  InternalServerException,
  ListAccountActivitiesRequest,
  ListAccountActivitiesResponse,
  MatchOption,
  MonetaryAmount,
  ResourceNotFoundException,
  ThrottlingException,
  UpgradeAccountPlanRequest,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0GetAccountActivityCommand
 */
export const se_GetAccountActivityCommand = async (
  input: GetAccountActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountActivity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAccountPlanStateCommand
 */
export const se_GetAccountPlanStateCommand = async (
  input: GetAccountPlanStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountPlanState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

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
 * serializeAws_json1_0ListAccountActivitiesCommand
 */
export const se_ListAccountActivitiesCommand = async (
  input: ListAccountActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountActivities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpgradeAccountPlanCommand
 */
export const se_UpgradeAccountPlanCommand = async (
  input: UpgradeAccountPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpgradeAccountPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0GetAccountActivityCommand
 */
export const de_GetAccountActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountActivityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountActivityResponse(data, context);
  const response: GetAccountActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAccountPlanStateCommand
 */
export const de_GetAccountPlanStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountPlanStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountPlanStateResponse(data, context);
  const response: GetAccountPlanStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
 * deserializeAws_json1_0ListAccountActivitiesCommand
 */
export const de_ListAccountActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountActivitiesResponse(data, context);
  const response: ListAccountActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpgradeAccountPlanCommand
 */
export const de_UpgradeAccountPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeAccountPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpgradeAccountPlanCommandOutput = {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.freetier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.freetier#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.freetier#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.freetier#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
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

// se_FilterActivityStatuses omitted.

// se_GetAccountActivityRequest omitted.

// se_GetAccountPlanStateRequest omitted.

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

// se_ListAccountActivitiesRequest omitted.

// se_MatchOptions omitted.

// se_UpgradeAccountPlanRequest omitted.

// se_Values omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0Activities
 */
const de_Activities = (output: any, context: __SerdeContext): ActivitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActivitySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ActivityReward
 */
const de_ActivityReward = (output: any, context: __SerdeContext): ActivityReward => {
  if (output.credit != null) {
    return {
      credit: de_MonetaryAmount(output.credit, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0ActivitySummary
 */
const de_ActivitySummary = (output: any, context: __SerdeContext): ActivitySummary => {
  return take(output, {
    activityId: __expectString,
    reward: (_: any) => de_ActivityReward(__expectUnion(_), context),
    status: __expectString,
    title: __expectString,
  }) as any;
};

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
 * deserializeAws_json1_0GetAccountActivityResponse
 */
const de_GetAccountActivityResponse = (output: any, context: __SerdeContext): GetAccountActivityResponse => {
  return take(output, {
    activityId: __expectString,
    completedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    estimatedTimeToCompleteInMinutes: __expectInt32,
    expiresAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    instructionsUrl: __expectString,
    reward: (_: any) => de_ActivityReward(__expectUnion(_), context),
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    title: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetAccountPlanStateResponse
 */
const de_GetAccountPlanStateResponse = (output: any, context: __SerdeContext): GetAccountPlanStateResponse => {
  return take(output, {
    accountId: __expectString,
    accountPlanExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    accountPlanRemainingCredits: (_: any) => de_MonetaryAmount(_, context),
    accountPlanStatus: __expectString,
    accountPlanType: __expectString,
  }) as any;
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

/**
 * deserializeAws_json1_0ListAccountActivitiesResponse
 */
const de_ListAccountActivitiesResponse = (output: any, context: __SerdeContext): ListAccountActivitiesResponse => {
  return take(output, {
    activities: (_: any) => de_Activities(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0MonetaryAmount
 */
const de_MonetaryAmount = (output: any, context: __SerdeContext): MonetaryAmount => {
  return take(output, {
    amount: __limitedParseDouble,
    unit: __expectString,
  }) as any;
};

// de_ResourceNotFoundException omitted.

// de_ThrottlingException omitted.

// de_UpgradeAccountPlanResponse omitted.

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
