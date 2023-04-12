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
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
} from "../commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
} from "../commands/CreateCertificateAuthorityCommand";
import { CreatePermissionCommandInput, CreatePermissionCommandOutput } from "../commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
} from "../commands/DeleteCertificateAuthorityCommand";
import { DeletePermissionCommandInput, DeletePermissionCommandOutput } from "../commands/DeletePermissionCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput,
} from "../commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
} from "../commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
} from "../commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
} from "../commands/GetCertificateAuthorityCsrCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "../commands/GetCertificateCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import {
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput,
} from "../commands/ImportCertificateAuthorityCertificateCommand";
import { IssueCertificateCommandInput, IssueCertificateCommandOutput } from "../commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "../commands/ListCertificateAuthoritiesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "../commands/PutPolicyCommand";
import {
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
} from "../commands/RestoreCertificateAuthorityCommand";
import { RevokeCertificateCommandInput, RevokeCertificateCommandOutput } from "../commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
} from "../commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
} from "../commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
} from "../commands/UpdateCertificateAuthorityCommand";
import { ACMPCAServiceException as __BaseException } from "../models/ACMPCAServiceException";
import {
  AccessDescription,
  AccessMethod,
  ActionType,
  ApiPassthrough,
  ASN1Subject,
  CertificateAuthority,
  CertificateAuthorityConfiguration,
  CertificateMismatchException,
  ConcurrentModificationException,
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportResponse,
  CreateCertificateAuthorityRequest,
  CreateCertificateAuthorityResponse,
  CreatePermissionRequest,
  CrlConfiguration,
  CsrExtensions,
  CustomAttribute,
  CustomExtension,
  DeleteCertificateAuthorityRequest,
  DeletePermissionRequest,
  DeletePolicyRequest,
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportResponse,
  DescribeCertificateAuthorityRequest,
  DescribeCertificateAuthorityResponse,
  EdiPartyName,
  ExtendedKeyUsage,
  Extensions,
  GeneralName,
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateResponse,
  GetCertificateAuthorityCsrRequest,
  GetCertificateAuthorityCsrResponse,
  GetCertificateRequest,
  GetCertificateResponse,
  GetPolicyRequest,
  GetPolicyResponse,
  ImportCertificateAuthorityCertificateRequest,
  InvalidArgsException,
  InvalidArnException,
  InvalidNextTokenException,
  InvalidPolicyException,
  InvalidRequestException,
  InvalidStateException,
  InvalidTagException,
  IssueCertificateRequest,
  IssueCertificateResponse,
  KeyUsage,
  LimitExceededException,
  ListCertificateAuthoritiesRequest,
  ListCertificateAuthoritiesResponse,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListTagsRequest,
  ListTagsResponse,
  LockoutPreventedException,
  MalformedCertificateException,
  MalformedCSRException,
  OcspConfiguration,
  OtherName,
  Permission,
  PermissionAlreadyExistsException,
  PolicyInformation,
  PolicyQualifierInfo,
  PutPolicyRequest,
  Qualifier,
  RequestAlreadyProcessedException,
  RequestFailedException,
  RequestInProgressException,
  ResourceNotFoundException,
  RestoreCertificateAuthorityRequest,
  RevocationConfiguration,
  RevokeCertificateRequest,
  Tag,
  TagCertificateAuthorityRequest,
  TooManyTagsException,
  UntagCertificateAuthorityRequest,
  UpdateCertificateAuthorityRequest,
  Validity,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateCertificateAuthorityCommand
 */
export const se_CreateCertificateAuthorityCommand = async (
  input: CreateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCertificateAuthority");
  let body: any;
  body = JSON.stringify(se_CreateCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand
 */
export const se_CreateCertificateAuthorityAuditReportCommand = async (
  input: CreateCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCertificateAuthorityAuditReport");
  let body: any;
  body = JSON.stringify(se_CreateCertificateAuthorityAuditReportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePermissionCommand
 */
export const se_CreatePermissionCommand = async (
  input: CreatePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePermission");
  let body: any;
  body = JSON.stringify(se_CreatePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCertificateAuthorityCommand
 */
export const se_DeleteCertificateAuthorityCommand = async (
  input: DeleteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCertificateAuthority");
  let body: any;
  body = JSON.stringify(se_DeleteCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePermissionCommand
 */
export const se_DeletePermissionCommand = async (
  input: DeletePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePermission");
  let body: any;
  body = JSON.stringify(se_DeletePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicy");
  let body: any;
  body = JSON.stringify(se_DeletePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCertificateAuthorityCommand
 */
export const se_DescribeCertificateAuthorityCommand = async (
  input: DescribeCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCertificateAuthority");
  let body: any;
  body = JSON.stringify(se_DescribeCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand
 */
export const se_DescribeCertificateAuthorityAuditReportCommand = async (
  input: DescribeCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCertificateAuthorityAuditReport");
  let body: any;
  body = JSON.stringify(se_DescribeCertificateAuthorityAuditReportRequest(input, context));
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
 * serializeAws_json1_1GetCertificateAuthorityCertificateCommand
 */
export const se_GetCertificateAuthorityCertificateCommand = async (
  input: GetCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCertificateAuthorityCertificate");
  let body: any;
  body = JSON.stringify(se_GetCertificateAuthorityCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCertificateAuthorityCsrCommand
 */
export const se_GetCertificateAuthorityCsrCommand = async (
  input: GetCertificateAuthorityCsrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCertificateAuthorityCsr");
  let body: any;
  body = JSON.stringify(se_GetCertificateAuthorityCsrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicy");
  let body: any;
  body = JSON.stringify(se_GetPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportCertificateAuthorityCertificateCommand
 */
export const se_ImportCertificateAuthorityCertificateCommand = async (
  input: ImportCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportCertificateAuthorityCertificate");
  let body: any;
  body = JSON.stringify(se_ImportCertificateAuthorityCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IssueCertificateCommand
 */
export const se_IssueCertificateCommand = async (
  input: IssueCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IssueCertificate");
  let body: any;
  body = JSON.stringify(se_IssueCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCertificateAuthoritiesCommand
 */
export const se_ListCertificateAuthoritiesCommand = async (
  input: ListCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCertificateAuthorities");
  let body: any;
  body = JSON.stringify(se_ListCertificateAuthoritiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPermissionsCommand
 */
export const se_ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPermissions");
  let body: any;
  body = JSON.stringify(se_ListPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(se_ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPolicyCommand
 */
export const se_PutPolicyCommand = async (
  input: PutPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPolicy");
  let body: any;
  body = JSON.stringify(se_PutPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreCertificateAuthorityCommand
 */
export const se_RestoreCertificateAuthorityCommand = async (
  input: RestoreCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreCertificateAuthority");
  let body: any;
  body = JSON.stringify(se_RestoreCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeCertificateCommand
 */
export const se_RevokeCertificateCommand = async (
  input: RevokeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RevokeCertificate");
  let body: any;
  body = JSON.stringify(se_RevokeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagCertificateAuthorityCommand
 */
export const se_TagCertificateAuthorityCommand = async (
  input: TagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagCertificateAuthority");
  let body: any;
  body = JSON.stringify(se_TagCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagCertificateAuthorityCommand
 */
export const se_UntagCertificateAuthorityCommand = async (
  input: UntagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagCertificateAuthority");
  let body: any;
  body = JSON.stringify(se_UntagCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCertificateAuthorityCommand
 */
export const se_UpdateCertificateAuthorityCommand = async (
  input: UpdateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCertificateAuthority");
  let body: any;
  body = JSON.stringify(se_UpdateCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateCertificateAuthorityCommand
 */
export const de_CreateCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCertificateAuthorityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCertificateAuthorityResponse(data, context);
  const response: CreateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCertificateAuthorityCommandError
 */
const de_CreateCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand
 */
export const de_CreateCertificateAuthorityAuditReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCertificateAuthorityAuditReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCertificateAuthorityAuditReportResponse(data, context);
  const response: CreateCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError
 */
const de_CreateCertificateAuthorityAuditReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await de_RequestInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1CreatePermissionCommand
 */
export const de_CreatePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreatePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePermissionCommandError
 */
const de_CreatePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PermissionAlreadyExistsException":
    case "com.amazonaws.acmpca#PermissionAlreadyExistsException":
      throw await de_PermissionAlreadyExistsExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteCertificateAuthorityCommand
 */
export const de_DeleteCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCertificateAuthorityCommandError
 */
const de_DeleteCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeletePermissionCommand
 */
export const de_DeletePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePermissionCommandError
 */
const de_DeletePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePolicyCommandError
 */
const de_DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LockoutPreventedException":
    case "com.amazonaws.acmpca#LockoutPreventedException":
      throw await de_LockoutPreventedExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeCertificateAuthorityCommand
 */
export const de_DescribeCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCertificateAuthorityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCertificateAuthorityResponse(data, context);
  const response: DescribeCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCertificateAuthorityCommandError
 */
const de_DescribeCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand
 */
export const de_DescribeCertificateAuthorityAuditReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCertificateAuthorityAuditReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCertificateAuthorityAuditReportResponse(data, context);
  const response: DescribeCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError
 */
const de_DescribeCertificateAuthorityAuditReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await de_RequestInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetCertificateAuthorityCertificateCommand
 */
export const de_GetCertificateAuthorityCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCertificateAuthorityCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCertificateAuthorityCertificateResponse(data, context);
  const response: GetCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError
 */
const de_GetCertificateAuthorityCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetCertificateAuthorityCsrCommand
 */
export const de_GetCertificateAuthorityCsrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCertificateAuthorityCsrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCertificateAuthorityCsrResponse(data, context);
  const response: GetCertificateAuthorityCsrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCertificateAuthorityCsrCommandError
 */
const de_GetCertificateAuthorityCsrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await de_RequestInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyResponse(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPolicyCommandError
 */
const de_GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand
 */
export const de_ImportCertificateAuthorityCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportCertificateAuthorityCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ImportCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError
 */
const de_ImportCertificateAuthorityCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateMismatchException":
    case "com.amazonaws.acmpca#CertificateMismatchException":
      throw await de_CertificateMismatchExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "MalformedCertificateException":
    case "com.amazonaws.acmpca#MalformedCertificateException":
      throw await de_MalformedCertificateExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await de_RequestInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1IssueCertificateCommand
 */
export const de_IssueCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IssueCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IssueCertificateResponse(data, context);
  const response: IssueCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1IssueCertificateCommandError
 */
const de_IssueCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedCSRException":
    case "com.amazonaws.acmpca#MalformedCSRException":
      throw await de_MalformedCSRExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListCertificateAuthoritiesCommand
 */
export const de_ListCertificateAuthoritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCertificateAuthoritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCertificateAuthoritiesResponse(data, context);
  const response: ListCertificateAuthoritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCertificateAuthoritiesCommandError
 */
const de_ListCertificateAuthoritiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPermissionsCommand
 */
export const de_ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPermissionsResponse(data, context);
  const response: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPermissionsCommandError
 */
const de_ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutPolicyCommand
 */
export const de_PutPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutPolicyCommandError
 */
const de_PutPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LockoutPreventedException":
    case "com.amazonaws.acmpca#LockoutPreventedException":
      throw await de_LockoutPreventedExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1RestoreCertificateAuthorityCommand
 */
export const de_RestoreCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RestoreCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreCertificateAuthorityCommandError
 */
const de_RestoreCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1RevokeCertificateCommand
 */
export const de_RevokeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RevokeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RevokeCertificateCommandError
 */
const de_RevokeCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "RequestAlreadyProcessedException":
    case "com.amazonaws.acmpca#RequestAlreadyProcessedException":
      throw await de_RequestAlreadyProcessedExceptionRes(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await de_RequestFailedExceptionRes(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await de_RequestInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1TagCertificateAuthorityCommand
 */
export const de_TagCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagCertificateAuthorityCommandError
 */
const de_TagCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acmpca#TooManyTagsException":
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
 * deserializeAws_json1_1UntagCertificateAuthorityCommand
 */
export const de_UntagCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagCertificateAuthorityCommandError
 */
const de_UntagCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateCertificateAuthorityCommand
 */
export const de_UpdateCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCertificateAuthorityCommandError
 */
const de_UpdateCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      throw await de_InvalidArgsExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
 * deserializeAws_json1_1CertificateMismatchExceptionRes
 */
const de_CertificateMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateMismatchException(body, context);
  const exception = new CertificateMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
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
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPolicyExceptionRes
 */
const de_InvalidPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPolicyException(body, context);
  const exception = new InvalidPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
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
 * deserializeAws_json1_1LockoutPreventedExceptionRes
 */
const de_LockoutPreventedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LockoutPreventedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LockoutPreventedException(body, context);
  const exception = new LockoutPreventedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MalformedCertificateExceptionRes
 */
const de_MalformedCertificateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedCertificateException(body, context);
  const exception = new MalformedCertificateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MalformedCSRExceptionRes
 */
const de_MalformedCSRExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCSRException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedCSRException(body, context);
  const exception = new MalformedCSRException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PermissionAlreadyExistsExceptionRes
 */
const de_PermissionAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PermissionAlreadyExistsException(body, context);
  const exception = new PermissionAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RequestAlreadyProcessedExceptionRes
 */
const de_RequestAlreadyProcessedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestAlreadyProcessedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestAlreadyProcessedException(body, context);
  const exception = new RequestAlreadyProcessedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RequestFailedExceptionRes
 */
const de_RequestFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestFailedException(body, context);
  const exception = new RequestFailedException({
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
 * serializeAws_json1_1AccessDescription
 */
const se_AccessDescription = (input: AccessDescription, context: __SerdeContext): any => {
  return {
    ...(input.AccessLocation != null && { AccessLocation: se_GeneralName(input.AccessLocation, context) }),
    ...(input.AccessMethod != null && { AccessMethod: se_AccessMethod(input.AccessMethod, context) }),
  };
};

/**
 * serializeAws_json1_1AccessDescriptionList
 */
const se_AccessDescriptionList = (input: AccessDescription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AccessDescription(entry, context);
    });
};

/**
 * serializeAws_json1_1AccessMethod
 */
const se_AccessMethod = (input: AccessMethod, context: __SerdeContext): any => {
  return {
    ...(input.AccessMethodType != null && { AccessMethodType: input.AccessMethodType }),
    ...(input.CustomObjectIdentifier != null && { CustomObjectIdentifier: input.CustomObjectIdentifier }),
  };
};

/**
 * serializeAws_json1_1ActionList
 */
const se_ActionList = (input: (ActionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ApiPassthrough
 */
const se_ApiPassthrough = (input: ApiPassthrough, context: __SerdeContext): any => {
  return {
    ...(input.Extensions != null && { Extensions: se_Extensions(input.Extensions, context) }),
    ...(input.Subject != null && { Subject: se_ASN1Subject(input.Subject, context) }),
  };
};

/**
 * serializeAws_json1_1ASN1Subject
 */
const se_ASN1Subject = (input: ASN1Subject, context: __SerdeContext): any => {
  return {
    ...(input.CommonName != null && { CommonName: input.CommonName }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.CustomAttributes != null && {
      CustomAttributes: se_CustomAttributeList(input.CustomAttributes, context),
    }),
    ...(input.DistinguishedNameQualifier != null && { DistinguishedNameQualifier: input.DistinguishedNameQualifier }),
    ...(input.GenerationQualifier != null && { GenerationQualifier: input.GenerationQualifier }),
    ...(input.GivenName != null && { GivenName: input.GivenName }),
    ...(input.Initials != null && { Initials: input.Initials }),
    ...(input.Locality != null && { Locality: input.Locality }),
    ...(input.Organization != null && { Organization: input.Organization }),
    ...(input.OrganizationalUnit != null && { OrganizationalUnit: input.OrganizationalUnit }),
    ...(input.Pseudonym != null && { Pseudonym: input.Pseudonym }),
    ...(input.SerialNumber != null && { SerialNumber: input.SerialNumber }),
    ...(input.State != null && { State: input.State }),
    ...(input.Surname != null && { Surname: input.Surname }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

/**
 * serializeAws_json1_1CertificateAuthorityConfiguration
 */
const se_CertificateAuthorityConfiguration = (
  input: CertificateAuthorityConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CsrExtensions != null && { CsrExtensions: se_CsrExtensions(input.CsrExtensions, context) }),
    ...(input.KeyAlgorithm != null && { KeyAlgorithm: input.KeyAlgorithm }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
    ...(input.Subject != null && { Subject: se_ASN1Subject(input.Subject, context) }),
  };
};

/**
 * serializeAws_json1_1CertificatePolicyList
 */
const se_CertificatePolicyList = (input: PolicyInformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PolicyInformation(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest
 */
const se_CreateCertificateAuthorityAuditReportRequest = (
  input: CreateCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditReportResponseFormat != null && { AuditReportResponseFormat: input.AuditReportResponseFormat }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
  };
};

/**
 * serializeAws_json1_1CreateCertificateAuthorityRequest
 */
const se_CreateCertificateAuthorityRequest = (
  input: CreateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityConfiguration != null && {
      CertificateAuthorityConfiguration: se_CertificateAuthorityConfiguration(
        input.CertificateAuthorityConfiguration,
        context
      ),
    }),
    ...(input.CertificateAuthorityType != null && { CertificateAuthorityType: input.CertificateAuthorityType }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.KeyStorageSecurityStandard != null && { KeyStorageSecurityStandard: input.KeyStorageSecurityStandard }),
    ...(input.RevocationConfiguration != null && {
      RevocationConfiguration: se_RevocationConfiguration(input.RevocationConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UsageMode != null && { UsageMode: input.UsageMode }),
  };
};

/**
 * serializeAws_json1_1CreatePermissionRequest
 */
const se_CreatePermissionRequest = (input: CreatePermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: se_ActionList(input.Actions, context) }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.SourceAccount != null && { SourceAccount: input.SourceAccount }),
  };
};

/**
 * serializeAws_json1_1CrlConfiguration
 */
const se_CrlConfiguration = (input: CrlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CustomCname != null && { CustomCname: input.CustomCname }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.ExpirationInDays != null && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3ObjectAcl != null && { S3ObjectAcl: input.S3ObjectAcl }),
  };
};

/**
 * serializeAws_json1_1CsrExtensions
 */
const se_CsrExtensions = (input: CsrExtensions, context: __SerdeContext): any => {
  return {
    ...(input.KeyUsage != null && { KeyUsage: se_KeyUsage(input.KeyUsage, context) }),
    ...(input.SubjectInformationAccess != null && {
      SubjectInformationAccess: se_AccessDescriptionList(input.SubjectInformationAccess, context),
    }),
  };
};

/**
 * serializeAws_json1_1CustomAttribute
 */
const se_CustomAttribute = (input: CustomAttribute, context: __SerdeContext): any => {
  return {
    ...(input.ObjectIdentifier != null && { ObjectIdentifier: input.ObjectIdentifier }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1CustomAttributeList
 */
const se_CustomAttributeList = (input: CustomAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1CustomExtension
 */
const se_CustomExtension = (input: CustomExtension, context: __SerdeContext): any => {
  return {
    ...(input.Critical != null && { Critical: input.Critical }),
    ...(input.ObjectIdentifier != null && { ObjectIdentifier: input.ObjectIdentifier }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1CustomExtensionList
 */
const se_CustomExtensionList = (input: CustomExtension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomExtension(entry, context);
    });
};

/**
 * serializeAws_json1_1DeleteCertificateAuthorityRequest
 */
const se_DeleteCertificateAuthorityRequest = (
  input: DeleteCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.PermanentDeletionTimeInDays != null && {
      PermanentDeletionTimeInDays: input.PermanentDeletionTimeInDays,
    }),
  };
};

/**
 * serializeAws_json1_1DeletePermissionRequest
 */
const se_DeletePermissionRequest = (input: DeletePermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.SourceAccount != null && { SourceAccount: input.SourceAccount }),
  };
};

/**
 * serializeAws_json1_1DeletePolicyRequest
 */
const se_DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest
 */
const se_DescribeCertificateAuthorityAuditReportRequest = (
  input: DescribeCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditReportId != null && { AuditReportId: input.AuditReportId }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCertificateAuthorityRequest
 */
const se_DescribeCertificateAuthorityRequest = (
  input: DescribeCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

/**
 * serializeAws_json1_1EdiPartyName
 */
const se_EdiPartyName = (input: EdiPartyName, context: __SerdeContext): any => {
  return {
    ...(input.NameAssigner != null && { NameAssigner: input.NameAssigner }),
    ...(input.PartyName != null && { PartyName: input.PartyName }),
  };
};

/**
 * serializeAws_json1_1ExtendedKeyUsage
 */
const se_ExtendedKeyUsage = (input: ExtendedKeyUsage, context: __SerdeContext): any => {
  return {
    ...(input.ExtendedKeyUsageObjectIdentifier != null && {
      ExtendedKeyUsageObjectIdentifier: input.ExtendedKeyUsageObjectIdentifier,
    }),
    ...(input.ExtendedKeyUsageType != null && { ExtendedKeyUsageType: input.ExtendedKeyUsageType }),
  };
};

/**
 * serializeAws_json1_1ExtendedKeyUsageList
 */
const se_ExtendedKeyUsageList = (input: ExtendedKeyUsage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExtendedKeyUsage(entry, context);
    });
};

/**
 * serializeAws_json1_1Extensions
 */
const se_Extensions = (input: Extensions, context: __SerdeContext): any => {
  return {
    ...(input.CertificatePolicies != null && {
      CertificatePolicies: se_CertificatePolicyList(input.CertificatePolicies, context),
    }),
    ...(input.CustomExtensions != null && {
      CustomExtensions: se_CustomExtensionList(input.CustomExtensions, context),
    }),
    ...(input.ExtendedKeyUsage != null && {
      ExtendedKeyUsage: se_ExtendedKeyUsageList(input.ExtendedKeyUsage, context),
    }),
    ...(input.KeyUsage != null && { KeyUsage: se_KeyUsage(input.KeyUsage, context) }),
    ...(input.SubjectAlternativeNames != null && {
      SubjectAlternativeNames: se_GeneralNameList(input.SubjectAlternativeNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1GeneralName
 */
const se_GeneralName = (input: GeneralName, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryName != null && { DirectoryName: se_ASN1Subject(input.DirectoryName, context) }),
    ...(input.DnsName != null && { DnsName: input.DnsName }),
    ...(input.EdiPartyName != null && { EdiPartyName: se_EdiPartyName(input.EdiPartyName, context) }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.OtherName != null && { OtherName: se_OtherName(input.OtherName, context) }),
    ...(input.RegisteredId != null && { RegisteredId: input.RegisteredId }),
    ...(input.Rfc822Name != null && { Rfc822Name: input.Rfc822Name }),
    ...(input.UniformResourceIdentifier != null && { UniformResourceIdentifier: input.UniformResourceIdentifier }),
  };
};

/**
 * serializeAws_json1_1GeneralNameList
 */
const se_GeneralNameList = (input: GeneralName[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GeneralName(entry, context);
    });
};

/**
 * serializeAws_json1_1GetCertificateAuthorityCertificateRequest
 */
const se_GetCertificateAuthorityCertificateRequest = (
  input: GetCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

/**
 * serializeAws_json1_1GetCertificateAuthorityCsrRequest
 */
const se_GetCertificateAuthorityCsrRequest = (
  input: GetCertificateAuthorityCsrRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

/**
 * serializeAws_json1_1GetCertificateRequest
 */
const se_GetCertificateRequest = (input: GetCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

/**
 * serializeAws_json1_1GetPolicyRequest
 */
const se_GetPolicyRequest = (input: GetPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ImportCertificateAuthorityCertificateRequest
 */
const se_ImportCertificateAuthorityCertificateRequest = (
  input: ImportCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate != null && { Certificate: context.base64Encoder(input.Certificate) }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CertificateChain != null && { CertificateChain: context.base64Encoder(input.CertificateChain) }),
  };
};

/**
 * serializeAws_json1_1IssueCertificateRequest
 */
const se_IssueCertificateRequest = (input: IssueCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiPassthrough != null && { ApiPassthrough: se_ApiPassthrough(input.ApiPassthrough, context) }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Csr != null && { Csr: context.base64Encoder(input.Csr) }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
    ...(input.TemplateArn != null && { TemplateArn: input.TemplateArn }),
    ...(input.Validity != null && { Validity: se_Validity(input.Validity, context) }),
    ...(input.ValidityNotBefore != null && { ValidityNotBefore: se_Validity(input.ValidityNotBefore, context) }),
  };
};

/**
 * serializeAws_json1_1KeyUsage
 */
const se_KeyUsage = (input: KeyUsage, context: __SerdeContext): any => {
  return {
    ...(input.CRLSign != null && { CRLSign: input.CRLSign }),
    ...(input.DataEncipherment != null && { DataEncipherment: input.DataEncipherment }),
    ...(input.DecipherOnly != null && { DecipherOnly: input.DecipherOnly }),
    ...(input.DigitalSignature != null && { DigitalSignature: input.DigitalSignature }),
    ...(input.EncipherOnly != null && { EncipherOnly: input.EncipherOnly }),
    ...(input.KeyAgreement != null && { KeyAgreement: input.KeyAgreement }),
    ...(input.KeyCertSign != null && { KeyCertSign: input.KeyCertSign }),
    ...(input.KeyEncipherment != null && { KeyEncipherment: input.KeyEncipherment }),
    ...(input.NonRepudiation != null && { NonRepudiation: input.NonRepudiation }),
  };
};

/**
 * serializeAws_json1_1ListCertificateAuthoritiesRequest
 */
const se_ListCertificateAuthoritiesRequest = (
  input: ListCertificateAuthoritiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceOwner != null && { ResourceOwner: input.ResourceOwner }),
  };
};

/**
 * serializeAws_json1_1ListPermissionsRequest
 */
const se_ListPermissionsRequest = (input: ListPermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsRequest
 */
const se_ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1OcspConfiguration
 */
const se_OcspConfiguration = (input: OcspConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.OcspCustomCname != null && { OcspCustomCname: input.OcspCustomCname }),
  };
};

/**
 * serializeAws_json1_1OtherName
 */
const se_OtherName = (input: OtherName, context: __SerdeContext): any => {
  return {
    ...(input.TypeId != null && { TypeId: input.TypeId }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1PolicyInformation
 */
const se_PolicyInformation = (input: PolicyInformation, context: __SerdeContext): any => {
  return {
    ...(input.CertPolicyId != null && { CertPolicyId: input.CertPolicyId }),
    ...(input.PolicyQualifiers != null && {
      PolicyQualifiers: se_PolicyQualifierInfoList(input.PolicyQualifiers, context),
    }),
  };
};

/**
 * serializeAws_json1_1PolicyQualifierInfo
 */
const se_PolicyQualifierInfo = (input: PolicyQualifierInfo, context: __SerdeContext): any => {
  return {
    ...(input.PolicyQualifierId != null && { PolicyQualifierId: input.PolicyQualifierId }),
    ...(input.Qualifier != null && { Qualifier: se_Qualifier(input.Qualifier, context) }),
  };
};

/**
 * serializeAws_json1_1PolicyQualifierInfoList
 */
const se_PolicyQualifierInfoList = (input: PolicyQualifierInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PolicyQualifierInfo(entry, context);
    });
};

/**
 * serializeAws_json1_1PutPolicyRequest
 */
const se_PutPolicyRequest = (input: PutPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1Qualifier
 */
const se_Qualifier = (input: Qualifier, context: __SerdeContext): any => {
  return {
    ...(input.CpsUri != null && { CpsUri: input.CpsUri }),
  };
};

/**
 * serializeAws_json1_1RestoreCertificateAuthorityRequest
 */
const se_RestoreCertificateAuthorityRequest = (
  input: RestoreCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

/**
 * serializeAws_json1_1RevocationConfiguration
 */
const se_RevocationConfiguration = (input: RevocationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrlConfiguration != null && { CrlConfiguration: se_CrlConfiguration(input.CrlConfiguration, context) }),
    ...(input.OcspConfiguration != null && {
      OcspConfiguration: se_OcspConfiguration(input.OcspConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1RevokeCertificateRequest
 */
const se_RevokeCertificateRequest = (input: RevokeCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CertificateSerial != null && { CertificateSerial: input.CertificateSerial }),
    ...(input.RevocationReason != null && { RevocationReason: input.RevocationReason }),
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
 * serializeAws_json1_1TagCertificateAuthorityRequest
 */
const se_TagCertificateAuthorityRequest = (input: TagCertificateAuthorityRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_json1_1UntagCertificateAuthorityRequest
 */
const se_UntagCertificateAuthorityRequest = (input: UntagCertificateAuthorityRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateCertificateAuthorityRequest
 */
const se_UpdateCertificateAuthorityRequest = (
  input: UpdateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.RevocationConfiguration != null && {
      RevocationConfiguration: se_RevocationConfiguration(input.RevocationConfiguration, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1Validity
 */
const se_Validity = (input: Validity, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * deserializeAws_json1_1AccessDescription
 */
const de_AccessDescription = (output: any, context: __SerdeContext): AccessDescription => {
  return {
    AccessLocation: output.AccessLocation != null ? de_GeneralName(output.AccessLocation, context) : undefined,
    AccessMethod: output.AccessMethod != null ? de_AccessMethod(output.AccessMethod, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccessDescriptionList
 */
const de_AccessDescriptionList = (output: any, context: __SerdeContext): AccessDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccessMethod
 */
const de_AccessMethod = (output: any, context: __SerdeContext): AccessMethod => {
  return {
    AccessMethodType: __expectString(output.AccessMethodType),
    CustomObjectIdentifier: __expectString(output.CustomObjectIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1ActionList
 */
const de_ActionList = (output: any, context: __SerdeContext): (ActionType | string)[] => {
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
 * deserializeAws_json1_1ASN1Subject
 */
const de_ASN1Subject = (output: any, context: __SerdeContext): ASN1Subject => {
  return {
    CommonName: __expectString(output.CommonName),
    Country: __expectString(output.Country),
    CustomAttributes:
      output.CustomAttributes != null ? de_CustomAttributeList(output.CustomAttributes, context) : undefined,
    DistinguishedNameQualifier: __expectString(output.DistinguishedNameQualifier),
    GenerationQualifier: __expectString(output.GenerationQualifier),
    GivenName: __expectString(output.GivenName),
    Initials: __expectString(output.Initials),
    Locality: __expectString(output.Locality),
    Organization: __expectString(output.Organization),
    OrganizationalUnit: __expectString(output.OrganizationalUnit),
    Pseudonym: __expectString(output.Pseudonym),
    SerialNumber: __expectString(output.SerialNumber),
    State: __expectString(output.State),
    Surname: __expectString(output.Surname),
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateAuthorities
 */
const de_CertificateAuthorities = (output: any, context: __SerdeContext): CertificateAuthority[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateAuthority(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CertificateAuthority
 */
const de_CertificateAuthority = (output: any, context: __SerdeContext): CertificateAuthority => {
  return {
    Arn: __expectString(output.Arn),
    CertificateAuthorityConfiguration:
      output.CertificateAuthorityConfiguration != null
        ? de_CertificateAuthorityConfiguration(output.CertificateAuthorityConfiguration, context)
        : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    FailureReason: __expectString(output.FailureReason),
    KeyStorageSecurityStandard: __expectString(output.KeyStorageSecurityStandard),
    LastStateChangeAt:
      output.LastStateChangeAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastStateChangeAt)))
        : undefined,
    NotAfter:
      output.NotAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotAfter))) : undefined,
    NotBefore:
      output.NotBefore != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotBefore))) : undefined,
    OwnerAccount: __expectString(output.OwnerAccount),
    RestorableUntil:
      output.RestorableUntil != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RestorableUntil)))
        : undefined,
    RevocationConfiguration:
      output.RevocationConfiguration != null
        ? de_RevocationConfiguration(output.RevocationConfiguration, context)
        : undefined,
    Serial: __expectString(output.Serial),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    UsageMode: __expectString(output.UsageMode),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateAuthorityConfiguration
 */
const de_CertificateAuthorityConfiguration = (
  output: any,
  context: __SerdeContext
): CertificateAuthorityConfiguration => {
  return {
    CsrExtensions: output.CsrExtensions != null ? de_CsrExtensions(output.CsrExtensions, context) : undefined,
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
    Subject: output.Subject != null ? de_ASN1Subject(output.Subject, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CertificateMismatchException
 */
const de_CertificateMismatchException = (output: any, context: __SerdeContext): CertificateMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse
 */
const de_CreateCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityAuditReportResponse => {
  return {
    AuditReportId: __expectString(output.AuditReportId),
    S3Key: __expectString(output.S3Key),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCertificateAuthorityResponse
 */
const de_CreateCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityResponse => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
  } as any;
};

/**
 * deserializeAws_json1_1CrlConfiguration
 */
const de_CrlConfiguration = (output: any, context: __SerdeContext): CrlConfiguration => {
  return {
    CustomCname: __expectString(output.CustomCname),
    Enabled: __expectBoolean(output.Enabled),
    ExpirationInDays: __expectInt32(output.ExpirationInDays),
    S3BucketName: __expectString(output.S3BucketName),
    S3ObjectAcl: __expectString(output.S3ObjectAcl),
  } as any;
};

/**
 * deserializeAws_json1_1CsrExtensions
 */
const de_CsrExtensions = (output: any, context: __SerdeContext): CsrExtensions => {
  return {
    KeyUsage: output.KeyUsage != null ? de_KeyUsage(output.KeyUsage, context) : undefined,
    SubjectInformationAccess:
      output.SubjectInformationAccess != null
        ? de_AccessDescriptionList(output.SubjectInformationAccess, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomAttribute
 */
const de_CustomAttribute = (output: any, context: __SerdeContext): CustomAttribute => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1CustomAttributeList
 */
const de_CustomAttributeList = (output: any, context: __SerdeContext): CustomAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse
 */
const de_DescribeCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityAuditReportResponse => {
  return {
    AuditReportStatus: __expectString(output.AuditReportStatus),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    S3BucketName: __expectString(output.S3BucketName),
    S3Key: __expectString(output.S3Key),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCertificateAuthorityResponse
 */
const de_DescribeCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityResponse => {
  return {
    CertificateAuthority:
      output.CertificateAuthority != null ? de_CertificateAuthority(output.CertificateAuthority, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EdiPartyName
 */
const de_EdiPartyName = (output: any, context: __SerdeContext): EdiPartyName => {
  return {
    NameAssigner: __expectString(output.NameAssigner),
    PartyName: __expectString(output.PartyName),
  } as any;
};

/**
 * deserializeAws_json1_1GeneralName
 */
const de_GeneralName = (output: any, context: __SerdeContext): GeneralName => {
  return {
    DirectoryName: output.DirectoryName != null ? de_ASN1Subject(output.DirectoryName, context) : undefined,
    DnsName: __expectString(output.DnsName),
    EdiPartyName: output.EdiPartyName != null ? de_EdiPartyName(output.EdiPartyName, context) : undefined,
    IpAddress: __expectString(output.IpAddress),
    OtherName: output.OtherName != null ? de_OtherName(output.OtherName, context) : undefined,
    RegisteredId: __expectString(output.RegisteredId),
    Rfc822Name: __expectString(output.Rfc822Name),
    UniformResourceIdentifier: __expectString(output.UniformResourceIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1GetCertificateAuthorityCertificateResponse
 */
const de_GetCertificateAuthorityCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
  } as any;
};

/**
 * deserializeAws_json1_1GetCertificateAuthorityCsrResponse
 */
const de_GetCertificateAuthorityCsrResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCsrResponse => {
  return {
    Csr: __expectString(output.Csr),
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
 * deserializeAws_json1_1GetPolicyResponse
 */
const de_GetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
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
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPolicyException
 */
const de_InvalidPolicyException = (output: any, context: __SerdeContext): InvalidPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
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
 * deserializeAws_json1_1IssueCertificateResponse
 */
const de_IssueCertificateResponse = (output: any, context: __SerdeContext): IssueCertificateResponse => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
  } as any;
};

/**
 * deserializeAws_json1_1KeyUsage
 */
const de_KeyUsage = (output: any, context: __SerdeContext): KeyUsage => {
  return {
    CRLSign: __expectBoolean(output.CRLSign),
    DataEncipherment: __expectBoolean(output.DataEncipherment),
    DecipherOnly: __expectBoolean(output.DecipherOnly),
    DigitalSignature: __expectBoolean(output.DigitalSignature),
    EncipherOnly: __expectBoolean(output.EncipherOnly),
    KeyAgreement: __expectBoolean(output.KeyAgreement),
    KeyCertSign: __expectBoolean(output.KeyCertSign),
    KeyEncipherment: __expectBoolean(output.KeyEncipherment),
    NonRepudiation: __expectBoolean(output.NonRepudiation),
  } as any;
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
 * deserializeAws_json1_1ListCertificateAuthoritiesResponse
 */
const de_ListCertificateAuthoritiesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificateAuthoritiesResponse => {
  return {
    CertificateAuthorities:
      output.CertificateAuthorities != null
        ? de_CertificateAuthorities(output.CertificateAuthorities, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPermissionsResponse
 */
const de_ListPermissionsResponse = (output: any, context: __SerdeContext): ListPermissionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Permissions: output.Permissions != null ? de_PermissionList(output.Permissions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsResponse
 */
const de_ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LockoutPreventedException
 */
const de_LockoutPreventedException = (output: any, context: __SerdeContext): LockoutPreventedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MalformedCertificateException
 */
const de_MalformedCertificateException = (output: any, context: __SerdeContext): MalformedCertificateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MalformedCSRException
 */
const de_MalformedCSRException = (output: any, context: __SerdeContext): MalformedCSRException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OcspConfiguration
 */
const de_OcspConfiguration = (output: any, context: __SerdeContext): OcspConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    OcspCustomCname: __expectString(output.OcspCustomCname),
  } as any;
};

/**
 * deserializeAws_json1_1OtherName
 */
const de_OtherName = (output: any, context: __SerdeContext): OtherName => {
  return {
    TypeId: __expectString(output.TypeId),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Permission
 */
const de_Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    Actions: output.Actions != null ? de_ActionList(output.Actions, context) : undefined,
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Policy: __expectString(output.Policy),
    Principal: __expectString(output.Principal),
    SourceAccount: __expectString(output.SourceAccount),
  } as any;
};

/**
 * deserializeAws_json1_1PermissionAlreadyExistsException
 */
const de_PermissionAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): PermissionAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PermissionList
 */
const de_PermissionList = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Permission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RequestAlreadyProcessedException
 */
const de_RequestAlreadyProcessedException = (
  output: any,
  context: __SerdeContext
): RequestAlreadyProcessedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RequestFailedException
 */
const de_RequestFailedException = (output: any, context: __SerdeContext): RequestFailedException => {
  return {
    message: __expectString(output.message),
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
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RevocationConfiguration
 */
const de_RevocationConfiguration = (output: any, context: __SerdeContext): RevocationConfiguration => {
  return {
    CrlConfiguration:
      output.CrlConfiguration != null ? de_CrlConfiguration(output.CrlConfiguration, context) : undefined,
    OcspConfiguration:
      output.OcspConfiguration != null ? de_OcspConfiguration(output.OcspConfiguration, context) : undefined,
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
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
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
    "x-amz-target": `ACMPrivateCA.${operation}`,
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
