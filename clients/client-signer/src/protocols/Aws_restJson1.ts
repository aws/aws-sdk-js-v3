// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AddProfilePermissionCommandInput,
  AddProfilePermissionCommandOutput,
} from "../commands/AddProfilePermissionCommand";
import {
  CancelSigningProfileCommandInput,
  CancelSigningProfileCommandOutput,
} from "../commands/CancelSigningProfileCommand";
import { DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput } from "../commands/DescribeSigningJobCommand";
import { GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput } from "../commands/GetSigningPlatformCommand";
import { GetSigningProfileCommandInput, GetSigningProfileCommandOutput } from "../commands/GetSigningProfileCommand";
import {
  ListProfilePermissionsCommandInput,
  ListProfilePermissionsCommandOutput,
} from "../commands/ListProfilePermissionsCommand";
import { ListSigningJobsCommandInput, ListSigningJobsCommandOutput } from "../commands/ListSigningJobsCommand";
import {
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
} from "../commands/ListSigningPlatformsCommand";
import {
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
} from "../commands/ListSigningProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutSigningProfileCommandInput, PutSigningProfileCommandOutput } from "../commands/PutSigningProfileCommand";
import {
  RemoveProfilePermissionCommandInput,
  RemoveProfilePermissionCommandOutput,
} from "../commands/RemoveProfilePermissionCommand";
import { RevokeSignatureCommandInput, RevokeSignatureCommandOutput } from "../commands/RevokeSignatureCommand";
import {
  RevokeSigningProfileCommandInput,
  RevokeSigningProfileCommandOutput,
} from "../commands/RevokeSigningProfileCommand";
import { StartSigningJobCommandInput, StartSigningJobCommandOutput } from "../commands/StartSigningJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  BadRequestException,
  ConflictException,
  Destination,
  EncryptionAlgorithm,
  EncryptionAlgorithmOptions,
  HashAlgorithm,
  HashAlgorithmOptions,
  ImageFormat,
  InternalServiceErrorException,
  NotFoundException,
  Permission,
  ResourceNotFoundException,
  S3Destination,
  S3SignedObject,
  S3Source,
  ServiceLimitExceededException,
  SignatureValidityPeriod,
  SignedObject,
  SigningConfiguration,
  SigningConfigurationOverrides,
  SigningImageFormat,
  SigningJob,
  SigningJobRevocationRecord,
  SigningMaterial,
  SigningPlatform,
  SigningPlatformOverrides,
  SigningProfile,
  SigningProfileRevocationRecord,
  Source,
  ThrottlingException,
  TooManyRequestsException,
  ValidationException,
} from "../models/models_0";
import { SignerServiceException as __BaseException } from "../models/SignerServiceException";

/**
 * serializeAws_restJson1AddProfilePermissionCommand
 */
export const se_AddProfilePermissionCommand = async (
  input: AddProfilePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/signing-profiles/{profileName}/permissions";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: input.action }),
    ...(input.principal != null && { principal: input.principal }),
    ...(input.profileVersion != null && { profileVersion: input.profileVersion }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
    ...(input.statementId != null && { statementId: input.statementId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CancelSigningProfileCommand
 */
export const se_CancelSigningProfileCommand = async (
  input: CancelSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-profiles/{profileName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSigningJobCommand
 */
export const se_DescribeSigningJobCommand = async (
  input: DescribeSigningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSigningPlatformCommand
 */
export const se_GetSigningPlatformCommand = async (
  input: GetSigningPlatformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-platforms/{platformId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "platformId", () => input.platformId!, "{platformId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSigningProfileCommand
 */
export const se_GetSigningProfileCommand = async (
  input: GetSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-profiles/{profileName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileName", () => input.profileName!, "{profileName}", false);
  const query: any = map({
    profileOwner: [, input.profileOwner!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListProfilePermissionsCommand
 */
export const se_ListProfilePermissionsCommand = async (
  input: ListProfilePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/signing-profiles/{profileName}/permissions";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileName", () => input.profileName!, "{profileName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListSigningJobsCommand
 */
export const se_ListSigningJobsCommand = async (
  input: ListSigningJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-jobs";
  const query: any = map({
    status: [, input.status!],
    platformId: [, input.platformId!],
    requestedBy: [, input.requestedBy!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    isRevoked: [() => input.isRevoked !== void 0, () => input.isRevoked!.toString()],
    signatureExpiresBefore: [
      () => input.signatureExpiresBefore !== void 0,
      () => (input.signatureExpiresBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    signatureExpiresAfter: [
      () => input.signatureExpiresAfter !== void 0,
      () => (input.signatureExpiresAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    jobInvoker: [, input.jobInvoker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListSigningPlatformsCommand
 */
export const se_ListSigningPlatformsCommand = async (
  input: ListSigningPlatformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-platforms";
  const query: any = map({
    category: [, input.category!],
    partner: [, input.partner!],
    target: [, input.target!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListSigningProfilesCommand
 */
export const se_ListSigningProfilesCommand = async (
  input: ListSigningProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-profiles";
  const query: any = map({
    includeCanceled: [() => input.includeCanceled !== void 0, () => input.includeCanceled!.toString()],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    platformId: [, input.platformId!],
    statuses: [() => input.statuses !== void 0, () => (input.statuses! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutSigningProfileCommand
 */
export const se_PutSigningProfileCommand = async (
  input: PutSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-profiles/{profileName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.overrides != null && { overrides: se_SigningPlatformOverrides(input.overrides, context) }),
    ...(input.platformId != null && { platformId: input.platformId }),
    ...(input.signatureValidityPeriod != null && {
      signatureValidityPeriod: se_SignatureValidityPeriod(input.signatureValidityPeriod, context),
    }),
    ...(input.signingMaterial != null && { signingMaterial: se_SigningMaterial(input.signingMaterial, context) }),
    ...(input.signingParameters != null && {
      signingParameters: se_SigningParameters(input.signingParameters, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveProfilePermissionCommand
 */
export const se_RemoveProfilePermissionCommand = async (
  input: RemoveProfilePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/signing-profiles/{profileName}/permissions/{statementId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileName", () => input.profileName!, "{profileName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statementId", () => input.statementId!, "{statementId}", false);
  const query: any = map({
    revisionId: [, __expectNonNull(input.revisionId!, `revisionId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1RevokeSignatureCommand
 */
export const se_RevokeSignatureCommand = async (
  input: RevokeSignatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-jobs/{jobId}/revoke";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.jobOwner != null && { jobOwner: input.jobOwner }),
    ...(input.reason != null && { reason: input.reason }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RevokeSigningProfileCommand
 */
export const se_RevokeSigningProfileCommand = async (
  input: RevokeSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-profiles/{profileName}/revoke";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.effectiveTime != null && { effectiveTime: Math.round(input.effectiveTime.getTime() / 1000) }),
    ...(input.profileVersion != null && { profileVersion: input.profileVersion }),
    ...(input.reason != null && { reason: input.reason }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartSigningJobCommand
 */
export const se_StartSigningJobCommand = async (
  input: StartSigningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-jobs";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.destination != null && { destination: se_Destination(input.destination, context) }),
    ...(input.profileName != null && { profileName: input.profileName }),
    ...(input.profileOwner != null && { profileOwner: input.profileOwner }),
    ...(input.source != null && { source: se_Source(input.source, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1AddProfilePermissionCommand
 */
export const de_AddProfilePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfilePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddProfilePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddProfilePermissionCommandError
 */
const de_AddProfilePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfilePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.signer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.signer#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1CancelSigningProfileCommand
 */
export const de_CancelSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelSigningProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSigningProfileCommandError
 */
const de_CancelSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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
 * deserializeAws_restJson1DescribeSigningJobCommand
 */
export const de_DescribeSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSigningJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.completedAt != null) {
    contents.completedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.completedAt)));
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobInvoker != null) {
    contents.jobInvoker = __expectString(data.jobInvoker);
  }
  if (data.jobOwner != null) {
    contents.jobOwner = __expectString(data.jobOwner);
  }
  if (data.overrides != null) {
    contents.overrides = de_SigningPlatformOverrides(data.overrides, context);
  }
  if (data.platformDisplayName != null) {
    contents.platformDisplayName = __expectString(data.platformDisplayName);
  }
  if (data.platformId != null) {
    contents.platformId = __expectString(data.platformId);
  }
  if (data.profileName != null) {
    contents.profileName = __expectString(data.profileName);
  }
  if (data.profileVersion != null) {
    contents.profileVersion = __expectString(data.profileVersion);
  }
  if (data.requestedBy != null) {
    contents.requestedBy = __expectString(data.requestedBy);
  }
  if (data.revocationRecord != null) {
    contents.revocationRecord = de_SigningJobRevocationRecord(data.revocationRecord, context);
  }
  if (data.signatureExpiresAt != null) {
    contents.signatureExpiresAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.signatureExpiresAt)));
  }
  if (data.signedObject != null) {
    contents.signedObject = de_SignedObject(data.signedObject, context);
  }
  if (data.signingMaterial != null) {
    contents.signingMaterial = de_SigningMaterial(data.signingMaterial, context);
  }
  if (data.signingParameters != null) {
    contents.signingParameters = de_SigningParameters(data.signingParameters, context);
  }
  if (data.source != null) {
    contents.source = de_Source(data.source, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason != null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSigningJobCommandError
 */
const de_DescribeSigningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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
 * deserializeAws_restJson1GetSigningPlatformCommand
 */
export const de_GetSigningPlatformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSigningPlatformCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.category != null) {
    contents.category = __expectString(data.category);
  }
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.maxSizeInMB != null) {
    contents.maxSizeInMB = __expectInt32(data.maxSizeInMB);
  }
  if (data.partner != null) {
    contents.partner = __expectString(data.partner);
  }
  if (data.platformId != null) {
    contents.platformId = __expectString(data.platformId);
  }
  if (data.revocationSupported != null) {
    contents.revocationSupported = __expectBoolean(data.revocationSupported);
  }
  if (data.signingConfiguration != null) {
    contents.signingConfiguration = de_SigningConfiguration(data.signingConfiguration, context);
  }
  if (data.signingImageFormat != null) {
    contents.signingImageFormat = de_SigningImageFormat(data.signingImageFormat, context);
  }
  if (data.target != null) {
    contents.target = __expectString(data.target);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSigningPlatformCommandError
 */
const de_GetSigningPlatformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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
 * deserializeAws_restJson1GetSigningProfileCommand
 */
export const de_GetSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSigningProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.overrides != null) {
    contents.overrides = de_SigningPlatformOverrides(data.overrides, context);
  }
  if (data.platformDisplayName != null) {
    contents.platformDisplayName = __expectString(data.platformDisplayName);
  }
  if (data.platformId != null) {
    contents.platformId = __expectString(data.platformId);
  }
  if (data.profileName != null) {
    contents.profileName = __expectString(data.profileName);
  }
  if (data.profileVersion != null) {
    contents.profileVersion = __expectString(data.profileVersion);
  }
  if (data.profileVersionArn != null) {
    contents.profileVersionArn = __expectString(data.profileVersionArn);
  }
  if (data.revocationRecord != null) {
    contents.revocationRecord = de_SigningProfileRevocationRecord(data.revocationRecord, context);
  }
  if (data.signatureValidityPeriod != null) {
    contents.signatureValidityPeriod = de_SignatureValidityPeriod(data.signatureValidityPeriod, context);
  }
  if (data.signingMaterial != null) {
    contents.signingMaterial = de_SigningMaterial(data.signingMaterial, context);
  }
  if (data.signingParameters != null) {
    contents.signingParameters = de_SigningParameters(data.signingParameters, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason != null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSigningProfileCommandError
 */
const de_GetSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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
 * deserializeAws_restJson1ListProfilePermissionsCommand
 */
export const de_ListProfilePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProfilePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = de_Permissions(data.permissions, context);
  }
  if (data.policySizeBytes != null) {
    contents.policySizeBytes = __expectInt32(data.policySizeBytes);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProfilePermissionsCommandError
 */
const de_ListProfilePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1ListSigningJobsCommand
 */
export const de_ListSigningJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSigningJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = de_SigningJobs(data.jobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSigningJobsCommandError
 */
const de_ListSigningJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1ListSigningPlatformsCommand
 */
export const de_ListSigningPlatformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSigningPlatformsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.platforms != null) {
    contents.platforms = de_SigningPlatforms(data.platforms, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSigningPlatformsCommandError
 */
const de_ListSigningPlatformsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1ListSigningProfilesCommand
 */
export const de_ListSigningProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSigningProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.profiles != null) {
    contents.profiles = de_SigningProfiles(data.profiles, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSigningProfilesCommandError
 */
const de_ListSigningProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "BadRequestException":
    case "com.amazonaws.signer#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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
 * deserializeAws_restJson1PutSigningProfileCommand
 */
export const de_PutSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutSigningProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.profileVersion != null) {
    contents.profileVersion = __expectString(data.profileVersion);
  }
  if (data.profileVersionArn != null) {
    contents.profileVersionArn = __expectString(data.profileVersionArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutSigningProfileCommandError
 */
const de_PutSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1RemoveProfilePermissionCommand
 */
export const de_RemoveProfilePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveProfilePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveProfilePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveProfilePermissionCommandError
 */
const de_RemoveProfilePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveProfilePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.signer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1RevokeSignatureCommand
 */
export const de_RevokeSignatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSignatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RevokeSignatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeSignatureCommandError
 */
const de_RevokeSignatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSignatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1RevokeSigningProfileCommand
 */
export const de_RevokeSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RevokeSigningProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeSigningProfileCommandError
 */
const de_RevokeSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1StartSigningJobCommand
 */
export const de_StartSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartSigningJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobOwner != null) {
    contents.jobOwner = __expectString(data.jobOwner);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartSigningJobCommandError
 */
const de_StartSigningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.signer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "BadRequestException":
    case "com.amazonaws.signer#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "BadRequestException":
    case "com.amazonaws.signer#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceLimitExceededExceptionRes
 */
const de_ServiceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1Destination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.s3 != null && { s3: se_S3Destination(input.s3, context) }),
  };
};

/**
 * serializeAws_restJson1S3Destination
 */
const se_S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_restJson1S3Source
 */
const se_S3Source = (input: S3Source, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.key != null && { key: input.key }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1SignatureValidityPeriod
 */
const se_SignatureValidityPeriod = (input: SignatureValidityPeriod, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1SigningConfigurationOverrides
 */
const se_SigningConfigurationOverrides = (input: SigningConfigurationOverrides, context: __SerdeContext): any => {
  return {
    ...(input.encryptionAlgorithm != null && { encryptionAlgorithm: input.encryptionAlgorithm }),
    ...(input.hashAlgorithm != null && { hashAlgorithm: input.hashAlgorithm }),
  };
};

/**
 * serializeAws_restJson1SigningMaterial
 */
const se_SigningMaterial = (input: SigningMaterial, context: __SerdeContext): any => {
  return {
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
  };
};

/**
 * serializeAws_restJson1SigningParameters
 */
const se_SigningParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SigningPlatformOverrides
 */
const se_SigningPlatformOverrides = (input: SigningPlatformOverrides, context: __SerdeContext): any => {
  return {
    ...(input.signingConfiguration != null && {
      signingConfiguration: se_SigningConfigurationOverrides(input.signingConfiguration, context),
    }),
    ...(input.signingImageFormat != null && { signingImageFormat: input.signingImageFormat }),
  };
};

/**
 * serializeAws_restJson1Source
 */
const se_Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.s3 != null && { s3: se_S3Source(input.s3, context) }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EncryptionAlgorithmOptions
 */
const de_EncryptionAlgorithmOptions = (output: any, context: __SerdeContext): EncryptionAlgorithmOptions => {
  return {
    allowedValues: output.allowedValues != null ? de_EncryptionAlgorithms(output.allowedValues, context) : undefined,
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionAlgorithms
 */
const de_EncryptionAlgorithms = (output: any, context: __SerdeContext): (EncryptionAlgorithm | string)[] => {
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
 * deserializeAws_restJson1HashAlgorithmOptions
 */
const de_HashAlgorithmOptions = (output: any, context: __SerdeContext): HashAlgorithmOptions => {
  return {
    allowedValues: output.allowedValues != null ? de_HashAlgorithms(output.allowedValues, context) : undefined,
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

/**
 * deserializeAws_restJson1HashAlgorithms
 */
const de_HashAlgorithms = (output: any, context: __SerdeContext): (HashAlgorithm | string)[] => {
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
 * deserializeAws_restJson1ImageFormats
 */
const de_ImageFormats = (output: any, context: __SerdeContext): (ImageFormat | string)[] => {
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
 * deserializeAws_restJson1Permission
 */
const de_Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    action: __expectString(output.action),
    principal: __expectString(output.principal),
    profileVersion: __expectString(output.profileVersion),
    statementId: __expectString(output.statementId),
  } as any;
};

/**
 * deserializeAws_restJson1Permissions
 */
const de_Permissions = (output: any, context: __SerdeContext): Permission[] => {
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
 * deserializeAws_restJson1S3SignedObject
 */
const de_S3SignedObject = (output: any, context: __SerdeContext): S3SignedObject => {
  return {
    bucketName: __expectString(output.bucketName),
    key: __expectString(output.key),
  } as any;
};

/**
 * deserializeAws_restJson1S3Source
 */
const de_S3Source = (output: any, context: __SerdeContext): S3Source => {
  return {
    bucketName: __expectString(output.bucketName),
    key: __expectString(output.key),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1SignatureValidityPeriod
 */
const de_SignatureValidityPeriod = (output: any, context: __SerdeContext): SignatureValidityPeriod => {
  return {
    type: __expectString(output.type),
    value: __expectInt32(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1SignedObject
 */
const de_SignedObject = (output: any, context: __SerdeContext): SignedObject => {
  return {
    s3: output.s3 != null ? de_S3SignedObject(output.s3, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SigningConfiguration
 */
const de_SigningConfiguration = (output: any, context: __SerdeContext): SigningConfiguration => {
  return {
    encryptionAlgorithmOptions:
      output.encryptionAlgorithmOptions != null
        ? de_EncryptionAlgorithmOptions(output.encryptionAlgorithmOptions, context)
        : undefined,
    hashAlgorithmOptions:
      output.hashAlgorithmOptions != null ? de_HashAlgorithmOptions(output.hashAlgorithmOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SigningConfigurationOverrides
 */
const de_SigningConfigurationOverrides = (output: any, context: __SerdeContext): SigningConfigurationOverrides => {
  return {
    encryptionAlgorithm: __expectString(output.encryptionAlgorithm),
    hashAlgorithm: __expectString(output.hashAlgorithm),
  } as any;
};

/**
 * deserializeAws_restJson1SigningImageFormat
 */
const de_SigningImageFormat = (output: any, context: __SerdeContext): SigningImageFormat => {
  return {
    defaultFormat: __expectString(output.defaultFormat),
    supportedFormats: output.supportedFormats != null ? de_ImageFormats(output.supportedFormats, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SigningJob
 */
const de_SigningJob = (output: any, context: __SerdeContext): SigningJob => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    isRevoked: __expectBoolean(output.isRevoked),
    jobId: __expectString(output.jobId),
    jobInvoker: __expectString(output.jobInvoker),
    jobOwner: __expectString(output.jobOwner),
    platformDisplayName: __expectString(output.platformDisplayName),
    platformId: __expectString(output.platformId),
    profileName: __expectString(output.profileName),
    profileVersion: __expectString(output.profileVersion),
    signatureExpiresAt:
      output.signatureExpiresAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.signatureExpiresAt)))
        : undefined,
    signedObject: output.signedObject != null ? de_SignedObject(output.signedObject, context) : undefined,
    signingMaterial: output.signingMaterial != null ? de_SigningMaterial(output.signingMaterial, context) : undefined,
    source: output.source != null ? de_Source(output.source, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1SigningJobRevocationRecord
 */
const de_SigningJobRevocationRecord = (output: any, context: __SerdeContext): SigningJobRevocationRecord => {
  return {
    reason: __expectString(output.reason),
    revokedAt:
      output.revokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.revokedAt))) : undefined,
    revokedBy: __expectString(output.revokedBy),
  } as any;
};

/**
 * deserializeAws_restJson1SigningJobs
 */
const de_SigningJobs = (output: any, context: __SerdeContext): SigningJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SigningJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SigningMaterial
 */
const de_SigningMaterial = (output: any, context: __SerdeContext): SigningMaterial => {
  return {
    certificateArn: __expectString(output.certificateArn),
  } as any;
};

/**
 * deserializeAws_restJson1SigningParameters
 */
const de_SigningParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SigningPlatform
 */
const de_SigningPlatform = (output: any, context: __SerdeContext): SigningPlatform => {
  return {
    category: __expectString(output.category),
    displayName: __expectString(output.displayName),
    maxSizeInMB: __expectInt32(output.maxSizeInMB),
    partner: __expectString(output.partner),
    platformId: __expectString(output.platformId),
    revocationSupported: __expectBoolean(output.revocationSupported),
    signingConfiguration:
      output.signingConfiguration != null ? de_SigningConfiguration(output.signingConfiguration, context) : undefined,
    signingImageFormat:
      output.signingImageFormat != null ? de_SigningImageFormat(output.signingImageFormat, context) : undefined,
    target: __expectString(output.target),
  } as any;
};

/**
 * deserializeAws_restJson1SigningPlatformOverrides
 */
const de_SigningPlatformOverrides = (output: any, context: __SerdeContext): SigningPlatformOverrides => {
  return {
    signingConfiguration:
      output.signingConfiguration != null
        ? de_SigningConfigurationOverrides(output.signingConfiguration, context)
        : undefined,
    signingImageFormat: __expectString(output.signingImageFormat),
  } as any;
};

/**
 * deserializeAws_restJson1SigningPlatforms
 */
const de_SigningPlatforms = (output: any, context: __SerdeContext): SigningPlatform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SigningPlatform(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SigningProfile
 */
const de_SigningProfile = (output: any, context: __SerdeContext): SigningProfile => {
  return {
    arn: __expectString(output.arn),
    platformDisplayName: __expectString(output.platformDisplayName),
    platformId: __expectString(output.platformId),
    profileName: __expectString(output.profileName),
    profileVersion: __expectString(output.profileVersion),
    profileVersionArn: __expectString(output.profileVersionArn),
    signatureValidityPeriod:
      output.signatureValidityPeriod != null
        ? de_SignatureValidityPeriod(output.signatureValidityPeriod, context)
        : undefined,
    signingMaterial: output.signingMaterial != null ? de_SigningMaterial(output.signingMaterial, context) : undefined,
    signingParameters:
      output.signingParameters != null ? de_SigningParameters(output.signingParameters, context) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SigningProfileRevocationRecord
 */
const de_SigningProfileRevocationRecord = (output: any, context: __SerdeContext): SigningProfileRevocationRecord => {
  return {
    revocationEffectiveFrom:
      output.revocationEffectiveFrom != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.revocationEffectiveFrom)))
        : undefined,
    revokedAt:
      output.revokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.revokedAt))) : undefined,
    revokedBy: __expectString(output.revokedBy),
  } as any;
};

/**
 * deserializeAws_restJson1SigningProfiles
 */
const de_SigningProfiles = (output: any, context: __SerdeContext): SigningProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SigningProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    s3: output.s3 != null ? de_S3Source(output.s3, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
