import {
  AccessDeniedException,
  AccessDeniedException$,
  AssociateGatewayToServer$,
  AssociateGatewayToServerCommand,
  AssociateGatewayToServerInput$,
  AssociateGatewayToServerOutput$,
  BackupGateway,
  BackupGatewayClient,
  BackupGatewayServiceException,
  BandwidthRateLimitInterval$,
  ConflictException,
  ConflictException$,
  CreateGateway$,
  CreateGatewayCommand,
  CreateGatewayInput$,
  CreateGatewayOutput$,
  DeleteGateway$,
  DeleteGatewayCommand,
  DeleteGatewayInput$,
  DeleteGatewayOutput$,
  DeleteHypervisor$,
  DeleteHypervisorCommand,
  DeleteHypervisorInput$,
  DeleteHypervisorOutput$,
  DisassociateGatewayFromServer$,
  DisassociateGatewayFromServerCommand,
  DisassociateGatewayFromServerInput$,
  DisassociateGatewayFromServerOutput$,
  Gateway$,
  GatewayDetails$,
  GatewayType,
  GetBandwidthRateLimitSchedule$,
  GetBandwidthRateLimitScheduleCommand,
  GetBandwidthRateLimitScheduleInput$,
  GetBandwidthRateLimitScheduleOutput$,
  GetGateway$,
  GetGatewayCommand,
  GetGatewayInput$,
  GetGatewayOutput$,
  GetHypervisor$,
  GetHypervisorCommand,
  GetHypervisorInput$,
  GetHypervisorOutput$,
  GetHypervisorPropertyMappings$,
  GetHypervisorPropertyMappingsCommand,
  GetHypervisorPropertyMappingsInput$,
  GetHypervisorPropertyMappingsOutput$,
  GetVirtualMachine$,
  GetVirtualMachineCommand,
  GetVirtualMachineInput$,
  GetVirtualMachineOutput$,
  Hypervisor$,
  HypervisorDetails$,
  HypervisorState,
  ImportHypervisorConfiguration$,
  ImportHypervisorConfigurationCommand,
  ImportHypervisorConfigurationInput$,
  ImportHypervisorConfigurationOutput$,
  InternalServerException,
  InternalServerException$,
  ListGateways$,
  ListGatewaysCommand,
  ListGatewaysInput$,
  ListGatewaysOutput$,
  ListHypervisors$,
  ListHypervisorsCommand,
  ListHypervisorsInput$,
  ListHypervisorsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListVirtualMachines$,
  ListVirtualMachinesCommand,
  ListVirtualMachinesInput$,
  ListVirtualMachinesOutput$,
  MaintenanceStartTime$,
  paginateListGateways,
  paginateListHypervisors,
  paginateListVirtualMachines,
  PutBandwidthRateLimitSchedule$,
  PutBandwidthRateLimitScheduleCommand,
  PutBandwidthRateLimitScheduleInput$,
  PutBandwidthRateLimitScheduleOutput$,
  PutHypervisorPropertyMappings$,
  PutHypervisorPropertyMappingsCommand,
  PutHypervisorPropertyMappingsInput$,
  PutHypervisorPropertyMappingsOutput$,
  PutMaintenanceStartTime$,
  PutMaintenanceStartTimeCommand,
  PutMaintenanceStartTimeInput$,
  PutMaintenanceStartTimeOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  StartVirtualMachinesMetadataSync$,
  StartVirtualMachinesMetadataSyncCommand,
  StartVirtualMachinesMetadataSyncInput$,
  StartVirtualMachinesMetadataSyncOutput$,
  SyncMetadataStatus,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TestHypervisorConfiguration$,
  TestHypervisorConfigurationCommand,
  TestHypervisorConfigurationInput$,
  TestHypervisorConfigurationOutput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateGatewayInformation$,
  UpdateGatewayInformationCommand,
  UpdateGatewayInformationInput$,
  UpdateGatewayInformationOutput$,
  UpdateGatewaySoftwareNow$,
  UpdateGatewaySoftwareNowCommand,
  UpdateGatewaySoftwareNowInput$,
  UpdateGatewaySoftwareNowOutput$,
  UpdateHypervisor$,
  UpdateHypervisorCommand,
  UpdateHypervisorInput$,
  UpdateHypervisorOutput$,
  ValidationException,
  ValidationException$,
  VirtualMachine$,
  VirtualMachineDetails$,
  VmwareTag$,
  VmwareToAwsTagMapping$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BackupGatewayClient === "function");
assert(typeof BackupGateway === "function");
// commands
assert(typeof AssociateGatewayToServerCommand === "function");
assert(typeof AssociateGatewayToServer$ === "object");
assert(typeof CreateGatewayCommand === "function");
assert(typeof CreateGateway$ === "object");
assert(typeof DeleteGatewayCommand === "function");
assert(typeof DeleteGateway$ === "object");
assert(typeof DeleteHypervisorCommand === "function");
assert(typeof DeleteHypervisor$ === "object");
assert(typeof DisassociateGatewayFromServerCommand === "function");
assert(typeof DisassociateGatewayFromServer$ === "object");
assert(typeof GetBandwidthRateLimitScheduleCommand === "function");
assert(typeof GetBandwidthRateLimitSchedule$ === "object");
assert(typeof GetGatewayCommand === "function");
assert(typeof GetGateway$ === "object");
assert(typeof GetHypervisorCommand === "function");
assert(typeof GetHypervisor$ === "object");
assert(typeof GetHypervisorPropertyMappingsCommand === "function");
assert(typeof GetHypervisorPropertyMappings$ === "object");
assert(typeof GetVirtualMachineCommand === "function");
assert(typeof GetVirtualMachine$ === "object");
assert(typeof ImportHypervisorConfigurationCommand === "function");
assert(typeof ImportHypervisorConfiguration$ === "object");
assert(typeof ListGatewaysCommand === "function");
assert(typeof ListGateways$ === "object");
assert(typeof ListHypervisorsCommand === "function");
assert(typeof ListHypervisors$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVirtualMachinesCommand === "function");
assert(typeof ListVirtualMachines$ === "object");
assert(typeof PutBandwidthRateLimitScheduleCommand === "function");
assert(typeof PutBandwidthRateLimitSchedule$ === "object");
assert(typeof PutHypervisorPropertyMappingsCommand === "function");
assert(typeof PutHypervisorPropertyMappings$ === "object");
assert(typeof PutMaintenanceStartTimeCommand === "function");
assert(typeof PutMaintenanceStartTime$ === "object");
assert(typeof StartVirtualMachinesMetadataSyncCommand === "function");
assert(typeof StartVirtualMachinesMetadataSync$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestHypervisorConfigurationCommand === "function");
assert(typeof TestHypervisorConfiguration$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateGatewayInformationCommand === "function");
assert(typeof UpdateGatewayInformation$ === "object");
assert(typeof UpdateGatewaySoftwareNowCommand === "function");
assert(typeof UpdateGatewaySoftwareNow$ === "object");
assert(typeof UpdateHypervisorCommand === "function");
assert(typeof UpdateHypervisor$ === "object");
// structural schemas
assert(typeof AssociateGatewayToServerInput$ === "object");
assert(typeof AssociateGatewayToServerOutput$ === "object");
assert(typeof BandwidthRateLimitInterval$ === "object");
assert(typeof CreateGatewayInput$ === "object");
assert(typeof CreateGatewayOutput$ === "object");
assert(typeof DeleteGatewayInput$ === "object");
assert(typeof DeleteGatewayOutput$ === "object");
assert(typeof DeleteHypervisorInput$ === "object");
assert(typeof DeleteHypervisorOutput$ === "object");
assert(typeof DisassociateGatewayFromServerInput$ === "object");
assert(typeof DisassociateGatewayFromServerOutput$ === "object");
assert(typeof Gateway$ === "object");
assert(typeof GatewayDetails$ === "object");
assert(typeof GetBandwidthRateLimitScheduleInput$ === "object");
assert(typeof GetBandwidthRateLimitScheduleOutput$ === "object");
assert(typeof GetGatewayInput$ === "object");
assert(typeof GetGatewayOutput$ === "object");
assert(typeof GetHypervisorInput$ === "object");
assert(typeof GetHypervisorOutput$ === "object");
assert(typeof GetHypervisorPropertyMappingsInput$ === "object");
assert(typeof GetHypervisorPropertyMappingsOutput$ === "object");
assert(typeof GetVirtualMachineInput$ === "object");
assert(typeof GetVirtualMachineOutput$ === "object");
assert(typeof Hypervisor$ === "object");
assert(typeof HypervisorDetails$ === "object");
assert(typeof ImportHypervisorConfigurationInput$ === "object");
assert(typeof ImportHypervisorConfigurationOutput$ === "object");
assert(typeof ListGatewaysInput$ === "object");
assert(typeof ListGatewaysOutput$ === "object");
assert(typeof ListHypervisorsInput$ === "object");
assert(typeof ListHypervisorsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListVirtualMachinesInput$ === "object");
assert(typeof ListVirtualMachinesOutput$ === "object");
assert(typeof MaintenanceStartTime$ === "object");
assert(typeof PutBandwidthRateLimitScheduleInput$ === "object");
assert(typeof PutBandwidthRateLimitScheduleOutput$ === "object");
assert(typeof PutHypervisorPropertyMappingsInput$ === "object");
assert(typeof PutHypervisorPropertyMappingsOutput$ === "object");
assert(typeof PutMaintenanceStartTimeInput$ === "object");
assert(typeof PutMaintenanceStartTimeOutput$ === "object");
assert(typeof StartVirtualMachinesMetadataSyncInput$ === "object");
assert(typeof StartVirtualMachinesMetadataSyncOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TestHypervisorConfigurationInput$ === "object");
assert(typeof TestHypervisorConfigurationOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateGatewayInformationInput$ === "object");
assert(typeof UpdateGatewayInformationOutput$ === "object");
assert(typeof UpdateGatewaySoftwareNowInput$ === "object");
assert(typeof UpdateGatewaySoftwareNowOutput$ === "object");
assert(typeof UpdateHypervisorInput$ === "object");
assert(typeof UpdateHypervisorOutput$ === "object");
assert(typeof VirtualMachine$ === "object");
assert(typeof VirtualMachineDetails$ === "object");
assert(typeof VmwareTag$ === "object");
assert(typeof VmwareToAwsTagMapping$ === "object");
// enums
assert(typeof GatewayType === "object");
assert(typeof HypervisorState === "object");
assert(typeof SyncMetadataStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof BackupGatewayServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BackupGatewayServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BackupGatewayServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BackupGatewayServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof BackupGatewayServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BackupGatewayServiceException);
assert(typeof ValidationException$ === "object");
assert(BackupGatewayServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGateways === "function");
assert(typeof paginateListHypervisors === "function");
assert(typeof paginateListVirtualMachines === "function");
console.log(`BackupGateway index test passed.`);
