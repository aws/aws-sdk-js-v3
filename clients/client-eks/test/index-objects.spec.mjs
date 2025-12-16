import {
  AMITypes,
  AccessConfigResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessEntry$,
  AccessPolicy$,
  AccessScope$,
  AccessScopeType,
  Addon$,
  AddonCompatibilityDetail$,
  AddonHealth$,
  AddonInfo$,
  AddonIssue$,
  AddonIssueCode,
  AddonNamespaceConfigRequest$,
  AddonNamespaceConfigResponse$,
  AddonPodIdentityAssociations$,
  AddonPodIdentityConfiguration$,
  AddonStatus,
  AddonVersionInfo$,
  ArgoCdAwsIdcConfigRequest$,
  ArgoCdAwsIdcConfigResponse$,
  ArgoCdConfigRequest$,
  ArgoCdConfigResponse$,
  ArgoCdNetworkAccessConfigRequest$,
  ArgoCdNetworkAccessConfigResponse$,
  ArgoCdRole,
  ArgoCdRoleMapping$,
  AssociateAccessPolicy$,
  AssociateAccessPolicyCommand,
  AssociateAccessPolicyRequest$,
  AssociateAccessPolicyResponse$,
  AssociateEncryptionConfig$,
  AssociateEncryptionConfigCommand,
  AssociateEncryptionConfigRequest$,
  AssociateEncryptionConfigResponse$,
  AssociateIdentityProviderConfig$,
  AssociateIdentityProviderConfigCommand,
  AssociateIdentityProviderConfigRequest$,
  AssociateIdentityProviderConfigResponse$,
  AssociatedAccessPolicy$,
  AuthenticationMode,
  AutoScalingGroup$,
  BadRequestException,
  BadRequestException$,
  BlockStorage$,
  Capability$,
  CapabilityConfigurationRequest$,
  CapabilityConfigurationResponse$,
  CapabilityDeletePropagationPolicy,
  CapabilityHealth$,
  CapabilityIssue$,
  CapabilityIssueCode,
  CapabilityStatus,
  CapabilitySummary$,
  CapabilityType,
  CapacityTypes,
  Category,
  Certificate$,
  ClientException,
  ClientException$,
  ClientStat$,
  Cluster$,
  ClusterHealth$,
  ClusterIssue$,
  ClusterIssueCode,
  ClusterStatus,
  ClusterVersionInformation$,
  ClusterVersionStatus,
  Compatibility$,
  ComputeConfigRequest$,
  ComputeConfigResponse$,
  ConfigStatus,
  ConnectorConfigProvider,
  ConnectorConfigRequest$,
  ConnectorConfigResponse$,
  ControlPlanePlacementRequest$,
  ControlPlanePlacementResponse$,
  ControlPlaneScalingConfig$,
  CreateAccessConfigRequest$,
  CreateAccessEntry$,
  CreateAccessEntryCommand,
  CreateAccessEntryRequest$,
  CreateAccessEntryResponse$,
  CreateAddon$,
  CreateAddonCommand,
  CreateAddonRequest$,
  CreateAddonResponse$,
  CreateCapability$,
  CreateCapabilityCommand,
  CreateCapabilityRequest$,
  CreateCapabilityResponse$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateEksAnywhereSubscription$,
  CreateEksAnywhereSubscriptionCommand,
  CreateEksAnywhereSubscriptionRequest$,
  CreateEksAnywhereSubscriptionResponse$,
  CreateFargateProfile$,
  CreateFargateProfileCommand,
  CreateFargateProfileRequest$,
  CreateFargateProfileResponse$,
  CreateNodegroup$,
  CreateNodegroupCommand,
  CreateNodegroupRequest$,
  CreateNodegroupResponse$,
  CreatePodIdentityAssociation$,
  CreatePodIdentityAssociationCommand,
  CreatePodIdentityAssociationRequest$,
  CreatePodIdentityAssociationResponse$,
  DeleteAccessEntry$,
  DeleteAccessEntryCommand,
  DeleteAccessEntryRequest$,
  DeleteAccessEntryResponse$,
  DeleteAddon$,
  DeleteAddonCommand,
  DeleteAddonRequest$,
  DeleteAddonResponse$,
  DeleteCapability$,
  DeleteCapabilityCommand,
  DeleteCapabilityRequest$,
  DeleteCapabilityResponse$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteEksAnywhereSubscription$,
  DeleteEksAnywhereSubscriptionCommand,
  DeleteEksAnywhereSubscriptionRequest$,
  DeleteEksAnywhereSubscriptionResponse$,
  DeleteFargateProfile$,
  DeleteFargateProfileCommand,
  DeleteFargateProfileRequest$,
  DeleteFargateProfileResponse$,
  DeleteNodegroup$,
  DeleteNodegroupCommand,
  DeleteNodegroupRequest$,
  DeleteNodegroupResponse$,
  DeletePodIdentityAssociation$,
  DeletePodIdentityAssociationCommand,
  DeletePodIdentityAssociationRequest$,
  DeletePodIdentityAssociationResponse$,
  DeprecationDetail$,
  DeregisterCluster$,
  DeregisterClusterCommand,
  DeregisterClusterRequest$,
  DeregisterClusterResponse$,
  DescribeAccessEntry$,
  DescribeAccessEntryCommand,
  DescribeAccessEntryRequest$,
  DescribeAccessEntryResponse$,
  DescribeAddon$,
  DescribeAddonCommand,
  DescribeAddonConfiguration$,
  DescribeAddonConfigurationCommand,
  DescribeAddonConfigurationRequest$,
  DescribeAddonConfigurationResponse$,
  DescribeAddonRequest$,
  DescribeAddonResponse$,
  DescribeAddonVersions$,
  DescribeAddonVersionsCommand,
  DescribeAddonVersionsRequest$,
  DescribeAddonVersionsResponse$,
  DescribeCapability$,
  DescribeCapabilityCommand,
  DescribeCapabilityRequest$,
  DescribeCapabilityResponse$,
  DescribeCluster$,
  DescribeClusterCommand,
  DescribeClusterRequest$,
  DescribeClusterResponse$,
  DescribeClusterVersions$,
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsRequest$,
  DescribeClusterVersionsResponse$,
  DescribeEksAnywhereSubscription$,
  DescribeEksAnywhereSubscriptionCommand,
  DescribeEksAnywhereSubscriptionRequest$,
  DescribeEksAnywhereSubscriptionResponse$,
  DescribeFargateProfile$,
  DescribeFargateProfileCommand,
  DescribeFargateProfileRequest$,
  DescribeFargateProfileResponse$,
  DescribeIdentityProviderConfig$,
  DescribeIdentityProviderConfigCommand,
  DescribeIdentityProviderConfigRequest$,
  DescribeIdentityProviderConfigResponse$,
  DescribeInsight$,
  DescribeInsightCommand,
  DescribeInsightRequest$,
  DescribeInsightResponse$,
  DescribeInsightsRefresh$,
  DescribeInsightsRefreshCommand,
  DescribeInsightsRefreshRequest$,
  DescribeInsightsRefreshResponse$,
  DescribeNodegroup$,
  DescribeNodegroupCommand,
  DescribeNodegroupRequest$,
  DescribeNodegroupResponse$,
  DescribePodIdentityAssociation$,
  DescribePodIdentityAssociationCommand,
  DescribePodIdentityAssociationRequest$,
  DescribePodIdentityAssociationResponse$,
  DescribeUpdate$,
  DescribeUpdateCommand,
  DescribeUpdateRequest$,
  DescribeUpdateResponse$,
  DisassociateAccessPolicy$,
  DisassociateAccessPolicyCommand,
  DisassociateAccessPolicyRequest$,
  DisassociateAccessPolicyResponse$,
  DisassociateIdentityProviderConfig$,
  DisassociateIdentityProviderConfigCommand,
  DisassociateIdentityProviderConfigRequest$,
  DisassociateIdentityProviderConfigResponse$,
  EKS,
  EKSClient,
  EKSServiceException,
  EksAnywhereSubscription$,
  EksAnywhereSubscriptionLicenseType,
  EksAnywhereSubscriptionStatus,
  EksAnywhereSubscriptionTerm$,
  EksAnywhereSubscriptionTermUnit,
  ElasticLoadBalancing$,
  EncryptionConfig$,
  ErrorCode,
  ErrorDetail$,
  FargateProfile$,
  FargateProfileHealth$,
  FargateProfileIssue$,
  FargateProfileIssueCode,
  FargateProfileSelector$,
  FargateProfileStatus,
  Identity$,
  IdentityProviderConfig$,
  IdentityProviderConfigResponse$,
  Insight$,
  InsightCategorySpecificSummary$,
  InsightResourceDetail$,
  InsightStatus$,
  InsightStatusValue,
  InsightSummary$,
  InsightsFilter$,
  InsightsRefreshStatus,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidStateException,
  InvalidStateException$,
  IpFamily,
  Issue$,
  KubernetesNetworkConfigRequest$,
  KubernetesNetworkConfigResponse$,
  LaunchTemplateSpecification$,
  License$,
  ListAccessEntries$,
  ListAccessEntriesCommand,
  ListAccessEntriesRequest$,
  ListAccessEntriesResponse$,
  ListAccessPolicies$,
  ListAccessPoliciesCommand,
  ListAccessPoliciesRequest$,
  ListAccessPoliciesResponse$,
  ListAddons$,
  ListAddonsCommand,
  ListAddonsRequest$,
  ListAddonsResponse$,
  ListAssociatedAccessPolicies$,
  ListAssociatedAccessPoliciesCommand,
  ListAssociatedAccessPoliciesRequest$,
  ListAssociatedAccessPoliciesResponse$,
  ListCapabilities$,
  ListCapabilitiesCommand,
  ListCapabilitiesRequest$,
  ListCapabilitiesResponse$,
  ListClusters$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResponse$,
  ListEksAnywhereSubscriptions$,
  ListEksAnywhereSubscriptionsCommand,
  ListEksAnywhereSubscriptionsRequest$,
  ListEksAnywhereSubscriptionsResponse$,
  ListFargateProfiles$,
  ListFargateProfilesCommand,
  ListFargateProfilesRequest$,
  ListFargateProfilesResponse$,
  ListIdentityProviderConfigs$,
  ListIdentityProviderConfigsCommand,
  ListIdentityProviderConfigsRequest$,
  ListIdentityProviderConfigsResponse$,
  ListInsights$,
  ListInsightsCommand,
  ListInsightsRequest$,
  ListInsightsResponse$,
  ListNodegroups$,
  ListNodegroupsCommand,
  ListNodegroupsRequest$,
  ListNodegroupsResponse$,
  ListPodIdentityAssociations$,
  ListPodIdentityAssociationsCommand,
  ListPodIdentityAssociationsRequest$,
  ListPodIdentityAssociationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUpdates$,
  ListUpdatesCommand,
  ListUpdatesRequest$,
  ListUpdatesResponse$,
  LogSetup$,
  LogType,
  Logging$,
  MarketplaceInformation$,
  NodeRepairConfig$,
  NodeRepairConfigOverrides$,
  Nodegroup$,
  NodegroupHealth$,
  NodegroupIssueCode,
  NodegroupResources$,
  NodegroupScalingConfig$,
  NodegroupStatus,
  NodegroupUpdateConfig$,
  NodegroupUpdateStrategies,
  NotFoundException,
  NotFoundException$,
  OIDC$,
  OidcIdentityProviderConfig$,
  OidcIdentityProviderConfigRequest$,
  OutpostConfigRequest$,
  OutpostConfigResponse$,
  PodIdentityAssociation$,
  PodIdentityAssociationSummary$,
  Provider$,
  ProvisionedControlPlaneTier,
  RegisterCluster$,
  RegisterClusterCommand,
  RegisterClusterRequest$,
  RegisterClusterResponse$,
  RemoteAccessConfig$,
  RemoteNetworkConfigRequest$,
  RemoteNetworkConfigResponse$,
  RemoteNodeNetwork$,
  RemotePodNetwork$,
  RepairAction,
  ResolveConflicts,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePropagationDelayException,
  ResourcePropagationDelayException$,
  ServerException,
  ServerException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SsoIdentity$,
  SsoIdentityType,
  StartInsightsRefresh$,
  StartInsightsRefreshCommand,
  StartInsightsRefreshRequest$,
  StartInsightsRefreshResponse$,
  StorageConfigRequest$,
  StorageConfigResponse$,
  SupportType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Taint$,
  TaintEffect,
  ThrottlingException,
  ThrottlingException$,
  UnsupportedAvailabilityZoneException,
  UnsupportedAvailabilityZoneException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  Update$,
  UpdateAccessConfigRequest$,
  UpdateAccessEntry$,
  UpdateAccessEntryCommand,
  UpdateAccessEntryRequest$,
  UpdateAccessEntryResponse$,
  UpdateAddon$,
  UpdateAddonCommand,
  UpdateAddonRequest$,
  UpdateAddonResponse$,
  UpdateArgoCdConfig$,
  UpdateCapability$,
  UpdateCapabilityCommand,
  UpdateCapabilityConfiguration$,
  UpdateCapabilityRequest$,
  UpdateCapabilityResponse$,
  UpdateClusterConfig$,
  UpdateClusterConfigCommand,
  UpdateClusterConfigRequest$,
  UpdateClusterConfigResponse$,
  UpdateClusterVersion$,
  UpdateClusterVersionCommand,
  UpdateClusterVersionRequest$,
  UpdateClusterVersionResponse$,
  UpdateEksAnywhereSubscription$,
  UpdateEksAnywhereSubscriptionCommand,
  UpdateEksAnywhereSubscriptionRequest$,
  UpdateEksAnywhereSubscriptionResponse$,
  UpdateLabelsPayload$,
  UpdateNodegroupConfig$,
  UpdateNodegroupConfigCommand,
  UpdateNodegroupConfigRequest$,
  UpdateNodegroupConfigResponse$,
  UpdateNodegroupVersion$,
  UpdateNodegroupVersionCommand,
  UpdateNodegroupVersionRequest$,
  UpdateNodegroupVersionResponse$,
  UpdateParam$,
  UpdateParamType,
  UpdatePodIdentityAssociation$,
  UpdatePodIdentityAssociationCommand,
  UpdatePodIdentityAssociationRequest$,
  UpdatePodIdentityAssociationResponse$,
  UpdateRoleMappings$,
  UpdateStatus,
  UpdateTaintsPayload$,
  UpdateType,
  UpgradePolicyRequest$,
  UpgradePolicyResponse$,
  VersionStatus,
  VpcConfigRequest$,
  VpcConfigResponse$,
  ZonalShiftConfigRequest$,
  ZonalShiftConfigResponse$,
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
assert(typeof AssociateAccessPolicy$ === "object");
assert(typeof AssociateEncryptionConfigCommand === "function");
assert(typeof AssociateEncryptionConfig$ === "object");
assert(typeof AssociateIdentityProviderConfigCommand === "function");
assert(typeof AssociateIdentityProviderConfig$ === "object");
assert(typeof CreateAccessEntryCommand === "function");
assert(typeof CreateAccessEntry$ === "object");
assert(typeof CreateAddonCommand === "function");
assert(typeof CreateAddon$ === "object");
assert(typeof CreateCapabilityCommand === "function");
assert(typeof CreateCapability$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateEksAnywhereSubscriptionCommand === "function");
assert(typeof CreateEksAnywhereSubscription$ === "object");
assert(typeof CreateFargateProfileCommand === "function");
assert(typeof CreateFargateProfile$ === "object");
assert(typeof CreateNodegroupCommand === "function");
assert(typeof CreateNodegroup$ === "object");
assert(typeof CreatePodIdentityAssociationCommand === "function");
assert(typeof CreatePodIdentityAssociation$ === "object");
assert(typeof DeleteAccessEntryCommand === "function");
assert(typeof DeleteAccessEntry$ === "object");
assert(typeof DeleteAddonCommand === "function");
assert(typeof DeleteAddon$ === "object");
assert(typeof DeleteCapabilityCommand === "function");
assert(typeof DeleteCapability$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteEksAnywhereSubscriptionCommand === "function");
assert(typeof DeleteEksAnywhereSubscription$ === "object");
assert(typeof DeleteFargateProfileCommand === "function");
assert(typeof DeleteFargateProfile$ === "object");
assert(typeof DeleteNodegroupCommand === "function");
assert(typeof DeleteNodegroup$ === "object");
assert(typeof DeletePodIdentityAssociationCommand === "function");
assert(typeof DeletePodIdentityAssociation$ === "object");
assert(typeof DeregisterClusterCommand === "function");
assert(typeof DeregisterCluster$ === "object");
assert(typeof DescribeAccessEntryCommand === "function");
assert(typeof DescribeAccessEntry$ === "object");
assert(typeof DescribeAddonCommand === "function");
assert(typeof DescribeAddon$ === "object");
assert(typeof DescribeAddonConfigurationCommand === "function");
assert(typeof DescribeAddonConfiguration$ === "object");
assert(typeof DescribeAddonVersionsCommand === "function");
assert(typeof DescribeAddonVersions$ === "object");
assert(typeof DescribeCapabilityCommand === "function");
assert(typeof DescribeCapability$ === "object");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeCluster$ === "object");
assert(typeof DescribeClusterVersionsCommand === "function");
assert(typeof DescribeClusterVersions$ === "object");
assert(typeof DescribeEksAnywhereSubscriptionCommand === "function");
assert(typeof DescribeEksAnywhereSubscription$ === "object");
assert(typeof DescribeFargateProfileCommand === "function");
assert(typeof DescribeFargateProfile$ === "object");
assert(typeof DescribeIdentityProviderConfigCommand === "function");
assert(typeof DescribeIdentityProviderConfig$ === "object");
assert(typeof DescribeInsightCommand === "function");
assert(typeof DescribeInsight$ === "object");
assert(typeof DescribeInsightsRefreshCommand === "function");
assert(typeof DescribeInsightsRefresh$ === "object");
assert(typeof DescribeNodegroupCommand === "function");
assert(typeof DescribeNodegroup$ === "object");
assert(typeof DescribePodIdentityAssociationCommand === "function");
assert(typeof DescribePodIdentityAssociation$ === "object");
assert(typeof DescribeUpdateCommand === "function");
assert(typeof DescribeUpdate$ === "object");
assert(typeof DisassociateAccessPolicyCommand === "function");
assert(typeof DisassociateAccessPolicy$ === "object");
assert(typeof DisassociateIdentityProviderConfigCommand === "function");
assert(typeof DisassociateIdentityProviderConfig$ === "object");
assert(typeof ListAccessEntriesCommand === "function");
assert(typeof ListAccessEntries$ === "object");
assert(typeof ListAccessPoliciesCommand === "function");
assert(typeof ListAccessPolicies$ === "object");
assert(typeof ListAddonsCommand === "function");
assert(typeof ListAddons$ === "object");
assert(typeof ListAssociatedAccessPoliciesCommand === "function");
assert(typeof ListAssociatedAccessPolicies$ === "object");
assert(typeof ListCapabilitiesCommand === "function");
assert(typeof ListCapabilities$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListEksAnywhereSubscriptionsCommand === "function");
assert(typeof ListEksAnywhereSubscriptions$ === "object");
assert(typeof ListFargateProfilesCommand === "function");
assert(typeof ListFargateProfiles$ === "object");
assert(typeof ListIdentityProviderConfigsCommand === "function");
assert(typeof ListIdentityProviderConfigs$ === "object");
assert(typeof ListInsightsCommand === "function");
assert(typeof ListInsights$ === "object");
assert(typeof ListNodegroupsCommand === "function");
assert(typeof ListNodegroups$ === "object");
assert(typeof ListPodIdentityAssociationsCommand === "function");
assert(typeof ListPodIdentityAssociations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUpdatesCommand === "function");
assert(typeof ListUpdates$ === "object");
assert(typeof RegisterClusterCommand === "function");
assert(typeof RegisterCluster$ === "object");
assert(typeof StartInsightsRefreshCommand === "function");
assert(typeof StartInsightsRefresh$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessEntryCommand === "function");
assert(typeof UpdateAccessEntry$ === "object");
assert(typeof UpdateAddonCommand === "function");
assert(typeof UpdateAddon$ === "object");
assert(typeof UpdateCapabilityCommand === "function");
assert(typeof UpdateCapability$ === "object");
assert(typeof UpdateClusterConfigCommand === "function");
assert(typeof UpdateClusterConfig$ === "object");
assert(typeof UpdateClusterVersionCommand === "function");
assert(typeof UpdateClusterVersion$ === "object");
assert(typeof UpdateEksAnywhereSubscriptionCommand === "function");
assert(typeof UpdateEksAnywhereSubscription$ === "object");
assert(typeof UpdateNodegroupConfigCommand === "function");
assert(typeof UpdateNodegroupConfig$ === "object");
assert(typeof UpdateNodegroupVersionCommand === "function");
assert(typeof UpdateNodegroupVersion$ === "object");
assert(typeof UpdatePodIdentityAssociationCommand === "function");
assert(typeof UpdatePodIdentityAssociation$ === "object");
// structural schemas
assert(typeof AccessConfigResponse$ === "object");
assert(typeof AccessEntry$ === "object");
assert(typeof AccessPolicy$ === "object");
assert(typeof AccessScope$ === "object");
assert(typeof Addon$ === "object");
assert(typeof AddonCompatibilityDetail$ === "object");
assert(typeof AddonHealth$ === "object");
assert(typeof AddonInfo$ === "object");
assert(typeof AddonIssue$ === "object");
assert(typeof AddonNamespaceConfigRequest$ === "object");
assert(typeof AddonNamespaceConfigResponse$ === "object");
assert(typeof AddonPodIdentityAssociations$ === "object");
assert(typeof AddonPodIdentityConfiguration$ === "object");
assert(typeof AddonVersionInfo$ === "object");
assert(typeof ArgoCdAwsIdcConfigRequest$ === "object");
assert(typeof ArgoCdAwsIdcConfigResponse$ === "object");
assert(typeof ArgoCdConfigRequest$ === "object");
assert(typeof ArgoCdConfigResponse$ === "object");
assert(typeof ArgoCdNetworkAccessConfigRequest$ === "object");
assert(typeof ArgoCdNetworkAccessConfigResponse$ === "object");
assert(typeof ArgoCdRoleMapping$ === "object");
assert(typeof AssociateAccessPolicyRequest$ === "object");
assert(typeof AssociateAccessPolicyResponse$ === "object");
assert(typeof AssociatedAccessPolicy$ === "object");
assert(typeof AssociateEncryptionConfigRequest$ === "object");
assert(typeof AssociateEncryptionConfigResponse$ === "object");
assert(typeof AssociateIdentityProviderConfigRequest$ === "object");
assert(typeof AssociateIdentityProviderConfigResponse$ === "object");
assert(typeof AutoScalingGroup$ === "object");
assert(typeof BlockStorage$ === "object");
assert(typeof Capability$ === "object");
assert(typeof CapabilityConfigurationRequest$ === "object");
assert(typeof CapabilityConfigurationResponse$ === "object");
assert(typeof CapabilityHealth$ === "object");
assert(typeof CapabilityIssue$ === "object");
assert(typeof CapabilitySummary$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof ClientStat$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterHealth$ === "object");
assert(typeof ClusterIssue$ === "object");
assert(typeof ClusterVersionInformation$ === "object");
assert(typeof Compatibility$ === "object");
assert(typeof ComputeConfigRequest$ === "object");
assert(typeof ComputeConfigResponse$ === "object");
assert(typeof ConnectorConfigRequest$ === "object");
assert(typeof ConnectorConfigResponse$ === "object");
assert(typeof ControlPlanePlacementRequest$ === "object");
assert(typeof ControlPlanePlacementResponse$ === "object");
assert(typeof ControlPlaneScalingConfig$ === "object");
assert(typeof CreateAccessConfigRequest$ === "object");
assert(typeof CreateAccessEntryRequest$ === "object");
assert(typeof CreateAccessEntryResponse$ === "object");
assert(typeof CreateAddonRequest$ === "object");
assert(typeof CreateAddonResponse$ === "object");
assert(typeof CreateCapabilityRequest$ === "object");
assert(typeof CreateCapabilityResponse$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateEksAnywhereSubscriptionRequest$ === "object");
assert(typeof CreateEksAnywhereSubscriptionResponse$ === "object");
assert(typeof CreateFargateProfileRequest$ === "object");
assert(typeof CreateFargateProfileResponse$ === "object");
assert(typeof CreateNodegroupRequest$ === "object");
assert(typeof CreateNodegroupResponse$ === "object");
assert(typeof CreatePodIdentityAssociationRequest$ === "object");
assert(typeof CreatePodIdentityAssociationResponse$ === "object");
assert(typeof DeleteAccessEntryRequest$ === "object");
assert(typeof DeleteAccessEntryResponse$ === "object");
assert(typeof DeleteAddonRequest$ === "object");
assert(typeof DeleteAddonResponse$ === "object");
assert(typeof DeleteCapabilityRequest$ === "object");
assert(typeof DeleteCapabilityResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteEksAnywhereSubscriptionRequest$ === "object");
assert(typeof DeleteEksAnywhereSubscriptionResponse$ === "object");
assert(typeof DeleteFargateProfileRequest$ === "object");
assert(typeof DeleteFargateProfileResponse$ === "object");
assert(typeof DeleteNodegroupRequest$ === "object");
assert(typeof DeleteNodegroupResponse$ === "object");
assert(typeof DeletePodIdentityAssociationRequest$ === "object");
assert(typeof DeletePodIdentityAssociationResponse$ === "object");
assert(typeof DeprecationDetail$ === "object");
assert(typeof DeregisterClusterRequest$ === "object");
assert(typeof DeregisterClusterResponse$ === "object");
assert(typeof DescribeAccessEntryRequest$ === "object");
assert(typeof DescribeAccessEntryResponse$ === "object");
assert(typeof DescribeAddonConfigurationRequest$ === "object");
assert(typeof DescribeAddonConfigurationResponse$ === "object");
assert(typeof DescribeAddonRequest$ === "object");
assert(typeof DescribeAddonResponse$ === "object");
assert(typeof DescribeAddonVersionsRequest$ === "object");
assert(typeof DescribeAddonVersionsResponse$ === "object");
assert(typeof DescribeCapabilityRequest$ === "object");
assert(typeof DescribeCapabilityResponse$ === "object");
assert(typeof DescribeClusterRequest$ === "object");
assert(typeof DescribeClusterResponse$ === "object");
assert(typeof DescribeClusterVersionsRequest$ === "object");
assert(typeof DescribeClusterVersionsResponse$ === "object");
assert(typeof DescribeEksAnywhereSubscriptionRequest$ === "object");
assert(typeof DescribeEksAnywhereSubscriptionResponse$ === "object");
assert(typeof DescribeFargateProfileRequest$ === "object");
assert(typeof DescribeFargateProfileResponse$ === "object");
assert(typeof DescribeIdentityProviderConfigRequest$ === "object");
assert(typeof DescribeIdentityProviderConfigResponse$ === "object");
assert(typeof DescribeInsightRequest$ === "object");
assert(typeof DescribeInsightResponse$ === "object");
assert(typeof DescribeInsightsRefreshRequest$ === "object");
assert(typeof DescribeInsightsRefreshResponse$ === "object");
assert(typeof DescribeNodegroupRequest$ === "object");
assert(typeof DescribeNodegroupResponse$ === "object");
assert(typeof DescribePodIdentityAssociationRequest$ === "object");
assert(typeof DescribePodIdentityAssociationResponse$ === "object");
assert(typeof DescribeUpdateRequest$ === "object");
assert(typeof DescribeUpdateResponse$ === "object");
assert(typeof DisassociateAccessPolicyRequest$ === "object");
assert(typeof DisassociateAccessPolicyResponse$ === "object");
assert(typeof DisassociateIdentityProviderConfigRequest$ === "object");
assert(typeof DisassociateIdentityProviderConfigResponse$ === "object");
assert(typeof EksAnywhereSubscription$ === "object");
assert(typeof EksAnywhereSubscriptionTerm$ === "object");
assert(typeof ElasticLoadBalancing$ === "object");
assert(typeof EncryptionConfig$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof FargateProfile$ === "object");
assert(typeof FargateProfileHealth$ === "object");
assert(typeof FargateProfileIssue$ === "object");
assert(typeof FargateProfileSelector$ === "object");
assert(typeof Identity$ === "object");
assert(typeof IdentityProviderConfig$ === "object");
assert(typeof IdentityProviderConfigResponse$ === "object");
assert(typeof Insight$ === "object");
assert(typeof InsightCategorySpecificSummary$ === "object");
assert(typeof InsightResourceDetail$ === "object");
assert(typeof InsightsFilter$ === "object");
assert(typeof InsightStatus$ === "object");
assert(typeof InsightSummary$ === "object");
assert(typeof Issue$ === "object");
assert(typeof KubernetesNetworkConfigRequest$ === "object");
assert(typeof KubernetesNetworkConfigResponse$ === "object");
assert(typeof LaunchTemplateSpecification$ === "object");
assert(typeof License$ === "object");
assert(typeof ListAccessEntriesRequest$ === "object");
assert(typeof ListAccessEntriesResponse$ === "object");
assert(typeof ListAccessPoliciesRequest$ === "object");
assert(typeof ListAccessPoliciesResponse$ === "object");
assert(typeof ListAddonsRequest$ === "object");
assert(typeof ListAddonsResponse$ === "object");
assert(typeof ListAssociatedAccessPoliciesRequest$ === "object");
assert(typeof ListAssociatedAccessPoliciesResponse$ === "object");
assert(typeof ListCapabilitiesRequest$ === "object");
assert(typeof ListCapabilitiesResponse$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResponse$ === "object");
assert(typeof ListEksAnywhereSubscriptionsRequest$ === "object");
assert(typeof ListEksAnywhereSubscriptionsResponse$ === "object");
assert(typeof ListFargateProfilesRequest$ === "object");
assert(typeof ListFargateProfilesResponse$ === "object");
assert(typeof ListIdentityProviderConfigsRequest$ === "object");
assert(typeof ListIdentityProviderConfigsResponse$ === "object");
assert(typeof ListInsightsRequest$ === "object");
assert(typeof ListInsightsResponse$ === "object");
assert(typeof ListNodegroupsRequest$ === "object");
assert(typeof ListNodegroupsResponse$ === "object");
assert(typeof ListPodIdentityAssociationsRequest$ === "object");
assert(typeof ListPodIdentityAssociationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUpdatesRequest$ === "object");
assert(typeof ListUpdatesResponse$ === "object");
assert(typeof Logging$ === "object");
assert(typeof LogSetup$ === "object");
assert(typeof MarketplaceInformation$ === "object");
assert(typeof Nodegroup$ === "object");
assert(typeof NodegroupHealth$ === "object");
assert(typeof NodegroupResources$ === "object");
assert(typeof NodegroupScalingConfig$ === "object");
assert(typeof NodegroupUpdateConfig$ === "object");
assert(typeof NodeRepairConfig$ === "object");
assert(typeof NodeRepairConfigOverrides$ === "object");
assert(typeof OIDC$ === "object");
assert(typeof OidcIdentityProviderConfig$ === "object");
assert(typeof OidcIdentityProviderConfigRequest$ === "object");
assert(typeof OutpostConfigRequest$ === "object");
assert(typeof OutpostConfigResponse$ === "object");
assert(typeof PodIdentityAssociation$ === "object");
assert(typeof PodIdentityAssociationSummary$ === "object");
assert(typeof Provider$ === "object");
assert(typeof RegisterClusterRequest$ === "object");
assert(typeof RegisterClusterResponse$ === "object");
assert(typeof RemoteAccessConfig$ === "object");
assert(typeof RemoteNetworkConfigRequest$ === "object");
assert(typeof RemoteNetworkConfigResponse$ === "object");
assert(typeof RemoteNodeNetwork$ === "object");
assert(typeof RemotePodNetwork$ === "object");
assert(typeof SsoIdentity$ === "object");
assert(typeof StartInsightsRefreshRequest$ === "object");
assert(typeof StartInsightsRefreshResponse$ === "object");
assert(typeof StorageConfigRequest$ === "object");
assert(typeof StorageConfigResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Taint$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof Update$ === "object");
assert(typeof UpdateAccessConfigRequest$ === "object");
assert(typeof UpdateAccessEntryRequest$ === "object");
assert(typeof UpdateAccessEntryResponse$ === "object");
assert(typeof UpdateAddonRequest$ === "object");
assert(typeof UpdateAddonResponse$ === "object");
assert(typeof UpdateArgoCdConfig$ === "object");
assert(typeof UpdateCapabilityConfiguration$ === "object");
assert(typeof UpdateCapabilityRequest$ === "object");
assert(typeof UpdateCapabilityResponse$ === "object");
assert(typeof UpdateClusterConfigRequest$ === "object");
assert(typeof UpdateClusterConfigResponse$ === "object");
assert(typeof UpdateClusterVersionRequest$ === "object");
assert(typeof UpdateClusterVersionResponse$ === "object");
assert(typeof UpdateEksAnywhereSubscriptionRequest$ === "object");
assert(typeof UpdateEksAnywhereSubscriptionResponse$ === "object");
assert(typeof UpdateLabelsPayload$ === "object");
assert(typeof UpdateNodegroupConfigRequest$ === "object");
assert(typeof UpdateNodegroupConfigResponse$ === "object");
assert(typeof UpdateNodegroupVersionRequest$ === "object");
assert(typeof UpdateNodegroupVersionResponse$ === "object");
assert(typeof UpdateParam$ === "object");
assert(typeof UpdatePodIdentityAssociationRequest$ === "object");
assert(typeof UpdatePodIdentityAssociationResponse$ === "object");
assert(typeof UpdateRoleMappings$ === "object");
assert(typeof UpdateTaintsPayload$ === "object");
assert(typeof UpgradePolicyRequest$ === "object");
assert(typeof UpgradePolicyResponse$ === "object");
assert(typeof VpcConfigRequest$ === "object");
assert(typeof VpcConfigResponse$ === "object");
assert(typeof ZonalShiftConfigRequest$ === "object");
assert(typeof ZonalShiftConfigResponse$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof EKSServiceException);
assert(typeof BadRequestException$ === "object");
assert(ClientException.prototype instanceof EKSServiceException);
assert(typeof ClientException$ === "object");
assert(InvalidParameterException.prototype instanceof EKSServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidRequestException.prototype instanceof EKSServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidStateException.prototype instanceof EKSServiceException);
assert(typeof InvalidStateException$ === "object");
assert(NotFoundException.prototype instanceof EKSServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceInUseException.prototype instanceof EKSServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof EKSServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EKSServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourcePropagationDelayException.prototype instanceof EKSServiceException);
assert(typeof ResourcePropagationDelayException$ === "object");
assert(ServerException.prototype instanceof EKSServiceException);
assert(typeof ServerException$ === "object");
assert(ServiceUnavailableException.prototype instanceof EKSServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof EKSServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnsupportedAvailabilityZoneException.prototype instanceof EKSServiceException);
assert(typeof UnsupportedAvailabilityZoneException$ === "object");
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
