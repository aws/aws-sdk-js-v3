import {
  AccountRoleStatus,
  AssociateAdminAccountCommand,
  AssociateThirdPartyFirewallCommand,
  BatchAssociateResourceCommand,
  BatchDisassociateResourceCommand,
  CustomerPolicyScopeIdType,
  CustomerPolicyStatus,
  DeleteAppsListCommand,
  DeleteNotificationChannelCommand,
  DeletePolicyCommand,
  DeleteProtocolsListCommand,
  DeleteResourceSetCommand,
  DependentServiceName,
  DestinationType,
  DisassociateAdminAccountCommand,
  DisassociateThirdPartyFirewallCommand,
  EntryType,
  EntryViolationReason,
  FMS,
  FMSClient,
  FMSServiceException,
  FailedItemReason,
  FirewallDeploymentModel,
  GetAdminAccountCommand,
  GetAdminScopeCommand,
  GetAppsListCommand,
  GetComplianceDetailCommand,
  GetNotificationChannelCommand,
  GetPolicyCommand,
  GetProtectionStatusCommand,
  GetProtocolsListCommand,
  GetResourceSetCommand,
  GetThirdPartyFirewallAssociationStatusCommand,
  GetViolationDetailsCommand,
  InternalErrorException,
  InvalidInputException,
  InvalidOperationException,
  InvalidTypeException,
  LimitExceededException,
  ListAdminAccountsForOrganizationCommand,
  ListAdminsManagingAccountCommand,
  ListAppsListsCommand,
  ListComplianceStatusCommand,
  ListDiscoveredResourcesCommand,
  ListMemberAccountsCommand,
  ListPoliciesCommand,
  ListProtocolsListsCommand,
  ListResourceSetResourcesCommand,
  ListResourceSetsCommand,
  ListTagsForResourceCommand,
  ListThirdPartyFirewallFirewallPoliciesCommand,
  MarketplaceSubscriptionOnboardingStatus,
  NetworkAclRuleAction,
  NetworkFirewallOverrideAction,
  OrganizationStatus,
  PolicyComplianceStatusType,
  PutAdminAccountCommand,
  PutAppsListCommand,
  PutNotificationChannelCommand,
  PutPolicyCommand,
  PutProtocolsListCommand,
  PutResourceSetCommand,
  RemediationActionType,
  ResourceNotFoundException,
  ResourceSetStatus,
  ResourceTagLogicalOperator,
  RuleOrder,
  SecurityServiceType,
  StreamExceptionPolicy,
  TagResourceCommand,
  TargetType,
  ThirdPartyFirewall,
  ThirdPartyFirewallAssociationStatus,
  UntagResourceCommand,
  ViolationReason,
  paginateListAdminAccountsForOrganization,
  paginateListAdminsManagingAccount,
  paginateListAppsLists,
  paginateListComplianceStatus,
  paginateListMemberAccounts,
  paginateListPolicies,
  paginateListProtocolsLists,
  paginateListThirdPartyFirewallFirewallPolicies,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FMSClient === "function");
assert(typeof FMS === "function");
// commands
assert(typeof AssociateAdminAccountCommand === "function");
assert(typeof AssociateThirdPartyFirewallCommand === "function");
assert(typeof BatchAssociateResourceCommand === "function");
assert(typeof BatchDisassociateResourceCommand === "function");
assert(typeof DeleteAppsListCommand === "function");
assert(typeof DeleteNotificationChannelCommand === "function");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeleteProtocolsListCommand === "function");
assert(typeof DeleteResourceSetCommand === "function");
assert(typeof DisassociateAdminAccountCommand === "function");
assert(typeof DisassociateThirdPartyFirewallCommand === "function");
assert(typeof GetAdminAccountCommand === "function");
assert(typeof GetAdminScopeCommand === "function");
assert(typeof GetAppsListCommand === "function");
assert(typeof GetComplianceDetailCommand === "function");
assert(typeof GetNotificationChannelCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetProtectionStatusCommand === "function");
assert(typeof GetProtocolsListCommand === "function");
assert(typeof GetResourceSetCommand === "function");
assert(typeof GetThirdPartyFirewallAssociationStatusCommand === "function");
assert(typeof GetViolationDetailsCommand === "function");
assert(typeof ListAdminAccountsForOrganizationCommand === "function");
assert(typeof ListAdminsManagingAccountCommand === "function");
assert(typeof ListAppsListsCommand === "function");
assert(typeof ListComplianceStatusCommand === "function");
assert(typeof ListDiscoveredResourcesCommand === "function");
assert(typeof ListMemberAccountsCommand === "function");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListProtocolsListsCommand === "function");
assert(typeof ListResourceSetResourcesCommand === "function");
assert(typeof ListResourceSetsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListThirdPartyFirewallFirewallPoliciesCommand === "function");
assert(typeof PutAdminAccountCommand === "function");
assert(typeof PutAppsListCommand === "function");
assert(typeof PutNotificationChannelCommand === "function");
assert(typeof PutPolicyCommand === "function");
assert(typeof PutProtocolsListCommand === "function");
assert(typeof PutResourceSetCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AccountRoleStatus === "object");
assert(typeof CustomerPolicyScopeIdType === "object");
assert(typeof CustomerPolicyStatus === "object");
assert(typeof DependentServiceName === "object");
assert(typeof DestinationType === "object");
assert(typeof EntryType === "object");
assert(typeof EntryViolationReason === "object");
assert(typeof FailedItemReason === "object");
assert(typeof FirewallDeploymentModel === "object");
assert(typeof MarketplaceSubscriptionOnboardingStatus === "object");
assert(typeof NetworkAclRuleAction === "object");
assert(typeof NetworkFirewallOverrideAction === "object");
assert(typeof OrganizationStatus === "object");
assert(typeof PolicyComplianceStatusType === "object");
assert(typeof RemediationActionType === "object");
assert(typeof ResourceSetStatus === "object");
assert(typeof ResourceTagLogicalOperator === "object");
assert(typeof RuleOrder === "object");
assert(typeof SecurityServiceType === "object");
assert(typeof StreamExceptionPolicy === "object");
assert(typeof TargetType === "object");
assert(typeof ThirdPartyFirewall === "object");
assert(typeof ThirdPartyFirewallAssociationStatus === "object");
assert(typeof ViolationReason === "object");
// errors
assert(InternalErrorException.prototype instanceof FMSServiceException);
assert(InvalidInputException.prototype instanceof FMSServiceException);
assert(InvalidOperationException.prototype instanceof FMSServiceException);
assert(InvalidTypeException.prototype instanceof FMSServiceException);
assert(LimitExceededException.prototype instanceof FMSServiceException);
assert(ResourceNotFoundException.prototype instanceof FMSServiceException);
assert(FMSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAdminAccountsForOrganization === "function");
assert(typeof paginateListAdminsManagingAccount === "function");
assert(typeof paginateListAppsLists === "function");
assert(typeof paginateListComplianceStatus === "function");
assert(typeof paginateListMemberAccounts === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListProtocolsLists === "function");
assert(typeof paginateListThirdPartyFirewallFirewallPolicies === "function");
console.log(`FMS index test passed.`);
