import {
  AddressType,
  CancelClusterCommand,
  CancelJobCommand,
  ClusterLimitExceededException,
  ClusterState,
  ConflictException,
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
  Ec2RequestFailedException,
  GetJobManifestCommand,
  GetJobUnlockCodeCommand,
  GetSnowballUsageCommand,
  GetSoftwareUpdatesCommand,
  ImpactLevel,
  InvalidAddressException,
  InvalidInputCombinationException,
  InvalidJobStateException,
  InvalidNextTokenException,
  InvalidResourceException,
  JobState,
  JobType,
  KMSRequestFailedException,
  ListClusterJobsCommand,
  ListClustersCommand,
  ListCompatibleImagesCommand,
  ListJobsCommand,
  ListLongTermPricingCommand,
  ListPickupLocationsCommand,
  ListServiceVersionsCommand,
  LongTermPricingType,
  RemoteManagement,
  ReturnShippingLabelAlreadyExistsException,
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
  UnsupportedAddressException,
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
assert(ClusterLimitExceededException.prototype instanceof SnowballServiceException);
assert(ConflictException.prototype instanceof SnowballServiceException);
assert(Ec2RequestFailedException.prototype instanceof SnowballServiceException);
assert(InvalidAddressException.prototype instanceof SnowballServiceException);
assert(InvalidInputCombinationException.prototype instanceof SnowballServiceException);
assert(InvalidJobStateException.prototype instanceof SnowballServiceException);
assert(InvalidNextTokenException.prototype instanceof SnowballServiceException);
assert(InvalidResourceException.prototype instanceof SnowballServiceException);
assert(KMSRequestFailedException.prototype instanceof SnowballServiceException);
assert(ReturnShippingLabelAlreadyExistsException.prototype instanceof SnowballServiceException);
assert(UnsupportedAddressException.prototype instanceof SnowballServiceException);
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
