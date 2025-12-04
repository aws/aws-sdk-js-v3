import {
  AmdSevSnpEnum,
  AssociateVolumeCommand,
  AutoRecoveryEnum,
  BandwidthWeightingEnum,
  CapacityReservationPreferenceEnum,
  CpuCreditsEnum,
  CreateVolumeCommand,
  CreateWorkspaceInstanceCommand,
  DeleteVolumeCommand,
  DeleteWorkspaceInstanceCommand,
  DisassociateModeEnum,
  DisassociateVolumeCommand,
  GetWorkspaceInstanceCommand,
  HostnameTypeEnum,
  HttpEndpointEnum,
  HttpProtocolIpv6Enum,
  HttpTokensEnum,
  InstanceInterruptionBehaviorEnum,
  InstanceMetadataTagsEnum,
  InterfaceTypeEnum,
  ListInstanceTypesCommand,
  ListRegionsCommand,
  ListTagsForResourceCommand,
  ListWorkspaceInstancesCommand,
  MarketTypeEnum,
  ProvisionStateEnum,
  ResourceTypeEnum,
  SpotInstanceTypeEnum,
  TagResourceCommand,
  TenancyEnum,
  UntagResourceCommand,
  VolumeTypeEnum,
  WorkspacesInstances,
  WorkspacesInstancesClient,
  WorkspacesInstancesServiceException,
  paginateListInstanceTypes,
  paginateListRegions,
  paginateListWorkspaceInstances,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkspacesInstancesClient === "function")
assert(typeof WorkspacesInstances === "function")
// commands
assert(typeof AssociateVolumeCommand === "function")
assert(typeof CreateVolumeCommand === "function")
assert(typeof CreateWorkspaceInstanceCommand === "function")
assert(typeof DeleteVolumeCommand === "function")
assert(typeof DeleteWorkspaceInstanceCommand === "function")
assert(typeof DisassociateVolumeCommand === "function")
assert(typeof GetWorkspaceInstanceCommand === "function")
assert(typeof ListInstanceTypesCommand === "function")
assert(typeof ListRegionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListWorkspaceInstancesCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof AmdSevSnpEnum === "object");
assert(typeof AutoRecoveryEnum === "object");
assert(typeof BandwidthWeightingEnum === "object");
assert(typeof CapacityReservationPreferenceEnum === "object");
assert(typeof CpuCreditsEnum === "object");
assert(typeof DisassociateModeEnum === "object");
assert(typeof HostnameTypeEnum === "object");
assert(typeof HttpEndpointEnum === "object");
assert(typeof HttpProtocolIpv6Enum === "object");
assert(typeof HttpTokensEnum === "object");
assert(typeof InstanceInterruptionBehaviorEnum === "object");
assert(typeof InstanceMetadataTagsEnum === "object");
assert(typeof InterfaceTypeEnum === "object");
assert(typeof MarketTypeEnum === "object");
assert(typeof ProvisionStateEnum === "object");
assert(typeof ResourceTypeEnum === "object");
assert(typeof SpotInstanceTypeEnum === "object");
assert(typeof TenancyEnum === "object");
assert(typeof VolumeTypeEnum === "object");
// errors
assert(WorkspacesInstancesServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListInstanceTypes === "function")
assert(typeof paginateListRegions === "function")
assert(typeof paginateListWorkspaceInstances === "function")
console.log(`WorkspacesInstances index test passed.`);
