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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileName.");
    }
    resolvedPath = resolvedPath.replace("{profileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    ...(input.principal !== undefined && input.principal !== null && { principal: input.principal }),
    ...(input.profileVersion !== undefined &&
      input.profileVersion !== null && { profileVersion: input.profileVersion }),
    ...(input.revisionId !== undefined && input.revisionId !== null && { revisionId: input.revisionId }),
    ...(input.statementId !== undefined && input.statementId !== null && { statementId: input.statementId }),
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
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileName.");
    }
    resolvedPath = resolvedPath.replace("{profileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
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
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
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
  if (input.platformId !== undefined) {
    const labelValue: string = input.platformId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: platformId.");
    }
    resolvedPath = resolvedPath.replace("{platformId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: platformId.");
  }
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
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileName.");
    }
    resolvedPath = resolvedPath.replace("{profileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  const query: any = {
    ...(input.profileOwner !== undefined && { profileOwner: input.profileOwner }),
  };
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
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileName.");
    }
    resolvedPath = resolvedPath.replace("{profileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-jobs";
  const query: any = {
    ...(input.status !== undefined && { status: input.status }),
    ...(input.platformId !== undefined && { platformId: input.platformId }),
    ...(input.requestedBy !== undefined && { requestedBy: input.requestedBy }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.isRevoked !== undefined && { isRevoked: input.isRevoked.toString() }),
    ...(input.signatureExpiresBefore !== undefined && {
      signatureExpiresBefore: (input.signatureExpiresBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.signatureExpiresAfter !== undefined && {
      signatureExpiresAfter: (input.signatureExpiresAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.jobInvoker !== undefined && { jobInvoker: input.jobInvoker }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-platforms";
  const query: any = {
    ...(input.category !== undefined && { category: input.category }),
    ...(input.partner !== undefined && { partner: input.partner }),
    ...(input.target !== undefined && { target: input.target }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-profiles";
  const query: any = {
    ...(input.includeCanceled !== undefined && { includeCanceled: input.includeCanceled.toString() }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.platformId !== undefined && { platformId: input.platformId }),
    ...(input.statuses !== undefined && { statuses: (input.statuses || []).map((_entry) => _entry as any) }),
  };
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
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
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileName.");
    }
    resolvedPath = resolvedPath.replace("{profileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.overrides !== undefined &&
      input.overrides !== null && {
        overrides: serializeAws_restJson1SigningPlatformOverrides(input.overrides, context),
      }),
    ...(input.platformId !== undefined && input.platformId !== null && { platformId: input.platformId }),
    ...(input.signatureValidityPeriod !== undefined &&
      input.signatureValidityPeriod !== null && {
        signatureValidityPeriod: serializeAws_restJson1SignatureValidityPeriod(input.signatureValidityPeriod, context),
      }),
    ...(input.signingMaterial !== undefined &&
      input.signingMaterial !== null && {
        signingMaterial: serializeAws_restJson1SigningMaterial(input.signingMaterial, context),
      }),
    ...(input.signingParameters !== undefined &&
      input.signingParameters !== null && {
        signingParameters: serializeAws_restJson1SigningParameters(input.signingParameters, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileName.");
    }
    resolvedPath = resolvedPath.replace("{profileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  if (input.statementId !== undefined) {
    const labelValue: string = input.statementId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statementId.");
    }
    resolvedPath = resolvedPath.replace("{statementId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statementId.");
  }
  const query: any = {
    ...(input.revisionId !== undefined && { revisionId: input.revisionId }),
  };
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
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.jobOwner !== undefined && input.jobOwner !== null && { jobOwner: input.jobOwner }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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
  if (input.profileName !== undefined) {
    const labelValue: string = input.profileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileName.");
    }
    resolvedPath = resolvedPath.replace("{profileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.effectiveTime !== undefined &&
      input.effectiveTime !== null && { effectiveTime: Math.round(input.effectiveTime.getTime() / 1000) }),
    ...(input.profileVersion !== undefined &&
      input.profileVersion !== null && { profileVersion: input.profileVersion }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/signing-jobs";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.destination !== undefined &&
      input.destination !== null && { destination: serializeAws_restJson1Destination(input.destination, context) }),
    ...(input.profileName !== undefined && input.profileName !== null && { profileName: input.profileName }),
    ...(input.profileOwner !== undefined && input.profileOwner !== null && { profileOwner: input.profileOwner }),
    ...(input.source !== undefined &&
      input.source !== null && { source: serializeAws_restJson1Source(input.source, context) }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
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
  const contents: AddProfilePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    revisionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddProfilePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfilePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.signer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceLimitExceededException":
    case "com.amazonaws.signer#ServiceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CancelSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelSigningProfileCommandError(output, context);
  }
  const contents: CancelSigningProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSigningJobCommandError(output, context);
  }
  const contents: DescribeSigningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    completedAt: undefined,
    createdAt: undefined,
    jobId: undefined,
    jobInvoker: undefined,
    jobOwner: undefined,
    overrides: undefined,
    platformDisplayName: undefined,
    platformId: undefined,
    profileName: undefined,
    profileVersion: undefined,
    requestedBy: undefined,
    revocationRecord: undefined,
    signatureExpiresAt: undefined,
    signedObject: undefined,
    signingMaterial: undefined,
    signingParameters: undefined,
    source: undefined,
    status: undefined,
    statusReason: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.completedAt !== undefined && data.completedAt !== null) {
    contents.completedAt = new Date(Math.round(data.completedAt * 1000));
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobInvoker !== undefined && data.jobInvoker !== null) {
    contents.jobInvoker = __expectString(data.jobInvoker);
  }
  if (data.jobOwner !== undefined && data.jobOwner !== null) {
    contents.jobOwner = __expectString(data.jobOwner);
  }
  if (data.overrides !== undefined && data.overrides !== null) {
    contents.overrides = deserializeAws_restJson1SigningPlatformOverrides(data.overrides, context);
  }
  if (data.platformDisplayName !== undefined && data.platformDisplayName !== null) {
    contents.platformDisplayName = __expectString(data.platformDisplayName);
  }
  if (data.platformId !== undefined && data.platformId !== null) {
    contents.platformId = __expectString(data.platformId);
  }
  if (data.profileName !== undefined && data.profileName !== null) {
    contents.profileName = __expectString(data.profileName);
  }
  if (data.profileVersion !== undefined && data.profileVersion !== null) {
    contents.profileVersion = __expectString(data.profileVersion);
  }
  if (data.requestedBy !== undefined && data.requestedBy !== null) {
    contents.requestedBy = __expectString(data.requestedBy);
  }
  if (data.revocationRecord !== undefined && data.revocationRecord !== null) {
    contents.revocationRecord = deserializeAws_restJson1SigningJobRevocationRecord(data.revocationRecord, context);
  }
  if (data.signatureExpiresAt !== undefined && data.signatureExpiresAt !== null) {
    contents.signatureExpiresAt = new Date(Math.round(data.signatureExpiresAt * 1000));
  }
  if (data.signedObject !== undefined && data.signedObject !== null) {
    contents.signedObject = deserializeAws_restJson1SignedObject(data.signedObject, context);
  }
  if (data.signingMaterial !== undefined && data.signingMaterial !== null) {
    contents.signingMaterial = deserializeAws_restJson1SigningMaterial(data.signingMaterial, context);
  }
  if (data.signingParameters !== undefined && data.signingParameters !== null) {
    contents.signingParameters = deserializeAws_restJson1SigningParameters(data.signingParameters, context);
  }
  if (data.source !== undefined && data.source !== null) {
    contents.source = deserializeAws_restJson1Source(data.source, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSigningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSigningPlatformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSigningPlatformCommandError(output, context);
  }
  const contents: GetSigningPlatformCommandOutput = {
    $metadata: deserializeMetadata(output),
    category: undefined,
    displayName: undefined,
    maxSizeInMB: undefined,
    partner: undefined,
    platformId: undefined,
    revocationSupported: undefined,
    signingConfiguration: undefined,
    signingImageFormat: undefined,
    target: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.category !== undefined && data.category !== null) {
    contents.category = __expectString(data.category);
  }
  if (data.displayName !== undefined && data.displayName !== null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.maxSizeInMB !== undefined && data.maxSizeInMB !== null) {
    contents.maxSizeInMB = __expectInt(data.maxSizeInMB);
  }
  if (data.partner !== undefined && data.partner !== null) {
    contents.partner = __expectString(data.partner);
  }
  if (data.platformId !== undefined && data.platformId !== null) {
    contents.platformId = __expectString(data.platformId);
  }
  if (data.revocationSupported !== undefined && data.revocationSupported !== null) {
    contents.revocationSupported = __expectBoolean(data.revocationSupported);
  }
  if (data.signingConfiguration !== undefined && data.signingConfiguration !== null) {
    contents.signingConfiguration = deserializeAws_restJson1SigningConfiguration(data.signingConfiguration, context);
  }
  if (data.signingImageFormat !== undefined && data.signingImageFormat !== null) {
    contents.signingImageFormat = deserializeAws_restJson1SigningImageFormat(data.signingImageFormat, context);
  }
  if (data.target !== undefined && data.target !== null) {
    contents.target = __expectString(data.target);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSigningPlatformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSigningProfileCommandError(output, context);
  }
  const contents: GetSigningProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    overrides: undefined,
    platformDisplayName: undefined,
    platformId: undefined,
    profileName: undefined,
    profileVersion: undefined,
    profileVersionArn: undefined,
    revocationRecord: undefined,
    signatureValidityPeriod: undefined,
    signingMaterial: undefined,
    signingParameters: undefined,
    status: undefined,
    statusReason: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.overrides !== undefined && data.overrides !== null) {
    contents.overrides = deserializeAws_restJson1SigningPlatformOverrides(data.overrides, context);
  }
  if (data.platformDisplayName !== undefined && data.platformDisplayName !== null) {
    contents.platformDisplayName = __expectString(data.platformDisplayName);
  }
  if (data.platformId !== undefined && data.platformId !== null) {
    contents.platformId = __expectString(data.platformId);
  }
  if (data.profileName !== undefined && data.profileName !== null) {
    contents.profileName = __expectString(data.profileName);
  }
  if (data.profileVersion !== undefined && data.profileVersion !== null) {
    contents.profileVersion = __expectString(data.profileVersion);
  }
  if (data.profileVersionArn !== undefined && data.profileVersionArn !== null) {
    contents.profileVersionArn = __expectString(data.profileVersionArn);
  }
  if (data.revocationRecord !== undefined && data.revocationRecord !== null) {
    contents.revocationRecord = deserializeAws_restJson1SigningProfileRevocationRecord(data.revocationRecord, context);
  }
  if (data.signatureValidityPeriod !== undefined && data.signatureValidityPeriod !== null) {
    contents.signatureValidityPeriod = deserializeAws_restJson1SignatureValidityPeriod(
      data.signatureValidityPeriod,
      context
    );
  }
  if (data.signingMaterial !== undefined && data.signingMaterial !== null) {
    contents.signingMaterial = deserializeAws_restJson1SigningMaterial(data.signingMaterial, context);
  }
  if (data.signingParameters !== undefined && data.signingParameters !== null) {
    contents.signingParameters = deserializeAws_restJson1SigningParameters(data.signingParameters, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusReason !== undefined && data.statusReason !== null) {
    contents.statusReason = __expectString(data.statusReason);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListProfilePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProfilePermissionsCommandError(output, context);
  }
  const contents: ListProfilePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    permissions: undefined,
    policySizeBytes: undefined,
    revisionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions !== undefined && data.permissions !== null) {
    contents.permissions = deserializeAws_restJson1Permissions(data.permissions, context);
  }
  if (data.policySizeBytes !== undefined && data.policySizeBytes !== null) {
    contents.policySizeBytes = __expectInt(data.policySizeBytes);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProfilePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListSigningJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSigningJobsCommandError(output, context);
  }
  const contents: ListSigningJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobs: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.jobs = deserializeAws_restJson1SigningJobs(data.jobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSigningJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListSigningPlatformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSigningPlatformsCommandError(output, context);
  }
  const contents: ListSigningPlatformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    platforms: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.platforms !== undefined && data.platforms !== null) {
    contents.platforms = deserializeAws_restJson1SigningPlatforms(data.platforms, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSigningPlatformsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListSigningProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSigningProfilesCommandError(output, context);
  }
  const contents: ListSigningProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    profiles: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.profiles !== undefined && data.profiles !== null) {
    contents.profiles = deserializeAws_restJson1SigningProfiles(data.profiles, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSigningProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.signer#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSigningProfileCommandError(output, context);
  }
  const contents: PutSigningProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    profileVersion: undefined,
    profileVersionArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.profileVersion !== undefined && data.profileVersion !== null) {
    contents.profileVersion = __expectString(data.profileVersion);
  }
  if (data.profileVersionArn !== undefined && data.profileVersionArn !== null) {
    contents.profileVersionArn = __expectString(data.profileVersionArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveProfilePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveProfilePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveProfilePermissionCommandError(output, context);
  }
  const contents: RemoveProfilePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    revisionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveProfilePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveProfilePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.signer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RevokeSignatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSignatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeSignatureCommandError(output, context);
  }
  const contents: RevokeSignatureCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RevokeSignatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSignatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RevokeSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeSigningProfileCommandError(output, context);
  }
  const contents: RevokeSigningProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RevokeSigningProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSigningProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSigningJobCommandError(output, context);
  }
  const contents: StartSigningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobId: undefined,
    jobOwner: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobOwner !== undefined && data.jobOwner !== null) {
    contents.jobOwner = __expectString(data.jobOwner);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartSigningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.signer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.signer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.signer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.signer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.signer#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.signer#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.signer#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.signer#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const contents: ServiceLimitExceededException = {
    name: "ServiceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_restJson1S3Destination(input.s3, context) }),
  };
};

const serializeAws_restJson1S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1S3Source = (input: S3Source, context: __SerdeContext): any => {
  return {
    ...(input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_restJson1SignatureValidityPeriod = (
  input: SignatureValidityPeriod,
  context: __SerdeContext
): any => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1SigningConfigurationOverrides = (
  input: SigningConfigurationOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.encryptionAlgorithm !== undefined &&
      input.encryptionAlgorithm !== null && { encryptionAlgorithm: input.encryptionAlgorithm }),
    ...(input.hashAlgorithm !== undefined && input.hashAlgorithm !== null && { hashAlgorithm: input.hashAlgorithm }),
  };
};

const serializeAws_restJson1SigningMaterial = (input: SigningMaterial, context: __SerdeContext): any => {
  return {
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
  };
};

const serializeAws_restJson1SigningParameters = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1SigningPlatformOverrides = (
  input: SigningPlatformOverrides,
  context: __SerdeContext
): any => {
  return {
    ...(input.signingConfiguration !== undefined &&
      input.signingConfiguration !== null && {
        signingConfiguration: serializeAws_restJson1SigningConfigurationOverrides(input.signingConfiguration, context),
      }),
    ...(input.signingImageFormat !== undefined &&
      input.signingImageFormat !== null && { signingImageFormat: input.signingImageFormat }),
  };
};

const serializeAws_restJson1Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.s3 !== undefined && input.s3 !== null && { s3: serializeAws_restJson1S3Source(input.s3, context) }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1EncryptionAlgorithmOptions = (
  output: any,
  context: __SerdeContext
): EncryptionAlgorithmOptions => {
  return {
    allowedValues:
      output.allowedValues !== undefined && output.allowedValues !== null
        ? deserializeAws_restJson1EncryptionAlgorithms(output.allowedValues, context)
        : undefined,
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

const deserializeAws_restJson1EncryptionAlgorithms = (
  output: any,
  context: __SerdeContext
): (EncryptionAlgorithm | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1HashAlgorithmOptions = (output: any, context: __SerdeContext): HashAlgorithmOptions => {
  return {
    allowedValues:
      output.allowedValues !== undefined && output.allowedValues !== null
        ? deserializeAws_restJson1HashAlgorithms(output.allowedValues, context)
        : undefined,
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

const deserializeAws_restJson1HashAlgorithms = (output: any, context: __SerdeContext): (HashAlgorithm | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ImageFormats = (output: any, context: __SerdeContext): (ImageFormat | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Permission(entry, context);
    });
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
    value: __expectInt(output.value),
  } as any;
};

const deserializeAws_restJson1SignedObject = (output: any, context: __SerdeContext): SignedObject => {
  return {
    s3:
      output.s3 !== undefined && output.s3 !== null
        ? deserializeAws_restJson1S3SignedObject(output.s3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SigningConfiguration = (output: any, context: __SerdeContext): SigningConfiguration => {
  return {
    encryptionAlgorithmOptions:
      output.encryptionAlgorithmOptions !== undefined && output.encryptionAlgorithmOptions !== null
        ? deserializeAws_restJson1EncryptionAlgorithmOptions(output.encryptionAlgorithmOptions, context)
        : undefined,
    hashAlgorithmOptions:
      output.hashAlgorithmOptions !== undefined && output.hashAlgorithmOptions !== null
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
      output.supportedFormats !== undefined && output.supportedFormats !== null
        ? deserializeAws_restJson1ImageFormats(output.supportedFormats, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SigningJob = (output: any, context: __SerdeContext): SigningJob => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    isRevoked: __expectBoolean(output.isRevoked),
    jobId: __expectString(output.jobId),
    jobInvoker: __expectString(output.jobInvoker),
    jobOwner: __expectString(output.jobOwner),
    platformDisplayName: __expectString(output.platformDisplayName),
    platformId: __expectString(output.platformId),
    profileName: __expectString(output.profileName),
    profileVersion: __expectString(output.profileVersion),
    signatureExpiresAt:
      output.signatureExpiresAt !== undefined && output.signatureExpiresAt !== null
        ? new Date(Math.round(output.signatureExpiresAt * 1000))
        : undefined,
    signedObject:
      output.signedObject !== undefined && output.signedObject !== null
        ? deserializeAws_restJson1SignedObject(output.signedObject, context)
        : undefined,
    signingMaterial:
      output.signingMaterial !== undefined && output.signingMaterial !== null
        ? deserializeAws_restJson1SigningMaterial(output.signingMaterial, context)
        : undefined,
    source:
      output.source !== undefined && output.source !== null
        ? deserializeAws_restJson1Source(output.source, context)
        : undefined,
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
      output.revokedAt !== undefined && output.revokedAt !== null
        ? new Date(Math.round(output.revokedAt * 1000))
        : undefined,
    revokedBy: __expectString(output.revokedBy),
  } as any;
};

const deserializeAws_restJson1SigningJobs = (output: any, context: __SerdeContext): SigningJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SigningJob(entry, context);
    });
};

const deserializeAws_restJson1SigningMaterial = (output: any, context: __SerdeContext): SigningMaterial => {
  return {
    certificateArn: __expectString(output.certificateArn),
  } as any;
};

const deserializeAws_restJson1SigningParameters = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1SigningPlatform = (output: any, context: __SerdeContext): SigningPlatform => {
  return {
    category: __expectString(output.category),
    displayName: __expectString(output.displayName),
    maxSizeInMB: __expectInt(output.maxSizeInMB),
    partner: __expectString(output.partner),
    platformId: __expectString(output.platformId),
    revocationSupported: __expectBoolean(output.revocationSupported),
    signingConfiguration:
      output.signingConfiguration !== undefined && output.signingConfiguration !== null
        ? deserializeAws_restJson1SigningConfiguration(output.signingConfiguration, context)
        : undefined,
    signingImageFormat:
      output.signingImageFormat !== undefined && output.signingImageFormat !== null
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
      output.signingConfiguration !== undefined && output.signingConfiguration !== null
        ? deserializeAws_restJson1SigningConfigurationOverrides(output.signingConfiguration, context)
        : undefined,
    signingImageFormat: __expectString(output.signingImageFormat),
  } as any;
};

const deserializeAws_restJson1SigningPlatforms = (output: any, context: __SerdeContext): SigningPlatform[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SigningPlatform(entry, context);
    });
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
      output.signatureValidityPeriod !== undefined && output.signatureValidityPeriod !== null
        ? deserializeAws_restJson1SignatureValidityPeriod(output.signatureValidityPeriod, context)
        : undefined,
    signingMaterial:
      output.signingMaterial !== undefined && output.signingMaterial !== null
        ? deserializeAws_restJson1SigningMaterial(output.signingMaterial, context)
        : undefined,
    signingParameters:
      output.signingParameters !== undefined && output.signingParameters !== null
        ? deserializeAws_restJson1SigningParameters(output.signingParameters, context)
        : undefined,
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SigningProfileRevocationRecord = (
  output: any,
  context: __SerdeContext
): SigningProfileRevocationRecord => {
  return {
    revocationEffectiveFrom:
      output.revocationEffectiveFrom !== undefined && output.revocationEffectiveFrom !== null
        ? new Date(Math.round(output.revocationEffectiveFrom * 1000))
        : undefined,
    revokedAt:
      output.revokedAt !== undefined && output.revokedAt !== null
        ? new Date(Math.round(output.revokedAt * 1000))
        : undefined,
    revokedBy: __expectString(output.revokedBy),
  } as any;
};

const deserializeAws_restJson1SigningProfiles = (output: any, context: __SerdeContext): SigningProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SigningProfile(entry, context);
    });
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    s3:
      output.s3 !== undefined && output.s3 !== null ? deserializeAws_restJson1S3Source(output.s3, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
