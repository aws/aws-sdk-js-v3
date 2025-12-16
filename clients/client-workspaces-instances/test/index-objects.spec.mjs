import {
  AccessDeniedException,
  AccessDeniedException$,
  AmdSevSnpEnum,
  AssociateVolume$,
  AssociateVolumeCommand,
  AssociateVolumeRequest$,
  AssociateVolumeResponse$,
  AutoRecoveryEnum,
  BandwidthWeightingEnum,
  BlockDeviceMappingRequest$,
  CapacityReservationPreferenceEnum,
  CapacityReservationSpecification$,
  CapacityReservationTarget$,
  ConflictException,
  ConflictException$,
  ConnectionTrackingSpecificationRequest$,
  CpuCreditsEnum,
  CpuOptionsRequest$,
  CreateVolume$,
  CreateVolumeCommand,
  CreateVolumeRequest$,
  CreateVolumeResponse$,
  CreateWorkspaceInstance$,
  CreateWorkspaceInstanceCommand,
  CreateWorkspaceInstanceRequest$,
  CreateWorkspaceInstanceResponse$,
  CreditSpecificationRequest$,
  DeleteVolume$,
  DeleteVolumeCommand,
  DeleteVolumeRequest$,
  DeleteVolumeResponse$,
  DeleteWorkspaceInstance$,
  DeleteWorkspaceInstanceCommand,
  DeleteWorkspaceInstanceRequest$,
  DeleteWorkspaceInstanceResponse$,
  DisassociateModeEnum,
  DisassociateVolume$,
  DisassociateVolumeCommand,
  DisassociateVolumeRequest$,
  DisassociateVolumeResponse$,
  EC2InstanceError$,
  EC2ManagedInstance$,
  EbsBlockDevice$,
  EnaSrdSpecificationRequest$,
  EnaSrdUdpSpecificationRequest$,
  EnclaveOptionsRequest$,
  GetWorkspaceInstance$,
  GetWorkspaceInstanceCommand,
  GetWorkspaceInstanceRequest$,
  GetWorkspaceInstanceResponse$,
  HibernationOptionsRequest$,
  HostnameTypeEnum,
  HttpEndpointEnum,
  HttpProtocolIpv6Enum,
  HttpTokensEnum,
  IamInstanceProfileSpecification$,
  InstanceInterruptionBehaviorEnum,
  InstanceIpv6Address$,
  InstanceMaintenanceOptionsRequest$,
  InstanceMarketOptionsRequest$,
  InstanceMetadataOptionsRequest$,
  InstanceMetadataTagsEnum,
  InstanceNetworkInterfaceSpecification$,
  InstanceNetworkPerformanceOptionsRequest$,
  InstanceTypeInfo$,
  InterfaceTypeEnum,
  InternalServerException,
  InternalServerException$,
  Ipv4PrefixSpecificationRequest$,
  Ipv6PrefixSpecificationRequest$,
  LicenseConfigurationRequest$,
  ListInstanceTypes$,
  ListInstanceTypesCommand,
  ListInstanceTypesRequest$,
  ListInstanceTypesResponse$,
  ListRegions$,
  ListRegionsCommand,
  ListRegionsRequest$,
  ListRegionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWorkspaceInstances$,
  ListWorkspaceInstancesCommand,
  ListWorkspaceInstancesRequest$,
  ListWorkspaceInstancesResponse$,
  ManagedInstanceRequest$,
  MarketTypeEnum,
  Placement$,
  PrivateDnsNameOptionsRequest$,
  PrivateIpAddressSpecification$,
  ProvisionStateEnum,
  Region$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTypeEnum,
  RunInstancesMonitoringEnabled$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SpotInstanceTypeEnum,
  SpotMarketOptions$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagSpecification$,
  TenancyEnum,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VolumeTypeEnum,
  WorkspaceInstance$,
  WorkspaceInstanceError$,
  WorkspacesInstances,
  WorkspacesInstancesClient,
  WorkspacesInstancesServiceException,
  paginateListInstanceTypes,
  paginateListRegions,
  paginateListWorkspaceInstances,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkspacesInstancesClient === "function");
assert(typeof WorkspacesInstances === "function");
// commands
assert(typeof AssociateVolumeCommand === "function");
assert(typeof AssociateVolume$ === "object");
assert(typeof CreateVolumeCommand === "function");
assert(typeof CreateVolume$ === "object");
assert(typeof CreateWorkspaceInstanceCommand === "function");
assert(typeof CreateWorkspaceInstance$ === "object");
assert(typeof DeleteVolumeCommand === "function");
assert(typeof DeleteVolume$ === "object");
assert(typeof DeleteWorkspaceInstanceCommand === "function");
assert(typeof DeleteWorkspaceInstance$ === "object");
assert(typeof DisassociateVolumeCommand === "function");
assert(typeof DisassociateVolume$ === "object");
assert(typeof GetWorkspaceInstanceCommand === "function");
assert(typeof GetWorkspaceInstance$ === "object");
assert(typeof ListInstanceTypesCommand === "function");
assert(typeof ListInstanceTypes$ === "object");
assert(typeof ListRegionsCommand === "function");
assert(typeof ListRegions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkspaceInstancesCommand === "function");
assert(typeof ListWorkspaceInstances$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AssociateVolumeRequest$ === "object");
assert(typeof AssociateVolumeResponse$ === "object");
assert(typeof BlockDeviceMappingRequest$ === "object");
assert(typeof CapacityReservationSpecification$ === "object");
assert(typeof CapacityReservationTarget$ === "object");
assert(typeof ConnectionTrackingSpecificationRequest$ === "object");
assert(typeof CpuOptionsRequest$ === "object");
assert(typeof CreateVolumeRequest$ === "object");
assert(typeof CreateVolumeResponse$ === "object");
assert(typeof CreateWorkspaceInstanceRequest$ === "object");
assert(typeof CreateWorkspaceInstanceResponse$ === "object");
assert(typeof CreditSpecificationRequest$ === "object");
assert(typeof DeleteVolumeRequest$ === "object");
assert(typeof DeleteVolumeResponse$ === "object");
assert(typeof DeleteWorkspaceInstanceRequest$ === "object");
assert(typeof DeleteWorkspaceInstanceResponse$ === "object");
assert(typeof DisassociateVolumeRequest$ === "object");
assert(typeof DisassociateVolumeResponse$ === "object");
assert(typeof EbsBlockDevice$ === "object");
assert(typeof EC2InstanceError$ === "object");
assert(typeof EC2ManagedInstance$ === "object");
assert(typeof EnaSrdSpecificationRequest$ === "object");
assert(typeof EnaSrdUdpSpecificationRequest$ === "object");
assert(typeof EnclaveOptionsRequest$ === "object");
assert(typeof GetWorkspaceInstanceRequest$ === "object");
assert(typeof GetWorkspaceInstanceResponse$ === "object");
assert(typeof HibernationOptionsRequest$ === "object");
assert(typeof IamInstanceProfileSpecification$ === "object");
assert(typeof InstanceIpv6Address$ === "object");
assert(typeof InstanceMaintenanceOptionsRequest$ === "object");
assert(typeof InstanceMarketOptionsRequest$ === "object");
assert(typeof InstanceMetadataOptionsRequest$ === "object");
assert(typeof InstanceNetworkInterfaceSpecification$ === "object");
assert(typeof InstanceNetworkPerformanceOptionsRequest$ === "object");
assert(typeof InstanceTypeInfo$ === "object");
assert(typeof Ipv4PrefixSpecificationRequest$ === "object");
assert(typeof Ipv6PrefixSpecificationRequest$ === "object");
assert(typeof LicenseConfigurationRequest$ === "object");
assert(typeof ListInstanceTypesRequest$ === "object");
assert(typeof ListInstanceTypesResponse$ === "object");
assert(typeof ListRegionsRequest$ === "object");
assert(typeof ListRegionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWorkspaceInstancesRequest$ === "object");
assert(typeof ListWorkspaceInstancesResponse$ === "object");
assert(typeof ManagedInstanceRequest$ === "object");
assert(typeof Placement$ === "object");
assert(typeof PrivateDnsNameOptionsRequest$ === "object");
assert(typeof PrivateIpAddressSpecification$ === "object");
assert(typeof Region$ === "object");
assert(typeof RunInstancesMonitoringEnabled$ === "object");
assert(typeof SpotMarketOptions$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagSpecification$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WorkspaceInstance$ === "object");
assert(typeof WorkspaceInstanceError$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
assert(typeof VolumeTypeEnum === "object");
// errors
assert(AccessDeniedException.prototype instanceof WorkspacesInstancesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof WorkspacesInstancesServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof WorkspacesInstancesServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof WorkspacesInstancesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof WorkspacesInstancesServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof WorkspacesInstancesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof WorkspacesInstancesServiceException);
assert(typeof ValidationException$ === "object");
assert(WorkspacesInstancesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListInstanceTypes === "function");
assert(typeof paginateListRegions === "function");
assert(typeof paginateListWorkspaceInstances === "function");
console.log(`WorkspacesInstances index test passed.`);
