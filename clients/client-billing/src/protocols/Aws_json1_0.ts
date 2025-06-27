// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateBillingViewCommandInput, CreateBillingViewCommandOutput } from "../commands/CreateBillingViewCommand";
import { DeleteBillingViewCommandInput, DeleteBillingViewCommandOutput } from "../commands/DeleteBillingViewCommand";
import { GetBillingViewCommandInput, GetBillingViewCommandOutput } from "../commands/GetBillingViewCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { ListBillingViewsCommandInput, ListBillingViewsCommandOutput } from "../commands/ListBillingViewsCommand";
import {
  ListSourceViewsForBillingViewCommandInput,
  ListSourceViewsForBillingViewCommandOutput,
} from "../commands/ListSourceViewsForBillingViewCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBillingViewCommandInput, UpdateBillingViewCommandOutput } from "../commands/UpdateBillingViewCommand";
import { BillingServiceException as __BaseException } from "../models/BillingServiceException";
import {
  AccessDeniedException,
  ActiveTimeRange,
  BillingViewElement,
  BillingViewType,
  ConflictException,
  CreateBillingViewRequest,
  CreateBillingViewResponse,
  DeleteBillingViewRequest,
  DimensionValues,
  Expression,
  GetBillingViewRequest,
  GetBillingViewResponse,
  GetResourcePolicyRequest,
  InternalServerException,
  ListBillingViewsRequest,
  ListSourceViewsForBillingViewRequest,
  ListTagsForResourceRequest,
  ResourceNotFoundException,
  ResourceTag,
  ServiceQuotaExceededException,
  TagResourceRequest,
  TagValues,
  ThrottlingException,
  UntagResourceRequest,
  UpdateBillingViewRequest,
  UpdateBillingViewResponse,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateBillingViewCommand
 */
export const se_CreateBillingViewCommand = async (
  input: CreateBillingViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBillingView");
  let body: any;
  body = JSON.stringify(se_CreateBillingViewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteBillingViewCommand
 */
export const se_DeleteBillingViewCommand = async (
  input: DeleteBillingViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBillingView");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetBillingViewCommand
 */
export const se_GetBillingViewCommand = async (
  input: GetBillingViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBillingView");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBillingViewsCommand
 */
export const se_ListBillingViewsCommand = async (
  input: ListBillingViewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBillingViews");
  let body: any;
  body = JSON.stringify(se_ListBillingViewsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSourceViewsForBillingViewCommand
 */
export const se_ListSourceViewsForBillingViewCommand = async (
  input: ListSourceViewsForBillingViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSourceViewsForBillingView");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateBillingViewCommand
 */
export const se_UpdateBillingViewCommand = async (
  input: UpdateBillingViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBillingView");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateBillingViewCommand
 */
export const de_CreateBillingViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBillingViewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBillingViewResponse(data, context);
  const response: CreateBillingViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteBillingViewCommand
 */
export const de_DeleteBillingViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBillingViewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBillingViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetBillingViewCommand
 */
export const de_GetBillingViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBillingViewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBillingViewResponse(data, context);
  const response: GetBillingViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBillingViewsCommand
 */
export const de_ListBillingViewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBillingViewsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListBillingViewsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSourceViewsForBillingViewCommand
 */
export const de_ListSourceViewsForBillingViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceViewsForBillingViewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSourceViewsForBillingViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateBillingViewCommand
 */
export const de_UpdateBillingViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBillingViewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBillingViewResponse(data, context);
  const response: UpdateBillingViewCommandOutput = {
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
    case "AccessDeniedException":
    case "com.amazonaws.billing#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.billing#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.billing#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.billing#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.billing#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.billing#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.billing#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
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

/**
 * serializeAws_json1_0ActiveTimeRange
 */
const se_ActiveTimeRange = (input: ActiveTimeRange, context: __SerdeContext): any => {
  return take(input, {
    activeAfterInclusive: (_) => _.getTime() / 1_000,
    activeBeforeInclusive: (_) => _.getTime() / 1_000,
  });
};

// se_BillingViewArnList omitted.

// se_BillingViewSourceViewsList omitted.

// se_BillingViewTypeList omitted.

/**
 * serializeAws_json1_0CreateBillingViewRequest
 */
const se_CreateBillingViewRequest = (input: CreateBillingViewRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    dataFilterExpression: _json,
    description: [],
    name: [],
    resourceTags: _json,
    sourceViews: _json,
  });
};

// se_DeleteBillingViewRequest omitted.

// se_DimensionValues omitted.

// se_Expression omitted.

// se_GetBillingViewRequest omitted.

// se_GetResourcePolicyRequest omitted.

/**
 * serializeAws_json1_0ListBillingViewsRequest
 */
const se_ListBillingViewsRequest = (input: ListBillingViewsRequest, context: __SerdeContext): any => {
  return take(input, {
    activeTimeRange: (_) => se_ActiveTimeRange(_, context),
    arns: _json,
    billingViewTypes: _json,
    maxResults: [],
    nextToken: [],
    ownerAccountId: [],
  });
};

// se_ListSourceViewsForBillingViewRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ResourceTag omitted.

// se_ResourceTagKeyList omitted.

// se_ResourceTagList omitted.

// se_TagResourceRequest omitted.

// se_TagValues omitted.

// se_UntagResourceRequest omitted.

// se_UpdateBillingViewRequest omitted.

// se_Values omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0BillingViewElement
 */
const de_BillingViewElement = (output: any, context: __SerdeContext): BillingViewElement => {
  return take(output, {
    arn: __expectString,
    billingViewType: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataFilterExpression: _json,
    description: __expectString,
    name: __expectString,
    ownerAccountId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_BillingViewList omitted.

// de_BillingViewListElement omitted.

// de_BillingViewSourceViewsList omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CreateBillingViewResponse
 */
const de_CreateBillingViewResponse = (output: any, context: __SerdeContext): CreateBillingViewResponse => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DeleteBillingViewResponse omitted.

// de_DimensionValues omitted.

// de_Expression omitted.

/**
 * deserializeAws_json1_0GetBillingViewResponse
 */
const de_GetBillingViewResponse = (output: any, context: __SerdeContext): GetBillingViewResponse => {
  return take(output, {
    billingView: (_: any) => de_BillingViewElement(_, context),
  }) as any;
};

// de_GetResourcePolicyResponse omitted.

// de_InternalServerException omitted.

// de_ListBillingViewsResponse omitted.

// de_ListSourceViewsForBillingViewResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceTag omitted.

// de_ResourceTagList omitted.

// de_ServiceQuotaExceededException omitted.

// de_TagResourceResponse omitted.

// de_TagValues omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_0UpdateBillingViewResponse
 */
const de_UpdateBillingViewResponse = (output: any, context: __SerdeContext): UpdateBillingViewResponse => {
  return take(output, {
    arn: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_Values omitted.

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
    "x-amz-target": `AWSBilling.${operation}`,
  };
}
