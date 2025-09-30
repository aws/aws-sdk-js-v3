// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AdConditioningConfiguration,
  AdMarkerPassthrough,
  AdMarkupType,
  AdsInteractionExcludeEventType,
  AdsInteractionLog,
  AdsInteractionPublishOptInEventType,
  Alert,
  AlternateMedia,
  AudienceMedia,
  AvailMatchingCriteria,
  AvailSuppression,
  BadRequestException,
  Bumper,
  CdnConfiguration,
  Channel,
  ClipRange,
  DashConfigurationForPut,
  DashPlaylistSettings,
  DefaultSegmentDeliveryConfiguration,
  HlsPlaylistSettings,
  HttpConfiguration,
  HttpPackageConfiguration,
  KeyValuePair,
  LivePreRollConfiguration,
  LiveSource,
  LoggingStrategy,
  LogType,
  ManifestProcessingRules,
  ManifestServiceExcludeEventType,
  ManifestServiceInteractionLog,
  PlaybackConfiguration,
  PrefetchConsumption,
  PrefetchRetrieval,
  PrefetchSchedule,
  RecurringConsumption,
  RecurringPrefetchConfiguration,
  RecurringRetrieval,
  RequestOutputItem,
  ScheduleAdBreak,
  ScheduleConfiguration,
  ScheduleEntry,
  SecretsManagerAccessTokenConfiguration,
  SegmentationDescriptor,
  SegmentDeliveryConfiguration,
  SlateSource,
  SourceLocation,
  SpliceInsertMessage,
  TimeShiftConfiguration,
  TimeSignalMessage,
  TrafficShapingRetrievalWindow,
  TrafficShapingTpsConfiguration,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configureLogs/channel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelName: [],
      LogTypes: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand
 */
export const se_ConfigureLogsForPlaybackConfigurationCommand = async (
  input: ConfigureLogsForPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configureLogs/playbackConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdsInteractionLog: (_) => _json(_),
      EnabledLoggingStrategies: (_) => _json(_),
      ManifestServiceInteractionLog: (_) => _json(_),
      PercentEnabled: [],
      PlaybackConfigurationName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channel/{ChannelName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Audiences: (_) => _json(_),
      FillerSlate: (_) => _json(_),
      Outputs: (_) => _json(_),
      PlaybackMode: [],
      tags: [, (_) => _json(_), `Tags`],
      Tier: [],
      TimeShiftConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLiveSourceCommand
 */
export const se_CreateLiveSourceCommand = async (
  input: CreateLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}");
  b.p("LiveSourceName", () => input.LiveSourceName!, "{LiveSourceName}", false);
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      HttpPackageConfigurations: (_) => _json(_),
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePrefetchScheduleCommand
 */
export const se_CreatePrefetchScheduleCommand = async (
  input: CreatePrefetchScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prefetchSchedule/{PlaybackConfigurationName}/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  b.p("PlaybackConfigurationName", () => input.PlaybackConfigurationName!, "{PlaybackConfigurationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Consumption: (_) => se_PrefetchConsumption(_, context),
      RecurringPrefetchConfiguration: (_) => se_RecurringPrefetchConfiguration(_, context),
      Retrieval: (_) => se_PrefetchRetrieval(_, context),
      ScheduleType: [],
      StreamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProgramCommand
 */
export const se_CreateProgramCommand = async (
  input: CreateProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channel/{ChannelName}/program/{ProgramName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("ProgramName", () => input.ProgramName!, "{ProgramName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdBreaks: (_) => _json(_),
      AudienceMedia: (_) => _json(_),
      LiveSourceName: [],
      ScheduleConfiguration: (_) => _json(_),
      SourceLocationName: [],
      VodSourceName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSourceLocationCommand
 */
export const se_CreateSourceLocationCommand = async (
  input: CreateSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sourceLocation/{SourceLocationName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccessConfiguration: (_) => _json(_),
      DefaultSegmentDeliveryConfiguration: (_) => _json(_),
      HttpConfiguration: (_) => _json(_),
      SegmentDeliveryConfigurations: (_) => _json(_),
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVodSourceCommand
 */
export const se_CreateVodSourceCommand = async (
  input: CreateVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  b.p("VodSourceName", () => input.VodSourceName!, "{VodSourceName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      HttpPackageConfigurations: (_) => _json(_),
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelPolicyCommand
 */
export const se_DeleteChannelPolicyCommand = async (
  input: DeleteChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}/policy");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLiveSourceCommand
 */
export const se_DeleteLiveSourceCommand = async (
  input: DeleteLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}");
  b.p("LiveSourceName", () => input.LiveSourceName!, "{LiveSourceName}", false);
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePlaybackConfigurationCommand
 */
export const se_DeletePlaybackConfigurationCommand = async (
  input: DeletePlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/playbackConfiguration/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePrefetchScheduleCommand
 */
export const se_DeletePrefetchScheduleCommand = async (
  input: DeletePrefetchScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prefetchSchedule/{PlaybackConfigurationName}/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  b.p("PlaybackConfigurationName", () => input.PlaybackConfigurationName!, "{PlaybackConfigurationName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProgramCommand
 */
export const se_DeleteProgramCommand = async (
  input: DeleteProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}/program/{ProgramName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("ProgramName", () => input.ProgramName!, "{ProgramName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSourceLocationCommand
 */
export const se_DeleteSourceLocationCommand = async (
  input: DeleteSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVodSourceCommand
 */
export const se_DeleteVodSourceCommand = async (
  input: DeleteVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  b.p("VodSourceName", () => input.VodSourceName!, "{VodSourceName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeLiveSourceCommand
 */
export const se_DescribeLiveSourceCommand = async (
  input: DescribeLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}");
  b.p("LiveSourceName", () => input.LiveSourceName!, "{LiveSourceName}", false);
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeProgramCommand
 */
export const se_DescribeProgramCommand = async (
  input: DescribeProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}/program/{ProgramName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("ProgramName", () => input.ProgramName!, "{ProgramName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSourceLocationCommand
 */
export const se_DescribeSourceLocationCommand = async (
  input: DescribeSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeVodSourceCommand
 */
export const se_DescribeVodSourceCommand = async (
  input: DescribeVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  b.p("VodSourceName", () => input.VodSourceName!, "{VodSourceName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelPolicyCommand
 */
export const se_GetChannelPolicyCommand = async (
  input: GetChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}/policy");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelScheduleCommand
 */
export const se_GetChannelScheduleCommand = async (
  input: GetChannelScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}/schedule");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  const query: any = map({
    [_dM]: [, input[_DM]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_a]: [, input[_A]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPlaybackConfigurationCommand
 */
export const se_GetPlaybackConfigurationCommand = async (
  input: GetPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/playbackConfiguration/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPrefetchScheduleCommand
 */
export const se_GetPrefetchScheduleCommand = async (
  input: GetPrefetchScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prefetchSchedule/{PlaybackConfigurationName}/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  b.p("PlaybackConfigurationName", () => input.PlaybackConfigurationName!, "{PlaybackConfigurationName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAlertsCommand
 */
export const se_ListAlertsCommand = async (
  input: ListAlertsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/alerts");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_rA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channels");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLiveSourcesCommand
 */
export const se_ListLiveSourcesCommand = async (
  input: ListLiveSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}/liveSources");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPlaybackConfigurationsCommand
 */
export const se_ListPlaybackConfigurationsCommand = async (
  input: ListPlaybackConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/playbackConfigurations");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPrefetchSchedulesCommand
 */
export const se_ListPrefetchSchedulesCommand = async (
  input: ListPrefetchSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prefetchSchedule/{PlaybackConfigurationName}");
  b.p("PlaybackConfigurationName", () => input.PlaybackConfigurationName!, "{PlaybackConfigurationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ScheduleType: [],
      StreamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSourceLocationsCommand
 */
export const se_ListSourceLocationsCommand = async (
  input: ListSourceLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocations");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVodSourcesCommand
 */
export const se_ListVodSourcesCommand = async (
  input: ListVodSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sourceLocation/{SourceLocationName}/vodSources");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutChannelPolicyCommand
 */
export const se_PutChannelPolicyCommand = async (
  input: PutChannelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channel/{ChannelName}/policy");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutPlaybackConfigurationCommand
 */
export const se_PutPlaybackConfigurationCommand = async (
  input: PutPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/playbackConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdConditioningConfiguration: (_) => _json(_),
      AdDecisionServerUrl: [],
      AvailSuppression: (_) => _json(_),
      Bumper: (_) => _json(_),
      CdnConfiguration: (_) => _json(_),
      ConfigurationAliases: (_) => _json(_),
      DashConfiguration: (_) => _json(_),
      InsertionMode: [],
      LivePreRollConfiguration: (_) => _json(_),
      ManifestProcessingRules: (_) => _json(_),
      Name: [],
      PersonalizationThresholdSeconds: [],
      SlateAdUrl: [],
      tags: [, (_) => _json(_), `Tags`],
      TranscodeProfileName: [],
      VideoContentSourceUrl: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartChannelCommand
 */
export const se_StartChannelCommand = async (
  input: StartChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}/start");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopChannelCommand
 */
export const se_StopChannelCommand = async (
  input: StopChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channel/{ChannelName}/stop");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channel/{ChannelName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Audiences: (_) => _json(_),
      FillerSlate: (_) => _json(_),
      Outputs: (_) => _json(_),
      TimeShiftConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLiveSourceCommand
 */
export const se_UpdateLiveSourceCommand = async (
  input: UpdateLiveSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sourceLocation/{SourceLocationName}/liveSource/{LiveSourceName}");
  b.p("LiveSourceName", () => input.LiveSourceName!, "{LiveSourceName}", false);
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      HttpPackageConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProgramCommand
 */
export const se_UpdateProgramCommand = async (
  input: UpdateProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channel/{ChannelName}/program/{ProgramName}");
  b.p("ChannelName", () => input.ChannelName!, "{ChannelName}", false);
  b.p("ProgramName", () => input.ProgramName!, "{ProgramName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdBreaks: (_) => _json(_),
      AudienceMedia: (_) => _json(_),
      ScheduleConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSourceLocationCommand
 */
export const se_UpdateSourceLocationCommand = async (
  input: UpdateSourceLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sourceLocation/{SourceLocationName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccessConfiguration: (_) => _json(_),
      DefaultSegmentDeliveryConfiguration: (_) => _json(_),
      HttpConfiguration: (_) => _json(_),
      SegmentDeliveryConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVodSourceCommand
 */
export const se_UpdateVodSourceCommand = async (
  input: UpdateVodSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}");
  b.p("SourceLocationName", () => input.SourceLocationName!, "{SourceLocationName}", false);
  b.p("VodSourceName", () => input.VodSourceName!, "{VodSourceName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      HttpPackageConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1ConfigureLogsForChannelCommand
 */
export const de_ConfigureLogsForChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelName: __expectString,
    LogTypes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ConfigureLogsForPlaybackConfigurationCommand
 */
export const de_ConfigureLogsForPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdsInteractionLog: _json,
    EnabledLoggingStrategies: _json,
    ManifestServiceInteractionLog: _json,
    PercentEnabled: __expectInt32,
    PlaybackConfigurationName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Audiences: _json,
    ChannelName: __expectString,
    ChannelState: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FillerSlate: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Outputs: _json,
    PlaybackMode: __expectString,
    Tags: [, _json, `tags`],
    Tier: __expectString,
    TimeShiftConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLiveSourceCommand
 */
export const de_CreateLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LiveSourceName: __expectString,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePrefetchScheduleCommand
 */
export const de_CreatePrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Consumption: (_) => de_PrefetchConsumption(_, context),
    Name: __expectString,
    PlaybackConfigurationName: __expectString,
    RecurringPrefetchConfiguration: (_) => de_RecurringPrefetchConfiguration(_, context),
    Retrieval: (_) => de_PrefetchRetrieval(_, context),
    ScheduleType: __expectString,
    StreamId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProgramCommand
 */
export const de_CreateProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdBreaks: _json,
    Arn: __expectString,
    AudienceMedia: _json,
    ChannelName: __expectString,
    ClipRange: _json,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DurationMillis: __expectLong,
    LiveSourceName: __expectString,
    ProgramName: __expectString,
    ScheduledStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    VodSourceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSourceLocationCommand
 */
export const de_CreateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessConfiguration: _json,
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultSegmentDeliveryConfiguration: _json,
    HttpConfiguration: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SegmentDeliveryConfigurations: _json,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVodSourceCommand
 */
export const de_CreateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
    VodSourceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelPolicyCommand
 */
export const de_DeleteChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelPolicyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteLiveSourceCommand
 */
export const de_DeleteLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLiveSourceCommandOutput> => {
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
 * deserializeAws_restJson1DeletePlaybackConfigurationCommand
 */
export const de_DeletePlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePrefetchScheduleCommand
 */
export const de_DeletePrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProgramCommand
 */
export const de_DeleteProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgramCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSourceLocationCommand
 */
export const de_DeleteSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSourceLocationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVodSourceCommand
 */
export const de_DeleteVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVodSourceCommandOutput> => {
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
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Audiences: _json,
    ChannelName: __expectString,
    ChannelState: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FillerSlate: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogConfiguration: _json,
    Outputs: _json,
    PlaybackMode: __expectString,
    Tags: [, _json, `tags`],
    Tier: __expectString,
    TimeShiftConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLiveSourceCommand
 */
export const de_DescribeLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LiveSourceName: __expectString,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProgramCommand
 */
export const de_DescribeProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdBreaks: _json,
    Arn: __expectString,
    AudienceMedia: _json,
    ChannelName: __expectString,
    ClipRange: _json,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DurationMillis: __expectLong,
    LiveSourceName: __expectString,
    ProgramName: __expectString,
    ScheduledStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    VodSourceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSourceLocationCommand
 */
export const de_DescribeSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessConfiguration: _json,
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultSegmentDeliveryConfiguration: _json,
    HttpConfiguration: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SegmentDeliveryConfigurations: _json,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVodSourceCommand
 */
export const de_DescribeVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdBreakOpportunities: _json,
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
    VodSourceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelPolicyCommand
 */
export const de_GetChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelScheduleCommand
 */
export const de_GetChannelScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfScheduleEntry(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPlaybackConfigurationCommand
 */
export const de_GetPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdConditioningConfiguration: _json,
    AdDecisionServerUrl: __expectString,
    AvailSuppression: _json,
    Bumper: _json,
    CdnConfiguration: _json,
    ConfigurationAliases: _json,
    DashConfiguration: _json,
    HlsConfiguration: _json,
    InsertionMode: __expectString,
    LivePreRollConfiguration: _json,
    LogConfiguration: _json,
    ManifestProcessingRules: _json,
    Name: __expectString,
    PersonalizationThresholdSeconds: __expectInt32,
    PlaybackConfigurationArn: __expectString,
    PlaybackEndpointPrefix: __expectString,
    SessionInitializationEndpointPrefix: __expectString,
    SlateAdUrl: __expectString,
    Tags: [, _json, `tags`],
    TranscodeProfileName: __expectString,
    VideoContentSourceUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPrefetchScheduleCommand
 */
export const de_GetPrefetchScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrefetchScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Consumption: (_) => de_PrefetchConsumption(_, context),
    Name: __expectString,
    PlaybackConfigurationName: __expectString,
    RecurringPrefetchConfiguration: (_) => de_RecurringPrefetchConfiguration(_, context),
    Retrieval: (_) => de_PrefetchRetrieval(_, context),
    ScheduleType: __expectString,
    StreamId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAlertsCommand
 */
export const de_ListAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfAlert(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfChannel(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLiveSourcesCommand
 */
export const de_ListLiveSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLiveSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfLiveSource(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPlaybackConfigurationsCommand
 */
export const de_ListPlaybackConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfPlaybackConfiguration(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPrefetchSchedulesCommand
 */
export const de_ListPrefetchSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrefetchSchedulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfPrefetchSchedule(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceLocationsCommand
 */
export const de_ListSourceLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceLocationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfSourceLocation(_, context),
    NextToken: __expectString,
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
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVodSourcesCommand
 */
export const de_ListVodSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVodSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de___listOfVodSource(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutChannelPolicyCommand
 */
export const de_PutChannelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutChannelPolicyCommandOutput> => {
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
 * deserializeAws_restJson1PutPlaybackConfigurationCommand
 */
export const de_PutPlaybackConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdConditioningConfiguration: _json,
    AdDecisionServerUrl: __expectString,
    AvailSuppression: _json,
    Bumper: _json,
    CdnConfiguration: _json,
    ConfigurationAliases: _json,
    DashConfiguration: _json,
    HlsConfiguration: _json,
    InsertionMode: __expectString,
    LivePreRollConfiguration: _json,
    LogConfiguration: _json,
    ManifestProcessingRules: _json,
    Name: __expectString,
    PersonalizationThresholdSeconds: __expectInt32,
    PlaybackConfigurationArn: __expectString,
    PlaybackEndpointPrefix: __expectString,
    SessionInitializationEndpointPrefix: __expectString,
    SlateAdUrl: __expectString,
    Tags: [, _json, `tags`],
    TranscodeProfileName: __expectString,
    VideoContentSourceUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartChannelCommand
 */
export const de_StartChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
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
 * deserializeAws_restJson1StopChannelCommand
 */
export const de_StopChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Audiences: _json,
    ChannelName: __expectString,
    ChannelState: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FillerSlate: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Outputs: _json,
    PlaybackMode: __expectString,
    Tags: [, _json, `tags`],
    Tier: __expectString,
    TimeShiftConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLiveSourceCommand
 */
export const de_UpdateLiveSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLiveSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LiveSourceName: __expectString,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProgramCommand
 */
export const de_UpdateProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdBreaks: _json,
    Arn: __expectString,
    AudienceMedia: _json,
    ChannelName: __expectString,
    ClipRange: _json,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DurationMillis: __expectLong,
    LiveSourceName: __expectString,
    ProgramName: __expectString,
    ScheduledStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    VodSourceName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSourceLocationCommand
 */
export const de_UpdateSourceLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessConfiguration: _json,
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultSegmentDeliveryConfiguration: _json,
    HttpConfiguration: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SegmentDeliveryConfigurations: _json,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVodSourceCommand
 */
export const de_UpdateVodSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVodSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
    VodSourceName: __expectString,
  });
  Object.assign(contents, doc);
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___adsInteractionExcludeEventTypesList omitted.

// se___adsInteractionPublishOptInEventTypesList omitted.

// se___listOfAdBreak omitted.

// se___listOfAlternateMedia omitted.

// se___listOfAudienceMedia omitted.

// se___listOfAvailMatchingCriteria omitted.

// se___listOfLoggingStrategies omitted.

// se___listOfSegmentDeliveryConfiguration omitted.

// se___manifestServiceExcludeEventTypesList omitted.

// se___mapOf__string omitted.

// se_AccessConfiguration omitted.

// se_AdBreak omitted.

// se_AdBreakMetadataList omitted.

// se_AdConditioningConfiguration omitted.

// se_AdMarkerPassthrough omitted.

// se_adMarkupTypes omitted.

// se_AdsInteractionLog omitted.

// se_AlternateMedia omitted.

// se_AudienceMedia omitted.

// se_Audiences omitted.

// se_AvailMatchingCriteria omitted.

// se_AvailSuppression omitted.

// se_Bumper omitted.

// se_CdnConfiguration omitted.

// se_ClipRange omitted.

// se_ConfigurationAliasesRequest omitted.

// se_DashConfigurationForPut omitted.

// se_DashPlaylistSettings omitted.

// se_DefaultSegmentDeliveryConfiguration omitted.

// se_HlsPlaylistSettings omitted.

// se_HttpConfiguration omitted.

// se_HttpPackageConfiguration omitted.

// se_HttpPackageConfigurations omitted.

// se_KeyValuePair omitted.

// se_LivePreRollConfiguration omitted.

// se_LogTypes omitted.

// se_ManifestProcessingRules omitted.

// se_ManifestServiceInteractionLog omitted.

/**
 * serializeAws_restJson1PrefetchConsumption
 */
const se_PrefetchConsumption = (input: PrefetchConsumption, context: __SerdeContext): any => {
  return take(input, {
    AvailMatchingCriteria: _json,
    EndTime: (_) => _.getTime() / 1_000,
    StartTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1PrefetchRetrieval
 */
const se_PrefetchRetrieval = (input: PrefetchRetrieval, context: __SerdeContext): any => {
  return take(input, {
    DynamicVariables: _json,
    EndTime: (_) => _.getTime() / 1_000,
    StartTime: (_) => _.getTime() / 1_000,
    TrafficShapingRetrievalWindow: _json,
    TrafficShapingTpsConfiguration: _json,
    TrafficShapingType: [],
  });
};

// se_RecurringConsumption omitted.

/**
 * serializeAws_restJson1RecurringPrefetchConfiguration
 */
const se_RecurringPrefetchConfiguration = (input: RecurringPrefetchConfiguration, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    RecurringConsumption: _json,
    RecurringRetrieval: _json,
    StartTime: (_) => _.getTime() / 1_000,
  });
};

// se_RecurringRetrieval omitted.

// se_RequestOutputItem omitted.

// se_RequestOutputs omitted.

// se_ScheduleConfiguration omitted.

// se_SecretsManagerAccessTokenConfiguration omitted.

// se_SegmentationDescriptor omitted.

// se_SegmentationDescriptorList omitted.

// se_SegmentDeliveryConfiguration omitted.

// se_SlateSource omitted.

// se_SpliceInsertMessage omitted.

// se_TimeShiftConfiguration omitted.

// se_TimeSignalMessage omitted.

// se_TrafficShapingRetrievalWindow omitted.

// se_TrafficShapingTpsConfiguration omitted.

// se_Transition omitted.

// se_UpdateProgramScheduleConfiguration omitted.

// se_UpdateProgramTransition omitted.

// de___adsInteractionExcludeEventTypesList omitted.

// de___adsInteractionPublishOptInEventTypesList omitted.

// de___listOf__string omitted.

// de___listOfAdBreak omitted.

/**
 * deserializeAws_restJson1__listOfAlert
 */
const de___listOfAlert = (output: any, context: __SerdeContext): Alert[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Alert(entry, context);
    });
  return retVal;
};

// de___listOfAlternateMedia omitted.

// de___listOfAudienceMedia omitted.

// de___listOfAvailMatchingCriteria omitted.

/**
 * deserializeAws_restJson1__listOfChannel
 */
const de___listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_LiveSource(entry, context);
    });
  return retVal;
};

// de___listOfLoggingStrategies omitted.

/**
 * deserializeAws_restJson1__listOfPlaybackConfiguration
 */
const de___listOfPlaybackConfiguration = (output: any, context: __SerdeContext): PlaybackConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_ScheduleEntry(entry, context);
    });
  return retVal;
};

// de___listOfSegmentDeliveryConfiguration omitted.

/**
 * deserializeAws_restJson1__listOfSourceLocation
 */
const de___listOfSourceLocation = (output: any, context: __SerdeContext): SourceLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_VodSource(entry, context);
    });
  return retVal;
};

// de___manifestServiceExcludeEventTypesList omitted.

// de___mapOf__string omitted.

// de_AccessConfiguration omitted.

// de_AdBreak omitted.

// de_AdBreakMetadataList omitted.

// de_AdBreakOpportunities omitted.

// de_AdBreakOpportunity omitted.

// de_AdConditioningConfiguration omitted.

// de_AdMarkerPassthrough omitted.

// de_adMarkupTypes omitted.

// de_AdsInteractionLog omitted.

/**
 * deserializeAws_restJson1Alert
 */
const de_Alert = (output: any, context: __SerdeContext): Alert => {
  return take(output, {
    AlertCode: __expectString,
    AlertMessage: __expectString,
    Category: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RelatedResourceArns: _json,
    ResourceArn: __expectString,
  }) as any;
};

// de_AlternateMedia omitted.

// de_AudienceMedia omitted.

// de_Audiences omitted.

// de_AvailMatchingCriteria omitted.

// de_AvailSuppression omitted.

// de_Bumper omitted.

// de_CdnConfiguration omitted.

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return take(output, {
    Arn: __expectString,
    Audiences: _json,
    ChannelName: __expectString,
    ChannelState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FillerSlate: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogConfiguration: _json,
    Outputs: _json,
    PlaybackMode: __expectString,
    Tags: [, _json, `tags`],
    Tier: __expectString,
  }) as any;
};

// de_ClipRange omitted.

// de_ConfigurationAliasesResponse omitted.

// de_DashConfiguration omitted.

// de_DashPlaylistSettings omitted.

// de_DefaultSegmentDeliveryConfiguration omitted.

// de_HlsConfiguration omitted.

// de_HlsPlaylistSettings omitted.

// de_HttpConfiguration omitted.

// de_HttpPackageConfiguration omitted.

// de_HttpPackageConfigurations omitted.

// de_KeyValuePair omitted.

// de_LivePreRollConfiguration omitted.

/**
 * deserializeAws_restJson1LiveSource
 */
const de_LiveSource = (output: any, context: __SerdeContext): LiveSource => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LiveSourceName: __expectString,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  }) as any;
};

// de_LogConfiguration omitted.

// de_LogConfigurationForChannel omitted.

// de_LogTypes omitted.

// de_ManifestProcessingRules omitted.

// de_ManifestServiceInteractionLog omitted.

/**
 * deserializeAws_restJson1PlaybackConfiguration
 */
const de_PlaybackConfiguration = (output: any, context: __SerdeContext): PlaybackConfiguration => {
  return take(output, {
    AdConditioningConfiguration: _json,
    AdDecisionServerUrl: __expectString,
    AvailSuppression: _json,
    Bumper: _json,
    CdnConfiguration: _json,
    ConfigurationAliases: _json,
    DashConfiguration: _json,
    HlsConfiguration: _json,
    InsertionMode: __expectString,
    LivePreRollConfiguration: _json,
    LogConfiguration: _json,
    ManifestProcessingRules: _json,
    Name: __expectString,
    PersonalizationThresholdSeconds: __expectInt32,
    PlaybackConfigurationArn: __expectString,
    PlaybackEndpointPrefix: __expectString,
    SessionInitializationEndpointPrefix: __expectString,
    SlateAdUrl: __expectString,
    Tags: [, _json, `tags`],
    TranscodeProfileName: __expectString,
    VideoContentSourceUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PrefetchConsumption
 */
const de_PrefetchConsumption = (output: any, context: __SerdeContext): PrefetchConsumption => {
  return take(output, {
    AvailMatchingCriteria: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1PrefetchRetrieval
 */
const de_PrefetchRetrieval = (output: any, context: __SerdeContext): PrefetchRetrieval => {
  return take(output, {
    DynamicVariables: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrafficShapingRetrievalWindow: _json,
    TrafficShapingTpsConfiguration: _json,
    TrafficShapingType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PrefetchSchedule
 */
const de_PrefetchSchedule = (output: any, context: __SerdeContext): PrefetchSchedule => {
  return take(output, {
    Arn: __expectString,
    Consumption: (_: any) => de_PrefetchConsumption(_, context),
    Name: __expectString,
    PlaybackConfigurationName: __expectString,
    RecurringPrefetchConfiguration: (_: any) => de_RecurringPrefetchConfiguration(_, context),
    Retrieval: (_: any) => de_PrefetchRetrieval(_, context),
    ScheduleType: __expectString,
    StreamId: __expectString,
  }) as any;
};

// de_RecurringConsumption omitted.

/**
 * deserializeAws_restJson1RecurringPrefetchConfiguration
 */
const de_RecurringPrefetchConfiguration = (output: any, context: __SerdeContext): RecurringPrefetchConfiguration => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RecurringConsumption: _json,
    RecurringRetrieval: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_RecurringRetrieval omitted.

// de_ResponseOutputItem omitted.

// de_ResponseOutputs omitted.

/**
 * deserializeAws_restJson1ScheduleAdBreak
 */
const de_ScheduleAdBreak = (output: any, context: __SerdeContext): ScheduleAdBreak => {
  return take(output, {
    ApproximateDurationSeconds: __expectLong,
    ApproximateStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    VodSourceName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ScheduleEntry
 */
const de_ScheduleEntry = (output: any, context: __SerdeContext): ScheduleEntry => {
  return take(output, {
    ApproximateDurationSeconds: __expectLong,
    ApproximateStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Arn: __expectString,
    Audiences: _json,
    ChannelName: __expectString,
    LiveSourceName: __expectString,
    ProgramName: __expectString,
    ScheduleAdBreaks: (_: any) => de___listOfScheduleAdBreak(_, context),
    ScheduleEntryType: __expectString,
    SourceLocationName: __expectString,
    VodSourceName: __expectString,
  }) as any;
};

// de_SecretsManagerAccessTokenConfiguration omitted.

// de_SegmentationDescriptor omitted.

// de_SegmentationDescriptorList omitted.

// de_SegmentDeliveryConfiguration omitted.

// de_SlateSource omitted.

/**
 * deserializeAws_restJson1SourceLocation
 */
const de_SourceLocation = (output: any, context: __SerdeContext): SourceLocation => {
  return take(output, {
    AccessConfiguration: _json,
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultSegmentDeliveryConfiguration: _json,
    HttpConfiguration: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SegmentDeliveryConfigurations: _json,
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
  }) as any;
};

// de_SpliceInsertMessage omitted.

// de_TimeShiftConfiguration omitted.

// de_TimeSignalMessage omitted.

// de_TrafficShapingRetrievalWindow omitted.

// de_TrafficShapingTpsConfiguration omitted.

/**
 * deserializeAws_restJson1VodSource
 */
const de_VodSource = (output: any, context: __SerdeContext): VodSource => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpPackageConfigurations: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceLocationName: __expectString,
    Tags: [, _json, `tags`],
    VodSourceName: __expectString,
  }) as any;
};

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

const _A = "Audience";
const _DM = "DurationMinutes";
const _MR = "MaxResults";
const _NT = "NextToken";
const _RA = "ResourceArn";
const _TK = "TagKeys";
const _a = "audience";
const _dM = "durationMinutes";
const _mR = "maxResults";
const _nT = "nextToken";
const _rA = "resourceArn";
const _tK = "tagKeys";
