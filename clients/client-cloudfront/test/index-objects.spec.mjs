import {
  AccessDenied,
  AssociateAliasCommand,
  AssociateDistributionTenantWebACLCommand,
  AssociateDistributionWebACLCommand,
  BatchTooLarge,
  CNAMEAlreadyExists,
  CachePolicyAlreadyExists,
  CachePolicyCookieBehavior,
  CachePolicyHeaderBehavior,
  CachePolicyInUse,
  CachePolicyQueryStringBehavior,
  CachePolicyType,
  CannotChangeImmutablePublicKeyFields,
  CannotDeleteEntityWhileInUse,
  CannotUpdateEntityWhileInUse,
  CertificateSource,
  CertificateTransparencyLoggingPreference,
  CloudFront,
  CloudFrontClient,
  CloudFrontOriginAccessIdentityAlreadyExists,
  CloudFrontOriginAccessIdentityInUse,
  CloudFrontServiceException,
  ConnectionMode,
  ContinuousDeploymentPolicyAlreadyExists,
  ContinuousDeploymentPolicyInUse,
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
  DistributionAlreadyExists,
  DistributionNotDisabled,
  DistributionResourceType,
  DnsConfigurationStatus,
  DomainStatus,
  EntityAlreadyExists,
  EntityLimitExceeded,
  EntityNotFound,
  EntitySizeLimitExceeded,
  EventType,
  FieldLevelEncryptionConfigAlreadyExists,
  FieldLevelEncryptionConfigInUse,
  FieldLevelEncryptionProfileAlreadyExists,
  FieldLevelEncryptionProfileInUse,
  FieldLevelEncryptionProfileSizeExceeded,
  Format,
  FrameOptionsList,
  FunctionAlreadyExists,
  FunctionInUse,
  FunctionRuntime,
  FunctionSizeLimitExceeded,
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
  IllegalDelete,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior,
  IllegalOriginAccessConfiguration,
  IllegalUpdate,
  ImportSourceType,
  InconsistentQuantities,
  InvalidArgument,
  InvalidAssociation,
  InvalidDefaultRootObject,
  InvalidDomainNameForOriginAccessControl,
  InvalidErrorCode,
  InvalidForwardCookies,
  InvalidFunctionAssociation,
  InvalidGeoRestrictionParameter,
  InvalidHeadersForS3Origin,
  InvalidIfMatchVersion,
  InvalidLambdaFunctionAssociation,
  InvalidLocationCode,
  InvalidMinimumProtocolVersion,
  InvalidOrigin,
  InvalidOriginAccessControl,
  InvalidOriginAccessIdentity,
  InvalidOriginKeepaliveTimeout,
  InvalidOriginReadTimeout,
  InvalidProtocolSettings,
  InvalidQueryStringParameters,
  InvalidRelativePath,
  InvalidRequiredProtocol,
  InvalidResponseCode,
  InvalidTTLOrder,
  InvalidTagging,
  InvalidViewerCertificate,
  InvalidWebACLId,
  IpAddressType,
  IpamCidrStatus,
  ItemSelection,
  KeyGroupAlreadyExists,
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
  MissingBody,
  MonitoringSubscriptionAlreadyExists,
  NoSuchCachePolicy,
  NoSuchCloudFrontOriginAccessIdentity,
  NoSuchContinuousDeploymentPolicy,
  NoSuchDistribution,
  NoSuchFieldLevelEncryptionConfig,
  NoSuchFieldLevelEncryptionProfile,
  NoSuchFunctionExists,
  NoSuchInvalidation,
  NoSuchMonitoringSubscription,
  NoSuchOrigin,
  NoSuchOriginAccessControl,
  NoSuchOriginRequestPolicy,
  NoSuchPublicKey,
  NoSuchRealtimeLogConfig,
  NoSuchResource,
  NoSuchResponseHeadersPolicy,
  NoSuchStreamingDistribution,
  OriginAccessControlAlreadyExists,
  OriginAccessControlInUse,
  OriginAccessControlOriginTypes,
  OriginAccessControlSigningBehaviors,
  OriginAccessControlSigningProtocols,
  OriginGroupSelectionCriteria,
  OriginProtocolPolicy,
  OriginRequestPolicyAlreadyExists,
  OriginRequestPolicyCookieBehavior,
  OriginRequestPolicyHeaderBehavior,
  OriginRequestPolicyInUse,
  OriginRequestPolicyQueryStringBehavior,
  OriginRequestPolicyType,
  PreconditionFailed,
  PriceClass,
  PublicKeyAlreadyExists,
  PublicKeyInUse,
  PublishConnectionFunctionCommand,
  PublishFunctionCommand,
  PutResourcePolicyCommand,
  QueryArgProfileEmpty,
  RealtimeLogConfigAlreadyExists,
  RealtimeLogConfigInUse,
  RealtimeLogConfigOwnerMismatch,
  RealtimeMetricsSubscriptionStatus,
  ReferrerPolicyList,
  ResourceInUse,
  ResourceNotDisabled,
  ResponseHeadersPolicyAccessControlAllowMethodsValues,
  ResponseHeadersPolicyAlreadyExists,
  ResponseHeadersPolicyInUse,
  ResponseHeadersPolicyType,
  SSLSupportMethod,
  SslProtocol,
  StagingDistributionInUse,
  StreamingDistributionAlreadyExists,
  StreamingDistributionNotDisabled,
  TagResourceCommand,
  TestConnectionFunctionCommand,
  TestFunctionCommand,
  TestFunctionFailed,
  TooLongCSPInResponseHeadersPolicy,
  TooManyCacheBehaviors,
  TooManyCachePolicies,
  TooManyCertificates,
  TooManyCloudFrontOriginAccessIdentities,
  TooManyContinuousDeploymentPolicies,
  TooManyCookieNamesInWhiteList,
  TooManyCookiesInCachePolicy,
  TooManyCookiesInOriginRequestPolicy,
  TooManyCustomHeadersInResponseHeadersPolicy,
  TooManyDistributionCNAMEs,
  TooManyDistributions,
  TooManyDistributionsAssociatedToCachePolicy,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig,
  TooManyDistributionsAssociatedToKeyGroup,
  TooManyDistributionsAssociatedToOriginAccessControl,
  TooManyDistributionsAssociatedToOriginRequestPolicy,
  TooManyDistributionsAssociatedToResponseHeadersPolicy,
  TooManyDistributionsWithFunctionAssociations,
  TooManyDistributionsWithLambdaAssociations,
  TooManyDistributionsWithSingleFunctionARN,
  TooManyFieldLevelEncryptionConfigs,
  TooManyFieldLevelEncryptionContentTypeProfiles,
  TooManyFieldLevelEncryptionEncryptionEntities,
  TooManyFieldLevelEncryptionFieldPatterns,
  TooManyFieldLevelEncryptionProfiles,
  TooManyFieldLevelEncryptionQueryArgProfiles,
  TooManyFunctionAssociations,
  TooManyFunctions,
  TooManyHeadersInCachePolicy,
  TooManyHeadersInForwardedValues,
  TooManyHeadersInOriginRequestPolicy,
  TooManyInvalidationsInProgress,
  TooManyKeyGroups,
  TooManyKeyGroupsAssociatedToDistribution,
  TooManyLambdaFunctionAssociations,
  TooManyOriginAccessControls,
  TooManyOriginCustomHeaders,
  TooManyOriginGroupsPerDistribution,
  TooManyOriginRequestPolicies,
  TooManyOrigins,
  TooManyPublicKeys,
  TooManyPublicKeysInKeyGroup,
  TooManyQueryStringParameters,
  TooManyQueryStringsInCachePolicy,
  TooManyQueryStringsInOriginRequestPolicy,
  TooManyRealtimeLogConfigs,
  TooManyRemoveHeadersInResponseHeadersPolicy,
  TooManyResponseHeadersPolicies,
  TooManyStreamingDistributionCNAMEs,
  TooManyStreamingDistributions,
  TooManyTrustedSigners,
  TrustStoreStatus,
  TrustedKeyGroupDoesNotExist,
  TrustedSignerDoesNotExist,
  UnsupportedOperation,
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
assert(typeof CloudFrontClient === "function");
assert(typeof CloudFront === "function");
// commands
assert(typeof AssociateAliasCommand === "function");
assert(typeof AssociateDistributionTenantWebACLCommand === "function");
assert(typeof AssociateDistributionWebACLCommand === "function");
assert(typeof CopyDistributionCommand === "function");
assert(typeof CreateAnycastIpListCommand === "function");
assert(typeof CreateCachePolicyCommand === "function");
assert(typeof CreateCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof CreateConnectionFunctionCommand === "function");
assert(typeof CreateConnectionGroupCommand === "function");
assert(typeof CreateContinuousDeploymentPolicyCommand === "function");
assert(typeof CreateDistributionCommand === "function");
assert(typeof CreateDistributionTenantCommand === "function");
assert(typeof CreateDistributionWithTagsCommand === "function");
assert(typeof CreateFieldLevelEncryptionConfigCommand === "function");
assert(typeof CreateFieldLevelEncryptionProfileCommand === "function");
assert(typeof CreateFunctionCommand === "function");
assert(typeof CreateInvalidationCommand === "function");
assert(typeof CreateInvalidationForDistributionTenantCommand === "function");
assert(typeof CreateKeyGroupCommand === "function");
assert(typeof CreateKeyValueStoreCommand === "function");
assert(typeof CreateMonitoringSubscriptionCommand === "function");
assert(typeof CreateOriginAccessControlCommand === "function");
assert(typeof CreateOriginRequestPolicyCommand === "function");
assert(typeof CreatePublicKeyCommand === "function");
assert(typeof CreateRealtimeLogConfigCommand === "function");
assert(typeof CreateResponseHeadersPolicyCommand === "function");
assert(typeof CreateStreamingDistributionCommand === "function");
assert(typeof CreateStreamingDistributionWithTagsCommand === "function");
assert(typeof CreateTrustStoreCommand === "function");
assert(typeof CreateVpcOriginCommand === "function");
assert(typeof DeleteAnycastIpListCommand === "function");
assert(typeof DeleteCachePolicyCommand === "function");
assert(typeof DeleteCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof DeleteConnectionFunctionCommand === "function");
assert(typeof DeleteConnectionGroupCommand === "function");
assert(typeof DeleteContinuousDeploymentPolicyCommand === "function");
assert(typeof DeleteDistributionCommand === "function");
assert(typeof DeleteDistributionTenantCommand === "function");
assert(typeof DeleteFieldLevelEncryptionConfigCommand === "function");
assert(typeof DeleteFieldLevelEncryptionProfileCommand === "function");
assert(typeof DeleteFunctionCommand === "function");
assert(typeof DeleteKeyGroupCommand === "function");
assert(typeof DeleteKeyValueStoreCommand === "function");
assert(typeof DeleteMonitoringSubscriptionCommand === "function");
assert(typeof DeleteOriginAccessControlCommand === "function");
assert(typeof DeleteOriginRequestPolicyCommand === "function");
assert(typeof DeletePublicKeyCommand === "function");
assert(typeof DeleteRealtimeLogConfigCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResponseHeadersPolicyCommand === "function");
assert(typeof DeleteStreamingDistributionCommand === "function");
assert(typeof DeleteTrustStoreCommand === "function");
assert(typeof DeleteVpcOriginCommand === "function");
assert(typeof DescribeConnectionFunctionCommand === "function");
assert(typeof DescribeFunctionCommand === "function");
assert(typeof DescribeKeyValueStoreCommand === "function");
assert(typeof DisassociateDistributionTenantWebACLCommand === "function");
assert(typeof DisassociateDistributionWebACLCommand === "function");
assert(typeof GetAnycastIpListCommand === "function");
assert(typeof GetCachePolicyCommand === "function");
assert(typeof GetCachePolicyConfigCommand === "function");
assert(typeof GetCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof GetCloudFrontOriginAccessIdentityConfigCommand === "function");
assert(typeof GetConnectionFunctionCommand === "function");
assert(typeof GetConnectionGroupCommand === "function");
assert(typeof GetConnectionGroupByRoutingEndpointCommand === "function");
assert(typeof GetContinuousDeploymentPolicyCommand === "function");
assert(typeof GetContinuousDeploymentPolicyConfigCommand === "function");
assert(typeof GetDistributionCommand === "function");
assert(typeof GetDistributionConfigCommand === "function");
assert(typeof GetDistributionTenantCommand === "function");
assert(typeof GetDistributionTenantByDomainCommand === "function");
assert(typeof GetFieldLevelEncryptionCommand === "function");
assert(typeof GetFieldLevelEncryptionConfigCommand === "function");
assert(typeof GetFieldLevelEncryptionProfileCommand === "function");
assert(typeof GetFieldLevelEncryptionProfileConfigCommand === "function");
assert(typeof GetFunctionCommand === "function");
assert(typeof GetInvalidationCommand === "function");
assert(typeof GetInvalidationForDistributionTenantCommand === "function");
assert(typeof GetKeyGroupCommand === "function");
assert(typeof GetKeyGroupConfigCommand === "function");
assert(typeof GetManagedCertificateDetailsCommand === "function");
assert(typeof GetMonitoringSubscriptionCommand === "function");
assert(typeof GetOriginAccessControlCommand === "function");
assert(typeof GetOriginAccessControlConfigCommand === "function");
assert(typeof GetOriginRequestPolicyCommand === "function");
assert(typeof GetOriginRequestPolicyConfigCommand === "function");
assert(typeof GetPublicKeyCommand === "function");
assert(typeof GetPublicKeyConfigCommand === "function");
assert(typeof GetRealtimeLogConfigCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResponseHeadersPolicyCommand === "function");
assert(typeof GetResponseHeadersPolicyConfigCommand === "function");
assert(typeof GetStreamingDistributionCommand === "function");
assert(typeof GetStreamingDistributionConfigCommand === "function");
assert(typeof GetTrustStoreCommand === "function");
assert(typeof GetVpcOriginCommand === "function");
assert(typeof ListAnycastIpListsCommand === "function");
assert(typeof ListCachePoliciesCommand === "function");
assert(typeof ListCloudFrontOriginAccessIdentitiesCommand === "function");
assert(typeof ListConflictingAliasesCommand === "function");
assert(typeof ListConnectionFunctionsCommand === "function");
assert(typeof ListConnectionGroupsCommand === "function");
assert(typeof ListContinuousDeploymentPoliciesCommand === "function");
assert(typeof ListDistributionsCommand === "function");
assert(typeof ListDistributionsByAnycastIpListIdCommand === "function");
assert(typeof ListDistributionsByCachePolicyIdCommand === "function");
assert(typeof ListDistributionsByConnectionFunctionCommand === "function");
assert(typeof ListDistributionsByConnectionModeCommand === "function");
assert(typeof ListDistributionsByKeyGroupCommand === "function");
assert(typeof ListDistributionsByOriginRequestPolicyIdCommand === "function");
assert(typeof ListDistributionsByOwnedResourceCommand === "function");
assert(typeof ListDistributionsByRealtimeLogConfigCommand === "function");
assert(typeof ListDistributionsByResponseHeadersPolicyIdCommand === "function");
assert(typeof ListDistributionsByTrustStoreCommand === "function");
assert(typeof ListDistributionsByVpcOriginIdCommand === "function");
assert(typeof ListDistributionsByWebACLIdCommand === "function");
assert(typeof ListDistributionTenantsCommand === "function");
assert(typeof ListDistributionTenantsByCustomizationCommand === "function");
assert(typeof ListDomainConflictsCommand === "function");
assert(typeof ListFieldLevelEncryptionConfigsCommand === "function");
assert(typeof ListFieldLevelEncryptionProfilesCommand === "function");
assert(typeof ListFunctionsCommand === "function");
assert(typeof ListInvalidationsCommand === "function");
assert(typeof ListInvalidationsForDistributionTenantCommand === "function");
assert(typeof ListKeyGroupsCommand === "function");
assert(typeof ListKeyValueStoresCommand === "function");
assert(typeof ListOriginAccessControlsCommand === "function");
assert(typeof ListOriginRequestPoliciesCommand === "function");
assert(typeof ListPublicKeysCommand === "function");
assert(typeof ListRealtimeLogConfigsCommand === "function");
assert(typeof ListResponseHeadersPoliciesCommand === "function");
assert(typeof ListStreamingDistributionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTrustStoresCommand === "function");
assert(typeof ListVpcOriginsCommand === "function");
assert(typeof PublishConnectionFunctionCommand === "function");
assert(typeof PublishFunctionCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestConnectionFunctionCommand === "function");
assert(typeof TestFunctionCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAnycastIpListCommand === "function");
assert(typeof UpdateCachePolicyCommand === "function");
assert(typeof UpdateCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof UpdateConnectionFunctionCommand === "function");
assert(typeof UpdateConnectionGroupCommand === "function");
assert(typeof UpdateContinuousDeploymentPolicyCommand === "function");
assert(typeof UpdateDistributionCommand === "function");
assert(typeof UpdateDistributionTenantCommand === "function");
assert(typeof UpdateDistributionWithStagingConfigCommand === "function");
assert(typeof UpdateDomainAssociationCommand === "function");
assert(typeof UpdateFieldLevelEncryptionConfigCommand === "function");
assert(typeof UpdateFieldLevelEncryptionProfileCommand === "function");
assert(typeof UpdateFunctionCommand === "function");
assert(typeof UpdateKeyGroupCommand === "function");
assert(typeof UpdateKeyValueStoreCommand === "function");
assert(typeof UpdateOriginAccessControlCommand === "function");
assert(typeof UpdateOriginRequestPolicyCommand === "function");
assert(typeof UpdatePublicKeyCommand === "function");
assert(typeof UpdateRealtimeLogConfigCommand === "function");
assert(typeof UpdateResponseHeadersPolicyCommand === "function");
assert(typeof UpdateStreamingDistributionCommand === "function");
assert(typeof UpdateTrustStoreCommand === "function");
assert(typeof UpdateVpcOriginCommand === "function");
assert(typeof VerifyDnsConfigurationCommand === "function");
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
assert(AccessDenied.prototype instanceof CloudFrontServiceException);
assert(BatchTooLarge.prototype instanceof CloudFrontServiceException);
assert(CachePolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(CachePolicyInUse.prototype instanceof CloudFrontServiceException);
assert(CannotChangeImmutablePublicKeyFields.prototype instanceof CloudFrontServiceException);
assert(CannotDeleteEntityWhileInUse.prototype instanceof CloudFrontServiceException);
assert(CannotUpdateEntityWhileInUse.prototype instanceof CloudFrontServiceException);
assert(CloudFrontOriginAccessIdentityAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(CloudFrontOriginAccessIdentityInUse.prototype instanceof CloudFrontServiceException);
assert(CNAMEAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(ContinuousDeploymentPolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(ContinuousDeploymentPolicyInUse.prototype instanceof CloudFrontServiceException);
assert(DistributionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(DistributionNotDisabled.prototype instanceof CloudFrontServiceException);
assert(EntityAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(EntityLimitExceeded.prototype instanceof CloudFrontServiceException);
assert(EntityNotFound.prototype instanceof CloudFrontServiceException);
assert(EntitySizeLimitExceeded.prototype instanceof CloudFrontServiceException);
assert(FieldLevelEncryptionConfigAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(FieldLevelEncryptionConfigInUse.prototype instanceof CloudFrontServiceException);
assert(FieldLevelEncryptionProfileAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(FieldLevelEncryptionProfileInUse.prototype instanceof CloudFrontServiceException);
assert(FieldLevelEncryptionProfileSizeExceeded.prototype instanceof CloudFrontServiceException);
assert(FunctionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(FunctionInUse.prototype instanceof CloudFrontServiceException);
assert(FunctionSizeLimitExceeded.prototype instanceof CloudFrontServiceException);
assert(IllegalDelete.prototype instanceof CloudFrontServiceException);
assert(IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior.prototype instanceof CloudFrontServiceException);
assert(IllegalOriginAccessConfiguration.prototype instanceof CloudFrontServiceException);
assert(IllegalUpdate.prototype instanceof CloudFrontServiceException);
assert(InconsistentQuantities.prototype instanceof CloudFrontServiceException);
assert(InvalidArgument.prototype instanceof CloudFrontServiceException);
assert(InvalidAssociation.prototype instanceof CloudFrontServiceException);
assert(InvalidDefaultRootObject.prototype instanceof CloudFrontServiceException);
assert(InvalidDomainNameForOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(InvalidErrorCode.prototype instanceof CloudFrontServiceException);
assert(InvalidForwardCookies.prototype instanceof CloudFrontServiceException);
assert(InvalidFunctionAssociation.prototype instanceof CloudFrontServiceException);
assert(InvalidGeoRestrictionParameter.prototype instanceof CloudFrontServiceException);
assert(InvalidHeadersForS3Origin.prototype instanceof CloudFrontServiceException);
assert(InvalidIfMatchVersion.prototype instanceof CloudFrontServiceException);
assert(InvalidLambdaFunctionAssociation.prototype instanceof CloudFrontServiceException);
assert(InvalidLocationCode.prototype instanceof CloudFrontServiceException);
assert(InvalidMinimumProtocolVersion.prototype instanceof CloudFrontServiceException);
assert(InvalidOrigin.prototype instanceof CloudFrontServiceException);
assert(InvalidOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(InvalidOriginAccessIdentity.prototype instanceof CloudFrontServiceException);
assert(InvalidOriginKeepaliveTimeout.prototype instanceof CloudFrontServiceException);
assert(InvalidOriginReadTimeout.prototype instanceof CloudFrontServiceException);
assert(InvalidProtocolSettings.prototype instanceof CloudFrontServiceException);
assert(InvalidQueryStringParameters.prototype instanceof CloudFrontServiceException);
assert(InvalidRelativePath.prototype instanceof CloudFrontServiceException);
assert(InvalidRequiredProtocol.prototype instanceof CloudFrontServiceException);
assert(InvalidResponseCode.prototype instanceof CloudFrontServiceException);
assert(InvalidTagging.prototype instanceof CloudFrontServiceException);
assert(InvalidTTLOrder.prototype instanceof CloudFrontServiceException);
assert(InvalidViewerCertificate.prototype instanceof CloudFrontServiceException);
assert(InvalidWebACLId.prototype instanceof CloudFrontServiceException);
assert(KeyGroupAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(MissingBody.prototype instanceof CloudFrontServiceException);
assert(MonitoringSubscriptionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(NoSuchCachePolicy.prototype instanceof CloudFrontServiceException);
assert(NoSuchCloudFrontOriginAccessIdentity.prototype instanceof CloudFrontServiceException);
assert(NoSuchContinuousDeploymentPolicy.prototype instanceof CloudFrontServiceException);
assert(NoSuchDistribution.prototype instanceof CloudFrontServiceException);
assert(NoSuchFieldLevelEncryptionConfig.prototype instanceof CloudFrontServiceException);
assert(NoSuchFieldLevelEncryptionProfile.prototype instanceof CloudFrontServiceException);
assert(NoSuchFunctionExists.prototype instanceof CloudFrontServiceException);
assert(NoSuchInvalidation.prototype instanceof CloudFrontServiceException);
assert(NoSuchMonitoringSubscription.prototype instanceof CloudFrontServiceException);
assert(NoSuchOrigin.prototype instanceof CloudFrontServiceException);
assert(NoSuchOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(NoSuchOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(NoSuchPublicKey.prototype instanceof CloudFrontServiceException);
assert(NoSuchRealtimeLogConfig.prototype instanceof CloudFrontServiceException);
assert(NoSuchResource.prototype instanceof CloudFrontServiceException);
assert(NoSuchResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(NoSuchStreamingDistribution.prototype instanceof CloudFrontServiceException);
assert(OriginAccessControlAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(OriginAccessControlInUse.prototype instanceof CloudFrontServiceException);
assert(OriginRequestPolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(OriginRequestPolicyInUse.prototype instanceof CloudFrontServiceException);
assert(PreconditionFailed.prototype instanceof CloudFrontServiceException);
assert(PublicKeyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(PublicKeyInUse.prototype instanceof CloudFrontServiceException);
assert(QueryArgProfileEmpty.prototype instanceof CloudFrontServiceException);
assert(RealtimeLogConfigAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(RealtimeLogConfigInUse.prototype instanceof CloudFrontServiceException);
assert(RealtimeLogConfigOwnerMismatch.prototype instanceof CloudFrontServiceException);
assert(ResourceInUse.prototype instanceof CloudFrontServiceException);
assert(ResourceNotDisabled.prototype instanceof CloudFrontServiceException);
assert(ResponseHeadersPolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(ResponseHeadersPolicyInUse.prototype instanceof CloudFrontServiceException);
assert(StagingDistributionInUse.prototype instanceof CloudFrontServiceException);
assert(StreamingDistributionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(StreamingDistributionNotDisabled.prototype instanceof CloudFrontServiceException);
assert(TestFunctionFailed.prototype instanceof CloudFrontServiceException);
assert(TooLongCSPInResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyCacheBehaviors.prototype instanceof CloudFrontServiceException);
assert(TooManyCachePolicies.prototype instanceof CloudFrontServiceException);
assert(TooManyCertificates.prototype instanceof CloudFrontServiceException);
assert(TooManyCloudFrontOriginAccessIdentities.prototype instanceof CloudFrontServiceException);
assert(TooManyContinuousDeploymentPolicies.prototype instanceof CloudFrontServiceException);
assert(TooManyCookieNamesInWhiteList.prototype instanceof CloudFrontServiceException);
assert(TooManyCookiesInCachePolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyCookiesInOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyCustomHeadersInResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionCNAMEs.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributions.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsAssociatedToCachePolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsAssociatedToFieldLevelEncryptionConfig.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsAssociatedToKeyGroup.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsAssociatedToOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsAssociatedToOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsAssociatedToResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsWithFunctionAssociations.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsWithLambdaAssociations.prototype instanceof CloudFrontServiceException);
assert(TooManyDistributionsWithSingleFunctionARN.prototype instanceof CloudFrontServiceException);
assert(TooManyFieldLevelEncryptionConfigs.prototype instanceof CloudFrontServiceException);
assert(TooManyFieldLevelEncryptionContentTypeProfiles.prototype instanceof CloudFrontServiceException);
assert(TooManyFieldLevelEncryptionEncryptionEntities.prototype instanceof CloudFrontServiceException);
assert(TooManyFieldLevelEncryptionFieldPatterns.prototype instanceof CloudFrontServiceException);
assert(TooManyFieldLevelEncryptionProfiles.prototype instanceof CloudFrontServiceException);
assert(TooManyFieldLevelEncryptionQueryArgProfiles.prototype instanceof CloudFrontServiceException);
assert(TooManyFunctionAssociations.prototype instanceof CloudFrontServiceException);
assert(TooManyFunctions.prototype instanceof CloudFrontServiceException);
assert(TooManyHeadersInCachePolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyHeadersInForwardedValues.prototype instanceof CloudFrontServiceException);
assert(TooManyHeadersInOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyInvalidationsInProgress.prototype instanceof CloudFrontServiceException);
assert(TooManyKeyGroups.prototype instanceof CloudFrontServiceException);
assert(TooManyKeyGroupsAssociatedToDistribution.prototype instanceof CloudFrontServiceException);
assert(TooManyLambdaFunctionAssociations.prototype instanceof CloudFrontServiceException);
assert(TooManyOriginAccessControls.prototype instanceof CloudFrontServiceException);
assert(TooManyOriginCustomHeaders.prototype instanceof CloudFrontServiceException);
assert(TooManyOriginGroupsPerDistribution.prototype instanceof CloudFrontServiceException);
assert(TooManyOriginRequestPolicies.prototype instanceof CloudFrontServiceException);
assert(TooManyOrigins.prototype instanceof CloudFrontServiceException);
assert(TooManyPublicKeys.prototype instanceof CloudFrontServiceException);
assert(TooManyPublicKeysInKeyGroup.prototype instanceof CloudFrontServiceException);
assert(TooManyQueryStringParameters.prototype instanceof CloudFrontServiceException);
assert(TooManyQueryStringsInCachePolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyQueryStringsInOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyRealtimeLogConfigs.prototype instanceof CloudFrontServiceException);
assert(TooManyRemoveHeadersInResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(TooManyResponseHeadersPolicies.prototype instanceof CloudFrontServiceException);
assert(TooManyStreamingDistributionCNAMEs.prototype instanceof CloudFrontServiceException);
assert(TooManyStreamingDistributions.prototype instanceof CloudFrontServiceException);
assert(TooManyTrustedSigners.prototype instanceof CloudFrontServiceException);
assert(TrustedKeyGroupDoesNotExist.prototype instanceof CloudFrontServiceException);
assert(TrustedSignerDoesNotExist.prototype instanceof CloudFrontServiceException);
assert(UnsupportedOperation.prototype instanceof CloudFrontServiceException);
assert(CloudFrontServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDistributionDeployed === "function");
assert(typeof waitForInvalidationCompleted === "function");
assert(typeof waitForInvalidationForDistributionTenantCompleted === "function");
assert(typeof waitForStreamingDistributionDeployed === "function");
assert(typeof waitUntilDistributionDeployed === "function");
assert(typeof waitUntilInvalidationCompleted === "function");
assert(typeof waitUntilInvalidationForDistributionTenantCompleted === "function");
assert(typeof waitUntilStreamingDistributionDeployed === "function");
// paginators
assert(typeof paginateListCloudFrontOriginAccessIdentities === "function");
assert(typeof paginateListConnectionFunctions === "function");
assert(typeof paginateListConnectionGroups === "function");
assert(typeof paginateListDistributionTenants === "function");
assert(typeof paginateListDistributionTenantsByCustomization === "function");
assert(typeof paginateListDistributions === "function");
assert(typeof paginateListDistributionsByConnectionFunction === "function");
assert(typeof paginateListDistributionsByConnectionMode === "function");
assert(typeof paginateListDistributionsByTrustStore === "function");
assert(typeof paginateListDomainConflicts === "function");
assert(typeof paginateListInvalidations === "function");
assert(typeof paginateListInvalidationsForDistributionTenant === "function");
assert(typeof paginateListKeyValueStores === "function");
assert(typeof paginateListOriginAccessControls === "function");
assert(typeof paginateListPublicKeys === "function");
assert(typeof paginateListStreamingDistributions === "function");
assert(typeof paginateListTrustStores === "function");
console.log(`CloudFront index test passed.`);
