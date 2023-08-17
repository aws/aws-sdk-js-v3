// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
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
  AWSServiceAccessNotEnabledException,
  DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  DependencyAccessDeniedException,
  DisassociateServiceQuotaTemplateRequest,
  GetAssociationForServiceQuotaTemplateRequest,
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
  ListTagsForResourceRequest,
  NoAvailableOrganizationException,
  NoSuchResourceException,
  OrganizationNotInAllFeaturesModeException,
  PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  PutServiceQuotaIncreaseRequestIntoTemplateResponse,
  QuotaExceededException,
  RequestedServiceQuotaChange,
  RequestServiceQuotaIncreaseRequest,
  RequestServiceQuotaIncreaseResponse,
  ResourceAlreadyExistsException,
  ServiceException,
  ServiceQuota,
  ServiceQuotaIncreaseRequestInTemplate,
  ServiceQuotaTemplateNotInUseException,
  Tag,
  TagPolicyViolationException,
  TagResourceRequest,
  TemplatesNotAvailableInRegionException,
  TooManyRequestsException,
  TooManyTagsException,
  UntagResourceRequest,
} from "../models/models_0";
import { ServiceQuotasServiceException as __BaseException } from "../models/ServiceQuotasServiceException";

/**
 * serializeAws_json1_1AssociateServiceQuotaTemplateCommand
 */
export const se_AssociateServiceQuotaTemplateCommand = async (
  input: AssociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateServiceQuotaTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand
 */
export const se_DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServiceQuotaIncreaseRequestFromTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateServiceQuotaTemplateCommand
 */
export const se_DisassociateServiceQuotaTemplateCommand = async (
  input: DisassociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateServiceQuotaTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand
 */
export const se_GetAssociationForServiceQuotaTemplateCommand = async (
  input: GetAssociationForServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAssociationForServiceQuotaTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAWSDefaultServiceQuotaCommand
 */
export const se_GetAWSDefaultServiceQuotaCommand = async (
  input: GetAWSDefaultServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAWSDefaultServiceQuota");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRequestedServiceQuotaChangeCommand
 */
export const se_GetRequestedServiceQuotaChangeCommand = async (
  input: GetRequestedServiceQuotaChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRequestedServiceQuotaChange");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceQuotaCommand
 */
export const se_GetServiceQuotaCommand = async (
  input: GetServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceQuota");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand
 */
export const se_GetServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceQuotaIncreaseRequestFromTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAWSDefaultServiceQuotasCommand
 */
export const se_ListAWSDefaultServiceQuotasCommand = async (
  input: ListAWSDefaultServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAWSDefaultServiceQuotas");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand
 */
export const se_ListRequestedServiceQuotaChangeHistoryCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRequestedServiceQuotaChangeHistory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand
 */
export const se_ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRequestedServiceQuotaChangeHistoryByQuota");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand
 */
export const se_ListServiceQuotaIncreaseRequestsInTemplateCommand = async (
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceQuotaIncreaseRequestsInTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceQuotasCommand
 */
export const se_ListServiceQuotasCommand = async (
  input: ListServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceQuotas");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
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
 * serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand
 */
export const se_PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (
  input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutServiceQuotaIncreaseRequestIntoTemplate");
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
  const headers: __HeaderBag = sharedHeaders("RequestServiceQuotaIncrease");
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
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
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
  contents = _json(data);
  const response: AssociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAssociationForServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AssociateServiceQuotaTemplateRequest omitted.

// se_DeleteServiceQuotaIncreaseRequestFromTemplateRequest omitted.

// se_DisassociateServiceQuotaTemplateRequest omitted.

// se_GetAssociationForServiceQuotaTemplateRequest omitted.

// se_GetAWSDefaultServiceQuotaRequest omitted.

// se_GetRequestedServiceQuotaChangeRequest omitted.

// se_GetServiceQuotaIncreaseRequestFromTemplateRequest omitted.

// se_GetServiceQuotaRequest omitted.

// se_InputTagKeys omitted.

// se_InputTags omitted.

// se_ListAWSDefaultServiceQuotasRequest omitted.

// se_ListRequestedServiceQuotaChangeHistoryByQuotaRequest omitted.

// se_ListRequestedServiceQuotaChangeHistoryRequest omitted.

// se_ListServiceQuotaIncreaseRequestsInTemplateRequest omitted.

// se_ListServiceQuotasRequest omitted.

// se_ListServicesRequest omitted.

// se_ListTagsForResourceRequest omitted.

/**
 * serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest
 */
const se_PutServiceQuotaIncreaseRequestIntoTemplateRequest = (
  input: PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AwsRegion: [],
    DesiredValue: __serializeFloat,
    QuotaCode: [],
    ServiceCode: [],
  });
};

/**
 * serializeAws_json1_1RequestServiceQuotaIncreaseRequest
 */
const se_RequestServiceQuotaIncreaseRequest = (
  input: RequestServiceQuotaIncreaseRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DesiredValue: __serializeFloat,
    QuotaCode: [],
    ServiceCode: [],
  });
};

// se_Tag omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// de_AccessDeniedException omitted.

// de_AssociateServiceQuotaTemplateResponse omitted.

// de_AWSServiceAccessNotEnabledException omitted.

// de_DeleteServiceQuotaIncreaseRequestFromTemplateResponse omitted.

// de_DependencyAccessDeniedException omitted.

// de_DisassociateServiceQuotaTemplateResponse omitted.

// de_ErrorReason omitted.

// de_GetAssociationForServiceQuotaTemplateResponse omitted.

/**
 * deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse
 */
const de_GetAWSDefaultServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetAWSDefaultServiceQuotaResponse => {
  return take(output, {
    Quota: (_: any) => de_ServiceQuota(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse
 */
const de_GetRequestedServiceQuotaChangeResponse = (
  output: any,
  context: __SerdeContext
): GetRequestedServiceQuotaChangeResponse => {
  return take(output, {
    RequestedQuota: (_: any) => de_RequestedServiceQuotaChange(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse
 */
const de_GetServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaIncreaseRequestFromTemplateResponse => {
  return take(output, {
    ServiceQuotaIncreaseRequestInTemplate: (_: any) => de_ServiceQuotaIncreaseRequestInTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetServiceQuotaResponse
 */
const de_GetServiceQuotaResponse = (output: any, context: __SerdeContext): GetServiceQuotaResponse => {
  return take(output, {
    Quota: (_: any) => de_ServiceQuota(_, context),
  }) as any;
};

// de_IllegalArgumentException omitted.

// de_InvalidPaginationTokenException omitted.

// de_InvalidResourceStateException omitted.

/**
 * deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse
 */
const de_ListAWSDefaultServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListAWSDefaultServiceQuotasResponse => {
  return take(output, {
    NextToken: __expectString,
    Quotas: (_: any) => de_ServiceQuotaListDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse
 */
const de_ListRequestedServiceQuotaChangeHistoryByQuotaResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryByQuotaResponse => {
  return take(output, {
    NextToken: __expectString,
    RequestedQuotas: (_: any) => de_RequestedServiceQuotaChangeHistoryListDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse
 */
const de_ListRequestedServiceQuotaChangeHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryResponse => {
  return take(output, {
    NextToken: __expectString,
    RequestedQuotas: (_: any) => de_RequestedServiceQuotaChangeHistoryListDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse
 */
const de_ListServiceQuotaIncreaseRequestsInTemplateResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotaIncreaseRequestsInTemplateResponse => {
  return take(output, {
    NextToken: __expectString,
    ServiceQuotaIncreaseRequestInTemplateList: (_: any) => de_ServiceQuotaIncreaseRequestInTemplateList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListServiceQuotasResponse
 */
const de_ListServiceQuotasResponse = (output: any, context: __SerdeContext): ListServiceQuotasResponse => {
  return take(output, {
    NextToken: __expectString,
    Quotas: (_: any) => de_ServiceQuotaListDefinition(_, context),
  }) as any;
};

// de_ListServicesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_MetricDimensionsMapDefinition omitted.

// de_MetricInfo omitted.

// de_NoAvailableOrganizationException omitted.

// de_NoSuchResourceException omitted.

// de_OrganizationNotInAllFeaturesModeException omitted.

// de_OutputTags omitted.

/**
 * deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse
 */
const de_PutServiceQuotaIncreaseRequestIntoTemplateResponse = (
  output: any,
  context: __SerdeContext
): PutServiceQuotaIncreaseRequestIntoTemplateResponse => {
  return take(output, {
    ServiceQuotaIncreaseRequestInTemplate: (_: any) => de_ServiceQuotaIncreaseRequestInTemplate(_, context),
  }) as any;
};

// de_QuotaExceededException omitted.

// de_QuotaPeriod omitted.

/**
 * deserializeAws_json1_1RequestedServiceQuotaChange
 */
const de_RequestedServiceQuotaChange = (output: any, context: __SerdeContext): RequestedServiceQuotaChange => {
  return take(output, {
    CaseId: __expectString,
    Created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DesiredValue: __limitedParseDouble,
    GlobalQuota: __expectBoolean,
    Id: __expectString,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    QuotaArn: __expectString,
    QuotaCode: __expectString,
    QuotaName: __expectString,
    Requester: __expectString,
    ServiceCode: __expectString,
    ServiceName: __expectString,
    Status: __expectString,
    Unit: __expectString,
  }) as any;
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
  return take(output, {
    RequestedQuota: (_: any) => de_RequestedServiceQuotaChange(_, context),
  }) as any;
};

// de_ResourceAlreadyExistsException omitted.

// de_ServiceException omitted.

// de_ServiceInfo omitted.

// de_ServiceInfoListDefinition omitted.

/**
 * deserializeAws_json1_1ServiceQuota
 */
const de_ServiceQuota = (output: any, context: __SerdeContext): ServiceQuota => {
  return take(output, {
    Adjustable: __expectBoolean,
    ErrorReason: _json,
    GlobalQuota: __expectBoolean,
    Period: _json,
    QuotaArn: __expectString,
    QuotaCode: __expectString,
    QuotaName: __expectString,
    ServiceCode: __expectString,
    ServiceName: __expectString,
    Unit: __expectString,
    UsageMetric: _json,
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate
 */
const de_ServiceQuotaIncreaseRequestInTemplate = (
  output: any,
  context: __SerdeContext
): ServiceQuotaIncreaseRequestInTemplate => {
  return take(output, {
    AwsRegion: __expectString,
    DesiredValue: __limitedParseDouble,
    GlobalQuota: __expectBoolean,
    QuotaCode: __expectString,
    QuotaName: __expectString,
    ServiceCode: __expectString,
    ServiceName: __expectString,
    Unit: __expectString,
  }) as any;
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
      return de_ServiceQuota(entry, context);
    });
  return retVal;
};

// de_ServiceQuotaTemplateNotInUseException omitted.

// de_Tag omitted.

// de_TagPolicyViolationException omitted.

// de_TagResourceResponse omitted.

// de_TemplatesNotAvailableInRegionException omitted.

// de_TooManyRequestsException omitted.

// de_TooManyTagsException omitted.

// de_UntagResourceResponse omitted.

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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `ServiceQuotasV20190624.${operation}`,
  };
}

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
