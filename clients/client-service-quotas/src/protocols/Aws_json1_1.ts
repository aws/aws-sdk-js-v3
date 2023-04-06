// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput,
} from "../commands/AssociateServiceQuotaTemplateCommand";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "../commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput,
} from "../commands/DisassociateServiceQuotaTemplateCommand";
import {
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput,
} from "../commands/GetAssociationForServiceQuotaTemplateCommand";
import {
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput,
} from "../commands/GetAWSDefaultServiceQuotaCommand";
import {
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput,
} from "../commands/GetRequestedServiceQuotaChangeCommand";
import { GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput } from "../commands/GetServiceQuotaCommand";
import {
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "../commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "../commands/ListAWSDefaultServiceQuotasCommand";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
} from "../commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import {
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
} from "../commands/ListRequestedServiceQuotaChangeHistoryCommand";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
} from "../commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput } from "../commands/ListServiceQuotasCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
} from "../commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import {
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
} from "../commands/RequestServiceQuotaIncreaseCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  AssociateServiceQuotaTemplateRequest,
  AssociateServiceQuotaTemplateResponse,
  AWSServiceAccessNotEnabledException,
  DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
  DependencyAccessDeniedException,
  DisassociateServiceQuotaTemplateRequest,
  DisassociateServiceQuotaTemplateResponse,
  ErrorReason,
  GetAssociationForServiceQuotaTemplateRequest,
  GetAssociationForServiceQuotaTemplateResponse,
  GetAWSDefaultServiceQuotaRequest,
  GetAWSDefaultServiceQuotaResponse,
  GetRequestedServiceQuotaChangeRequest,
  GetRequestedServiceQuotaChangeResponse,
  GetServiceQuotaIncreaseRequestFromTemplateRequest,
  GetServiceQuotaIncreaseRequestFromTemplateResponse,
  GetServiceQuotaRequest,
  GetServiceQuotaResponse,
  IllegalArgumentException,
  InvalidPaginationTokenException,
  InvalidResourceStateException,
  ListAWSDefaultServiceQuotasRequest,
  ListAWSDefaultServiceQuotasResponse,
  ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  ListRequestedServiceQuotaChangeHistoryByQuotaResponse,
  ListRequestedServiceQuotaChangeHistoryRequest,
  ListRequestedServiceQuotaChangeHistoryResponse,
  ListServiceQuotaIncreaseRequestsInTemplateRequest,
  ListServiceQuotaIncreaseRequestsInTemplateResponse,
  ListServiceQuotasRequest,
  ListServiceQuotasResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MetricInfo,
  NoAvailableOrganizationException,
  NoSuchResourceException,
  OrganizationNotInAllFeaturesModeException,
  PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  PutServiceQuotaIncreaseRequestIntoTemplateResponse,
  QuotaExceededException,
  QuotaPeriod,
  RequestedServiceQuotaChange,
  RequestServiceQuotaIncreaseRequest,
  RequestServiceQuotaIncreaseResponse,
  ResourceAlreadyExistsException,
  ServiceException,
  ServiceInfo,
  ServiceQuota,
  ServiceQuotaIncreaseRequestInTemplate,
  ServiceQuotaTemplateNotInUseException,
  Tag,
  TagPolicyViolationException,
  TagResourceRequest,
  TagResourceResponse,
  TemplatesNotAvailableInRegionException,
  TooManyRequestsException,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
} from "../models/models_0";
import { ServiceQuotasServiceException as __BaseException } from "../models/ServiceQuotasServiceException";

/**
 * serializeAws_json1_1AssociateServiceQuotaTemplateCommand
 */
export const se_AssociateServiceQuotaTemplateCommand = async (
  input: AssociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
  };
  let body: any;
  body = JSON.stringify(se_AssociateServiceQuotaTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand
 */
export const se_DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateServiceQuotaTemplateCommand
 */
export const se_DisassociateServiceQuotaTemplateCommand = async (
  input: DisassociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateServiceQuotaTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand
 */
export const se_GetAssociationForServiceQuotaTemplateCommand = async (
  input: GetAssociationForServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GetAssociationForServiceQuotaTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAWSDefaultServiceQuotaCommand
 */
export const se_GetAWSDefaultServiceQuotaCommand = async (
  input: GetAWSDefaultServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetAWSDefaultServiceQuota",
  };
  let body: any;
  body = JSON.stringify(se_GetAWSDefaultServiceQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRequestedServiceQuotaChangeCommand
 */
export const se_GetRequestedServiceQuotaChangeCommand = async (
  input: GetRequestedServiceQuotaChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetRequestedServiceQuotaChange",
  };
  let body: any;
  body = JSON.stringify(se_GetRequestedServiceQuotaChangeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceQuotaCommand
 */
export const se_GetServiceQuotaCommand = async (
  input: GetServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetServiceQuota",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand
 */
export const se_GetServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAWSDefaultServiceQuotasCommand
 */
export const se_ListAWSDefaultServiceQuotasCommand = async (
  input: ListAWSDefaultServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas",
  };
  let body: any;
  body = JSON.stringify(se_ListAWSDefaultServiceQuotasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand
 */
export const se_ListRequestedServiceQuotaChangeHistoryCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory",
  };
  let body: any;
  body = JSON.stringify(se_ListRequestedServiceQuotaChangeHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand
 */
export const se_ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota",
  };
  let body: any;
  body = JSON.stringify(se_ListRequestedServiceQuotaChangeHistoryByQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand
 */
export const se_ListServiceQuotaIncreaseRequestsInTemplateCommand = async (
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceQuotaIncreaseRequestsInTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceQuotasCommand
 */
export const se_ListServiceQuotasCommand = async (
  input: ListServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListServiceQuotas",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceQuotasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListServices",
  };
  let body: any;
  body = JSON.stringify(se_ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand
 */
export const se_PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (
  input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate",
  };
  let body: any;
  body = JSON.stringify(se_PutServiceQuotaIncreaseRequestIntoTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RequestServiceQuotaIncreaseCommand
 */
export const se_RequestServiceQuotaIncreaseCommand = async (
  input: RequestServiceQuotaIncreaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.RequestServiceQuotaIncrease",
  };
  let body: any;
  body = JSON.stringify(se_RequestServiceQuotaIncreaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateServiceQuotaTemplateCommand
 */
export const de_AssociateServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceQuotaTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateServiceQuotaTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateServiceQuotaTemplateResponse(data, context);
  const response: AssociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError
 */
const de_AssociateServiceQuotaTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceQuotaTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      throw await de_AWSServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.servicequotas#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await de_TemplatesNotAvailableInRegionExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand
 */
export const de_DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
  const response: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError
 */
const de_DeleteServiceQuotaIncreaseRequestFromTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      throw await de_AWSServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await de_TemplatesNotAvailableInRegionExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand
 */
export const de_DisassociateServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceQuotaTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateServiceQuotaTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateServiceQuotaTemplateResponse(data, context);
  const response: DisassociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError
 */
const de_DisassociateServiceQuotaTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceQuotaTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      throw await de_AWSServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaTemplateNotInUseException":
    case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
      throw await de_ServiceQuotaTemplateNotInUseExceptionRes(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await de_TemplatesNotAvailableInRegionExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand
 */
export const de_GetAssociationForServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAssociationForServiceQuotaTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAssociationForServiceQuotaTemplateResponse(data, context);
  const response: GetAssociationForServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError
 */
const de_GetAssociationForServiceQuotaTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      throw await de_AWSServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaTemplateNotInUseException":
    case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
      throw await de_ServiceQuotaTemplateNotInUseExceptionRes(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await de_TemplatesNotAvailableInRegionExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand
 */
export const de_GetAWSDefaultServiceQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSDefaultServiceQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAWSDefaultServiceQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAWSDefaultServiceQuotaResponse(data, context);
  const response: GetAWSDefaultServiceQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError
 */
const de_GetAWSDefaultServiceQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSDefaultServiceQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand
 */
export const de_GetRequestedServiceQuotaChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestedServiceQuotaChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRequestedServiceQuotaChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRequestedServiceQuotaChangeResponse(data, context);
  const response: GetRequestedServiceQuotaChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError
 */
const de_GetRequestedServiceQuotaChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestedServiceQuotaChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetServiceQuotaCommand
 */
export const de_GetServiceQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceQuotaResponse(data, context);
  const response: GetServiceQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetServiceQuotaCommandError
 */
const de_GetServiceQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand
 */
export const de_GetServiceQuotaIncreaseRequestFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
  const response: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError
 */
const de_GetServiceQuotaIncreaseRequestFromTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      throw await de_AWSServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await de_TemplatesNotAvailableInRegionExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand
 */
export const de_ListAWSDefaultServiceQuotasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAWSDefaultServiceQuotasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAWSDefaultServiceQuotasResponse(data, context);
  const response: ListAWSDefaultServiceQuotasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError
 */
const de_ListAWSDefaultServiceQuotasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand
 */
export const de_ListRequestedServiceQuotaChangeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRequestedServiceQuotaChangeHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRequestedServiceQuotaChangeHistoryResponse(data, context);
  const response: ListRequestedServiceQuotaChangeHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError
 */
const de_ListRequestedServiceQuotaChangeHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand
 */
export const de_ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRequestedServiceQuotaChangeHistoryByQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRequestedServiceQuotaChangeHistoryByQuotaResponse(data, context);
  const response: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError
 */
const de_ListRequestedServiceQuotaChangeHistoryByQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand
 */
export const de_ListServiceQuotaIncreaseRequestsInTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceQuotaIncreaseRequestsInTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceQuotaIncreaseRequestsInTemplateResponse(data, context);
  const response: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError
 */
const de_ListServiceQuotaIncreaseRequestsInTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      throw await de_AWSServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await de_TemplatesNotAvailableInRegionExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServiceQuotasCommand
 */
export const de_ListServiceQuotasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceQuotasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceQuotasResponse(data, context);
  const response: ListServiceQuotasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServiceQuotasCommandError
 */
const de_ListServiceQuotasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServicesCommand
 */
export const de_ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServicesCommandError
 */
const de_ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand
 */
export const de_PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutServiceQuotaIncreaseRequestIntoTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutServiceQuotaIncreaseRequestIntoTemplateResponse(data, context);
  const response: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError
 */
const de_PutServiceQuotaIncreaseRequestIntoTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      throw await de_AWSServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await de_NoAvailableOrganizationExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "QuotaExceededException":
    case "com.amazonaws.servicequotas#QuotaExceededException":
      throw await de_QuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await de_TemplatesNotAvailableInRegionExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RequestServiceQuotaIncreaseCommand
 */
export const de_RequestServiceQuotaIncreaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestServiceQuotaIncreaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RequestServiceQuotaIncreaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RequestServiceQuotaIncreaseResponse(data, context);
  const response: RequestServiceQuotaIncreaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError
 */
const de_RequestServiceQuotaIncreaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestServiceQuotaIncreaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await de_DependencyAccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.servicequotas#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "QuotaExceededException":
    case "com.amazonaws.servicequotas#QuotaExceededException":
      throw await de_QuotaExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.servicequotas#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TagPolicyViolationException":
    case "com.amazonaws.servicequotas#TagPolicyViolationException":
      throw await de_TagPolicyViolationExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.servicequotas#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await de_NoSuchResourceExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionRes
 */
const de_AWSServiceAccessNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AWSServiceAccessNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AWSServiceAccessNotEnabledException(body, context);
  const exception = new AWSServiceAccessNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DependencyAccessDeniedExceptionRes
 */
const de_DependencyAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DependencyAccessDeniedException(body, context);
  const exception = new DependencyAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IllegalArgumentExceptionRes
 */
const de_IllegalArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IllegalArgumentException(body, context);
  const exception = new IllegalArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPaginationTokenExceptionRes
 */
const de_InvalidPaginationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPaginationTokenException(body, context);
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceStateExceptionRes
 */
const de_InvalidResourceStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResourceStateException(body, context);
  const exception = new InvalidResourceStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoAvailableOrganizationExceptionRes
 */
const de_NoAvailableOrganizationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoAvailableOrganizationException(body, context);
  const exception = new NoAvailableOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoSuchResourceExceptionRes
 */
const de_NoSuchResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchResourceException(body, context);
  const exception = new NoSuchResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionRes
 */
const de_OrganizationNotInAllFeaturesModeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationNotInAllFeaturesModeException(body, context);
  const exception = new OrganizationNotInAllFeaturesModeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1QuotaExceededExceptionRes
 */
const de_QuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_QuotaExceededException(body, context);
  const exception = new QuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceException(body, context);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionRes
 */
const de_ServiceQuotaTemplateNotInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaTemplateNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaTemplateNotInUseException(body, context);
  const exception = new ServiceQuotaTemplateNotInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagPolicyViolationExceptionRes
 */
const de_TagPolicyViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagPolicyViolationException(body, context);
  const exception = new TagPolicyViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionRes
 */
const de_TemplatesNotAvailableInRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemplatesNotAvailableInRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TemplatesNotAvailableInRegionException(body, context);
  const exception = new TemplatesNotAvailableInRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AssociateServiceQuotaTemplateRequest
 */
const se_AssociateServiceQuotaTemplateRequest = (
  input: AssociateServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest
 */
const se_DeleteServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1DisassociateServiceQuotaTemplateRequest
 */
const se_DisassociateServiceQuotaTemplateRequest = (
  input: DisassociateServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest
 */
const se_GetAssociationForServiceQuotaTemplateRequest = (
  input: GetAssociationForServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1GetAWSDefaultServiceQuotaRequest
 */
const se_GetAWSDefaultServiceQuotaRequest = (input: GetAWSDefaultServiceQuotaRequest, context: __SerdeContext): any => {
  return {
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1GetRequestedServiceQuotaChangeRequest
 */
const se_GetRequestedServiceQuotaChangeRequest = (
  input: GetRequestedServiceQuotaChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequestId != null && { RequestId: input.RequestId }),
  };
};

/**
 * serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest
 */
const se_GetServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: GetServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1GetServiceQuotaRequest
 */
const se_GetServiceQuotaRequest = (input: GetServiceQuotaRequest, context: __SerdeContext): any => {
  return {
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1InputTagKeys
 */
const se_InputTagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InputTags
 */
const se_InputTags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1ListAWSDefaultServiceQuotasRequest
 */
const se_ListAWSDefaultServiceQuotasRequest = (
  input: ListAWSDefaultServiceQuotasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest
 */
const se_ListRequestedServiceQuotaChangeHistoryByQuotaRequest = (
  input: ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest
 */
const se_ListRequestedServiceQuotaChangeHistoryRequest = (
  input: ListRequestedServiceQuotaChangeHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest
 */
const se_ListServiceQuotaIncreaseRequestsInTemplateRequest = (
  input: ListServiceQuotaIncreaseRequestsInTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1ListServiceQuotasRequest
 */
const se_ListServiceQuotasRequest = (input: ListServiceQuotasRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1ListServicesRequest
 */
const se_ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest
 */
const se_PutServiceQuotaIncreaseRequestIntoTemplateRequest = (
  input: PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.DesiredValue != null && { DesiredValue: __serializeFloat(input.DesiredValue) }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1RequestServiceQuotaIncreaseRequest
 */
const se_RequestServiceQuotaIncreaseRequest = (
  input: RequestServiceQuotaIncreaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredValue != null && { DesiredValue: __serializeFloat(input.DesiredValue) }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_InputTags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_InputTagKeys(input.TagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateServiceQuotaTemplateResponse
 */
const de_AssociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): AssociateServiceQuotaTemplateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AWSServiceAccessNotEnabledException
 */
const de_AWSServiceAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): AWSServiceAccessNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse
 */
const de_DeleteServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceQuotaIncreaseRequestFromTemplateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DependencyAccessDeniedException
 */
const de_DependencyAccessDeniedException = (output: any, context: __SerdeContext): DependencyAccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse
 */
const de_DisassociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): DisassociateServiceQuotaTemplateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ErrorReason
 */
const de_ErrorReason = (output: any, context: __SerdeContext): ErrorReason => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse
 */
const de_GetAssociationForServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetAssociationForServiceQuotaTemplateResponse => {
  return {
    ServiceQuotaTemplateAssociationStatus: __expectString(output.ServiceQuotaTemplateAssociationStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse
 */
const de_GetAWSDefaultServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetAWSDefaultServiceQuotaResponse => {
  return {
    Quota: output.Quota != null ? de_ServiceQuota(output.Quota, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse
 */
const de_GetRequestedServiceQuotaChangeResponse = (
  output: any,
  context: __SerdeContext
): GetRequestedServiceQuotaChangeResponse => {
  return {
    RequestedQuota:
      output.RequestedQuota != null ? de_RequestedServiceQuotaChange(output.RequestedQuota, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse
 */
const de_GetServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaIncreaseRequestFromTemplateResponse => {
  return {
    ServiceQuotaIncreaseRequestInTemplate:
      output.ServiceQuotaIncreaseRequestInTemplate != null
        ? de_ServiceQuotaIncreaseRequestInTemplate(output.ServiceQuotaIncreaseRequestInTemplate, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetServiceQuotaResponse
 */
const de_GetServiceQuotaResponse = (output: any, context: __SerdeContext): GetServiceQuotaResponse => {
  return {
    Quota: output.Quota != null ? de_ServiceQuota(output.Quota, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IllegalArgumentException
 */
const de_IllegalArgumentException = (output: any, context: __SerdeContext): IllegalArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPaginationTokenException
 */
const de_InvalidPaginationTokenException = (output: any, context: __SerdeContext): InvalidPaginationTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResourceStateException
 */
const de_InvalidResourceStateException = (output: any, context: __SerdeContext): InvalidResourceStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse
 */
const de_ListAWSDefaultServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListAWSDefaultServiceQuotasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Quotas: output.Quotas != null ? de_ServiceQuotaListDefinition(output.Quotas, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse
 */
const de_ListRequestedServiceQuotaChangeHistoryByQuotaResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryByQuotaResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RequestedQuotas:
      output.RequestedQuotas != null
        ? de_RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse
 */
const de_ListRequestedServiceQuotaChangeHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RequestedQuotas:
      output.RequestedQuotas != null
        ? de_RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse
 */
const de_ListServiceQuotaIncreaseRequestsInTemplateResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotaIncreaseRequestsInTemplateResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceQuotaIncreaseRequestInTemplateList:
      output.ServiceQuotaIncreaseRequestInTemplateList != null
        ? de_ServiceQuotaIncreaseRequestInTemplateList(output.ServiceQuotaIncreaseRequestInTemplateList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServiceQuotasResponse
 */
const de_ListServiceQuotasResponse = (output: any, context: __SerdeContext): ListServiceQuotasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Quotas: output.Quotas != null ? de_ServiceQuotaListDefinition(output.Quotas, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServicesResponse
 */
const de_ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Services: output.Services != null ? de_ServiceInfoListDefinition(output.Services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_OutputTags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricDimensionsMapDefinition
 */
const de_MetricDimensionsMapDefinition = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MetricInfo
 */
const de_MetricInfo = (output: any, context: __SerdeContext): MetricInfo => {
  return {
    MetricDimensions:
      output.MetricDimensions != null ? de_MetricDimensionsMapDefinition(output.MetricDimensions, context) : undefined,
    MetricName: __expectString(output.MetricName),
    MetricNamespace: __expectString(output.MetricNamespace),
    MetricStatisticRecommendation: __expectString(output.MetricStatisticRecommendation),
  } as any;
};

/**
 * deserializeAws_json1_1NoAvailableOrganizationException
 */
const de_NoAvailableOrganizationException = (
  output: any,
  context: __SerdeContext
): NoAvailableOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NoSuchResourceException
 */
const de_NoSuchResourceException = (output: any, context: __SerdeContext): NoSuchResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationNotInAllFeaturesModeException
 */
const de_OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OutputTags
 */
const de_OutputTags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse
 */
const de_PutServiceQuotaIncreaseRequestIntoTemplateResponse = (
  output: any,
  context: __SerdeContext
): PutServiceQuotaIncreaseRequestIntoTemplateResponse => {
  return {
    ServiceQuotaIncreaseRequestInTemplate:
      output.ServiceQuotaIncreaseRequestInTemplate != null
        ? de_ServiceQuotaIncreaseRequestInTemplate(output.ServiceQuotaIncreaseRequestInTemplate, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QuotaExceededException
 */
const de_QuotaExceededException = (output: any, context: __SerdeContext): QuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1QuotaPeriod
 */
const de_QuotaPeriod = (output: any, context: __SerdeContext): QuotaPeriod => {
  return {
    PeriodUnit: __expectString(output.PeriodUnit),
    PeriodValue: __expectInt32(output.PeriodValue),
  } as any;
};

/**
 * deserializeAws_json1_1RequestedServiceQuotaChange
 */
const de_RequestedServiceQuotaChange = (output: any, context: __SerdeContext): RequestedServiceQuotaChange => {
  return {
    CaseId: __expectString(output.CaseId),
    Created:
      output.Created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Created))) : undefined,
    DesiredValue: __limitedParseDouble(output.DesiredValue),
    GlobalQuota: __expectBoolean(output.GlobalQuota),
    Id: __expectString(output.Id),
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    QuotaArn: __expectString(output.QuotaArn),
    QuotaCode: __expectString(output.QuotaCode),
    QuotaName: __expectString(output.QuotaName),
    Requester: __expectString(output.Requester),
    ServiceCode: __expectString(output.ServiceCode),
    ServiceName: __expectString(output.ServiceName),
    Status: __expectString(output.Status),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition
 */
const de_RequestedServiceQuotaChangeHistoryListDefinition = (
  output: any,
  context: __SerdeContext
): RequestedServiceQuotaChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RequestedServiceQuotaChange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RequestServiceQuotaIncreaseResponse
 */
const de_RequestServiceQuotaIncreaseResponse = (
  output: any,
  context: __SerdeContext
): RequestServiceQuotaIncreaseResponse => {
  return {
    RequestedQuota:
      output.RequestedQuota != null ? de_RequestedServiceQuotaChange(output.RequestedQuota, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceException
 */
const de_ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceInfo
 */
const de_ServiceInfo = (output: any, context: __SerdeContext): ServiceInfo => {
  return {
    ServiceCode: __expectString(output.ServiceCode),
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceInfoListDefinition
 */
const de_ServiceInfoListDefinition = (output: any, context: __SerdeContext): ServiceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceQuota
 */
const de_ServiceQuota = (output: any, context: __SerdeContext): ServiceQuota => {
  return {
    Adjustable: __expectBoolean(output.Adjustable),
    ErrorReason: output.ErrorReason != null ? de_ErrorReason(output.ErrorReason, context) : undefined,
    GlobalQuota: __expectBoolean(output.GlobalQuota),
    Period: output.Period != null ? de_QuotaPeriod(output.Period, context) : undefined,
    QuotaArn: __expectString(output.QuotaArn),
    QuotaCode: __expectString(output.QuotaCode),
    QuotaName: __expectString(output.QuotaName),
    ServiceCode: __expectString(output.ServiceCode),
    ServiceName: __expectString(output.ServiceName),
    Unit: __expectString(output.Unit),
    UsageMetric: output.UsageMetric != null ? de_MetricInfo(output.UsageMetric, context) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate
 */
const de_ServiceQuotaIncreaseRequestInTemplate = (
  output: any,
  context: __SerdeContext
): ServiceQuotaIncreaseRequestInTemplate => {
  return {
    AwsRegion: __expectString(output.AwsRegion),
    DesiredValue: __limitedParseDouble(output.DesiredValue),
    GlobalQuota: __expectBoolean(output.GlobalQuota),
    QuotaCode: __expectString(output.QuotaCode),
    QuotaName: __expectString(output.QuotaName),
    ServiceCode: __expectString(output.ServiceCode),
    ServiceName: __expectString(output.ServiceName),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList
 */
const de_ServiceQuotaIncreaseRequestInTemplateList = (
  output: any,
  context: __SerdeContext
): ServiceQuotaIncreaseRequestInTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceQuotaIncreaseRequestInTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceQuotaListDefinition
 */
const de_ServiceQuotaListDefinition = (output: any, context: __SerdeContext): ServiceQuota[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceQuota(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceQuotaTemplateNotInUseException
 */
const de_ServiceQuotaTemplateNotInUseException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaTemplateNotInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagPolicyViolationException
 */
const de_TagPolicyViolationException = (output: any, context: __SerdeContext): TagPolicyViolationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TemplatesNotAvailableInRegionException
 */
const de_TemplatesNotAvailableInRegionException = (
  output: any,
  context: __SerdeContext
): TemplatesNotAvailableInRegionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
