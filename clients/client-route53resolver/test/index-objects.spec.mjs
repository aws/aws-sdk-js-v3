import {
  AccessDeniedException,
  AccessDeniedException$,
  Action,
  AssociateFirewallRuleGroup$,
  AssociateFirewallRuleGroupCommand,
  AssociateFirewallRuleGroupRequest$,
  AssociateFirewallRuleGroupResponse$,
  AssociateResolverEndpointIpAddress$,
  AssociateResolverEndpointIpAddressCommand,
  AssociateResolverEndpointIpAddressRequest$,
  AssociateResolverEndpointIpAddressResponse$,
  AssociateResolverQueryLogConfig$,
  AssociateResolverQueryLogConfigCommand,
  AssociateResolverQueryLogConfigRequest$,
  AssociateResolverQueryLogConfigResponse$,
  AssociateResolverRule$,
  AssociateResolverRuleCommand,
  AssociateResolverRuleRequest$,
  AssociateResolverRuleResponse$,
  AutodefinedReverseFlag,
  BlockOverrideDnsType,
  BlockResponse,
  ConfidenceThreshold,
  ConflictException,
  ConflictException$,
  CreateFirewallDomainList$,
  CreateFirewallDomainListCommand,
  CreateFirewallDomainListRequest$,
  CreateFirewallDomainListResponse$,
  CreateFirewallRule$,
  CreateFirewallRuleCommand,
  CreateFirewallRuleGroup$,
  CreateFirewallRuleGroupCommand,
  CreateFirewallRuleGroupRequest$,
  CreateFirewallRuleGroupResponse$,
  CreateFirewallRuleRequest$,
  CreateFirewallRuleResponse$,
  CreateOutpostResolver$,
  CreateOutpostResolverCommand,
  CreateOutpostResolverRequest$,
  CreateOutpostResolverResponse$,
  CreateResolverEndpoint$,
  CreateResolverEndpointCommand,
  CreateResolverEndpointRequest$,
  CreateResolverEndpointResponse$,
  CreateResolverQueryLogConfig$,
  CreateResolverQueryLogConfigCommand,
  CreateResolverQueryLogConfigRequest$,
  CreateResolverQueryLogConfigResponse$,
  CreateResolverRule$,
  CreateResolverRuleCommand,
  CreateResolverRuleRequest$,
  CreateResolverRuleResponse$,
  DeleteFirewallDomainList$,
  DeleteFirewallDomainListCommand,
  DeleteFirewallDomainListRequest$,
  DeleteFirewallDomainListResponse$,
  DeleteFirewallRule$,
  DeleteFirewallRuleCommand,
  DeleteFirewallRuleGroup$,
  DeleteFirewallRuleGroupCommand,
  DeleteFirewallRuleGroupRequest$,
  DeleteFirewallRuleGroupResponse$,
  DeleteFirewallRuleRequest$,
  DeleteFirewallRuleResponse$,
  DeleteOutpostResolver$,
  DeleteOutpostResolverCommand,
  DeleteOutpostResolverRequest$,
  DeleteOutpostResolverResponse$,
  DeleteResolverEndpoint$,
  DeleteResolverEndpointCommand,
  DeleteResolverEndpointRequest$,
  DeleteResolverEndpointResponse$,
  DeleteResolverQueryLogConfig$,
  DeleteResolverQueryLogConfigCommand,
  DeleteResolverQueryLogConfigRequest$,
  DeleteResolverQueryLogConfigResponse$,
  DeleteResolverRule$,
  DeleteResolverRuleCommand,
  DeleteResolverRuleRequest$,
  DeleteResolverRuleResponse$,
  DisassociateFirewallRuleGroup$,
  DisassociateFirewallRuleGroupCommand,
  DisassociateFirewallRuleGroupRequest$,
  DisassociateFirewallRuleGroupResponse$,
  DisassociateResolverEndpointIpAddress$,
  DisassociateResolverEndpointIpAddressCommand,
  DisassociateResolverEndpointIpAddressRequest$,
  DisassociateResolverEndpointIpAddressResponse$,
  DisassociateResolverQueryLogConfig$,
  DisassociateResolverQueryLogConfigCommand,
  DisassociateResolverQueryLogConfigRequest$,
  DisassociateResolverQueryLogConfigResponse$,
  DisassociateResolverRule$,
  DisassociateResolverRuleCommand,
  DisassociateResolverRuleRequest$,
  DisassociateResolverRuleResponse$,
  DnsThreatProtection,
  Filter$,
  FirewallConfig$,
  FirewallDomainImportOperation,
  FirewallDomainList$,
  FirewallDomainListMetadata$,
  FirewallDomainListStatus,
  FirewallDomainRedirectionAction,
  FirewallDomainUpdateOperation,
  FirewallFailOpenStatus,
  FirewallRule$,
  FirewallRuleGroup$,
  FirewallRuleGroupAssociation$,
  FirewallRuleGroupAssociationStatus,
  FirewallRuleGroupMetadata$,
  FirewallRuleGroupStatus,
  GetFirewallConfig$,
  GetFirewallConfigCommand,
  GetFirewallConfigRequest$,
  GetFirewallConfigResponse$,
  GetFirewallDomainList$,
  GetFirewallDomainListCommand,
  GetFirewallDomainListRequest$,
  GetFirewallDomainListResponse$,
  GetFirewallRuleGroup$,
  GetFirewallRuleGroupAssociation$,
  GetFirewallRuleGroupAssociationCommand,
  GetFirewallRuleGroupAssociationRequest$,
  GetFirewallRuleGroupAssociationResponse$,
  GetFirewallRuleGroupCommand,
  GetFirewallRuleGroupPolicy$,
  GetFirewallRuleGroupPolicyCommand,
  GetFirewallRuleGroupPolicyRequest$,
  GetFirewallRuleGroupPolicyResponse$,
  GetFirewallRuleGroupRequest$,
  GetFirewallRuleGroupResponse$,
  GetOutpostResolver$,
  GetOutpostResolverCommand,
  GetOutpostResolverRequest$,
  GetOutpostResolverResponse$,
  GetResolverConfig$,
  GetResolverConfigCommand,
  GetResolverConfigRequest$,
  GetResolverConfigResponse$,
  GetResolverDnssecConfig$,
  GetResolverDnssecConfigCommand,
  GetResolverDnssecConfigRequest$,
  GetResolverDnssecConfigResponse$,
  GetResolverEndpoint$,
  GetResolverEndpointCommand,
  GetResolverEndpointRequest$,
  GetResolverEndpointResponse$,
  GetResolverQueryLogConfig$,
  GetResolverQueryLogConfigAssociation$,
  GetResolverQueryLogConfigAssociationCommand,
  GetResolverQueryLogConfigAssociationRequest$,
  GetResolverQueryLogConfigAssociationResponse$,
  GetResolverQueryLogConfigCommand,
  GetResolverQueryLogConfigPolicy$,
  GetResolverQueryLogConfigPolicyCommand,
  GetResolverQueryLogConfigPolicyRequest$,
  GetResolverQueryLogConfigPolicyResponse$,
  GetResolverQueryLogConfigRequest$,
  GetResolverQueryLogConfigResponse$,
  GetResolverRule$,
  GetResolverRuleAssociation$,
  GetResolverRuleAssociationCommand,
  GetResolverRuleAssociationRequest$,
  GetResolverRuleAssociationResponse$,
  GetResolverRuleCommand,
  GetResolverRulePolicy$,
  GetResolverRulePolicyCommand,
  GetResolverRulePolicyRequest$,
  GetResolverRulePolicyResponse$,
  GetResolverRuleRequest$,
  GetResolverRuleResponse$,
  ImportFirewallDomains$,
  ImportFirewallDomainsCommand,
  ImportFirewallDomainsRequest$,
  ImportFirewallDomainsResponse$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidPolicyDocument,
  InvalidPolicyDocument$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidTagException,
  InvalidTagException$,
  IpAddressRequest$,
  IpAddressResponse$,
  IpAddressStatus,
  IpAddressUpdate$,
  LimitExceededException,
  LimitExceededException$,
  ListFirewallConfigs$,
  ListFirewallConfigsCommand,
  ListFirewallConfigsRequest$,
  ListFirewallConfigsResponse$,
  ListFirewallDomainLists$,
  ListFirewallDomainListsCommand,
  ListFirewallDomainListsRequest$,
  ListFirewallDomainListsResponse$,
  ListFirewallDomains$,
  ListFirewallDomainsCommand,
  ListFirewallDomainsRequest$,
  ListFirewallDomainsResponse$,
  ListFirewallRuleGroupAssociations$,
  ListFirewallRuleGroupAssociationsCommand,
  ListFirewallRuleGroupAssociationsRequest$,
  ListFirewallRuleGroupAssociationsResponse$,
  ListFirewallRuleGroups$,
  ListFirewallRuleGroupsCommand,
  ListFirewallRuleGroupsRequest$,
  ListFirewallRuleGroupsResponse$,
  ListFirewallRules$,
  ListFirewallRulesCommand,
  ListFirewallRulesRequest$,
  ListFirewallRulesResponse$,
  ListOutpostResolvers$,
  ListOutpostResolversCommand,
  ListOutpostResolversRequest$,
  ListOutpostResolversResponse$,
  ListResolverConfigs$,
  ListResolverConfigsCommand,
  ListResolverConfigsRequest$,
  ListResolverConfigsResponse$,
  ListResolverDnssecConfigs$,
  ListResolverDnssecConfigsCommand,
  ListResolverDnssecConfigsRequest$,
  ListResolverDnssecConfigsResponse$,
  ListResolverEndpointIpAddresses$,
  ListResolverEndpointIpAddressesCommand,
  ListResolverEndpointIpAddressesRequest$,
  ListResolverEndpointIpAddressesResponse$,
  ListResolverEndpoints$,
  ListResolverEndpointsCommand,
  ListResolverEndpointsRequest$,
  ListResolverEndpointsResponse$,
  ListResolverQueryLogConfigAssociations$,
  ListResolverQueryLogConfigAssociationsCommand,
  ListResolverQueryLogConfigAssociationsRequest$,
  ListResolverQueryLogConfigAssociationsResponse$,
  ListResolverQueryLogConfigs$,
  ListResolverQueryLogConfigsCommand,
  ListResolverQueryLogConfigsRequest$,
  ListResolverQueryLogConfigsResponse$,
  ListResolverRuleAssociations$,
  ListResolverRuleAssociationsCommand,
  ListResolverRuleAssociationsRequest$,
  ListResolverRuleAssociationsResponse$,
  ListResolverRules$,
  ListResolverRulesCommand,
  ListResolverRulesRequest$,
  ListResolverRulesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MutationProtectionStatus,
  OutpostResolver$,
  OutpostResolverStatus,
  paginateListFirewallConfigs,
  paginateListFirewallDomainLists,
  paginateListFirewallDomains,
  paginateListFirewallRuleGroupAssociations,
  paginateListFirewallRuleGroups,
  paginateListFirewallRules,
  paginateListOutpostResolvers,
  paginateListResolverConfigs,
  paginateListResolverDnssecConfigs,
  paginateListResolverEndpointIpAddresses,
  paginateListResolverEndpoints,
  paginateListResolverQueryLogConfigAssociations,
  paginateListResolverQueryLogConfigs,
  paginateListResolverRuleAssociations,
  paginateListResolverRules,
  paginateListTagsForResource,
  Protocol,
  PutFirewallRuleGroupPolicy$,
  PutFirewallRuleGroupPolicyCommand,
  PutFirewallRuleGroupPolicyRequest$,
  PutFirewallRuleGroupPolicyResponse$,
  PutResolverQueryLogConfigPolicy$,
  PutResolverQueryLogConfigPolicyCommand,
  PutResolverQueryLogConfigPolicyRequest$,
  PutResolverQueryLogConfigPolicyResponse$,
  PutResolverRulePolicy$,
  PutResolverRulePolicyCommand,
  PutResolverRulePolicyRequest$,
  PutResolverRulePolicyResponse$,
  ResolverAutodefinedReverseStatus,
  ResolverConfig$,
  ResolverDnssecConfig$,
  ResolverDNSSECValidationStatus,
  ResolverEndpoint$,
  ResolverEndpointDirection,
  ResolverEndpointStatus,
  ResolverEndpointType,
  ResolverQueryLogConfig$,
  ResolverQueryLogConfigAssociation$,
  ResolverQueryLogConfigAssociationError,
  ResolverQueryLogConfigAssociationStatus,
  ResolverQueryLogConfigStatus,
  ResolverRule$,
  ResolverRuleAssociation$,
  ResolverRuleAssociationStatus,
  ResolverRuleConfig$,
  ResolverRuleStatus,
  ResourceExistsException,
  ResourceExistsException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  Route53Resolver,
  Route53ResolverClient,
  Route53ResolverServiceException,
  RuleTypeOption,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ShareStatus,
  SortOrder,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetAddress$,
  ThrottlingException,
  ThrottlingException$,
  UnknownResourceException,
  UnknownResourceException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateFirewallConfig$,
  UpdateFirewallConfigCommand,
  UpdateFirewallConfigRequest$,
  UpdateFirewallConfigResponse$,
  UpdateFirewallDomains$,
  UpdateFirewallDomainsCommand,
  UpdateFirewallDomainsRequest$,
  UpdateFirewallDomainsResponse$,
  UpdateFirewallRule$,
  UpdateFirewallRuleCommand,
  UpdateFirewallRuleGroupAssociation$,
  UpdateFirewallRuleGroupAssociationCommand,
  UpdateFirewallRuleGroupAssociationRequest$,
  UpdateFirewallRuleGroupAssociationResponse$,
  UpdateFirewallRuleRequest$,
  UpdateFirewallRuleResponse$,
  UpdateIpAddress$,
  UpdateOutpostResolver$,
  UpdateOutpostResolverCommand,
  UpdateOutpostResolverRequest$,
  UpdateOutpostResolverResponse$,
  UpdateResolverConfig$,
  UpdateResolverConfigCommand,
  UpdateResolverConfigRequest$,
  UpdateResolverConfigResponse$,
  UpdateResolverDnssecConfig$,
  UpdateResolverDnssecConfigCommand,
  UpdateResolverDnssecConfigRequest$,
  UpdateResolverDnssecConfigResponse$,
  UpdateResolverEndpoint$,
  UpdateResolverEndpointCommand,
  UpdateResolverEndpointRequest$,
  UpdateResolverEndpointResponse$,
  UpdateResolverRule$,
  UpdateResolverRuleCommand,
  UpdateResolverRuleRequest$,
  UpdateResolverRuleResponse$,
  Validation,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53ResolverClient === "function");
assert(typeof Route53Resolver === "function");
// commands
assert(typeof AssociateFirewallRuleGroupCommand === "function");
assert(typeof AssociateFirewallRuleGroup$ === "object");
assert(typeof AssociateResolverEndpointIpAddressCommand === "function");
assert(typeof AssociateResolverEndpointIpAddress$ === "object");
assert(typeof AssociateResolverQueryLogConfigCommand === "function");
assert(typeof AssociateResolverQueryLogConfig$ === "object");
assert(typeof AssociateResolverRuleCommand === "function");
assert(typeof AssociateResolverRule$ === "object");
assert(typeof CreateFirewallDomainListCommand === "function");
assert(typeof CreateFirewallDomainList$ === "object");
assert(typeof CreateFirewallRuleCommand === "function");
assert(typeof CreateFirewallRule$ === "object");
assert(typeof CreateFirewallRuleGroupCommand === "function");
assert(typeof CreateFirewallRuleGroup$ === "object");
assert(typeof CreateOutpostResolverCommand === "function");
assert(typeof CreateOutpostResolver$ === "object");
assert(typeof CreateResolverEndpointCommand === "function");
assert(typeof CreateResolverEndpoint$ === "object");
assert(typeof CreateResolverQueryLogConfigCommand === "function");
assert(typeof CreateResolverQueryLogConfig$ === "object");
assert(typeof CreateResolverRuleCommand === "function");
assert(typeof CreateResolverRule$ === "object");
assert(typeof DeleteFirewallDomainListCommand === "function");
assert(typeof DeleteFirewallDomainList$ === "object");
assert(typeof DeleteFirewallRuleCommand === "function");
assert(typeof DeleteFirewallRule$ === "object");
assert(typeof DeleteFirewallRuleGroupCommand === "function");
assert(typeof DeleteFirewallRuleGroup$ === "object");
assert(typeof DeleteOutpostResolverCommand === "function");
assert(typeof DeleteOutpostResolver$ === "object");
assert(typeof DeleteResolverEndpointCommand === "function");
assert(typeof DeleteResolverEndpoint$ === "object");
assert(typeof DeleteResolverQueryLogConfigCommand === "function");
assert(typeof DeleteResolverQueryLogConfig$ === "object");
assert(typeof DeleteResolverRuleCommand === "function");
assert(typeof DeleteResolverRule$ === "object");
assert(typeof DisassociateFirewallRuleGroupCommand === "function");
assert(typeof DisassociateFirewallRuleGroup$ === "object");
assert(typeof DisassociateResolverEndpointIpAddressCommand === "function");
assert(typeof DisassociateResolverEndpointIpAddress$ === "object");
assert(typeof DisassociateResolverQueryLogConfigCommand === "function");
assert(typeof DisassociateResolverQueryLogConfig$ === "object");
assert(typeof DisassociateResolverRuleCommand === "function");
assert(typeof DisassociateResolverRule$ === "object");
assert(typeof GetFirewallConfigCommand === "function");
assert(typeof GetFirewallConfig$ === "object");
assert(typeof GetFirewallDomainListCommand === "function");
assert(typeof GetFirewallDomainList$ === "object");
assert(typeof GetFirewallRuleGroupCommand === "function");
assert(typeof GetFirewallRuleGroup$ === "object");
assert(typeof GetFirewallRuleGroupAssociationCommand === "function");
assert(typeof GetFirewallRuleGroupAssociation$ === "object");
assert(typeof GetFirewallRuleGroupPolicyCommand === "function");
assert(typeof GetFirewallRuleGroupPolicy$ === "object");
assert(typeof GetOutpostResolverCommand === "function");
assert(typeof GetOutpostResolver$ === "object");
assert(typeof GetResolverConfigCommand === "function");
assert(typeof GetResolverConfig$ === "object");
assert(typeof GetResolverDnssecConfigCommand === "function");
assert(typeof GetResolverDnssecConfig$ === "object");
assert(typeof GetResolverEndpointCommand === "function");
assert(typeof GetResolverEndpoint$ === "object");
assert(typeof GetResolverQueryLogConfigCommand === "function");
assert(typeof GetResolverQueryLogConfig$ === "object");
assert(typeof GetResolverQueryLogConfigAssociationCommand === "function");
assert(typeof GetResolverQueryLogConfigAssociation$ === "object");
assert(typeof GetResolverQueryLogConfigPolicyCommand === "function");
assert(typeof GetResolverQueryLogConfigPolicy$ === "object");
assert(typeof GetResolverRuleCommand === "function");
assert(typeof GetResolverRule$ === "object");
assert(typeof GetResolverRuleAssociationCommand === "function");
assert(typeof GetResolverRuleAssociation$ === "object");
assert(typeof GetResolverRulePolicyCommand === "function");
assert(typeof GetResolverRulePolicy$ === "object");
assert(typeof ImportFirewallDomainsCommand === "function");
assert(typeof ImportFirewallDomains$ === "object");
assert(typeof ListFirewallConfigsCommand === "function");
assert(typeof ListFirewallConfigs$ === "object");
assert(typeof ListFirewallDomainListsCommand === "function");
assert(typeof ListFirewallDomainLists$ === "object");
assert(typeof ListFirewallDomainsCommand === "function");
assert(typeof ListFirewallDomains$ === "object");
assert(typeof ListFirewallRuleGroupAssociationsCommand === "function");
assert(typeof ListFirewallRuleGroupAssociations$ === "object");
assert(typeof ListFirewallRuleGroupsCommand === "function");
assert(typeof ListFirewallRuleGroups$ === "object");
assert(typeof ListFirewallRulesCommand === "function");
assert(typeof ListFirewallRules$ === "object");
assert(typeof ListOutpostResolversCommand === "function");
assert(typeof ListOutpostResolvers$ === "object");
assert(typeof ListResolverConfigsCommand === "function");
assert(typeof ListResolverConfigs$ === "object");
assert(typeof ListResolverDnssecConfigsCommand === "function");
assert(typeof ListResolverDnssecConfigs$ === "object");
assert(typeof ListResolverEndpointIpAddressesCommand === "function");
assert(typeof ListResolverEndpointIpAddresses$ === "object");
assert(typeof ListResolverEndpointsCommand === "function");
assert(typeof ListResolverEndpoints$ === "object");
assert(typeof ListResolverQueryLogConfigAssociationsCommand === "function");
assert(typeof ListResolverQueryLogConfigAssociations$ === "object");
assert(typeof ListResolverQueryLogConfigsCommand === "function");
assert(typeof ListResolverQueryLogConfigs$ === "object");
assert(typeof ListResolverRuleAssociationsCommand === "function");
assert(typeof ListResolverRuleAssociations$ === "object");
assert(typeof ListResolverRulesCommand === "function");
assert(typeof ListResolverRules$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutFirewallRuleGroupPolicyCommand === "function");
assert(typeof PutFirewallRuleGroupPolicy$ === "object");
assert(typeof PutResolverQueryLogConfigPolicyCommand === "function");
assert(typeof PutResolverQueryLogConfigPolicy$ === "object");
assert(typeof PutResolverRulePolicyCommand === "function");
assert(typeof PutResolverRulePolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateFirewallConfigCommand === "function");
assert(typeof UpdateFirewallConfig$ === "object");
assert(typeof UpdateFirewallDomainsCommand === "function");
assert(typeof UpdateFirewallDomains$ === "object");
assert(typeof UpdateFirewallRuleCommand === "function");
assert(typeof UpdateFirewallRule$ === "object");
assert(typeof UpdateFirewallRuleGroupAssociationCommand === "function");
assert(typeof UpdateFirewallRuleGroupAssociation$ === "object");
assert(typeof UpdateOutpostResolverCommand === "function");
assert(typeof UpdateOutpostResolver$ === "object");
assert(typeof UpdateResolverConfigCommand === "function");
assert(typeof UpdateResolverConfig$ === "object");
assert(typeof UpdateResolverDnssecConfigCommand === "function");
assert(typeof UpdateResolverDnssecConfig$ === "object");
assert(typeof UpdateResolverEndpointCommand === "function");
assert(typeof UpdateResolverEndpoint$ === "object");
assert(typeof UpdateResolverRuleCommand === "function");
assert(typeof UpdateResolverRule$ === "object");
// structural schemas
assert(typeof AssociateFirewallRuleGroupRequest$ === "object");
assert(typeof AssociateFirewallRuleGroupResponse$ === "object");
assert(typeof AssociateResolverEndpointIpAddressRequest$ === "object");
assert(typeof AssociateResolverEndpointIpAddressResponse$ === "object");
assert(typeof AssociateResolverQueryLogConfigRequest$ === "object");
assert(typeof AssociateResolverQueryLogConfigResponse$ === "object");
assert(typeof AssociateResolverRuleRequest$ === "object");
assert(typeof AssociateResolverRuleResponse$ === "object");
assert(typeof CreateFirewallDomainListRequest$ === "object");
assert(typeof CreateFirewallDomainListResponse$ === "object");
assert(typeof CreateFirewallRuleGroupRequest$ === "object");
assert(typeof CreateFirewallRuleGroupResponse$ === "object");
assert(typeof CreateFirewallRuleRequest$ === "object");
assert(typeof CreateFirewallRuleResponse$ === "object");
assert(typeof CreateOutpostResolverRequest$ === "object");
assert(typeof CreateOutpostResolverResponse$ === "object");
assert(typeof CreateResolverEndpointRequest$ === "object");
assert(typeof CreateResolverEndpointResponse$ === "object");
assert(typeof CreateResolverQueryLogConfigRequest$ === "object");
assert(typeof CreateResolverQueryLogConfigResponse$ === "object");
assert(typeof CreateResolverRuleRequest$ === "object");
assert(typeof CreateResolverRuleResponse$ === "object");
assert(typeof DeleteFirewallDomainListRequest$ === "object");
assert(typeof DeleteFirewallDomainListResponse$ === "object");
assert(typeof DeleteFirewallRuleGroupRequest$ === "object");
assert(typeof DeleteFirewallRuleGroupResponse$ === "object");
assert(typeof DeleteFirewallRuleRequest$ === "object");
assert(typeof DeleteFirewallRuleResponse$ === "object");
assert(typeof DeleteOutpostResolverRequest$ === "object");
assert(typeof DeleteOutpostResolverResponse$ === "object");
assert(typeof DeleteResolverEndpointRequest$ === "object");
assert(typeof DeleteResolverEndpointResponse$ === "object");
assert(typeof DeleteResolverQueryLogConfigRequest$ === "object");
assert(typeof DeleteResolverQueryLogConfigResponse$ === "object");
assert(typeof DeleteResolverRuleRequest$ === "object");
assert(typeof DeleteResolverRuleResponse$ === "object");
assert(typeof DisassociateFirewallRuleGroupRequest$ === "object");
assert(typeof DisassociateFirewallRuleGroupResponse$ === "object");
assert(typeof DisassociateResolverEndpointIpAddressRequest$ === "object");
assert(typeof DisassociateResolverEndpointIpAddressResponse$ === "object");
assert(typeof DisassociateResolverQueryLogConfigRequest$ === "object");
assert(typeof DisassociateResolverQueryLogConfigResponse$ === "object");
assert(typeof DisassociateResolverRuleRequest$ === "object");
assert(typeof DisassociateResolverRuleResponse$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FirewallConfig$ === "object");
assert(typeof FirewallDomainList$ === "object");
assert(typeof FirewallDomainListMetadata$ === "object");
assert(typeof FirewallRule$ === "object");
assert(typeof FirewallRuleGroup$ === "object");
assert(typeof FirewallRuleGroupAssociation$ === "object");
assert(typeof FirewallRuleGroupMetadata$ === "object");
assert(typeof GetFirewallConfigRequest$ === "object");
assert(typeof GetFirewallConfigResponse$ === "object");
assert(typeof GetFirewallDomainListRequest$ === "object");
assert(typeof GetFirewallDomainListResponse$ === "object");
assert(typeof GetFirewallRuleGroupAssociationRequest$ === "object");
assert(typeof GetFirewallRuleGroupAssociationResponse$ === "object");
assert(typeof GetFirewallRuleGroupPolicyRequest$ === "object");
assert(typeof GetFirewallRuleGroupPolicyResponse$ === "object");
assert(typeof GetFirewallRuleGroupRequest$ === "object");
assert(typeof GetFirewallRuleGroupResponse$ === "object");
assert(typeof GetOutpostResolverRequest$ === "object");
assert(typeof GetOutpostResolverResponse$ === "object");
assert(typeof GetResolverConfigRequest$ === "object");
assert(typeof GetResolverConfigResponse$ === "object");
assert(typeof GetResolverDnssecConfigRequest$ === "object");
assert(typeof GetResolverDnssecConfigResponse$ === "object");
assert(typeof GetResolverEndpointRequest$ === "object");
assert(typeof GetResolverEndpointResponse$ === "object");
assert(typeof GetResolverQueryLogConfigAssociationRequest$ === "object");
assert(typeof GetResolverQueryLogConfigAssociationResponse$ === "object");
assert(typeof GetResolverQueryLogConfigPolicyRequest$ === "object");
assert(typeof GetResolverQueryLogConfigPolicyResponse$ === "object");
assert(typeof GetResolverQueryLogConfigRequest$ === "object");
assert(typeof GetResolverQueryLogConfigResponse$ === "object");
assert(typeof GetResolverRuleAssociationRequest$ === "object");
assert(typeof GetResolverRuleAssociationResponse$ === "object");
assert(typeof GetResolverRulePolicyRequest$ === "object");
assert(typeof GetResolverRulePolicyResponse$ === "object");
assert(typeof GetResolverRuleRequest$ === "object");
assert(typeof GetResolverRuleResponse$ === "object");
assert(typeof ImportFirewallDomainsRequest$ === "object");
assert(typeof ImportFirewallDomainsResponse$ === "object");
assert(typeof IpAddressRequest$ === "object");
assert(typeof IpAddressResponse$ === "object");
assert(typeof IpAddressUpdate$ === "object");
assert(typeof ListFirewallConfigsRequest$ === "object");
assert(typeof ListFirewallConfigsResponse$ === "object");
assert(typeof ListFirewallDomainListsRequest$ === "object");
assert(typeof ListFirewallDomainListsResponse$ === "object");
assert(typeof ListFirewallDomainsRequest$ === "object");
assert(typeof ListFirewallDomainsResponse$ === "object");
assert(typeof ListFirewallRuleGroupAssociationsRequest$ === "object");
assert(typeof ListFirewallRuleGroupAssociationsResponse$ === "object");
assert(typeof ListFirewallRuleGroupsRequest$ === "object");
assert(typeof ListFirewallRuleGroupsResponse$ === "object");
assert(typeof ListFirewallRulesRequest$ === "object");
assert(typeof ListFirewallRulesResponse$ === "object");
assert(typeof ListOutpostResolversRequest$ === "object");
assert(typeof ListOutpostResolversResponse$ === "object");
assert(typeof ListResolverConfigsRequest$ === "object");
assert(typeof ListResolverConfigsResponse$ === "object");
assert(typeof ListResolverDnssecConfigsRequest$ === "object");
assert(typeof ListResolverDnssecConfigsResponse$ === "object");
assert(typeof ListResolverEndpointIpAddressesRequest$ === "object");
assert(typeof ListResolverEndpointIpAddressesResponse$ === "object");
assert(typeof ListResolverEndpointsRequest$ === "object");
assert(typeof ListResolverEndpointsResponse$ === "object");
assert(typeof ListResolverQueryLogConfigAssociationsRequest$ === "object");
assert(typeof ListResolverQueryLogConfigAssociationsResponse$ === "object");
assert(typeof ListResolverQueryLogConfigsRequest$ === "object");
assert(typeof ListResolverQueryLogConfigsResponse$ === "object");
assert(typeof ListResolverRuleAssociationsRequest$ === "object");
assert(typeof ListResolverRuleAssociationsResponse$ === "object");
assert(typeof ListResolverRulesRequest$ === "object");
assert(typeof ListResolverRulesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OutpostResolver$ === "object");
assert(typeof PutFirewallRuleGroupPolicyRequest$ === "object");
assert(typeof PutFirewallRuleGroupPolicyResponse$ === "object");
assert(typeof PutResolverQueryLogConfigPolicyRequest$ === "object");
assert(typeof PutResolverQueryLogConfigPolicyResponse$ === "object");
assert(typeof PutResolverRulePolicyRequest$ === "object");
assert(typeof PutResolverRulePolicyResponse$ === "object");
assert(typeof ResolverConfig$ === "object");
assert(typeof ResolverDnssecConfig$ === "object");
assert(typeof ResolverEndpoint$ === "object");
assert(typeof ResolverQueryLogConfig$ === "object");
assert(typeof ResolverQueryLogConfigAssociation$ === "object");
assert(typeof ResolverRule$ === "object");
assert(typeof ResolverRuleAssociation$ === "object");
assert(typeof ResolverRuleConfig$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetAddress$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateFirewallConfigRequest$ === "object");
assert(typeof UpdateFirewallConfigResponse$ === "object");
assert(typeof UpdateFirewallDomainsRequest$ === "object");
assert(typeof UpdateFirewallDomainsResponse$ === "object");
assert(typeof UpdateFirewallRuleGroupAssociationRequest$ === "object");
assert(typeof UpdateFirewallRuleGroupAssociationResponse$ === "object");
assert(typeof UpdateFirewallRuleRequest$ === "object");
assert(typeof UpdateFirewallRuleResponse$ === "object");
assert(typeof UpdateIpAddress$ === "object");
assert(typeof UpdateOutpostResolverRequest$ === "object");
assert(typeof UpdateOutpostResolverResponse$ === "object");
assert(typeof UpdateResolverConfigRequest$ === "object");
assert(typeof UpdateResolverConfigResponse$ === "object");
assert(typeof UpdateResolverDnssecConfigRequest$ === "object");
assert(typeof UpdateResolverDnssecConfigResponse$ === "object");
assert(typeof UpdateResolverEndpointRequest$ === "object");
assert(typeof UpdateResolverEndpointResponse$ === "object");
assert(typeof UpdateResolverRuleRequest$ === "object");
assert(typeof UpdateResolverRuleResponse$ === "object");
// enums
assert(typeof Action === "object");
assert(typeof AutodefinedReverseFlag === "object");
assert(typeof BlockOverrideDnsType === "object");
assert(typeof BlockResponse === "object");
assert(typeof ConfidenceThreshold === "object");
assert(typeof DnsThreatProtection === "object");
assert(typeof FirewallDomainImportOperation === "object");
assert(typeof FirewallDomainListStatus === "object");
assert(typeof FirewallDomainRedirectionAction === "object");
assert(typeof FirewallDomainUpdateOperation === "object");
assert(typeof FirewallFailOpenStatus === "object");
assert(typeof FirewallRuleGroupAssociationStatus === "object");
assert(typeof FirewallRuleGroupStatus === "object");
assert(typeof IpAddressStatus === "object");
assert(typeof MutationProtectionStatus === "object");
assert(typeof OutpostResolverStatus === "object");
assert(typeof Protocol === "object");
assert(typeof ResolverAutodefinedReverseStatus === "object");
assert(typeof ResolverDNSSECValidationStatus === "object");
assert(typeof ResolverEndpointDirection === "object");
assert(typeof ResolverEndpointStatus === "object");
assert(typeof ResolverEndpointType === "object");
assert(typeof ResolverQueryLogConfigAssociationError === "object");
assert(typeof ResolverQueryLogConfigAssociationStatus === "object");
assert(typeof ResolverQueryLogConfigStatus === "object");
assert(typeof ResolverRuleAssociationStatus === "object");
assert(typeof ResolverRuleStatus === "object");
assert(typeof RuleTypeOption === "object");
assert(typeof ShareStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof Validation === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53ResolverServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Route53ResolverServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceErrorException.prototype instanceof Route53ResolverServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidNextTokenException.prototype instanceof Route53ResolverServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof Route53ResolverServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidPolicyDocument.prototype instanceof Route53ResolverServiceException);
assert(typeof InvalidPolicyDocument$ === "object");
assert(InvalidRequestException.prototype instanceof Route53ResolverServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidTagException.prototype instanceof Route53ResolverServiceException);
assert(typeof InvalidTagException$ === "object");
assert(LimitExceededException.prototype instanceof Route53ResolverServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceExistsException.prototype instanceof Route53ResolverServiceException);
assert(typeof ResourceExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof Route53ResolverServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Route53ResolverServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof Route53ResolverServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof Route53ResolverServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof Route53ResolverServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnknownResourceException.prototype instanceof Route53ResolverServiceException);
assert(typeof UnknownResourceException$ === "object");
assert(ValidationException.prototype instanceof Route53ResolverServiceException);
assert(typeof ValidationException$ === "object");
assert(Route53ResolverServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListFirewallConfigs === "function");
assert(typeof paginateListFirewallDomainLists === "function");
assert(typeof paginateListFirewallDomains === "function");
assert(typeof paginateListFirewallRuleGroupAssociations === "function");
assert(typeof paginateListFirewallRuleGroups === "function");
assert(typeof paginateListFirewallRules === "function");
assert(typeof paginateListOutpostResolvers === "function");
assert(typeof paginateListResolverConfigs === "function");
assert(typeof paginateListResolverDnssecConfigs === "function");
assert(typeof paginateListResolverEndpointIpAddresses === "function");
assert(typeof paginateListResolverEndpoints === "function");
assert(typeof paginateListResolverQueryLogConfigAssociations === "function");
assert(typeof paginateListResolverQueryLogConfigs === "function");
assert(typeof paginateListResolverRuleAssociations === "function");
assert(typeof paginateListResolverRules === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`Route53Resolver index test passed.`);
