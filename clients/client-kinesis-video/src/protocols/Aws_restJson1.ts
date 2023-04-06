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
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateSignalingChannelCommandInput,
  CreateSignalingChannelCommandOutput,
} from "../commands/CreateSignalingChannelCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "../commands/CreateStreamCommand";
import {
  DeleteSignalingChannelCommandInput,
  DeleteSignalingChannelCommandOutput,
} from "../commands/DeleteSignalingChannelCommand";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "../commands/DeleteStreamCommand";
import {
  DescribeEdgeConfigurationCommandInput,
  DescribeEdgeConfigurationCommandOutput,
} from "../commands/DescribeEdgeConfigurationCommand";
import {
  DescribeImageGenerationConfigurationCommandInput,
  DescribeImageGenerationConfigurationCommandOutput,
} from "../commands/DescribeImageGenerationConfigurationCommand";
import {
  DescribeMappedResourceConfigurationCommandInput,
  DescribeMappedResourceConfigurationCommandOutput,
} from "../commands/DescribeMappedResourceConfigurationCommand";
import {
  DescribeMediaStorageConfigurationCommandInput,
  DescribeMediaStorageConfigurationCommandOutput,
} from "../commands/DescribeMediaStorageConfigurationCommand";
import {
  DescribeNotificationConfigurationCommandInput,
  DescribeNotificationConfigurationCommandOutput,
} from "../commands/DescribeNotificationConfigurationCommand";
import {
  DescribeSignalingChannelCommandInput,
  DescribeSignalingChannelCommandOutput,
} from "../commands/DescribeSignalingChannelCommand";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "../commands/DescribeStreamCommand";
import { GetDataEndpointCommandInput, GetDataEndpointCommandOutput } from "../commands/GetDataEndpointCommand";
import {
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
} from "../commands/GetSignalingChannelEndpointCommand";
import {
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
} from "../commands/ListSignalingChannelsCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput } from "../commands/ListTagsForStreamCommand";
import {
  StartEdgeConfigurationUpdateCommandInput,
  StartEdgeConfigurationUpdateCommandOutput,
} from "../commands/StartEdgeConfigurationUpdateCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TagStreamCommandInput, TagStreamCommandOutput } from "../commands/TagStreamCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UntagStreamCommandInput, UntagStreamCommandOutput } from "../commands/UntagStreamCommand";
import {
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
} from "../commands/UpdateDataRetentionCommand";
import {
  UpdateImageGenerationConfigurationCommandInput,
  UpdateImageGenerationConfigurationCommandOutput,
} from "../commands/UpdateImageGenerationConfigurationCommand";
import {
  UpdateMediaStorageConfigurationCommandInput,
  UpdateMediaStorageConfigurationCommandOutput,
} from "../commands/UpdateMediaStorageConfigurationCommand";
import {
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "../commands/UpdateNotificationConfigurationCommand";
import {
  UpdateSignalingChannelCommandInput,
  UpdateSignalingChannelCommandOutput,
} from "../commands/UpdateSignalingChannelCommand";
import { UpdateStreamCommandInput, UpdateStreamCommandOutput } from "../commands/UpdateStreamCommand";
import { KinesisVideoServiceException as __BaseException } from "../models/KinesisVideoServiceException";
import {
  AccessDeniedException,
  AccountChannelLimitExceededException,
  AccountStreamLimitExceededException,
  ChannelInfo,
  ChannelNameCondition,
  ChannelProtocol,
  ClientLimitExceededException,
  DeletionConfig,
  DeviceStreamLimitExceededException,
  EdgeConfig,
  FormatConfigKey,
  ImageGenerationConfiguration,
  ImageGenerationDestinationConfig,
  InvalidArgumentException,
  InvalidDeviceException,
  InvalidResourceFormatException,
  LocalSizeConfig,
  MappedResourceConfigurationListItem,
  MediaSourceConfig,
  MediaStorageConfiguration,
  NoDataRetentionException,
  NotAuthorizedException,
  NotificationConfiguration,
  NotificationDestinationConfig,
  RecorderConfig,
  ResourceEndpointListItem,
  ResourceInUseException,
  ResourceNotFoundException,
  ScheduleConfig,
  SingleMasterChannelEndpointConfiguration,
  SingleMasterConfiguration,
  StreamEdgeConfigurationNotFoundException,
  StreamInfo,
  StreamNameCondition,
  Tag,
  TagsPerResourceExceededLimitException,
  UploaderConfig,
  VersionMismatchException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateSignalingChannelCommand
 */
export const se_CreateSignalingChannelCommand = async (
  input: CreateSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelName != null && { ChannelName: input.ChannelName }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.SingleMasterConfiguration != null && {
      SingleMasterConfiguration: se_SingleMasterConfiguration(input.SingleMasterConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_TagOnCreateList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateStreamCommand
 */
export const se_CreateStreamCommand = async (
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createStream";
  let body: any;
  body = JSON.stringify({
    ...(input.DataRetentionInHours != null && { DataRetentionInHours: input.DataRetentionInHours }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MediaType != null && { MediaType: input.MediaType }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.Tags != null && { Tags: se_ResourceTags(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteSignalingChannelCommand
 */
export const se_DeleteSignalingChannelCommand = async (
  input: DeleteSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.CurrentVersion != null && { CurrentVersion: input.CurrentVersion }),
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
 * serializeAws_restJson1DeleteStreamCommand
 */
export const se_DeleteStreamCommand = async (
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteStream";
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { CurrentVersion: input.CurrentVersion }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
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
 * serializeAws_restJson1DescribeEdgeConfigurationCommand
 */
export const se_DescribeEdgeConfigurationCommand = async (
  input: DescribeEdgeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeEdgeConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1DescribeImageGenerationConfigurationCommand
 */
export const se_DescribeImageGenerationConfigurationCommand = async (
  input: DescribeImageGenerationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeImageGenerationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1DescribeMappedResourceConfigurationCommand
 */
export const se_DescribeMappedResourceConfigurationCommand = async (
  input: DescribeMappedResourceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeMappedResourceConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1DescribeMediaStorageConfigurationCommand
 */
export const se_DescribeMediaStorageConfigurationCommand = async (
  input: DescribeMediaStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeMediaStorageConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.ChannelName != null && { ChannelName: input.ChannelName }),
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
 * serializeAws_restJson1DescribeNotificationConfigurationCommand
 */
export const se_DescribeNotificationConfigurationCommand = async (
  input: DescribeNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeNotificationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1DescribeSignalingChannelCommand
 */
export const se_DescribeSignalingChannelCommand = async (
  input: DescribeSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.ChannelName != null && { ChannelName: input.ChannelName }),
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
 * serializeAws_restJson1DescribeStreamCommand
 */
export const se_DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeStream";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1GetDataEndpointCommand
 */
export const se_GetDataEndpointCommand = async (
  input: GetDataEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getDataEndpoint";
  let body: any;
  body = JSON.stringify({
    ...(input.APIName != null && { APIName: input.APIName }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1GetSignalingChannelEndpointCommand
 */
export const se_GetSignalingChannelEndpointCommand = async (
  input: GetSignalingChannelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getSignalingChannelEndpoint";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.SingleMasterChannelEndpointConfiguration != null && {
      SingleMasterChannelEndpointConfiguration: se_SingleMasterChannelEndpointConfiguration(
        input.SingleMasterChannelEndpointConfiguration,
        context
      ),
    }),
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
 * serializeAws_restJson1ListSignalingChannelsCommand
 */
export const se_ListSignalingChannelsCommand = async (
  input: ListSignalingChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listSignalingChannels";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelNameCondition != null && {
      ChannelNameCondition: se_ChannelNameCondition(input.ChannelNameCondition, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListStreamsCommand
 */
export const se_ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listStreams";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StreamNameCondition != null && {
      StreamNameCondition: se_StreamNameCondition(input.StreamNameCondition, context),
    }),
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTagsForResource";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
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
 * serializeAws_restJson1ListTagsForStreamCommand
 */
export const se_ListTagsForStreamCommand = async (
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listTagsForStream";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1StartEdgeConfigurationUpdateCommand
 */
export const se_StartEdgeConfigurationUpdateCommand = async (
  input: StartEdgeConfigurationUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/startEdgeConfigurationUpdate";
  let body: any;
  body = JSON.stringify({
    ...(input.EdgeConfig != null && { EdgeConfig: se_EdgeConfig(input.EdgeConfig, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1TagStreamCommand
 */
export const se_TagStreamCommand = async (
  input: TagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tagStream";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.Tags != null && { Tags: se_ResourceTags(input.Tags, context) }),
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeyList != null && { TagKeyList: se_TagKeyList(input.TagKeyList, context) }),
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
 * serializeAws_restJson1UntagStreamCommand
 */
export const se_UntagStreamCommand = async (
  input: UntagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/untagStream";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.TagKeyList != null && { TagKeyList: se_TagKeyList(input.TagKeyList, context) }),
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
 * serializeAws_restJson1UpdateDataRetentionCommand
 */
export const se_UpdateDataRetentionCommand = async (
  input: UpdateDataRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateDataRetention";
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { CurrentVersion: input.CurrentVersion }),
    ...(input.DataRetentionChangeInHours != null && { DataRetentionChangeInHours: input.DataRetentionChangeInHours }),
    ...(input.Operation != null && { Operation: input.Operation }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1UpdateImageGenerationConfigurationCommand
 */
export const se_UpdateImageGenerationConfigurationCommand = async (
  input: UpdateImageGenerationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateImageGenerationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.ImageGenerationConfiguration != null && {
      ImageGenerationConfiguration: se_ImageGenerationConfiguration(input.ImageGenerationConfiguration, context),
    }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1UpdateMediaStorageConfigurationCommand
 */
export const se_UpdateMediaStorageConfigurationCommand = async (
  input: UpdateMediaStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateMediaStorageConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.MediaStorageConfiguration != null && {
      MediaStorageConfiguration: se_MediaStorageConfiguration(input.MediaStorageConfiguration, context),
    }),
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
 * serializeAws_restJson1UpdateNotificationConfigurationCommand
 */
export const se_UpdateNotificationConfigurationCommand = async (
  input: UpdateNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateNotificationConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.NotificationConfiguration != null && {
      NotificationConfiguration: se_NotificationConfiguration(input.NotificationConfiguration, context),
    }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * serializeAws_restJson1UpdateSignalingChannelCommand
 */
export const se_UpdateSignalingChannelCommand = async (
  input: UpdateSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN != null && { ChannelARN: input.ChannelARN }),
    ...(input.CurrentVersion != null && { CurrentVersion: input.CurrentVersion }),
    ...(input.SingleMasterConfiguration != null && {
      SingleMasterConfiguration: se_SingleMasterConfiguration(input.SingleMasterConfiguration, context),
    }),
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
 * serializeAws_restJson1UpdateStreamCommand
 */
export const se_UpdateStreamCommand = async (
  input: UpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateStream";
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { CurrentVersion: input.CurrentVersion }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.MediaType != null && { MediaType: input.MediaType }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
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
 * deserializeAws_restJson1CreateSignalingChannelCommand
 */
export const de_CreateSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSignalingChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelARN != null) {
    contents.ChannelARN = __expectString(data.ChannelARN);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSignalingChannelCommandError
 */
const de_CreateSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountChannelLimitExceededException":
    case "com.amazonaws.kinesisvideo#AccountChannelLimitExceededException":
      throw await de_AccountChannelLimitExceededExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await de_TagsPerResourceExceededLimitExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateStreamCommand
 */
export const de_CreateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamARN != null) {
    contents.StreamARN = __expectString(data.StreamARN);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamCommandError
 */
const de_CreateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountStreamLimitExceededException":
    case "com.amazonaws.kinesisvideo#AccountStreamLimitExceededException":
      throw await de_AccountStreamLimitExceededExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "DeviceStreamLimitExceededException":
    case "com.amazonaws.kinesisvideo#DeviceStreamLimitExceededException":
      throw await de_DeviceStreamLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidDeviceException":
    case "com.amazonaws.kinesisvideo#InvalidDeviceException":
      throw await de_InvalidDeviceExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await de_TagsPerResourceExceededLimitExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSignalingChannelCommand
 */
export const de_DeleteSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSignalingChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSignalingChannelCommandError
 */
const de_DeleteSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteStreamCommand
 */
export const de_DeleteStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStreamCommandError
 */
const de_DeleteStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeEdgeConfigurationCommand
 */
export const de_DescribeEdgeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeEdgeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.EdgeConfig != null) {
    contents.EdgeConfig = de_EdgeConfig(data.EdgeConfig, context);
  }
  if (data.FailedStatusDetails != null) {
    contents.FailedStatusDetails = __expectString(data.FailedStatusDetails);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.StreamARN != null) {
    contents.StreamARN = __expectString(data.StreamARN);
  }
  if (data.StreamName != null) {
    contents.StreamName = __expectString(data.StreamName);
  }
  if (data.SyncStatus != null) {
    contents.SyncStatus = __expectString(data.SyncStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEdgeConfigurationCommandError
 */
const de_DescribeEdgeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "StreamEdgeConfigurationNotFoundException":
    case "com.amazonaws.kinesisvideo#StreamEdgeConfigurationNotFoundException":
      throw await de_StreamEdgeConfigurationNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeImageGenerationConfigurationCommand
 */
export const de_DescribeImageGenerationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageGenerationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeImageGenerationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ImageGenerationConfiguration != null) {
    contents.ImageGenerationConfiguration = de_ImageGenerationConfiguration(data.ImageGenerationConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeImageGenerationConfigurationCommandError
 */
const de_DescribeImageGenerationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageGenerationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1DescribeMappedResourceConfigurationCommand
 */
export const de_DescribeMappedResourceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMappedResourceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMappedResourceConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MappedResourceConfigurationList != null) {
    contents.MappedResourceConfigurationList = de_MappedResourceConfigurationList(
      data.MappedResourceConfigurationList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMappedResourceConfigurationCommandError
 */
const de_DescribeMappedResourceConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMappedResourceConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1DescribeMediaStorageConfigurationCommand
 */
export const de_DescribeMediaStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMediaStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMediaStorageConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaStorageConfiguration != null) {
    contents.MediaStorageConfiguration = de_MediaStorageConfiguration(data.MediaStorageConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMediaStorageConfigurationCommandError
 */
const de_DescribeMediaStorageConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMediaStorageConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1DescribeNotificationConfigurationCommand
 */
export const de_DescribeNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NotificationConfiguration != null) {
    contents.NotificationConfiguration = de_NotificationConfiguration(data.NotificationConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNotificationConfigurationCommandError
 */
const de_DescribeNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1DescribeSignalingChannelCommand
 */
export const de_DescribeSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSignalingChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelInfo != null) {
    contents.ChannelInfo = de_ChannelInfo(data.ChannelInfo, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSignalingChannelCommandError
 */
const de_DescribeSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1DescribeStreamCommand
 */
export const de_DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamInfo != null) {
    contents.StreamInfo = de_StreamInfo(data.StreamInfo, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeStreamCommandError
 */
const de_DescribeStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1GetDataEndpointCommand
 */
export const de_GetDataEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataEndpoint != null) {
    contents.DataEndpoint = __expectString(data.DataEndpoint);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDataEndpointCommandError
 */
const de_GetDataEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1GetSignalingChannelEndpointCommand
 */
export const de_GetSignalingChannelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalingChannelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSignalingChannelEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceEndpointList != null) {
    contents.ResourceEndpointList = de_ResourceEndpointList(data.ResourceEndpointList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSignalingChannelEndpointCommandError
 */
const de_GetSignalingChannelEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalingChannelEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1ListSignalingChannelsCommand
 */
export const de_ListSignalingChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalingChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSignalingChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelInfoList != null) {
    contents.ChannelInfoList = de_ChannelInfoList(data.ChannelInfoList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSignalingChannelsCommandError
 */
const de_ListSignalingChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalingChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListStreamsCommand
 */
export const de_ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListStreamsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StreamInfoList != null) {
    contents.StreamInfoList = de_StreamInfoList(data.StreamInfoList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamsCommandError
 */
const de_ListStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = de_ResourceTags(data.Tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1ListTagsForStreamCommand
 */
export const de_ListTagsForStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = de_ResourceTags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForStreamCommandError
 */
const de_ListTagsForStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      throw await de_InvalidResourceFormatExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1StartEdgeConfigurationUpdateCommand
 */
export const de_StartEdgeConfigurationUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEdgeConfigurationUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartEdgeConfigurationUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.EdgeConfig != null) {
    contents.EdgeConfig = de_EdgeConfig(data.EdgeConfig, context);
  }
  if (data.FailedStatusDetails != null) {
    contents.FailedStatusDetails = __expectString(data.FailedStatusDetails);
  }
  if (data.LastUpdatedTime != null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.StreamARN != null) {
    contents.StreamARN = __expectString(data.StreamARN);
  }
  if (data.StreamName != null) {
    contents.StreamName = __expectString(data.StreamName);
  }
  if (data.SyncStatus != null) {
    contents.SyncStatus = __expectString(data.SyncStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartEdgeConfigurationUpdateCommandError
 */
const de_StartEdgeConfigurationUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEdgeConfigurationUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await de_NoDataRetentionExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await de_TagsPerResourceExceededLimitExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagStreamCommand
 */
export const de_TagStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagStreamCommandError
 */
const de_TagStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      throw await de_InvalidResourceFormatExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await de_TagsPerResourceExceededLimitExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1UntagStreamCommand
 */
export const de_UntagStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagStreamCommandError
 */
const de_UntagStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      throw await de_InvalidResourceFormatExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1UpdateDataRetentionCommand
 */
export const de_UpdateDataRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDataRetentionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataRetentionCommandError
 */
const de_UpdateDataRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateImageGenerationConfigurationCommand
 */
export const de_UpdateImageGenerationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageGenerationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateImageGenerationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateImageGenerationConfigurationCommandError
 */
const de_UpdateImageGenerationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageGenerationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await de_NoDataRetentionExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1UpdateMediaStorageConfigurationCommand
 */
export const de_UpdateMediaStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMediaStorageConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMediaStorageConfigurationCommandError
 */
const de_UpdateMediaStorageConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaStorageConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await de_NoDataRetentionExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1UpdateNotificationConfigurationCommand
 */
export const de_UpdateNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNotificationConfigurationCommandError
 */
const de_UpdateNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await de_NoDataRetentionExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
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
 * deserializeAws_restJson1UpdateSignalingChannelCommand
 */
export const de_UpdateSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSignalingChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSignalingChannelCommandError
 */
const de_UpdateSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateStreamCommand
 */
export const de_UpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStreamCommandError
 */
const de_UpdateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await de_VersionMismatchExceptionRes(parsedOutput, context);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AccountChannelLimitExceededExceptionRes
 */
const de_AccountChannelLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountChannelLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccountChannelLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AccountStreamLimitExceededExceptionRes
 */
const de_AccountStreamLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountStreamLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccountStreamLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ClientLimitExceededExceptionRes
 */
const de_ClientLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ClientLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeviceStreamLimitExceededExceptionRes
 */
const de_DeviceStreamLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeviceStreamLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DeviceStreamLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidDeviceExceptionRes
 */
const de_InvalidDeviceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeviceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidDeviceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidResourceFormatExceptionRes
 */
const de_InvalidResourceFormatExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceFormatException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidResourceFormatException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NoDataRetentionExceptionRes
 */
const de_NoDataRetentionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoDataRetentionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NoDataRetentionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceInUseException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1StreamEdgeConfigurationNotFoundExceptionRes
 */
const de_StreamEdgeConfigurationNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StreamEdgeConfigurationNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new StreamEdgeConfigurationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TagsPerResourceExceededLimitExceptionRes
 */
const de_TagsPerResourceExceededLimitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsPerResourceExceededLimitException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TagsPerResourceExceededLimitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1VersionMismatchExceptionRes
 */
const de_VersionMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionMismatchException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new VersionMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ChannelNameCondition
 */
const se_ChannelNameCondition = (input: ChannelNameCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.ComparisonValue != null && { ComparisonValue: input.ComparisonValue }),
  };
};

/**
 * serializeAws_restJson1DeletionConfig
 */
const se_DeletionConfig = (input: DeletionConfig, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAfterUpload != null && { DeleteAfterUpload: input.DeleteAfterUpload }),
    ...(input.EdgeRetentionInHours != null && { EdgeRetentionInHours: input.EdgeRetentionInHours }),
    ...(input.LocalSizeConfig != null && { LocalSizeConfig: se_LocalSizeConfig(input.LocalSizeConfig, context) }),
  };
};

/**
 * serializeAws_restJson1EdgeConfig
 */
const se_EdgeConfig = (input: EdgeConfig, context: __SerdeContext): any => {
  return {
    ...(input.DeletionConfig != null && { DeletionConfig: se_DeletionConfig(input.DeletionConfig, context) }),
    ...(input.HubDeviceArn != null && { HubDeviceArn: input.HubDeviceArn }),
    ...(input.RecorderConfig != null && { RecorderConfig: se_RecorderConfig(input.RecorderConfig, context) }),
    ...(input.UploaderConfig != null && { UploaderConfig: se_UploaderConfig(input.UploaderConfig, context) }),
  };
};

/**
 * serializeAws_restJson1FormatConfig
 */
const se_FormatConfig = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [FormatConfigKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ImageGenerationConfiguration
 */
const se_ImageGenerationConfiguration = (input: ImageGenerationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DestinationConfig != null && {
      DestinationConfig: se_ImageGenerationDestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.FormatConfig != null && { FormatConfig: se_FormatConfig(input.FormatConfig, context) }),
    ...(input.HeightPixels != null && { HeightPixels: input.HeightPixels }),
    ...(input.ImageSelectorType != null && { ImageSelectorType: input.ImageSelectorType }),
    ...(input.SamplingInterval != null && { SamplingInterval: input.SamplingInterval }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.WidthPixels != null && { WidthPixels: input.WidthPixels }),
  };
};

/**
 * serializeAws_restJson1ImageGenerationDestinationConfig
 */
const se_ImageGenerationDestinationConfig = (input: ImageGenerationDestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.DestinationRegion != null && { DestinationRegion: input.DestinationRegion }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

/**
 * serializeAws_restJson1ListOfProtocols
 */
const se_ListOfProtocols = (input: (ChannelProtocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1LocalSizeConfig
 */
const se_LocalSizeConfig = (input: LocalSizeConfig, context: __SerdeContext): any => {
  return {
    ...(input.MaxLocalMediaSizeInMB != null && { MaxLocalMediaSizeInMB: input.MaxLocalMediaSizeInMB }),
    ...(input.StrategyOnFullSize != null && { StrategyOnFullSize: input.StrategyOnFullSize }),
  };
};

/**
 * serializeAws_restJson1MediaSourceConfig
 */
const se_MediaSourceConfig = (input: MediaSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.MediaUriSecretArn != null && { MediaUriSecretArn: input.MediaUriSecretArn }),
    ...(input.MediaUriType != null && { MediaUriType: input.MediaUriType }),
  };
};

/**
 * serializeAws_restJson1MediaStorageConfiguration
 */
const se_MediaStorageConfiguration = (input: MediaStorageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

/**
 * serializeAws_restJson1NotificationConfiguration
 */
const se_NotificationConfiguration = (input: NotificationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DestinationConfig != null && {
      DestinationConfig: se_NotificationDestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_restJson1NotificationDestinationConfig
 */
const se_NotificationDestinationConfig = (input: NotificationDestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

/**
 * serializeAws_restJson1RecorderConfig
 */
const se_RecorderConfig = (input: RecorderConfig, context: __SerdeContext): any => {
  return {
    ...(input.MediaSourceConfig != null && {
      MediaSourceConfig: se_MediaSourceConfig(input.MediaSourceConfig, context),
    }),
    ...(input.ScheduleConfig != null && { ScheduleConfig: se_ScheduleConfig(input.ScheduleConfig, context) }),
  };
};

/**
 * serializeAws_restJson1ResourceTags
 */
const se_ResourceTags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ScheduleConfig
 */
const se_ScheduleConfig = (input: ScheduleConfig, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

/**
 * serializeAws_restJson1SingleMasterChannelEndpointConfiguration
 */
const se_SingleMasterChannelEndpointConfiguration = (
  input: SingleMasterChannelEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Protocols != null && { Protocols: se_ListOfProtocols(input.Protocols, context) }),
    ...(input.Role != null && { Role: input.Role }),
  };
};

/**
 * serializeAws_restJson1SingleMasterConfiguration
 */
const se_SingleMasterConfiguration = (input: SingleMasterConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MessageTtlSeconds != null && { MessageTtlSeconds: input.MessageTtlSeconds }),
  };
};

/**
 * serializeAws_restJson1StreamNameCondition
 */
const se_StreamNameCondition = (input: StreamNameCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.ComparisonValue != null && { ComparisonValue: input.ComparisonValue }),
  };
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TagOnCreateList
 */
const se_TagOnCreateList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1UploaderConfig
 */
const se_UploaderConfig = (input: UploaderConfig, context: __SerdeContext): any => {
  return {
    ...(input.ScheduleConfig != null && { ScheduleConfig: se_ScheduleConfig(input.ScheduleConfig, context) }),
  };
};

/**
 * deserializeAws_restJson1ChannelInfo
 */
const de_ChannelInfo = (output: any, context: __SerdeContext): ChannelInfo => {
  return {
    ChannelARN: __expectString(output.ChannelARN),
    ChannelName: __expectString(output.ChannelName),
    ChannelStatus: __expectString(output.ChannelStatus),
    ChannelType: __expectString(output.ChannelType),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    SingleMasterConfiguration:
      output.SingleMasterConfiguration != null
        ? de_SingleMasterConfiguration(output.SingleMasterConfiguration, context)
        : undefined,
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelInfoList
 */
const de_ChannelInfoList = (output: any, context: __SerdeContext): ChannelInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeletionConfig
 */
const de_DeletionConfig = (output: any, context: __SerdeContext): DeletionConfig => {
  return {
    DeleteAfterUpload: __expectBoolean(output.DeleteAfterUpload),
    EdgeRetentionInHours: __expectInt32(output.EdgeRetentionInHours),
    LocalSizeConfig: output.LocalSizeConfig != null ? de_LocalSizeConfig(output.LocalSizeConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EdgeConfig
 */
const de_EdgeConfig = (output: any, context: __SerdeContext): EdgeConfig => {
  return {
    DeletionConfig: output.DeletionConfig != null ? de_DeletionConfig(output.DeletionConfig, context) : undefined,
    HubDeviceArn: __expectString(output.HubDeviceArn),
    RecorderConfig: output.RecorderConfig != null ? de_RecorderConfig(output.RecorderConfig, context) : undefined,
    UploaderConfig: output.UploaderConfig != null ? de_UploaderConfig(output.UploaderConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FormatConfig
 */
const de_FormatConfig = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [FormatConfigKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ImageGenerationConfiguration
 */
const de_ImageGenerationConfiguration = (output: any, context: __SerdeContext): ImageGenerationConfiguration => {
  return {
    DestinationConfig:
      output.DestinationConfig != null
        ? de_ImageGenerationDestinationConfig(output.DestinationConfig, context)
        : undefined,
    Format: __expectString(output.Format),
    FormatConfig: output.FormatConfig != null ? de_FormatConfig(output.FormatConfig, context) : undefined,
    HeightPixels: __expectInt32(output.HeightPixels),
    ImageSelectorType: __expectString(output.ImageSelectorType),
    SamplingInterval: __expectInt32(output.SamplingInterval),
    Status: __expectString(output.Status),
    WidthPixels: __expectInt32(output.WidthPixels),
  } as any;
};

/**
 * deserializeAws_restJson1ImageGenerationDestinationConfig
 */
const de_ImageGenerationDestinationConfig = (
  output: any,
  context: __SerdeContext
): ImageGenerationDestinationConfig => {
  return {
    DestinationRegion: __expectString(output.DestinationRegion),
    Uri: __expectString(output.Uri),
  } as any;
};

/**
 * deserializeAws_restJson1LocalSizeConfig
 */
const de_LocalSizeConfig = (output: any, context: __SerdeContext): LocalSizeConfig => {
  return {
    MaxLocalMediaSizeInMB: __expectInt32(output.MaxLocalMediaSizeInMB),
    StrategyOnFullSize: __expectString(output.StrategyOnFullSize),
  } as any;
};

/**
 * deserializeAws_restJson1MappedResourceConfigurationList
 */
const de_MappedResourceConfigurationList = (
  output: any,
  context: __SerdeContext
): MappedResourceConfigurationListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MappedResourceConfigurationListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MappedResourceConfigurationListItem
 */
const de_MappedResourceConfigurationListItem = (
  output: any,
  context: __SerdeContext
): MappedResourceConfigurationListItem => {
  return {
    ARN: __expectString(output.ARN),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1MediaSourceConfig
 */
const de_MediaSourceConfig = (output: any, context: __SerdeContext): MediaSourceConfig => {
  return {
    MediaUriSecretArn: __expectString(output.MediaUriSecretArn),
    MediaUriType: __expectString(output.MediaUriType),
  } as any;
};

/**
 * deserializeAws_restJson1MediaStorageConfiguration
 */
const de_MediaStorageConfiguration = (output: any, context: __SerdeContext): MediaStorageConfiguration => {
  return {
    Status: __expectString(output.Status),
    StreamARN: __expectString(output.StreamARN),
  } as any;
};

/**
 * deserializeAws_restJson1NotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  return {
    DestinationConfig:
      output.DestinationConfig != null
        ? de_NotificationDestinationConfig(output.DestinationConfig, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1NotificationDestinationConfig
 */
const de_NotificationDestinationConfig = (output: any, context: __SerdeContext): NotificationDestinationConfig => {
  return {
    Uri: __expectString(output.Uri),
  } as any;
};

/**
 * deserializeAws_restJson1RecorderConfig
 */
const de_RecorderConfig = (output: any, context: __SerdeContext): RecorderConfig => {
  return {
    MediaSourceConfig:
      output.MediaSourceConfig != null ? de_MediaSourceConfig(output.MediaSourceConfig, context) : undefined,
    ScheduleConfig: output.ScheduleConfig != null ? de_ScheduleConfig(output.ScheduleConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceEndpointList
 */
const de_ResourceEndpointList = (output: any, context: __SerdeContext): ResourceEndpointListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceEndpointListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceEndpointListItem
 */
const de_ResourceEndpointListItem = (output: any, context: __SerdeContext): ResourceEndpointListItem => {
  return {
    Protocol: __expectString(output.Protocol),
    ResourceEndpoint: __expectString(output.ResourceEndpoint),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceTags
 */
const de_ResourceTags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ScheduleConfig
 */
const de_ScheduleConfig = (output: any, context: __SerdeContext): ScheduleConfig => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

/**
 * deserializeAws_restJson1SingleMasterConfiguration
 */
const de_SingleMasterConfiguration = (output: any, context: __SerdeContext): SingleMasterConfiguration => {
  return {
    MessageTtlSeconds: __expectInt32(output.MessageTtlSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1StreamInfo
 */
const de_StreamInfo = (output: any, context: __SerdeContext): StreamInfo => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataRetentionInHours: __expectInt32(output.DataRetentionInHours),
    DeviceName: __expectString(output.DeviceName),
    KmsKeyId: __expectString(output.KmsKeyId),
    MediaType: __expectString(output.MediaType),
    Status: __expectString(output.Status),
    StreamARN: __expectString(output.StreamARN),
    StreamName: __expectString(output.StreamName),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1StreamInfoList
 */
const de_StreamInfoList = (output: any, context: __SerdeContext): StreamInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StreamInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UploaderConfig
 */
const de_UploaderConfig = (output: any, context: __SerdeContext): UploaderConfig => {
  return {
    ScheduleConfig: output.ScheduleConfig != null ? de_ScheduleConfig(output.ScheduleConfig, context) : undefined,
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
