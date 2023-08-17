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

import { CreateAliasCommandInput, CreateAliasCommandOutput } from "../commands/CreateAliasCommand";
import { CreateKeyCommandInput, CreateKeyCommandOutput } from "../commands/CreateKeyCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "../commands/DeleteAliasCommand";
import { DeleteKeyCommandInput, DeleteKeyCommandOutput } from "../commands/DeleteKeyCommand";
import { ExportKeyCommandInput, ExportKeyCommandOutput } from "../commands/ExportKeyCommand";
import { GetAliasCommandInput, GetAliasCommandOutput } from "../commands/GetAliasCommand";
import { GetKeyCommandInput, GetKeyCommandOutput } from "../commands/GetKeyCommand";
import {
  GetParametersForExportCommandInput,
  GetParametersForExportCommandOutput,
} from "../commands/GetParametersForExportCommand";
import {
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
} from "../commands/GetParametersForImportCommand";
import {
  GetPublicKeyCertificateCommandInput,
  GetPublicKeyCertificateCommandOutput,
} from "../commands/GetPublicKeyCertificateCommand";
import { ImportKeyCommandInput, ImportKeyCommandOutput } from "../commands/ImportKeyCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RestoreKeyCommandInput, RestoreKeyCommandOutput } from "../commands/RestoreKeyCommand";
import { StartKeyUsageCommandInput, StartKeyUsageCommandOutput } from "../commands/StartKeyUsageCommand";
import { StopKeyUsageCommandInput, StopKeyUsageCommandOutput } from "../commands/StopKeyUsageCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "../commands/UpdateAliasCommand";
import {
  AccessDeniedException,
  ConflictException,
  CreateAliasInput,
  CreateKeyInput,
  CreateKeyOutput,
  DeleteAliasInput,
  DeleteKeyInput,
  DeleteKeyOutput,
  ExportKeyInput,
  ExportKeyMaterial,
  ExportTr31KeyBlock,
  ExportTr34KeyBlock,
  GetAliasInput,
  GetKeyInput,
  GetKeyOutput,
  GetParametersForExportInput,
  GetParametersForExportOutput,
  GetParametersForImportInput,
  GetParametersForImportOutput,
  GetPublicKeyCertificateInput,
  ImportKeyInput,
  ImportKeyMaterial,
  ImportKeyOutput,
  ImportTr31KeyBlock,
  ImportTr34KeyBlock,
  InternalServerException,
  Key,
  KeyAttributes,
  KeyModesOfUse,
  ListAliasesInput,
  ListKeysInput,
  ListTagsForResourceInput,
  ResourceNotFoundException,
  RestoreKeyInput,
  RestoreKeyOutput,
  RootCertificatePublicKey,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  StartKeyUsageInput,
  StartKeyUsageOutput,
  StopKeyUsageInput,
  StopKeyUsageOutput,
  Tag,
  TagResourceInput,
  ThrottlingException,
  TrustedCertificatePublicKey,
  UntagResourceInput,
  UpdateAliasInput,
  ValidationException,
} from "../models/models_0";
import { PaymentCryptographyServiceException as __BaseException } from "../models/PaymentCryptographyServiceException";

/**
 * serializeAws_json1_0CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateKeyCommand
 */
export const se_CreateKeyCommand = async (
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAliasCommand
 */
export const se_DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteKeyCommand
 */
export const se_DeleteKeyCommand = async (
  input: DeleteKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExportKeyCommand
 */
export const se_ExportKeyCommand = async (
  input: ExportKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAliasCommand
 */
export const se_GetAliasCommand = async (
  input: GetAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetKeyCommand
 */
export const se_GetKeyCommand = async (input: GetKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetParametersForExportCommand
 */
export const se_GetParametersForExportCommand = async (
  input: GetParametersForExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetParametersForExport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetParametersForImportCommand
 */
export const se_GetParametersForImportCommand = async (
  input: GetParametersForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetParametersForImport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPublicKeyCertificateCommand
 */
export const se_GetPublicKeyCertificateCommand = async (
  input: GetPublicKeyCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPublicKeyCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ImportKeyCommand
 */
export const se_ImportKeyCommand = async (
  input: ImportKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAliases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListKeysCommand
 */
export const se_ListKeysCommand = async (
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListKeys");
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
 * serializeAws_json1_0RestoreKeyCommand
 */
export const se_RestoreKeyCommand = async (
  input: RestoreKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartKeyUsageCommand
 */
export const se_StartKeyUsageCommand = async (
  input: StartKeyUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartKeyUsage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StopKeyUsageCommand
 */
export const se_StopKeyUsageCommand = async (
  input: StopKeyUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopKeyUsage");
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
 * serializeAws_json1_0UpdateAliasCommand
 */
export const se_UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateAliasCommand
 */
export const de_CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateAliasCommandError
 */
const de_CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0CreateKeyCommand
 */
export const de_CreateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateKeyOutput(data, context);
  const response: CreateKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateKeyCommandError
 */
const de_CreateKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0DeleteAliasCommand
 */
export const de_DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteAliasCommandError
 */
const de_DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0DeleteKeyCommand
 */
export const de_DeleteKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteKeyOutput(data, context);
  const response: DeleteKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteKeyCommandError
 */
const de_DeleteKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0ExportKeyCommand
 */
export const de_ExportKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ExportKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ExportKeyCommandError
 */
const de_ExportKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0GetAliasCommand
 */
export const de_GetAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAliasCommandError
 */
const de_GetAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0GetKeyCommand
 */
export const de_GetKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetKeyOutput(data, context);
  const response: GetKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetKeyCommandError
 */
const de_GetKeyCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0GetParametersForExportCommand
 */
export const de_GetParametersForExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParametersForExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParametersForExportOutput(data, context);
  const response: GetParametersForExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetParametersForExportCommandError
 */
const de_GetParametersForExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0GetParametersForImportCommand
 */
export const de_GetParametersForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetParametersForImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetParametersForImportOutput(data, context);
  const response: GetParametersForImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetParametersForImportCommandError
 */
const de_GetParametersForImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParametersForImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0GetPublicKeyCertificateCommand
 */
export const de_GetPublicKeyCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPublicKeyCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPublicKeyCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPublicKeyCertificateCommandError
 */
const de_GetPublicKeyCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0ImportKeyCommand
 */
export const de_ImportKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportKeyOutput(data, context);
  const response: ImportKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ImportKeyCommandError
 */
const de_ImportKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAliasesCommandError
 */
const de_ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0ListKeysCommand
 */
export const de_ListKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListKeysCommandError
 */
const de_ListKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
 * deserializeAws_json1_0ListTagsForResourceCommandError
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
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0RestoreKeyCommand
 */
export const de_RestoreKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreKeyOutput(data, context);
  const response: RestoreKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RestoreKeyCommandError
 */
const de_RestoreKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0StartKeyUsageCommand
 */
export const de_StartKeyUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartKeyUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartKeyUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartKeyUsageOutput(data, context);
  const response: StartKeyUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartKeyUsageCommandError
 */
const de_StartKeyUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartKeyUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0StopKeyUsageCommand
 */
export const de_StopKeyUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopKeyUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopKeyUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopKeyUsageOutput(data, context);
  const response: StopKeyUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StopKeyUsageCommandError
 */
const de_StopKeyUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopKeyUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0TagResourceCommandError
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
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.paymentcryptography#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0UpdateAliasCommand
 */
export const de_UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateAliasCommandError
 */
const de_UpdateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptography#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.paymentcryptography#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptography#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptography#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.paymentcryptography#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptography#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptography#ValidationException":
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
 * deserializeAws_json1_0ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceUnavailableException({
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

// se_CreateAliasInput omitted.

// se_CreateKeyInput omitted.

// se_DeleteAliasInput omitted.

// se_DeleteKeyInput omitted.

// se_ExportKeyInput omitted.

// se_ExportKeyMaterial omitted.

// se_ExportTr31KeyBlock omitted.

// se_ExportTr34KeyBlock omitted.

// se_GetAliasInput omitted.

// se_GetKeyInput omitted.

// se_GetParametersForExportInput omitted.

// se_GetParametersForImportInput omitted.

// se_GetPublicKeyCertificateInput omitted.

// se_ImportKeyInput omitted.

// se_ImportKeyMaterial omitted.

// se_ImportTr31KeyBlock omitted.

// se_ImportTr34KeyBlock omitted.

// se_KeyAttributes omitted.

// se_KeyModesOfUse omitted.

// se_ListAliasesInput omitted.

// se_ListKeysInput omitted.

// se_ListTagsForResourceInput omitted.

// se_RestoreKeyInput omitted.

// se_RootCertificatePublicKey omitted.

// se_StartKeyUsageInput omitted.

// se_StopKeyUsageInput omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceInput omitted.

// se_Tags omitted.

// se_TrustedCertificatePublicKey omitted.

// se_UntagResourceInput omitted.

// se_UpdateAliasInput omitted.

// de_AccessDeniedException omitted.

// de_Alias omitted.

// de_Aliases omitted.

// de_ConflictException omitted.

// de_CreateAliasOutput omitted.

/**
 * deserializeAws_json1_0CreateKeyOutput
 */
const de_CreateKeyOutput = (output: any, context: __SerdeContext): CreateKeyOutput => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

// de_DeleteAliasOutput omitted.

/**
 * deserializeAws_json1_0DeleteKeyOutput
 */
const de_DeleteKeyOutput = (output: any, context: __SerdeContext): DeleteKeyOutput => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

// de_ExportKeyOutput omitted.

// de_GetAliasOutput omitted.

/**
 * deserializeAws_json1_0GetKeyOutput
 */
const de_GetKeyOutput = (output: any, context: __SerdeContext): GetKeyOutput => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetParametersForExportOutput
 */
const de_GetParametersForExportOutput = (output: any, context: __SerdeContext): GetParametersForExportOutput => {
  return take(output, {
    ExportToken: __expectString,
    ParametersValidUntilTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SigningKeyAlgorithm: __expectString,
    SigningKeyCertificate: __expectString,
    SigningKeyCertificateChain: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetParametersForImportOutput
 */
const de_GetParametersForImportOutput = (output: any, context: __SerdeContext): GetParametersForImportOutput => {
  return take(output, {
    ImportToken: __expectString,
    ParametersValidUntilTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WrappingKeyAlgorithm: __expectString,
    WrappingKeyCertificate: __expectString,
    WrappingKeyCertificateChain: __expectString,
  }) as any;
};

// de_GetPublicKeyCertificateOutput omitted.

/**
 * deserializeAws_json1_0ImportKeyOutput
 */
const de_ImportKeyOutput = (output: any, context: __SerdeContext): ImportKeyOutput => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0Key
 */
const de_Key = (output: any, context: __SerdeContext): Key => {
  return take(output, {
    CreateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletePendingTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeleteTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Enabled: __expectBoolean,
    Exportable: __expectBoolean,
    KeyArn: __expectString,
    KeyAttributes: _json,
    KeyCheckValue: __expectString,
    KeyCheckValueAlgorithm: __expectString,
    KeyOrigin: __expectString,
    KeyState: __expectString,
    UsageStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UsageStopTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_KeyAttributes omitted.

// de_KeyModesOfUse omitted.

// de_KeySummary omitted.

// de_KeySummaryList omitted.

// de_ListAliasesOutput omitted.

// de_ListKeysOutput omitted.

// de_ListTagsForResourceOutput omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0RestoreKeyOutput
 */
const de_RestoreKeyOutput = (output: any, context: __SerdeContext): RestoreKeyOutput => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

// de_ServiceQuotaExceededException omitted.

// de_ServiceUnavailableException omitted.

/**
 * deserializeAws_json1_0StartKeyUsageOutput
 */
const de_StartKeyUsageOutput = (output: any, context: __SerdeContext): StartKeyUsageOutput => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0StopKeyUsageOutput
 */
const de_StopKeyUsageOutput = (output: any, context: __SerdeContext): StopKeyUsageOutput => {
  return take(output, {
    Key: (_: any) => de_Key(_, context),
  }) as any;
};

// de_Tag omitted.

// de_TagResourceOutput omitted.

// de_Tags omitted.

// de_ThrottlingException omitted.

// de_UntagResourceOutput omitted.

// de_UpdateAliasOutput omitted.

// de_ValidationException omitted.

// de_WrappedKey omitted.

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
    "x-amz-target": `PaymentCryptographyControlPlane.${operation}`,
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
