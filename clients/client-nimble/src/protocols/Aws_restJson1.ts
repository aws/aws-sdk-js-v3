// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AcceptEulasCommandInput, AcceptEulasCommandOutput } from "../commands/AcceptEulasCommand";
import {
  CreateLaunchProfileCommandInput,
  CreateLaunchProfileCommandOutput,
} from "../commands/CreateLaunchProfileCommand";
import {
  CreateStreamingImageCommandInput,
  CreateStreamingImageCommandOutput,
} from "../commands/CreateStreamingImageCommand";
import {
  CreateStreamingSessionCommandInput,
  CreateStreamingSessionCommandOutput,
} from "../commands/CreateStreamingSessionCommand";
import {
  CreateStreamingSessionStreamCommandInput,
  CreateStreamingSessionStreamCommandOutput,
} from "../commands/CreateStreamingSessionStreamCommand";
import { CreateStudioCommandInput, CreateStudioCommandOutput } from "../commands/CreateStudioCommand";
import {
  CreateStudioComponentCommandInput,
  CreateStudioComponentCommandOutput,
} from "../commands/CreateStudioComponentCommand";
import {
  DeleteLaunchProfileCommandInput,
  DeleteLaunchProfileCommandOutput,
} from "../commands/DeleteLaunchProfileCommand";
import {
  DeleteLaunchProfileMemberCommandInput,
  DeleteLaunchProfileMemberCommandOutput,
} from "../commands/DeleteLaunchProfileMemberCommand";
import {
  DeleteStreamingImageCommandInput,
  DeleteStreamingImageCommandOutput,
} from "../commands/DeleteStreamingImageCommand";
import {
  DeleteStreamingSessionCommandInput,
  DeleteStreamingSessionCommandOutput,
} from "../commands/DeleteStreamingSessionCommand";
import { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "../commands/DeleteStudioCommand";
import {
  DeleteStudioComponentCommandInput,
  DeleteStudioComponentCommandOutput,
} from "../commands/DeleteStudioComponentCommand";
import { DeleteStudioMemberCommandInput, DeleteStudioMemberCommandOutput } from "../commands/DeleteStudioMemberCommand";
import { GetEulaCommandInput, GetEulaCommandOutput } from "../commands/GetEulaCommand";
import { GetLaunchProfileCommandInput, GetLaunchProfileCommandOutput } from "../commands/GetLaunchProfileCommand";
import {
  GetLaunchProfileDetailsCommandInput,
  GetLaunchProfileDetailsCommandOutput,
} from "../commands/GetLaunchProfileDetailsCommand";
import {
  GetLaunchProfileInitializationCommandInput,
  GetLaunchProfileInitializationCommandOutput,
} from "../commands/GetLaunchProfileInitializationCommand";
import {
  GetLaunchProfileMemberCommandInput,
  GetLaunchProfileMemberCommandOutput,
} from "../commands/GetLaunchProfileMemberCommand";
import { GetStreamingImageCommandInput, GetStreamingImageCommandOutput } from "../commands/GetStreamingImageCommand";
import {
  GetStreamingSessionBackupCommandInput,
  GetStreamingSessionBackupCommandOutput,
} from "../commands/GetStreamingSessionBackupCommand";
import {
  GetStreamingSessionCommandInput,
  GetStreamingSessionCommandOutput,
} from "../commands/GetStreamingSessionCommand";
import {
  GetStreamingSessionStreamCommandInput,
  GetStreamingSessionStreamCommandOutput,
} from "../commands/GetStreamingSessionStreamCommand";
import { GetStudioCommandInput, GetStudioCommandOutput } from "../commands/GetStudioCommand";
import { GetStudioComponentCommandInput, GetStudioComponentCommandOutput } from "../commands/GetStudioComponentCommand";
import { GetStudioMemberCommandInput, GetStudioMemberCommandOutput } from "../commands/GetStudioMemberCommand";
import {
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
} from "../commands/ListEulaAcceptancesCommand";
import { ListEulasCommandInput, ListEulasCommandOutput } from "../commands/ListEulasCommand";
import {
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
} from "../commands/ListLaunchProfileMembersCommand";
import { ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput } from "../commands/ListLaunchProfilesCommand";
import {
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
} from "../commands/ListStreamingImagesCommand";
import {
  ListStreamingSessionBackupsCommandInput,
  ListStreamingSessionBackupsCommandOutput,
} from "../commands/ListStreamingSessionBackupsCommand";
import {
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
} from "../commands/ListStreamingSessionsCommand";
import {
  ListStudioComponentsCommandInput,
  ListStudioComponentsCommandOutput,
} from "../commands/ListStudioComponentsCommand";
import { ListStudioMembersCommandInput, ListStudioMembersCommandOutput } from "../commands/ListStudioMembersCommand";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutLaunchProfileMembersCommandInput,
  PutLaunchProfileMembersCommandOutput,
} from "../commands/PutLaunchProfileMembersCommand";
import { PutStudioMembersCommandInput, PutStudioMembersCommandOutput } from "../commands/PutStudioMembersCommand";
import {
  StartStreamingSessionCommandInput,
  StartStreamingSessionCommandOutput,
} from "../commands/StartStreamingSessionCommand";
import {
  StartStudioSSOConfigurationRepairCommandInput,
  StartStudioSSOConfigurationRepairCommandOutput,
} from "../commands/StartStudioSSOConfigurationRepairCommand";
import {
  StopStreamingSessionCommandInput,
  StopStreamingSessionCommandOutput,
} from "../commands/StopStreamingSessionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateLaunchProfileCommandInput,
  UpdateLaunchProfileCommandOutput,
} from "../commands/UpdateLaunchProfileCommand";
import {
  UpdateLaunchProfileMemberCommandInput,
  UpdateLaunchProfileMemberCommandOutput,
} from "../commands/UpdateLaunchProfileMemberCommand";
import {
  UpdateStreamingImageCommandInput,
  UpdateStreamingImageCommandOutput,
} from "../commands/UpdateStreamingImageCommand";
import { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "../commands/UpdateStudioCommand";
import {
  UpdateStudioComponentCommandInput,
  UpdateStudioComponentCommandOutput,
} from "../commands/UpdateStudioComponentCommand";
import {
  AccessDeniedException,
  ActiveDirectoryComputerAttribute,
  ActiveDirectoryConfiguration,
  ComputeFarmConfiguration,
  ConflictException,
  Eula,
  EulaAcceptance,
  InternalServerErrorException,
  LaunchProfile,
  LicenseServiceConfiguration,
  NewLaunchProfileMember,
  NewStudioMember,
  ResourceNotFoundException,
  ScriptParameterKeyValue,
  ServiceQuotaExceededException,
  SharedFileSystemConfiguration,
  StreamConfigurationCreate,
  StreamConfigurationSessionBackup,
  StreamConfigurationSessionStorage,
  StreamingInstanceType,
  StreamingSession,
  StreamingSessionBackup,
  StreamingSessionStorageMode,
  StreamingSessionStorageRoot,
  StreamingSessionStream,
  Studio,
  StudioComponent,
  StudioComponentConfiguration,
  StudioComponentInitializationScript,
  StudioComponentSummary,
  StudioEncryptionConfiguration,
  ThrottlingException,
  ValidationException,
  VolumeConfiguration,
} from "../models/models_0";
import { NimbleServiceException as __BaseException } from "../models/NimbleServiceException";

/**
 * serializeAws_restJson1AcceptEulasCommand
 */
export const se_AcceptEulasCommand = async (
  input: AcceptEulasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/eula-acceptances";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      eulaIds: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateLaunchProfileCommand
 */
export const se_CreateLaunchProfileCommand = async (
  input: CreateLaunchProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      ec2SubnetIds: (_) => _json(_),
      launchProfileProtocolVersions: (_) => _json(_),
      name: [],
      streamConfiguration: (_) => _json(_),
      studioComponentIds: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateStreamingImageCommand
 */
export const se_CreateStreamingImageCommand = async (
  input: CreateStreamingImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      ec2ImageId: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateStreamingSessionCommand
 */
export const se_CreateStreamingSessionCommand = async (
  input: CreateStreamingSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ec2InstanceType: [],
      launchProfileId: [],
      ownedBy: [],
      streamingImageId: [],
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateStreamingSessionStreamCommand
 */
export const se_CreateStreamingSessionStreamCommand = async (
  input: CreateStreamingSessionStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams";
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      expirationInSeconds: [],
    })
  );
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
 * serializeAws_restJson1CreateStudioCommand
 */
export const se_CreateStudioCommand = async (
  input: CreateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios";
  let body: any;
  body = JSON.stringify(
    take(input, {
      adminRoleArn: [],
      displayName: [],
      studioEncryptionConfiguration: (_) => _json(_),
      studioName: [],
      tags: (_) => _json(_),
      userRoleArn: [],
    })
  );
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
 * serializeAws_restJson1CreateStudioComponentCommand
 */
export const se_CreateStudioComponentCommand = async (
  input: CreateStudioComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => _json(_),
      description: [],
      ec2SecurityGroupIds: (_) => _json(_),
      initializationScripts: (_) => _json(_),
      name: [],
      runtimeRoleArn: [],
      scriptParameters: (_) => _json(_),
      secureInitializationRoleArn: [],
      subtype: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
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
 * serializeAws_restJson1DeleteLaunchProfileCommand
 */
export const se_DeleteLaunchProfileCommand = async (
  input: DeleteLaunchProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1DeleteLaunchProfileMemberCommand
 */
export const se_DeleteLaunchProfileMemberCommand = async (
  input: DeleteLaunchProfileMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "principalId", () => input.principalId!, "{principalId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1DeleteStreamingImageCommand
 */
export const se_DeleteStreamingImageCommand = async (
  input: DeleteStreamingImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "streamingImageId",
    () => input.streamingImageId!,
    "{streamingImageId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1DeleteStreamingSessionCommand
 */
export const se_DeleteStreamingSessionCommand = async (
  input: DeleteStreamingSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1DeleteStudioCommand
 */
export const se_DeleteStudioCommand = async (
  input: DeleteStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1DeleteStudioComponentCommand
 */
export const se_DeleteStudioComponentCommand = async (
  input: DeleteStudioComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "studioComponentId",
    () => input.studioComponentId!,
    "{studioComponentId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1DeleteStudioMemberCommand
 */
export const se_DeleteStudioMemberCommand = async (
  input: DeleteStudioMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/membership/{principalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "principalId", () => input.principalId!, "{principalId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetEulaCommand
 */
export const se_GetEulaCommand = async (
  input: GetEulaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/eulas/{eulaId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "eulaId", () => input.eulaId!, "{eulaId}", false);
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
 * serializeAws_restJson1GetLaunchProfileCommand
 */
export const se_GetLaunchProfileCommand = async (
  input: GetLaunchProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetLaunchProfileDetailsCommand
 */
export const se_GetLaunchProfileDetailsCommand = async (
  input: GetLaunchProfileDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetLaunchProfileInitializationCommand
 */
export const se_GetLaunchProfileInitializationCommand = async (
  input: GetLaunchProfileInitializationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
    launchProfileProtocolVersions: [
      __expectNonNull(input.launchProfileProtocolVersions, `launchProfileProtocolVersions`) != null,
      () => (input.launchProfileProtocolVersions! || []).map((_entry) => _entry as any),
    ],
    launchPurpose: [, __expectNonNull(input.launchPurpose!, `launchPurpose`)],
    platform: [, __expectNonNull(input.platform!, `platform`)],
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
 * serializeAws_restJson1GetLaunchProfileMemberCommand
 */
export const se_GetLaunchProfileMemberCommand = async (
  input: GetLaunchProfileMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "principalId", () => input.principalId!, "{principalId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetStreamingImageCommand
 */
export const se_GetStreamingImageCommand = async (
  input: GetStreamingImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "streamingImageId",
    () => input.streamingImageId!,
    "{streamingImageId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetStreamingSessionCommand
 */
export const se_GetStreamingSessionCommand = async (
  input: GetStreamingSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetStreamingSessionBackupCommand
 */
export const se_GetStreamingSessionBackupCommand = async (
  input: GetStreamingSessionBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-session-backups/{backupId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "backupId", () => input.backupId!, "{backupId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetStreamingSessionStreamCommand
 */
export const se_GetStreamingSessionStreamCommand = async (
  input: GetStreamingSessionStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "streamId", () => input.streamId!, "{streamId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetStudioCommand
 */
export const se_GetStudioCommand = async (
  input: GetStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetStudioComponentCommand
 */
export const se_GetStudioComponentCommand = async (
  input: GetStudioComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "studioComponentId",
    () => input.studioComponentId!,
    "{studioComponentId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1GetStudioMemberCommand
 */
export const se_GetStudioMemberCommand = async (
  input: GetStudioMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/membership/{principalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "principalId", () => input.principalId!, "{principalId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
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
 * serializeAws_restJson1ListEulaAcceptancesCommand
 */
export const se_ListEulaAcceptancesCommand = async (
  input: ListEulaAcceptancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/eula-acceptances";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
    eulaIds: [() => input.eulaIds !== void 0, () => (input.eulaIds! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1ListEulasCommand
 */
export const se_ListEulasCommand = async (
  input: ListEulasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/eulas";
  const query: any = map({
    eulaIds: [() => input.eulaIds !== void 0, () => (input.eulaIds! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1ListLaunchProfileMembersCommand
 */
export const se_ListLaunchProfileMembersCommand = async (
  input: ListLaunchProfileMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
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
 * serializeAws_restJson1ListLaunchProfilesCommand
 */
export const se_ListLaunchProfilesCommand = async (
  input: ListLaunchProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    principalId: [, input.principalId!],
    states: [() => input.states !== void 0, () => (input.states! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1ListStreamingImagesCommand
 */
export const se_ListStreamingImagesCommand = async (
  input: ListStreamingImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    owner: [, input.owner!],
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
 * serializeAws_restJson1ListStreamingSessionBackupsCommand
 */
export const se_ListStreamingSessionBackupsCommand = async (
  input: ListStreamingSessionBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-session-backups";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    ownedBy: [, input.ownedBy!],
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
 * serializeAws_restJson1ListStreamingSessionsCommand
 */
export const se_ListStreamingSessionsCommand = async (
  input: ListStreamingSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
    createdBy: [, input.createdBy!],
    nextToken: [, input.nextToken!],
    ownedBy: [, input.ownedBy!],
    sessionIds: [, input.sessionIds!],
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
 * serializeAws_restJson1ListStudioComponentsCommand
 */
export const se_ListStudioComponentsCommand = async (
  input: ListStudioComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    states: [() => input.states !== void 0, () => (input.states! || []).map((_entry) => _entry as any)],
    types: [() => input.types !== void 0, () => (input.types! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1ListStudioMembersCommand
 */
export const se_ListStudioMembersCommand = async (
  input: ListStudioMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}/membership";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  const query: any = map({
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
 * serializeAws_restJson1ListStudiosCommand
 */
export const se_ListStudiosCommand = async (
  input: ListStudiosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios";
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/tags/{resourceArn}";
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
 * serializeAws_restJson1PutLaunchProfileMembersCommand
 */
export const se_PutLaunchProfileMembersCommand = async (
  input: PutLaunchProfileMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identityStoreId: [],
      members: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1PutStudioMembersCommand
 */
export const se_PutStudioMembersCommand = async (
  input: PutStudioMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}/membership";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      identityStoreId: [],
      members: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1StartStreamingSessionCommand
 */
export const se_StartStreamingSessionCommand = async (
  input: StartStreamingSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      backupId: [],
    })
  );
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
 * serializeAws_restJson1StartStudioSSOConfigurationRepairCommand
 */
export const se_StartStudioSSOConfigurationRepairCommand = async (
  input: StartStudioSSOConfigurationRepairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/sso-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
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
 * serializeAws_restJson1StopStreamingSessionCommand
 */
export const se_StopStreamingSessionCommand = async (
  input: StopStreamingSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      volumeRetentionMode: [],
    })
  );
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/tags/{resourceArn}";
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
 * serializeAws_restJson1UpdateLaunchProfileCommand
 */
export const se_UpdateLaunchProfileCommand = async (
  input: UpdateLaunchProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      launchProfileProtocolVersions: (_) => _json(_),
      name: [],
      streamConfiguration: (_) => _json(_),
      studioComponentIds: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLaunchProfileMemberCommand
 */
export const se_UpdateLaunchProfileMemberCommand = async (
  input: UpdateLaunchProfileMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "launchProfileId",
    () => input.launchProfileId!,
    "{launchProfileId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "principalId", () => input.principalId!, "{principalId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      persona: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateStreamingImageCommand
 */
export const se_UpdateStreamingImageCommand = async (
  input: UpdateStreamingImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "streamingImageId",
    () => input.streamingImageId!,
    "{streamingImageId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateStudioCommand
 */
export const se_UpdateStudioCommand = async (
  input: UpdateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      adminRoleArn: [],
      displayName: [],
      userRoleArn: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateStudioComponentCommand
 */
export const se_UpdateStudioComponentCommand = async (
  input: UpdateStudioComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amz-client-token": input.clientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "studioComponentId",
    () => input.studioComponentId!,
    "{studioComponentId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "studioId", () => input.studioId!, "{studioId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => _json(_),
      description: [],
      ec2SecurityGroupIds: (_) => _json(_),
      initializationScripts: (_) => _json(_),
      name: [],
      runtimeRoleArn: [],
      scriptParameters: (_) => _json(_),
      secureInitializationRoleArn: [],
      subtype: [],
      type: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AcceptEulasCommand
 */
export const de_AcceptEulasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEulasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptEulasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eulaAcceptances: (_) => de_EulaAcceptanceList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AcceptEulasCommandError
 */
const de_AcceptEulasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEulasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1CreateLaunchProfileCommand
 */
export const de_CreateLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launchProfile: (_) => de_LaunchProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLaunchProfileCommandError
 */
const de_CreateLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1CreateStreamingImageCommand
 */
export const de_CreateStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamingImage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamingImageCommandError
 */
const de_CreateStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1CreateStreamingSessionCommand
 */
export const de_CreateStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: (_) => de_StreamingSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamingSessionCommandError
 */
const de_CreateStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1CreateStreamingSessionStreamCommand
 */
export const de_CreateStreamingSessionStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateStreamingSessionStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    stream: (_) => de_StreamingSessionStream(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamingSessionStreamCommandError
 */
const de_CreateStreamingSessionStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1CreateStudioCommand
 */
export const de_CreateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studio: (_) => de_Studio(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStudioCommandError
 */
const de_CreateStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1CreateStudioComponentCommand
 */
export const de_CreateStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studioComponent: (_) => de_StudioComponent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStudioComponentCommandError
 */
const de_CreateStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1DeleteLaunchProfileCommand
 */
export const de_DeleteLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launchProfile: (_) => de_LaunchProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLaunchProfileCommandError
 */
const de_DeleteLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1DeleteLaunchProfileMemberCommand
 */
export const de_DeleteLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLaunchProfileMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLaunchProfileMemberCommandError
 */
const de_DeleteLaunchProfileMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1DeleteStreamingImageCommand
 */
export const de_DeleteStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamingImage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStreamingImageCommandError
 */
const de_DeleteStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1DeleteStreamingSessionCommand
 */
export const de_DeleteStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: (_) => de_StreamingSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStreamingSessionCommandError
 */
const de_DeleteStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1DeleteStudioCommand
 */
export const de_DeleteStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studio: (_) => de_Studio(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStudioCommandError
 */
const de_DeleteStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1DeleteStudioComponentCommand
 */
export const de_DeleteStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studioComponent: (_) => de_StudioComponent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStudioComponentCommandError
 */
const de_DeleteStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1DeleteStudioMemberCommand
 */
export const de_DeleteStudioMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStudioMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStudioMemberCommandError
 */
const de_DeleteStudioMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetEulaCommand
 */
export const de_GetEulaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEulaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEulaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eula: (_) => de_Eula(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEulaCommandError
 */
const de_GetEulaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEulaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetLaunchProfileCommand
 */
export const de_GetLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launchProfile: (_) => de_LaunchProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLaunchProfileCommandError
 */
const de_GetLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetLaunchProfileDetailsCommand
 */
export const de_GetLaunchProfileDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLaunchProfileDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launchProfile: (_) => de_LaunchProfile(_, context),
    streamingImages: _json,
    studioComponentSummaries: (_) => de_StudioComponentSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLaunchProfileDetailsCommandError
 */
const de_GetLaunchProfileDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetLaunchProfileInitializationCommand
 */
export const de_GetLaunchProfileInitializationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileInitializationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLaunchProfileInitializationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launchProfileInitialization: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLaunchProfileInitializationCommandError
 */
const de_GetLaunchProfileInitializationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileInitializationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetLaunchProfileMemberCommand
 */
export const de_GetLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLaunchProfileMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    member: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLaunchProfileMemberCommandError
 */
const de_GetLaunchProfileMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetStreamingImageCommand
 */
export const de_GetStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamingImage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamingImageCommandError
 */
const de_GetStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetStreamingSessionCommand
 */
export const de_GetStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: (_) => de_StreamingSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamingSessionCommandError
 */
const de_GetStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetStreamingSessionBackupCommand
 */
export const de_GetStreamingSessionBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionBackupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStreamingSessionBackupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamingSessionBackup: (_) => de_StreamingSessionBackup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamingSessionBackupCommandError
 */
const de_GetStreamingSessionBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetStreamingSessionStreamCommand
 */
export const de_GetStreamingSessionStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStreamingSessionStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    stream: (_) => de_StreamingSessionStream(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamingSessionStreamCommandError
 */
const de_GetStreamingSessionStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetStudioCommand
 */
export const de_GetStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studio: (_) => de_Studio(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStudioCommandError
 */
const de_GetStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetStudioComponentCommand
 */
export const de_GetStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studioComponent: (_) => de_StudioComponent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStudioComponentCommandError
 */
const de_GetStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1GetStudioMemberCommand
 */
export const de_GetStudioMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetStudioMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    member: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStudioMemberCommandError
 */
const de_GetStudioMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListEulaAcceptancesCommand
 */
export const de_ListEulaAcceptancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulaAcceptancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEulaAcceptancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eulaAcceptances: (_) => de_EulaAcceptanceList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEulaAcceptancesCommandError
 */
const de_ListEulaAcceptancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulaAcceptancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListEulasCommand
 */
export const de_ListEulasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEulasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eulas: (_) => de_EulaList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEulasCommandError
 */
const de_ListEulasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListLaunchProfileMembersCommand
 */
export const de_ListLaunchProfileMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfileMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLaunchProfileMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    members: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLaunchProfileMembersCommandError
 */
const de_ListLaunchProfileMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfileMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListLaunchProfilesCommand
 */
export const de_ListLaunchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLaunchProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launchProfiles: (_) => de_LaunchProfileList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLaunchProfilesCommandError
 */
const de_ListLaunchProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListStreamingImagesCommand
 */
export const de_ListStreamingImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStreamingImagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    streamingImages: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamingImagesCommandError
 */
const de_ListStreamingImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListStreamingSessionBackupsCommand
 */
export const de_ListStreamingSessionBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionBackupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStreamingSessionBackupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    streamingSessionBackups: (_) => de_StreamingSessionBackupList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamingSessionBackupsCommandError
 */
const de_ListStreamingSessionBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListStreamingSessionsCommand
 */
export const de_ListStreamingSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStreamingSessionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessions: (_) => de_StreamingSessionList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamingSessionsCommandError
 */
const de_ListStreamingSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListStudioComponentsCommand
 */
export const de_ListStudioComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStudioComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    studioComponents: (_) => de_StudioComponentList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStudioComponentsCommandError
 */
const de_ListStudioComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListStudioMembersCommand
 */
export const de_ListStudioMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStudioMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    members: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStudioMembersCommandError
 */
const de_ListStudioMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1ListStudiosCommand
 */
export const de_ListStudiosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStudiosCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    studios: (_) => de_StudioList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStudiosCommandError
 */
const de_ListStudiosCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1PutLaunchProfileMembersCommand
 */
export const de_PutLaunchProfileMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLaunchProfileMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutLaunchProfileMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutLaunchProfileMembersCommandError
 */
const de_PutLaunchProfileMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLaunchProfileMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1PutStudioMembersCommand
 */
export const de_PutStudioMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStudioMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutStudioMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutStudioMembersCommandError
 */
const de_PutStudioMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStudioMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1StartStreamingSessionCommand
 */
export const de_StartStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: (_) => de_StreamingSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartStreamingSessionCommandError
 */
const de_StartStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand
 */
export const de_StartStudioSSOConfigurationRepairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStudioSSOConfigurationRepairCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartStudioSSOConfigurationRepairCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studio: (_) => de_Studio(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartStudioSSOConfigurationRepairCommandError
 */
const de_StartStudioSSOConfigurationRepairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStudioSSOConfigurationRepairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1StopStreamingSessionCommand
 */
export const de_StopStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: (_) => de_StreamingSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopStreamingSessionCommandError
 */
const de_StopStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1UpdateLaunchProfileCommand
 */
export const de_UpdateLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launchProfile: (_) => de_LaunchProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLaunchProfileCommandError
 */
const de_UpdateLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1UpdateLaunchProfileMemberCommand
 */
export const de_UpdateLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLaunchProfileMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    member: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLaunchProfileMemberCommandError
 */
const de_UpdateLaunchProfileMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1UpdateStreamingImageCommand
 */
export const de_UpdateStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamingImage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStreamingImageCommandError
 */
const de_UpdateStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1UpdateStudioCommand
 */
export const de_UpdateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studio: (_) => de_Studio(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStudioCommandError
 */
const de_UpdateStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
 * deserializeAws_restJson1UpdateStudioComponentCommand
 */
export const de_UpdateStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    studioComponent: (_) => de_StudioComponent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStudioComponentCommandError
 */
const de_UpdateStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
    context: _json,
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    context: _json,
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
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    context: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
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
    context: _json,
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
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    context: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
    context: _json,
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
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    context: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ActiveDirectoryComputerAttribute omitted.

// se_ActiveDirectoryComputerAttributeList omitted.

// se_ActiveDirectoryConfiguration omitted.

// se_ComputeFarmConfiguration omitted.

// se_EC2SubnetIdList omitted.

// se_EulaIdList omitted.

// se_LaunchProfileProtocolVersionList omitted.

// se_LaunchProfileStudioComponentIdList omitted.

// se_LicenseServiceConfiguration omitted.

// se_NewLaunchProfileMember omitted.

// se_NewLaunchProfileMemberList omitted.

// se_NewStudioMember omitted.

// se_NewStudioMemberList omitted.

// se_ScriptParameterKeyValue omitted.

// se_SharedFileSystemConfiguration omitted.

// se_StreamConfigurationCreate omitted.

// se_StreamConfigurationSessionBackup omitted.

// se_StreamConfigurationSessionStorage omitted.

// se_StreamingImageIdList omitted.

// se_StreamingInstanceTypeList omitted.

// se_StreamingSessionStorageModeList omitted.

// se_StreamingSessionStorageRoot omitted.

// se_StudioComponentConfiguration omitted.

// se_StudioComponentInitializationScript omitted.

// se_StudioComponentInitializationScriptList omitted.

// se_StudioComponentScriptParameterKeyValueList omitted.

// se_StudioComponentSecurityGroupIdList omitted.

// se_StudioEncryptionConfiguration omitted.

// se_Tags omitted.

// se_VolumeConfiguration omitted.

// de_ActiveDirectoryComputerAttribute omitted.

// de_ActiveDirectoryComputerAttributeList omitted.

// de_ActiveDirectoryConfiguration omitted.

// de_ActiveDirectoryDnsIpAddressList omitted.

// de_ComputeFarmConfiguration omitted.

// de_EC2SubnetIdList omitted.

/**
 * deserializeAws_restJson1Eula
 */
const de_Eula = (output: any, context: __SerdeContext): Eula => {
  return take(output, {
    content: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eulaId: __expectString,
    name: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1EulaAcceptance
 */
const de_EulaAcceptance = (output: any, context: __SerdeContext): EulaAcceptance => {
  return take(output, {
    acceptedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    acceptedBy: __expectString,
    accepteeId: __expectString,
    eulaAcceptanceId: __expectString,
    eulaId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EulaAcceptanceList
 */
const de_EulaAcceptanceList = (output: any, context: __SerdeContext): EulaAcceptance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EulaAcceptance(entry, context);
    });
  return retVal;
};

// de_EulaIdList omitted.

/**
 * deserializeAws_restJson1EulaList
 */
const de_EulaList = (output: any, context: __SerdeContext): Eula[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Eula(entry, context);
    });
  return retVal;
};

// de_ExceptionContext omitted.

/**
 * deserializeAws_restJson1LaunchProfile
 */
const de_LaunchProfile = (output: any, context: __SerdeContext): LaunchProfile => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    ec2SubnetIds: _json,
    launchProfileId: __expectString,
    launchProfileProtocolVersions: _json,
    name: __expectString,
    state: __expectString,
    statusCode: __expectString,
    statusMessage: __expectString,
    streamConfiguration: _json,
    studioComponentIds: _json,
    tags: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    validationResults: _json,
  }) as any;
};

// de_LaunchProfileInitialization omitted.

// de_LaunchProfileInitializationActiveDirectory omitted.

// de_LaunchProfileInitializationScript omitted.

// de_LaunchProfileInitializationScriptList omitted.

/**
 * deserializeAws_restJson1LaunchProfileList
 */
const de_LaunchProfileList = (output: any, context: __SerdeContext): LaunchProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LaunchProfile(entry, context);
    });
  return retVal;
};

// de_LaunchProfileMembership omitted.

// de_LaunchProfileMembershipList omitted.

// de_LaunchProfileProtocolVersionList omitted.

// de_LaunchProfileSecurityGroupIdList omitted.

// de_LaunchProfileStudioComponentIdList omitted.

// de_LicenseServiceConfiguration omitted.

// de_ScriptParameterKeyValue omitted.

// de_SharedFileSystemConfiguration omitted.

// de_StreamConfiguration omitted.

// de_StreamConfigurationSessionBackup omitted.

// de_StreamConfigurationSessionStorage omitted.

// de_StreamingImage omitted.

// de_StreamingImageEncryptionConfiguration omitted.

// de_StreamingImageIdList omitted.

// de_StreamingImageList omitted.

// de_StreamingInstanceTypeList omitted.

/**
 * deserializeAws_restJson1StreamingSession
 */
const de_StreamingSession = (output: any, context: __SerdeContext): StreamingSession => {
  return take(output, {
    arn: __expectString,
    automaticTerminationMode: __expectString,
    backupMode: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    ec2InstanceType: __expectString,
    launchProfileId: __expectString,
    maxBackupsToRetain: __expectInt32,
    ownedBy: __expectString,
    sessionId: __expectString,
    sessionPersistenceMode: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    startedBy: __expectString,
    startedFromBackupId: __expectString,
    state: __expectString,
    statusCode: __expectString,
    statusMessage: __expectString,
    stopAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    stoppedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    stoppedBy: __expectString,
    streamingImageId: __expectString,
    tags: _json,
    terminateAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
    volumeConfiguration: _json,
    volumeRetentionMode: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StreamingSessionBackup
 */
const de_StreamingSessionBackup = (output: any, context: __SerdeContext): StreamingSessionBackup => {
  return take(output, {
    arn: __expectString,
    backupId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    launchProfileId: __expectString,
    ownedBy: __expectString,
    sessionId: __expectString,
    state: __expectString,
    statusCode: __expectString,
    statusMessage: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1StreamingSessionBackupList
 */
const de_StreamingSessionBackupList = (output: any, context: __SerdeContext): StreamingSessionBackup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamingSessionBackup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StreamingSessionList
 */
const de_StreamingSessionList = (output: any, context: __SerdeContext): StreamingSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamingSession(entry, context);
    });
  return retVal;
};

// de_StreamingSessionStorageModeList omitted.

// de_StreamingSessionStorageRoot omitted.

/**
 * deserializeAws_restJson1StreamingSessionStream
 */
const de_StreamingSessionStream = (output: any, context: __SerdeContext): StreamingSessionStream => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    expiresAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ownedBy: __expectString,
    state: __expectString,
    statusCode: __expectString,
    streamId: __expectString,
    url: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Studio
 */
const de_Studio = (output: any, context: __SerdeContext): Studio => {
  return take(output, {
    adminRoleArn: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    displayName: __expectString,
    homeRegion: __expectString,
    ssoClientId: __expectString,
    state: __expectString,
    statusCode: __expectString,
    statusMessage: __expectString,
    studioEncryptionConfiguration: _json,
    studioId: __expectString,
    studioName: __expectString,
    studioUrl: __expectString,
    tags: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userRoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StudioComponent
 */
const de_StudioComponent = (output: any, context: __SerdeContext): StudioComponent => {
  return take(output, {
    arn: __expectString,
    configuration: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    ec2SecurityGroupIds: _json,
    initializationScripts: _json,
    name: __expectString,
    runtimeRoleArn: __expectString,
    scriptParameters: _json,
    secureInitializationRoleArn: __expectString,
    state: __expectString,
    statusCode: __expectString,
    statusMessage: __expectString,
    studioComponentId: __expectString,
    subtype: __expectString,
    tags: _json,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

// de_StudioComponentConfiguration omitted.

// de_StudioComponentInitializationScript omitted.

// de_StudioComponentInitializationScriptList omitted.

/**
 * deserializeAws_restJson1StudioComponentList
 */
const de_StudioComponentList = (output: any, context: __SerdeContext): StudioComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StudioComponent(entry, context);
    });
  return retVal;
};

// de_StudioComponentScriptParameterKeyValueList omitted.

// de_StudioComponentSecurityGroupIdList omitted.

/**
 * deserializeAws_restJson1StudioComponentSummary
 */
const de_StudioComponentSummary = (output: any, context: __SerdeContext): StudioComponentSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    description: __expectString,
    name: __expectString,
    studioComponentId: __expectString,
    subtype: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    updatedBy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StudioComponentSummaryList
 */
const de_StudioComponentSummaryList = (output: any, context: __SerdeContext): StudioComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StudioComponentSummary(entry, context);
    });
  return retVal;
};

// de_StudioEncryptionConfiguration omitted.

/**
 * deserializeAws_restJson1StudioList
 */
const de_StudioList = (output: any, context: __SerdeContext): Studio[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Studio(entry, context);
    });
  return retVal;
};

// de_StudioMembership omitted.

// de_StudioMembershipList omitted.

// de_Tags omitted.

// de_ValidationResult omitted.

// de_ValidationResults omitted.

// de_VolumeConfiguration omitted.

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
