// smithy-typescript generated code
import {
  ActiveDirectoryType,
  LicenseServerEndpointProvisioningStatus,
  LicenseServerHealthStatus,
  ServerType,
} from "./enums";

/**
 * <p>Contains a credentials secret that's stored in Secrets Manager.</p>
 * @public
 */
export interface SecretsManagerCredentialsProvider {
  /**
   * <p>The ID of the Secrets Manager secret that contains credentials.</p>
   * @public
   */
  SecretId?: string | undefined;
}

/**
 * <p>Contains information about the credential provider for user administration.</p>
 * @public
 */
export type CredentialsProvider =
  | CredentialsProvider.SecretsManagerCredentialsProviderMember
  | CredentialsProvider.$UnknownMember;

/**
 * @public
 */
export namespace CredentialsProvider {
  /**
   * <p>Identifies the Secrets Manager secret that contains credentials needed for user administration in the Active Directory.</p>
   * @public
   */
  export interface SecretsManagerCredentialsProviderMember {
    SecretsManagerCredentialsProvider: SecretsManagerCredentialsProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecretsManagerCredentialsProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SecretsManagerCredentialsProvider: (value: SecretsManagerCredentialsProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains network settings for the Active Directory domain.</p>
 * @public
 */
export interface DomainNetworkSettings {
  /**
   * <p>Contains a list of subnets that apply for the Active Directory domain.</p>
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * <p>Contains network access and credential details that are needed for user administration in the Active Directory.</p>
 * @public
 */
export interface ActiveDirectorySettings {
  /**
   * <p>The domain name for the Active Directory.</p>
   * @public
   */
  DomainName?: string | undefined;

  /**
   * <p>A list of domain IPv4 addresses that are used for the Active Directory.</p>
   * @public
   */
  DomainIpv4List?: string[] | undefined;

  /**
   * <p>A list of domain IPv6 addresses that are used for the Active Directory.</p>
   * @public
   */
  DomainIpv6List?: string[] | undefined;

  /**
   * <p>Points to the <code>CredentialsProvider</code> resource that contains information about the credential provider for user administration.</p>
   * @public
   */
  DomainCredentialsProvider?: CredentialsProvider | undefined;

  /**
   * <p>The <code>DomainNetworkSettings</code> resource contains an array of subnets that apply for the Active Directory.</p>
   * @public
   */
  DomainNetworkSettings?: DomainNetworkSettings | undefined;
}

/**
 * <p>Details about an Active Directory identity provider.</p>
 * @public
 */
export interface ActiveDirectoryIdentityProvider {
  /**
   * <p>The directory ID for an Active Directory identity provider.</p>
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * <p>The <code>ActiveDirectorySettings</code> resource contains details about the Active Directory, including network access details such as domain name and IP addresses, and the credential provider for user administration.</p>
   * @public
   */
  ActiveDirectorySettings?: ActiveDirectorySettings | undefined;

  /**
   * <p>The type of Active Directory – either a self-managed Active Directory or an Amazon Web Services Managed Active Directory.</p>
   * @public
   */
  ActiveDirectoryType?: ActiveDirectoryType | undefined;

  /**
   * <p>Whether this directory is shared from an Amazon Web Services Managed Active Directory. The default value is false.</p>
   * @public
   */
  IsSharedActiveDirectory?: boolean | undefined;
}

/**
 * <p>Refers to an identity provider.</p>
 * @public
 */
export type IdentityProvider = IdentityProvider.ActiveDirectoryIdentityProviderMember | IdentityProvider.$UnknownMember;

/**
 * @public
 */
export namespace IdentityProvider {
  /**
   * <p>The <code>ActiveDirectoryIdentityProvider</code> resource contains settings and other details about a specific Active Directory identity provider.</p>
   * @public
   */
  export interface ActiveDirectoryIdentityProviderMember {
    ActiveDirectoryIdentityProvider: ActiveDirectoryIdentityProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ActiveDirectoryIdentityProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ActiveDirectoryIdentityProvider: (value: ActiveDirectoryIdentityProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AssociateUserRequest {
  /**
   * <p>The user name from the identity provider.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The ID of the EC2 instance that provides the user-based subscription.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identity provider for the user.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The domain name of the Active Directory that contains information for the user to associate.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The tags that apply for the user association.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Describes users of an EC2 instance providing user-based subscriptions.</p>
 * @public
 */
export interface InstanceUserSummary {
  /**
   * <p>The user name from the identity provider for the user.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The ID of the EC2 instance that provides user-based subscriptions.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The <code>IdentityProvider</code> resource specifies details about the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The status of a user associated with an EC2 instance.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the instance user.</p>
   * @public
   */
  InstanceUserArn?: string | undefined;

  /**
   * <p>The status message for users of an EC2 instance.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The domain name of the Active Directory that contains the user information for the product subscription.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The date a user was associated with an EC2 instance.</p>
   * @public
   */
  AssociationDate?: string | undefined;

  /**
   * <p>The date a user was disassociated from an EC2 instance.</p>
   * @public
   */
  DisassociationDate?: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserResponse {
  /**
   * <p>Metadata that describes the associate user operation.</p>
   * @public
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
 * <p>Server settings that are specific to a Remote Desktop Services (RDS) license server.</p>
 * @public
 */
export interface RdsSalSettings {
  /**
   * <p>The <code>CredentialsProvider</code> resource contains a reference to the credentials provider that's used for RDS license server user administration.</p>
   * @public
   */
  RdsSalCredentialsProvider: CredentialsProvider | undefined;
}

/**
 * <p>Contains settings for a specific server.</p>
 * @public
 */
export type ServerSettings = ServerSettings.RdsSalSettingsMember | ServerSettings.$UnknownMember;

/**
 * @public
 */
export namespace ServerSettings {
  /**
   * <p>The <code>RdsSalSettings</code> resource contains settings to configure a specific Remote Desktop Services (RDS) license server.</p>
   * @public
   */
  export interface RdsSalSettingsMember {
    RdsSalSettings: RdsSalSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RdsSalSettings?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    RdsSalSettings: (value: RdsSalSettings) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The settings to configure your license server.</p>
 * @public
 */
export interface LicenseServerSettings {
  /**
   * <p>The type of license server.</p>
   * @public
   */
  ServerType: ServerType | undefined;

  /**
   * <p>The <code>ServerSettings</code> resource contains the settings for your server.</p>
   * @public
   */
  ServerSettings: ServerSettings | undefined;
}

/**
 * @public
 */
export interface CreateLicenseServerEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the <code>IdentityProvider</code> resource that contains details about a registered identity provider. In the case of Active Directory, that can be a self-managed Active Directory or an Amazon Web Services Managed Active Directory that contains user identity details.</p>
   * @public
   */
  IdentityProviderArn: string | undefined;

  /**
   * <p>The <code>LicenseServerSettings</code> resource to create for the endpoint. The settings include the type of license server and the Secrets Manager secret that enables administrators to add or remove users associated with the license server.</p>
   * @public
   */
  LicenseServerSettings: LicenseServerSettings | undefined;

  /**
   * <p>The tags that apply for the license server endpoint.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLicenseServerEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity provider specified in the request.</p>
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * <p>The ARN of the <code>LicenseServerEndpoint</code> resource.</p>
   * @public
   */
  LicenseServerEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseServerEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the <code>LicenseServerEndpoint</code> resource to delete.</p>
   * @public
   */
  LicenseServerEndpointArn: string | undefined;

  /**
   * <p>The type of License Server that the delete request refers to.</p>
   * @public
   */
  ServerType: ServerType | undefined;
}

/**
 * <p>Information about a Remote Desktop Services (RDS) license server.</p>
 * @public
 */
export interface LicenseServer {
  /**
   * <p>The current state of the provisioning process for the RDS license server.</p>
   * @public
   */
  ProvisioningStatus?: LicenseServerEndpointProvisioningStatus | undefined;

  /**
   * <p>The health status of the RDS license server.</p>
   * @public
   */
  HealthStatus?: LicenseServerHealthStatus | undefined;

  /**
   * <p>A list of domain IPv4 addresses that are used for the RDS license server.</p>
   * @public
   */
  Ipv4Address?: string | undefined;

  /**
   * <p>A list of domain IPv6 addresses that are used for the RDS license server.</p>
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * <p>A network endpoint through which you can access one or more servers.</p>
 * @public
 */
export interface ServerEndpoint {
  /**
   * <p>The network address of the endpoint.</p>
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * <p>Contains details about a network endpoint for a Remote Desktop Services (RDS) license server.</p>
 * @public
 */
export interface LicenseServerEndpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the identity provider that's associated with the RDS license server endpoint.</p>
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * <p>The type of license server.</p>
   * @public
   */
  ServerType?: ServerType | undefined;

  /**
   * <p>The <code>ServerEndpoint</code> resource contains the network address of the RDS license server endpoint.</p>
   * @public
   */
  ServerEndpoint?: ServerEndpoint | undefined;

  /**
   * <p>The message associated with the provisioning status, if there is one.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The ID of the license server endpoint.</p>
   * @public
   */
  LicenseServerEndpointId?: string | undefined;

  /**
   * <p>The ARN of the <code>ServerEndpoint</code> resource for the RDS license server.</p>
   * @public
   */
  LicenseServerEndpointArn?: string | undefined;

  /**
   * <p>The current state of the provisioning process for the RDS license server endpoint</p>
   * @public
   */
  LicenseServerEndpointProvisioningStatus?: LicenseServerEndpointProvisioningStatus | undefined;

  /**
   * <p>An array of <code>LicenseServer</code> resources that represent the license servers that are accessed through this endpoint.</p>
   * @public
   */
  LicenseServers?: LicenseServer[] | undefined;

  /**
   * <p>The timestamp when License Manager created the license server endpoint.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseServerEndpointResponse {
  /**
   * <p>Shows details from the <code>LicenseServerEndpoint</code> resource that was deleted.</p>
   * @public
   */
  LicenseServerEndpoint?: LicenseServerEndpoint | undefined;
}

/**
 * @public
 */
export interface DeregisterIdentityProviderRequest {
  /**
   * <p>An object that specifies details for the Active Directory identity provider.</p>
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p> <p>Valid values: <code>VISUAL_STUDIO_ENTERPRISE</code> | <code>VISUAL_STUDIO_PROFESSIONAL</code> | <code>OFFICE_PROFESSIONAL_PLUS</code> | <code>REMOTE_DESKTOP_SERVICES</code> </p>
   * @public
   */
  Product?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the identity provider to deregister.</p>
   * @public
   */
  IdentityProviderArn?: string | undefined;
}

/**
 * <p>The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC.</p>
 * @public
 */
export interface Settings {
  /**
   * <p>The subnets defined for the registered identity provider.</p>
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in your VPC and the VPC endpoint for activation servers.</p>
   * @public
   */
  SecurityGroupId: string | undefined;
}

/**
 * <p>Describes an identity provider.</p>
 * @public
 */
export interface IdentityProviderSummary {
  /**
   * <p>The <code>IdentityProvider</code> resource contains information about an identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The <code>Settings</code> resource contains details about the registered identity provider’s product related configuration settings, such as the subnets to provision VPC endpoints.</p>
   * @public
   */
  Settings: Settings | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>The status of the identity provider.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity provider.</p>
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * <p>The failure message associated with an identity provider.</p>
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * <p>The AWS Account ID of the owner of this resource.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterIdentityProviderResponse {
  /**
   * <p>Metadata that describes the results of an identity provider operation.</p>
   * @public
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

/**
 * @public
 */
export interface DisassociateUserRequest {
  /**
   * <p>The user name from the Active Directory identity provider for the user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The ID of the EC2 instance which provides user-based subscriptions.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>An object that specifies details for the Active Directory identity provider.</p>
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user to disassociate from the EC2 instance.</p>
   * @public
   */
  InstanceUserArn?: string | undefined;

  /**
   * <p>The domain name of the Active Directory that contains information for the user to disassociate.</p>
   * @public
   */
  Domain?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserResponse {
  /**
   * <p>Metadata that describes the associate user operation.</p>
   * @public
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
 * <p>A filter name and value pair that is used to return more specific results from a describe or list operation. You can use filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of an attribute to use as a filter.</p>
   * @public
   */
  Attribute?: string | undefined;

  /**
   * <p>The type of search (For example, eq, geq, leq)</p>
   * @public
   */
  Operation?: string | undefined;

  /**
   * <p>Value of the filter.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Describes an EC2 instance providing user-based subscriptions.</p>
 * @public
 */
export interface InstanceSummary {
  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The status of an EC2 instance resource.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>A list of provided user-based subscription products.</p>
   * @public
   */
  Products: string[] | undefined;

  /**
   * <p>The date of the last status check.</p>
   * @public
   */
  LastStatusCheckDate?: string | undefined;

  /**
   * <p>The status message for an EC2 instance.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The AWS Account ID of the owner of this resource.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The <code>IdentityProvider</code> resource specifies details about the identity provider.</p>
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * <p>The maximum number of results to return from a single request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use the following filters to streamline results:</p> <ul> <li> <p>Product</p> </li> <li> <p>DirectoryId</p> </li> </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * <p>An array of <code>IdentityProviderSummary</code> resources that contain details about the Active Directory identity providers that meet the request criteria.</p>
   * @public
   */
  IdentityProviderSummaries: IdentityProviderSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * <p>The maximum number of results to return from a single request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>You can use the following filters to streamline results:</p> <ul> <li> <p>Status</p> </li> <li> <p>InstanceId</p> </li> </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>An array of <code>InstanceSummary</code> resources that contain details about the instances that provide user-based subscriptions and also meet the request criteria.</p>
   * @public
   */
  InstanceSummaries?: InstanceSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseServerEndpointsRequest {
  /**
   * <p>The maximum number of results to return from a single request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use the following filters to streamline results:</p> <ul> <li> <p>IdentityProviderArn</p> </li> </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseServerEndpointsResponse {
  /**
   * <p>An array of <code>LicenseServerEndpoint</code> resources that contain detailed information about the RDS License Servers that meet the request criteria.</p>
   * @public
   */
  LicenseServerEndpoints?: LicenseServerEndpoint[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProductSubscriptionsRequest {
  /**
   * <p>The name of the user-based subscription product.</p> <p>Valid values: <code>VISUAL_STUDIO_ENTERPRISE</code> | <code>VISUAL_STUDIO_PROFESSIONAL</code> | <code>OFFICE_PROFESSIONAL_PLUS</code> | <code>REMOTE_DESKTOP_SERVICES</code> </p>
   * @public
   */
  Product?: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The maximum number of results to return from a single request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use the following filters to streamline results:</p> <ul> <li> <p>Status</p> </li> <li> <p>Username</p> </li> <li> <p>Domain</p> </li> </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of the user-based subscription products for a specific user.</p>
 * @public
 */
export interface ProductUserSummary {
  /**
   * <p>The user name from the identity provider for this product user.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The status of a product for this user.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for this product user.</p>
   * @public
   */
  ProductUserArn?: string | undefined;

  /**
   * <p>The status message for a product for this user.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The domain name of the Active Directory that contains the user information for the product subscription.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The start date of a subscription.</p>
   * @public
   */
  SubscriptionStartDate?: string | undefined;

  /**
   * <p>The end date of a subscription.</p>
   * @public
   */
  SubscriptionEndDate?: string | undefined;
}

/**
 * @public
 */
export interface ListProductSubscriptionsResponse {
  /**
   * <p>Metadata that describes the list product subscriptions operation.</p>
   * @public
   */
  ProductUserSummaries?: ProductUserSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the specified resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUserAssociationsRequest {
  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The maximum number of results to return from a single request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use the following filters to streamline results:</p> <ul> <li> <p>Status</p> </li> <li> <p>Username</p> </li> <li> <p>Domain</p> </li> </ul>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>A token to specify where to start paginating. This is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserAssociationsResponse {
  /**
   * <p>Metadata that describes the list user association operation.</p>
   * @public
   */
  InstanceUserSummaries?: InstanceUserSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterIdentityProviderRequest {
  /**
   * <p>An object that specifies details for the identity provider to register.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p> <p>Valid values: <code>VISUAL_STUDIO_ENTERPRISE</code> | <code>VISUAL_STUDIO_PROFESSIONAL</code> | <code>OFFICE_PROFESSIONAL_PLUS</code> | <code>REMOTE_DESKTOP_SERVICES</code> </p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints.</p>
   * @public
   */
  Settings?: Settings | undefined;

  /**
   * <p>The tags that apply to the identity provider's registration.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterIdentityProviderResponse {
  /**
   * <p>Metadata that describes the results of an identity provider operation.</p>
   * @public
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

/**
 * @public
 */
export interface StartProductSubscriptionRequest {
  /**
   * <p>The user name from the identity provider of the user.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p> <p>Valid values: <code>VISUAL_STUDIO_ENTERPRISE</code> | <code>VISUAL_STUDIO_PROFESSIONAL</code> | <code>OFFICE_PROFESSIONAL_PLUS</code> | <code>REMOTE_DESKTOP_SERVICES</code> </p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>The domain name of the Active Directory that contains the user for whom to start the product subscription.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The tags that apply to the product subscription.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartProductSubscriptionResponse {
  /**
   * <p>Metadata that describes the start product subscription operation.</p>
   * @public
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

/**
 * @public
 */
export interface StopProductSubscriptionRequest {
  /**
   * <p>The user name from the identity provider for the user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p> <p>Valid values: <code>VISUAL_STUDIO_ENTERPRISE</code> | <code>VISUAL_STUDIO_PROFESSIONAL</code> | <code>OFFICE_PROFESSIONAL_PLUS</code> | <code>REMOTE_DESKTOP_SERVICES</code> </p>
   * @public
   */
  Product?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the product user.</p>
   * @public
   */
  ProductUserArn?: string | undefined;

  /**
   * <p>The domain name of the Active Directory that contains the user for whom to stop the product subscription.</p>
   * @public
   */
  Domain?: string | undefined;
}

/**
 * @public
 */
export interface StopProductSubscriptionResponse {
  /**
   * <p>Metadata that describes the start product subscription operation.</p>
   * @public
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to apply to the specified resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Updates the registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints.</p>
 * @public
 */
export interface UpdateSettings {
  /**
   * <p>The ID of one or more subnets in which License Manager will create a VPC endpoint for products that require connectivity to activation servers.</p>
   * @public
   */
  AddSubnets: string[] | undefined;

  /**
   * <p>The ID of one or more subnets to remove.</p>
   * @public
   */
  RemoveSubnets: string[] | undefined;

  /**
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in your VPC and the VPC endpoints for activation servers.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderSettingsRequest {
  /**
   * <p>Refers to an identity provider.</p>
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p> <p>Valid values: <code>VISUAL_STUDIO_ENTERPRISE</code> | <code>VISUAL_STUDIO_PROFESSIONAL</code> | <code>OFFICE_PROFESSIONAL_PLUS</code> | <code>REMOTE_DESKTOP_SERVICES</code> </p>
   * @public
   */
  Product?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity provider to update.</p>
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * <p>Updates the registered identity provider’s product related configuration settings. You can update any combination of settings in a single operation such as the:</p> <ul> <li> <p>Subnets which you want to add to provision VPC endpoints.</p> </li> <li> <p>Subnets which you want to remove the VPC endpoints from.</p> </li> <li> <p>Security group ID which permits traffic to the VPC endpoints.</p> </li> </ul>
   * @public
   */
  UpdateSettings: UpdateSettings | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderSettingsResponse {
  /**
   * <p>Describes an identity provider.</p>
   * @public
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}
