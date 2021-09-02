import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
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
import {
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "../commands/DeletePlaybackConfigurationCommand";
import { DeleteProgramCommandInput, DeleteProgramCommandOutput } from "../commands/DeleteProgramCommand";
import {
  DeleteSourceLocationCommandInput,
  DeleteSourceLocationCommandOutput,
} from "../commands/DeleteSourceLocationCommand";
import { DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput } from "../commands/DeleteVodSourceCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
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
import { ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "../commands/ListPlaybackConfigurationsCommand";
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
import {
  UpdateSourceLocationCommandInput,
  UpdateSourceLocationCommandOutput,
} from "../commands/UpdateSourceLocationCommand";
import { UpdateVodSourceCommandInput, UpdateVodSourceCommandOutput } from "../commands/UpdateVodSourceCommand";
import {
  AccessConfiguration,
  AdBreak,
  AdMarkerPassthrough,
  Alert,
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
  ManifestProcessingRules,
  PlaybackConfiguration,
  RequestOutputItem,
  ResponseOutputItem,
  ScheduleAdBreak,
  ScheduleConfiguration,
  ScheduleEntry,
  SecretsManagerAccessTokenConfiguration,
  SlateSource,
  SourceLocation,
  SpliceInsertMessage,
  Transition,
  VodSource,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

export const serializeAws_restJson1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.FillerSlate !== undefined &&
      input.FillerSlate !== null && { FillerSlate: serializeAws_restJson1SlateSource(input.FillerSlate, context) }),
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) }),
    ...(input.PlaybackMode !== undefined && input.PlaybackMode !== null && { PlaybackMode: input.PlaybackMode }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
  }
  if (input.ProgramName !== undefined) {
    const labelValue: string = input.ProgramName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProgramName.");
    }
    resolvedPath = resolvedPath.replace("{ProgramName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ProgramName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AdBreaks !== undefined &&
      input.AdBreaks !== null && { AdBreaks: serializeAws_restJson1__listOfAdBreak(input.AdBreaks, context) }),
    ...(input.ScheduleConfiguration !== undefined &&
      input.ScheduleConfiguration !== null && {
        ScheduleConfiguration: serializeAws_restJson1ScheduleConfiguration(input.ScheduleConfiguration, context),
      }),
    ...(input.SourceLocationName !== undefined &&
      input.SourceLocationName !== null && { SourceLocationName: input.SourceLocationName }),
    ...(input.VodSourceName !== undefined && input.VodSourceName !== null && { VodSourceName: input.VodSourceName }),
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
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccessConfiguration !== undefined &&
      input.AccessConfiguration !== null && {
        AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
      }),
    ...(input.DefaultSegmentDeliveryConfiguration !== undefined &&
      input.DefaultSegmentDeliveryConfiguration !== null && {
        DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(
          input.DefaultSegmentDeliveryConfiguration,
          context
        ),
      }),
    ...(input.HttpConfiguration !== undefined &&
      input.HttpConfiguration !== null && {
        HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
  }
  if (input.VodSourceName !== undefined) {
    const labelValue: string = input.VodSourceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VodSourceName.");
    }
    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VodSourceName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.HttpPackageConfigurations !== undefined &&
      input.HttpPackageConfigurations !== null && {
        HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(
          input.HttpPackageConfigurations,
          context
        ),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
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

export const serializeAws_restJson1DeleteChannelPolicyCommand = async (
  input: DeleteChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/policy";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
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

export const serializeAws_restJson1DeletePlaybackConfigurationCommand = async (
  input: DeletePlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1DeleteProgramCommand = async (
  input: DeleteProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channel/{ChannelName}/program/{ProgramName}";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
  }
  if (input.ProgramName !== undefined) {
    const labelValue: string = input.ProgramName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProgramName.");
    }
    resolvedPath = resolvedPath.replace("{ProgramName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ProgramName.");
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

export const serializeAws_restJson1DeleteSourceLocationCommand = async (
  input: DeleteSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocation/{SourceLocationName}";
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
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

export const serializeAws_restJson1DeleteVodSourceCommand = async (
  input: DeleteVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
  }
  if (input.VodSourceName !== undefined) {
    const labelValue: string = input.VodSourceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VodSourceName.");
    }
    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VodSourceName.");
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

export const serializeAws_restJson1DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
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

export const serializeAws_restJson1DescribeProgramCommand = async (
  input: DescribeProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channel/{ChannelName}/program/{ProgramName}";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
  }
  if (input.ProgramName !== undefined) {
    const labelValue: string = input.ProgramName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProgramName.");
    }
    resolvedPath = resolvedPath.replace("{ProgramName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ProgramName.");
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

export const serializeAws_restJson1DescribeSourceLocationCommand = async (
  input: DescribeSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocation/{SourceLocationName}";
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
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

export const serializeAws_restJson1DescribeVodSourceCommand = async (
  input: DescribeVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
  }
  if (input.VodSourceName !== undefined) {
    const labelValue: string = input.VodSourceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VodSourceName.");
    }
    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VodSourceName.");
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

export const serializeAws_restJson1GetChannelPolicyCommand = async (
  input: GetChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/policy";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
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

export const serializeAws_restJson1GetChannelScheduleCommand = async (
  input: GetChannelScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/schedule";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
  }
  const query: any = {
    ...(input.DurationMinutes !== undefined && { durationMinutes: input.DurationMinutes }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetPlaybackConfigurationCommand = async (
  input: GetPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1ListAlertsCommand = async (
  input: ListAlertsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alerts";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { resourceArn: input.ResourceArn }),
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

export const serializeAws_restJson1ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListPlaybackConfigurationsCommand = async (
  input: ListPlaybackConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfigurations";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListSourceLocationsCommand = async (
  input: ListSourceLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sourceLocations";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1ListVodSourcesCommand = async (
  input: ListVodSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sourceLocation/{SourceLocationName}/vodSources";
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/playbackConfiguration";
  let body: any;
  body = JSON.stringify({
    ...(input.AdDecisionServerUrl !== undefined &&
      input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
    ...(input.AvailSuppression !== undefined &&
      input.AvailSuppression !== null && {
        AvailSuppression: serializeAws_restJson1AvailSuppression(input.AvailSuppression, context),
      }),
    ...(input.Bumper !== undefined &&
      input.Bumper !== null && { Bumper: serializeAws_restJson1Bumper(input.Bumper, context) }),
    ...(input.CdnConfiguration !== undefined &&
      input.CdnConfiguration !== null && {
        CdnConfiguration: serializeAws_restJson1CdnConfiguration(input.CdnConfiguration, context),
      }),
    ...(input.ConfigurationAliases !== undefined &&
      input.ConfigurationAliases !== null && {
        ConfigurationAliases: serializeAws_restJson1ConfigurationAliasesRequest(input.ConfigurationAliases, context),
      }),
    ...(input.DashConfiguration !== undefined &&
      input.DashConfiguration !== null && {
        DashConfiguration: serializeAws_restJson1DashConfigurationForPut(input.DashConfiguration, context),
      }),
    ...(input.LivePreRollConfiguration !== undefined &&
      input.LivePreRollConfiguration !== null && {
        LivePreRollConfiguration: serializeAws_restJson1LivePreRollConfiguration(
          input.LivePreRollConfiguration,
          context
        ),
      }),
    ...(input.ManifestProcessingRules !== undefined &&
      input.ManifestProcessingRules !== null && {
        ManifestProcessingRules: serializeAws_restJson1ManifestProcessingRules(input.ManifestProcessingRules, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PersonalizationThresholdSeconds !== undefined &&
      input.PersonalizationThresholdSeconds !== null && {
        PersonalizationThresholdSeconds: input.PersonalizationThresholdSeconds,
      }),
    ...(input.SlateAdUrl !== undefined && input.SlateAdUrl !== null && { SlateAdUrl: input.SlateAdUrl }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
    ...(input.TranscodeProfileName !== undefined &&
      input.TranscodeProfileName !== null && { TranscodeProfileName: input.TranscodeProfileName }),
    ...(input.VideoContentSourceUrl !== undefined &&
      input.VideoContentSourceUrl !== null && { VideoContentSourceUrl: input.VideoContentSourceUrl }),
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
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
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

export const serializeAws_restJson1StopChannelCommand = async (
  input: StopChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}/stop";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channel/{ChannelName}";
  if (input.ChannelName !== undefined) {
    const labelValue: string = input.ChannelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelName.");
    }
    resolvedPath = resolvedPath.replace("{ChannelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ChannelName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) }),
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
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccessConfiguration !== undefined &&
      input.AccessConfiguration !== null && {
        AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
      }),
    ...(input.DefaultSegmentDeliveryConfiguration !== undefined &&
      input.DefaultSegmentDeliveryConfiguration !== null && {
        DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(
          input.DefaultSegmentDeliveryConfiguration,
          context
        ),
      }),
    ...(input.HttpConfiguration !== undefined &&
      input.HttpConfiguration !== null && {
        HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
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
  if (input.SourceLocationName !== undefined) {
    const labelValue: string = input.SourceLocationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
    }
    resolvedPath = resolvedPath.replace("{SourceLocationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SourceLocationName.");
  }
  if (input.VodSourceName !== undefined) {
    const labelValue: string = input.VodSourceName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VodSourceName.");
    }
    resolvedPath = resolvedPath.replace("{VodSourceName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VodSourceName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.HttpPackageConfigurations !== undefined &&
      input.HttpPackageConfigurations !== null && {
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

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
  }
  const contents: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ChannelName: undefined,
    ChannelState: undefined,
    CreationTime: undefined,
    FillerSlate: undefined,
    LastModifiedTime: undefined,
    Outputs: undefined,
    PlaybackMode: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName !== undefined && data.ChannelName !== null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ChannelState !== undefined && data.ChannelState !== null) {
    contents.ChannelState = __expectString(data.ChannelState);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.FillerSlate !== undefined && data.FillerSlate !== null) {
    contents.FillerSlate = deserializeAws_restJson1SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.Outputs !== undefined && data.Outputs !== null) {
    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1CreateProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProgramCommandError(output, context);
  }
  const contents: CreateProgramCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdBreaks: undefined,
    Arn: undefined,
    ChannelName: undefined,
    CreationTime: undefined,
    ProgramName: undefined,
    ScheduledStartTime: undefined,
    SourceLocationName: undefined,
    VodSourceName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdBreaks !== undefined && data.AdBreaks !== null) {
    contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName !== undefined && data.ChannelName !== null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.ProgramName !== undefined && data.ProgramName !== null) {
    contents.ProgramName = __expectString(data.ProgramName);
  }
  if (data.ScheduledStartTime !== undefined && data.ScheduledStartTime !== null) {
    contents.ScheduledStartTime = new Date(Math.round(data.ScheduledStartTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1CreateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSourceLocationCommandError(output, context);
  }
  const contents: CreateSourceLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessConfiguration: undefined,
    Arn: undefined,
    CreationTime: undefined,
    DefaultSegmentDeliveryConfiguration: undefined,
    HttpConfiguration: undefined,
    LastModifiedTime: undefined,
    SourceLocationName: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1CreateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVodSourceCommandError(output, context);
  }
  const contents: CreateVodSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationTime: undefined,
    HttpPackageConfigurations: undefined,
    LastModifiedTime: undefined,
    SourceLocationName: undefined,
    Tags: undefined,
    VodSourceName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DeleteChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelPolicyCommandError(output, context);
  }
  const contents: DeleteChannelPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DeletePlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePlaybackConfigurationCommandError(output, context);
  }
  const contents: DeletePlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DeleteProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProgramCommandError(output, context);
  }
  const contents: DeleteProgramCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DeleteSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSourceLocationCommandError(output, context);
  }
  const contents: DeleteSourceLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DeleteVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVodSourceCommandError(output, context);
  }
  const contents: DeleteVodSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
  }
  const contents: DescribeChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ChannelName: undefined,
    ChannelState: undefined,
    CreationTime: undefined,
    FillerSlate: undefined,
    LastModifiedTime: undefined,
    Outputs: undefined,
    PlaybackMode: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName !== undefined && data.ChannelName !== null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ChannelState !== undefined && data.ChannelState !== null) {
    contents.ChannelState = __expectString(data.ChannelState);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.FillerSlate !== undefined && data.FillerSlate !== null) {
    contents.FillerSlate = deserializeAws_restJson1SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.Outputs !== undefined && data.Outputs !== null) {
    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DescribeProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProgramCommandError(output, context);
  }
  const contents: DescribeProgramCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdBreaks: undefined,
    Arn: undefined,
    ChannelName: undefined,
    CreationTime: undefined,
    ProgramName: undefined,
    ScheduledStartTime: undefined,
    SourceLocationName: undefined,
    VodSourceName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdBreaks !== undefined && data.AdBreaks !== null) {
    contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName !== undefined && data.ChannelName !== null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.ProgramName !== undefined && data.ProgramName !== null) {
    contents.ProgramName = __expectString(data.ProgramName);
  }
  if (data.ScheduledStartTime !== undefined && data.ScheduledStartTime !== null) {
    contents.ScheduledStartTime = new Date(Math.round(data.ScheduledStartTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DescribeSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSourceLocationCommandError(output, context);
  }
  const contents: DescribeSourceLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessConfiguration: undefined,
    Arn: undefined,
    CreationTime: undefined,
    DefaultSegmentDeliveryConfiguration: undefined,
    HttpConfiguration: undefined,
    LastModifiedTime: undefined,
    SourceLocationName: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1DescribeVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVodSourceCommandError(output, context);
  }
  const contents: DescribeVodSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationTime: undefined,
    HttpPackageConfigurations: undefined,
    LastModifiedTime: undefined,
    SourceLocationName: undefined,
    Tags: undefined,
    VodSourceName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1GetChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelPolicyCommandError(output, context);
  }
  const contents: GetChannelPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = __expectString(data.Policy);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChannelPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1GetChannelScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelScheduleCommandError(output, context);
  }
  const contents: GetChannelScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1__listOfScheduleEntry(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChannelScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1GetPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPlaybackConfigurationCommandError(output, context);
  }
  const contents: GetPlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdDecisionServerUrl: undefined,
    AvailSuppression: undefined,
    Bumper: undefined,
    CdnConfiguration: undefined,
    ConfigurationAliases: undefined,
    DashConfiguration: undefined,
    HlsConfiguration: undefined,
    LivePreRollConfiguration: undefined,
    ManifestProcessingRules: undefined,
    Name: undefined,
    PersonalizationThresholdSeconds: undefined,
    PlaybackConfigurationArn: undefined,
    PlaybackEndpointPrefix: undefined,
    SessionInitializationEndpointPrefix: undefined,
    SlateAdUrl: undefined,
    Tags: undefined,
    TranscodeProfileName: undefined,
    VideoContentSourceUrl: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
    contents.AdDecisionServerUrl = __expectString(data.AdDecisionServerUrl);
  }
  if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper !== undefined && data.Bumper !== null) {
    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.ConfigurationAliases !== undefined && data.ConfigurationAliases !== null) {
    contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(
      data.ConfigurationAliases,
      context
    );
  }
  if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(
      data.ManifestProcessingRules,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
    contents.PersonalizationThresholdSeconds = __expectInt32(data.PersonalizationThresholdSeconds);
  }
  if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
    contents.PlaybackConfigurationArn = __expectString(data.PlaybackConfigurationArn);
  }
  if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
    contents.PlaybackEndpointPrefix = __expectString(data.PlaybackEndpointPrefix);
  }
  if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
    contents.SessionInitializationEndpointPrefix = __expectString(data.SessionInitializationEndpointPrefix);
  }
  if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
    contents.SlateAdUrl = __expectString(data.SlateAdUrl);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
    contents.TranscodeProfileName = __expectString(data.TranscodeProfileName);
  }
  if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
    contents.VideoContentSourceUrl = __expectString(data.VideoContentSourceUrl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1ListAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlertsCommandError(output, context);
  }
  const contents: ListAlertsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1__listOfAlert(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAlertsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1__listOfChannel(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1ListPlaybackConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPlaybackConfigurationsCommandError(output, context);
  }
  const contents: ListPlaybackConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1__listOfPlaybackConfiguration(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPlaybackConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1ListSourceLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSourceLocationsCommandError(output, context);
  }
  const contents: ListSourceLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1__listOfSourceLocation(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSourceLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceLocationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListVodSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVodSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVodSourcesCommandError(output, context);
  }
  const contents: ListVodSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1__listOfVodSource(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVodSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVodSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1PutChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutChannelPolicyCommandError(output, context);
  }
  const contents: PutChannelPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutChannelPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1PutPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutPlaybackConfigurationCommandError(output, context);
  }
  const contents: PutPlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdDecisionServerUrl: undefined,
    AvailSuppression: undefined,
    Bumper: undefined,
    CdnConfiguration: undefined,
    ConfigurationAliases: undefined,
    DashConfiguration: undefined,
    HlsConfiguration: undefined,
    LivePreRollConfiguration: undefined,
    ManifestProcessingRules: undefined,
    Name: undefined,
    PersonalizationThresholdSeconds: undefined,
    PlaybackConfigurationArn: undefined,
    PlaybackEndpointPrefix: undefined,
    SessionInitializationEndpointPrefix: undefined,
    SlateAdUrl: undefined,
    Tags: undefined,
    TranscodeProfileName: undefined,
    VideoContentSourceUrl: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
    contents.AdDecisionServerUrl = __expectString(data.AdDecisionServerUrl);
  }
  if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
    contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
  }
  if (data.Bumper !== undefined && data.Bumper !== null) {
    contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
  }
  if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
    contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.ConfigurationAliases !== undefined && data.ConfigurationAliases !== null) {
    contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(
      data.ConfigurationAliases,
      context
    );
  }
  if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
    contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
    contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
    contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(
      data.ManifestProcessingRules,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
    contents.PersonalizationThresholdSeconds = __expectInt32(data.PersonalizationThresholdSeconds);
  }
  if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
    contents.PlaybackConfigurationArn = __expectString(data.PlaybackConfigurationArn);
  }
  if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
    contents.PlaybackEndpointPrefix = __expectString(data.PlaybackEndpointPrefix);
  }
  if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
    contents.SessionInitializationEndpointPrefix = __expectString(data.SessionInitializationEndpointPrefix);
  }
  if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
    contents.SlateAdUrl = __expectString(data.SlateAdUrl);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
    contents.TranscodeProfileName = __expectString(data.TranscodeProfileName);
  }
  if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
    contents.VideoContentSourceUrl = __expectString(data.VideoContentSourceUrl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutPlaybackConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1StartChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartChannelCommandError(output, context);
  }
  const contents: StartChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1StopChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopChannelCommandError(output, context);
  }
  const contents: StopChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ChannelName: undefined,
    ChannelState: undefined,
    CreationTime: undefined,
    FillerSlate: undefined,
    LastModifiedTime: undefined,
    Outputs: undefined,
    PlaybackMode: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.ChannelName !== undefined && data.ChannelName !== null) {
    contents.ChannelName = __expectString(data.ChannelName);
  }
  if (data.ChannelState !== undefined && data.ChannelState !== null) {
    contents.ChannelState = __expectString(data.ChannelState);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.FillerSlate !== undefined && data.FillerSlate !== null) {
    contents.FillerSlate = deserializeAws_restJson1SlateSource(data.FillerSlate, context);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.Outputs !== undefined && data.Outputs !== null) {
    contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
  }
  if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
    contents.PlaybackMode = __expectString(data.PlaybackMode);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1UpdateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSourceLocationCommandError(output, context);
  }
  const contents: UpdateSourceLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessConfiguration: undefined,
    Arn: undefined,
    CreationTime: undefined,
    DefaultSegmentDeliveryConfiguration: undefined,
    HttpConfiguration: undefined,
    LastModifiedTime: undefined,
    SourceLocationName: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
    contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
    contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
      data.DefaultSegmentDeliveryConfiguration,
      context
    );
  }
  if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
    contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSourceLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1UpdateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVodSourceCommandError(output, context);
  }
  const contents: UpdateVodSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationTime: undefined,
    HttpPackageConfigurations: undefined,
    LastModifiedTime: undefined,
    SourceLocationName: undefined,
    Tags: undefined,
    VodSourceName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
    contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(
      data.HttpPackageConfigurations,
      context
    );
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
  }
  if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
    contents.SourceLocationName = __expectString(data.SourceLocationName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
    contents.VodSourceName = __expectString(data.VodSourceName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVodSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVodSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1__listOfAdBreak = (input: AdBreak[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AdBreak(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1AccessConfiguration = (input: AccessConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AccessType !== undefined && input.AccessType !== null && { AccessType: input.AccessType }),
    ...(input.SecretsManagerAccessTokenConfiguration !== undefined &&
      input.SecretsManagerAccessTokenConfiguration !== null && {
        SecretsManagerAccessTokenConfiguration: serializeAws_restJson1SecretsManagerAccessTokenConfiguration(
          input.SecretsManagerAccessTokenConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AdBreak = (input: AdBreak, context: __SerdeContext): any => {
  return {
    ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
    ...(input.OffsetMillis !== undefined && input.OffsetMillis !== null && { OffsetMillis: input.OffsetMillis }),
    ...(input.Slate !== undefined &&
      input.Slate !== null && { Slate: serializeAws_restJson1SlateSource(input.Slate, context) }),
    ...(input.SpliceInsertMessage !== undefined &&
      input.SpliceInsertMessage !== null && {
        SpliceInsertMessage: serializeAws_restJson1SpliceInsertMessage(input.SpliceInsertMessage, context),
      }),
  };
};

const serializeAws_restJson1AdMarkerPassthrough = (input: AdMarkerPassthrough, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AvailSuppression = (input: AvailSuppression, context: __SerdeContext): any => {
  return {
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1Bumper = (input: Bumper, context: __SerdeContext): any => {
  return {
    ...(input.EndUrl !== undefined && input.EndUrl !== null && { EndUrl: input.EndUrl }),
    ...(input.StartUrl !== undefined && input.StartUrl !== null && { StartUrl: input.StartUrl }),
  };
};

const serializeAws_restJson1CdnConfiguration = (input: CdnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdSegmentUrlPrefix !== undefined &&
      input.AdSegmentUrlPrefix !== null && { AdSegmentUrlPrefix: input.AdSegmentUrlPrefix }),
    ...(input.ContentSegmentUrlPrefix !== undefined &&
      input.ContentSegmentUrlPrefix !== null && { ContentSegmentUrlPrefix: input.ContentSegmentUrlPrefix }),
  };
};

const serializeAws_restJson1ConfigurationAliasesRequest = (
  input: { [key: string]: { [key: string]: string } },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1__mapOf__string(value, context),
    };
  }, {});
};

const serializeAws_restJson1DashConfigurationForPut = (
  input: DashConfigurationForPut,
  context: __SerdeContext
): any => {
  return {
    ...(input.MpdLocation !== undefined && input.MpdLocation !== null && { MpdLocation: input.MpdLocation }),
    ...(input.OriginManifestType !== undefined &&
      input.OriginManifestType !== null && { OriginManifestType: input.OriginManifestType }),
  };
};

const serializeAws_restJson1DashPlaylistSettings = (input: DashPlaylistSettings, context: __SerdeContext): any => {
  return {
    ...(input.ManifestWindowSeconds !== undefined &&
      input.ManifestWindowSeconds !== null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.MinBufferTimeSeconds !== undefined &&
      input.MinBufferTimeSeconds !== null && { MinBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.MinUpdatePeriodSeconds !== undefined &&
      input.MinUpdatePeriodSeconds !== null && { MinUpdatePeriodSeconds: input.MinUpdatePeriodSeconds }),
    ...(input.SuggestedPresentationDelaySeconds !== undefined &&
      input.SuggestedPresentationDelaySeconds !== null && {
        SuggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
      }),
  };
};

const serializeAws_restJson1DefaultSegmentDeliveryConfiguration = (
  input: DefaultSegmentDeliveryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BaseUrl !== undefined && input.BaseUrl !== null && { BaseUrl: input.BaseUrl }),
  };
};

const serializeAws_restJson1HlsPlaylistSettings = (input: HlsPlaylistSettings, context: __SerdeContext): any => {
  return {
    ...(input.ManifestWindowSeconds !== undefined &&
      input.ManifestWindowSeconds !== null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
  };
};

const serializeAws_restJson1HttpConfiguration = (input: HttpConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BaseUrl !== undefined && input.BaseUrl !== null && { BaseUrl: input.BaseUrl }),
  };
};

const serializeAws_restJson1HttpPackageConfiguration = (
  input: HttpPackageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.SourceGroup !== undefined && input.SourceGroup !== null && { SourceGroup: input.SourceGroup }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1HttpPackageConfigurations = (
  input: HttpPackageConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
};

const serializeAws_restJson1LivePreRollConfiguration = (
  input: LivePreRollConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdDecisionServerUrl !== undefined &&
      input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
    ...(input.MaxDurationSeconds !== undefined &&
      input.MaxDurationSeconds !== null && { MaxDurationSeconds: input.MaxDurationSeconds }),
  };
};

const serializeAws_restJson1ManifestProcessingRules = (
  input: ManifestProcessingRules,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkerPassthrough !== undefined &&
      input.AdMarkerPassthrough !== null && {
        AdMarkerPassthrough: serializeAws_restJson1AdMarkerPassthrough(input.AdMarkerPassthrough, context),
      }),
  };
};

const serializeAws_restJson1RequestOutputItem = (input: RequestOutputItem, context: __SerdeContext): any => {
  return {
    ...(input.DashPlaylistSettings !== undefined &&
      input.DashPlaylistSettings !== null && {
        DashPlaylistSettings: serializeAws_restJson1DashPlaylistSettings(input.DashPlaylistSettings, context),
      }),
    ...(input.HlsPlaylistSettings !== undefined &&
      input.HlsPlaylistSettings !== null && {
        HlsPlaylistSettings: serializeAws_restJson1HlsPlaylistSettings(input.HlsPlaylistSettings, context),
      }),
    ...(input.ManifestName !== undefined && input.ManifestName !== null && { ManifestName: input.ManifestName }),
    ...(input.SourceGroup !== undefined && input.SourceGroup !== null && { SourceGroup: input.SourceGroup }),
  };
};

const serializeAws_restJson1RequestOutputs = (input: RequestOutputItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RequestOutputItem(entry, context);
    });
};

const serializeAws_restJson1ScheduleConfiguration = (input: ScheduleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Transition !== undefined &&
      input.Transition !== null && { Transition: serializeAws_restJson1Transition(input.Transition, context) }),
  };
};

const serializeAws_restJson1SecretsManagerAccessTokenConfiguration = (
  input: SecretsManagerAccessTokenConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.HeaderName !== undefined && input.HeaderName !== null && { HeaderName: input.HeaderName }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    ...(input.SecretStringKey !== undefined &&
      input.SecretStringKey !== null && { SecretStringKey: input.SecretStringKey }),
  };
};

const serializeAws_restJson1SlateSource = (input: SlateSource, context: __SerdeContext): any => {
  return {
    ...(input.SourceLocationName !== undefined &&
      input.SourceLocationName !== null && { SourceLocationName: input.SourceLocationName }),
    ...(input.VodSourceName !== undefined && input.VodSourceName !== null && { VodSourceName: input.VodSourceName }),
  };
};

const serializeAws_restJson1SpliceInsertMessage = (input: SpliceInsertMessage, context: __SerdeContext): any => {
  return {
    ...(input.AvailNum !== undefined && input.AvailNum !== null && { AvailNum: input.AvailNum }),
    ...(input.AvailsExpected !== undefined &&
      input.AvailsExpected !== null && { AvailsExpected: input.AvailsExpected }),
    ...(input.SpliceEventId !== undefined && input.SpliceEventId !== null && { SpliceEventId: input.SpliceEventId }),
    ...(input.UniqueProgramId !== undefined &&
      input.UniqueProgramId !== null && { UniqueProgramId: input.UniqueProgramId }),
  };
};

const serializeAws_restJson1Transition = (input: Transition, context: __SerdeContext): any => {
  return {
    ...(input.RelativePosition !== undefined &&
      input.RelativePosition !== null && { RelativePosition: input.RelativePosition }),
    ...(input.RelativeProgram !== undefined &&
      input.RelativeProgram !== null && { RelativeProgram: input.RelativeProgram }),
    ...(input.ScheduledStartTimeMillis !== undefined &&
      input.ScheduledStartTimeMillis !== null && { ScheduledStartTimeMillis: input.ScheduledStartTimeMillis }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfAdBreak = (output: any, context: __SerdeContext): AdBreak[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdBreak(entry, context);
    });
};

const deserializeAws_restJson1__listOfAlert = (output: any, context: __SerdeContext): Alert[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Alert(entry, context);
    });
};

const deserializeAws_restJson1__listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Channel(entry, context);
    });
};

const deserializeAws_restJson1__listOfPlaybackConfiguration = (
  output: any,
  context: __SerdeContext
): PlaybackConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PlaybackConfiguration(entry, context);
    });
};

const deserializeAws_restJson1__listOfScheduleAdBreak = (output: any, context: __SerdeContext): ScheduleAdBreak[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScheduleAdBreak(entry, context);
    });
};

const deserializeAws_restJson1__listOfScheduleEntry = (output: any, context: __SerdeContext): ScheduleEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScheduleEntry(entry, context);
    });
};

const deserializeAws_restJson1__listOfSourceLocation = (output: any, context: __SerdeContext): SourceLocation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceLocation(entry, context);
    });
};

const deserializeAws_restJson1__listOfVodSource = (output: any, context: __SerdeContext): VodSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VodSource(entry, context);
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1AccessConfiguration = (output: any, context: __SerdeContext): AccessConfiguration => {
  return {
    AccessType: __expectString(output.AccessType),
    SecretsManagerAccessTokenConfiguration:
      output.SecretsManagerAccessTokenConfiguration !== undefined &&
      output.SecretsManagerAccessTokenConfiguration !== null
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
    Slate:
      output.Slate !== undefined && output.Slate !== null
        ? deserializeAws_restJson1SlateSource(output.Slate, context)
        : undefined,
    SpliceInsertMessage:
      output.SpliceInsertMessage !== undefined && output.SpliceInsertMessage !== null
        ? deserializeAws_restJson1SpliceInsertMessage(output.SpliceInsertMessage, context)
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
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    RelatedResourceArns:
      output.RelatedResourceArns !== undefined && output.RelatedResourceArns !== null
        ? deserializeAws_restJson1__listOf__string(output.RelatedResourceArns, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
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
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    FillerSlate:
      output.FillerSlate !== undefined && output.FillerSlate !== null
        ? deserializeAws_restJson1SlateSource(output.FillerSlate, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    Outputs:
      output.Outputs !== undefined && output.Outputs !== null
        ? deserializeAws_restJson1ResponseOutputs(output.Outputs, context)
        : undefined,
    PlaybackMode: __expectString(output.PlaybackMode),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigurationAliasesResponse = (
  output: any,
  context: __SerdeContext
): { [key: string]: { [key: string]: string } } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: { [key: string]: string } }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1__mapOf__string(value, context),
      };
    },
    {}
  );
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
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

const deserializeAws_restJson1ManifestProcessingRules = (
  output: any,
  context: __SerdeContext
): ManifestProcessingRules => {
  return {
    AdMarkerPassthrough:
      output.AdMarkerPassthrough !== undefined && output.AdMarkerPassthrough !== null
        ? deserializeAws_restJson1AdMarkerPassthrough(output.AdMarkerPassthrough, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PlaybackConfiguration = (output: any, context: __SerdeContext): PlaybackConfiguration => {
  return {
    AdDecisionServerUrl: __expectString(output.AdDecisionServerUrl),
    AvailSuppression:
      output.AvailSuppression !== undefined && output.AvailSuppression !== null
        ? deserializeAws_restJson1AvailSuppression(output.AvailSuppression, context)
        : undefined,
    Bumper:
      output.Bumper !== undefined && output.Bumper !== null
        ? deserializeAws_restJson1Bumper(output.Bumper, context)
        : undefined,
    CdnConfiguration:
      output.CdnConfiguration !== undefined && output.CdnConfiguration !== null
        ? deserializeAws_restJson1CdnConfiguration(output.CdnConfiguration, context)
        : undefined,
    ConfigurationAliases:
      output.ConfigurationAliases !== undefined && output.ConfigurationAliases !== null
        ? deserializeAws_restJson1ConfigurationAliasesResponse(output.ConfigurationAliases, context)
        : undefined,
    DashConfiguration:
      output.DashConfiguration !== undefined && output.DashConfiguration !== null
        ? deserializeAws_restJson1DashConfiguration(output.DashConfiguration, context)
        : undefined,
    HlsConfiguration:
      output.HlsConfiguration !== undefined && output.HlsConfiguration !== null
        ? deserializeAws_restJson1HlsConfiguration(output.HlsConfiguration, context)
        : undefined,
    LivePreRollConfiguration:
      output.LivePreRollConfiguration !== undefined && output.LivePreRollConfiguration !== null
        ? deserializeAws_restJson1LivePreRollConfiguration(output.LivePreRollConfiguration, context)
        : undefined,
    ManifestProcessingRules:
      output.ManifestProcessingRules !== undefined && output.ManifestProcessingRules !== null
        ? deserializeAws_restJson1ManifestProcessingRules(output.ManifestProcessingRules, context)
        : undefined,
    Name: __expectString(output.Name),
    PersonalizationThresholdSeconds: __expectInt32(output.PersonalizationThresholdSeconds),
    PlaybackConfigurationArn: __expectString(output.PlaybackConfigurationArn),
    PlaybackEndpointPrefix: __expectString(output.PlaybackEndpointPrefix),
    SessionInitializationEndpointPrefix: __expectString(output.SessionInitializationEndpointPrefix),
    SlateAdUrl: __expectString(output.SlateAdUrl),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
    TranscodeProfileName: __expectString(output.TranscodeProfileName),
    VideoContentSourceUrl: __expectString(output.VideoContentSourceUrl),
  } as any;
};

const deserializeAws_restJson1ResponseOutputItem = (output: any, context: __SerdeContext): ResponseOutputItem => {
  return {
    DashPlaylistSettings:
      output.DashPlaylistSettings !== undefined && output.DashPlaylistSettings !== null
        ? deserializeAws_restJson1DashPlaylistSettings(output.DashPlaylistSettings, context)
        : undefined,
    HlsPlaylistSettings:
      output.HlsPlaylistSettings !== undefined && output.HlsPlaylistSettings !== null
        ? deserializeAws_restJson1HlsPlaylistSettings(output.HlsPlaylistSettings, context)
        : undefined,
    ManifestName: __expectString(output.ManifestName),
    PlaybackUrl: __expectString(output.PlaybackUrl),
    SourceGroup: __expectString(output.SourceGroup),
  } as any;
};

const deserializeAws_restJson1ResponseOutputs = (output: any, context: __SerdeContext): ResponseOutputItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseOutputItem(entry, context);
    });
};

const deserializeAws_restJson1ScheduleAdBreak = (output: any, context: __SerdeContext): ScheduleAdBreak => {
  return {
    ApproximateDurationSeconds: __expectLong(output.ApproximateDurationSeconds),
    ApproximateStartTime:
      output.ApproximateStartTime !== undefined && output.ApproximateStartTime !== null
        ? new Date(Math.round(output.ApproximateStartTime * 1000))
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
};

const deserializeAws_restJson1ScheduleEntry = (output: any, context: __SerdeContext): ScheduleEntry => {
  return {
    ApproximateDurationSeconds: __expectLong(output.ApproximateDurationSeconds),
    ApproximateStartTime:
      output.ApproximateStartTime !== undefined && output.ApproximateStartTime !== null
        ? new Date(Math.round(output.ApproximateStartTime * 1000))
        : undefined,
    Arn: __expectString(output.Arn),
    ChannelName: __expectString(output.ChannelName),
    ProgramName: __expectString(output.ProgramName),
    ScheduleAdBreaks:
      output.ScheduleAdBreaks !== undefined && output.ScheduleAdBreaks !== null
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

const deserializeAws_restJson1SlateSource = (output: any, context: __SerdeContext): SlateSource => {
  return {
    SourceLocationName: __expectString(output.SourceLocationName),
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
};

const deserializeAws_restJson1SourceLocation = (output: any, context: __SerdeContext): SourceLocation => {
  return {
    AccessConfiguration:
      output.AccessConfiguration !== undefined && output.AccessConfiguration !== null
        ? deserializeAws_restJson1AccessConfiguration(output.AccessConfiguration, context)
        : undefined,
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    DefaultSegmentDeliveryConfiguration:
      output.DefaultSegmentDeliveryConfiguration !== undefined && output.DefaultSegmentDeliveryConfiguration !== null
        ? deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(
            output.DefaultSegmentDeliveryConfiguration,
            context
          )
        : undefined,
    HttpConfiguration:
      output.HttpConfiguration !== undefined && output.HttpConfiguration !== null
        ? deserializeAws_restJson1HttpConfiguration(output.HttpConfiguration, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
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

const deserializeAws_restJson1VodSource = (output: any, context: __SerdeContext): VodSource => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    HttpPackageConfigurations:
      output.HttpPackageConfigurations !== undefined && output.HttpPackageConfigurations !== null
        ? deserializeAws_restJson1HttpPackageConfigurations(output.HttpPackageConfigurations, context)
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    SourceLocationName: __expectString(output.SourceLocationName),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
    VodSourceName: __expectString(output.VodSourceName),
  } as any;
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
