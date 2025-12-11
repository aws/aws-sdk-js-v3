import {
  AdMarkers,
  ConfigureLogsCommand,
  CreateAssetCommand,
  CreatePackagingConfigurationCommand,
  CreatePackagingGroupCommand,
  DeleteAssetCommand,
  DeletePackagingConfigurationCommand,
  DeletePackagingGroupCommand,
  DescribeAssetCommand,
  DescribePackagingConfigurationCommand,
  DescribePackagingGroupCommand,
  EncryptionMethod,
  ForbiddenException,
  InternalServerErrorException,
  ListAssetsCommand,
  ListPackagingConfigurationsCommand,
  ListPackagingGroupsCommand,
  ListTagsForResourceCommand,
  ManifestLayout,
  MediaPackageVod,
  MediaPackageVodClient,
  MediaPackageVodServiceException,
  NotFoundException,
  PresetSpeke20Audio,
  PresetSpeke20Video,
  Profile,
  ScteMarkersSource,
  SegmentTemplateFormat,
  ServiceUnavailableException,
  StreamOrder,
  TagResourceCommand,
  TooManyRequestsException,
  UnprocessableEntityException,
  UntagResourceCommand,
  UpdatePackagingGroupCommand,
  __PeriodTriggersElement,
  paginateListAssets,
  paginateListPackagingConfigurations,
  paginateListPackagingGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaPackageVodClient === "function");
assert(typeof MediaPackageVod === "function");
// commands
assert(typeof ConfigureLogsCommand === "function");
assert(typeof CreateAssetCommand === "function");
assert(typeof CreatePackagingConfigurationCommand === "function");
assert(typeof CreatePackagingGroupCommand === "function");
assert(typeof DeleteAssetCommand === "function");
assert(typeof DeletePackagingConfigurationCommand === "function");
assert(typeof DeletePackagingGroupCommand === "function");
assert(typeof DescribeAssetCommand === "function");
assert(typeof DescribePackagingConfigurationCommand === "function");
assert(typeof DescribePackagingGroupCommand === "function");
assert(typeof ListAssetsCommand === "function");
assert(typeof ListPackagingConfigurationsCommand === "function");
assert(typeof ListPackagingGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdatePackagingGroupCommand === "function");
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
assert(InternalServerErrorException.prototype instanceof MediaPackageVodServiceException);
assert(NotFoundException.prototype instanceof MediaPackageVodServiceException);
assert(ServiceUnavailableException.prototype instanceof MediaPackageVodServiceException);
assert(TooManyRequestsException.prototype instanceof MediaPackageVodServiceException);
assert(UnprocessableEntityException.prototype instanceof MediaPackageVodServiceException);
assert(MediaPackageVodServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAssets === "function");
assert(typeof paginateListPackagingConfigurations === "function");
assert(typeof paginateListPackagingGroups === "function");
console.log(`MediaPackageVod index test passed.`);
