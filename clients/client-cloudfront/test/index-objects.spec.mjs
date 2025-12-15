import {
  AccessDenied,
  AccessDenied$,
  ActiveTrustedKeyGroups$,
  ActiveTrustedSigners$,
  AliasICPRecordal$,
  Aliases$,
  AllowedMethods$,
  AnycastIpList$,
  AnycastIpListCollection$,
  AnycastIpListSummary$,
  AssociateAlias$,
  AssociateAliasCommand,
  AssociateAliasRequest$,
  AssociateDistributionTenantWebACL$,
  AssociateDistributionTenantWebACLCommand,
  AssociateDistributionTenantWebACLRequest$,
  AssociateDistributionTenantWebACLResult$,
  AssociateDistributionWebACL$,
  AssociateDistributionWebACLCommand,
  AssociateDistributionWebACLRequest$,
  AssociateDistributionWebACLResult$,
  BatchTooLarge,
  BatchTooLarge$,
  CNAMEAlreadyExists,
  CNAMEAlreadyExists$,
  CaCertificatesBundleS3Location$,
  CaCertificatesBundleSource$,
  CacheBehavior$,
  CacheBehaviors$,
  CachePolicy$,
  CachePolicyAlreadyExists,
  CachePolicyAlreadyExists$,
  CachePolicyConfig$,
  CachePolicyCookieBehavior,
  CachePolicyCookiesConfig$,
  CachePolicyHeaderBehavior,
  CachePolicyHeadersConfig$,
  CachePolicyInUse,
  CachePolicyInUse$,
  CachePolicyList$,
  CachePolicyQueryStringBehavior,
  CachePolicyQueryStringsConfig$,
  CachePolicySummary$,
  CachePolicyType,
  CachedMethods$,
  CannotChangeImmutablePublicKeyFields,
  CannotChangeImmutablePublicKeyFields$,
  CannotDeleteEntityWhileInUse,
  CannotDeleteEntityWhileInUse$,
  CannotUpdateEntityWhileInUse,
  CannotUpdateEntityWhileInUse$,
  Certificate$,
  CertificateSource,
  CertificateTransparencyLoggingPreference,
  CloudFront,
  CloudFrontClient,
  CloudFrontOriginAccessIdentity$,
  CloudFrontOriginAccessIdentityAlreadyExists,
  CloudFrontOriginAccessIdentityAlreadyExists$,
  CloudFrontOriginAccessIdentityConfig$,
  CloudFrontOriginAccessIdentityInUse,
  CloudFrontOriginAccessIdentityInUse$,
  CloudFrontOriginAccessIdentityList$,
  CloudFrontOriginAccessIdentitySummary$,
  CloudFrontServiceException,
  ConflictingAlias$,
  ConflictingAliasesList$,
  ConnectionFunctionAssociation$,
  ConnectionFunctionSummary$,
  ConnectionFunctionTestResult$,
  ConnectionGroup$,
  ConnectionGroupAssociationFilter$,
  ConnectionGroupSummary$,
  ConnectionMode,
  ContentTypeProfile$,
  ContentTypeProfileConfig$,
  ContentTypeProfiles$,
  ContinuousDeploymentPolicy$,
  ContinuousDeploymentPolicyAlreadyExists,
  ContinuousDeploymentPolicyAlreadyExists$,
  ContinuousDeploymentPolicyConfig$,
  ContinuousDeploymentPolicyInUse,
  ContinuousDeploymentPolicyInUse$,
  ContinuousDeploymentPolicyList$,
  ContinuousDeploymentPolicySummary$,
  ContinuousDeploymentPolicyType,
  ContinuousDeploymentSingleHeaderConfig$,
  ContinuousDeploymentSingleWeightConfig$,
  CookieNames$,
  CookiePreference$,
  CopyDistribution$,
  CopyDistributionCommand,
  CopyDistributionRequest$,
  CopyDistributionResult$,
  CreateAnycastIpList$,
  CreateAnycastIpListCommand,
  CreateAnycastIpListRequest$,
  CreateAnycastIpListResult$,
  CreateCachePolicy$,
  CreateCachePolicyCommand,
  CreateCachePolicyRequest$,
  CreateCachePolicyResult$,
  CreateCloudFrontOriginAccessIdentity$,
  CreateCloudFrontOriginAccessIdentityCommand,
  CreateCloudFrontOriginAccessIdentityRequest$,
  CreateCloudFrontOriginAccessIdentityResult$,
  CreateConnectionFunction$,
  CreateConnectionFunctionCommand,
  CreateConnectionFunctionRequest$,
  CreateConnectionFunctionResult$,
  CreateConnectionGroup$,
  CreateConnectionGroupCommand,
  CreateConnectionGroupRequest$,
  CreateConnectionGroupResult$,
  CreateContinuousDeploymentPolicy$,
  CreateContinuousDeploymentPolicyCommand,
  CreateContinuousDeploymentPolicyRequest$,
  CreateContinuousDeploymentPolicyResult$,
  CreateDistribution$,
  CreateDistributionCommand,
  CreateDistributionRequest$,
  CreateDistributionResult$,
  CreateDistributionTenant$,
  CreateDistributionTenantCommand,
  CreateDistributionTenantRequest$,
  CreateDistributionTenantResult$,
  CreateDistributionWithTags$,
  CreateDistributionWithTagsCommand,
  CreateDistributionWithTagsRequest$,
  CreateDistributionWithTagsResult$,
  CreateFieldLevelEncryptionConfig$,
  CreateFieldLevelEncryptionConfigCommand,
  CreateFieldLevelEncryptionConfigRequest$,
  CreateFieldLevelEncryptionConfigResult$,
  CreateFieldLevelEncryptionProfile$,
  CreateFieldLevelEncryptionProfileCommand,
  CreateFieldLevelEncryptionProfileRequest$,
  CreateFieldLevelEncryptionProfileResult$,
  CreateFunction$,
  CreateFunctionCommand,
  CreateFunctionRequest$,
  CreateFunctionResult$,
  CreateInvalidation$,
  CreateInvalidationCommand,
  CreateInvalidationForDistributionTenant$,
  CreateInvalidationForDistributionTenantCommand,
  CreateInvalidationForDistributionTenantRequest$,
  CreateInvalidationForDistributionTenantResult$,
  CreateInvalidationRequest$,
  CreateInvalidationResult$,
  CreateKeyGroup$,
  CreateKeyGroupCommand,
  CreateKeyGroupRequest$,
  CreateKeyGroupResult$,
  CreateKeyValueStore$,
  CreateKeyValueStoreCommand,
  CreateKeyValueStoreRequest$,
  CreateKeyValueStoreResult$,
  CreateMonitoringSubscription$,
  CreateMonitoringSubscriptionCommand,
  CreateMonitoringSubscriptionRequest$,
  CreateMonitoringSubscriptionResult$,
  CreateOriginAccessControl$,
  CreateOriginAccessControlCommand,
  CreateOriginAccessControlRequest$,
  CreateOriginAccessControlResult$,
  CreateOriginRequestPolicy$,
  CreateOriginRequestPolicyCommand,
  CreateOriginRequestPolicyRequest$,
  CreateOriginRequestPolicyResult$,
  CreatePublicKey$,
  CreatePublicKeyCommand,
  CreatePublicKeyRequest$,
  CreatePublicKeyResult$,
  CreateRealtimeLogConfig$,
  CreateRealtimeLogConfigCommand,
  CreateRealtimeLogConfigRequest$,
  CreateRealtimeLogConfigResult$,
  CreateResponseHeadersPolicy$,
  CreateResponseHeadersPolicyCommand,
  CreateResponseHeadersPolicyRequest$,
  CreateResponseHeadersPolicyResult$,
  CreateStreamingDistribution$,
  CreateStreamingDistributionCommand,
  CreateStreamingDistributionRequest$,
  CreateStreamingDistributionResult$,
  CreateStreamingDistributionWithTags$,
  CreateStreamingDistributionWithTagsCommand,
  CreateStreamingDistributionWithTagsRequest$,
  CreateStreamingDistributionWithTagsResult$,
  CreateTrustStore$,
  CreateTrustStoreCommand,
  CreateTrustStoreRequest$,
  CreateTrustStoreResult$,
  CreateVpcOrigin$,
  CreateVpcOriginCommand,
  CreateVpcOriginRequest$,
  CreateVpcOriginResult$,
  CustomErrorResponse$,
  CustomErrorResponses$,
  CustomHeaders$,
  CustomOriginConfig$,
  CustomizationActionType,
  Customizations$,
  DefaultCacheBehavior$,
  DeleteAnycastIpList$,
  DeleteAnycastIpListCommand,
  DeleteAnycastIpListRequest$,
  DeleteCachePolicy$,
  DeleteCachePolicyCommand,
  DeleteCachePolicyRequest$,
  DeleteCloudFrontOriginAccessIdentity$,
  DeleteCloudFrontOriginAccessIdentityCommand,
  DeleteCloudFrontOriginAccessIdentityRequest$,
  DeleteConnectionFunction$,
  DeleteConnectionFunctionCommand,
  DeleteConnectionFunctionRequest$,
  DeleteConnectionGroup$,
  DeleteConnectionGroupCommand,
  DeleteConnectionGroupRequest$,
  DeleteContinuousDeploymentPolicy$,
  DeleteContinuousDeploymentPolicyCommand,
  DeleteContinuousDeploymentPolicyRequest$,
  DeleteDistribution$,
  DeleteDistributionCommand,
  DeleteDistributionRequest$,
  DeleteDistributionTenant$,
  DeleteDistributionTenantCommand,
  DeleteDistributionTenantRequest$,
  DeleteFieldLevelEncryptionConfig$,
  DeleteFieldLevelEncryptionConfigCommand,
  DeleteFieldLevelEncryptionConfigRequest$,
  DeleteFieldLevelEncryptionProfile$,
  DeleteFieldLevelEncryptionProfileCommand,
  DeleteFieldLevelEncryptionProfileRequest$,
  DeleteFunction$,
  DeleteFunctionCommand,
  DeleteFunctionRequest$,
  DeleteKeyGroup$,
  DeleteKeyGroupCommand,
  DeleteKeyGroupRequest$,
  DeleteKeyValueStore$,
  DeleteKeyValueStoreCommand,
  DeleteKeyValueStoreRequest$,
  DeleteMonitoringSubscription$,
  DeleteMonitoringSubscriptionCommand,
  DeleteMonitoringSubscriptionRequest$,
  DeleteMonitoringSubscriptionResult$,
  DeleteOriginAccessControl$,
  DeleteOriginAccessControlCommand,
  DeleteOriginAccessControlRequest$,
  DeleteOriginRequestPolicy$,
  DeleteOriginRequestPolicyCommand,
  DeleteOriginRequestPolicyRequest$,
  DeletePublicKey$,
  DeletePublicKeyCommand,
  DeletePublicKeyRequest$,
  DeleteRealtimeLogConfig$,
  DeleteRealtimeLogConfigCommand,
  DeleteRealtimeLogConfigRequest$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResponseHeadersPolicy$,
  DeleteResponseHeadersPolicyCommand,
  DeleteResponseHeadersPolicyRequest$,
  DeleteStreamingDistribution$,
  DeleteStreamingDistributionCommand,
  DeleteStreamingDistributionRequest$,
  DeleteTrustStore$,
  DeleteTrustStoreCommand,
  DeleteTrustStoreRequest$,
  DeleteVpcOrigin$,
  DeleteVpcOriginCommand,
  DeleteVpcOriginRequest$,
  DeleteVpcOriginResult$,
  DescribeConnectionFunction$,
  DescribeConnectionFunctionCommand,
  DescribeConnectionFunctionRequest$,
  DescribeConnectionFunctionResult$,
  DescribeFunction$,
  DescribeFunctionCommand,
  DescribeFunctionRequest$,
  DescribeFunctionResult$,
  DescribeKeyValueStore$,
  DescribeKeyValueStoreCommand,
  DescribeKeyValueStoreRequest$,
  DescribeKeyValueStoreResult$,
  DisassociateDistributionTenantWebACL$,
  DisassociateDistributionTenantWebACLCommand,
  DisassociateDistributionTenantWebACLRequest$,
  DisassociateDistributionTenantWebACLResult$,
  DisassociateDistributionWebACL$,
  DisassociateDistributionWebACLCommand,
  DisassociateDistributionWebACLRequest$,
  DisassociateDistributionWebACLResult$,
  Distribution$,
  DistributionAlreadyExists,
  DistributionAlreadyExists$,
  DistributionConfig$,
  DistributionConfigWithTags$,
  DistributionIdList$,
  DistributionIdOwner$,
  DistributionIdOwnerList$,
  DistributionList$,
  DistributionNotDisabled,
  DistributionNotDisabled$,
  DistributionResourceId$,
  DistributionResourceType,
  DistributionSummary$,
  DistributionTenant$,
  DistributionTenantAssociationFilter$,
  DistributionTenantSummary$,
  DnsConfiguration$,
  DnsConfigurationStatus,
  DomainConflict$,
  DomainItem$,
  DomainResult$,
  DomainStatus,
  EncryptionEntities$,
  EncryptionEntity$,
  EndPoint$,
  EntityAlreadyExists,
  EntityAlreadyExists$,
  EntityLimitExceeded,
  EntityLimitExceeded$,
  EntityNotFound,
  EntityNotFound$,
  EntitySizeLimitExceeded,
  EntitySizeLimitExceeded$,
  EventType,
  FieldLevelEncryption$,
  FieldLevelEncryptionConfig$,
  FieldLevelEncryptionConfigAlreadyExists,
  FieldLevelEncryptionConfigAlreadyExists$,
  FieldLevelEncryptionConfigInUse,
  FieldLevelEncryptionConfigInUse$,
  FieldLevelEncryptionList$,
  FieldLevelEncryptionProfile$,
  FieldLevelEncryptionProfileAlreadyExists,
  FieldLevelEncryptionProfileAlreadyExists$,
  FieldLevelEncryptionProfileConfig$,
  FieldLevelEncryptionProfileInUse,
  FieldLevelEncryptionProfileInUse$,
  FieldLevelEncryptionProfileList$,
  FieldLevelEncryptionProfileSizeExceeded,
  FieldLevelEncryptionProfileSizeExceeded$,
  FieldLevelEncryptionProfileSummary$,
  FieldLevelEncryptionSummary$,
  FieldPatterns$,
  Format,
  ForwardedValues$,
  FrameOptionsList,
  FunctionAlreadyExists,
  FunctionAlreadyExists$,
  FunctionAssociation$,
  FunctionAssociations$,
  FunctionConfig$,
  FunctionInUse,
  FunctionInUse$,
  FunctionList$,
  FunctionMetadata$,
  FunctionRuntime,
  FunctionSizeLimitExceeded,
  FunctionSizeLimitExceeded$,
  FunctionStage,
  FunctionSummary$,
  GeoRestriction$,
  GeoRestrictionCustomization$,
  GeoRestrictionType,
  GetAnycastIpList$,
  GetAnycastIpListCommand,
  GetAnycastIpListRequest$,
  GetAnycastIpListResult$,
  GetCachePolicy$,
  GetCachePolicyCommand,
  GetCachePolicyConfig$,
  GetCachePolicyConfigCommand,
  GetCachePolicyConfigRequest$,
  GetCachePolicyConfigResult$,
  GetCachePolicyRequest$,
  GetCachePolicyResult$,
  GetCloudFrontOriginAccessIdentity$,
  GetCloudFrontOriginAccessIdentityCommand,
  GetCloudFrontOriginAccessIdentityConfig$,
  GetCloudFrontOriginAccessIdentityConfigCommand,
  GetCloudFrontOriginAccessIdentityConfigRequest$,
  GetCloudFrontOriginAccessIdentityConfigResult$,
  GetCloudFrontOriginAccessIdentityRequest$,
  GetCloudFrontOriginAccessIdentityResult$,
  GetConnectionFunction$,
  GetConnectionFunctionCommand,
  GetConnectionFunctionRequest$,
  GetConnectionFunctionResult$,
  GetConnectionGroup$,
  GetConnectionGroupByRoutingEndpoint$,
  GetConnectionGroupByRoutingEndpointCommand,
  GetConnectionGroupByRoutingEndpointRequest$,
  GetConnectionGroupByRoutingEndpointResult$,
  GetConnectionGroupCommand,
  GetConnectionGroupRequest$,
  GetConnectionGroupResult$,
  GetContinuousDeploymentPolicy$,
  GetContinuousDeploymentPolicyCommand,
  GetContinuousDeploymentPolicyConfig$,
  GetContinuousDeploymentPolicyConfigCommand,
  GetContinuousDeploymentPolicyConfigRequest$,
  GetContinuousDeploymentPolicyConfigResult$,
  GetContinuousDeploymentPolicyRequest$,
  GetContinuousDeploymentPolicyResult$,
  GetDistribution$,
  GetDistributionCommand,
  GetDistributionConfig$,
  GetDistributionConfigCommand,
  GetDistributionConfigRequest$,
  GetDistributionConfigResult$,
  GetDistributionRequest$,
  GetDistributionResult$,
  GetDistributionTenant$,
  GetDistributionTenantByDomain$,
  GetDistributionTenantByDomainCommand,
  GetDistributionTenantByDomainRequest$,
  GetDistributionTenantByDomainResult$,
  GetDistributionTenantCommand,
  GetDistributionTenantRequest$,
  GetDistributionTenantResult$,
  GetFieldLevelEncryption$,
  GetFieldLevelEncryptionCommand,
  GetFieldLevelEncryptionConfig$,
  GetFieldLevelEncryptionConfigCommand,
  GetFieldLevelEncryptionConfigRequest$,
  GetFieldLevelEncryptionConfigResult$,
  GetFieldLevelEncryptionProfile$,
  GetFieldLevelEncryptionProfileCommand,
  GetFieldLevelEncryptionProfileConfig$,
  GetFieldLevelEncryptionProfileConfigCommand,
  GetFieldLevelEncryptionProfileConfigRequest$,
  GetFieldLevelEncryptionProfileConfigResult$,
  GetFieldLevelEncryptionProfileRequest$,
  GetFieldLevelEncryptionProfileResult$,
  GetFieldLevelEncryptionRequest$,
  GetFieldLevelEncryptionResult$,
  GetFunction$,
  GetFunctionCommand,
  GetFunctionRequest$,
  GetFunctionResult$,
  GetInvalidation$,
  GetInvalidationCommand,
  GetInvalidationForDistributionTenant$,
  GetInvalidationForDistributionTenantCommand,
  GetInvalidationForDistributionTenantRequest$,
  GetInvalidationForDistributionTenantResult$,
  GetInvalidationRequest$,
  GetInvalidationResult$,
  GetKeyGroup$,
  GetKeyGroupCommand,
  GetKeyGroupConfig$,
  GetKeyGroupConfigCommand,
  GetKeyGroupConfigRequest$,
  GetKeyGroupConfigResult$,
  GetKeyGroupRequest$,
  GetKeyGroupResult$,
  GetManagedCertificateDetails$,
  GetManagedCertificateDetailsCommand,
  GetManagedCertificateDetailsRequest$,
  GetManagedCertificateDetailsResult$,
  GetMonitoringSubscription$,
  GetMonitoringSubscriptionCommand,
  GetMonitoringSubscriptionRequest$,
  GetMonitoringSubscriptionResult$,
  GetOriginAccessControl$,
  GetOriginAccessControlCommand,
  GetOriginAccessControlConfig$,
  GetOriginAccessControlConfigCommand,
  GetOriginAccessControlConfigRequest$,
  GetOriginAccessControlConfigResult$,
  GetOriginAccessControlRequest$,
  GetOriginAccessControlResult$,
  GetOriginRequestPolicy$,
  GetOriginRequestPolicyCommand,
  GetOriginRequestPolicyConfig$,
  GetOriginRequestPolicyConfigCommand,
  GetOriginRequestPolicyConfigRequest$,
  GetOriginRequestPolicyConfigResult$,
  GetOriginRequestPolicyRequest$,
  GetOriginRequestPolicyResult$,
  GetPublicKey$,
  GetPublicKeyCommand,
  GetPublicKeyConfig$,
  GetPublicKeyConfigCommand,
  GetPublicKeyConfigRequest$,
  GetPublicKeyConfigResult$,
  GetPublicKeyRequest$,
  GetPublicKeyResult$,
  GetRealtimeLogConfig$,
  GetRealtimeLogConfigCommand,
  GetRealtimeLogConfigRequest$,
  GetRealtimeLogConfigResult$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResult$,
  GetResponseHeadersPolicy$,
  GetResponseHeadersPolicyCommand,
  GetResponseHeadersPolicyConfig$,
  GetResponseHeadersPolicyConfigCommand,
  GetResponseHeadersPolicyConfigRequest$,
  GetResponseHeadersPolicyConfigResult$,
  GetResponseHeadersPolicyRequest$,
  GetResponseHeadersPolicyResult$,
  GetStreamingDistribution$,
  GetStreamingDistributionCommand,
  GetStreamingDistributionConfig$,
  GetStreamingDistributionConfigCommand,
  GetStreamingDistributionConfigRequest$,
  GetStreamingDistributionConfigResult$,
  GetStreamingDistributionRequest$,
  GetStreamingDistributionResult$,
  GetTrustStore$,
  GetTrustStoreCommand,
  GetTrustStoreRequest$,
  GetTrustStoreResult$,
  GetVpcOrigin$,
  GetVpcOriginCommand,
  GetVpcOriginRequest$,
  GetVpcOriginResult$,
  GrpcConfig$,
  Headers$,
  HttpVersion,
  ICPRecordalStatus,
  IllegalDelete,
  IllegalDelete$,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior,
  IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior$,
  IllegalOriginAccessConfiguration,
  IllegalOriginAccessConfiguration$,
  IllegalUpdate,
  IllegalUpdate$,
  ImportSource$,
  ImportSourceType,
  InconsistentQuantities,
  InconsistentQuantities$,
  InvalidArgument,
  InvalidArgument$,
  InvalidAssociation,
  InvalidAssociation$,
  InvalidDefaultRootObject,
  InvalidDefaultRootObject$,
  InvalidDomainNameForOriginAccessControl,
  InvalidDomainNameForOriginAccessControl$,
  InvalidErrorCode,
  InvalidErrorCode$,
  InvalidForwardCookies,
  InvalidForwardCookies$,
  InvalidFunctionAssociation,
  InvalidFunctionAssociation$,
  InvalidGeoRestrictionParameter,
  InvalidGeoRestrictionParameter$,
  InvalidHeadersForS3Origin,
  InvalidHeadersForS3Origin$,
  InvalidIfMatchVersion,
  InvalidIfMatchVersion$,
  InvalidLambdaFunctionAssociation,
  InvalidLambdaFunctionAssociation$,
  InvalidLocationCode,
  InvalidLocationCode$,
  InvalidMinimumProtocolVersion,
  InvalidMinimumProtocolVersion$,
  InvalidOrigin,
  InvalidOrigin$,
  InvalidOriginAccessControl,
  InvalidOriginAccessControl$,
  InvalidOriginAccessIdentity,
  InvalidOriginAccessIdentity$,
  InvalidOriginKeepaliveTimeout,
  InvalidOriginKeepaliveTimeout$,
  InvalidOriginReadTimeout,
  InvalidOriginReadTimeout$,
  InvalidProtocolSettings,
  InvalidProtocolSettings$,
  InvalidQueryStringParameters,
  InvalidQueryStringParameters$,
  InvalidRelativePath,
  InvalidRelativePath$,
  InvalidRequiredProtocol,
  InvalidRequiredProtocol$,
  InvalidResponseCode,
  InvalidResponseCode$,
  InvalidTTLOrder,
  InvalidTTLOrder$,
  InvalidTagging,
  InvalidTagging$,
  InvalidViewerCertificate,
  InvalidViewerCertificate$,
  InvalidWebACLId,
  InvalidWebACLId$,
  Invalidation$,
  InvalidationBatch$,
  InvalidationList$,
  InvalidationSummary$,
  IpAddressType,
  IpamCidrConfig$,
  IpamCidrStatus,
  IpamConfig$,
  ItemSelection,
  KGKeyPairIds$,
  KeyGroup$,
  KeyGroupAlreadyExists,
  KeyGroupAlreadyExists$,
  KeyGroupConfig$,
  KeyGroupList$,
  KeyGroupSummary$,
  KeyPairIds$,
  KeyValueStore$,
  KeyValueStoreAssociation$,
  KeyValueStoreAssociations$,
  KeyValueStoreList$,
  KinesisStreamConfig$,
  LambdaFunctionAssociation$,
  LambdaFunctionAssociations$,
  ListAnycastIpLists$,
  ListAnycastIpListsCommand,
  ListAnycastIpListsRequest$,
  ListAnycastIpListsResult$,
  ListCachePolicies$,
  ListCachePoliciesCommand,
  ListCachePoliciesRequest$,
  ListCachePoliciesResult$,
  ListCloudFrontOriginAccessIdentities$,
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesRequest$,
  ListCloudFrontOriginAccessIdentitiesResult$,
  ListConflictingAliases$,
  ListConflictingAliasesCommand,
  ListConflictingAliasesRequest$,
  ListConflictingAliasesResult$,
  ListConnectionFunctions$,
  ListConnectionFunctionsCommand,
  ListConnectionFunctionsRequest$,
  ListConnectionFunctionsResult$,
  ListConnectionGroups$,
  ListConnectionGroupsCommand,
  ListConnectionGroupsRequest$,
  ListConnectionGroupsResult$,
  ListContinuousDeploymentPolicies$,
  ListContinuousDeploymentPoliciesCommand,
  ListContinuousDeploymentPoliciesRequest$,
  ListContinuousDeploymentPoliciesResult$,
  ListDistributionTenants$,
  ListDistributionTenantsByCustomization$,
  ListDistributionTenantsByCustomizationCommand,
  ListDistributionTenantsByCustomizationRequest$,
  ListDistributionTenantsByCustomizationResult$,
  ListDistributionTenantsCommand,
  ListDistributionTenantsRequest$,
  ListDistributionTenantsResult$,
  ListDistributions$,
  ListDistributionsByAnycastIpListId$,
  ListDistributionsByAnycastIpListIdCommand,
  ListDistributionsByAnycastIpListIdRequest$,
  ListDistributionsByAnycastIpListIdResult$,
  ListDistributionsByCachePolicyId$,
  ListDistributionsByCachePolicyIdCommand,
  ListDistributionsByCachePolicyIdRequest$,
  ListDistributionsByCachePolicyIdResult$,
  ListDistributionsByConnectionFunction$,
  ListDistributionsByConnectionFunctionCommand,
  ListDistributionsByConnectionFunctionRequest$,
  ListDistributionsByConnectionFunctionResult$,
  ListDistributionsByConnectionMode$,
  ListDistributionsByConnectionModeCommand,
  ListDistributionsByConnectionModeRequest$,
  ListDistributionsByConnectionModeResult$,
  ListDistributionsByKeyGroup$,
  ListDistributionsByKeyGroupCommand,
  ListDistributionsByKeyGroupRequest$,
  ListDistributionsByKeyGroupResult$,
  ListDistributionsByOriginRequestPolicyId$,
  ListDistributionsByOriginRequestPolicyIdCommand,
  ListDistributionsByOriginRequestPolicyIdRequest$,
  ListDistributionsByOriginRequestPolicyIdResult$,
  ListDistributionsByOwnedResource$,
  ListDistributionsByOwnedResourceCommand,
  ListDistributionsByOwnedResourceRequest$,
  ListDistributionsByOwnedResourceResult$,
  ListDistributionsByRealtimeLogConfig$,
  ListDistributionsByRealtimeLogConfigCommand,
  ListDistributionsByRealtimeLogConfigRequest$,
  ListDistributionsByRealtimeLogConfigResult$,
  ListDistributionsByResponseHeadersPolicyId$,
  ListDistributionsByResponseHeadersPolicyIdCommand,
  ListDistributionsByResponseHeadersPolicyIdRequest$,
  ListDistributionsByResponseHeadersPolicyIdResult$,
  ListDistributionsByTrustStore$,
  ListDistributionsByTrustStoreCommand,
  ListDistributionsByTrustStoreRequest$,
  ListDistributionsByTrustStoreResult$,
  ListDistributionsByVpcOriginId$,
  ListDistributionsByVpcOriginIdCommand,
  ListDistributionsByVpcOriginIdRequest$,
  ListDistributionsByVpcOriginIdResult$,
  ListDistributionsByWebACLId$,
  ListDistributionsByWebACLIdCommand,
  ListDistributionsByWebACLIdRequest$,
  ListDistributionsByWebACLIdResult$,
  ListDistributionsCommand,
  ListDistributionsRequest$,
  ListDistributionsResult$,
  ListDomainConflicts$,
  ListDomainConflictsCommand,
  ListDomainConflictsRequest$,
  ListDomainConflictsResult$,
  ListFieldLevelEncryptionConfigs$,
  ListFieldLevelEncryptionConfigsCommand,
  ListFieldLevelEncryptionConfigsRequest$,
  ListFieldLevelEncryptionConfigsResult$,
  ListFieldLevelEncryptionProfiles$,
  ListFieldLevelEncryptionProfilesCommand,
  ListFieldLevelEncryptionProfilesRequest$,
  ListFieldLevelEncryptionProfilesResult$,
  ListFunctions$,
  ListFunctionsCommand,
  ListFunctionsRequest$,
  ListFunctionsResult$,
  ListInvalidations$,
  ListInvalidationsCommand,
  ListInvalidationsForDistributionTenant$,
  ListInvalidationsForDistributionTenantCommand,
  ListInvalidationsForDistributionTenantRequest$,
  ListInvalidationsForDistributionTenantResult$,
  ListInvalidationsRequest$,
  ListInvalidationsResult$,
  ListKeyGroups$,
  ListKeyGroupsCommand,
  ListKeyGroupsRequest$,
  ListKeyGroupsResult$,
  ListKeyValueStores$,
  ListKeyValueStoresCommand,
  ListKeyValueStoresRequest$,
  ListKeyValueStoresResult$,
  ListOriginAccessControls$,
  ListOriginAccessControlsCommand,
  ListOriginAccessControlsRequest$,
  ListOriginAccessControlsResult$,
  ListOriginRequestPolicies$,
  ListOriginRequestPoliciesCommand,
  ListOriginRequestPoliciesRequest$,
  ListOriginRequestPoliciesResult$,
  ListPublicKeys$,
  ListPublicKeysCommand,
  ListPublicKeysRequest$,
  ListPublicKeysResult$,
  ListRealtimeLogConfigs$,
  ListRealtimeLogConfigsCommand,
  ListRealtimeLogConfigsRequest$,
  ListRealtimeLogConfigsResult$,
  ListResponseHeadersPolicies$,
  ListResponseHeadersPoliciesCommand,
  ListResponseHeadersPoliciesRequest$,
  ListResponseHeadersPoliciesResult$,
  ListStreamingDistributions$,
  ListStreamingDistributionsCommand,
  ListStreamingDistributionsRequest$,
  ListStreamingDistributionsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  ListTrustStores$,
  ListTrustStoresCommand,
  ListTrustStoresRequest$,
  ListTrustStoresResult$,
  ListVpcOrigins$,
  ListVpcOriginsCommand,
  ListVpcOriginsRequest$,
  ListVpcOriginsResult$,
  LoggingConfig$,
  ManagedCertificateDetails$,
  ManagedCertificateRequest$,
  ManagedCertificateStatus,
  Method,
  MinimumProtocolVersion,
  MissingBody,
  MissingBody$,
  MonitoringSubscription$,
  MonitoringSubscriptionAlreadyExists,
  MonitoringSubscriptionAlreadyExists$,
  NoSuchCachePolicy,
  NoSuchCachePolicy$,
  NoSuchCloudFrontOriginAccessIdentity,
  NoSuchCloudFrontOriginAccessIdentity$,
  NoSuchContinuousDeploymentPolicy,
  NoSuchContinuousDeploymentPolicy$,
  NoSuchDistribution,
  NoSuchDistribution$,
  NoSuchFieldLevelEncryptionConfig,
  NoSuchFieldLevelEncryptionConfig$,
  NoSuchFieldLevelEncryptionProfile,
  NoSuchFieldLevelEncryptionProfile$,
  NoSuchFunctionExists,
  NoSuchFunctionExists$,
  NoSuchInvalidation,
  NoSuchInvalidation$,
  NoSuchMonitoringSubscription,
  NoSuchMonitoringSubscription$,
  NoSuchOrigin,
  NoSuchOrigin$,
  NoSuchOriginAccessControl,
  NoSuchOriginAccessControl$,
  NoSuchOriginRequestPolicy,
  NoSuchOriginRequestPolicy$,
  NoSuchPublicKey,
  NoSuchPublicKey$,
  NoSuchRealtimeLogConfig,
  NoSuchRealtimeLogConfig$,
  NoSuchResource,
  NoSuchResource$,
  NoSuchResponseHeadersPolicy,
  NoSuchResponseHeadersPolicy$,
  NoSuchStreamingDistribution,
  NoSuchStreamingDistribution$,
  Origin$,
  OriginAccessControl$,
  OriginAccessControlAlreadyExists,
  OriginAccessControlAlreadyExists$,
  OriginAccessControlConfig$,
  OriginAccessControlInUse,
  OriginAccessControlInUse$,
  OriginAccessControlList$,
  OriginAccessControlOriginTypes,
  OriginAccessControlSigningBehaviors,
  OriginAccessControlSigningProtocols,
  OriginAccessControlSummary$,
  OriginCustomHeader$,
  OriginGroup$,
  OriginGroupFailoverCriteria$,
  OriginGroupMember$,
  OriginGroupMembers$,
  OriginGroupSelectionCriteria,
  OriginGroups$,
  OriginProtocolPolicy,
  OriginRequestPolicy$,
  OriginRequestPolicyAlreadyExists,
  OriginRequestPolicyAlreadyExists$,
  OriginRequestPolicyConfig$,
  OriginRequestPolicyCookieBehavior,
  OriginRequestPolicyCookiesConfig$,
  OriginRequestPolicyHeaderBehavior,
  OriginRequestPolicyHeadersConfig$,
  OriginRequestPolicyInUse,
  OriginRequestPolicyInUse$,
  OriginRequestPolicyList$,
  OriginRequestPolicyQueryStringBehavior,
  OriginRequestPolicyQueryStringsConfig$,
  OriginRequestPolicySummary$,
  OriginRequestPolicyType,
  OriginShield$,
  OriginSslProtocols$,
  Origins$,
  Parameter$,
  ParameterDefinition$,
  ParameterDefinitionSchema$,
  ParametersInCacheKeyAndForwardedToOrigin$,
  Paths$,
  PreconditionFailed,
  PreconditionFailed$,
  PriceClass,
  PublicKey$,
  PublicKeyAlreadyExists,
  PublicKeyAlreadyExists$,
  PublicKeyConfig$,
  PublicKeyInUse,
  PublicKeyInUse$,
  PublicKeyList$,
  PublicKeySummary$,
  PublishConnectionFunction$,
  PublishConnectionFunctionCommand,
  PublishConnectionFunctionRequest$,
  PublishConnectionFunctionResult$,
  PublishFunction$,
  PublishFunctionCommand,
  PublishFunctionRequest$,
  PublishFunctionResult$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResult$,
  QueryArgProfile$,
  QueryArgProfileConfig$,
  QueryArgProfileEmpty,
  QueryArgProfileEmpty$,
  QueryArgProfiles$,
  QueryStringCacheKeys$,
  QueryStringNames$,
  RealtimeLogConfig$,
  RealtimeLogConfigAlreadyExists,
  RealtimeLogConfigAlreadyExists$,
  RealtimeLogConfigInUse,
  RealtimeLogConfigInUse$,
  RealtimeLogConfigOwnerMismatch,
  RealtimeLogConfigOwnerMismatch$,
  RealtimeLogConfigs$,
  RealtimeMetricsSubscriptionConfig$,
  RealtimeMetricsSubscriptionStatus,
  ReferrerPolicyList,
  ResourceInUse,
  ResourceInUse$,
  ResourceNotDisabled,
  ResourceNotDisabled$,
  ResponseHeadersPolicy$,
  ResponseHeadersPolicyAccessControlAllowHeaders$,
  ResponseHeadersPolicyAccessControlAllowMethods$,
  ResponseHeadersPolicyAccessControlAllowMethodsValues,
  ResponseHeadersPolicyAccessControlAllowOrigins$,
  ResponseHeadersPolicyAccessControlExposeHeaders$,
  ResponseHeadersPolicyAlreadyExists,
  ResponseHeadersPolicyAlreadyExists$,
  ResponseHeadersPolicyConfig$,
  ResponseHeadersPolicyContentSecurityPolicy$,
  ResponseHeadersPolicyContentTypeOptions$,
  ResponseHeadersPolicyCorsConfig$,
  ResponseHeadersPolicyCustomHeader$,
  ResponseHeadersPolicyCustomHeadersConfig$,
  ResponseHeadersPolicyFrameOptions$,
  ResponseHeadersPolicyInUse,
  ResponseHeadersPolicyInUse$,
  ResponseHeadersPolicyList$,
  ResponseHeadersPolicyReferrerPolicy$,
  ResponseHeadersPolicyRemoveHeader$,
  ResponseHeadersPolicyRemoveHeadersConfig$,
  ResponseHeadersPolicySecurityHeadersConfig$,
  ResponseHeadersPolicyServerTimingHeadersConfig$,
  ResponseHeadersPolicyStrictTransportSecurity$,
  ResponseHeadersPolicySummary$,
  ResponseHeadersPolicyType,
  ResponseHeadersPolicyXSSProtection$,
  Restrictions$,
  S3Origin$,
  S3OriginConfig$,
  SSLSupportMethod,
  SessionStickinessConfig$,
  Signer$,
  SslProtocol,
  StagingDistributionDnsNames$,
  StagingDistributionInUse,
  StagingDistributionInUse$,
  StatusCodes$,
  StreamingDistribution$,
  StreamingDistributionAlreadyExists,
  StreamingDistributionAlreadyExists$,
  StreamingDistributionConfig$,
  StreamingDistributionConfigWithTags$,
  StreamingDistributionList$,
  StreamingDistributionNotDisabled,
  StreamingDistributionNotDisabled$,
  StreamingDistributionSummary$,
  StreamingLoggingConfig$,
  StringSchemaConfig$,
  Tag$,
  TagKeys$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Tags$,
  TenantConfig$,
  TestConnectionFunction$,
  TestConnectionFunctionCommand,
  TestConnectionFunctionRequest$,
  TestConnectionFunctionResult$,
  TestFunction$,
  TestFunctionCommand,
  TestFunctionFailed,
  TestFunctionFailed$,
  TestFunctionRequest$,
  TestFunctionResult$,
  TestResult$,
  TooLongCSPInResponseHeadersPolicy,
  TooLongCSPInResponseHeadersPolicy$,
  TooManyCacheBehaviors,
  TooManyCacheBehaviors$,
  TooManyCachePolicies,
  TooManyCachePolicies$,
  TooManyCertificates,
  TooManyCertificates$,
  TooManyCloudFrontOriginAccessIdentities,
  TooManyCloudFrontOriginAccessIdentities$,
  TooManyContinuousDeploymentPolicies,
  TooManyContinuousDeploymentPolicies$,
  TooManyCookieNamesInWhiteList,
  TooManyCookieNamesInWhiteList$,
  TooManyCookiesInCachePolicy,
  TooManyCookiesInCachePolicy$,
  TooManyCookiesInOriginRequestPolicy,
  TooManyCookiesInOriginRequestPolicy$,
  TooManyCustomHeadersInResponseHeadersPolicy,
  TooManyCustomHeadersInResponseHeadersPolicy$,
  TooManyDistributionCNAMEs,
  TooManyDistributionCNAMEs$,
  TooManyDistributions,
  TooManyDistributions$,
  TooManyDistributionsAssociatedToCachePolicy,
  TooManyDistributionsAssociatedToCachePolicy$,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig,
  TooManyDistributionsAssociatedToFieldLevelEncryptionConfig$,
  TooManyDistributionsAssociatedToKeyGroup,
  TooManyDistributionsAssociatedToKeyGroup$,
  TooManyDistributionsAssociatedToOriginAccessControl,
  TooManyDistributionsAssociatedToOriginAccessControl$,
  TooManyDistributionsAssociatedToOriginRequestPolicy,
  TooManyDistributionsAssociatedToOriginRequestPolicy$,
  TooManyDistributionsAssociatedToResponseHeadersPolicy,
  TooManyDistributionsAssociatedToResponseHeadersPolicy$,
  TooManyDistributionsWithFunctionAssociations,
  TooManyDistributionsWithFunctionAssociations$,
  TooManyDistributionsWithLambdaAssociations,
  TooManyDistributionsWithLambdaAssociations$,
  TooManyDistributionsWithSingleFunctionARN,
  TooManyDistributionsWithSingleFunctionARN$,
  TooManyFieldLevelEncryptionConfigs,
  TooManyFieldLevelEncryptionConfigs$,
  TooManyFieldLevelEncryptionContentTypeProfiles,
  TooManyFieldLevelEncryptionContentTypeProfiles$,
  TooManyFieldLevelEncryptionEncryptionEntities,
  TooManyFieldLevelEncryptionEncryptionEntities$,
  TooManyFieldLevelEncryptionFieldPatterns,
  TooManyFieldLevelEncryptionFieldPatterns$,
  TooManyFieldLevelEncryptionProfiles,
  TooManyFieldLevelEncryptionProfiles$,
  TooManyFieldLevelEncryptionQueryArgProfiles,
  TooManyFieldLevelEncryptionQueryArgProfiles$,
  TooManyFunctionAssociations,
  TooManyFunctionAssociations$,
  TooManyFunctions,
  TooManyFunctions$,
  TooManyHeadersInCachePolicy,
  TooManyHeadersInCachePolicy$,
  TooManyHeadersInForwardedValues,
  TooManyHeadersInForwardedValues$,
  TooManyHeadersInOriginRequestPolicy,
  TooManyHeadersInOriginRequestPolicy$,
  TooManyInvalidationsInProgress,
  TooManyInvalidationsInProgress$,
  TooManyKeyGroups,
  TooManyKeyGroups$,
  TooManyKeyGroupsAssociatedToDistribution,
  TooManyKeyGroupsAssociatedToDistribution$,
  TooManyLambdaFunctionAssociations,
  TooManyLambdaFunctionAssociations$,
  TooManyOriginAccessControls,
  TooManyOriginAccessControls$,
  TooManyOriginCustomHeaders,
  TooManyOriginCustomHeaders$,
  TooManyOriginGroupsPerDistribution,
  TooManyOriginGroupsPerDistribution$,
  TooManyOriginRequestPolicies,
  TooManyOriginRequestPolicies$,
  TooManyOrigins,
  TooManyOrigins$,
  TooManyPublicKeys,
  TooManyPublicKeys$,
  TooManyPublicKeysInKeyGroup,
  TooManyPublicKeysInKeyGroup$,
  TooManyQueryStringParameters,
  TooManyQueryStringParameters$,
  TooManyQueryStringsInCachePolicy,
  TooManyQueryStringsInCachePolicy$,
  TooManyQueryStringsInOriginRequestPolicy,
  TooManyQueryStringsInOriginRequestPolicy$,
  TooManyRealtimeLogConfigs,
  TooManyRealtimeLogConfigs$,
  TooManyRemoveHeadersInResponseHeadersPolicy,
  TooManyRemoveHeadersInResponseHeadersPolicy$,
  TooManyResponseHeadersPolicies,
  TooManyResponseHeadersPolicies$,
  TooManyStreamingDistributionCNAMEs,
  TooManyStreamingDistributionCNAMEs$,
  TooManyStreamingDistributions,
  TooManyStreamingDistributions$,
  TooManyTrustedSigners,
  TooManyTrustedSigners$,
  TrafficConfig$,
  TrustStore$,
  TrustStoreConfig$,
  TrustStoreStatus,
  TrustStoreSummary$,
  TrustedKeyGroupDoesNotExist,
  TrustedKeyGroupDoesNotExist$,
  TrustedKeyGroups$,
  TrustedSignerDoesNotExist,
  TrustedSignerDoesNotExist$,
  TrustedSigners$,
  UnsupportedOperation,
  UnsupportedOperation$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAnycastIpList$,
  UpdateAnycastIpListCommand,
  UpdateAnycastIpListRequest$,
  UpdateAnycastIpListResult$,
  UpdateCachePolicy$,
  UpdateCachePolicyCommand,
  UpdateCachePolicyRequest$,
  UpdateCachePolicyResult$,
  UpdateCloudFrontOriginAccessIdentity$,
  UpdateCloudFrontOriginAccessIdentityCommand,
  UpdateCloudFrontOriginAccessIdentityRequest$,
  UpdateCloudFrontOriginAccessIdentityResult$,
  UpdateConnectionFunction$,
  UpdateConnectionFunctionCommand,
  UpdateConnectionFunctionRequest$,
  UpdateConnectionFunctionResult$,
  UpdateConnectionGroup$,
  UpdateConnectionGroupCommand,
  UpdateConnectionGroupRequest$,
  UpdateConnectionGroupResult$,
  UpdateContinuousDeploymentPolicy$,
  UpdateContinuousDeploymentPolicyCommand,
  UpdateContinuousDeploymentPolicyRequest$,
  UpdateContinuousDeploymentPolicyResult$,
  UpdateDistribution$,
  UpdateDistributionCommand,
  UpdateDistributionRequest$,
  UpdateDistributionResult$,
  UpdateDistributionTenant$,
  UpdateDistributionTenantCommand,
  UpdateDistributionTenantRequest$,
  UpdateDistributionTenantResult$,
  UpdateDistributionWithStagingConfig$,
  UpdateDistributionWithStagingConfigCommand,
  UpdateDistributionWithStagingConfigRequest$,
  UpdateDistributionWithStagingConfigResult$,
  UpdateDomainAssociation$,
  UpdateDomainAssociationCommand,
  UpdateDomainAssociationRequest$,
  UpdateDomainAssociationResult$,
  UpdateFieldLevelEncryptionConfig$,
  UpdateFieldLevelEncryptionConfigCommand,
  UpdateFieldLevelEncryptionConfigRequest$,
  UpdateFieldLevelEncryptionConfigResult$,
  UpdateFieldLevelEncryptionProfile$,
  UpdateFieldLevelEncryptionProfileCommand,
  UpdateFieldLevelEncryptionProfileRequest$,
  UpdateFieldLevelEncryptionProfileResult$,
  UpdateFunction$,
  UpdateFunctionCommand,
  UpdateFunctionRequest$,
  UpdateFunctionResult$,
  UpdateKeyGroup$,
  UpdateKeyGroupCommand,
  UpdateKeyGroupRequest$,
  UpdateKeyGroupResult$,
  UpdateKeyValueStore$,
  UpdateKeyValueStoreCommand,
  UpdateKeyValueStoreRequest$,
  UpdateKeyValueStoreResult$,
  UpdateOriginAccessControl$,
  UpdateOriginAccessControlCommand,
  UpdateOriginAccessControlRequest$,
  UpdateOriginAccessControlResult$,
  UpdateOriginRequestPolicy$,
  UpdateOriginRequestPolicyCommand,
  UpdateOriginRequestPolicyRequest$,
  UpdateOriginRequestPolicyResult$,
  UpdatePublicKey$,
  UpdatePublicKeyCommand,
  UpdatePublicKeyRequest$,
  UpdatePublicKeyResult$,
  UpdateRealtimeLogConfig$,
  UpdateRealtimeLogConfigCommand,
  UpdateRealtimeLogConfigRequest$,
  UpdateRealtimeLogConfigResult$,
  UpdateResponseHeadersPolicy$,
  UpdateResponseHeadersPolicyCommand,
  UpdateResponseHeadersPolicyRequest$,
  UpdateResponseHeadersPolicyResult$,
  UpdateStreamingDistribution$,
  UpdateStreamingDistributionCommand,
  UpdateStreamingDistributionRequest$,
  UpdateStreamingDistributionResult$,
  UpdateTrustStore$,
  UpdateTrustStoreCommand,
  UpdateTrustStoreRequest$,
  UpdateTrustStoreResult$,
  UpdateVpcOrigin$,
  UpdateVpcOriginCommand,
  UpdateVpcOriginRequest$,
  UpdateVpcOriginResult$,
  ValidationTokenDetail$,
  ValidationTokenHost,
  VerifyDnsConfiguration$,
  VerifyDnsConfigurationCommand,
  VerifyDnsConfigurationRequest$,
  VerifyDnsConfigurationResult$,
  ViewerCertificate$,
  ViewerMtlsConfig$,
  ViewerMtlsMode,
  ViewerProtocolPolicy,
  VpcOrigin$,
  VpcOriginConfig$,
  VpcOriginEndpointConfig$,
  VpcOriginList$,
  VpcOriginSummary$,
  WebAclCustomization$,
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
assert(typeof AssociateAlias$ === "object");
assert(typeof AssociateDistributionTenantWebACLCommand === "function");
assert(typeof AssociateDistributionTenantWebACL$ === "object");
assert(typeof AssociateDistributionWebACLCommand === "function");
assert(typeof AssociateDistributionWebACL$ === "object");
assert(typeof CopyDistributionCommand === "function");
assert(typeof CopyDistribution$ === "object");
assert(typeof CreateAnycastIpListCommand === "function");
assert(typeof CreateAnycastIpList$ === "object");
assert(typeof CreateCachePolicyCommand === "function");
assert(typeof CreateCachePolicy$ === "object");
assert(typeof CreateCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof CreateCloudFrontOriginAccessIdentity$ === "object");
assert(typeof CreateConnectionFunctionCommand === "function");
assert(typeof CreateConnectionFunction$ === "object");
assert(typeof CreateConnectionGroupCommand === "function");
assert(typeof CreateConnectionGroup$ === "object");
assert(typeof CreateContinuousDeploymentPolicyCommand === "function");
assert(typeof CreateContinuousDeploymentPolicy$ === "object");
assert(typeof CreateDistributionCommand === "function");
assert(typeof CreateDistribution$ === "object");
assert(typeof CreateDistributionTenantCommand === "function");
assert(typeof CreateDistributionTenant$ === "object");
assert(typeof CreateDistributionWithTagsCommand === "function");
assert(typeof CreateDistributionWithTags$ === "object");
assert(typeof CreateFieldLevelEncryptionConfigCommand === "function");
assert(typeof CreateFieldLevelEncryptionConfig$ === "object");
assert(typeof CreateFieldLevelEncryptionProfileCommand === "function");
assert(typeof CreateFieldLevelEncryptionProfile$ === "object");
assert(typeof CreateFunctionCommand === "function");
assert(typeof CreateFunction$ === "object");
assert(typeof CreateInvalidationCommand === "function");
assert(typeof CreateInvalidation$ === "object");
assert(typeof CreateInvalidationForDistributionTenantCommand === "function");
assert(typeof CreateInvalidationForDistributionTenant$ === "object");
assert(typeof CreateKeyGroupCommand === "function");
assert(typeof CreateKeyGroup$ === "object");
assert(typeof CreateKeyValueStoreCommand === "function");
assert(typeof CreateKeyValueStore$ === "object");
assert(typeof CreateMonitoringSubscriptionCommand === "function");
assert(typeof CreateMonitoringSubscription$ === "object");
assert(typeof CreateOriginAccessControlCommand === "function");
assert(typeof CreateOriginAccessControl$ === "object");
assert(typeof CreateOriginRequestPolicyCommand === "function");
assert(typeof CreateOriginRequestPolicy$ === "object");
assert(typeof CreatePublicKeyCommand === "function");
assert(typeof CreatePublicKey$ === "object");
assert(typeof CreateRealtimeLogConfigCommand === "function");
assert(typeof CreateRealtimeLogConfig$ === "object");
assert(typeof CreateResponseHeadersPolicyCommand === "function");
assert(typeof CreateResponseHeadersPolicy$ === "object");
assert(typeof CreateStreamingDistributionCommand === "function");
assert(typeof CreateStreamingDistribution$ === "object");
assert(typeof CreateStreamingDistributionWithTagsCommand === "function");
assert(typeof CreateStreamingDistributionWithTags$ === "object");
assert(typeof CreateTrustStoreCommand === "function");
assert(typeof CreateTrustStore$ === "object");
assert(typeof CreateVpcOriginCommand === "function");
assert(typeof CreateVpcOrigin$ === "object");
assert(typeof DeleteAnycastIpListCommand === "function");
assert(typeof DeleteAnycastIpList$ === "object");
assert(typeof DeleteCachePolicyCommand === "function");
assert(typeof DeleteCachePolicy$ === "object");
assert(typeof DeleteCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof DeleteCloudFrontOriginAccessIdentity$ === "object");
assert(typeof DeleteConnectionFunctionCommand === "function");
assert(typeof DeleteConnectionFunction$ === "object");
assert(typeof DeleteConnectionGroupCommand === "function");
assert(typeof DeleteConnectionGroup$ === "object");
assert(typeof DeleteContinuousDeploymentPolicyCommand === "function");
assert(typeof DeleteContinuousDeploymentPolicy$ === "object");
assert(typeof DeleteDistributionCommand === "function");
assert(typeof DeleteDistribution$ === "object");
assert(typeof DeleteDistributionTenantCommand === "function");
assert(typeof DeleteDistributionTenant$ === "object");
assert(typeof DeleteFieldLevelEncryptionConfigCommand === "function");
assert(typeof DeleteFieldLevelEncryptionConfig$ === "object");
assert(typeof DeleteFieldLevelEncryptionProfileCommand === "function");
assert(typeof DeleteFieldLevelEncryptionProfile$ === "object");
assert(typeof DeleteFunctionCommand === "function");
assert(typeof DeleteFunction$ === "object");
assert(typeof DeleteKeyGroupCommand === "function");
assert(typeof DeleteKeyGroup$ === "object");
assert(typeof DeleteKeyValueStoreCommand === "function");
assert(typeof DeleteKeyValueStore$ === "object");
assert(typeof DeleteMonitoringSubscriptionCommand === "function");
assert(typeof DeleteMonitoringSubscription$ === "object");
assert(typeof DeleteOriginAccessControlCommand === "function");
assert(typeof DeleteOriginAccessControl$ === "object");
assert(typeof DeleteOriginRequestPolicyCommand === "function");
assert(typeof DeleteOriginRequestPolicy$ === "object");
assert(typeof DeletePublicKeyCommand === "function");
assert(typeof DeletePublicKey$ === "object");
assert(typeof DeleteRealtimeLogConfigCommand === "function");
assert(typeof DeleteRealtimeLogConfig$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteResponseHeadersPolicyCommand === "function");
assert(typeof DeleteResponseHeadersPolicy$ === "object");
assert(typeof DeleteStreamingDistributionCommand === "function");
assert(typeof DeleteStreamingDistribution$ === "object");
assert(typeof DeleteTrustStoreCommand === "function");
assert(typeof DeleteTrustStore$ === "object");
assert(typeof DeleteVpcOriginCommand === "function");
assert(typeof DeleteVpcOrigin$ === "object");
assert(typeof DescribeConnectionFunctionCommand === "function");
assert(typeof DescribeConnectionFunction$ === "object");
assert(typeof DescribeFunctionCommand === "function");
assert(typeof DescribeFunction$ === "object");
assert(typeof DescribeKeyValueStoreCommand === "function");
assert(typeof DescribeKeyValueStore$ === "object");
assert(typeof DisassociateDistributionTenantWebACLCommand === "function");
assert(typeof DisassociateDistributionTenantWebACL$ === "object");
assert(typeof DisassociateDistributionWebACLCommand === "function");
assert(typeof DisassociateDistributionWebACL$ === "object");
assert(typeof GetAnycastIpListCommand === "function");
assert(typeof GetAnycastIpList$ === "object");
assert(typeof GetCachePolicyCommand === "function");
assert(typeof GetCachePolicy$ === "object");
assert(typeof GetCachePolicyConfigCommand === "function");
assert(typeof GetCachePolicyConfig$ === "object");
assert(typeof GetCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof GetCloudFrontOriginAccessIdentity$ === "object");
assert(typeof GetCloudFrontOriginAccessIdentityConfigCommand === "function");
assert(typeof GetCloudFrontOriginAccessIdentityConfig$ === "object");
assert(typeof GetConnectionFunctionCommand === "function");
assert(typeof GetConnectionFunction$ === "object");
assert(typeof GetConnectionGroupCommand === "function");
assert(typeof GetConnectionGroup$ === "object");
assert(typeof GetConnectionGroupByRoutingEndpointCommand === "function");
assert(typeof GetConnectionGroupByRoutingEndpoint$ === "object");
assert(typeof GetContinuousDeploymentPolicyCommand === "function");
assert(typeof GetContinuousDeploymentPolicy$ === "object");
assert(typeof GetContinuousDeploymentPolicyConfigCommand === "function");
assert(typeof GetContinuousDeploymentPolicyConfig$ === "object");
assert(typeof GetDistributionCommand === "function");
assert(typeof GetDistribution$ === "object");
assert(typeof GetDistributionConfigCommand === "function");
assert(typeof GetDistributionConfig$ === "object");
assert(typeof GetDistributionTenantCommand === "function");
assert(typeof GetDistributionTenant$ === "object");
assert(typeof GetDistributionTenantByDomainCommand === "function");
assert(typeof GetDistributionTenantByDomain$ === "object");
assert(typeof GetFieldLevelEncryptionCommand === "function");
assert(typeof GetFieldLevelEncryption$ === "object");
assert(typeof GetFieldLevelEncryptionConfigCommand === "function");
assert(typeof GetFieldLevelEncryptionConfig$ === "object");
assert(typeof GetFieldLevelEncryptionProfileCommand === "function");
assert(typeof GetFieldLevelEncryptionProfile$ === "object");
assert(typeof GetFieldLevelEncryptionProfileConfigCommand === "function");
assert(typeof GetFieldLevelEncryptionProfileConfig$ === "object");
assert(typeof GetFunctionCommand === "function");
assert(typeof GetFunction$ === "object");
assert(typeof GetInvalidationCommand === "function");
assert(typeof GetInvalidation$ === "object");
assert(typeof GetInvalidationForDistributionTenantCommand === "function");
assert(typeof GetInvalidationForDistributionTenant$ === "object");
assert(typeof GetKeyGroupCommand === "function");
assert(typeof GetKeyGroup$ === "object");
assert(typeof GetKeyGroupConfigCommand === "function");
assert(typeof GetKeyGroupConfig$ === "object");
assert(typeof GetManagedCertificateDetailsCommand === "function");
assert(typeof GetManagedCertificateDetails$ === "object");
assert(typeof GetMonitoringSubscriptionCommand === "function");
assert(typeof GetMonitoringSubscription$ === "object");
assert(typeof GetOriginAccessControlCommand === "function");
assert(typeof GetOriginAccessControl$ === "object");
assert(typeof GetOriginAccessControlConfigCommand === "function");
assert(typeof GetOriginAccessControlConfig$ === "object");
assert(typeof GetOriginRequestPolicyCommand === "function");
assert(typeof GetOriginRequestPolicy$ === "object");
assert(typeof GetOriginRequestPolicyConfigCommand === "function");
assert(typeof GetOriginRequestPolicyConfig$ === "object");
assert(typeof GetPublicKeyCommand === "function");
assert(typeof GetPublicKey$ === "object");
assert(typeof GetPublicKeyConfigCommand === "function");
assert(typeof GetPublicKeyConfig$ === "object");
assert(typeof GetRealtimeLogConfigCommand === "function");
assert(typeof GetRealtimeLogConfig$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetResponseHeadersPolicyCommand === "function");
assert(typeof GetResponseHeadersPolicy$ === "object");
assert(typeof GetResponseHeadersPolicyConfigCommand === "function");
assert(typeof GetResponseHeadersPolicyConfig$ === "object");
assert(typeof GetStreamingDistributionCommand === "function");
assert(typeof GetStreamingDistribution$ === "object");
assert(typeof GetStreamingDistributionConfigCommand === "function");
assert(typeof GetStreamingDistributionConfig$ === "object");
assert(typeof GetTrustStoreCommand === "function");
assert(typeof GetTrustStore$ === "object");
assert(typeof GetVpcOriginCommand === "function");
assert(typeof GetVpcOrigin$ === "object");
assert(typeof ListAnycastIpListsCommand === "function");
assert(typeof ListAnycastIpLists$ === "object");
assert(typeof ListCachePoliciesCommand === "function");
assert(typeof ListCachePolicies$ === "object");
assert(typeof ListCloudFrontOriginAccessIdentitiesCommand === "function");
assert(typeof ListCloudFrontOriginAccessIdentities$ === "object");
assert(typeof ListConflictingAliasesCommand === "function");
assert(typeof ListConflictingAliases$ === "object");
assert(typeof ListConnectionFunctionsCommand === "function");
assert(typeof ListConnectionFunctions$ === "object");
assert(typeof ListConnectionGroupsCommand === "function");
assert(typeof ListConnectionGroups$ === "object");
assert(typeof ListContinuousDeploymentPoliciesCommand === "function");
assert(typeof ListContinuousDeploymentPolicies$ === "object");
assert(typeof ListDistributionsCommand === "function");
assert(typeof ListDistributions$ === "object");
assert(typeof ListDistributionsByAnycastIpListIdCommand === "function");
assert(typeof ListDistributionsByAnycastIpListId$ === "object");
assert(typeof ListDistributionsByCachePolicyIdCommand === "function");
assert(typeof ListDistributionsByCachePolicyId$ === "object");
assert(typeof ListDistributionsByConnectionFunctionCommand === "function");
assert(typeof ListDistributionsByConnectionFunction$ === "object");
assert(typeof ListDistributionsByConnectionModeCommand === "function");
assert(typeof ListDistributionsByConnectionMode$ === "object");
assert(typeof ListDistributionsByKeyGroupCommand === "function");
assert(typeof ListDistributionsByKeyGroup$ === "object");
assert(typeof ListDistributionsByOriginRequestPolicyIdCommand === "function");
assert(typeof ListDistributionsByOriginRequestPolicyId$ === "object");
assert(typeof ListDistributionsByOwnedResourceCommand === "function");
assert(typeof ListDistributionsByOwnedResource$ === "object");
assert(typeof ListDistributionsByRealtimeLogConfigCommand === "function");
assert(typeof ListDistributionsByRealtimeLogConfig$ === "object");
assert(typeof ListDistributionsByResponseHeadersPolicyIdCommand === "function");
assert(typeof ListDistributionsByResponseHeadersPolicyId$ === "object");
assert(typeof ListDistributionsByTrustStoreCommand === "function");
assert(typeof ListDistributionsByTrustStore$ === "object");
assert(typeof ListDistributionsByVpcOriginIdCommand === "function");
assert(typeof ListDistributionsByVpcOriginId$ === "object");
assert(typeof ListDistributionsByWebACLIdCommand === "function");
assert(typeof ListDistributionsByWebACLId$ === "object");
assert(typeof ListDistributionTenantsCommand === "function");
assert(typeof ListDistributionTenants$ === "object");
assert(typeof ListDistributionTenantsByCustomizationCommand === "function");
assert(typeof ListDistributionTenantsByCustomization$ === "object");
assert(typeof ListDomainConflictsCommand === "function");
assert(typeof ListDomainConflicts$ === "object");
assert(typeof ListFieldLevelEncryptionConfigsCommand === "function");
assert(typeof ListFieldLevelEncryptionConfigs$ === "object");
assert(typeof ListFieldLevelEncryptionProfilesCommand === "function");
assert(typeof ListFieldLevelEncryptionProfiles$ === "object");
assert(typeof ListFunctionsCommand === "function");
assert(typeof ListFunctions$ === "object");
assert(typeof ListInvalidationsCommand === "function");
assert(typeof ListInvalidations$ === "object");
assert(typeof ListInvalidationsForDistributionTenantCommand === "function");
assert(typeof ListInvalidationsForDistributionTenant$ === "object");
assert(typeof ListKeyGroupsCommand === "function");
assert(typeof ListKeyGroups$ === "object");
assert(typeof ListKeyValueStoresCommand === "function");
assert(typeof ListKeyValueStores$ === "object");
assert(typeof ListOriginAccessControlsCommand === "function");
assert(typeof ListOriginAccessControls$ === "object");
assert(typeof ListOriginRequestPoliciesCommand === "function");
assert(typeof ListOriginRequestPolicies$ === "object");
assert(typeof ListPublicKeysCommand === "function");
assert(typeof ListPublicKeys$ === "object");
assert(typeof ListRealtimeLogConfigsCommand === "function");
assert(typeof ListRealtimeLogConfigs$ === "object");
assert(typeof ListResponseHeadersPoliciesCommand === "function");
assert(typeof ListResponseHeadersPolicies$ === "object");
assert(typeof ListStreamingDistributionsCommand === "function");
assert(typeof ListStreamingDistributions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTrustStoresCommand === "function");
assert(typeof ListTrustStores$ === "object");
assert(typeof ListVpcOriginsCommand === "function");
assert(typeof ListVpcOrigins$ === "object");
assert(typeof PublishConnectionFunctionCommand === "function");
assert(typeof PublishConnectionFunction$ === "object");
assert(typeof PublishFunctionCommand === "function");
assert(typeof PublishFunction$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestConnectionFunctionCommand === "function");
assert(typeof TestConnectionFunction$ === "object");
assert(typeof TestFunctionCommand === "function");
assert(typeof TestFunction$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAnycastIpListCommand === "function");
assert(typeof UpdateAnycastIpList$ === "object");
assert(typeof UpdateCachePolicyCommand === "function");
assert(typeof UpdateCachePolicy$ === "object");
assert(typeof UpdateCloudFrontOriginAccessIdentityCommand === "function");
assert(typeof UpdateCloudFrontOriginAccessIdentity$ === "object");
assert(typeof UpdateConnectionFunctionCommand === "function");
assert(typeof UpdateConnectionFunction$ === "object");
assert(typeof UpdateConnectionGroupCommand === "function");
assert(typeof UpdateConnectionGroup$ === "object");
assert(typeof UpdateContinuousDeploymentPolicyCommand === "function");
assert(typeof UpdateContinuousDeploymentPolicy$ === "object");
assert(typeof UpdateDistributionCommand === "function");
assert(typeof UpdateDistribution$ === "object");
assert(typeof UpdateDistributionTenantCommand === "function");
assert(typeof UpdateDistributionTenant$ === "object");
assert(typeof UpdateDistributionWithStagingConfigCommand === "function");
assert(typeof UpdateDistributionWithStagingConfig$ === "object");
assert(typeof UpdateDomainAssociationCommand === "function");
assert(typeof UpdateDomainAssociation$ === "object");
assert(typeof UpdateFieldLevelEncryptionConfigCommand === "function");
assert(typeof UpdateFieldLevelEncryptionConfig$ === "object");
assert(typeof UpdateFieldLevelEncryptionProfileCommand === "function");
assert(typeof UpdateFieldLevelEncryptionProfile$ === "object");
assert(typeof UpdateFunctionCommand === "function");
assert(typeof UpdateFunction$ === "object");
assert(typeof UpdateKeyGroupCommand === "function");
assert(typeof UpdateKeyGroup$ === "object");
assert(typeof UpdateKeyValueStoreCommand === "function");
assert(typeof UpdateKeyValueStore$ === "object");
assert(typeof UpdateOriginAccessControlCommand === "function");
assert(typeof UpdateOriginAccessControl$ === "object");
assert(typeof UpdateOriginRequestPolicyCommand === "function");
assert(typeof UpdateOriginRequestPolicy$ === "object");
assert(typeof UpdatePublicKeyCommand === "function");
assert(typeof UpdatePublicKey$ === "object");
assert(typeof UpdateRealtimeLogConfigCommand === "function");
assert(typeof UpdateRealtimeLogConfig$ === "object");
assert(typeof UpdateResponseHeadersPolicyCommand === "function");
assert(typeof UpdateResponseHeadersPolicy$ === "object");
assert(typeof UpdateStreamingDistributionCommand === "function");
assert(typeof UpdateStreamingDistribution$ === "object");
assert(typeof UpdateTrustStoreCommand === "function");
assert(typeof UpdateTrustStore$ === "object");
assert(typeof UpdateVpcOriginCommand === "function");
assert(typeof UpdateVpcOrigin$ === "object");
assert(typeof VerifyDnsConfigurationCommand === "function");
assert(typeof VerifyDnsConfiguration$ === "object");
// structural schemas
assert(typeof ActiveTrustedKeyGroups$ === "object");
assert(typeof ActiveTrustedSigners$ === "object");
assert(typeof Aliases$ === "object");
assert(typeof AliasICPRecordal$ === "object");
assert(typeof AllowedMethods$ === "object");
assert(typeof AnycastIpList$ === "object");
assert(typeof AnycastIpListCollection$ === "object");
assert(typeof AnycastIpListSummary$ === "object");
assert(typeof AssociateAliasRequest$ === "object");
assert(typeof AssociateDistributionTenantWebACLRequest$ === "object");
assert(typeof AssociateDistributionTenantWebACLResult$ === "object");
assert(typeof AssociateDistributionWebACLRequest$ === "object");
assert(typeof AssociateDistributionWebACLResult$ === "object");
assert(typeof CaCertificatesBundleS3Location$ === "object");
assert(typeof CaCertificatesBundleSource$ === "object");
assert(typeof CacheBehavior$ === "object");
assert(typeof CacheBehaviors$ === "object");
assert(typeof CachedMethods$ === "object");
assert(typeof CachePolicy$ === "object");
assert(typeof CachePolicyConfig$ === "object");
assert(typeof CachePolicyCookiesConfig$ === "object");
assert(typeof CachePolicyHeadersConfig$ === "object");
assert(typeof CachePolicyList$ === "object");
assert(typeof CachePolicyQueryStringsConfig$ === "object");
assert(typeof CachePolicySummary$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CloudFrontOriginAccessIdentity$ === "object");
assert(typeof CloudFrontOriginAccessIdentityConfig$ === "object");
assert(typeof CloudFrontOriginAccessIdentityList$ === "object");
assert(typeof CloudFrontOriginAccessIdentitySummary$ === "object");
assert(typeof ConflictingAlias$ === "object");
assert(typeof ConflictingAliasesList$ === "object");
assert(typeof ConnectionFunctionAssociation$ === "object");
assert(typeof ConnectionFunctionSummary$ === "object");
assert(typeof ConnectionFunctionTestResult$ === "object");
assert(typeof ConnectionGroup$ === "object");
assert(typeof ConnectionGroupAssociationFilter$ === "object");
assert(typeof ConnectionGroupSummary$ === "object");
assert(typeof ContentTypeProfile$ === "object");
assert(typeof ContentTypeProfileConfig$ === "object");
assert(typeof ContentTypeProfiles$ === "object");
assert(typeof ContinuousDeploymentPolicy$ === "object");
assert(typeof ContinuousDeploymentPolicyConfig$ === "object");
assert(typeof ContinuousDeploymentPolicyList$ === "object");
assert(typeof ContinuousDeploymentPolicySummary$ === "object");
assert(typeof ContinuousDeploymentSingleHeaderConfig$ === "object");
assert(typeof ContinuousDeploymentSingleWeightConfig$ === "object");
assert(typeof CookieNames$ === "object");
assert(typeof CookiePreference$ === "object");
assert(typeof CopyDistributionRequest$ === "object");
assert(typeof CopyDistributionResult$ === "object");
assert(typeof CreateAnycastIpListRequest$ === "object");
assert(typeof CreateAnycastIpListResult$ === "object");
assert(typeof CreateCachePolicyRequest$ === "object");
assert(typeof CreateCachePolicyResult$ === "object");
assert(typeof CreateCloudFrontOriginAccessIdentityRequest$ === "object");
assert(typeof CreateCloudFrontOriginAccessIdentityResult$ === "object");
assert(typeof CreateConnectionFunctionRequest$ === "object");
assert(typeof CreateConnectionFunctionResult$ === "object");
assert(typeof CreateConnectionGroupRequest$ === "object");
assert(typeof CreateConnectionGroupResult$ === "object");
assert(typeof CreateContinuousDeploymentPolicyRequest$ === "object");
assert(typeof CreateContinuousDeploymentPolicyResult$ === "object");
assert(typeof CreateDistributionRequest$ === "object");
assert(typeof CreateDistributionResult$ === "object");
assert(typeof CreateDistributionTenantRequest$ === "object");
assert(typeof CreateDistributionTenantResult$ === "object");
assert(typeof CreateDistributionWithTagsRequest$ === "object");
assert(typeof CreateDistributionWithTagsResult$ === "object");
assert(typeof CreateFieldLevelEncryptionConfigRequest$ === "object");
assert(typeof CreateFieldLevelEncryptionConfigResult$ === "object");
assert(typeof CreateFieldLevelEncryptionProfileRequest$ === "object");
assert(typeof CreateFieldLevelEncryptionProfileResult$ === "object");
assert(typeof CreateFunctionRequest$ === "object");
assert(typeof CreateFunctionResult$ === "object");
assert(typeof CreateInvalidationForDistributionTenantRequest$ === "object");
assert(typeof CreateInvalidationForDistributionTenantResult$ === "object");
assert(typeof CreateInvalidationRequest$ === "object");
assert(typeof CreateInvalidationResult$ === "object");
assert(typeof CreateKeyGroupRequest$ === "object");
assert(typeof CreateKeyGroupResult$ === "object");
assert(typeof CreateKeyValueStoreRequest$ === "object");
assert(typeof CreateKeyValueStoreResult$ === "object");
assert(typeof CreateMonitoringSubscriptionRequest$ === "object");
assert(typeof CreateMonitoringSubscriptionResult$ === "object");
assert(typeof CreateOriginAccessControlRequest$ === "object");
assert(typeof CreateOriginAccessControlResult$ === "object");
assert(typeof CreateOriginRequestPolicyRequest$ === "object");
assert(typeof CreateOriginRequestPolicyResult$ === "object");
assert(typeof CreatePublicKeyRequest$ === "object");
assert(typeof CreatePublicKeyResult$ === "object");
assert(typeof CreateRealtimeLogConfigRequest$ === "object");
assert(typeof CreateRealtimeLogConfigResult$ === "object");
assert(typeof CreateResponseHeadersPolicyRequest$ === "object");
assert(typeof CreateResponseHeadersPolicyResult$ === "object");
assert(typeof CreateStreamingDistributionRequest$ === "object");
assert(typeof CreateStreamingDistributionResult$ === "object");
assert(typeof CreateStreamingDistributionWithTagsRequest$ === "object");
assert(typeof CreateStreamingDistributionWithTagsResult$ === "object");
assert(typeof CreateTrustStoreRequest$ === "object");
assert(typeof CreateTrustStoreResult$ === "object");
assert(typeof CreateVpcOriginRequest$ === "object");
assert(typeof CreateVpcOriginResult$ === "object");
assert(typeof CustomErrorResponse$ === "object");
assert(typeof CustomErrorResponses$ === "object");
assert(typeof CustomHeaders$ === "object");
assert(typeof Customizations$ === "object");
assert(typeof CustomOriginConfig$ === "object");
assert(typeof DefaultCacheBehavior$ === "object");
assert(typeof DeleteAnycastIpListRequest$ === "object");
assert(typeof DeleteCachePolicyRequest$ === "object");
assert(typeof DeleteCloudFrontOriginAccessIdentityRequest$ === "object");
assert(typeof DeleteConnectionFunctionRequest$ === "object");
assert(typeof DeleteConnectionGroupRequest$ === "object");
assert(typeof DeleteContinuousDeploymentPolicyRequest$ === "object");
assert(typeof DeleteDistributionRequest$ === "object");
assert(typeof DeleteDistributionTenantRequest$ === "object");
assert(typeof DeleteFieldLevelEncryptionConfigRequest$ === "object");
assert(typeof DeleteFieldLevelEncryptionProfileRequest$ === "object");
assert(typeof DeleteFunctionRequest$ === "object");
assert(typeof DeleteKeyGroupRequest$ === "object");
assert(typeof DeleteKeyValueStoreRequest$ === "object");
assert(typeof DeleteMonitoringSubscriptionRequest$ === "object");
assert(typeof DeleteMonitoringSubscriptionResult$ === "object");
assert(typeof DeleteOriginAccessControlRequest$ === "object");
assert(typeof DeleteOriginRequestPolicyRequest$ === "object");
assert(typeof DeletePublicKeyRequest$ === "object");
assert(typeof DeleteRealtimeLogConfigRequest$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResponseHeadersPolicyRequest$ === "object");
assert(typeof DeleteStreamingDistributionRequest$ === "object");
assert(typeof DeleteTrustStoreRequest$ === "object");
assert(typeof DeleteVpcOriginRequest$ === "object");
assert(typeof DeleteVpcOriginResult$ === "object");
assert(typeof DescribeConnectionFunctionRequest$ === "object");
assert(typeof DescribeConnectionFunctionResult$ === "object");
assert(typeof DescribeFunctionRequest$ === "object");
assert(typeof DescribeFunctionResult$ === "object");
assert(typeof DescribeKeyValueStoreRequest$ === "object");
assert(typeof DescribeKeyValueStoreResult$ === "object");
assert(typeof DisassociateDistributionTenantWebACLRequest$ === "object");
assert(typeof DisassociateDistributionTenantWebACLResult$ === "object");
assert(typeof DisassociateDistributionWebACLRequest$ === "object");
assert(typeof DisassociateDistributionWebACLResult$ === "object");
assert(typeof Distribution$ === "object");
assert(typeof DistributionConfig$ === "object");
assert(typeof DistributionConfigWithTags$ === "object");
assert(typeof DistributionIdList$ === "object");
assert(typeof DistributionIdOwner$ === "object");
assert(typeof DistributionIdOwnerList$ === "object");
assert(typeof DistributionList$ === "object");
assert(typeof DistributionResourceId$ === "object");
assert(typeof DistributionSummary$ === "object");
assert(typeof DistributionTenant$ === "object");
assert(typeof DistributionTenantAssociationFilter$ === "object");
assert(typeof DistributionTenantSummary$ === "object");
assert(typeof DnsConfiguration$ === "object");
assert(typeof DomainConflict$ === "object");
assert(typeof DomainItem$ === "object");
assert(typeof DomainResult$ === "object");
assert(typeof EncryptionEntities$ === "object");
assert(typeof EncryptionEntity$ === "object");
assert(typeof EndPoint$ === "object");
assert(typeof FieldLevelEncryption$ === "object");
assert(typeof FieldLevelEncryptionConfig$ === "object");
assert(typeof FieldLevelEncryptionList$ === "object");
assert(typeof FieldLevelEncryptionProfile$ === "object");
assert(typeof FieldLevelEncryptionProfileConfig$ === "object");
assert(typeof FieldLevelEncryptionProfileList$ === "object");
assert(typeof FieldLevelEncryptionProfileSummary$ === "object");
assert(typeof FieldLevelEncryptionSummary$ === "object");
assert(typeof FieldPatterns$ === "object");
assert(typeof ForwardedValues$ === "object");
assert(typeof FunctionAssociation$ === "object");
assert(typeof FunctionAssociations$ === "object");
assert(typeof FunctionConfig$ === "object");
assert(typeof FunctionList$ === "object");
assert(typeof FunctionMetadata$ === "object");
assert(typeof FunctionSummary$ === "object");
assert(typeof GeoRestriction$ === "object");
assert(typeof GeoRestrictionCustomization$ === "object");
assert(typeof GetAnycastIpListRequest$ === "object");
assert(typeof GetAnycastIpListResult$ === "object");
assert(typeof GetCachePolicyConfigRequest$ === "object");
assert(typeof GetCachePolicyConfigResult$ === "object");
assert(typeof GetCachePolicyRequest$ === "object");
assert(typeof GetCachePolicyResult$ === "object");
assert(typeof GetCloudFrontOriginAccessIdentityConfigRequest$ === "object");
assert(typeof GetCloudFrontOriginAccessIdentityConfigResult$ === "object");
assert(typeof GetCloudFrontOriginAccessIdentityRequest$ === "object");
assert(typeof GetCloudFrontOriginAccessIdentityResult$ === "object");
assert(typeof GetConnectionFunctionRequest$ === "object");
assert(typeof GetConnectionFunctionResult$ === "object");
assert(typeof GetConnectionGroupByRoutingEndpointRequest$ === "object");
assert(typeof GetConnectionGroupByRoutingEndpointResult$ === "object");
assert(typeof GetConnectionGroupRequest$ === "object");
assert(typeof GetConnectionGroupResult$ === "object");
assert(typeof GetContinuousDeploymentPolicyConfigRequest$ === "object");
assert(typeof GetContinuousDeploymentPolicyConfigResult$ === "object");
assert(typeof GetContinuousDeploymentPolicyRequest$ === "object");
assert(typeof GetContinuousDeploymentPolicyResult$ === "object");
assert(typeof GetDistributionConfigRequest$ === "object");
assert(typeof GetDistributionConfigResult$ === "object");
assert(typeof GetDistributionRequest$ === "object");
assert(typeof GetDistributionResult$ === "object");
assert(typeof GetDistributionTenantByDomainRequest$ === "object");
assert(typeof GetDistributionTenantByDomainResult$ === "object");
assert(typeof GetDistributionTenantRequest$ === "object");
assert(typeof GetDistributionTenantResult$ === "object");
assert(typeof GetFieldLevelEncryptionConfigRequest$ === "object");
assert(typeof GetFieldLevelEncryptionConfigResult$ === "object");
assert(typeof GetFieldLevelEncryptionProfileConfigRequest$ === "object");
assert(typeof GetFieldLevelEncryptionProfileConfigResult$ === "object");
assert(typeof GetFieldLevelEncryptionProfileRequest$ === "object");
assert(typeof GetFieldLevelEncryptionProfileResult$ === "object");
assert(typeof GetFieldLevelEncryptionRequest$ === "object");
assert(typeof GetFieldLevelEncryptionResult$ === "object");
assert(typeof GetFunctionRequest$ === "object");
assert(typeof GetFunctionResult$ === "object");
assert(typeof GetInvalidationForDistributionTenantRequest$ === "object");
assert(typeof GetInvalidationForDistributionTenantResult$ === "object");
assert(typeof GetInvalidationRequest$ === "object");
assert(typeof GetInvalidationResult$ === "object");
assert(typeof GetKeyGroupConfigRequest$ === "object");
assert(typeof GetKeyGroupConfigResult$ === "object");
assert(typeof GetKeyGroupRequest$ === "object");
assert(typeof GetKeyGroupResult$ === "object");
assert(typeof GetManagedCertificateDetailsRequest$ === "object");
assert(typeof GetManagedCertificateDetailsResult$ === "object");
assert(typeof GetMonitoringSubscriptionRequest$ === "object");
assert(typeof GetMonitoringSubscriptionResult$ === "object");
assert(typeof GetOriginAccessControlConfigRequest$ === "object");
assert(typeof GetOriginAccessControlConfigResult$ === "object");
assert(typeof GetOriginAccessControlRequest$ === "object");
assert(typeof GetOriginAccessControlResult$ === "object");
assert(typeof GetOriginRequestPolicyConfigRequest$ === "object");
assert(typeof GetOriginRequestPolicyConfigResult$ === "object");
assert(typeof GetOriginRequestPolicyRequest$ === "object");
assert(typeof GetOriginRequestPolicyResult$ === "object");
assert(typeof GetPublicKeyConfigRequest$ === "object");
assert(typeof GetPublicKeyConfigResult$ === "object");
assert(typeof GetPublicKeyRequest$ === "object");
assert(typeof GetPublicKeyResult$ === "object");
assert(typeof GetRealtimeLogConfigRequest$ === "object");
assert(typeof GetRealtimeLogConfigResult$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResult$ === "object");
assert(typeof GetResponseHeadersPolicyConfigRequest$ === "object");
assert(typeof GetResponseHeadersPolicyConfigResult$ === "object");
assert(typeof GetResponseHeadersPolicyRequest$ === "object");
assert(typeof GetResponseHeadersPolicyResult$ === "object");
assert(typeof GetStreamingDistributionConfigRequest$ === "object");
assert(typeof GetStreamingDistributionConfigResult$ === "object");
assert(typeof GetStreamingDistributionRequest$ === "object");
assert(typeof GetStreamingDistributionResult$ === "object");
assert(typeof GetTrustStoreRequest$ === "object");
assert(typeof GetTrustStoreResult$ === "object");
assert(typeof GetVpcOriginRequest$ === "object");
assert(typeof GetVpcOriginResult$ === "object");
assert(typeof GrpcConfig$ === "object");
assert(typeof Headers$ === "object");
assert(typeof ImportSource$ === "object");
assert(typeof Invalidation$ === "object");
assert(typeof InvalidationBatch$ === "object");
assert(typeof InvalidationList$ === "object");
assert(typeof InvalidationSummary$ === "object");
assert(typeof IpamCidrConfig$ === "object");
assert(typeof IpamConfig$ === "object");
assert(typeof KeyGroup$ === "object");
assert(typeof KeyGroupConfig$ === "object");
assert(typeof KeyGroupList$ === "object");
assert(typeof KeyGroupSummary$ === "object");
assert(typeof KeyPairIds$ === "object");
assert(typeof KeyValueStore$ === "object");
assert(typeof KeyValueStoreAssociation$ === "object");
assert(typeof KeyValueStoreAssociations$ === "object");
assert(typeof KeyValueStoreList$ === "object");
assert(typeof KGKeyPairIds$ === "object");
assert(typeof KinesisStreamConfig$ === "object");
assert(typeof LambdaFunctionAssociation$ === "object");
assert(typeof LambdaFunctionAssociations$ === "object");
assert(typeof ListAnycastIpListsRequest$ === "object");
assert(typeof ListAnycastIpListsResult$ === "object");
assert(typeof ListCachePoliciesRequest$ === "object");
assert(typeof ListCachePoliciesResult$ === "object");
assert(typeof ListCloudFrontOriginAccessIdentitiesRequest$ === "object");
assert(typeof ListCloudFrontOriginAccessIdentitiesResult$ === "object");
assert(typeof ListConflictingAliasesRequest$ === "object");
assert(typeof ListConflictingAliasesResult$ === "object");
assert(typeof ListConnectionFunctionsRequest$ === "object");
assert(typeof ListConnectionFunctionsResult$ === "object");
assert(typeof ListConnectionGroupsRequest$ === "object");
assert(typeof ListConnectionGroupsResult$ === "object");
assert(typeof ListContinuousDeploymentPoliciesRequest$ === "object");
assert(typeof ListContinuousDeploymentPoliciesResult$ === "object");
assert(typeof ListDistributionsByAnycastIpListIdRequest$ === "object");
assert(typeof ListDistributionsByAnycastIpListIdResult$ === "object");
assert(typeof ListDistributionsByCachePolicyIdRequest$ === "object");
assert(typeof ListDistributionsByCachePolicyIdResult$ === "object");
assert(typeof ListDistributionsByConnectionFunctionRequest$ === "object");
assert(typeof ListDistributionsByConnectionFunctionResult$ === "object");
assert(typeof ListDistributionsByConnectionModeRequest$ === "object");
assert(typeof ListDistributionsByConnectionModeResult$ === "object");
assert(typeof ListDistributionsByKeyGroupRequest$ === "object");
assert(typeof ListDistributionsByKeyGroupResult$ === "object");
assert(typeof ListDistributionsByOriginRequestPolicyIdRequest$ === "object");
assert(typeof ListDistributionsByOriginRequestPolicyIdResult$ === "object");
assert(typeof ListDistributionsByOwnedResourceRequest$ === "object");
assert(typeof ListDistributionsByOwnedResourceResult$ === "object");
assert(typeof ListDistributionsByRealtimeLogConfigRequest$ === "object");
assert(typeof ListDistributionsByRealtimeLogConfigResult$ === "object");
assert(typeof ListDistributionsByResponseHeadersPolicyIdRequest$ === "object");
assert(typeof ListDistributionsByResponseHeadersPolicyIdResult$ === "object");
assert(typeof ListDistributionsByTrustStoreRequest$ === "object");
assert(typeof ListDistributionsByTrustStoreResult$ === "object");
assert(typeof ListDistributionsByVpcOriginIdRequest$ === "object");
assert(typeof ListDistributionsByVpcOriginIdResult$ === "object");
assert(typeof ListDistributionsByWebACLIdRequest$ === "object");
assert(typeof ListDistributionsByWebACLIdResult$ === "object");
assert(typeof ListDistributionsRequest$ === "object");
assert(typeof ListDistributionsResult$ === "object");
assert(typeof ListDistributionTenantsByCustomizationRequest$ === "object");
assert(typeof ListDistributionTenantsByCustomizationResult$ === "object");
assert(typeof ListDistributionTenantsRequest$ === "object");
assert(typeof ListDistributionTenantsResult$ === "object");
assert(typeof ListDomainConflictsRequest$ === "object");
assert(typeof ListDomainConflictsResult$ === "object");
assert(typeof ListFieldLevelEncryptionConfigsRequest$ === "object");
assert(typeof ListFieldLevelEncryptionConfigsResult$ === "object");
assert(typeof ListFieldLevelEncryptionProfilesRequest$ === "object");
assert(typeof ListFieldLevelEncryptionProfilesResult$ === "object");
assert(typeof ListFunctionsRequest$ === "object");
assert(typeof ListFunctionsResult$ === "object");
assert(typeof ListInvalidationsForDistributionTenantRequest$ === "object");
assert(typeof ListInvalidationsForDistributionTenantResult$ === "object");
assert(typeof ListInvalidationsRequest$ === "object");
assert(typeof ListInvalidationsResult$ === "object");
assert(typeof ListKeyGroupsRequest$ === "object");
assert(typeof ListKeyGroupsResult$ === "object");
assert(typeof ListKeyValueStoresRequest$ === "object");
assert(typeof ListKeyValueStoresResult$ === "object");
assert(typeof ListOriginAccessControlsRequest$ === "object");
assert(typeof ListOriginAccessControlsResult$ === "object");
assert(typeof ListOriginRequestPoliciesRequest$ === "object");
assert(typeof ListOriginRequestPoliciesResult$ === "object");
assert(typeof ListPublicKeysRequest$ === "object");
assert(typeof ListPublicKeysResult$ === "object");
assert(typeof ListRealtimeLogConfigsRequest$ === "object");
assert(typeof ListRealtimeLogConfigsResult$ === "object");
assert(typeof ListResponseHeadersPoliciesRequest$ === "object");
assert(typeof ListResponseHeadersPoliciesResult$ === "object");
assert(typeof ListStreamingDistributionsRequest$ === "object");
assert(typeof ListStreamingDistributionsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof ListTrustStoresRequest$ === "object");
assert(typeof ListTrustStoresResult$ === "object");
assert(typeof ListVpcOriginsRequest$ === "object");
assert(typeof ListVpcOriginsResult$ === "object");
assert(typeof LoggingConfig$ === "object");
assert(typeof ManagedCertificateDetails$ === "object");
assert(typeof ManagedCertificateRequest$ === "object");
assert(typeof MonitoringSubscription$ === "object");
assert(typeof Origin$ === "object");
assert(typeof OriginAccessControl$ === "object");
assert(typeof OriginAccessControlConfig$ === "object");
assert(typeof OriginAccessControlList$ === "object");
assert(typeof OriginAccessControlSummary$ === "object");
assert(typeof OriginCustomHeader$ === "object");
assert(typeof OriginGroup$ === "object");
assert(typeof OriginGroupFailoverCriteria$ === "object");
assert(typeof OriginGroupMember$ === "object");
assert(typeof OriginGroupMembers$ === "object");
assert(typeof OriginGroups$ === "object");
assert(typeof OriginRequestPolicy$ === "object");
assert(typeof OriginRequestPolicyConfig$ === "object");
assert(typeof OriginRequestPolicyCookiesConfig$ === "object");
assert(typeof OriginRequestPolicyHeadersConfig$ === "object");
assert(typeof OriginRequestPolicyList$ === "object");
assert(typeof OriginRequestPolicyQueryStringsConfig$ === "object");
assert(typeof OriginRequestPolicySummary$ === "object");
assert(typeof Origins$ === "object");
assert(typeof OriginShield$ === "object");
assert(typeof OriginSslProtocols$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof ParameterDefinition$ === "object");
assert(typeof ParameterDefinitionSchema$ === "object");
assert(typeof ParametersInCacheKeyAndForwardedToOrigin$ === "object");
assert(typeof Paths$ === "object");
assert(typeof PublicKey$ === "object");
assert(typeof PublicKeyConfig$ === "object");
assert(typeof PublicKeyList$ === "object");
assert(typeof PublicKeySummary$ === "object");
assert(typeof PublishConnectionFunctionRequest$ === "object");
assert(typeof PublishConnectionFunctionResult$ === "object");
assert(typeof PublishFunctionRequest$ === "object");
assert(typeof PublishFunctionResult$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResult$ === "object");
assert(typeof QueryArgProfile$ === "object");
assert(typeof QueryArgProfileConfig$ === "object");
assert(typeof QueryArgProfiles$ === "object");
assert(typeof QueryStringCacheKeys$ === "object");
assert(typeof QueryStringNames$ === "object");
assert(typeof RealtimeLogConfig$ === "object");
assert(typeof RealtimeLogConfigs$ === "object");
assert(typeof RealtimeMetricsSubscriptionConfig$ === "object");
assert(typeof ResponseHeadersPolicy$ === "object");
assert(typeof ResponseHeadersPolicyAccessControlAllowHeaders$ === "object");
assert(typeof ResponseHeadersPolicyAccessControlAllowMethods$ === "object");
assert(typeof ResponseHeadersPolicyAccessControlAllowOrigins$ === "object");
assert(typeof ResponseHeadersPolicyAccessControlExposeHeaders$ === "object");
assert(typeof ResponseHeadersPolicyConfig$ === "object");
assert(typeof ResponseHeadersPolicyContentSecurityPolicy$ === "object");
assert(typeof ResponseHeadersPolicyContentTypeOptions$ === "object");
assert(typeof ResponseHeadersPolicyCorsConfig$ === "object");
assert(typeof ResponseHeadersPolicyCustomHeader$ === "object");
assert(typeof ResponseHeadersPolicyCustomHeadersConfig$ === "object");
assert(typeof ResponseHeadersPolicyFrameOptions$ === "object");
assert(typeof ResponseHeadersPolicyList$ === "object");
assert(typeof ResponseHeadersPolicyReferrerPolicy$ === "object");
assert(typeof ResponseHeadersPolicyRemoveHeader$ === "object");
assert(typeof ResponseHeadersPolicyRemoveHeadersConfig$ === "object");
assert(typeof ResponseHeadersPolicySecurityHeadersConfig$ === "object");
assert(typeof ResponseHeadersPolicyServerTimingHeadersConfig$ === "object");
assert(typeof ResponseHeadersPolicyStrictTransportSecurity$ === "object");
assert(typeof ResponseHeadersPolicySummary$ === "object");
assert(typeof ResponseHeadersPolicyXSSProtection$ === "object");
assert(typeof Restrictions$ === "object");
assert(typeof S3Origin$ === "object");
assert(typeof S3OriginConfig$ === "object");
assert(typeof SessionStickinessConfig$ === "object");
assert(typeof Signer$ === "object");
assert(typeof StagingDistributionDnsNames$ === "object");
assert(typeof StatusCodes$ === "object");
assert(typeof StreamingDistribution$ === "object");
assert(typeof StreamingDistributionConfig$ === "object");
assert(typeof StreamingDistributionConfigWithTags$ === "object");
assert(typeof StreamingDistributionList$ === "object");
assert(typeof StreamingDistributionSummary$ === "object");
assert(typeof StreamingLoggingConfig$ === "object");
assert(typeof StringSchemaConfig$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagKeys$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof Tags$ === "object");
assert(typeof TenantConfig$ === "object");
assert(typeof TestConnectionFunctionRequest$ === "object");
assert(typeof TestConnectionFunctionResult$ === "object");
assert(typeof TestFunctionRequest$ === "object");
assert(typeof TestFunctionResult$ === "object");
assert(typeof TestResult$ === "object");
assert(typeof TrafficConfig$ === "object");
assert(typeof TrustedKeyGroups$ === "object");
assert(typeof TrustedSigners$ === "object");
assert(typeof TrustStore$ === "object");
assert(typeof TrustStoreConfig$ === "object");
assert(typeof TrustStoreSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAnycastIpListRequest$ === "object");
assert(typeof UpdateAnycastIpListResult$ === "object");
assert(typeof UpdateCachePolicyRequest$ === "object");
assert(typeof UpdateCachePolicyResult$ === "object");
assert(typeof UpdateCloudFrontOriginAccessIdentityRequest$ === "object");
assert(typeof UpdateCloudFrontOriginAccessIdentityResult$ === "object");
assert(typeof UpdateConnectionFunctionRequest$ === "object");
assert(typeof UpdateConnectionFunctionResult$ === "object");
assert(typeof UpdateConnectionGroupRequest$ === "object");
assert(typeof UpdateConnectionGroupResult$ === "object");
assert(typeof UpdateContinuousDeploymentPolicyRequest$ === "object");
assert(typeof UpdateContinuousDeploymentPolicyResult$ === "object");
assert(typeof UpdateDistributionRequest$ === "object");
assert(typeof UpdateDistributionResult$ === "object");
assert(typeof UpdateDistributionTenantRequest$ === "object");
assert(typeof UpdateDistributionTenantResult$ === "object");
assert(typeof UpdateDistributionWithStagingConfigRequest$ === "object");
assert(typeof UpdateDistributionWithStagingConfigResult$ === "object");
assert(typeof UpdateDomainAssociationRequest$ === "object");
assert(typeof UpdateDomainAssociationResult$ === "object");
assert(typeof UpdateFieldLevelEncryptionConfigRequest$ === "object");
assert(typeof UpdateFieldLevelEncryptionConfigResult$ === "object");
assert(typeof UpdateFieldLevelEncryptionProfileRequest$ === "object");
assert(typeof UpdateFieldLevelEncryptionProfileResult$ === "object");
assert(typeof UpdateFunctionRequest$ === "object");
assert(typeof UpdateFunctionResult$ === "object");
assert(typeof UpdateKeyGroupRequest$ === "object");
assert(typeof UpdateKeyGroupResult$ === "object");
assert(typeof UpdateKeyValueStoreRequest$ === "object");
assert(typeof UpdateKeyValueStoreResult$ === "object");
assert(typeof UpdateOriginAccessControlRequest$ === "object");
assert(typeof UpdateOriginAccessControlResult$ === "object");
assert(typeof UpdateOriginRequestPolicyRequest$ === "object");
assert(typeof UpdateOriginRequestPolicyResult$ === "object");
assert(typeof UpdatePublicKeyRequest$ === "object");
assert(typeof UpdatePublicKeyResult$ === "object");
assert(typeof UpdateRealtimeLogConfigRequest$ === "object");
assert(typeof UpdateRealtimeLogConfigResult$ === "object");
assert(typeof UpdateResponseHeadersPolicyRequest$ === "object");
assert(typeof UpdateResponseHeadersPolicyResult$ === "object");
assert(typeof UpdateStreamingDistributionRequest$ === "object");
assert(typeof UpdateStreamingDistributionResult$ === "object");
assert(typeof UpdateTrustStoreRequest$ === "object");
assert(typeof UpdateTrustStoreResult$ === "object");
assert(typeof UpdateVpcOriginRequest$ === "object");
assert(typeof UpdateVpcOriginResult$ === "object");
assert(typeof ValidationTokenDetail$ === "object");
assert(typeof VerifyDnsConfigurationRequest$ === "object");
assert(typeof VerifyDnsConfigurationResult$ === "object");
assert(typeof ViewerCertificate$ === "object");
assert(typeof ViewerMtlsConfig$ === "object");
assert(typeof VpcOrigin$ === "object");
assert(typeof VpcOriginConfig$ === "object");
assert(typeof VpcOriginEndpointConfig$ === "object");
assert(typeof VpcOriginList$ === "object");
assert(typeof VpcOriginSummary$ === "object");
assert(typeof WebAclCustomization$ === "object");
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
assert(typeof AccessDenied$ === "object");
assert(BatchTooLarge.prototype instanceof CloudFrontServiceException);
assert(typeof BatchTooLarge$ === "object");
assert(CachePolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof CachePolicyAlreadyExists$ === "object");
assert(CachePolicyInUse.prototype instanceof CloudFrontServiceException);
assert(typeof CachePolicyInUse$ === "object");
assert(CannotChangeImmutablePublicKeyFields.prototype instanceof CloudFrontServiceException);
assert(typeof CannotChangeImmutablePublicKeyFields$ === "object");
assert(CannotDeleteEntityWhileInUse.prototype instanceof CloudFrontServiceException);
assert(typeof CannotDeleteEntityWhileInUse$ === "object");
assert(CannotUpdateEntityWhileInUse.prototype instanceof CloudFrontServiceException);
assert(typeof CannotUpdateEntityWhileInUse$ === "object");
assert(CloudFrontOriginAccessIdentityAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof CloudFrontOriginAccessIdentityAlreadyExists$ === "object");
assert(CloudFrontOriginAccessIdentityInUse.prototype instanceof CloudFrontServiceException);
assert(typeof CloudFrontOriginAccessIdentityInUse$ === "object");
assert(CNAMEAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof CNAMEAlreadyExists$ === "object");
assert(ContinuousDeploymentPolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof ContinuousDeploymentPolicyAlreadyExists$ === "object");
assert(ContinuousDeploymentPolicyInUse.prototype instanceof CloudFrontServiceException);
assert(typeof ContinuousDeploymentPolicyInUse$ === "object");
assert(DistributionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof DistributionAlreadyExists$ === "object");
assert(DistributionNotDisabled.prototype instanceof CloudFrontServiceException);
assert(typeof DistributionNotDisabled$ === "object");
assert(EntityAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof EntityAlreadyExists$ === "object");
assert(EntityLimitExceeded.prototype instanceof CloudFrontServiceException);
assert(typeof EntityLimitExceeded$ === "object");
assert(EntityNotFound.prototype instanceof CloudFrontServiceException);
assert(typeof EntityNotFound$ === "object");
assert(EntitySizeLimitExceeded.prototype instanceof CloudFrontServiceException);
assert(typeof EntitySizeLimitExceeded$ === "object");
assert(FieldLevelEncryptionConfigAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof FieldLevelEncryptionConfigAlreadyExists$ === "object");
assert(FieldLevelEncryptionConfigInUse.prototype instanceof CloudFrontServiceException);
assert(typeof FieldLevelEncryptionConfigInUse$ === "object");
assert(FieldLevelEncryptionProfileAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof FieldLevelEncryptionProfileAlreadyExists$ === "object");
assert(FieldLevelEncryptionProfileInUse.prototype instanceof CloudFrontServiceException);
assert(typeof FieldLevelEncryptionProfileInUse$ === "object");
assert(FieldLevelEncryptionProfileSizeExceeded.prototype instanceof CloudFrontServiceException);
assert(typeof FieldLevelEncryptionProfileSizeExceeded$ === "object");
assert(FunctionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof FunctionAlreadyExists$ === "object");
assert(FunctionInUse.prototype instanceof CloudFrontServiceException);
assert(typeof FunctionInUse$ === "object");
assert(FunctionSizeLimitExceeded.prototype instanceof CloudFrontServiceException);
assert(typeof FunctionSizeLimitExceeded$ === "object");
assert(IllegalDelete.prototype instanceof CloudFrontServiceException);
assert(typeof IllegalDelete$ === "object");
assert(IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior.prototype instanceof CloudFrontServiceException);
assert(typeof IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior$ === "object");
assert(IllegalOriginAccessConfiguration.prototype instanceof CloudFrontServiceException);
assert(typeof IllegalOriginAccessConfiguration$ === "object");
assert(IllegalUpdate.prototype instanceof CloudFrontServiceException);
assert(typeof IllegalUpdate$ === "object");
assert(InconsistentQuantities.prototype instanceof CloudFrontServiceException);
assert(typeof InconsistentQuantities$ === "object");
assert(InvalidArgument.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidArgument$ === "object");
assert(InvalidAssociation.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidAssociation$ === "object");
assert(InvalidDefaultRootObject.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidDefaultRootObject$ === "object");
assert(InvalidDomainNameForOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidDomainNameForOriginAccessControl$ === "object");
assert(InvalidErrorCode.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidErrorCode$ === "object");
assert(InvalidForwardCookies.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidForwardCookies$ === "object");
assert(InvalidFunctionAssociation.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidFunctionAssociation$ === "object");
assert(InvalidGeoRestrictionParameter.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidGeoRestrictionParameter$ === "object");
assert(InvalidHeadersForS3Origin.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidHeadersForS3Origin$ === "object");
assert(InvalidIfMatchVersion.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidIfMatchVersion$ === "object");
assert(InvalidLambdaFunctionAssociation.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidLambdaFunctionAssociation$ === "object");
assert(InvalidLocationCode.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidLocationCode$ === "object");
assert(InvalidMinimumProtocolVersion.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidMinimumProtocolVersion$ === "object");
assert(InvalidOrigin.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidOrigin$ === "object");
assert(InvalidOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidOriginAccessControl$ === "object");
assert(InvalidOriginAccessIdentity.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidOriginAccessIdentity$ === "object");
assert(InvalidOriginKeepaliveTimeout.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidOriginKeepaliveTimeout$ === "object");
assert(InvalidOriginReadTimeout.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidOriginReadTimeout$ === "object");
assert(InvalidProtocolSettings.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidProtocolSettings$ === "object");
assert(InvalidQueryStringParameters.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidQueryStringParameters$ === "object");
assert(InvalidRelativePath.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidRelativePath$ === "object");
assert(InvalidRequiredProtocol.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidRequiredProtocol$ === "object");
assert(InvalidResponseCode.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidResponseCode$ === "object");
assert(InvalidTagging.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidTagging$ === "object");
assert(InvalidTTLOrder.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidTTLOrder$ === "object");
assert(InvalidViewerCertificate.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidViewerCertificate$ === "object");
assert(InvalidWebACLId.prototype instanceof CloudFrontServiceException);
assert(typeof InvalidWebACLId$ === "object");
assert(KeyGroupAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof KeyGroupAlreadyExists$ === "object");
assert(MissingBody.prototype instanceof CloudFrontServiceException);
assert(typeof MissingBody$ === "object");
assert(MonitoringSubscriptionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof MonitoringSubscriptionAlreadyExists$ === "object");
assert(NoSuchCachePolicy.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchCachePolicy$ === "object");
assert(NoSuchCloudFrontOriginAccessIdentity.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchCloudFrontOriginAccessIdentity$ === "object");
assert(NoSuchContinuousDeploymentPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchContinuousDeploymentPolicy$ === "object");
assert(NoSuchDistribution.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchDistribution$ === "object");
assert(NoSuchFieldLevelEncryptionConfig.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchFieldLevelEncryptionConfig$ === "object");
assert(NoSuchFieldLevelEncryptionProfile.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchFieldLevelEncryptionProfile$ === "object");
assert(NoSuchFunctionExists.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchFunctionExists$ === "object");
assert(NoSuchInvalidation.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchInvalidation$ === "object");
assert(NoSuchMonitoringSubscription.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchMonitoringSubscription$ === "object");
assert(NoSuchOrigin.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchOrigin$ === "object");
assert(NoSuchOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchOriginAccessControl$ === "object");
assert(NoSuchOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchOriginRequestPolicy$ === "object");
assert(NoSuchPublicKey.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchPublicKey$ === "object");
assert(NoSuchRealtimeLogConfig.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchRealtimeLogConfig$ === "object");
assert(NoSuchResource.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchResource$ === "object");
assert(NoSuchResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchResponseHeadersPolicy$ === "object");
assert(NoSuchStreamingDistribution.prototype instanceof CloudFrontServiceException);
assert(typeof NoSuchStreamingDistribution$ === "object");
assert(OriginAccessControlAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof OriginAccessControlAlreadyExists$ === "object");
assert(OriginAccessControlInUse.prototype instanceof CloudFrontServiceException);
assert(typeof OriginAccessControlInUse$ === "object");
assert(OriginRequestPolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof OriginRequestPolicyAlreadyExists$ === "object");
assert(OriginRequestPolicyInUse.prototype instanceof CloudFrontServiceException);
assert(typeof OriginRequestPolicyInUse$ === "object");
assert(PreconditionFailed.prototype instanceof CloudFrontServiceException);
assert(typeof PreconditionFailed$ === "object");
assert(PublicKeyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof PublicKeyAlreadyExists$ === "object");
assert(PublicKeyInUse.prototype instanceof CloudFrontServiceException);
assert(typeof PublicKeyInUse$ === "object");
assert(QueryArgProfileEmpty.prototype instanceof CloudFrontServiceException);
assert(typeof QueryArgProfileEmpty$ === "object");
assert(RealtimeLogConfigAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof RealtimeLogConfigAlreadyExists$ === "object");
assert(RealtimeLogConfigInUse.prototype instanceof CloudFrontServiceException);
assert(typeof RealtimeLogConfigInUse$ === "object");
assert(RealtimeLogConfigOwnerMismatch.prototype instanceof CloudFrontServiceException);
assert(typeof RealtimeLogConfigOwnerMismatch$ === "object");
assert(ResourceInUse.prototype instanceof CloudFrontServiceException);
assert(typeof ResourceInUse$ === "object");
assert(ResourceNotDisabled.prototype instanceof CloudFrontServiceException);
assert(typeof ResourceNotDisabled$ === "object");
assert(ResponseHeadersPolicyAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof ResponseHeadersPolicyAlreadyExists$ === "object");
assert(ResponseHeadersPolicyInUse.prototype instanceof CloudFrontServiceException);
assert(typeof ResponseHeadersPolicyInUse$ === "object");
assert(StagingDistributionInUse.prototype instanceof CloudFrontServiceException);
assert(typeof StagingDistributionInUse$ === "object");
assert(StreamingDistributionAlreadyExists.prototype instanceof CloudFrontServiceException);
assert(typeof StreamingDistributionAlreadyExists$ === "object");
assert(StreamingDistributionNotDisabled.prototype instanceof CloudFrontServiceException);
assert(typeof StreamingDistributionNotDisabled$ === "object");
assert(TestFunctionFailed.prototype instanceof CloudFrontServiceException);
assert(typeof TestFunctionFailed$ === "object");
assert(TooLongCSPInResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooLongCSPInResponseHeadersPolicy$ === "object");
assert(TooManyCacheBehaviors.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCacheBehaviors$ === "object");
assert(TooManyCachePolicies.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCachePolicies$ === "object");
assert(TooManyCertificates.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCertificates$ === "object");
assert(TooManyCloudFrontOriginAccessIdentities.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCloudFrontOriginAccessIdentities$ === "object");
assert(TooManyContinuousDeploymentPolicies.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyContinuousDeploymentPolicies$ === "object");
assert(TooManyCookieNamesInWhiteList.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCookieNamesInWhiteList$ === "object");
assert(TooManyCookiesInCachePolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCookiesInCachePolicy$ === "object");
assert(TooManyCookiesInOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCookiesInOriginRequestPolicy$ === "object");
assert(TooManyCustomHeadersInResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyCustomHeadersInResponseHeadersPolicy$ === "object");
assert(TooManyDistributionCNAMEs.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionCNAMEs$ === "object");
assert(TooManyDistributions.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributions$ === "object");
assert(TooManyDistributionsAssociatedToCachePolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsAssociatedToCachePolicy$ === "object");
assert(TooManyDistributionsAssociatedToFieldLevelEncryptionConfig.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsAssociatedToFieldLevelEncryptionConfig$ === "object");
assert(TooManyDistributionsAssociatedToKeyGroup.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsAssociatedToKeyGroup$ === "object");
assert(TooManyDistributionsAssociatedToOriginAccessControl.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsAssociatedToOriginAccessControl$ === "object");
assert(TooManyDistributionsAssociatedToOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsAssociatedToOriginRequestPolicy$ === "object");
assert(TooManyDistributionsAssociatedToResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsAssociatedToResponseHeadersPolicy$ === "object");
assert(TooManyDistributionsWithFunctionAssociations.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsWithFunctionAssociations$ === "object");
assert(TooManyDistributionsWithLambdaAssociations.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsWithLambdaAssociations$ === "object");
assert(TooManyDistributionsWithSingleFunctionARN.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyDistributionsWithSingleFunctionARN$ === "object");
assert(TooManyFieldLevelEncryptionConfigs.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFieldLevelEncryptionConfigs$ === "object");
assert(TooManyFieldLevelEncryptionContentTypeProfiles.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFieldLevelEncryptionContentTypeProfiles$ === "object");
assert(TooManyFieldLevelEncryptionEncryptionEntities.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFieldLevelEncryptionEncryptionEntities$ === "object");
assert(TooManyFieldLevelEncryptionFieldPatterns.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFieldLevelEncryptionFieldPatterns$ === "object");
assert(TooManyFieldLevelEncryptionProfiles.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFieldLevelEncryptionProfiles$ === "object");
assert(TooManyFieldLevelEncryptionQueryArgProfiles.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFieldLevelEncryptionQueryArgProfiles$ === "object");
assert(TooManyFunctionAssociations.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFunctionAssociations$ === "object");
assert(TooManyFunctions.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyFunctions$ === "object");
assert(TooManyHeadersInCachePolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyHeadersInCachePolicy$ === "object");
assert(TooManyHeadersInForwardedValues.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyHeadersInForwardedValues$ === "object");
assert(TooManyHeadersInOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyHeadersInOriginRequestPolicy$ === "object");
assert(TooManyInvalidationsInProgress.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyInvalidationsInProgress$ === "object");
assert(TooManyKeyGroups.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyKeyGroups$ === "object");
assert(TooManyKeyGroupsAssociatedToDistribution.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyKeyGroupsAssociatedToDistribution$ === "object");
assert(TooManyLambdaFunctionAssociations.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyLambdaFunctionAssociations$ === "object");
assert(TooManyOriginAccessControls.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyOriginAccessControls$ === "object");
assert(TooManyOriginCustomHeaders.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyOriginCustomHeaders$ === "object");
assert(TooManyOriginGroupsPerDistribution.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyOriginGroupsPerDistribution$ === "object");
assert(TooManyOriginRequestPolicies.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyOriginRequestPolicies$ === "object");
assert(TooManyOrigins.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyOrigins$ === "object");
assert(TooManyPublicKeys.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyPublicKeys$ === "object");
assert(TooManyPublicKeysInKeyGroup.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyPublicKeysInKeyGroup$ === "object");
assert(TooManyQueryStringParameters.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyQueryStringParameters$ === "object");
assert(TooManyQueryStringsInCachePolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyQueryStringsInCachePolicy$ === "object");
assert(TooManyQueryStringsInOriginRequestPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyQueryStringsInOriginRequestPolicy$ === "object");
assert(TooManyRealtimeLogConfigs.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyRealtimeLogConfigs$ === "object");
assert(TooManyRemoveHeadersInResponseHeadersPolicy.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyRemoveHeadersInResponseHeadersPolicy$ === "object");
assert(TooManyResponseHeadersPolicies.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyResponseHeadersPolicies$ === "object");
assert(TooManyStreamingDistributionCNAMEs.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyStreamingDistributionCNAMEs$ === "object");
assert(TooManyStreamingDistributions.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyStreamingDistributions$ === "object");
assert(TooManyTrustedSigners.prototype instanceof CloudFrontServiceException);
assert(typeof TooManyTrustedSigners$ === "object");
assert(TrustedKeyGroupDoesNotExist.prototype instanceof CloudFrontServiceException);
assert(typeof TrustedKeyGroupDoesNotExist$ === "object");
assert(TrustedSignerDoesNotExist.prototype instanceof CloudFrontServiceException);
assert(typeof TrustedSignerDoesNotExist$ === "object");
assert(UnsupportedOperation.prototype instanceof CloudFrontServiceException);
assert(typeof UnsupportedOperation$ === "object");
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
