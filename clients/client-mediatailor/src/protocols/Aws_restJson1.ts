// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

import {
  ConfigureLogsForChannelCommandInput,
  ConfigureLogsForChannelCommandOutput,
} from "../commands/ConfigureLogsForChannelCommand";
import {
  ConfigureLogsForPlaybackConfigurationCommandInput,
  ConfigureLogsForPlaybackConfigurationCommandOutput,
} from "../commands/ConfigureLogsForPlaybackConfigurationCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateLiveSourceCommandInput, CreateLiveSourceCommandOutput } from "../commands/CreateLiveSourceCommand";
import {
  CreatePrefetchScheduleCommandInput,
  CreatePrefetchScheduleCommandOutput,
} from "../commands/CreatePrefetchScheduleCommand";
import { CreateProgramCommandInput, CreateProgramCommandOutput } from "../commands/CreateProgramCommand";
import {
  CreateSourceLocationCommandInput,
  CreateSourceLocationCommandOutput,
} from "../commands/CreateSourceLocationCommand";
import { CreateVodSourceCommandInput, CreateVodSourceCommandOutput } from "../commands/CreateVodSourceCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import {
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "../commands/DeleteChannelPolicyCommand";
import { DeleteLiveSourceCommandInput, DeleteLiveSourceCommandOutput } from "../commands/DeleteLiveSourceCommand";
import {
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "../commands/DeletePlaybackConfigurationCommand";
import {
  DeletePrefetchScheduleCommandInput,
  DeletePrefetchScheduleCommandOutput,
} from "../commands/DeletePrefetchScheduleCommand";
import { DeleteProgramCommandInput, DeleteProgramCommandOutput } from "../commands/DeleteProgramCommand";
import {
  DeleteSourceLocationCommandInput,
  DeleteSourceLocationCommandOutput,
} from "../commands/DeleteSourceLocationCommand";
import { DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput } from "../commands/DeleteVodSourceCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import { DescribeLiveSourceCommandInput, DescribeLiveSourceCommandOutput } from "../commands/DescribeLiveSourceCommand";
import { DescribeProgramCommandInput, DescribeProgramCommandOutput } from "../commands/DescribeProgramCommand";
import {
  DescribeSourceLocationCommandInput,
  DescribeSourceLocationCommandOutput,
} from "../commands/DescribeSourceLocationCommand";
import { DescribeVodSourceCommandInput, DescribeVodSourceCommandOutput } from "../commands/DescribeVodSourceCommand";
import { GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput } from "../commands/GetChannelPolicyCommand";
import { GetChannelScheduleCommandInput, GetChannelScheduleCommandOutput } from "../commands/GetChannelScheduleCommand";
import {
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "../commands/GetPlaybackConfigurationCommand";
import {
  GetPrefetchScheduleCommandInput,
  GetPrefetchScheduleCommandOutput,
} from "../commands/GetPrefetchScheduleCommand";
import { ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { ListLiveSourcesCommandInput, ListLiveSourcesCommandOutput } from "../commands/ListLiveSourcesCommand";
import {
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "../commands/ListPlaybackConfigurationsCommand";
import {
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput,
} from "../commands/ListPrefetchSchedulesCommand";
import {
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
} from "../commands/ListSourceLocationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListVodSourcesCommandInput, ListVodSourcesCommandOutput } from "../commands/ListVodSourcesCommand";
import { PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput } from "../commands/PutChannelPolicyCommand";
import {
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "../commands/PutPlaybackConfigurationCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "../commands/StartChannelCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "../commands/StopChannelCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import { UpdateLiveSourceCommandInput, UpdateLiveSourceCommandOutput } from "../commands/UpdateLiveSourceCommand";
import { UpdateProgramCommandInput, UpdateProgramCommandOutput } from "../commands/UpdateProgramCommand";
import {
  UpdateSourceLocationCommandInput,
  UpdateSourceLocationCommandOutput,
} from "../commands/UpdateSourceLocationCommand";
import { UpdateVodSourceCommandInput, UpdateVodSourceCommandOutput } from "../commands/UpdateVodSourceCommand";
import { MediaTailorServiceException as __BaseException } from "../models/MediaTailorServiceException";
import {
  AccessConfiguration,
  AdBreak,
  AdMarkerPassthrough,
  Alert,
  AvailMatchingCriteria,
  AvailSuppression,
  BadRequestException,
  Bumper,
  CdnConfiguration,
  Channel,
  ClipRange,
  DashConfiguration,
  DashConfigurationForPut,
  DashPlaylistSettings,
  DefaultSegmentDeliveryConfiguration,
  HlsConfiguration,
  HlsPlaylistSettings,
  HttpConfiguration,
  HttpPackageConfiguration,
  LivePreRollConfiguration,
  LiveSource,
  LogConfiguration,
  LogConfigurationForChannel,
  LogType,
  ManifestProcessingRules,
  PlaybackConfiguration,
  PrefetchConsumption,
  PrefetchRetrieval,
  PrefetchSchedule,
  RequestOutputItem,
  ResponseOutputItem,
  ScheduleAdBreak,
  ScheduleConfiguration,
  ScheduleEntry,
  SecretsManagerAccessTokenConfiguration,
  SegmentationDescriptor,
  SegmentDeliveryConfiguration,
  SlateSource,
  SourceLocation,
  SpliceInsertMessage,
  TimeSignalMessage,
  Transition,
  UpdateProgramScheduleConfiguration,
  UpdateProgramTransition,
  VodSource,
} from "../models/models_0";

/**
 * serializeAws_restJson1ConfigureLogsForChannelCommand
 */
export const se_ConfigureLogsForChannelCommand = async (
  input: ConfigureLogsForChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configureLogs/channel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelName != null && { ChannelName: input.ChannelName }),
    ...(input.LogTypes != null && { LogTypes: se_LogTypes(input.LogTypes, context) }),
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
 * serializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand
 */
export const se_ConfigureLogsForPlaybackConfigurationCommand = async (
  input: ConfigureLogsForPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configureLogs/playbackConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.PercentEnabled != null && { PercentEnabled: input.PercentEnabled }),
    ...(input.PlaybackConfigurationName != null && { PlaybackConfigurationName: input.PlaybackConfigurationName }),
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
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FillerSlate != null && { FillerSlate: se_SlateSource(input.FillerSlate, context) }),
    ...(input.Outputs != null && { Outputs: se_RequestOutputs(input.Outputs, context) }),
    ...(input.PlaybackMode != null && { PlaybackMode: input.PlaybackMode }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
    ...(input.Tier != null && { Tier: input.Tier }),
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
 * serializeAws_restJson1CreateLiveSourceCommand
 */
export const se_CreateLiveSourceCommand = async (
  input: CreateLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LiveSourceName",
    () => input.LiveSourceName!,
    "{LiveSourceName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.HttpPackageConfigurations != null && {
      HttpPackageConfigurations: se_HttpPackageConfigurations(input.HttpPackageConfigurations, context),
    }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1CreatePrefetchScheduleCommand
 */
export const se_CreatePrefetchScheduleCommand = async (
  input: CreatePrefetchScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prefetchSchedule/{PlaybackConfigurationName}/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PlaybackConfigurationName",
    () => input.PlaybackConfigurationName!,
    "{PlaybackConfigurationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Consumption != null && { Consumption: se_PrefetchConsumption(input.Consumption, context) }),
    ...(input.Retrieval != null && { Retrieval: se_PrefetchRetrieval(input.Retrieval, context) }),
    ...(input.StreamId != null && { StreamId: input.StreamId }),
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
 * serializeAws_restJson1CreateProgramCommand
 */
export const se_CreateProgramCommand = async (
  input: CreateProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channel/{ChannelName}/program/{ProgramName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProgramName", () => input.ProgramName!, "{ProgramName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AdBreaks != null && { AdBreaks: se___listOfAdBreak(input.AdBreaks, context) }),
    ...(input.LiveSourceName != null && { LiveSourceName: input.LiveSourceName }),
    ...(input.ScheduleConfiguration != null && {
      ScheduleConfiguration: se_ScheduleConfiguration(input.ScheduleConfiguration, context),
    }),
    ...(input.SourceLocationName != null && { SourceLocationName: input.SourceLocationName }),
    ...(input.VodSourceName != null && { VodSourceName: input.VodSourceName }),
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
 * serializeAws_restJson1CreateSourceLocationCommand
 */
export const se_CreateSourceLocationCommand = async (
  input: CreateSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocation/{SourceLocationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AccessConfiguration != null && {
      AccessConfiguration: se_AccessConfiguration(input.AccessConfiguration, context),
    }),
    ...(input.DefaultSegmentDeliveryConfiguration != null && {
      DefaultSegmentDeliveryConfiguration: se_DefaultSegmentDeliveryConfiguration(
        input.DefaultSegmentDeliveryConfiguration,
        context
      ),
    }),
    ...(input.HttpConfiguration != null && {
      HttpConfiguration: se_HttpConfiguration(input.HttpConfiguration, context),
    }),
    ...(input.SegmentDeliveryConfigurations != null && {
      SegmentDeliveryConfigurations: se___listOfSegmentDeliveryConfiguration(
        input.SegmentDeliveryConfigurations,
        context
      ),
    }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1CreateVodSourceCommand
 */
export const se_CreateVodSourceCommand = async (
  input: CreateVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VodSourceName",
    () => input.VodSourceName!,
    "{VodSourceName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.HttpPackageConfigurations != null && {
      HttpPackageConfigurations: se_HttpPackageConfigurations(input.HttpPackageConfigurations, context),
    }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
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
 * serializeAws_restJson1DeleteChannelPolicyCommand
 */
export const se_DeleteChannelPolicyCommand = async (
  input: DeleteChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
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
 * serializeAws_restJson1DeleteLiveSourceCommand
 */
export const se_DeleteLiveSourceCommand = async (
  input: DeleteLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LiveSourceName",
    () => input.LiveSourceName!,
    "{LiveSourceName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
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
 * serializeAws_restJson1DeletePlaybackConfigurationCommand
 */
export const se_DeletePlaybackConfigurationCommand = async (
  input: DeletePlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfiguration/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1DeletePrefetchScheduleCommand
 */
export const se_DeletePrefetchScheduleCommand = async (
  input: DeletePrefetchScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prefetchSchedule/{PlaybackConfigurationName}/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PlaybackConfigurationName",
    () => input.PlaybackConfigurationName!,
    "{PlaybackConfigurationName}",
    false
  );
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
 * serializeAws_restJson1DeleteProgramCommand
 */
export const se_DeleteProgramCommand = async (
  input: DeleteProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channel/{ChannelName}/program/{ProgramName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProgramName", () => input.ProgramName!, "{ProgramName}", false);
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
 * serializeAws_restJson1DeleteSourceLocationCommand
 */
export const se_DeleteSourceLocationCommand = async (
  input: DeleteSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocation/{SourceLocationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
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
 * serializeAws_restJson1DeleteVodSourceCommand
 */
export const se_DeleteVodSourceCommand = async (
  input: DeleteVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VodSourceName",
    () => input.VodSourceName!,
    "{VodSourceName}",
    false
  );
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
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
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
 * serializeAws_restJson1DescribeLiveSourceCommand
 */
export const se_DescribeLiveSourceCommand = async (
  input: DescribeLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LiveSourceName",
    () => input.LiveSourceName!,
    "{LiveSourceName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
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
 * serializeAws_restJson1DescribeProgramCommand
 */
export const se_DescribeProgramCommand = async (
  input: DescribeProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channel/{ChannelName}/program/{ProgramName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProgramName", () => input.ProgramName!, "{ProgramName}", false);
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
 * serializeAws_restJson1DescribeSourceLocationCommand
 */
export const se_DescribeSourceLocationCommand = async (
  input: DescribeSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocation/{SourceLocationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
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
 * serializeAws_restJson1DescribeVodSourceCommand
 */
export const se_DescribeVodSourceCommand = async (
  input: DescribeVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VodSourceName",
    () => input.VodSourceName!,
    "{VodSourceName}",
    false
  );
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
 * serializeAws_restJson1GetChannelPolicyCommand
 */
export const se_GetChannelPolicyCommand = async (
  input: GetChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
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
 * serializeAws_restJson1GetChannelScheduleCommand
 */
export const se_GetChannelScheduleCommand = async (
  input: GetChannelScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/schedule";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  const query: any = map({
    durationMinutes: [, input.DurationMinutes!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1GetPlaybackConfigurationCommand
 */
export const se_GetPlaybackConfigurationCommand = async (
  input: GetPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfiguration/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1GetPrefetchScheduleCommand
 */
export const se_GetPrefetchScheduleCommand = async (
  input: GetPrefetchScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prefetchSchedule/{PlaybackConfigurationName}/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PlaybackConfigurationName",
    () => input.PlaybackConfigurationName!,
    "{PlaybackConfigurationName}",
    false
  );
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
 * serializeAws_restJson1ListAlertsCommand
 */
export const se_ListAlertsCommand = async (
  input: ListAlertsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alerts";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    resourceArn: [, __expectNonNull(input.ResourceArn!, `ResourceArn`)],
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
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListLiveSourcesCommand
 */
export const se_ListLiveSourcesCommand = async (
  input: ListLiveSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/liveSources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListPlaybackConfigurationsCommand
 */
export const se_ListPlaybackConfigurationsCommand = async (
  input: ListPlaybackConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfigurations";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListPrefetchSchedulesCommand
 */
export const se_ListPrefetchSchedulesCommand = async (
  input: ListPrefetchSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prefetchSchedule/{PlaybackConfigurationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PlaybackConfigurationName",
    () => input.PlaybackConfigurationName!,
    "{PlaybackConfigurationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StreamId != null && { StreamId: input.StreamId }),
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
 * serializeAws_restJson1ListSourceLocationsCommand
 */
export const se_ListSourceLocationsCommand = async (
  input: ListSourceLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1ListVodSourcesCommand
 */
export const se_ListVodSourcesCommand = async (
  input: ListVodSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1PutChannelPolicyCommand
 */
export const se_PutChannelPolicyCommand = async (
  input: PutChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Policy != null && { Policy: input.Policy }),
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
 * serializeAws_restJson1PutPlaybackConfigurationCommand
 */
export const se_PutPlaybackConfigurationCommand = async (
  input: PutPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.AdDecisionServerUrl != null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
    ...(input.AvailSuppression != null && { AvailSuppression: se_AvailSuppression(input.AvailSuppression, context) }),
    ...(input.Bumper != null && { Bumper: se_Bumper(input.Bumper, context) }),
    ...(input.CdnConfiguration != null && { CdnConfiguration: se_CdnConfiguration(input.CdnConfiguration, context) }),
    ...(input.ConfigurationAliases != null && {
      ConfigurationAliases: se_ConfigurationAliasesRequest(input.ConfigurationAliases, context),
    }),
    ...(input.DashConfiguration != null && {
      DashConfiguration: se_DashConfigurationForPut(input.DashConfiguration, context),
    }),
    ...(input.LivePreRollConfiguration != null && {
      LivePreRollConfiguration: se_LivePreRollConfiguration(input.LivePreRollConfiguration, context),
    }),
    ...(input.ManifestProcessingRules != null && {
      ManifestProcessingRules: se_ManifestProcessingRules(input.ManifestProcessingRules, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PersonalizationThresholdSeconds != null && {
      PersonalizationThresholdSeconds: input.PersonalizationThresholdSeconds,
    }),
    ...(input.SlateAdUrl != null && { SlateAdUrl: input.SlateAdUrl }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
    ...(input.TranscodeProfileName != null && { TranscodeProfileName: input.TranscodeProfileName }),
    ...(input.VideoContentSourceUrl != null && { VideoContentSourceUrl: input.VideoContentSourceUrl }),
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
 * serializeAws_restJson1StartChannelCommand
 */
export const se_StartChannelCommand = async (
  input: StartChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
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
 * serializeAws_restJson1StopChannelCommand
 */
export const se_StopChannelCommand = async (
  input: StopChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FillerSlate != null && { FillerSlate: se_SlateSource(input.FillerSlate, context) }),
    ...(input.Outputs != null && { Outputs: se_RequestOutputs(input.Outputs, context) }),
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
 * serializeAws_restJson1UpdateLiveSourceCommand
 */
export const se_UpdateLiveSourceCommand = async (
  input: UpdateLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "LiveSourceName",
    () => input.LiveSourceName!,
    "{LiveSourceName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.HttpPackageConfigurations != null && {
      HttpPackageConfigurations: se_HttpPackageConfigurations(input.HttpPackageConfigurations, context),
    }),
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
 * serializeAws_restJson1UpdateProgramCommand
 */
export const se_UpdateProgramCommand = async (
  input: UpdateProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channel/{ChannelName}/program/{ProgramName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProgramName", () => input.ProgramName!, "{ProgramName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AdBreaks != null && { AdBreaks: se___listOfAdBreak(input.AdBreaks, context) }),
    ...(input.ScheduleConfiguration != null && {
      ScheduleConfiguration: se_UpdateProgramScheduleConfiguration(input.ScheduleConfiguration, context),
    }),
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
 * serializeAws_restJson1UpdateSourceLocationCommand
 */
export const se_UpdateSourceLocationCommand = async (
  input: UpdateSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocation/{SourceLocationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AccessConfiguration != null && {
      AccessConfiguration: se_AccessConfiguration(input.AccessConfiguration, context),
    }),
    ...(input.DefaultSegmentDeliveryConfiguration != null && {
      DefaultSegmentDeliveryConfiguration: se_DefaultSegmentDeliveryConfiguration(
        input.DefaultSegmentDeliveryConfiguration,
        context
      ),
    }),
    ...(input.HttpConfiguration != null && {
      HttpConfiguration: se_HttpConfiguration(input.HttpConfiguration, context),
    }),
    ...(input.SegmentDeliveryConfigurations != null && {
      SegmentDeliveryConfigurations: se___listOfSegmentDeliveryConfiguration(
        input.SegmentDeliveryConfigurations,
        context
      ),
    }),
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
 * serializeAws_restJson1UpdateVodSourceCommand
 */
export const se_UpdateVodSourceCommand = async (
  input: UpdateVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceLocationName",
    () => input.SourceLocationName!,
    "{SourceLocationName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VodSourceName",
    () => input.VodSourceName!,
    "{VodSourceName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.HttpPackageConfigurations != null && {
      HttpPackageConfigurations: se_HttpPackageConfigurations(input.HttpPackageConfigurations, context),
    }),
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
 * deserializeAws_restJson1ConfigureLogsForChannelCommand
 */
export const de_ConfigureLogsForChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ConfigureLogsForChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.LogTypes != null) {
    contents.LogTypes = de_LogTypes(data.LogTypes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ConfigureLogsForChannelCommandError
 */
const de_ConfigureLogsForChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand
 */
export const de_ConfigureLogsForPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ConfigureLogsForPlaybackConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PercentEnabled != null) {
    contents.PercentEnabled = __expectInt32(data.PercentEnabled);
  }
  if (data.PlaybackConfigurationName != null) {
    contents.PlaybackConfigurationName = __expectString(data.PlaybackConfigurationName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommandError
 */
const de_ConfigureLogsForPlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ChannelState != null) {
    contents.ChannelState = __expectString(data.ChannelState);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.FillerSlate != null) {
    contents.FillerSlate = de_SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Outputs != null) {
    contents.Outputs = de_ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode != null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.Tier != null) {
    contents.Tier = __expectString(data.Tier);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommandError
 */
const de_CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1CreateLiveSourceCommand
 */
export const de_CreateLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLiveSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.HttpPackageConfigurations != null) {
    contents.HttpPackageConfigurations = de_HttpPackageConfigurations(data.HttpPackageConfigurations, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.LiveSourceName != null) {
    contents.LiveSourceName = __expectString(data.LiveSourceName);
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLiveSourceCommandError
 */
const de_CreateLiveSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLiveSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1CreatePrefetchScheduleCommand
 */
export const de_CreatePrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePrefetchScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Consumption != null) {
    contents.Consumption = de_PrefetchConsumption(data.Consumption, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PlaybackConfigurationName != null) {
    contents.PlaybackConfigurationName = __expectString(data.PlaybackConfigurationName);
  }
  if (data.Retrieval != null) {
    contents.Retrieval = de_PrefetchRetrieval(data.Retrieval, context);
  }
  if (data.StreamId != null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePrefetchScheduleCommandError
 */
const de_CreatePrefetchScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrefetchScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1CreateProgramCommand
 */
export const de_CreateProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdBreaks != null) {
    contents.AdBreaks = de___listOfAdBreak(data.AdBreaks, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ClipRange != null) {
    contents.ClipRange = de_ClipRange(data.ClipRange, context);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DurationMillis != null) {
    contents.DurationMillis = __expectLong(data.DurationMillis);
  }
  if (data.LiveSourceName != null) {
    contents.LiveSourceName = __expectString(data.LiveSourceName);
  }
  if (data.ProgramName != null) {
    contents.ProgramName = __expectString(data.ProgramName);
  }
  if (data.ScheduledStartTime != null) {
    contents.ScheduledStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ScheduledStartTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateProgramCommandError
 */
const de_CreateProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1CreateSourceLocationCommand
 */
export const de_CreateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration != null) {
    contents.AccessConfiguration = de_AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DefaultSegmentDeliveryConfiguration != null) {
    contents.DefaultSegmentDeliveryConfiguration = de_DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration != null) {
    contents.HttpConfiguration = de_HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SegmentDeliveryConfigurations != null) {
    contents.SegmentDeliveryConfigurations = de___listOfSegmentDeliveryConfiguration(
      data.SegmentDeliveryConfigurations,
      context
    );
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSourceLocationCommandError
 */
const de_CreateSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1CreateVodSourceCommand
 */
export const de_CreateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVodSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.HttpPackageConfigurations != null) {
    contents.HttpPackageConfigurations = de_HttpPackageConfigurations(data.HttpPackageConfigurations, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateVodSourceCommandError
 */
const de_CreateVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommandError
 */
const de_DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeleteChannelPolicyCommand
 */
export const de_DeleteChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteChannelPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelPolicyCommandError
 */
const de_DeleteChannelPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeleteLiveSourceCommand
 */
export const de_DeleteLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLiveSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLiveSourceCommandError
 */
const de_DeleteLiveSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLiveSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeletePlaybackConfigurationCommand
 */
export const de_DeletePlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePlaybackConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePlaybackConfigurationCommandError
 */
const de_DeletePlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeletePrefetchScheduleCommand
 */
export const de_DeletePrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeletePrefetchScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePrefetchScheduleCommandError
 */
const de_DeletePrefetchScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrefetchScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeleteProgramCommand
 */
export const de_DeleteProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProgramCommandError
 */
const de_DeleteProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeleteSourceLocationCommand
 */
export const de_DeleteSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSourceLocationCommandError
 */
const de_DeleteSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DeleteVodSourceCommand
 */
export const de_DeleteVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVodSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVodSourceCommandError
 */
const de_DeleteVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ChannelState != null) {
    contents.ChannelState = __expectString(data.ChannelState);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.FillerSlate != null) {
    contents.FillerSlate = de_SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.LogConfiguration != null) {
    contents.LogConfiguration = de_LogConfigurationForChannel(data.LogConfiguration, context);
  }
  if (data.Outputs != null) {
    contents.Outputs = de_ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode != null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.Tier != null) {
    contents.Tier = __expectString(data.Tier);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelCommandError
 */
const de_DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DescribeLiveSourceCommand
 */
export const de_DescribeLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeLiveSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.HttpPackageConfigurations != null) {
    contents.HttpPackageConfigurations = de_HttpPackageConfigurations(data.HttpPackageConfigurations, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.LiveSourceName != null) {
    contents.LiveSourceName = __expectString(data.LiveSourceName);
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLiveSourceCommandError
 */
const de_DescribeLiveSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLiveSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DescribeProgramCommand
 */
export const de_DescribeProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdBreaks != null) {
    contents.AdBreaks = de___listOfAdBreak(data.AdBreaks, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ClipRange != null) {
    contents.ClipRange = de_ClipRange(data.ClipRange, context);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DurationMillis != null) {
    contents.DurationMillis = __expectLong(data.DurationMillis);
  }
  if (data.LiveSourceName != null) {
    contents.LiveSourceName = __expectString(data.LiveSourceName);
  }
  if (data.ProgramName != null) {
    contents.ProgramName = __expectString(data.ProgramName);
  }
  if (data.ScheduledStartTime != null) {
    contents.ScheduledStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ScheduledStartTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProgramCommandError
 */
const de_DescribeProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DescribeSourceLocationCommand
 */
export const de_DescribeSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration != null) {
    contents.AccessConfiguration = de_AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DefaultSegmentDeliveryConfiguration != null) {
    contents.DefaultSegmentDeliveryConfiguration = de_DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration != null) {
    contents.HttpConfiguration = de_HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SegmentDeliveryConfigurations != null) {
    contents.SegmentDeliveryConfigurations = de___listOfSegmentDeliveryConfiguration(
      data.SegmentDeliveryConfigurations,
      context
    );
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSourceLocationCommandError
 */
const de_DescribeSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1DescribeVodSourceCommand
 */
export const de_DescribeVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVodSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.HttpPackageConfigurations != null) {
    contents.HttpPackageConfigurations = de_HttpPackageConfigurations(data.HttpPackageConfigurations, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVodSourceCommandError
 */
const de_DescribeVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1GetChannelPolicyCommand
 */
export const de_GetChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChannelPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelPolicyCommandError
 */
const de_GetChannelPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1GetChannelScheduleCommand
 */
export const de_GetChannelScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChannelScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfScheduleEntry(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelScheduleCommandError
 */
const de_GetChannelScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1GetPlaybackConfigurationCommand
 */
export const de_GetPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlaybackConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdDecisionServerUrl != null) {
    contents.AdDecisionServerUrl = __expectString(data.AdDecisionServerUrl);
  }
  if (data.AvailSuppression != null) {
    contents.AvailSuppression = de_AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper != null) {
    contents.Bumper = de_Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration != null) {
    contents.CdnConfiguration = de_CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.ConfigurationAliases != null) {
    contents.ConfigurationAliases = de_ConfigurationAliasesResponse(data.ConfigurationAliases, context);
  }
  if (data.DashConfiguration != null) {
    contents.DashConfiguration = de_DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration != null) {
    contents.HlsConfiguration = de_HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration != null) {
    contents.LivePreRollConfiguration = de_LivePreRollConfiguration(data.LivePreRollConfiguration, context);
  }
  if (data.LogConfiguration != null) {
    contents.LogConfiguration = de_LogConfiguration(data.LogConfiguration, context);
  }
  if (data.ManifestProcessingRules != null) {
    contents.ManifestProcessingRules = de_ManifestProcessingRules(data.ManifestProcessingRules, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PersonalizationThresholdSeconds != null) {
    contents.PersonalizationThresholdSeconds = __expectInt32(data.PersonalizationThresholdSeconds);
  }
  if (data.PlaybackConfigurationArn != null) {
    contents.PlaybackConfigurationArn = __expectString(data.PlaybackConfigurationArn);
  }
  if (data.PlaybackEndpointPrefix != null) {
    contents.PlaybackEndpointPrefix = __expectString(data.PlaybackEndpointPrefix);
  }
  if (data.SessionInitializationEndpointPrefix != null) {
    contents.SessionInitializationEndpointPrefix = __expectString(data.SessionInitializationEndpointPrefix);
  }
  if (data.SlateAdUrl != null) {
    contents.SlateAdUrl = __expectString(data.SlateAdUrl);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName != null) {
    contents.TranscodeProfileName = __expectString(data.TranscodeProfileName);
  }
  if (data.VideoContentSourceUrl != null) {
    contents.VideoContentSourceUrl = __expectString(data.VideoContentSourceUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPlaybackConfigurationCommandError
 */
const de_GetPlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1GetPrefetchScheduleCommand
 */
export const de_GetPrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPrefetchScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Consumption != null) {
    contents.Consumption = de_PrefetchConsumption(data.Consumption, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PlaybackConfigurationName != null) {
    contents.PlaybackConfigurationName = __expectString(data.PlaybackConfigurationName);
  }
  if (data.Retrieval != null) {
    contents.Retrieval = de_PrefetchRetrieval(data.Retrieval, context);
  }
  if (data.StreamId != null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPrefetchScheduleCommandError
 */
const de_GetPrefetchScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrefetchScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListAlertsCommand
 */
export const de_ListAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAlertsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfAlert(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAlertsCommandError
 */
const de_ListAlertsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfChannel(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommandError
 */
const de_ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListLiveSourcesCommand
 */
export const de_ListLiveSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLiveSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLiveSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfLiveSource(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLiveSourcesCommandError
 */
const de_ListLiveSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLiveSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListPlaybackConfigurationsCommand
 */
export const de_ListPlaybackConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPlaybackConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfPlaybackConfiguration(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPlaybackConfigurationsCommandError
 */
const de_ListPlaybackConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListPrefetchSchedulesCommand
 */
export const de_ListPrefetchSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrefetchSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPrefetchSchedulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfPrefetchSchedule(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPrefetchSchedulesCommandError
 */
const de_ListPrefetchSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrefetchSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListSourceLocationsCommand
 */
export const de_ListSourceLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSourceLocationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfSourceLocation(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceLocationsCommandError
 */
const de_ListSourceLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
    contents.Tags = de___mapOf__string(data.tags, context);
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
    case "com.amazonaws.mediatailor#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListVodSourcesCommand
 */
export const de_ListVodSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVodSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVodSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = de___listOfVodSource(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVodSourcesCommandError
 */
const de_ListVodSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVodSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1PutChannelPolicyCommand
 */
export const de_PutChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutChannelPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutChannelPolicyCommandError
 */
const de_PutChannelPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1PutPlaybackConfigurationCommand
 */
export const de_PutPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutPlaybackConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdDecisionServerUrl != null) {
    contents.AdDecisionServerUrl = __expectString(data.AdDecisionServerUrl);
  }
  if (data.AvailSuppression != null) {
    contents.AvailSuppression = de_AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper != null) {
    contents.Bumper = de_Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration != null) {
    contents.CdnConfiguration = de_CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.ConfigurationAliases != null) {
    contents.ConfigurationAliases = de_ConfigurationAliasesResponse(data.ConfigurationAliases, context);
  }
  if (data.DashConfiguration != null) {
    contents.DashConfiguration = de_DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration != null) {
    contents.HlsConfiguration = de_HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration != null) {
    contents.LivePreRollConfiguration = de_LivePreRollConfiguration(data.LivePreRollConfiguration, context);
  }
  if (data.LogConfiguration != null) {
    contents.LogConfiguration = de_LogConfiguration(data.LogConfiguration, context);
  }
  if (data.ManifestProcessingRules != null) {
    contents.ManifestProcessingRules = de_ManifestProcessingRules(data.ManifestProcessingRules, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PersonalizationThresholdSeconds != null) {
    contents.PersonalizationThresholdSeconds = __expectInt32(data.PersonalizationThresholdSeconds);
  }
  if (data.PlaybackConfigurationArn != null) {
    contents.PlaybackConfigurationArn = __expectString(data.PlaybackConfigurationArn);
  }
  if (data.PlaybackEndpointPrefix != null) {
    contents.PlaybackEndpointPrefix = __expectString(data.PlaybackEndpointPrefix);
  }
  if (data.SessionInitializationEndpointPrefix != null) {
    contents.SessionInitializationEndpointPrefix = __expectString(data.SessionInitializationEndpointPrefix);
  }
  if (data.SlateAdUrl != null) {
    contents.SlateAdUrl = __expectString(data.SlateAdUrl);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName != null) {
    contents.TranscodeProfileName = __expectString(data.TranscodeProfileName);
  }
  if (data.VideoContentSourceUrl != null) {
    contents.VideoContentSourceUrl = __expectString(data.VideoContentSourceUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutPlaybackConfigurationCommandError
 */
const de_PutPlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1StartChannelCommand
 */
export const de_StartChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartChannelCommandError
 */
const de_StartChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1StopChannelCommand
 */
export const de_StopChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopChannelCommandError
 */
const de_StopChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ChannelState != null) {
    contents.ChannelState = __expectString(data.ChannelState);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.FillerSlate != null) {
    contents.FillerSlate = de_SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Outputs != null) {
    contents.Outputs = de_ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode != null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.Tier != null) {
    contents.Tier = __expectString(data.Tier);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelCommandError
 */
const de_UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateLiveSourceCommand
 */
export const de_UpdateLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLiveSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.HttpPackageConfigurations != null) {
    contents.HttpPackageConfigurations = de_HttpPackageConfigurations(data.HttpPackageConfigurations, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.LiveSourceName != null) {
    contents.LiveSourceName = __expectString(data.LiveSourceName);
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLiveSourceCommandError
 */
const de_UpdateLiveSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLiveSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateProgramCommand
 */
export const de_UpdateProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdBreaks != null) {
    contents.AdBreaks = de___listOfAdBreak(data.AdBreaks, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ClipRange != null) {
    contents.ClipRange = de_ClipRange(data.ClipRange, context);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DurationMillis != null) {
    contents.DurationMillis = __expectLong(data.DurationMillis);
  }
  if (data.LiveSourceName != null) {
    contents.LiveSourceName = __expectString(data.LiveSourceName);
  }
  if (data.ProgramName != null) {
    contents.ProgramName = __expectString(data.ProgramName);
  }
  if (data.ScheduledStartTime != null) {
    contents.ScheduledStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ScheduledStartTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProgramCommandError
 */
const de_UpdateProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateSourceLocationCommand
 */
export const de_UpdateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration != null) {
    contents.AccessConfiguration = de_AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DefaultSegmentDeliveryConfiguration != null) {
    contents.DefaultSegmentDeliveryConfiguration = de_DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration != null) {
    contents.HttpConfiguration = de_HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SegmentDeliveryConfigurations != null) {
    contents.SegmentDeliveryConfigurations = de___listOfSegmentDeliveryConfiguration(
      data.SegmentDeliveryConfigurations,
      context
    );
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSourceLocationCommandError
 */
const de_UpdateSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateVodSourceCommand
 */
export const de_UpdateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVodSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.HttpPackageConfigurations != null) {
    contents.HttpPackageConfigurations = de_HttpPackageConfigurations(data.HttpPackageConfigurations, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = de___mapOf__string(data.tags, context);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVodSourceCommandError
 */
const de_UpdateVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const map = __map;
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOfAdBreak
 */
const se___listOfAdBreak = (input: AdBreak[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AdBreak(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfAvailMatchingCriteria
 */
const se___listOfAvailMatchingCriteria = (input: AvailMatchingCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AvailMatchingCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfSegmentDeliveryConfiguration
 */
const se___listOfSegmentDeliveryConfiguration = (
  input: SegmentDeliveryConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SegmentDeliveryConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1__mapOf__string
 */
const se___mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AccessConfiguration
 */
const se_AccessConfiguration = (input: AccessConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AccessType != null && { AccessType: input.AccessType }),
    ...(input.SecretsManagerAccessTokenConfiguration != null && {
      SecretsManagerAccessTokenConfiguration: se_SecretsManagerAccessTokenConfiguration(
        input.SecretsManagerAccessTokenConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1AdBreak
 */
const se_AdBreak = (input: AdBreak, context: __SerdeContext): any => {
  return {
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OffsetMillis != null && { OffsetMillis: input.OffsetMillis }),
    ...(input.Slate != null && { Slate: se_SlateSource(input.Slate, context) }),
    ...(input.SpliceInsertMessage != null && {
      SpliceInsertMessage: se_SpliceInsertMessage(input.SpliceInsertMessage, context),
    }),
    ...(input.TimeSignalMessage != null && {
      TimeSignalMessage: se_TimeSignalMessage(input.TimeSignalMessage, context),
    }),
  };
};

/**
 * serializeAws_restJson1AdMarkerPassthrough
 */
const se_AdMarkerPassthrough = (input: AdMarkerPassthrough, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1AvailMatchingCriteria
 */
const se_AvailMatchingCriteria = (input: AvailMatchingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.DynamicVariable != null && { DynamicVariable: input.DynamicVariable }),
    ...(input.Operator != null && { Operator: input.Operator }),
  };
};

/**
 * serializeAws_restJson1AvailSuppression
 */
const se_AvailSuppression = (input: AvailSuppression, context: __SerdeContext): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1Bumper
 */
const se_Bumper = (input: Bumper, context: __SerdeContext): any => {
  return {
    ...(input.EndUrl != null && { EndUrl: input.EndUrl }),
    ...(input.StartUrl != null && { StartUrl: input.StartUrl }),
  };
};

/**
 * serializeAws_restJson1CdnConfiguration
 */
const se_CdnConfiguration = (input: CdnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdSegmentUrlPrefix != null && { AdSegmentUrlPrefix: input.AdSegmentUrlPrefix }),
    ...(input.ContentSegmentUrlPrefix != null && { ContentSegmentUrlPrefix: input.ContentSegmentUrlPrefix }),
  };
};

/**
 * serializeAws_restJson1ClipRange
 */
const se_ClipRange = (input: ClipRange, context: __SerdeContext): any => {
  return {
    ...(input.EndOffsetMillis != null && { EndOffsetMillis: input.EndOffsetMillis }),
  };
};

/**
 * serializeAws_restJson1ConfigurationAliasesRequest
 */
const se_ConfigurationAliasesRequest = (
  input: Record<string, Record<string, string>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se___mapOf__string(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DashConfigurationForPut
 */
const se_DashConfigurationForPut = (input: DashConfigurationForPut, context: __SerdeContext): any => {
  return {
    ...(input.MpdLocation != null && { MpdLocation: input.MpdLocation }),
    ...(input.OriginManifestType != null && { OriginManifestType: input.OriginManifestType }),
  };
};

/**
 * serializeAws_restJson1DashPlaylistSettings
 */
const se_DashPlaylistSettings = (input: DashPlaylistSettings, context: __SerdeContext): any => {
  return {
    ...(input.ManifestWindowSeconds != null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.MinBufferTimeSeconds != null && { MinBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.MinUpdatePeriodSeconds != null && { MinUpdatePeriodSeconds: input.MinUpdatePeriodSeconds }),
    ...(input.SuggestedPresentationDelaySeconds != null && {
      SuggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
    }),
  };
};

/**
 * serializeAws_restJson1DefaultSegmentDeliveryConfiguration
 */
const se_DefaultSegmentDeliveryConfiguration = (
  input: DefaultSegmentDeliveryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaseUrl != null && { BaseUrl: input.BaseUrl }),
  };
};

/**
 * serializeAws_restJson1HlsPlaylistSettings
 */
const se_HlsPlaylistSettings = (input: HlsPlaylistSettings, context: __SerdeContext): any => {
  return {
    ...(input.ManifestWindowSeconds != null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
  };
};

/**
 * serializeAws_restJson1HttpConfiguration
 */
const se_HttpConfiguration = (input: HttpConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BaseUrl != null && { BaseUrl: input.BaseUrl }),
  };
};

/**
 * serializeAws_restJson1HttpPackageConfiguration
 */
const se_HttpPackageConfiguration = (input: HttpPackageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Path != null && { Path: input.Path }),
    ...(input.SourceGroup != null && { SourceGroup: input.SourceGroup }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1HttpPackageConfigurations
 */
const se_HttpPackageConfigurations = (input: HttpPackageConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HttpPackageConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1LivePreRollConfiguration
 */
const se_LivePreRollConfiguration = (input: LivePreRollConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdDecisionServerUrl != null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
    ...(input.MaxDurationSeconds != null && { MaxDurationSeconds: input.MaxDurationSeconds }),
  };
};

/**
 * serializeAws_restJson1LogTypes
 */
const se_LogTypes = (input: (LogType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ManifestProcessingRules
 */
const se_ManifestProcessingRules = (input: ManifestProcessingRules, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkerPassthrough != null && {
      AdMarkerPassthrough: se_AdMarkerPassthrough(input.AdMarkerPassthrough, context),
    }),
  };
};

/**
 * serializeAws_restJson1PrefetchConsumption
 */
const se_PrefetchConsumption = (input: PrefetchConsumption, context: __SerdeContext): any => {
  return {
    ...(input.AvailMatchingCriteria != null && {
      AvailMatchingCriteria: se___listOfAvailMatchingCriteria(input.AvailMatchingCriteria, context),
    }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1PrefetchRetrieval
 */
const se_PrefetchRetrieval = (input: PrefetchRetrieval, context: __SerdeContext): any => {
  return {
    ...(input.DynamicVariables != null && { DynamicVariables: se___mapOf__string(input.DynamicVariables, context) }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1RequestOutputItem
 */
const se_RequestOutputItem = (input: RequestOutputItem, context: __SerdeContext): any => {
  return {
    ...(input.DashPlaylistSettings != null && {
      DashPlaylistSettings: se_DashPlaylistSettings(input.DashPlaylistSettings, context),
    }),
    ...(input.HlsPlaylistSettings != null && {
      HlsPlaylistSettings: se_HlsPlaylistSettings(input.HlsPlaylistSettings, context),
    }),
    ...(input.ManifestName != null && { ManifestName: input.ManifestName }),
    ...(input.SourceGroup != null && { SourceGroup: input.SourceGroup }),
  };
};

/**
 * serializeAws_restJson1RequestOutputs
 */
const se_RequestOutputs = (input: RequestOutputItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RequestOutputItem(entry, context);
    });
};

/**
 * serializeAws_restJson1ScheduleConfiguration
 */
const se_ScheduleConfiguration = (input: ScheduleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ClipRange != null && { ClipRange: se_ClipRange(input.ClipRange, context) }),
    ...(input.Transition != null && { Transition: se_Transition(input.Transition, context) }),
  };
};

/**
 * serializeAws_restJson1SecretsManagerAccessTokenConfiguration
 */
const se_SecretsManagerAccessTokenConfiguration = (
  input: SecretsManagerAccessTokenConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.HeaderName != null && { HeaderName: input.HeaderName }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SecretStringKey != null && { SecretStringKey: input.SecretStringKey }),
  };
};

/**
 * serializeAws_restJson1SegmentationDescriptor
 */
const se_SegmentationDescriptor = (input: SegmentationDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.SegmentNum != null && { SegmentNum: input.SegmentNum }),
    ...(input.SegmentationEventId != null && { SegmentationEventId: input.SegmentationEventId }),
    ...(input.SegmentationTypeId != null && { SegmentationTypeId: input.SegmentationTypeId }),
    ...(input.SegmentationUpid != null && { SegmentationUpid: input.SegmentationUpid }),
    ...(input.SegmentationUpidType != null && { SegmentationUpidType: input.SegmentationUpidType }),
    ...(input.SegmentsExpected != null && { SegmentsExpected: input.SegmentsExpected }),
    ...(input.SubSegmentNum != null && { SubSegmentNum: input.SubSegmentNum }),
    ...(input.SubSegmentsExpected != null && { SubSegmentsExpected: input.SubSegmentsExpected }),
  };
};

/**
 * serializeAws_restJson1SegmentationDescriptorList
 */
const se_SegmentationDescriptorList = (input: SegmentationDescriptor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SegmentationDescriptor(entry, context);
    });
};

/**
 * serializeAws_restJson1SegmentDeliveryConfiguration
 */
const se_SegmentDeliveryConfiguration = (input: SegmentDeliveryConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BaseUrl != null && { BaseUrl: input.BaseUrl }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1SlateSource
 */
const se_SlateSource = (input: SlateSource, context: __SerdeContext): any => {
  return {
    ...(input.SourceLocationName != null && { SourceLocationName: input.SourceLocationName }),
    ...(input.VodSourceName != null && { VodSourceName: input.VodSourceName }),
  };
};

/**
 * serializeAws_restJson1SpliceInsertMessage
 */
const se_SpliceInsertMessage = (input: SpliceInsertMessage, context: __SerdeContext): any => {
  return {
    ...(input.AvailNum != null && { AvailNum: input.AvailNum }),
    ...(input.AvailsExpected != null && { AvailsExpected: input.AvailsExpected }),
    ...(input.SpliceEventId != null && { SpliceEventId: input.SpliceEventId }),
    ...(input.UniqueProgramId != null && { UniqueProgramId: input.UniqueProgramId }),
  };
};

/**
 * serializeAws_restJson1TimeSignalMessage
 */
const se_TimeSignalMessage = (input: TimeSignalMessage, context: __SerdeContext): any => {
  return {
    ...(input.SegmentationDescriptors != null && {
      SegmentationDescriptors: se_SegmentationDescriptorList(input.SegmentationDescriptors, context),
    }),
  };
};

/**
 * serializeAws_restJson1Transition
 */
const se_Transition = (input: Transition, context: __SerdeContext): any => {
  return {
    ...(input.DurationMillis != null && { DurationMillis: input.DurationMillis }),
    ...(input.RelativePosition != null && { RelativePosition: input.RelativePosition }),
    ...(input.RelativeProgram != null && { RelativeProgram: input.RelativeProgram }),
    ...(input.ScheduledStartTimeMillis != null && { ScheduledStartTimeMillis: input.ScheduledStartTimeMillis }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1UpdateProgramScheduleConfiguration
 */
const se_UpdateProgramScheduleConfiguration = (
  input: UpdateProgramScheduleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClipRange != null && { ClipRange: se_ClipRange(input.ClipRange, context) }),
    ...(input.Transition != null && { Transition: se_UpdateProgramTransition(input.Transition, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateProgramTransition
 */
const se_UpdateProgramTransition = (input: UpdateProgramTransition, context: __SerdeContext): any => {
  return {
    ...(input.DurationMillis != null && { DurationMillis: input.DurationMillis }),
    ...(input.ScheduledStartTimeMillis != null && { ScheduledStartTimeMillis: input.ScheduledStartTimeMillis }),
  };
};

/**
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1__listOfAdBreak
 */
const de___listOfAdBreak = (output: any, context: __SerdeContext): AdBreak[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdBreak(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAlert
 */
const de___listOfAlert = (output: any, context: __SerdeContext): Alert[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alert(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAvailMatchingCriteria
 */
const de___listOfAvailMatchingCriteria = (output: any, context: __SerdeContext): AvailMatchingCriteria[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AvailMatchingCriteria(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfChannel
 */
const de___listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Channel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfLiveSource
 */
const de___listOfLiveSource = (output: any, context: __SerdeContext): LiveSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LiveSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPlaybackConfiguration
 */
const de___listOfPlaybackConfiguration = (output: any, context: __SerdeContext): PlaybackConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlaybackConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPrefetchSchedule
 */
const de___listOfPrefetchSchedule = (output: any, context: __SerdeContext): PrefetchSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PrefetchSchedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfScheduleAdBreak
 */
const de___listOfScheduleAdBreak = (output: any, context: __SerdeContext): ScheduleAdBreak[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduleAdBreak(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfScheduleEntry
 */
const de___listOfScheduleEntry = (output: any, context: __SerdeContext): ScheduleEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduleEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfSegmentDeliveryConfiguration
 */
const de___listOfSegmentDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): SegmentDeliveryConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SegmentDeliveryConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfSourceLocation
 */
const de___listOfSourceLocation = (output: any, context: __SerdeContext): SourceLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceLocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVodSource
 */
const de___listOfVodSource = (output: any, context: __SerdeContext): VodSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VodSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__mapOf__string
 */
const de___mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AccessConfiguration
 */
const de_AccessConfiguration = (output: any, context: __SerdeContext): AccessConfiguration => {
  return {
    AccessType: __expectString(output.AccessType),
    SecretsManagerAccessTokenConfiguration:
      output.SecretsManagerAccessTokenConfiguration != null
        ? de_SecretsManagerAccessTokenConfiguration(output.SecretsManagerAccessTokenConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdBreak
 */
const de_AdBreak = (output: any, context: __SerdeContext): AdBreak => {
  return {
    MessageType: __expectString(output.MessageType),
    OffsetMillis: __expectLong(output.OffsetMillis),
    Slate: output.Slate != null ? de_SlateSource(output.Slate, context) : undefined,
    SpliceInsertMessage:
      output.SpliceInsertMessage != null ? de_SpliceInsertMessage(output.SpliceInsertMessage, context) : undefined,
    TimeSignalMessage:
      output.TimeSignalMessage != null ? de_TimeSignalMessage(output.TimeSignalMessage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdMarkerPassthrough
 */
const de_AdMarkerPassthrough = (output: any, context: __SerdeContext): AdMarkerPassthrough => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

/**
 * deserializeAws_restJson1Alert
 */
const de_Alert = (output: any, context: __SerdeContext): Alert => {
  return {
    AlertCode: __expectString(output.AlertCode),
    AlertMessage: __expectString(output.AlertMessage),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    RelatedResourceArns:
      output.RelatedResourceArns != null ? de___listOf__string(output.RelatedResourceArns, context) : undefined,
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_restJson1AvailMatchingCriteria
 */
const de_AvailMatchingCriteria = (output: any, context: __SerdeContext): AvailMatchingCriteria => {
  return {
    DynamicVariable: __expectString(output.DynamicVariable),
    Operator: __expectString(output.Operator),
  } as any;
};

/**
 * deserializeAws_restJson1AvailSuppression
 */
const de_AvailSuppression = (output: any, context: __SerdeContext): AvailSuppression => {
  return {
    Mode: __expectString(output.Mode),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1Bumper
 */
const de_Bumper = (output: any, context: __SerdeContext): Bumper => {
  return {
    EndUrl: __expectString(output.EndUrl),
    StartUrl: __expectString(output.StartUrl),
  } as any;
};

/**
 * deserializeAws_restJson1CdnConfiguration
 */
const de_CdnConfiguration = (output: any, context: __SerdeContext): CdnConfiguration => {
  return {
    AdSegmentUrlPrefix: __expectString(output.AdSegmentUrlPrefix),
    ContentSegmentUrlPrefix: __expectString(output.ContentSegmentUrlPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    Arn: __expectString(output.Arn),
    ChannelName: __expectString(output.ChannelName),
    ChannelState: __expectString(output.ChannelState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FillerSlate: output.FillerSlate != null ? de_SlateSource(output.FillerSlate, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    LogConfiguration:
      output.LogConfiguration != null ? de_LogConfigurationForChannel(output.LogConfiguration, context) : undefined,
    Outputs: output.Outputs != null ? de_ResponseOutputs(output.Outputs, context) : undefined,
    PlaybackMode: __expectString(output.PlaybackMode),
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
    Tier: __expectString(output.Tier),
  } as any;
};

/**
 * deserializeAws_restJson1ClipRange
 */
const de_ClipRange = (output: any, context: __SerdeContext): ClipRange => {
  return {
    EndOffsetMillis: __expectLong(output.EndOffsetMillis),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationAliasesResponse
 */
const de_ConfigurationAliasesResponse = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de___mapOf__string(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DashConfiguration
 */
const de_DashConfiguration = (output: any, context: __SerdeContext): DashConfiguration => {
  return {
    ManifestEndpointPrefix: __expectString(output.ManifestEndpointPrefix),
    MpdLocation: __expectString(output.MpdLocation),
    OriginManifestType: __expectString(output.OriginManifestType),
  } as any;
};

/**
 * deserializeAws_restJson1DashPlaylistSettings
 */
const de_DashPlaylistSettings = (output: any, context: __SerdeContext): DashPlaylistSettings => {
  return {
    ManifestWindowSeconds: __expectInt32(output.ManifestWindowSeconds),
    MinBufferTimeSeconds: __expectInt32(output.MinBufferTimeSeconds),
    MinUpdatePeriodSeconds: __expectInt32(output.MinUpdatePeriodSeconds),
    SuggestedPresentationDelaySeconds: __expectInt32(output.SuggestedPresentationDelaySeconds),
  } as any;
};

/**
 * deserializeAws_restJson1DefaultSegmentDeliveryConfiguration
 */
const de_DefaultSegmentDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): DefaultSegmentDeliveryConfiguration => {
  return {
    BaseUrl: __expectString(output.BaseUrl),
  } as any;
};

/**
 * deserializeAws_restJson1HlsConfiguration
 */
const de_HlsConfiguration = (output: any, context: __SerdeContext): HlsConfiguration => {
  return {
    ManifestEndpointPrefix: __expectString(output.ManifestEndpointPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1HlsPlaylistSettings
 */
const de_HlsPlaylistSettings = (output: any, context: __SerdeContext): HlsPlaylistSettings => {
  return {
    ManifestWindowSeconds: __expectInt32(output.ManifestWindowSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1HttpConfiguration
 */
const de_HttpConfiguration = (output: any, context: __SerdeContext): HttpConfiguration => {
  return {
    BaseUrl: __expectString(output.BaseUrl),
  } as any;
};

/**
 * deserializeAws_restJson1HttpPackageConfiguration
 */
const de_HttpPackageConfiguration = (output: any, context: __SerdeContext): HttpPackageConfiguration => {
  return {
    Path: __expectString(output.Path),
    SourceGroup: __expectString(output.SourceGroup),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1HttpPackageConfigurations
 */
const de_HttpPackageConfigurations = (output: any, context: __SerdeContext): HttpPackageConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HttpPackageConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LivePreRollConfiguration
 */
const de_LivePreRollConfiguration = (output: any, context: __SerdeContext): LivePreRollConfiguration => {
  return {
    AdDecisionServerUrl: __expectString(output.AdDecisionServerUrl),
    MaxDurationSeconds: __expectInt32(output.MaxDurationSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1LiveSource
 */
const de_LiveSource = (output: any, context: __SerdeContext): LiveSource => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    HttpPackageConfigurations:
      output.HttpPackageConfigurations != null
        ? de_HttpPackageConfigurations(output.HttpPackageConfigurations, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    LiveSourceName: __expectString(output.LiveSourceName),
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogConfiguration
 */
const de_LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    PercentEnabled: __expectInt32(output.PercentEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1LogConfigurationForChannel
 */
const de_LogConfigurationForChannel = (output: any, context: __SerdeContext): LogConfigurationForChannel => {
  return {
    LogTypes: output.LogTypes != null ? de_LogTypes(output.LogTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogTypes
 */
const de_LogTypes = (output: any, context: __SerdeContext): (LogType | string)[] => {
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
 * deserializeAws_restJson1ManifestProcessingRules
 */
const de_ManifestProcessingRules = (output: any, context: __SerdeContext): ManifestProcessingRules => {
  return {
    AdMarkerPassthrough:
      output.AdMarkerPassthrough != null ? de_AdMarkerPassthrough(output.AdMarkerPassthrough, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PlaybackConfiguration
 */
const de_PlaybackConfiguration = (output: any, context: __SerdeContext): PlaybackConfiguration => {
  return {
    AdDecisionServerUrl: __expectString(output.AdDecisionServerUrl),
    AvailSuppression:
      output.AvailSuppression != null ? de_AvailSuppression(output.AvailSuppression, context) : undefined,
    Bumper: output.Bumper != null ? de_Bumper(output.Bumper, context) : undefined,
    CdnConfiguration:
      output.CdnConfiguration != null ? de_CdnConfiguration(output.CdnConfiguration, context) : undefined,
    ConfigurationAliases:
      output.ConfigurationAliases != null
        ? de_ConfigurationAliasesResponse(output.ConfigurationAliases, context)
        : undefined,
    DashConfiguration:
      output.DashConfiguration != null ? de_DashConfiguration(output.DashConfiguration, context) : undefined,
    HlsConfiguration:
      output.HlsConfiguration != null ? de_HlsConfiguration(output.HlsConfiguration, context) : undefined,
    LivePreRollConfiguration:
      output.LivePreRollConfiguration != null
        ? de_LivePreRollConfiguration(output.LivePreRollConfiguration, context)
        : undefined,
    LogConfiguration:
      output.LogConfiguration != null ? de_LogConfiguration(output.LogConfiguration, context) : undefined,
    ManifestProcessingRules:
      output.ManifestProcessingRules != null
        ? de_ManifestProcessingRules(output.ManifestProcessingRules, context)
        : undefined,
    Name: __expectString(output.Name),
    PersonalizationThresholdSeconds: __expectInt32(output.PersonalizationThresholdSeconds),
    PlaybackConfigurationArn: __expectString(output.PlaybackConfigurationArn),
    PlaybackEndpointPrefix: __expectString(output.PlaybackEndpointPrefix),
    SessionInitializationEndpointPrefix: __expectString(output.SessionInitializationEndpointPrefix),
    SlateAdUrl: __expectString(output.SlateAdUrl),
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
    TranscodeProfileName: __expectString(output.TranscodeProfileName),
    VideoContentSourceUrl: __expectString(output.VideoContentSourceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1PrefetchConsumption
 */
const de_PrefetchConsumption = (output: any, context: __SerdeContext): PrefetchConsumption => {
  return {
    AvailMatchingCriteria:
      output.AvailMatchingCriteria != null
        ? de___listOfAvailMatchingCriteria(output.AvailMatchingCriteria, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PrefetchRetrieval
 */
const de_PrefetchRetrieval = (output: any, context: __SerdeContext): PrefetchRetrieval => {
  return {
    DynamicVariables:
      output.DynamicVariables != null ? de___mapOf__string(output.DynamicVariables, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PrefetchSchedule
 */
const de_PrefetchSchedule = (output: any, context: __SerdeContext): PrefetchSchedule => {
  return {
    Arn: __expectString(output.Arn),
    Consumption: output.Consumption != null ? de_PrefetchConsumption(output.Consumption, context) : undefined,
    Name: __expectString(output.Name),
    PlaybackConfigurationName: __expectString(output.PlaybackConfigurationName),
    Retrieval: output.Retrieval != null ? de_PrefetchRetrieval(output.Retrieval, context) : undefined,
    StreamId: __expectString(output.StreamId),
  } as any;
};

/**
 * deserializeAws_restJson1ResponseOutputItem
 */
const de_ResponseOutputItem = (output: any, context: __SerdeContext): ResponseOutputItem => {
  return {
    DashPlaylistSettings:
      output.DashPlaylistSettings != null ? de_DashPlaylistSettings(output.DashPlaylistSettings, context) : undefined,
    HlsPlaylistSettings:
      output.HlsPlaylistSettings != null ? de_HlsPlaylistSettings(output.HlsPlaylistSettings, context) : undefined,
    ManifestName: __expectString(output.ManifestName),
    PlaybackUrl: __expectString(output.PlaybackUrl),
    SourceGroup: __expectString(output.SourceGroup),
  } as any;
};

/**
 * deserializeAws_restJson1ResponseOutputs
 */
const de_ResponseOutputs = (output: any, context: __SerdeContext): ResponseOutputItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponseOutputItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScheduleAdBreak
 */
const de_ScheduleAdBreak = (output: any, context: __SerdeContext): ScheduleAdBreak => {
  return {
    ApproximateDurationSeconds: __expectLong(output.ApproximateDurationSeconds),
    ApproximateStartTime:
      output.ApproximateStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApproximateStartTime)))
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
};

/**
 * deserializeAws_restJson1ScheduleEntry
 */
const de_ScheduleEntry = (output: any, context: __SerdeContext): ScheduleEntry => {
  return {
    ApproximateDurationSeconds: __expectLong(output.ApproximateDurationSeconds),
    ApproximateStartTime:
      output.ApproximateStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApproximateStartTime)))
        : undefined,
    Arn: __expectString(output.Arn),
    ChannelName: __expectString(output.ChannelName),
    LiveSourceName: __expectString(output.LiveSourceName),
    ProgramName: __expectString(output.ProgramName),
    ScheduleAdBreaks:
      output.ScheduleAdBreaks != null ? de___listOfScheduleAdBreak(output.ScheduleAdBreaks, context) : undefined,
    ScheduleEntryType: __expectString(output.ScheduleEntryType),
    SourceLocationName: __expectString(output.SourceLocationName),
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
};

/**
 * deserializeAws_restJson1SecretsManagerAccessTokenConfiguration
 */
const de_SecretsManagerAccessTokenConfiguration = (
  output: any,
  context: __SerdeContext
): SecretsManagerAccessTokenConfiguration => {
  return {
    HeaderName: __expectString(output.HeaderName),
    SecretArn: __expectString(output.SecretArn),
    SecretStringKey: __expectString(output.SecretStringKey),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentationDescriptor
 */
const de_SegmentationDescriptor = (output: any, context: __SerdeContext): SegmentationDescriptor => {
  return {
    SegmentNum: __expectInt32(output.SegmentNum),
    SegmentationEventId: __expectInt32(output.SegmentationEventId),
    SegmentationTypeId: __expectInt32(output.SegmentationTypeId),
    SegmentationUpid: __expectString(output.SegmentationUpid),
    SegmentationUpidType: __expectInt32(output.SegmentationUpidType),
    SegmentsExpected: __expectInt32(output.SegmentsExpected),
    SubSegmentNum: __expectInt32(output.SubSegmentNum),
    SubSegmentsExpected: __expectInt32(output.SubSegmentsExpected),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentationDescriptorList
 */
const de_SegmentationDescriptorList = (output: any, context: __SerdeContext): SegmentationDescriptor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SegmentationDescriptor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SegmentDeliveryConfiguration
 */
const de_SegmentDeliveryConfiguration = (output: any, context: __SerdeContext): SegmentDeliveryConfiguration => {
  return {
    BaseUrl: __expectString(output.BaseUrl),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1SlateSource
 */
const de_SlateSource = (output: any, context: __SerdeContext): SlateSource => {
  return {
    SourceLocationName: __expectString(output.SourceLocationName),
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
};

/**
 * deserializeAws_restJson1SourceLocation
 */
const de_SourceLocation = (output: any, context: __SerdeContext): SourceLocation => {
  return {
    AccessConfiguration:
      output.AccessConfiguration != null ? de_AccessConfiguration(output.AccessConfiguration, context) : undefined,
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DefaultSegmentDeliveryConfiguration:
      output.DefaultSegmentDeliveryConfiguration != null
        ? de_DefaultSegmentDeliveryConfiguration(output.DefaultSegmentDeliveryConfiguration, context)
        : undefined,
    HttpConfiguration:
      output.HttpConfiguration != null ? de_HttpConfiguration(output.HttpConfiguration, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    SegmentDeliveryConfigurations:
      output.SegmentDeliveryConfigurations != null
        ? de___listOfSegmentDeliveryConfiguration(output.SegmentDeliveryConfigurations, context)
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SpliceInsertMessage
 */
const de_SpliceInsertMessage = (output: any, context: __SerdeContext): SpliceInsertMessage => {
  return {
    AvailNum: __expectInt32(output.AvailNum),
    AvailsExpected: __expectInt32(output.AvailsExpected),
    SpliceEventId: __expectInt32(output.SpliceEventId),
    UniqueProgramId: __expectInt32(output.UniqueProgramId),
  } as any;
};

/**
 * deserializeAws_restJson1TimeSignalMessage
 */
const de_TimeSignalMessage = (output: any, context: __SerdeContext): TimeSignalMessage => {
  return {
    SegmentationDescriptors:
      output.SegmentationDescriptors != null
        ? de_SegmentationDescriptorList(output.SegmentationDescriptors, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VodSource
 */
const de_VodSource = (output: any, context: __SerdeContext): VodSource => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    HttpPackageConfigurations:
      output.HttpPackageConfigurations != null
        ? de_HttpPackageConfigurations(output.HttpPackageConfigurations, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
    VodSourceName: __expectString(output.VodSourceName),
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
