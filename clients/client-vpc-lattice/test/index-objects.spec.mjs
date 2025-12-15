import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessLogSubscriptionSummary$,
  ArnResource$,
  AuthPolicyState,
  AuthType,
  BatchUpdateRule$,
  BatchUpdateRuleCommand,
  BatchUpdateRuleRequest$,
  BatchUpdateRuleResponse$,
  ConflictException,
  ConflictException$,
  CreateAccessLogSubscription$,
  CreateAccessLogSubscriptionCommand,
  CreateAccessLogSubscriptionRequest$,
  CreateAccessLogSubscriptionResponse$,
  CreateListener$,
  CreateListenerCommand,
  CreateListenerRequest$,
  CreateListenerResponse$,
  CreateResourceConfiguration$,
  CreateResourceConfigurationCommand,
  CreateResourceConfigurationRequest$,
  CreateResourceConfigurationResponse$,
  CreateResourceGateway$,
  CreateResourceGatewayCommand,
  CreateResourceGatewayRequest$,
  CreateResourceGatewayResponse$,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleRequest$,
  CreateRuleResponse$,
  CreateService$,
  CreateServiceCommand,
  CreateServiceNetwork$,
  CreateServiceNetworkCommand,
  CreateServiceNetworkRequest$,
  CreateServiceNetworkResourceAssociation$,
  CreateServiceNetworkResourceAssociationCommand,
  CreateServiceNetworkResourceAssociationRequest$,
  CreateServiceNetworkResourceAssociationResponse$,
  CreateServiceNetworkResponse$,
  CreateServiceNetworkServiceAssociation$,
  CreateServiceNetworkServiceAssociationCommand,
  CreateServiceNetworkServiceAssociationRequest$,
  CreateServiceNetworkServiceAssociationResponse$,
  CreateServiceNetworkVpcAssociation$,
  CreateServiceNetworkVpcAssociationCommand,
  CreateServiceNetworkVpcAssociationRequest$,
  CreateServiceNetworkVpcAssociationResponse$,
  CreateServiceRequest$,
  CreateServiceResponse$,
  CreateTargetGroup$,
  CreateTargetGroupCommand,
  CreateTargetGroupRequest$,
  CreateTargetGroupResponse$,
  DeleteAccessLogSubscription$,
  DeleteAccessLogSubscriptionCommand,
  DeleteAccessLogSubscriptionRequest$,
  DeleteAccessLogSubscriptionResponse$,
  DeleteAuthPolicy$,
  DeleteAuthPolicyCommand,
  DeleteAuthPolicyRequest$,
  DeleteAuthPolicyResponse$,
  DeleteDomainVerification$,
  DeleteDomainVerificationCommand,
  DeleteDomainVerificationRequest$,
  DeleteDomainVerificationResponse$,
  DeleteListener$,
  DeleteListenerCommand,
  DeleteListenerRequest$,
  DeleteListenerResponse$,
  DeleteResourceConfiguration$,
  DeleteResourceConfigurationCommand,
  DeleteResourceConfigurationRequest$,
  DeleteResourceConfigurationResponse$,
  DeleteResourceEndpointAssociation$,
  DeleteResourceEndpointAssociationCommand,
  DeleteResourceEndpointAssociationRequest$,
  DeleteResourceEndpointAssociationResponse$,
  DeleteResourceGateway$,
  DeleteResourceGatewayCommand,
  DeleteResourceGatewayRequest$,
  DeleteResourceGatewayResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleRequest$,
  DeleteRuleResponse$,
  DeleteService$,
  DeleteServiceCommand,
  DeleteServiceNetwork$,
  DeleteServiceNetworkCommand,
  DeleteServiceNetworkRequest$,
  DeleteServiceNetworkResourceAssociation$,
  DeleteServiceNetworkResourceAssociationCommand,
  DeleteServiceNetworkResourceAssociationRequest$,
  DeleteServiceNetworkResourceAssociationResponse$,
  DeleteServiceNetworkResponse$,
  DeleteServiceNetworkServiceAssociation$,
  DeleteServiceNetworkServiceAssociationCommand,
  DeleteServiceNetworkServiceAssociationRequest$,
  DeleteServiceNetworkServiceAssociationResponse$,
  DeleteServiceNetworkVpcAssociation$,
  DeleteServiceNetworkVpcAssociationCommand,
  DeleteServiceNetworkVpcAssociationRequest$,
  DeleteServiceNetworkVpcAssociationResponse$,
  DeleteServiceRequest$,
  DeleteServiceResponse$,
  DeleteTargetGroup$,
  DeleteTargetGroupCommand,
  DeleteTargetGroupRequest$,
  DeleteTargetGroupResponse$,
  DeregisterTargets$,
  DeregisterTargetsCommand,
  DeregisterTargetsRequest$,
  DeregisterTargetsResponse$,
  DnsEntry$,
  DnsOptions$,
  DnsResource$,
  DomainVerificationSummary$,
  FixedResponseAction$,
  ForwardAction$,
  GetAccessLogSubscription$,
  GetAccessLogSubscriptionCommand,
  GetAccessLogSubscriptionRequest$,
  GetAccessLogSubscriptionResponse$,
  GetAuthPolicy$,
  GetAuthPolicyCommand,
  GetAuthPolicyRequest$,
  GetAuthPolicyResponse$,
  GetDomainVerification$,
  GetDomainVerificationCommand,
  GetDomainVerificationRequest$,
  GetDomainVerificationResponse$,
  GetListener$,
  GetListenerCommand,
  GetListenerRequest$,
  GetListenerResponse$,
  GetResourceConfiguration$,
  GetResourceConfigurationCommand,
  GetResourceConfigurationRequest$,
  GetResourceConfigurationResponse$,
  GetResourceGateway$,
  GetResourceGatewayCommand,
  GetResourceGatewayRequest$,
  GetResourceGatewayResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetRule$,
  GetRuleCommand,
  GetRuleRequest$,
  GetRuleResponse$,
  GetService$,
  GetServiceCommand,
  GetServiceNetwork$,
  GetServiceNetworkCommand,
  GetServiceNetworkRequest$,
  GetServiceNetworkResourceAssociation$,
  GetServiceNetworkResourceAssociationCommand,
  GetServiceNetworkResourceAssociationRequest$,
  GetServiceNetworkResourceAssociationResponse$,
  GetServiceNetworkResponse$,
  GetServiceNetworkServiceAssociation$,
  GetServiceNetworkServiceAssociationCommand,
  GetServiceNetworkServiceAssociationRequest$,
  GetServiceNetworkServiceAssociationResponse$,
  GetServiceNetworkVpcAssociation$,
  GetServiceNetworkVpcAssociationCommand,
  GetServiceNetworkVpcAssociationRequest$,
  GetServiceNetworkVpcAssociationResponse$,
  GetServiceRequest$,
  GetServiceResponse$,
  GetTargetGroup$,
  GetTargetGroupCommand,
  GetTargetGroupRequest$,
  GetTargetGroupResponse$,
  HeaderMatch$,
  HeaderMatchType$,
  HealthCheckConfig$,
  HealthCheckProtocolVersion,
  HttpMatch$,
  InternalServerException,
  InternalServerException$,
  IpAddressType,
  IpResource$,
  LambdaEventStructureVersion,
  ListAccessLogSubscriptions$,
  ListAccessLogSubscriptionsCommand,
  ListAccessLogSubscriptionsRequest$,
  ListAccessLogSubscriptionsResponse$,
  ListDomainVerifications$,
  ListDomainVerificationsCommand,
  ListDomainVerificationsRequest$,
  ListDomainVerificationsResponse$,
  ListListeners$,
  ListListenersCommand,
  ListListenersRequest$,
  ListListenersResponse$,
  ListResourceConfigurations$,
  ListResourceConfigurationsCommand,
  ListResourceConfigurationsRequest$,
  ListResourceConfigurationsResponse$,
  ListResourceEndpointAssociations$,
  ListResourceEndpointAssociationsCommand,
  ListResourceEndpointAssociationsRequest$,
  ListResourceEndpointAssociationsResponse$,
  ListResourceGateways$,
  ListResourceGatewaysCommand,
  ListResourceGatewaysRequest$,
  ListResourceGatewaysResponse$,
  ListRules$,
  ListRulesCommand,
  ListRulesRequest$,
  ListRulesResponse$,
  ListServiceNetworkResourceAssociations$,
  ListServiceNetworkResourceAssociationsCommand,
  ListServiceNetworkResourceAssociationsRequest$,
  ListServiceNetworkResourceAssociationsResponse$,
  ListServiceNetworkServiceAssociations$,
  ListServiceNetworkServiceAssociationsCommand,
  ListServiceNetworkServiceAssociationsRequest$,
  ListServiceNetworkServiceAssociationsResponse$,
  ListServiceNetworkVpcAssociations$,
  ListServiceNetworkVpcAssociationsCommand,
  ListServiceNetworkVpcAssociationsRequest$,
  ListServiceNetworkVpcAssociationsResponse$,
  ListServiceNetworkVpcEndpointAssociations$,
  ListServiceNetworkVpcEndpointAssociationsCommand,
  ListServiceNetworkVpcEndpointAssociationsRequest$,
  ListServiceNetworkVpcEndpointAssociationsResponse$,
  ListServiceNetworks$,
  ListServiceNetworksCommand,
  ListServiceNetworksRequest$,
  ListServiceNetworksResponse$,
  ListServices$,
  ListServicesCommand,
  ListServicesRequest$,
  ListServicesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTargetGroups$,
  ListTargetGroupsCommand,
  ListTargetGroupsRequest$,
  ListTargetGroupsResponse$,
  ListTargets$,
  ListTargetsCommand,
  ListTargetsRequest$,
  ListTargetsResponse$,
  ListenerProtocol,
  ListenerSummary$,
  Matcher$,
  PathMatch$,
  PathMatchType$,
  PrivateDnsPreference,
  ProtocolType,
  PutAuthPolicy$,
  PutAuthPolicyCommand,
  PutAuthPolicyRequest$,
  PutAuthPolicyResponse$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RegisterTargets$,
  RegisterTargetsCommand,
  RegisterTargetsRequest$,
  RegisterTargetsResponse$,
  ResourceConfigurationDefinition$,
  ResourceConfigurationIpAddressType,
  ResourceConfigurationStatus,
  ResourceConfigurationSummary$,
  ResourceConfigurationType,
  ResourceEndpointAssociationSummary$,
  ResourceGatewayIpAddressType,
  ResourceGatewayStatus,
  ResourceGatewaySummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuleAction$,
  RuleMatch$,
  RuleSummary$,
  RuleUpdate$,
  RuleUpdateFailure$,
  RuleUpdateSuccess$,
  ServiceNetworkEndpointAssociation$,
  ServiceNetworkLogType,
  ServiceNetworkResourceAssociationStatus,
  ServiceNetworkResourceAssociationSummary$,
  ServiceNetworkServiceAssociationStatus,
  ServiceNetworkServiceAssociationSummary$,
  ServiceNetworkSummary$,
  ServiceNetworkVpcAssociationStatus,
  ServiceNetworkVpcAssociationSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceStatus,
  ServiceSummary$,
  SharingConfig$,
  StartDomainVerification$,
  StartDomainVerificationCommand,
  StartDomainVerificationRequest$,
  StartDomainVerificationResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Target$,
  TargetFailure$,
  TargetGroupConfig$,
  TargetGroupProtocol,
  TargetGroupProtocolVersion,
  TargetGroupStatus,
  TargetGroupSummary$,
  TargetGroupType,
  TargetStatus,
  TargetSummary$,
  ThrottlingException,
  ThrottlingException$,
  TxtMethodConfig$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccessLogSubscription$,
  UpdateAccessLogSubscriptionCommand,
  UpdateAccessLogSubscriptionRequest$,
  UpdateAccessLogSubscriptionResponse$,
  UpdateListener$,
  UpdateListenerCommand,
  UpdateListenerRequest$,
  UpdateListenerResponse$,
  UpdateResourceConfiguration$,
  UpdateResourceConfigurationCommand,
  UpdateResourceConfigurationRequest$,
  UpdateResourceConfigurationResponse$,
  UpdateResourceGateway$,
  UpdateResourceGatewayCommand,
  UpdateResourceGatewayRequest$,
  UpdateResourceGatewayResponse$,
  UpdateRule$,
  UpdateRuleCommand,
  UpdateRuleRequest$,
  UpdateRuleResponse$,
  UpdateService$,
  UpdateServiceCommand,
  UpdateServiceNetwork$,
  UpdateServiceNetworkCommand,
  UpdateServiceNetworkRequest$,
  UpdateServiceNetworkResponse$,
  UpdateServiceNetworkVpcAssociation$,
  UpdateServiceNetworkVpcAssociationCommand,
  UpdateServiceNetworkVpcAssociationRequest$,
  UpdateServiceNetworkVpcAssociationResponse$,
  UpdateServiceRequest$,
  UpdateServiceResponse$,
  UpdateTargetGroup$,
  UpdateTargetGroupCommand,
  UpdateTargetGroupRequest$,
  UpdateTargetGroupResponse$,
  VPCLattice,
  VPCLatticeClient,
  VPCLatticeServiceException,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VerificationStatus,
  WeightedTargetGroup$,
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
assert(typeof BatchUpdateRule$ === "object");
assert(typeof CreateAccessLogSubscriptionCommand === "function");
assert(typeof CreateAccessLogSubscription$ === "object");
assert(typeof CreateListenerCommand === "function");
assert(typeof CreateListener$ === "object");
assert(typeof CreateResourceConfigurationCommand === "function");
assert(typeof CreateResourceConfiguration$ === "object");
assert(typeof CreateResourceGatewayCommand === "function");
assert(typeof CreateResourceGateway$ === "object");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateService$ === "object");
assert(typeof CreateServiceNetworkCommand === "function");
assert(typeof CreateServiceNetwork$ === "object");
assert(typeof CreateServiceNetworkResourceAssociationCommand === "function");
assert(typeof CreateServiceNetworkResourceAssociation$ === "object");
assert(typeof CreateServiceNetworkServiceAssociationCommand === "function");
assert(typeof CreateServiceNetworkServiceAssociation$ === "object");
assert(typeof CreateServiceNetworkVpcAssociationCommand === "function");
assert(typeof CreateServiceNetworkVpcAssociation$ === "object");
assert(typeof CreateTargetGroupCommand === "function");
assert(typeof CreateTargetGroup$ === "object");
assert(typeof DeleteAccessLogSubscriptionCommand === "function");
assert(typeof DeleteAccessLogSubscription$ === "object");
assert(typeof DeleteAuthPolicyCommand === "function");
assert(typeof DeleteAuthPolicy$ === "object");
assert(typeof DeleteDomainVerificationCommand === "function");
assert(typeof DeleteDomainVerification$ === "object");
assert(typeof DeleteListenerCommand === "function");
assert(typeof DeleteListener$ === "object");
assert(typeof DeleteResourceConfigurationCommand === "function");
assert(typeof DeleteResourceConfiguration$ === "object");
assert(typeof DeleteResourceEndpointAssociationCommand === "function");
assert(typeof DeleteResourceEndpointAssociation$ === "object");
assert(typeof DeleteResourceGatewayCommand === "function");
assert(typeof DeleteResourceGateway$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteService$ === "object");
assert(typeof DeleteServiceNetworkCommand === "function");
assert(typeof DeleteServiceNetwork$ === "object");
assert(typeof DeleteServiceNetworkResourceAssociationCommand === "function");
assert(typeof DeleteServiceNetworkResourceAssociation$ === "object");
assert(typeof DeleteServiceNetworkServiceAssociationCommand === "function");
assert(typeof DeleteServiceNetworkServiceAssociation$ === "object");
assert(typeof DeleteServiceNetworkVpcAssociationCommand === "function");
assert(typeof DeleteServiceNetworkVpcAssociation$ === "object");
assert(typeof DeleteTargetGroupCommand === "function");
assert(typeof DeleteTargetGroup$ === "object");
assert(typeof DeregisterTargetsCommand === "function");
assert(typeof DeregisterTargets$ === "object");
assert(typeof GetAccessLogSubscriptionCommand === "function");
assert(typeof GetAccessLogSubscription$ === "object");
assert(typeof GetAuthPolicyCommand === "function");
assert(typeof GetAuthPolicy$ === "object");
assert(typeof GetDomainVerificationCommand === "function");
assert(typeof GetDomainVerification$ === "object");
assert(typeof GetListenerCommand === "function");
assert(typeof GetListener$ === "object");
assert(typeof GetResourceConfigurationCommand === "function");
assert(typeof GetResourceConfiguration$ === "object");
assert(typeof GetResourceGatewayCommand === "function");
assert(typeof GetResourceGateway$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetRuleCommand === "function");
assert(typeof GetRule$ === "object");
assert(typeof GetServiceCommand === "function");
assert(typeof GetService$ === "object");
assert(typeof GetServiceNetworkCommand === "function");
assert(typeof GetServiceNetwork$ === "object");
assert(typeof GetServiceNetworkResourceAssociationCommand === "function");
assert(typeof GetServiceNetworkResourceAssociation$ === "object");
assert(typeof GetServiceNetworkServiceAssociationCommand === "function");
assert(typeof GetServiceNetworkServiceAssociation$ === "object");
assert(typeof GetServiceNetworkVpcAssociationCommand === "function");
assert(typeof GetServiceNetworkVpcAssociation$ === "object");
assert(typeof GetTargetGroupCommand === "function");
assert(typeof GetTargetGroup$ === "object");
assert(typeof ListAccessLogSubscriptionsCommand === "function");
assert(typeof ListAccessLogSubscriptions$ === "object");
assert(typeof ListDomainVerificationsCommand === "function");
assert(typeof ListDomainVerifications$ === "object");
assert(typeof ListListenersCommand === "function");
assert(typeof ListListeners$ === "object");
assert(typeof ListResourceConfigurationsCommand === "function");
assert(typeof ListResourceConfigurations$ === "object");
assert(typeof ListResourceEndpointAssociationsCommand === "function");
assert(typeof ListResourceEndpointAssociations$ === "object");
assert(typeof ListResourceGatewaysCommand === "function");
assert(typeof ListResourceGateways$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListServiceNetworkResourceAssociationsCommand === "function");
assert(typeof ListServiceNetworkResourceAssociations$ === "object");
assert(typeof ListServiceNetworksCommand === "function");
assert(typeof ListServiceNetworks$ === "object");
assert(typeof ListServiceNetworkServiceAssociationsCommand === "function");
assert(typeof ListServiceNetworkServiceAssociations$ === "object");
assert(typeof ListServiceNetworkVpcAssociationsCommand === "function");
assert(typeof ListServiceNetworkVpcAssociations$ === "object");
assert(typeof ListServiceNetworkVpcEndpointAssociationsCommand === "function");
assert(typeof ListServiceNetworkVpcEndpointAssociations$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetGroupsCommand === "function");
assert(typeof ListTargetGroups$ === "object");
assert(typeof ListTargetsCommand === "function");
assert(typeof ListTargets$ === "object");
assert(typeof PutAuthPolicyCommand === "function");
assert(typeof PutAuthPolicy$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RegisterTargetsCommand === "function");
assert(typeof RegisterTargets$ === "object");
assert(typeof StartDomainVerificationCommand === "function");
assert(typeof StartDomainVerification$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessLogSubscriptionCommand === "function");
assert(typeof UpdateAccessLogSubscription$ === "object");
assert(typeof UpdateListenerCommand === "function");
assert(typeof UpdateListener$ === "object");
assert(typeof UpdateResourceConfigurationCommand === "function");
assert(typeof UpdateResourceConfiguration$ === "object");
assert(typeof UpdateResourceGatewayCommand === "function");
assert(typeof UpdateResourceGateway$ === "object");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateRule$ === "object");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateService$ === "object");
assert(typeof UpdateServiceNetworkCommand === "function");
assert(typeof UpdateServiceNetwork$ === "object");
assert(typeof UpdateServiceNetworkVpcAssociationCommand === "function");
assert(typeof UpdateServiceNetworkVpcAssociation$ === "object");
assert(typeof UpdateTargetGroupCommand === "function");
assert(typeof UpdateTargetGroup$ === "object");
// structural schemas
assert(typeof AccessLogSubscriptionSummary$ === "object");
assert(typeof ArnResource$ === "object");
assert(typeof BatchUpdateRuleRequest$ === "object");
assert(typeof BatchUpdateRuleResponse$ === "object");
assert(typeof CreateAccessLogSubscriptionRequest$ === "object");
assert(typeof CreateAccessLogSubscriptionResponse$ === "object");
assert(typeof CreateListenerRequest$ === "object");
assert(typeof CreateListenerResponse$ === "object");
assert(typeof CreateResourceConfigurationRequest$ === "object");
assert(typeof CreateResourceConfigurationResponse$ === "object");
assert(typeof CreateResourceGatewayRequest$ === "object");
assert(typeof CreateResourceGatewayResponse$ === "object");
assert(typeof CreateRuleRequest$ === "object");
assert(typeof CreateRuleResponse$ === "object");
assert(typeof CreateServiceNetworkRequest$ === "object");
assert(typeof CreateServiceNetworkResourceAssociationRequest$ === "object");
assert(typeof CreateServiceNetworkResourceAssociationResponse$ === "object");
assert(typeof CreateServiceNetworkResponse$ === "object");
assert(typeof CreateServiceNetworkServiceAssociationRequest$ === "object");
assert(typeof CreateServiceNetworkServiceAssociationResponse$ === "object");
assert(typeof CreateServiceNetworkVpcAssociationRequest$ === "object");
assert(typeof CreateServiceNetworkVpcAssociationResponse$ === "object");
assert(typeof CreateServiceRequest$ === "object");
assert(typeof CreateServiceResponse$ === "object");
assert(typeof CreateTargetGroupRequest$ === "object");
assert(typeof CreateTargetGroupResponse$ === "object");
assert(typeof DeleteAccessLogSubscriptionRequest$ === "object");
assert(typeof DeleteAccessLogSubscriptionResponse$ === "object");
assert(typeof DeleteAuthPolicyRequest$ === "object");
assert(typeof DeleteAuthPolicyResponse$ === "object");
assert(typeof DeleteDomainVerificationRequest$ === "object");
assert(typeof DeleteDomainVerificationResponse$ === "object");
assert(typeof DeleteListenerRequest$ === "object");
assert(typeof DeleteListenerResponse$ === "object");
assert(typeof DeleteResourceConfigurationRequest$ === "object");
assert(typeof DeleteResourceConfigurationResponse$ === "object");
assert(typeof DeleteResourceEndpointAssociationRequest$ === "object");
assert(typeof DeleteResourceEndpointAssociationResponse$ === "object");
assert(typeof DeleteResourceGatewayRequest$ === "object");
assert(typeof DeleteResourceGatewayResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteRuleRequest$ === "object");
assert(typeof DeleteRuleResponse$ === "object");
assert(typeof DeleteServiceNetworkRequest$ === "object");
assert(typeof DeleteServiceNetworkResourceAssociationRequest$ === "object");
assert(typeof DeleteServiceNetworkResourceAssociationResponse$ === "object");
assert(typeof DeleteServiceNetworkResponse$ === "object");
assert(typeof DeleteServiceNetworkServiceAssociationRequest$ === "object");
assert(typeof DeleteServiceNetworkServiceAssociationResponse$ === "object");
assert(typeof DeleteServiceNetworkVpcAssociationRequest$ === "object");
assert(typeof DeleteServiceNetworkVpcAssociationResponse$ === "object");
assert(typeof DeleteServiceRequest$ === "object");
assert(typeof DeleteServiceResponse$ === "object");
assert(typeof DeleteTargetGroupRequest$ === "object");
assert(typeof DeleteTargetGroupResponse$ === "object");
assert(typeof DeregisterTargetsRequest$ === "object");
assert(typeof DeregisterTargetsResponse$ === "object");
assert(typeof DnsEntry$ === "object");
assert(typeof DnsOptions$ === "object");
assert(typeof DnsResource$ === "object");
assert(typeof DomainVerificationSummary$ === "object");
assert(typeof FixedResponseAction$ === "object");
assert(typeof ForwardAction$ === "object");
assert(typeof GetAccessLogSubscriptionRequest$ === "object");
assert(typeof GetAccessLogSubscriptionResponse$ === "object");
assert(typeof GetAuthPolicyRequest$ === "object");
assert(typeof GetAuthPolicyResponse$ === "object");
assert(typeof GetDomainVerificationRequest$ === "object");
assert(typeof GetDomainVerificationResponse$ === "object");
assert(typeof GetListenerRequest$ === "object");
assert(typeof GetListenerResponse$ === "object");
assert(typeof GetResourceConfigurationRequest$ === "object");
assert(typeof GetResourceConfigurationResponse$ === "object");
assert(typeof GetResourceGatewayRequest$ === "object");
assert(typeof GetResourceGatewayResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetRuleRequest$ === "object");
assert(typeof GetRuleResponse$ === "object");
assert(typeof GetServiceNetworkRequest$ === "object");
assert(typeof GetServiceNetworkResourceAssociationRequest$ === "object");
assert(typeof GetServiceNetworkResourceAssociationResponse$ === "object");
assert(typeof GetServiceNetworkResponse$ === "object");
assert(typeof GetServiceNetworkServiceAssociationRequest$ === "object");
assert(typeof GetServiceNetworkServiceAssociationResponse$ === "object");
assert(typeof GetServiceNetworkVpcAssociationRequest$ === "object");
assert(typeof GetServiceNetworkVpcAssociationResponse$ === "object");
assert(typeof GetServiceRequest$ === "object");
assert(typeof GetServiceResponse$ === "object");
assert(typeof GetTargetGroupRequest$ === "object");
assert(typeof GetTargetGroupResponse$ === "object");
assert(typeof HeaderMatch$ === "object");
assert(typeof HeaderMatchType$ === "object");
assert(typeof HealthCheckConfig$ === "object");
assert(typeof HttpMatch$ === "object");
assert(typeof IpResource$ === "object");
assert(typeof ListAccessLogSubscriptionsRequest$ === "object");
assert(typeof ListAccessLogSubscriptionsResponse$ === "object");
assert(typeof ListDomainVerificationsRequest$ === "object");
assert(typeof ListDomainVerificationsResponse$ === "object");
assert(typeof ListenerSummary$ === "object");
assert(typeof ListListenersRequest$ === "object");
assert(typeof ListListenersResponse$ === "object");
assert(typeof ListResourceConfigurationsRequest$ === "object");
assert(typeof ListResourceConfigurationsResponse$ === "object");
assert(typeof ListResourceEndpointAssociationsRequest$ === "object");
assert(typeof ListResourceEndpointAssociationsResponse$ === "object");
assert(typeof ListResourceGatewaysRequest$ === "object");
assert(typeof ListResourceGatewaysResponse$ === "object");
assert(typeof ListRulesRequest$ === "object");
assert(typeof ListRulesResponse$ === "object");
assert(typeof ListServiceNetworkResourceAssociationsRequest$ === "object");
assert(typeof ListServiceNetworkResourceAssociationsResponse$ === "object");
assert(typeof ListServiceNetworkServiceAssociationsRequest$ === "object");
assert(typeof ListServiceNetworkServiceAssociationsResponse$ === "object");
assert(typeof ListServiceNetworksRequest$ === "object");
assert(typeof ListServiceNetworksResponse$ === "object");
assert(typeof ListServiceNetworkVpcAssociationsRequest$ === "object");
assert(typeof ListServiceNetworkVpcAssociationsResponse$ === "object");
assert(typeof ListServiceNetworkVpcEndpointAssociationsRequest$ === "object");
assert(typeof ListServiceNetworkVpcEndpointAssociationsResponse$ === "object");
assert(typeof ListServicesRequest$ === "object");
assert(typeof ListServicesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTargetGroupsRequest$ === "object");
assert(typeof ListTargetGroupsResponse$ === "object");
assert(typeof ListTargetsRequest$ === "object");
assert(typeof ListTargetsResponse$ === "object");
assert(typeof Matcher$ === "object");
assert(typeof PathMatch$ === "object");
assert(typeof PathMatchType$ === "object");
assert(typeof PutAuthPolicyRequest$ === "object");
assert(typeof PutAuthPolicyResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RegisterTargetsRequest$ === "object");
assert(typeof RegisterTargetsResponse$ === "object");
assert(typeof ResourceConfigurationDefinition$ === "object");
assert(typeof ResourceConfigurationSummary$ === "object");
assert(typeof ResourceEndpointAssociationSummary$ === "object");
assert(typeof ResourceGatewaySummary$ === "object");
assert(typeof RuleAction$ === "object");
assert(typeof RuleMatch$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof RuleUpdate$ === "object");
assert(typeof RuleUpdateFailure$ === "object");
assert(typeof RuleUpdateSuccess$ === "object");
assert(typeof ServiceNetworkEndpointAssociation$ === "object");
assert(typeof ServiceNetworkResourceAssociationSummary$ === "object");
assert(typeof ServiceNetworkServiceAssociationSummary$ === "object");
assert(typeof ServiceNetworkSummary$ === "object");
assert(typeof ServiceNetworkVpcAssociationSummary$ === "object");
assert(typeof ServiceSummary$ === "object");
assert(typeof SharingConfig$ === "object");
assert(typeof StartDomainVerificationRequest$ === "object");
assert(typeof StartDomainVerificationResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Target$ === "object");
assert(typeof TargetFailure$ === "object");
assert(typeof TargetGroupConfig$ === "object");
assert(typeof TargetGroupSummary$ === "object");
assert(typeof TargetSummary$ === "object");
assert(typeof TxtMethodConfig$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccessLogSubscriptionRequest$ === "object");
assert(typeof UpdateAccessLogSubscriptionResponse$ === "object");
assert(typeof UpdateListenerRequest$ === "object");
assert(typeof UpdateListenerResponse$ === "object");
assert(typeof UpdateResourceConfigurationRequest$ === "object");
assert(typeof UpdateResourceConfigurationResponse$ === "object");
assert(typeof UpdateResourceGatewayRequest$ === "object");
assert(typeof UpdateResourceGatewayResponse$ === "object");
assert(typeof UpdateRuleRequest$ === "object");
assert(typeof UpdateRuleResponse$ === "object");
assert(typeof UpdateServiceNetworkRequest$ === "object");
assert(typeof UpdateServiceNetworkResponse$ === "object");
assert(typeof UpdateServiceNetworkVpcAssociationRequest$ === "object");
assert(typeof UpdateServiceNetworkVpcAssociationResponse$ === "object");
assert(typeof UpdateServiceRequest$ === "object");
assert(typeof UpdateServiceResponse$ === "object");
assert(typeof UpdateTargetGroupRequest$ === "object");
assert(typeof UpdateTargetGroupResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WeightedTargetGroup$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
assert(typeof VerificationStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof VPCLatticeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof VPCLatticeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof VPCLatticeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof VPCLatticeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof VPCLatticeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof VPCLatticeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof VPCLatticeServiceException);
assert(typeof ValidationException$ === "object");
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
