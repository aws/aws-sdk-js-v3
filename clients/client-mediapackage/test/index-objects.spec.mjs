import {
  AdMarkers,
  AdsOnDeliveryRestrictions,
  CmafEncryptionMethod,
  ConfigureLogsCommand,
  CreateChannelCommand,
  CreateHarvestJobCommand,
  CreateOriginEndpointCommand,
  DeleteChannelCommand,
  DeleteOriginEndpointCommand,
  DescribeChannelCommand,
  DescribeHarvestJobCommand,
  DescribeOriginEndpointCommand,
  EncryptionMethod,
  ListChannelsCommand,
  ListHarvestJobsCommand,
  ListOriginEndpointsCommand,
  ListTagsForResourceCommand,
  ManifestLayout,
  MediaPackage,
  MediaPackageClient,
  MediaPackageServiceException,
  Origination,
  PlaylistType,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  Profile,
  RotateChannelCredentialsCommand,
  RotateIngestEndpointCredentialsCommand,
  SegmentTemplateFormat,
  Status,
  StreamOrder,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateOriginEndpointCommand,
  UtcTiming,
  __AdTriggersElement,
  __PeriodTriggersElement,
  paginateListChannels,
  paginateListHarvestJobs,
  paginateListOriginEndpoints,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaPackageClient === "function")
assert(typeof MediaPackage === "function")
// commands
assert(typeof ConfigureLogsCommand === "function")
assert(typeof CreateChannelCommand === "function")
assert(typeof CreateHarvestJobCommand === "function")
assert(typeof CreateOriginEndpointCommand === "function")
assert(typeof DeleteChannelCommand === "function")
assert(typeof DeleteOriginEndpointCommand === "function")
assert(typeof DescribeChannelCommand === "function")
assert(typeof DescribeHarvestJobCommand === "function")
assert(typeof DescribeOriginEndpointCommand === "function")
assert(typeof ListChannelsCommand === "function")
assert(typeof ListHarvestJobsCommand === "function")
assert(typeof ListOriginEndpointsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RotateChannelCredentialsCommand === "function")
assert(typeof RotateIngestEndpointCredentialsCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateChannelCommand === "function")
assert(typeof UpdateOriginEndpointCommand === "function")
// enums
assert(typeof __AdTriggersElement === "object");
assert(typeof __PeriodTriggersElement === "object");
assert(typeof AdMarkers === "object");
assert(typeof AdsOnDeliveryRestrictions === "object");
assert(typeof CmafEncryptionMethod === "object");
assert(typeof EncryptionMethod === "object");
assert(typeof ManifestLayout === "object");
assert(typeof Origination === "object");
assert(typeof PlaylistType === "object");
assert(typeof PresetSpeke20Audio === "object");
assert(typeof PresetSpeke20Video === "object");
assert(typeof Profile === "object");
assert(typeof SegmentTemplateFormat === "object");
assert(typeof Status === "object");
assert(typeof StreamOrder === "object");
assert(typeof UtcTiming === "object");
// errors
assert(MediaPackageServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListChannels === "function")
assert(typeof paginateListHarvestJobs === "function")
assert(typeof paginateListOriginEndpoints === "function")
console.log(`MediaPackage index test passed.`);
