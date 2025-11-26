import {
  AssociateGatewayToServerCommand,
  BackupGateway,
  BackupGatewayClient,
  BackupGatewayServiceException,
  CreateGatewayCommand,
  DeleteGatewayCommand,
  DeleteHypervisorCommand,
  DisassociateGatewayFromServerCommand,
  GatewayType,
  GetBandwidthRateLimitScheduleCommand,
  GetGatewayCommand,
  GetHypervisorCommand,
  GetHypervisorPropertyMappingsCommand,
  GetVirtualMachineCommand,
  HypervisorState,
  ImportHypervisorConfigurationCommand,
  ListGatewaysCommand,
  ListHypervisorsCommand,
  ListTagsForResourceCommand,
  ListVirtualMachinesCommand,
  PutBandwidthRateLimitScheduleCommand,
  PutHypervisorPropertyMappingsCommand,
  PutMaintenanceStartTimeCommand,
  StartVirtualMachinesMetadataSyncCommand,
  SyncMetadataStatus,
  TagResourceCommand,
  TestHypervisorConfigurationCommand,
  UntagResourceCommand,
  UpdateGatewayInformationCommand,
  UpdateGatewaySoftwareNowCommand,
  UpdateHypervisorCommand,
  paginateListGateways,
  paginateListHypervisors,
  paginateListVirtualMachines,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BackupGatewayClient === "function")
assert(typeof BackupGateway === "function")
// commands
assert(typeof AssociateGatewayToServerCommand === "function")
assert(typeof CreateGatewayCommand === "function")
assert(typeof DeleteGatewayCommand === "function")
assert(typeof DeleteHypervisorCommand === "function")
assert(typeof DisassociateGatewayFromServerCommand === "function")
assert(typeof GetBandwidthRateLimitScheduleCommand === "function")
assert(typeof GetGatewayCommand === "function")
assert(typeof GetHypervisorCommand === "function")
assert(typeof GetHypervisorPropertyMappingsCommand === "function")
assert(typeof GetVirtualMachineCommand === "function")
assert(typeof ImportHypervisorConfigurationCommand === "function")
assert(typeof ListGatewaysCommand === "function")
assert(typeof ListHypervisorsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListVirtualMachinesCommand === "function")
assert(typeof PutBandwidthRateLimitScheduleCommand === "function")
assert(typeof PutHypervisorPropertyMappingsCommand === "function")
assert(typeof PutMaintenanceStartTimeCommand === "function")
assert(typeof StartVirtualMachinesMetadataSyncCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TestHypervisorConfigurationCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateGatewayInformationCommand === "function")
assert(typeof UpdateGatewaySoftwareNowCommand === "function")
assert(typeof UpdateHypervisorCommand === "function")
// enums
assert(typeof GatewayType === "object");
assert(typeof HypervisorState === "object");
assert(typeof SyncMetadataStatus === "object");
// errors
assert(BackupGatewayServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListGateways === "function")
assert(typeof paginateListHypervisors === "function")
assert(typeof paginateListVirtualMachines === "function")
console.log(`BackupGateway index test passed.`);
