// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LicenseManagerUserSubscriptionsServiceException as __BaseException } from "./LicenseManagerUserSubscriptionsServiceException";

/**
 * @public
 * <p>You don't have sufficient access to perform this action.</p>
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
 * @public
 * <p>Details about an Active Directory identity provider.</p>
 */
export interface ActiveDirectoryIdentityProvider {
  /**
   * @public
   * <p>The directory ID for an Active Directory identity provider.</p>
   */
  DirectoryId?: string;
}

/**
 * @public
 * <p>Details about an identity provider.</p>
 */
export type IdentityProvider = IdentityProvider.ActiveDirectoryIdentityProviderMember | IdentityProvider.$UnknownMember;

/**
 * @public
 */
export namespace IdentityProvider {
  /**
   * @public
   * <p>An object that details an Active Directory identity provider.</p>
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
   * @public
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identity provider of the user.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

/**
 * @public
 * <p>Describes users of an EC2 instance providing user-based subscriptions.</p>
 */
export interface InstanceUserSummary {
  /**
   * @public
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The status of a user associated with an EC2 instance.</p>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The status message for users of an EC2 instance.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The domain name of the user.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The date a user was associated with an EC2 instance.</p>
   */
  AssociationDate?: string;

  /**
   * @public
   * <p>The date a user was disassociated from an EC2 instance.</p>
   */
  DisassociationDate?: string;
}

/**
 * @public
 */
export interface AssociateUserResponse {
  /**
   * @public
   * <p>Metadata that describes the associate user operation.</p>
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
 * @public
 * <p>The request couldn't be completed because it conflicted with the current state of the
 *       resource.</p>
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
 * @public
 * <p>An exception occurred with the service.</p>
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
 * @public
 * <p>The resource couldn't be found.</p>
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
 * @public
 * <p>The request failed because a service quota is exceeded.</p>
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
 * @public
 * <p>The request was denied because of request throttling. Retry the request.</p>
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
 * @public
 * <p>A parameter is not valid.</p>
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
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;
}

/**
 * @public
 * <p>The registered identity provider’s product related configuration settings such as the
 *       subnets to provision VPC endpoints, and the security group ID that is associated with the VPC
 *       endpoints. The security group should permit inbound TCP port 1688 communication from resources
 *       in the VPC.</p>
 */
export interface Settings {
  /**
   * @public
   * <p>The subnets defined for the registered identity provider.</p>
   */
  Subnets: string[] | undefined;

  /**
   * @public
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in
   *       your VPC and the VPC endpoint for activation servers.</p>
   */
  SecurityGroupId: string | undefined;
}

/**
 * @public
 * <p>Describes an identity provider.</p>
 */
export interface IdentityProviderSummary {
  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>An object that details the registered identity provider’s product related configuration
   *       settings such as the subnets to provision VPC endpoints.</p>
   */
  Settings: Settings | undefined;

  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * @public
   * <p>The status of an identity provider.</p>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The failure message associated with an identity provider.</p>
   */
  FailureMessage?: string;
}

/**
 * @public
 */
export interface DeregisterIdentityProviderResponse {
  /**
   * @public
   * <p>Metadata that describes the results of an identity provider operation.</p>
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

/**
 * @public
 */
export interface DisassociateUserRequest {
  /**
   * @public
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

/**
 * @public
 */
export interface DisassociateUserResponse {
  /**
   * @public
   * <p>Metadata that describes the associate user operation.</p>
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
 * @public
 * <p>A filter name and value pair that is used to return more specific results from a describe
 *       operation. Filters can be used to match a set of resources by specific criteria, such as tags,
 *       attributes, or IDs.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of an attribute to use as a filter.</p>
   */
  Attribute?: string;

  /**
   * @public
   * <p>The type of search (For example, eq, geq, leq)</p>
   */
  Operation?: string;

  /**
   * @public
   * <p>Value of the filter.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Describes an EC2 instance providing user-based subscriptions.</p>
 */
export interface InstanceSummary {
  /**
   * @public
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The status of an EC2 instance resource.</p>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>A list of provided user-based subscription products.</p>
   */
  Products: string[] | undefined;

  /**
   * @public
   * <p>The date of the last status check.</p>
   */
  LastStatusCheckDate?: string;

  /**
   * @public
   * <p>The status message for an EC2 instance.</p>
   */
  StatusMessage?: string;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * @public
   * <p>Metadata that describes the list identity providers operation.</p>
   */
  IdentityProviderSummaries: IdentityProviderSummary[] | undefined;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstancesRequest {
  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListInstancesResponse {
  /**
   * @public
   * <p>Metadata that describes the list instances operation.</p>
   */
  InstanceSummaries?: InstanceSummary[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProductSubscriptionsRequest {
  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The summary of the user-based subscription products for a user.</p>
 */
export interface ProductUserSummary {
  /**
   * @public
   * <p>The user name from the identity provider of the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The status of a product for a user.</p>
   */
  Status: string | undefined;

  /**
   * @public
   * <p>The status message for a product for a user.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The domain name of the user.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The start date of a subscription.</p>
   */
  SubscriptionStartDate?: string;

  /**
   * @public
   * <p>The end date of a subscription.</p>
   */
  SubscriptionEndDate?: string;
}

/**
 * @public
 */
export interface ListProductSubscriptionsResponse {
  /**
   * @public
   * <p>Metadata that describes the list product subscriptions operation.</p>
   */
  ProductUserSummaries?: ProductUserSummary[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserAssociationsRequest {
  /**
   * @public
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   */
  Filters?: Filter[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserAssociationsResponse {
  /**
   * @public
   * <p>Metadata that describes the list user association operation.</p>
   */
  InstanceUserSummaries?: InstanceUserSummary[];

  /**
   * @public
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RegisterIdentityProviderRequest {
  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * @public
   * <p>The registered identity provider’s product related configuration settings such as the
   *       subnets to provision VPC endpoints.</p>
   */
  Settings?: Settings;
}

/**
 * @public
 */
export interface RegisterIdentityProviderResponse {
  /**
   * @public
   * <p>Metadata that describes the results of an identity provider operation.</p>
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

/**
 * @public
 */
export interface StartProductSubscriptionRequest {
  /**
   * @public
   * <p>The user name from the identity provider of the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * @public
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

/**
 * @public
 */
export interface StartProductSubscriptionResponse {
  /**
   * @public
   * <p>Metadata that describes the start product subscription operation.</p>
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

/**
 * @public
 */
export interface StopProductSubscriptionRequest {
  /**
   * @public
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * @public
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

/**
 * @public
 */
export interface StopProductSubscriptionResponse {
  /**
   * @public
   * <p>Metadata that describes the start product subscription operation.</p>
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

/**
 * @public
 * <p>Updates the registered identity provider’s product related configuration settings such as
 *       the subnets to provision VPC endpoints.</p>
 */
export interface UpdateSettings {
  /**
   * @public
   * <p>The ID of one or more subnets in which License Manager will create a VPC endpoint for products that
   *       require connectivity to activation servers.</p>
   */
  AddSubnets: string[] | undefined;

  /**
   * @public
   * <p>The ID of one or more subnets to remove.</p>
   */
  RemoveSubnets: string[] | undefined;

  /**
   * @public
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in
   *       your VPC and the VPC endpoints for activation servers.</p>
   */
  SecurityGroupId?: string;
}

/**
 * @public
 */
export interface UpdateIdentityProviderSettingsRequest {
  /**
   * @public
   * <p>Details about an identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * @public
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * @public
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
   */
  UpdateSettings: UpdateSettings | undefined;
}

/**
 * @public
 */
export interface UpdateIdentityProviderSettingsResponse {
  /**
   * @public
   * <p>Describes an identity provider.</p>
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}
