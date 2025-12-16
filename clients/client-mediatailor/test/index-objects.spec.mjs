import {
  AccessConfiguration$,
  AccessType,
  AdBreak$,
  AdBreakOpportunity$,
  AdConditioningConfiguration$,
  AdDecisionServerConfiguration$,
  AdMarkerPassthrough$,
  AdMarkupType,
  AdsInteractionExcludeEventType,
  AdsInteractionLog$,
  AdsInteractionPublishOptInEventType,
  Alert$,
  AlertCategory,
  AlternateMedia$,
  AudienceMedia$,
  AvailMatchingCriteria$,
  AvailSuppression$,
  BadRequestException,
  BadRequestException$,
  Bumper$,
  CdnConfiguration$,
  Channel$,
  ChannelState,
  ClipRange$,
  CompressionMethod,
  ConfigureLogsForChannel$,
  ConfigureLogsForChannelCommand,
  ConfigureLogsForChannelRequest$,
  ConfigureLogsForChannelResponse$,
  ConfigureLogsForPlaybackConfiguration$,
  ConfigureLogsForPlaybackConfigurationCommand,
  ConfigureLogsForPlaybackConfigurationRequest$,
  ConfigureLogsForPlaybackConfigurationResponse$,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelRequest$,
  CreateChannelResponse$,
  CreateLiveSource$,
  CreateLiveSourceCommand,
  CreateLiveSourceRequest$,
  CreateLiveSourceResponse$,
  CreatePrefetchSchedule$,
  CreatePrefetchScheduleCommand,
  CreatePrefetchScheduleRequest$,
  CreatePrefetchScheduleResponse$,
  CreateProgram$,
  CreateProgramCommand,
  CreateProgramRequest$,
  CreateProgramResponse$,
  CreateSourceLocation$,
  CreateSourceLocationCommand,
  CreateSourceLocationRequest$,
  CreateSourceLocationResponse$,
  CreateVodSource$,
  CreateVodSourceCommand,
  CreateVodSourceRequest$,
  CreateVodSourceResponse$,
  DashConfiguration$,
  DashConfigurationForPut$,
  DashPlaylistSettings$,
  DefaultSegmentDeliveryConfiguration$,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelPolicy$,
  DeleteChannelPolicyCommand,
  DeleteChannelPolicyRequest$,
  DeleteChannelPolicyResponse$,
  DeleteChannelRequest$,
  DeleteChannelResponse$,
  DeleteLiveSource$,
  DeleteLiveSourceCommand,
  DeleteLiveSourceRequest$,
  DeleteLiveSourceResponse$,
  DeletePlaybackConfiguration$,
  DeletePlaybackConfigurationCommand,
  DeletePlaybackConfigurationRequest$,
  DeletePlaybackConfigurationResponse$,
  DeletePrefetchSchedule$,
  DeletePrefetchScheduleCommand,
  DeletePrefetchScheduleRequest$,
  DeletePrefetchScheduleResponse$,
  DeleteProgram$,
  DeleteProgramCommand,
  DeleteProgramRequest$,
  DeleteProgramResponse$,
  DeleteSourceLocation$,
  DeleteSourceLocationCommand,
  DeleteSourceLocationRequest$,
  DeleteSourceLocationResponse$,
  DeleteVodSource$,
  DeleteVodSourceCommand,
  DeleteVodSourceRequest$,
  DeleteVodSourceResponse$,
  DescribeChannel$,
  DescribeChannelCommand,
  DescribeChannelRequest$,
  DescribeChannelResponse$,
  DescribeLiveSource$,
  DescribeLiveSourceCommand,
  DescribeLiveSourceRequest$,
  DescribeLiveSourceResponse$,
  DescribeProgram$,
  DescribeProgramCommand,
  DescribeProgramRequest$,
  DescribeProgramResponse$,
  DescribeSourceLocation$,
  DescribeSourceLocationCommand,
  DescribeSourceLocationRequest$,
  DescribeSourceLocationResponse$,
  DescribeVodSource$,
  DescribeVodSourceCommand,
  DescribeVodSourceRequest$,
  DescribeVodSourceResponse$,
  FillPolicy,
  GetChannelPolicy$,
  GetChannelPolicyCommand,
  GetChannelPolicyRequest$,
  GetChannelPolicyResponse$,
  GetChannelSchedule$,
  GetChannelScheduleCommand,
  GetChannelScheduleRequest$,
  GetChannelScheduleResponse$,
  GetPlaybackConfiguration$,
  GetPlaybackConfigurationCommand,
  GetPlaybackConfigurationRequest$,
  GetPlaybackConfigurationResponse$,
  GetPrefetchSchedule$,
  GetPrefetchScheduleCommand,
  GetPrefetchScheduleRequest$,
  GetPrefetchScheduleResponse$,
  HlsConfiguration$,
  HlsPlaylistSettings$,
  HttpConfiguration$,
  HttpPackageConfiguration$,
  HttpRequest$,
  InsertionMode,
  KeyValuePair$,
  ListAlerts$,
  ListAlertsCommand,
  ListAlertsRequest$,
  ListAlertsResponse$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListLiveSources$,
  ListLiveSourcesCommand,
  ListLiveSourcesRequest$,
  ListLiveSourcesResponse$,
  ListPlaybackConfigurations$,
  ListPlaybackConfigurationsCommand,
  ListPlaybackConfigurationsRequest$,
  ListPlaybackConfigurationsResponse$,
  ListPrefetchScheduleType,
  ListPrefetchSchedules$,
  ListPrefetchSchedulesCommand,
  ListPrefetchSchedulesRequest$,
  ListPrefetchSchedulesResponse$,
  ListSourceLocations$,
  ListSourceLocationsCommand,
  ListSourceLocationsRequest$,
  ListSourceLocationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVodSources$,
  ListVodSourcesCommand,
  ListVodSourcesRequest$,
  ListVodSourcesResponse$,
  LivePreRollConfiguration$,
  LiveSource$,
  LogConfiguration$,
  LogConfigurationForChannel$,
  LogType,
  LoggingStrategy,
  ManifestProcessingRules$,
  ManifestServiceExcludeEventType,
  ManifestServiceInteractionLog$,
  MediaTailor,
  MediaTailorClient,
  MediaTailorServiceException,
  MessageType,
  Method,
  Mode,
  Operator,
  OriginManifestType,
  PlaybackConfiguration$,
  PlaybackMode,
  PrefetchConsumption$,
  PrefetchRetrieval$,
  PrefetchSchedule$,
  PrefetchScheduleType,
  PutChannelPolicy$,
  PutChannelPolicyCommand,
  PutChannelPolicyRequest$,
  PutChannelPolicyResponse$,
  PutPlaybackConfiguration$,
  PutPlaybackConfigurationCommand,
  PutPlaybackConfigurationRequest$,
  PutPlaybackConfigurationResponse$,
  RecurringConsumption$,
  RecurringPrefetchConfiguration$,
  RecurringRetrieval$,
  RelativePosition,
  RequestOutputItem$,
  ResponseOutputItem$,
  ScheduleAdBreak$,
  ScheduleConfiguration$,
  ScheduleEntry$,
  ScheduleEntryType,
  SecretsManagerAccessTokenConfiguration$,
  SegmentDeliveryConfiguration$,
  SegmentationDescriptor$,
  SlateSource$,
  SourceLocation$,
  SpliceInsertMessage$,
  StartChannel$,
  StartChannelCommand,
  StartChannelRequest$,
  StartChannelResponse$,
  StopChannel$,
  StopChannelCommand,
  StopChannelRequest$,
  StopChannelResponse$,
  StreamingMediaFileConditioning,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Tier,
  TimeShiftConfiguration$,
  TimeSignalMessage$,
  TrafficShapingRetrievalWindow$,
  TrafficShapingTpsConfiguration$,
  TrafficShapingType,
  Transition$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelRequest$,
  UpdateChannelResponse$,
  UpdateLiveSource$,
  UpdateLiveSourceCommand,
  UpdateLiveSourceRequest$,
  UpdateLiveSourceResponse$,
  UpdateProgram$,
  UpdateProgramCommand,
  UpdateProgramRequest$,
  UpdateProgramResponse$,
  UpdateProgramScheduleConfiguration$,
  UpdateProgramTransition$,
  UpdateSourceLocation$,
  UpdateSourceLocationCommand,
  UpdateSourceLocationRequest$,
  UpdateSourceLocationResponse$,
  UpdateVodSource$,
  UpdateVodSourceCommand,
  UpdateVodSourceRequest$,
  UpdateVodSourceResponse$,
  VodSource$,
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
assert(typeof ConfigureLogsForChannel$ === "object");
assert(typeof ConfigureLogsForPlaybackConfigurationCommand === "function");
assert(typeof ConfigureLogsForPlaybackConfiguration$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateLiveSourceCommand === "function");
assert(typeof CreateLiveSource$ === "object");
assert(typeof CreatePrefetchScheduleCommand === "function");
assert(typeof CreatePrefetchSchedule$ === "object");
assert(typeof CreateProgramCommand === "function");
assert(typeof CreateProgram$ === "object");
assert(typeof CreateSourceLocationCommand === "function");
assert(typeof CreateSourceLocation$ === "object");
assert(typeof CreateVodSourceCommand === "function");
assert(typeof CreateVodSource$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteChannelPolicyCommand === "function");
assert(typeof DeleteChannelPolicy$ === "object");
assert(typeof DeleteLiveSourceCommand === "function");
assert(typeof DeleteLiveSource$ === "object");
assert(typeof DeletePlaybackConfigurationCommand === "function");
assert(typeof DeletePlaybackConfiguration$ === "object");
assert(typeof DeletePrefetchScheduleCommand === "function");
assert(typeof DeletePrefetchSchedule$ === "object");
assert(typeof DeleteProgramCommand === "function");
assert(typeof DeleteProgram$ === "object");
assert(typeof DeleteSourceLocationCommand === "function");
assert(typeof DeleteSourceLocation$ === "object");
assert(typeof DeleteVodSourceCommand === "function");
assert(typeof DeleteVodSource$ === "object");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeChannel$ === "object");
assert(typeof DescribeLiveSourceCommand === "function");
assert(typeof DescribeLiveSource$ === "object");
assert(typeof DescribeProgramCommand === "function");
assert(typeof DescribeProgram$ === "object");
assert(typeof DescribeSourceLocationCommand === "function");
assert(typeof DescribeSourceLocation$ === "object");
assert(typeof DescribeVodSourceCommand === "function");
assert(typeof DescribeVodSource$ === "object");
assert(typeof GetChannelPolicyCommand === "function");
assert(typeof GetChannelPolicy$ === "object");
assert(typeof GetChannelScheduleCommand === "function");
assert(typeof GetChannelSchedule$ === "object");
assert(typeof GetPlaybackConfigurationCommand === "function");
assert(typeof GetPlaybackConfiguration$ === "object");
assert(typeof GetPrefetchScheduleCommand === "function");
assert(typeof GetPrefetchSchedule$ === "object");
assert(typeof ListAlertsCommand === "function");
assert(typeof ListAlerts$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListLiveSourcesCommand === "function");
assert(typeof ListLiveSources$ === "object");
assert(typeof ListPlaybackConfigurationsCommand === "function");
assert(typeof ListPlaybackConfigurations$ === "object");
assert(typeof ListPrefetchSchedulesCommand === "function");
assert(typeof ListPrefetchSchedules$ === "object");
assert(typeof ListSourceLocationsCommand === "function");
assert(typeof ListSourceLocations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVodSourcesCommand === "function");
assert(typeof ListVodSources$ === "object");
assert(typeof PutChannelPolicyCommand === "function");
assert(typeof PutChannelPolicy$ === "object");
assert(typeof PutPlaybackConfigurationCommand === "function");
assert(typeof PutPlaybackConfiguration$ === "object");
assert(typeof StartChannelCommand === "function");
assert(typeof StartChannel$ === "object");
assert(typeof StopChannelCommand === "function");
assert(typeof StopChannel$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateLiveSourceCommand === "function");
assert(typeof UpdateLiveSource$ === "object");
assert(typeof UpdateProgramCommand === "function");
assert(typeof UpdateProgram$ === "object");
assert(typeof UpdateSourceLocationCommand === "function");
assert(typeof UpdateSourceLocation$ === "object");
assert(typeof UpdateVodSourceCommand === "function");
assert(typeof UpdateVodSource$ === "object");
// structural schemas
assert(typeof AccessConfiguration$ === "object");
assert(typeof AdBreak$ === "object");
assert(typeof AdBreakOpportunity$ === "object");
assert(typeof AdConditioningConfiguration$ === "object");
assert(typeof AdDecisionServerConfiguration$ === "object");
assert(typeof AdMarkerPassthrough$ === "object");
assert(typeof AdsInteractionLog$ === "object");
assert(typeof Alert$ === "object");
assert(typeof AlternateMedia$ === "object");
assert(typeof AudienceMedia$ === "object");
assert(typeof AvailMatchingCriteria$ === "object");
assert(typeof AvailSuppression$ === "object");
assert(typeof Bumper$ === "object");
assert(typeof CdnConfiguration$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ClipRange$ === "object");
assert(typeof ConfigureLogsForChannelRequest$ === "object");
assert(typeof ConfigureLogsForChannelResponse$ === "object");
assert(typeof ConfigureLogsForPlaybackConfigurationRequest$ === "object");
assert(typeof ConfigureLogsForPlaybackConfigurationResponse$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof CreateLiveSourceRequest$ === "object");
assert(typeof CreateLiveSourceResponse$ === "object");
assert(typeof CreatePrefetchScheduleRequest$ === "object");
assert(typeof CreatePrefetchScheduleResponse$ === "object");
assert(typeof CreateProgramRequest$ === "object");
assert(typeof CreateProgramResponse$ === "object");
assert(typeof CreateSourceLocationRequest$ === "object");
assert(typeof CreateSourceLocationResponse$ === "object");
assert(typeof CreateVodSourceRequest$ === "object");
assert(typeof CreateVodSourceResponse$ === "object");
assert(typeof DashConfiguration$ === "object");
assert(typeof DashConfigurationForPut$ === "object");
assert(typeof DashPlaylistSettings$ === "object");
assert(typeof DefaultSegmentDeliveryConfiguration$ === "object");
assert(typeof DeleteChannelPolicyRequest$ === "object");
assert(typeof DeleteChannelPolicyResponse$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeleteChannelResponse$ === "object");
assert(typeof DeleteLiveSourceRequest$ === "object");
assert(typeof DeleteLiveSourceResponse$ === "object");
assert(typeof DeletePlaybackConfigurationRequest$ === "object");
assert(typeof DeletePlaybackConfigurationResponse$ === "object");
assert(typeof DeletePrefetchScheduleRequest$ === "object");
assert(typeof DeletePrefetchScheduleResponse$ === "object");
assert(typeof DeleteProgramRequest$ === "object");
assert(typeof DeleteProgramResponse$ === "object");
assert(typeof DeleteSourceLocationRequest$ === "object");
assert(typeof DeleteSourceLocationResponse$ === "object");
assert(typeof DeleteVodSourceRequest$ === "object");
assert(typeof DeleteVodSourceResponse$ === "object");
assert(typeof DescribeChannelRequest$ === "object");
assert(typeof DescribeChannelResponse$ === "object");
assert(typeof DescribeLiveSourceRequest$ === "object");
assert(typeof DescribeLiveSourceResponse$ === "object");
assert(typeof DescribeProgramRequest$ === "object");
assert(typeof DescribeProgramResponse$ === "object");
assert(typeof DescribeSourceLocationRequest$ === "object");
assert(typeof DescribeSourceLocationResponse$ === "object");
assert(typeof DescribeVodSourceRequest$ === "object");
assert(typeof DescribeVodSourceResponse$ === "object");
assert(typeof GetChannelPolicyRequest$ === "object");
assert(typeof GetChannelPolicyResponse$ === "object");
assert(typeof GetChannelScheduleRequest$ === "object");
assert(typeof GetChannelScheduleResponse$ === "object");
assert(typeof GetPlaybackConfigurationRequest$ === "object");
assert(typeof GetPlaybackConfigurationResponse$ === "object");
assert(typeof GetPrefetchScheduleRequest$ === "object");
assert(typeof GetPrefetchScheduleResponse$ === "object");
assert(typeof HlsConfiguration$ === "object");
assert(typeof HlsPlaylistSettings$ === "object");
assert(typeof HttpConfiguration$ === "object");
assert(typeof HttpPackageConfiguration$ === "object");
assert(typeof HttpRequest$ === "object");
assert(typeof KeyValuePair$ === "object");
assert(typeof ListAlertsRequest$ === "object");
assert(typeof ListAlertsResponse$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListLiveSourcesRequest$ === "object");
assert(typeof ListLiveSourcesResponse$ === "object");
assert(typeof ListPlaybackConfigurationsRequest$ === "object");
assert(typeof ListPlaybackConfigurationsResponse$ === "object");
assert(typeof ListPrefetchSchedulesRequest$ === "object");
assert(typeof ListPrefetchSchedulesResponse$ === "object");
assert(typeof ListSourceLocationsRequest$ === "object");
assert(typeof ListSourceLocationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVodSourcesRequest$ === "object");
assert(typeof ListVodSourcesResponse$ === "object");
assert(typeof LivePreRollConfiguration$ === "object");
assert(typeof LiveSource$ === "object");
assert(typeof LogConfiguration$ === "object");
assert(typeof LogConfigurationForChannel$ === "object");
assert(typeof ManifestProcessingRules$ === "object");
assert(typeof ManifestServiceInteractionLog$ === "object");
assert(typeof PlaybackConfiguration$ === "object");
assert(typeof PrefetchConsumption$ === "object");
assert(typeof PrefetchRetrieval$ === "object");
assert(typeof PrefetchSchedule$ === "object");
assert(typeof PutChannelPolicyRequest$ === "object");
assert(typeof PutChannelPolicyResponse$ === "object");
assert(typeof PutPlaybackConfigurationRequest$ === "object");
assert(typeof PutPlaybackConfigurationResponse$ === "object");
assert(typeof RecurringConsumption$ === "object");
assert(typeof RecurringPrefetchConfiguration$ === "object");
assert(typeof RecurringRetrieval$ === "object");
assert(typeof RequestOutputItem$ === "object");
assert(typeof ResponseOutputItem$ === "object");
assert(typeof ScheduleAdBreak$ === "object");
assert(typeof ScheduleConfiguration$ === "object");
assert(typeof ScheduleEntry$ === "object");
assert(typeof SecretsManagerAccessTokenConfiguration$ === "object");
assert(typeof SegmentationDescriptor$ === "object");
assert(typeof SegmentDeliveryConfiguration$ === "object");
assert(typeof SlateSource$ === "object");
assert(typeof SourceLocation$ === "object");
assert(typeof SpliceInsertMessage$ === "object");
assert(typeof StartChannelRequest$ === "object");
assert(typeof StartChannelResponse$ === "object");
assert(typeof StopChannelRequest$ === "object");
assert(typeof StopChannelResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TimeShiftConfiguration$ === "object");
assert(typeof TimeSignalMessage$ === "object");
assert(typeof TrafficShapingRetrievalWindow$ === "object");
assert(typeof TrafficShapingTpsConfiguration$ === "object");
assert(typeof Transition$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateChannelResponse$ === "object");
assert(typeof UpdateLiveSourceRequest$ === "object");
assert(typeof UpdateLiveSourceResponse$ === "object");
assert(typeof UpdateProgramRequest$ === "object");
assert(typeof UpdateProgramResponse$ === "object");
assert(typeof UpdateProgramScheduleConfiguration$ === "object");
assert(typeof UpdateProgramTransition$ === "object");
assert(typeof UpdateSourceLocationRequest$ === "object");
assert(typeof UpdateSourceLocationResponse$ === "object");
assert(typeof UpdateVodSourceRequest$ === "object");
assert(typeof UpdateVodSourceResponse$ === "object");
assert(typeof VodSource$ === "object");
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
assert(typeof BadRequestException$ === "object");
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
