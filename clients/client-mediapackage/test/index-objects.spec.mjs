import {
  AdMarkers,
  AdsOnDeliveryRestrictions,
  Authorization$,
  Channel$,
  CmafEncryption$,
  CmafEncryptionMethod,
  CmafPackage$,
  CmafPackageCreateOrUpdateParameters$,
  ConfigureLogs$,
  ConfigureLogsCommand,
  ConfigureLogsRequest$,
  ConfigureLogsResponse$,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelRequest$,
  CreateChannelResponse$,
  CreateHarvestJob$,
  CreateHarvestJobCommand,
  CreateHarvestJobRequest$,
  CreateHarvestJobResponse$,
  CreateOriginEndpoint$,
  CreateOriginEndpointCommand,
  CreateOriginEndpointRequest$,
  CreateOriginEndpointResponse$,
  DashEncryption$,
  DashPackage$,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelRequest$,
  DeleteChannelResponse$,
  DeleteOriginEndpoint$,
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointRequest$,
  DeleteOriginEndpointResponse$,
  DescribeChannel$,
  DescribeChannelCommand,
  DescribeChannelRequest$,
  DescribeChannelResponse$,
  DescribeHarvestJob$,
  DescribeHarvestJobCommand,
  DescribeHarvestJobRequest$,
  DescribeHarvestJobResponse$,
  DescribeOriginEndpoint$,
  DescribeOriginEndpointCommand,
  DescribeOriginEndpointRequest$,
  DescribeOriginEndpointResponse$,
  EgressAccessLogs$,
  EncryptionContractConfiguration$,
  EncryptionMethod,
  ForbiddenException,
  ForbiddenException$,
  HarvestJob$,
  HlsEncryption$,
  HlsIngest$,
  HlsManifest$,
  HlsManifestCreateOrUpdateParameters$,
  HlsPackage$,
  IngestEndpoint$,
  IngressAccessLogs$,
  InternalServerErrorException,
  InternalServerErrorException$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListHarvestJobs$,
  ListHarvestJobsCommand,
  ListHarvestJobsRequest$,
  ListHarvestJobsResponse$,
  ListOriginEndpoints$,
  ListOriginEndpointsCommand,
  ListOriginEndpointsRequest$,
  ListOriginEndpointsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManifestLayout,
  MediaPackage,
  MediaPackageClient,
  MediaPackageServiceException,
  MssEncryption$,
  MssPackage$,
  NotFoundException,
  NotFoundException$,
  OriginEndpoint$,
  Origination,
  PlaylistType,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  Profile,
  RotateChannelCredentials$,
  RotateChannelCredentialsCommand,
  RotateChannelCredentialsRequest$,
  RotateChannelCredentialsResponse$,
  RotateIngestEndpointCredentials$,
  RotateIngestEndpointCredentialsCommand,
  RotateIngestEndpointCredentialsRequest$,
  RotateIngestEndpointCredentialsResponse$,
  S3Destination$,
  SegmentTemplateFormat,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SpekeKeyProvider$,
  Status,
  StreamOrder,
  StreamSelection$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnprocessableEntityException,
  UnprocessableEntityException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelRequest$,
  UpdateChannelResponse$,
  UpdateOriginEndpoint$,
  UpdateOriginEndpointCommand,
  UpdateOriginEndpointRequest$,
  UpdateOriginEndpointResponse$,
  UtcTiming,
  __AdTriggersElement,
  __PeriodTriggersElement,
  paginateListChannels,
  paginateListHarvestJobs,
  paginateListOriginEndpoints,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaPackageClient === "function");
assert(typeof MediaPackage === "function");
// commands
assert(typeof ConfigureLogsCommand === "function");
assert(typeof ConfigureLogs$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateHarvestJobCommand === "function");
assert(typeof CreateHarvestJob$ === "object");
assert(typeof CreateOriginEndpointCommand === "function");
assert(typeof CreateOriginEndpoint$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteOriginEndpointCommand === "function");
assert(typeof DeleteOriginEndpoint$ === "object");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeChannel$ === "object");
assert(typeof DescribeHarvestJobCommand === "function");
assert(typeof DescribeHarvestJob$ === "object");
assert(typeof DescribeOriginEndpointCommand === "function");
assert(typeof DescribeOriginEndpoint$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListHarvestJobsCommand === "function");
assert(typeof ListHarvestJobs$ === "object");
assert(typeof ListOriginEndpointsCommand === "function");
assert(typeof ListOriginEndpoints$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RotateChannelCredentialsCommand === "function");
assert(typeof RotateChannelCredentials$ === "object");
assert(typeof RotateIngestEndpointCredentialsCommand === "function");
assert(typeof RotateIngestEndpointCredentials$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateOriginEndpointCommand === "function");
assert(typeof UpdateOriginEndpoint$ === "object");
// structural schemas
assert(typeof Authorization$ === "object");
assert(typeof Channel$ === "object");
assert(typeof CmafEncryption$ === "object");
assert(typeof CmafPackage$ === "object");
assert(typeof CmafPackageCreateOrUpdateParameters$ === "object");
assert(typeof ConfigureLogsRequest$ === "object");
assert(typeof ConfigureLogsResponse$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof CreateHarvestJobRequest$ === "object");
assert(typeof CreateHarvestJobResponse$ === "object");
assert(typeof CreateOriginEndpointRequest$ === "object");
assert(typeof CreateOriginEndpointResponse$ === "object");
assert(typeof DashEncryption$ === "object");
assert(typeof DashPackage$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeleteChannelResponse$ === "object");
assert(typeof DeleteOriginEndpointRequest$ === "object");
assert(typeof DeleteOriginEndpointResponse$ === "object");
assert(typeof DescribeChannelRequest$ === "object");
assert(typeof DescribeChannelResponse$ === "object");
assert(typeof DescribeHarvestJobRequest$ === "object");
assert(typeof DescribeHarvestJobResponse$ === "object");
assert(typeof DescribeOriginEndpointRequest$ === "object");
assert(typeof DescribeOriginEndpointResponse$ === "object");
assert(typeof EgressAccessLogs$ === "object");
assert(typeof EncryptionContractConfiguration$ === "object");
assert(typeof HarvestJob$ === "object");
assert(typeof HlsEncryption$ === "object");
assert(typeof HlsIngest$ === "object");
assert(typeof HlsManifest$ === "object");
assert(typeof HlsManifestCreateOrUpdateParameters$ === "object");
assert(typeof HlsPackage$ === "object");
assert(typeof IngestEndpoint$ === "object");
assert(typeof IngressAccessLogs$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListHarvestJobsRequest$ === "object");
assert(typeof ListHarvestJobsResponse$ === "object");
assert(typeof ListOriginEndpointsRequest$ === "object");
assert(typeof ListOriginEndpointsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MssEncryption$ === "object");
assert(typeof MssPackage$ === "object");
assert(typeof OriginEndpoint$ === "object");
assert(typeof RotateChannelCredentialsRequest$ === "object");
assert(typeof RotateChannelCredentialsResponse$ === "object");
assert(typeof RotateIngestEndpointCredentialsRequest$ === "object");
assert(typeof RotateIngestEndpointCredentialsResponse$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof SpekeKeyProvider$ === "object");
assert(typeof StreamSelection$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateChannelResponse$ === "object");
assert(typeof UpdateOriginEndpointRequest$ === "object");
assert(typeof UpdateOriginEndpointResponse$ === "object");
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
assert(ForbiddenException.prototype instanceof MediaPackageServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof MediaPackageServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof MediaPackageServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof MediaPackageServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof MediaPackageServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnprocessableEntityException.prototype instanceof MediaPackageServiceException);
assert(typeof UnprocessableEntityException$ === "object");
assert(MediaPackageServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannels === "function");
assert(typeof paginateListHarvestJobs === "function");
assert(typeof paginateListOriginEndpoints === "function");
console.log(`MediaPackage index test passed.`);
