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
  VodSource,
} from "../models/models_0";

export const serializeAws_restJson1ConfigureLogsForChannelCommand = async (
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
    ...(input.LogTypes != null && { LogTypes: serializeAws_restJson1LogTypes(input.LogTypes, context) }),
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

export const serializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand = async (
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

export const serializeAws_restJson1CreateChannelCommand = async (
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
    ...(input.FillerSlate != null && { FillerSlate: serializeAws_restJson1SlateSource(input.FillerSlate, context) }),
    ...(input.Outputs != null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) }),
    ...(input.PlaybackMode != null && { PlaybackMode: input.PlaybackMode }),
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreateLiveSourceCommand = async (
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
      HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(
        input.HttpPackageConfigurations,
        context
      ),
    }),
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreatePrefetchScheduleCommand = async (
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
    ...(input.Consumption != null && {
      Consumption: serializeAws_restJson1PrefetchConsumption(input.Consumption, context),
    }),
    ...(input.Retrieval != null && { Retrieval: serializeAws_restJson1PrefetchRetrieval(input.Retrieval, context) }),
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

export const serializeAws_restJson1CreateProgramCommand = async (
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
    ...(input.AdBreaks != null && { AdBreaks: serializeAws_restJson1__listOfAdBreak(input.AdBreaks, context) }),
    ...(input.LiveSourceName != null && { LiveSourceName: input.LiveSourceName }),
    ...(input.ScheduleConfiguration != null && {
      ScheduleConfiguration: serializeAws_restJson1ScheduleConfiguration(input.ScheduleConfiguration, context),
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

export const serializeAws_restJson1CreateSourceLocationCommand = async (
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
      AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
    }),
    ...(input.DefaultSegmentDeliveryConfiguration != null && {
      DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(
        input.DefaultSegmentDeliveryConfiguration,
        context
      ),
    }),
    ...(input.HttpConfiguration != null && {
      HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
    }),
    ...(input.SegmentDeliveryConfigurations != null && {
      SegmentDeliveryConfigurations: serializeAws_restJson1__listOfSegmentDeliveryConfiguration(
        input.SegmentDeliveryConfigurations,
        context
      ),
    }),
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreateVodSourceCommand = async (
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
      HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(
        input.HttpPackageConfigurations,
        context
      ),
    }),
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteChannelCommand = async (
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

export const serializeAws_restJson1DeleteChannelPolicyCommand = async (
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

export const serializeAws_restJson1DeleteLiveSourceCommand = async (
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

export const serializeAws_restJson1DeletePlaybackConfigurationCommand = async (
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

export const serializeAws_restJson1DeletePrefetchScheduleCommand = async (
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

export const serializeAws_restJson1DeleteProgramCommand = async (
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

export const serializeAws_restJson1DeleteSourceLocationCommand = async (
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

export const serializeAws_restJson1DeleteVodSourceCommand = async (
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

export const serializeAws_restJson1DescribeChannelCommand = async (
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

export const serializeAws_restJson1DescribeLiveSourceCommand = async (
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

export const serializeAws_restJson1DescribeProgramCommand = async (
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

export const serializeAws_restJson1DescribeSourceLocationCommand = async (
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

export const serializeAws_restJson1DescribeVodSourceCommand = async (
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

export const serializeAws_restJson1GetChannelPolicyCommand = async (
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

export const serializeAws_restJson1GetChannelScheduleCommand = async (
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

export const serializeAws_restJson1GetPlaybackConfigurationCommand = async (
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

export const serializeAws_restJson1GetPrefetchScheduleCommand = async (
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

export const serializeAws_restJson1ListAlertsCommand = async (
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

export const serializeAws_restJson1ListChannelsCommand = async (
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

export const serializeAws_restJson1ListLiveSourcesCommand = async (
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

export const serializeAws_restJson1ListPlaybackConfigurationsCommand = async (
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

export const serializeAws_restJson1ListPrefetchSchedulesCommand = async (
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

export const serializeAws_restJson1ListSourceLocationsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListVodSourcesCommand = async (
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

export const serializeAws_restJson1PutChannelPolicyCommand = async (
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

export const serializeAws_restJson1PutPlaybackConfigurationCommand = async (
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
    ...(input.AvailSuppression != null && {
      AvailSuppression: serializeAws_restJson1AvailSuppression(input.AvailSuppression, context),
    }),
    ...(input.Bumper != null && { Bumper: serializeAws_restJson1Bumper(input.Bumper, context) }),
    ...(input.CdnConfiguration != null && {
      CdnConfiguration: serializeAws_restJson1CdnConfiguration(input.CdnConfiguration, context),
    }),
    ...(input.ConfigurationAliases != null && {
      ConfigurationAliases: serializeAws_restJson1ConfigurationAliasesRequest(input.ConfigurationAliases, context),
    }),
    ...(input.DashConfiguration != null && {
      DashConfiguration: serializeAws_restJson1DashConfigurationForPut(input.DashConfiguration, context),
    }),
    ...(input.LivePreRollConfiguration != null && {
      LivePreRollConfiguration: serializeAws_restJson1LivePreRollConfiguration(input.LivePreRollConfiguration, context),
    }),
    ...(input.ManifestProcessingRules != null && {
      ManifestProcessingRules: serializeAws_restJson1ManifestProcessingRules(input.ManifestProcessingRules, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PersonalizationThresholdSeconds != null && {
      PersonalizationThresholdSeconds: input.PersonalizationThresholdSeconds,
    }),
    ...(input.SlateAdUrl != null && { SlateAdUrl: input.SlateAdUrl }),
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1StartChannelCommand = async (
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

export const serializeAws_restJson1StopChannelCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateChannelCommand = async (
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
    ...(input.FillerSlate != null && { FillerSlate: serializeAws_restJson1SlateSource(input.FillerSlate, context) }),
    ...(input.Outputs != null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) }),
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

export const serializeAws_restJson1UpdateLiveSourceCommand = async (
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
      HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(
        input.HttpPackageConfigurations,
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

export const serializeAws_restJson1UpdateSourceLocationCommand = async (
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
      AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
    }),
    ...(input.DefaultSegmentDeliveryConfiguration != null && {
      DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(
        input.DefaultSegmentDeliveryConfiguration,
        context
      ),
    }),
    ...(input.HttpConfiguration != null && {
      HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
    }),
    ...(input.SegmentDeliveryConfigurations != null && {
      SegmentDeliveryConfigurations: serializeAws_restJson1__listOfSegmentDeliveryConfiguration(
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

export const serializeAws_restJson1UpdateVodSourceCommand = async (
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
      HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(
        input.HttpPackageConfigurations,
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

export const deserializeAws_restJson1ConfigureLogsForChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConfigureLogsForChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.LogTypes != null) {
    contents.LogTypes = deserializeAws_restJson1LogTypes(data.LogTypes, context);
  }
  return contents;
};

const deserializeAws_restJson1ConfigureLogsForChannelCommandError = async (
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

export const deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommandError(output, context);
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

const deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommandError = async (
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

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
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
    contents.FillerSlate = deserializeAws_restJson1SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Outputs != null) {
    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode != null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.Tier != null) {
    contents.Tier = __expectString(data.Tier);
  }
  return contents;
};

const deserializeAws_restJson1CreateChannelCommandError = async (
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

export const deserializeAws_restJson1CreateLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLiveSourceCommandError(output, context);
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
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
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
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateLiveSourceCommandError = async (
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

export const deserializeAws_restJson1CreatePrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePrefetchScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Consumption != null) {
    contents.Consumption = deserializeAws_restJson1PrefetchConsumption(data.Consumption, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PlaybackConfigurationName != null) {
    contents.PlaybackConfigurationName = __expectString(data.PlaybackConfigurationName);
  }
  if (data.Retrieval != null) {
    contents.Retrieval = deserializeAws_restJson1PrefetchRetrieval(data.Retrieval, context);
  }
  if (data.StreamId != null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return contents;
};

const deserializeAws_restJson1CreatePrefetchScheduleCommandError = async (
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

export const deserializeAws_restJson1CreateProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdBreaks != null) {
    contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
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

const deserializeAws_restJson1CreateProgramCommandError = async (
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

export const deserializeAws_restJson1CreateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration != null) {
    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DefaultSegmentDeliveryConfiguration != null) {
    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration != null) {
    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SegmentDeliveryConfigurations != null) {
    contents.SegmentDeliveryConfigurations = deserializeAws_restJson1__listOfSegmentDeliveryConfiguration(
      data.SegmentDeliveryConfigurations,
      context
    );
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSourceLocationCommandError = async (
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

export const deserializeAws_restJson1CreateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVodSourceCommandError(output, context);
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
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

const deserializeAws_restJson1CreateVodSourceCommandError = async (
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

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
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

export const deserializeAws_restJson1DeleteChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteChannelPolicyCommandError = async (
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

export const deserializeAws_restJson1DeleteLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLiveSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteLiveSourceCommandError = async (
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

export const deserializeAws_restJson1DeletePlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePlaybackConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePlaybackConfigurationCommandError = async (
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

export const deserializeAws_restJson1DeletePrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePrefetchScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePrefetchScheduleCommandError = async (
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

export const deserializeAws_restJson1DeleteProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteProgramCommandError = async (
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

export const deserializeAws_restJson1DeleteSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSourceLocationCommandError = async (
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

export const deserializeAws_restJson1DeleteVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVodSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVodSourceCommandError = async (
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

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
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
    contents.FillerSlate = deserializeAws_restJson1SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.LogConfiguration != null) {
    contents.LogConfiguration = deserializeAws_restJson1LogConfigurationForChannel(data.LogConfiguration, context);
  }
  if (data.Outputs != null) {
    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode != null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.Tier != null) {
    contents.Tier = __expectString(data.Tier);
  }
  return contents;
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
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

export const deserializeAws_restJson1DescribeLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLiveSourceCommandError(output, context);
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
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
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
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeLiveSourceCommandError = async (
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

export const deserializeAws_restJson1DescribeProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdBreaks != null) {
    contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName != null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
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

const deserializeAws_restJson1DescribeProgramCommandError = async (
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

export const deserializeAws_restJson1DescribeSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration != null) {
    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DefaultSegmentDeliveryConfiguration != null) {
    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration != null) {
    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SegmentDeliveryConfigurations != null) {
    contents.SegmentDeliveryConfigurations = deserializeAws_restJson1__listOfSegmentDeliveryConfiguration(
      data.SegmentDeliveryConfigurations,
      context
    );
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSourceLocationCommandError = async (
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

export const deserializeAws_restJson1DescribeVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVodSourceCommandError(output, context);
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
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

const deserializeAws_restJson1DescribeVodSourceCommandError = async (
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

export const deserializeAws_restJson1GetChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelPolicyCommandError(output, context);
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

const deserializeAws_restJson1GetChannelPolicyCommandError = async (
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

export const deserializeAws_restJson1GetChannelScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfScheduleEntry(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetChannelScheduleCommandError = async (
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

export const deserializeAws_restJson1GetPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPlaybackConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdDecisionServerUrl != null) {
    contents.AdDecisionServerUrl = __expectString(data.AdDecisionServerUrl);
  }
  if (data.AvailSuppression != null) {
    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper != null) {
    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration != null) {
    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.ConfigurationAliases != null) {
    contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(
      data.ConfigurationAliases,
      context
    );
  }
  if (data.DashConfiguration != null) {
    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration != null) {
    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration != null) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.LogConfiguration != null) {
    contents.LogConfiguration = deserializeAws_restJson1LogConfiguration(data.LogConfiguration, context);
  }
  if (data.ManifestProcessingRules != null) {
    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(
      data.ManifestProcessingRules,
      context
    );
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
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName != null) {
    contents.TranscodeProfileName = __expectString(data.TranscodeProfileName);
  }
  if (data.VideoContentSourceUrl != null) {
    contents.VideoContentSourceUrl = __expectString(data.VideoContentSourceUrl);
  }
  return contents;
};

const deserializeAws_restJson1GetPlaybackConfigurationCommandError = async (
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

export const deserializeAws_restJson1GetPrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPrefetchScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Consumption != null) {
    contents.Consumption = deserializeAws_restJson1PrefetchConsumption(data.Consumption, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PlaybackConfigurationName != null) {
    contents.PlaybackConfigurationName = __expectString(data.PlaybackConfigurationName);
  }
  if (data.Retrieval != null) {
    contents.Retrieval = deserializeAws_restJson1PrefetchRetrieval(data.Retrieval, context);
  }
  if (data.StreamId != null) {
    contents.StreamId = __expectString(data.StreamId);
  }
  return contents;
};

const deserializeAws_restJson1GetPrefetchScheduleCommandError = async (
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

export const deserializeAws_restJson1ListAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlertsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfAlert(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAlertsCommandError = async (
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

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfChannel(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListChannelsCommandError = async (
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

export const deserializeAws_restJson1ListLiveSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLiveSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLiveSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfLiveSource(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLiveSourcesCommandError = async (
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

export const deserializeAws_restJson1ListPlaybackConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPlaybackConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfPlaybackConfiguration(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListPlaybackConfigurationsCommandError = async (
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

export const deserializeAws_restJson1ListPrefetchSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrefetchSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPrefetchSchedulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfPrefetchSchedule(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListPrefetchSchedulesCommandError = async (
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

export const deserializeAws_restJson1ListSourceLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSourceLocationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfSourceLocation(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSourceLocationsCommandError = async (
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
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
    case "com.amazonaws.mediatailor#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVodSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVodSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVodSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1__listOfVodSource(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListVodSourcesCommandError = async (
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

export const deserializeAws_restJson1PutChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutChannelPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutChannelPolicyCommandError = async (
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

export const deserializeAws_restJson1PutPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutPlaybackConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdDecisionServerUrl != null) {
    contents.AdDecisionServerUrl = __expectString(data.AdDecisionServerUrl);
  }
  if (data.AvailSuppression != null) {
    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper != null) {
    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration != null) {
    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.ConfigurationAliases != null) {
    contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(
      data.ConfigurationAliases,
      context
    );
  }
  if (data.DashConfiguration != null) {
    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration != null) {
    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration != null) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.LogConfiguration != null) {
    contents.LogConfiguration = deserializeAws_restJson1LogConfiguration(data.LogConfiguration, context);
  }
  if (data.ManifestProcessingRules != null) {
    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(
      data.ManifestProcessingRules,
      context
    );
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
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName != null) {
    contents.TranscodeProfileName = __expectString(data.TranscodeProfileName);
  }
  if (data.VideoContentSourceUrl != null) {
    contents.VideoContentSourceUrl = __expectString(data.VideoContentSourceUrl);
  }
  return contents;
};

const deserializeAws_restJson1PutPlaybackConfigurationCommandError = async (
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

export const deserializeAws_restJson1StartChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartChannelCommandError = async (
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

export const deserializeAws_restJson1StopChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopChannelCommandError = async (
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
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
    contents.FillerSlate = deserializeAws_restJson1SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.Outputs != null) {
    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode != null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.Tier != null) {
    contents.Tier = __expectString(data.Tier);
  }
  return contents;
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
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

export const deserializeAws_restJson1UpdateLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLiveSourceCommandError(output, context);
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
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
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
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateLiveSourceCommandError = async (
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

export const deserializeAws_restJson1UpdateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSourceLocationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration != null) {
    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DefaultSegmentDeliveryConfiguration != null) {
    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration != null) {
    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SegmentDeliveryConfigurations != null) {
    contents.SegmentDeliveryConfigurations = deserializeAws_restJson1__listOfSegmentDeliveryConfiguration(
      data.SegmentDeliveryConfigurations,
      context
    );
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSourceLocationCommandError = async (
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

export const deserializeAws_restJson1UpdateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVodSourceCommandError(output, context);
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
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTime)));
  }
  if (data.SourceLocationName != null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags != null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.VodSourceName != null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return contents;
};

const deserializeAws_restJson1UpdateVodSourceCommandError = async (
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const serializeAws_restJson1__listOfAdBreak = (input: AdBreak[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AdBreak(entry, context);
    });
};

const serializeAws_restJson1__listOfAvailMatchingCriteria = (
  input: AvailMatchingCriteria[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AvailMatchingCriteria(entry, context);
    });
};

const serializeAws_restJson1__listOfSegmentDeliveryConfiguration = (
  input: SegmentDeliveryConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SegmentDeliveryConfiguration(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1AccessConfiguration = (input: AccessConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AccessType != null && { AccessType: input.AccessType }),
    ...(input.SecretsManagerAccessTokenConfiguration != null && {
      SecretsManagerAccessTokenConfiguration: serializeAws_restJson1SecretsManagerAccessTokenConfiguration(
        input.SecretsManagerAccessTokenConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AdBreak = (input: AdBreak, context: __SerdeContext): any => {
  return {
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OffsetMillis != null && { OffsetMillis: input.OffsetMillis }),
    ...(input.Slate != null && { Slate: serializeAws_restJson1SlateSource(input.Slate, context) }),
    ...(input.SpliceInsertMessage != null && {
      SpliceInsertMessage: serializeAws_restJson1SpliceInsertMessage(input.SpliceInsertMessage, context),
    }),
    ...(input.TimeSignalMessage != null && {
      TimeSignalMessage: serializeAws_restJson1TimeSignalMessage(input.TimeSignalMessage, context),
    }),
  };
};

const serializeAws_restJson1AdMarkerPassthrough = (input: AdMarkerPassthrough, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AvailMatchingCriteria = (input: AvailMatchingCriteria, context: __SerdeContext): any => {
  return {
    ...(input.DynamicVariable != null && { DynamicVariable: input.DynamicVariable }),
    ...(input.Operator != null && { Operator: input.Operator }),
  };
};

const serializeAws_restJson1AvailSuppression = (input: AvailSuppression, context: __SerdeContext): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1Bumper = (input: Bumper, context: __SerdeContext): any => {
  return {
    ...(input.EndUrl != null && { EndUrl: input.EndUrl }),
    ...(input.StartUrl != null && { StartUrl: input.StartUrl }),
  };
};

const serializeAws_restJson1CdnConfiguration = (input: CdnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdSegmentUrlPrefix != null && { AdSegmentUrlPrefix: input.AdSegmentUrlPrefix }),
    ...(input.ContentSegmentUrlPrefix != null && { ContentSegmentUrlPrefix: input.ContentSegmentUrlPrefix }),
  };
};

const serializeAws_restJson1ConfigurationAliasesRequest = (
  input: Record<string, Record<string, string>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1__mapOf__string(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1DashConfigurationForPut = (
  input: DashConfigurationForPut,
  context: __SerdeContext
): any => {
  return {
    ...(input.MpdLocation != null && { MpdLocation: input.MpdLocation }),
    ...(input.OriginManifestType != null && { OriginManifestType: input.OriginManifestType }),
  };
};

const serializeAws_restJson1DashPlaylistSettings = (input: DashPlaylistSettings, context: __SerdeContext): any => {
  return {
    ...(input.ManifestWindowSeconds != null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.MinBufferTimeSeconds != null && { MinBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.MinUpdatePeriodSeconds != null && { MinUpdatePeriodSeconds: input.MinUpdatePeriodSeconds }),
    ...(input.SuggestedPresentationDelaySeconds != null && {
      SuggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
    }),
  };
};

const serializeAws_restJson1DefaultSegmentDeliveryConfiguration = (
  input: DefaultSegmentDeliveryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaseUrl != null && { BaseUrl: input.BaseUrl }),
  };
};

const serializeAws_restJson1HlsPlaylistSettings = (input: HlsPlaylistSettings, context: __SerdeContext): any => {
  return {
    ...(input.ManifestWindowSeconds != null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
  };
};

const serializeAws_restJson1HttpConfiguration = (input: HttpConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BaseUrl != null && { BaseUrl: input.BaseUrl }),
  };
};

const serializeAws_restJson1HttpPackageConfiguration = (
  input: HttpPackageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Path != null && { Path: input.Path }),
    ...(input.SourceGroup != null && { SourceGroup: input.SourceGroup }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1HttpPackageConfigurations = (
  input: HttpPackageConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
};

const serializeAws_restJson1LivePreRollConfiguration = (
  input: LivePreRollConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdDecisionServerUrl != null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
    ...(input.MaxDurationSeconds != null && { MaxDurationSeconds: input.MaxDurationSeconds }),
  };
};

const serializeAws_restJson1LogTypes = (input: (LogType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ManifestProcessingRules = (
  input: ManifestProcessingRules,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkerPassthrough != null && {
      AdMarkerPassthrough: serializeAws_restJson1AdMarkerPassthrough(input.AdMarkerPassthrough, context),
    }),
  };
};

const serializeAws_restJson1PrefetchConsumption = (input: PrefetchConsumption, context: __SerdeContext): any => {
  return {
    ...(input.AvailMatchingCriteria != null && {
      AvailMatchingCriteria: serializeAws_restJson1__listOfAvailMatchingCriteria(input.AvailMatchingCriteria, context),
    }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1PrefetchRetrieval = (input: PrefetchRetrieval, context: __SerdeContext): any => {
  return {
    ...(input.DynamicVariables != null && {
      DynamicVariables: serializeAws_restJson1__mapOf__string(input.DynamicVariables, context),
    }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1RequestOutputItem = (input: RequestOutputItem, context: __SerdeContext): any => {
  return {
    ...(input.DashPlaylistSettings != null && {
      DashPlaylistSettings: serializeAws_restJson1DashPlaylistSettings(input.DashPlaylistSettings, context),
    }),
    ...(input.HlsPlaylistSettings != null && {
      HlsPlaylistSettings: serializeAws_restJson1HlsPlaylistSettings(input.HlsPlaylistSettings, context),
    }),
    ...(input.ManifestName != null && { ManifestName: input.ManifestName }),
    ...(input.SourceGroup != null && { SourceGroup: input.SourceGroup }),
  };
};

const serializeAws_restJson1RequestOutputs = (input: RequestOutputItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RequestOutputItem(entry, context);
    });
};

const serializeAws_restJson1ScheduleConfiguration = (input: ScheduleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Transition != null && { Transition: serializeAws_restJson1Transition(input.Transition, context) }),
  };
};

const serializeAws_restJson1SecretsManagerAccessTokenConfiguration = (
  input: SecretsManagerAccessTokenConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.HeaderName != null && { HeaderName: input.HeaderName }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SecretStringKey != null && { SecretStringKey: input.SecretStringKey }),
  };
};

const serializeAws_restJson1SegmentationDescriptor = (input: SegmentationDescriptor, context: __SerdeContext): any => {
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

const serializeAws_restJson1SegmentationDescriptorList = (
  input: SegmentationDescriptor[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SegmentationDescriptor(entry, context);
    });
};

const serializeAws_restJson1SegmentDeliveryConfiguration = (
  input: SegmentDeliveryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaseUrl != null && { BaseUrl: input.BaseUrl }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1SlateSource = (input: SlateSource, context: __SerdeContext): any => {
  return {
    ...(input.SourceLocationName != null && { SourceLocationName: input.SourceLocationName }),
    ...(input.VodSourceName != null && { VodSourceName: input.VodSourceName }),
  };
};

const serializeAws_restJson1SpliceInsertMessage = (input: SpliceInsertMessage, context: __SerdeContext): any => {
  return {
    ...(input.AvailNum != null && { AvailNum: input.AvailNum }),
    ...(input.AvailsExpected != null && { AvailsExpected: input.AvailsExpected }),
    ...(input.SpliceEventId != null && { SpliceEventId: input.SpliceEventId }),
    ...(input.UniqueProgramId != null && { UniqueProgramId: input.UniqueProgramId }),
  };
};

const serializeAws_restJson1TimeSignalMessage = (input: TimeSignalMessage, context: __SerdeContext): any => {
  return {
    ...(input.SegmentationDescriptors != null && {
      SegmentationDescriptors: serializeAws_restJson1SegmentationDescriptorList(input.SegmentationDescriptors, context),
    }),
  };
};

const serializeAws_restJson1Transition = (input: Transition, context: __SerdeContext): any => {
  return {
    ...(input.DurationMillis != null && { DurationMillis: input.DurationMillis }),
    ...(input.RelativePosition != null && { RelativePosition: input.RelativePosition }),
    ...(input.RelativeProgram != null && { RelativeProgram: input.RelativeProgram }),
    ...(input.ScheduledStartTimeMillis != null && { ScheduledStartTimeMillis: input.ScheduledStartTimeMillis }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1__listOfAdBreak = (output: any, context: __SerdeContext): AdBreak[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdBreak(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfAlert = (output: any, context: __SerdeContext): Alert[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Alert(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfAvailMatchingCriteria = (
  output: any,
  context: __SerdeContext
): AvailMatchingCriteria[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AvailMatchingCriteria(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Channel(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfLiveSource = (output: any, context: __SerdeContext): LiveSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LiveSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfPlaybackConfiguration = (
  output: any,
  context: __SerdeContext
): PlaybackConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PlaybackConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfPrefetchSchedule = (output: any, context: __SerdeContext): PrefetchSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PrefetchSchedule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfScheduleAdBreak = (output: any, context: __SerdeContext): ScheduleAdBreak[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScheduleAdBreak(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfScheduleEntry = (output: any, context: __SerdeContext): ScheduleEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScheduleEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfSegmentDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): SegmentDeliveryConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentDeliveryConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfSourceLocation = (output: any, context: __SerdeContext): SourceLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceLocation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__listOfVodSource = (output: any, context: __SerdeContext): VodSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VodSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AccessConfiguration = (output: any, context: __SerdeContext): AccessConfiguration => {
  return {
    AccessType: __expectString(output.AccessType),
    SecretsManagerAccessTokenConfiguration:
      output.SecretsManagerAccessTokenConfiguration != null
        ? deserializeAws_restJson1SecretsManagerAccessTokenConfiguration(
            output.SecretsManagerAccessTokenConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdBreak = (output: any, context: __SerdeContext): AdBreak => {
  return {
    MessageType: __expectString(output.MessageType),
    OffsetMillis: __expectLong(output.OffsetMillis),
    Slate: output.Slate != null ? deserializeAws_restJson1SlateSource(output.Slate, context) : undefined,
    SpliceInsertMessage:
      output.SpliceInsertMessage != null
        ? deserializeAws_restJson1SpliceInsertMessage(output.SpliceInsertMessage, context)
        : undefined,
    TimeSignalMessage:
      output.TimeSignalMessage != null
        ? deserializeAws_restJson1TimeSignalMessage(output.TimeSignalMessage, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdMarkerPassthrough = (output: any, context: __SerdeContext): AdMarkerPassthrough => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1Alert = (output: any, context: __SerdeContext): Alert => {
  return {
    AlertCode: __expectString(output.AlertCode),
    AlertMessage: __expectString(output.AlertMessage),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    RelatedResourceArns:
      output.RelatedResourceArns != null
        ? deserializeAws_restJson1__listOf__string(output.RelatedResourceArns, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1AvailMatchingCriteria = (output: any, context: __SerdeContext): AvailMatchingCriteria => {
  return {
    DynamicVariable: __expectString(output.DynamicVariable),
    Operator: __expectString(output.Operator),
  } as any;
};

const deserializeAws_restJson1AvailSuppression = (output: any, context: __SerdeContext): AvailSuppression => {
  return {
    Mode: __expectString(output.Mode),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1Bumper = (output: any, context: __SerdeContext): Bumper => {
  return {
    EndUrl: __expectString(output.EndUrl),
    StartUrl: __expectString(output.StartUrl),
  } as any;
};

const deserializeAws_restJson1CdnConfiguration = (output: any, context: __SerdeContext): CdnConfiguration => {
  return {
    AdSegmentUrlPrefix: __expectString(output.AdSegmentUrlPrefix),
    ContentSegmentUrlPrefix: __expectString(output.ContentSegmentUrlPrefix),
  } as any;
};

const deserializeAws_restJson1Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    Arn: __expectString(output.Arn),
    ChannelName: __expectString(output.ChannelName),
    ChannelState: __expectString(output.ChannelState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FillerSlate:
      output.FillerSlate != null ? deserializeAws_restJson1SlateSource(output.FillerSlate, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    LogConfiguration:
      output.LogConfiguration != null
        ? deserializeAws_restJson1LogConfigurationForChannel(output.LogConfiguration, context)
        : undefined,
    Outputs: output.Outputs != null ? deserializeAws_restJson1ResponseOutputs(output.Outputs, context) : undefined,
    PlaybackMode: __expectString(output.PlaybackMode),
    Tags: output.tags != null ? deserializeAws_restJson1__mapOf__string(output.tags, context) : undefined,
    Tier: __expectString(output.Tier),
  } as any;
};

const deserializeAws_restJson1ConfigurationAliasesResponse = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce((acc: Record<string, Record<string, string>>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1__mapOf__string(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1DashConfiguration = (output: any, context: __SerdeContext): DashConfiguration => {
  return {
    ManifestEndpointPrefix: __expectString(output.ManifestEndpointPrefix),
    MpdLocation: __expectString(output.MpdLocation),
    OriginManifestType: __expectString(output.OriginManifestType),
  } as any;
};

const deserializeAws_restJson1DashPlaylistSettings = (output: any, context: __SerdeContext): DashPlaylistSettings => {
  return {
    ManifestWindowSeconds: __expectInt32(output.ManifestWindowSeconds),
    MinBufferTimeSeconds: __expectInt32(output.MinBufferTimeSeconds),
    MinUpdatePeriodSeconds: __expectInt32(output.MinUpdatePeriodSeconds),
    SuggestedPresentationDelaySeconds: __expectInt32(output.SuggestedPresentationDelaySeconds),
  } as any;
};

const deserializeAws_restJson1DefaultSegmentDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): DefaultSegmentDeliveryConfiguration => {
  return {
    BaseUrl: __expectString(output.BaseUrl),
  } as any;
};

const deserializeAws_restJson1HlsConfiguration = (output: any, context: __SerdeContext): HlsConfiguration => {
  return {
    ManifestEndpointPrefix: __expectString(output.ManifestEndpointPrefix),
  } as any;
};

const deserializeAws_restJson1HlsPlaylistSettings = (output: any, context: __SerdeContext): HlsPlaylistSettings => {
  return {
    ManifestWindowSeconds: __expectInt32(output.ManifestWindowSeconds),
  } as any;
};

const deserializeAws_restJson1HttpConfiguration = (output: any, context: __SerdeContext): HttpConfiguration => {
  return {
    BaseUrl: __expectString(output.BaseUrl),
  } as any;
};

const deserializeAws_restJson1HttpPackageConfiguration = (
  output: any,
  context: __SerdeContext
): HttpPackageConfiguration => {
  return {
    Path: __expectString(output.Path),
    SourceGroup: __expectString(output.SourceGroup),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1HttpPackageConfigurations = (
  output: any,
  context: __SerdeContext
): HttpPackageConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LivePreRollConfiguration = (
  output: any,
  context: __SerdeContext
): LivePreRollConfiguration => {
  return {
    AdDecisionServerUrl: __expectString(output.AdDecisionServerUrl),
    MaxDurationSeconds: __expectInt32(output.MaxDurationSeconds),
  } as any;
};

const deserializeAws_restJson1LiveSource = (output: any, context: __SerdeContext): LiveSource => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    HttpPackageConfigurations:
      output.HttpPackageConfigurations != null
        ? deserializeAws_restJson1HttpPackageConfigurations(output.HttpPackageConfigurations, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    LiveSourceName: __expectString(output.LiveSourceName),
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags: output.tags != null ? deserializeAws_restJson1__mapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    PercentEnabled: __expectInt32(output.PercentEnabled),
  } as any;
};

const deserializeAws_restJson1LogConfigurationForChannel = (
  output: any,
  context: __SerdeContext
): LogConfigurationForChannel => {
  return {
    LogTypes: output.LogTypes != null ? deserializeAws_restJson1LogTypes(output.LogTypes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogTypes = (output: any, context: __SerdeContext): (LogType | string)[] => {
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

const deserializeAws_restJson1ManifestProcessingRules = (
  output: any,
  context: __SerdeContext
): ManifestProcessingRules => {
  return {
    AdMarkerPassthrough:
      output.AdMarkerPassthrough != null
        ? deserializeAws_restJson1AdMarkerPassthrough(output.AdMarkerPassthrough, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PlaybackConfiguration = (output: any, context: __SerdeContext): PlaybackConfiguration => {
  return {
    AdDecisionServerUrl: __expectString(output.AdDecisionServerUrl),
    AvailSuppression:
      output.AvailSuppression != null
        ? deserializeAws_restJson1AvailSuppression(output.AvailSuppression, context)
        : undefined,
    Bumper: output.Bumper != null ? deserializeAws_restJson1Bumper(output.Bumper, context) : undefined,
    CdnConfiguration:
      output.CdnConfiguration != null
        ? deserializeAws_restJson1CdnConfiguration(output.CdnConfiguration, context)
        : undefined,
    ConfigurationAliases:
      output.ConfigurationAliases != null
        ? deserializeAws_restJson1ConfigurationAliasesResponse(output.ConfigurationAliases, context)
        : undefined,
    DashConfiguration:
      output.DashConfiguration != null
        ? deserializeAws_restJson1DashConfiguration(output.DashConfiguration, context)
        : undefined,
    HlsConfiguration:
      output.HlsConfiguration != null
        ? deserializeAws_restJson1HlsConfiguration(output.HlsConfiguration, context)
        : undefined,
    LivePreRollConfiguration:
      output.LivePreRollConfiguration != null
        ? deserializeAws_restJson1LivePreRollConfiguration(output.LivePreRollConfiguration, context)
        : undefined,
    LogConfiguration:
      output.LogConfiguration != null
        ? deserializeAws_restJson1LogConfiguration(output.LogConfiguration, context)
        : undefined,
    ManifestProcessingRules:
      output.ManifestProcessingRules != null
        ? deserializeAws_restJson1ManifestProcessingRules(output.ManifestProcessingRules, context)
        : undefined,
    Name: __expectString(output.Name),
    PersonalizationThresholdSeconds: __expectInt32(output.PersonalizationThresholdSeconds),
    PlaybackConfigurationArn: __expectString(output.PlaybackConfigurationArn),
    PlaybackEndpointPrefix: __expectString(output.PlaybackEndpointPrefix),
    SessionInitializationEndpointPrefix: __expectString(output.SessionInitializationEndpointPrefix),
    SlateAdUrl: __expectString(output.SlateAdUrl),
    Tags: output.tags != null ? deserializeAws_restJson1__mapOf__string(output.tags, context) : undefined,
    TranscodeProfileName: __expectString(output.TranscodeProfileName),
    VideoContentSourceUrl: __expectString(output.VideoContentSourceUrl),
  } as any;
};

const deserializeAws_restJson1PrefetchConsumption = (output: any, context: __SerdeContext): PrefetchConsumption => {
  return {
    AvailMatchingCriteria:
      output.AvailMatchingCriteria != null
        ? deserializeAws_restJson1__listOfAvailMatchingCriteria(output.AvailMatchingCriteria, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1PrefetchRetrieval = (output: any, context: __SerdeContext): PrefetchRetrieval => {
  return {
    DynamicVariables:
      output.DynamicVariables != null
        ? deserializeAws_restJson1__mapOf__string(output.DynamicVariables, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1PrefetchSchedule = (output: any, context: __SerdeContext): PrefetchSchedule => {
  return {
    Arn: __expectString(output.Arn),
    Consumption:
      output.Consumption != null ? deserializeAws_restJson1PrefetchConsumption(output.Consumption, context) : undefined,
    Name: __expectString(output.Name),
    PlaybackConfigurationName: __expectString(output.PlaybackConfigurationName),
    Retrieval:
      output.Retrieval != null ? deserializeAws_restJson1PrefetchRetrieval(output.Retrieval, context) : undefined,
    StreamId: __expectString(output.StreamId),
  } as any;
};

const deserializeAws_restJson1ResponseOutputItem = (output: any, context: __SerdeContext): ResponseOutputItem => {
  return {
    DashPlaylistSettings:
      output.DashPlaylistSettings != null
        ? deserializeAws_restJson1DashPlaylistSettings(output.DashPlaylistSettings, context)
        : undefined,
    HlsPlaylistSettings:
      output.HlsPlaylistSettings != null
        ? deserializeAws_restJson1HlsPlaylistSettings(output.HlsPlaylistSettings, context)
        : undefined,
    ManifestName: __expectString(output.ManifestName),
    PlaybackUrl: __expectString(output.PlaybackUrl),
    SourceGroup: __expectString(output.SourceGroup),
  } as any;
};

const deserializeAws_restJson1ResponseOutputs = (output: any, context: __SerdeContext): ResponseOutputItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseOutputItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ScheduleAdBreak = (output: any, context: __SerdeContext): ScheduleAdBreak => {
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

const deserializeAws_restJson1ScheduleEntry = (output: any, context: __SerdeContext): ScheduleEntry => {
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
      output.ScheduleAdBreaks != null
        ? deserializeAws_restJson1__listOfScheduleAdBreak(output.ScheduleAdBreaks, context)
        : undefined,
    ScheduleEntryType: __expectString(output.ScheduleEntryType),
    SourceLocationName: __expectString(output.SourceLocationName),
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
};

const deserializeAws_restJson1SecretsManagerAccessTokenConfiguration = (
  output: any,
  context: __SerdeContext
): SecretsManagerAccessTokenConfiguration => {
  return {
    HeaderName: __expectString(output.HeaderName),
    SecretArn: __expectString(output.SecretArn),
    SecretStringKey: __expectString(output.SecretStringKey),
  } as any;
};

const deserializeAws_restJson1SegmentationDescriptor = (
  output: any,
  context: __SerdeContext
): SegmentationDescriptor => {
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

const deserializeAws_restJson1SegmentationDescriptorList = (
  output: any,
  context: __SerdeContext
): SegmentationDescriptor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentationDescriptor(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SegmentDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): SegmentDeliveryConfiguration => {
  return {
    BaseUrl: __expectString(output.BaseUrl),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1SlateSource = (output: any, context: __SerdeContext): SlateSource => {
  return {
    SourceLocationName: __expectString(output.SourceLocationName),
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
};

const deserializeAws_restJson1SourceLocation = (output: any, context: __SerdeContext): SourceLocation => {
  return {
    AccessConfiguration:
      output.AccessConfiguration != null
        ? deserializeAws_restJson1AccessConfiguration(output.AccessConfiguration, context)
        : undefined,
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DefaultSegmentDeliveryConfiguration:
      output.DefaultSegmentDeliveryConfiguration != null
        ? deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
            output.DefaultSegmentDeliveryConfiguration,
            context
          )
        : undefined,
    HttpConfiguration:
      output.HttpConfiguration != null
        ? deserializeAws_restJson1HttpConfiguration(output.HttpConfiguration, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    SegmentDeliveryConfigurations:
      output.SegmentDeliveryConfigurations != null
        ? deserializeAws_restJson1__listOfSegmentDeliveryConfiguration(output.SegmentDeliveryConfigurations, context)
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags: output.tags != null ? deserializeAws_restJson1__mapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SpliceInsertMessage = (output: any, context: __SerdeContext): SpliceInsertMessage => {
  return {
    AvailNum: __expectInt32(output.AvailNum),
    AvailsExpected: __expectInt32(output.AvailsExpected),
    SpliceEventId: __expectInt32(output.SpliceEventId),
    UniqueProgramId: __expectInt32(output.UniqueProgramId),
  } as any;
};

const deserializeAws_restJson1TimeSignalMessage = (output: any, context: __SerdeContext): TimeSignalMessage => {
  return {
    SegmentationDescriptors:
      output.SegmentationDescriptors != null
        ? deserializeAws_restJson1SegmentationDescriptorList(output.SegmentationDescriptors, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VodSource = (output: any, context: __SerdeContext): VodSource => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    HttpPackageConfigurations:
      output.HttpPackageConfigurations != null
        ? deserializeAws_restJson1HttpPackageConfigurations(output.HttpPackageConfigurations, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags: output.tags != null ? deserializeAws_restJson1__mapOf__string(output.tags, context) : undefined,
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
