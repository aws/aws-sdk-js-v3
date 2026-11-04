// smithy-typescript generated code
import type {
  LinuxSubscriptionsDiscovery,
  Operator,
  OrganizationIntegration,
  Status,
  SubscriptionProviderSource,
  SubscriptionProviderStatus,
} from "./enums";

/**
 * @public
 */
export interface DeregisterSubscriptionProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the subscription provider resource to deregister.
   *
   * @public
   */
  SubscriptionProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterSubscriptionProviderResponse {}

/**
 * A filter object that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria.
 *
 * @public
 */
export interface Filter {
  /**
   * The type of name to filter by.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * One or more values for the name to filter by.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * An operator for filtering results.
   *
   * @public
   */
  Operator?: Operator | undefined;
}

/**
 * @public
 */
export interface GetRegisteredSubscriptionProviderRequest {
  /**
   * The Amazon Resource Name (ARN) of the BYOL registration resource to get details for.
   *
   * @public
   */
  SubscriptionProviderArn: string | undefined;
}

/**
 * @public
 */
export interface GetRegisteredSubscriptionProviderResponse {
  /**
   * The Amazon Resource Name (ARN) for the BYOL registration resource specified in the request.
   *
   * @public
   */
  SubscriptionProviderArn?: string | undefined;

  /**
   * The subscription provider for the BYOL registration resource specified in the request.
   *
   * @public
   */
  SubscriptionProviderSource?: SubscriptionProviderSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the third-party access secret stored in Secrets Manager for the BYOL registration resource specified in the request.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The status of the Linux subscription provider access token from the last successful subscription data request.
   *
   * @public
   */
  SubscriptionProviderStatus?: SubscriptionProviderStatus | undefined;

  /**
   * The detailed message from your subscription provider token status.
   *
   * @public
   */
  SubscriptionProviderStatusMessage?: string | undefined;

  /**
   * The timestamp from the last time License Manager retrieved subscription details from your registered third-party Linux subscription provider.
   *
   * @public
   */
  LastSuccessfulDataRetrievalTime?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceSettingsRequest {}

/**
 * Lists the settings defined for discovering Linux subscriptions.
 *
 * @public
 */
export interface LinuxSubscriptionsDiscoverySettings {
  /**
   * The Regions in which to discover data for Linux subscriptions.
   *
   * @public
   */
  SourceRegions: string[] | undefined;

  /**
   * Details if you have enabled resource discovery across your accounts in Organizations.
   *
   * @public
   */
  OrganizationIntegration: OrganizationIntegration | undefined;
}

/**
 * @public
 */
export interface GetServiceSettingsResponse {
  /**
   * Lists if discovery has been enabled for Linux subscriptions.
   *
   * @public
   */
  LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery | undefined;

  /**
   * Lists the settings defined for Linux subscriptions discovery. The settings include if Organizations integration has been enabled, and which Regions data will be aggregated from.
   *
   * @public
   */
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings | undefined;

  /**
   * Indicates the status of Linux subscriptions settings being applied.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * A message which details the Linux subscriptions service settings current status.
   *
   * @public
   */
  StatusMessage?: Record<string, string> | undefined;

  /**
   * The Region in which License Manager displays the aggregated data for Linux subscriptions.
   *
   * @public
   */
  HomeRegions?: string[] | undefined;
}

/**
 * Details discovered information about a running instance using Linux subscriptions.
 *
 * @public
 */
export interface Instance {
  /**
   * The AMI ID used to launch the instance.
   *
   * @public
   */
  AmiId?: string | undefined;

  /**
   * The instance ID of the resource.
   *
   * @public
   */
  InstanceID?: string | undefined;

  /**
   * The instance type of the resource.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The account ID which owns the instance.
   *
   * @public
   */
  AccountID?: string | undefined;

  /**
   * The status of the instance.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The Region the instance is running in.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The usage operation of the instance. For more information, see For more information, see [Usage operation values](https://docs.aws.amazon.com/license-manager/latest/userguide/linux-subscriptions-usage-operation.html) in the *License Manager User Guide*.
   *
   * @public
   */
  UsageOperation?: string | undefined;

  /**
   * The product code for the instance. For more information, see [Usage operation values](https://docs.aws.amazon.com/license-manager/latest/userguide/linux-subscriptions-usage-operation.html) in the *License Manager User Guide* .
   *
   * @public
   */
  ProductCode?: string[] | undefined;

  /**
   * The time in which the last discovery updated the instance details.
   *
   * @public
   */
  LastUpdatedTime?: string | undefined;

  /**
   * The name of the license subscription that the instance uses.
   *
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * The operating system software version that runs on your instance.
   *
   * @public
   */
  OsVersion?: string | undefined;

  /**
   * The timestamp when you registered the third-party Linux subscription provider for the subscription that the instance uses.
   *
   * @public
   */
  SubscriptionProviderCreateTime?: string | undefined;

  /**
   * The timestamp from the last time that the instance synced with the registered third-party Linux subscription provider.
   *
   * @public
   */
  SubscriptionProviderUpdateTime?: string | undefined;

  /**
   * Indicates that you have two different license subscriptions for the same software on your instance.
   *
   * @public
   */
  DualSubscription?: string | undefined;

  /**
   * Indicates that your instance uses a BYOL license subscription from a third-party Linux subscription provider that you've registered with License Manager.
   *
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
   * An array of structures that you can use to filter the results by your specified criteria. For example, you can specify `Region` in the `Name`, with the `contains` operator to list all subscriptions that match a partial string in the `Value`, such as `us-west`.
   *
   * For each filter, you can specify one of the following values for the `Name` key to streamline results:
   *
   * - `AccountID`
   * - `AmiID`
   * - `DualSubscription`
   * - `InstanceID`
   * - `InstanceType`
   * - `ProductCode`
   * - `Region`
   * - `Status`
   * - `UsageOperation`
   *
   * For each filter, you can use one of the following `Operator` values to define the behavior of the filter:
   *
   * - `contains`
   * - `equals`
   * - `Notequal`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum items to return in a request.
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
}

/**
 * @public
 */
export interface ListLinuxSubscriptionInstancesResponse {
  /**
   * An array that contains instance objects.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
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
   * An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. For example, you can filter by the name of `Subscription` with an optional operator to see subscriptions that match, partially match, or don't match a certain subscription's name.
   *
   * The valid names for this filter are:
   *
   * - `Subscription`
   *
   * The valid Operators for this filter are:
   *
   * - `contains`
   * - `equals`
   * - `Notequal`
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The maximum items to return in a request.
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
}

/**
 * An object which details a discovered Linux subscription.
 *
 * @public
 */
export interface Subscription {
  /**
   * The name of the subscription.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of subscription. The type can be subscription-included with Amazon EC2, Bring Your Own Subscription model (BYOS), or from the Amazon Web Services Marketplace. Certain subscriptions may use licensing from the Amazon Web Services Marketplace as well as OS licensing from Amazon EC2 or BYOS.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The total amount of running instances using this subscription.
   *
   * @public
   */
  InstanceCount?: number | undefined;
}

/**
 * @public
 */
export interface ListLinuxSubscriptionsResponse {
  /**
   * An array that contains subscription objects.
   *
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

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
export interface ListRegisteredSubscriptionProvidersRequest {
  /**
   * To filter your results, specify which subscription providers to return in the list.
   *
   * @public
   */
  SubscriptionProviderSources?: SubscriptionProviderSource[] | undefined;

  /**
   * The maximum items to return in a request.
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
}

/**
 * A third-party provider for operating system (OS) platform software and license subscriptions, such as Red Hat. When you register a third-party Linux subscription provider, License Manager can get subscription data from the registered provider.
 *
 * @public
 */
export interface RegisteredSubscriptionProvider {
  /**
   * The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered.
   *
   * @public
   */
  SubscriptionProviderArn?: string | undefined;

  /**
   * A supported third-party Linux subscription provider. License Manager currently supports Red Hat subscriptions.
   *
   * @public
   */
  SubscriptionProviderSource?: SubscriptionProviderSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret that stores your registered Linux subscription provider access token. For RHEL account subscriptions, this is the offline token.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * Indicates the status of your registered Linux subscription provider access token from the last time License Manager retrieved subscription data. For RHEL account subscriptions, this is the status of the offline token.
   *
   * @public
   */
  SubscriptionProviderStatus?: SubscriptionProviderStatus | undefined;

  /**
   * A detailed message that's associated with your BYOL subscription provider token status.
   *
   * @public
   */
  SubscriptionProviderStatusMessage?: string | undefined;

  /**
   * The timestamp from the last time that License Manager accessed third-party subscription data for your account from your registered Linux subscription provider.
   *
   * @public
   */
  LastSuccessfulDataRetrievalTime?: string | undefined;
}

/**
 * @public
 */
export interface ListRegisteredSubscriptionProvidersResponse {
  /**
   * The list of BYOL registration resources that fit the criteria you specified in the request.
   *
   * @public
   */
  RegisteredSubscriptionProviders?: RegisteredSubscriptionProvider[] | undefined;

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
   * The Amazon Resource Name (ARN) of the resource for which to list metadata tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The metadata tags for the requested resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterSubscriptionProviderRequest {
  /**
   * The supported Linux subscription provider to register.
   *
   * @public
   */
  SubscriptionProviderSource: SubscriptionProviderSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the secret where you've stored your subscription provider's access token. For RHEL subscriptions managed through the Red Hat Subscription Manager (RHSM), the secret contains your Red Hat Offline token.
   *
   * @public
   */
  SecretArn: string | undefined;

  /**
   * The metadata tags to assign to your registered Linux subscription provider resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterSubscriptionProviderResponse {
  /**
   * The Linux subscription provider that you registered.
   *
   * @public
   */
  SubscriptionProviderSource?: SubscriptionProviderSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered.
   *
   * @public
   */
  SubscriptionProviderArn?: string | undefined;

  /**
   * Indicates the status of the registration action for the Linux subscription provider that you requested.
   *
   * @public
   */
  SubscriptionProviderStatus?: SubscriptionProviderStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource to which to add the specified metadata tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The metadata tags to assign to the Amazon Web Services resource. Tags are formatted as key value pairs.
   *
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
   * The Amazon Resource Name (ARN) of the Amazon Web Services resource to remove the metadata tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of metadata tag keys to remove from the requested resource.
   *
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
   * Describes if the discovery of Linux subscriptions is enabled.
   *
   * @public
   */
  LinuxSubscriptionsDiscovery: LinuxSubscriptionsDiscovery | undefined;

  /**
   * The settings defined for Linux subscriptions discovery. The settings include if Organizations integration has been enabled, and which Regions data will be aggregated from.
   *
   * @public
   */
  LinuxSubscriptionsDiscoverySettings: LinuxSubscriptionsDiscoverySettings | undefined;

  /**
   * Describes if updates are allowed to the service settings for Linux subscriptions. If you allow updates, you can aggregate Linux subscription data in more than one home Region.
   *
   * @public
   */
  AllowUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateServiceSettingsResponse {
  /**
   * Lists if discovery has been enabled for Linux subscriptions.
   *
   * @public
   */
  LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery | undefined;

  /**
   * The settings defined for Linux subscriptions discovery. The settings include if Organizations integration has been enabled, and which Regions data will be aggregated from.
   *
   * @public
   */
  LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings | undefined;

  /**
   * Indicates the status of Linux subscriptions settings being applied.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * A message which details the Linux subscriptions service settings current status.
   *
   * @public
   */
  StatusMessage?: Record<string, string> | undefined;

  /**
   * The Region in which License Manager displays the aggregated data for Linux subscriptions.
   *
   * @public
   */
  HomeRegions?: string[] | undefined;
}
