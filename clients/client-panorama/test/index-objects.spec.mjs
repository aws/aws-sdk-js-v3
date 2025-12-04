import {
  ApplicationInstanceHealthStatus,
  ApplicationInstanceStatus,
  ConnectionType,
  CreateApplicationInstanceCommand,
  CreateJobForDevicesCommand,
  CreateNodeFromTemplateJobCommand,
  CreatePackageCommand,
  CreatePackageImportJobCommand,
  DeleteDeviceCommand,
  DeletePackageCommand,
  DeregisterPackageVersionCommand,
  DescribeApplicationInstanceCommand,
  DescribeApplicationInstanceDetailsCommand,
  DescribeDeviceCommand,
  DescribeDeviceJobCommand,
  DescribeNodeCommand,
  DescribeNodeFromTemplateJobCommand,
  DescribePackageCommand,
  DescribePackageImportJobCommand,
  DescribePackageVersionCommand,
  DesiredState,
  DeviceAggregatedStatus,
  DeviceBrand,
  DeviceConnectionStatus,
  DeviceReportedStatus,
  DeviceStatus,
  DeviceType,
  JobResourceType,
  JobType,
  ListApplicationInstanceDependenciesCommand,
  ListApplicationInstanceNodeInstancesCommand,
  ListApplicationInstancesCommand,
  ListDevicesCommand,
  ListDevicesJobsCommand,
  ListDevicesSortBy,
  ListNodeFromTemplateJobsCommand,
  ListNodesCommand,
  ListPackageImportJobsCommand,
  ListPackagesCommand,
  ListTagsForResourceCommand,
  NetworkConnectionStatus,
  NodeCategory,
  NodeFromTemplateJobStatus,
  NodeInstanceStatus,
  NodeSignalValue,
  PackageImportJobStatus,
  PackageImportJobType,
  PackageVersionStatus,
  Panorama,
  PanoramaClient,
  PanoramaServiceException,
  PortType,
  ProvisionDeviceCommand,
  RegisterPackageVersionCommand,
  RemoveApplicationInstanceCommand,
  SignalApplicationInstanceNodeInstancesCommand,
  SortOrder,
  StatusFilter,
  TagResourceCommand,
  TemplateType,
  UntagResourceCommand,
  UpdateDeviceMetadataCommand,
  UpdateProgress,
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
assert(typeof CreateJobForDevicesCommand === "function");
assert(typeof CreateNodeFromTemplateJobCommand === "function");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreatePackageImportJobCommand === "function");
assert(typeof DeleteDeviceCommand === "function");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeregisterPackageVersionCommand === "function");
assert(typeof DescribeApplicationInstanceCommand === "function");
assert(typeof DescribeApplicationInstanceDetailsCommand === "function");
assert(typeof DescribeDeviceCommand === "function");
assert(typeof DescribeDeviceJobCommand === "function");
assert(typeof DescribeNodeCommand === "function");
assert(typeof DescribeNodeFromTemplateJobCommand === "function");
assert(typeof DescribePackageCommand === "function");
assert(typeof DescribePackageImportJobCommand === "function");
assert(typeof DescribePackageVersionCommand === "function");
assert(typeof ListApplicationInstanceDependenciesCommand === "function");
assert(typeof ListApplicationInstanceNodeInstancesCommand === "function");
assert(typeof ListApplicationInstancesCommand === "function");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListDevicesJobsCommand === "function");
assert(typeof ListNodeFromTemplateJobsCommand === "function");
assert(typeof ListNodesCommand === "function");
assert(typeof ListPackageImportJobsCommand === "function");
assert(typeof ListPackagesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ProvisionDeviceCommand === "function");
assert(typeof RegisterPackageVersionCommand === "function");
assert(typeof RemoveApplicationInstanceCommand === "function");
assert(typeof SignalApplicationInstanceNodeInstancesCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDeviceMetadataCommand === "function");
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
// errors
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
