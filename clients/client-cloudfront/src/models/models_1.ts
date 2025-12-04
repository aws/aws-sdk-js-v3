// smithy-typescript generated code
import {
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
} from "./enums";

import {
  type Aliases,
  type AnycastIpList,
  type AnycastIpListCollection,
  type CaCertificatesBundleSource,
  type CacheBehaviors,
  type CachePolicy,
  type CachePolicyConfig,
  type CachePolicyList,
  type CloudFrontOriginAccessIdentity,
  type CloudFrontOriginAccessIdentityConfig,
  type ConnectionFunctionAssociation,
  type ConnectionGroup,
  type ContentTypeProfileConfig,
  type ContinuousDeploymentPolicy,
  type ContinuousDeploymentPolicyConfig,
  type CustomErrorResponses,
  type Customizations,
  type DefaultCacheBehavior,
  type Distribution,
  type DistributionConfig,
  type DistributionTenant,
  type EncryptionEntities,
  type FieldLevelEncryption,
  type FieldLevelEncryptionConfig,
  type FieldLevelEncryptionProfile,
  type FieldLevelEncryptionProfileConfig,
  type FunctionConfig,
  type KeyGroup,
  type KeyGroupConfig,
  type ManagedCertificateRequest,
  type MonitoringSubscription,
  type OriginAccessControl,
  type OriginAccessControlConfig,
  type OriginGroups,
  type OriginRequestPolicy,
  type OriginRequestPolicyConfig,
  type Origins,
  type PublicKey,
  type PublicKeyConfig,
  type QueryArgProfileConfig,
  type ResponseHeadersPolicy,
  type ResponseHeadersPolicyConfig,
  type Restrictions,
  type S3Origin,
  type StreamingDistribution,
  type StreamingDistributionConfig,
  type Tags,
  type TrustedSigners,
  type TrustStore,
  type ViewerCertificate,
  type ViewerMtlsConfig,
  type VpcOrigin,
  type VpcOriginEndpointConfig,
  AliasICPRecordal,
  ConnectionFunctionSummary,
  DomainItem,
  DomainResult,
  EndPoint,
  FunctionSummary,
  KeyValueStore,
  Parameter,
  RealtimeLogConfig,
} from "./models_0";

/**
 * <p>Contains details about the validation token.</p>
 * @public
 */
export interface ValidationTokenDetail {
  /**
   * <p>The domain name.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The domain to redirect to.</p>
   * @public
   */
  RedirectTo?: string | undefined;

  /**
   * <p>The domain to redirect from.</p>
   * @public
   */
  RedirectFrom?: string | undefined;
}

/**
 * <p>Contains details about the CloudFront managed ACM certificate.</p>
 * @public
 */
export interface ManagedCertificateDetails {
  /**
   * <p>The ARN of the CloudFront managed ACM certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The status of the CloudFront managed ACM certificate.</p> <note> <p>Your distribution tenant will be updated with the latest certificate status. When calling the <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistributionTenant.html">UpdateDistributionTenant</a> operation, use the latest value for the <code>ETag</code>.</p> </note>
   * @public
   */
  CertificateStatus?: ManagedCertificateStatus | undefined;

  /**
   * <p>Contains details about the validation token host of the specified CloudFront managed ACM certificate.</p> <ul> <li> <p>For <code>cloudfront</code>, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.</p> </li> <li> <p>For <code>self-hosted</code>, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.</p> </li> </ul> <note> <p>This setting only affects the initial certificate request. Once the DNS points to CloudFront, all future certificate renewals are automatically handled through CloudFront.</p> </note>
   * @public
   */
  ValidationTokenHost?: ValidationTokenHost | undefined;

  /**
   * <p>Contains details about the validation token of the specified CloudFront managed ACM certificate.</p>
   * @public
   */
  ValidationTokenDetails?: ValidationTokenDetail[] | undefined;
}

/**
 * @public
 */
export interface GetManagedCertificateDetailsResult {
  /**
   * <p>Contains details about the CloudFront managed ACM certificate.</p>
   * @public
   */
  ManagedCertificateDetails?: ManagedCertificateDetails | undefined;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionRequest {
  /**
   * <p>The ID of the distribution that you are getting metrics information for.</p>
   * @public
   */
  DistributionId: string | undefined;
}

/**
 * @public
 */
export interface GetMonitoringSubscriptionResult {
  /**
   * <p>A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.</p>
   * @public
   */
  MonitoringSubscription?: MonitoringSubscription | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlRequest {
  /**
   * <p>The unique identifier of the origin access control.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlResult {
  /**
   * <p>Contains an origin access control, including its unique identifier.</p>
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * <p>The version identifier for the current version of the origin access control.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigRequest {
  /**
   * <p>The unique identifier of the origin access control.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginAccessControlConfigResult {
  /**
   * <p>Contains an origin access control configuration.</p>
   * @public
   */
  OriginAccessControlConfig?: OriginAccessControlConfig | undefined;

  /**
   * <p>The version identifier for the current version of the origin access control.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyRequest {
  /**
   * <p>The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyResult {
  /**
   * <p>The origin request policy.</p>
   * @public
   */
  OriginRequestPolicy?: OriginRequestPolicy | undefined;

  /**
   * <p>The current version of the origin request policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigRequest {
  /**
   * <p>The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetOriginRequestPolicyConfigResult {
  /**
   * <p>The origin request policy configuration.</p>
   * @public
   */
  OriginRequestPolicyConfig?: OriginRequestPolicyConfig | undefined;

  /**
   * <p>The current version of the origin request policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyRequest {
  /**
   * <p>The identifier of the public key you are getting.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyResult {
  /**
   * <p>The public key.</p>
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * <p>The identifier for this version of the public key.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyConfigRequest {
  /**
   * <p>The identifier of the public key whose configuration you are getting.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetPublicKeyConfigResult {
  /**
   * <p>A public key configuration.</p>
   * @public
   */
  PublicKeyConfig?: PublicKeyConfig | undefined;

  /**
   * <p>The identifier for this version of the public key configuration.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetRealtimeLogConfigRequest {
  /**
   * <p>The name of the real-time log configuration to get.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration to get.</p>
   * @public
   */
  ARN?: string | undefined;
}

/**
 * @public
 */
export interface GetRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFront resource that is associated with the resource policy.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFront resource that is associated with the resource policy.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The resource policy in JSON format.</p>
   * @public
   */
  PolicyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyRequest {
  /**
   * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyResult {
  /**
   * <p>Contains a response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigRequest {
  /**
   * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetResponseHeadersPolicyConfigResult {
  /**
   * <p>Contains a response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicyConfig?: ResponseHeadersPolicyConfig | undefined;

  /**
   * <p>The version identifier for the current version of the response headers policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to get a streaming distribution's information.</p>
 * @public
 */
export interface GetStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * <p>The current version of the streaming distribution's information. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>To request to get a streaming distribution configuration.</p>
 * @public
 */
export interface GetStreamingDistributionConfigRequest {
  /**
   * <p>The streaming distribution's ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface GetStreamingDistributionConfigResult {
  /**
   * <p>The streaming distribution's configuration information.</p>
   * @public
   */
  StreamingDistributionConfig?: StreamingDistributionConfig | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>. </p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreRequest {
  /**
   * <p>The trust store's identifier.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetTrustStoreResult {
  /**
   * <p>The trust store.</p>
   * @public
   */
  TrustStore?: TrustStore | undefined;

  /**
   * <p>The version identifier for the current version of the trust store.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface GetVpcOriginRequest {
  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetVpcOriginResult {
  /**
   * <p>The VPC origin.</p>
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * <p>The VPC origin ETag.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface ListAnycastIpListsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of Anycast static IP lists that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListAnycastIpListsResult {
  /**
   * <p>Root level tag for the <code>AnycastIpLists</code> parameters.</p>
   * @public
   */
  AnycastIpLists?: AnycastIpListCollection | undefined;
}

/**
 * @public
 */
export interface ListCachePoliciesRequest {
  /**
   * <p>A filter to return only the specified kinds of cache policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
   * @public
   */
  Type?: CachePolicyType | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of cache policies that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListCachePoliciesResult {
  /**
   * <p>A list of cache policies.</p>
   * @public
   */
  CachePolicyList?: CachePolicyList | undefined;
}

/**
 * <p>The request to list origin access identities.</p>
 * @public
 */
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of origin access identities you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Summary of the information about a CloudFront origin access identity.</p>
 * @public
 */
export interface CloudFrontOriginAccessIdentitySummary {
  /**
   * <p>The ID for the origin access identity. For example: <code>E74FTE3AJFJ256A</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, which you use when giving the origin access identity read permission to an object in Amazon S3.</p>
   * @public
   */
  S3CanonicalUserId: string | undefined;

  /**
   * <p>The comment for this origin access identity, as originally specified when created.</p>
   * @public
   */
  Comment: string | undefined;
}

/**
 * <p>Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @public
 */
export interface CloudFrontOriginAccessIdentityList {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your origin access identities where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of origin access identities you want in the response body.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more origin access identities remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more items in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of CloudFront origin access identities that were created by the current Amazon Web Services account.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code> element for each origin access identity that was created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: CloudFrontOriginAccessIdentitySummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListCloudFrontOriginAccessIdentitiesResult {
  /**
   * <p>The <code>CloudFrontOriginAccessIdentityList</code> type.</p>
   * @public
   */
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList | undefined;
}

/**
 * @public
 */
export interface ListConflictingAliasesRequest {
  /**
   * <p>The ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The alias (also called a CNAME) to search for conflicting aliases.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of conflicting aliases that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>An alias (also called a CNAME) and the CloudFront standard distribution and Amazon Web Services account ID that it's associated with. The standard distribution and account IDs are partially hidden, which allows you to identify the standard distributions and accounts that you own, and helps to protect the information of ones that you don't own.</p>
 * @public
 */
export interface ConflictingAlias {
  /**
   * <p>An alias (also called a CNAME).</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>The (partially hidden) ID of the CloudFront standard distribution associated with the alias.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The (partially hidden) ID of the Amazon Web Services account that owns the standard distribution that's associated with the alias.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>A list of aliases (also called CNAMEs) and the CloudFront standard distributions and Amazon Web Services accounts that they are associated with. In the list, the standard distribution and account IDs are partially hidden, which allows you to identify the standard distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p>
 * @public
 */
export interface ConflictingAliasesList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing conflicting aliases where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of conflicting aliases requested.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The number of conflicting aliases returned in the response.</p>
   * @public
   */
  Quantity?: number | undefined;

  /**
   * <p>Contains the conflicting aliases in the list.</p>
   * @public
   */
  Items?: ConflictingAlias[] | undefined;
}

/**
 * @public
 */
export interface ListConflictingAliasesResult {
  /**
   * <p>A list of conflicting aliases.</p>
   * @public
   */
  ConflictingAliasesList?: ConflictingAliasesList | undefined;
}

/**
 * @public
 */
export interface ListConnectionFunctionsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of connection functions that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The connection function's stage.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * @public
 */
export interface ListConnectionFunctionsResult {
  /**
   * <p>Indicates the next page of connection functions. To get the next page of the list, use this value in the <code>Marker</code> field of your request.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of connection functions.</p>
   * @public
   */
  ConnectionFunctions?: ConnectionFunctionSummary[] | undefined;
}

/**
 * <p>Contains information about what CloudFront resources your connection groups are associated with.</p>
 * @public
 */
export interface ConnectionGroupAssociationFilter {
  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionGroupsRequest {
  /**
   * <p>Filter by associated Anycast IP list ID.</p>
   * @public
   */
  AssociationFilter?: ConnectionGroupAssociationFilter | undefined;

  /**
   * <p>The marker for the next set of connection groups to retrieve.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of connection groups to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary that contains details about your connection groups.</p>
 * @public
 */
export interface ConnectionGroupSummary {
  /**
   * <p>The ID of the connection group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The name of the connection group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connection group.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The routing endpoint (also known as the DNS name) that is assigned to the connection group, such as d111111abcdef8.cloudfront.net.</p>
   * @public
   */
  RoutingEndpoint: string | undefined;

  /**
   * <p>The date and time when the connection group was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The date and time when the connection group was updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current version of the connection group.</p>
   * @public
   */
  ETag: string | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <p>Whether the connection group is enabled</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The status of the connection group.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Whether the connection group is the default connection group for the distribution tenants.</p>
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface ListConnectionGroupsResult {
  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The list of connection groups that you retrieved.</p>
   * @public
   */
  ConnectionGroups?: ConnectionGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of continuous deployment policies that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the information about your continuous deployment policies.</p>
 * @public
 */
export interface ContinuousDeploymentPolicySummary {
  /**
   * <p>The continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicy: ContinuousDeploymentPolicy | undefined;
}

/**
 * <p>Contains a list of continuous deployment policies.</p>
 * @public
 */
export interface ContinuousDeploymentPolicyList {
  /**
   * <p>Indicates the next page of continuous deployment policies. To get the next page of the list, use this value in the <code>Marker</code> field of your request.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of continuous deployment policies that were specified in your request.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The total number of continuous deployment policies in your Amazon Web Services account, regardless of the <code>MaxItems</code> value.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of continuous deployment policy items.</p>
   * @public
   */
  Items?: ContinuousDeploymentPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListContinuousDeploymentPoliciesResult {
  /**
   * <p>A list of continuous deployment policies.</p>
   * @public
   */
  ContinuousDeploymentPolicyList?: ContinuousDeploymentPolicyList | undefined;
}

/**
 * <p>The request to list your distributions.</p>
 * @public
 */
export interface ListDistributionsRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the information about a CloudFront distribution.</p>
 * @public
 */
export interface DistributionSummary {
  /**
   * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example: <code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>The current version of the distribution.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is propagated to all CloudFront edge locations.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The date and time the distribution was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The domain name that corresponds to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</p>
   * @public
   */
  Aliases: Aliases | undefined;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   * @public
   */
  Origins: Origins | undefined;

  /**
   * <p>A complex type that contains information about origin groups for this distribution.</p>
   * @public
   */
  OriginGroups?: OriginGroups | undefined;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.</p>
   * @public
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.</p>
   * @public
   */
  CacheBehaviors: CacheBehaviors | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CustomErrorResponses</code> elements.</p>
   * @public
   */
  CustomErrorResponses: CustomErrorResponses | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <note> <p>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-config-options.html#unsupported-saas">Unsupported features for SaaS Manager for Amazon CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </note> <p>A complex type that contains information about price class for this streaming distribution.</p>
   * @public
   */
  PriceClass: PriceClass | undefined;

  /**
   * <p>Whether the distribution is enabled to accept user requests for content.</p>
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p>
   * @public
   */
  ViewerCertificate: ViewerCertificate | undefined;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your content.</p>
   * @public
   */
  Restrictions: Restrictions | undefined;

  /**
   * <p>The Web ACL Id (if any) associated with the distribution.</p>
   * @public
   */
  WebACLId: string | undefined;

  /**
   * <p>Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't support <code>HTTP/2</code> will automatically use an earlier version.</p>
   * @public
   */
  HttpVersion: HttpVersion | undefined;

  /**
   * <p>Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your distribution.</p>
   * @public
   */
  IsIPV6Enabled: boolean | undefined;

  /**
   * <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p>
   * @public
   */
  AliasICPRecordals?: AliasICPRecordal[] | undefined;

  /**
   * <p>A Boolean that indicates whether this is a staging distribution. When this value is <code>true</code>, this is a staging distribution. When this value is <code>false</code>, this is not a staging distribution.</p>
   * @public
   */
  Staging: boolean | undefined;

  /**
   * <p>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</p>
   * @public
   */
  ConnectionMode?: ConnectionMode | undefined;

  /**
   * <p>ID of the Anycast static IP list that is associated with the distribution.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <p>The distribution's viewer mTLS configuration.</p>
   * @public
   */
  ViewerMtlsConfig?: ViewerMtlsConfig | undefined;

  /**
   * <p>The distribution's connection function association.</p>
   * @public
   */
  ConnectionFunctionAssociation?: ConnectionFunctionAssociation | undefined;
}

/**
 * <p>A distribution list.</p>
 * @public
 */
export interface DistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your distributions where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of distributions that were created by the current Amazon Web Services account.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>DistributionSummary</code> element for each distribution that was created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: DistributionSummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListDistributionsResult {
  /**
   * <p>The <code>DistributionList</code> type.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByAnycastIpListIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByAnycastIpListIdResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the cache policy whose associated distribution IDs you want to list.</p>
   * @public
   */
  CachePolicyId: string | undefined;
}

/**
 * <p>A list of distribution IDs.</p>
 * @public
 */
export interface DistributionIdList {
  /**
   * <p>The value provided in the <code>Marker</code> request field.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>Contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing distribution IDs where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more distribution IDs remain to be listed. If your results were truncated, you can make a subsequent request using the <code>Marker</code> request field to retrieve more distribution IDs in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The total number of distribution IDs returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the distribution IDs in the list.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByCachePolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionFunctionRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The distributions by connection function identifier.</p>
   * @public
   */
  ConnectionFunctionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionFunctionResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionModeRequest {
  /**
   * <p> The marker for the next set of distributions to retrieve.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions to return.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</p>
   * @public
   */
  ConnectionMode: ConnectionMode | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByConnectionModeResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the key group whose associated distribution IDs you are listing.</p>
   * @public
   */
  KeyGroupId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByKeyGroupResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the origin request policy whose associated distribution IDs you want to list.</p>
   * @public
   */
  OriginRequestPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOriginRequestPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOwnedResourceRequest {
  /**
   * <p>The ARN of the CloudFront resource that you've shared with other Amazon Web Services accounts.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A structure that pairs a CloudFront distribution ID with its owning Amazon Web Services account ID.</p>
 * @public
 */
export interface DistributionIdOwner {
  /**
   * <p>The ID of the distribution.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the distribution. </p>
   * @public
   */
  OwnerAccountId: string | undefined;
}

/**
 * <p>The list of distribution IDs and the Amazon Web Services accounts that they belong to.</p>
 * @public
 */
export interface DistributionIdOwnerList {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of <code>DistributionIdOwner</code> objects. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of <code>DistributionIdOwner</code> objects to return.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more <code>DistributionIdOwner</code> objects remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more results in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>Specifies the actual number of <code>DistributionIdOwner</code> objects included in the list for the current page.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The number of <code>DistributionIdOwner</code> objects.</p>
   * @public
   */
  Items?: DistributionIdOwner[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByOwnedResourceResult {
  /**
   * <p>The list of distributions that are using the shared resource.</p>
   * @public
   */
  DistributionList?: DistributionIdOwnerList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The name of the real-time log configuration whose associated distributions you want to list.</p>
   * @public
   */
  RealtimeLogConfigName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.</p>
   * @public
   */
  RealtimeLogConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByRealtimeLogConfigResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution IDs that you want to get in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the response headers policy whose associated distribution IDs you want to list.</p>
   * @public
   */
  ResponseHeadersPolicyId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByResponseHeadersPolicyIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByTrustStoreRequest {
  /**
   * <p>The distributions by trust store identifier.</p>
   * @public
   */
  TrustStoreIdentifier: string | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByTrustStoreResult {
  /**
   * <p>A distribution list.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByVpcOriginIdRequest {
  /**
   * <p>The marker associated with the VPC origin distributions list.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items included in the list.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  VpcOriginId: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionsByVpcOriginIdResult {
  /**
   * <p>A list of distribution IDs.</p>
   * @public
   */
  DistributionIdList?: DistributionIdList | undefined;
}

/**
 * <p>The request to list distributions that are associated with a specified WAF web ACL.</p>
 * @public
 */
export interface ListDistributionsByWebACLIdRequest {
  /**
   * <p>Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL. </p> <p>For WAFV2, this is the ARN of the web ACL, such as <code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p> <p>For WAF Classic, this is the ID of the web ACL, such as <code>a1b2c3d4-5678-90ab-cdef-EXAMPLE11111</code>.</p>
   * @public
   */
  WebACLId: string | undefined;
}

/**
 * <p>The response to a request to list the distributions that are associated with a specified WAF web ACL.</p>
 * @public
 */
export interface ListDistributionsByWebACLIdResult {
  /**
   * <p>The <code>DistributionList</code> type.</p>
   * @public
   */
  DistributionList?: DistributionList | undefined;
}

/**
 * <p>Filter by the associated distribution ID or connection group ID.</p>
 * @public
 */
export interface DistributionTenantAssociationFilter {
  /**
   * <p>The distribution ID to filter by. You can find distribution tenants associated with a specific distribution.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The ID of the connection group to filter by. You can find distribution tenants associated with a specific connection group.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsRequest {
  /**
   * <p>Filter by the associated distribution ID or connection group ID.</p>
   * @public
   */
  AssociationFilter?: DistributionTenantAssociationFilter | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution tenants to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the information about a distribution tenant.</p>
 * @public
 */
export interface DistributionTenantSummary {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier for the multi-tenant distribution. For example: <code>EDFDVBD632BHDS5</code>.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>The name of the distribution tenant.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution tenant.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The domains associated with the distribution tenant.</p>
   * @public
   */
  Domains: DomainResult[] | undefined;

  /**
   * <p>The ID of the connection group ID for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * <p>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</p>
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * <p>The date and time when the distribution tenant was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The date and time when the distribution tenant was updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag: string | undefined;

  /**
   * <p>Indicates whether the distribution tenants are in an enabled state. If disabled, the distribution tenant won't service traffic.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The status of the distribution tenant.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsResult {
  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The list of distribution tenants that you retrieved.</p>
   * @public
   */
  DistributionTenantList?: DistributionTenantSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsByCustomizationRequest {
  /**
   * <p>Filter by the ARN of the associated WAF web ACL.</p>
   * @public
   */
  WebACLArn?: string | undefined;

  /**
   * <p>Filter by the ARN of the associated ACM certificate.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of distribution tenants to return by the specified customization.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListDistributionTenantsByCustomizationResult {
  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of distribution tenants with the specified customization.</p>
   * @public
   */
  DistributionTenantList?: DistributionTenantSummary[] | undefined;
}

/**
 * <p>The IDs for the distribution resources.</p>
 * @public
 */
export interface DistributionResourceId {
  /**
   * <p>The ID of the multi-tenant distribution.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  DistributionTenantId?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainConflictsRequest {
  /**
   * <p>The domain to check for conflicts.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The distribution resource identifier. This can be the standard distribution or distribution tenant that has a valid certificate, which covers the domain that you specify.</p>
   * @public
   */
  DomainControlValidationResource: DistributionResourceId | undefined;

  /**
   * <p>The maximum number of domain conflicts to return.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The marker for the next set of domain conflicts.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Contains information about the domain conflict. Use this information to determine the affected domain, the related resource, and the affected Amazon Web Services account.</p>
 * @public
 */
export interface DomainConflict {
  /**
   * <p>The domain used to find existing conflicts for domain configurations.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The CloudFront resource type that has a domain conflict.</p>
   * @public
   */
  ResourceType: DistributionResourceType | undefined;

  /**
   * <p>The ID of the resource that has a domain conflict.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account for the domain conflict.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface ListDomainConflictsResult {
  /**
   * <p>Contains details about the domain conflicts.</p>
   * @public
   */
  DomainConflicts?: DomainConflict[] | undefined;

  /**
   * <p>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of field-level encryption configurations you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of a field-level encryption item.</p>
 * @public
 */
export interface FieldLevelEncryptionSummary {
  /**
   * <p>The unique ID of a field-level encryption item.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>An optional comment about the field-level encryption item. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>A summary of a query argument-profile mapping.</p>
   * @public
   */
  QueryArgProfileConfig?: QueryArgProfileConfig | undefined;

  /**
   * <p>A summary of a content type-profile mapping.</p>
   * @public
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig | undefined;
}

/**
 * <p>List of field-level encryption configurations.</p>
 * @public
 */
export interface FieldLevelEncryptionList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your configurations where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of elements you want in the response body.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of field-level encryption items.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>An array of field-level encryption items.</p>
   * @public
   */
  Items?: FieldLevelEncryptionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionConfigsResult {
  /**
   * <p>Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.</p>
   * @public
   */
  FieldLevelEncryptionList?: FieldLevelEncryptionList | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>The field-level encryption profile summary.</p>
 * @public
 */
export interface FieldLevelEncryptionProfileSummary {
  /**
   * <p>ID for the field-level encryption profile summary.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The time when the field-level encryption profile summary was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Name for the field-level encryption profile summary.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and field patterns for specifying which fields to encrypt with this key.</p>
   * @public
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * <p>An optional comment for the field-level encryption profile summary. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;
}

/**
 * <p>List of field-level encryption profiles.</p>
 * @public
 */
export interface FieldLevelEncryptionProfileList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your profiles where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of field-level encryption profiles.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The field-level encryption profile items.</p>
   * @public
   */
  Items?: FieldLevelEncryptionProfileSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFieldLevelEncryptionProfilesResult {
  /**
   * <p>Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.</p>
   * @public
   */
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of functions that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;
}

/**
 * <p>A list of CloudFront functions.</p>
 * @public
 */
export interface FunctionList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing functions where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of functions requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of functions returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the functions in the list.</p>
   * @public
   */
  Items?: FunctionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionsResult {
  /**
   * <p>A list of CloudFront functions.</p>
   * @public
   */
  FunctionList?: FunctionList | undefined;
}

/**
 * <p>The request to list invalidations.</p>
 * @public
 */
export interface ListInvalidationsRequest {
  /**
   * <p>The distribution's ID.</p>
   * @public
   */
  DistributionId: string | undefined;

  /**
   * <p>Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of invalidation batches that you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of an invalidation request.</p>
 * @public
 */
export interface InvalidationSummary {
  /**
   * <p>The unique ID for an invalidation request.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The time that an invalidation request was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The status of an invalidation request.</p>
   * @public
   */
  Status: string | undefined;
}

/**
 * <p>The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @public
 */
export interface InvalidationList {
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your invalidation batches where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more invalidation batch requests remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more invalidation batches in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of invalidation batches that were created by the current Amazon Web Services account. </p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each invalidation batch created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: InvalidationSummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListInvalidationsResult {
  /**
   * <p>Information about invalidation batches.</p>
   * @public
   */
  InvalidationList?: InvalidationList | undefined;
}

/**
 * @public
 */
export interface ListInvalidationsForDistributionTenantRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of invalidations to return for the distribution tenant.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListInvalidationsForDistributionTenantResult {
  /**
   * <p>The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  InvalidationList?: InvalidationList | undefined;
}

/**
 * @public
 */
export interface ListKeyGroupsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of key groups that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about a key group.</p>
 * @public
 */
export interface KeyGroupSummary {
  /**
   * <p>A key group.</p>
   * @public
   */
  KeyGroup: KeyGroup | undefined;
}

/**
 * <p>A list of key groups.</p>
 * @public
 */
export interface KeyGroupList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing key groups.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of key groups requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of key groups returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of key groups.</p>
   * @public
   */
  Items?: KeyGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListKeyGroupsResult {
  /**
   * <p>A list of key groups.</p>
   * @public
   */
  KeyGroupList?: KeyGroupList | undefined;
}

/**
 * @public
 */
export interface ListKeyValueStoresRequest {
  /**
   * <p>The marker associated with the key value stores list.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items in the key value stores list.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The status of the request for the key value stores list.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>The key value store list.</p>
 * @public
 */
export interface KeyValueStoreList {
  /**
   * <p>The next marker associated with the key value store list.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of items in the key value store list.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The quantity of the key value store list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The items of the key value store list.</p>
   * @public
   */
  Items?: KeyValueStore[] | undefined;
}

/**
 * @public
 */
export interface ListKeyValueStoresResult {
  /**
   * <p>The resulting key value stores list.</p>
   * @public
   */
  KeyValueStoreList?: KeyValueStoreList | undefined;
}

/**
 * @public
 */
export interface ListOriginAccessControlsRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of origin access controls that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A CloudFront origin access control.</p>
 * @public
 */
export interface OriginAccessControlSummary {
  /**
   * <p>The unique identifier of the origin access control.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A description of the origin access control.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A unique name that identifies the origin access control.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The signing protocol of the origin access control. The signing protocol determines how CloudFront signs (authenticates) requests. The only valid value is <code>sigv4</code>.</p>
   * @public
   */
  SigningProtocol: OriginAccessControlSigningProtocols | undefined;

  /**
   * <p>A value that specifies which requests CloudFront signs (adds authentication information to). This field can have one of the following values:</p> <ul> <li> <p> <code>never</code> – CloudFront doesn't sign any origin requests.</p> </li> <li> <p> <code>always</code> – CloudFront signs all origin requests, overwriting the <code>Authorization</code> header from the viewer request if necessary.</p> </li> <li> <p> <code>no-override</code> – If the viewer request doesn't contain the <code>Authorization</code> header, CloudFront signs the origin request. If the viewer request contains the <code>Authorization</code> header, CloudFront doesn't sign the origin request, but instead passes along the <code>Authorization</code> header that it received in the viewer request.</p> </li> </ul>
   * @public
   */
  SigningBehavior: OriginAccessControlSigningBehaviors | undefined;

  /**
   * <p>The type of origin that this origin access control is for.</p>
   * @public
   */
  OriginAccessControlOriginType: OriginAccessControlOriginTypes | undefined;
}

/**
 * <p>A list of CloudFront origin access controls.</p>
 * @public
 */
export interface OriginAccessControlList {
  /**
   * <p>The value of the <code>Marker</code> field that was provided in the request.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value to use in the <code>Marker</code> field of another request to continue listing origin access controls.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of origin access controls requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>If there are more items in the list than are in this response, this value is <code>true</code>.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of origin access controls returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the origin access controls in the list.</p>
   * @public
   */
  Items?: OriginAccessControlSummary[] | undefined;
}

/**
 * @public
 */
export interface ListOriginAccessControlsResult {
  /**
   * <p>A list of origin access controls.</p>
   * @public
   */
  OriginAccessControlList?: OriginAccessControlList | undefined;
}

/**
 * @public
 */
export interface ListOriginRequestPoliciesRequest {
  /**
   * <p>A filter to return only the specified kinds of origin request policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
   * @public
   */
  Type?: OriginRequestPolicyType | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of origin request policies that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains an origin request policy.</p>
 * @public
 */
export interface OriginRequestPolicySummary {
  /**
   * <p>The type of origin request policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).</p>
   * @public
   */
  Type: OriginRequestPolicyType | undefined;

  /**
   * <p>The origin request policy.</p>
   * @public
   */
  OriginRequestPolicy: OriginRequestPolicy | undefined;
}

/**
 * <p>A list of origin request policies.</p>
 * @public
 */
export interface OriginRequestPolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing origin request policies where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of origin request policies requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The total number of origin request policies returned in the response.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>Contains the origin request policies in the list.</p>
   * @public
   */
  Items?: OriginRequestPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListOriginRequestPoliciesResult {
  /**
   * <p>A list of origin request policies.</p>
   * @public
   */
  OriginRequestPolicyList?: OriginRequestPolicyList | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysRequest {
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page).</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of public keys you want in the response body.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains information about a public key.</p>
 * @public
 */
export interface PublicKeySummary {
  /**
   * <p>The identifier of the public key.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>A name to help identify the public key.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The date and time when the public key was uploaded.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The public key.</p>
   * @public
   */
  EncodedKey: string | undefined;

  /**
   * <p>A comment to describe the public key. The comment cannot be longer than 128 characters.</p>
   * @public
   */
  Comment?: string | undefined;
}

/**
 * <p>A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 * @public
 */
export interface PublicKeyList {
  /**
   * <p>If there are more elements to be listed, this element is present and contains the value that you can use for the <code>Marker</code> request parameter to continue listing your public keys where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of public keys you want in the response.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of public keys in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A list of public keys.</p>
   * @public
   */
  Items?: PublicKeySummary[] | undefined;
}

/**
 * @public
 */
export interface ListPublicKeysResult {
  /**
   * <p>Returns a list of all public keys that have been added to CloudFront for this account.</p>
   * @public
   */
  PublicKeyList?: PublicKeyList | undefined;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsRequest {
  /**
   * <p>The maximum number of real-time log configurations that you want in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>A list of real-time log configurations.</p>
 * @public
 */
export interface RealtimeLogConfigs {
  /**
   * <p>The maximum number of real-time log configurations requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>Contains the list of real-time log configurations.</p>
   * @public
   */
  Items?: RealtimeLogConfig[] | undefined;

  /**
   * <p>A flag that indicates whether there are more real-time log configurations than are contained in this list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>This parameter indicates where this list of real-time log configurations begins. This list includes real-time log configurations that occur after the marker.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing real-time log configurations where you left off. </p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListRealtimeLogConfigsResult {
  /**
   * <p>A list of real-time log configurations.</p>
   * @public
   */
  RealtimeLogConfigs?: RealtimeLogConfigs | undefined;
}

/**
 * @public
 */
export interface ListResponseHeadersPoliciesRequest {
  /**
   * <p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
   * @public
   */
  Type?: ResponseHeadersPolicyType | undefined;

  /**
   * <p>Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of response headers policies that you want to get in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Contains a response headers policy.</p>
 * @public
 */
export interface ResponseHeadersPolicySummary {
  /**
   * <p>The type of response headers policy, either <code>managed</code> (created by Amazon Web Services) or <code>custom</code> (created in this Amazon Web Services account).</p>
   * @public
   */
  Type: ResponseHeadersPolicyType | undefined;

  /**
   * <p>The response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicy: ResponseHeadersPolicy | undefined;
}

/**
 * <p>A list of response headers policies.</p>
 * @public
 */
export interface ResponseHeadersPolicyList {
  /**
   * <p>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the <code>Marker</code> field of a subsequent request to continue listing response headers policies where you left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of response headers policies requested.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>The number of response headers policies returned.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The response headers policies in the list.</p>
   * @public
   */
  Items?: ResponseHeadersPolicySummary[] | undefined;
}

/**
 * @public
 */
export interface ListResponseHeadersPoliciesResult {
  /**
   * <p>A list of response headers policies.</p>
   * @public
   */
  ResponseHeadersPolicyList?: ResponseHeadersPolicyList | undefined;
}

/**
 * <p>The request to list your streaming distributions.</p>
 * @public
 */
export interface ListStreamingDistributionsRequest {
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the information for a CloudFront streaming distribution.</p>
 * @public
 */
export interface StreamingDistributionSummary {
  /**
   * <p>The identifier for the distribution, for example, <code>EDFDVBD632BHDS5</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) for the streaming distribution. For example: <code>arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5</code>, where <code>123456789012</code> is your Amazon Web Services account ID.</p>
   * @public
   */
  ARN: string | undefined;

  /**
   * <p>Indicates the current status of the distribution. When the status is <code>Deployed</code>, the distribution's information is fully propagated throughout the Amazon CloudFront system.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The date and time the distribution was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.</p>
   * @public
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any, for this streaming distribution.</p>
   * @public
   */
  Aliases: Aliases | undefined;

  /**
   * <p>A complex type that specifies the Amazon Web Services accounts, if any, that you want to allow to create signed URLs for private content. If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>.If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>. To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming distribution.</p>
   * @public
   */
  PriceClass: PriceClass | undefined;

  /**
   * <p>Whether the distribution is enabled to accept end user requests for content.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>A streaming distribution list.</p>
 * @public
 */
export interface StreamingDistributionList {
  /**
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains the value you can use for the <code>Marker</code> request parameter to continue listing your RTMP distributions where they left off.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more streaming distributions remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more distributions in the list. </p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of streaming distributions that were created by the current Amazon Web Services account. </p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for each distribution that was created by the current Amazon Web Services account.</p>
   * @public
   */
  Items?: StreamingDistributionSummary[] | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListStreamingDistributionsResult {
  /**
   * <p>The <code>StreamingDistributionList</code> type.</p>
   * @public
   */
  StreamingDistributionList?: StreamingDistributionList | undefined;
}

/**
 * <p>The request to list tags for a CloudFront resource.</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>An ARN of a CloudFront resource.</p>
   * @public
   */
  Resource: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresRequest {
  /**
   * <p>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of trust stores that you want returned in the response.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A trust store summary.</p>
 * @public
 */
export interface TrustStoreSummary {
  /**
   * <p>The trust store's ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The trust store's Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The trust store's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The trust store's status.</p>
   * @public
   */
  Status: TrustStoreStatus | undefined;

  /**
   * <p>The trust store's number of CA certificates.</p>
   * @public
   */
  NumberOfCaCertificates: number | undefined;

  /**
   * <p>The trust store's last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The trust store's reason.</p>
   * @public
   */
  Reason?: string | undefined;

  /**
   * <p>The version identifier for the current version of the trust store.</p>
   * @public
   */
  ETag: string | undefined;
}

/**
 * @public
 */
export interface ListTrustStoresResult {
  /**
   * <p>Indicates the next page of trust stores. To get the next page of the list, use this value in the <code>Marker</code> field of your request.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The trust store list.</p>
   * @public
   */
  TrustStoreList?: TrustStoreSummary[] | undefined;
}

/**
 * @public
 */
export interface ListVpcOriginsRequest {
  /**
   * <p>The marker associated with the VPC origins list.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items included in the list.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A summary of the CloudFront VPC origin.</p>
 * @public
 */
export interface VpcOriginSummary {
  /**
   * <p>The VPC origin summary ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The VPC origin summary name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The VPC origin summary status.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The VPC origin summary created time.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The VPC origin summary last modified time.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The VPC origin summary ARN.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The account ID of the Amazon Web Services account that owns the VPC origin.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The VPC origin summary origin endpoint ARN.</p>
   * @public
   */
  OriginEndpointArn: string | undefined;
}

/**
 * <p>A list of CloudFront VPC origins.</p>
 * @public
 */
export interface VpcOriginList {
  /**
   * <p>The marker associated with the VPC origins list.</p>
   * @public
   */
  Marker: string | undefined;

  /**
   * <p>The next marker associated with the VPC origins list.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The maximum number of items included in the list.</p>
   * @public
   */
  MaxItems: number | undefined;

  /**
   * <p>A flag that indicates whether more VPC origins remain to be listed. If your results were truncated, you can make a follow-up pagination request using the <code>Marker</code> request parameter to retrieve more VPC origins in the list.</p>
   * @public
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>The number of VPC origins in the list.</p>
   * @public
   */
  Quantity: number | undefined;

  /**
   * <p>The items of the VPC origins list.</p>
   * @public
   */
  Items?: VpcOriginSummary[] | undefined;
}

/**
 * @public
 */
export interface ListVpcOriginsResult {
  /**
   * <p>List of VPC origins.</p>
   * @public
   */
  VpcOriginList?: VpcOriginList | undefined;
}

/**
 * @public
 */
export interface PublishConnectionFunctionRequest {
  /**
   * <p>The connection function ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the connection function.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface PublishConnectionFunctionResult {
  /**
   * <p>The connection function summary.</p>
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;
}

/**
 * @public
 */
export interface PublishFunctionRequest {
  /**
   * <p>The name of the function that you are publishing.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface PublishFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFront resource for which the policy is being created.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The JSON-formatted resource policy to create.</p>
   * @public
   */
  PolicyDocument: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the CloudFront resource for which the policy was created.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * <p>The request to add tags to a CloudFront resource.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>An ARN of a CloudFront resource.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   * @public
   */
  Tags: Tags | undefined;
}

/**
 * @public
 */
export interface TestConnectionFunctionRequest {
  /**
   * <p>The connection function ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the connection function.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>The connection function stage.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;

  /**
   * <p>The connection object.</p>
   * @public
   */
  ConnectionObject: Uint8Array | undefined;
}

/**
 * <p>A connection function test result.</p>
 * @public
 */
export interface ConnectionFunctionTestResult {
  /**
   * <p>The connection function summary.</p>
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;

  /**
   * <p>The connection function compute utilization.</p>
   * @public
   */
  ComputeUtilization?: string | undefined;

  /**
   * <p>The connection function execution logs.</p>
   * @public
   */
  ConnectionFunctionExecutionLogs?: string[] | undefined;

  /**
   * <p>The connection function error message.</p>
   * @public
   */
  ConnectionFunctionErrorMessage?: string | undefined;

  /**
   * <p>The connection function output.</p>
   * @public
   */
  ConnectionFunctionOutput?: string | undefined;
}

/**
 * @public
 */
export interface TestConnectionFunctionResult {
  /**
   * <p>The connection function test result.</p>
   * @public
   */
  ConnectionFunctionTestResult?: ConnectionFunctionTestResult | undefined;
}

/**
 * @public
 */
export interface TestFunctionRequest {
  /**
   * <p>The name of the function that you are testing.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   * @public
   */
  Stage?: FunctionStage | undefined;

  /**
   * <p>The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  EventObject: Uint8Array | undefined;
}

/**
 * <p>Contains the result of testing a CloudFront function with <code>TestFunction</code>.</p>
 * @public
 */
export interface TestResult {
  /**
   * <p>Contains configuration information and metadata about the CloudFront function that was tested.</p>
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * <p>The amount of time that the function took to run as a percentage of the maximum allowed time. For example, a compute utilization of 35 means that the function completed in 35% of the maximum allowed time.</p>
   * @public
   */
  ComputeUtilization?: string | undefined;

  /**
   * <p>Contains the log lines that the function wrote (if any) when running the test.</p>
   * @public
   */
  FunctionExecutionLogs?: string[] | undefined;

  /**
   * <p>If the result of testing the function was an error, this field contains the error message.</p>
   * @public
   */
  FunctionErrorMessage?: string | undefined;

  /**
   * <p>The event object returned by the function. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-event-structure.html">Event object structure</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  FunctionOutput?: string | undefined;
}

/**
 * @public
 */
export interface TestFunctionResult {
  /**
   * <p>An object that represents the result of running the function with the provided event object.</p>
   * @public
   */
  TestResult?: TestResult | undefined;
}

/**
 * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
 * @public
 */
export interface TagKeys {
  /**
   * <p>A complex type that contains <code>Tag</code> key elements.</p>
   * @public
   */
  Items?: string[] | undefined;
}

/**
 * <p>The request to remove tags from a CloudFront resource.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>An ARN of a CloudFront resource.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> key elements.</p>
   * @public
   */
  TagKeys: TagKeys | undefined;
}

/**
 * @public
 */
export interface UpdateAnycastIpListRequest {
  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The IP address type for the Anycast static IP list. You can specify one of the following options:</p> <ul> <li> <p> <code>ipv4</code> only</p> </li> <li> <p> <code>ipv6</code> only</p> </li> <li> <p> <code>dualstack</code> - Allocate a list of both IPv4 and IPv6 addresses</p> </li> </ul>
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * <p>The current version (ETag value) of the Anycast static IP list that you are updating.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnycastIpListResult {
  /**
   * <p>An Anycast static IP list. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/request-static-ips.html">Request Anycast static IPs to use for allowlisting</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  AnycastIpList?: AnycastIpList | undefined;

  /**
   * <p>The current version of the Anycast static IP list.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCachePolicyRequest {
  /**
   * <p>A cache policy configuration.</p>
   * @public
   */
  CachePolicyConfig: CachePolicyConfig | undefined;

  /**
   * <p>The unique identifier for the cache policy that you are updating. The identifier is returned in a cache behavior's <code>CachePolicyId</code> field in the response to <code>GetDistributionConfig</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the cache policy that you are updating. The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetCachePolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCachePolicyResult {
  /**
   * <p>A cache policy.</p>
   * @public
   */
  CachePolicy?: CachePolicy | undefined;

  /**
   * <p>The current version of the cache policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to update an origin access identity.</p>
 * @public
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  /**
   * <p>The identity's configuration information.</p>
   * @public
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig | undefined;

  /**
   * <p>The identity's id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface UpdateCloudFrontOriginAccessIdentityResult {
  /**
   * <p>The origin access identity's information.</p>
   * @public
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionFunctionRequest {
  /**
   * <p>The connection function ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the connection function you are updating.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>Contains configuration information about a CloudFront function.</p>
   * @public
   */
  ConnectionFunctionConfig: FunctionConfig | undefined;

  /**
   * <p>The connection function code.</p>
   * @public
   */
  ConnectionFunctionCode: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionFunctionResult {
  /**
   * <p>The connection function summary.</p>
   * @public
   */
  ConnectionFunctionSummary?: ConnectionFunctionSummary | undefined;

  /**
   * <p>The version identifier for the current version of the connection function.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionGroupRequest {
  /**
   * <p>The ID of the connection group.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Enable IPv6 for the connection group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesEnableIPv6">Enable IPv6</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Ipv6Enabled?: boolean | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the connection group that you're updating.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>The ID of the Anycast static IP list.</p>
   * @public
   */
  AnycastIpListId?: string | undefined;

  /**
   * <p>Whether the connection group is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionGroupResult {
  /**
   * <p>The connection group that you updated.</p>
   * @public
   */
  ConnectionGroup?: ConnectionGroup | undefined;

  /**
   * <p>The current version of the connection group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContinuousDeploymentPolicyRequest {
  /**
   * <p>The continuous deployment policy configuration.</p>
   * @public
   */
  ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig | undefined;

  /**
   * <p>The identifier of the continuous deployment policy that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContinuousDeploymentPolicyResult {
  /**
   * <p>A continuous deployment policy.</p>
   * @public
   */
  ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy | undefined;

  /**
   * <p>The version identifier for the current version of the continuous deployment policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to update a distribution.</p>
 * @public
 */
export interface UpdateDistributionRequest {
  /**
   * <p>The distribution's configuration information.</p>
   * @public
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>The distribution's id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface UpdateDistributionResult {
  /**
   * <p>The distribution's information.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionTenantRequest {
  /**
   * <p>The ID of the distribution tenant.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ID for the multi-tenant distribution.</p>
   * @public
   */
  DistributionId?: string | undefined;

  /**
   * <p>The domains to update for the distribution tenant. A domain object can contain only a domain property. You must specify at least one domain. Each distribution tenant can have up to 5 domains.</p>
   * @public
   */
  Domains?: DomainItem[] | undefined;

  /**
   * <p>Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.</p>
   * @public
   */
  Customizations?: Customizations | undefined;

  /**
   * <p>A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The ID of the target connection group.</p>
   * @public
   */
  ConnectionGroupId?: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the distribution tenant to update. This value is returned in the response of the <code>GetDistributionTenant</code> API operation.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>An object that contains the CloudFront managed ACM certificate request.</p>
   * @public
   */
  ManagedCertificateRequest?: ManagedCertificateRequest | undefined;

  /**
   * <p>Indicates whether the distribution tenant should be updated to an enabled state. If you update the distribution tenant and it's not enabled, the distribution tenant won't serve traffic.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionTenantResult {
  /**
   * <p>The distribution tenant that you're updating.</p>
   * @public
   */
  DistributionTenant?: DistributionTenant | undefined;

  /**
   * <p>The current version of the distribution tenant.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionWithStagingConfigRequest {
  /**
   * <p>The identifier of the primary distribution to which you are copying a staging distribution's configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the staging distribution whose configuration you are copying to the primary distribution.</p>
   * @public
   */
  StagingDistributionId?: string | undefined;

  /**
   * <p>The current versions (<code>ETag</code> values) of both primary and staging distributions. Provide these in the following format:</p> <p> <code>&lt;primary ETag&gt;, &lt;staging ETag&gt;</code> </p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionWithStagingConfigResult {
  /**
   * <p>A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>The current version of the primary distribution (after it's updated).</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainAssociationRequest {
  /**
   * <p>The domain to update.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The target standard distribution or distribution tenant resource for the domain. You can specify either <code>DistributionId</code> or <code>DistributionTenantId</code>, but not both.</p>
   * @public
   */
  TargetResource: DistributionResourceId | undefined;

  /**
   * <p>The value of the <code>ETag</code> identifier for the standard distribution or distribution tenant that will be associated with the domain.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainAssociationResult {
  /**
   * <p>The domain that you're moving.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The intended destination for the domain.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The current version of the target standard distribution or distribution tenant that was associated with the domain.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigRequest {
  /**
   * <p>Request to update a field-level encryption configuration.</p>
   * @public
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;

  /**
   * <p>The ID of the configuration you want to update.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionConfigResult {
  /**
   * <p>Return the results of updating the configuration.</p>
   * @public
   */
  FieldLevelEncryption?: FieldLevelEncryption | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when updating the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileRequest {
  /**
   * <p>Request to update a field-level encryption profile.</p>
   * @public
   */
  FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig | undefined;

  /**
   * <p>The ID of the field-level encryption profile request.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFieldLevelEncryptionProfileResult {
  /**
   * <p>Return the results of updating the profile.</p>
   * @public
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile | undefined;

  /**
   * <p>The result of the field-level encryption profile request.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionRequest {
  /**
   * <p>The name of the function that you are updating.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the function that you are updating, which you can get using <code>DescribeFunction</code>.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>Configuration information about the function.</p>
   * @public
   */
  FunctionConfig: FunctionConfig | undefined;

  /**
   * <p>The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  FunctionCode: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionResult {
  /**
   * <p>Contains configuration information and metadata about a CloudFront function.</p>
   * @public
   */
  FunctionSummary?: FunctionSummary | undefined;

  /**
   * <p>The version identifier for the current version of the CloudFront function.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyGroupRequest {
  /**
   * <p>The key group configuration.</p>
   * @public
   */
  KeyGroupConfig: KeyGroupConfig | undefined;

  /**
   * <p>The identifier of the key group that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the key group that you are updating. The version is the key group's <code>ETag</code> value.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyGroupResult {
  /**
   * <p>The key group that was just updated.</p>
   * @public
   */
  KeyGroup?: KeyGroup | undefined;

  /**
   * <p>The identifier for this version of the key group.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyValueStoreRequest {
  /**
   * <p>The name of the key value store to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The comment of the key value store to update.</p>
   * @public
   */
  Comment: string | undefined;

  /**
   * <p>The key value store to update, if a match occurs.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeyValueStoreResult {
  /**
   * <p>The resulting key value store to update.</p>
   * @public
   */
  KeyValueStore?: KeyValueStore | undefined;

  /**
   * <p>The <code>ETag</code> of the resulting key value store.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginAccessControlRequest {
  /**
   * <p>An origin access control.</p>
   * @public
   */
  OriginAccessControlConfig: OriginAccessControlConfig | undefined;

  /**
   * <p>The unique identifier of the origin access control that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the origin access control that you are updating.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginAccessControlResult {
  /**
   * <p>The origin access control after it has been updated.</p>
   * @public
   */
  OriginAccessControl?: OriginAccessControl | undefined;

  /**
   * <p>The new version of the origin access control after it has been updated.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyRequest {
  /**
   * <p>An origin request policy configuration.</p>
   * @public
   */
  OriginRequestPolicyConfig: OriginRequestPolicyConfig | undefined;

  /**
   * <p>The unique identifier for the origin request policy that you are updating. The identifier is returned in a cache behavior's <code>OriginRequestPolicyId</code> field in the response to <code>GetDistributionConfig</code>.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the origin request policy that you are updating. The version is returned in the origin request policy's <code>ETag</code> field in the response to <code>GetOriginRequestPolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginRequestPolicyResult {
  /**
   * <p>An origin request policy.</p>
   * @public
   */
  OriginRequestPolicy?: OriginRequestPolicy | undefined;

  /**
   * <p>The current version of the origin request policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePublicKeyRequest {
  /**
   * <p>A public key configuration.</p>
   * @public
   */
  PublicKeyConfig: PublicKeyConfig | undefined;

  /**
   * <p>The identifier of the public key that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public key to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePublicKeyResult {
  /**
   * <p>The public key.</p>
   * @public
   */
  PublicKey?: PublicKey | undefined;

  /**
   * <p>The identifier of the current version of the public key.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigRequest {
  /**
   * <p>Contains information about the Amazon Kinesis data stream where you are sending real-time log data.</p>
   * @public
   */
  EndPoints?: EndPoint[] | undefined;

  /**
   * <p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * @public
   */
  Fields?: string[] | undefined;

  /**
   * <p>The name for this real-time log configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for this real-time log configuration.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.</p>
   * @public
   */
  SamplingRate?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRealtimeLogConfigResult {
  /**
   * <p>A real-time log configuration.</p>
   * @public
   */
  RealtimeLogConfig?: RealtimeLogConfig | undefined;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyRequest {
  /**
   * <p>A response headers policy configuration.</p>
   * @public
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig | undefined;

  /**
   * <p>The identifier for the response headers policy that you are updating.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The version of the response headers policy that you are updating.</p> <p>The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetResponseHeadersPolicyConfig</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * @public
 */
export interface UpdateResponseHeadersPolicyResult {
  /**
   * <p>A response headers policy.</p>
   * @public
   */
  ResponseHeadersPolicy?: ResponseHeadersPolicy | undefined;

  /**
   * <p>The current version of the response headers policy.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The request to update a streaming distribution.</p>
 * @public
 */
export interface UpdateStreamingDistributionRequest {
  /**
   * <p>The streaming distribution's configuration information.</p>
   * @public
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * <p>The streaming distribution's id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  IfMatch?: string | undefined;
}

/**
 * <p>The returned result of the corresponding request.</p>
 * @public
 */
export interface UpdateStreamingDistributionResult {
  /**
   * <p>The streaming distribution's information.</p>
   * @public
   */
  StreamingDistribution?: StreamingDistribution | undefined;

  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreRequest {
  /**
   * <p>The trust store ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The CA certificates bundle source.</p>
   * @public
   */
  CaCertificatesBundleSource: CaCertificatesBundleSource | undefined;

  /**
   * <p>The current version (<code>ETag</code> value) of the trust store you are updating.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateTrustStoreResult {
  /**
   * <p>The trust store.</p>
   * @public
   */
  TrustStore?: TrustStore | undefined;

  /**
   * <p>The version identifier for the current version of the trust store.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcOriginRequest {
  /**
   * <p>The VPC origin endpoint configuration.</p>
   * @public
   */
  VpcOriginEndpointConfig: VpcOriginEndpointConfig | undefined;

  /**
   * <p>The VPC origin ID.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The VPC origin to update, if a match occurs.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcOriginResult {
  /**
   * <p>The VPC origin.</p>
   * @public
   */
  VpcOrigin?: VpcOrigin | undefined;

  /**
   * <p>The VPC origin ETag.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface VerifyDnsConfigurationRequest {
  /**
   * <p>The domain name that you're verifying.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The identifier of the distribution tenant. You can specify the ARN, ID, or name of the distribution tenant.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>The DNS configuration for your domain names.</p>
 * @public
 */
export interface DnsConfiguration {
  /**
   * <p>The domain name that you're verifying.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The status of your domain name.</p> <ul> <li> <p> <code>valid-configuration</code>: The domain name is correctly configured and points to the correct routing endpoint of the connection group.</p> </li> <li> <p> <code>invalid-configuration</code>: There is either a missing DNS record or the DNS record exists but it's using an incorrect routing endpoint. Update the DNS record to point to the correct routing endpoint.</p> </li> <li> <p> <code>unknown-configuration</code>: CloudFront can't validate your DNS configuration. This status can appear if CloudFront can't verify the DNS record, or the DNS lookup request failed or timed out.</p> </li> </ul>
   * @public
   */
  Status: DnsConfigurationStatus | undefined;

  /**
   * <p>Explains the status of the DNS configuration.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface VerifyDnsConfigurationResult {
  /**
   * <p>The list of domain names, their statuses, and a description of each status.</p>
   * @public
   */
  DnsConfigurationList?: DnsConfiguration[] | undefined;
}
