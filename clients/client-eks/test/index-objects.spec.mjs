import {
  AMITypes,
  AccessScopeType,
  AddonIssueCode,
  AddonStatus,
  AssociateAccessPolicyCommand,
  AssociateEncryptionConfigCommand,
  AssociateIdentityProviderConfigCommand,
  AuthenticationMode,
  CapacityTypes,
  Category,
  ClusterIssueCode,
  ClusterStatus,
  ClusterVersionStatus,
  ConfigStatus,
  ConnectorConfigProvider,
  CreateAccessEntryCommand,
  CreateAddonCommand,
  CreateClusterCommand,
  CreateEksAnywhereSubscriptionCommand,
  CreateFargateProfileCommand,
  CreateNodegroupCommand,
  CreatePodIdentityAssociationCommand,
  DeleteAccessEntryCommand,
  DeleteAddonCommand,
  DeleteClusterCommand,
  DeleteEksAnywhereSubscriptionCommand,
  DeleteFargateProfileCommand,
  DeleteNodegroupCommand,
  DeletePodIdentityAssociationCommand,
  DeregisterClusterCommand,
  DescribeAccessEntryCommand,
  DescribeAddonCommand,
  DescribeAddonConfigurationCommand,
  DescribeAddonVersionsCommand,
  DescribeClusterCommand,
  DescribeClusterVersionsCommand,
  DescribeEksAnywhereSubscriptionCommand,
  DescribeFargateProfileCommand,
  DescribeIdentityProviderConfigCommand,
  DescribeInsightCommand,
  DescribeInsightsRefreshCommand,
  DescribeNodegroupCommand,
  DescribePodIdentityAssociationCommand,
  DescribeUpdateCommand,
  DisassociateAccessPolicyCommand,
  DisassociateIdentityProviderConfigCommand,
  EKS,
  EKSClient,
  EKSServiceException,
  EksAnywhereSubscriptionLicenseType,
  EksAnywhereSubscriptionStatus,
  EksAnywhereSubscriptionTermUnit,
  ErrorCode,
  FargateProfileIssueCode,
  FargateProfileStatus,
  InsightStatusValue,
  InsightsRefreshStatus,
  IpFamily,
  ListAccessEntriesCommand,
  ListAccessPoliciesCommand,
  ListAddonsCommand,
  ListAssociatedAccessPoliciesCommand,
  ListClustersCommand,
  ListEksAnywhereSubscriptionsCommand,
  ListFargateProfilesCommand,
  ListIdentityProviderConfigsCommand,
  ListInsightsCommand,
  ListNodegroupsCommand,
  ListPodIdentityAssociationsCommand,
  ListTagsForResourceCommand,
  ListUpdatesCommand,
  LogType,
  NodegroupIssueCode,
  NodegroupStatus,
  NodegroupUpdateStrategies,
  ProvisionedControlPlaneTier,
  RegisterClusterCommand,
  RepairAction,
  ResolveConflicts,
  StartInsightsRefreshCommand,
  SupportType,
  TagResourceCommand,
  TaintEffect,
  UntagResourceCommand,
  UpdateAccessEntryCommand,
  UpdateAddonCommand,
  UpdateClusterConfigCommand,
  UpdateClusterVersionCommand,
  UpdateEksAnywhereSubscriptionCommand,
  UpdateNodegroupConfigCommand,
  UpdateNodegroupVersionCommand,
  UpdateParamType,
  UpdatePodIdentityAssociationCommand,
  UpdateStatus,
  UpdateType,
  VersionStatus,
  paginateDescribeAddonVersions,
  paginateDescribeClusterVersions,
  paginateListAccessEntries,
  paginateListAccessPolicies,
  paginateListAddons,
  paginateListAssociatedAccessPolicies,
  paginateListClusters,
  paginateListEksAnywhereSubscriptions,
  paginateListFargateProfiles,
  paginateListIdentityProviderConfigs,
  paginateListInsights,
  paginateListNodegroups,
  paginateListPodIdentityAssociations,
  paginateListUpdates,
  waitForAddonActive,
  waitForAddonDeleted,
  waitForClusterActive,
  waitForClusterDeleted,
  waitForFargateProfileActive,
  waitForFargateProfileDeleted,
  waitForNodegroupActive,
  waitForNodegroupDeleted,
  waitUntilAddonActive,
  waitUntilAddonDeleted,
  waitUntilClusterActive,
  waitUntilClusterDeleted,
  waitUntilFargateProfileActive,
  waitUntilFargateProfileDeleted,
  waitUntilNodegroupActive,
  waitUntilNodegroupDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EKSClient === "function")
assert(typeof EKS === "function")
// commands
assert(typeof AssociateAccessPolicyCommand === "function")
assert(typeof AssociateEncryptionConfigCommand === "function")
assert(typeof AssociateIdentityProviderConfigCommand === "function")
assert(typeof CreateAccessEntryCommand === "function")
assert(typeof CreateAddonCommand === "function")
assert(typeof CreateClusterCommand === "function")
assert(typeof CreateEksAnywhereSubscriptionCommand === "function")
assert(typeof CreateFargateProfileCommand === "function")
assert(typeof CreateNodegroupCommand === "function")
assert(typeof CreatePodIdentityAssociationCommand === "function")
assert(typeof DeleteAccessEntryCommand === "function")
assert(typeof DeleteAddonCommand === "function")
assert(typeof DeleteClusterCommand === "function")
assert(typeof DeleteEksAnywhereSubscriptionCommand === "function")
assert(typeof DeleteFargateProfileCommand === "function")
assert(typeof DeleteNodegroupCommand === "function")
assert(typeof DeletePodIdentityAssociationCommand === "function")
assert(typeof DeregisterClusterCommand === "function")
assert(typeof DescribeAccessEntryCommand === "function")
assert(typeof DescribeAddonCommand === "function")
assert(typeof DescribeAddonConfigurationCommand === "function")
assert(typeof DescribeAddonVersionsCommand === "function")
assert(typeof DescribeClusterCommand === "function")
assert(typeof DescribeClusterVersionsCommand === "function")
assert(typeof DescribeEksAnywhereSubscriptionCommand === "function")
assert(typeof DescribeFargateProfileCommand === "function")
assert(typeof DescribeIdentityProviderConfigCommand === "function")
assert(typeof DescribeInsightCommand === "function")
assert(typeof DescribeInsightsRefreshCommand === "function")
assert(typeof DescribeNodegroupCommand === "function")
assert(typeof DescribePodIdentityAssociationCommand === "function")
assert(typeof DescribeUpdateCommand === "function")
assert(typeof DisassociateAccessPolicyCommand === "function")
assert(typeof DisassociateIdentityProviderConfigCommand === "function")
assert(typeof ListAccessEntriesCommand === "function")
assert(typeof ListAccessPoliciesCommand === "function")
assert(typeof ListAddonsCommand === "function")
assert(typeof ListAssociatedAccessPoliciesCommand === "function")
assert(typeof ListClustersCommand === "function")
assert(typeof ListEksAnywhereSubscriptionsCommand === "function")
assert(typeof ListFargateProfilesCommand === "function")
assert(typeof ListIdentityProviderConfigsCommand === "function")
assert(typeof ListInsightsCommand === "function")
assert(typeof ListNodegroupsCommand === "function")
assert(typeof ListPodIdentityAssociationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListUpdatesCommand === "function")
assert(typeof RegisterClusterCommand === "function")
assert(typeof StartInsightsRefreshCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAccessEntryCommand === "function")
assert(typeof UpdateAddonCommand === "function")
assert(typeof UpdateClusterConfigCommand === "function")
assert(typeof UpdateClusterVersionCommand === "function")
assert(typeof UpdateEksAnywhereSubscriptionCommand === "function")
assert(typeof UpdateNodegroupConfigCommand === "function")
assert(typeof UpdateNodegroupVersionCommand === "function")
assert(typeof UpdatePodIdentityAssociationCommand === "function")
// enums
assert(typeof AccessScopeType === "object");
assert(typeof AddonIssueCode === "object");
assert(typeof AddonStatus === "object");
assert(typeof AMITypes === "object");
assert(typeof AuthenticationMode === "object");
assert(typeof CapacityTypes === "object");
assert(typeof Category === "object");
assert(typeof ClusterIssueCode === "object");
assert(typeof ClusterStatus === "object");
assert(typeof ClusterVersionStatus === "object");
assert(typeof ConfigStatus === "object");
assert(typeof ConnectorConfigProvider === "object");
assert(typeof EksAnywhereSubscriptionLicenseType === "object");
assert(typeof EksAnywhereSubscriptionStatus === "object");
assert(typeof EksAnywhereSubscriptionTermUnit === "object");
assert(typeof ErrorCode === "object");
assert(typeof FargateProfileIssueCode === "object");
assert(typeof FargateProfileStatus === "object");
assert(typeof InsightsRefreshStatus === "object");
assert(typeof InsightStatusValue === "object");
assert(typeof IpFamily === "object");
assert(typeof LogType === "object");
assert(typeof NodegroupIssueCode === "object");
assert(typeof NodegroupStatus === "object");
assert(typeof NodegroupUpdateStrategies === "object");
assert(typeof ProvisionedControlPlaneTier === "object");
assert(typeof RepairAction === "object");
assert(typeof ResolveConflicts === "object");
assert(typeof SupportType === "object");
assert(typeof TaintEffect === "object");
assert(typeof UpdateParamType === "object");
assert(typeof UpdateStatus === "object");
assert(typeof UpdateType === "object");
assert(typeof VersionStatus === "object");
// errors
assert(EKSServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForAddonActive === "function")
assert(typeof waitForAddonDeleted === "function")
assert(typeof waitForClusterActive === "function")
assert(typeof waitForClusterDeleted === "function")
assert(typeof waitForFargateProfileActive === "function")
assert(typeof waitForFargateProfileDeleted === "function")
assert(typeof waitForNodegroupActive === "function")
assert(typeof waitForNodegroupDeleted === "function")
assert(typeof waitUntilAddonActive === "function")
assert(typeof waitUntilAddonDeleted === "function")
assert(typeof waitUntilClusterActive === "function")
assert(typeof waitUntilClusterDeleted === "function")
assert(typeof waitUntilFargateProfileActive === "function")
assert(typeof waitUntilFargateProfileDeleted === "function")
assert(typeof waitUntilNodegroupActive === "function")
assert(typeof waitUntilNodegroupDeleted === "function")
// paginators
assert(typeof paginateDescribeAddonVersions === "function")
assert(typeof paginateDescribeClusterVersions === "function")
assert(typeof paginateListAccessEntries === "function")
assert(typeof paginateListAccessPolicies === "function")
assert(typeof paginateListAddons === "function")
assert(typeof paginateListAssociatedAccessPolicies === "function")
assert(typeof paginateListClusters === "function")
assert(typeof paginateListEksAnywhereSubscriptions === "function")
assert(typeof paginateListFargateProfiles === "function")
assert(typeof paginateListIdentityProviderConfigs === "function")
assert(typeof paginateListInsights === "function")
assert(typeof paginateListNodegroups === "function")
assert(typeof paginateListPodIdentityAssociations === "function")
assert(typeof paginateListUpdates === "function")
console.log(`EKS index test passed.`);
