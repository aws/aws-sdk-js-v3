// smithy-typescript generated code
import type {
  CertificateAssociationStatusCode,
  ProxyIpv4Addressability,
  ProxyIpv6Addressability,
  ProxyStatusCode,
  ProxyType,
  ProxyUpdatePropagationStatus,
  ProxyUpdateType,
  ProxyUpdateValidationStatus,
} from "./enums";

/**
 * @public
 */
export interface AssociateCertificateRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   * @public
   */
  certificateIdentifier: string | undefined;
}

/**
 * A reason for the current status of a certificate association.
 * @public
 */
export interface CertificateAssociationStatusReason {
  /**
   * The status reason code.
   * @public
   */
  code: string | undefined;

  /**
   * The status reason message.
   * @public
   */
  message?: string | undefined;
}

/**
 * The status of a certificate association.
 * @public
 */
export interface CertificateAssociationStatus {
  /**
   * The status code of the association.
   * @public
   */
  code: CertificateAssociationStatusCode | undefined;

  /**
   * The reasons for the current status of the association.
   * @public
   */
  reasons: CertificateAssociationStatusReason[] | undefined;
}

/**
 * An association between an ACM certificate and a proxy.
 * @public
 */
export interface CertificateAssociation {
  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   * @public
   */
  certificateArn: string | undefined;

  /**
   * The status of the association.
   * @public
   */
  status: CertificateAssociationStatus | undefined;

  /**
   * The date and time that the association was created.
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateCertificateResponse {
  /**
   * The certificate association.
   * @public
   */
  certificateAssociation: CertificateAssociation | undefined;
}

/**
 * A key-value attribute for a proxy.
 * @public
 */
export interface Attribute {
  /**
   * The key of the attribute.
   * @public
   */
  key: string | undefined;

  /**
   * The value of the attribute.
   * @public
   */
  value: string | undefined;
}

/**
 * A key-value attribute for a proxy, including its default value.
 * @public
 */
export interface AttributeDetails {
  /**
   * The key of the attribute.
   * @public
   */
  key: string | undefined;

  /**
   * The value of the attribute.
   * @public
   */
  value: string | undefined;

  /**
   * The default value of the attribute.
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * The configuration archive for a proxy. This is a bundle of the files
 * referenced by the configuration file.
 * @public
 */
export interface ConfigurationArchive {
  /**
   * The contents of the configuration archive.
   * @public
   */
  configurationBytes: Uint8Array | undefined;
}

/**
 * The configuration file for a proxy.
 * @public
 */
export interface ConfigurationFile {
  /**
   * The contents of the configuration file.
   * @public
   */
  configurationBytes: Uint8Array | undefined;
}

/**
 * The configuration metadata for a proxy.
 * @public
 */
export interface ConfigurationMetadata {
  /**
   * The SHA-256 hash of the configuration file.
   * @public
   */
  configFileHash?: string | undefined;

  /**
   * The SHA-256 hash of the configuration archive. This value is absent when
   * the proxy does not have a configuration archive.
   * @public
   */
  configArchiveHash?: string | undefined;

  /**
   * The date and time that the configuration file was last updated.
   * @public
   */
  configFileLastUpdatedAt?: Date | undefined;

  /**
   * The date and time that the configuration archive was last updated.
   * @public
   */
  configArchiveLastUpdatedAt?: Date | undefined;
}

/**
 * The configuration for a proxy.
 * @public
 */
export interface ProxyConfiguration {
  /**
   * The configuration file for the proxy.
   * @public
   */
  configurationFile?: ConfigurationFile | undefined;

  /**
   * The configuration archive for the proxy. This is a bundle of the files
   * referenced by the configuration file.
   * @public
   */
  configurationArchive?: ConfigurationArchive | undefined;
}

/**
 * The IP addressing configuration for a proxy.
 * @public
 */
export interface ProxyIpAddressingConfiguration {
  /**
   * The IPv4 addressability setting for the proxy.
   * @public
   */
  ipv4Addressability: ProxyIpv4Addressability | undefined;

  /**
   * The IPv6 addressability setting for the proxy.
   * @public
   */
  ipv6Addressability: ProxyIpv6Addressability | undefined;
}

/**
 * The IP configuration for a proxy.
 * @public
 */
export interface ProxyIpConfiguration {
  /**
   * The IP addressing configuration for the proxy.
   * @public
   */
  ipAddressingConfiguration: ProxyIpAddressingConfiguration | undefined;
}

/**
 * The details of a security group.
 * @public
 */
export interface SecurityGroupDetails {
  /**
   * The ID of the security group.
   * @public
   */
  securityGroupId: string | undefined;
}

/**
 * The details of a subnet.
 * @public
 */
export interface SubnetDetails {
  /**
   * The ID of the subnet.
   * @public
   */
  subnetId: string | undefined;
}

/**
 * The VPC configuration for a proxy, used by mutating operations.
 * @public
 */
export interface ProxyVpcUserConfiguration {
  /**
   * The subnets used by the proxy.
   * @public
   */
  subnets: SubnetDetails[] | undefined;

  /**
   * The security groups used by the proxy.
   * @public
   */
  securityGroups: SecurityGroupDetails[] | undefined;
}

/**
 * The network configuration for a proxy, used by mutating operations.
 * @public
 */
export interface ProxyNetworkUserConfiguration {
  /**
   * The IP configuration for the proxy.
   * @public
   */
  ipConfiguration: ProxyIpConfiguration | undefined;

  /**
   * The VPC configuration for the proxy.
   * @public
   */
  vpcConfiguration: ProxyVpcUserConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateProxyRequest {
  /**
   * The name of the proxy. The name must be unique within your account for
   * the Region. The valid characters are a-z, 0-9, and hyphens (-). You can't
   * use a hyphen as the first or last character.
   * @public
   */
  name: string | undefined;

  /**
   * The type of proxy.
   * @public
   */
  type: ProxyType | undefined;

  /**
   * The version of the proxy software, in `major.minor` format.
   * @public
   */
  proxyVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions to
   * the code that your Envoy configuration runs on the proxy, such as filters and
   * extensions. These are the permissions that this code needs when it calls AWS
   * services.
   * @public
   */
  roleArn: string | undefined;

  /**
   * The configuration for the proxy.
   * @public
   */
  configuration: ProxyConfiguration | undefined;

  /**
   * The network configuration for the proxy.
   * @public
   */
  networkConfiguration: ProxyNetworkUserConfiguration | undefined;

  /**
   * The attributes for the proxy. Attributes can be changed after creation.
   * Attributes that you don't specify are set to their default values.
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to
   * encrypt the proxy's configuration content. If you don't specify a key,
   * the default service-owned key is used.
   * @public
   */
  customerKmsKeyArn?: string | undefined;

  /**
   * The tags for the proxy.
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * A subnet and its associated Availability Zone.
 * @public
 */
export interface SubnetAndZone {
  /**
   * The ID of the subnet.
   * @public
   */
  subnetId: string | undefined;

  /**
   * The ID of the Availability Zone.
   * @public
   */
  zoneId: string | undefined;

  /**
   * The name of the Availability Zone (for example, `us-east-1a`).
   * @public
   */
  zoneName?: string | undefined;
}

/**
 * The VPC configuration for a proxy.
 * @public
 */
export interface ProxyVpcConfiguration {
  /**
   * The ID of the VPC.
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The Availability Zones used by the proxy.
   * @public
   */
  availabilityZones: SubnetAndZone[] | undefined;

  /**
   * The security groups used by the proxy.
   * @public
   */
  securityGroups: SecurityGroupDetails[] | undefined;
}

/**
 * The network configuration for a proxy.
 * @public
 */
export interface ProxyNetworkConfiguration {
  /**
   * The IP configuration for the proxy.
   * @public
   */
  ipConfiguration: ProxyIpConfiguration | undefined;

  /**
   * The VPC configuration for the proxy.
   * @public
   */
  vpcConfiguration: ProxyVpcConfiguration | undefined;
}

/**
 * A reason for the current status of a proxy.
 * @public
 */
export interface ProxyStatusReason {
  /**
   * The status reason code.
   * @public
   */
  code: string | undefined;

  /**
   * The target resource of the status reason.
   * @public
   */
  target?: string | undefined;

  /**
   * The status reason message.
   * @public
   */
  message?: string | undefined;
}

/**
 * The status of a proxy.
 * @public
 */
export interface ProxyStatus {
  /**
   * The status code of the proxy.
   * @public
   */
  code: ProxyStatusCode | undefined;

  /**
   * The reasons for the current status of the proxy.
   * @public
   */
  reasons: ProxyStatusReason[] | undefined;
}

/**
 * Common Proxy details response mixin
 * @public
 */
export interface CreateProxyResponse {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the proxy.
   * @public
   */
  name?: string | undefined;

  /**
   * The type of proxy.
   * @public
   */
  type?: ProxyType | undefined;

  /**
   * The version of the proxy software.
   * @public
   */
  proxyVersion?: string | undefined;

  /**
   * The DNS name of the proxy.
   * @public
   */
  dnsName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions to
   * the code that your Envoy configuration runs on the proxy, such as filters and
   * extensions. These are the permissions that this code needs when it calls AWS
   * services.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The network configuration for the proxy.
   * @public
   */
  networkConfiguration?: ProxyNetworkConfiguration | undefined;

  /**
   * The status of the proxy.
   * @public
   */
  status?: ProxyStatus | undefined;

  /**
   * The configuration metadata for the proxy.
   * @public
   */
  configurationMetadata?: ConfigurationMetadata | undefined;

  /**
   * The date and time that the proxy was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to
   * encrypt the proxy's configuration content. This value is absent when the
   * proxy uses the default service-owned key.
   * @public
   */
  customerKmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxyResponse {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the proxy.
   * @public
   */
  name: string | undefined;

  /**
   * The status of the proxy.
   * @public
   */
  status?: ProxyStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ACM certificate.
   * @public
   */
  certificateIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisassociateCertificateResponse {
  /**
   * The certificate association.
   * @public
   */
  certificateAssociation: CertificateAssociation | undefined;
}

/**
 * @public
 */
export interface ListProxyVersionsRequest {
  /**
   * The type of proxy.
   * @public
   */
  type: ProxyType | undefined;

  /**
   * The maximum number of results to return.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a proxy version.
 * @public
 */
export interface ProxyVersionSummary {
  /**
   * The type of proxy.
   * @public
   */
  type: ProxyType | undefined;

  /**
   * The version of the proxy software, in `major.minor` format.
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListProxyVersionsResponse {
  /**
   * Information about the proxy versions.
   * @public
   */
  items: ProxyVersionSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags for the resource.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetProxyRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;
}

/**
 * Common Proxy details response mixin
 * @public
 */
export interface GetProxyResponse {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the proxy.
   * @public
   */
  name?: string | undefined;

  /**
   * The type of proxy.
   * @public
   */
  type?: ProxyType | undefined;

  /**
   * The version of the proxy software.
   * @public
   */
  proxyVersion?: string | undefined;

  /**
   * The DNS name of the proxy.
   * @public
   */
  dnsName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions to
   * the code that your Envoy configuration runs on the proxy, such as filters and
   * extensions. These are the permissions that this code needs when it calls AWS
   * services.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The network configuration for the proxy.
   * @public
   */
  networkConfiguration?: ProxyNetworkConfiguration | undefined;

  /**
   * The status of the proxy.
   * @public
   */
  status?: ProxyStatus | undefined;

  /**
   * The configuration metadata for the proxy.
   * @public
   */
  configurationMetadata?: ConfigurationMetadata | undefined;

  /**
   * The date and time that the proxy was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to
   * encrypt the proxy's configuration content. This value is absent when the
   * proxy uses the default service-owned key.
   * @public
   */
  customerKmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetProxyAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetProxyAttributesResponse {
  /**
   * The attributes for the proxy.
   * @public
   */
  attributes?: AttributeDetails[] | undefined;
}

/**
 * @public
 */
export interface GetProxyConfigurationContentsRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * Indicates whether to include the configuration file contents in the
   * response. The default is `false`.
   * @public
   */
  includeConfigFile?: boolean | undefined;

  /**
   * Indicates whether to include the configuration archive contents in the
   * response. The default is `false`.
   * @public
   */
  includeConfigArchive?: boolean | undefined;
}

/**
 * @public
 */
export interface GetProxyConfigurationContentsResponse {
  /**
   * The configuration file contents. Populated only if `includeConfigFile`
   * was `true`.
   * @public
   */
  configurationFileContents?: Uint8Array | undefined;

  /**
   * The configuration archive contents. Populated only if
   * `includeConfigArchive` was `true`.
   * @public
   */
  configurationArchiveContents?: Uint8Array | undefined;

  /**
   * The configuration metadata for the proxy.
   * @public
   */
  configurationMetadata?: ConfigurationMetadata | undefined;

  /**
   * CMK ARN used to encrypt the proxy's configuration content
   * @public
   */
  customerKmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetProxyUpdateRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The ID of the update.
   * @public
   */
  updateIdentifier: string | undefined;
}

/**
 * Details about an update to a proxy's configuration.
 * @public
 */
export interface ProxyConfigurationUpdateDetails {
  /**
   * The configuration metadata for the configuration that was submitted with
   * this update.
   * @public
   */
  newConfigurationMetadata?: ConfigurationMetadata | undefined;
}

/**
 * Details about a proxy update.
 * @public
 */
export type ProxyUpdateDetails =
  | ProxyUpdateDetails.ConfigurationMember
  | ProxyUpdateDetails.$UnknownMember;

/**
 * @public
 */
export namespace ProxyUpdateDetails {
  /**
   * Details about an update to the proxy's configuration.
   * @public
   */
  export interface ConfigurationMember {
    configuration: ProxyConfigurationUpdateDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    configuration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    configuration: (value: ProxyConfigurationUpdateDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The state of a proxy update.
 * @public
 */
export interface ProxyUpdateState {
  /**
   * Whether the configuration submitted with the update works. An update is
   * valid once it is successfully applied to at least one proxy node.
   * @public
   */
  validationStatus: ProxyUpdateValidationStatus | undefined;

  /**
   * Whether the configuration submitted with the update was applied to all
   * proxy nodes.
   * @public
   */
  propagationStatus: ProxyUpdatePropagationStatus | undefined;

  /**
   * The reasons for the current state of the update.
   * @public
   */
  reasons?: string[] | undefined;
}

/**
 * @public
 */
export interface GetProxyUpdateResponse {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyArn: string | undefined;

  /**
   * The ID of the update.
   * @public
   */
  updateId: string | undefined;

  /**
   * The state of the update.
   * @public
   */
  state: ProxyUpdateState | undefined;

  /**
   * Details about the update.
   * @public
   */
  details: ProxyUpdateDetails | undefined;

  /**
   * The date and time that the update was submitted.
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * The date and time that the update was first successfully applied to a
   * proxy node. This value is absent until the update is valid.
   * @public
   */
  validatedAt?: Date | undefined;

  /**
   * The date and time that the update's propagation status became
   * `complete`, `failed`, or `cancelled`. This value is absent while the
   * update is `in-progress` or `skipped`.
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCertificateAssociationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The maximum number of results to return.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateAssociationsResponse {
  /**
   * Information about the certificate associations.
   * @public
   */
  items: CertificateAssociation[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProxiesRequest {
  /**
   * The maximum number of results to return.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a proxy.
 * @public
 */
export interface ProxySummary {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the proxy.
   * @public
   */
  name?: string | undefined;

  /**
   * The type of proxy.
   * @public
   */
  type?: ProxyType | undefined;

  /**
   * The DNS name of the proxy.
   * @public
   */
  dnsName?: string | undefined;

  /**
   * The ID of the VPC.
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The status of the proxy.
   * @public
   */
  status?: ProxyStatus | undefined;

  /**
   * The date and time that the proxy was created.
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListProxiesResponse {
  /**
   * Information about the proxies.
   * @public
   */
  items: ProxySummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProxyUpdatesRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The maximum number of results to return.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a proxy update.
 * @public
 */
export interface ProxyUpdateSummary {
  /**
   * The ID of the update.
   * @public
   */
  updateId: string | undefined;

  /**
   * The type of the update.
   * @public
   */
  type: ProxyUpdateType | undefined;

  /**
   * Whether the configuration submitted with the update works.
   * @public
   */
  validationStatus: ProxyUpdateValidationStatus | undefined;

  /**
   * Whether the configuration submitted with the update was applied to all
   * proxy nodes.
   * @public
   */
  propagationStatus: ProxyUpdatePropagationStatus | undefined;

  /**
   * The date and time that the update was submitted.
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * The date and time that the update was first successfully applied to a
   * proxy node. This value is absent until the update is valid.
   * @public
   */
  validatedAt?: Date | undefined;

  /**
   * The date and time that the update's propagation status became
   * `complete`, `failed`, or `cancelled`. This value is absent while the
   * update is `in-progress` or `skipped`.
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListProxyUpdatesResponse {
  /**
   * Information about the updates for the proxy.
   * @public
   */
  items: ProxyUpdateSummary[] | undefined;

  /**
   * If there are additional results, a pagination token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProxyAttributesRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The attributes to update. Attributes that you don't specify are unchanged.
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 * @public
 */
export interface UpdateProxyAttributesResponse {
  /**
   * The attributes for the proxy after the update.
   * @public
   */
  attributes: AttributeDetails[] | undefined;
}

/**
 * @public
 */
export interface UpdateProxyConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The updated configuration file for the proxy. If you don't specify a
   * value, the existing configuration file is unchanged.
   * @public
   */
  configurationFile?: ConfigurationFile | undefined;

  /**
   * The updated configuration archive for the proxy. If you don't specify a
   * value, the existing configuration archive is unchanged.
   * @public
   */
  configurationArchive?: ConfigurationArchive | undefined;

  /**
   * Indicates whether to remove the configuration archive from the proxy.
   * @public
   */
  resetConfigurationArchive?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to
   * encrypt the proxy's configuration content. Specify a new ARN to set or
   * rotate the key. If you don't specify a value, the existing key is
   * unchanged.
   * @public
   */
  customerKmsKeyArn?: string | undefined;

  /**
   * Indicates whether to remove the customer managed KMS key from the proxy
   * and use the default service-owned key.
   * @public
   */
  resetCustomerKmsKeyArn?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateProxyConfigurationResponse {
  /**
   * The configuration metadata for the proxy after the update.
   * @public
   */
  configurationMetadata: ConfigurationMetadata | undefined;

  /**
   * The ID of the update that was submitted.
   * @public
   */
  updateId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to
   * encrypt the proxy's configuration content after the update. This value is
   * absent when the proxy uses the default service-owned key.
   * @public
   */
  customerKmsKeyArn?: string | undefined;
}

/**
 * The updated VPC configuration for a proxy. You must provide at least one of
 * `subnets` or `securityGroups`.
 * @public
 */
export interface UpdateProxyVpcConfiguration {
  /**
   * The updated subnets for the proxy.
   * @public
   */
  subnets?: SubnetDetails[] | undefined;

  /**
   * The updated security groups for the proxy.
   * @public
   */
  securityGroups?: SecurityGroupDetails[] | undefined;
}

/**
 * @public
 */
export interface UpdateProxyNetworkConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  proxyIdentifier: string | undefined;

  /**
   * The updated VPC configuration for the proxy.
   * @public
   */
  vpcConfiguration: UpdateProxyVpcConfiguration | undefined;
}

/**
 * Common Proxy details response mixin
 * @public
 */
export interface UpdateProxyNetworkConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the proxy.
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the proxy.
   * @public
   */
  name?: string | undefined;

  /**
   * The type of proxy.
   * @public
   */
  type?: ProxyType | undefined;

  /**
   * The version of the proxy software.
   * @public
   */
  proxyVersion?: string | undefined;

  /**
   * The DNS name of the proxy.
   * @public
   */
  dnsName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions to
   * the code that your Envoy configuration runs on the proxy, such as filters and
   * extensions. These are the permissions that this code needs when it calls AWS
   * services.
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The network configuration for the proxy.
   * @public
   */
  networkConfiguration?: ProxyNetworkConfiguration | undefined;

  /**
   * The status of the proxy.
   * @public
   */
  status?: ProxyStatus | undefined;

  /**
   * The configuration metadata for the proxy.
   * @public
   */
  configurationMetadata?: ConfigurationMetadata | undefined;

  /**
   * The date and time that the proxy was created.
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to
   * encrypt the proxy's configuration content. This value is absent when the
   * proxy uses the default service-owned key.
   * @public
   */
  customerKmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags for the resource.
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys of the tags to remove.
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
