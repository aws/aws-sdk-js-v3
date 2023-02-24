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

export const serializeAws_restJson1CreateSignalingChannelCommand = async (
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
      SingleMasterConfiguration: serializeAws_restJson1SingleMasterConfiguration(
        input.SingleMasterConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagOnCreateList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateStreamCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1ResourceTags(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteSignalingChannelCommand = async (
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

export const serializeAws_restJson1DeleteStreamCommand = async (
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

export const serializeAws_restJson1DescribeEdgeConfigurationCommand = async (
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

export const serializeAws_restJson1DescribeImageGenerationConfigurationCommand = async (
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

export const serializeAws_restJson1DescribeMappedResourceConfigurationCommand = async (
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

export const serializeAws_restJson1DescribeMediaStorageConfigurationCommand = async (
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

export const serializeAws_restJson1DescribeNotificationConfigurationCommand = async (
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

export const serializeAws_restJson1DescribeSignalingChannelCommand = async (
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

export const serializeAws_restJson1DescribeStreamCommand = async (
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

export const serializeAws_restJson1GetDataEndpointCommand = async (
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

export const serializeAws_restJson1GetSignalingChannelEndpointCommand = async (
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
      SingleMasterChannelEndpointConfiguration: serializeAws_restJson1SingleMasterChannelEndpointConfiguration(
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

export const serializeAws_restJson1ListSignalingChannelsCommand = async (
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
      ChannelNameCondition: serializeAws_restJson1ChannelNameCondition(input.ChannelNameCondition, context),
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

export const serializeAws_restJson1ListStreamsCommand = async (
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
      StreamNameCondition: serializeAws_restJson1StreamNameCondition(input.StreamNameCondition, context),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTagsForStreamCommand = async (
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

export const serializeAws_restJson1StartEdgeConfigurationUpdateCommand = async (
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
    ...(input.EdgeConfig != null && { EdgeConfig: serializeAws_restJson1EdgeConfig(input.EdgeConfig, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1TagStreamCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1ResourceTags(input.Tags, context) }),
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeyList != null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }),
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

export const serializeAws_restJson1UntagStreamCommand = async (
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
    ...(input.TagKeyList != null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }),
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

export const serializeAws_restJson1UpdateDataRetentionCommand = async (
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

export const serializeAws_restJson1UpdateImageGenerationConfigurationCommand = async (
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
      ImageGenerationConfiguration: serializeAws_restJson1ImageGenerationConfiguration(
        input.ImageGenerationConfiguration,
        context
      ),
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

export const serializeAws_restJson1UpdateMediaStorageConfigurationCommand = async (
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
      MediaStorageConfiguration: serializeAws_restJson1MediaStorageConfiguration(
        input.MediaStorageConfiguration,
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

export const serializeAws_restJson1UpdateNotificationConfigurationCommand = async (
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
      NotificationConfiguration: serializeAws_restJson1NotificationConfiguration(
        input.NotificationConfiguration,
        context
      ),
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

export const serializeAws_restJson1UpdateSignalingChannelCommand = async (
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
      SingleMasterConfiguration: serializeAws_restJson1SingleMasterConfiguration(
        input.SingleMasterConfiguration,
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

export const serializeAws_restJson1UpdateStreamCommand = async (
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

export const deserializeAws_restJson1CreateSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSignalingChannelCommandError(output, context);
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

const deserializeAws_restJson1CreateSignalingChannelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountChannelLimitExceededException":
    case "com.amazonaws.kinesisvideo#AccountChannelLimitExceededException":
      throw await deserializeAws_restJson1AccountChannelLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStreamCommandError(output, context);
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

const deserializeAws_restJson1CreateStreamCommandError = async (
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
      throw await deserializeAws_restJson1AccountStreamLimitExceededExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "DeviceStreamLimitExceededException":
    case "com.amazonaws.kinesisvideo#DeviceStreamLimitExceededException":
      throw await deserializeAws_restJson1DeviceStreamLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidDeviceException":
    case "com.amazonaws.kinesisvideo#InvalidDeviceException":
      throw await deserializeAws_restJson1InvalidDeviceExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSignalingChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSignalingChannelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteStreamCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeEdgeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeEdgeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.EdgeConfig != null) {
    contents.EdgeConfig = deserializeAws_restJson1EdgeConfig(data.EdgeConfig, context);
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

const deserializeAws_restJson1DescribeEdgeConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "StreamEdgeConfigurationNotFoundException":
    case "com.amazonaws.kinesisvideo#StreamEdgeConfigurationNotFoundException":
      throw await deserializeAws_restJson1StreamEdgeConfigurationNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeImageGenerationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageGenerationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeImageGenerationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ImageGenerationConfiguration != null) {
    contents.ImageGenerationConfiguration = deserializeAws_restJson1ImageGenerationConfiguration(
      data.ImageGenerationConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeImageGenerationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeMappedResourceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMappedResourceConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMappedResourceConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MappedResourceConfigurationList != null) {
    contents.MappedResourceConfigurationList = deserializeAws_restJson1MappedResourceConfigurationList(
      data.MappedResourceConfigurationList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeMappedResourceConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeMediaStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMediaStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMediaStorageConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MediaStorageConfiguration != null) {
    contents.MediaStorageConfiguration = deserializeAws_restJson1MediaStorageConfiguration(
      data.MediaStorageConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeMediaStorageConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NotificationConfiguration != null) {
    contents.NotificationConfiguration = deserializeAws_restJson1NotificationConfiguration(
      data.NotificationConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeNotificationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSignalingChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelInfo != null) {
    contents.ChannelInfo = deserializeAws_restJson1ChannelInfo(data.ChannelInfo, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSignalingChannelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StreamInfo != null) {
    contents.StreamInfo = deserializeAws_restJson1StreamInfo(data.StreamInfo, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeStreamCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDataEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataEndpointCommandError(output, context);
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

const deserializeAws_restJson1GetDataEndpointCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSignalingChannelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalingChannelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSignalingChannelEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceEndpointList != null) {
    contents.ResourceEndpointList = deserializeAws_restJson1ResourceEndpointList(data.ResourceEndpointList, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSignalingChannelEndpointCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSignalingChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalingChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSignalingChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelInfoList != null) {
    contents.ChannelInfoList = deserializeAws_restJson1ChannelInfoList(data.ChannelInfoList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSignalingChannelsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStreamsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StreamInfoList != null) {
    contents.StreamInfoList = deserializeAws_restJson1StreamInfoList(data.StreamInfoList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListStreamsCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1ResourceTags(data.Tags, context);
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
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1ResourceTags(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForStreamCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      throw await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartEdgeConfigurationUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEdgeConfigurationUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartEdgeConfigurationUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.EdgeConfig != null) {
    contents.EdgeConfig = deserializeAws_restJson1EdgeConfig(data.EdgeConfig, context);
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

const deserializeAws_restJson1StartEdgeConfigurationUpdateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagStreamCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      throw await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      throw await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagStreamCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      throw await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDataRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataRetentionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDataRetentionCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateImageGenerationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageGenerationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateImageGenerationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateImageGenerationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMediaStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMediaStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMediaStorageConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateMediaStorageConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateNotificationConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideo#NoDataRetentionException":
      throw await deserializeAws_restJson1NoDataRetentionExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSignalingChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateSignalingChannelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateStreamCommandError = async (
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
      throw await deserializeAws_restJson1ClientLimitExceededExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      throw await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      throw await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      throw await deserializeAws_restJson1VersionMismatchExceptionResponse(parsedOutput, context);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1AccountChannelLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1AccountStreamLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ClientLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1DeviceStreamLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (
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

const deserializeAws_restJson1InvalidDeviceExceptionResponse = async (
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

const deserializeAws_restJson1InvalidResourceFormatExceptionResponse = async (
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

const deserializeAws_restJson1NoDataRetentionExceptionResponse = async (
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

const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (
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

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1StreamEdgeConfigurationNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse = async (
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

const deserializeAws_restJson1VersionMismatchExceptionResponse = async (
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

const serializeAws_restJson1ChannelNameCondition = (input: ChannelNameCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.ComparisonValue != null && { ComparisonValue: input.ComparisonValue }),
  };
};

const serializeAws_restJson1DeletionConfig = (input: DeletionConfig, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAfterUpload != null && { DeleteAfterUpload: input.DeleteAfterUpload }),
    ...(input.EdgeRetentionInHours != null && { EdgeRetentionInHours: input.EdgeRetentionInHours }),
    ...(input.LocalSizeConfig != null && {
      LocalSizeConfig: serializeAws_restJson1LocalSizeConfig(input.LocalSizeConfig, context),
    }),
  };
};

const serializeAws_restJson1EdgeConfig = (input: EdgeConfig, context: __SerdeContext): any => {
  return {
    ...(input.DeletionConfig != null && {
      DeletionConfig: serializeAws_restJson1DeletionConfig(input.DeletionConfig, context),
    }),
    ...(input.HubDeviceArn != null && { HubDeviceArn: input.HubDeviceArn }),
    ...(input.RecorderConfig != null && {
      RecorderConfig: serializeAws_restJson1RecorderConfig(input.RecorderConfig, context),
    }),
    ...(input.UploaderConfig != null && {
      UploaderConfig: serializeAws_restJson1UploaderConfig(input.UploaderConfig, context),
    }),
  };
};

const serializeAws_restJson1FormatConfig = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [FormatConfigKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ImageGenerationConfiguration = (
  input: ImageGenerationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationConfig != null && {
      DestinationConfig: serializeAws_restJson1ImageGenerationDestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.FormatConfig != null && {
      FormatConfig: serializeAws_restJson1FormatConfig(input.FormatConfig, context),
    }),
    ...(input.HeightPixels != null && { HeightPixels: input.HeightPixels }),
    ...(input.ImageSelectorType != null && { ImageSelectorType: input.ImageSelectorType }),
    ...(input.SamplingInterval != null && { SamplingInterval: input.SamplingInterval }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.WidthPixels != null && { WidthPixels: input.WidthPixels }),
  };
};

const serializeAws_restJson1ImageGenerationDestinationConfig = (
  input: ImageGenerationDestinationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationRegion != null && { DestinationRegion: input.DestinationRegion }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

const serializeAws_restJson1ListOfProtocols = (input: (ChannelProtocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LocalSizeConfig = (input: LocalSizeConfig, context: __SerdeContext): any => {
  return {
    ...(input.MaxLocalMediaSizeInMB != null && { MaxLocalMediaSizeInMB: input.MaxLocalMediaSizeInMB }),
    ...(input.StrategyOnFullSize != null && { StrategyOnFullSize: input.StrategyOnFullSize }),
  };
};

const serializeAws_restJson1MediaSourceConfig = (input: MediaSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.MediaUriSecretArn != null && { MediaUriSecretArn: input.MediaUriSecretArn }),
    ...(input.MediaUriType != null && { MediaUriType: input.MediaUriType }),
  };
};

const serializeAws_restJson1MediaStorageConfiguration = (
  input: MediaStorageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

const serializeAws_restJson1NotificationConfiguration = (
  input: NotificationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationConfig != null && {
      DestinationConfig: serializeAws_restJson1NotificationDestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1NotificationDestinationConfig = (
  input: NotificationDestinationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

const serializeAws_restJson1RecorderConfig = (input: RecorderConfig, context: __SerdeContext): any => {
  return {
    ...(input.MediaSourceConfig != null && {
      MediaSourceConfig: serializeAws_restJson1MediaSourceConfig(input.MediaSourceConfig, context),
    }),
    ...(input.ScheduleConfig != null && {
      ScheduleConfig: serializeAws_restJson1ScheduleConfig(input.ScheduleConfig, context),
    }),
  };
};

const serializeAws_restJson1ResourceTags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ScheduleConfig = (input: ScheduleConfig, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

const serializeAws_restJson1SingleMasterChannelEndpointConfiguration = (
  input: SingleMasterChannelEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Protocols != null && { Protocols: serializeAws_restJson1ListOfProtocols(input.Protocols, context) }),
    ...(input.Role != null && { Role: input.Role }),
  };
};

const serializeAws_restJson1SingleMasterConfiguration = (
  input: SingleMasterConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MessageTtlSeconds != null && { MessageTtlSeconds: input.MessageTtlSeconds }),
  };
};

const serializeAws_restJson1StreamNameCondition = (input: StreamNameCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.ComparisonValue != null && { ComparisonValue: input.ComparisonValue }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TagOnCreateList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1UploaderConfig = (input: UploaderConfig, context: __SerdeContext): any => {
  return {
    ...(input.ScheduleConfig != null && {
      ScheduleConfig: serializeAws_restJson1ScheduleConfig(input.ScheduleConfig, context),
    }),
  };
};

const deserializeAws_restJson1ChannelInfo = (output: any, context: __SerdeContext): ChannelInfo => {
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
        ? deserializeAws_restJson1SingleMasterConfiguration(output.SingleMasterConfiguration, context)
        : undefined,
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1ChannelInfoList = (output: any, context: __SerdeContext): ChannelInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChannelInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeletionConfig = (output: any, context: __SerdeContext): DeletionConfig => {
  return {
    DeleteAfterUpload: __expectBoolean(output.DeleteAfterUpload),
    EdgeRetentionInHours: __expectInt32(output.EdgeRetentionInHours),
    LocalSizeConfig:
      output.LocalSizeConfig != null
        ? deserializeAws_restJson1LocalSizeConfig(output.LocalSizeConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EdgeConfig = (output: any, context: __SerdeContext): EdgeConfig => {
  return {
    DeletionConfig:
      output.DeletionConfig != null
        ? deserializeAws_restJson1DeletionConfig(output.DeletionConfig, context)
        : undefined,
    HubDeviceArn: __expectString(output.HubDeviceArn),
    RecorderConfig:
      output.RecorderConfig != null
        ? deserializeAws_restJson1RecorderConfig(output.RecorderConfig, context)
        : undefined,
    UploaderConfig:
      output.UploaderConfig != null
        ? deserializeAws_restJson1UploaderConfig(output.UploaderConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FormatConfig = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [FormatConfigKey | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ImageGenerationConfiguration = (
  output: any,
  context: __SerdeContext
): ImageGenerationConfiguration => {
  return {
    DestinationConfig:
      output.DestinationConfig != null
        ? deserializeAws_restJson1ImageGenerationDestinationConfig(output.DestinationConfig, context)
        : undefined,
    Format: __expectString(output.Format),
    FormatConfig:
      output.FormatConfig != null ? deserializeAws_restJson1FormatConfig(output.FormatConfig, context) : undefined,
    HeightPixels: __expectInt32(output.HeightPixels),
    ImageSelectorType: __expectString(output.ImageSelectorType),
    SamplingInterval: __expectInt32(output.SamplingInterval),
    Status: __expectString(output.Status),
    WidthPixels: __expectInt32(output.WidthPixels),
  } as any;
};

const deserializeAws_restJson1ImageGenerationDestinationConfig = (
  output: any,
  context: __SerdeContext
): ImageGenerationDestinationConfig => {
  return {
    DestinationRegion: __expectString(output.DestinationRegion),
    Uri: __expectString(output.Uri),
  } as any;
};

const deserializeAws_restJson1LocalSizeConfig = (output: any, context: __SerdeContext): LocalSizeConfig => {
  return {
    MaxLocalMediaSizeInMB: __expectInt32(output.MaxLocalMediaSizeInMB),
    StrategyOnFullSize: __expectString(output.StrategyOnFullSize),
  } as any;
};

const deserializeAws_restJson1MappedResourceConfigurationList = (
  output: any,
  context: __SerdeContext
): MappedResourceConfigurationListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MappedResourceConfigurationListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MappedResourceConfigurationListItem = (
  output: any,
  context: __SerdeContext
): MappedResourceConfigurationListItem => {
  return {
    ARN: __expectString(output.ARN),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1MediaSourceConfig = (output: any, context: __SerdeContext): MediaSourceConfig => {
  return {
    MediaUriSecretArn: __expectString(output.MediaUriSecretArn),
    MediaUriType: __expectString(output.MediaUriType),
  } as any;
};

const deserializeAws_restJson1MediaStorageConfiguration = (
  output: any,
  context: __SerdeContext
): MediaStorageConfiguration => {
  return {
    Status: __expectString(output.Status),
    StreamARN: __expectString(output.StreamARN),
  } as any;
};

const deserializeAws_restJson1NotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  return {
    DestinationConfig:
      output.DestinationConfig != null
        ? deserializeAws_restJson1NotificationDestinationConfig(output.DestinationConfig, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1NotificationDestinationConfig = (
  output: any,
  context: __SerdeContext
): NotificationDestinationConfig => {
  return {
    Uri: __expectString(output.Uri),
  } as any;
};

const deserializeAws_restJson1RecorderConfig = (output: any, context: __SerdeContext): RecorderConfig => {
  return {
    MediaSourceConfig:
      output.MediaSourceConfig != null
        ? deserializeAws_restJson1MediaSourceConfig(output.MediaSourceConfig, context)
        : undefined,
    ScheduleConfig:
      output.ScheduleConfig != null
        ? deserializeAws_restJson1ScheduleConfig(output.ScheduleConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceEndpointList = (
  output: any,
  context: __SerdeContext
): ResourceEndpointListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceEndpointListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceEndpointListItem = (
  output: any,
  context: __SerdeContext
): ResourceEndpointListItem => {
  return {
    Protocol: __expectString(output.Protocol),
    ResourceEndpoint: __expectString(output.ResourceEndpoint),
  } as any;
};

const deserializeAws_restJson1ResourceTags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ScheduleConfig = (output: any, context: __SerdeContext): ScheduleConfig => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

const deserializeAws_restJson1SingleMasterConfiguration = (
  output: any,
  context: __SerdeContext
): SingleMasterConfiguration => {
  return {
    MessageTtlSeconds: __expectInt32(output.MessageTtlSeconds),
  } as any;
};

const deserializeAws_restJson1StreamInfo = (output: any, context: __SerdeContext): StreamInfo => {
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

const deserializeAws_restJson1StreamInfoList = (output: any, context: __SerdeContext): StreamInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StreamInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UploaderConfig = (output: any, context: __SerdeContext): UploaderConfig => {
  return {
    ScheduleConfig:
      output.ScheduleConfig != null
        ? deserializeAws_restJson1ScheduleConfig(output.ScheduleConfig, context)
        : undefined,
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
