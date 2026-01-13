import {
  AccessDeniedException,
  AccessDeniedException$,
  AdMarkerDash,
  AdMarkerHls,
  CancelHarvestJob$,
  CancelHarvestJobCommand,
  CancelHarvestJobRequest$,
  CancelHarvestJobResponse$,
  CdnAuthConfiguration$,
  ChannelGroupListConfiguration$,
  ChannelListConfiguration$,
  CmafEncryptionMethod,
  ConflictException,
  ConflictException$,
  ConflictExceptionType,
  ContainerType,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelGroup$,
  CreateChannelGroupCommand,
  CreateChannelGroupRequest$,
  CreateChannelGroupResponse$,
  CreateChannelRequest$,
  CreateChannelResponse$,
  CreateDashManifestConfiguration$,
  CreateHarvestJob$,
  CreateHarvestJobCommand,
  CreateHarvestJobRequest$,
  CreateHarvestJobResponse$,
  CreateHlsManifestConfiguration$,
  CreateLowLatencyHlsManifestConfiguration$,
  CreateMssManifestConfiguration$,
  CreateOriginEndpoint$,
  CreateOriginEndpointCommand,
  CreateOriginEndpointRequest$,
  CreateOriginEndpointResponse$,
  DashBaseUrl$,
  DashCompactness,
  DashDrmSignaling,
  DashDvbFontDownload$,
  DashDvbMetricsReporting$,
  DashDvbSettings$,
  DashPeriodTrigger,
  DashProfile,
  DashProgramInformation$,
  DashSegmentTemplateFormat,
  DashSubtitleConfiguration$,
  DashTtmlConfiguration$,
  DashTtmlProfile,
  DashUtcTiming$,
  DashUtcTimingMode,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelGroup$,
  DeleteChannelGroupCommand,
  DeleteChannelGroupRequest$,
  DeleteChannelGroupResponse$,
  DeleteChannelPolicy$,
  DeleteChannelPolicyCommand,
  DeleteChannelPolicyRequest$,
  DeleteChannelPolicyResponse$,
  DeleteChannelRequest$,
  DeleteChannelResponse$,
  DeleteOriginEndpoint$,
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointPolicy$,
  DeleteOriginEndpointPolicyCommand,
  DeleteOriginEndpointPolicyRequest$,
  DeleteOriginEndpointPolicyResponse$,
  DeleteOriginEndpointRequest$,
  DeleteOriginEndpointResponse$,
  Destination$,
  DrmSystem,
  Encryption$,
  EncryptionContractConfiguration$,
  EncryptionMethod$,
  EndpointErrorCondition,
  FilterConfiguration$,
  ForceEndpointErrorConfiguration$,
  GetChannel$,
  GetChannelCommand,
  GetChannelGroup$,
  GetChannelGroupCommand,
  GetChannelGroupRequest$,
  GetChannelGroupResponse$,
  GetChannelPolicy$,
  GetChannelPolicyCommand,
  GetChannelPolicyRequest$,
  GetChannelPolicyResponse$,
  GetChannelRequest$,
  GetChannelResponse$,
  GetDashManifestConfiguration$,
  GetHarvestJob$,
  GetHarvestJobCommand,
  GetHarvestJobRequest$,
  GetHarvestJobResponse$,
  GetHlsManifestConfiguration$,
  GetLowLatencyHlsManifestConfiguration$,
  GetMssManifestConfiguration$,
  GetOriginEndpoint$,
  GetOriginEndpointCommand,
  GetOriginEndpointPolicy$,
  GetOriginEndpointPolicyCommand,
  GetOriginEndpointPolicyRequest$,
  GetOriginEndpointPolicyResponse$,
  GetOriginEndpointRequest$,
  GetOriginEndpointResponse$,
  HarvestedDashManifest$,
  HarvestedHlsManifest$,
  HarvestedLowLatencyHlsManifest$,
  HarvestedManifests$,
  HarvesterScheduleConfiguration$,
  HarvestJob$,
  HarvestJobStatus,
  IngestEndpoint$,
  InputSwitchConfiguration$,
  InputType,
  InternalServerException,
  InternalServerException$,
  IsmEncryptionMethod,
  ListChannelGroups$,
  ListChannelGroupsCommand,
  ListChannelGroupsRequest$,
  ListChannelGroupsResponse$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListDashManifestConfiguration$,
  ListHarvestJobs$,
  ListHarvestJobsCommand,
  ListHarvestJobsRequest$,
  ListHarvestJobsResponse$,
  ListHlsManifestConfiguration$,
  ListLowLatencyHlsManifestConfiguration$,
  ListMssManifestConfiguration$,
  ListOriginEndpoints$,
  ListOriginEndpointsCommand,
  ListOriginEndpointsRequest$,
  ListOriginEndpointsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MediaPackageV2,
  MediaPackageV2Client,
  MediaPackageV2ServiceException,
  MssManifestLayout,
  OriginEndpointListConfiguration$,
  OutputHeaderConfiguration$,
  paginateListChannelGroups,
  paginateListChannels,
  paginateListHarvestJobs,
  paginateListOriginEndpoints,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  PutChannelPolicy$,
  PutChannelPolicyCommand,
  PutChannelPolicyRequest$,
  PutChannelPolicyResponse$,
  PutOriginEndpointPolicy$,
  PutOriginEndpointPolicyCommand,
  PutOriginEndpointPolicyRequest$,
  PutOriginEndpointPolicyResponse$,
  ResetChannelState$,
  ResetChannelStateCommand,
  ResetChannelStateRequest$,
  ResetChannelStateResponse$,
  ResetOriginEndpointState$,
  ResetOriginEndpointStateCommand,
  ResetOriginEndpointStateRequest$,
  ResetOriginEndpointStateResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTypeNotFound,
  S3DestinationConfig$,
  Scte$,
  ScteDash$,
  ScteFilter,
  ScteHls$,
  ScteInSegments,
  Segment$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SpekeKeyProvider$,
  StartTag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  TsEncryptionMethod,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelGroup$,
  UpdateChannelGroupCommand,
  UpdateChannelGroupRequest$,
  UpdateChannelGroupResponse$,
  UpdateChannelRequest$,
  UpdateChannelResponse$,
  UpdateOriginEndpoint$,
  UpdateOriginEndpointCommand,
  UpdateOriginEndpointRequest$,
  UpdateOriginEndpointResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionType,
  waitForHarvestJobFinished,
  waitUntilHarvestJobFinished,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaPackageV2Client === "function");
assert(typeof MediaPackageV2 === "function");
// commands
assert(typeof CancelHarvestJobCommand === "function");
assert(typeof CancelHarvestJob$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateChannelGroupCommand === "function");
assert(typeof CreateChannelGroup$ === "object");
assert(typeof CreateHarvestJobCommand === "function");
assert(typeof CreateHarvestJob$ === "object");
assert(typeof CreateOriginEndpointCommand === "function");
assert(typeof CreateOriginEndpoint$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteChannelGroupCommand === "function");
assert(typeof DeleteChannelGroup$ === "object");
assert(typeof DeleteChannelPolicyCommand === "function");
assert(typeof DeleteChannelPolicy$ === "object");
assert(typeof DeleteOriginEndpointCommand === "function");
assert(typeof DeleteOriginEndpoint$ === "object");
assert(typeof DeleteOriginEndpointPolicyCommand === "function");
assert(typeof DeleteOriginEndpointPolicy$ === "object");
assert(typeof GetChannelCommand === "function");
assert(typeof GetChannel$ === "object");
assert(typeof GetChannelGroupCommand === "function");
assert(typeof GetChannelGroup$ === "object");
assert(typeof GetChannelPolicyCommand === "function");
assert(typeof GetChannelPolicy$ === "object");
assert(typeof GetHarvestJobCommand === "function");
assert(typeof GetHarvestJob$ === "object");
assert(typeof GetOriginEndpointCommand === "function");
assert(typeof GetOriginEndpoint$ === "object");
assert(typeof GetOriginEndpointPolicyCommand === "function");
assert(typeof GetOriginEndpointPolicy$ === "object");
assert(typeof ListChannelGroupsCommand === "function");
assert(typeof ListChannelGroups$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListHarvestJobsCommand === "function");
assert(typeof ListHarvestJobs$ === "object");
assert(typeof ListOriginEndpointsCommand === "function");
assert(typeof ListOriginEndpoints$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutChannelPolicyCommand === "function");
assert(typeof PutChannelPolicy$ === "object");
assert(typeof PutOriginEndpointPolicyCommand === "function");
assert(typeof PutOriginEndpointPolicy$ === "object");
assert(typeof ResetChannelStateCommand === "function");
assert(typeof ResetChannelState$ === "object");
assert(typeof ResetOriginEndpointStateCommand === "function");
assert(typeof ResetOriginEndpointState$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateChannelGroupCommand === "function");
assert(typeof UpdateChannelGroup$ === "object");
assert(typeof UpdateOriginEndpointCommand === "function");
assert(typeof UpdateOriginEndpoint$ === "object");
// structural schemas
assert(typeof CancelHarvestJobRequest$ === "object");
assert(typeof CancelHarvestJobResponse$ === "object");
assert(typeof CdnAuthConfiguration$ === "object");
assert(typeof ChannelGroupListConfiguration$ === "object");
assert(typeof ChannelListConfiguration$ === "object");
assert(typeof CreateChannelGroupRequest$ === "object");
assert(typeof CreateChannelGroupResponse$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof CreateDashManifestConfiguration$ === "object");
assert(typeof CreateHarvestJobRequest$ === "object");
assert(typeof CreateHarvestJobResponse$ === "object");
assert(typeof CreateHlsManifestConfiguration$ === "object");
assert(typeof CreateLowLatencyHlsManifestConfiguration$ === "object");
assert(typeof CreateMssManifestConfiguration$ === "object");
assert(typeof CreateOriginEndpointRequest$ === "object");
assert(typeof CreateOriginEndpointResponse$ === "object");
assert(typeof DashBaseUrl$ === "object");
assert(typeof DashDvbFontDownload$ === "object");
assert(typeof DashDvbMetricsReporting$ === "object");
assert(typeof DashDvbSettings$ === "object");
assert(typeof DashProgramInformation$ === "object");
assert(typeof DashSubtitleConfiguration$ === "object");
assert(typeof DashTtmlConfiguration$ === "object");
assert(typeof DashUtcTiming$ === "object");
assert(typeof DeleteChannelGroupRequest$ === "object");
assert(typeof DeleteChannelGroupResponse$ === "object");
assert(typeof DeleteChannelPolicyRequest$ === "object");
assert(typeof DeleteChannelPolicyResponse$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeleteChannelResponse$ === "object");
assert(typeof DeleteOriginEndpointPolicyRequest$ === "object");
assert(typeof DeleteOriginEndpointPolicyResponse$ === "object");
assert(typeof DeleteOriginEndpointRequest$ === "object");
assert(typeof DeleteOriginEndpointResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof Encryption$ === "object");
assert(typeof EncryptionContractConfiguration$ === "object");
assert(typeof EncryptionMethod$ === "object");
assert(typeof FilterConfiguration$ === "object");
assert(typeof ForceEndpointErrorConfiguration$ === "object");
assert(typeof GetChannelGroupRequest$ === "object");
assert(typeof GetChannelGroupResponse$ === "object");
assert(typeof GetChannelPolicyRequest$ === "object");
assert(typeof GetChannelPolicyResponse$ === "object");
assert(typeof GetChannelRequest$ === "object");
assert(typeof GetChannelResponse$ === "object");
assert(typeof GetDashManifestConfiguration$ === "object");
assert(typeof GetHarvestJobRequest$ === "object");
assert(typeof GetHarvestJobResponse$ === "object");
assert(typeof GetHlsManifestConfiguration$ === "object");
assert(typeof GetLowLatencyHlsManifestConfiguration$ === "object");
assert(typeof GetMssManifestConfiguration$ === "object");
assert(typeof GetOriginEndpointPolicyRequest$ === "object");
assert(typeof GetOriginEndpointPolicyResponse$ === "object");
assert(typeof GetOriginEndpointRequest$ === "object");
assert(typeof GetOriginEndpointResponse$ === "object");
assert(typeof HarvestedDashManifest$ === "object");
assert(typeof HarvestedHlsManifest$ === "object");
assert(typeof HarvestedLowLatencyHlsManifest$ === "object");
assert(typeof HarvestedManifests$ === "object");
assert(typeof HarvesterScheduleConfiguration$ === "object");
assert(typeof HarvestJob$ === "object");
assert(typeof IngestEndpoint$ === "object");
assert(typeof InputSwitchConfiguration$ === "object");
assert(typeof ListChannelGroupsRequest$ === "object");
assert(typeof ListChannelGroupsResponse$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListDashManifestConfiguration$ === "object");
assert(typeof ListHarvestJobsRequest$ === "object");
assert(typeof ListHarvestJobsResponse$ === "object");
assert(typeof ListHlsManifestConfiguration$ === "object");
assert(typeof ListLowLatencyHlsManifestConfiguration$ === "object");
assert(typeof ListMssManifestConfiguration$ === "object");
assert(typeof ListOriginEndpointsRequest$ === "object");
assert(typeof ListOriginEndpointsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OriginEndpointListConfiguration$ === "object");
assert(typeof OutputHeaderConfiguration$ === "object");
assert(typeof PutChannelPolicyRequest$ === "object");
assert(typeof PutChannelPolicyResponse$ === "object");
assert(typeof PutOriginEndpointPolicyRequest$ === "object");
assert(typeof PutOriginEndpointPolicyResponse$ === "object");
assert(typeof ResetChannelStateRequest$ === "object");
assert(typeof ResetChannelStateResponse$ === "object");
assert(typeof ResetOriginEndpointStateRequest$ === "object");
assert(typeof ResetOriginEndpointStateResponse$ === "object");
assert(typeof S3DestinationConfig$ === "object");
assert(typeof Scte$ === "object");
assert(typeof ScteDash$ === "object");
assert(typeof ScteHls$ === "object");
assert(typeof Segment$ === "object");
assert(typeof SpekeKeyProvider$ === "object");
assert(typeof StartTag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateChannelGroupRequest$ === "object");
assert(typeof UpdateChannelGroupResponse$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateChannelResponse$ === "object");
assert(typeof UpdateOriginEndpointRequest$ === "object");
assert(typeof UpdateOriginEndpointResponse$ === "object");
// enums
assert(typeof AdMarkerDash === "object");
assert(typeof AdMarkerHls === "object");
assert(typeof CmafEncryptionMethod === "object");
assert(typeof ConflictExceptionType === "object");
assert(typeof ContainerType === "object");
assert(typeof DashCompactness === "object");
assert(typeof DashDrmSignaling === "object");
assert(typeof DashPeriodTrigger === "object");
assert(typeof DashProfile === "object");
assert(typeof DashSegmentTemplateFormat === "object");
assert(typeof DashTtmlProfile === "object");
assert(typeof DashUtcTimingMode === "object");
assert(typeof DrmSystem === "object");
assert(typeof EndpointErrorCondition === "object");
assert(typeof HarvestJobStatus === "object");
assert(typeof InputType === "object");
assert(typeof IsmEncryptionMethod === "object");
assert(typeof MssManifestLayout === "object");
assert(typeof PresetSpeke20Audio === "object");
assert(typeof PresetSpeke20Video === "object");
assert(typeof ResourceTypeNotFound === "object");
assert(typeof ScteFilter === "object");
assert(typeof ScteInSegments === "object");
assert(typeof TsEncryptionMethod === "object");
assert(typeof ValidationExceptionType === "object");
// errors
assert(AccessDeniedException.prototype instanceof MediaPackageV2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MediaPackageV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MediaPackageV2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MediaPackageV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MediaPackageV2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MediaPackageV2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MediaPackageV2ServiceException);
assert(typeof ValidationException$ === "object");
assert(MediaPackageV2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForHarvestJobFinished === "function");
assert(typeof waitUntilHarvestJobFinished === "function");
// paginators
assert(typeof paginateListChannelGroups === "function");
assert(typeof paginateListChannels === "function");
assert(typeof paginateListHarvestJobs === "function");
assert(typeof paginateListOriginEndpoints === "function");
console.log(`MediaPackageV2 index test passed.`);
