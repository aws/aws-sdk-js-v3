import {
  Address$,
  AddressType,
  CancelCluster$,
  CancelClusterCommand,
  CancelClusterRequest$,
  CancelClusterResult$,
  CancelJob$,
  CancelJobCommand,
  CancelJobRequest$,
  CancelJobResult$,
  ClusterLimitExceededException,
  ClusterLimitExceededException$,
  ClusterListEntry$,
  ClusterMetadata$,
  ClusterState,
  CompatibleImage$,
  ConflictException,
  ConflictException$,
  CreateAddress$,
  CreateAddressCommand,
  CreateAddressRequest$,
  CreateAddressResult$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResult$,
  CreateJob$,
  CreateJobCommand,
  CreateJobRequest$,
  CreateJobResult$,
  CreateLongTermPricing$,
  CreateLongTermPricingCommand,
  CreateLongTermPricingRequest$,
  CreateLongTermPricingResult$,
  CreateReturnShippingLabel$,
  CreateReturnShippingLabelCommand,
  CreateReturnShippingLabelRequest$,
  CreateReturnShippingLabelResult$,
  DataTransfer$,
  DependentService$,
  DescribeAddress$,
  DescribeAddressCommand,
  DescribeAddressRequest$,
  DescribeAddressResult$,
  DescribeAddresses$,
  DescribeAddressesCommand,
  DescribeAddressesRequest$,
  DescribeAddressesResult$,
  DescribeCluster$,
  DescribeClusterCommand,
  DescribeClusterRequest$,
  DescribeClusterResult$,
  DescribeJob$,
  DescribeJobCommand,
  DescribeJobRequest$,
  DescribeJobResult$,
  DescribeReturnShippingLabel$,
  DescribeReturnShippingLabelCommand,
  DescribeReturnShippingLabelRequest$,
  DescribeReturnShippingLabelResult$,
  DeviceConfiguration$,
  DeviceServiceName,
  EKSOnDeviceServiceConfiguration$,
  Ec2AmiResource$,
  Ec2RequestFailedException,
  Ec2RequestFailedException$,
  EventTriggerDefinition$,
  GetJobManifest$,
  GetJobManifestCommand,
  GetJobManifestRequest$,
  GetJobManifestResult$,
  GetJobUnlockCode$,
  GetJobUnlockCodeCommand,
  GetJobUnlockCodeRequest$,
  GetJobUnlockCodeResult$,
  GetSnowballUsage$,
  GetSnowballUsageCommand,
  GetSnowballUsageRequest$,
  GetSnowballUsageResult$,
  GetSoftwareUpdates$,
  GetSoftwareUpdatesCommand,
  GetSoftwareUpdatesRequest$,
  GetSoftwareUpdatesResult$,
  INDTaxDocuments$,
  ImpactLevel,
  InvalidAddressException,
  InvalidAddressException$,
  InvalidInputCombinationException,
  InvalidInputCombinationException$,
  InvalidJobStateException,
  InvalidJobStateException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidResourceException,
  InvalidResourceException$,
  JobListEntry$,
  JobLogs$,
  JobMetadata$,
  JobResource$,
  JobState,
  JobType,
  KMSRequestFailedException,
  KMSRequestFailedException$,
  KeyRange$,
  LambdaResource$,
  ListClusterJobs$,
  ListClusterJobsCommand,
  ListClusterJobsRequest$,
  ListClusterJobsResult$,
  ListClusters$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResult$,
  ListCompatibleImages$,
  ListCompatibleImagesCommand,
  ListCompatibleImagesRequest$,
  ListCompatibleImagesResult$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResult$,
  ListLongTermPricing$,
  ListLongTermPricingCommand,
  ListLongTermPricingRequest$,
  ListLongTermPricingResult$,
  ListPickupLocations$,
  ListPickupLocationsCommand,
  ListPickupLocationsRequest$,
  ListPickupLocationsResult$,
  ListServiceVersions$,
  ListServiceVersionsCommand,
  ListServiceVersionsRequest$,
  ListServiceVersionsResult$,
  LongTermPricingListEntry$,
  LongTermPricingType,
  NFSOnDeviceServiceConfiguration$,
  Notification$,
  OnDeviceServiceConfiguration$,
  PickupDetails$,
  RemoteManagement,
  ReturnShippingLabelAlreadyExistsException,
  ReturnShippingLabelAlreadyExistsException$,
  S3OnDeviceServiceConfiguration$,
  S3Resource$,
  ServiceName,
  ServiceVersion$,
  Shipment$,
  ShipmentState,
  ShippingDetails$,
  ShippingLabelStatus,
  ShippingOption,
  Snowball,
  SnowballCapacity,
  SnowballClient,
  SnowballServiceException,
  SnowballType,
  SnowconeDeviceConfiguration$,
  StorageUnit,
  TGWOnDeviceServiceConfiguration$,
  TargetOnDeviceService$,
  TaxDocuments$,
  TransferOption,
  UnsupportedAddressException,
  UnsupportedAddressException$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResult$,
  UpdateJob$,
  UpdateJobCommand,
  UpdateJobRequest$,
  UpdateJobResult$,
  UpdateJobShipmentState$,
  UpdateJobShipmentStateCommand,
  UpdateJobShipmentStateRequest$,
  UpdateJobShipmentStateResult$,
  UpdateLongTermPricing$,
  UpdateLongTermPricingCommand,
  UpdateLongTermPricingRequest$,
  UpdateLongTermPricingResult$,
  WirelessConnection$,
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
assert(typeof CancelCluster$ === "object");
assert(typeof CancelJobCommand === "function");
assert(typeof CancelJob$ === "object");
assert(typeof CreateAddressCommand === "function");
assert(typeof CreateAddress$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreateLongTermPricingCommand === "function");
assert(typeof CreateLongTermPricing$ === "object");
assert(typeof CreateReturnShippingLabelCommand === "function");
assert(typeof CreateReturnShippingLabel$ === "object");
assert(typeof DescribeAddressCommand === "function");
assert(typeof DescribeAddress$ === "object");
assert(typeof DescribeAddressesCommand === "function");
assert(typeof DescribeAddresses$ === "object");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeCluster$ === "object");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeJob$ === "object");
assert(typeof DescribeReturnShippingLabelCommand === "function");
assert(typeof DescribeReturnShippingLabel$ === "object");
assert(typeof GetJobManifestCommand === "function");
assert(typeof GetJobManifest$ === "object");
assert(typeof GetJobUnlockCodeCommand === "function");
assert(typeof GetJobUnlockCode$ === "object");
assert(typeof GetSnowballUsageCommand === "function");
assert(typeof GetSnowballUsage$ === "object");
assert(typeof GetSoftwareUpdatesCommand === "function");
assert(typeof GetSoftwareUpdates$ === "object");
assert(typeof ListClusterJobsCommand === "function");
assert(typeof ListClusterJobs$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListCompatibleImagesCommand === "function");
assert(typeof ListCompatibleImages$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListLongTermPricingCommand === "function");
assert(typeof ListLongTermPricing$ === "object");
assert(typeof ListPickupLocationsCommand === "function");
assert(typeof ListPickupLocations$ === "object");
assert(typeof ListServiceVersionsCommand === "function");
assert(typeof ListServiceVersions$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateJob$ === "object");
assert(typeof UpdateJobShipmentStateCommand === "function");
assert(typeof UpdateJobShipmentState$ === "object");
assert(typeof UpdateLongTermPricingCommand === "function");
assert(typeof UpdateLongTermPricing$ === "object");
// structural schemas
assert(typeof Address$ === "object");
assert(typeof CancelClusterRequest$ === "object");
assert(typeof CancelClusterResult$ === "object");
assert(typeof CancelJobRequest$ === "object");
assert(typeof CancelJobResult$ === "object");
assert(typeof ClusterListEntry$ === "object");
assert(typeof ClusterMetadata$ === "object");
assert(typeof CompatibleImage$ === "object");
assert(typeof CreateAddressRequest$ === "object");
assert(typeof CreateAddressResult$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResult$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResult$ === "object");
assert(typeof CreateLongTermPricingRequest$ === "object");
assert(typeof CreateLongTermPricingResult$ === "object");
assert(typeof CreateReturnShippingLabelRequest$ === "object");
assert(typeof CreateReturnShippingLabelResult$ === "object");
assert(typeof DataTransfer$ === "object");
assert(typeof DependentService$ === "object");
assert(typeof DescribeAddressesRequest$ === "object");
assert(typeof DescribeAddressesResult$ === "object");
assert(typeof DescribeAddressRequest$ === "object");
assert(typeof DescribeAddressResult$ === "object");
assert(typeof DescribeClusterRequest$ === "object");
assert(typeof DescribeClusterResult$ === "object");
assert(typeof DescribeJobRequest$ === "object");
assert(typeof DescribeJobResult$ === "object");
assert(typeof DescribeReturnShippingLabelRequest$ === "object");
assert(typeof DescribeReturnShippingLabelResult$ === "object");
assert(typeof DeviceConfiguration$ === "object");
assert(typeof Ec2AmiResource$ === "object");
assert(typeof EKSOnDeviceServiceConfiguration$ === "object");
assert(typeof EventTriggerDefinition$ === "object");
assert(typeof GetJobManifestRequest$ === "object");
assert(typeof GetJobManifestResult$ === "object");
assert(typeof GetJobUnlockCodeRequest$ === "object");
assert(typeof GetJobUnlockCodeResult$ === "object");
assert(typeof GetSnowballUsageRequest$ === "object");
assert(typeof GetSnowballUsageResult$ === "object");
assert(typeof GetSoftwareUpdatesRequest$ === "object");
assert(typeof GetSoftwareUpdatesResult$ === "object");
assert(typeof INDTaxDocuments$ === "object");
assert(typeof JobListEntry$ === "object");
assert(typeof JobLogs$ === "object");
assert(typeof JobMetadata$ === "object");
assert(typeof JobResource$ === "object");
assert(typeof KeyRange$ === "object");
assert(typeof LambdaResource$ === "object");
assert(typeof ListClusterJobsRequest$ === "object");
assert(typeof ListClusterJobsResult$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResult$ === "object");
assert(typeof ListCompatibleImagesRequest$ === "object");
assert(typeof ListCompatibleImagesResult$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResult$ === "object");
assert(typeof ListLongTermPricingRequest$ === "object");
assert(typeof ListLongTermPricingResult$ === "object");
assert(typeof ListPickupLocationsRequest$ === "object");
assert(typeof ListPickupLocationsResult$ === "object");
assert(typeof ListServiceVersionsRequest$ === "object");
assert(typeof ListServiceVersionsResult$ === "object");
assert(typeof LongTermPricingListEntry$ === "object");
assert(typeof NFSOnDeviceServiceConfiguration$ === "object");
assert(typeof Notification$ === "object");
assert(typeof OnDeviceServiceConfiguration$ === "object");
assert(typeof PickupDetails$ === "object");
assert(typeof S3OnDeviceServiceConfiguration$ === "object");
assert(typeof S3Resource$ === "object");
assert(typeof ServiceVersion$ === "object");
assert(typeof Shipment$ === "object");
assert(typeof ShippingDetails$ === "object");
assert(typeof SnowconeDeviceConfiguration$ === "object");
assert(typeof TargetOnDeviceService$ === "object");
assert(typeof TaxDocuments$ === "object");
assert(typeof TGWOnDeviceServiceConfiguration$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResult$ === "object");
assert(typeof UpdateJobRequest$ === "object");
assert(typeof UpdateJobResult$ === "object");
assert(typeof UpdateJobShipmentStateRequest$ === "object");
assert(typeof UpdateJobShipmentStateResult$ === "object");
assert(typeof UpdateLongTermPricingRequest$ === "object");
assert(typeof UpdateLongTermPricingResult$ === "object");
assert(typeof WirelessConnection$ === "object");
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
assert(typeof ClusterLimitExceededException$ === "object");
assert(ConflictException.prototype instanceof SnowballServiceException);
assert(typeof ConflictException$ === "object");
assert(Ec2RequestFailedException.prototype instanceof SnowballServiceException);
assert(typeof Ec2RequestFailedException$ === "object");
assert(InvalidAddressException.prototype instanceof SnowballServiceException);
assert(typeof InvalidAddressException$ === "object");
assert(InvalidInputCombinationException.prototype instanceof SnowballServiceException);
assert(typeof InvalidInputCombinationException$ === "object");
assert(InvalidJobStateException.prototype instanceof SnowballServiceException);
assert(typeof InvalidJobStateException$ === "object");
assert(InvalidNextTokenException.prototype instanceof SnowballServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidResourceException.prototype instanceof SnowballServiceException);
assert(typeof InvalidResourceException$ === "object");
assert(KMSRequestFailedException.prototype instanceof SnowballServiceException);
assert(typeof KMSRequestFailedException$ === "object");
assert(ReturnShippingLabelAlreadyExistsException.prototype instanceof SnowballServiceException);
assert(typeof ReturnShippingLabelAlreadyExistsException$ === "object");
assert(UnsupportedAddressException.prototype instanceof SnowballServiceException);
assert(typeof UnsupportedAddressException$ === "object");
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
