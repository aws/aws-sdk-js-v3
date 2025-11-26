import {
  AssociateAliasCommand,
  AssociateDistributionTenantWebACLCommand,
  AssociateDistributionWebACLCommand,
  CachePolicyCookieBehavior,
  CachePolicyHeaderBehavior,
  CachePolicyQueryStringBehavior,
  CachePolicyType,
  CertificateSource,
  CertificateTransparencyLoggingPreference,
  CloudFront,
  CloudFrontClient,
  CloudFrontServiceException,
  ConnectionMode,
  ContinuousDeploymentPolicyType,
  CopyDistributionCommand,
  CreateAnycastIpListCommand,
  CreateCachePolicyCommand,
  CreateCloudFrontOriginAccessIdentityCommand,
  CreateConnectionFunctionCommand,
  CreateConnectionGroupCommand,
  CreateContinuousDeploymentPolicyCommand,
  CreateDistributionCommand,
  CreateDistributionTenantCommand,
  CreateDistributionWithTagsCommand,
  CreateFieldLevelEncryptionConfigCommand,
  CreateFieldLevelEncryptionProfileCommand,
  CreateFunctionCommand,
  CreateInvalidationCommand,
  CreateInvalidationForDistributionTenantCommand,
  CreateKeyGroupCommand,
  CreateKeyValueStoreCommand,
  CreateMonitoringSubscriptionCommand,
  CreateOriginAccessControlCommand,
  CreateOriginRequestPolicyCommand,
  CreatePublicKeyCommand,
  CreateRealtimeLogConfigCommand,
  CreateResponseHeadersPolicyCommand,
  CreateStreamingDistributionCommand,
  CreateStreamingDistributionWithTagsCommand,
  CreateTrustStoreCommand,
  CreateVpcOriginCommand,
  CustomizationActionType,
  DeleteAnycastIpListCommand,
  DeleteCachePolicyCommand,
  DeleteCloudFrontOriginAccessIdentityCommand,
  DeleteConnectionFunctionCommand,
  DeleteConnectionGroupCommand,
  DeleteContinuousDeploymentPolicyCommand,
  DeleteDistributionCommand,
  DeleteDistributionTenantCommand,
  DeleteFieldLevelEncryptionConfigCommand,
  DeleteFieldLevelEncryptionProfileCommand,
  DeleteFunctionCommand,
  DeleteKeyGroupCommand,
  DeleteKeyValueStoreCommand,
  DeleteMonitoringSubscriptionCommand,
  DeleteOriginAccessControlCommand,
  DeleteOriginRequestPolicyCommand,
  DeletePublicKeyCommand,
  DeleteRealtimeLogConfigCommand,
  DeleteResourcePolicyCommand,
  DeleteResponseHeadersPolicyCommand,
  DeleteStreamingDistributionCommand,
  DeleteTrustStoreCommand,
  DeleteVpcOriginCommand,
  DescribeConnectionFunctionCommand,
  DescribeFunctionCommand,
  DescribeKeyValueStoreCommand,
  DisassociateDistributionTenantWebACLCommand,
  DisassociateDistributionWebACLCommand,
  DistributionResourceType,
  DnsConfigurationStatus,
  DomainStatus,
  EventType,
  Format,
  FrameOptionsList,
  FunctionRuntime,
  FunctionStage,
  GeoRestrictionType,
  GetAnycastIpListCommand,
  GetCachePolicyCommand,
  GetCachePolicyConfigCommand,
  GetCloudFrontOriginAccessIdentityCommand,
  GetCloudFrontOriginAccessIdentityConfigCommand,
  GetConnectionFunctionCommand,
  GetConnectionGroupByRoutingEndpointCommand,
  GetConnectionGroupCommand,
  GetContinuousDeploymentPolicyCommand,
  GetContinuousDeploymentPolicyConfigCommand,
  GetDistributionCommand,
  GetDistributionConfigCommand,
  GetDistributionTenantByDomainCommand,
  GetDistributionTenantCommand,
  GetFieldLevelEncryptionCommand,
  GetFieldLevelEncryptionConfigCommand,
  GetFieldLevelEncryptionProfileCommand,
  GetFieldLevelEncryptionProfileConfigCommand,
  GetFunctionCommand,
  GetInvalidationCommand,
  GetInvalidationForDistributionTenantCommand,
  GetKeyGroupCommand,
  GetKeyGroupConfigCommand,
  GetManagedCertificateDetailsCommand,
  GetMonitoringSubscriptionCommand,
  GetOriginAccessControlCommand,
  GetOriginAccessControlConfigCommand,
  GetOriginRequestPolicyCommand,
  GetOriginRequestPolicyConfigCommand,
  GetPublicKeyCommand,
  GetPublicKeyConfigCommand,
  GetRealtimeLogConfigCommand,
  GetResourcePolicyCommand,
  GetResponseHeadersPolicyCommand,
  GetResponseHeadersPolicyConfigCommand,
  GetStreamingDistributionCommand,
  GetStreamingDistributionConfigCommand,
  GetTrustStoreCommand,
  GetVpcOriginCommand,
  HttpVersion,
  ICPRecordalStatus,
  ImportSourceType,
  IpAddressType,
  IpamCidrStatus,
  ItemSelection,
  ListAnycastIpListsCommand,
  ListCachePoliciesCommand,
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListConflictingAliasesCommand,
  ListConnectionFunctionsCommand,
  ListConnectionGroupsCommand,
  ListContinuousDeploymentPoliciesCommand,
  ListDistributionTenantsByCustomizationCommand,
  ListDistributionTenantsCommand,
  ListDistributionsByAnycastIpListIdCommand,
  ListDistributionsByCachePolicyIdCommand,
  ListDistributionsByConnectionFunctionCommand,
  ListDistributionsByConnectionModeCommand,
  ListDistributionsByKeyGroupCommand,
  ListDistributionsByOriginRequestPolicyIdCommand,
  ListDistributionsByOwnedResourceCommand,
  ListDistributionsByRealtimeLogConfigCommand,
  ListDistributionsByResponseHeadersPolicyIdCommand,
  ListDistributionsByTrustStoreCommand,
  ListDistributionsByVpcOriginIdCommand,
  ListDistributionsByWebACLIdCommand,
  ListDistributionsCommand,
  ListDomainConflictsCommand,
  ListFieldLevelEncryptionConfigsCommand,
  ListFieldLevelEncryptionProfilesCommand,
  ListFunctionsCommand,
  ListInvalidationsCommand,
  ListInvalidationsForDistributionTenantCommand,
  ListKeyGroupsCommand,
  ListKeyValueStoresCommand,
  ListOriginAccessControlsCommand,
  ListOriginRequestPoliciesCommand,
  ListPublicKeysCommand,
  ListRealtimeLogConfigsCommand,
  ListResponseHeadersPoliciesCommand,
  ListStreamingDistributionsCommand,
  ListTagsForResourceCommand,
  ListTrustStoresCommand,
  ListVpcOriginsCommand,
  ManagedCertificateStatus,
  Method,
  MinimumProtocolVersion,
  OriginAccessControlOriginTypes,
  OriginAccessControlSigningBehaviors,
  OriginAccessControlSigningProtocols,
  OriginGroupSelectionCriteria,
  OriginProtocolPolicy,
  OriginRequestPolicyCookieBehavior,
  OriginRequestPolicyHeaderBehavior,
  OriginRequestPolicyQueryStringBehavior,
  OriginRequestPolicyType,
  PriceClass,
  PublishConnectionFunctionCommand,
  PublishFunctionCommand,
  PutResourcePolicyCommand,
  RealtimeMetricsSubscriptionStatus,
  ReferrerPolicyList,
  ResponseHeadersPolicyAccessControlAllowMethodsValues,
  ResponseHeadersPolicyType,
  SSLSupportMethod,
  SslProtocol,
  TagResourceCommand,
  TestConnectionFunctionCommand,
  TestFunctionCommand,
  TrustStoreStatus,
  UntagResourceCommand,
  UpdateAnycastIpListCommand,
  UpdateCachePolicyCommand,
  UpdateCloudFrontOriginAccessIdentityCommand,
  UpdateConnectionFunctionCommand,
  UpdateConnectionGroupCommand,
  UpdateContinuousDeploymentPolicyCommand,
  UpdateDistributionCommand,
  UpdateDistributionTenantCommand,
  UpdateDistributionWithStagingConfigCommand,
  UpdateDomainAssociationCommand,
  UpdateFieldLevelEncryptionConfigCommand,
  UpdateFieldLevelEncryptionProfileCommand,
  UpdateFunctionCommand,
  UpdateKeyGroupCommand,
  UpdateKeyValueStoreCommand,
  UpdateOriginAccessControlCommand,
  UpdateOriginRequestPolicyCommand,
  UpdatePublicKeyCommand,
  UpdateRealtimeLogConfigCommand,
  UpdateResponseHeadersPolicyCommand,
  UpdateStreamingDistributionCommand,
  UpdateTrustStoreCommand,
  UpdateVpcOriginCommand,
  ValidationTokenHost,
  VerifyDnsConfigurationCommand,
  ViewerMtlsMode,
  ViewerProtocolPolicy,
  paginateListCloudFrontOriginAccessIdentities,
  paginateListConnectionFunctions,
  paginateListConnectionGroups,
  paginateListDistributionTenants,
  paginateListDistributionTenantsByCustomization,
  paginateListDistributions,
  paginateListDistributionsByConnectionFunction,
  paginateListDistributionsByConnectionMode,
  paginateListDistributionsByTrustStore,
  paginateListDomainConflicts,
  paginateListInvalidations,
  paginateListInvalidationsForDistributionTenant,
  paginateListKeyValueStores,
  paginateListOriginAccessControls,
  paginateListPublicKeys,
  paginateListStreamingDistributions,
  paginateListTrustStores,
  waitForDistributionDeployed,
  waitForInvalidationCompleted,
  waitForInvalidationForDistributionTenantCompleted,
  waitForStreamingDistributionDeployed,
  waitUntilDistributionDeployed,
  waitUntilInvalidationCompleted,
  waitUntilInvalidationForDistributionTenantCompleted,
  waitUntilStreamingDistributionDeployed,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudFrontClient === "function")
assert(typeof CloudFront === "function")
// commands
assert(typeof AssociateAliasCommand === "function")
assert(typeof AssociateDistributionTenantWebACLCommand === "function")
assert(typeof AssociateDistributionWebACLCommand === "function")
assert(typeof CopyDistributionCommand === "function")
assert(typeof CreateAnycastIpListCommand === "function")
assert(typeof CreateCachePolicyCommand === "function")
assert(typeof CreateCloudFrontOriginAccessIdentityCommand === "function")
assert(typeof CreateConnectionFunctionCommand === "function")
assert(typeof CreateConnectionGroupCommand === "function")
assert(typeof CreateContinuousDeploymentPolicyCommand === "function")
assert(typeof CreateDistributionCommand === "function")
assert(typeof CreateDistributionTenantCommand === "function")
assert(typeof CreateDistributionWithTagsCommand === "function")
assert(typeof CreateFieldLevelEncryptionConfigCommand === "function")
assert(typeof CreateFieldLevelEncryptionProfileCommand === "function")
assert(typeof CreateFunctionCommand === "function")
assert(typeof CreateInvalidationCommand === "function")
assert(typeof CreateInvalidationForDistributionTenantCommand === "function")
assert(typeof CreateKeyGroupCommand === "function")
assert(typeof CreateKeyValueStoreCommand === "function")
assert(typeof CreateMonitoringSubscriptionCommand === "function")
assert(typeof CreateOriginAccessControlCommand === "function")
assert(typeof CreateOriginRequestPolicyCommand === "function")
assert(typeof CreatePublicKeyCommand === "function")
assert(typeof CreateRealtimeLogConfigCommand === "function")
assert(typeof CreateResponseHeadersPolicyCommand === "function")
assert(typeof CreateStreamingDistributionCommand === "function")
assert(typeof CreateStreamingDistributionWithTagsCommand === "function")
assert(typeof CreateTrustStoreCommand === "function")
assert(typeof CreateVpcOriginCommand === "function")
assert(typeof DeleteAnycastIpListCommand === "function")
assert(typeof DeleteCachePolicyCommand === "function")
assert(typeof DeleteCloudFrontOriginAccessIdentityCommand === "function")
assert(typeof DeleteConnectionFunctionCommand === "function")
assert(typeof DeleteConnectionGroupCommand === "function")
assert(typeof DeleteContinuousDeploymentPolicyCommand === "function")
assert(typeof DeleteDistributionCommand === "function")
assert(typeof DeleteDistributionTenantCommand === "function")
assert(typeof DeleteFieldLevelEncryptionConfigCommand === "function")
assert(typeof DeleteFieldLevelEncryptionProfileCommand === "function")
assert(typeof DeleteFunctionCommand === "function")
assert(typeof DeleteKeyGroupCommand === "function")
assert(typeof DeleteKeyValueStoreCommand === "function")
assert(typeof DeleteMonitoringSubscriptionCommand === "function")
assert(typeof DeleteOriginAccessControlCommand === "function")
assert(typeof DeleteOriginRequestPolicyCommand === "function")
assert(typeof DeletePublicKeyCommand === "function")
assert(typeof DeleteRealtimeLogConfigCommand === "function")
assert(typeof DeleteResourcePolicyCommand === "function")
assert(typeof DeleteResponseHeadersPolicyCommand === "function")
assert(typeof DeleteStreamingDistributionCommand === "function")
assert(typeof DeleteTrustStoreCommand === "function")
assert(typeof DeleteVpcOriginCommand === "function")
assert(typeof DescribeConnectionFunctionCommand === "function")
assert(typeof DescribeFunctionCommand === "function")
assert(typeof DescribeKeyValueStoreCommand === "function")
assert(typeof DisassociateDistributionTenantWebACLCommand === "function")
assert(typeof DisassociateDistributionWebACLCommand === "function")
assert(typeof GetAnycastIpListCommand === "function")
assert(typeof GetCachePolicyCommand === "function")
assert(typeof GetCachePolicyConfigCommand === "function")
assert(typeof GetCloudFrontOriginAccessIdentityCommand === "function")
assert(typeof GetCloudFrontOriginAccessIdentityConfigCommand === "function")
assert(typeof GetConnectionFunctionCommand === "function")
assert(typeof GetConnectionGroupCommand === "function")
assert(typeof GetConnectionGroupByRoutingEndpointCommand === "function")
assert(typeof GetContinuousDeploymentPolicyCommand === "function")
assert(typeof GetContinuousDeploymentPolicyConfigCommand === "function")
assert(typeof GetDistributionCommand === "function")
assert(typeof GetDistributionConfigCommand === "function")
assert(typeof GetDistributionTenantCommand === "function")
assert(typeof GetDistributionTenantByDomainCommand === "function")
assert(typeof GetFieldLevelEncryptionCommand === "function")
assert(typeof GetFieldLevelEncryptionConfigCommand === "function")
assert(typeof GetFieldLevelEncryptionProfileCommand === "function")
assert(typeof GetFieldLevelEncryptionProfileConfigCommand === "function")
assert(typeof GetFunctionCommand === "function")
assert(typeof GetInvalidationCommand === "function")
assert(typeof GetInvalidationForDistributionTenantCommand === "function")
assert(typeof GetKeyGroupCommand === "function")
assert(typeof GetKeyGroupConfigCommand === "function")
assert(typeof GetManagedCertificateDetailsCommand === "function")
assert(typeof GetMonitoringSubscriptionCommand === "function")
assert(typeof GetOriginAccessControlCommand === "function")
assert(typeof GetOriginAccessControlConfigCommand === "function")
assert(typeof GetOriginRequestPolicyCommand === "function")
assert(typeof GetOriginRequestPolicyConfigCommand === "function")
assert(typeof GetPublicKeyCommand === "function")
assert(typeof GetPublicKeyConfigCommand === "function")
assert(typeof GetRealtimeLogConfigCommand === "function")
assert(typeof GetResourcePolicyCommand === "function")
assert(typeof GetResponseHeadersPolicyCommand === "function")
assert(typeof GetResponseHeadersPolicyConfigCommand === "function")
assert(typeof GetStreamingDistributionCommand === "function")
assert(typeof GetStreamingDistributionConfigCommand === "function")
assert(typeof GetTrustStoreCommand === "function")
assert(typeof GetVpcOriginCommand === "function")
assert(typeof ListAnycastIpListsCommand === "function")
assert(typeof ListCachePoliciesCommand === "function")
assert(typeof ListCloudFrontOriginAccessIdentitiesCommand === "function")
assert(typeof ListConflictingAliasesCommand === "function")
assert(typeof ListConnectionFunctionsCommand === "function")
assert(typeof ListConnectionGroupsCommand === "function")
assert(typeof ListContinuousDeploymentPoliciesCommand === "function")
assert(typeof ListDistributionsCommand === "function")
assert(typeof ListDistributionsByAnycastIpListIdCommand === "function")
assert(typeof ListDistributionsByCachePolicyIdCommand === "function")
assert(typeof ListDistributionsByConnectionFunctionCommand === "function")
assert(typeof ListDistributionsByConnectionModeCommand === "function")
assert(typeof ListDistributionsByKeyGroupCommand === "function")
assert(typeof ListDistributionsByOriginRequestPolicyIdCommand === "function")
assert(typeof ListDistributionsByOwnedResourceCommand === "function")
assert(typeof ListDistributionsByRealtimeLogConfigCommand === "function")
assert(typeof ListDistributionsByResponseHeadersPolicyIdCommand === "function")
assert(typeof ListDistributionsByTrustStoreCommand === "function")
assert(typeof ListDistributionsByVpcOriginIdCommand === "function")
assert(typeof ListDistributionsByWebACLIdCommand === "function")
assert(typeof ListDistributionTenantsCommand === "function")
assert(typeof ListDistributionTenantsByCustomizationCommand === "function")
assert(typeof ListDomainConflictsCommand === "function")
assert(typeof ListFieldLevelEncryptionConfigsCommand === "function")
assert(typeof ListFieldLevelEncryptionProfilesCommand === "function")
assert(typeof ListFunctionsCommand === "function")
assert(typeof ListInvalidationsCommand === "function")
assert(typeof ListInvalidationsForDistributionTenantCommand === "function")
assert(typeof ListKeyGroupsCommand === "function")
assert(typeof ListKeyValueStoresCommand === "function")
assert(typeof ListOriginAccessControlsCommand === "function")
assert(typeof ListOriginRequestPoliciesCommand === "function")
assert(typeof ListPublicKeysCommand === "function")
assert(typeof ListRealtimeLogConfigsCommand === "function")
assert(typeof ListResponseHeadersPoliciesCommand === "function")
assert(typeof ListStreamingDistributionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTrustStoresCommand === "function")
assert(typeof ListVpcOriginsCommand === "function")
assert(typeof PublishConnectionFunctionCommand === "function")
assert(typeof PublishFunctionCommand === "function")
assert(typeof PutResourcePolicyCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TestConnectionFunctionCommand === "function")
assert(typeof TestFunctionCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAnycastIpListCommand === "function")
assert(typeof UpdateCachePolicyCommand === "function")
assert(typeof UpdateCloudFrontOriginAccessIdentityCommand === "function")
assert(typeof UpdateConnectionFunctionCommand === "function")
assert(typeof UpdateConnectionGroupCommand === "function")
assert(typeof UpdateContinuousDeploymentPolicyCommand === "function")
assert(typeof UpdateDistributionCommand === "function")
assert(typeof UpdateDistributionTenantCommand === "function")
assert(typeof UpdateDistributionWithStagingConfigCommand === "function")
assert(typeof UpdateDomainAssociationCommand === "function")
assert(typeof UpdateFieldLevelEncryptionConfigCommand === "function")
assert(typeof UpdateFieldLevelEncryptionProfileCommand === "function")
assert(typeof UpdateFunctionCommand === "function")
assert(typeof UpdateKeyGroupCommand === "function")
assert(typeof UpdateKeyValueStoreCommand === "function")
assert(typeof UpdateOriginAccessControlCommand === "function")
assert(typeof UpdateOriginRequestPolicyCommand === "function")
assert(typeof UpdatePublicKeyCommand === "function")
assert(typeof UpdateRealtimeLogConfigCommand === "function")
assert(typeof UpdateResponseHeadersPolicyCommand === "function")
assert(typeof UpdateStreamingDistributionCommand === "function")
assert(typeof UpdateTrustStoreCommand === "function")
assert(typeof UpdateVpcOriginCommand === "function")
assert(typeof VerifyDnsConfigurationCommand === "function")
// enums
assert(typeof CachePolicyCookieBehavior === "object");
assert(typeof CachePolicyHeaderBehavior === "object");
assert(typeof CachePolicyQueryStringBehavior === "object");
assert(typeof CachePolicyType === "object");
assert(typeof CertificateSource === "object");
assert(typeof CertificateTransparencyLoggingPreference === "object");
assert(typeof ConnectionMode === "object");
assert(typeof ContinuousDeploymentPolicyType === "object");
assert(typeof CustomizationActionType === "object");
assert(typeof DistributionResourceType === "object");
assert(typeof DnsConfigurationStatus === "object");
assert(typeof DomainStatus === "object");
assert(typeof EventType === "object");
assert(typeof Format === "object");
assert(typeof FrameOptionsList === "object");
assert(typeof FunctionRuntime === "object");
assert(typeof FunctionStage === "object");
assert(typeof GeoRestrictionType === "object");
assert(typeof HttpVersion === "object");
assert(typeof ICPRecordalStatus === "object");
assert(typeof ImportSourceType === "object");
assert(typeof IpAddressType === "object");
assert(typeof IpamCidrStatus === "object");
assert(typeof ItemSelection === "object");
assert(typeof ManagedCertificateStatus === "object");
assert(typeof Method === "object");
assert(typeof MinimumProtocolVersion === "object");
assert(typeof OriginAccessControlOriginTypes === "object");
assert(typeof OriginAccessControlSigningBehaviors === "object");
assert(typeof OriginAccessControlSigningProtocols === "object");
assert(typeof OriginGroupSelectionCriteria === "object");
assert(typeof OriginProtocolPolicy === "object");
assert(typeof OriginRequestPolicyCookieBehavior === "object");
assert(typeof OriginRequestPolicyHeaderBehavior === "object");
assert(typeof OriginRequestPolicyQueryStringBehavior === "object");
assert(typeof OriginRequestPolicyType === "object");
assert(typeof PriceClass === "object");
assert(typeof RealtimeMetricsSubscriptionStatus === "object");
assert(typeof ReferrerPolicyList === "object");
assert(typeof ResponseHeadersPolicyAccessControlAllowMethodsValues === "object");
assert(typeof ResponseHeadersPolicyType === "object");
assert(typeof SslProtocol === "object");
assert(typeof SSLSupportMethod === "object");
assert(typeof TrustStoreStatus === "object");
assert(typeof ValidationTokenHost === "object");
assert(typeof ViewerMtlsMode === "object");
assert(typeof ViewerProtocolPolicy === "object");
// errors
assert(CloudFrontServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForDistributionDeployed === "function")
assert(typeof waitForInvalidationCompleted === "function")
assert(typeof waitForInvalidationForDistributionTenantCompleted === "function")
assert(typeof waitForStreamingDistributionDeployed === "function")
assert(typeof waitUntilDistributionDeployed === "function")
assert(typeof waitUntilInvalidationCompleted === "function")
assert(typeof waitUntilInvalidationForDistributionTenantCompleted === "function")
assert(typeof waitUntilStreamingDistributionDeployed === "function")
// paginators
assert(typeof paginateListCloudFrontOriginAccessIdentities === "function")
assert(typeof paginateListConnectionFunctions === "function")
assert(typeof paginateListConnectionGroups === "function")
assert(typeof paginateListDistributionTenants === "function")
assert(typeof paginateListDistributionTenantsByCustomization === "function")
assert(typeof paginateListDistributions === "function")
assert(typeof paginateListDistributionsByConnectionFunction === "function")
assert(typeof paginateListDistributionsByConnectionMode === "function")
assert(typeof paginateListDistributionsByTrustStore === "function")
assert(typeof paginateListDomainConflicts === "function")
assert(typeof paginateListInvalidations === "function")
assert(typeof paginateListInvalidationsForDistributionTenant === "function")
assert(typeof paginateListKeyValueStores === "function")
assert(typeof paginateListOriginAccessControls === "function")
assert(typeof paginateListPublicKeys === "function")
assert(typeof paginateListStreamingDistributions === "function")
assert(typeof paginateListTrustStores === "function")
console.log(`CloudFront index test passed.`);
