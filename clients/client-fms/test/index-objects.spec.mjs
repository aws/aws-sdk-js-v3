import {
  AccountRoleStatus,
  AccountScope$,
  ActionTarget$,
  AdminAccountSummary$,
  AdminScope$,
  App$,
  AppsListData$,
  AppsListDataSummary$,
  AssociateAdminAccount$,
  AssociateAdminAccountCommand,
  AssociateAdminAccountRequest$,
  AssociateThirdPartyFirewall$,
  AssociateThirdPartyFirewallCommand,
  AssociateThirdPartyFirewallRequest$,
  AssociateThirdPartyFirewallResponse$,
  AwsEc2InstanceViolation$,
  AwsEc2NetworkInterfaceViolation$,
  AwsVPCSecurityGroupViolation$,
  BatchAssociateResource$,
  BatchAssociateResourceCommand,
  BatchAssociateResourceRequest$,
  BatchAssociateResourceResponse$,
  BatchDisassociateResource$,
  BatchDisassociateResourceCommand,
  BatchDisassociateResourceRequest$,
  BatchDisassociateResourceResponse$,
  ComplianceViolator$,
  CreateNetworkAclAction$,
  CreateNetworkAclEntriesAction$,
  CustomerPolicyScopeIdType,
  CustomerPolicyStatus,
  DeleteAppsList$,
  DeleteAppsListCommand,
  DeleteAppsListRequest$,
  DeleteNetworkAclEntriesAction$,
  DeleteNotificationChannel$,
  DeleteNotificationChannelCommand,
  DeleteNotificationChannelRequest$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyRequest$,
  DeleteProtocolsList$,
  DeleteProtocolsListCommand,
  DeleteProtocolsListRequest$,
  DeleteResourceSet$,
  DeleteResourceSetCommand,
  DeleteResourceSetRequest$,
  DependentServiceName,
  DestinationType,
  DisassociateAdminAccount$,
  DisassociateAdminAccountCommand,
  DisassociateAdminAccountRequest$,
  DisassociateThirdPartyFirewall$,
  DisassociateThirdPartyFirewallCommand,
  DisassociateThirdPartyFirewallRequest$,
  DisassociateThirdPartyFirewallResponse$,
  DiscoveredResource$,
  DnsDuplicateRuleGroupViolation$,
  DnsRuleGroupLimitExceededViolation$,
  DnsRuleGroupPriorityConflictViolation$,
  EC2AssociateRouteTableAction$,
  EC2CopyRouteTableAction$,
  EC2CreateRouteAction$,
  EC2CreateRouteTableAction$,
  EC2DeleteRouteAction$,
  EC2ReplaceRouteAction$,
  EC2ReplaceRouteTableAssociationAction$,
  EntryDescription$,
  EntryType,
  EntryViolation$,
  EntryViolationReason,
  EvaluationResult$,
  ExpectedRoute$,
  FailedItem$,
  FailedItemReason,
  FirewallDeploymentModel,
  FirewallSubnetIsOutOfScopeViolation$,
  FirewallSubnetMissingVPCEndpointViolation$,
  FMS,
  FMSClient,
  FMSPolicyUpdateFirewallCreationConfigAction$,
  FMSServiceException,
  GetAdminAccount$,
  GetAdminAccountCommand,
  GetAdminAccountRequest$,
  GetAdminAccountResponse$,
  GetAdminScope$,
  GetAdminScopeCommand,
  GetAdminScopeRequest$,
  GetAdminScopeResponse$,
  GetAppsList$,
  GetAppsListCommand,
  GetAppsListRequest$,
  GetAppsListResponse$,
  GetComplianceDetail$,
  GetComplianceDetailCommand,
  GetComplianceDetailRequest$,
  GetComplianceDetailResponse$,
  GetNotificationChannel$,
  GetNotificationChannelCommand,
  GetNotificationChannelRequest$,
  GetNotificationChannelResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetProtectionStatus$,
  GetProtectionStatusCommand,
  GetProtectionStatusRequest$,
  GetProtectionStatusResponse$,
  GetProtocolsList$,
  GetProtocolsListCommand,
  GetProtocolsListRequest$,
  GetProtocolsListResponse$,
  GetResourceSet$,
  GetResourceSetCommand,
  GetResourceSetRequest$,
  GetResourceSetResponse$,
  GetThirdPartyFirewallAssociationStatus$,
  GetThirdPartyFirewallAssociationStatusCommand,
  GetThirdPartyFirewallAssociationStatusRequest$,
  GetThirdPartyFirewallAssociationStatusResponse$,
  GetViolationDetails$,
  GetViolationDetailsCommand,
  GetViolationDetailsRequest$,
  GetViolationDetailsResponse$,
  InternalErrorException,
  InternalErrorException$,
  InvalidInputException,
  InvalidInputException$,
  InvalidNetworkAclEntriesViolation$,
  InvalidOperationException,
  InvalidOperationException$,
  InvalidTypeException,
  InvalidTypeException$,
  LimitExceededException,
  LimitExceededException$,
  ListAdminAccountsForOrganization$,
  ListAdminAccountsForOrganizationCommand,
  ListAdminAccountsForOrganizationRequest$,
  ListAdminAccountsForOrganizationResponse$,
  ListAdminsManagingAccount$,
  ListAdminsManagingAccountCommand,
  ListAdminsManagingAccountRequest$,
  ListAdminsManagingAccountResponse$,
  ListAppsLists$,
  ListAppsListsCommand,
  ListAppsListsRequest$,
  ListAppsListsResponse$,
  ListComplianceStatus$,
  ListComplianceStatusCommand,
  ListComplianceStatusRequest$,
  ListComplianceStatusResponse$,
  ListDiscoveredResources$,
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesRequest$,
  ListDiscoveredResourcesResponse$,
  ListMemberAccounts$,
  ListMemberAccountsCommand,
  ListMemberAccountsRequest$,
  ListMemberAccountsResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListProtocolsLists$,
  ListProtocolsListsCommand,
  ListProtocolsListsRequest$,
  ListProtocolsListsResponse$,
  ListResourceSetResources$,
  ListResourceSetResourcesCommand,
  ListResourceSetResourcesRequest$,
  ListResourceSetResourcesResponse$,
  ListResourceSets$,
  ListResourceSetsCommand,
  ListResourceSetsRequest$,
  ListResourceSetsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListThirdPartyFirewallFirewallPolicies$,
  ListThirdPartyFirewallFirewallPoliciesCommand,
  ListThirdPartyFirewallFirewallPoliciesRequest$,
  ListThirdPartyFirewallFirewallPoliciesResponse$,
  MarketplaceSubscriptionOnboardingStatus,
  NetworkAclCommonPolicy$,
  NetworkAclEntry$,
  NetworkAclEntrySet$,
  NetworkAclIcmpTypeCode$,
  NetworkAclPortRange$,
  NetworkAclRuleAction,
  NetworkFirewallBlackHoleRouteDetectedViolation$,
  NetworkFirewallInternetTrafficNotInspectedViolation$,
  NetworkFirewallInvalidRouteConfigurationViolation$,
  NetworkFirewallMissingExpectedRoutesViolation$,
  NetworkFirewallMissingExpectedRTViolation$,
  NetworkFirewallMissingFirewallViolation$,
  NetworkFirewallMissingSubnetViolation$,
  NetworkFirewallOverrideAction,
  NetworkFirewallPolicy$,
  NetworkFirewallPolicyDescription$,
  NetworkFirewallPolicyModifiedViolation$,
  NetworkFirewallStatefulRuleGroupOverride$,
  NetworkFirewallUnexpectedFirewallRoutesViolation$,
  NetworkFirewallUnexpectedGatewayRoutesViolation$,
  OrganizationalUnitScope$,
  OrganizationStatus,
  paginateListAdminAccountsForOrganization,
  paginateListAdminsManagingAccount,
  paginateListAppsLists,
  paginateListComplianceStatus,
  paginateListMemberAccounts,
  paginateListPolicies,
  paginateListProtocolsLists,
  paginateListThirdPartyFirewallFirewallPolicies,
  PartialMatch$,
  Policy$,
  PolicyComplianceDetail$,
  PolicyComplianceStatus$,
  PolicyComplianceStatusType,
  PolicyOption$,
  PolicySummary$,
  PolicyTypeScope$,
  PossibleRemediationAction$,
  PossibleRemediationActions$,
  ProtocolsListData$,
  ProtocolsListDataSummary$,
  PutAdminAccount$,
  PutAdminAccountCommand,
  PutAdminAccountRequest$,
  PutAppsList$,
  PutAppsListCommand,
  PutAppsListRequest$,
  PutAppsListResponse$,
  PutNotificationChannel$,
  PutNotificationChannelCommand,
  PutNotificationChannelRequest$,
  PutPolicy$,
  PutPolicyCommand,
  PutPolicyRequest$,
  PutPolicyResponse$,
  PutProtocolsList$,
  PutProtocolsListCommand,
  PutProtocolsListRequest$,
  PutProtocolsListResponse$,
  PutResourceSet$,
  PutResourceSetCommand,
  PutResourceSetRequest$,
  PutResourceSetResponse$,
  RegionScope$,
  RemediationAction$,
  RemediationActionType,
  RemediationActionWithOrder$,
  ReplaceNetworkAclAssociationAction$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSet$,
  ResourceSetStatus,
  ResourceSetSummary$,
  ResourceTag$,
  ResourceTagLogicalOperator,
  ResourceViolation$,
  Route$,
  RouteHasOutOfScopeEndpointViolation$,
  RuleOrder,
  SecurityGroupRemediationAction$,
  SecurityGroupRuleDescription$,
  SecurityServicePolicyData$,
  SecurityServiceType,
  StatefulEngineOptions$,
  StatefulRuleGroup$,
  StatelessRuleGroup$,
  StreamExceptionPolicy,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetType,
  ThirdPartyFirewall,
  ThirdPartyFirewallAssociationStatus,
  ThirdPartyFirewallFirewallPolicy$,
  ThirdPartyFirewallMissingExpectedRouteTableViolation$,
  ThirdPartyFirewallMissingFirewallViolation$,
  ThirdPartyFirewallMissingSubnetViolation$,
  ThirdPartyFirewallPolicy$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ViolationDetail$,
  ViolationReason,
  WebACLHasIncompatibleConfigurationViolation$,
  WebACLHasOutOfScopeResourcesViolation$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FMSClient === "function");
assert(typeof FMS === "function");
// commands
assert(typeof AssociateAdminAccountCommand === "function");
assert(typeof AssociateAdminAccount$ === "object");
assert(typeof AssociateThirdPartyFirewallCommand === "function");
assert(typeof AssociateThirdPartyFirewall$ === "object");
assert(typeof BatchAssociateResourceCommand === "function");
assert(typeof BatchAssociateResource$ === "object");
assert(typeof BatchDisassociateResourceCommand === "function");
assert(typeof BatchDisassociateResource$ === "object");
assert(typeof DeleteAppsListCommand === "function");
assert(typeof DeleteAppsList$ === "object");
assert(typeof DeleteNotificationChannelCommand === "function");
assert(typeof DeleteNotificationChannel$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeleteProtocolsListCommand === "function");
assert(typeof DeleteProtocolsList$ === "object");
assert(typeof DeleteResourceSetCommand === "function");
assert(typeof DeleteResourceSet$ === "object");
assert(typeof DisassociateAdminAccountCommand === "function");
assert(typeof DisassociateAdminAccount$ === "object");
assert(typeof DisassociateThirdPartyFirewallCommand === "function");
assert(typeof DisassociateThirdPartyFirewall$ === "object");
assert(typeof GetAdminAccountCommand === "function");
assert(typeof GetAdminAccount$ === "object");
assert(typeof GetAdminScopeCommand === "function");
assert(typeof GetAdminScope$ === "object");
assert(typeof GetAppsListCommand === "function");
assert(typeof GetAppsList$ === "object");
assert(typeof GetComplianceDetailCommand === "function");
assert(typeof GetComplianceDetail$ === "object");
assert(typeof GetNotificationChannelCommand === "function");
assert(typeof GetNotificationChannel$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetProtectionStatusCommand === "function");
assert(typeof GetProtectionStatus$ === "object");
assert(typeof GetProtocolsListCommand === "function");
assert(typeof GetProtocolsList$ === "object");
assert(typeof GetResourceSetCommand === "function");
assert(typeof GetResourceSet$ === "object");
assert(typeof GetThirdPartyFirewallAssociationStatusCommand === "function");
assert(typeof GetThirdPartyFirewallAssociationStatus$ === "object");
assert(typeof GetViolationDetailsCommand === "function");
assert(typeof GetViolationDetails$ === "object");
assert(typeof ListAdminAccountsForOrganizationCommand === "function");
assert(typeof ListAdminAccountsForOrganization$ === "object");
assert(typeof ListAdminsManagingAccountCommand === "function");
assert(typeof ListAdminsManagingAccount$ === "object");
assert(typeof ListAppsListsCommand === "function");
assert(typeof ListAppsLists$ === "object");
assert(typeof ListComplianceStatusCommand === "function");
assert(typeof ListComplianceStatus$ === "object");
assert(typeof ListDiscoveredResourcesCommand === "function");
assert(typeof ListDiscoveredResources$ === "object");
assert(typeof ListMemberAccountsCommand === "function");
assert(typeof ListMemberAccounts$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListProtocolsListsCommand === "function");
assert(typeof ListProtocolsLists$ === "object");
assert(typeof ListResourceSetResourcesCommand === "function");
assert(typeof ListResourceSetResources$ === "object");
assert(typeof ListResourceSetsCommand === "function");
assert(typeof ListResourceSets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListThirdPartyFirewallFirewallPoliciesCommand === "function");
assert(typeof ListThirdPartyFirewallFirewallPolicies$ === "object");
assert(typeof PutAdminAccountCommand === "function");
assert(typeof PutAdminAccount$ === "object");
assert(typeof PutAppsListCommand === "function");
assert(typeof PutAppsList$ === "object");
assert(typeof PutNotificationChannelCommand === "function");
assert(typeof PutNotificationChannel$ === "object");
assert(typeof PutPolicyCommand === "function");
assert(typeof PutPolicy$ === "object");
assert(typeof PutProtocolsListCommand === "function");
assert(typeof PutProtocolsList$ === "object");
assert(typeof PutResourceSetCommand === "function");
assert(typeof PutResourceSet$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AccountScope$ === "object");
assert(typeof ActionTarget$ === "object");
assert(typeof AdminAccountSummary$ === "object");
assert(typeof AdminScope$ === "object");
assert(typeof App$ === "object");
assert(typeof AppsListData$ === "object");
assert(typeof AppsListDataSummary$ === "object");
assert(typeof AssociateAdminAccountRequest$ === "object");
assert(typeof AssociateThirdPartyFirewallRequest$ === "object");
assert(typeof AssociateThirdPartyFirewallResponse$ === "object");
assert(typeof AwsEc2InstanceViolation$ === "object");
assert(typeof AwsEc2NetworkInterfaceViolation$ === "object");
assert(typeof AwsVPCSecurityGroupViolation$ === "object");
assert(typeof BatchAssociateResourceRequest$ === "object");
assert(typeof BatchAssociateResourceResponse$ === "object");
assert(typeof BatchDisassociateResourceRequest$ === "object");
assert(typeof BatchDisassociateResourceResponse$ === "object");
assert(typeof ComplianceViolator$ === "object");
assert(typeof CreateNetworkAclAction$ === "object");
assert(typeof CreateNetworkAclEntriesAction$ === "object");
assert(typeof DeleteAppsListRequest$ === "object");
assert(typeof DeleteNetworkAclEntriesAction$ === "object");
assert(typeof DeleteNotificationChannelRequest$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DeleteProtocolsListRequest$ === "object");
assert(typeof DeleteResourceSetRequest$ === "object");
assert(typeof DisassociateAdminAccountRequest$ === "object");
assert(typeof DisassociateThirdPartyFirewallRequest$ === "object");
assert(typeof DisassociateThirdPartyFirewallResponse$ === "object");
assert(typeof DiscoveredResource$ === "object");
assert(typeof DnsDuplicateRuleGroupViolation$ === "object");
assert(typeof DnsRuleGroupLimitExceededViolation$ === "object");
assert(typeof DnsRuleGroupPriorityConflictViolation$ === "object");
assert(typeof EC2AssociateRouteTableAction$ === "object");
assert(typeof EC2CopyRouteTableAction$ === "object");
assert(typeof EC2CreateRouteAction$ === "object");
assert(typeof EC2CreateRouteTableAction$ === "object");
assert(typeof EC2DeleteRouteAction$ === "object");
assert(typeof EC2ReplaceRouteAction$ === "object");
assert(typeof EC2ReplaceRouteTableAssociationAction$ === "object");
assert(typeof EntryDescription$ === "object");
assert(typeof EntryViolation$ === "object");
assert(typeof EvaluationResult$ === "object");
assert(typeof ExpectedRoute$ === "object");
assert(typeof FailedItem$ === "object");
assert(typeof FirewallSubnetIsOutOfScopeViolation$ === "object");
assert(typeof FirewallSubnetMissingVPCEndpointViolation$ === "object");
assert(typeof FMSPolicyUpdateFirewallCreationConfigAction$ === "object");
assert(typeof GetAdminAccountRequest$ === "object");
assert(typeof GetAdminAccountResponse$ === "object");
assert(typeof GetAdminScopeRequest$ === "object");
assert(typeof GetAdminScopeResponse$ === "object");
assert(typeof GetAppsListRequest$ === "object");
assert(typeof GetAppsListResponse$ === "object");
assert(typeof GetComplianceDetailRequest$ === "object");
assert(typeof GetComplianceDetailResponse$ === "object");
assert(typeof GetNotificationChannelRequest$ === "object");
assert(typeof GetNotificationChannelResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetProtectionStatusRequest$ === "object");
assert(typeof GetProtectionStatusResponse$ === "object");
assert(typeof GetProtocolsListRequest$ === "object");
assert(typeof GetProtocolsListResponse$ === "object");
assert(typeof GetResourceSetRequest$ === "object");
assert(typeof GetResourceSetResponse$ === "object");
assert(typeof GetThirdPartyFirewallAssociationStatusRequest$ === "object");
assert(typeof GetThirdPartyFirewallAssociationStatusResponse$ === "object");
assert(typeof GetViolationDetailsRequest$ === "object");
assert(typeof GetViolationDetailsResponse$ === "object");
assert(typeof InvalidNetworkAclEntriesViolation$ === "object");
assert(typeof ListAdminAccountsForOrganizationRequest$ === "object");
assert(typeof ListAdminAccountsForOrganizationResponse$ === "object");
assert(typeof ListAdminsManagingAccountRequest$ === "object");
assert(typeof ListAdminsManagingAccountResponse$ === "object");
assert(typeof ListAppsListsRequest$ === "object");
assert(typeof ListAppsListsResponse$ === "object");
assert(typeof ListComplianceStatusRequest$ === "object");
assert(typeof ListComplianceStatusResponse$ === "object");
assert(typeof ListDiscoveredResourcesRequest$ === "object");
assert(typeof ListDiscoveredResourcesResponse$ === "object");
assert(typeof ListMemberAccountsRequest$ === "object");
assert(typeof ListMemberAccountsResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListProtocolsListsRequest$ === "object");
assert(typeof ListProtocolsListsResponse$ === "object");
assert(typeof ListResourceSetResourcesRequest$ === "object");
assert(typeof ListResourceSetResourcesResponse$ === "object");
assert(typeof ListResourceSetsRequest$ === "object");
assert(typeof ListResourceSetsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListThirdPartyFirewallFirewallPoliciesRequest$ === "object");
assert(typeof ListThirdPartyFirewallFirewallPoliciesResponse$ === "object");
assert(typeof NetworkAclCommonPolicy$ === "object");
assert(typeof NetworkAclEntry$ === "object");
assert(typeof NetworkAclEntrySet$ === "object");
assert(typeof NetworkAclIcmpTypeCode$ === "object");
assert(typeof NetworkAclPortRange$ === "object");
assert(typeof NetworkFirewallBlackHoleRouteDetectedViolation$ === "object");
assert(typeof NetworkFirewallInternetTrafficNotInspectedViolation$ === "object");
assert(typeof NetworkFirewallInvalidRouteConfigurationViolation$ === "object");
assert(typeof NetworkFirewallMissingExpectedRoutesViolation$ === "object");
assert(typeof NetworkFirewallMissingExpectedRTViolation$ === "object");
assert(typeof NetworkFirewallMissingFirewallViolation$ === "object");
assert(typeof NetworkFirewallMissingSubnetViolation$ === "object");
assert(typeof NetworkFirewallPolicy$ === "object");
assert(typeof NetworkFirewallPolicyDescription$ === "object");
assert(typeof NetworkFirewallPolicyModifiedViolation$ === "object");
assert(typeof NetworkFirewallStatefulRuleGroupOverride$ === "object");
assert(typeof NetworkFirewallUnexpectedFirewallRoutesViolation$ === "object");
assert(typeof NetworkFirewallUnexpectedGatewayRoutesViolation$ === "object");
assert(typeof OrganizationalUnitScope$ === "object");
assert(typeof PartialMatch$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicyComplianceDetail$ === "object");
assert(typeof PolicyComplianceStatus$ === "object");
assert(typeof PolicyOption$ === "object");
assert(typeof PolicySummary$ === "object");
assert(typeof PolicyTypeScope$ === "object");
assert(typeof PossibleRemediationAction$ === "object");
assert(typeof PossibleRemediationActions$ === "object");
assert(typeof ProtocolsListData$ === "object");
assert(typeof ProtocolsListDataSummary$ === "object");
assert(typeof PutAdminAccountRequest$ === "object");
assert(typeof PutAppsListRequest$ === "object");
assert(typeof PutAppsListResponse$ === "object");
assert(typeof PutNotificationChannelRequest$ === "object");
assert(typeof PutPolicyRequest$ === "object");
assert(typeof PutPolicyResponse$ === "object");
assert(typeof PutProtocolsListRequest$ === "object");
assert(typeof PutProtocolsListResponse$ === "object");
assert(typeof PutResourceSetRequest$ === "object");
assert(typeof PutResourceSetResponse$ === "object");
assert(typeof RegionScope$ === "object");
assert(typeof RemediationAction$ === "object");
assert(typeof RemediationActionWithOrder$ === "object");
assert(typeof ReplaceNetworkAclAssociationAction$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceSet$ === "object");
assert(typeof ResourceSetSummary$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof ResourceViolation$ === "object");
assert(typeof Route$ === "object");
assert(typeof RouteHasOutOfScopeEndpointViolation$ === "object");
assert(typeof SecurityGroupRemediationAction$ === "object");
assert(typeof SecurityGroupRuleDescription$ === "object");
assert(typeof SecurityServicePolicyData$ === "object");
assert(typeof StatefulEngineOptions$ === "object");
assert(typeof StatefulRuleGroup$ === "object");
assert(typeof StatelessRuleGroup$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof ThirdPartyFirewallFirewallPolicy$ === "object");
assert(typeof ThirdPartyFirewallMissingExpectedRouteTableViolation$ === "object");
assert(typeof ThirdPartyFirewallMissingFirewallViolation$ === "object");
assert(typeof ThirdPartyFirewallMissingSubnetViolation$ === "object");
assert(typeof ThirdPartyFirewallPolicy$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof ViolationDetail$ === "object");
assert(typeof WebACLHasIncompatibleConfigurationViolation$ === "object");
assert(typeof WebACLHasOutOfScopeResourcesViolation$ === "object");
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
assert(typeof InternalErrorException$ === "object");
assert(InvalidInputException.prototype instanceof FMSServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidOperationException.prototype instanceof FMSServiceException);
assert(typeof InvalidOperationException$ === "object");
assert(InvalidTypeException.prototype instanceof FMSServiceException);
assert(typeof InvalidTypeException$ === "object");
assert(LimitExceededException.prototype instanceof FMSServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof FMSServiceException);
assert(typeof ResourceNotFoundException$ === "object");
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
