import {
  AccessDeniedException,
  AccessDeniedException$,
  AlternateSoftwareMetadata$,
  ApplicationInstance$,
  ApplicationInstanceHealthStatus,
  ApplicationInstanceStatus,
  ConflictException,
  ConflictException$,
  ConflictExceptionErrorArgument$,
  ConnectionType,
  CreateApplicationInstance$,
  CreateApplicationInstanceCommand,
  CreateApplicationInstanceRequest$,
  CreateApplicationInstanceResponse$,
  CreateJobForDevices$,
  CreateJobForDevicesCommand,
  CreateJobForDevicesRequest$,
  CreateJobForDevicesResponse$,
  CreateNodeFromTemplateJob$,
  CreateNodeFromTemplateJobCommand,
  CreateNodeFromTemplateJobRequest$,
  CreateNodeFromTemplateJobResponse$,
  CreatePackage$,
  CreatePackageCommand,
  CreatePackageImportJob$,
  CreatePackageImportJobCommand,
  CreatePackageImportJobRequest$,
  CreatePackageImportJobResponse$,
  CreatePackageRequest$,
  CreatePackageResponse$,
  DeleteDevice$,
  DeleteDeviceCommand,
  DeleteDeviceRequest$,
  DeleteDeviceResponse$,
  DeletePackage$,
  DeletePackageCommand,
  DeletePackageRequest$,
  DeletePackageResponse$,
  DeregisterPackageVersion$,
  DeregisterPackageVersionCommand,
  DeregisterPackageVersionRequest$,
  DeregisterPackageVersionResponse$,
  DescribeApplicationInstance$,
  DescribeApplicationInstanceCommand,
  DescribeApplicationInstanceDetails$,
  DescribeApplicationInstanceDetailsCommand,
  DescribeApplicationInstanceDetailsRequest$,
  DescribeApplicationInstanceDetailsResponse$,
  DescribeApplicationInstanceRequest$,
  DescribeApplicationInstanceResponse$,
  DescribeDevice$,
  DescribeDeviceCommand,
  DescribeDeviceJob$,
  DescribeDeviceJobCommand,
  DescribeDeviceJobRequest$,
  DescribeDeviceJobResponse$,
  DescribeDeviceRequest$,
  DescribeDeviceResponse$,
  DescribeNode$,
  DescribeNodeCommand,
  DescribeNodeFromTemplateJob$,
  DescribeNodeFromTemplateJobCommand,
  DescribeNodeFromTemplateJobRequest$,
  DescribeNodeFromTemplateJobResponse$,
  DescribeNodeRequest$,
  DescribeNodeResponse$,
  DescribePackage$,
  DescribePackageCommand,
  DescribePackageImportJob$,
  DescribePackageImportJobCommand,
  DescribePackageImportJobRequest$,
  DescribePackageImportJobResponse$,
  DescribePackageRequest$,
  DescribePackageResponse$,
  DescribePackageVersion$,
  DescribePackageVersionCommand,
  DescribePackageVersionRequest$,
  DescribePackageVersionResponse$,
  DesiredState,
  Device$,
  DeviceAggregatedStatus,
  DeviceBrand,
  DeviceConnectionStatus,
  DeviceJob$,
  DeviceJobConfig$,
  DeviceReportedStatus,
  DeviceStatus,
  DeviceType,
  EthernetPayload$,
  EthernetStatus$,
  InternalServerException,
  InternalServerException$,
  Job$,
  JobResourceTags$,
  JobResourceType,
  JobType,
  LatestDeviceJob$,
  ListApplicationInstanceDependencies$,
  ListApplicationInstanceDependenciesCommand,
  ListApplicationInstanceDependenciesRequest$,
  ListApplicationInstanceDependenciesResponse$,
  ListApplicationInstanceNodeInstances$,
  ListApplicationInstanceNodeInstancesCommand,
  ListApplicationInstanceNodeInstancesRequest$,
  ListApplicationInstanceNodeInstancesResponse$,
  ListApplicationInstances$,
  ListApplicationInstancesCommand,
  ListApplicationInstancesRequest$,
  ListApplicationInstancesResponse$,
  ListDevices$,
  ListDevicesCommand,
  ListDevicesJobs$,
  ListDevicesJobsCommand,
  ListDevicesJobsRequest$,
  ListDevicesJobsResponse$,
  ListDevicesRequest$,
  ListDevicesResponse$,
  ListDevicesSortBy,
  ListNodeFromTemplateJobs$,
  ListNodeFromTemplateJobsCommand,
  ListNodeFromTemplateJobsRequest$,
  ListNodeFromTemplateJobsResponse$,
  ListNodes$,
  ListNodesCommand,
  ListNodesRequest$,
  ListNodesResponse$,
  ListPackageImportJobs$,
  ListPackageImportJobsCommand,
  ListPackageImportJobsRequest$,
  ListPackageImportJobsResponse$,
  ListPackages$,
  ListPackagesCommand,
  ListPackagesRequest$,
  ListPackagesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManifestOverridesPayload$,
  ManifestPayload$,
  NetworkConnectionStatus,
  NetworkPayload$,
  NetworkStatus$,
  Node$,
  NodeCategory,
  NodeFromTemplateJob$,
  NodeFromTemplateJobStatus,
  NodeInputPort$,
  NodeInstance$,
  NodeInstanceStatus,
  NodeInterface$,
  NodeOutputPort$,
  NodeSignal$,
  NodeSignalValue,
  NtpPayload$,
  NtpStatus$,
  OTAJobConfig$,
  OutPutS3Location$,
  PackageImportJob$,
  PackageImportJobInputConfig$,
  PackageImportJobOutput$,
  PackageImportJobOutputConfig$,
  PackageImportJobStatus,
  PackageImportJobType,
  PackageListItem$,
  PackageObject$,
  PackageVersionInputConfig$,
  PackageVersionOutputConfig$,
  PackageVersionStatus,
  Panorama,
  PanoramaClient,
  PanoramaServiceException,
  PortType,
  ProvisionDevice$,
  ProvisionDeviceCommand,
  ProvisionDeviceRequest$,
  ProvisionDeviceResponse$,
  RegisterPackageVersion$,
  RegisterPackageVersionCommand,
  RegisterPackageVersionRequest$,
  RegisterPackageVersionResponse$,
  RemoveApplicationInstance$,
  RemoveApplicationInstanceCommand,
  RemoveApplicationInstanceRequest$,
  RemoveApplicationInstanceResponse$,
  ReportedRuntimeContextState$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Location$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SignalApplicationInstanceNodeInstances$,
  SignalApplicationInstanceNodeInstancesCommand,
  SignalApplicationInstanceNodeInstancesRequest$,
  SignalApplicationInstanceNodeInstancesResponse$,
  SortOrder,
  StaticIpConnectionInfo$,
  StatusFilter,
  StorageLocation$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TemplateType,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDeviceMetadata$,
  UpdateDeviceMetadataCommand,
  UpdateDeviceMetadataRequest$,
  UpdateDeviceMetadataResponse$,
  UpdateProgress,
  ValidationException,
  ValidationException$,
  ValidationExceptionErrorArgument$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListApplicationInstanceDependencies,
  paginateListApplicationInstanceNodeInstances,
  paginateListApplicationInstances,
  paginateListDevices,
  paginateListDevicesJobs,
  paginateListNodeFromTemplateJobs,
  paginateListNodes,
  paginateListPackageImportJobs,
  paginateListPackages,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PanoramaClient === "function");
assert(typeof Panorama === "function");
// commands
assert(typeof CreateApplicationInstanceCommand === "function");
assert(typeof CreateApplicationInstance$ === "object");
assert(typeof CreateJobForDevicesCommand === "function");
assert(typeof CreateJobForDevices$ === "object");
assert(typeof CreateNodeFromTemplateJobCommand === "function");
assert(typeof CreateNodeFromTemplateJob$ === "object");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreatePackage$ === "object");
assert(typeof CreatePackageImportJobCommand === "function");
assert(typeof CreatePackageImportJob$ === "object");
assert(typeof DeleteDeviceCommand === "function");
assert(typeof DeleteDevice$ === "object");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeletePackage$ === "object");
assert(typeof DeregisterPackageVersionCommand === "function");
assert(typeof DeregisterPackageVersion$ === "object");
assert(typeof DescribeApplicationInstanceCommand === "function");
assert(typeof DescribeApplicationInstance$ === "object");
assert(typeof DescribeApplicationInstanceDetailsCommand === "function");
assert(typeof DescribeApplicationInstanceDetails$ === "object");
assert(typeof DescribeDeviceCommand === "function");
assert(typeof DescribeDevice$ === "object");
assert(typeof DescribeDeviceJobCommand === "function");
assert(typeof DescribeDeviceJob$ === "object");
assert(typeof DescribeNodeCommand === "function");
assert(typeof DescribeNode$ === "object");
assert(typeof DescribeNodeFromTemplateJobCommand === "function");
assert(typeof DescribeNodeFromTemplateJob$ === "object");
assert(typeof DescribePackageCommand === "function");
assert(typeof DescribePackage$ === "object");
assert(typeof DescribePackageImportJobCommand === "function");
assert(typeof DescribePackageImportJob$ === "object");
assert(typeof DescribePackageVersionCommand === "function");
assert(typeof DescribePackageVersion$ === "object");
assert(typeof ListApplicationInstanceDependenciesCommand === "function");
assert(typeof ListApplicationInstanceDependencies$ === "object");
assert(typeof ListApplicationInstanceNodeInstancesCommand === "function");
assert(typeof ListApplicationInstanceNodeInstances$ === "object");
assert(typeof ListApplicationInstancesCommand === "function");
assert(typeof ListApplicationInstances$ === "object");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListDevices$ === "object");
assert(typeof ListDevicesJobsCommand === "function");
assert(typeof ListDevicesJobs$ === "object");
assert(typeof ListNodeFromTemplateJobsCommand === "function");
assert(typeof ListNodeFromTemplateJobs$ === "object");
assert(typeof ListNodesCommand === "function");
assert(typeof ListNodes$ === "object");
assert(typeof ListPackageImportJobsCommand === "function");
assert(typeof ListPackageImportJobs$ === "object");
assert(typeof ListPackagesCommand === "function");
assert(typeof ListPackages$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ProvisionDeviceCommand === "function");
assert(typeof ProvisionDevice$ === "object");
assert(typeof RegisterPackageVersionCommand === "function");
assert(typeof RegisterPackageVersion$ === "object");
assert(typeof RemoveApplicationInstanceCommand === "function");
assert(typeof RemoveApplicationInstance$ === "object");
assert(typeof SignalApplicationInstanceNodeInstancesCommand === "function");
assert(typeof SignalApplicationInstanceNodeInstances$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDeviceMetadataCommand === "function");
assert(typeof UpdateDeviceMetadata$ === "object");
// structural schemas
assert(typeof AlternateSoftwareMetadata$ === "object");
assert(typeof ApplicationInstance$ === "object");
assert(typeof ConflictExceptionErrorArgument$ === "object");
assert(typeof CreateApplicationInstanceRequest$ === "object");
assert(typeof CreateApplicationInstanceResponse$ === "object");
assert(typeof CreateJobForDevicesRequest$ === "object");
assert(typeof CreateJobForDevicesResponse$ === "object");
assert(typeof CreateNodeFromTemplateJobRequest$ === "object");
assert(typeof CreateNodeFromTemplateJobResponse$ === "object");
assert(typeof CreatePackageImportJobRequest$ === "object");
assert(typeof CreatePackageImportJobResponse$ === "object");
assert(typeof CreatePackageRequest$ === "object");
assert(typeof CreatePackageResponse$ === "object");
assert(typeof DeleteDeviceRequest$ === "object");
assert(typeof DeleteDeviceResponse$ === "object");
assert(typeof DeletePackageRequest$ === "object");
assert(typeof DeletePackageResponse$ === "object");
assert(typeof DeregisterPackageVersionRequest$ === "object");
assert(typeof DeregisterPackageVersionResponse$ === "object");
assert(typeof DescribeApplicationInstanceDetailsRequest$ === "object");
assert(typeof DescribeApplicationInstanceDetailsResponse$ === "object");
assert(typeof DescribeApplicationInstanceRequest$ === "object");
assert(typeof DescribeApplicationInstanceResponse$ === "object");
assert(typeof DescribeDeviceJobRequest$ === "object");
assert(typeof DescribeDeviceJobResponse$ === "object");
assert(typeof DescribeDeviceRequest$ === "object");
assert(typeof DescribeDeviceResponse$ === "object");
assert(typeof DescribeNodeFromTemplateJobRequest$ === "object");
assert(typeof DescribeNodeFromTemplateJobResponse$ === "object");
assert(typeof DescribeNodeRequest$ === "object");
assert(typeof DescribeNodeResponse$ === "object");
assert(typeof DescribePackageImportJobRequest$ === "object");
assert(typeof DescribePackageImportJobResponse$ === "object");
assert(typeof DescribePackageRequest$ === "object");
assert(typeof DescribePackageResponse$ === "object");
assert(typeof DescribePackageVersionRequest$ === "object");
assert(typeof DescribePackageVersionResponse$ === "object");
assert(typeof Device$ === "object");
assert(typeof DeviceJob$ === "object");
assert(typeof DeviceJobConfig$ === "object");
assert(typeof EthernetPayload$ === "object");
assert(typeof EthernetStatus$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobResourceTags$ === "object");
assert(typeof LatestDeviceJob$ === "object");
assert(typeof ListApplicationInstanceDependenciesRequest$ === "object");
assert(typeof ListApplicationInstanceDependenciesResponse$ === "object");
assert(typeof ListApplicationInstanceNodeInstancesRequest$ === "object");
assert(typeof ListApplicationInstanceNodeInstancesResponse$ === "object");
assert(typeof ListApplicationInstancesRequest$ === "object");
assert(typeof ListApplicationInstancesResponse$ === "object");
assert(typeof ListDevicesJobsRequest$ === "object");
assert(typeof ListDevicesJobsResponse$ === "object");
assert(typeof ListDevicesRequest$ === "object");
assert(typeof ListDevicesResponse$ === "object");
assert(typeof ListNodeFromTemplateJobsRequest$ === "object");
assert(typeof ListNodeFromTemplateJobsResponse$ === "object");
assert(typeof ListNodesRequest$ === "object");
assert(typeof ListNodesResponse$ === "object");
assert(typeof ListPackageImportJobsRequest$ === "object");
assert(typeof ListPackageImportJobsResponse$ === "object");
assert(typeof ListPackagesRequest$ === "object");
assert(typeof ListPackagesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManifestOverridesPayload$ === "object");
assert(typeof ManifestPayload$ === "object");
assert(typeof NetworkPayload$ === "object");
assert(typeof NetworkStatus$ === "object");
assert(typeof Node$ === "object");
assert(typeof NodeFromTemplateJob$ === "object");
assert(typeof NodeInputPort$ === "object");
assert(typeof NodeInstance$ === "object");
assert(typeof NodeInterface$ === "object");
assert(typeof NodeOutputPort$ === "object");
assert(typeof NodeSignal$ === "object");
assert(typeof NtpPayload$ === "object");
assert(typeof NtpStatus$ === "object");
assert(typeof OTAJobConfig$ === "object");
assert(typeof OutPutS3Location$ === "object");
assert(typeof PackageImportJob$ === "object");
assert(typeof PackageImportJobInputConfig$ === "object");
assert(typeof PackageImportJobOutput$ === "object");
assert(typeof PackageImportJobOutputConfig$ === "object");
assert(typeof PackageListItem$ === "object");
assert(typeof PackageObject$ === "object");
assert(typeof PackageVersionInputConfig$ === "object");
assert(typeof PackageVersionOutputConfig$ === "object");
assert(typeof ProvisionDeviceRequest$ === "object");
assert(typeof ProvisionDeviceResponse$ === "object");
assert(typeof RegisterPackageVersionRequest$ === "object");
assert(typeof RegisterPackageVersionResponse$ === "object");
assert(typeof RemoveApplicationInstanceRequest$ === "object");
assert(typeof RemoveApplicationInstanceResponse$ === "object");
assert(typeof ReportedRuntimeContextState$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SignalApplicationInstanceNodeInstancesRequest$ === "object");
assert(typeof SignalApplicationInstanceNodeInstancesResponse$ === "object");
assert(typeof StaticIpConnectionInfo$ === "object");
assert(typeof StorageLocation$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDeviceMetadataRequest$ === "object");
assert(typeof UpdateDeviceMetadataResponse$ === "object");
assert(typeof ValidationExceptionErrorArgument$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof ApplicationInstanceHealthStatus === "object");
assert(typeof ApplicationInstanceStatus === "object");
assert(typeof ConnectionType === "object");
assert(typeof DesiredState === "object");
assert(typeof DeviceAggregatedStatus === "object");
assert(typeof DeviceBrand === "object");
assert(typeof DeviceConnectionStatus === "object");
assert(typeof DeviceReportedStatus === "object");
assert(typeof DeviceStatus === "object");
assert(typeof DeviceType === "object");
assert(typeof JobResourceType === "object");
assert(typeof JobType === "object");
assert(typeof ListDevicesSortBy === "object");
assert(typeof NetworkConnectionStatus === "object");
assert(typeof NodeCategory === "object");
assert(typeof NodeFromTemplateJobStatus === "object");
assert(typeof NodeInstanceStatus === "object");
assert(typeof NodeSignalValue === "object");
assert(typeof PackageImportJobStatus === "object");
assert(typeof PackageImportJobType === "object");
assert(typeof PackageVersionStatus === "object");
assert(typeof PortType === "object");
assert(typeof SortOrder === "object");
assert(typeof StatusFilter === "object");
assert(typeof TemplateType === "object");
assert(typeof UpdateProgress === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PanoramaServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PanoramaServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PanoramaServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PanoramaServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PanoramaServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof PanoramaServiceException);
assert(typeof ValidationException$ === "object");
assert(PanoramaServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationInstanceDependencies === "function");
assert(typeof paginateListApplicationInstanceNodeInstances === "function");
assert(typeof paginateListApplicationInstances === "function");
assert(typeof paginateListDevices === "function");
assert(typeof paginateListDevicesJobs === "function");
assert(typeof paginateListNodeFromTemplateJobs === "function");
assert(typeof paginateListNodes === "function");
assert(typeof paginateListPackageImportJobs === "function");
assert(typeof paginateListPackages === "function");
console.log(`Panorama index test passed.`);
