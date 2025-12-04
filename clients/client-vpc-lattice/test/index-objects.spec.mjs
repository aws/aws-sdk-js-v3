import {
  AuthPolicyState,
  AuthType,
  BatchUpdateRuleCommand,
  CreateAccessLogSubscriptionCommand,
  CreateListenerCommand,
  CreateResourceConfigurationCommand,
  CreateResourceGatewayCommand,
  CreateRuleCommand,
  CreateServiceCommand,
  CreateServiceNetworkCommand,
  CreateServiceNetworkResourceAssociationCommand,
  CreateServiceNetworkServiceAssociationCommand,
  CreateServiceNetworkVpcAssociationCommand,
  CreateTargetGroupCommand,
  DeleteAccessLogSubscriptionCommand,
  DeleteAuthPolicyCommand,
  DeleteDomainVerificationCommand,
  DeleteListenerCommand,
  DeleteResourceConfigurationCommand,
  DeleteResourceEndpointAssociationCommand,
  DeleteResourceGatewayCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleCommand,
  DeleteServiceCommand,
  DeleteServiceNetworkCommand,
  DeleteServiceNetworkResourceAssociationCommand,
  DeleteServiceNetworkServiceAssociationCommand,
  DeleteServiceNetworkVpcAssociationCommand,
  DeleteTargetGroupCommand,
  DeregisterTargetsCommand,
  GetAccessLogSubscriptionCommand,
  GetAuthPolicyCommand,
  GetDomainVerificationCommand,
  GetListenerCommand,
  GetResourceConfigurationCommand,
  GetResourceGatewayCommand,
  GetResourcePolicyCommand,
  GetRuleCommand,
  GetServiceCommand,
  GetServiceNetworkCommand,
  GetServiceNetworkResourceAssociationCommand,
  GetServiceNetworkServiceAssociationCommand,
  GetServiceNetworkVpcAssociationCommand,
  GetTargetGroupCommand,
  HealthCheckProtocolVersion,
  IpAddressType,
  LambdaEventStructureVersion,
  ListAccessLogSubscriptionsCommand,
  ListDomainVerificationsCommand,
  ListListenersCommand,
  ListResourceConfigurationsCommand,
  ListResourceEndpointAssociationsCommand,
  ListResourceGatewaysCommand,
  ListRulesCommand,
  ListServiceNetworkResourceAssociationsCommand,
  ListServiceNetworkServiceAssociationsCommand,
  ListServiceNetworkVpcAssociationsCommand,
  ListServiceNetworkVpcEndpointAssociationsCommand,
  ListServiceNetworksCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  ListTargetGroupsCommand,
  ListTargetsCommand,
  ListenerProtocol,
  PrivateDnsPreference,
  ProtocolType,
  PutAuthPolicyCommand,
  PutResourcePolicyCommand,
  RegisterTargetsCommand,
  ResourceConfigurationIpAddressType,
  ResourceConfigurationStatus,
  ResourceConfigurationType,
  ResourceGatewayIpAddressType,
  ResourceGatewayStatus,
  ServiceNetworkLogType,
  ServiceNetworkResourceAssociationStatus,
  ServiceNetworkServiceAssociationStatus,
  ServiceNetworkVpcAssociationStatus,
  ServiceStatus,
  StartDomainVerificationCommand,
  TagResourceCommand,
  TargetGroupProtocol,
  TargetGroupProtocolVersion,
  TargetGroupStatus,
  TargetGroupType,
  TargetStatus,
  UntagResourceCommand,
  UpdateAccessLogSubscriptionCommand,
  UpdateListenerCommand,
  UpdateResourceConfigurationCommand,
  UpdateResourceGatewayCommand,
  UpdateRuleCommand,
  UpdateServiceCommand,
  UpdateServiceNetworkCommand,
  UpdateServiceNetworkVpcAssociationCommand,
  UpdateTargetGroupCommand,
  VPCLattice,
  VPCLatticeClient,
  VPCLatticeServiceException,
  VerificationStatus,
  paginateListAccessLogSubscriptions,
  paginateListDomainVerifications,
  paginateListListeners,
  paginateListResourceConfigurations,
  paginateListResourceEndpointAssociations,
  paginateListResourceGateways,
  paginateListRules,
  paginateListServiceNetworkResourceAssociations,
  paginateListServiceNetworkServiceAssociations,
  paginateListServiceNetworkVpcAssociations,
  paginateListServiceNetworkVpcEndpointAssociations,
  paginateListServiceNetworks,
  paginateListServices,
  paginateListTargetGroups,
  paginateListTargets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof VPCLatticeClient === "function");
assert(typeof VPCLattice === "function");
// commands
assert(typeof BatchUpdateRuleCommand === "function");
assert(typeof CreateAccessLogSubscriptionCommand === "function");
assert(typeof CreateListenerCommand === "function");
assert(typeof CreateResourceConfigurationCommand === "function");
assert(typeof CreateResourceGatewayCommand === "function");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateServiceNetworkCommand === "function");
assert(typeof CreateServiceNetworkResourceAssociationCommand === "function");
assert(typeof CreateServiceNetworkServiceAssociationCommand === "function");
assert(typeof CreateServiceNetworkVpcAssociationCommand === "function");
assert(typeof CreateTargetGroupCommand === "function");
assert(typeof DeleteAccessLogSubscriptionCommand === "function");
assert(typeof DeleteAuthPolicyCommand === "function");
assert(typeof DeleteDomainVerificationCommand === "function");
assert(typeof DeleteListenerCommand === "function");
assert(typeof DeleteResourceConfigurationCommand === "function");
assert(typeof DeleteResourceEndpointAssociationCommand === "function");
assert(typeof DeleteResourceGatewayCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteServiceNetworkCommand === "function");
assert(typeof DeleteServiceNetworkResourceAssociationCommand === "function");
assert(typeof DeleteServiceNetworkServiceAssociationCommand === "function");
assert(typeof DeleteServiceNetworkVpcAssociationCommand === "function");
assert(typeof DeleteTargetGroupCommand === "function");
assert(typeof DeregisterTargetsCommand === "function");
assert(typeof GetAccessLogSubscriptionCommand === "function");
assert(typeof GetAuthPolicyCommand === "function");
assert(typeof GetDomainVerificationCommand === "function");
assert(typeof GetListenerCommand === "function");
assert(typeof GetResourceConfigurationCommand === "function");
assert(typeof GetResourceGatewayCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetRuleCommand === "function");
assert(typeof GetServiceCommand === "function");
assert(typeof GetServiceNetworkCommand === "function");
assert(typeof GetServiceNetworkResourceAssociationCommand === "function");
assert(typeof GetServiceNetworkServiceAssociationCommand === "function");
assert(typeof GetServiceNetworkVpcAssociationCommand === "function");
assert(typeof GetTargetGroupCommand === "function");
assert(typeof ListAccessLogSubscriptionsCommand === "function");
assert(typeof ListDomainVerificationsCommand === "function");
assert(typeof ListListenersCommand === "function");
assert(typeof ListResourceConfigurationsCommand === "function");
assert(typeof ListResourceEndpointAssociationsCommand === "function");
assert(typeof ListResourceGatewaysCommand === "function");
assert(typeof ListRulesCommand === "function");
assert(typeof ListServiceNetworkResourceAssociationsCommand === "function");
assert(typeof ListServiceNetworksCommand === "function");
assert(typeof ListServiceNetworkServiceAssociationsCommand === "function");
assert(typeof ListServiceNetworkVpcAssociationsCommand === "function");
assert(typeof ListServiceNetworkVpcEndpointAssociationsCommand === "function");
assert(typeof ListServicesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTargetGroupsCommand === "function");
assert(typeof ListTargetsCommand === "function");
assert(typeof PutAuthPolicyCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RegisterTargetsCommand === "function");
assert(typeof StartDomainVerificationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccessLogSubscriptionCommand === "function");
assert(typeof UpdateListenerCommand === "function");
assert(typeof UpdateResourceConfigurationCommand === "function");
assert(typeof UpdateResourceGatewayCommand === "function");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateServiceNetworkCommand === "function");
assert(typeof UpdateServiceNetworkVpcAssociationCommand === "function");
assert(typeof UpdateTargetGroupCommand === "function");
// enums
assert(typeof AuthPolicyState === "object");
assert(typeof AuthType === "object");
assert(typeof HealthCheckProtocolVersion === "object");
assert(typeof IpAddressType === "object");
assert(typeof LambdaEventStructureVersion === "object");
assert(typeof ListenerProtocol === "object");
assert(typeof PrivateDnsPreference === "object");
assert(typeof ProtocolType === "object");
assert(typeof ResourceConfigurationIpAddressType === "object");
assert(typeof ResourceConfigurationStatus === "object");
assert(typeof ResourceConfigurationType === "object");
assert(typeof ResourceGatewayIpAddressType === "object");
assert(typeof ResourceGatewayStatus === "object");
assert(typeof ServiceNetworkLogType === "object");
assert(typeof ServiceNetworkResourceAssociationStatus === "object");
assert(typeof ServiceNetworkServiceAssociationStatus === "object");
assert(typeof ServiceNetworkVpcAssociationStatus === "object");
assert(typeof ServiceStatus === "object");
assert(typeof TargetGroupProtocol === "object");
assert(typeof TargetGroupProtocolVersion === "object");
assert(typeof TargetGroupStatus === "object");
assert(typeof TargetGroupType === "object");
assert(typeof TargetStatus === "object");
assert(typeof VerificationStatus === "object");
// errors
assert(VPCLatticeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessLogSubscriptions === "function");
assert(typeof paginateListDomainVerifications === "function");
assert(typeof paginateListListeners === "function");
assert(typeof paginateListResourceConfigurations === "function");
assert(typeof paginateListResourceEndpointAssociations === "function");
assert(typeof paginateListResourceGateways === "function");
assert(typeof paginateListRules === "function");
assert(typeof paginateListServiceNetworkResourceAssociations === "function");
assert(typeof paginateListServiceNetworkServiceAssociations === "function");
assert(typeof paginateListServiceNetworkVpcAssociations === "function");
assert(typeof paginateListServiceNetworkVpcEndpointAssociations === "function");
assert(typeof paginateListServiceNetworks === "function");
assert(typeof paginateListServices === "function");
assert(typeof paginateListTargetGroups === "function");
assert(typeof paginateListTargets === "function");
console.log(`VPCLattice index test passed.`);
