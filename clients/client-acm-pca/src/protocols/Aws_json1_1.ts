// smithy-typescript generated code
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
  CreateCertificateAuthorityRequest,
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
  GetCertificateAuthorityCsrRequest,
  GetCertificateRequest,
  GetPolicyRequest,
  ImportCertificateAuthorityCertificateRequest,
  InvalidArgsException,
  InvalidArnException,
  InvalidNextTokenException,
  InvalidPolicyException,
  InvalidRequestException,
  InvalidStateException,
  InvalidTagException,
  IssueCertificateRequest,
  KeyUsage,
  LimitExceededException,
  ListCertificateAuthoritiesRequest,
  ListCertificateAuthoritiesResponse,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListTagsRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1GetCertificateAuthorityCertificateCommand
 */
export const se_GetCertificateAuthorityCertificateCommand = async (
  input: GetCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCertificateAuthorityCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CreateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCertificateAuthorityCsrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: IssueCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
 * deserializeAws_json1_1LockoutPreventedExceptionRes
 */
const de_LockoutPreventedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LockoutPreventedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccessDescription omitted.

// se_AccessDescriptionList omitted.

// se_AccessMethod omitted.

// se_ActionList omitted.

// se_ApiPassthrough omitted.

// se_ASN1Subject omitted.

// se_CertificateAuthorityConfiguration omitted.

// se_CertificatePolicyList omitted.

// se_CreateCertificateAuthorityAuditReportRequest omitted.

// se_CreateCertificateAuthorityRequest omitted.

// se_CreatePermissionRequest omitted.

// se_CrlConfiguration omitted.

// se_CsrExtensions omitted.

// se_CustomAttribute omitted.

// se_CustomAttributeList omitted.

// se_CustomExtension omitted.

// se_CustomExtensionList omitted.

// se_DeleteCertificateAuthorityRequest omitted.

// se_DeletePermissionRequest omitted.

// se_DeletePolicyRequest omitted.

// se_DescribeCertificateAuthorityAuditReportRequest omitted.

// se_DescribeCertificateAuthorityRequest omitted.

// se_EdiPartyName omitted.

// se_ExtendedKeyUsage omitted.

// se_ExtendedKeyUsageList omitted.

// se_Extensions omitted.

// se_GeneralName omitted.

// se_GeneralNameList omitted.

// se_GetCertificateAuthorityCertificateRequest omitted.

// se_GetCertificateAuthorityCsrRequest omitted.

// se_GetCertificateRequest omitted.

// se_GetPolicyRequest omitted.

/**
 * serializeAws_json1_1ImportCertificateAuthorityCertificateRequest
 */
const se_ImportCertificateAuthorityCertificateRequest = (
  input: ImportCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Certificate: context.base64Encoder,
    CertificateAuthorityArn: [],
    CertificateChain: context.base64Encoder,
  });
};

/**
 * serializeAws_json1_1IssueCertificateRequest
 */
const se_IssueCertificateRequest = (input: IssueCertificateRequest, context: __SerdeContext): any => {
  return take(input, {
    ApiPassthrough: _json,
    CertificateAuthorityArn: [],
    Csr: context.base64Encoder,
    IdempotencyToken: [],
    SigningAlgorithm: [],
    TemplateArn: [],
    Validity: _json,
    ValidityNotBefore: _json,
  });
};

// se_KeyUsage omitted.

// se_ListCertificateAuthoritiesRequest omitted.

// se_ListPermissionsRequest omitted.

// se_ListTagsRequest omitted.

// se_OcspConfiguration omitted.

// se_OtherName omitted.

// se_PolicyInformation omitted.

// se_PolicyQualifierInfo omitted.

// se_PolicyQualifierInfoList omitted.

// se_PutPolicyRequest omitted.

// se_Qualifier omitted.

// se_RestoreCertificateAuthorityRequest omitted.

// se_RevocationConfiguration omitted.

// se_RevokeCertificateRequest omitted.

// se_Tag omitted.

// se_TagCertificateAuthorityRequest omitted.

// se_TagList omitted.

// se_UntagCertificateAuthorityRequest omitted.

// se_UpdateCertificateAuthorityRequest omitted.

// se_Validity omitted.

// de_AccessDescription omitted.

// de_AccessDescriptionList omitted.

// de_AccessMethod omitted.

// de_ActionList omitted.

// de_ASN1Subject omitted.

/**
 * deserializeAws_json1_1CertificateAuthorities
 */
const de_CertificateAuthorities = (output: any, context: __SerdeContext): CertificateAuthority[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CertificateAuthority(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CertificateAuthority
 */
const de_CertificateAuthority = (output: any, context: __SerdeContext): CertificateAuthority => {
  return take(output, {
    Arn: __expectString,
    CertificateAuthorityConfiguration: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    KeyStorageSecurityStandard: __expectString,
    LastStateChangeAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotAfter: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotBefore: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OwnerAccount: __expectString,
    RestorableUntil: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RevocationConfiguration: _json,
    Serial: __expectString,
    Status: __expectString,
    Type: __expectString,
    UsageMode: __expectString,
  }) as any;
};

// de_CertificateAuthorityConfiguration omitted.

// de_CertificateMismatchException omitted.

// de_ConcurrentModificationException omitted.

// de_CreateCertificateAuthorityAuditReportResponse omitted.

// de_CreateCertificateAuthorityResponse omitted.

// de_CrlConfiguration omitted.

// de_CsrExtensions omitted.

// de_CustomAttribute omitted.

// de_CustomAttributeList omitted.

/**
 * deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse
 */
const de_DescribeCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityAuditReportResponse => {
  return take(output, {
    AuditReportStatus: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    S3BucketName: __expectString,
    S3Key: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCertificateAuthorityResponse
 */
const de_DescribeCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityResponse => {
  return take(output, {
    CertificateAuthority: (_: any) => de_CertificateAuthority(_, context),
  }) as any;
};

// de_EdiPartyName omitted.

// de_GeneralName omitted.

// de_GetCertificateAuthorityCertificateResponse omitted.

// de_GetCertificateAuthorityCsrResponse omitted.

// de_GetCertificateResponse omitted.

// de_GetPolicyResponse omitted.

// de_InvalidArgsException omitted.

// de_InvalidArnException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidPolicyException omitted.

// de_InvalidRequestException omitted.

// de_InvalidStateException omitted.

// de_InvalidTagException omitted.

// de_IssueCertificateResponse omitted.

// de_KeyUsage omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListCertificateAuthoritiesResponse
 */
const de_ListCertificateAuthoritiesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificateAuthoritiesResponse => {
  return take(output, {
    CertificateAuthorities: (_: any) => de_CertificateAuthorities(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListPermissionsResponse
 */
const de_ListPermissionsResponse = (output: any, context: __SerdeContext): ListPermissionsResponse => {
  return take(output, {
    NextToken: __expectString,
    Permissions: (_: any) => de_PermissionList(_, context),
  }) as any;
};

// de_ListTagsResponse omitted.

// de_LockoutPreventedException omitted.

// de_MalformedCertificateException omitted.

// de_MalformedCSRException omitted.

// de_OcspConfiguration omitted.

// de_OtherName omitted.

/**
 * deserializeAws_json1_1Permission
 */
const de_Permission = (output: any, context: __SerdeContext): Permission => {
  return take(output, {
    Actions: _json,
    CertificateAuthorityArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Policy: __expectString,
    Principal: __expectString,
    SourceAccount: __expectString,
  }) as any;
};

// de_PermissionAlreadyExistsException omitted.

/**
 * deserializeAws_json1_1PermissionList
 */
const de_PermissionList = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Permission(entry, context);
    });
  return retVal;
};

// de_RequestAlreadyProcessedException omitted.

// de_RequestFailedException omitted.

// de_RequestInProgressException omitted.

// de_ResourceNotFoundException omitted.

// de_RevocationConfiguration omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TooManyTagsException omitted.

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
