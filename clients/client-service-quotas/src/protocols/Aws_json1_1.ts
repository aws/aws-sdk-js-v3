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

export const serializeAws_json1_1AssociateServiceQuotaTemplateCommand = async (
  input: AssociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.AssociateServiceQuotaTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateServiceQuotaTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateServiceQuotaTemplateCommand = async (
  input: DisassociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateServiceQuotaTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = async (
  input: GetAssociationForServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAWSDefaultServiceQuotaCommand = async (
  input: GetAWSDefaultServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetAWSDefaultServiceQuota",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAWSDefaultServiceQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRequestedServiceQuotaChangeCommand = async (
  input: GetRequestedServiceQuotaChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetRequestedServiceQuotaChange",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRequestedServiceQuotaChangeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceQuotaCommand = async (
  input: GetServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetServiceQuota",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetServiceQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAWSDefaultServiceQuotasCommand = async (
  input: ListAWSDefaultServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAWSDefaultServiceQuotasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = async (
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServiceQuotasCommand = async (
  input: ListServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListServiceQuotas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServiceQuotasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (
  input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RequestServiceQuotaIncreaseCommand = async (
  input: RequestServiceQuotaIncreaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.RequestServiceQuotaIncrease",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RequestServiceQuotaIncreaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ServiceQuotasV20190624.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceQuotaTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateServiceQuotaTemplateResponse(data, context);
  const response: AssociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError = async (
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
      throw await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.servicequotas#OrganizationNotInAllFeaturesModeException":
      throw await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
  const response: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError = async (
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
      throw await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceQuotaTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse(data, context);
  const response: DisassociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError = async (
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
      throw await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaTemplateNotInUseException":
    case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
      throw await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse(data, context);
  const response: GetAssociationForServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError = async (
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
      throw await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "ServiceQuotaTemplateNotInUseException":
    case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
      throw await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSDefaultServiceQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse(data, context);
  const response: GetAWSDefaultServiceQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestedServiceQuotaChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse(data, context);
  const response: GetRequestedServiceQuotaChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetServiceQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetServiceQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceQuotaResponse(data, context);
  const response: GetServiceQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetServiceQuotaCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse(data, context);
  const response: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError = async (
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
      throw await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse(data, context);
  const response: ListAWSDefaultServiceQuotasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse(data, context);
  const response: ListRequestedServiceQuotaChangeHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse(data, context);
  const response: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse(data, context);
  const response: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError = async (
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
      throw await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListServiceQuotasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServiceQuotasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServiceQuotasResponse(data, context);
  const response: ListServiceQuotasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServiceQuotasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServicesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      throw await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse(data, context);
  const response: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError = async (
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
      throw await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      throw await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "QuotaExceededException":
    case "com.amazonaws.servicequotas#QuotaExceededException":
      throw await deserializeAws_json1_1QuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      throw await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RequestServiceQuotaIncreaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestServiceQuotaIncreaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RequestServiceQuotaIncreaseResponse(data, context);
  const response: RequestServiceQuotaIncreaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      throw await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.servicequotas#InvalidResourceStateException":
      throw await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "QuotaExceededException":
    case "com.amazonaws.servicequotas#QuotaExceededException":
      throw await deserializeAws_json1_1QuotaExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.servicequotas#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TagPolicyViolationException":
    case "com.amazonaws.servicequotas#TagPolicyViolationException":
      throw await deserializeAws_json1_1TagPolicyViolationExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.servicequotas#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      throw await deserializeAws_json1_1IllegalArgumentExceptionResponse(parsedOutput, context);
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      throw await deserializeAws_json1_1NoSuchResourceExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AWSServiceAccessNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AWSServiceAccessNotEnabledException(body, context);
  const exception = new AWSServiceAccessNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DependencyAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DependencyAccessDeniedException(body, context);
  const exception = new DependencyAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IllegalArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalArgumentException(body, context);
  const exception = new IllegalArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(body, context);
  const exception = new InvalidResourceStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAvailableOrganizationException(body, context);
  const exception = new NoAvailableOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoSuchResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchResourceException(body, context);
  const exception = new NoSuchResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(body, context);
  const exception = new OrganizationNotInAllFeaturesModeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1QuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1QuotaExceededException(body, context);
  const exception = new QuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(body, context);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaTemplateNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaTemplateNotInUseException(body, context);
  const exception = new ServiceQuotaTemplateNotInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagPolicyViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagPolicyViolationException(body, context);
  const exception = new TagPolicyViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemplatesNotAvailableInRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TemplatesNotAvailableInRegionException(body, context);
  const exception = new TemplatesNotAvailableInRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AssociateServiceQuotaTemplateRequest = (
  input: AssociateServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1DisassociateServiceQuotaTemplateRequest = (
  input: DisassociateServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest = (
  input: GetAssociationForServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetAWSDefaultServiceQuotaRequest = (
  input: GetAWSDefaultServiceQuotaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1GetRequestedServiceQuotaChangeRequest = (
  input: GetRequestedServiceQuotaChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequestId != null && { RequestId: input.RequestId }),
  };
};

const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: GetServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion != null && { AwsRegion: input.AwsRegion }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1GetServiceQuotaRequest = (input: GetServiceQuotaRequest, context: __SerdeContext): any => {
  return {
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1InputTagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InputTags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1ListAWSDefaultServiceQuotasRequest = (
  input: ListAWSDefaultServiceQuotasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest = (
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

const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest = (
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

const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest = (
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

const serializeAws_json1_1ListServiceQuotasRequest = (
  input: ListServiceQuotasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest = (
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

const serializeAws_json1_1RequestServiceQuotaIncreaseRequest = (
  input: RequestServiceQuotaIncreaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredValue != null && { DesiredValue: __serializeFloat(input.DesiredValue) }),
    ...(input.QuotaCode != null && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode != null && { ServiceCode: input.ServiceCode }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1InputTags(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1InputTagKeys(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AssociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): AssociateServiceQuotaTemplateResponse => {
  return {} as any;
};

const deserializeAws_json1_1AWSServiceAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): AWSServiceAccessNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceQuotaIncreaseRequestFromTemplateResponse => {
  return {} as any;
};

const deserializeAws_json1_1DependencyAccessDeniedException = (
  output: any,
  context: __SerdeContext
): DependencyAccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): DisassociateServiceQuotaTemplateResponse => {
  return {} as any;
};

const deserializeAws_json1_1ErrorReason = (output: any, context: __SerdeContext): ErrorReason => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetAssociationForServiceQuotaTemplateResponse => {
  return {
    ServiceQuotaTemplateAssociationStatus: __expectString(output.ServiceQuotaTemplateAssociationStatus),
  } as any;
};

const deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetAWSDefaultServiceQuotaResponse => {
  return {
    Quota: output.Quota != null ? deserializeAws_json1_1ServiceQuota(output.Quota, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse = (
  output: any,
  context: __SerdeContext
): GetRequestedServiceQuotaChangeResponse => {
  return {
    RequestedQuota:
      output.RequestedQuota != null
        ? deserializeAws_json1_1RequestedServiceQuotaChange(output.RequestedQuota, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaIncreaseRequestFromTemplateResponse => {
  return {
    ServiceQuotaIncreaseRequestInTemplate:
      output.ServiceQuotaIncreaseRequestInTemplate != null
        ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(
            output.ServiceQuotaIncreaseRequestInTemplate,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaResponse => {
  return {
    Quota: output.Quota != null ? deserializeAws_json1_1ServiceQuota(output.Quota, context) : undefined,
  } as any;
};

const deserializeAws_json1_1IllegalArgumentException = (
  output: any,
  context: __SerdeContext
): IllegalArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListAWSDefaultServiceQuotasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Quotas:
      output.Quotas != null ? deserializeAws_json1_1ServiceQuotaListDefinition(output.Quotas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryByQuotaResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RequestedQuotas:
      output.RequestedQuotas != null
        ? deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RequestedQuotas:
      output.RequestedQuotas != null
        ? deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(output.RequestedQuotas, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotaIncreaseRequestsInTemplateResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceQuotaIncreaseRequestInTemplateList:
      output.ServiceQuotaIncreaseRequestInTemplateList != null
        ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList(
            output.ServiceQuotaIncreaseRequestInTemplateList,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Quotas:
      output.Quotas != null ? deserializeAws_json1_1ServiceQuotaListDefinition(output.Quotas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Services:
      output.Services != null ? deserializeAws_json1_1ServiceInfoListDefinition(output.Services, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1OutputTags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MetricDimensionsMapDefinition = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1MetricInfo = (output: any, context: __SerdeContext): MetricInfo => {
  return {
    MetricDimensions:
      output.MetricDimensions != null
        ? deserializeAws_json1_1MetricDimensionsMapDefinition(output.MetricDimensions, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    MetricNamespace: __expectString(output.MetricNamespace),
    MetricStatisticRecommendation: __expectString(output.MetricStatisticRecommendation),
  } as any;
};

const deserializeAws_json1_1NoAvailableOrganizationException = (
  output: any,
  context: __SerdeContext
): NoAvailableOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NoSuchResourceException = (
  output: any,
  context: __SerdeContext
): NoSuchResourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OutputTags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse = (
  output: any,
  context: __SerdeContext
): PutServiceQuotaIncreaseRequestIntoTemplateResponse => {
  return {
    ServiceQuotaIncreaseRequestInTemplate:
      output.ServiceQuotaIncreaseRequestInTemplate != null
        ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(
            output.ServiceQuotaIncreaseRequestInTemplate,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1QuotaExceededException = (output: any, context: __SerdeContext): QuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1QuotaPeriod = (output: any, context: __SerdeContext): QuotaPeriod => {
  return {
    PeriodUnit: __expectString(output.PeriodUnit),
    PeriodValue: __expectInt32(output.PeriodValue),
  } as any;
};

const deserializeAws_json1_1RequestedServiceQuotaChange = (
  output: any,
  context: __SerdeContext
): RequestedServiceQuotaChange => {
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

const deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition = (
  output: any,
  context: __SerdeContext
): RequestedServiceQuotaChange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RequestedServiceQuotaChange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RequestServiceQuotaIncreaseResponse = (
  output: any,
  context: __SerdeContext
): RequestServiceQuotaIncreaseResponse => {
  return {
    RequestedQuota:
      output.RequestedQuota != null
        ? deserializeAws_json1_1RequestedServiceQuotaChange(output.RequestedQuota, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceInfo = (output: any, context: __SerdeContext): ServiceInfo => {
  return {
    ServiceCode: __expectString(output.ServiceCode),
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

const deserializeAws_json1_1ServiceInfoListDefinition = (output: any, context: __SerdeContext): ServiceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceQuota = (output: any, context: __SerdeContext): ServiceQuota => {
  return {
    Adjustable: __expectBoolean(output.Adjustable),
    ErrorReason:
      output.ErrorReason != null ? deserializeAws_json1_1ErrorReason(output.ErrorReason, context) : undefined,
    GlobalQuota: __expectBoolean(output.GlobalQuota),
    Period: output.Period != null ? deserializeAws_json1_1QuotaPeriod(output.Period, context) : undefined,
    QuotaArn: __expectString(output.QuotaArn),
    QuotaCode: __expectString(output.QuotaCode),
    QuotaName: __expectString(output.QuotaName),
    ServiceCode: __expectString(output.ServiceCode),
    ServiceName: __expectString(output.ServiceName),
    Unit: __expectString(output.Unit),
    UsageMetric: output.UsageMetric != null ? deserializeAws_json1_1MetricInfo(output.UsageMetric, context) : undefined,
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate = (
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

const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList = (
  output: any,
  context: __SerdeContext
): ServiceQuotaIncreaseRequestInTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceQuotaListDefinition = (output: any, context: __SerdeContext): ServiceQuota[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceQuota(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceQuotaTemplateNotInUseException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaTemplateNotInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagPolicyViolationException = (
  output: any,
  context: __SerdeContext
): TagPolicyViolationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TemplatesNotAvailableInRegionException = (
  output: any,
  context: __SerdeContext
): TemplatesNotAvailableInRegionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
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
