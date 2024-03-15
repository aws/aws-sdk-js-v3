// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LicenseManagerLinuxSubscriptionsServiceException as __BaseException } from "./LicenseManagerLinuxSubscriptionsServiceException";

/**
 * @public
 * @enum
 */
export const Operator = {
  /**
   * Contains operator
   */
  CONTAINS: "Contains",
  /**
   * Equal operator
   */
  EQUAL: "Equal",
  /**
   * Not equal operator
   */
  NOT_EQUAL: "NotEqual",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * <p>A filter object that is used to return more specific results from a describe operation.
 *       Filters can be used to match a set of resources by specific criteria.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The type of name to filter by.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>One or more values for the name to filter by.</p>
   * @public
   */
  Values?: string[];

  /**
   * <p>An operator for filtering results.</p>
   * @public
   */
  Operator?: Operator;
}

/**
 * @public
 */
export interface GetServiceSettingsRequest {}

/**
 * @public
 * @enum
 */
export const LinuxSubscriptionsDiscovery = {
  /**
   * Disabled LinuxSubscriptionsDiscovery
   */
  Disabled: "Disabled",
  /**
   * Enabled LinuxSubscriptionsDiscovery
   */
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type LinuxSubscriptionsDiscovery =
  (typeof LinuxSubscriptionsDiscovery)[keyof typeof LinuxSubscriptionsDiscovery];

/**
 * @public
 * @enum
 */
export const OrganizationIntegration = {
  /**
   * Disabled OrganizationIntegration
   */
  Disabled: "Disabled",
  /**
   * Enabled OrganizationIntegration
   */
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type OrganizationIntegration = (typeof OrganizationIntegration)[keyof typeof OrganizationIntegration];

/**
 * <p>Lists the settings defined for discovering Linux subscriptions.</p>
 * @public
 */
export interface LinuxSubscriptionsDiscoverySettings {
  /**
   * <p>The Regions in which to discover data for Linux subscriptions.</p>
   * @public
   */
  SourceRegions: string[] | undefined;

  /**
   * <p>Details if you have enabled resource discovery across your accounts in Organizations.</p>
   * @public
   */
  OrganizationIntegration: OrganizationIntegration | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  /**
   * Completed status
   */
  Completed: "Completed",
  /**
   * Failed status
   */
  Failed: "Failed",
  /**
   * InProgress status
   */
  InProgress: "InProgress",
  /**
   * Successful status
   */
  Successful: "Successful",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface GetServiceSettingsResponse {
  /**
   * <p>Lists if discovery has been enabled for Linux subscriptions.</p>
   * @public
   */
  LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery;

  /**
   * <p>Lists the settings defined for Linux subscriptions discovery. The settings include if
   *       Organizations integration has been enabled, and which Regions data will be aggregated from.</p>
   * @public
   */
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;

  /**
   * <p>Indicates the status of Linux subscriptions settings being applied.</p>
   * @public
   */
  Status?: Status;

  /**
   * <p>A message which details the Linux subscriptions service settings current status.</p>
   * @public
   */
  StatusMessage?: Record<string, string>;

  /**
   * <p>The Region in which License Manager displays the aggregated data for Linux
   *       subscriptions.</p>
   * @public
   */
  HomeRegions?: string[];
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
 * <p>The request was denied due to request throttling.</p>
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
 * <p>The provided input is not valid. Try your request again.</p>
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
 * <p>Details discovered information about a running instance using Linux subscriptions.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The AMI ID used to launch the instance.</p>
   * @public
   */
  AmiId?: string;

  /**
   * <p>The instance ID of the resource.</p>
   * @public
   */
  InstanceID?: string;

  /**
   * <p>The instance type of the resource.</p>
   * @public
   */
  InstanceType?: string;

  /**
   * <p>The account ID which owns the instance.</p>
   * @public
   */
  AccountID?: string;

  /**
   * <p>The status of the instance.</p>
   * @public
   */
  Status?: string;

  /**
   * <p>The Region the instance is running in.</p>
   * @public
   */
  Region?: string;

  /**
   * <p>The usage operation of the instance. For more information, see For more information, see
   *         <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/linux-subscriptions-usage-operation.html">Usage
   *         operation values</a> in the <i>License Manager User Guide</i>.</p>
   * @public
   */
  UsageOperation?: string;

  /**
   * <p>The product code for the instance. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/linux-subscriptions-usage-operation.html">Usage
   *         operation values</a> in the <i>License Manager User Guide</i> .</p>
   * @public
   */
  ProductCode?: string[];

  /**
   * <p>The time in which the last discovery updated the instance details.</p>
   * @public
   */
  LastUpdatedTime?: string;

  /**
   * <p>The name of the subscription being used by the instance.</p>
   * @public
   */
  SubscriptionName?: string;
}

/**
 * NextToken length limit is half of ddb accepted limit.
 * Increase this limit if parameters in request increases.
 * @public
 */
export interface ListLinuxSubscriptionInstancesRequest {
  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify. For example, you can filter by the name of
   *         <code>AmiID</code> with an optional operator to see subscriptions that match, partially
   *       match, or don't match a certain Amazon Machine Image (AMI) ID.</p>
   *          <p>The valid names for this filter are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AmiID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstanceID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccountID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Region</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UsageOperation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProductCode</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstanceType</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The valid Operators for this filter are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>contains</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>equals</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Notequal</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLinuxSubscriptionInstancesResponse {
  /**
   * <p>An array that contains instance objects.</p>
   * @public
   */
  Instances?: Instance[];

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * NextToken length limit is half of ddb accepted limit.
 * Increase this limit if parameters in request increases.
 * @public
 */
export interface ListLinuxSubscriptionsRequest {
  /**
   * <p>An array of structures that you can use to filter the results to those that match one or
   *       more sets of key-value pairs that you specify. For example, you can filter by the name of
   *         <code>Subscription</code> with an optional operator to see subscriptions that match,
   *       partially match, or don't match a certain subscription's name.</p>
   *          <p>The valid names for this filter are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Subscription</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The valid Operators for this filter are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>contains</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>equals</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Notequal</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[];

  /**
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>An object which details a discovered Linux subscription.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The name of the subscription.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of subscription. The type can be subscription-included with Amazon EC2, Bring Your Own
   *       Subscription model (BYOS), or from the Amazon Web Services Marketplace. Certain subscriptions may use licensing from the
   *       Amazon Web Services Marketplace as well as OS licensing from Amazon EC2 or BYOS.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The total amount of running instances using this subscription.</p>
   * @public
   */
  InstanceCount?: number;
}

/**
 * @public
 */
export interface ListLinuxSubscriptionsResponse {
  /**
   * <p>An array that contains subscription objects.</p>
   * @public
   */
  Subscriptions?: Subscription[];

  /**
   * <p>Token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface UpdateServiceSettingsRequest {
  /**
   * <p>Describes if the discovery of Linux subscriptions is enabled.</p>
   * @public
   */
  LinuxSubscriptionsDiscovery: LinuxSubscriptionsDiscovery | undefined;

  /**
   * <p>The settings defined for Linux subscriptions discovery. The settings include if Organizations
   *       integration has been enabled, and which Regions data will be aggregated from.</p>
   * @public
   */
  LinuxSubscriptionsDiscoverySettings: LinuxSubscriptionsDiscoverySettings | undefined;

  /**
   * <p>Describes if updates are allowed to the service settings for Linux subscriptions. If you
   *       allow updates, you can aggregate Linux subscription data in more than one home Region.</p>
   * @public
   */
  AllowUpdate?: boolean;
}

/**
 * @public
 */
export interface UpdateServiceSettingsResponse {
  /**
   * <p>Lists if discovery has been enabled for Linux subscriptions.</p>
   * @public
   */
  LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery;

  /**
   * <p>The settings defined for Linux subscriptions discovery. The settings include if Organizations
   *       integration has been enabled, and which Regions data will be aggregated from.</p>
   * @public
   */
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;

  /**
   * <p>Indicates the status of Linux subscriptions settings being applied.</p>
   * @public
   */
  Status?: Status;

  /**
   * <p>A message which details the Linux subscriptions service settings current status.</p>
   * @public
   */
  StatusMessage?: Record<string, string>;

  /**
   * <p>The Region in which License Manager displays the aggregated data for Linux
   *       subscriptions.</p>
   * @public
   */
  HomeRegions?: string[];
}
