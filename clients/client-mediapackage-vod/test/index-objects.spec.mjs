import {
  __PeriodTriggersElement,
  AdMarkers,
  AssetShallow$,
  Authorization$,
  CmafEncryption$,
  CmafPackage$,
  ConfigureLogs$,
  ConfigureLogsCommand,
  ConfigureLogsRequest$,
  ConfigureLogsResponse$,
  CreateAsset$,
  CreateAssetCommand,
  CreateAssetRequest$,
  CreateAssetResponse$,
  CreatePackagingConfiguration$,
  CreatePackagingConfigurationCommand,
  CreatePackagingConfigurationRequest$,
  CreatePackagingConfigurationResponse$,
  CreatePackagingGroup$,
  CreatePackagingGroupCommand,
  CreatePackagingGroupRequest$,
  CreatePackagingGroupResponse$,
  DashEncryption$,
  DashManifest$,
  DashPackage$,
  DeleteAsset$,
  DeleteAssetCommand,
  DeleteAssetRequest$,
  DeleteAssetResponse$,
  DeletePackagingConfiguration$,
  DeletePackagingConfigurationCommand,
  DeletePackagingConfigurationRequest$,
  DeletePackagingConfigurationResponse$,
  DeletePackagingGroup$,
  DeletePackagingGroupCommand,
  DeletePackagingGroupRequest$,
  DeletePackagingGroupResponse$,
  DescribeAsset$,
  DescribeAssetCommand,
  DescribeAssetRequest$,
  DescribeAssetResponse$,
  DescribePackagingConfiguration$,
  DescribePackagingConfigurationCommand,
  DescribePackagingConfigurationRequest$,
  DescribePackagingConfigurationResponse$,
  DescribePackagingGroup$,
  DescribePackagingGroupCommand,
  DescribePackagingGroupRequest$,
  DescribePackagingGroupResponse$,
  EgressAccessLogs$,
  EgressEndpoint$,
  EncryptionContractConfiguration$,
  EncryptionMethod,
  ForbiddenException,
  ForbiddenException$,
  HlsEncryption$,
  HlsManifest$,
  HlsPackage$,
  InternalServerErrorException,
  InternalServerErrorException$,
  ListAssets$,
  ListAssetsCommand,
  ListAssetsRequest$,
  ListAssetsResponse$,
  ListPackagingConfigurations$,
  ListPackagingConfigurationsCommand,
  ListPackagingConfigurationsRequest$,
  ListPackagingConfigurationsResponse$,
  ListPackagingGroups$,
  ListPackagingGroupsCommand,
  ListPackagingGroupsRequest$,
  ListPackagingGroupsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManifestLayout,
  MediaPackageVod,
  MediaPackageVodClient,
  MediaPackageVodServiceException,
  MssEncryption$,
  MssManifest$,
  MssPackage$,
  NotFoundException,
  NotFoundException$,
  PackagingConfiguration$,
  PackagingGroup$,
  paginateListAssets,
  paginateListPackagingConfigurations,
  paginateListPackagingGroups,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  Profile,
  ScteMarkersSource,
  SegmentTemplateFormat,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SpekeKeyProvider$,
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
  UpdatePackagingGroup$,
  UpdatePackagingGroupCommand,
  UpdatePackagingGroupRequest$,
  UpdatePackagingGroupResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaPackageVodClient === "function");
assert(typeof MediaPackageVod === "function");
// commands
assert(typeof ConfigureLogsCommand === "function");
assert(typeof ConfigureLogs$ === "object");
assert(typeof CreateAssetCommand === "function");
assert(typeof CreateAsset$ === "object");
assert(typeof CreatePackagingConfigurationCommand === "function");
assert(typeof CreatePackagingConfiguration$ === "object");
assert(typeof CreatePackagingGroupCommand === "function");
assert(typeof CreatePackagingGroup$ === "object");
assert(typeof DeleteAssetCommand === "function");
assert(typeof DeleteAsset$ === "object");
assert(typeof DeletePackagingConfigurationCommand === "function");
assert(typeof DeletePackagingConfiguration$ === "object");
assert(typeof DeletePackagingGroupCommand === "function");
assert(typeof DeletePackagingGroup$ === "object");
assert(typeof DescribeAssetCommand === "function");
assert(typeof DescribeAsset$ === "object");
assert(typeof DescribePackagingConfigurationCommand === "function");
assert(typeof DescribePackagingConfiguration$ === "object");
assert(typeof DescribePackagingGroupCommand === "function");
assert(typeof DescribePackagingGroup$ === "object");
assert(typeof ListAssetsCommand === "function");
assert(typeof ListAssets$ === "object");
assert(typeof ListPackagingConfigurationsCommand === "function");
assert(typeof ListPackagingConfigurations$ === "object");
assert(typeof ListPackagingGroupsCommand === "function");
assert(typeof ListPackagingGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePackagingGroupCommand === "function");
assert(typeof UpdatePackagingGroup$ === "object");
// structural schemas
assert(typeof AssetShallow$ === "object");
assert(typeof Authorization$ === "object");
assert(typeof CmafEncryption$ === "object");
assert(typeof CmafPackage$ === "object");
assert(typeof ConfigureLogsRequest$ === "object");
assert(typeof ConfigureLogsResponse$ === "object");
assert(typeof CreateAssetRequest$ === "object");
assert(typeof CreateAssetResponse$ === "object");
assert(typeof CreatePackagingConfigurationRequest$ === "object");
assert(typeof CreatePackagingConfigurationResponse$ === "object");
assert(typeof CreatePackagingGroupRequest$ === "object");
assert(typeof CreatePackagingGroupResponse$ === "object");
assert(typeof DashEncryption$ === "object");
assert(typeof DashManifest$ === "object");
assert(typeof DashPackage$ === "object");
assert(typeof DeleteAssetRequest$ === "object");
assert(typeof DeleteAssetResponse$ === "object");
assert(typeof DeletePackagingConfigurationRequest$ === "object");
assert(typeof DeletePackagingConfigurationResponse$ === "object");
assert(typeof DeletePackagingGroupRequest$ === "object");
assert(typeof DeletePackagingGroupResponse$ === "object");
assert(typeof DescribeAssetRequest$ === "object");
assert(typeof DescribeAssetResponse$ === "object");
assert(typeof DescribePackagingConfigurationRequest$ === "object");
assert(typeof DescribePackagingConfigurationResponse$ === "object");
assert(typeof DescribePackagingGroupRequest$ === "object");
assert(typeof DescribePackagingGroupResponse$ === "object");
assert(typeof EgressAccessLogs$ === "object");
assert(typeof EgressEndpoint$ === "object");
assert(typeof EncryptionContractConfiguration$ === "object");
assert(typeof HlsEncryption$ === "object");
assert(typeof HlsManifest$ === "object");
assert(typeof HlsPackage$ === "object");
assert(typeof ListAssetsRequest$ === "object");
assert(typeof ListAssetsResponse$ === "object");
assert(typeof ListPackagingConfigurationsRequest$ === "object");
assert(typeof ListPackagingConfigurationsResponse$ === "object");
assert(typeof ListPackagingGroupsRequest$ === "object");
assert(typeof ListPackagingGroupsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MssEncryption$ === "object");
assert(typeof MssManifest$ === "object");
assert(typeof MssPackage$ === "object");
assert(typeof PackagingConfiguration$ === "object");
assert(typeof PackagingGroup$ === "object");
assert(typeof SpekeKeyProvider$ === "object");
assert(typeof StreamSelection$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdatePackagingGroupRequest$ === "object");
assert(typeof UpdatePackagingGroupResponse$ === "object");
// enums
assert(typeof __PeriodTriggersElement === "object");
assert(typeof AdMarkers === "object");
assert(typeof EncryptionMethod === "object");
assert(typeof ManifestLayout === "object");
assert(typeof PresetSpeke20Audio === "object");
assert(typeof PresetSpeke20Video === "object");
assert(typeof Profile === "object");
assert(typeof ScteMarkersSource === "object");
assert(typeof SegmentTemplateFormat === "object");
assert(typeof StreamOrder === "object");
// errors
assert(ForbiddenException.prototype instanceof MediaPackageVodServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof MediaPackageVodServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof MediaPackageVodServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof MediaPackageVodServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof MediaPackageVodServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnprocessableEntityException.prototype instanceof MediaPackageVodServiceException);
assert(typeof UnprocessableEntityException$ === "object");
assert(MediaPackageVodServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAssets === "function");
assert(typeof paginateListPackagingConfigurations === "function");
assert(typeof paginateListPackagingGroups === "function");
console.log(`MediaPackageVod index test passed.`);
