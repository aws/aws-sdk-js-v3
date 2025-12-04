import {
  AddressType,
  CancelClusterCommand,
  CancelJobCommand,
  ClusterState,
  CreateAddressCommand,
  CreateClusterCommand,
  CreateJobCommand,
  CreateLongTermPricingCommand,
  CreateReturnShippingLabelCommand,
  DescribeAddressCommand,
  DescribeAddressesCommand,
  DescribeClusterCommand,
  DescribeJobCommand,
  DescribeReturnShippingLabelCommand,
  DeviceServiceName,
  GetJobManifestCommand,
  GetJobUnlockCodeCommand,
  GetSnowballUsageCommand,
  GetSoftwareUpdatesCommand,
  ImpactLevel,
  JobState,
  JobType,
  ListClusterJobsCommand,
  ListClustersCommand,
  ListCompatibleImagesCommand,
  ListJobsCommand,
  ListLongTermPricingCommand,
  ListPickupLocationsCommand,
  ListServiceVersionsCommand,
  LongTermPricingType,
  RemoteManagement,
  ServiceName,
  ShipmentState,
  ShippingLabelStatus,
  ShippingOption,
  Snowball,
  SnowballCapacity,
  SnowballClient,
  SnowballServiceException,
  SnowballType,
  StorageUnit,
  TransferOption,
  UpdateClusterCommand,
  UpdateJobCommand,
  UpdateJobShipmentStateCommand,
  UpdateLongTermPricingCommand,
  paginateDescribeAddresses,
  paginateListClusterJobs,
  paginateListClusters,
  paginateListCompatibleImages,
  paginateListJobs,
  paginateListLongTermPricing,
  paginateListPickupLocations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SnowballClient === "function");
assert(typeof Snowball === "function");
// commands
assert(typeof CancelClusterCommand === "function");
assert(typeof CancelJobCommand === "function");
assert(typeof CreateAddressCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateLongTermPricingCommand === "function");
assert(typeof CreateReturnShippingLabelCommand === "function");
assert(typeof DescribeAddressCommand === "function");
assert(typeof DescribeAddressesCommand === "function");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeReturnShippingLabelCommand === "function");
assert(typeof GetJobManifestCommand === "function");
assert(typeof GetJobUnlockCodeCommand === "function");
assert(typeof GetSnowballUsageCommand === "function");
assert(typeof GetSoftwareUpdatesCommand === "function");
assert(typeof ListClusterJobsCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListCompatibleImagesCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListLongTermPricingCommand === "function");
assert(typeof ListPickupLocationsCommand === "function");
assert(typeof ListServiceVersionsCommand === "function");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateJobShipmentStateCommand === "function");
assert(typeof UpdateLongTermPricingCommand === "function");
// enums
assert(typeof AddressType === "object");
assert(typeof ClusterState === "object");
assert(typeof DeviceServiceName === "object");
assert(typeof ImpactLevel === "object");
assert(typeof JobState === "object");
assert(typeof JobType === "object");
assert(typeof LongTermPricingType === "object");
assert(typeof RemoteManagement === "object");
assert(typeof ServiceName === "object");
assert(typeof ShipmentState === "object");
assert(typeof ShippingLabelStatus === "object");
assert(typeof ShippingOption === "object");
assert(typeof SnowballCapacity === "object");
assert(typeof SnowballType === "object");
assert(typeof StorageUnit === "object");
assert(typeof TransferOption === "object");
// errors
assert(SnowballServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeAddresses === "function");
assert(typeof paginateListClusterJobs === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListCompatibleImages === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListLongTermPricing === "function");
assert(typeof paginateListPickupLocations === "function");
console.log(`Snowball index test passed.`);
