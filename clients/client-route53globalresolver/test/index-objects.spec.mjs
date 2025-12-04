import {
  AssociateHostedZoneCommand,
  BatchCreateFirewallRuleCommand,
  BatchDeleteFirewallRuleCommand,
  BatchUpdateFirewallRuleCommand,
  BlockOverrideDnsQueryType,
  CRResourceStatus,
  ConfidenceThreshold,
  CreateAccessSourceCommand,
  CreateAccessTokenCommand,
  CreateDNSViewCommand,
  CreateFirewallDomainListCommand,
  CreateFirewallRuleCommand,
  CreateGlobalResolverCommand,
  DeleteAccessSourceCommand,
  DeleteAccessTokenCommand,
  DeleteDNSViewCommand,
  DeleteFirewallDomainListCommand,
  DeleteFirewallRuleCommand,
  DeleteGlobalResolverCommand,
  DisableDNSViewCommand,
  DisassociateHostedZoneCommand,
  DnsAdvancedProtection,
  DnsProtocol,
  DnsSecValidationType,
  EdnsClientSubnetType,
  EnableDNSViewCommand,
  FirewallBlockResponse,
  FirewallRuleAction,
  FirewallRulesFailOpenType,
  GetAccessSourceCommand,
  GetAccessTokenCommand,
  GetDNSViewCommand,
  GetFirewallDomainListCommand,
  GetFirewallRuleCommand,
  GetGlobalResolverCommand,
  GetHostedZoneAssociationCommand,
  GetManagedFirewallDomainListCommand,
  HostedZoneAssociationStatus,
  ImportFirewallDomainsCommand,
  IpAddressType,
  ListAccessSourcesCommand,
  ListAccessTokensCommand,
  ListDNSViewsCommand,
  ListFirewallDomainListsCommand,
  ListFirewallDomainsCommand,
  ListFirewallRulesCommand,
  ListGlobalResolversCommand,
  ListHostedZoneAssociationsCommand,
  ListManagedFirewallDomainListsCommand,
  ListTagsForResourceCommand,
  ProfileResourceStatus,
  Route53GlobalResolver,
  Route53GlobalResolverClient,
  Route53GlobalResolverServiceException,
  TagResourceCommand,
  TokenStatus,
  UntagResourceCommand,
  UpdateAccessSourceCommand,
  UpdateAccessTokenCommand,
  UpdateDNSViewCommand,
  UpdateFirewallDomainsCommand,
  UpdateFirewallRuleCommand,
  UpdateGlobalResolverCommand,
  UpdateHostedZoneAssociationCommand,
  paginateListAccessSources,
  paginateListAccessTokens,
  paginateListDNSViews,
  paginateListFirewallDomainLists,
  paginateListFirewallDomains,
  paginateListFirewallRules,
  paginateListGlobalResolvers,
  paginateListHostedZoneAssociations,
  paginateListManagedFirewallDomainLists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53GlobalResolverClient === "function")
assert(typeof Route53GlobalResolver === "function")
// commands
assert(typeof AssociateHostedZoneCommand === "function")
assert(typeof BatchCreateFirewallRuleCommand === "function")
assert(typeof BatchDeleteFirewallRuleCommand === "function")
assert(typeof BatchUpdateFirewallRuleCommand === "function")
assert(typeof CreateAccessSourceCommand === "function")
assert(typeof CreateAccessTokenCommand === "function")
assert(typeof CreateDNSViewCommand === "function")
assert(typeof CreateFirewallDomainListCommand === "function")
assert(typeof CreateFirewallRuleCommand === "function")
assert(typeof CreateGlobalResolverCommand === "function")
assert(typeof DeleteAccessSourceCommand === "function")
assert(typeof DeleteAccessTokenCommand === "function")
assert(typeof DeleteDNSViewCommand === "function")
assert(typeof DeleteFirewallDomainListCommand === "function")
assert(typeof DeleteFirewallRuleCommand === "function")
assert(typeof DeleteGlobalResolverCommand === "function")
assert(typeof DisableDNSViewCommand === "function")
assert(typeof DisassociateHostedZoneCommand === "function")
assert(typeof EnableDNSViewCommand === "function")
assert(typeof GetAccessSourceCommand === "function")
assert(typeof GetAccessTokenCommand === "function")
assert(typeof GetDNSViewCommand === "function")
assert(typeof GetFirewallDomainListCommand === "function")
assert(typeof GetFirewallRuleCommand === "function")
assert(typeof GetGlobalResolverCommand === "function")
assert(typeof GetHostedZoneAssociationCommand === "function")
assert(typeof GetManagedFirewallDomainListCommand === "function")
assert(typeof ImportFirewallDomainsCommand === "function")
assert(typeof ListAccessSourcesCommand === "function")
assert(typeof ListAccessTokensCommand === "function")
assert(typeof ListDNSViewsCommand === "function")
assert(typeof ListFirewallDomainListsCommand === "function")
assert(typeof ListFirewallDomainsCommand === "function")
assert(typeof ListFirewallRulesCommand === "function")
assert(typeof ListGlobalResolversCommand === "function")
assert(typeof ListHostedZoneAssociationsCommand === "function")
assert(typeof ListManagedFirewallDomainListsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAccessSourceCommand === "function")
assert(typeof UpdateAccessTokenCommand === "function")
assert(typeof UpdateDNSViewCommand === "function")
assert(typeof UpdateFirewallDomainsCommand === "function")
assert(typeof UpdateFirewallRuleCommand === "function")
assert(typeof UpdateGlobalResolverCommand === "function")
assert(typeof UpdateHostedZoneAssociationCommand === "function")
// enums
assert(typeof BlockOverrideDnsQueryType === "object");
assert(typeof ConfidenceThreshold === "object");
assert(typeof CRResourceStatus === "object");
assert(typeof DnsAdvancedProtection === "object");
assert(typeof DnsProtocol === "object");
assert(typeof DnsSecValidationType === "object");
assert(typeof EdnsClientSubnetType === "object");
assert(typeof FirewallBlockResponse === "object");
assert(typeof FirewallRuleAction === "object");
assert(typeof FirewallRulesFailOpenType === "object");
assert(typeof HostedZoneAssociationStatus === "object");
assert(typeof IpAddressType === "object");
assert(typeof ProfileResourceStatus === "object");
assert(typeof TokenStatus === "object");
// errors
assert(Route53GlobalResolverServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAccessSources === "function")
assert(typeof paginateListAccessTokens === "function")
assert(typeof paginateListDNSViews === "function")
assert(typeof paginateListFirewallDomainLists === "function")
assert(typeof paginateListFirewallDomains === "function")
assert(typeof paginateListFirewallRules === "function")
assert(typeof paginateListGlobalResolvers === "function")
assert(typeof paginateListHostedZoneAssociations === "function")
assert(typeof paginateListManagedFirewallDomainLists === "function")
console.log(`Route53GlobalResolver index test passed.`);
