import {
  AccessType,
  AdMarkupType,
  AdsInteractionExcludeEventType,
  AdsInteractionPublishOptInEventType,
  AlertCategory,
  BadRequestException,
  ChannelState,
  CompressionMethod,
  ConfigureLogsForChannelCommand,
  ConfigureLogsForPlaybackConfigurationCommand,
  CreateChannelCommand,
  CreateLiveSourceCommand,
  CreatePrefetchScheduleCommand,
  CreateProgramCommand,
  CreateSourceLocationCommand,
  CreateVodSourceCommand,
  DeleteChannelCommand,
  DeleteChannelPolicyCommand,
  DeleteLiveSourceCommand,
  DeletePlaybackConfigurationCommand,
  DeletePrefetchScheduleCommand,
  DeleteProgramCommand,
  DeleteSourceLocationCommand,
  DeleteVodSourceCommand,
  DescribeChannelCommand,
  DescribeLiveSourceCommand,
  DescribeProgramCommand,
  DescribeSourceLocationCommand,
  DescribeVodSourceCommand,
  FillPolicy,
  GetChannelPolicyCommand,
  GetChannelScheduleCommand,
  GetPlaybackConfigurationCommand,
  GetPrefetchScheduleCommand,
  InsertionMode,
  ListAlertsCommand,
  ListChannelsCommand,
  ListLiveSourcesCommand,
  ListPlaybackConfigurationsCommand,
  ListPrefetchScheduleType,
  ListPrefetchSchedulesCommand,
  ListSourceLocationsCommand,
  ListTagsForResourceCommand,
  ListVodSourcesCommand,
  LogType,
  LoggingStrategy,
  ManifestServiceExcludeEventType,
  MediaTailor,
  MediaTailorClient,
  MediaTailorServiceException,
  MessageType,
  Method,
  Mode,
  Operator,
  OriginManifestType,
  PlaybackMode,
  PrefetchScheduleType,
  PutChannelPolicyCommand,
  PutPlaybackConfigurationCommand,
  RelativePosition,
  ScheduleEntryType,
  StartChannelCommand,
  StopChannelCommand,
  StreamingMediaFileConditioning,
  TagResourceCommand,
  Tier,
  TrafficShapingType,
  Type,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateLiveSourceCommand,
  UpdateProgramCommand,
  UpdateSourceLocationCommand,
  UpdateVodSourceCommand,
  paginateGetChannelSchedule,
  paginateListAlerts,
  paginateListChannels,
  paginateListLiveSources,
  paginateListPlaybackConfigurations,
  paginateListPrefetchSchedules,
  paginateListSourceLocations,
  paginateListVodSources,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaTailorClient === "function");
assert(typeof MediaTailor === "function");
// commands
assert(typeof ConfigureLogsForChannelCommand === "function");
assert(typeof ConfigureLogsForPlaybackConfigurationCommand === "function");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateLiveSourceCommand === "function");
assert(typeof CreatePrefetchScheduleCommand === "function");
assert(typeof CreateProgramCommand === "function");
assert(typeof CreateSourceLocationCommand === "function");
assert(typeof CreateVodSourceCommand === "function");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannelPolicyCommand === "function");
assert(typeof DeleteLiveSourceCommand === "function");
assert(typeof DeletePlaybackConfigurationCommand === "function");
assert(typeof DeletePrefetchScheduleCommand === "function");
assert(typeof DeleteProgramCommand === "function");
assert(typeof DeleteSourceLocationCommand === "function");
assert(typeof DeleteVodSourceCommand === "function");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeLiveSourceCommand === "function");
assert(typeof DescribeProgramCommand === "function");
assert(typeof DescribeSourceLocationCommand === "function");
assert(typeof DescribeVodSourceCommand === "function");
assert(typeof GetChannelPolicyCommand === "function");
assert(typeof GetChannelScheduleCommand === "function");
assert(typeof GetPlaybackConfigurationCommand === "function");
assert(typeof GetPrefetchScheduleCommand === "function");
assert(typeof ListAlertsCommand === "function");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListLiveSourcesCommand === "function");
assert(typeof ListPlaybackConfigurationsCommand === "function");
assert(typeof ListPrefetchSchedulesCommand === "function");
assert(typeof ListSourceLocationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVodSourcesCommand === "function");
assert(typeof PutChannelPolicyCommand === "function");
assert(typeof PutPlaybackConfigurationCommand === "function");
assert(typeof StartChannelCommand === "function");
assert(typeof StopChannelCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateLiveSourceCommand === "function");
assert(typeof UpdateProgramCommand === "function");
assert(typeof UpdateSourceLocationCommand === "function");
assert(typeof UpdateVodSourceCommand === "function");
// enums
assert(typeof AccessType === "object");
assert(typeof AdMarkupType === "object");
assert(typeof AdsInteractionExcludeEventType === "object");
assert(typeof AdsInteractionPublishOptInEventType === "object");
assert(typeof AlertCategory === "object");
assert(typeof ChannelState === "object");
assert(typeof CompressionMethod === "object");
assert(typeof FillPolicy === "object");
assert(typeof InsertionMode === "object");
assert(typeof ListPrefetchScheduleType === "object");
assert(typeof LoggingStrategy === "object");
assert(typeof LogType === "object");
assert(typeof ManifestServiceExcludeEventType === "object");
assert(typeof MessageType === "object");
assert(typeof Method === "object");
assert(typeof Mode === "object");
assert(typeof Operator === "object");
assert(typeof OriginManifestType === "object");
assert(typeof PlaybackMode === "object");
assert(typeof PrefetchScheduleType === "object");
assert(typeof RelativePosition === "object");
assert(typeof ScheduleEntryType === "object");
assert(typeof StreamingMediaFileConditioning === "object");
assert(typeof Tier === "object");
assert(typeof TrafficShapingType === "object");
assert(typeof Type === "object");
// errors
assert(BadRequestException.prototype instanceof MediaTailorServiceException);
assert(MediaTailorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetChannelSchedule === "function");
assert(typeof paginateListAlerts === "function");
assert(typeof paginateListChannels === "function");
assert(typeof paginateListLiveSources === "function");
assert(typeof paginateListPlaybackConfigurations === "function");
assert(typeof paginateListPrefetchSchedules === "function");
assert(typeof paginateListSourceLocations === "function");
assert(typeof paginateListVodSources === "function");
console.log(`MediaTailor index test passed.`);
