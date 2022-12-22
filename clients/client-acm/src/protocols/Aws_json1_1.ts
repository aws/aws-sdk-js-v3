// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput,
} from "../commands/AddTagsToCertificateCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "../commands/DeleteCertificateCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "../commands/DescribeCertificateCommand";
import { ExportCertificateCommandInput, ExportCertificateCommandOutput } from "../commands/ExportCertificateCommand";
import {
  GetAccountConfigurationCommandInput,
  GetAccountConfigurationCommandOutput,
} from "../commands/GetAccountConfigurationCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "../commands/GetCertificateCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "../commands/ImportCertificateCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "../commands/ListCertificatesCommand";
import {
  ListTagsForCertificateCommandInput,
  ListTagsForCertificateCommandOutput,
} from "../commands/ListTagsForCertificateCommand";
import {
  PutAccountConfigurationCommandInput,
  PutAccountConfigurationCommandOutput,
} from "../commands/PutAccountConfigurationCommand";
import {
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput,
} from "../commands/RemoveTagsFromCertificateCommand";
import { RenewCertificateCommandInput, RenewCertificateCommandOutput } from "../commands/RenewCertificateCommand";
import { RequestCertificateCommandInput, RequestCertificateCommandOutput } from "../commands/RequestCertificateCommand";
import {
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput,
} from "../commands/ResendValidationEmailCommand";
import {
  UpdateCertificateOptionsCommandInput,
  UpdateCertificateOptionsCommandOutput,
} from "../commands/UpdateCertificateOptionsCommand";
import { ACMServiceException as __BaseException } from "../models/ACMServiceException";
import {
  AccessDeniedException,
  AddTagsToCertificateRequest,
  CertificateDetail,
  CertificateOptions,
  CertificateStatus,
  CertificateSummary,
  ConflictException,
  DeleteCertificateRequest,
  DescribeCertificateRequest,
  DescribeCertificateResponse,
  DomainValidation,
  DomainValidationOption,
  ExpiryEventsConfiguration,
  ExportCertificateRequest,
  ExportCertificateResponse,
  ExtendedKeyUsage,
  ExtendedKeyUsageName,
  Filters,
  GetAccountConfigurationResponse,
  GetCertificateRequest,
  GetCertificateResponse,
  ImportCertificateRequest,
  ImportCertificateResponse,
  InvalidArgsException,
  InvalidArnException,
  InvalidDomainValidationOptionsException,
  InvalidParameterException,
  InvalidStateException,
  InvalidTagException,
  KeyAlgorithm,
  KeyUsage,
  KeyUsageName,
  LimitExceededException,
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListTagsForCertificateRequest,
  ListTagsForCertificateResponse,
  PutAccountConfigurationRequest,
  RemoveTagsFromCertificateRequest,
  RenewalSummary,
  RenewCertificateRequest,
  RequestCertificateRequest,
  RequestCertificateResponse,
  RequestInProgressException,
  ResendValidationEmailRequest,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceRecord,
  Tag,
  TagPolicyException,
  ThrottlingException,
  TooManyTagsException,
  UpdateCertificateOptionsRequest,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_1AddTagsToCertificateCommand = async (
  input: AddTagsToCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.AddTagsToCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.DeleteCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.DescribeCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExportCertificateCommand = async (
  input: ExportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ExportCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccountConfigurationCommand = async (
  input: GetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.GetAccountConfiguration",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateCommand = async (
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.GetCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCertificateCommand = async (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ImportCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ListCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForCertificateCommand = async (
  input: ListTagsForCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ListTagsForCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAccountConfigurationCommand = async (
  input: PutAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.PutAccountConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAccountConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromCertificateCommand = async (
  input: RemoveTagsFromCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.RemoveTagsFromCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RenewCertificateCommand = async (
  input: RenewCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.RenewCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RenewCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RequestCertificateCommand = async (
  input: RequestCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.RequestCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RequestCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResendValidationEmailCommand = async (
  input: ResendValidationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.ResendValidationEmail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResendValidationEmailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCertificateOptionsCommand = async (
  input: UpdateCertificateOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CertificateManager.UpdateCertificateOptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCertificateOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
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

export const deserializeAws_json1_1DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.acm#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.acm#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.acm#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateResponse(data, context);
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportCertificateResponse(data, context);
  const response: ExportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExportCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acm#RequestInProgressException":
      throw await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAccountConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccountConfigurationResponse(data, context);
  const response: GetAccountConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAccountConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.acm#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateResponse(data, context);
  const response: GetCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acm#RequestInProgressException":
      throw await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
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

export const deserializeAws_json1_1ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificatesResponse(data, context);
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acm#InvalidArgsException":
      throw await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.acm#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForCertificateResponse(data, context);
  const response: ListTagsForCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAccountConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutAccountConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAccountConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.acm#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.acm#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.acm#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RemoveTagsFromCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RenewCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RenewCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RenewCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RenewCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RequestCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RequestCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RequestCertificateResponse(data, context);
  const response: RequestCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RequestCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidDomainValidationOptionsException":
    case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
      throw await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
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

export const deserializeAws_json1_1ResendValidationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendValidationEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResendValidationEmailCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResendValidationEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResendValidationEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendValidationEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidDomainValidationOptionsException":
    case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
      throw await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acm#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateCertificateOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCertificateOptionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateCertificateOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCertificateOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acm#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidArgsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgsException(body, context);
  const exception = new InvalidArgsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(body, context);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDomainValidationOptionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDomainValidationOptionsException(body, context);
  const exception = new InvalidDomainValidationOptionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(body, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(body, context);
  const exception = new InvalidTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RequestInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestInProgressException(body, context);
  const exception = new RequestInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagPolicyException(body, context);
  const exception = new TagPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
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

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddTagsToCertificateRequest = (
  input: AddTagsToCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CertificateOptions = (input: CertificateOptions, context: __SerdeContext): any => {
  return {
    ...(input.CertificateTransparencyLoggingPreference != null && {
      CertificateTransparencyLoggingPreference: input.CertificateTransparencyLoggingPreference,
    }),
  };
};

const serializeAws_json1_1CertificateStatuses = (
  input: (CertificateStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteCertificateRequest = (
  input: DeleteCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

const serializeAws_json1_1DescribeCertificateRequest = (
  input: DescribeCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

const serializeAws_json1_1DomainList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DomainValidationOption = (input: DomainValidationOption, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.ValidationDomain != null && { ValidationDomain: input.ValidationDomain }),
  };
};

const serializeAws_json1_1DomainValidationOptionList = (
  input: DomainValidationOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DomainValidationOption(entry, context);
    });
};

const serializeAws_json1_1ExpiryEventsConfiguration = (
  input: ExpiryEventsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DaysBeforeExpiry != null && { DaysBeforeExpiry: input.DaysBeforeExpiry }),
  };
};

const serializeAws_json1_1ExportCertificateRequest = (
  input: ExportCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Passphrase != null && { Passphrase: context.base64Encoder(input.Passphrase) }),
  };
};

const serializeAws_json1_1ExtendedKeyUsageFilterList = (
  input: (ExtendedKeyUsageName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Filters = (input: Filters, context: __SerdeContext): any => {
  return {
    ...(input.extendedKeyUsage != null && {
      extendedKeyUsage: serializeAws_json1_1ExtendedKeyUsageFilterList(input.extendedKeyUsage, context),
    }),
    ...(input.keyTypes != null && { keyTypes: serializeAws_json1_1KeyAlgorithmList(input.keyTypes, context) }),
    ...(input.keyUsage != null && { keyUsage: serializeAws_json1_1KeyUsageFilterList(input.keyUsage, context) }),
  };
};

const serializeAws_json1_1GetCertificateRequest = (input: GetCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

const serializeAws_json1_1ImportCertificateRequest = (
  input: ImportCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate != null && { Certificate: context.base64Encoder(input.Certificate) }),
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.CertificateChain != null && { CertificateChain: context.base64Encoder(input.CertificateChain) }),
    ...(input.PrivateKey != null && { PrivateKey: context.base64Encoder(input.PrivateKey) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1KeyAlgorithmList = (input: (KeyAlgorithm | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1KeyUsageFilterList = (input: (KeyUsageName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListCertificatesRequest = (input: ListCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateStatuses != null && {
      CertificateStatuses: serializeAws_json1_1CertificateStatuses(input.CertificateStatuses, context),
    }),
    ...(input.Includes != null && { Includes: serializeAws_json1_1Filters(input.Includes, context) }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1ListTagsForCertificateRequest = (
  input: ListTagsForCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

const serializeAws_json1_1PutAccountConfigurationRequest = (
  input: PutAccountConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExpiryEvents != null && {
      ExpiryEvents: serializeAws_json1_1ExpiryEventsConfiguration(input.ExpiryEvents, context),
    }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
  };
};

const serializeAws_json1_1RemoveTagsFromCertificateRequest = (
  input: RemoveTagsFromCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1RenewCertificateRequest = (input: RenewCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

const serializeAws_json1_1RequestCertificateRequest = (
  input: RequestCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DomainValidationOptions != null && {
      DomainValidationOptions: serializeAws_json1_1DomainValidationOptionList(input.DomainValidationOptions, context),
    }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.KeyAlgorithm != null && { KeyAlgorithm: input.KeyAlgorithm }),
    ...(input.Options != null && { Options: serializeAws_json1_1CertificateOptions(input.Options, context) }),
    ...(input.SubjectAlternativeNames != null && {
      SubjectAlternativeNames: serializeAws_json1_1DomainList(input.SubjectAlternativeNames, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.ValidationMethod != null && { ValidationMethod: input.ValidationMethod }),
  };
};

const serializeAws_json1_1ResendValidationEmailRequest = (
  input: ResendValidationEmailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.ValidationDomain != null && { ValidationDomain: input.ValidationDomain }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1UpdateCertificateOptionsRequest = (
  input: UpdateCertificateOptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Options != null && { Options: serializeAws_json1_1CertificateOptions(input.Options, context) }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CertificateDetail = (output: any, context: __SerdeContext): CertificateDetail => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainName: __expectString(output.DomainName),
    DomainValidationOptions:
      output.DomainValidationOptions != null
        ? deserializeAws_json1_1DomainValidationList(output.DomainValidationOptions, context)
        : undefined,
    ExtendedKeyUsages:
      output.ExtendedKeyUsages != null
        ? deserializeAws_json1_1ExtendedKeyUsageList(output.ExtendedKeyUsages, context)
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    ImportedAt:
      output.ImportedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ImportedAt))) : undefined,
    InUseBy: output.InUseBy != null ? deserializeAws_json1_1InUseList(output.InUseBy, context) : undefined,
    IssuedAt:
      output.IssuedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.IssuedAt))) : undefined,
    Issuer: __expectString(output.Issuer),
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    KeyUsages: output.KeyUsages != null ? deserializeAws_json1_1KeyUsageList(output.KeyUsages, context) : undefined,
    NotAfter:
      output.NotAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotAfter))) : undefined,
    NotBefore:
      output.NotBefore != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotBefore))) : undefined,
    Options: output.Options != null ? deserializeAws_json1_1CertificateOptions(output.Options, context) : undefined,
    RenewalEligibility: __expectString(output.RenewalEligibility),
    RenewalSummary:
      output.RenewalSummary != null ? deserializeAws_json1_1RenewalSummary(output.RenewalSummary, context) : undefined,
    RevocationReason: __expectString(output.RevocationReason),
    RevokedAt:
      output.RevokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RevokedAt))) : undefined,
    Serial: __expectString(output.Serial),
    SignatureAlgorithm: __expectString(output.SignatureAlgorithm),
    Status: __expectString(output.Status),
    Subject: __expectString(output.Subject),
    SubjectAlternativeNames:
      output.SubjectAlternativeNames != null
        ? deserializeAws_json1_1DomainList(output.SubjectAlternativeNames, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1CertificateOptions = (output: any, context: __SerdeContext): CertificateOptions => {
  return {
    CertificateTransparencyLoggingPreference: __expectString(output.CertificateTransparencyLoggingPreference),
  } as any;
};

const deserializeAws_json1_1CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainName: __expectString(output.DomainName),
    Exported: __expectBoolean(output.Exported),
    ExtendedKeyUsages:
      output.ExtendedKeyUsages != null
        ? deserializeAws_json1_1ExtendedKeyUsageNames(output.ExtendedKeyUsages, context)
        : undefined,
    HasAdditionalSubjectAlternativeNames: __expectBoolean(output.HasAdditionalSubjectAlternativeNames),
    ImportedAt:
      output.ImportedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ImportedAt))) : undefined,
    InUse: __expectBoolean(output.InUse),
    IssuedAt:
      output.IssuedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.IssuedAt))) : undefined,
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    KeyUsages: output.KeyUsages != null ? deserializeAws_json1_1KeyUsageNames(output.KeyUsages, context) : undefined,
    NotAfter:
      output.NotAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotAfter))) : undefined,
    NotBefore:
      output.NotBefore != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotBefore))) : undefined,
    RenewalEligibility: __expectString(output.RenewalEligibility),
    RevokedAt:
      output.RevokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RevokedAt))) : undefined,
    Status: __expectString(output.Status),
    SubjectAlternativeNameSummaries:
      output.SubjectAlternativeNameSummaries != null
        ? deserializeAws_json1_1DomainList(output.SubjectAlternativeNameSummaries, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CertificateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DescribeCertificateResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateResponse => {
  return {
    Certificate:
      output.Certificate != null ? deserializeAws_json1_1CertificateDetail(output.Certificate, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DomainList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DomainValidation = (output: any, context: __SerdeContext): DomainValidation => {
  return {
    DomainName: __expectString(output.DomainName),
    ResourceRecord:
      output.ResourceRecord != null ? deserializeAws_json1_1ResourceRecord(output.ResourceRecord, context) : undefined,
    ValidationDomain: __expectString(output.ValidationDomain),
    ValidationEmails:
      output.ValidationEmails != null
        ? deserializeAws_json1_1ValidationEmailList(output.ValidationEmails, context)
        : undefined,
    ValidationMethod: __expectString(output.ValidationMethod),
    ValidationStatus: __expectString(output.ValidationStatus),
  } as any;
};

const deserializeAws_json1_1DomainValidationList = (output: any, context: __SerdeContext): DomainValidation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DomainValidation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExpiryEventsConfiguration = (
  output: any,
  context: __SerdeContext
): ExpiryEventsConfiguration => {
  return {
    DaysBeforeExpiry: __expectInt32(output.DaysBeforeExpiry),
  } as any;
};

const deserializeAws_json1_1ExportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ExportCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
    PrivateKey: __expectString(output.PrivateKey),
  } as any;
};

const deserializeAws_json1_1ExtendedKeyUsage = (output: any, context: __SerdeContext): ExtendedKeyUsage => {
  return {
    Name: __expectString(output.Name),
    OID: __expectString(output.OID),
  } as any;
};

const deserializeAws_json1_1ExtendedKeyUsageList = (output: any, context: __SerdeContext): ExtendedKeyUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExtendedKeyUsage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExtendedKeyUsageNames = (
  output: any,
  context: __SerdeContext
): (ExtendedKeyUsageName | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1GetAccountConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAccountConfigurationResponse => {
  return {
    ExpiryEvents:
      output.ExpiryEvents != null
        ? deserializeAws_json1_1ExpiryEventsConfiguration(output.ExpiryEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetCertificateResponse = (output: any, context: __SerdeContext): GetCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
  } as any;
};

const deserializeAws_json1_1ImportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ImportCertificateResponse => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
  } as any;
};

const deserializeAws_json1_1InUseList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1InvalidArgsException = (output: any, context: __SerdeContext): InvalidArgsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDomainValidationOptionsException = (
  output: any,
  context: __SerdeContext
): InvalidDomainValidationOptionsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KeyUsage = (output: any, context: __SerdeContext): KeyUsage => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1KeyUsageList = (output: any, context: __SerdeContext): KeyUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyUsage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1KeyUsageNames = (output: any, context: __SerdeContext): (KeyUsageName | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListCertificatesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificatesResponse => {
  return {
    CertificateSummaryList:
      output.CertificateSummaryList != null
        ? deserializeAws_json1_1CertificateSummaryList(output.CertificateSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForCertificateResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForCertificateResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RenewalSummary = (output: any, context: __SerdeContext): RenewalSummary => {
  return {
    DomainValidationOptions:
      output.DomainValidationOptions != null
        ? deserializeAws_json1_1DomainValidationList(output.DomainValidationOptions, context)
        : undefined,
    RenewalStatus: __expectString(output.RenewalStatus),
    RenewalStatusReason: __expectString(output.RenewalStatusReason),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1RequestCertificateResponse = (
  output: any,
  context: __SerdeContext
): RequestCertificateResponse => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
  } as any;
};

const deserializeAws_json1_1RequestInProgressException = (
  output: any,
  context: __SerdeContext
): RequestInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1TagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ValidationEmailList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
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
