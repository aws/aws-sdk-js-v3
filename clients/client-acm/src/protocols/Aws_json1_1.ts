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
  DomainValidationOption,
  ExpiryEventsConfiguration,
  ExportCertificateRequest,
  ExtendedKeyUsageName,
  Filters,
  GetCertificateRequest,
  ImportCertificateRequest,
  InvalidArgsException,
  InvalidArnException,
  InvalidDomainValidationOptionsException,
  InvalidParameterException,
  InvalidStateException,
  InvalidTagException,
  KeyAlgorithm,
  KeyUsageName,
  LimitExceededException,
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListTagsForCertificateRequest,
  PutAccountConfigurationRequest,
  RemoveTagsFromCertificateRequest,
  RenewalSummary,
  RenewCertificateRequest,
  RequestCertificateRequest,
  RequestInProgressException,
  ResendValidationEmailRequest,
  ResourceInUseException,
  ResourceNotFoundException,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ExportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAccountConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RequestCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
 * deserializeAws_json1_1ConflictExceptionRes
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
 * deserializeAws_json1_1InvalidArgsExceptionRes
 */
const de_InvalidArgsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddTagsToCertificateRequest omitted.

// se_CertificateOptions omitted.

// se_CertificateStatuses omitted.

// se_DeleteCertificateRequest omitted.

// se_DescribeCertificateRequest omitted.

// se_DomainList omitted.

// se_DomainValidationOption omitted.

// se_DomainValidationOptionList omitted.

// se_ExpiryEventsConfiguration omitted.

/**
 * serializeAws_json1_1ExportCertificateRequest
 */
const se_ExportCertificateRequest = (input: ExportCertificateRequest, context: __SerdeContext): any => {
  return take(input, {
    CertificateArn: [],
    Passphrase: context.base64Encoder,
  });
};

// se_ExtendedKeyUsageFilterList omitted.

// se_Filters omitted.

// se_GetCertificateRequest omitted.

/**
 * serializeAws_json1_1ImportCertificateRequest
 */
const se_ImportCertificateRequest = (input: ImportCertificateRequest, context: __SerdeContext): any => {
  return take(input, {
    Certificate: context.base64Encoder,
    CertificateArn: [],
    CertificateChain: context.base64Encoder,
    PrivateKey: context.base64Encoder,
    Tags: _json,
  });
};

// se_KeyAlgorithmList omitted.

// se_KeyUsageFilterList omitted.

// se_ListCertificatesRequest omitted.

// se_ListTagsForCertificateRequest omitted.

// se_PutAccountConfigurationRequest omitted.

// se_RemoveTagsFromCertificateRequest omitted.

// se_RenewCertificateRequest omitted.

// se_RequestCertificateRequest omitted.

// se_ResendValidationEmailRequest omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_UpdateCertificateOptionsRequest omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1CertificateDetail
 */
const de_CertificateDetail = (output: any, context: __SerdeContext): CertificateDetail => {
  return take(output, {
    CertificateArn: __expectString,
    CertificateAuthorityArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    DomainValidationOptions: _json,
    ExtendedKeyUsages: _json,
    FailureReason: __expectString,
    ImportedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InUseBy: _json,
    IssuedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Issuer: __expectString,
    KeyAlgorithm: __expectString,
    KeyUsages: _json,
    NotAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Options: _json,
    RenewalEligibility: __expectString,
    RenewalSummary: (_: any) => de_RenewalSummary(_, context),
    RevocationReason: __expectString,
    RevokedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Serial: __expectString,
    SignatureAlgorithm: __expectString,
    Status: __expectString,
    Subject: __expectString,
    SubjectAlternativeNames: _json,
    Type: __expectString,
  }) as any;
};

// de_CertificateOptions omitted.

/**
 * deserializeAws_json1_1CertificateSummary
 */
const de_CertificateSummary = (output: any, context: __SerdeContext): CertificateSummary => {
  return take(output, {
    CertificateArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    Exported: __expectBoolean,
    ExtendedKeyUsages: _json,
    HasAdditionalSubjectAlternativeNames: __expectBoolean,
    ImportedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InUse: __expectBoolean,
    IssuedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KeyAlgorithm: __expectString,
    KeyUsages: _json,
    NotAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RenewalEligibility: __expectString,
    RevokedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    SubjectAlternativeNameSummaries: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CertificateSummaryList
 */
const de_CertificateSummaryList = (output: any, context: __SerdeContext): CertificateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CertificateSummary(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_1DescribeCertificateResponse
 */
const de_DescribeCertificateResponse = (output: any, context: __SerdeContext): DescribeCertificateResponse => {
  return take(output, {
    Certificate: (_: any) => de_CertificateDetail(_, context),
  }) as any;
};

// de_DomainList omitted.

// de_DomainValidation omitted.

// de_DomainValidationList omitted.

// de_ExpiryEventsConfiguration omitted.

// de_ExportCertificateResponse omitted.

// de_ExtendedKeyUsage omitted.

// de_ExtendedKeyUsageList omitted.

// de_ExtendedKeyUsageNames omitted.

// de_GetAccountConfigurationResponse omitted.

// de_GetCertificateResponse omitted.

// de_ImportCertificateResponse omitted.

// de_InUseList omitted.

// de_InvalidArgsException omitted.

// de_InvalidArnException omitted.

// de_InvalidDomainValidationOptionsException omitted.

// de_InvalidParameterException omitted.

// de_InvalidStateException omitted.

// de_InvalidTagException omitted.

// de_KeyUsage omitted.

// de_KeyUsageList omitted.

// de_KeyUsageNames omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListCertificatesResponse
 */
const de_ListCertificatesResponse = (output: any, context: __SerdeContext): ListCertificatesResponse => {
  return take(output, {
    CertificateSummaryList: (_: any) => de_CertificateSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForCertificateResponse omitted.

/**
 * deserializeAws_json1_1RenewalSummary
 */
const de_RenewalSummary = (output: any, context: __SerdeContext): RenewalSummary => {
  return take(output, {
    DomainValidationOptions: _json,
    RenewalStatus: __expectString,
    RenewalStatusReason: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_RequestCertificateResponse omitted.

// de_RequestInProgressException omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceRecord omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagPolicyException omitted.

// de_ThrottlingException omitted.

// de_TooManyTagsException omitted.

// de_ValidationEmailList omitted.

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
