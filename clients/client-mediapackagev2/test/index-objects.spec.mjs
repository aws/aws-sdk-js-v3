import {
  AccessDeniedException,
  AdMarkerDash,
  AdMarkerHls,
  CancelHarvestJobCommand,
  CmafEncryptionMethod,
  ConflictException,
  ConflictExceptionType,
  ContainerType,
  CreateChannelCommand,
  CreateChannelGroupCommand,
  CreateHarvestJobCommand,
  CreateOriginEndpointCommand,
  DashCompactness,
  DashDrmSignaling,
  DashPeriodTrigger,
  DashProfile,
  DashSegmentTemplateFormat,
  DashTtmlProfile,
  DashUtcTimingMode,
  DeleteChannelCommand,
  DeleteChannelGroupCommand,
  DeleteChannelPolicyCommand,
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointPolicyCommand,
  DrmSystem,
  EndpointErrorCondition,
  GetChannelCommand,
  GetChannelGroupCommand,
  GetChannelPolicyCommand,
  GetHarvestJobCommand,
  GetOriginEndpointCommand,
  GetOriginEndpointPolicyCommand,
  HarvestJobStatus,
  InputType,
  InternalServerException,
  IsmEncryptionMethod,
  ListChannelGroupsCommand,
  ListChannelsCommand,
  ListHarvestJobsCommand,
  ListOriginEndpointsCommand,
  ListTagsForResourceCommand,
  MediaPackageV2,
  MediaPackageV2Client,
  MediaPackageV2ServiceException,
  MssManifestLayout,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  PutChannelPolicyCommand,
  PutOriginEndpointPolicyCommand,
  ResetChannelStateCommand,
  ResetOriginEndpointStateCommand,
  ResourceNotFoundException,
  ResourceTypeNotFound,
  ScteFilter,
  ScteInSegments,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  TsEncryptionMethod,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateChannelGroupCommand,
  UpdateOriginEndpointCommand,
  ValidationException,
  ValidationExceptionType,
  paginateListChannelGroups,
  paginateListChannels,
  paginateListHarvestJobs,
  paginateListOriginEndpoints,
  waitForHarvestJobFinished,
  waitUntilHarvestJobFinished,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaPackageV2Client === "function");
assert(typeof MediaPackageV2 === "function");
// commands
assert(typeof CancelHarvestJobCommand === "function");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannelGroupCommand === "function");
assert(typeof CreateHarvestJobCommand === "function");
assert(typeof CreateOriginEndpointCommand === "function");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannelGroupCommand === "function");
assert(typeof DeleteChannelPolicyCommand === "function");
assert(typeof DeleteOriginEndpointCommand === "function");
assert(typeof DeleteOriginEndpointPolicyCommand === "function");
assert(typeof GetChannelCommand === "function");
assert(typeof GetChannelGroupCommand === "function");
assert(typeof GetChannelPolicyCommand === "function");
assert(typeof GetHarvestJobCommand === "function");
assert(typeof GetOriginEndpointCommand === "function");
assert(typeof GetOriginEndpointPolicyCommand === "function");
assert(typeof ListChannelGroupsCommand === "function");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListHarvestJobsCommand === "function");
assert(typeof ListOriginEndpointsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutChannelPolicyCommand === "function");
assert(typeof PutOriginEndpointPolicyCommand === "function");
assert(typeof ResetChannelStateCommand === "function");
assert(typeof ResetOriginEndpointStateCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannelGroupCommand === "function");
assert(typeof UpdateOriginEndpointCommand === "function");
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
assert(ConflictException.prototype instanceof MediaPackageV2ServiceException);
assert(InternalServerException.prototype instanceof MediaPackageV2ServiceException);
assert(ResourceNotFoundException.prototype instanceof MediaPackageV2ServiceException);
assert(ServiceQuotaExceededException.prototype instanceof MediaPackageV2ServiceException);
assert(ThrottlingException.prototype instanceof MediaPackageV2ServiceException);
assert(ValidationException.prototype instanceof MediaPackageV2ServiceException);
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
