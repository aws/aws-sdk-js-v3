import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessSourcesItem$,
  AccessTokenItem$,
  AssociateHostedZone$,
  AssociateHostedZoneCommand,
  AssociateHostedZoneInput$,
  AssociateHostedZoneOutput$,
  BatchCreateFirewallRule$,
  BatchCreateFirewallRuleCommand,
  BatchCreateFirewallRuleInput$,
  BatchCreateFirewallRuleInputItem$,
  BatchCreateFirewallRuleOutput$,
  BatchCreateFirewallRuleOutputItem$,
  BatchCreateFirewallRuleResult$,
  BatchDeleteFirewallRule$,
  BatchDeleteFirewallRuleCommand,
  BatchDeleteFirewallRuleInput$,
  BatchDeleteFirewallRuleInputItem$,
  BatchDeleteFirewallRuleOutput$,
  BatchDeleteFirewallRuleOutputItem$,
  BatchDeleteFirewallRuleResult$,
  BatchUpdateFirewallRule$,
  BatchUpdateFirewallRuleCommand,
  BatchUpdateFirewallRuleInput$,
  BatchUpdateFirewallRuleInputItem$,
  BatchUpdateFirewallRuleOutput$,
  BatchUpdateFirewallRuleOutputItem$,
  BatchUpdateFirewallRuleResult$,
  BlockOverrideDnsQueryType,
  ConfidenceThreshold,
  ConflictException,
  ConflictException$,
  CreateAccessSource$,
  CreateAccessSourceCommand,
  CreateAccessSourceInput$,
  CreateAccessSourceOutput$,
  CreateAccessToken$,
  CreateAccessTokenCommand,
  CreateAccessTokenInput$,
  CreateAccessTokenOutput$,
  CreateDNSView$,
  CreateDNSViewCommand,
  CreateDNSViewInput$,
  CreateDNSViewOutput$,
  CreateFirewallDomainList$,
  CreateFirewallDomainListCommand,
  CreateFirewallDomainListInput$,
  CreateFirewallDomainListOutput$,
  CreateFirewallRule$,
  CreateFirewallRuleCommand,
  CreateFirewallRuleInput$,
  CreateFirewallRuleOutput$,
  CreateGlobalResolver$,
  CreateGlobalResolverCommand,
  CreateGlobalResolverInput$,
  CreateGlobalResolverOutput$,
  CRResourceStatus,
  DeleteAccessSource$,
  DeleteAccessSourceCommand,
  DeleteAccessSourceInput$,
  DeleteAccessSourceOutput$,
  DeleteAccessToken$,
  DeleteAccessTokenCommand,
  DeleteAccessTokenInput$,
  DeleteAccessTokenOutput$,
  DeleteDNSView$,
  DeleteDNSViewCommand,
  DeleteDNSViewInput$,
  DeleteDNSViewOutput$,
  DeleteFirewallDomainList$,
  DeleteFirewallDomainListCommand,
  DeleteFirewallDomainListInput$,
  DeleteFirewallDomainListOutput$,
  DeleteFirewallRule$,
  DeleteFirewallRuleCommand,
  DeleteFirewallRuleInput$,
  DeleteFirewallRuleOutput$,
  DeleteGlobalResolver$,
  DeleteGlobalResolverCommand,
  DeleteGlobalResolverInput$,
  DeleteGlobalResolverOutput$,
  DisableDNSView$,
  DisableDNSViewCommand,
  DisableDNSViewInput$,
  DisableDNSViewOutput$,
  DisassociateHostedZone$,
  DisassociateHostedZoneCommand,
  DisassociateHostedZoneInput$,
  DisassociateHostedZoneOutput$,
  DnsAdvancedProtection,
  DnsProtocol,
  DnsSecValidationType,
  DNSViewSummary$,
  EdnsClientSubnetType,
  EnableDNSView$,
  EnableDNSViewCommand,
  EnableDNSViewInput$,
  EnableDNSViewOutput$,
  FirewallBlockResponse,
  FirewallDomainListsItem$,
  FirewallRuleAction,
  FirewallRulesFailOpenType,
  FirewallRulesItem$,
  GetAccessSource$,
  GetAccessSourceCommand,
  GetAccessSourceInput$,
  GetAccessSourceOutput$,
  GetAccessToken$,
  GetAccessTokenCommand,
  GetAccessTokenInput$,
  GetAccessTokenOutput$,
  GetDNSView$,
  GetDNSViewCommand,
  GetDNSViewInput$,
  GetDNSViewOutput$,
  GetFirewallDomainList$,
  GetFirewallDomainListCommand,
  GetFirewallDomainListInput$,
  GetFirewallDomainListOutput$,
  GetFirewallRule$,
  GetFirewallRuleCommand,
  GetFirewallRuleInput$,
  GetFirewallRuleOutput$,
  GetGlobalResolver$,
  GetGlobalResolverCommand,
  GetGlobalResolverInput$,
  GetGlobalResolverOutput$,
  GetHostedZoneAssociation$,
  GetHostedZoneAssociationCommand,
  GetHostedZoneAssociationInput$,
  GetHostedZoneAssociationOutput$,
  GetManagedFirewallDomainList$,
  GetManagedFirewallDomainListCommand,
  GetManagedFirewallDomainListInput$,
  GetManagedFirewallDomainListOutput$,
  GlobalResolversItem$,
  HostedZoneAssociationStatus,
  HostedZoneAssociationSummary$,
  ImportFirewallDomains$,
  ImportFirewallDomainsCommand,
  ImportFirewallDomainsInput$,
  ImportFirewallDomainsOutput$,
  InternalServerException,
  InternalServerException$,
  IpAddressType,
  ListAccessSources$,
  ListAccessSourcesCommand,
  ListAccessSourcesInput$,
  ListAccessSourcesOutput$,
  ListAccessTokens$,
  ListAccessTokensCommand,
  ListAccessTokensInput$,
  ListAccessTokensOutput$,
  ListDNSViews$,
  ListDNSViewsCommand,
  ListDNSViewsInput$,
  ListDNSViewsOutput$,
  ListFirewallDomainLists$,
  ListFirewallDomainListsCommand,
  ListFirewallDomainListsInput$,
  ListFirewallDomainListsOutput$,
  ListFirewallDomains$,
  ListFirewallDomainsCommand,
  ListFirewallDomainsInput$,
  ListFirewallDomainsOutput$,
  ListFirewallRules$,
  ListFirewallRulesCommand,
  ListFirewallRulesInput$,
  ListFirewallRulesOutput$,
  ListGlobalResolvers$,
  ListGlobalResolversCommand,
  ListGlobalResolversInput$,
  ListGlobalResolversOutput$,
  ListHostedZoneAssociations$,
  ListHostedZoneAssociationsCommand,
  ListHostedZoneAssociationsInput$,
  ListHostedZoneAssociationsOutput$,
  ListManagedFirewallDomainLists$,
  ListManagedFirewallDomainListsCommand,
  ListManagedFirewallDomainListsInput$,
  ListManagedFirewallDomainListsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManagedFirewallDomainListsItem$,
  paginateListAccessSources,
  paginateListAccessTokens,
  paginateListDNSViews,
  paginateListFirewallDomainLists,
  paginateListFirewallDomains,
  paginateListFirewallRules,
  paginateListGlobalResolvers,
  paginateListHostedZoneAssociations,
  paginateListManagedFirewallDomainLists,
  ProfileResourceStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Route53GlobalResolver,
  Route53GlobalResolverClient,
  Route53GlobalResolverServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TokenStatus,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccessSource$,
  UpdateAccessSourceCommand,
  UpdateAccessSourceInput$,
  UpdateAccessSourceOutput$,
  UpdateAccessToken$,
  UpdateAccessTokenCommand,
  UpdateAccessTokenInput$,
  UpdateAccessTokenOutput$,
  UpdateDNSView$,
  UpdateDNSViewCommand,
  UpdateDNSViewInput$,
  UpdateDNSViewOutput$,
  UpdateFirewallDomains$,
  UpdateFirewallDomainsCommand,
  UpdateFirewallDomainsInput$,
  UpdateFirewallDomainsOutput$,
  UpdateFirewallRule$,
  UpdateFirewallRuleCommand,
  UpdateFirewallRuleInput$,
  UpdateFirewallRuleOutput$,
  UpdateGlobalResolver$,
  UpdateGlobalResolverCommand,
  UpdateGlobalResolverInput$,
  UpdateGlobalResolverOutput$,
  UpdateHostedZoneAssociation$,
  UpdateHostedZoneAssociationCommand,
  UpdateHostedZoneAssociationInput$,
  UpdateHostedZoneAssociationOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53GlobalResolverClient === "function");
assert(typeof Route53GlobalResolver === "function");
// commands
assert(typeof AssociateHostedZoneCommand === "function");
assert(typeof AssociateHostedZone$ === "object");
assert(typeof BatchCreateFirewallRuleCommand === "function");
assert(typeof BatchCreateFirewallRule$ === "object");
assert(typeof BatchDeleteFirewallRuleCommand === "function");
assert(typeof BatchDeleteFirewallRule$ === "object");
assert(typeof BatchUpdateFirewallRuleCommand === "function");
assert(typeof BatchUpdateFirewallRule$ === "object");
assert(typeof CreateAccessSourceCommand === "function");
assert(typeof CreateAccessSource$ === "object");
assert(typeof CreateAccessTokenCommand === "function");
assert(typeof CreateAccessToken$ === "object");
assert(typeof CreateDNSViewCommand === "function");
assert(typeof CreateDNSView$ === "object");
assert(typeof CreateFirewallDomainListCommand === "function");
assert(typeof CreateFirewallDomainList$ === "object");
assert(typeof CreateFirewallRuleCommand === "function");
assert(typeof CreateFirewallRule$ === "object");
assert(typeof CreateGlobalResolverCommand === "function");
assert(typeof CreateGlobalResolver$ === "object");
assert(typeof DeleteAccessSourceCommand === "function");
assert(typeof DeleteAccessSource$ === "object");
assert(typeof DeleteAccessTokenCommand === "function");
assert(typeof DeleteAccessToken$ === "object");
assert(typeof DeleteDNSViewCommand === "function");
assert(typeof DeleteDNSView$ === "object");
assert(typeof DeleteFirewallDomainListCommand === "function");
assert(typeof DeleteFirewallDomainList$ === "object");
assert(typeof DeleteFirewallRuleCommand === "function");
assert(typeof DeleteFirewallRule$ === "object");
assert(typeof DeleteGlobalResolverCommand === "function");
assert(typeof DeleteGlobalResolver$ === "object");
assert(typeof DisableDNSViewCommand === "function");
assert(typeof DisableDNSView$ === "object");
assert(typeof DisassociateHostedZoneCommand === "function");
assert(typeof DisassociateHostedZone$ === "object");
assert(typeof EnableDNSViewCommand === "function");
assert(typeof EnableDNSView$ === "object");
assert(typeof GetAccessSourceCommand === "function");
assert(typeof GetAccessSource$ === "object");
assert(typeof GetAccessTokenCommand === "function");
assert(typeof GetAccessToken$ === "object");
assert(typeof GetDNSViewCommand === "function");
assert(typeof GetDNSView$ === "object");
assert(typeof GetFirewallDomainListCommand === "function");
assert(typeof GetFirewallDomainList$ === "object");
assert(typeof GetFirewallRuleCommand === "function");
assert(typeof GetFirewallRule$ === "object");
assert(typeof GetGlobalResolverCommand === "function");
assert(typeof GetGlobalResolver$ === "object");
assert(typeof GetHostedZoneAssociationCommand === "function");
assert(typeof GetHostedZoneAssociation$ === "object");
assert(typeof GetManagedFirewallDomainListCommand === "function");
assert(typeof GetManagedFirewallDomainList$ === "object");
assert(typeof ImportFirewallDomainsCommand === "function");
assert(typeof ImportFirewallDomains$ === "object");
assert(typeof ListAccessSourcesCommand === "function");
assert(typeof ListAccessSources$ === "object");
assert(typeof ListAccessTokensCommand === "function");
assert(typeof ListAccessTokens$ === "object");
assert(typeof ListDNSViewsCommand === "function");
assert(typeof ListDNSViews$ === "object");
assert(typeof ListFirewallDomainListsCommand === "function");
assert(typeof ListFirewallDomainLists$ === "object");
assert(typeof ListFirewallDomainsCommand === "function");
assert(typeof ListFirewallDomains$ === "object");
assert(typeof ListFirewallRulesCommand === "function");
assert(typeof ListFirewallRules$ === "object");
assert(typeof ListGlobalResolversCommand === "function");
assert(typeof ListGlobalResolvers$ === "object");
assert(typeof ListHostedZoneAssociationsCommand === "function");
assert(typeof ListHostedZoneAssociations$ === "object");
assert(typeof ListManagedFirewallDomainListsCommand === "function");
assert(typeof ListManagedFirewallDomainLists$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessSourceCommand === "function");
assert(typeof UpdateAccessSource$ === "object");
assert(typeof UpdateAccessTokenCommand === "function");
assert(typeof UpdateAccessToken$ === "object");
assert(typeof UpdateDNSViewCommand === "function");
assert(typeof UpdateDNSView$ === "object");
assert(typeof UpdateFirewallDomainsCommand === "function");
assert(typeof UpdateFirewallDomains$ === "object");
assert(typeof UpdateFirewallRuleCommand === "function");
assert(typeof UpdateFirewallRule$ === "object");
assert(typeof UpdateGlobalResolverCommand === "function");
assert(typeof UpdateGlobalResolver$ === "object");
assert(typeof UpdateHostedZoneAssociationCommand === "function");
assert(typeof UpdateHostedZoneAssociation$ === "object");
// structural schemas
assert(typeof AccessSourcesItem$ === "object");
assert(typeof AccessTokenItem$ === "object");
assert(typeof AssociateHostedZoneInput$ === "object");
assert(typeof AssociateHostedZoneOutput$ === "object");
assert(typeof BatchCreateFirewallRuleInput$ === "object");
assert(typeof BatchCreateFirewallRuleInputItem$ === "object");
assert(typeof BatchCreateFirewallRuleOutput$ === "object");
assert(typeof BatchCreateFirewallRuleOutputItem$ === "object");
assert(typeof BatchCreateFirewallRuleResult$ === "object");
assert(typeof BatchDeleteFirewallRuleInput$ === "object");
assert(typeof BatchDeleteFirewallRuleInputItem$ === "object");
assert(typeof BatchDeleteFirewallRuleOutput$ === "object");
assert(typeof BatchDeleteFirewallRuleOutputItem$ === "object");
assert(typeof BatchDeleteFirewallRuleResult$ === "object");
assert(typeof BatchUpdateFirewallRuleInput$ === "object");
assert(typeof BatchUpdateFirewallRuleInputItem$ === "object");
assert(typeof BatchUpdateFirewallRuleOutput$ === "object");
assert(typeof BatchUpdateFirewallRuleOutputItem$ === "object");
assert(typeof BatchUpdateFirewallRuleResult$ === "object");
assert(typeof CreateAccessSourceInput$ === "object");
assert(typeof CreateAccessSourceOutput$ === "object");
assert(typeof CreateAccessTokenInput$ === "object");
assert(typeof CreateAccessTokenOutput$ === "object");
assert(typeof CreateDNSViewInput$ === "object");
assert(typeof CreateDNSViewOutput$ === "object");
assert(typeof CreateFirewallDomainListInput$ === "object");
assert(typeof CreateFirewallDomainListOutput$ === "object");
assert(typeof CreateFirewallRuleInput$ === "object");
assert(typeof CreateFirewallRuleOutput$ === "object");
assert(typeof CreateGlobalResolverInput$ === "object");
assert(typeof CreateGlobalResolverOutput$ === "object");
assert(typeof DeleteAccessSourceInput$ === "object");
assert(typeof DeleteAccessSourceOutput$ === "object");
assert(typeof DeleteAccessTokenInput$ === "object");
assert(typeof DeleteAccessTokenOutput$ === "object");
assert(typeof DeleteDNSViewInput$ === "object");
assert(typeof DeleteDNSViewOutput$ === "object");
assert(typeof DeleteFirewallDomainListInput$ === "object");
assert(typeof DeleteFirewallDomainListOutput$ === "object");
assert(typeof DeleteFirewallRuleInput$ === "object");
assert(typeof DeleteFirewallRuleOutput$ === "object");
assert(typeof DeleteGlobalResolverInput$ === "object");
assert(typeof DeleteGlobalResolverOutput$ === "object");
assert(typeof DisableDNSViewInput$ === "object");
assert(typeof DisableDNSViewOutput$ === "object");
assert(typeof DisassociateHostedZoneInput$ === "object");
assert(typeof DisassociateHostedZoneOutput$ === "object");
assert(typeof DNSViewSummary$ === "object");
assert(typeof EnableDNSViewInput$ === "object");
assert(typeof EnableDNSViewOutput$ === "object");
assert(typeof FirewallDomainListsItem$ === "object");
assert(typeof FirewallRulesItem$ === "object");
assert(typeof GetAccessSourceInput$ === "object");
assert(typeof GetAccessSourceOutput$ === "object");
assert(typeof GetAccessTokenInput$ === "object");
assert(typeof GetAccessTokenOutput$ === "object");
assert(typeof GetDNSViewInput$ === "object");
assert(typeof GetDNSViewOutput$ === "object");
assert(typeof GetFirewallDomainListInput$ === "object");
assert(typeof GetFirewallDomainListOutput$ === "object");
assert(typeof GetFirewallRuleInput$ === "object");
assert(typeof GetFirewallRuleOutput$ === "object");
assert(typeof GetGlobalResolverInput$ === "object");
assert(typeof GetGlobalResolverOutput$ === "object");
assert(typeof GetHostedZoneAssociationInput$ === "object");
assert(typeof GetHostedZoneAssociationOutput$ === "object");
assert(typeof GetManagedFirewallDomainListInput$ === "object");
assert(typeof GetManagedFirewallDomainListOutput$ === "object");
assert(typeof GlobalResolversItem$ === "object");
assert(typeof HostedZoneAssociationSummary$ === "object");
assert(typeof ImportFirewallDomainsInput$ === "object");
assert(typeof ImportFirewallDomainsOutput$ === "object");
assert(typeof ListAccessSourcesInput$ === "object");
assert(typeof ListAccessSourcesOutput$ === "object");
assert(typeof ListAccessTokensInput$ === "object");
assert(typeof ListAccessTokensOutput$ === "object");
assert(typeof ListDNSViewsInput$ === "object");
assert(typeof ListDNSViewsOutput$ === "object");
assert(typeof ListFirewallDomainListsInput$ === "object");
assert(typeof ListFirewallDomainListsOutput$ === "object");
assert(typeof ListFirewallDomainsInput$ === "object");
assert(typeof ListFirewallDomainsOutput$ === "object");
assert(typeof ListFirewallRulesInput$ === "object");
assert(typeof ListFirewallRulesOutput$ === "object");
assert(typeof ListGlobalResolversInput$ === "object");
assert(typeof ListGlobalResolversOutput$ === "object");
assert(typeof ListHostedZoneAssociationsInput$ === "object");
assert(typeof ListHostedZoneAssociationsOutput$ === "object");
assert(typeof ListManagedFirewallDomainListsInput$ === "object");
assert(typeof ListManagedFirewallDomainListsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedFirewallDomainListsItem$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccessSourceInput$ === "object");
assert(typeof UpdateAccessSourceOutput$ === "object");
assert(typeof UpdateAccessTokenInput$ === "object");
assert(typeof UpdateAccessTokenOutput$ === "object");
assert(typeof UpdateDNSViewInput$ === "object");
assert(typeof UpdateDNSViewOutput$ === "object");
assert(typeof UpdateFirewallDomainsInput$ === "object");
assert(typeof UpdateFirewallDomainsOutput$ === "object");
assert(typeof UpdateFirewallRuleInput$ === "object");
assert(typeof UpdateFirewallRuleOutput$ === "object");
assert(typeof UpdateGlobalResolverInput$ === "object");
assert(typeof UpdateGlobalResolverOutput$ === "object");
assert(typeof UpdateHostedZoneAssociationInput$ === "object");
assert(typeof UpdateHostedZoneAssociationOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53GlobalResolverServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Route53GlobalResolverServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof Route53GlobalResolverServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Route53GlobalResolverServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof Route53GlobalResolverServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof Route53GlobalResolverServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof Route53GlobalResolverServiceException);
assert(typeof ValidationException$ === "object");
assert(Route53GlobalResolverServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessSources === "function");
assert(typeof paginateListAccessTokens === "function");
assert(typeof paginateListDNSViews === "function");
assert(typeof paginateListFirewallDomainLists === "function");
assert(typeof paginateListFirewallDomains === "function");
assert(typeof paginateListFirewallRules === "function");
assert(typeof paginateListGlobalResolvers === "function");
assert(typeof paginateListHostedZoneAssociations === "function");
assert(typeof paginateListManagedFirewallDomainLists === "function");
console.log(`Route53GlobalResolver index test passed.`);
