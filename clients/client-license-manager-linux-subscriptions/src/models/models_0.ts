// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LicenseManagerLinuxSubscriptionsServiceException as __BaseException } from "./LicenseManagerLinuxSubscriptionsServiceException";

/**
 * @public
 */
export interface DeregisterSubscriptionProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the subscription provider resource to deregister.</p>
   * @public
   */
  SubscriptionProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterSubscriptionProviderResponse {}

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
 * <p>Unable to find the requested Amazon Web Services resource.</p>
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
  Name?: string | undefined;

  /**
   * <p>One or more values for the name to filter by.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>An operator for filtering results.</p>
   * @public
   */
  Operator?: Operator | undefined;
}

/**
 * @public
 */
export interface GetRegisteredSubscriptionProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the BYOL registration resource to get details for.</p>
   * @public
   */
  SubscriptionProviderArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SubscriptionProviderSource = {
  /**
   * RedHat subscription provider namespace
   */
  RedHat: "RedHat",
} as const;

/**
 * @public
 */
export type SubscriptionProviderSource = (typeof SubscriptionProviderSource)[keyof typeof SubscriptionProviderSource];

/**
 * @public
 * @enum
 */
export const SubscriptionProviderStatus = {
  /**
   * ACTIVE status
   */
  ACTIVE: "ACTIVE",
  /**
   * INVALID status
   */
  INVALID: "INVALID",
  /**
   * PENDING status
   */
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type SubscriptionProviderStatus = (typeof SubscriptionProviderStatus)[keyof typeof SubscriptionProviderStatus];

/**
 * @public
 */
export interface GetRegisteredSubscriptionProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the BYOL registration resource specified in the request.</p>
   * @public
   */
  SubscriptionProviderArn?: string | undefined;

  /**
   * <p>The subscription provider for the BYOL registration resource specified
   * 			in the request.</p>
   * @public
   */
  SubscriptionProviderSource?: SubscriptionProviderSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the third-party access secret stored in Secrets Manager for the BYOL
   * 			registration resource specified in the request.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The status of the Linux subscription provider access token from the last
   * 			successful subscription data request.</p>
   * @public
   */
  SubscriptionProviderStatus?: SubscriptionProviderStatus | undefined;

  /**
   * <p>The detailed message from your subscription provider token status.</p>
   * @public
   */
  SubscriptionProviderStatusMessage?: string | undefined;

  /**
   * <p>The timestamp from the last time License Manager retrieved subscription details
   * 			from your registered third-party Linux subscription provider.</p>
   * @public
   */
  LastSuccessfulDataRetrievalTime?: string | undefined;
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
  LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery | undefined;

  /**
   * <p>Lists the settings defined for Linux subscriptions discovery. The settings include if
   *       Organizations integration has been enabled, and which Regions data will be aggregated from.</p>
   * @public
   */
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings | undefined;

  /**
   * <p>Indicates the status of Linux subscriptions settings being applied.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>A message which details the Linux subscriptions service settings current status.</p>
   * @public
   */
  StatusMessage?: Record<string, string> | undefined;

  /**
   * <p>The Region in which License Manager displays the aggregated data for Linux
   *       subscriptions.</p>
   * @public
   */
  HomeRegions?: string[] | undefined;
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
  AmiId?: string | undefined;

  /**
   * <p>The instance ID of the resource.</p>
   * @public
   */
  InstanceID?: string | undefined;

  /**
   * <p>The instance type of the resource.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The account ID which owns the instance.</p>
   * @public
   */
  AccountID?: string | undefined;

  /**
   * <p>The status of the instance.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The Region the instance is running in.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The usage operation of the instance. For more information, see For more information, see
   *         <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/linux-subscriptions-usage-operation.html">Usage
   *         operation values</a> in the <i>License Manager User Guide</i>.</p>
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * <p>The product code for the instance. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/linux-subscriptions-usage-operation.html">Usage
   *         operation values</a> in the <i>License Manager User Guide</i> .</p>
   * @public
   */
  ProductCode?: string[] | undefined;

  /**
   * <p>The time in which the last discovery updated the instance details.</p>
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * <p>The name of the license subscription that the instance uses.</p>
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * <p>The operating system software version that runs on your instance.</p>
   * @public
   */
  OsVersion?: string | undefined;

  /**
   * <p>The timestamp when you registered the third-party Linux subscription
   * 			provider for the subscription that the instance uses.</p>
   * @public
   */
  SubscriptionProviderCreateTime?: string | undefined;

  /**
   * <p>The timestamp from the last time that the instance synced with the registered
   * 			third-party Linux subscription provider.</p>
   * @public
   */
  SubscriptionProviderUpdateTime?: string | undefined;

  /**
   * <p>Indicates that you have two different license subscriptions for
   * 			the same software on your instance.</p>
   * @public
   */
  DualSubscription?: string | undefined;

  /**
   * <p>Indicates that your instance uses a BYOL license subscription from
   * 			a third-party Linux subscription provider that you've registered with License Manager.</p>
   * @public
   */
  RegisteredWithSubscriptionProvider?: string | undefined;
}

/**
 * NextToken length limit is half of ddb accepted limit.
 * Increase this limit if parameters in request increases.
 * @public
 */
export interface ListLinuxSubscriptionInstancesRequest {
  /**
   * <p>An array of structures that you can use to filter the results by your specified criteria.
   *     	For example, you can specify <code>Region</code> in the <code>Name</code>, with the
   *     	<code>contains</code> operator to list all subscriptions that match a partial string in the
   *     	<code>Value</code>, such as <code>us-west</code>.</p>
   *          <p>For each filter, you can specify one of the following values for the <code>Name</code> key
   *     	to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AccountID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmiID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DualSubscription</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstanceID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstanceType</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ProductCode</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Region</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UsageOperation</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For each filter, you can use one of the following <code>Operator</code> values to
   *   		define the behavior of the filter:</p>
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
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This
   * 	is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLinuxSubscriptionInstancesResponse {
  /**
   * <p>An array that contains instance objects.</p>
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this
   * 	field isn't empty, there are additional elements that the service hasn't
   * 	included in this request. Use this token with the next request to retrieve
   * 	additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  Filters?: Filter[] | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This
   * 	is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  Name?: string | undefined;

  /**
   * <p>The type of subscription. The type can be subscription-included with Amazon EC2, Bring Your Own
   *       Subscription model (BYOS), or from the Amazon Web Services Marketplace. Certain subscriptions may use licensing from the
   *       Amazon Web Services Marketplace as well as OS licensing from Amazon EC2 or BYOS.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The total amount of running instances using this subscription.</p>
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface ListLinuxSubscriptionsResponse {
  /**
   * <p>An array that contains subscription objects.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this
   * 	field isn't empty, there are additional elements that the service hasn't
   * 	included in this request. Use this token with the next request to retrieve
   * 	additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegisteredSubscriptionProvidersRequest {
  /**
   * <p>To filter your results, specify which subscription providers to return
   * 			in the list.</p>
   * @public
   */
  SubscriptionProviderSources?: SubscriptionProviderSource[] | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. This
   * 	is the nextToken from a previously truncated response.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A third-party provider for operating system (OS) platform software and license
 * 			subscriptions, such as Red Hat. When you register a third-party Linux subscription
 * 			provider, License Manager can get subscription data from the registered provider.</p>
 * @public
 */
export interface RegisteredSubscriptionProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered.</p>
   * @public
   */
  SubscriptionProviderArn?: string | undefined;

  /**
   * <p>A supported third-party Linux subscription provider. License Manager currently supports
   * 			Red Hat subscriptions.</p>
   * @public
   */
  SubscriptionProviderSource?: SubscriptionProviderSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret that stores your registered Linux subscription provider
   * 			access token. For RHEL account subscriptions, this is the offline token.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>Indicates the status of your registered Linux subscription provider access token
   * 			from the last time License Manager retrieved subscription data. For RHEL account subscriptions,
   * 			this is the status of the offline token.</p>
   * @public
   */
  SubscriptionProviderStatus?: SubscriptionProviderStatus | undefined;

  /**
   * <p>A detailed message that's associated with your BYOL subscription
   * 			provider token status.</p>
   * @public
   */
  SubscriptionProviderStatusMessage?: string | undefined;

  /**
   * <p>The timestamp from the last time that License Manager accessed third-party subscription data
   * 			for your account from your registered Linux subscription provider.</p>
   * @public
   */
  LastSuccessfulDataRetrievalTime?: string | undefined;
}

/**
 * @public
 */
export interface ListRegisteredSubscriptionProvidersResponse {
  /**
   * <p>The list of BYOL registration resources that fit the criteria
   * 			you specified in the request.</p>
   * @public
   */
  RegisteredSubscriptionProviders?: RegisteredSubscriptionProvider[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this
   * 	field isn't empty, there are additional elements that the service hasn't
   * 	included in this request. Use this token with the next request to retrieve
   * 	additional objects.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list metadata tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The metadata tags for the requested resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterSubscriptionProviderRequest {
  /**
   * <p>The supported Linux subscription provider to register.</p>
   * @public
   */
  SubscriptionProviderSource: SubscriptionProviderSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the secret where you've stored your subscription provider's access token. For
   * 			RHEL subscriptions managed through the Red Hat Subscription Manager (RHSM), the secret contains
   * 			your Red Hat Offline token.</p>
   * @public
   */
  SecretArn: string | undefined;

  /**
   * <p>The metadata tags to assign to your registered Linux subscription provider
   * 			resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterSubscriptionProviderResponse {
  /**
   * <p>The Linux subscription provider that you registered.</p>
   * @public
   */
  SubscriptionProviderSource?: SubscriptionProviderSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered.</p>
   * @public
   */
  SubscriptionProviderArn?: string | undefined;

  /**
   * <p>Indicates the status of the registration action for the Linux subscription provider
   * 			that you requested.</p>
   * @public
   */
  SubscriptionProviderStatus?: SubscriptionProviderStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services resource to which to add the specified
   * 			metadata tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The metadata tags to assign to the Amazon Web Services resource. Tags are
   * 			formatted as key value pairs.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services resource to remove the metadata tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of metadata tag keys to remove from the requested
   * 			resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

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
  AllowUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSettingsResponse {
  /**
   * <p>Lists if discovery has been enabled for Linux subscriptions.</p>
   * @public
   */
  LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery | undefined;

  /**
   * <p>The settings defined for Linux subscriptions discovery. The settings include if Organizations
   *       integration has been enabled, and which Regions data will be aggregated from.</p>
   * @public
   */
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings | undefined;

  /**
   * <p>Indicates the status of Linux subscriptions settings being applied.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>A message which details the Linux subscriptions service settings current status.</p>
   * @public
   */
  StatusMessage?: Record<string, string> | undefined;

  /**
   * <p>The Region in which License Manager displays the aggregated data for Linux
   *       subscriptions.</p>
   * @public
   */
  HomeRegions?: string[] | undefined;
}
