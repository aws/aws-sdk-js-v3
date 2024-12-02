// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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

import {
  BatchGetInvoiceProfileCommandInput,
  BatchGetInvoiceProfileCommandOutput,
} from "../commands/BatchGetInvoiceProfileCommand";
import { CreateInvoiceUnitCommandInput, CreateInvoiceUnitCommandOutput } from "../commands/CreateInvoiceUnitCommand";
import { DeleteInvoiceUnitCommandInput, DeleteInvoiceUnitCommandOutput } from "../commands/DeleteInvoiceUnitCommand";
import { GetInvoiceUnitCommandInput, GetInvoiceUnitCommandOutput } from "../commands/GetInvoiceUnitCommand";
import { ListInvoiceUnitsCommandInput, ListInvoiceUnitsCommandOutput } from "../commands/ListInvoiceUnitsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateInvoiceUnitCommandInput, UpdateInvoiceUnitCommandOutput } from "../commands/UpdateInvoiceUnitCommand";
import { InvoicingServiceException as __BaseException } from "../models/InvoicingServiceException";
import {
  AccessDeniedException,
  BatchGetInvoiceProfileRequest,
  CreateInvoiceUnitRequest,
  DeleteInvoiceUnitRequest,
  Filters,
  GetInvoiceUnitRequest,
  GetInvoiceUnitResponse,
  InternalServerException,
  InvoiceUnit,
  InvoiceUnitRule,
  ListInvoiceUnitsRequest,
  ListInvoiceUnitsResponse,
  ListTagsForResourceRequest,
  ResourceNotFoundException,
  ResourceTag,
  ServiceQuotaExceededException,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateInvoiceUnitRequest,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0BatchGetInvoiceProfileCommand
 */
export const se_BatchGetInvoiceProfileCommand = async (
  input: BatchGetInvoiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetInvoiceProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateInvoiceUnitCommand
 */
export const se_CreateInvoiceUnitCommand = async (
  input: CreateInvoiceUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInvoiceUnit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteInvoiceUnitCommand
 */
export const se_DeleteInvoiceUnitCommand = async (
  input: DeleteInvoiceUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInvoiceUnit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetInvoiceUnitCommand
 */
export const se_GetInvoiceUnitCommand = async (
  input: GetInvoiceUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInvoiceUnit");
  let body: any;
  body = JSON.stringify(se_GetInvoiceUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListInvoiceUnitsCommand
 */
export const se_ListInvoiceUnitsCommand = async (
  input: ListInvoiceUnitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInvoiceUnits");
  let body: any;
  body = JSON.stringify(se_ListInvoiceUnitsRequest(input, context));
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
 * serializeAws_json1_0UpdateInvoiceUnitCommand
 */
export const se_UpdateInvoiceUnitCommand = async (
  input: UpdateInvoiceUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInvoiceUnit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0BatchGetInvoiceProfileCommand
 */
export const de_BatchGetInvoiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetInvoiceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetInvoiceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateInvoiceUnitCommand
 */
export const de_CreateInvoiceUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInvoiceUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateInvoiceUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteInvoiceUnitCommand
 */
export const de_DeleteInvoiceUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvoiceUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteInvoiceUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetInvoiceUnitCommand
 */
export const de_GetInvoiceUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvoiceUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInvoiceUnitResponse(data, context);
  const response: GetInvoiceUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListInvoiceUnitsCommand
 */
export const de_ListInvoiceUnitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvoiceUnitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInvoiceUnitsResponse(data, context);
  const response: ListInvoiceUnitsCommandOutput = {
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
 * deserializeAws_json1_0UpdateInvoiceUnitCommand
 */
export const de_UpdateInvoiceUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInvoiceUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateInvoiceUnitCommandOutput = {
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
    case "com.amazonaws.invoicing#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.invoicing#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.invoicing#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.invoicing#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.invoicing#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.invoicing#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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

// se_AccountIdList omitted.

// se_BatchGetInvoiceProfileRequest omitted.

// se_CreateInvoiceUnitRequest omitted.

// se_DeleteInvoiceUnitRequest omitted.

// se_Filters omitted.

/**
 * serializeAws_json1_0GetInvoiceUnitRequest
 */
const se_GetInvoiceUnitRequest = (input: GetInvoiceUnitRequest, context: __SerdeContext): any => {
  return take(input, {
    AsOf: (_) => _.getTime() / 1_000,
    InvoiceUnitArn: [],
  });
};

// se_InvoiceUnitNames omitted.

// se_InvoiceUnitRule omitted.

/**
 * serializeAws_json1_0ListInvoiceUnitsRequest
 */
const se_ListInvoiceUnitsRequest = (input: ListInvoiceUnitsRequest, context: __SerdeContext): any => {
  return take(input, {
    AsOf: (_) => _.getTime() / 1_000,
    Filters: _json,
    MaxResults: [],
    NextToken: [],
  });
};

// se_ListTagsForResourceRequest omitted.

// se_ResourceTag omitted.

// se_ResourceTagKeyList omitted.

// se_ResourceTagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateInvoiceUnitRequest omitted.

// de_AccessDeniedException omitted.

// de_AccountIdList omitted.

// de_BatchGetInvoiceProfileResponse omitted.

// de_CreateInvoiceUnitResponse omitted.

// de_DeleteInvoiceUnitResponse omitted.

/**
 * deserializeAws_json1_0GetInvoiceUnitResponse
 */
const de_GetInvoiceUnitResponse = (output: any, context: __SerdeContext): GetInvoiceUnitResponse => {
  return take(output, {
    Description: __expectString,
    InvoiceReceiver: __expectString,
    InvoiceUnitArn: __expectString,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Rule: _json,
    TaxInheritanceDisabled: __expectBoolean,
  }) as any;
};

// de_InternalServerException omitted.

// de_InvoiceProfile omitted.

/**
 * deserializeAws_json1_0InvoiceUnit
 */
const de_InvoiceUnit = (output: any, context: __SerdeContext): InvoiceUnit => {
  return take(output, {
    Description: __expectString,
    InvoiceReceiver: __expectString,
    InvoiceUnitArn: __expectString,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Rule: _json,
    TaxInheritanceDisabled: __expectBoolean,
  }) as any;
};

// de_InvoiceUnitRule omitted.

/**
 * deserializeAws_json1_0InvoiceUnits
 */
const de_InvoiceUnits = (output: any, context: __SerdeContext): InvoiceUnit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InvoiceUnit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListInvoiceUnitsResponse
 */
const de_ListInvoiceUnitsResponse = (output: any, context: __SerdeContext): ListInvoiceUnitsResponse => {
  return take(output, {
    InvoiceUnits: (_: any) => de_InvoiceUnits(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_ProfileList omitted.

// de_ReceiverAddress omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceTag omitted.

// de_ResourceTagList omitted.

// de_ServiceQuotaExceededException omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateInvoiceUnitResponse omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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
    "x-amz-target": `Invoicing.${operation}`,
  };
}
