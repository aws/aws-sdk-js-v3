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

export const serializeAws_json1_1CreateCertificateAuthorityCommand = async (
  input: CreateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.CreateCertificateAuthority",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = async (
  input: CreateCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.CreateCertificateAuthorityAuditReport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePermissionCommand = async (
  input: CreatePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.CreatePermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateAuthorityCommand = async (
  input: DeleteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DeleteCertificateAuthority",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePermissionCommand = async (
  input: DeletePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DeletePermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DeletePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateAuthorityCommand = async (
  input: DescribeCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DescribeCertificateAuthority",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = async (
  input: DescribeCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.DescribeCertificateAuthorityAuditReport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateCommand = async (
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateAuthorityCertificateCommand = async (
  input: GetCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetCertificateAuthorityCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateAuthorityCsrCommand = async (
  input: GetCertificateAuthorityCsrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetCertificateAuthorityCsr",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCertificateAuthorityCsrRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.GetPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCertificateAuthorityCertificateCommand = async (
  input: ImportCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ImportCertificateAuthorityCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportCertificateAuthorityCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IssueCertificateCommand = async (
  input: IssueCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.IssueCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IssueCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCertificateAuthoritiesCommand = async (
  input: ListCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ListCertificateAuthorities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCertificateAuthoritiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ListPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.ListTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPolicyCommand = async (
  input: PutPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.PutPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreCertificateAuthorityCommand = async (
  input: RestoreCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.RestoreCertificateAuthority",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RevokeCertificateCommand = async (
  input: RevokeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.RevokeCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RevokeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagCertificateAuthorityCommand = async (
  input: TagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.TagCertificateAuthority",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagCertificateAuthorityCommand = async (
  input: UntagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.UntagCertificateAuthority",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCertificateAuthorityCommand = async (
  input: UpdateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ACMPrivateCA.UpdateCertificateAuthority",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCertificateAuthorityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCertificateAuthorityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityResponse(data, context);
  const response: CreateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      throw await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse(data, context);
  const response: CreateCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1CreatePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreatePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePermissionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "PermissionAlreadyExistsException":
    case "com.amazonaws.acmpca#PermissionAlreadyExistsException":
      throw await deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeletePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePermissionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePolicyCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LockoutPreventedException":
    case "com.amazonaws.acmpca#LockoutPreventedException":
      throw await deserializeAws_json1_1LockoutPreventedExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateAuthorityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityResponse(data, context);
  const response: DescribeCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse(data, context);
  const response: DescribeCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetCertificateAuthorityCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCertificateResponse(data, context);
  const response: GetCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetCertificateAuthorityCsrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCsrResponse(data, context);
  const response: GetCertificateAuthorityCsrCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCertificateAuthorityCsrCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPolicyResponse(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ImportCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError = async (
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
      throw await deserializeAws_json1_1CertificateMismatchExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "MalformedCertificateException":
    case "com.amazonaws.acmpca#MalformedCertificateException":
      throw await deserializeAws_json1_1MalformedCertificateExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1IssueCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1IssueCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IssueCertificateResponse(data, context);
  const response: IssueCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IssueCertificateCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MalformedCSRException":
    case "com.amazonaws.acmpca#MalformedCSRException":
      throw await deserializeAws_json1_1MalformedCSRExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1ListCertificateAuthoritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCertificateAuthoritiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificateAuthoritiesResponse(data, context);
  const response: ListCertificateAuthoritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCertificateAuthoritiesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
  const response: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPermissionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1PutPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPolicyCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      throw await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LockoutPreventedException":
    case "com.amazonaws.acmpca#LockoutPreventedException":
      throw await deserializeAws_json1_1LockoutPreventedExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1RestoreCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RestoreCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1RevokeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RevokeCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RevokeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RevokeCertificateCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "RequestAlreadyProcessedException":
    case "com.amazonaws.acmpca#RequestAlreadyProcessedException":
      throw await deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse(parsedOutput, context);
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      throw await deserializeAws_json1_1RequestFailedExceptionResponse(parsedOutput, context);
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      throw await deserializeAws_json1_1RequestInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1TagCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.acmpca#TooManyTagsException":
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

export const deserializeAws_json1_1UntagCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCertificateAuthorityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCertificateAuthorityCommandError = async (
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
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      throw await deserializeAws_json1_1InvalidArgsExceptionResponse(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      throw await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      throw await deserializeAws_json1_1InvalidPolicyExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
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

const deserializeAws_json1_1CertificateMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CertificateMismatchException(body, context);
  const exception = new CertificateMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
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

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPolicyException(body, context);
  const exception = new InvalidPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
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

const deserializeAws_json1_1LockoutPreventedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LockoutPreventedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LockoutPreventedException(body, context);
  const exception = new LockoutPreventedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MalformedCertificateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedCertificateException(body, context);
  const exception = new MalformedCertificateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MalformedCSRExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCSRException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedCSRException(body, context);
  const exception = new MalformedCSRException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PermissionAlreadyExistsException(body, context);
  const exception = new PermissionAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestAlreadyProcessedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestAlreadyProcessedException(body, context);
  const exception = new RequestAlreadyProcessedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RequestFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestFailedException(body, context);
  const exception = new RequestFailedException({
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

const serializeAws_json1_1AccessDescription = (input: AccessDescription, context: __SerdeContext): any => {
  return {
    ...(input.AccessLocation != null && {
      AccessLocation: serializeAws_json1_1GeneralName(input.AccessLocation, context),
    }),
    ...(input.AccessMethod != null && { AccessMethod: serializeAws_json1_1AccessMethod(input.AccessMethod, context) }),
  };
};

const serializeAws_json1_1AccessDescriptionList = (input: AccessDescription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AccessDescription(entry, context);
    });
};

const serializeAws_json1_1AccessMethod = (input: AccessMethod, context: __SerdeContext): any => {
  return {
    ...(input.AccessMethodType != null && { AccessMethodType: input.AccessMethodType }),
    ...(input.CustomObjectIdentifier != null && { CustomObjectIdentifier: input.CustomObjectIdentifier }),
  };
};

const serializeAws_json1_1ActionList = (input: (ActionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ApiPassthrough = (input: ApiPassthrough, context: __SerdeContext): any => {
  return {
    ...(input.Extensions != null && { Extensions: serializeAws_json1_1Extensions(input.Extensions, context) }),
    ...(input.Subject != null && { Subject: serializeAws_json1_1ASN1Subject(input.Subject, context) }),
  };
};

const serializeAws_json1_1ASN1Subject = (input: ASN1Subject, context: __SerdeContext): any => {
  return {
    ...(input.CommonName != null && { CommonName: input.CommonName }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.CustomAttributes != null && {
      CustomAttributes: serializeAws_json1_1CustomAttributeList(input.CustomAttributes, context),
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

const serializeAws_json1_1CertificateAuthorityConfiguration = (
  input: CertificateAuthorityConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CsrExtensions != null && {
      CsrExtensions: serializeAws_json1_1CsrExtensions(input.CsrExtensions, context),
    }),
    ...(input.KeyAlgorithm != null && { KeyAlgorithm: input.KeyAlgorithm }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
    ...(input.Subject != null && { Subject: serializeAws_json1_1ASN1Subject(input.Subject, context) }),
  };
};

const serializeAws_json1_1CertificatePolicyList = (input: PolicyInformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PolicyInformation(entry, context);
    });
};

const serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest = (
  input: CreateCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditReportResponseFormat != null && { AuditReportResponseFormat: input.AuditReportResponseFormat }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
  };
};

const serializeAws_json1_1CreateCertificateAuthorityRequest = (
  input: CreateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityConfiguration != null && {
      CertificateAuthorityConfiguration: serializeAws_json1_1CertificateAuthorityConfiguration(
        input.CertificateAuthorityConfiguration,
        context
      ),
    }),
    ...(input.CertificateAuthorityType != null && { CertificateAuthorityType: input.CertificateAuthorityType }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.KeyStorageSecurityStandard != null && { KeyStorageSecurityStandard: input.KeyStorageSecurityStandard }),
    ...(input.RevocationConfiguration != null && {
      RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UsageMode != null && { UsageMode: input.UsageMode }),
  };
};

const serializeAws_json1_1CreatePermissionRequest = (input: CreatePermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.SourceAccount != null && { SourceAccount: input.SourceAccount }),
  };
};

const serializeAws_json1_1CrlConfiguration = (input: CrlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CustomCname != null && { CustomCname: input.CustomCname }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.ExpirationInDays != null && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3ObjectAcl != null && { S3ObjectAcl: input.S3ObjectAcl }),
  };
};

const serializeAws_json1_1CsrExtensions = (input: CsrExtensions, context: __SerdeContext): any => {
  return {
    ...(input.KeyUsage != null && { KeyUsage: serializeAws_json1_1KeyUsage(input.KeyUsage, context) }),
    ...(input.SubjectInformationAccess != null && {
      SubjectInformationAccess: serializeAws_json1_1AccessDescriptionList(input.SubjectInformationAccess, context),
    }),
  };
};

const serializeAws_json1_1CustomAttribute = (input: CustomAttribute, context: __SerdeContext): any => {
  return {
    ...(input.ObjectIdentifier != null && { ObjectIdentifier: input.ObjectIdentifier }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CustomAttributeList = (input: CustomAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CustomAttribute(entry, context);
    });
};

const serializeAws_json1_1CustomExtension = (input: CustomExtension, context: __SerdeContext): any => {
  return {
    ...(input.Critical != null && { Critical: input.Critical }),
    ...(input.ObjectIdentifier != null && { ObjectIdentifier: input.ObjectIdentifier }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CustomExtensionList = (input: CustomExtension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CustomExtension(entry, context);
    });
};

const serializeAws_json1_1DeleteCertificateAuthorityRequest = (
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

const serializeAws_json1_1DeletePermissionRequest = (input: DeletePermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.SourceAccount != null && { SourceAccount: input.SourceAccount }),
  };
};

const serializeAws_json1_1DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest = (
  input: DescribeCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditReportId != null && { AuditReportId: input.AuditReportId }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

const serializeAws_json1_1DescribeCertificateAuthorityRequest = (
  input: DescribeCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

const serializeAws_json1_1EdiPartyName = (input: EdiPartyName, context: __SerdeContext): any => {
  return {
    ...(input.NameAssigner != null && { NameAssigner: input.NameAssigner }),
    ...(input.PartyName != null && { PartyName: input.PartyName }),
  };
};

const serializeAws_json1_1ExtendedKeyUsage = (input: ExtendedKeyUsage, context: __SerdeContext): any => {
  return {
    ...(input.ExtendedKeyUsageObjectIdentifier != null && {
      ExtendedKeyUsageObjectIdentifier: input.ExtendedKeyUsageObjectIdentifier,
    }),
    ...(input.ExtendedKeyUsageType != null && { ExtendedKeyUsageType: input.ExtendedKeyUsageType }),
  };
};

const serializeAws_json1_1ExtendedKeyUsageList = (input: ExtendedKeyUsage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ExtendedKeyUsage(entry, context);
    });
};

const serializeAws_json1_1Extensions = (input: Extensions, context: __SerdeContext): any => {
  return {
    ...(input.CertificatePolicies != null && {
      CertificatePolicies: serializeAws_json1_1CertificatePolicyList(input.CertificatePolicies, context),
    }),
    ...(input.CustomExtensions != null && {
      CustomExtensions: serializeAws_json1_1CustomExtensionList(input.CustomExtensions, context),
    }),
    ...(input.ExtendedKeyUsage != null && {
      ExtendedKeyUsage: serializeAws_json1_1ExtendedKeyUsageList(input.ExtendedKeyUsage, context),
    }),
    ...(input.KeyUsage != null && { KeyUsage: serializeAws_json1_1KeyUsage(input.KeyUsage, context) }),
    ...(input.SubjectAlternativeNames != null && {
      SubjectAlternativeNames: serializeAws_json1_1GeneralNameList(input.SubjectAlternativeNames, context),
    }),
  };
};

const serializeAws_json1_1GeneralName = (input: GeneralName, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryName != null && {
      DirectoryName: serializeAws_json1_1ASN1Subject(input.DirectoryName, context),
    }),
    ...(input.DnsName != null && { DnsName: input.DnsName }),
    ...(input.EdiPartyName != null && { EdiPartyName: serializeAws_json1_1EdiPartyName(input.EdiPartyName, context) }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.OtherName != null && { OtherName: serializeAws_json1_1OtherName(input.OtherName, context) }),
    ...(input.RegisteredId != null && { RegisteredId: input.RegisteredId }),
    ...(input.Rfc822Name != null && { Rfc822Name: input.Rfc822Name }),
    ...(input.UniformResourceIdentifier != null && { UniformResourceIdentifier: input.UniformResourceIdentifier }),
  };
};

const serializeAws_json1_1GeneralNameList = (input: GeneralName[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1GeneralName(entry, context);
    });
};

const serializeAws_json1_1GetCertificateAuthorityCertificateRequest = (
  input: GetCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

const serializeAws_json1_1GetCertificateAuthorityCsrRequest = (
  input: GetCertificateAuthorityCsrRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

const serializeAws_json1_1GetCertificateRequest = (input: GetCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

const serializeAws_json1_1GetPolicyRequest = (input: GetPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1ImportCertificateAuthorityCertificateRequest = (
  input: ImportCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate != null && { Certificate: context.base64Encoder(input.Certificate) }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CertificateChain != null && { CertificateChain: context.base64Encoder(input.CertificateChain) }),
  };
};

const serializeAws_json1_1IssueCertificateRequest = (input: IssueCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiPassthrough != null && {
      ApiPassthrough: serializeAws_json1_1ApiPassthrough(input.ApiPassthrough, context),
    }),
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Csr != null && { Csr: context.base64Encoder(input.Csr) }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
    ...(input.TemplateArn != null && { TemplateArn: input.TemplateArn }),
    ...(input.Validity != null && { Validity: serializeAws_json1_1Validity(input.Validity, context) }),
    ...(input.ValidityNotBefore != null && {
      ValidityNotBefore: serializeAws_json1_1Validity(input.ValidityNotBefore, context),
    }),
  };
};

const serializeAws_json1_1KeyUsage = (input: KeyUsage, context: __SerdeContext): any => {
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

const serializeAws_json1_1ListCertificateAuthoritiesRequest = (
  input: ListCertificateAuthoritiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceOwner != null && { ResourceOwner: input.ResourceOwner }),
  };
};

const serializeAws_json1_1ListPermissionsRequest = (input: ListPermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OcspConfiguration = (input: OcspConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.OcspCustomCname != null && { OcspCustomCname: input.OcspCustomCname }),
  };
};

const serializeAws_json1_1OtherName = (input: OtherName, context: __SerdeContext): any => {
  return {
    ...(input.TypeId != null && { TypeId: input.TypeId }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1PolicyInformation = (input: PolicyInformation, context: __SerdeContext): any => {
  return {
    ...(input.CertPolicyId != null && { CertPolicyId: input.CertPolicyId }),
    ...(input.PolicyQualifiers != null && {
      PolicyQualifiers: serializeAws_json1_1PolicyQualifierInfoList(input.PolicyQualifiers, context),
    }),
  };
};

const serializeAws_json1_1PolicyQualifierInfo = (input: PolicyQualifierInfo, context: __SerdeContext): any => {
  return {
    ...(input.PolicyQualifierId != null && { PolicyQualifierId: input.PolicyQualifierId }),
    ...(input.Qualifier != null && { Qualifier: serializeAws_json1_1Qualifier(input.Qualifier, context) }),
  };
};

const serializeAws_json1_1PolicyQualifierInfoList = (input: PolicyQualifierInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PolicyQualifierInfo(entry, context);
    });
};

const serializeAws_json1_1PutPolicyRequest = (input: PutPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1Qualifier = (input: Qualifier, context: __SerdeContext): any => {
  return {
    ...(input.CpsUri != null && { CpsUri: input.CpsUri }),
  };
};

const serializeAws_json1_1RestoreCertificateAuthorityRequest = (
  input: RestoreCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
  };
};

const serializeAws_json1_1RevocationConfiguration = (input: RevocationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrlConfiguration != null && {
      CrlConfiguration: serializeAws_json1_1CrlConfiguration(input.CrlConfiguration, context),
    }),
    ...(input.OcspConfiguration != null && {
      OcspConfiguration: serializeAws_json1_1OcspConfiguration(input.OcspConfiguration, context),
    }),
  };
};

const serializeAws_json1_1RevokeCertificateRequest = (
  input: RevokeCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CertificateSerial != null && { CertificateSerial: input.CertificateSerial }),
    ...(input.RevocationReason != null && { RevocationReason: input.RevocationReason }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagCertificateAuthorityRequest = (
  input: TagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1UntagCertificateAuthorityRequest = (
  input: UntagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UpdateCertificateAuthorityRequest = (
  input: UpdateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.RevocationConfiguration != null && {
      RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(input.RevocationConfiguration, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1Validity = (input: Validity, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const deserializeAws_json1_1AccessDescription = (output: any, context: __SerdeContext): AccessDescription => {
  return {
    AccessLocation:
      output.AccessLocation != null ? deserializeAws_json1_1GeneralName(output.AccessLocation, context) : undefined,
    AccessMethod:
      output.AccessMethod != null ? deserializeAws_json1_1AccessMethod(output.AccessMethod, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AccessDescriptionList = (output: any, context: __SerdeContext): AccessDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccessDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AccessMethod = (output: any, context: __SerdeContext): AccessMethod => {
  return {
    AccessMethodType: __expectString(output.AccessMethodType),
    CustomObjectIdentifier: __expectString(output.CustomObjectIdentifier),
  } as any;
};

const deserializeAws_json1_1ActionList = (output: any, context: __SerdeContext): (ActionType | string)[] => {
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

const deserializeAws_json1_1ASN1Subject = (output: any, context: __SerdeContext): ASN1Subject => {
  return {
    CommonName: __expectString(output.CommonName),
    Country: __expectString(output.Country),
    CustomAttributes:
      output.CustomAttributes != null
        ? deserializeAws_json1_1CustomAttributeList(output.CustomAttributes, context)
        : undefined,
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

const deserializeAws_json1_1CertificateAuthorities = (output: any, context: __SerdeContext): CertificateAuthority[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CertificateAuthority(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CertificateAuthority = (output: any, context: __SerdeContext): CertificateAuthority => {
  return {
    Arn: __expectString(output.Arn),
    CertificateAuthorityConfiguration:
      output.CertificateAuthorityConfiguration != null
        ? deserializeAws_json1_1CertificateAuthorityConfiguration(output.CertificateAuthorityConfiguration, context)
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
        ? deserializeAws_json1_1RevocationConfiguration(output.RevocationConfiguration, context)
        : undefined,
    Serial: __expectString(output.Serial),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    UsageMode: __expectString(output.UsageMode),
  } as any;
};

const deserializeAws_json1_1CertificateAuthorityConfiguration = (
  output: any,
  context: __SerdeContext
): CertificateAuthorityConfiguration => {
  return {
    CsrExtensions:
      output.CsrExtensions != null ? deserializeAws_json1_1CsrExtensions(output.CsrExtensions, context) : undefined,
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
    Subject: output.Subject != null ? deserializeAws_json1_1ASN1Subject(output.Subject, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateMismatchException = (
  output: any,
  context: __SerdeContext
): CertificateMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityAuditReportResponse => {
  return {
    AuditReportId: __expectString(output.AuditReportId),
    S3Key: __expectString(output.S3Key),
  } as any;
};

const deserializeAws_json1_1CreateCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityResponse => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
  } as any;
};

const deserializeAws_json1_1CrlConfiguration = (output: any, context: __SerdeContext): CrlConfiguration => {
  return {
    CustomCname: __expectString(output.CustomCname),
    Enabled: __expectBoolean(output.Enabled),
    ExpirationInDays: __expectInt32(output.ExpirationInDays),
    S3BucketName: __expectString(output.S3BucketName),
    S3ObjectAcl: __expectString(output.S3ObjectAcl),
  } as any;
};

const deserializeAws_json1_1CsrExtensions = (output: any, context: __SerdeContext): CsrExtensions => {
  return {
    KeyUsage: output.KeyUsage != null ? deserializeAws_json1_1KeyUsage(output.KeyUsage, context) : undefined,
    SubjectInformationAccess:
      output.SubjectInformationAccess != null
        ? deserializeAws_json1_1AccessDescriptionList(output.SubjectInformationAccess, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomAttribute = (output: any, context: __SerdeContext): CustomAttribute => {
  return {
    ObjectIdentifier: __expectString(output.ObjectIdentifier),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1CustomAttributeList = (output: any, context: __SerdeContext): CustomAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse = (
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

const deserializeAws_json1_1DescribeCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityResponse => {
  return {
    CertificateAuthority:
      output.CertificateAuthority != null
        ? deserializeAws_json1_1CertificateAuthority(output.CertificateAuthority, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EdiPartyName = (output: any, context: __SerdeContext): EdiPartyName => {
  return {
    NameAssigner: __expectString(output.NameAssigner),
    PartyName: __expectString(output.PartyName),
  } as any;
};

const deserializeAws_json1_1GeneralName = (output: any, context: __SerdeContext): GeneralName => {
  return {
    DirectoryName:
      output.DirectoryName != null ? deserializeAws_json1_1ASN1Subject(output.DirectoryName, context) : undefined,
    DnsName: __expectString(output.DnsName),
    EdiPartyName:
      output.EdiPartyName != null ? deserializeAws_json1_1EdiPartyName(output.EdiPartyName, context) : undefined,
    IpAddress: __expectString(output.IpAddress),
    OtherName: output.OtherName != null ? deserializeAws_json1_1OtherName(output.OtherName, context) : undefined,
    RegisteredId: __expectString(output.RegisteredId),
    Rfc822Name: __expectString(output.Rfc822Name),
    UniformResourceIdentifier: __expectString(output.UniformResourceIdentifier),
  } as any;
};

const deserializeAws_json1_1GetCertificateAuthorityCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
  } as any;
};

const deserializeAws_json1_1GetCertificateAuthorityCsrResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCsrResponse => {
  return {
    Csr: __expectString(output.Csr),
  } as any;
};

const deserializeAws_json1_1GetCertificateResponse = (output: any, context: __SerdeContext): GetCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
  } as any;
};

const deserializeAws_json1_1GetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
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

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPolicyException = (output: any, context: __SerdeContext): InvalidPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
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

const deserializeAws_json1_1IssueCertificateResponse = (
  output: any,
  context: __SerdeContext
): IssueCertificateResponse => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
  } as any;
};

const deserializeAws_json1_1KeyUsage = (output: any, context: __SerdeContext): KeyUsage => {
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

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListCertificateAuthoritiesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificateAuthoritiesResponse => {
  return {
    CertificateAuthorities:
      output.CertificateAuthorities != null
        ? deserializeAws_json1_1CertificateAuthorities(output.CertificateAuthorities, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Permissions:
      output.Permissions != null ? deserializeAws_json1_1PermissionList(output.Permissions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LockoutPreventedException = (
  output: any,
  context: __SerdeContext
): LockoutPreventedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MalformedCertificateException = (
  output: any,
  context: __SerdeContext
): MalformedCertificateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MalformedCSRException = (output: any, context: __SerdeContext): MalformedCSRException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OcspConfiguration = (output: any, context: __SerdeContext): OcspConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    OcspCustomCname: __expectString(output.OcspCustomCname),
  } as any;
};

const deserializeAws_json1_1OtherName = (output: any, context: __SerdeContext): OtherName => {
  return {
    TypeId: __expectString(output.TypeId),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    Actions: output.Actions != null ? deserializeAws_json1_1ActionList(output.Actions, context) : undefined,
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Policy: __expectString(output.Policy),
    Principal: __expectString(output.Principal),
    SourceAccount: __expectString(output.SourceAccount),
  } as any;
};

const deserializeAws_json1_1PermissionAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): PermissionAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PermissionList = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Permission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RequestAlreadyProcessedException = (
  output: any,
  context: __SerdeContext
): RequestAlreadyProcessedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RequestFailedException = (output: any, context: __SerdeContext): RequestFailedException => {
  return {
    message: __expectString(output.message),
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

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RevocationConfiguration = (
  output: any,
  context: __SerdeContext
): RevocationConfiguration => {
  return {
    CrlConfiguration:
      output.CrlConfiguration != null
        ? deserializeAws_json1_1CrlConfiguration(output.CrlConfiguration, context)
        : undefined,
    OcspConfiguration:
      output.OcspConfiguration != null
        ? deserializeAws_json1_1OcspConfiguration(output.OcspConfiguration, context)
        : undefined,
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

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
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
