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

export const serializeAws_restJson1AddProfilePermissionCommand = async (
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

export const serializeAws_restJson1CancelSigningProfileCommand = async (
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

export const serializeAws_restJson1DescribeSigningJobCommand = async (
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

export const serializeAws_restJson1GetSigningPlatformCommand = async (
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

export const serializeAws_restJson1GetSigningProfileCommand = async (
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

export const serializeAws_restJson1ListProfilePermissionsCommand = async (
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

export const serializeAws_restJson1ListSigningJobsCommand = async (
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

export const serializeAws_restJson1ListSigningPlatformsCommand = async (
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

export const serializeAws_restJson1ListSigningProfilesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutSigningProfileCommand = async (
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
    ...(input.overrides != null && {
      overrides: serializeAws_restJson1SigningPlatformOverrides(input.overrides, context),
    }),
    ...(input.platformId != null && { platformId: input.platformId }),
    ...(input.signatureValidityPeriod != null && {
      signatureValidityPeriod: serializeAws_restJson1SignatureValidityPeriod(input.signatureValidityPeriod, context),
    }),
    ...(input.signingMaterial != null && {
      signingMaterial: serializeAws_restJson1SigningMaterial(input.signingMaterial, context),
    }),
    ...(input.signingParameters != null && {
      signingParameters: serializeAws_restJson1SigningParameters(input.signingParameters, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1RemoveProfilePermissionCommand = async (
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

export const serializeAws_restJson1RevokeSignatureCommand = async (
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

export const serializeAws_restJson1RevokeSigningProfileCommand = async (
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

export const serializeAws_restJson1StartSigningJobCommand = async (
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
    ...(input.destination != null && { destination: serializeAws_restJson1Destination(input.destination, context) }),
    ...(input.profileName != null && { profileName: input.profileName }),
    ...(input.profileOwner != null && { profileOwner: input.profileOwner }),
    ...(input.source != null && { source: serializeAws_restJson1Source(input.source, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const deserializeAws_restJson1AddProfilePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfilePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddProfilePermissionCommandError(output, context);
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

const deserializeAws_restJson1AddProfilePermissionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.signer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.signer#ServiceLimitExceededException":
      throw await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelSigningProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelSigningProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSigningJobCommandError(output, context);
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
    contents.overrides = deserializeAws_restJson1SigningPlatformOverrides(data.overrides, context);
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
    contents.revocationRecord = deserializeAws_restJson1SigningJobRevocationRecord(data.revocationRecord, context);
  }
  if (data.signatureExpiresAt != null) {
    contents.signatureExpiresAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.signatureExpiresAt)));
  }
  if (data.signedObject != null) {
    contents.signedObject = deserializeAws_restJson1SignedObject(data.signedObject, context);
  }
  if (data.signingMaterial != null) {
    contents.signingMaterial = deserializeAws_restJson1SigningMaterial(data.signingMaterial, context);
  }
  if (data.signingParameters != null) {
    contents.signingParameters = deserializeAws_restJson1SigningParameters(data.signingParameters, context);
  }
  if (data.source != null) {
    contents.source = deserializeAws_restJson1Source(data.source, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason != null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSigningJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSigningPlatformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSigningPlatformCommandError(output, context);
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
    contents.signingConfiguration = deserializeAws_restJson1SigningConfiguration(data.signingConfiguration, context);
  }
  if (data.signingImageFormat != null) {
    contents.signingImageFormat = deserializeAws_restJson1SigningImageFormat(data.signingImageFormat, context);
  }
  if (data.target != null) {
    contents.target = __expectString(data.target);
  }
  return contents;
};

const deserializeAws_restJson1GetSigningPlatformCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSigningProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.overrides != null) {
    contents.overrides = deserializeAws_restJson1SigningPlatformOverrides(data.overrides, context);
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
    contents.revocationRecord = deserializeAws_restJson1SigningProfileRevocationRecord(data.revocationRecord, context);
  }
  if (data.signatureValidityPeriod != null) {
    contents.signatureValidityPeriod = deserializeAws_restJson1SignatureValidityPeriod(
      data.signatureValidityPeriod,
      context
    );
  }
  if (data.signingMaterial != null) {
    contents.signingMaterial = deserializeAws_restJson1SigningMaterial(data.signingMaterial, context);
  }
  if (data.signingParameters != null) {
    contents.signingParameters = deserializeAws_restJson1SigningParameters(data.signingParameters, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason != null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSigningProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListProfilePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProfilePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = deserializeAws_restJson1Permissions(data.permissions, context);
  }
  if (data.policySizeBytes != null) {
    contents.policySizeBytes = __expectInt32(data.policySizeBytes);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

const deserializeAws_restJson1ListProfilePermissionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSigningJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSigningJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = deserializeAws_restJson1SigningJobs(data.jobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSigningJobsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSigningPlatformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSigningPlatformsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.platforms != null) {
    contents.platforms = deserializeAws_restJson1SigningPlatforms(data.platforms, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSigningPlatformsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSigningProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSigningProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.profiles != null) {
    contents.profiles = deserializeAws_restJson1SigningProfiles(data.profiles, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSigningProfilesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSigningProfileCommandError(output, context);
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

const deserializeAws_restJson1PutSigningProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveProfilePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveProfilePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveProfilePermissionCommandError(output, context);
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

const deserializeAws_restJson1RemoveProfilePermissionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.signer#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RevokeSignatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSignatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeSignatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RevokeSignatureCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RevokeSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeSigningProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RevokeSigningProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSigningJobCommandError(output, context);
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

const deserializeAws_restJson1StartSigningJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.signer#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.s3 != null && { s3: serializeAws_restJson1S3Destination(input.s3, context) }),
  };
};

const serializeAws_restJson1S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1S3Source = (input: S3Source, context: __SerdeContext): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.key != null && { key: input.key }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_restJson1SignatureValidityPeriod = (
  input: SignatureValidityPeriod,
  context: __SerdeContext
): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1SigningConfigurationOverrides = (
  input: SigningConfigurationOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionAlgorithm != null && { encryptionAlgorithm: input.encryptionAlgorithm }),
    ...(input.hashAlgorithm != null && { hashAlgorithm: input.hashAlgorithm }),
  };
};

const serializeAws_restJson1SigningMaterial = (input: SigningMaterial, context: __SerdeContext): any => {
  return {
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
  };
};

const serializeAws_restJson1SigningParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SigningPlatformOverrides = (
  input: SigningPlatformOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.signingConfiguration != null && {
      signingConfiguration: serializeAws_restJson1SigningConfigurationOverrides(input.signingConfiguration, context),
    }),
    ...(input.signingImageFormat != null && { signingImageFormat: input.signingImageFormat }),
  };
};

const serializeAws_restJson1Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.s3 != null && { s3: serializeAws_restJson1S3Source(input.s3, context) }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1EncryptionAlgorithmOptions = (
  output: any,
  context: __SerdeContext
): EncryptionAlgorithmOptions => {
  return {
    allowedValues:
      output.allowedValues != null
        ? deserializeAws_restJson1EncryptionAlgorithms(output.allowedValues, context)
        : undefined,
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

const deserializeAws_restJson1EncryptionAlgorithms = (
  output: any,
  context: __SerdeContext
): (EncryptionAlgorithm | string)[] => {
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

const deserializeAws_restJson1HashAlgorithmOptions = (output: any, context: __SerdeContext): HashAlgorithmOptions => {
  return {
    allowedValues:
      output.allowedValues != null ? deserializeAws_restJson1HashAlgorithms(output.allowedValues, context) : undefined,
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

const deserializeAws_restJson1HashAlgorithms = (output: any, context: __SerdeContext): (HashAlgorithm | string)[] => {
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

const deserializeAws_restJson1ImageFormats = (output: any, context: __SerdeContext): (ImageFormat | string)[] => {
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

const deserializeAws_restJson1Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    action: __expectString(output.action),
    principal: __expectString(output.principal),
    profileVersion: __expectString(output.profileVersion),
    statementId: __expectString(output.statementId),
  } as any;
};

const deserializeAws_restJson1Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Permission(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3SignedObject = (output: any, context: __SerdeContext): S3SignedObject => {
  return {
    bucketName: __expectString(output.bucketName),
    key: __expectString(output.key),
  } as any;
};

const deserializeAws_restJson1S3Source = (output: any, context: __SerdeContext): S3Source => {
  return {
    bucketName: __expectString(output.bucketName),
    key: __expectString(output.key),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1SignatureValidityPeriod = (
  output: any,
  context: __SerdeContext
): SignatureValidityPeriod => {
  return {
    type: __expectString(output.type),
    value: __expectInt32(output.value),
  } as any;
};

const deserializeAws_restJson1SignedObject = (output: any, context: __SerdeContext): SignedObject => {
  return {
    s3: output.s3 != null ? deserializeAws_restJson1S3SignedObject(output.s3, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SigningConfiguration = (output: any, context: __SerdeContext): SigningConfiguration => {
  return {
    encryptionAlgorithmOptions:
      output.encryptionAlgorithmOptions != null
        ? deserializeAws_restJson1EncryptionAlgorithmOptions(output.encryptionAlgorithmOptions, context)
        : undefined,
    hashAlgorithmOptions:
      output.hashAlgorithmOptions != null
        ? deserializeAws_restJson1HashAlgorithmOptions(output.hashAlgorithmOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SigningConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): SigningConfigurationOverrides => {
  return {
    encryptionAlgorithm: __expectString(output.encryptionAlgorithm),
    hashAlgorithm: __expectString(output.hashAlgorithm),
  } as any;
};

const deserializeAws_restJson1SigningImageFormat = (output: any, context: __SerdeContext): SigningImageFormat => {
  return {
    defaultFormat: __expectString(output.defaultFormat),
    supportedFormats:
      output.supportedFormats != null
        ? deserializeAws_restJson1ImageFormats(output.supportedFormats, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SigningJob = (output: any, context: __SerdeContext): SigningJob => {
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
    signedObject:
      output.signedObject != null ? deserializeAws_restJson1SignedObject(output.signedObject, context) : undefined,
    signingMaterial:
      output.signingMaterial != null
        ? deserializeAws_restJson1SigningMaterial(output.signingMaterial, context)
        : undefined,
    source: output.source != null ? deserializeAws_restJson1Source(output.source, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1SigningJobRevocationRecord = (
  output: any,
  context: __SerdeContext
): SigningJobRevocationRecord => {
  return {
    reason: __expectString(output.reason),
    revokedAt:
      output.revokedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.revokedAt))) : undefined,
    revokedBy: __expectString(output.revokedBy),
  } as any;
};

const deserializeAws_restJson1SigningJobs = (output: any, context: __SerdeContext): SigningJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SigningJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SigningMaterial = (output: any, context: __SerdeContext): SigningMaterial => {
  return {
    certificateArn: __expectString(output.certificateArn),
  } as any;
};

const deserializeAws_restJson1SigningParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SigningPlatform = (output: any, context: __SerdeContext): SigningPlatform => {
  return {
    category: __expectString(output.category),
    displayName: __expectString(output.displayName),
    maxSizeInMB: __expectInt32(output.maxSizeInMB),
    partner: __expectString(output.partner),
    platformId: __expectString(output.platformId),
    revocationSupported: __expectBoolean(output.revocationSupported),
    signingConfiguration:
      output.signingConfiguration != null
        ? deserializeAws_restJson1SigningConfiguration(output.signingConfiguration, context)
        : undefined,
    signingImageFormat:
      output.signingImageFormat != null
        ? deserializeAws_restJson1SigningImageFormat(output.signingImageFormat, context)
        : undefined,
    target: __expectString(output.target),
  } as any;
};

const deserializeAws_restJson1SigningPlatformOverrides = (
  output: any,
  context: __SerdeContext
): SigningPlatformOverrides => {
  return {
    signingConfiguration:
      output.signingConfiguration != null
        ? deserializeAws_restJson1SigningConfigurationOverrides(output.signingConfiguration, context)
        : undefined,
    signingImageFormat: __expectString(output.signingImageFormat),
  } as any;
};

const deserializeAws_restJson1SigningPlatforms = (output: any, context: __SerdeContext): SigningPlatform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SigningPlatform(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SigningProfile = (output: any, context: __SerdeContext): SigningProfile => {
  return {
    arn: __expectString(output.arn),
    platformDisplayName: __expectString(output.platformDisplayName),
    platformId: __expectString(output.platformId),
    profileName: __expectString(output.profileName),
    profileVersion: __expectString(output.profileVersion),
    profileVersionArn: __expectString(output.profileVersionArn),
    signatureValidityPeriod:
      output.signatureValidityPeriod != null
        ? deserializeAws_restJson1SignatureValidityPeriod(output.signatureValidityPeriod, context)
        : undefined,
    signingMaterial:
      output.signingMaterial != null
        ? deserializeAws_restJson1SigningMaterial(output.signingMaterial, context)
        : undefined,
    signingParameters:
      output.signingParameters != null
        ? deserializeAws_restJson1SigningParameters(output.signingParameters, context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SigningProfileRevocationRecord = (
  output: any,
  context: __SerdeContext
): SigningProfileRevocationRecord => {
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

const deserializeAws_restJson1SigningProfiles = (output: any, context: __SerdeContext): SigningProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SigningProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    s3: output.s3 != null ? deserializeAws_restJson1S3Source(output.s3, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
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
