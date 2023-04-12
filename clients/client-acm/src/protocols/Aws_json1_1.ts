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

/**
 * serializeAws_json1_1AddTagsToCertificateCommand
 */
export const se_AddTagsToCertificateCommand = async (
  input: AddTagsToCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToCertificate");
  let body: any;
  body = JSON.stringify(se_AddTagsToCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCertificateCommand
 */
export const se_DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCertificate");
  let body: any;
  body = JSON.stringify(se_DeleteCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCertificateCommand
 */
export const se_DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCertificate");
  let body: any;
  body = JSON.stringify(se_DescribeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExportCertificateCommand
 */
export const se_ExportCertificateCommand = async (
  input: ExportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportCertificate");
  let body: any;
  body = JSON.stringify(se_ExportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAccountConfigurationCommand
 */
export const se_GetAccountConfigurationCommand = async (
  input: GetAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountConfiguration");
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCertificateCommand
 */
export const se_GetCertificateCommand = async (
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCertificate");
  let body: any;
  body = JSON.stringify(se_GetCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportCertificateCommand
 */
export const se_ImportCertificateCommand = async (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportCertificate");
  let body: any;
  body = JSON.stringify(se_ImportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCertificatesCommand
 */
export const se_ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCertificates");
  let body: any;
  body = JSON.stringify(se_ListCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForCertificateCommand
 */
export const se_ListTagsForCertificateCommand = async (
  input: ListTagsForCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForCertificate");
  let body: any;
  body = JSON.stringify(se_ListTagsForCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAccountConfigurationCommand
 */
export const se_PutAccountConfigurationCommand = async (
  input: PutAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAccountConfiguration");
  let body: any;
  body = JSON.stringify(se_PutAccountConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromCertificateCommand
 */
export const se_RemoveTagsFromCertificateCommand = async (
  input: RemoveTagsFromCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromCertificate");
  let body: any;
  body = JSON.stringify(se_RemoveTagsFromCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RenewCertificateCommand
 */
export const se_RenewCertificateCommand = async (
  input: RenewCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RenewCertificate");
  let body: any;
  body = JSON.stringify(se_RenewCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RequestCertificateCommand
 */
export const se_RequestCertificateCommand = async (
  input: RequestCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RequestCertificate");
  let body: any;
  body = JSON.stringify(se_RequestCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResendValidationEmailCommand
 */
export const se_ResendValidationEmailCommand = async (
  input: ResendValidationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResendValidationEmail");
  let body: any;
  body = JSON.stringify(se_ResendValidationEmailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCertificateOptionsCommand
 */
export const se_UpdateCertificateOptionsCommand = async (
  input: UpdateCertificateOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCertificateOptions");
  let body: any;
  body = JSON.stringify(se_UpdateCertificateOptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsToCertificateCommand
 */
export const de_AddTagsToCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsToCertificateCommandError
 */
const de_AddTagsToCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
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
 * deserializeAws_json1_1DeleteCertificateCommand
 */
export const de_DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCertificateCommandError
 */
const de_DeleteCertificateCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.acm#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acm#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.acm#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCertificateCommand
 */
export const de_DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCertificateResponse(data, context);
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCertificateCommandError
 */
const de_DescribeCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ExportCertificateCommand
 */
export const de_ExportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportCertificateResponse(data, context);
  const response: ExportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExportCertificateCommandError
 */
const de_ExportCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acm#RequestInProgressException":
      throw await de_RequestInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAccountConfigurationCommand
 */
export const de_GetAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountConfigurationResponse(data, context);
  const response: GetAccountConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAccountConfigurationCommandError
 */
const de_GetAccountConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCertificateCommand
 */
export const de_GetCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCertificateResponse(data, context);
  const response: GetCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCertificateCommandError
 */
const de_GetCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acm#RequestInProgressException":
      throw await de_RequestInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportCertificateCommand
 */
export const de_ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportCertificateResponse(data, context);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportCertificateCommandError
 */
const de_ImportCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
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
 * deserializeAws_json1_1ListCertificatesCommand
 */
export const de_ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCertificatesResponse(data, context);
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCertificatesCommandError
 */
const de_ListCertificatesCommandError = async (
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
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.acm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForCertificateCommand
 */
export const de_ListTagsForCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForCertificateResponse(data, context);
  const response: ListTagsForCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForCertificateCommandError
 */
const de_ListTagsForCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutAccountConfigurationCommand
 */
export const de_PutAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAccountConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutAccountConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAccountConfigurationCommandError
 */
const de_PutAccountConfigurationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.acm#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.acm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveTagsFromCertificateCommand
 */
export const de_RemoveTagsFromCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsFromCertificateCommandError
 */
const de_RemoveTagsFromCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.acm#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RenewCertificateCommand
 */
export const de_RenewCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RenewCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RenewCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RenewCertificateCommandError
 */
const de_RenewCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RequestCertificateCommand
 */
export const de_RequestCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RequestCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RequestCertificateResponse(data, context);
  const response: RequestCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RequestCertificateCommandError
 */
const de_RequestCertificateCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidDomainValidationOptionsException":
    case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
      throw await de_InvalidDomainValidationOptionsExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.acm#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acm#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.acm#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acm#TooManyTagsException":
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
 * deserializeAws_json1_1ResendValidationEmailCommand
 */
export const de_ResendValidationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendValidationEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResendValidationEmailCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResendValidationEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResendValidationEmailCommandError
 */
const de_ResendValidationEmailCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidDomainValidationOptionsException":
    case "com.amazonaws.acm#InvalidDomainValidationOptionsException":
      throw await de_InvalidDomainValidationOptionsExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateCertificateOptionsCommand
 */
export const de_UpdateCertificateOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCertificateOptionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateCertificateOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCertificateOptionsCommandError
 */
const de_UpdateCertificateOptionsCommandError = async (
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
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArgsExceptionRes
 */
const de_InvalidArgsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidArgsException(body, context);
  const exception = new InvalidArgsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArnExceptionRes
 */
const de_InvalidArnExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidArnException(body, context);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDomainValidationOptionsExceptionRes
 */
const de_InvalidDomainValidationOptionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDomainValidationOptionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDomainValidationOptionsException(body, context);
  const exception = new InvalidDomainValidationOptionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidStateException(body, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagExceptionRes
 */
const de_InvalidTagExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagException(body, context);
  const exception = new InvalidTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RequestInProgressExceptionRes
 */
const de_RequestInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestInProgressException(body, context);
  const exception = new RequestInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagPolicyExceptionRes
 */
const de_TagPolicyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagPolicyException(body, context);
  const exception = new TagPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
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
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddTagsToCertificateRequest
 */
const se_AddTagsToCertificateRequest = (input: AddTagsToCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CertificateOptions
 */
const se_CertificateOptions = (input: CertificateOptions, context: __SerdeContext): any => {
  return {
    ...(input.CertificateTransparencyLoggingPreference != null && {
      CertificateTransparencyLoggingPreference: input.CertificateTransparencyLoggingPreference,
    }),
  };
};

/**
 * serializeAws_json1_1CertificateStatuses
 */
const se_CertificateStatuses = (input: (CertificateStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteCertificateRequest
 */
const se_DeleteCertificateRequest = (input: DeleteCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCertificateRequest
 */
const se_DescribeCertificateRequest = (input: DescribeCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

/**
 * serializeAws_json1_1DomainList
 */
const se_DomainList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DomainValidationOption
 */
const se_DomainValidationOption = (input: DomainValidationOption, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.ValidationDomain != null && { ValidationDomain: input.ValidationDomain }),
  };
};

/**
 * serializeAws_json1_1DomainValidationOptionList
 */
const se_DomainValidationOptionList = (input: DomainValidationOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DomainValidationOption(entry, context);
    });
};

/**
 * serializeAws_json1_1ExpiryEventsConfiguration
 */
const se_ExpiryEventsConfiguration = (input: ExpiryEventsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DaysBeforeExpiry != null && { DaysBeforeExpiry: input.DaysBeforeExpiry }),
  };
};

/**
 * serializeAws_json1_1ExportCertificateRequest
 */
const se_ExportCertificateRequest = (input: ExportCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Passphrase != null && { Passphrase: context.base64Encoder(input.Passphrase) }),
  };
};

/**
 * serializeAws_json1_1ExtendedKeyUsageFilterList
 */
const se_ExtendedKeyUsageFilterList = (input: (ExtendedKeyUsageName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filters, context: __SerdeContext): any => {
  return {
    ...(input.extendedKeyUsage != null && {
      extendedKeyUsage: se_ExtendedKeyUsageFilterList(input.extendedKeyUsage, context),
    }),
    ...(input.keyTypes != null && { keyTypes: se_KeyAlgorithmList(input.keyTypes, context) }),
    ...(input.keyUsage != null && { keyUsage: se_KeyUsageFilterList(input.keyUsage, context) }),
  };
};

/**
 * serializeAws_json1_1GetCertificateRequest
 */
const se_GetCertificateRequest = (input: GetCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

/**
 * serializeAws_json1_1ImportCertificateRequest
 */
const se_ImportCertificateRequest = (input: ImportCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: context.base64Encoder(input.Certificate) }),
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.CertificateChain != null && { CertificateChain: context.base64Encoder(input.CertificateChain) }),
    ...(input.PrivateKey != null && { PrivateKey: context.base64Encoder(input.PrivateKey) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1KeyAlgorithmList
 */
const se_KeyAlgorithmList = (input: (KeyAlgorithm | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1KeyUsageFilterList
 */
const se_KeyUsageFilterList = (input: (KeyUsageName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListCertificatesRequest
 */
const se_ListCertificatesRequest = (input: ListCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateStatuses != null && {
      CertificateStatuses: se_CertificateStatuses(input.CertificateStatuses, context),
    }),
    ...(input.Includes != null && { Includes: se_Filters(input.Includes, context) }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1ListTagsForCertificateRequest
 */
const se_ListTagsForCertificateRequest = (input: ListTagsForCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

/**
 * serializeAws_json1_1PutAccountConfigurationRequest
 */
const se_PutAccountConfigurationRequest = (input: PutAccountConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExpiryEvents != null && { ExpiryEvents: se_ExpiryEventsConfiguration(input.ExpiryEvents, context) }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsFromCertificateRequest
 */
const se_RemoveTagsFromCertificateRequest = (input: RemoveTagsFromCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1RenewCertificateRequest
 */
const se_RenewCertificateRequest = (input: RenewCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

/**
 * serializeAws_json1_1RequestCertificateRequest
 */
const se_RequestCertificateRequest = (input: RequestCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DomainValidationOptions != null && {
      DomainValidationOptions: se_DomainValidationOptionList(input.DomainValidationOptions, context),
    }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.KeyAlgorithm != null && { KeyAlgorithm: input.KeyAlgorithm }),
    ...(input.Options != null && { Options: se_CertificateOptions(input.Options, context) }),
    ...(input.SubjectAlternativeNames != null && {
      SubjectAlternativeNames: se_DomainList(input.SubjectAlternativeNames, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.ValidationMethod != null && { ValidationMethod: input.ValidationMethod }),
  };
};

/**
 * serializeAws_json1_1ResendValidationEmailRequest
 */
const se_ResendValidationEmailRequest = (input: ResendValidationEmailRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.ValidationDomain != null && { ValidationDomain: input.ValidationDomain }),
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
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1UpdateCertificateOptionsRequest
 */
const se_UpdateCertificateOptionsRequest = (input: UpdateCertificateOptionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.Options != null && { Options: se_CertificateOptions(input.Options, context) }),
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
 * deserializeAws_json1_1CertificateDetail
 */
const de_CertificateDetail = (output: any, context: __SerdeContext): CertificateDetail => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainName: __expectString(output.DomainName),
    DomainValidationOptions:
      output.DomainValidationOptions != null
        ? de_DomainValidationList(output.DomainValidationOptions, context)
        : undefined,
    ExtendedKeyUsages:
      output.ExtendedKeyUsages != null ? de_ExtendedKeyUsageList(output.ExtendedKeyUsages, context) : undefined,
    FailureReason: __expectString(output.FailureReason),
    ImportedAt:
      output.ImportedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ImportedAt))) : undefined,
    InUseBy: output.InUseBy != null ? de_InUseList(output.InUseBy, context) : undefined,
    IssuedAt:
      output.IssuedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.IssuedAt))) : undefined,
    Issuer: __expectString(output.Issuer),
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    KeyUsages: output.KeyUsages != null ? de_KeyUsageList(output.KeyUsages, context) : undefined,
    NotAfter:
      output.NotAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotAfter))) : undefined,
    NotBefore:
      output.NotBefore != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotBefore))) : undefined,
    Options: output.Options != null ? de_CertificateOptions(output.Options, context) : undefined,
    RenewalEligibility: __expectString(output.RenewalEligibility),
    RenewalSummary: output.RenewalSummary != null ? de_RenewalSummary(output.RenewalSummary, context) : undefined,
    RevocationReason: __expectString(output.RevocationReason),
    RevokedAt:
      output.RevokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RevokedAt))) : undefined,
    Serial: __expectString(output.Serial),
    SignatureAlgorithm: __expectString(output.SignatureAlgorithm),
    Status: __expectString(output.Status),
    Subject: __expectString(output.Subject),
    SubjectAlternativeNames:
      output.SubjectAlternativeNames != null ? de_DomainList(output.SubjectAlternativeNames, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateOptions
 */
const de_CertificateOptions = (output: any, context: __SerdeContext): CertificateOptions => {
  return {
    CertificateTransparencyLoggingPreference: __expectString(output.CertificateTransparencyLoggingPreference),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateSummary
 */
const de_CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DomainName: __expectString(output.DomainName),
    Exported: __expectBoolean(output.Exported),
    ExtendedKeyUsages:
      output.ExtendedKeyUsages != null ? de_ExtendedKeyUsageNames(output.ExtendedKeyUsages, context) : undefined,
    HasAdditionalSubjectAlternativeNames: __expectBoolean(output.HasAdditionalSubjectAlternativeNames),
    ImportedAt:
      output.ImportedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ImportedAt))) : undefined,
    InUse: __expectBoolean(output.InUse),
    IssuedAt:
      output.IssuedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.IssuedAt))) : undefined,
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    KeyUsages: output.KeyUsages != null ? de_KeyUsageNames(output.KeyUsages, context) : undefined,
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
        ? de_DomainList(output.SubjectAlternativeNameSummaries, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateSummaryList
 */
const de_CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCertificateResponse
 */
const de_DescribeCertificateResponse = (output: any, context: __SerdeContext): DescribeCertificateResponse => {
  return {
    Certificate: output.Certificate != null ? de_CertificateDetail(output.Certificate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1DomainValidation
 */
const de_DomainValidation = (output: any, context: __SerdeContext): DomainValidation => {
  return {
    DomainName: __expectString(output.DomainName),
    ResourceRecord: output.ResourceRecord != null ? de_ResourceRecord(output.ResourceRecord, context) : undefined,
    ValidationDomain: __expectString(output.ValidationDomain),
    ValidationEmails:
      output.ValidationEmails != null ? de_ValidationEmailList(output.ValidationEmails, context) : undefined,
    ValidationMethod: __expectString(output.ValidationMethod),
    ValidationStatus: __expectString(output.ValidationStatus),
  } as any;
};

/**
 * deserializeAws_json1_1DomainValidationList
 */
const de_DomainValidationList = (output: any, context: __SerdeContext): DomainValidation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainValidation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExpiryEventsConfiguration
 */
const de_ExpiryEventsConfiguration = (output: any, context: __SerdeContext): ExpiryEventsConfiguration => {
  return {
    DaysBeforeExpiry: __expectInt32(output.DaysBeforeExpiry),
  } as any;
};

/**
 * deserializeAws_json1_1ExportCertificateResponse
 */
const de_ExportCertificateResponse = (output: any, context: __SerdeContext): ExportCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
    PrivateKey: __expectString(output.PrivateKey),
  } as any;
};

/**
 * deserializeAws_json1_1ExtendedKeyUsage
 */
const de_ExtendedKeyUsage = (output: any, context: __SerdeContext): ExtendedKeyUsage => {
  return {
    Name: __expectString(output.Name),
    OID: __expectString(output.OID),
  } as any;
};

/**
 * deserializeAws_json1_1ExtendedKeyUsageList
 */
const de_ExtendedKeyUsageList = (output: any, context: __SerdeContext): ExtendedKeyUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExtendedKeyUsage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExtendedKeyUsageNames
 */
const de_ExtendedKeyUsageNames = (output: any, context: __SerdeContext): (ExtendedKeyUsageName | string)[] => {
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

/**
 * deserializeAws_json1_1GetAccountConfigurationResponse
 */
const de_GetAccountConfigurationResponse = (output: any, context: __SerdeContext): GetAccountConfigurationResponse => {
  return {
    ExpiryEvents: output.ExpiryEvents != null ? de_ExpiryEventsConfiguration(output.ExpiryEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCertificateResponse
 */
const de_GetCertificateResponse = (output: any, context: __SerdeContext): GetCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
  } as any;
};

/**
 * deserializeAws_json1_1ImportCertificateResponse
 */
const de_ImportCertificateResponse = (output: any, context: __SerdeContext): ImportCertificateResponse => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
  } as any;
};

/**
 * deserializeAws_json1_1InUseList
 */
const de_InUseList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1InvalidArgsException
 */
const de_InvalidArgsException = (output: any, context: __SerdeContext): InvalidArgsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArnException
 */
const de_InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDomainValidationOptionsException
 */
const de_InvalidDomainValidationOptionsException = (
  output: any,
  context: __SerdeContext
): InvalidDomainValidationOptionsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidStateException
 */
const de_InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagException
 */
const de_InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KeyUsage
 */
const de_KeyUsage = (output: any, context: __SerdeContext): KeyUsage => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1KeyUsageList
 */
const de_KeyUsageList = (output: any, context: __SerdeContext): KeyUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyUsage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1KeyUsageNames
 */
const de_KeyUsageNames = (output: any, context: __SerdeContext): (KeyUsageName | string)[] => {
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

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListCertificatesResponse
 */
const de_ListCertificatesResponse = (output: any, context: __SerdeContext): ListCertificatesResponse => {
  return {
    CertificateSummaryList:
      output.CertificateSummaryList != null
        ? de_CertificateSummaryList(output.CertificateSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForCertificateResponse
 */
const de_ListTagsForCertificateResponse = (output: any, context: __SerdeContext): ListTagsForCertificateResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RenewalSummary
 */
const de_RenewalSummary = (output: any, context: __SerdeContext): RenewalSummary => {
  return {
    DomainValidationOptions:
      output.DomainValidationOptions != null
        ? de_DomainValidationList(output.DomainValidationOptions, context)
        : undefined,
    RenewalStatus: __expectString(output.RenewalStatus),
    RenewalStatusReason: __expectString(output.RenewalStatusReason),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RequestCertificateResponse
 */
const de_RequestCertificateResponse = (output: any, context: __SerdeContext): RequestCertificateResponse => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
  } as any;
};

/**
 * deserializeAws_json1_1RequestInProgressException
 */
const de_RequestInProgressException = (output: any, context: __SerdeContext): RequestInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceRecord
 */
const de_ResourceRecord = (output: any, context: __SerdeContext): ResourceRecord => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
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
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TagPolicyException
 */
const de_TagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationEmailList
 */
const de_ValidationEmailList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `CertificateManager.${operation}`,
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
