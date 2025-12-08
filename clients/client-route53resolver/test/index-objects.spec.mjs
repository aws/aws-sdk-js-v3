import {
  AccessDeniedException,
  Action,
  AssociateFirewallRuleGroupCommand,
  AssociateResolverEndpointIpAddressCommand,
  AssociateResolverQueryLogConfigCommand,
  AssociateResolverRuleCommand,
  AutodefinedReverseFlag,
  BlockOverrideDnsType,
  BlockResponse,
  ConfidenceThreshold,
  ConflictException,
  CreateFirewallDomainListCommand,
  CreateFirewallRuleCommand,
  CreateFirewallRuleGroupCommand,
  CreateOutpostResolverCommand,
  CreateResolverEndpointCommand,
  CreateResolverQueryLogConfigCommand,
  CreateResolverRuleCommand,
  DeleteFirewallDomainListCommand,
  DeleteFirewallRuleCommand,
  DeleteFirewallRuleGroupCommand,
  DeleteOutpostResolverCommand,
  DeleteResolverEndpointCommand,
  DeleteResolverQueryLogConfigCommand,
  DeleteResolverRuleCommand,
  DisassociateFirewallRuleGroupCommand,
  DisassociateResolverEndpointIpAddressCommand,
  DisassociateResolverQueryLogConfigCommand,
  DisassociateResolverRuleCommand,
  DnsThreatProtection,
  FirewallDomainImportOperation,
  FirewallDomainListStatus,
  FirewallDomainRedirectionAction,
  FirewallDomainUpdateOperation,
  FirewallFailOpenStatus,
  FirewallRuleGroupAssociationStatus,
  FirewallRuleGroupStatus,
  GetFirewallConfigCommand,
  GetFirewallDomainListCommand,
  GetFirewallRuleGroupAssociationCommand,
  GetFirewallRuleGroupCommand,
  GetFirewallRuleGroupPolicyCommand,
  GetOutpostResolverCommand,
  GetResolverConfigCommand,
  GetResolverDnssecConfigCommand,
  GetResolverEndpointCommand,
  GetResolverQueryLogConfigAssociationCommand,
  GetResolverQueryLogConfigCommand,
  GetResolverQueryLogConfigPolicyCommand,
  GetResolverRuleAssociationCommand,
  GetResolverRuleCommand,
  GetResolverRulePolicyCommand,
  ImportFirewallDomainsCommand,
  InternalServiceErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidPolicyDocument,
  InvalidRequestException,
  InvalidTagException,
  IpAddressStatus,
  LimitExceededException,
  ListFirewallConfigsCommand,
  ListFirewallDomainListsCommand,
  ListFirewallDomainsCommand,
  ListFirewallRuleGroupAssociationsCommand,
  ListFirewallRuleGroupsCommand,
  ListFirewallRulesCommand,
  ListOutpostResolversCommand,
  ListResolverConfigsCommand,
  ListResolverDnssecConfigsCommand,
  ListResolverEndpointIpAddressesCommand,
  ListResolverEndpointsCommand,
  ListResolverQueryLogConfigAssociationsCommand,
  ListResolverQueryLogConfigsCommand,
  ListResolverRuleAssociationsCommand,
  ListResolverRulesCommand,
  ListTagsForResourceCommand,
  MutationProtectionStatus,
  OutpostResolverStatus,
  Protocol,
  PutFirewallRuleGroupPolicyCommand,
  PutResolverQueryLogConfigPolicyCommand,
  PutResolverRulePolicyCommand,
  ResolverAutodefinedReverseStatus,
  ResolverDNSSECValidationStatus,
  ResolverEndpointDirection,
  ResolverEndpointStatus,
  ResolverEndpointType,
  ResolverQueryLogConfigAssociationError,
  ResolverQueryLogConfigAssociationStatus,
  ResolverQueryLogConfigStatus,
  ResolverRuleAssociationStatus,
  ResolverRuleStatus,
  ResourceExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  Route53Resolver,
  Route53ResolverClient,
  Route53ResolverServiceException,
  RuleTypeOption,
  ServiceQuotaExceededException,
  ShareStatus,
  SortOrder,
  TagResourceCommand,
  ThrottlingException,
  UnknownResourceException,
  UntagResourceCommand,
  UpdateFirewallConfigCommand,
  UpdateFirewallDomainsCommand,
  UpdateFirewallRuleCommand,
  UpdateFirewallRuleGroupAssociationCommand,
  UpdateOutpostResolverCommand,
  UpdateResolverConfigCommand,
  UpdateResolverDnssecConfigCommand,
  UpdateResolverEndpointCommand,
  UpdateResolverRuleCommand,
  Validation,
  ValidationException,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53ResolverClient === "function");
assert(typeof Route53Resolver === "function");
// commands
assert(typeof AssociateFirewallRuleGroupCommand === "function");
assert(typeof AssociateResolverEndpointIpAddressCommand === "function");
assert(typeof AssociateResolverQueryLogConfigCommand === "function");
assert(typeof AssociateResolverRuleCommand === "function");
assert(typeof CreateFirewallDomainListCommand === "function");
assert(typeof CreateFirewallRuleCommand === "function");
assert(typeof CreateFirewallRuleGroupCommand === "function");
assert(typeof CreateOutpostResolverCommand === "function");
assert(typeof CreateResolverEndpointCommand === "function");
assert(typeof CreateResolverQueryLogConfigCommand === "function");
assert(typeof CreateResolverRuleCommand === "function");
assert(typeof DeleteFirewallDomainListCommand === "function");
assert(typeof DeleteFirewallRuleCommand === "function");
assert(typeof DeleteFirewallRuleGroupCommand === "function");
assert(typeof DeleteOutpostResolverCommand === "function");
assert(typeof DeleteResolverEndpointCommand === "function");
assert(typeof DeleteResolverQueryLogConfigCommand === "function");
assert(typeof DeleteResolverRuleCommand === "function");
assert(typeof DisassociateFirewallRuleGroupCommand === "function");
assert(typeof DisassociateResolverEndpointIpAddressCommand === "function");
assert(typeof DisassociateResolverQueryLogConfigCommand === "function");
assert(typeof DisassociateResolverRuleCommand === "function");
assert(typeof GetFirewallConfigCommand === "function");
assert(typeof GetFirewallDomainListCommand === "function");
assert(typeof GetFirewallRuleGroupCommand === "function");
assert(typeof GetFirewallRuleGroupAssociationCommand === "function");
assert(typeof GetFirewallRuleGroupPolicyCommand === "function");
assert(typeof GetOutpostResolverCommand === "function");
assert(typeof GetResolverConfigCommand === "function");
assert(typeof GetResolverDnssecConfigCommand === "function");
assert(typeof GetResolverEndpointCommand === "function");
assert(typeof GetResolverQueryLogConfigCommand === "function");
assert(typeof GetResolverQueryLogConfigAssociationCommand === "function");
assert(typeof GetResolverQueryLogConfigPolicyCommand === "function");
assert(typeof GetResolverRuleCommand === "function");
assert(typeof GetResolverRuleAssociationCommand === "function");
assert(typeof GetResolverRulePolicyCommand === "function");
assert(typeof ImportFirewallDomainsCommand === "function");
assert(typeof ListFirewallConfigsCommand === "function");
assert(typeof ListFirewallDomainListsCommand === "function");
assert(typeof ListFirewallDomainsCommand === "function");
assert(typeof ListFirewallRuleGroupAssociationsCommand === "function");
assert(typeof ListFirewallRuleGroupsCommand === "function");
assert(typeof ListFirewallRulesCommand === "function");
assert(typeof ListOutpostResolversCommand === "function");
assert(typeof ListResolverConfigsCommand === "function");
assert(typeof ListResolverDnssecConfigsCommand === "function");
assert(typeof ListResolverEndpointIpAddressesCommand === "function");
assert(typeof ListResolverEndpointsCommand === "function");
assert(typeof ListResolverQueryLogConfigAssociationsCommand === "function");
assert(typeof ListResolverQueryLogConfigsCommand === "function");
assert(typeof ListResolverRuleAssociationsCommand === "function");
assert(typeof ListResolverRulesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutFirewallRuleGroupPolicyCommand === "function");
assert(typeof PutResolverQueryLogConfigPolicyCommand === "function");
assert(typeof PutResolverRulePolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateFirewallConfigCommand === "function");
assert(typeof UpdateFirewallDomainsCommand === "function");
assert(typeof UpdateFirewallRuleCommand === "function");
assert(typeof UpdateFirewallRuleGroupAssociationCommand === "function");
assert(typeof UpdateOutpostResolverCommand === "function");
assert(typeof UpdateResolverConfigCommand === "function");
assert(typeof UpdateResolverDnssecConfigCommand === "function");
assert(typeof UpdateResolverEndpointCommand === "function");
assert(typeof UpdateResolverRuleCommand === "function");
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
assert(ConflictException.prototype instanceof Route53ResolverServiceException);
assert(InternalServiceErrorException.prototype instanceof Route53ResolverServiceException);
assert(InvalidNextTokenException.prototype instanceof Route53ResolverServiceException);
assert(InvalidParameterException.prototype instanceof Route53ResolverServiceException);
assert(InvalidPolicyDocument.prototype instanceof Route53ResolverServiceException);
assert(InvalidRequestException.prototype instanceof Route53ResolverServiceException);
assert(InvalidTagException.prototype instanceof Route53ResolverServiceException);
assert(LimitExceededException.prototype instanceof Route53ResolverServiceException);
assert(ResourceExistsException.prototype instanceof Route53ResolverServiceException);
assert(ResourceInUseException.prototype instanceof Route53ResolverServiceException);
assert(ResourceNotFoundException.prototype instanceof Route53ResolverServiceException);
assert(ResourceUnavailableException.prototype instanceof Route53ResolverServiceException);
assert(ServiceQuotaExceededException.prototype instanceof Route53ResolverServiceException);
assert(ThrottlingException.prototype instanceof Route53ResolverServiceException);
assert(UnknownResourceException.prototype instanceof Route53ResolverServiceException);
assert(ValidationException.prototype instanceof Route53ResolverServiceException);
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
