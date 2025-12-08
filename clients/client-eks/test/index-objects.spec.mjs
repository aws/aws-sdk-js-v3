import {
  AMITypes,
  AccessDeniedException,
  AccessScopeType,
  AddonIssueCode,
  AddonStatus,
  ArgoCdRole,
  AssociateAccessPolicyCommand,
  AssociateEncryptionConfigCommand,
  AssociateIdentityProviderConfigCommand,
  AuthenticationMode,
  BadRequestException,
  CapabilityDeletePropagationPolicy,
  CapabilityIssueCode,
  CapabilityStatus,
  CapabilityType,
  CapacityTypes,
  Category,
  ClientException,
  ClusterIssueCode,
  ClusterStatus,
  ClusterVersionStatus,
  ConfigStatus,
  ConnectorConfigProvider,
  CreateAccessEntryCommand,
  CreateAddonCommand,
  CreateCapabilityCommand,
  CreateClusterCommand,
  CreateEksAnywhereSubscriptionCommand,
  CreateFargateProfileCommand,
  CreateNodegroupCommand,
  CreatePodIdentityAssociationCommand,
  DeleteAccessEntryCommand,
  DeleteAddonCommand,
  DeleteCapabilityCommand,
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
  DescribeCapabilityCommand,
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
  InvalidParameterException,
  InvalidRequestException,
  InvalidStateException,
  IpFamily,
  ListAccessEntriesCommand,
  ListAccessPoliciesCommand,
  ListAddonsCommand,
  ListAssociatedAccessPoliciesCommand,
  ListCapabilitiesCommand,
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
  NotFoundException,
  ProvisionedControlPlaneTier,
  RegisterClusterCommand,
  RepairAction,
  ResolveConflicts,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourcePropagationDelayException,
  ServerException,
  ServiceUnavailableException,
  SsoIdentityType,
  StartInsightsRefreshCommand,
  SupportType,
  TagResourceCommand,
  TaintEffect,
  ThrottlingException,
  UnsupportedAvailabilityZoneException,
  UntagResourceCommand,
  UpdateAccessEntryCommand,
  UpdateAddonCommand,
  UpdateCapabilityCommand,
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
  paginateListCapabilities,
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
assert(typeof EKSClient === "function");
assert(typeof EKS === "function");
// commands
assert(typeof AssociateAccessPolicyCommand === "function");
assert(typeof AssociateEncryptionConfigCommand === "function");
assert(typeof AssociateIdentityProviderConfigCommand === "function");
assert(typeof CreateAccessEntryCommand === "function");
assert(typeof CreateAddonCommand === "function");
assert(typeof CreateCapabilityCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateEksAnywhereSubscriptionCommand === "function");
assert(typeof CreateFargateProfileCommand === "function");
assert(typeof CreateNodegroupCommand === "function");
assert(typeof CreatePodIdentityAssociationCommand === "function");
assert(typeof DeleteAccessEntryCommand === "function");
assert(typeof DeleteAddonCommand === "function");
assert(typeof DeleteCapabilityCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteEksAnywhereSubscriptionCommand === "function");
assert(typeof DeleteFargateProfileCommand === "function");
assert(typeof DeleteNodegroupCommand === "function");
assert(typeof DeletePodIdentityAssociationCommand === "function");
assert(typeof DeregisterClusterCommand === "function");
assert(typeof DescribeAccessEntryCommand === "function");
assert(typeof DescribeAddonCommand === "function");
assert(typeof DescribeAddonConfigurationCommand === "function");
assert(typeof DescribeAddonVersionsCommand === "function");
assert(typeof DescribeCapabilityCommand === "function");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeClusterVersionsCommand === "function");
assert(typeof DescribeEksAnywhereSubscriptionCommand === "function");
assert(typeof DescribeFargateProfileCommand === "function");
assert(typeof DescribeIdentityProviderConfigCommand === "function");
assert(typeof DescribeInsightCommand === "function");
assert(typeof DescribeInsightsRefreshCommand === "function");
assert(typeof DescribeNodegroupCommand === "function");
assert(typeof DescribePodIdentityAssociationCommand === "function");
assert(typeof DescribeUpdateCommand === "function");
assert(typeof DisassociateAccessPolicyCommand === "function");
assert(typeof DisassociateIdentityProviderConfigCommand === "function");
assert(typeof ListAccessEntriesCommand === "function");
assert(typeof ListAccessPoliciesCommand === "function");
assert(typeof ListAddonsCommand === "function");
assert(typeof ListAssociatedAccessPoliciesCommand === "function");
assert(typeof ListCapabilitiesCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListEksAnywhereSubscriptionsCommand === "function");
assert(typeof ListFargateProfilesCommand === "function");
assert(typeof ListIdentityProviderConfigsCommand === "function");
assert(typeof ListInsightsCommand === "function");
assert(typeof ListNodegroupsCommand === "function");
assert(typeof ListPodIdentityAssociationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListUpdatesCommand === "function");
assert(typeof RegisterClusterCommand === "function");
assert(typeof StartInsightsRefreshCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccessEntryCommand === "function");
assert(typeof UpdateAddonCommand === "function");
assert(typeof UpdateCapabilityCommand === "function");
assert(typeof UpdateClusterConfigCommand === "function");
assert(typeof UpdateClusterVersionCommand === "function");
assert(typeof UpdateEksAnywhereSubscriptionCommand === "function");
assert(typeof UpdateNodegroupConfigCommand === "function");
assert(typeof UpdateNodegroupVersionCommand === "function");
assert(typeof UpdatePodIdentityAssociationCommand === "function");
// enums
assert(typeof AccessScopeType === "object");
assert(typeof AddonIssueCode === "object");
assert(typeof AddonStatus === "object");
assert(typeof AMITypes === "object");
assert(typeof ArgoCdRole === "object");
assert(typeof AuthenticationMode === "object");
assert(typeof CapabilityDeletePropagationPolicy === "object");
assert(typeof CapabilityIssueCode === "object");
assert(typeof CapabilityStatus === "object");
assert(typeof CapabilityType === "object");
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
assert(typeof SsoIdentityType === "object");
assert(typeof SupportType === "object");
assert(typeof TaintEffect === "object");
assert(typeof UpdateParamType === "object");
assert(typeof UpdateStatus === "object");
assert(typeof UpdateType === "object");
assert(typeof VersionStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof EKSServiceException);
assert(BadRequestException.prototype instanceof EKSServiceException);
assert(ClientException.prototype instanceof EKSServiceException);
assert(InvalidParameterException.prototype instanceof EKSServiceException);
assert(InvalidRequestException.prototype instanceof EKSServiceException);
assert(InvalidStateException.prototype instanceof EKSServiceException);
assert(NotFoundException.prototype instanceof EKSServiceException);
assert(ResourceInUseException.prototype instanceof EKSServiceException);
assert(ResourceLimitExceededException.prototype instanceof EKSServiceException);
assert(ResourceNotFoundException.prototype instanceof EKSServiceException);
assert(ResourcePropagationDelayException.prototype instanceof EKSServiceException);
assert(ServerException.prototype instanceof EKSServiceException);
assert(ServiceUnavailableException.prototype instanceof EKSServiceException);
assert(ThrottlingException.prototype instanceof EKSServiceException);
assert(UnsupportedAvailabilityZoneException.prototype instanceof EKSServiceException);
assert(EKSServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForAddonActive === "function");
assert(typeof waitForAddonDeleted === "function");
assert(typeof waitForClusterActive === "function");
assert(typeof waitForClusterDeleted === "function");
assert(typeof waitForFargateProfileActive === "function");
assert(typeof waitForFargateProfileDeleted === "function");
assert(typeof waitForNodegroupActive === "function");
assert(typeof waitForNodegroupDeleted === "function");
assert(typeof waitUntilAddonActive === "function");
assert(typeof waitUntilAddonDeleted === "function");
assert(typeof waitUntilClusterActive === "function");
assert(typeof waitUntilClusterDeleted === "function");
assert(typeof waitUntilFargateProfileActive === "function");
assert(typeof waitUntilFargateProfileDeleted === "function");
assert(typeof waitUntilNodegroupActive === "function");
assert(typeof waitUntilNodegroupDeleted === "function");
// paginators
assert(typeof paginateDescribeAddonVersions === "function");
assert(typeof paginateDescribeClusterVersions === "function");
assert(typeof paginateListAccessEntries === "function");
assert(typeof paginateListAccessPolicies === "function");
assert(typeof paginateListAddons === "function");
assert(typeof paginateListAssociatedAccessPolicies === "function");
assert(typeof paginateListCapabilities === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListEksAnywhereSubscriptions === "function");
assert(typeof paginateListFargateProfiles === "function");
assert(typeof paginateListIdentityProviderConfigs === "function");
assert(typeof paginateListInsights === "function");
assert(typeof paginateListNodegroups === "function");
assert(typeof paginateListPodIdentityAssociations === "function");
assert(typeof paginateListUpdates === "function");
console.log(`EKS index test passed.`);
