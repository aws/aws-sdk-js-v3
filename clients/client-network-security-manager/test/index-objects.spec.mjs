import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountFilter$,
  AccountReference$,
  AccountSet$,
  AdminAccountDetails$,
  AdminAccountStatus,
  AdminAccountSummary$,
  AdminFirewallTypeScope$,
  AdminScope$,
  AdminScopeFilter$,
  AdminScopeFilterInput$,
  AdminScopeInput$,
  AdminScopeSelection$,
  AdminScopeSelectionInput$,
  AlbConfiguration$,
  AssociatedPolicy$,
  AssociatedRule$,
  AssociatedScope$,
  AssociatedTemplateOrRule$,
  ConfigurationIssue$,
  ConflictException,
  ConflictException$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentInput$,
  CreateDeploymentOutput$,
  CreateDeploymentSnapshot$,
  CreateDeploymentSnapshotCommand,
  CreateDeploymentSnapshotInput$,
  CreateDeploymentSnapshotOutput$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyInput$,
  CreatePolicyOutput$,
  CreatePolicySnapshot$,
  CreatePolicySnapshotCommand,
  CreatePolicySnapshotInput$,
  CreatePolicySnapshotOutput$,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleInput$,
  CreateRuleOutput$,
  CreateRuleSnapshot$,
  CreateRuleSnapshotCommand,
  CreateRuleSnapshotInput$,
  CreateRuleSnapshotOutput$,
  CreateScope$,
  CreateScopeCommand,
  CreateScopeInput$,
  CreateScopeOutput$,
  CreateScopeSnapshot$,
  CreateScopeSnapshotCommand,
  CreateScopeSnapshotInput$,
  CreateScopeSnapshotOutput$,
  CreateTemplate$,
  CreateTemplateCommand,
  CreateTemplateInput$,
  CreateTemplateOutput$,
  CreateTemplateSnapshot$,
  CreateTemplateSnapshotCommand,
  CreateTemplateSnapshotInput$,
  CreateTemplateSnapshotOutput$,
  DeleteAdminAccount$,
  DeleteAdminAccountCommand,
  DeleteAdminAccountRequest$,
  DeleteDeployment$,
  DeleteDeploymentCommand,
  DeleteDeploymentInput$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyInput$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleInput$,
  DeleteScope$,
  DeleteScopeCommand,
  DeleteScopeInput$,
  DeleteTemplate$,
  DeleteTemplateCommand,
  DeleteTemplateInput$,
  DeploymentConfiguration$,
  DeploymentCoverageEntry$,
  DeploymentSummary$,
  DeploymentWarningEntry$,
  EntityStatus,
  EntityStatusFilter,
  ExistingCustomerWebACLResolution,
  FirewallSyncReason$,
  GenerateRuleConfiguration$,
  GenerateRuleConfigurationCommand,
  GenerateRuleConfigurationRequest$,
  GenerateRuleConfigurationResponse$,
  GetAdminAccount$,
  GetAdminAccountCommand,
  GetAdminAccountRequest$,
  GetAdminAccountResponse$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentInput$,
  GetDeploymentOutput$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyInput$,
  GetPolicyOutput$,
  GetRule$,
  GetRuleCommand,
  GetRuleInput$,
  GetRuleOutput$,
  GetScope$,
  GetScopeCommand,
  GetScopeInput$,
  GetScopeOutput$,
  GetTemplate$,
  GetTemplateCommand,
  GetTemplateInput$,
  GetTemplateOutput$,
  InternalServerException,
  InternalServerException$,
  InvalidFirewallReasons$,
  IpAddressType,
  ListAdminAccounts$,
  ListAdminAccountsCommand,
  ListAdminAccountsRequest$,
  ListAdminAccountsResponse$,
  ListAggregateResourceSynchronizationStatuses$,
  ListAggregateResourceSynchronizationStatusesCommand,
  ListAggregateResourceSynchronizationStatusesInput$,
  ListAggregateResourceSynchronizationStatusesOutput$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsInput$,
  ListDeploymentSnapshots$,
  ListDeploymentSnapshotsCommand,
  ListDeploymentSnapshotsInput$,
  ListDeploymentSnapshotsOutput$,
  ListDeploymentsOutput$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesInput$,
  ListPoliciesOutput$,
  ListPolicySnapshots$,
  ListPolicySnapshotsCommand,
  ListPolicySnapshotsInput$,
  ListPolicySnapshotsOutput$,
  ListResourceAssociations$,
  ListResourceAssociationsCommand,
  ListResourceAssociationsInput$,
  ListResourceAssociationsOutput$,
  ListResourceSynchronizationStatuses$,
  ListResourceSynchronizationStatusesCommand,
  ListResourceSynchronizationStatusesInput$,
  ListResourceSynchronizationStatusesOutput$,
  ListRules$,
  ListRulesCommand,
  ListRulesInput$,
  ListRuleSnapshots$,
  ListRuleSnapshotsCommand,
  ListRuleSnapshotsInput$,
  ListRuleSnapshotsOutput$,
  ListRulesOutput$,
  ListScopes$,
  ListScopesCommand,
  ListScopesInput$,
  ListScopeSnapshots$,
  ListScopeSnapshotsCommand,
  ListScopeSnapshotsInput$,
  ListScopeSnapshotsOutput$,
  ListScopesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTemplates$,
  ListTemplatesCommand,
  ListTemplatesInput$,
  ListTemplateSnapshots$,
  ListTemplateSnapshotsCommand,
  ListTemplateSnapshotsInput$,
  ListTemplateSnapshotsOutput$,
  ListTemplatesOutput$,
  NetworkSecurityManager,
  NetworkSecurityManagerClient,
  NetworkSecurityManagerServiceException,
  NotVisibleMarker$,
  OrganizationalUnitReference$,
  OutOfSyncReasonsView$,
  paginateListAdminAccounts,
  paginateListAggregateResourceSynchronizationStatuses,
  paginateListDeployments,
  paginateListDeploymentSnapshots,
  paginateListPolicies,
  paginateListPolicySnapshots,
  paginateListResourceAssociations,
  paginateListResourceSynchronizationStatuses,
  paginateListRules,
  paginateListRuleSnapshots,
  paginateListScopes,
  paginateListScopeSnapshots,
  paginateListTemplates,
  paginateListTemplateSnapshots,
  PolicyConfiguration$,
  PolicyFirewallType,
  PolicyReference$,
  PolicySummary$,
  PutAdminAccount$,
  PutAdminAccountCommand,
  PutAdminAccountRequest$,
  PutAdminAccountResponse$,
  RemediationIssueDetails$,
  RemediationIssuesView$,
  ResourceAssociation$,
  ResourceCriteria$,
  ResourceLogicalExpression$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceScope$,
  ResourceSet$,
  ResourceSynchronizationStatusSummary$,
  ResourceType,
  RuleFirewallType,
  RuleReference$,
  RuleSummary$,
  RuleType,
  Scheme,
  ScopeConfiguration$,
  ScopeReference$,
  ScopeResourceType,
  ScopeSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceResourceType,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SynchronizationStatus,
  TagPolicyViolationException,
  TagPolicyViolationException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TemplateFirewallType,
  TemplateOrRuleReference$,
  TemplateSummary$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateDeployment$,
  UpdateDeploymentCommand,
  UpdateDeploymentInput$,
  UpdateDeploymentOutput$,
  UpdatePolicy$,
  UpdatePolicyCommand,
  UpdatePolicyInput$,
  UpdatePolicyOutput$,
  UpdateRule$,
  UpdateRuleCommand,
  UpdateRuleInput$,
  UpdateRuleOutput$,
  UpdateScope$,
  UpdateScopeCommand,
  UpdateScopeInput$,
  UpdateScopeOutput$,
  UpdateTemplate$,
  UpdateTemplateCommand,
  UpdateTemplateInput$,
  UpdateTemplateOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  WafConfig$,
  WAFConfigDataType,
  WAFConflictResolutionOptions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkSecurityManagerClient === "function");
assert(typeof NetworkSecurityManager === "function");
// commands
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof CreateDeploymentSnapshotCommand === "function");
assert(typeof CreateDeploymentSnapshot$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof CreatePolicySnapshotCommand === "function");
assert(typeof CreatePolicySnapshot$ === "object");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof CreateRuleSnapshotCommand === "function");
assert(typeof CreateRuleSnapshot$ === "object");
assert(typeof CreateScopeCommand === "function");
assert(typeof CreateScope$ === "object");
assert(typeof CreateScopeSnapshotCommand === "function");
assert(typeof CreateScopeSnapshot$ === "object");
assert(typeof CreateTemplateCommand === "function");
assert(typeof CreateTemplate$ === "object");
assert(typeof CreateTemplateSnapshotCommand === "function");
assert(typeof CreateTemplateSnapshot$ === "object");
assert(typeof DeleteAdminAccountCommand === "function");
assert(typeof DeleteAdminAccount$ === "object");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDeployment$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DeleteScopeCommand === "function");
assert(typeof DeleteScope$ === "object");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteTemplate$ === "object");
assert(typeof GenerateRuleConfigurationCommand === "function");
assert(typeof GenerateRuleConfiguration$ === "object");
assert(typeof GetAdminAccountCommand === "function");
assert(typeof GetAdminAccount$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetRuleCommand === "function");
assert(typeof GetRule$ === "object");
assert(typeof GetScopeCommand === "function");
assert(typeof GetScope$ === "object");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplate$ === "object");
assert(typeof ListAdminAccountsCommand === "function");
assert(typeof ListAdminAccounts$ === "object");
assert(typeof ListAggregateResourceSynchronizationStatusesCommand === "function");
assert(typeof ListAggregateResourceSynchronizationStatuses$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListDeploymentSnapshotsCommand === "function");
assert(typeof ListDeploymentSnapshots$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPolicySnapshotsCommand === "function");
assert(typeof ListPolicySnapshots$ === "object");
assert(typeof ListResourceAssociationsCommand === "function");
assert(typeof ListResourceAssociations$ === "object");
assert(typeof ListResourceSynchronizationStatusesCommand === "function");
assert(typeof ListResourceSynchronizationStatuses$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListRuleSnapshotsCommand === "function");
assert(typeof ListRuleSnapshots$ === "object");
assert(typeof ListScopesCommand === "function");
assert(typeof ListScopes$ === "object");
assert(typeof ListScopeSnapshotsCommand === "function");
assert(typeof ListScopeSnapshots$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListTemplates$ === "object");
assert(typeof ListTemplateSnapshotsCommand === "function");
assert(typeof ListTemplateSnapshots$ === "object");
assert(typeof PutAdminAccountCommand === "function");
assert(typeof PutAdminAccount$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDeploymentCommand === "function");
assert(typeof UpdateDeployment$ === "object");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicy$ === "object");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateRule$ === "object");
assert(typeof UpdateScopeCommand === "function");
assert(typeof UpdateScope$ === "object");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof UpdateTemplate$ === "object");
// structural schemas
assert(typeof AccountFilter$ === "object");
assert(typeof AccountReference$ === "object");
assert(typeof AccountSet$ === "object");
assert(typeof AdminAccountDetails$ === "object");
assert(typeof AdminAccountSummary$ === "object");
assert(typeof AdminFirewallTypeScope$ === "object");
assert(typeof AdminScope$ === "object");
assert(typeof AdminScopeFilter$ === "object");
assert(typeof AdminScopeFilterInput$ === "object");
assert(typeof AdminScopeInput$ === "object");
assert(typeof AdminScopeSelection$ === "object");
assert(typeof AdminScopeSelectionInput$ === "object");
assert(typeof AlbConfiguration$ === "object");
assert(typeof AssociatedPolicy$ === "object");
assert(typeof AssociatedRule$ === "object");
assert(typeof AssociatedScope$ === "object");
assert(typeof AssociatedTemplateOrRule$ === "object");
assert(typeof ConfigurationIssue$ === "object");
assert(typeof CreateDeploymentInput$ === "object");
assert(typeof CreateDeploymentOutput$ === "object");
assert(typeof CreateDeploymentSnapshotInput$ === "object");
assert(typeof CreateDeploymentSnapshotOutput$ === "object");
assert(typeof CreatePolicyInput$ === "object");
assert(typeof CreatePolicyOutput$ === "object");
assert(typeof CreatePolicySnapshotInput$ === "object");
assert(typeof CreatePolicySnapshotOutput$ === "object");
assert(typeof CreateRuleInput$ === "object");
assert(typeof CreateRuleOutput$ === "object");
assert(typeof CreateRuleSnapshotInput$ === "object");
assert(typeof CreateRuleSnapshotOutput$ === "object");
assert(typeof CreateScopeInput$ === "object");
assert(typeof CreateScopeOutput$ === "object");
assert(typeof CreateScopeSnapshotInput$ === "object");
assert(typeof CreateScopeSnapshotOutput$ === "object");
assert(typeof CreateTemplateInput$ === "object");
assert(typeof CreateTemplateOutput$ === "object");
assert(typeof CreateTemplateSnapshotInput$ === "object");
assert(typeof CreateTemplateSnapshotOutput$ === "object");
assert(typeof DeleteAdminAccountRequest$ === "object");
assert(typeof DeleteDeploymentInput$ === "object");
assert(typeof DeletePolicyInput$ === "object");
assert(typeof DeleteRuleInput$ === "object");
assert(typeof DeleteScopeInput$ === "object");
assert(typeof DeleteTemplateInput$ === "object");
assert(typeof DeploymentConfiguration$ === "object");
assert(typeof DeploymentCoverageEntry$ === "object");
assert(typeof DeploymentSummary$ === "object");
assert(typeof DeploymentWarningEntry$ === "object");
assert(typeof FirewallSyncReason$ === "object");
assert(typeof GenerateRuleConfigurationRequest$ === "object");
assert(typeof GenerateRuleConfigurationResponse$ === "object");
assert(typeof GetAdminAccountRequest$ === "object");
assert(typeof GetAdminAccountResponse$ === "object");
assert(typeof GetDeploymentInput$ === "object");
assert(typeof GetDeploymentOutput$ === "object");
assert(typeof GetPolicyInput$ === "object");
assert(typeof GetPolicyOutput$ === "object");
assert(typeof GetRuleInput$ === "object");
assert(typeof GetRuleOutput$ === "object");
assert(typeof GetScopeInput$ === "object");
assert(typeof GetScopeOutput$ === "object");
assert(typeof GetTemplateInput$ === "object");
assert(typeof GetTemplateOutput$ === "object");
assert(typeof InvalidFirewallReasons$ === "object");
assert(typeof ListAdminAccountsRequest$ === "object");
assert(typeof ListAdminAccountsResponse$ === "object");
assert(typeof ListAggregateResourceSynchronizationStatusesInput$ === "object");
assert(typeof ListAggregateResourceSynchronizationStatusesOutput$ === "object");
assert(typeof ListDeploymentsInput$ === "object");
assert(typeof ListDeploymentSnapshotsInput$ === "object");
assert(typeof ListDeploymentSnapshotsOutput$ === "object");
assert(typeof ListDeploymentsOutput$ === "object");
assert(typeof ListPoliciesInput$ === "object");
assert(typeof ListPoliciesOutput$ === "object");
assert(typeof ListPolicySnapshotsInput$ === "object");
assert(typeof ListPolicySnapshotsOutput$ === "object");
assert(typeof ListResourceAssociationsInput$ === "object");
assert(typeof ListResourceAssociationsOutput$ === "object");
assert(typeof ListResourceSynchronizationStatusesInput$ === "object");
assert(typeof ListResourceSynchronizationStatusesOutput$ === "object");
assert(typeof ListRulesInput$ === "object");
assert(typeof ListRuleSnapshotsInput$ === "object");
assert(typeof ListRuleSnapshotsOutput$ === "object");
assert(typeof ListRulesOutput$ === "object");
assert(typeof ListScopesInput$ === "object");
assert(typeof ListScopeSnapshotsInput$ === "object");
assert(typeof ListScopeSnapshotsOutput$ === "object");
assert(typeof ListScopesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTemplatesInput$ === "object");
assert(typeof ListTemplateSnapshotsInput$ === "object");
assert(typeof ListTemplateSnapshotsOutput$ === "object");
assert(typeof ListTemplatesOutput$ === "object");
assert(typeof NotVisibleMarker$ === "object");
assert(typeof OrganizationalUnitReference$ === "object");
assert(typeof OutOfSyncReasonsView$ === "object");
assert(typeof PolicyConfiguration$ === "object");
assert(typeof PolicyReference$ === "object");
assert(typeof PolicySummary$ === "object");
assert(typeof PutAdminAccountRequest$ === "object");
assert(typeof PutAdminAccountResponse$ === "object");
assert(typeof RemediationIssueDetails$ === "object");
assert(typeof RemediationIssuesView$ === "object");
assert(typeof ResourceAssociation$ === "object");
assert(typeof ResourceCriteria$ === "object");
assert(typeof ResourceLogicalExpression$ === "object");
assert(typeof ResourceScope$ === "object");
assert(typeof ResourceSet$ === "object");
assert(typeof ResourceSynchronizationStatusSummary$ === "object");
assert(typeof RuleReference$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof ScopeConfiguration$ === "object");
assert(typeof ScopeReference$ === "object");
assert(typeof ScopeSummary$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TemplateOrRuleReference$ === "object");
assert(typeof TemplateSummary$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateDeploymentInput$ === "object");
assert(typeof UpdateDeploymentOutput$ === "object");
assert(typeof UpdatePolicyInput$ === "object");
assert(typeof UpdatePolicyOutput$ === "object");
assert(typeof UpdateRuleInput$ === "object");
assert(typeof UpdateRuleOutput$ === "object");
assert(typeof UpdateScopeInput$ === "object");
assert(typeof UpdateScopeOutput$ === "object");
assert(typeof UpdateTemplateInput$ === "object");
assert(typeof UpdateTemplateOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WafConfig$ === "object");
// enums
assert(typeof AdminAccountStatus === "object");
assert(typeof EntityStatus === "object");
assert(typeof EntityStatusFilter === "object");
assert(typeof ExistingCustomerWebACLResolution === "object");
assert(typeof IpAddressType === "object");
assert(typeof PolicyFirewallType === "object");
assert(typeof ResourceType === "object");
assert(typeof RuleFirewallType === "object");
assert(typeof RuleType === "object");
assert(typeof Scheme === "object");
assert(typeof ScopeResourceType === "object");
assert(typeof ServiceResourceType === "object");
assert(typeof SynchronizationStatus === "object");
assert(typeof TemplateFirewallType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof WAFConfigDataType === "object");
assert(typeof WAFConflictResolutionOptions === "object");
// errors
assert(AccessDeniedException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TagPolicyViolationException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof TagPolicyViolationException$ === "object");
assert(ThrottlingException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof NetworkSecurityManagerServiceException);
assert(typeof ValidationException$ === "object");
assert(NetworkSecurityManagerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAdminAccounts === "function");
assert(typeof paginateListAggregateResourceSynchronizationStatuses === "function");
assert(typeof paginateListDeploymentSnapshots === "function");
assert(typeof paginateListDeployments === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicySnapshots === "function");
assert(typeof paginateListResourceAssociations === "function");
assert(typeof paginateListResourceSynchronizationStatuses === "function");
assert(typeof paginateListRuleSnapshots === "function");
assert(typeof paginateListRules === "function");
assert(typeof paginateListScopeSnapshots === "function");
assert(typeof paginateListScopes === "function");
assert(typeof paginateListTemplateSnapshots === "function");
assert(typeof paginateListTemplates === "function");
console.log(`NetworkSecurityManager index test passed.`);
