import {
  AcceptMarketplaceRegistrationCommand,
  Access,
  AssociateIamRoleToResourceCommand,
  ComputeModel,
  CreateCloudAutonomousVmClusterCommand,
  CreateCloudExadataInfrastructureCommand,
  CreateCloudVmClusterCommand,
  CreateOdbNetworkCommand,
  CreateOdbPeeringConnectionCommand,
  DayOfWeekName,
  DbNodeMaintenanceType,
  DbNodeResourceStatus,
  DbServerPatchingStatus,
  DeleteCloudAutonomousVmClusterCommand,
  DeleteCloudExadataInfrastructureCommand,
  DeleteCloudVmClusterCommand,
  DeleteOdbNetworkCommand,
  DeleteOdbPeeringConnectionCommand,
  DisassociateIamRoleFromResourceCommand,
  DiskRedundancy,
  GetCloudAutonomousVmClusterCommand,
  GetCloudExadataInfrastructureCommand,
  GetCloudExadataInfrastructureUnallocatedResourcesCommand,
  GetCloudVmClusterCommand,
  GetDbNodeCommand,
  GetDbServerCommand,
  GetOciOnboardingStatusCommand,
  GetOdbNetworkCommand,
  GetOdbPeeringConnectionCommand,
  IamRoleStatus,
  InitializeServiceCommand,
  IormLifecycleState,
  LicenseModel,
  ListAutonomousVirtualMachinesCommand,
  ListCloudAutonomousVmClustersCommand,
  ListCloudExadataInfrastructuresCommand,
  ListCloudVmClustersCommand,
  ListDbNodesCommand,
  ListDbServersCommand,
  ListDbSystemShapesCommand,
  ListGiVersionsCommand,
  ListOdbNetworksCommand,
  ListOdbPeeringConnectionsCommand,
  ListSystemVersionsCommand,
  ListTagsForResourceCommand,
  ManagedResourceStatus,
  MonthName,
  Objective,
  OciOnboardingStatus,
  Odb,
  OdbClient,
  OdbServiceException,
  PatchingModeType,
  PreferenceType,
  RebootDbNodeCommand,
  ResourceStatus,
  ShapeType,
  StartDbNodeCommand,
  StopDbNodeCommand,
  SupportedAwsIntegration,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCloudExadataInfrastructureCommand,
  UpdateOdbNetworkCommand,
  UpdateOdbPeeringConnectionCommand,
  VpcEndpointType,
  paginateListAutonomousVirtualMachines,
  paginateListCloudAutonomousVmClusters,
  paginateListCloudExadataInfrastructures,
  paginateListCloudVmClusters,
  paginateListDbNodes,
  paginateListDbServers,
  paginateListDbSystemShapes,
  paginateListGiVersions,
  paginateListOdbNetworks,
  paginateListOdbPeeringConnections,
  paginateListSystemVersions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OdbClient === "function");
assert(typeof Odb === "function");
// commands
assert(typeof AcceptMarketplaceRegistrationCommand === "function");
assert(typeof AssociateIamRoleToResourceCommand === "function");
assert(typeof CreateCloudAutonomousVmClusterCommand === "function");
assert(typeof CreateCloudExadataInfrastructureCommand === "function");
assert(typeof CreateCloudVmClusterCommand === "function");
assert(typeof CreateOdbNetworkCommand === "function");
assert(typeof CreateOdbPeeringConnectionCommand === "function");
assert(typeof DeleteCloudAutonomousVmClusterCommand === "function");
assert(typeof DeleteCloudExadataInfrastructureCommand === "function");
assert(typeof DeleteCloudVmClusterCommand === "function");
assert(typeof DeleteOdbNetworkCommand === "function");
assert(typeof DeleteOdbPeeringConnectionCommand === "function");
assert(typeof DisassociateIamRoleFromResourceCommand === "function");
assert(typeof GetCloudAutonomousVmClusterCommand === "function");
assert(typeof GetCloudExadataInfrastructureCommand === "function");
assert(typeof GetCloudExadataInfrastructureUnallocatedResourcesCommand === "function");
assert(typeof GetCloudVmClusterCommand === "function");
assert(typeof GetDbNodeCommand === "function");
assert(typeof GetDbServerCommand === "function");
assert(typeof GetOciOnboardingStatusCommand === "function");
assert(typeof GetOdbNetworkCommand === "function");
assert(typeof GetOdbPeeringConnectionCommand === "function");
assert(typeof InitializeServiceCommand === "function");
assert(typeof ListAutonomousVirtualMachinesCommand === "function");
assert(typeof ListCloudAutonomousVmClustersCommand === "function");
assert(typeof ListCloudExadataInfrastructuresCommand === "function");
assert(typeof ListCloudVmClustersCommand === "function");
assert(typeof ListDbNodesCommand === "function");
assert(typeof ListDbServersCommand === "function");
assert(typeof ListDbSystemShapesCommand === "function");
assert(typeof ListGiVersionsCommand === "function");
assert(typeof ListOdbNetworksCommand === "function");
assert(typeof ListOdbPeeringConnectionsCommand === "function");
assert(typeof ListSystemVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RebootDbNodeCommand === "function");
assert(typeof StartDbNodeCommand === "function");
assert(typeof StopDbNodeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCloudExadataInfrastructureCommand === "function");
assert(typeof UpdateOdbNetworkCommand === "function");
assert(typeof UpdateOdbPeeringConnectionCommand === "function");
// enums
assert(typeof Access === "object");
assert(typeof ComputeModel === "object");
assert(typeof DayOfWeekName === "object");
assert(typeof DbNodeMaintenanceType === "object");
assert(typeof DbNodeResourceStatus === "object");
assert(typeof DbServerPatchingStatus === "object");
assert(typeof DiskRedundancy === "object");
assert(typeof IamRoleStatus === "object");
assert(typeof IormLifecycleState === "object");
assert(typeof LicenseModel === "object");
assert(typeof ManagedResourceStatus === "object");
assert(typeof MonthName === "object");
assert(typeof Objective === "object");
assert(typeof OciOnboardingStatus === "object");
assert(typeof PatchingModeType === "object");
assert(typeof PreferenceType === "object");
assert(typeof ResourceStatus === "object");
assert(typeof ShapeType === "object");
assert(typeof SupportedAwsIntegration === "object");
assert(typeof VpcEndpointType === "object");
// errors
assert(OdbServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAutonomousVirtualMachines === "function");
assert(typeof paginateListCloudAutonomousVmClusters === "function");
assert(typeof paginateListCloudExadataInfrastructures === "function");
assert(typeof paginateListCloudVmClusters === "function");
assert(typeof paginateListDbNodes === "function");
assert(typeof paginateListDbServers === "function");
assert(typeof paginateListDbSystemShapes === "function");
assert(typeof paginateListGiVersions === "function");
assert(typeof paginateListOdbNetworks === "function");
assert(typeof paginateListOdbPeeringConnections === "function");
assert(typeof paginateListSystemVersions === "function");
console.log(`Odb index test passed.`);
