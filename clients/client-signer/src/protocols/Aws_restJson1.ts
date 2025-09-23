// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AddProfilePermissionCommandInput,
  AddProfilePermissionCommandOutput,
} from "../commands/AddProfilePermissionCommand";
import {
  CancelSigningProfileCommandInput,
  CancelSigningProfileCommandOutput,
} from "../commands/CancelSigningProfileCommand";
import { DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput } from "../commands/DescribeSigningJobCommand";
import {
  GetRevocationStatusCommandInput,
  GetRevocationStatusCommandOutput,
} from "../commands/GetRevocationStatusCommand";
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
import { SignPayloadCommandInput, SignPayloadCommandOutput } from "../commands/SignPayloadCommand";
import { StartSigningJobCommandInput, StartSigningJobCommandOutput } from "../commands/StartSigningJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  BadRequestException,
  ConflictException,
  Destination,
  InternalServiceErrorException,
  NotFoundException,
  ResourceNotFoundException,
  S3Destination,
  S3Source,
  ServiceLimitExceededException,
  SignatureValidityPeriod,
  SigningConfigurationOverrides,
  SigningJob,
  SigningJobRevocationRecord,
  SigningMaterial,
  SigningPlatformOverrides,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/signing-profiles/{profileName}/permissions");
  b.p("profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      action: [],
      principal: [],
      profileVersion: [],
      revisionId: [],
      statementId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelSigningProfileCommand
 */
export const se_CancelSigningProfileCommand = async (
  input: CancelSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-profiles/{profileName}");
  b.p("profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSigningJobCommand
 */
export const se_DescribeSigningJobCommand = async (
  input: DescribeSigningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-jobs/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRevocationStatusCommand
 */
export const se_GetRevocationStatusCommand = async (
  input: GetRevocationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/revocations");
  const query: any = map({
    [_sT]: [
      __expectNonNull(input.signatureTimestamp, `signatureTimestamp`) != null,
      () => __serializeDateTime(input[_sT]!).toString(),
    ],
    [_pI]: [, __expectNonNull(input[_pI]!, `platformId`)],
    [_pVA]: [, __expectNonNull(input[_pVA]!, `profileVersionArn`)],
    [_jA]: [, __expectNonNull(input[_jA]!, `jobArn`)],
    [_cH]: [__expectNonNull(input.certificateHashes, `certificateHashes`) != null, () => input[_cH]! || []],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "verification." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSigningPlatformCommand
 */
export const se_GetSigningPlatformCommand = async (
  input: GetSigningPlatformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-platforms/{platformId}");
  b.p("platformId", () => input.platformId!, "{platformId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSigningProfileCommand
 */
export const se_GetSigningProfileCommand = async (
  input: GetSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-profiles/{profileName}");
  b.p("profileName", () => input.profileName!, "{profileName}", false);
  const query: any = map({
    [_pO]: [, input[_pO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfilePermissionsCommand
 */
export const se_ListProfilePermissionsCommand = async (
  input: ListProfilePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-profiles/{profileName}/permissions");
  b.p("profileName", () => input.profileName!, "{profileName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSigningJobsCommand
 */
export const se_ListSigningJobsCommand = async (
  input: ListSigningJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-jobs");
  const query: any = map({
    [_s]: [, input[_s]!],
    [_pI]: [, input[_pI]!],
    [_rB]: [, input[_rB]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_iR]: [() => input.isRevoked !== void 0, () => input[_iR]!.toString()],
    [_sEB]: [() => input.signatureExpiresBefore !== void 0, () => __serializeDateTime(input[_sEB]!).toString()],
    [_sEA]: [() => input.signatureExpiresAfter !== void 0, () => __serializeDateTime(input[_sEA]!).toString()],
    [_jI]: [, input[_jI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSigningPlatformsCommand
 */
export const se_ListSigningPlatformsCommand = async (
  input: ListSigningPlatformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-platforms");
  const query: any = map({
    [_c]: [, input[_c]!],
    [_p]: [, input[_p]!],
    [_t]: [, input[_t]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSigningProfilesCommand
 */
export const se_ListSigningProfilesCommand = async (
  input: ListSigningProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-profiles");
  const query: any = map({
    [_iC]: [() => input.includeCanceled !== void 0, () => input[_iC]!.toString()],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_pI]: [, input[_pI]!],
    [_st]: [() => input.statuses !== void 0, () => input[_st]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSigningProfileCommand
 */
export const se_PutSigningProfileCommand = async (
  input: PutSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/signing-profiles/{profileName}");
  b.p("profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      overrides: (_) => _json(_),
      platformId: [],
      signatureValidityPeriod: (_) => _json(_),
      signingMaterial: (_) => _json(_),
      signingParameters: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveProfilePermissionCommand
 */
export const se_RemoveProfilePermissionCommand = async (
  input: RemoveProfilePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/signing-profiles/{profileName}/permissions/{statementId}");
  b.p("profileName", () => input.profileName!, "{profileName}", false);
  b.p("statementId", () => input.statementId!, "{statementId}", false);
  const query: any = map({
    [_rI]: [, __expectNonNull(input[_rI]!, `revisionId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RevokeSignatureCommand
 */
export const se_RevokeSignatureCommand = async (
  input: RevokeSignatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/signing-jobs/{jobId}/revoke");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobOwner: [],
      reason: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RevokeSigningProfileCommand
 */
export const se_RevokeSigningProfileCommand = async (
  input: RevokeSigningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/signing-profiles/{profileName}/revoke");
  b.p("profileName", () => input.profileName!, "{profileName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      effectiveTime: (_) => _.getTime() / 1_000,
      profileVersion: [],
      reason: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SignPayloadCommand
 */
export const se_SignPayloadCommand = async (
  input: SignPayloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/signing-jobs/with-payload");
  let body: any;
  body = JSON.stringify(
    take(input, {
      payload: (_) => context.base64Encoder(_),
      payloadFormat: [],
      profileName: [],
      profileOwner: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSigningJobCommand
 */
export const se_StartSigningJobCommand = async (
  input: StartSigningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/signing-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      destination: (_) => _json(_),
      profileName: [],
      profileOwner: [],
      source: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AddProfilePermissionCommand
 */
export const de_AddProfilePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddProfilePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSigningProfileCommand
 */
export const de_CancelSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSigningJobCommand
 */
export const de_DescribeSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    completedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    jobId: __expectString,
    jobInvoker: __expectString,
    jobOwner: __expectString,
    overrides: _json,
    platformDisplayName: __expectString,
    platformId: __expectString,
    profileName: __expectString,
    profileVersion: __expectString,
    requestedBy: __expectString,
    revocationRecord: (_) => de_SigningJobRevocationRecord(_, context),
    signatureExpiresAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    signedObject: _json,
    signingMaterial: _json,
    signingParameters: _json,
    source: _json,
    status: __expectString,
    statusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRevocationStatusCommand
 */
export const de_GetRevocationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevocationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    revokedEntities: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSigningPlatformCommand
 */
export const de_GetSigningPlatformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningPlatformCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    category: __expectString,
    displayName: __expectString,
    maxSizeInMB: __expectInt32,
    partner: __expectString,
    platformId: __expectString,
    revocationSupported: __expectBoolean,
    signingConfiguration: _json,
    signingImageFormat: _json,
    target: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSigningProfileCommand
 */
export const de_GetSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    overrides: _json,
    platformDisplayName: __expectString,
    platformId: __expectString,
    profileName: __expectString,
    profileVersion: __expectString,
    profileVersionArn: __expectString,
    revocationRecord: (_) => de_SigningProfileRevocationRecord(_, context),
    signatureValidityPeriod: _json,
    signingMaterial: _json,
    signingParameters: _json,
    status: __expectString,
    statusReason: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfilePermissionsCommand
 */
export const de_ListProfilePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    permissions: _json,
    policySizeBytes: __expectInt32,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSigningJobsCommand
 */
export const de_ListSigningJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobs: (_) => de_SigningJobs(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSigningPlatformsCommand
 */
export const de_ListSigningPlatformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningPlatformsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    platforms: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSigningProfilesCommand
 */
export const de_ListSigningProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    profiles: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSigningProfileCommand
 */
export const de_PutSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    profileVersion: __expectString,
    profileVersionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveProfilePermissionCommand
 */
export const de_RemoveProfilePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveProfilePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeSignatureCommand
 */
export const de_RevokeSignatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSignatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeSigningProfileCommand
 */
export const de_RevokeSigningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeSigningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SignPayloadCommand
 */
export const de_SignPayloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignPayloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
    jobOwner: __expectString,
    metadata: _json,
    signature: context.base64Decoder,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSigningJobCommand
 */
export const de_StartSigningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSigningJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
    jobOwner: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "BadRequestException":
    case "com.amazonaws.signer#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.signer#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.signer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Destination omitted.

// se_S3Destination omitted.

// se_S3Source omitted.

// se_SignatureValidityPeriod omitted.

// se_SigningConfigurationOverrides omitted.

// se_SigningMaterial omitted.

// se_SigningParameters omitted.

// se_SigningPlatformOverrides omitted.

// se_Source omitted.

// se_TagMap omitted.

// de_EncryptionAlgorithmOptions omitted.

// de_EncryptionAlgorithms omitted.

// de_HashAlgorithmOptions omitted.

// de_HashAlgorithms omitted.

// de_ImageFormats omitted.

// de_Metadata omitted.

// de_Permission omitted.

// de_Permissions omitted.

// de_RevokedEntities omitted.

// de_S3SignedObject omitted.

// de_S3Source omitted.

// de_SignatureValidityPeriod omitted.

// de_SignedObject omitted.

// de_SigningConfiguration omitted.

// de_SigningConfigurationOverrides omitted.

// de_SigningImageFormat omitted.

/**
 * deserializeAws_restJson1SigningJob
 */
const de_SigningJob = (output: any, context: __SerdeContext): SigningJob => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    isRevoked: __expectBoolean,
    jobId: __expectString,
    jobInvoker: __expectString,
    jobOwner: __expectString,
    platformDisplayName: __expectString,
    platformId: __expectString,
    profileName: __expectString,
    profileVersion: __expectString,
    signatureExpiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    signedObject: _json,
    signingMaterial: _json,
    source: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SigningJobRevocationRecord
 */
const de_SigningJobRevocationRecord = (output: any, context: __SerdeContext): SigningJobRevocationRecord => {
  return take(output, {
    reason: __expectString,
    revokedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    revokedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SigningJobs
 */
const de_SigningJobs = (output: any, context: __SerdeContext): SigningJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SigningJob(entry, context);
    });
  return retVal;
};

// de_SigningMaterial omitted.

// de_SigningParameters omitted.

// de_SigningPlatform omitted.

// de_SigningPlatformOverrides omitted.

// de_SigningPlatforms omitted.

// de_SigningProfile omitted.

/**
 * deserializeAws_restJson1SigningProfileRevocationRecord
 */
const de_SigningProfileRevocationRecord = (output: any, context: __SerdeContext): SigningProfileRevocationRecord => {
  return take(output, {
    revocationEffectiveFrom: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    revokedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    revokedBy: __expectString,
  }) as any;
};

// de_SigningProfiles omitted.

// de_Source omitted.

// de_TagMap omitted.

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

const _c = "category";
const _cH = "certificateHashes";
const _iC = "includeCanceled";
const _iR = "isRevoked";
const _jA = "jobArn";
const _jI = "jobInvoker";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "partner";
const _pI = "platformId";
const _pO = "profileOwner";
const _pVA = "profileVersionArn";
const _rB = "requestedBy";
const _rI = "revisionId";
const _s = "status";
const _sEA = "signatureExpiresAfter";
const _sEB = "signatureExpiresBefore";
const _sT = "signatureTimestamp";
const _st = "statuses";
const _t = "target";
const _tK = "tagKeys";
