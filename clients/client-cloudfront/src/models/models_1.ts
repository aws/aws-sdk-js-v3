// smithy-typescript generated code
import type {
  CachePolicyType,
  ConnectionMode,
  DistributionResourceType,
  DnsConfigurationStatus,
  FunctionStage,
  HttpVersion,
  IpAddressType,
  ManagedCertificateStatus,
  OriginAccessControlOriginTypes,
  OriginAccessControlSigningBehaviors,
  OriginAccessControlSigningProtocols,
  OriginRequestPolicyType,
  PriceClass,
  ResponseHeadersPolicyType,
  TrustStoreStatus,
  ValidationTokenHost,
  VpcIpAddressType,
} from "./enums";
import type {
  Aliases,
  AliasICPRecordal,
  AnycastIpList,
  AnycastIpListCollection,
  CaCertificatesBundleSource,
  CacheBehaviors,
  CachePolicy,
  CachePolicyConfig,
  CachePolicyList,
  CloudFrontOriginAccessIdentity,
  CloudFrontOriginAccessIdentityConfig,
  ConnectionFunctionAssociation,
  ConnectionFunctionSummary,
  ConnectionGroup,
  ContentTypeProfileConfig,
  ContinuousDeploymentPolicy,
  ContinuousDeploymentPolicyConfig,
  CustomErrorResponses,
  Customizations,
  DefaultCacheBehavior,
  Distribution,
  DistributionConfig,
  DistributionTenant,
  DomainItem,
  DomainResult,
  EncryptionEntities,
  EndPoint,
  FieldLevelEncryption,
  FieldLevelEncryptionConfig,
  FieldLevelEncryptionProfile,
  FieldLevelEncryptionProfileConfig,
  FunctionConfig,
  FunctionSummary,
  IpamCidrConfig,
  KeyGroup,
  KeyGroupConfig,
  KeyValueStore,
  ManagedCertificateRequest,
  MonitoringSubscription,
  OriginAccessControl,
  OriginAccessControlConfig,
  OriginGroups,
  OriginRequestPolicy,
  OriginRequestPolicyConfig,
  Origins,
  Parameter,
  PublicKey,
  PublicKeyConfig,
  QueryArgProfileConfig,
  RealtimeLogConfig,
  ResponseHeadersPolicy,
  ResponseHeadersPolicyConfig,
  Restrictions,
  S3Origin,
  StreamingDistribution,
  StreamingDistributionConfig,
  Tags,
  TrustedSigners,
  TrustStore,
  ViewerCertificate,
  ViewerMtlsConfig,
  VpcOrigin,
  VpcOriginEndpointConfig,
} from "./models_0";

/**
 * @public
 */
export interface GetKeyGroupConfigResult {
  /**
   * The key group configuration.
   *
   * @public
   */
  KeyGroupConfig?: KeyGroupConfig | undefined;

  /**
   * The identifier for this version of the key group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedCertificateDetailsRequest {
  /**
   * The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * Contains details about the validation token.
 *
 * @public
 */
export interface ValidationTokenDetail {
  /**
   * The domain name.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The domain to redirect to.
   *
   * @public
   */
  RedirectTo?: string | undefined;

  /**
   * The domain to redirect from.
   *
   * @public
   */
  RedirectFrom?: string | undefined;
}

/**
 * Contains details about the CloudFront managed ACM certificate.
 *
 * @public
 */
export interface ManagedCertificateDetails {
  /**
   * The ARN of the CloudFront managed ACM certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The status of the CloudFront managed ACM certificate.
   *
   * > **Note:** Your distribution tenant will be updated with the latest certificate status. When calling the [UpdateDistributionTenant](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistributionTenant.html) operation, use the latest value for the `ETag`.
   *
   * @public
   */
  CertificateStatus?: ManagedCertificateStatus | undefined;

  /**
   * Contains details about the validation token host of the specified CloudFront managed ACM certificate.
   *
   * - For `cloudfront`, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.
   * - For `self-hosted`, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.
   *
   * > **Note:** This setting only affects the initial certificate request. Once the DNS points to CloudFront, all future certificate renewals are automatically handled through CloudFront.
   *
   * @public
   */
  ValidationTokenHost?: ValidationTokenHost | undefined;

  /**
   * Contains details about the validation token of the specified CloudFront managed ACM certificate.
   *
   * @public
   */
  ValidationTokenDetails?: ValidationTokenDetail[] | undefined;
}

/**
 * @public
 */
export interface GetManagedCertificateDetailsResult {
  /**
   * Contains details about the CloudFront managed ACM certificate.
   *
   * @public
   */
  ManagedCertificateDetails?: ManagedCertificateDetails | undefined;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionRequest {
  /**
   * The ID of the distribution that you are getting metrics information for.
   *
   * @public
   */
  DistributionId: string | undefined;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionResult {
  /**
   * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   *
   * @public
   */
  MonitoringSubscription?: MonitoringSubscription | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlRequest {
  /**
   * The unique identifier of the origin access control.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlResult {
  /**
   * Contains an origin access control, including its unique identifier.
   *
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * The version identifier for the current version of the origin access control.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigRequest {
  /**
   * The unique identifier of the origin access control.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigResult {
  /**
   * Contains an origin access control configuration.
   *
   * @public
   */
  OriginAccessControlConfig?: OriginAccessControlConfig | undefined;

  /**
   * The version identifier for the current version of the origin access control.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyRequest {
  /**
   * The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the origin request policy is not attached to a cache behavior, you can get the identifier using `ListOriginRequestPolicies`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyResult {
  /**
   * The origin request policy.
   *
   * @public
   */
  OriginRequestPolicy?: OriginRequestPolicy | undefined;

  /**
   * The current version of the origin request policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigRequest {
  /**
   * The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the origin request policy is not attached to a cache behavior, you can get the identifier using `ListOriginRequestPolicies`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigResult {
  /**
   * The origin request policy configuration.
   *
   * @public
   */
  OriginRequestPolicyConfig?: OriginRequestPolicyConfig | undefined;

  /**
   * The current version of the origin request policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyRequest {
  /**
   * The identifier of the public key you are getting.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyResult {
  /**
   * The public key.
   *
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * The identifier for this version of the public key.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyConfigRequest {
  /**
   * The identifier of the public key whose configuration you are getting.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyConfigResult {
  /**
   * A public key configuration.
   *
   * @public
   */
  PublicKeyConfig?: PublicKeyConfig | undefined;

  /**
   * The identifier for this version of the public key configuration.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetRealtimeLogConfigRequest {
  /**
   * The name of the real-time log configuration to get.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration to get.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface GetRealtimeLogConfigResult {
  /**
   * A real-time log configuration.
   *
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudFront resource that is associated with the resource policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResult {
  /**
   * The Amazon Resource Name (ARN) of the CloudFront resource that is associated with the resource policy.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The resource policy in JSON format.
   *
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyRequest {
  /**
   * The identifier for the response headers policy.
   *
   * If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the response headers policy is not attached to a cache behavior, you can get the identifier using `ListResponseHeadersPolicies`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyResult {
  /**
   * Contains a response headers policy.
   *
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * The version identifier for the current version of the response headers policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigRequest {
  /**
   * The identifier for the response headers policy.
   *
   * If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the response headers policy is not attached to a cache behavior, you can get the identifier using `ListResponseHeadersPolicies`.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigResult {
  /**
   * Contains a response headers policy.
   *
   * @public
   */
  ResponseHeadersPolicyConfig?: ResponseHeadersPolicyConfig | undefined;

  /**
   * The version identifier for the current version of the response headers policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to get a streaming distribution's information.
 *
 * @public
 */
export interface GetStreamingDistributionRequest {
  /**
   * The streaming distribution's ID.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface GetStreamingDistributionResult {
  /**
   * The streaming distribution's information.
   *
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * The current version of the streaming distribution's information. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * To request to get a streaming distribution configuration.
 *
 * @public
 */
export interface GetStreamingDistributionConfigRequest {
  /**
   * The streaming distribution's ID.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface GetStreamingDistributionConfigResult {
  /**
   * The streaming distribution's configuration information.
   *
   * @public
   */
  StreamingDistributionConfig?: StreamingDistributionConfig | undefined;

  /**
   * The current version of the configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreRequest {
  /**
   * The trust store's identifier.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreResult {
  /**
   * The trust store.
   *
   * @public
   */
  TrustStore?: TrustStore | undefined;

  /**
   * The version identifier for the current version of the trust store.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetVpcOriginRequest {
  /**
   * The VPC origin ID.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetVpcOriginResult {
  /**
   * The VPC origin.
   *
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * The VPC origin ETag.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface ListAnycastIpListsRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of Anycast static IP lists that you want returned in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListAnycastIpListsResult {
  /**
   * Root level tag for the `AnycastIpLists` parameters.
   *
   * @public
   */
  AnycastIpLists?: AnycastIpListCollection | undefined;
}

/**
 * @public
 */
export interface ListCachePoliciesRequest {
  /**
   * A filter to return only the specified kinds of cache policies. Valid values are:
   *
   * - `managed` – Returns only the managed policies created by Amazon Web Services.
   * - `custom` – Returns only the custom policies created in your Amazon Web Services account.
   *
   * @public
   */
  Type?: CachePolicyType | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of cache policies that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListCachePoliciesResult {
  /**
   * A list of cache policies.
   *
   * @public
   */
  CachePolicyList?: CachePolicyList | undefined;
}

/**
 * The request to list origin access identities.
 *
 * @public
 */
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the `Marker` to the value of the `NextMarker` from the current page's response (which is also the ID of the last identity on that page).
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of origin access identities you want in the response body.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Summary of the information about a CloudFront origin access identity.
 *
 * @public
 */
export interface CloudFrontOriginAccessIdentitySummary {
  /**
   * The ID for the origin access identity. For example: `E74FTE3AJFJ256A`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon S3 canonical user ID for the origin access identity, which you use when giving the origin access identity read permission to an object in Amazon S3.
   *
   * @public
   */
  S3CanonicalUserId: string | undefined;

  /**
   * The comment for this origin access identity, as originally specified when created.
   *
   * @public
   */
  Comment: string | undefined;
}

/**
 * Lists the origin access identities for CloudFront.Send a `GET` request to the `/CloudFront API version/origin-access-identity/cloudfront` resource. The response includes a `CloudFrontOriginAccessIdentityList` element with zero or more `CloudFrontOriginAccessIdentitySummary` child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the `MaxItems` and `Marker` parameters.
 *
 * @public
 */
export interface CloudFrontOriginAccessIdentityList {
  /**
   * Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the `Marker` to the value of the `NextMarker` from the current page's response (which is also the ID of the last identity on that page).
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * If `IsTruncated` is `true`, this element is present and contains the value you can use for the `Marker` request parameter to continue listing your origin access identities where they left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of origin access identities you want in the response body.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * A flag that indicates whether more origin access identities remain to be listed. If your results were truncated, you can make a follow-up pagination request using the `Marker` request parameter to retrieve more items in the list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The number of CloudFront origin access identities that were created by the current Amazon Web Services account.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains one `CloudFrontOriginAccessIdentitySummary` element for each origin access identity that was created by the current Amazon Web Services account.
   *
   * @public
   */
  Items?: CloudFrontOriginAccessIdentitySummary[] | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * The `CloudFrontOriginAccessIdentityList` type.
   *
   * @public
   */
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList | undefined;
}

/**
 * @public
 */
export interface ListConflictingAliasesRequest {
  /**
   * The ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * The alias (also called a CNAME) to search for conflicting aliases.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of conflicting aliases that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * An alias (also called a CNAME) and the CloudFront standard distribution and Amazon Web Services account ID that it's associated with. The standard distribution and account IDs are partially hidden, which allows you to identify the standard distributions and accounts that you own, and helps to protect the information of ones that you don't own.
 *
 * @public
 */
export interface ConflictingAlias {
  /**
   * An alias (also called a CNAME).
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The (partially hidden) ID of the CloudFront standard distribution associated with the alias.
   *
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * The (partially hidden) ID of the Amazon Web Services account that owns the standard distribution that's associated with the alias.
   *
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * A list of aliases (also called CNAMEs) and the CloudFront standard distributions and Amazon Web Services accounts that they are associated with. In the list, the standard distribution and account IDs are partially hidden, which allows you to identify the standard distributions and accounts that you own, but helps to protect the information of ones that you don't own.
 *
 * @public
 */
export interface ConflictingAliasesList {
  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the `Marker` field of a subsequent request to continue listing conflicting aliases where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of conflicting aliases requested.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The number of conflicting aliases returned in the response.
   *
   * @public
   */
  Quantity?: number | undefined;

  /**
   * Contains the conflicting aliases in the list.
   *
   * @public
   */
  Items?: ConflictingAlias[] | undefined;
}

/**
 * @public
 */
export interface ListConflictingAliasesResult {
  /**
   * A list of conflicting aliases.
   *
   * @public
   */
  ConflictingAliasesList?: ConflictingAliasesList | undefined;
}

/**
 * @public
 */
export interface ListConnectionFunctionsRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of connection functions that you want returned in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The connection function's stage.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface ListConnectionFunctionsResult {
  /**
   * Indicates the next page of connection functions. To get the next page of the list, use this value in the `Marker` field of your request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of connection functions.
   *
   * @public
   */
  ConnectionFunctions?: ConnectionFunctionSummary[] | undefined;
}

/**
 * Contains information about what CloudFront resources your connection groups are associated with.
 *
 * @public
 */
export interface ConnectionGroupAssociationFilter {
  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  AnycastIpListId?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionGroupsRequest {
  /**
   * Filter by associated Anycast IP list ID.
   *
   * @public
   */
  AssociationFilter?: ConnectionGroupAssociationFilter | undefined;

  /**
   * The marker for the next set of connection groups to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of connection groups to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary that contains details about your connection groups.
 *
 * @public
 */
export interface ConnectionGroupSummary {
  /**
   * The ID of the connection group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The name of the connection group.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connection group.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The routing endpoint (also known as the DNS name) that is assigned to the connection group, such as d111111abcdef8.cloudfront.net.
   *
   * @public
   */
  RoutingEndpoint: string | undefined;

  /**
   * The date and time when the connection group was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The date and time when the connection group was updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The current version of the connection group.
   *
   * @public
   */
  ETag: string | undefined;

  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * Whether the connection group is enabled
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The status of the connection group.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Whether the connection group is the default connection group for the distribution tenants.
   *
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface ListConnectionGroupsResult {
  /**
   * A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The list of connection groups that you retrieved.
   *
   * @public
   */
  ConnectionGroups?: ConnectionGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of continuous deployment policies that you want returned in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary of the information about your continuous deployment policies.
 *
 * @public
 */
export interface ContinuousDeploymentPolicySummary {
  /**
   * The continuous deployment policy.
   *
   * @public
   */
  ContinuousDeploymentPolicy: ContinuousDeploymentPolicy | undefined;
}

/**
 * Contains a list of continuous deployment policies.
 *
 * @public
 */
export interface ContinuousDeploymentPolicyList {
  /**
   * Indicates the next page of continuous deployment policies. To get the next page of the list, use this value in the `Marker` field of your request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of continuous deployment policies that were specified in your request.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The total number of continuous deployment policies in your Amazon Web Services account, regardless of the `MaxItems` value.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of continuous deployment policy items.
   *
   * @public
   */
  Items?: ContinuousDeploymentPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesResult {
  /**
   * A list of continuous deployment policies.
   *
   * @public
   */
  ContinuousDeploymentPolicyList?: ContinuousDeploymentPolicyList | undefined;
}

/**
 * The request to list your distributions.
 *
 * @public
 */
export interface ListDistributionsRequest {
  /**
   * Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the `Marker` to the value of the `NextMarker` from the current page's response (which is also the ID of the last distribution on that page).
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions you want in the response body.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary of the information about a CloudFront distribution.
 *
 * @public
 */
export interface DistributionSummary {
  /**
   * The identifier for the distribution. For example: `EDFDVBD632BHDS5`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN (Amazon Resource Name) for the distribution. For example: `arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5`, where `123456789012` is your Amazon Web Services account ID.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * The current version of the distribution.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The current status of the distribution. When the status is `Deployed`, the distribution's information is propagated to all CloudFront edge locations.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The date and time the distribution was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The domain name that corresponds to the distribution, for example, `d111111abcdef8.cloudfront.net`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
   *
   * @public
   */
  Aliases: Aliases | undefined;

  /**
   * A complex type that contains information about origins for this distribution.
   *
   * @public
   */
  Origins: Origins | undefined;

  /**
   * A complex type that contains information about origin groups for this distribution.
   *
   * @public
   */
  OriginGroups?: OriginGroups | undefined;

  /**
   * A complex type that describes the default cache behavior if you don't specify a `CacheBehavior` element or if files don't match any of the values of `PathPattern` in `CacheBehavior` elements. You must create exactly one default cache behavior.
   *
   * @public
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * A complex type that contains zero or more `CacheBehavior` elements.
   *
   * @public
   */
  CacheBehaviors: CacheBehaviors | undefined;

  /**
   * A complex type that contains zero or more `CustomErrorResponses` elements.
   *
   * @public
   */
  CustomErrorResponses: CustomErrorResponses | undefined;

  /**
   * The comment originally specified when this distribution was created.
   *
   * @public
   */
  Comment: string | undefined;

  /**
   * > **Note:** This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see [Unsupported features for SaaS Manager for Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas) in the *Amazon CloudFront Developer Guide*.
   *
   * A complex type that contains information about price class for this streaming distribution.
   *
   * @public
   */
  PriceClass: PriceClass | undefined;

  /**
   * Whether the distribution is enabled to accept user requests for content.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
   *
   * @public
   */
  ViewerCertificate: ViewerCertificate | undefined;

  /**
   * A complex type that identifies ways in which you want to restrict distribution of your content.
   *
   * @public
   */
  Restrictions: Restrictions | undefined;

  /**
   * The Web ACL Id (if any) associated with the distribution.
   *
   * @public
   */
  WebACLId: string | undefined;

  /**
   * Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is `http2`. Viewers that don't support `HTTP/2` will automatically use an earlier version.
   *
   * @public
   */
  HttpVersion: HttpVersion | undefined;

  /**
   * Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your distribution.
   *
   * @public
   */
  IsIPV6Enabled: boolean | undefined;

  /**
   * Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.
   *
   * For more information about ICP recordals, see [Signup, Accounts, and Credentials](https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html) in *Getting Started with Amazon Web Services services in China*.
   *
   * @public
   */
  AliasICPRecordals?: AliasICPRecordal[] | undefined;

  /**
   * A Boolean that indicates whether this is a staging distribution. When this value is `true`, this is a staging distribution. When this value is `false`, this is not a staging distribution.
   *
   * @public
   */
  Staging: boolean | undefined;

  /**
   * This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).
   *
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * ID of the Anycast static IP list that is associated with the distribution.
   *
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * The distribution's viewer mTLS configuration.
   *
   * @public
   */
  ViewerMtlsConfig?: ViewerMtlsConfig | undefined;

  /**
   * The distribution's connection function association.
   *
   * @public
   */
  ConnectionFunctionAssociation?: ConnectionFunctionAssociation | undefined;
}

/**
 * A distribution list.
 *
 * @public
 */
export interface DistributionList {
  /**
   * The value you provided for the `Marker` request parameter.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * If `IsTruncated` is `true`, this element is present and contains the value you can use for the `Marker` request parameter to continue listing your distributions where they left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The value you provided for the `MaxItems` request parameter.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the `Marker` request parameter to retrieve more distributions in the list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The number of distributions that were created by the current Amazon Web Services account.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains one `DistributionSummary` element for each distribution that was created by the current Amazon Web Services account.
   *
   * @public
   */
  Items?: DistributionSummary[] | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface ListDistributionsResult {
  /**
   * The `DistributionList` type.
   *
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByAnycastIpListIdRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions that you want returned in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  AnycastIpListId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByAnycastIpListIdResult {
  /**
   * A distribution list.
   *
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distribution IDs that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The ID of the cache policy whose associated distribution IDs you want to list.
   *
   * @public
   */
  CachePolicyId: string | undefined;
}

/**
 * A list of distribution IDs.
 *
 * @public
 */
export interface DistributionIdList {
  /**
   * The value provided in the `Marker` request field.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * Contains the value that you should use in the `Marker` field of a subsequent request to continue listing distribution IDs where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of distribution IDs requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the `Marker` request field to retrieve more distribution IDs in the list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The total number of distribution IDs returned in the response.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Contains the distribution IDs in the list.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdResult {
  /**
   * A list of distribution IDs.
   *
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionFunctionRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions that you want returned in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The distributions by connection function identifier.
   *
   * @public
   */
  ConnectionFunctionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionFunctionResult {
  /**
   * A distribution list.
   *
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionModeRequest {
  /**
   * The marker for the next set of distributions to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions to return.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).
   *
   * @public
   */
  ConnectionMode: ConnectionMode | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionModeResult {
  /**
   * A distribution list.
   *
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distribution IDs that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The ID of the key group whose associated distribution IDs you are listing.
   *
   * @public
   */
  KeyGroupId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupResult {
  /**
   * A list of distribution IDs.
   *
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distribution IDs that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The ID of the origin request policy whose associated distribution IDs you want to list.
   *
   * @public
   */
  OriginRequestPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * A list of distribution IDs.
   *
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOwnedResourceRequest {
  /**
   * The ARN of the CloudFront resource that you've shared with other Amazon Web Services accounts.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A structure that pairs a CloudFront distribution ID with its owning Amazon Web Services account ID.
 *
 * @public
 */
export interface DistributionIdOwner {
  /**
   * The ID of the distribution.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the distribution.
   *
   * @public
   */
  OwnerAccountId: string | undefined;
}

/**
 * The list of distribution IDs and the Amazon Web Services accounts that they belong to.
 *
 * @public
 */
export interface DistributionIdOwnerList {
  /**
   * Use this field when paginating results to indicate where to begin in your list of `DistributionIdOwner` objects. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of `DistributionIdOwner` objects to return.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * A flag that indicates whether more `DistributionIdOwner` objects remain to be listed. If your results were truncated, you can make a follow-up pagination request using the `Marker` request parameter to retrieve more results in the list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * Specifies the actual number of `DistributionIdOwner` objects included in the list for the current page.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The number of `DistributionIdOwner` objects.
   *
   * @public
   */
  Items?: DistributionIdOwner[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOwnedResourceResult {
  /**
   * The list of distributions that are using the shared resource.
   *
   * @public
   */
  DistributionList?: DistributionIdOwnerList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The name of the real-time log configuration whose associated distributions you want to list.
   *
   * @public
   */
  RealtimeLogConfigName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.
   *
   * @public
   */
  RealtimeLogConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * A distribution list.
   *
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distribution IDs that you want to get in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The ID of the response headers policy whose associated distribution IDs you want to list.
   *
   * @public
   */
  ResponseHeadersPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdResult {
  /**
   * A list of distribution IDs.
   *
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByTrustStoreRequest {
  /**
   * The distributions by trust store identifier.
   *
   * @public
   */
  TrustStoreIdentifier: string | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions that you want returned in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByTrustStoreResult {
  /**
   * A distribution list.
   *
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByVpcOriginIdRequest {
  /**
   * The marker associated with the VPC origin distributions list.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of items included in the list.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The VPC origin ID.
   *
   * @public
   */
  VpcOriginId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByVpcOriginIdResult {
  /**
   * A list of distribution IDs.
   *
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * The request to list distributions that are associated with a specified WAF web ACL.
 *
 * @public
 */
export interface ListDistributionsByWebACLIdRequest {
  /**
   * Use `Marker` and `MaxItems` to control pagination of results. If you have more than `MaxItems` distributions that satisfy the request, the response includes a `NextMarker` element. To get the next page of results, submit another request. For the value of `Marker`, specify the value of `NextMarker` from the last response. (For the first request, omit `Marker`.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL.
   *
   * For WAFV2, this is the ARN of the web ACL, such as `arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * For WAF Classic, this is the ID of the web ACL, such as `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
   *
   * @public
   */
  WebACLId: string | undefined;
}

/**
 * The response to a request to list the distributions that are associated with a specified WAF web ACL.
 *
 * @public
 */
export interface ListDistributionsByWebACLIdResult {
  /**
   * The `DistributionList` type.
   *
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * Filter by the associated distribution ID or connection group ID.
 *
 * @public
 */
export interface DistributionTenantAssociationFilter {
  /**
   * The distribution ID to filter by. You can find distribution tenants associated with a specific distribution.
   *
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * The ID of the connection group to filter by. You can find distribution tenants associated with a specific connection group.
   *
   * @public
   */
  ConnectionGroupId?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsRequest {
  /**
   * Filter by the associated distribution ID or connection group ID.
   *
   * @public
   */
  AssociationFilter?: DistributionTenantAssociationFilter | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distribution tenants to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary of the information about a distribution tenant.
 *
 * @public
 */
export interface DistributionTenantSummary {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier for the multi-tenant distribution. For example: `EDFDVBD632BHDS5`.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * The name of the distribution tenant.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution tenant.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The domains associated with the distribution tenant.
   *
   * @public
   */
  Domains: DomainResult[] | undefined;

  /**
   * The ID of the connection group ID for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.
   *
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
   *
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * The date and time when the distribution tenant was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The date and time when the distribution tenant was updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The current version of the distribution tenant.
   *
   * @public
   */
  ETag: string | undefined;

  /**
   * Indicates whether the distribution tenants are in an enabled state. If disabled, the distribution tenant won't service traffic.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The status of the distribution tenant.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsResult {
  /**
   * A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The list of distribution tenants that you retrieved.
   *
   * @public
   */
  DistributionTenantList?: DistributionTenantSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsByCustomizationRequest {
  /**
   * Filter by the ARN of the associated WAF web ACL.
   *
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * Filter by the ARN of the associated ACM certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of distribution tenants to return by the specified customization.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsByCustomizationResult {
  /**
   * A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of distribution tenants with the specified customization.
   *
   * @public
   */
  DistributionTenantList?: DistributionTenantSummary[] | undefined;
}

/**
 * The IDs for the distribution resources.
 *
 * @public
 */
export interface DistributionResourceId {
  /**
   * The ID of the multi-tenant distribution.
   *
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  DistributionTenantId?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainConflictsRequest {
  /**
   * The domain to check for conflicts.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The distribution resource identifier. This can be the standard distribution or distribution tenant that has a valid certificate, which covers the domain that you specify.
   *
   * @public
   */
  DomainControlValidationResource: DistributionResourceId | undefined;

  /**
   * The maximum number of domain conflicts to return.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The marker for the next set of domain conflicts.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Contains information about the domain conflict. Use this information to determine the affected domain, the related resource, and the affected Amazon Web Services account.
 *
 * @public
 */
export interface DomainConflict {
  /**
   * The domain used to find existing conflicts for domain configurations.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The CloudFront resource type that has a domain conflict.
   *
   * @public
   */
  ResourceType: DistributionResourceType | undefined;

  /**
   * The ID of the resource that has a domain conflict.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The ID of the Amazon Web Services account for the domain conflict.
   *
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface ListDomainConflictsResult {
  /**
   * Contains details about the domain conflicts.
   *
   * @public
   */
  DomainConflicts?: DomainConflict[] | undefined;

  /**
   * A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsRequest {
  /**
   * Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the `Marker` to the value of the `NextMarker` from the current page's response (which is also the ID of the last configuration on that page).
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of field-level encryption configurations you want in the response body.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary of a field-level encryption item.
 *
 * @public
 */
export interface FieldLevelEncryptionSummary {
  /**
   * The unique ID of a field-level encryption item.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The last time that the summary of field-level encryption items was modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * An optional comment about the field-level encryption item. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;

  /**
   * A summary of a query argument-profile mapping.
   *
   * @public
   */
  QueryArgProfileConfig?: QueryArgProfileConfig | undefined;

  /**
   * A summary of a content type-profile mapping.
   *
   * @public
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig | undefined;
}

/**
 * List of field-level encryption configurations.
 *
 * @public
 */
export interface FieldLevelEncryptionList {
  /**
   * If there are more elements to be listed, this element is present and contains the value that you can use for the `Marker` request parameter to continue listing your configurations where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of elements you want in the response body.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The number of field-level encryption items.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * An array of field-level encryption items.
   *
   * @public
   */
  Items?: FieldLevelEncryptionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsResult {
  /**
   * Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.
   *
   * @public
   */
  FieldLevelEncryptionList?: FieldLevelEncryptionList | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesRequest {
  /**
   * Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the `Marker` to the value of the `NextMarker` from the current page's response (which is also the ID of the last profile on that page).
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of field-level encryption profiles you want in the response body.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * The field-level encryption profile summary.
 *
 * @public
 */
export interface FieldLevelEncryptionProfileSummary {
  /**
   * ID for the field-level encryption profile summary.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The time when the field-level encryption profile summary was last updated.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * Name for the field-level encryption profile summary.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.
   *
   * @public
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * An optional comment for the field-level encryption profile summary. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;
}

/**
 * List of field-level encryption profiles.
 *
 * @public
 */
export interface FieldLevelEncryptionProfileList {
  /**
   * If there are more elements to be listed, this element is present and contains the value that you can use for the `Marker` request parameter to continue listing your profiles where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of field-level encryption profiles you want in the response body.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The number of field-level encryption profiles.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The field-level encryption profile items.
   *
   * @public
   */
  Items?: FieldLevelEncryptionProfileSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesResult {
  /**
   * Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.
   *
   * @public
   */
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of functions that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * An optional filter to return only the functions that are in the specified stage, either `DEVELOPMENT` or `LIVE`.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * A list of CloudFront functions.
 *
 * @public
 */
export interface FunctionList {
  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the `Marker` field of a subsequent request to continue listing functions where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of functions requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The number of functions returned in the response.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Contains the functions in the list.
   *
   * @public
   */
  Items?: FunctionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionsResult {
  /**
   * A list of CloudFront functions.
   *
   * @public
   */
  FunctionList?: FunctionList | undefined;
}

/**
 * The request to list invalidations.
 *
 * @public
 */
export interface ListInvalidationsRequest {
  /**
   * The distribution's ID.
   *
   * @public
   */
  DistributionId: string | undefined;

  /**
   * Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set `Marker` to the value of the `NextMarker` from the current page's response. This value is the same as the ID of the last invalidation batch on that page.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of invalidation batches that you want in the response body.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary of an invalidation request.
 *
 * @public
 */
export interface InvalidationSummary {
  /**
   * The unique ID for an invalidation request.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The time that an invalidation request was created.
   *
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * The status of an invalidation request.
   *
   * @public
   */
  Status: string | undefined;
}

/**
 * The `InvalidationList` complex type describes the list of invalidation objects. For more information about invalidation, see [Invalidating Objects (Web Distributions Only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @public
 */
export interface InvalidationList {
  /**
   * The value that you provided for the `Marker` request parameter.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * If `IsTruncated` is `true`, this element is present and contains the value that you can use for the `Marker` request parameter to continue listing your invalidation batches where they left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The value that you provided for the `MaxItems` request parameter.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * A flag that indicates whether more invalidation batch requests remain to be listed. If your results were truncated, you can make a follow-up pagination request using the `Marker` request parameter to retrieve more invalidation batches in the list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The number of invalidation batches that were created by the current Amazon Web Services account.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains one `InvalidationSummary` element for each invalidation batch created by the current Amazon Web Services account.
   *
   * @public
   */
  Items?: InvalidationSummary[] | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface ListInvalidationsResult {
  /**
   * Information about invalidation batches.
   *
   * @public
   */
  InvalidationList?: InvalidationList | undefined;
}

/**
 * @public
 */
export interface ListInvalidationsForDistributionTenantRequest {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set `Marker` to the value of the `NextMarker` from the current page's response. This value is the same as the ID of the last invalidation batch on that page.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of invalidations to return for the distribution tenant.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListInvalidationsForDistributionTenantResult {
  /**
   * The `InvalidationList` complex type describes the list of invalidation objects. For more information about invalidation, see [Invalidating Objects (Web Distributions Only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  InvalidationList?: InvalidationList | undefined;
}

/**
 * @public
 */
export interface ListKeyGroupsRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of key groups that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains information about a key group.
 *
 * @public
 */
export interface KeyGroupSummary {
  /**
   * A key group.
   *
   * @public
   */
  KeyGroup: KeyGroup | undefined;
}

/**
 * A list of key groups.
 *
 * @public
 */
export interface KeyGroupList {
  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the `Marker` field of a subsequent request to continue listing key groups.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of key groups requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The number of key groups returned in the response.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of key groups.
   *
   * @public
   */
  Items?: KeyGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListKeyGroupsResult {
  /**
   * A list of key groups.
   *
   * @public
   */
  KeyGroupList?: KeyGroupList | undefined;
}

/**
 * @public
 */
export interface ListKeyValueStoresRequest {
  /**
   * The marker associated with the key value stores list.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of items in the key value stores list.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * The status of the request for the key value stores list.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * The key value store list.
 *
 * @public
 */
export interface KeyValueStoreList {
  /**
   * The next marker associated with the key value store list.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of items in the key value store list.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The quantity of the key value store list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The items of the key value store list.
   *
   * @public
   */
  Items?: KeyValueStore[] | undefined;
}

/**
 * @public
 */
export interface ListKeyValueStoresResult {
  /**
   * The resulting key value stores list.
   *
   * @public
   */
  KeyValueStoreList?: KeyValueStoreList | undefined;
}

/**
 * @public
 */
export interface ListOriginAccessControlsRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of origin access controls that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A CloudFront origin access control.
 *
 * @public
 */
export interface OriginAccessControlSummary {
  /**
   * The unique identifier of the origin access control.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A description of the origin access control.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A unique name that identifies the origin access control.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The signing protocol of the origin access control. The signing protocol determines how CloudFront signs (authenticates) requests. The only valid values are `sigv4` and `sigv4a`.
   *
   * @public
   */
  SigningProtocol: OriginAccessControlSigningProtocols | undefined;

  /**
   * A value that specifies which requests CloudFront signs (adds authentication information to). This field can have one of the following values:
   *
   * - `never` – CloudFront doesn't sign any origin requests.
   * - `always` – CloudFront signs all origin requests, overwriting the `Authorization` header from the viewer request if necessary.
   * - `no-override` – If the viewer request doesn't contain the `Authorization` header, CloudFront signs the origin request. If the viewer request contains the `Authorization` header, CloudFront doesn't sign the origin request, but instead passes along the `Authorization` header that it received in the viewer request.
   * - `always-amz-auth` – CloudFront signs all origin requests with Amazon authentication headers, and forwards the viewer's `Authorization` header to the origin if one is present. This value is only valid with Lambda-Web origins.
   *
   * @public
   */
  SigningBehavior: OriginAccessControlSigningBehaviors | undefined;

  /**
   * The type of origin that this origin access control is for.
   *
   * @public
   */
  OriginAccessControlOriginType: OriginAccessControlOriginTypes | undefined;
}

/**
 * A list of CloudFront origin access controls.
 *
 * @public
 */
export interface OriginAccessControlList {
  /**
   * The value of the `Marker` field that was provided in the request.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value to use in the `Marker` field of another request to continue listing origin access controls.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of origin access controls requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * If there are more items in the list than are in this response, this value is `true`.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The number of origin access controls returned in the response.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Contains the origin access controls in the list.
   *
   * @public
   */
  Items?: OriginAccessControlSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOriginAccessControlsResult {
  /**
   * A list of origin access controls.
   *
   * @public
   */
  OriginAccessControlList?: OriginAccessControlList | undefined;
}

/**
 * @public
 */
export interface ListOriginRequestPoliciesRequest {
  /**
   * A filter to return only the specified kinds of origin request policies. Valid values are:
   *
   * - `managed` – Returns only the managed policies created by Amazon Web Services.
   * - `custom` – Returns only the custom policies created in your Amazon Web Services account.
   *
   * @public
   */
  Type?: OriginRequestPolicyType | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of origin request policies that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains an origin request policy.
 *
 * @public
 */
export interface OriginRequestPolicySummary {
  /**
   * The type of origin request policy, either `managed` (created by Amazon Web Services) or `custom` (created in this Amazon Web Services account).
   *
   * @public
   */
  Type: OriginRequestPolicyType | undefined;

  /**
   * The origin request policy.
   *
   * @public
   */
  OriginRequestPolicy: OriginRequestPolicy | undefined;
}

/**
 * A list of origin request policies.
 *
 * @public
 */
export interface OriginRequestPolicyList {
  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the `Marker` field of a subsequent request to continue listing origin request policies where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of origin request policies requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The total number of origin request policies returned in the response.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * Contains the origin request policies in the list.
   *
   * @public
   */
  Items?: OriginRequestPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListOriginRequestPoliciesResult {
  /**
   * A list of origin request policies.
   *
   * @public
   */
  OriginRequestPolicyList?: OriginRequestPolicyList | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the `Marker` to the value of the `NextMarker` from the current page's response (which is also the ID of the last public key on that page).
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of public keys you want in the response body.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains information about a public key.
 *
 * @public
 */
export interface PublicKeySummary {
  /**
   * The identifier of the public key.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A name to help identify the public key.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The date and time when the public key was uploaded.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The public key.
   *
   * @public
   */
  EncodedKey: string | undefined;

  /**
   * A comment to describe the public key. The comment cannot be longer than 128 characters.
   *
   * @public
   */
  Comment?: string | undefined;
}

/**
 * A list of public keys that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
 *
 * @public
 */
export interface PublicKeyList {
  /**
   * If there are more elements to be listed, this element is present and contains the value that you can use for the `Marker` request parameter to continue listing your public keys where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of public keys you want in the response.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The number of public keys in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A list of public keys.
   *
   * @public
   */
  Items?: PublicKeySummary[] | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysResult {
  /**
   * Returns a list of all public keys that have been added to CloudFront for this account.
   *
   * @public
   */
  PublicKeyList?: PublicKeyList | undefined;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsRequest {
  /**
   * The maximum number of real-time log configurations that you want in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A list of real-time log configurations.
 *
 * @public
 */
export interface RealtimeLogConfigs {
  /**
   * The maximum number of real-time log configurations requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * Contains the list of real-time log configurations.
   *
   * @public
   */
  Items?: RealtimeLogConfig[] | undefined;

  /**
   * A flag that indicates whether there are more real-time log configurations than are contained in this list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * This parameter indicates where this list of real-time log configurations begins. This list includes real-time log configurations that occur after the marker.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the `Marker` field of a subsequent request to continue listing real-time log configurations where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsResult {
  /**
   * A list of real-time log configurations.
   *
   * @public
   */
  RealtimeLogConfigs?: RealtimeLogConfigs | undefined;
}

/**
 * @public
 */
export interface ListResponseHeadersPoliciesRequest {
  /**
   * A filter to get only the specified kind of response headers policies. Valid values are:
   *
   * - `managed` – Gets only the managed policies created by Amazon Web Services.
   * - `custom` – Gets only the custom policies created in your Amazon Web Services account.
   *
   * @public
   */
  Type?: ResponseHeadersPolicyType | undefined;

  /**
   * Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of response headers policies that you want to get in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains a response headers policy.
 *
 * @public
 */
export interface ResponseHeadersPolicySummary {
  /**
   * The type of response headers policy, either `managed` (created by Amazon Web Services) or `custom` (created in this Amazon Web Services account).
   *
   * @public
   */
  Type: ResponseHeadersPolicyType | undefined;

  /**
   * The response headers policy.
   *
   * @public
   */
  ResponseHeadersPolicy: ResponseHeadersPolicy | undefined;
}

/**
 * A list of response headers policies.
 *
 * @public
 */
export interface ResponseHeadersPolicyList {
  /**
   * If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the `Marker` field of a subsequent request to continue listing response headers policies where you left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of response headers policies requested.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * The number of response headers policies returned.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The response headers policies in the list.
   *
   * @public
   */
  Items?: ResponseHeadersPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListResponseHeadersPoliciesResult {
  /**
   * A list of response headers policies.
   *
   * @public
   */
  ResponseHeadersPolicyList?: ResponseHeadersPolicyList | undefined;
}

/**
 * The request to list your streaming distributions.
 *
 * @public
 */
export interface ListStreamingDistributionsRequest {
  /**
   * The value that you provided for the `Marker` request parameter.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The value that you provided for the `MaxItems` request parameter.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary of the information for a CloudFront streaming distribution.
 *
 * @public
 */
export interface StreamingDistributionSummary {
  /**
   * The identifier for the distribution, for example, `EDFDVBD632BHDS5`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ARN (Amazon Resource Name) for the streaming distribution. For example: `arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5`, where `123456789012` is your Amazon Web Services account ID.
   *
   * @public
   */
  ARN: string | undefined;

  /**
   * Indicates the current status of the distribution. When the status is `Deployed`, the distribution's information is fully propagated throughout the Amazon CloudFront system.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The date and time the distribution was last modified.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The domain name corresponding to the distribution, for example, `d111111abcdef8.cloudfront.net`.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
   *
   * @public
   */
  S3Origin: S3Origin | undefined;

  /**
   * A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.
   *
   * @public
   */
  Aliases: Aliases | undefined;

  /**
   * A complex type that specifies the Amazon Web Services accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the `PathPattern` for this cache behavior, specify `true` for `Enabled`, and specify the applicable values for `Quantity` and `Items`.If you don't want to require signed URLs in requests for objects that match `PathPattern`, specify `false` for `Enabled` and `0` for `Quantity`. Omit `Items`. To add, change, or remove one or more trusted signers, change `Enabled` to `true` (if it's currently `false`), change `Quantity` as applicable, and specify all of the trusted signers that you want to include in the updated distribution.
   *
   * For more information, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * The comment originally specified when this distribution was created.
   *
   * @public
   */
  Comment: string | undefined;

  /**
   * A complex type that contains information about price class for this streaming distribution.
   *
   * @public
   */
  PriceClass: PriceClass | undefined;

  /**
   * Whether the distribution is enabled to accept end user requests for content.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * A streaming distribution list.
 *
 * @public
 */
export interface StreamingDistributionList {
  /**
   * The value you provided for the `Marker` request parameter.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * If `IsTruncated` is `true`, this element is present and contains the value you can use for the `Marker` request parameter to continue listing your RTMP distributions where they left off.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The value you provided for the `MaxItems` request parameter.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * A flag that indicates whether more streaming distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the `Marker` request parameter to retrieve more distributions in the list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The number of streaming distributions that were created by the current Amazon Web Services account.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * A complex type that contains one `StreamingDistributionSummary` element for each distribution that was created by the current Amazon Web Services account.
   *
   * @public
   */
  Items?: StreamingDistributionSummary[] | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface ListStreamingDistributionsResult {
  /**
   * The `StreamingDistributionList` type.
   *
   * @public
   */
  StreamingDistributionList?: StreamingDistributionList | undefined;
}

/**
 * The request to list tags for a CloudFront resource.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * An ARN of a CloudFront resource.
   *
   * @public
   */
  Resource: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresRequest {
  /**
   * Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of `NextMarker` from the current page's response.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of trust stores that you want returned in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A trust store summary.
 *
 * @public
 */
export interface TrustStoreSummary {
  /**
   * The trust store's ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The trust store's Amazon Resource Name (ARN).
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The trust store's name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The trust store's status.
   *
   * @public
   */
  Status: TrustStoreStatus | undefined;

  /**
   * The trust store's number of CA certificates.
   *
   * @public
   */
  NumberOfCaCertificates: number | undefined;

  /**
   * The trust store's last modified time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The trust store's reason.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * The version identifier for the current version of the trust store.
   *
   * @public
   */
  ETag: string | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresResult {
  /**
   * Indicates the next page of trust stores. To get the next page of the list, use this value in the `Marker` field of your request.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The trust store list.
   *
   * @public
   */
  TrustStoreList?: TrustStoreSummary[] | undefined;
}

/**
 * @public
 */
export interface ListVpcOriginsRequest {
  /**
   * The marker associated with the VPC origins list.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of items included in the list.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A summary of the CloudFront VPC origin.
 *
 * @public
 */
export interface VpcOriginSummary {
  /**
   * The VPC origin summary ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The VPC origin summary name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The VPC origin summary status.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The VPC origin summary created time.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The VPC origin summary last modified time.
   *
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * The VPC origin summary ARN.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The account ID of the Amazon Web Services account that owns the VPC origin.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The VPC origin summary origin endpoint ARN.
   *
   * @public
   */
  OriginEndpointArn: string | undefined;

  /**
   * The IP address type of the CloudFront VPC origin. Valid values are `ipv4` and `dualstack`. IPv6-only is not supported for VPC origins.
   *
   * @public
   */
  IpAddressType?: VpcIpAddressType | undefined;
}

/**
 * A list of CloudFront VPC origins.
 *
 * @public
 */
export interface VpcOriginList {
  /**
   * The marker associated with the VPC origins list.
   *
   * @public
   */
  Marker: string | undefined;

  /**
   * The next marker associated with the VPC origins list.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The maximum number of items included in the list.
   *
   * @public
   */
  MaxItems: number | undefined;

  /**
   * A flag that indicates whether more VPC origins remain to be listed. If your results were truncated, you can make a follow-up pagination request using the `Marker` request parameter to retrieve more VPC origins in the list.
   *
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * The number of VPC origins in the list.
   *
   * @public
   */
  Quantity: number | undefined;

  /**
   * The items of the VPC origins list.
   *
   * @public
   */
  Items?: VpcOriginSummary[] | undefined;
}

/**
 * @public
 */
export interface ListVpcOriginsResult {
  /**
   * List of VPC origins.
   *
   * @public
   */
  VpcOriginList?: VpcOriginList | undefined;
}

/**
 * @public
 */
export interface PublishConnectionFunctionRequest {
  /**
   * The connection function ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the connection function.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface PublishConnectionFunctionResult {
  /**
   * The connection function summary.
   *
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;
}

/**
 * @public
 */
export interface PublishFunctionRequest {
  /**
   * The name of the function that you are publishing.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current version (`ETag` value) of the function that you are publishing, which you can get using `DescribeFunction`.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface PublishFunctionResult {
  /**
   * Contains configuration information and metadata about a CloudFront function.
   *
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the CloudFront resource for which the policy is being created.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The JSON-formatted resource policy to create.
   *
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * The Amazon Resource Name (ARN) of the CloudFront resource for which the policy was created.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * The request to add tags to a CloudFront resource.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * An ARN of a CloudFront resource.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * A complex type that contains zero or more `Tag` elements.
   *
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * @public
 */
export interface TestConnectionFunctionRequest {
  /**
   * The connection function ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the connection function.
   *
   * @public
   */
  IfMatch: string | undefined;

  /**
   * The connection function stage.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;

  /**
   * The connection object.
   *
   * @public
   */
  ConnectionObject: Uint8Array | undefined;
}

/**
 * A connection function test result.
 *
 * @public
 */
export interface ConnectionFunctionTestResult {
  /**
   * The connection function summary.
   *
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;

  /**
   * The connection function compute utilization.
   *
   * @public
   */
  ComputeUtilization?: string | undefined;

  /**
   * The connection function execution logs.
   *
   * @public
   */
  ConnectionFunctionExecutionLogs?: string[] | undefined;

  /**
   * The connection function error message.
   *
   * @public
   */
  ConnectionFunctionErrorMessage?: string | undefined;

  /**
   * The connection function output.
   *
   * @public
   */
  ConnectionFunctionOutput?: string | undefined;
}

/**
 * @public
 */
export interface TestConnectionFunctionResult {
  /**
   * The connection function test result.
   *
   * @public
   */
  ConnectionFunctionTestResult?: ConnectionFunctionTestResult | undefined;
}

/**
 * @public
 */
export interface TestFunctionRequest {
  /**
   * The name of the function that you are testing.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current version (`ETag` value) of the function that you are testing, which you can get using `DescribeFunction`.
   *
   * @public
   */
  IfMatch: string | undefined;

  /**
   * The stage of the function that you are testing, either `DEVELOPMENT` or `LIVE`.
   *
   * @public
   */
  Stage?: FunctionStage | undefined;

  /**
   * The event object to test the function with. For more information about the structure of the event object, see [Testing functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  EventObject: Uint8Array | undefined;
}

/**
 * Contains the result of testing a CloudFront function with `TestFunction`.
 *
 * @public
 */
export interface TestResult {
  /**
   * Contains configuration information and metadata about the CloudFront function that was tested.
   *
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * The amount of time that the function took to run as a percentage of the maximum allowed time. For example, a compute utilization of 35 means that the function completed in 35% of the maximum allowed time.
   *
   * @public
   */
  ComputeUtilization?: string | undefined;

  /**
   * Contains the log lines that the function wrote (if any) when running the test.
   *
   * @public
   */
  FunctionExecutionLogs?: string[] | undefined;

  /**
   * If the result of testing the function was an error, this field contains the error message.
   *
   * @public
   */
  FunctionErrorMessage?: string | undefined;

  /**
   * The event object returned by the function. For more information about the structure of the event object, see [Event object structure](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  FunctionOutput?: string | undefined;
}

/**
 * @public
 */
export interface TestFunctionResult {
  /**
   * An object that represents the result of running the function with the provided event object.
   *
   * @public
   */
  TestResult?: TestResult | undefined;
}

/**
 * A complex type that contains zero or more `Tag` elements.
 *
 * @public
 */
export interface TagKeys {
  /**
   * A complex type that contains `Tag` key elements.
   *
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * The request to remove tags from a CloudFront resource.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * An ARN of a CloudFront resource.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * A complex type that contains zero or more `Tag` key elements.
   *
   * @public
   */
  TagKeys: TagKeys | undefined;
}

/**
 * @public
 */
export interface UpdateAnycastIpListRequest {
  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The IP address type for the Anycast static IP list. You can specify one of the following options:
   *
   * - `ipv4` only
   * - `ipv6` only
   * - `dualstack` - Allocate a list of both IPv4 and IPv6 addresses
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * A list of IPAM CIDR configurations that specify the IP address ranges and IPAM pool settings for updating the Anycast static IP list.
   *
   * @public
   */
  IpamCidrConfigs?: IpamCidrConfig[] | undefined;

  /**
   * The current version (ETag value) of the Anycast static IP list that you are updating.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnycastIpListResult {
  /**
   * An Anycast static IP list. For more information, see [Request Anycast static IPs to use for allowlisting](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  AnycastIpList?: AnycastIpList | undefined;

  /**
   * The current version of the Anycast static IP list.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCachePolicyRequest {
  /**
   * A cache policy configuration.
   *
   * @public
   */
  CachePolicyConfig: CachePolicyConfig | undefined;

  /**
   * The unique identifier for the cache policy that you are updating. The identifier is returned in a cache behavior's `CachePolicyId` field in the response to `GetDistributionConfig`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the cache policy that you are updating. The version is returned in the cache policy's `ETag` field in the response to `GetCachePolicyConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCachePolicyResult {
  /**
   * A cache policy.
   *
   * @public
   */
  CachePolicy?: CachePolicy | undefined;

  /**
   * The current version of the cache policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to update an origin access identity.
 *
 * @public
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * The identity's configuration information.
   *
   * @public
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;

  /**
   * The identity's id.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the identity's configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * The origin access identity's information.
   *
   * @public
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | undefined;

  /**
   * The current version of the configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionFunctionRequest {
  /**
   * The connection function ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the connection function you are updating.
   *
   * @public
   */
  IfMatch: string | undefined;

  /**
   * Contains configuration information about a CloudFront function.
   *
   * @public
   */
  ConnectionFunctionConfig: FunctionConfig | undefined;

  /**
   * The connection function code.
   *
   * @public
   */
  ConnectionFunctionCode: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionFunctionResult {
  /**
   * The connection function summary.
   *
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;

  /**
   * The version identifier for the current version of the connection function.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionGroupRequest {
  /**
   * The ID of the connection group.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Enable IPv6 for the connection group. For more information, see [Enable IPv6](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesEnableIPv6) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Ipv6Enabled?: boolean | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the connection group that you're updating.
   *
   * @public
   */
  IfMatch: string | undefined;

  /**
   * The ID of the Anycast static IP list.
   *
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * Whether the connection group is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionGroupResult {
  /**
   * The connection group that you updated.
   *
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * The current version of the connection group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContinuousDeploymentPolicyRequest {
  /**
   * The continuous deployment policy configuration.
   *
   * @public
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;

  /**
   * The identifier of the continuous deployment policy that you are updating.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the continuous deployment policy that you are updating.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContinuousDeploymentPolicyResult {
  /**
   * A continuous deployment policy.
   *
   * @public
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy | undefined;

  /**
   * The version identifier for the current version of the continuous deployment policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to update a distribution.
 *
 * @public
 */
export interface UpdateDistributionRequest {
  /**
   * The distribution's configuration information.
   *
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * The distribution's id.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the distribution's configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface UpdateDistributionResult {
  /**
   * The distribution's information.
   *
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * The current version of the configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionTenantRequest {
  /**
   * The ID of the distribution tenant.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID for the multi-tenant distribution.
   *
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * The domains to update for the distribution tenant. A domain object can contain only a domain property. You must specify at least one domain. Each distribution tenant can have up to 5 domains.
   *
   * @public
   */
  Domains?: DomainItem[] | undefined;

  /**
   * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
   *
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * The ID of the target connection group.
   *
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the distribution tenant to update. This value is returned in the response of the `GetDistributionTenant` API operation.
   *
   * @public
   */
  IfMatch: string | undefined;

  /**
   * An object that contains the CloudFront managed ACM certificate request.
   *
   * @public
   */
  ManagedCertificateRequest?: ManagedCertificateRequest | undefined;

  /**
   * Indicates whether the distribution tenant should be updated to an enabled state. If you update the distribution tenant and it's not enabled, the distribution tenant won't serve traffic.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionTenantResult {
  /**
   * The distribution tenant that you're updating.
   *
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * The current version of the distribution tenant.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionWithStagingConfigRequest {
  /**
   * The identifier of the primary distribution to which you are copying a staging distribution's configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The identifier of the staging distribution whose configuration you are copying to the primary distribution.
   *
   * @public
   */
  StagingDistributionId?: string | undefined;

  /**
   * The current versions (`ETag` values) of both primary and staging distributions. Provide these in the following format:
   *
   * `<primary ETag>, <staging ETag>`
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionWithStagingConfigResult {
  /**
   * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
   *
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * The current version of the primary distribution (after it's updated).
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainAssociationRequest {
  /**
   * The domain to update.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The target standard distribution or distribution tenant resource for the domain. You can specify either `DistributionId` or `DistributionTenantId`, but not both.
   *
   * @public
   */
  TargetResource: DistributionResourceId | undefined;

  /**
   * The value of the `ETag` identifier for the standard distribution or distribution tenant that will be associated with the domain.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainAssociationResult {
  /**
   * The domain that you're moving.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The intended destination for the domain.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The current version of the target standard distribution or distribution tenant that was associated with the domain.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigRequest {
  /**
   * Request to update a field-level encryption configuration.
   *
   * @public
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;

  /**
   * The ID of the configuration you want to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the configuration identity to update. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigResult {
  /**
   * Return the results of updating the configuration.
   *
   * @public
   */
  FieldLevelEncryption?: FieldLevelEncryption | undefined;

  /**
   * The value of the `ETag` header that you received when updating the configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileRequest {
  /**
   * Request to update a field-level encryption profile.
   *
   * @public
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * The ID of the field-level encryption profile request.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the profile identity to update. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileResult {
  /**
   * Return the results of updating the profile.
   *
   * @public
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | undefined;

  /**
   * The result of the field-level encryption profile request.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionRequest {
  /**
   * The name of the function that you are updating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The current version (`ETag` value) of the function that you are updating, which you can get using `DescribeFunction`.
   *
   * @public
   */
  IfMatch: string | undefined;

  /**
   * Configuration information about the function.
   *
   * @public
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * The function code. For more information about writing a CloudFront function, see [Writing function code for CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  FunctionCode: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionResult {
  /**
   * Contains configuration information and metadata about a CloudFront function.
   *
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * The version identifier for the current version of the CloudFront function.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyGroupRequest {
  /**
   * The key group configuration.
   *
   * @public
   */
  KeyGroupConfig: KeyGroupConfig | undefined;

  /**
   * The identifier of the key group that you are updating.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the key group that you are updating. The version is the key group's `ETag` value.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyGroupResult {
  /**
   * The key group that was just updated.
   *
   * @public
   */
  KeyGroup?: KeyGroup | undefined;

  /**
   * The identifier for this version of the key group.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyValueStoreRequest {
  /**
   * The name of the key value store to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The comment of the key value store to update.
   *
   * @public
   */
  Comment: string | undefined;

  /**
   * The key value store to update, if a match occurs.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyValueStoreResult {
  /**
   * The resulting key value store to update.
   *
   * @public
   */
  KeyValueStore?: KeyValueStore | undefined;

  /**
   * The `ETag` of the resulting key value store.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginAccessControlRequest {
  /**
   * An origin access control.
   *
   * @public
   */
  OriginAccessControlConfig: OriginAccessControlConfig | undefined;

  /**
   * The unique identifier of the origin access control that you are updating.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The current version (`ETag` value) of the origin access control that you are updating.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginAccessControlResult {
  /**
   * The origin access control after it has been updated.
   *
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * The new version of the origin access control after it has been updated.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyRequest {
  /**
   * An origin request policy configuration.
   *
   * @public
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;

  /**
   * The unique identifier for the origin request policy that you are updating. The identifier is returned in a cache behavior's `OriginRequestPolicyId` field in the response to `GetDistributionConfig`.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the origin request policy that you are updating. The version is returned in the origin request policy's `ETag` field in the response to `GetOriginRequestPolicyConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyResult {
  /**
   * An origin request policy.
   *
   * @public
   */
  OriginRequestPolicy?: OriginRequestPolicy | undefined;

  /**
   * The current version of the origin request policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePublicKeyRequest {
  /**
   * A public key configuration.
   *
   * @public
   */
  PublicKeyConfig: PublicKeyConfig | undefined;

  /**
   * The identifier of the public key that you are updating.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the public key to update. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePublicKeyResult {
  /**
   * The public key.
   *
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * The identifier of the current version of the public key.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigRequest {
  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
   *
   * @public
   */
  EndPoints?: EndPoint[] | undefined;

  /**
   * A list of fields to include in each real-time log record.
   *
   * For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.
   *
   * @public
   */
  Fields?: string[] | undefined;

  /**
   * The name for this real-time log configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for this real-time log configuration.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.
   *
   * @public
   */
  SamplingRate?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigResult {
  /**
   * A real-time log configuration.
   *
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyRequest {
  /**
   * A response headers policy configuration.
   *
   * @public
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;

  /**
   * The identifier for the response headers policy that you are updating.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The version of the response headers policy that you are updating.
   *
   * The version is returned in the cache policy's `ETag` field in the response to `GetResponseHeadersPolicyConfig`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyResult {
  /**
   * A response headers policy.
   *
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * The current version of the response headers policy.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * The request to update a streaming distribution.
 *
 * @public
 */
export interface UpdateStreamingDistributionRequest {
  /**
   * The streaming distribution's configuration information.
   *
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * The streaming distribution's id.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The value of the `ETag` header that you received when retrieving the streaming distribution's configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * The returned result of the corresponding request.
 *
 * @public
 */
export interface UpdateStreamingDistributionResult {
  /**
   * The streaming distribution's information.
   *
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * The current version of the configuration. For example: `E2QWRUHAPOMQZL`.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreRequest {
  /**
   * The trust store ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The CA certificates bundle source.
   *
   * @public
   */
  CaCertificatesBundleSource?: CaCertificatesBundleSource | undefined;

  /**
   * A Boolean that determines whether to use the CA certificate's OCSP endpoint to check certificate revocation status.
   *
   * @public
   */
  UseClientCertificateOCSPEndpoint?: boolean | undefined;

  /**
   * The current version (`ETag` value) of the trust store you are updating.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreResult {
  /**
   * The trust store.
   *
   * @public
   */
  TrustStore?: TrustStore | undefined;

  /**
   * The version identifier for the current version of the trust store.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcOriginRequest {
  /**
   * The VPC origin endpoint configuration.
   *
   * @public
   */
  VpcOriginEndpointConfig: VpcOriginEndpointConfig | undefined;

  /**
   * The VPC origin ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The VPC origin to update, if a match occurs.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcOriginResult {
  /**
   * The VPC origin.
   *
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * The VPC origin ETag.
   *
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface VerifyDnsConfigurationRequest {
  /**
   * The domain name that you're verifying.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * The DNS configuration for your domain names.
 *
 * @public
 */
export interface DnsConfiguration {
  /**
   * The domain name that you're verifying.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The status of your domain name.
   *
   * - `valid-configuration`: The domain name is correctly configured and points to the correct routing endpoint of the connection group.
   * - `invalid-configuration`: There is either a missing DNS record or the DNS record exists but it's using an incorrect routing endpoint. Update the DNS record to point to the correct routing endpoint.
   * - `unknown-configuration`: CloudFront can't validate your DNS configuration. This status can appear if CloudFront can't verify the DNS record, or the DNS lookup request failed or timed out.
   *
   * @public
   */
  Status: DnsConfigurationStatus | undefined;

  /**
   * Explains the status of the DNS configuration.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface VerifyDnsConfigurationResult {
  /**
   * The list of domain names, their statuses, and a description of each status.
   *
   * @public
   */
  DnsConfigurationList?: DnsConfiguration[] | undefined;
}
