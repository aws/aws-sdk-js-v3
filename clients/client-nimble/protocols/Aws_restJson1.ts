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
  StartStudioSSOConfigurationRepairCommandInput,
  StartStudioSSOConfigurationRepairCommandOutput,
} from "../commands/StartStudioSSOConfigurationRepairCommand";
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
  StreamingImage,
  StreamingImageEncryptionConfiguration,
  StreamingInstanceType,
  StreamingSession,
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
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
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

export const serializeAws_restJson1AcceptEulasCommand = async (
  input: AcceptEulasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/eula-acceptances";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.eulaIds !== undefined &&
      input.eulaIds !== null && { eulaIds: serializeAws_restJson1EulaIdList(input.eulaIds, context) }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.ec2SubnetIds !== undefined &&
      input.ec2SubnetIds !== null && {
        ec2SubnetIds: serializeAws_restJson1EC2SubnetIdList(input.ec2SubnetIds, context),
      }),
    ...(input.launchProfileProtocolVersions !== undefined &&
      input.launchProfileProtocolVersions !== null && {
        launchProfileProtocolVersions: serializeAws_restJson1LaunchProfileProtocolVersionList(
          input.launchProfileProtocolVersions,
          context
        ),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.streamConfiguration !== undefined &&
      input.streamConfiguration !== null && {
        streamConfiguration: serializeAws_restJson1StreamConfigurationCreate(input.streamConfiguration, context),
      }),
    ...(input.studioComponentIds !== undefined &&
      input.studioComponentIds !== null && {
        studioComponentIds: serializeAws_restJson1LaunchProfileStudioComponentIdList(input.studioComponentIds, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.ec2ImageId !== undefined && input.ec2ImageId !== null && { ec2ImageId: input.ec2ImageId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ec2InstanceType !== undefined &&
      input.ec2InstanceType !== null && { ec2InstanceType: input.ec2InstanceType }),
    ...(input.launchProfileId !== undefined &&
      input.launchProfileId !== null && { launchProfileId: input.launchProfileId }),
    ...(input.ownedBy !== undefined && input.ownedBy !== null && { ownedBy: input.ownedBy }),
    ...(input.streamingImageId !== undefined &&
      input.streamingImageId !== null && { streamingImageId: input.streamingImageId }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams";
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.expirationInSeconds !== undefined &&
      input.expirationInSeconds !== null && { expirationInSeconds: input.expirationInSeconds }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios";
  let body: any;
  body = JSON.stringify({
    ...(input.adminRoleArn !== undefined && input.adminRoleArn !== null && { adminRoleArn: input.adminRoleArn }),
    ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
    ...(input.studioEncryptionConfiguration !== undefined &&
      input.studioEncryptionConfiguration !== null && {
        studioEncryptionConfiguration: serializeAws_restJson1StudioEncryptionConfiguration(
          input.studioEncryptionConfiguration,
          context
        ),
      }),
    ...(input.studioName !== undefined && input.studioName !== null && { studioName: input.studioName }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.userRoleArn !== undefined && input.userRoleArn !== null && { userRoleArn: input.userRoleArn }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.configuration !== undefined &&
      input.configuration !== null && {
        configuration: serializeAws_restJson1StudioComponentConfiguration(input.configuration, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.ec2SecurityGroupIds !== undefined &&
      input.ec2SecurityGroupIds !== null && {
        ec2SecurityGroupIds: serializeAws_restJson1StudioComponentSecurityGroupIdList(
          input.ec2SecurityGroupIds,
          context
        ),
      }),
    ...(input.initializationScripts !== undefined &&
      input.initializationScripts !== null && {
        initializationScripts: serializeAws_restJson1StudioComponentInitializationScriptList(
          input.initializationScripts,
          context
        ),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.scriptParameters !== undefined &&
      input.scriptParameters !== null && {
        scriptParameters: serializeAws_restJson1StudioComponentScriptParameterKeyValueList(
          input.scriptParameters,
          context
        ),
      }),
    ...(input.subtype !== undefined && input.subtype !== null && { subtype: input.subtype }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1DeleteLaunchProfileMemberCommand = async (
  input: DeleteLaunchProfileMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.principalId !== undefined) {
    const labelValue: string = input.principalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: principalId.");
    }
    resolvedPath = resolvedPath.replace("{principalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: principalId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1DeleteStreamingImageCommand = async (
  input: DeleteStreamingImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
  if (input.streamingImageId !== undefined) {
    const labelValue: string = input.streamingImageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: streamingImageId.");
    }
    resolvedPath = resolvedPath.replace("{streamingImageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: streamingImageId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1DeleteStreamingSessionCommand = async (
  input: DeleteStreamingSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}";
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1DeleteStudioCommand = async (
  input: DeleteStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1DeleteStudioComponentCommand = async (
  input: DeleteStudioComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
  if (input.studioComponentId !== undefined) {
    const labelValue: string = input.studioComponentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioComponentId.");
    }
    resolvedPath = resolvedPath.replace("{studioComponentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioComponentId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1DeleteStudioMemberCommand = async (
  input: DeleteStudioMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/membership/{principalId}";
  if (input.principalId !== undefined) {
    const labelValue: string = input.principalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: principalId.");
    }
    resolvedPath = resolvedPath.replace("{principalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: principalId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetEulaCommand = async (
  input: GetEulaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/eulas/{eulaId}";
  if (input.eulaId !== undefined) {
    const labelValue: string = input.eulaId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: eulaId.");
    }
    resolvedPath = resolvedPath.replace("{eulaId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: eulaId.");
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

export const serializeAws_restJson1GetLaunchProfileCommand = async (
  input: GetLaunchProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetLaunchProfileDetailsCommand = async (
  input: GetLaunchProfileDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetLaunchProfileInitializationCommand = async (
  input: GetLaunchProfileInitializationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
    ...(input.launchProfileProtocolVersions !== undefined && {
      launchProfileProtocolVersions: (input.launchProfileProtocolVersions || []).map((_entry) => _entry as any),
    }),
    ...(input.launchPurpose !== undefined && { launchPurpose: input.launchPurpose }),
    ...(input.platform !== undefined && { platform: input.platform }),
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

export const serializeAws_restJson1GetLaunchProfileMemberCommand = async (
  input: GetLaunchProfileMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.principalId !== undefined) {
    const labelValue: string = input.principalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: principalId.");
    }
    resolvedPath = resolvedPath.replace("{principalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: principalId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetStreamingImageCommand = async (
  input: GetStreamingImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
  if (input.streamingImageId !== undefined) {
    const labelValue: string = input.streamingImageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: streamingImageId.");
    }
    resolvedPath = resolvedPath.replace("{streamingImageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: streamingImageId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetStreamingSessionCommand = async (
  input: GetStreamingSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}";
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetStreamingSessionStreamCommand = async (
  input: GetStreamingSessionStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}";
  if (input.sessionId !== undefined) {
    const labelValue: string = input.sessionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: sessionId.");
    }
    resolvedPath = resolvedPath.replace("{sessionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: sessionId.");
  }
  if (input.streamId !== undefined) {
    const labelValue: string = input.streamId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: streamId.");
    }
    resolvedPath = resolvedPath.replace("{streamId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: streamId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetStudioCommand = async (
  input: GetStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetStudioComponentCommand = async (
  input: GetStudioComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
  if (input.studioComponentId !== undefined) {
    const labelValue: string = input.studioComponentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioComponentId.");
    }
    resolvedPath = resolvedPath.replace("{studioComponentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioComponentId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1GetStudioMemberCommand = async (
  input: GetStudioMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/membership/{principalId}";
  if (input.principalId !== undefined) {
    const labelValue: string = input.principalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: principalId.");
    }
    resolvedPath = resolvedPath.replace("{principalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: principalId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
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

export const serializeAws_restJson1ListEulaAcceptancesCommand = async (
  input: ListEulaAcceptancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/eula-acceptances";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
    ...(input.eulaIds !== undefined && { eulaIds: (input.eulaIds || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1ListEulasCommand = async (
  input: ListEulasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/eulas";
  const query: any = {
    ...(input.eulaIds !== undefined && { eulaIds: (input.eulaIds || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1ListLaunchProfileMembersCommand = async (
  input: ListLaunchProfileMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
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

export const serializeAws_restJson1ListLaunchProfilesCommand = async (
  input: ListLaunchProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.principalId !== undefined && { principalId: input.principalId }),
    ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1ListStreamingImagesCommand = async (
  input: ListStreamingImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.owner !== undefined && { owner: input.owner }),
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

export const serializeAws_restJson1ListStreamingSessionsCommand = async (
  input: ListStreamingSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-sessions";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
    ...(input.createdBy !== undefined && { createdBy: input.createdBy }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.ownedBy !== undefined && { ownedBy: input.ownedBy }),
    ...(input.sessionIds !== undefined && { sessionIds: input.sessionIds }),
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

export const serializeAws_restJson1ListStudioComponentsCommand = async (
  input: ListStudioComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry as any) }),
    ...(input.types !== undefined && { types: (input.types || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1ListStudioMembersCommand = async (
  input: ListStudioMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}/membership";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  const query: any = {
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

export const serializeAws_restJson1ListStudiosCommand = async (
  input: ListStudiosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios";
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/tags/{resourceArn}";
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

export const serializeAws_restJson1PutLaunchProfileMembersCommand = async (
  input: PutLaunchProfileMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.identityStoreId !== undefined &&
      input.identityStoreId !== null && { identityStoreId: input.identityStoreId }),
    ...(input.members !== undefined &&
      input.members !== null && { members: serializeAws_restJson1NewLaunchProfileMemberList(input.members, context) }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}/membership";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.identityStoreId !== undefined &&
      input.identityStoreId !== null && { identityStoreId: input.identityStoreId }),
    ...(input.members !== undefined &&
      input.members !== null && { members: serializeAws_restJson1NewStudioMemberList(input.members, context) }),
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/sso-configuration";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
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
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1UpdateLaunchProfileCommand = async (
  input: UpdateLaunchProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.launchProfileProtocolVersions !== undefined &&
      input.launchProfileProtocolVersions !== null && {
        launchProfileProtocolVersions: serializeAws_restJson1LaunchProfileProtocolVersionList(
          input.launchProfileProtocolVersions,
          context
        ),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.streamConfiguration !== undefined &&
      input.streamConfiguration !== null && {
        streamConfiguration: serializeAws_restJson1StreamConfigurationCreate(input.streamConfiguration, context),
      }),
    ...(input.studioComponentIds !== undefined &&
      input.studioComponentIds !== null && {
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
  if (input.launchProfileId !== undefined) {
    const labelValue: string = input.launchProfileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launchProfileId.");
    }
    resolvedPath = resolvedPath.replace("{launchProfileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launchProfileId.");
  }
  if (input.principalId !== undefined) {
    const labelValue: string = input.principalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: principalId.");
    }
    resolvedPath = resolvedPath.replace("{principalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: principalId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.persona !== undefined && input.persona !== null && { persona: input.persona }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
  if (input.streamingImageId !== undefined) {
    const labelValue: string = input.streamingImageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: streamingImageId.");
    }
    resolvedPath = resolvedPath.replace("{streamingImageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: streamingImageId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-08-01/studios/{studioId}";
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.adminRoleArn !== undefined && input.adminRoleArn !== null && { adminRoleArn: input.adminRoleArn }),
    ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
    ...(input.userRoleArn !== undefined && input.userRoleArn !== null && { userRoleArn: input.userRoleArn }),
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
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
  if (input.studioComponentId !== undefined) {
    const labelValue: string = input.studioComponentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioComponentId.");
    }
    resolvedPath = resolvedPath.replace("{studioComponentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioComponentId.");
  }
  if (input.studioId !== undefined) {
    const labelValue: string = input.studioId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: studioId.");
    }
    resolvedPath = resolvedPath.replace("{studioId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: studioId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.configuration !== undefined &&
      input.configuration !== null && {
        configuration: serializeAws_restJson1StudioComponentConfiguration(input.configuration, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.ec2SecurityGroupIds !== undefined &&
      input.ec2SecurityGroupIds !== null && {
        ec2SecurityGroupIds: serializeAws_restJson1StudioComponentSecurityGroupIdList(
          input.ec2SecurityGroupIds,
          context
        ),
      }),
    ...(input.initializationScripts !== undefined &&
      input.initializationScripts !== null && {
        initializationScripts: serializeAws_restJson1StudioComponentInitializationScriptList(
          input.initializationScripts,
          context
        ),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.scriptParameters !== undefined &&
      input.scriptParameters !== null && {
        scriptParameters: serializeAws_restJson1StudioComponentScriptParameterKeyValueList(
          input.scriptParameters,
          context
        ),
      }),
    ...(input.subtype !== undefined && input.subtype !== null && { subtype: input.subtype }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
  const contents: AcceptEulasCommandOutput = {
    $metadata: deserializeMetadata(output),
    eulaAcceptances: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eulaAcceptances !== undefined && data.eulaAcceptances !== null) {
    contents.eulaAcceptances = deserializeAws_restJson1EulaAcceptanceList(data.eulaAcceptances, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AcceptEulasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEulasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLaunchProfileCommandError(output, context);
  }
  const contents: CreateLaunchProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    launchProfile: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile !== undefined && data.launchProfile !== null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStreamingImageCommandError(output, context);
  }
  const contents: CreateStreamingImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    streamingImage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage !== undefined && data.streamingImage !== null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStreamingSessionCommandError(output, context);
  }
  const contents: CreateStreamingSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    session: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session !== undefined && data.session !== null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStreamingSessionStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStreamingSessionStreamCommandError(output, context);
  }
  const contents: CreateStreamingSessionStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    stream: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.stream !== undefined && data.stream !== null) {
    contents.stream = deserializeAws_restJson1StreamingSessionStream(data.stream, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStreamingSessionStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamingSessionStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStudioCommandError(output, context);
  }
  const contents: CreateStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    studio: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio !== undefined && data.studio !== null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1CreateStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStudioComponentCommandError(output, context);
  }
  const contents: CreateStudioComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    studioComponent: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent !== undefined && data.studioComponent !== null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLaunchProfileCommandError(output, context);
  }
  const contents: DeleteLaunchProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    launchProfile: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile !== undefined && data.launchProfile !== null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLaunchProfileMemberCommandError(output, context);
  }
  const contents: DeleteLaunchProfileMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLaunchProfileMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchProfileMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStreamingImageCommandError(output, context);
  }
  const contents: DeleteStreamingImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    streamingImage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage !== undefined && data.streamingImage !== null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStreamingSessionCommandError(output, context);
  }
  const contents: DeleteStreamingSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    session: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session !== undefined && data.session !== null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStudioCommandError(output, context);
  }
  const contents: DeleteStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    studio: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio !== undefined && data.studio !== null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStudioComponentCommandError(output, context);
  }
  const contents: DeleteStudioComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    studioComponent: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent !== undefined && data.studioComponent !== null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1DeleteStudioMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStudioMemberCommandError(output, context);
  }
  const contents: DeleteStudioMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStudioMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetEulaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEulaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEulaCommandError(output, context);
  }
  const contents: GetEulaCommandOutput = {
    $metadata: deserializeMetadata(output),
    eula: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eula !== undefined && data.eula !== null) {
    contents.eula = deserializeAws_restJson1Eula(data.eula, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEulaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEulaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileCommandError(output, context);
  }
  const contents: GetLaunchProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    launchProfile: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile !== undefined && data.launchProfile !== null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileDetailsCommandError(output, context);
  }
  const contents: GetLaunchProfileDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    launchProfile: undefined,
    streamingImages: undefined,
    studioComponentSummaries: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile !== undefined && data.launchProfile !== null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  if (data.streamingImages !== undefined && data.streamingImages !== null) {
    contents.streamingImages = deserializeAws_restJson1StreamingImageList(data.streamingImages, context);
  }
  if (data.studioComponentSummaries !== undefined && data.studioComponentSummaries !== null) {
    contents.studioComponentSummaries = deserializeAws_restJson1StudioComponentSummaryList(
      data.studioComponentSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLaunchProfileDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileInitializationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileInitializationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileInitializationCommandError(output, context);
  }
  const contents: GetLaunchProfileInitializationCommandOutput = {
    $metadata: deserializeMetadata(output),
    launchProfileInitialization: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfileInitialization !== undefined && data.launchProfileInitialization !== null) {
    contents.launchProfileInitialization = deserializeAws_restJson1LaunchProfileInitialization(
      data.launchProfileInitialization,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLaunchProfileInitializationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileInitializationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchProfileMemberCommandError(output, context);
  }
  const contents: GetLaunchProfileMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    member: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member !== undefined && data.member !== null) {
    contents.member = deserializeAws_restJson1LaunchProfileMembership(data.member, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLaunchProfileMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchProfileMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStreamingImageCommandError(output, context);
  }
  const contents: GetStreamingImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    streamingImage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage !== undefined && data.streamingImage !== null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStreamingSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStreamingSessionCommandError(output, context);
  }
  const contents: GetStreamingSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    session: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session !== undefined && data.session !== null) {
    contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStreamingSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStreamingSessionStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStreamingSessionStreamCommandError(output, context);
  }
  const contents: GetStreamingSessionStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    stream: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.stream !== undefined && data.stream !== null) {
    contents.stream = deserializeAws_restJson1StreamingSessionStream(data.stream, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStreamingSessionStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamingSessionStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStudioCommandError(output, context);
  }
  const contents: GetStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    studio: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio !== undefined && data.studio !== null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStudioComponentCommandError(output, context);
  }
  const contents: GetStudioComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    studioComponent: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent !== undefined && data.studioComponent !== null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1GetStudioMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStudioMemberCommandError(output, context);
  }
  const contents: GetStudioMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    member: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member !== undefined && data.member !== null) {
    contents.member = deserializeAws_restJson1StudioMembership(data.member, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStudioMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListEulaAcceptancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulaAcceptancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEulaAcceptancesCommandError(output, context);
  }
  const contents: ListEulaAcceptancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    eulaAcceptances: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eulaAcceptances !== undefined && data.eulaAcceptances !== null) {
    contents.eulaAcceptances = deserializeAws_restJson1EulaAcceptanceList(data.eulaAcceptances, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEulaAcceptancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulaAcceptancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListEulasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEulasCommandError(output, context);
  }
  const contents: ListEulasCommandOutput = {
    $metadata: deserializeMetadata(output),
    eulas: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eulas !== undefined && data.eulas !== null) {
    contents.eulas = deserializeAws_restJson1EulaList(data.eulas, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEulasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEulasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListLaunchProfileMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfileMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLaunchProfileMembersCommandError(output, context);
  }
  const contents: ListLaunchProfileMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    members: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members !== undefined && data.members !== null) {
    contents.members = deserializeAws_restJson1LaunchProfileMembershipList(data.members, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLaunchProfileMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfileMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListLaunchProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLaunchProfilesCommandError(output, context);
  }
  const contents: ListLaunchProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    launchProfiles: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfiles !== undefined && data.launchProfiles !== null) {
    contents.launchProfiles = deserializeAws_restJson1LaunchProfileList(data.launchProfiles, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLaunchProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStreamingImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStreamingImagesCommandError(output, context);
  }
  const contents: ListStreamingImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    streamingImages: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.streamingImages !== undefined && data.streamingImages !== null) {
    contents.streamingImages = deserializeAws_restJson1StreamingImageList(data.streamingImages, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStreamingImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStreamingSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStreamingSessionsCommandError(output, context);
  }
  const contents: ListStreamingSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    sessions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sessions !== undefined && data.sessions !== null) {
    contents.sessions = deserializeAws_restJson1StreamingSessionList(data.sessions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStreamingSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamingSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStudioComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStudioComponentsCommandError(output, context);
  }
  const contents: ListStudioComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    studioComponents: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.studioComponents !== undefined && data.studioComponents !== null) {
    contents.studioComponents = deserializeAws_restJson1StudioComponentList(data.studioComponents, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStudioComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStudioMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStudioMembersCommandError(output, context);
  }
  const contents: ListStudioMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    members: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.members !== undefined && data.members !== null) {
    contents.members = deserializeAws_restJson1StudioMembershipList(data.members, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStudioMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1ListStudiosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStudiosCommandError(output, context);
  }
  const contents: ListStudiosCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    studios: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.studios !== undefined && data.studios !== null) {
    contents.studios = deserializeAws_restJson1StudioList(data.studios, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStudiosCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1PutLaunchProfileMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLaunchProfileMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLaunchProfileMembersCommandError(output, context);
  }
  const contents: PutLaunchProfileMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutLaunchProfileMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLaunchProfileMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1PutStudioMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStudioMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutStudioMembersCommandError(output, context);
  }
  const contents: PutStudioMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutStudioMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStudioMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStudioSSOConfigurationRepairCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartStudioSSOConfigurationRepairCommandError(output, context);
  }
  const contents: StartStudioSSOConfigurationRepairCommandOutput = {
    $metadata: deserializeMetadata(output),
    studio: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio !== undefined && data.studio !== null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartStudioSSOConfigurationRepairCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStudioSSOConfigurationRepairCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateLaunchProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchProfileCommandError(output, context);
  }
  const contents: UpdateLaunchProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    launchProfile: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launchProfile !== undefined && data.launchProfile !== null) {
    contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLaunchProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateLaunchProfileMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchProfileMemberCommandError(output, context);
  }
  const contents: UpdateLaunchProfileMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    member: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.member !== undefined && data.member !== null) {
    contents.member = deserializeAws_restJson1LaunchProfileMembership(data.member, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLaunchProfileMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchProfileMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateStreamingImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStreamingImageCommandError(output, context);
  }
  const contents: UpdateStreamingImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    streamingImage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.streamingImage !== undefined && data.streamingImage !== null) {
    contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStreamingImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamingImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStudioCommandError(output, context);
  }
  const contents: UpdateStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    studio: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studio !== undefined && data.studio !== null) {
    contents.studio = deserializeAws_restJson1Studio(data.studio, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

export const deserializeAws_restJson1UpdateStudioComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStudioComponentCommandError(output, context);
  }
  const contents: UpdateStudioComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    studioComponent: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.studioComponent !== undefined && data.studioComponent !== null) {
    contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStudioComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.nimble#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.nimble#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.nimble#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.nimble#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.nimble#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.nimble#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.nimble#ValidationException":
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    context: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.context !== undefined && data.context !== null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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
    context: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.context !== undefined && data.context !== null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    context: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.context !== undefined && data.context !== null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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
    context: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.context !== undefined && data.context !== null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    context: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.context !== undefined && data.context !== null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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
    context: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.context !== undefined && data.context !== null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
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
    context: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.context !== undefined && data.context !== null) {
    contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1ActiveDirectoryComputerAttribute = (
  input: ActiveDirectoryComputerAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1ActiveDirectoryComputerAttributeList = (
  input: ActiveDirectoryComputerAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ActiveDirectoryComputerAttribute(entry, context);
    });
};

const serializeAws_restJson1ActiveDirectoryConfiguration = (
  input: ActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.computerAttributes !== undefined &&
      input.computerAttributes !== null && {
        computerAttributes: serializeAws_restJson1ActiveDirectoryComputerAttributeList(
          input.computerAttributes,
          context
        ),
      }),
    ...(input.directoryId !== undefined && input.directoryId !== null && { directoryId: input.directoryId }),
    ...(input.organizationalUnitDistinguishedName !== undefined &&
      input.organizationalUnitDistinguishedName !== null && {
        organizationalUnitDistinguishedName: input.organizationalUnitDistinguishedName,
      }),
  };
};

const serializeAws_restJson1ComputeFarmConfiguration = (
  input: ComputeFarmConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.activeDirectoryUser !== undefined &&
      input.activeDirectoryUser !== null && { activeDirectoryUser: input.activeDirectoryUser }),
    ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1EC2SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1EulaIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LaunchProfileProtocolVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LaunchProfileStudioComponentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LicenseServiceConfiguration = (
  input: LicenseServiceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1NewLaunchProfileMember = (input: NewLaunchProfileMember, context: __SerdeContext): any => {
  return {
    ...(input.persona !== undefined && input.persona !== null && { persona: input.persona }),
    ...(input.principalId !== undefined && input.principalId !== null && { principalId: input.principalId }),
  };
};

const serializeAws_restJson1NewLaunchProfileMemberList = (
  input: NewLaunchProfileMember[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1NewLaunchProfileMember(entry, context);
    });
};

const serializeAws_restJson1NewStudioMember = (input: NewStudioMember, context: __SerdeContext): any => {
  return {
    ...(input.persona !== undefined && input.persona !== null && { persona: input.persona }),
    ...(input.principalId !== undefined && input.principalId !== null && { principalId: input.principalId }),
  };
};

const serializeAws_restJson1NewStudioMemberList = (input: NewStudioMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1NewStudioMember(entry, context);
    });
};

const serializeAws_restJson1ScriptParameterKeyValue = (
  input: ScriptParameterKeyValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1SharedFileSystemConfiguration = (
  input: SharedFileSystemConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
    ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
    ...(input.linuxMountPoint !== undefined &&
      input.linuxMountPoint !== null && { linuxMountPoint: input.linuxMountPoint }),
    ...(input.shareName !== undefined && input.shareName !== null && { shareName: input.shareName }),
    ...(input.windowsMountDrive !== undefined &&
      input.windowsMountDrive !== null && { windowsMountDrive: input.windowsMountDrive }),
  };
};

const serializeAws_restJson1StreamConfigurationCreate = (
  input: StreamConfigurationCreate,
  context: __SerdeContext
): any => {
  return {
    ...(input.clipboardMode !== undefined && input.clipboardMode !== null && { clipboardMode: input.clipboardMode }),
    ...(input.ec2InstanceTypes !== undefined &&
      input.ec2InstanceTypes !== null && {
        ec2InstanceTypes: serializeAws_restJson1StreamingInstanceTypeList(input.ec2InstanceTypes, context),
      }),
    ...(input.maxSessionLengthInMinutes !== undefined &&
      input.maxSessionLengthInMinutes !== null && { maxSessionLengthInMinutes: input.maxSessionLengthInMinutes }),
    ...(input.streamingImageIds !== undefined &&
      input.streamingImageIds !== null && {
        streamingImageIds: serializeAws_restJson1StreamingImageIdList(input.streamingImageIds, context),
      }),
  };
};

const serializeAws_restJson1StreamingImageIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StudioComponentConfiguration = (
  input: StudioComponentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.activeDirectoryConfiguration !== undefined &&
      input.activeDirectoryConfiguration !== null && {
        activeDirectoryConfiguration: serializeAws_restJson1ActiveDirectoryConfiguration(
          input.activeDirectoryConfiguration,
          context
        ),
      }),
    ...(input.computeFarmConfiguration !== undefined &&
      input.computeFarmConfiguration !== null && {
        computeFarmConfiguration: serializeAws_restJson1ComputeFarmConfiguration(
          input.computeFarmConfiguration,
          context
        ),
      }),
    ...(input.licenseServiceConfiguration !== undefined &&
      input.licenseServiceConfiguration !== null && {
        licenseServiceConfiguration: serializeAws_restJson1LicenseServiceConfiguration(
          input.licenseServiceConfiguration,
          context
        ),
      }),
    ...(input.sharedFileSystemConfiguration !== undefined &&
      input.sharedFileSystemConfiguration !== null && {
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
    ...(input.launchProfileProtocolVersion !== undefined &&
      input.launchProfileProtocolVersion !== null && {
        launchProfileProtocolVersion: input.launchProfileProtocolVersion,
      }),
    ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
    ...(input.runContext !== undefined && input.runContext !== null && { runContext: input.runContext }),
    ...(input.script !== undefined && input.script !== null && { script: input.script }),
  };
};

const serializeAws_restJson1StudioComponentInitializationScriptList = (
  input: StudioComponentInitializationScript[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ScriptParameterKeyValue(entry, context);
    });
};

const serializeAws_restJson1StudioComponentSecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1StudioEncryptionConfiguration = (
  input: StudioEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.keyArn !== undefined && input.keyArn !== null && { keyArn: input.keyArn }),
    ...(input.keyType !== undefined && input.keyType !== null && { keyType: input.keyType }),
  };
};

const serializeAws_restJson1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActiveDirectoryComputerAttribute(entry, context);
    });
};

const deserializeAws_restJson1ActiveDirectoryConfiguration = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryConfiguration => {
  return {
    computerAttributes:
      output.computerAttributes !== undefined && output.computerAttributes !== null
        ? deserializeAws_restJson1ActiveDirectoryComputerAttributeList(output.computerAttributes, context)
        : undefined,
    directoryId: __expectString(output.directoryId),
    organizationalUnitDistinguishedName: __expectString(output.organizationalUnitDistinguishedName),
  } as any;
};

const deserializeAws_restJson1ActiveDirectoryDnsIpAddressList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Eula = (output: any, context: __SerdeContext): Eula => {
  return {
    content: __expectString(output.content),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    eulaId: __expectString(output.eulaId),
    name: __expectString(output.name),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
  } as any;
};

const deserializeAws_restJson1EulaAcceptance = (output: any, context: __SerdeContext): EulaAcceptance => {
  return {
    acceptedAt: output.acceptedAt !== undefined && output.acceptedAt !== null ? new Date(output.acceptedAt) : undefined,
    acceptedBy: __expectString(output.acceptedBy),
    accepteeId: __expectString(output.accepteeId),
    eulaAcceptanceId: __expectString(output.eulaAcceptanceId),
    eulaId: __expectString(output.eulaId),
  } as any;
};

const deserializeAws_restJson1EulaAcceptanceList = (output: any, context: __SerdeContext): EulaAcceptance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EulaAcceptance(entry, context);
    });
};

const deserializeAws_restJson1EulaIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1EulaList = (output: any, context: __SerdeContext): Eula[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Eula(entry, context);
    });
};

const deserializeAws_restJson1ExceptionContext = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1LaunchProfile = (output: any, context: __SerdeContext): LaunchProfile => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    ec2SubnetIds:
      output.ec2SubnetIds !== undefined && output.ec2SubnetIds !== null
        ? deserializeAws_restJson1EC2SubnetIdList(output.ec2SubnetIds, context)
        : undefined,
    launchProfileId: __expectString(output.launchProfileId),
    launchProfileProtocolVersions:
      output.launchProfileProtocolVersions !== undefined && output.launchProfileProtocolVersions !== null
        ? deserializeAws_restJson1LaunchProfileProtocolVersionList(output.launchProfileProtocolVersions, context)
        : undefined,
    name: __expectString(output.name),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    streamConfiguration:
      output.streamConfiguration !== undefined && output.streamConfiguration !== null
        ? deserializeAws_restJson1StreamConfiguration(output.streamConfiguration, context)
        : undefined,
    studioComponentIds:
      output.studioComponentIds !== undefined && output.studioComponentIds !== null
        ? deserializeAws_restJson1LaunchProfileStudioComponentIdList(output.studioComponentIds, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    updatedBy: __expectString(output.updatedBy),
  } as any;
};

const deserializeAws_restJson1LaunchProfileInitialization = (
  output: any,
  context: __SerdeContext
): LaunchProfileInitialization => {
  return {
    activeDirectory:
      output.activeDirectory !== undefined && output.activeDirectory !== null
        ? deserializeAws_restJson1LaunchProfileInitializationActiveDirectory(output.activeDirectory, context)
        : undefined,
    ec2SecurityGroupIds:
      output.ec2SecurityGroupIds !== undefined && output.ec2SecurityGroupIds !== null
        ? deserializeAws_restJson1LaunchProfileSecurityGroupIdList(output.ec2SecurityGroupIds, context)
        : undefined,
    launchProfileId: __expectString(output.launchProfileId),
    launchProfileProtocolVersion: __expectString(output.launchProfileProtocolVersion),
    launchPurpose: __expectString(output.launchPurpose),
    name: __expectString(output.name),
    platform: __expectString(output.platform),
    systemInitializationScripts:
      output.systemInitializationScripts !== undefined && output.systemInitializationScripts !== null
        ? deserializeAws_restJson1LaunchProfileInitializationScriptList(output.systemInitializationScripts, context)
        : undefined,
    userInitializationScripts:
      output.userInitializationScripts !== undefined && output.userInitializationScripts !== null
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
      output.computerAttributes !== undefined && output.computerAttributes !== null
        ? deserializeAws_restJson1ActiveDirectoryComputerAttributeList(output.computerAttributes, context)
        : undefined,
    directoryId: __expectString(output.directoryId),
    directoryName: __expectString(output.directoryName),
    dnsIpAddresses:
      output.dnsIpAddresses !== undefined && output.dnsIpAddresses !== null
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
    script: __expectString(output.script),
    studioComponentId: __expectString(output.studioComponentId),
    studioComponentName: __expectString(output.studioComponentName),
  } as any;
};

const deserializeAws_restJson1LaunchProfileInitializationScriptList = (
  output: any,
  context: __SerdeContext
): LaunchProfileInitializationScript[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchProfileInitializationScript(entry, context);
    });
};

const deserializeAws_restJson1LaunchProfileList = (output: any, context: __SerdeContext): LaunchProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchProfile(entry, context);
    });
};

const deserializeAws_restJson1LaunchProfileMembership = (
  output: any,
  context: __SerdeContext
): LaunchProfileMembership => {
  return {
    identityStoreId: __expectString(output.identityStoreId),
    persona: __expectString(output.persona),
    principalId: __expectString(output.principalId),
  } as any;
};

const deserializeAws_restJson1LaunchProfileMembershipList = (
  output: any,
  context: __SerdeContext
): LaunchProfileMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchProfileMembership(entry, context);
    });
};

const deserializeAws_restJson1LaunchProfileProtocolVersionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1LaunchProfileSecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1LaunchProfileStudioComponentIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
    clipboardMode: __expectString(output.clipboardMode),
    ec2InstanceTypes:
      output.ec2InstanceTypes !== undefined && output.ec2InstanceTypes !== null
        ? deserializeAws_restJson1StreamingInstanceTypeList(output.ec2InstanceTypes, context)
        : undefined,
    maxSessionLengthInMinutes: __expectInt32(output.maxSessionLengthInMinutes),
    streamingImageIds:
      output.streamingImageIds !== undefined && output.streamingImageIds !== null
        ? deserializeAws_restJson1StreamingImageIdList(output.streamingImageIds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StreamingImage = (output: any, context: __SerdeContext): StreamingImage => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    ec2ImageId: __expectString(output.ec2ImageId),
    encryptionConfiguration:
      output.encryptionConfiguration !== undefined && output.encryptionConfiguration !== null
        ? deserializeAws_restJson1StreamingImageEncryptionConfiguration(output.encryptionConfiguration, context)
        : undefined,
    eulaIds:
      output.eulaIds !== undefined && output.eulaIds !== null
        ? deserializeAws_restJson1EulaIdList(output.eulaIds, context)
        : undefined,
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    streamingImageId: __expectString(output.streamingImageId),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1StreamingImageList = (output: any, context: __SerdeContext): StreamingImage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StreamingImage(entry, context);
    });
};

const deserializeAws_restJson1StreamingInstanceTypeList = (
  output: any,
  context: __SerdeContext
): (StreamingInstanceType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1StreamingSession = (output: any, context: __SerdeContext): StreamingSession => {
  return {
    arn: __expectString(output.arn),
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    createdBy: __expectString(output.createdBy),
    ec2InstanceType: __expectString(output.ec2InstanceType),
    launchProfileId: __expectString(output.launchProfileId),
    ownedBy: __expectString(output.ownedBy),
    sessionId: __expectString(output.sessionId),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    streamingImageId: __expectString(output.streamingImageId),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    terminateAt:
      output.terminateAt !== undefined && output.terminateAt !== null ? new Date(output.terminateAt) : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    updatedBy: __expectString(output.updatedBy),
  } as any;
};

const deserializeAws_restJson1StreamingSessionList = (output: any, context: __SerdeContext): StreamingSession[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StreamingSession(entry, context);
    });
};

const deserializeAws_restJson1StreamingSessionStream = (
  output: any,
  context: __SerdeContext
): StreamingSessionStream => {
  return {
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    createdBy: __expectString(output.createdBy),
    expiresAt: output.expiresAt !== undefined && output.expiresAt !== null ? new Date(output.expiresAt) : undefined,
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
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    displayName: __expectString(output.displayName),
    homeRegion: __expectString(output.homeRegion),
    ssoClientId: __expectString(output.ssoClientId),
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    studioEncryptionConfiguration:
      output.studioEncryptionConfiguration !== undefined && output.studioEncryptionConfiguration !== null
        ? deserializeAws_restJson1StudioEncryptionConfiguration(output.studioEncryptionConfiguration, context)
        : undefined,
    studioId: __expectString(output.studioId),
    studioName: __expectString(output.studioName),
    studioUrl: __expectString(output.studioUrl),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    userRoleArn: __expectString(output.userRoleArn),
  } as any;
};

const deserializeAws_restJson1StudioComponent = (output: any, context: __SerdeContext): StudioComponent => {
  return {
    arn: __expectString(output.arn),
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_restJson1StudioComponentConfiguration(output.configuration, context)
        : undefined,
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    ec2SecurityGroupIds:
      output.ec2SecurityGroupIds !== undefined && output.ec2SecurityGroupIds !== null
        ? deserializeAws_restJson1StudioComponentSecurityGroupIdList(output.ec2SecurityGroupIds, context)
        : undefined,
    initializationScripts:
      output.initializationScripts !== undefined && output.initializationScripts !== null
        ? deserializeAws_restJson1StudioComponentInitializationScriptList(output.initializationScripts, context)
        : undefined,
    name: __expectString(output.name),
    scriptParameters:
      output.scriptParameters !== undefined && output.scriptParameters !== null
        ? deserializeAws_restJson1StudioComponentScriptParameterKeyValueList(output.scriptParameters, context)
        : undefined,
    state: __expectString(output.state),
    statusCode: __expectString(output.statusCode),
    statusMessage: __expectString(output.statusMessage),
    studioComponentId: __expectString(output.studioComponentId),
    subtype: __expectString(output.subtype),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    type: __expectString(output.type),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    updatedBy: __expectString(output.updatedBy),
  } as any;
};

const deserializeAws_restJson1StudioComponentConfiguration = (
  output: any,
  context: __SerdeContext
): StudioComponentConfiguration => {
  return {
    activeDirectoryConfiguration:
      output.activeDirectoryConfiguration !== undefined && output.activeDirectoryConfiguration !== null
        ? deserializeAws_restJson1ActiveDirectoryConfiguration(output.activeDirectoryConfiguration, context)
        : undefined,
    computeFarmConfiguration:
      output.computeFarmConfiguration !== undefined && output.computeFarmConfiguration !== null
        ? deserializeAws_restJson1ComputeFarmConfiguration(output.computeFarmConfiguration, context)
        : undefined,
    licenseServiceConfiguration:
      output.licenseServiceConfiguration !== undefined && output.licenseServiceConfiguration !== null
        ? deserializeAws_restJson1LicenseServiceConfiguration(output.licenseServiceConfiguration, context)
        : undefined,
    sharedFileSystemConfiguration:
      output.sharedFileSystemConfiguration !== undefined && output.sharedFileSystemConfiguration !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioComponentInitializationScript(entry, context);
    });
};

const deserializeAws_restJson1StudioComponentList = (output: any, context: __SerdeContext): StudioComponent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioComponent(entry, context);
    });
};

const deserializeAws_restJson1StudioComponentScriptParameterKeyValueList = (
  output: any,
  context: __SerdeContext
): ScriptParameterKeyValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScriptParameterKeyValue(entry, context);
    });
};

const deserializeAws_restJson1StudioComponentSecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1StudioComponentSummary = (
  output: any,
  context: __SerdeContext
): StudioComponentSummary => {
  return {
    createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
    createdBy: __expectString(output.createdBy),
    description: __expectString(output.description),
    name: __expectString(output.name),
    studioComponentId: __expectString(output.studioComponentId),
    subtype: __expectString(output.subtype),
    type: __expectString(output.type),
    updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    updatedBy: __expectString(output.updatedBy),
  } as any;
};

const deserializeAws_restJson1StudioComponentSummaryList = (
  output: any,
  context: __SerdeContext
): StudioComponentSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioComponentSummary(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Studio(entry, context);
    });
};

const deserializeAws_restJson1StudioMembership = (output: any, context: __SerdeContext): StudioMembership => {
  return {
    identityStoreId: __expectString(output.identityStoreId),
    persona: __expectString(output.persona),
    principalId: __expectString(output.principalId),
  } as any;
};

const deserializeAws_restJson1StudioMembershipList = (output: any, context: __SerdeContext): StudioMembership[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StudioMembership(entry, context);
    });
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
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
