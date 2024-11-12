// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LicenseManagerUserSubscriptionsServiceException as __BaseException } from "./LicenseManagerUserSubscriptionsServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
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
}

/**
 * <p>Details about an identity provider.</p>
 * @public
 */
export type IdentityProvider = IdentityProvider.ActiveDirectoryIdentityProviderMember | IdentityProvider.$UnknownMember;

/**
 * @public
 */
export namespace IdentityProvider {
  /**
   * <p>An object that details an Active Directory identity provider.</p>
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

  export interface Visitor<T> {
    ActiveDirectoryIdentityProvider: (value: ActiveDirectoryIdentityProvider) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IdentityProvider, visitor: Visitor<T>): T => {
    if (value.ActiveDirectoryIdentityProvider !== undefined)
      return visitor.ActiveDirectoryIdentityProvider(value.ActiveDirectoryIdentityProvider);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface AssociateUserRequest {
  /**
   * <p>The user name from the identity provider for the user.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identity provider of the user.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The domain name of the user.</p>
   * @public
   */
  Domain?: string | undefined;
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
   * <p>The status of a user associated with an EC2 instance.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The status message for users of an EC2 instance.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The domain name of the user.</p>
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
 * <p>The request couldn't be completed because it conflicted with the current state of the
 *       resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>An exception occurred with the service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The resource couldn't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The request failed because a service quota is exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The request was denied because of request throttling. Retry the request.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>A parameter is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeregisterIdentityProviderRequest {
  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;
}

/**
 * <p>The registered identity provider’s product related configuration settings such as the
 *       subnets to provision VPC endpoints, and the security group ID that is associated with the VPC
 *       endpoints. The security group should permit inbound TCP port 1688 communication from resources
 *       in the VPC.</p>
 * @public
 */
export interface Settings {
  /**
   * <p>The subnets defined for the registered identity provider.</p>
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in
   *       your VPC and the VPC endpoint for activation servers.</p>
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
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>An object that details the registered identity provider’s product related configuration
   *       settings such as the subnets to provision VPC endpoints.</p>
   * @public
   */
  Settings: Settings | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>The status of an identity provider.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The failure message associated with an identity provider.</p>
   * @public
   */
  FailureMessage?: string | undefined;
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
   * <p>The user name from the identity provider for the user.</p>
   * @public
   */
  Username: string | undefined;

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
   * <p>The domain name of the user.</p>
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
 * <p>A filter name and value pair that is used to return more specific results from a describe
 *       operation. Filters can be used to match a set of resources by specific criteria, such as tags,
 *       attributes, or IDs.</p>
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
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * <p>Metadata that describes the list identity providers operation.</p>
   * @public
   */
  IdentityProviderSummaries: IdentityProviderSummary[] | undefined;

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>Metadata that describes the list instances operation.</p>
   * @public
   */
  InstanceSummaries?: InstanceSummary[] | undefined;

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProductSubscriptionsRequest {
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
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The summary of the user-based subscription products for a user.</p>
 * @public
 */
export interface ProductUserSummary {
  /**
   * <p>The user name from the identity provider of the user.</p>
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
   * <p>The status of a product for a user.</p>
   * @public
   */
  Status: string | undefined;

  /**
   * <p>The status message for a product for a user.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The domain name of the user.</p>
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
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
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
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * <p>Token for the next set of results.</p>
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
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterIdentityProviderRequest {
  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>The registered identity provider’s product related configuration settings such as the
   *       subnets to provision VPC endpoints.</p>
   * @public
   */
  Settings?: Settings | undefined;
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
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>The domain name of the user.</p>
   * @public
   */
  Domain?: string | undefined;
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
  Username: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>The domain name of the user.</p>
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
 * <p>Updates the registered identity provider’s product related configuration settings such as
 *       the subnets to provision VPC endpoints.</p>
 * @public
 */
export interface UpdateSettings {
  /**
   * <p>The ID of one or more subnets in which License Manager will create a VPC endpoint for products that
   *       require connectivity to activation servers.</p>
   * @public
   */
  AddSubnets: string[] | undefined;

  /**
   * <p>The ID of one or more subnets to remove.</p>
   * @public
   */
  RemoveSubnets: string[] | undefined;

  /**
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in
   *       your VPC and the VPC endpoints for activation servers.</p>
   * @public
   */
  SecurityGroupId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderSettingsRequest {
  /**
   * <p>Details about an identity provider.</p>
   * @public
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   * @public
   */
  Product: string | undefined;

  /**
   * <p>Updates the registered identity provider’s product related configuration settings. You can
   *       update any combination of settings in a single operation such as the:</p>
   *          <ul>
   *             <li>
   *                <p>Subnets which you want to add to provision VPC endpoints.</p>
   *             </li>
   *             <li>
   *                <p>Subnets which you want to remove the VPC endpoints from.</p>
   *             </li>
   *             <li>
   *                <p>Security group ID which permits traffic to the VPC endpoints.</p>
   *             </li>
   *          </ul>
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
