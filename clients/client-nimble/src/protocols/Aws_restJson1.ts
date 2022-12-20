// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  LaunchProfileInitialization,
  LaunchProfileInitializationActiveDirectory,
  LaunchProfileInitializationScript,
  LaunchProfileMembership,
  LicenseServiceConfiguration,
  NewLaunchProfileMember,
  NewStudioMember,
  ResourceNotFoundException,
  ScriptParameterKeyValue,
  ServiceQuotaExceededException,
  SharedFileSystemConfiguration,
  StreamConfiguration,
  StreamConfigurationCreate,
  StreamConfigurationSessionBackup,
  StreamConfigurationSessionStorage,
  StreamingImage,
  StreamingImageEncryptionConfiguration,
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
  StudioMembership,
  ThrottlingException,
  ValidationException,
  ValidationResult,
  VolumeConfiguration,
} from "../models/models_0";
import { NimbleServiceException as __BaseException } from "../models/NimbleServiceException";

export const serializeAws_restJson1AcceptEulasCommand = async (
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
  body = JSON.stringify({
    ...(input.eulaIds != null && { eulaIds: serializeAws_restJson1EulaIdList(input.eulaIds, context) }),
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

export const serializeAws_restJson1CreateLaunchProfileCommand = async (
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.ec2SubnetIds != null && {
      ec2SubnetIds: serializeAws_restJson1EC2SubnetIdList(input.ec2SubnetIds, context),
    }),
    ...(input.launchProfileProtocolVersions != null && {
      launchProfileProtocolVersions: serializeAws_restJson1LaunchProfileProtocolVersionList(
        input.launchProfileProtocolVersions,
        context
      ),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.streamConfiguration != null && {
      streamConfiguration: serializeAws_restJson1StreamConfigurationCreate(input.streamConfiguration, context),
    }),
    ...(input.studioComponentIds != null && {
      studioComponentIds: serializeAws_restJson1LaunchProfileStudioComponentIdList(input.studioComponentIds, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateStreamingImageCommand = async (
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.ec2ImageId != null && { ec2ImageId: input.ec2ImageId }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateStreamingSessionCommand = async (
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
  body = JSON.stringify({
    ...(input.ec2InstanceType != null && { ec2InstanceType: input.ec2InstanceType }),
    ...(input.launchProfileId != null && { launchProfileId: input.launchProfileId }),
    ...(input.ownedBy != null && { ownedBy: input.ownedBy }),
    ...(input.streamingImageId != null && { streamingImageId: input.streamingImageId }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateStreamingSessionStreamCommand = async (
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
  body = JSON.stringify({
    ...(input.expirationInSeconds != null && { expirationInSeconds: input.expirationInSeconds }),
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

export const serializeAws_restJson1CreateStudioCommand = async (
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
  body = JSON.stringify({
    ...(input.adminRoleArn != null && { adminRoleArn: input.adminRoleArn }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.studioEncryptionConfiguration != null && {
      studioEncryptionConfiguration: serializeAws_restJson1StudioEncryptionConfiguration(
        input.studioEncryptionConfiguration,
        context
      ),
    }),
    ...(input.studioName != null && { studioName: input.studioName }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.userRoleArn != null && { userRoleArn: input.userRoleArn }),
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

export const serializeAws_restJson1CreateStudioComponentCommand = async (
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
  body = JSON.stringify({
    ...(input.configuration != null && {
      configuration: serializeAws_restJson1StudioComponentConfiguration(input.configuration, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.ec2SecurityGroupIds != null && {
      ec2SecurityGroupIds: serializeAws_restJson1StudioComponentSecurityGroupIdList(input.ec2SecurityGroupIds, context),
    }),
    ...(input.initializationScripts != null && {
      initializationScripts: serializeAws_restJson1StudioComponentInitializationScriptList(
        input.initializationScripts,
        context
      ),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.runtimeRoleArn != null && { runtimeRoleArn: input.runtimeRoleArn }),
    ...(input.scriptParameters != null && {
      scriptParameters: serializeAws_restJson1StudioComponentScriptParameterKeyValueList(
        input.scriptParameters,
        context
      ),
    }),
    ...(input.secureInitializationRoleArn != null && {
      secureInitializationRoleArn: input.secureInitializationRoleArn,
    }),
    ...(input.subtype != null && { subtype: input.subtype }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
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

export const serializeAws_restJson1DeleteLaunchProfileCommand = async (
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

export const serializeAws_restJson1DeleteLaunchProfileMemberCommand = async (
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

export const serializeAws_restJson1DeleteStreamingImageCommand = async (
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

export const serializeAws_restJson1DeleteStreamingSessionCommand = async (
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

export const serializeAws_restJson1DeleteStudioCommand = async (
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

export const serializeAws_restJson1DeleteStudioComponentCommand = async (
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

export const serializeAws_restJson1DeleteStudioMemberCommand = async (
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

export const serializeAws_restJson1GetEulaCommand = async (
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

export const serializeAws_restJson1GetLaunchProfileCommand = async (
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

export const serializeAws_restJson1GetLaunchProfileDetailsCommand = async (
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

export const serializeAws_restJson1GetLaunchProfileInitializationCommand = async (
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

export const serializeAws_restJson1GetLaunchProfileMemberCommand = async (
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

export const serializeAws_restJson1GetStreamingImageCommand = async (
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

export const serializeAws_restJson1GetStreamingSessionCommand = async (
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

export const serializeAws_restJson1GetStreamingSessionBackupCommand = async (
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

export const serializeAws_restJson1GetStreamingSessionStreamCommand = async (
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

export const serializeAws_restJson1GetStudioCommand = async (
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

export const serializeAws_restJson1GetStudioComponentCommand = async (
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

export const serializeAws_restJson1GetStudioMemberCommand = async (
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

export const serializeAws_restJson1ListEulaAcceptancesCommand = async (
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

export const serializeAws_restJson1ListEulasCommand = async (
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

export const serializeAws_restJson1ListLaunchProfileMembersCommand = async (
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

export const serializeAws_restJson1ListLaunchProfilesCommand = async (
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

export const serializeAws_restJson1ListStreamingImagesCommand = async (
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

export const serializeAws_restJson1ListStreamingSessionBackupsCommand = async (
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

export const serializeAws_restJson1ListStreamingSessionsCommand = async (
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

export const serializeAws_restJson1ListStudioComponentsCommand = async (
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

export const serializeAws_restJson1ListStudioMembersCommand = async (
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

export const serializeAws_restJson1ListStudiosCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutLaunchProfileMembersCommand = async (
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
  body = JSON.stringify({
    ...(input.identityStoreId != null && { identityStoreId: input.identityStoreId }),
    ...(input.members != null && { members: serializeAws_restJson1NewLaunchProfileMemberList(input.members, context) }),
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

export const serializeAws_restJson1PutStudioMembersCommand = async (
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
  body = JSON.stringify({
    ...(input.identityStoreId != null && { identityStoreId: input.identityStoreId }),
    ...(input.members != null && { members: serializeAws_restJson1NewStudioMemberList(input.members, context) }),
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

export const serializeAws_restJson1StartStreamingSessionCommand = async (
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
  body = JSON.stringify({
    ...(input.backupId != null && { backupId: input.backupId }),
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

export const serializeAws_restJson1StartStudioSSOConfigurationRepairCommand = async (
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

export const serializeAws_restJson1StopStreamingSessionCommand = async (
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
  body = JSON.stringify({
    ...(input.volumeRetentionMode != null && { volumeRetentionMode: input.volumeRetentionMode }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1UpdateLaunchProfileCommand = async (
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.launchProfileProtocolVersions != null && {
      launchProfileProtocolVersions: serializeAws_restJson1LaunchProfileProtocolVersionList(
        input.launchProfileProtocolVersions,
        context
      ),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.streamConfiguration != null && {
      streamConfiguration: serializeAws_restJson1StreamConfigurationCreate(input.streamConfiguration, context),
    }),
    ...(input.studioComponentIds != null && {
      studioComponentIds: serializeAws_restJson1LaunchProfileStudioComponentIdList(input.studioComponentIds, context),
    }),
  });
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

export const serializeAws_restJson1UpdateLaunchProfileMemberCommand = async (
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
  body = JSON.stringify({
    ...(input.persona != null && { persona: input.persona }),
  });
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

export const serializeAws_restJson1UpdateStreamingImageCommand = async (
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
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
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

export const serializeAws_restJson1UpdateStudioCommand = async (
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
  body = JSON.stringify({
    ...(input.adminRoleArn != null && { adminRoleArn: input.adminRoleArn }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.userRoleArn != null && { userRoleArn: input.userRoleArn }),
  });
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

export const serializeAws_restJson1UpdateStudioComponentCommand = async (
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
  body = JSON.stringify({
    ...(input.configuration != null && {
      configuration: serializeAws_restJson1StudioComponentConfiguration(input.configuration, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.ec2SecurityGroupIds != null && {
      ec2SecurityGroupIds: serializeAws_restJson1StudioComponentSecurityGroupIdList(input.ec2SecurityGroupIds, context),
    }),
    ...(input.initializationScripts != null && {
      initializationScripts: serializeAws_restJson1StudioComponentInitializationScriptList(
        input.initializationScripts,
        context
      ),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.runtimeRoleArn != null && { runtimeRoleArn: input.runtimeRoleArn }),
    ...(input.scriptParameters != null && {
      scriptParameters: serializeAws_restJson1StudioComponentScriptParameterKeyValueList(
        input.scriptParameters,
        context
      ),
    }),
    ...(input.secureInitializationRoleArn != null && {
      secureInitializationRoleArn: input.secureInitializationRoleArn,
    }),
    ...(input.subtype != null && { subtype: input.subtype }),
    ...(input.type != null && { type: input.type }),
  });
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

export const deserializeAws_restJson1AcceptEulasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEulasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptEulasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eulaAcceptances != null) {
    contents.eulaAcceptances = deserializeAws_restJson1EulaAcceptanceList(data.eulaAcceptances, context);
  }
  return contents;
};

const deserializeAws_restJson1AcceptEulasCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile != null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateLaunchProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage != null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateStreamingImageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session != null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateStreamingSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStreamingSessionStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStreamingSessionStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.stream != null) {
    contents.stream = deserializeAws_restJson1StreamingSessionStream(data.stream, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateStreamingSessionStreamCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio != null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateStudioCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent != null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateStudioComponentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile != null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteLaunchProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLaunchProfileMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteLaunchProfileMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage != null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteStreamingImageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session != null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteStreamingSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio != null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteStudioCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent != null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteStudioComponentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStudioMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStudioMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteStudioMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetEulaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEulaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEulaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eula != null) {
    contents.eula = deserializeAws_restJson1Eula(data.eula, context);
  }
  return contents;
};

const deserializeAws_restJson1GetEulaCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile != null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLaunchProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile != null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  if (data.streamingImages != null) {
    contents.streamingImages = deserializeAws_restJson1StreamingImageList(data.streamingImages, context);
  }
  if (data.studioComponentSummaries != null) {
    contents.studioComponentSummaries = deserializeAws_restJson1StudioComponentSummaryList(
      data.studioComponentSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetLaunchProfileDetailsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileInitializationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileInitializationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileInitializationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfileInitialization != null) {
    contents.launchProfileInitialization = deserializeAws_restJson1LaunchProfileInitialization(
      data.launchProfileInitialization,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetLaunchProfileInitializationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member != null) {
    contents.member = deserializeAws_restJson1LaunchProfileMembership(data.member, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLaunchProfileMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage != null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return contents;
};

const deserializeAws_restJson1GetStreamingImageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session != null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return contents;
};

const deserializeAws_restJson1GetStreamingSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStreamingSessionBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionBackupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStreamingSessionBackupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingSessionBackup != null) {
    contents.streamingSessionBackup = deserializeAws_restJson1StreamingSessionBackup(
      data.streamingSessionBackup,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetStreamingSessionBackupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStreamingSessionStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStreamingSessionStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.stream != null) {
    contents.stream = deserializeAws_restJson1StreamingSessionStream(data.stream, context);
  }
  return contents;
};

const deserializeAws_restJson1GetStreamingSessionStreamCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio != null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return contents;
};

const deserializeAws_restJson1GetStudioCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent != null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return contents;
};

const deserializeAws_restJson1GetStudioComponentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStudioMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStudioMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member != null) {
    contents.member = deserializeAws_restJson1StudioMembership(data.member, context);
  }
  return contents;
};

const deserializeAws_restJson1GetStudioMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListEulaAcceptancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulaAcceptancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEulaAcceptancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eulaAcceptances != null) {
    contents.eulaAcceptances = deserializeAws_restJson1EulaAcceptanceList(data.eulaAcceptances, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEulaAcceptancesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListEulasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEulasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eulas != null) {
    contents.eulas = deserializeAws_restJson1EulaList(data.eulas, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEulasCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListLaunchProfileMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfileMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLaunchProfileMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members != null) {
    contents.members = deserializeAws_restJson1LaunchProfileMembershipList(data.members, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLaunchProfileMembersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListLaunchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLaunchProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfiles != null) {
    contents.launchProfiles = deserializeAws_restJson1LaunchProfileList(data.launchProfiles, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLaunchProfilesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStreamingImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStreamingImagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.streamingImages != null) {
    contents.streamingImages = deserializeAws_restJson1StreamingImageList(data.streamingImages, context);
  }
  return contents;
};

const deserializeAws_restJson1ListStreamingImagesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStreamingSessionBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionBackupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStreamingSessionBackupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.streamingSessionBackups != null) {
    contents.streamingSessionBackups = deserializeAws_restJson1StreamingSessionBackupList(
      data.streamingSessionBackups,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListStreamingSessionBackupsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStreamingSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStreamingSessionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sessions != null) {
    contents.sessions = deserializeAws_restJson1StreamingSessionList(data.sessions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListStreamingSessionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStudioComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStudioComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.studioComponents != null) {
    contents.studioComponents = deserializeAws_restJson1StudioComponentList(data.studioComponents, context);
  }
  return contents;
};

const deserializeAws_restJson1ListStudioComponentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStudioMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStudioMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members != null) {
    contents.members = deserializeAws_restJson1StudioMembershipList(data.members, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListStudioMembersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStudiosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStudiosCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.studios != null) {
    contents.studios = deserializeAws_restJson1StudioList(data.studios, context);
  }
  return contents;
};

const deserializeAws_restJson1ListStudiosCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1PutLaunchProfileMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLaunchProfileMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLaunchProfileMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutLaunchProfileMembersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1PutStudioMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStudioMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutStudioMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutStudioMembersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1StartStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session != null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return contents;
};

const deserializeAws_restJson1StartStreamingSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStudioSSOConfigurationRepairCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartStudioSSOConfigurationRepairCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio != null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return contents;
};

const deserializeAws_restJson1StartStudioSSOConfigurationRepairCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1StopStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopStreamingSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session != null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return contents;
};

const deserializeAws_restJson1StopStreamingSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile != null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateLaunchProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchProfileMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member != null) {
    contents.member = deserializeAws_restJson1LaunchProfileMembership(data.member, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateLaunchProfileMemberCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStreamingImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage != null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateStreamingImageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStudioCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio != null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateStudioCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStudioComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent != null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateStudioComponentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
  if (data.context != null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.context != null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.context != null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
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
  if (data.context != null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.context != null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
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
  if (data.context != null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.context != null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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

const serializeAws_restJson1ActiveDirectoryComputerAttribute = (
  input: ActiveDirectoryComputerAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1ActiveDirectoryComputerAttributeList = (
  input: ActiveDirectoryComputerAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ActiveDirectoryComputerAttribute(entry, context);
    });
};

const serializeAws_restJson1ActiveDirectoryConfiguration = (
  input: ActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.computerAttributes != null && {
      computerAttributes: serializeAws_restJson1ActiveDirectoryComputerAttributeList(input.computerAttributes, context),
    }),
    ...(input.directoryId != null && { directoryId: input.directoryId }),
    ...(input.organizationalUnitDistinguishedName != null && {
      organizationalUnitDistinguishedName: input.organizationalUnitDistinguishedName,
    }),
  };
};

const serializeAws_restJson1ComputeFarmConfiguration = (
  input: ComputeFarmConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.activeDirectoryUser != null && { activeDirectoryUser: input.activeDirectoryUser }),
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1EC2SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EulaIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LaunchProfileProtocolVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LaunchProfileStudioComponentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LicenseServiceConfiguration = (
  input: LicenseServiceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1NewLaunchProfileMember = (input: NewLaunchProfileMember, context: __SerdeContext): any => {
  return {
    ...(input.persona != null && { persona: input.persona }),
    ...(input.principalId != null && { principalId: input.principalId }),
  };
};

const serializeAws_restJson1NewLaunchProfileMemberList = (
  input: NewLaunchProfileMember[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NewLaunchProfileMember(entry, context);
    });
};

const serializeAws_restJson1NewStudioMember = (input: NewStudioMember, context: __SerdeContext): any => {
  return {
    ...(input.persona != null && { persona: input.persona }),
    ...(input.principalId != null && { principalId: input.principalId }),
  };
};

const serializeAws_restJson1NewStudioMemberList = (input: NewStudioMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NewStudioMember(entry, context);
    });
};

const serializeAws_restJson1ScriptParameterKeyValue = (
  input: ScriptParameterKeyValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1SharedFileSystemConfiguration = (
  input: SharedFileSystemConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpoint != null && { endpoint: input.endpoint }),
    ...(input.fileSystemId != null && { fileSystemId: input.fileSystemId }),
    ...(input.linuxMountPoint != null && { linuxMountPoint: input.linuxMountPoint }),
    ...(input.shareName != null && { shareName: input.shareName }),
    ...(input.windowsMountDrive != null && { windowsMountDrive: input.windowsMountDrive }),
  };
};

const serializeAws_restJson1StreamConfigurationCreate = (
  input: StreamConfigurationCreate,
  context: __SerdeContext
): any => {
  return {
    ...(input.automaticTerminationMode != null && { automaticTerminationMode: input.automaticTerminationMode }),
    ...(input.clipboardMode != null && { clipboardMode: input.clipboardMode }),
    ...(input.ec2InstanceTypes != null && {
      ec2InstanceTypes: serializeAws_restJson1StreamingInstanceTypeList(input.ec2InstanceTypes, context),
    }),
    ...(input.maxSessionLengthInMinutes != null && { maxSessionLengthInMinutes: input.maxSessionLengthInMinutes }),
    ...(input.maxStoppedSessionLengthInMinutes != null && {
      maxStoppedSessionLengthInMinutes: input.maxStoppedSessionLengthInMinutes,
    }),
    ...(input.sessionBackup != null && {
      sessionBackup: serializeAws_restJson1StreamConfigurationSessionBackup(input.sessionBackup, context),
    }),
    ...(input.sessionPersistenceMode != null && { sessionPersistenceMode: input.sessionPersistenceMode }),
    ...(input.sessionStorage != null && {
      sessionStorage: serializeAws_restJson1StreamConfigurationSessionStorage(input.sessionStorage, context),
    }),
    ...(input.streamingImageIds != null && {
      streamingImageIds: serializeAws_restJson1StreamingImageIdList(input.streamingImageIds, context),
    }),
    ...(input.volumeConfiguration != null && {
      volumeConfiguration: serializeAws_restJson1VolumeConfiguration(input.volumeConfiguration, context),
    }),
  };
};

const serializeAws_restJson1StreamConfigurationSessionBackup = (
  input: StreamConfigurationSessionBackup,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxBackupsToRetain != null && { maxBackupsToRetain: input.maxBackupsToRetain }),
    ...(input.mode != null && { mode: input.mode }),
  };
};

const serializeAws_restJson1StreamConfigurationSessionStorage = (
  input: StreamConfigurationSessionStorage,
  context: __SerdeContext
): any => {
  return {
    ...(input.mode != null && { mode: serializeAws_restJson1StreamingSessionStorageModeList(input.mode, context) }),
    ...(input.root != null && { root: serializeAws_restJson1StreamingSessionStorageRoot(input.root, context) }),
  };
};

const serializeAws_restJson1StreamingImageIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StreamingInstanceTypeList = (
  input: (StreamingInstanceType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StreamingSessionStorageModeList = (
  input: (StreamingSessionStorageMode | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StreamingSessionStorageRoot = (
  input: StreamingSessionStorageRoot,
  context: __SerdeContext
): any => {
  return {
    ...(input.linux != null && { linux: input.linux }),
    ...(input.windows != null && { windows: input.windows }),
  };
};

const serializeAws_restJson1StudioComponentConfiguration = (
  input: StudioComponentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.activeDirectoryConfiguration != null && {
      activeDirectoryConfiguration: serializeAws_restJson1ActiveDirectoryConfiguration(
        input.activeDirectoryConfiguration,
        context
      ),
    }),
    ...(input.computeFarmConfiguration != null && {
      computeFarmConfiguration: serializeAws_restJson1ComputeFarmConfiguration(input.computeFarmConfiguration, context),
    }),
    ...(input.licenseServiceConfiguration != null && {
      licenseServiceConfiguration: serializeAws_restJson1LicenseServiceConfiguration(
        input.licenseServiceConfiguration,
        context
      ),
    }),
    ...(input.sharedFileSystemConfiguration != null && {
      sharedFileSystemConfiguration: serializeAws_restJson1SharedFileSystemConfiguration(
        input.sharedFileSystemConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1StudioComponentInitializationScript = (
  input: StudioComponentInitializationScript,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchProfileProtocolVersion != null && {
      launchProfileProtocolVersion: input.launchProfileProtocolVersion,
    }),
    ...(input.platform != null && { platform: input.platform }),
    ...(input.runContext != null && { runContext: input.runContext }),
    ...(input.script != null && { script: input.script }),
  };
};

const serializeAws_restJson1StudioComponentInitializationScriptList = (
  input: StudioComponentInitializationScript[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StudioComponentInitializationScript(entry, context);
    });
};

const serializeAws_restJson1StudioComponentScriptParameterKeyValueList = (
  input: ScriptParameterKeyValue[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ScriptParameterKeyValue(entry, context);
    });
};

const serializeAws_restJson1StudioComponentSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StudioEncryptionConfiguration = (
  input: StudioEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.keyArn != null && { keyArn: input.keyArn }),
    ...(input.keyType != null && { keyType: input.keyType }),
  };
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1VolumeConfiguration = (input: VolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.iops != null && { iops: input.iops }),
    ...(input.size != null && { size: input.size }),
    ...(input.throughput != null && { throughput: input.throughput }),
  };
};

const deserializeAws_restJson1ActiveDirectoryComputerAttribute = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryComputerAttribute => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ActiveDirectoryComputerAttributeList = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryComputerAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActiveDirectoryComputerAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ActiveDirectoryConfiguration = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryConfiguration => {
  return {
    computerAttributes:
      output.computerAttributes != null
        ? deserializeAws_restJson1ActiveDirectoryComputerAttributeList(output.computerAttributes, context)
        : undefined,
    directoryId: __expectString(output.directoryId),
    organizationalUnitDistinguishedName: __expectString(output.organizationalUnitDistinguishedName),
  } as any;
};

const deserializeAws_restJson1ActiveDirectoryDnsIpAddressList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ComputeFarmConfiguration = (
  output: any,
  context: __SerdeContext
): ComputeFarmConfiguration => {
  return {
    activeDirectoryUser: __expectString(output.activeDirectoryUser),
    endpoint: __expectString(output.endpoint),
  } as any;
};

const deserializeAws_restJson1EC2SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Eula = (output: any, context: __SerdeContext): Eula => {
  return {
    content: __expectString(output.content),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    eulaId: __expectString(output.eulaId),
    name: __expectString(output.name),
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1EulaAcceptance = (output: any, context: __SerdeContext): EulaAcceptance => {
  return {
    acceptedAt: output.acceptedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.acceptedAt)) : undefined,
    acceptedBy: __expectString(output.acceptedBy),
    accepteeId: __expectString(output.accepteeId),
    eulaAcceptanceId: __expectString(output.eulaAcceptanceId),
    eulaId: __expectString(output.eulaId),
  } as any;
};

const deserializeAws_restJson1EulaAcceptanceList = (output: any, context: __SerdeContext): EulaAcceptance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EulaAcceptance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EulaIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EulaList = (output: any, context: __SerdeContext): Eula[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Eula(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExceptionContext = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1LaunchProfile = (output: any, context: __SerdeContext): LaunchProfile => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    ec2SubnetIds:
      output.ec2SubnetIds != null ? deserializeAws_restJson1EC2SubnetIdList(output.ec2SubnetIds, context) : undefined,
    launchProfileId: __expectString(output.launchProfileId),
    launchProfileProtocolVersions:
      output.launchProfileProtocolVersions != null
        ? deserializeAws_restJson1LaunchProfileProtocolVersionList(output.launchProfileProtocolVersions, context)
        : undefined,
    name: __expectString(output.name),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    streamConfiguration:
      output.streamConfiguration != null
        ? deserializeAws_restJson1StreamConfiguration(output.streamConfiguration, context)
        : undefined,
    studioComponentIds:
      output.studioComponentIds != null
        ? deserializeAws_restJson1LaunchProfileStudioComponentIdList(output.studioComponentIds, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
    updatedBy: __expectString(output.updatedBy),
    validationResults:
      output.validationResults != null
        ? deserializeAws_restJson1ValidationResults(output.validationResults, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LaunchProfileInitialization = (
  output: any,
  context: __SerdeContext
): LaunchProfileInitialization => {
  return {
    activeDirectory:
      output.activeDirectory != null
        ? deserializeAws_restJson1LaunchProfileInitializationActiveDirectory(output.activeDirectory, context)
        : undefined,
    ec2SecurityGroupIds:
      output.ec2SecurityGroupIds != null
        ? deserializeAws_restJson1LaunchProfileSecurityGroupIdList(output.ec2SecurityGroupIds, context)
        : undefined,
    launchProfileId: __expectString(output.launchProfileId),
    launchProfileProtocolVersion: __expectString(output.launchProfileProtocolVersion),
    launchPurpose: __expectString(output.launchPurpose),
    name: __expectString(output.name),
    platform: __expectString(output.platform),
    systemInitializationScripts:
      output.systemInitializationScripts != null
        ? deserializeAws_restJson1LaunchProfileInitializationScriptList(output.systemInitializationScripts, context)
        : undefined,
    userInitializationScripts:
      output.userInitializationScripts != null
        ? deserializeAws_restJson1LaunchProfileInitializationScriptList(output.userInitializationScripts, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LaunchProfileInitializationActiveDirectory = (
  output: any,
  context: __SerdeContext
): LaunchProfileInitializationActiveDirectory => {
  return {
    computerAttributes:
      output.computerAttributes != null
        ? deserializeAws_restJson1ActiveDirectoryComputerAttributeList(output.computerAttributes, context)
        : undefined,
    directoryId: __expectString(output.directoryId),
    directoryName: __expectString(output.directoryName),
    dnsIpAddresses:
      output.dnsIpAddresses != null
        ? deserializeAws_restJson1ActiveDirectoryDnsIpAddressList(output.dnsIpAddresses, context)
        : undefined,
    organizationalUnitDistinguishedName: __expectString(output.organizationalUnitDistinguishedName),
    studioComponentId: __expectString(output.studioComponentId),
    studioComponentName: __expectString(output.studioComponentName),
  } as any;
};

const deserializeAws_restJson1LaunchProfileInitializationScript = (
  output: any,
  context: __SerdeContext
): LaunchProfileInitializationScript => {
  return {
    runtimeRoleArn: __expectString(output.runtimeRoleArn),
    script: __expectString(output.script),
    secureInitializationRoleArn: __expectString(output.secureInitializationRoleArn),
    studioComponentId: __expectString(output.studioComponentId),
    studioComponentName: __expectString(output.studioComponentName),
  } as any;
};

const deserializeAws_restJson1LaunchProfileInitializationScriptList = (
  output: any,
  context: __SerdeContext
): LaunchProfileInitializationScript[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchProfileInitializationScript(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LaunchProfileList = (output: any, context: __SerdeContext): LaunchProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LaunchProfileMembership = (
  output: any,
  context: __SerdeContext
): LaunchProfileMembership => {
  return {
    identityStoreId: __expectString(output.identityStoreId),
    persona: __expectString(output.persona),
    principalId: __expectString(output.principalId),
    sid: __expectString(output.sid),
  } as any;
};

const deserializeAws_restJson1LaunchProfileMembershipList = (
  output: any,
  context: __SerdeContext
): LaunchProfileMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchProfileMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LaunchProfileProtocolVersionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1LaunchProfileSecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1LaunchProfileStudioComponentIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1LicenseServiceConfiguration = (
  output: any,
  context: __SerdeContext
): LicenseServiceConfiguration => {
  return {
    endpoint: __expectString(output.endpoint),
  } as any;
};

const deserializeAws_restJson1ScriptParameterKeyValue = (
  output: any,
  context: __SerdeContext
): ScriptParameterKeyValue => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1SharedFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): SharedFileSystemConfiguration => {
  return {
    endpoint: __expectString(output.endpoint),
    fileSystemId: __expectString(output.fileSystemId),
    linuxMountPoint: __expectString(output.linuxMountPoint),
    shareName: __expectString(output.shareName),
    windowsMountDrive: __expectString(output.windowsMountDrive),
  } as any;
};

const deserializeAws_restJson1StreamConfiguration = (output: any, context: __SerdeContext): StreamConfiguration => {
  return {
    automaticTerminationMode: __expectString(output.automaticTerminationMode),
    clipboardMode: __expectString(output.clipboardMode),
    ec2InstanceTypes:
      output.ec2InstanceTypes != null
        ? deserializeAws_restJson1StreamingInstanceTypeList(output.ec2InstanceTypes, context)
        : undefined,
    maxSessionLengthInMinutes: __expectInt32(output.maxSessionLengthInMinutes),
    maxStoppedSessionLengthInMinutes: __expectInt32(output.maxStoppedSessionLengthInMinutes),
    sessionBackup:
      output.sessionBackup != null
        ? deserializeAws_restJson1StreamConfigurationSessionBackup(output.sessionBackup, context)
        : undefined,
    sessionPersistenceMode: __expectString(output.sessionPersistenceMode),
    sessionStorage:
      output.sessionStorage != null
        ? deserializeAws_restJson1StreamConfigurationSessionStorage(output.sessionStorage, context)
        : undefined,
    streamingImageIds:
      output.streamingImageIds != null
        ? deserializeAws_restJson1StreamingImageIdList(output.streamingImageIds, context)
        : undefined,
    volumeConfiguration:
      output.volumeConfiguration != null
        ? deserializeAws_restJson1VolumeConfiguration(output.volumeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StreamConfigurationSessionBackup = (
  output: any,
  context: __SerdeContext
): StreamConfigurationSessionBackup => {
  return {
    maxBackupsToRetain: __expectInt32(output.maxBackupsToRetain),
    mode: __expectString(output.mode),
  } as any;
};

const deserializeAws_restJson1StreamConfigurationSessionStorage = (
  output: any,
  context: __SerdeContext
): StreamConfigurationSessionStorage => {
  return {
    mode:
      output.mode != null ? deserializeAws_restJson1StreamingSessionStorageModeList(output.mode, context) : undefined,
    root: output.root != null ? deserializeAws_restJson1StreamingSessionStorageRoot(output.root, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StreamingImage = (output: any, context: __SerdeContext): StreamingImage => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    ec2ImageId: __expectString(output.ec2ImageId),
    encryptionConfiguration:
      output.encryptionConfiguration != null
        ? deserializeAws_restJson1StreamingImageEncryptionConfiguration(output.encryptionConfiguration, context)
        : undefined,
    eulaIds: output.eulaIds != null ? deserializeAws_restJson1EulaIdList(output.eulaIds, context) : undefined,
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    streamingImageId: __expectString(output.streamingImageId),
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StreamingImageEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): StreamingImageEncryptionConfiguration => {
  return {
    keyArn: __expectString(output.keyArn),
    keyType: __expectString(output.keyType),
  } as any;
};

const deserializeAws_restJson1StreamingImageIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StreamingImageList = (output: any, context: __SerdeContext): StreamingImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StreamingImage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StreamingInstanceTypeList = (
  output: any,
  context: __SerdeContext
): (StreamingInstanceType | string)[] => {
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

const deserializeAws_restJson1StreamingSession = (output: any, context: __SerdeContext): StreamingSession => {
  return {
    arn: __expectString(output.arn),
    automaticTerminationMode: __expectString(output.automaticTerminationMode),
    backupMode: __expectString(output.backupMode),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    ec2InstanceType: __expectString(output.ec2InstanceType),
    launchProfileId: __expectString(output.launchProfileId),
    maxBackupsToRetain: __expectInt32(output.maxBackupsToRetain),
    ownedBy: __expectString(output.ownedBy),
    sessionId: __expectString(output.sessionId),
    sessionPersistenceMode: __expectString(output.sessionPersistenceMode),
    startedAt: output.startedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.startedAt)) : undefined,
    startedBy: __expectString(output.startedBy),
    startedFromBackupId: __expectString(output.startedFromBackupId),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    stopAt: output.stopAt != null ? __expectNonNull(__parseRfc3339DateTime(output.stopAt)) : undefined,
    stoppedAt: output.stoppedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.stoppedAt)) : undefined,
    stoppedBy: __expectString(output.stoppedBy),
    streamingImageId: __expectString(output.streamingImageId),
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    terminateAt: output.terminateAt != null ? __expectNonNull(__parseRfc3339DateTime(output.terminateAt)) : undefined,
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
    updatedBy: __expectString(output.updatedBy),
    volumeConfiguration:
      output.volumeConfiguration != null
        ? deserializeAws_restJson1VolumeConfiguration(output.volumeConfiguration, context)
        : undefined,
    volumeRetentionMode: __expectString(output.volumeRetentionMode),
  } as any;
};

const deserializeAws_restJson1StreamingSessionBackup = (
  output: any,
  context: __SerdeContext
): StreamingSessionBackup => {
  return {
    arn: __expectString(output.arn),
    backupId: __expectString(output.backupId),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    launchProfileId: __expectString(output.launchProfileId),
    ownedBy: __expectString(output.ownedBy),
    sessionId: __expectString(output.sessionId),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StreamingSessionBackupList = (
  output: any,
  context: __SerdeContext
): StreamingSessionBackup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StreamingSessionBackup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StreamingSessionList = (output: any, context: __SerdeContext): StreamingSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StreamingSession(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StreamingSessionStorageModeList = (
  output: any,
  context: __SerdeContext
): (StreamingSessionStorageMode | string)[] => {
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

const deserializeAws_restJson1StreamingSessionStorageRoot = (
  output: any,
  context: __SerdeContext
): StreamingSessionStorageRoot => {
  return {
    linux: __expectString(output.linux),
    windows: __expectString(output.windows),
  } as any;
};

const deserializeAws_restJson1StreamingSessionStream = (
  output: any,
  context: __SerdeContext
): StreamingSessionStream => {
  return {
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    expiresAt: output.expiresAt != null ? __expectNonNull(__parseRfc3339DateTime(output.expiresAt)) : undefined,
    ownedBy: __expectString(output.ownedBy),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    streamId: __expectString(output.streamId),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1Studio = (output: any, context: __SerdeContext): Studio => {
  return {
    adminRoleArn: __expectString(output.adminRoleArn),
    arn: __expectString(output.arn),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    displayName: __expectString(output.displayName),
    homeRegion: __expectString(output.homeRegion),
    ssoClientId: __expectString(output.ssoClientId),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    studioEncryptionConfiguration:
      output.studioEncryptionConfiguration != null
        ? deserializeAws_restJson1StudioEncryptionConfiguration(output.studioEncryptionConfiguration, context)
        : undefined,
    studioId: __expectString(output.studioId),
    studioName: __expectString(output.studioName),
    studioUrl: __expectString(output.studioUrl),
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
    userRoleArn: __expectString(output.userRoleArn),
  } as any;
};

const deserializeAws_restJson1StudioComponent = (output: any, context: __SerdeContext): StudioComponent => {
  return {
    arn: __expectString(output.arn),
    configuration:
      output.configuration != null
        ? deserializeAws_restJson1StudioComponentConfiguration(output.configuration, context)
        : undefined,
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    ec2SecurityGroupIds:
      output.ec2SecurityGroupIds != null
        ? deserializeAws_restJson1StudioComponentSecurityGroupIdList(output.ec2SecurityGroupIds, context)
        : undefined,
    initializationScripts:
      output.initializationScripts != null
        ? deserializeAws_restJson1StudioComponentInitializationScriptList(output.initializationScripts, context)
        : undefined,
    name: __expectString(output.name),
    runtimeRoleArn: __expectString(output.runtimeRoleArn),
    scriptParameters:
      output.scriptParameters != null
        ? deserializeAws_restJson1StudioComponentScriptParameterKeyValueList(output.scriptParameters, context)
        : undefined,
    secureInitializationRoleArn: __expectString(output.secureInitializationRoleArn),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    studioComponentId: __expectString(output.studioComponentId),
    subtype: __expectString(output.subtype),
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
    updatedBy: __expectString(output.updatedBy),
  } as any;
};

const deserializeAws_restJson1StudioComponentConfiguration = (
  output: any,
  context: __SerdeContext
): StudioComponentConfiguration => {
  return {
    activeDirectoryConfiguration:
      output.activeDirectoryConfiguration != null
        ? deserializeAws_restJson1ActiveDirectoryConfiguration(output.activeDirectoryConfiguration, context)
        : undefined,
    computeFarmConfiguration:
      output.computeFarmConfiguration != null
        ? deserializeAws_restJson1ComputeFarmConfiguration(output.computeFarmConfiguration, context)
        : undefined,
    licenseServiceConfiguration:
      output.licenseServiceConfiguration != null
        ? deserializeAws_restJson1LicenseServiceConfiguration(output.licenseServiceConfiguration, context)
        : undefined,
    sharedFileSystemConfiguration:
      output.sharedFileSystemConfiguration != null
        ? deserializeAws_restJson1SharedFileSystemConfiguration(output.sharedFileSystemConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StudioComponentInitializationScript = (
  output: any,
  context: __SerdeContext
): StudioComponentInitializationScript => {
  return {
    launchProfileProtocolVersion: __expectString(output.launchProfileProtocolVersion),
    platform: __expectString(output.platform),
    runContext: __expectString(output.runContext),
    script: __expectString(output.script),
  } as any;
};

const deserializeAws_restJson1StudioComponentInitializationScriptList = (
  output: any,
  context: __SerdeContext
): StudioComponentInitializationScript[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioComponentInitializationScript(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StudioComponentList = (output: any, context: __SerdeContext): StudioComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioComponent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StudioComponentScriptParameterKeyValueList = (
  output: any,
  context: __SerdeContext
): ScriptParameterKeyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScriptParameterKeyValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StudioComponentSecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StudioComponentSummary = (
  output: any,
  context: __SerdeContext
): StudioComponentSummary => {
  return {
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    name: __expectString(output.name),
    studioComponentId: __expectString(output.studioComponentId),
    subtype: __expectString(output.subtype),
    type: __expectString(output.type),
    updatedAt: output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt)) : undefined,
    updatedBy: __expectString(output.updatedBy),
  } as any;
};

const deserializeAws_restJson1StudioComponentSummaryList = (
  output: any,
  context: __SerdeContext
): StudioComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioComponentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StudioEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): StudioEncryptionConfiguration => {
  return {
    keyArn: __expectString(output.keyArn),
    keyType: __expectString(output.keyType),
  } as any;
};

const deserializeAws_restJson1StudioList = (output: any, context: __SerdeContext): Studio[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Studio(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StudioMembership = (output: any, context: __SerdeContext): StudioMembership => {
  return {
    identityStoreId: __expectString(output.identityStoreId),
    persona: __expectString(output.persona),
    principalId: __expectString(output.principalId),
    sid: __expectString(output.sid),
  } as any;
};

const deserializeAws_restJson1StudioMembershipList = (output: any, context: __SerdeContext): StudioMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ValidationResult = (output: any, context: __SerdeContext): ValidationResult => {
  return {
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ValidationResults = (output: any, context: __SerdeContext): ValidationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VolumeConfiguration = (output: any, context: __SerdeContext): VolumeConfiguration => {
  return {
    iops: __expectInt32(output.iops),
    size: __expectInt32(output.size),
    throughput: __expectInt32(output.throughput),
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
