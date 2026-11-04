// smithy-typescript generated code
import type {
  ActiveDirectoryType,
  LicenseServerEndpointProvisioningStatus,
  LicenseServerHealthStatus,
  ServerType,
} from "./enums";

/**
 * Contains a credentials secret that's stored in Secrets Manager.
 *
 * @public
 */
export interface SecretsManagerCredentialsProvider {
  /**
   * The ID of the Secrets Manager secret that contains credentials.
   *
   * @public
   */
  SecretId?: string | undefined;
}

/**
 * Contains information about the credential provider for user administration.
 *
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
   * Identifies the Secrets Manager secret that contains credentials needed for user administration in the Active Directory.
   *
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
 * Contains network settings for the Active Directory domain.
 *
 * @public
 */
export interface DomainNetworkSettings {
  /**
   * Contains a list of subnets that apply for the Active Directory domain.
   *
   * @public
   */
  Subnets: string[] | undefined;
}

/**
 * Contains network access and credential details that are needed for user administration in the Active Directory.
 *
 * @public
 */
export interface ActiveDirectorySettings {
  /**
   * The domain name for the Active Directory.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * A list of domain IPv4 addresses that are used for the Active Directory.
   *
   * @public
   */
  DomainIpv4List?: string[] | undefined;

  /**
   * A list of domain IPv6 addresses that are used for the Active Directory.
   *
   * @public
   */
  DomainIpv6List?: string[] | undefined;

  /**
   * Points to the `CredentialsProvider` resource that contains information about the credential provider for user administration.
   *
   * @public
   */
  DomainCredentialsProvider?: CredentialsProvider | undefined;

  /**
   * The `DomainNetworkSettings` resource contains an array of subnets that apply for the Active Directory.
   *
   * @public
   */
  DomainNetworkSettings?: DomainNetworkSettings | undefined;
}

/**
 * Details about an Active Directory identity provider.
 *
 * @public
 */
export interface ActiveDirectoryIdentityProvider {
  /**
   * The directory ID for an Active Directory identity provider.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The `ActiveDirectorySettings` resource contains details about the Active Directory, including network access details such as domain name and IP addresses, and the credential provider for user administration.
   *
   * @public
   */
  ActiveDirectorySettings?: ActiveDirectorySettings | undefined;

  /**
   * The type of Active Directory – either a self-managed Active Directory or an Amazon Web Services Managed Active Directory.
   *
   * @public
   */
  ActiveDirectoryType?: ActiveDirectoryType | undefined;

  /**
   * Whether this directory is shared from an Amazon Web Services Managed Active Directory. The default value is false.
   *
   * @public
   */
  IsSharedActiveDirectory?: boolean | undefined;
}

/**
 * Refers to an identity provider.
 *
 * @public
 */
export type IdentityProvider =
  | IdentityProvider.ActiveDirectoryIdentityProviderMember
  | IdentityProvider.$UnknownMember;

/**
 * @public
 */
export namespace IdentityProvider {
  /**
   * The `ActiveDirectoryIdentityProvider` resource contains settings and other details about a specific Active Directory identity provider.
   *
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
   * The user name from the identity provider.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The ID of the EC2 instance that provides the user-based subscription.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The identity provider for the user.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The domain name of the Active Directory that contains information for the user to associate.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The tags that apply for the user association.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Describes users of an EC2 instance providing user-based subscriptions.
 *
 * @public
 */
export interface InstanceUserSummary {
  /**
   * The user name from the identity provider for the user.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The ID of the EC2 instance that provides user-based subscriptions.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The `IdentityProvider` resource specifies details about the identity provider.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The status of a user associated with an EC2 instance.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the instance user.
   *
   * @public
   */
  InstanceUserArn?: string | undefined;

  /**
   * The status message for users of an EC2 instance.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The domain name of the Active Directory that contains the user information for the product subscription.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The date a user was associated with an EC2 instance.
   *
   * @public
   */
  AssociationDate?: string | undefined;

  /**
   * The date a user was disassociated from an EC2 instance.
   *
   * @public
   */
  DisassociationDate?: string | undefined;
}

/**
 * @public
 */
export interface AssociateUserResponse {
  /**
   * Metadata that describes the associate user operation.
   *
   * @public
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
 * Server settings that are specific to a Remote Desktop Services (RDS) license server.
 *
 * @public
 */
export interface RdsSalSettings {
  /**
   * The `CredentialsProvider` resource contains a reference to the credentials provider that's used for RDS license server user administration.
   *
   * @public
   */
  RdsSalCredentialsProvider: CredentialsProvider | undefined;
}

/**
 * Contains settings for a specific server.
 *
 * @public
 */
export type ServerSettings =
  | ServerSettings.RdsSalSettingsMember
  | ServerSettings.$UnknownMember;

/**
 * @public
 */
export namespace ServerSettings {
  /**
   * The `RdsSalSettings` resource contains settings to configure a specific Remote Desktop Services (RDS) license server.
   *
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
 * The settings to configure your license server.
 *
 * @public
 */
export interface LicenseServerSettings {
  /**
   * The type of license server.
   *
   * @public
   */
  ServerType: ServerType | undefined;

  /**
   * The `ServerSettings` resource contains the settings for your server.
   *
   * @public
   */
  ServerSettings: ServerSettings | undefined;
}

/**
 * @public
 */
export interface CreateLicenseServerEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the `IdentityProvider` resource that contains details about a registered identity provider. In the case of Active Directory, that can be a self-managed Active Directory or an Amazon Web Services Managed Active Directory that contains user identity details.
   *
   * @public
   */
  IdentityProviderArn: string | undefined;

  /**
   * The `LicenseServerSettings` resource to create for the endpoint. The settings include the type of license server and the Secrets Manager secret that enables administrators to add or remove users associated with the license server.
   *
   * @public
   */
  LicenseServerSettings: LicenseServerSettings | undefined;

  /**
   * The tags that apply for the license server endpoint.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLicenseServerEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the identity provider specified in the request.
   *
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * The ARN of the `LicenseServerEndpoint` resource.
   *
   * @public
   */
  LicenseServerEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseServerEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the `LicenseServerEndpoint` resource to delete.
   *
   * @public
   */
  LicenseServerEndpointArn: string | undefined;

  /**
   * The type of License Server that the delete request refers to.
   *
   * @public
   */
  ServerType: ServerType | undefined;
}

/**
 * Information about a Remote Desktop Services (RDS) license server.
 *
 * @public
 */
export interface LicenseServer {
  /**
   * The current state of the provisioning process for the RDS license server.
   *
   * @public
   */
  ProvisioningStatus?: LicenseServerEndpointProvisioningStatus | undefined;

  /**
   * The health status of the RDS license server.
   *
   * @public
   */
  HealthStatus?: LicenseServerHealthStatus | undefined;

  /**
   * A list of domain IPv4 addresses that are used for the RDS license server.
   *
   * @public
   */
  Ipv4Address?: string | undefined;

  /**
   * A list of domain IPv6 addresses that are used for the RDS license server.
   *
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * A network endpoint through which you can access one or more servers.
 *
 * @public
 */
export interface ServerEndpoint {
  /**
   * The network address of the endpoint.
   *
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * Contains details about a network endpoint for a Remote Desktop Services (RDS) license server.
 *
 * @public
 */
export interface LicenseServerEndpoint {
  /**
   * The Amazon Resource Name (ARN) of the identity provider that's associated with the RDS license server endpoint.
   *
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * The type of license server.
   *
   * @public
   */
  ServerType?: ServerType | undefined;

  /**
   * The `ServerEndpoint` resource contains the network address of the RDS license server endpoint.
   *
   * @public
   */
  ServerEndpoint?: ServerEndpoint | undefined;

  /**
   * The message associated with the provisioning status, if there is one.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The ID of the license server endpoint.
   *
   * @public
   */
  LicenseServerEndpointId?: string | undefined;

  /**
   * The ARN of the `ServerEndpoint` resource for the RDS license server.
   *
   * @public
   */
  LicenseServerEndpointArn?: string | undefined;

  /**
   * The current state of the provisioning process for the RDS license server endpoint
   *
   * @public
   */
  LicenseServerEndpointProvisioningStatus?: LicenseServerEndpointProvisioningStatus | undefined;

  /**
   * An array of `LicenseServer` resources that represent the license servers that are accessed through this endpoint.
   *
   * @public
   */
  LicenseServers?: LicenseServer[] | undefined;

  /**
   * The timestamp when License Manager created the license server endpoint.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteLicenseServerEndpointResponse {
  /**
   * Shows details from the `LicenseServerEndpoint` resource that was deleted.
   *
   * @public
   */
  LicenseServerEndpoint?: LicenseServerEndpoint | undefined;
}

/**
 * @public
 */
export interface DeregisterIdentityProviderRequest {
  /**
   * An object that specifies details for the Active Directory identity provider.
   *
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * The name of the user-based subscription product.
   *
   * Valid values: `VISUAL_STUDIO_ENTERPRISE` | `VISUAL_STUDIO_PROFESSIONAL` | `OFFICE_PROFESSIONAL_PLUS` | `OFFICE_STANDARD` | `REMOTE_DESKTOP_SERVICES`
   *
   * @public
   */
  Product?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the identity provider to deregister.
   *
   * @public
   */
  IdentityProviderArn?: string | undefined;
}

/**
 * The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC.
 *
 * @public
 */
export interface Settings {
  /**
   * The subnets defined for the registered identity provider.
   *
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * A security group ID that allows inbound TCP port 1688 communication between resources in your VPC and the VPC endpoint for activation servers.
   *
   * @public
   */
  SecurityGroupId: string | undefined;
}

/**
 * Describes an identity provider.
 *
 * @public
 */
export interface IdentityProviderSummary {
  /**
   * The `IdentityProvider` resource contains information about an identity provider.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The `Settings` resource contains details about the registered identity provider’s product related configuration settings, such as the subnets to provision VPC endpoints.
   *
   * @public
   */
  Settings: Settings | undefined;

  /**
   * The name of the user-based subscription product.
   *
   * @public
   */
  Product: string | undefined;

  /**
   * The status of the identity provider.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity provider.
   *
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * The failure message associated with an identity provider.
   *
   * @public
   */
  FailureMessage?: string | undefined;

  /**
   * The AWS Account ID of the owner of this resource.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterIdentityProviderResponse {
  /**
   * Metadata that describes the results of an identity provider operation.
   *
   * @public
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

/**
 * @public
 */
export interface DisassociateUserRequest {
  /**
   * The user name from the Active Directory identity provider for the user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The ID of the EC2 instance which provides user-based subscriptions.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * An object that specifies details for the Active Directory identity provider.
   *
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user to disassociate from the EC2 instance.
   *
   * @public
   */
  InstanceUserArn?: string | undefined;

  /**
   * The domain name of the Active Directory that contains information for the user to disassociate.
   *
   * @public
   */
  Domain?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserResponse {
  /**
   * Metadata that describes the associate user operation.
   *
   * @public
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
 * A filter name and value pair that is used to return more specific results from a describe or list operation. You can use filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of an attribute to use as a filter.
   *
   * @public
   */
  Attribute?: string | undefined;

  /**
   * The type of search (For example, eq, geq, leq)
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * Value of the filter.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes an EC2 instance providing user-based subscriptions.
 *
 * @public
 */
export interface InstanceSummary {
  /**
   * The ID of the EC2 instance, which provides user-based subscriptions.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The status of an EC2 instance resource.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * A list of provided user-based subscription products.
   *
   * @public
   */
  Products: string[] | undefined;

  /**
   * The date of the last status check.
   *
   * @public
   */
  LastStatusCheckDate?: string | undefined;

  /**
   * The status message for an EC2 instance.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The AWS Account ID of the owner of this resource.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The `IdentityProvider` resource specifies details about the identity provider.
   *
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * The maximum number of results to return from a single request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * You can use the following filters to streamline results:
   *
   * - Product
   * - DirectoryId
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * An array of `IdentityProviderSummary` resources that contain details about the Active Directory identity providers that meet the request criteria.
   *
   * @public
   */
  IdentityProviderSummaries: IdentityProviderSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * The maximum number of results to return from a single request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * You can use the following filters to streamline results:
   *
   * - Status
   * - InstanceId
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * An array of `InstanceSummary` resources that contain details about the instances that provide user-based subscriptions and also meet the request criteria.
   *
   * @public
   */
  InstanceSummaries?: InstanceSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseServerEndpointsRequest {
  /**
   * The maximum number of results to return from a single request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * You can use the following filters to streamline results:
   *
   * - IdentityProviderArn
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLicenseServerEndpointsResponse {
  /**
   * An array of `LicenseServerEndpoint` resources that contain detailed information about the RDS License Servers that meet the request criteria.
   *
   * @public
   */
  LicenseServerEndpoints?: LicenseServerEndpoint[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProductSubscriptionsRequest {
  /**
   * The name of the user-based subscription product.
   *
   * Valid values: `VISUAL_STUDIO_ENTERPRISE` | `VISUAL_STUDIO_PROFESSIONAL` | `OFFICE_PROFESSIONAL_PLUS` | `OFFICE_STANDARD` | `REMOTE_DESKTOP_SERVICES`
   *
   * @public
   */
  Product?: string | undefined;

  /**
   * An object that specifies details for the identity provider.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The maximum number of results to return from a single request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * You can use the following filters to streamline results:
   *
   * - Status
   * - Username
   * - Domain
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of the user-based subscription products for a specific user.
 *
 * @public
 */
export interface ProductUserSummary {
  /**
   * The user name from the identity provider for this product user.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The name of the user-based subscription product.
   *
   * @public
   */
  Product: string | undefined;

  /**
   * An object that specifies details for the identity provider.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The status of a product for this user.
   *
   * @public
   */
  Status: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for this product user.
   *
   * @public
   */
  ProductUserArn?: string | undefined;

  /**
   * The status message for a product for this user.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The domain name of the Active Directory that contains the user information for the product subscription.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The start date of a subscription.
   *
   * @public
   */
  SubscriptionStartDate?: string | undefined;

  /**
   * The end date of a subscription.
   *
   * @public
   */
  SubscriptionEndDate?: string | undefined;

  /**
   * The expiration date of the license associated with this subscription, in ISO 8601 UTC format (for example, `2025-03-15T00:00:00Z`).
   *
   * This field applies only to subscriptions that use license server endpoints, such as Remote Desktop Services (RDS) Subscriber Access License (SAL). It returns `null` for products that don't use license-based subscriptions.
   *
   * @public
   */
  LicenseExpirationDate?: string | undefined;
}

/**
 * @public
 */
export interface ListProductSubscriptionsResponse {
  /**
   * Metadata that describes the list product subscriptions operation.
   *
   * @public
   */
  ProductUserSummaries?: ProductUserSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the specified resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUserAssociationsRequest {
  /**
   * The ID of the EC2 instance, which provides user-based subscriptions.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * An object that specifies details for the identity provider.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The maximum number of results to return from a single request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * You can use the following filters to streamline results:
   *
   * - Status
   * - Username
   * - Domain
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * A token to specify where to start paginating. This is the nextToken from a previously truncated response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserAssociationsResponse {
  /**
   * Metadata that describes the list user association operation.
   *
   * @public
   */
  InstanceUserSummaries?: InstanceUserSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterIdentityProviderRequest {
  /**
   * An object that specifies details for the identity provider to register.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The name of the user-based subscription product.
   *
   * Valid values: `VISUAL_STUDIO_ENTERPRISE` | `VISUAL_STUDIO_PROFESSIONAL` | `OFFICE_PROFESSIONAL_PLUS` | `OFFICE_STANDARD` | `REMOTE_DESKTOP_SERVICES`
   *
   * @public
   */
  Product: string | undefined;

  /**
   * The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints.
   *
   * @public
   */
  Settings?: Settings | undefined;

  /**
   * The tags that apply to the identity provider's registration.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterIdentityProviderResponse {
  /**
   * Metadata that describes the results of an identity provider operation.
   *
   * @public
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

/**
 * @public
 */
export interface StartProductSubscriptionRequest {
  /**
   * The user name from the identity provider of the user.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * An object that specifies details for the identity provider.
   *
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * The name of the user-based subscription product.
   *
   * Valid values: `VISUAL_STUDIO_ENTERPRISE` | `VISUAL_STUDIO_PROFESSIONAL` | `OFFICE_PROFESSIONAL_PLUS` | `OFFICE_STANDARD` | `REMOTE_DESKTOP_SERVICES`
   *
   * @public
   */
  Product: string | undefined;

  /**
   * The domain name of the Active Directory that contains the user for whom to start the product subscription.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The tags that apply to the product subscription.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartProductSubscriptionResponse {
  /**
   * Metadata that describes the start product subscription operation.
   *
   * @public
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

/**
 * @public
 */
export interface StopProductSubscriptionRequest {
  /**
   * The user name from the identity provider for the user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * An object that specifies details for the identity provider.
   *
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * The name of the user-based subscription product.
   *
   * Valid values: `VISUAL_STUDIO_ENTERPRISE` | `VISUAL_STUDIO_PROFESSIONAL` | `OFFICE_PROFESSIONAL_PLUS` | `OFFICE_STANDARD` | `REMOTE_DESKTOP_SERVICES`
   *
   * @public
   */
  Product?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the product user.
   *
   * @public
   */
  ProductUserArn?: string | undefined;

  /**
   * The domain name of the Active Directory that contains the user for whom to stop the product subscription.
   *
   * @public
   */
  Domain?: string | undefined;
}

/**
 * @public
 */
export interface StopProductSubscriptionResponse {
  /**
   * Metadata that describes the start product subscription operation.
   *
   * @public
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to apply to the specified resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource that you want to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Updates the registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints.
 *
 * @public
 */
export interface UpdateSettings {
  /**
   * The ID of one or more subnets in which License Manager will create a VPC endpoint for products that require connectivity to activation servers.
   *
   * @public
   */
  AddSubnets: string[] | undefined;

  /**
   * The ID of one or more subnets to remove.
   *
   * @public
   */
  RemoveSubnets: string[] | undefined;

  /**
   * A security group ID that allows inbound TCP port 1688 communication between resources in your VPC and the VPC endpoints for activation servers.
   *
   * @public
   */
  SecurityGroupId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderSettingsRequest {
  /**
   * Refers to an identity provider.
   *
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * The name of the user-based subscription product.
   *
   * Valid values: `VISUAL_STUDIO_ENTERPRISE` | `VISUAL_STUDIO_PROFESSIONAL` | `OFFICE_PROFESSIONAL_PLUS` | `OFFICE_STANDARD` | `REMOTE_DESKTOP_SERVICES`
   *
   * @public
   */
  Product?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity provider to update.
   *
   * @public
   */
  IdentityProviderArn?: string | undefined;

  /**
   * Updates the registered identity provider’s product related configuration settings. You can update any combination of settings in a single operation such as the:
   *
   * - Subnets which you want to add to provision VPC endpoints.
   * - Subnets which you want to remove the VPC endpoints from.
   * - Security group ID which permits traffic to the VPC endpoints.
   *
   * @public
   */
  UpdateSettings: UpdateSettings | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderSettingsResponse {
  /**
   * Describes an identity provider.
   *
   * @public
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}
