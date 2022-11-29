// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { LicenseManagerUserSubscriptionsServiceException as __BaseException } from "./LicenseManagerUserSubscriptionsServiceException";

/**
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
 * <p>Details about an Active Directory identity provider.</p>
 */
export interface ActiveDirectoryIdentityProvider {
  /**
   * <p>The directory ID for an Active Directory identity provider.</p>
   */
  DirectoryId?: string;
}

/**
 * <p>Details about an identity provider.</p>
 */
export type IdentityProvider = IdentityProvider.ActiveDirectoryIdentityProviderMember | IdentityProvider.$UnknownMember;

export namespace IdentityProvider {
  /**
   * <p>An object that details an Active Directory identity provider.</p>
   */
  export interface ActiveDirectoryIdentityProviderMember {
    ActiveDirectoryIdentityProvider: ActiveDirectoryIdentityProvider;
    $unknown?: never;
  }

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

export interface AssociateUserRequest {
  /**
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identity provider of the user.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

/**
 * <p>Describes users of an EC2 instance providing user-based subscriptions.</p>
 */
export interface InstanceUserSummary {
  /**
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The status of a user associated with an EC2 instance.</p>
   */
  Status: string | undefined;

  /**
   * <p>The status message for users of an EC2 instance.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The domain name of the user.</p>
   */
  Domain?: string;

  /**
   * <p>The date a user was associated with an EC2 instance.</p>
   */
  AssociationDate?: string;

  /**
   * <p>The date a user was disassociated from an EC2 instance.</p>
   */
  DisassociationDate?: string;
}

export interface AssociateUserResponse {
  /**
   * <p>Metadata that describes the associate user operation.</p>
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
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

export interface DeregisterIdentityProviderRequest {
  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;
}

/**
 * <p>The registered identity provider’s product related configuration settings such as the
 *       subnets to provision VPC endpoints, and the security group ID that is associated with the VPC
 *       endpoints. The security group should permit inbound TCP port 1688 communication from resources
 *       in the VPC.</p>
 */
export interface Settings {
  /**
   * <p>The subnets defined for the registered identity provider.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in
   *       your VPC and the VPC endpoint for activation servers.</p>
   */
  SecurityGroupId: string | undefined;
}

/**
 * <p>Describes an identity provider.</p>
 */
export interface IdentityProviderSummary {
  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>An object that details the registered identity provider’s product related configuration
   *       settings such as the subnets to provision VPC endpoints.</p>
   */
  Settings: Settings | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * <p>The status of an identity provider.</p>
   */
  Status: string | undefined;

  /**
   * <p>The failure message associated with an identity provider.</p>
   */
  FailureMessage?: string;
}

export interface DeregisterIdentityProviderResponse {
  /**
   * <p>Metadata that describes the results of an identity provider operation.</p>
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

export interface DisassociateUserRequest {
  /**
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

export interface DisassociateUserResponse {
  /**
   * <p>Metadata that describes the associate user operation.</p>
   */
  InstanceUserSummary: InstanceUserSummary | undefined;
}

/**
 * <p>A filter name and value pair that is used to return more specific results from a describe
 *       operation. Filters can be used to match a set of resources by specific criteria, such as tags,
 *       attributes, or IDs.</p>
 */
export interface Filter {
  /**
   * <p>The name of an attribute to use as a filter.</p>
   */
  Attribute?: string;

  /**
   * <p>The type of search (For example, eq, geq, leq)</p>
   */
  Operation?: string;

  /**
   * <p>Value of the filter.</p>
   */
  Value?: string;
}

/**
 * <p>Describes an EC2 instance providing user-based subscriptions.</p>
 */
export interface InstanceSummary {
  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The status of an EC2 instance resource.</p>
   */
  Status: string | undefined;

  /**
   * <p>A list of provided user-based subscription products.</p>
   */
  Products: string[] | undefined;

  /**
   * <p>The date of the last status check.</p>
   */
  LastStatusCheckDate?: string;

  /**
   * <p>The status message for an EC2 instance.</p>
   */
  StatusMessage?: string;
}

export interface ListIdentityProvidersRequest {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListIdentityProvidersResponse {
  /**
   * <p>Metadata that describes the list identity providers operation.</p>
   */
  IdentityProviderSummaries: IdentityProviderSummary[] | undefined;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListInstancesRequest {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   */
  Filters?: Filter[];
}

export interface ListInstancesResponse {
  /**
   * <p>Metadata that describes the list instances operation.</p>
   */
  InstanceSummaries?: InstanceSummary[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListProductSubscriptionsRequest {
  /**
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The summary of the user-based subscription products for a user.</p>
 */
export interface ProductUserSummary {
  /**
   * <p>The user name from the identity provider of the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The status of a product for a user.</p>
   */
  Status: string | undefined;

  /**
   * <p>The status message for a product for a user.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The domain name of the user.</p>
   */
  Domain?: string;

  /**
   * <p>The start date of a subscription.</p>
   */
  SubscriptionStartDate?: string;

  /**
   * <p>The end date of a subscription.</p>
   */
  SubscriptionEndDate?: string;
}

export interface ListProductSubscriptionsResponse {
  /**
   * <p>Metadata that describes the list product subscriptions operation.</p>
   */
  ProductUserSummaries?: ProductUserSummary[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListUserAssociationsRequest {
  /**
   * <p>The ID of the EC2 instance, which provides user-based subscriptions.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify.</p>
   */
  Filters?: Filter[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListUserAssociationsResponse {
  /**
   * <p>Metadata that describes the list user association operation.</p>
   */
  InstanceUserSummaries?: InstanceUserSummary[];

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface RegisterIdentityProviderRequest {
  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * <p>The registered identity provider’s product related configuration settings such as the
   *       subnets to provision VPC endpoints.</p>
   */
  Settings?: Settings;
}

export interface RegisterIdentityProviderResponse {
  /**
   * <p>Metadata that describes the results of an identity provider operation.</p>
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

export interface StartProductSubscriptionRequest {
  /**
   * <p>The user name from the identity provider of the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

export interface StartProductSubscriptionResponse {
  /**
   * <p>Metadata that describes the start product subscription operation.</p>
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

export interface StopProductSubscriptionRequest {
  /**
   * <p>The user name from the identity provider for the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>An object that specifies details for the identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
   */
  Product: string | undefined;

  /**
   * <p>The domain name of the user.</p>
   */
  Domain?: string;
}

export interface StopProductSubscriptionResponse {
  /**
   * <p>Metadata that describes the start product subscription operation.</p>
   */
  ProductUserSummary: ProductUserSummary | undefined;
}

/**
 * <p>Updates the registered identity provider’s product related configuration settings such as
 *       the subnets to provision VPC endpoints.</p>
 */
export interface UpdateSettings {
  /**
   * <p>The ID of one or more subnets in which License Manager will create a VPC endpoint for products that
   *       require connectivity to activation servers.</p>
   */
  AddSubnets: string[] | undefined;

  /**
   * <p>The ID of one or more subnets to remove.</p>
   */
  RemoveSubnets: string[] | undefined;

  /**
   * <p>A security group ID that allows inbound TCP port 1688 communication between resources in
   *       your VPC and the VPC endpoints for activation servers.</p>
   */
  SecurityGroupId?: string;
}

export interface UpdateIdentityProviderSettingsRequest {
  /**
   * <p>Details about an identity provider.</p>
   */
  IdentityProvider: IdentityProvider | undefined;

  /**
   * <p>The name of the user-based subscription product.</p>
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
   */
  UpdateSettings: UpdateSettings | undefined;
}

export interface UpdateIdentityProviderSettingsResponse {
  /**
   * <p>Describes an identity provider.</p>
   */
  IdentityProviderSummary: IdentityProviderSummary | undefined;
}

/**
 * @internal
 */
export const ActiveDirectoryIdentityProviderFilterSensitiveLog = (obj: ActiveDirectoryIdentityProvider): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityProviderFilterSensitiveLog = (obj: IdentityProvider): any => {
  if (obj.ActiveDirectoryIdentityProvider !== undefined)
    return {
      ActiveDirectoryIdentityProvider: ActiveDirectoryIdentityProviderFilterSensitiveLog(
        obj.ActiveDirectoryIdentityProvider
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AssociateUserRequestFilterSensitiveLog = (obj: AssociateUserRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const InstanceUserSummaryFilterSensitiveLog = (obj: InstanceUserSummary): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const AssociateUserResponseFilterSensitiveLog = (obj: AssociateUserResponse): any => ({
  ...obj,
  ...(obj.InstanceUserSummary && {
    InstanceUserSummary: InstanceUserSummaryFilterSensitiveLog(obj.InstanceUserSummary),
  }),
});

/**
 * @internal
 */
export const DeregisterIdentityProviderRequestFilterSensitiveLog = (obj: DeregisterIdentityProviderRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const SettingsFilterSensitiveLog = (obj: Settings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityProviderSummaryFilterSensitiveLog = (obj: IdentityProviderSummary): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const DeregisterIdentityProviderResponseFilterSensitiveLog = (obj: DeregisterIdentityProviderResponse): any => ({
  ...obj,
  ...(obj.IdentityProviderSummary && {
    IdentityProviderSummary: IdentityProviderSummaryFilterSensitiveLog(obj.IdentityProviderSummary),
  }),
});

/**
 * @internal
 */
export const DisassociateUserRequestFilterSensitiveLog = (obj: DisassociateUserRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const DisassociateUserResponseFilterSensitiveLog = (obj: DisassociateUserResponse): any => ({
  ...obj,
  ...(obj.InstanceUserSummary && {
    InstanceUserSummary: InstanceUserSummaryFilterSensitiveLog(obj.InstanceUserSummary),
  }),
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceSummaryFilterSensitiveLog = (obj: InstanceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityProvidersRequestFilterSensitiveLog = (obj: ListIdentityProvidersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityProvidersResponseFilterSensitiveLog = (obj: ListIdentityProvidersResponse): any => ({
  ...obj,
  ...(obj.IdentityProviderSummaries && {
    IdentityProviderSummaries: obj.IdentityProviderSummaries.map((item) =>
      IdentityProviderSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ListInstancesRequestFilterSensitiveLog = (obj: ListInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInstancesResponseFilterSensitiveLog = (obj: ListInstancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProductSubscriptionsRequestFilterSensitiveLog = (obj: ListProductSubscriptionsRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const ProductUserSummaryFilterSensitiveLog = (obj: ProductUserSummary): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const ListProductSubscriptionsResponseFilterSensitiveLog = (obj: ListProductSubscriptionsResponse): any => ({
  ...obj,
  ...(obj.ProductUserSummaries && {
    ProductUserSummaries: obj.ProductUserSummaries.map((item) => ProductUserSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListUserAssociationsRequestFilterSensitiveLog = (obj: ListUserAssociationsRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const ListUserAssociationsResponseFilterSensitiveLog = (obj: ListUserAssociationsResponse): any => ({
  ...obj,
  ...(obj.InstanceUserSummaries && {
    InstanceUserSummaries: obj.InstanceUserSummaries.map((item) => InstanceUserSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RegisterIdentityProviderRequestFilterSensitiveLog = (obj: RegisterIdentityProviderRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const RegisterIdentityProviderResponseFilterSensitiveLog = (obj: RegisterIdentityProviderResponse): any => ({
  ...obj,
  ...(obj.IdentityProviderSummary && {
    IdentityProviderSummary: IdentityProviderSummaryFilterSensitiveLog(obj.IdentityProviderSummary),
  }),
});

/**
 * @internal
 */
export const StartProductSubscriptionRequestFilterSensitiveLog = (obj: StartProductSubscriptionRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const StartProductSubscriptionResponseFilterSensitiveLog = (obj: StartProductSubscriptionResponse): any => ({
  ...obj,
  ...(obj.ProductUserSummary && { ProductUserSummary: ProductUserSummaryFilterSensitiveLog(obj.ProductUserSummary) }),
});

/**
 * @internal
 */
export const StopProductSubscriptionRequestFilterSensitiveLog = (obj: StopProductSubscriptionRequest): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const StopProductSubscriptionResponseFilterSensitiveLog = (obj: StopProductSubscriptionResponse): any => ({
  ...obj,
  ...(obj.ProductUserSummary && { ProductUserSummary: ProductUserSummaryFilterSensitiveLog(obj.ProductUserSummary) }),
});

/**
 * @internal
 */
export const UpdateSettingsFilterSensitiveLog = (obj: UpdateSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIdentityProviderSettingsRequestFilterSensitiveLog = (
  obj: UpdateIdentityProviderSettingsRequest
): any => ({
  ...obj,
  ...(obj.IdentityProvider && { IdentityProvider: IdentityProviderFilterSensitiveLog(obj.IdentityProvider) }),
});

/**
 * @internal
 */
export const UpdateIdentityProviderSettingsResponseFilterSensitiveLog = (
  obj: UpdateIdentityProviderSettingsResponse
): any => ({
  ...obj,
  ...(obj.IdentityProviderSummary && {
    IdentityProviderSummary: IdentityProviderSummaryFilterSensitiveLog(obj.IdentityProviderSummary),
  }),
});
