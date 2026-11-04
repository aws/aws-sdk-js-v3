// smithy-typescript generated code
import type {
  AccessStatus,
  AccountContactType,
  AggregationDuration,
  AggregationEventType,
  ChannelAssociationOverrideOption,
  ChannelType,
  EventRuleStatus,
  EventStatus,
  LocaleCode,
  MediaElementType,
  MemberAccountNotificationConfigurationStatus,
  NotificationConfigurationStatus,
  NotificationConfigurationSubtype,
  NotificationHubStatus,
  NotificationType,
  SchemaVersion,
  TextPartType,
} from "./enums";

/**
 * Provides detailed information about the dimensions used for event summarization and aggregation.
 *
 * @public
 */
export interface SummarizationDimensionDetail {
  /**
   * The name of the SummarizationDimensionDetail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Value of the property used to summarize aggregated events.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Provides detailed information about the dimensions used for aggregation.
 *
 * @public
 */
export interface AggregationDetail {
  /**
   * Properties used to summarize aggregated events.
   *
   * @public
   */
  summarizationDimensions?: SummarizationDimensionDetail[] | undefined;
}

/**
 * Key-value collection that indicate how notifications are grouped.
 *
 * @public
 */
export interface AggregationKey {
  /**
   * Indicates the type of aggregation key.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Indicates the value associated with the aggregation key name.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Provides an overview of how data is summarized across different dimensions.
 *
 * @public
 */
export interface SummarizationDimensionOverview {
  /**
   * Name of the summarization dimension.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Total number of occurrences for this dimension.
   *
   * @public
   */
  count: number | undefined;

  /**
   * Indicates the sample values found within the dimension.
   *
   * @public
   */
  sampleValues?: string[] | undefined;
}

/**
 * Provides additional information about the aggregation key.
 *
 * @public
 */
export interface AggregationSummary {
  /**
   * Indicates the number of events associated with the aggregation key.
   *
   * @public
   */
  eventCount: number | undefined;

  /**
   * Indicates the criteria or rules by which notifications have been grouped together.
   *
   * @public
   */
  aggregatedBy: AggregationKey[] | undefined;

  /**
   * Indicates the Amazon Web Services accounts in the aggregation key.
   *
   * @public
   */
  aggregatedAccounts: SummarizationDimensionOverview | undefined;

  /**
   * Indicates the Amazon Web Services Regions in the aggregation key.
   *
   * @public
   */
  aggregatedRegions: SummarizationDimensionOverview | undefined;

  /**
   * Indicates the collection of organizational units that are involved in the aggregation key.
   *
   * @public
   */
  aggregatedOrganizationalUnits?: SummarizationDimensionOverview | undefined;

  /**
   * List of additional dimensions used to group and summarize data.
   *
   * @public
   */
  additionalSummarizationDimensions?: SummarizationDimensionOverview[] | undefined;
}

/**
 * @public
 */
export interface AssociateChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the Channel to associate with the `NotificationConfiguration`.
   *
   * Supported ARNs include Amazon Q Developer in chat applications, the Console Mobile Application, and notifications-contacts.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of the `NotificationConfiguration` to associate with the Channel.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateChannelResponse {}

/**
 * Stores information about a field passed inside a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The field name where the invalid entry was detected.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message with the reason for the validation exception error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AssociateManagedNotificationAccountContactRequest {
  /**
   * A unique value of an Account Contact Type to associate with the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  contactIdentifier: AccountContactType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration` to associate with the Account Contact.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * Specifies whether this contact is subscribed to sensitive events. The `notifications:SubscribeSensitiveEvents` permission controls access to sensitive events. Defaults to false.
   *
   * @public
   */
  isSensitiveEventsSubscribed?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateManagedNotificationAccountContactResponse {}

/**
 * @public
 */
export interface AssociateManagedNotificationAdditionalChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the Channel to associate with the `ManagedNotificationConfiguration`.
   *
   * Supported ARNs include Amazon Q Developer in chat applications, the Console Mobile Application, and email (notifications-contacts).
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration` to associate with the additional Channel.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * Specifies whether this channel is subscribed to sensitive events. The `notifications:SubscribeSensitiveEvents` permission controls access to sensitive events. Defaults to false.
   *
   * @public
   */
  isSensitiveEventsSubscribed?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateManagedNotificationAdditionalChannelResponse {}

/**
 * @public
 */
export interface AssociateOrganizationalUnitRequest {
  /**
   * The unique identifier of the organizational unit to associate.
   *
   * @public
   */
  organizationalUnitId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification configuration to associate with the organizational unit.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateOrganizationalUnitResponse {}

/**
 * @public
 */
export interface DisassociateChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the Channel to disassociate.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of the `NotificationConfiguration` to disassociate.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateChannelResponse {}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationConfiguration`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The maximum number of results to be returned in this call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous ListNotificationEvents call. `NextToken` uses Base64 encoding.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Channels.
   *
   * @public
   */
  channels: string[] | undefined;
}

/**
 * @public
 */
export interface CreateEventRuleRequest {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationConfiguration` associated with this `EventRule`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The matched event source.
   *
   * Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The event type to match.
   *
   * Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and Amazon CloudWatch Alarm State Change. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * An additional event pattern used to further filter the events this `EventRule` receives.
   *
   * For more information, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) in the *Amazon EventBridge User Guide.*
   *
   * @public
   */
  eventPattern?: string | undefined;

  /**
   * A list of Amazon Web Services Regions that send events to this `EventRule`.
   *
   * @public
   */
  regions: string[] | undefined;
}

/**
 * Provides additional information about the current `EventRule` status.
 *
 * @public
 */
export interface EventRuleStatusSummary {
  /**
   * The status of the `EventRule`.
   *
   * - Values:
   *
   *   - `ACTIVE`
   *
   *     - The `EventRule` can process events.
   *   - `INACTIVE`
   *
   *     - The `EventRule` may be unable to process events.
   *   - `CREATING`
   *
   *     - The `EventRule` is being created.
   *
   *       Only `GET` and `LIST` calls can be run.
   *   - `UPDATING`
   *
   *     - The `EventRule` is being updated.
   *
   *       Only `GET` and `LIST` calls can be run.
   *   - `DELETING`
   *
   *     - The `EventRule` is being deleted.
   *
   *       Only `GET` and `LIST` calls can be run.
   *
   * @public
   */
  status: EventRuleStatus | undefined;

  /**
   * A human-readable reason for `EventRuleStatus`.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface CreateEventRuleResponse {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of a `NotificationConfiguration`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * A list of an `EventRule`'s status by Region. Regions are mapped to `EventRuleStatusSummary`.
   *
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationRequest {
  /**
   * The name of the `NotificationConfiguration`. Supports RFC 3986's unreserved characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the `NotificationConfiguration`.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The aggregation preference of the `NotificationConfiguration`.
   *
   * - Values:
   *
   *   - `LONG`
   *
   *     - Aggregate notifications for long periods of time (12 hours).
   *   - `SHORT`
   *
   *     - Aggregate notifications for short periods of time (5 minutes).
   *   - `NONE`
   *
   *     - Don't aggregate notifications.
   *
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationConfiguration`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of this `NotificationConfiguration`.
   *
   * @public
   */
  status: NotificationConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteEventRuleRequest {
  /**
   * The Amazon Resource Name (ARN) of the `EventRule` to delete.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventRuleResponse {}

/**
 * @public
 */
export interface DeleteNotificationConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationConfiguration` to delete.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationConfigurationResponse {}

/**
 * @public
 */
export interface DeregisterNotificationHubRequest {
  /**
   * The `NotificationHub` Region.
   *
   * @public
   */
  notificationHubRegion: string | undefined;
}

/**
 * Provides additional information about the current `NotificationHub` status.
 *
 * @public
 */
export interface NotificationHubStatusSummary {
  /**
   * Status information about the `NotificationHub`.
   *
   * - Values:
   *
   *   - `ACTIVE`
   *
   *     - Incoming `NotificationEvents` are replicated to this `NotificationHub`.
   *   - `REGISTERING`
   *
   *     - The `NotificationConfiguration` is initializing. A `NotificationConfiguration` with this status can't be deregistered.
   *   - `DEREGISTERING`
   *
   *     - The `NotificationConfiguration` is being deleted. You can't register additional `NotificationHubs` in the same Region as a `NotificationConfiguration` with this status.
   *
   * @public
   */
  status: NotificationHubStatus | undefined;

  /**
   * An explanation for the current status.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface DeregisterNotificationHubResponse {
  /**
   * The `NotificationHub` Region.
   *
   * @public
   */
  notificationHubRegion: string | undefined;

  /**
   * `NotificationHub` status information.
   *
   * @public
   */
  statusSummary: NotificationHubStatusSummary | undefined;
}

/**
 * The key-value pair of properties for an event.
 *
 * @public
 */
export interface Dimension {
  /**
   * The name of the dimension
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the dimension.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface DisableNotificationsAccessForOrganizationRequest {}

/**
 * @public
 */
export interface DisableNotificationsAccessForOrganizationResponse {}

/**
 * @public
 */
export interface DisassociateManagedNotificationAccountContactRequest {
  /**
   * The unique value of an Account Contact Type to associate with the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  contactIdentifier: AccountContactType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration` to associate with the Account Contact.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateManagedNotificationAccountContactResponse {}

/**
 * @public
 */
export interface DisassociateManagedNotificationAdditionalChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the Channel to associate with the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Managed Notification Configuration to associate with the additional Channel.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateManagedNotificationAdditionalChannelResponse {}

/**
 * @public
 */
export interface DisassociateOrganizationalUnitRequest {
  /**
   * The unique identifier of the organizational unit to disassociate.
   *
   * @public
   */
  organizationalUnitId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification configuration to disassociate from the organizational unit.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateOrganizationalUnitResponse {}

/**
 * @public
 */
export interface EnableNotificationsAccessForOrganizationRequest {}

/**
 * @public
 */
export interface EnableNotificationsAccessForOrganizationResponse {}

/**
 * @public
 */
export interface GetEventRuleRequest {
  /**
   * The Amazon Resource Name (ARN) of the `EventRule` to return.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetEventRuleResponse {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of a `NotificationConfiguration`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The date when the `EventRule` was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The matched event source.
   *
   * Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The event type to match.
   *
   * Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and Amazon CloudWatch Alarm State Change. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * An additional event pattern used to further filter the events this `EventRule` receives.
   *
   * For more information, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) in the *Amazon EventBridge User Guide.*
   *
   * @public
   */
  eventPattern: string | undefined;

  /**
   * A list of Amazon Web Services Regions that send events to this `EventRule`.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * A list of managed rules from EventBridge that are associated with this `EventRule`.
   *
   * > **Note:** These are created by User Notifications within your account so this `EventRule` functions.
   *
   * @public
   */
  managedRules: string[] | undefined;

  /**
   * A list of an `EventRule`'s status by Region. Regions are mapped to `EventRuleStatusSummary`.
   *
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface ListEventRulesRequest {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationConfiguration`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The maximum number of results to be returned in this call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous `ListEventRules` call. Next token uses Base64 encoding.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains a complete list of fields related to an `EventRule`.
 *
 * @public
 */
export interface EventRuleStructure {
  /**
   * The Amazon Resource Name (ARN) of the `EventRule`. CloudFormation stack generates this ARN and then uses this ARN to associate with the `NotificationConfiguration`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN for the `NotificationConfiguration` associated with this `EventRule`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The creation time of the `EventRule`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The event source this rule should match with the EventBridge event sources. It must match with atleast one of the valid EventBridge event sources. Only Amazon Web Services service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The event type this rule should match with the EventBridge events. It must match with atleast one of the valid EventBridge event types. For example, Amazon EC2 Instance State change Notification and Amazon CloudWatch State Change. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * An additional event pattern used to further filter the events this `EventRule` receives.
   *
   * For more information, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) in the *Amazon EventBridge User Guide.*
   *
   * @public
   */
  eventPattern: string | undefined;

  /**
   * A list of Amazon Web Services Regions that send events to this `EventRule`.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * A list of Amazon EventBridge Managed Rule ARNs associated with this `EventRule`.
   *
   * > **Note:** These are created by User Notifications within your account so your `EventRules` can function.
   *
   * @public
   */
  managedRules: string[] | undefined;

  /**
   * A list of an `EventRule`'s status by Region. Regions are mapped to `EventRuleStatusSummary`.
   *
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface ListEventRulesResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of `EventRules`.
   *
   * @public
   */
  eventRules: EventRuleStructure[] | undefined;
}

/**
 * @public
 */
export interface UpdateEventRuleRequest {
  /**
   * The Amazon Resource Name (ARN) to use to update the `EventRule`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * An additional event pattern used to further filter the events this `EventRule` receives.
   *
   * For more information, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) in the *Amazon EventBridge User Guide.*
   *
   * @public
   */
  eventPattern?: string | undefined;

  /**
   * A list of Amazon Web Services Regions that sends events to this `EventRule`.
   *
   * @public
   */
  regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEventRuleResponse {
  /**
   * The Amazon Resource Name (ARN) to use to update the `EventRule`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of the `NotificationConfiguration`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The status of the action by Region.
   *
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationChildEventRequest {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationChildEvent` to return.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The locale code of the language used for the retrieved `ManagedNotificationChildEvent`. The default locale is English `en_US`.
   *
   * @public
   */
  locale?: LocaleCode | undefined;
}

/**
 * Describes the components of a notification message.
 *
 * @public
 */
export interface MessageComponents {
  /**
   * A sentence long summary. For example, titles or an email subject line.
   *
   * @public
   */
  headline?: string | undefined;

  /**
   * A paragraph long or multiple sentence summary. For example, Amazon Q Developer in chat applications notifications.
   *
   * @public
   */
  paragraphSummary?: string | undefined;

  /**
   * A complete summary with all possible relevant information.
   *
   * @public
   */
  completeDescription?: string | undefined;

  /**
   * A rich description in Portable Text format, which you can convert to markup formats such as HTML, Markdown, or plain text. Channels that don't support rich rendering ignore this field and use the plain text components instead.
   *
   * @public
   */
  markupDescription?: string | undefined;

  /**
   * A list of properties in key-value pairs. Pairs are shown in order of importance from most important to least important. Channels may limit the number of dimensions shown to the notification viewer.
   *
   * > **Note:** Included dimensions, keys, and values are subject to change.
   *
   * @public
   */
  dimensions?: Dimension[] | undefined;
}

/**
 * Describes text information objects containing fields that determine how text part objects are composed.
 *
 * @public
 */
export interface TextPartValue {
  /**
   * The type of text part. Determines the usage of all other fields and whether or not they're required.
   *
   * @public
   */
  type: TextPartType | undefined;

  /**
   * A short single line description of the link. Must be hyper-linked with the URL itself.
   *
   * Used for text parts with the type `URL`.
   *
   * @public
   */
  displayText?: string | undefined;

  /**
   * A map of locales to the text in that locale.
   *
   * @public
   */
  textByLocale?: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * The URL itself.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * A notification-focused representation of an event. They contain semantic information used to create aggregated or non-aggregated end-user notifications.
 *
 * @public
 */
export interface ManagedNotificationChildEvent {
  /**
   * The schema version of the Managed Notification Child Event.
   *
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * The unique identifier for a Managed Notification Child Event.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Describes the components of a notification message.
   *
   * @public
   */
  messageComponents: MessageComponents | undefined;

  /**
   * The source event URL.
   *
   * @public
   */
  sourceEventDetailUrl?: string | undefined;

  /**
   * The detailed URL for the source event.
   *
   * @public
   */
  sourceEventDetailUrlDisplayText?: string | undefined;

  /**
   * The type of event causing the notification.
   *
   * - Values:
   *
   *   - `ALERT`
   *
   *     - A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.
   *   - `WARNING`
   *
   *     - A notification about an event where an issue is about to arise. For example, something is approaching a threshold.
   *   - `ANNOUNCEMENT`
   *
   *     - A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.
   *   - `INFORMATIONAL`
   *
   *     - A notification about informational messages. For example, recommendations, service announcements, or reminders.
   *
   * @public
   */
  notificationType: NotificationType | undefined;

  /**
   * The assesed nature of the event.
   *
   * - Values:
   *
   *   - `HEALTHY`
   *
   *     - All `EventRules` are `ACTIVE`.
   *   - `UNHEALTHY`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`.
   *
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ManagedNotificationEvent that is associated with this Managed Notification Child Event.
   *
   * @public
   */
  aggregateManagedNotificationEventArn: string | undefined;

  /**
   * The notification event start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the event.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * A list of text values.
   *
   * @public
   */
  textParts: Record<string, TextPartValue> | undefined;

  /**
   * The Organizational Unit Id that an Amazon Web Services account belongs to.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * Provides detailed information about the dimensions used for event summarization and aggregation.
   *
   * @public
   */
  aggregationDetail?: AggregationDetail | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationChildEventResponse {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration` associated with the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * The creation time of the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The content of the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  content: ManagedNotificationChildEvent | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration` to return.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationConfigurationResponse {
  /**
   * The ARN of the `ManagedNotificationConfiguration` resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The category of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  category: string | undefined;

  /**
   * The subCategory of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  subCategory: string | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationEventRequest {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationEvent` to return.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The locale code of the language used for the retrieved `ManagedNotificationEvent`. The default locale is English `(en_US)`.
   *
   * @public
   */
  locale?: LocaleCode | undefined;
}

/**
 * A file attached to a notification event.
 *
 * @public
 */
export interface NotificationEventAttachment {
  /**
   * The name of the attachment that recipients see.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * A temporary URL for downloading the attachment. The URL expires shortly after it's issued.
   *
   * @public
   */
  attachmentDownloadUrl?: string | undefined;

  /**
   * The MIME content type of the attachment, for example `application/pdf`.
   *
   * @public
   */
  contentType: string | undefined;
}

/**
 * A notification-focused representation of an event. They contain semantic information used by AccountContacts or Additional Channels to create end-user notifications.
 *
 * @public
 */
export interface ManagedNotificationEvent {
  /**
   * Version of the `ManagedNotificationEvent` schema.
   *
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * Unique identifier for a `ManagedNotificationEvent`.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Describes the components of a notification message.
   *
   * @public
   */
  messageComponents: MessageComponents | undefined;

  /**
   * URL defined by Source Service to be used by notification consumers to get additional information about event.
   *
   * @public
   */
  sourceEventDetailUrl?: string | undefined;

  /**
   * Text that needs to be hyperlinked with the sourceEventDetailUrl. For example, the description of the sourceEventDetailUrl.
   *
   * @public
   */
  sourceEventDetailUrlDisplayText?: string | undefined;

  /**
   * The nature of the event causing this notification.
   *
   * - Values:
   *
   *   - `ALERT`
   *
   *     - A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.
   *   - `WARNING`
   *
   *     - A notification about an event where an issue is about to arise. For example, something is approaching a threshold.
   *   - `ANNOUNCEMENT`
   *
   *     - A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.
   *   - `INFORMATIONAL`
   *
   *     - A notification about informational messages. For example, recommendations, service announcements, or reminders.
   *
   * @public
   */
  notificationType: NotificationType | undefined;

  /**
   * The status of an event.
   *
   * - Values:
   *
   *   - `HEALTHY`
   *
   *     - All EventRules are `ACTIVE` and any call can be run.
   *   - `UNHEALTHY`
   *
   *     - Some EventRules are `ACTIVE` and some are `INACTIVE`. Any call can be run.
   *
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * The notifications aggregation type.
   *
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * Provides additional information about the aggregation key.
   *
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * The earliest time of events to return from this call.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the notification event.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * A list of text values.
   *
   * @public
   */
  textParts: Record<string, TextPartValue> | undefined;

  /**
   * The Organizational Unit Id that an Amazon Web Services account belongs to.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * A list of files attached to the notification event.
   *
   * @public
   */
  attachments?: NotificationEventAttachment[] | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationEventResponse {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * The creation time of the `ManagedNotificationEvent`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The content of the `ManagedNotificationEvent`.
   *
   * @public
   */
  content: ManagedNotificationEvent | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationConfiguration` to return.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationResponse {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the `NotificationConfiguration`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the `NotificationConfiguration`.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The status of this `NotificationConfiguration`.
   *
   * @public
   */
  status: NotificationConfigurationStatus | undefined;

  /**
   * The creation time of the `NotificationConfiguration`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The aggregation preference of the `NotificationConfiguration`.
   *
   * - Values:
   *
   *   - `LONG`
   *
   *     - Aggregate notifications for long periods of time (12 hours).
   *   - `SHORT`
   *
   *     - Aggregate notifications for short periods of time (5 minutes).
   *   - `NONE`
   *
   *     - Don't aggregate notifications.
   *
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;

  /**
   * The subtype of the notification configuration returned in the response.
   *
   * @public
   */
  subtype?: NotificationConfigurationSubtype | undefined;
}

/**
 * @public
 */
export interface GetNotificationEventRequest {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationEvent` to return.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The locale code of the language used for the retrieved `NotificationEvent`. The default locale is English `en_US`.
   *
   * @public
   */
  locale?: LocaleCode | undefined;
}

/**
 * Describes a media element.
 *
 * @public
 */
export interface MediaElement {
  /**
   * The unique ID for the media.
   *
   * @public
   */
  mediaId: string | undefined;

  /**
   * The type of media.
   *
   * @public
   */
  type: MediaElementType | undefined;

  /**
   * The URL of the media.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The caption of the media.
   *
   * @public
   */
  caption: string | undefined;
}

/**
 * A resource affected by or closely linked to an event.
 *
 * @public
 */
export interface Resource {
  /**
   * The unique identifier for the resource.
   *
   * At least one id or ARN is required.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource. At least one id or ARN is required.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The URL to the resource's detail page. If a detail page URL is unavailable, it is the URL to an informational page that describes the resource's type.
   *
   * @public
   */
  detailUrl?: string | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  tags?: string[] | undefined;
}

/**
 * Describes the metadata for a source event.
 *
 * For more information, see [Event structure reference](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-events-structure.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface SourceEventMetadata {
  /**
   * The version of the type of event.
   *
   * @public
   */
  eventTypeVersion: string | undefined;

  /**
   * The source event id.
   *
   * @public
   */
  sourceEventId: string | undefined;

  /**
   * The Region the event originated from.
   *
   * @public
   */
  eventOriginRegion?: string | undefined;

  /**
   * The primary Amazon Web Services account of `SourceEvent`.
   *
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * The Amazon Web Services service the event originates from. For example `aws.cloudwatch`.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The date and time the source event occurred. This is based on the Source Event.
   *
   * @public
   */
  eventOccurrenceTime: Date | undefined;

  /**
   * The type of event. For example, an Amazon CloudWatch state change.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * A list of resources related to this `NotificationEvent`.
   *
   * @public
   */
  relatedResources: Resource[] | undefined;
}

/**
 * A `NotificationEvent` is a notification-focused representation of an event. They contain semantic information used by Channels to create end-user notifications.
 *
 * @public
 */
export interface NotificationEventSchema {
  /**
   * The schema version of the Notification Event.
   *
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * The unique identifier for a `NotificationEvent`.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The source event metadata.
   *
   * @public
   */
  sourceEventMetadata: SourceEventMetadata | undefined;

  /**
   * Describes the components of a notification message.
   *
   * @public
   */
  messageComponents: MessageComponents | undefined;

  /**
   * The source event URL.
   *
   * @public
   */
  sourceEventDetailUrl?: string | undefined;

  /**
   * The detailed URL for the source event.
   *
   * @public
   */
  sourceEventDetailUrlDisplayText?: string | undefined;

  /**
   * The type of event causing the notification.
   *
   * - Values:
   *
   *   - `ALERT`
   *
   *     - A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.
   *   - `WARNING`
   *
   *     - A notification about an event where an issue is about to arise. For example, something is approaching a threshold.
   *   - `ANNOUNCEMENT`
   *
   *     - A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.
   *   - `INFORMATIONAL`
   *
   *     - A notification about informational messages. For example, recommendations, service announcements, or reminders.
   *
   * @public
   */
  notificationType: NotificationType | undefined;

  /**
   * The assessed nature of the event.
   *
   * - Values:
   *
   *   - `HEALTHY`
   *
   *     - All `EventRules` are `ACTIVE` and any call can be run.
   *   - `UNHEALTHY`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`. Any call can be run.
   *
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * The aggregation type of the `NotificationConfiguration`.
   *
   * - Values:
   *
   *   - `AGGREGATE`
   *
   *     - The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period.
   *   - `CHILD`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`. Any call can be run.
   *   - `NONE`
   *
   *     - The notification isn't aggregated.
   *
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * If the value of `aggregationEventType` is not `NONE`, this is the Amazon Resource Event (ARN) of the parent aggregate notification.
   *
   * This is omitted if notification isn't aggregated.
   *
   * @public
   */
  aggregateNotificationEventArn?: string | undefined;

  /**
   * Provides additional information about how multiple notifications are grouped.
   *
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * The notification event start time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the event.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * A list of text values.
   *
   * @public
   */
  textParts: Record<string, TextPartValue> | undefined;

  /**
   * A list of media elements.
   *
   * @public
   */
  media: MediaElement[] | undefined;

  /**
   * The unique identifier of the organizational unit associated with the notification event.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetNotificationEventResponse {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of the `NotificationConfiguration`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The creation time of the `NotificationEvent`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The content of the `NotificationEvent`.
   *
   * @public
   */
  content: NotificationEventSchema | undefined;
}

/**
 * @public
 */
export interface GetNotificationsAccessForOrganizationRequest {}

/**
 * Orgs Service trust for User Notifications.
 *
 * @public
 */
export interface NotificationsAccessForOrganization {
  /**
   * Access Status for the Orgs Service.
   *
   * @public
   */
  accessStatus: AccessStatus | undefined;
}

/**
 * @public
 */
export interface GetNotificationsAccessForOrganizationResponse {
  /**
   * The `AccessStatus` of Service Trust Enablement for User Notifications to Amazon Web Services Organizations.
   *
   * @public
   */
  notificationsAccessForOrganization: NotificationsAccessForOrganization | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChannelAssociationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration` to match.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * The maximum number of results to be returned in this call. Defaults to 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous `ListManagedNotificationChannelAssociations` call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Provides a summary of channel associations for a managed notification configuration.
 *
 * @public
 */
export interface ManagedNotificationChannelAssociationSummary {
  /**
   * The unique identifier for the notification channel.
   *
   * @public
   */
  channelIdentifier: string | undefined;

  /**
   * The type of notification channel used for message delivery.
   *
   * - Values:
   *
   *   - `ACCOUNT_CONTACT`
   *
   *     - Delivers notifications to Account Managed contacts through the User Notification Service.
   *   - `MOBILE`
   *
   *     - Delivers notifications through the Amazon Web Services Console Mobile Application to mobile devices.
   *   - `CHATBOT`
   *
   *     - Delivers notifications through Amazon Q Developer in chat applications to collaboration platforms (Slack, Chime).
   *   - `EMAIL`
   *
   *     - Delivers notifications to email addresses.
   *
   * @public
   */
  channelType: ChannelType | undefined;

  /**
   * Controls whether users can modify channel associations for a notification configuration.
   *
   * - Values:
   *
   *   - `ENABLED`
   *
   *     - Users can associate or disassociate channels with the notification configuration.
   *   - `DISABLED`
   *
   *     - Users cannot associate or disassociate channels with the notification configuration.
   *
   * @public
   */
  overrideOption?: ChannelAssociationOverrideOption | undefined;

  /**
   * Specifies whether this channel association is subscribed to sensitive events. Defaults to false for associations created without the flag.
   *
   * @public
   */
  isSensitiveEventsSubscribed?: boolean | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChannelAssociationsResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list that contains the following information about a channel association.
   *
   * @public
   */
  channelAssociations: ManagedNotificationChannelAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChildEventsRequest {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationEvent`.
   *
   * @public
   */
  aggregateManagedNotificationEventArn: string | undefined;

  /**
   * The earliest time of events to return from this call.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Latest time of events to return from this call.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The locale code of the language used for the retrieved `NotificationEvent`. The default locale is English.`en_US`.
   *
   * @public
   */
  locale?: LocaleCode | undefined;

  /**
   * The maximum number of results to be returned in this call. Defaults to 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The Amazon Web Services account ID associated with the Managed Notification Child Events.
   *
   * @public
   */
  relatedAccount?: string | undefined;

  /**
   * The identifier of the Amazon Web Services Organizations organizational unit (OU) associated with the Managed Notification Child Events.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous ListManagedNotificationChannelAssociations call. Next token uses Base64 encoding.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the headline message component.
 *
 * @public
 */
export interface MessageComponentsSummary {
  /**
   * A sentence long summary. For example, titles or an email subject line.
   *
   * @public
   */
  headline: string | undefined;
}

/**
 * A short summary and metadata for a managed notification event.
 *
 * @public
 */
export interface ManagedSourceEventMetadataSummary {
  /**
   * The Region where the notification originated.
   *
   * @public
   */
  eventOriginRegion?: string | undefined;

  /**
   * The source service of the notification.
   *
   * Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The event Type of the notification.
   *
   * @public
   */
  eventType: string | undefined;
}

/**
 * Describes a short summary and metadata for a `ManagedNotificationChildEvent`.
 *
 * @public
 */
export interface ManagedNotificationChildEventSummary {
  /**
   * The schema version of the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * Contains all event metadata present identically across all `NotificationEvents`. All fields are present in Source Events via Eventbridge.
   *
   * @public
   */
  sourceEventMetadata: ManagedSourceEventMetadataSummary | undefined;

  /**
   * Contains the headline message component.
   *
   * @public
   */
  messageComponents: MessageComponentsSummary | undefined;

  /**
   * Provides detailed information about the dimensions used for event summarization and aggregation.
   *
   * @public
   */
  aggregationDetail: AggregationDetail | undefined;

  /**
   * The perceived nature of the event.
   *
   * - Values:
   *
   *   - `HEALTHY`
   *
   *     - All EventRules are `ACTIVE` and any call can be run.
   *   - `UNHEALTHY`
   *
   *     - Some EventRules are `ACTIVE` and some are `INACTIVE`. Any call can be run.
   *
   * @public
   */
  eventStatus: EventStatus | undefined;

  /**
   * The Type of the event causing this notification.
   *
   * - Values:
   *
   *   - `ALERT`
   *
   *     - A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.
   *   - `WARNING`
   *
   *     - A notification about an event where an issue is about to arise. For example, something is approaching a threshold.
   *   - `ANNOUNCEMENT`
   *
   *     - A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.
   *   - `INFORMATIONAL`
   *
   *     - A notification about informational messages. For example, recommendations, service announcements, or reminders.
   *
   * @public
   */
  notificationType: NotificationType | undefined;
}

/**
 * Describes an overview and metadata for a `ManagedNotificationChildEvent`.
 *
 * @public
 */
export interface ManagedNotificationChildEventOverview {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * The account that related to the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * The creation time of the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The content of the `ManagedNotificationChildEvent`.
   *
   * @public
   */
  childEvent: ManagedNotificationChildEventSummary | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ManagedNotificationEvent that is associated with this `ManagedNotificationChildEvent`.
   *
   * @public
   */
  aggregateManagedNotificationEventArn: string | undefined;

  /**
   * The Organizational Unit Id that an AWS account belongs to.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChildEventsResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  managedNotificationChildEvents: ManagedNotificationChildEventOverview[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationConfigurationsRequest {
  /**
   * The identifier or ARN of the notification channel to filter configurations by.
   *
   * @public
   */
  channelIdentifier?: string | undefined;

  /**
   * The maximum number of results to be returned in this call. Defaults to 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous ListManagedNotificationChannelAssociations call. Next token uses Base64 encoding.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes the basic structure and properties of a `ManagedNotificationConfiguration`.
 *
 * @public
 */
export interface ManagedNotificationConfigurationStructure {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationConfigurationsResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Managed Notification Configurations matching the request criteria.
   *
   * @public
   */
  managedNotificationConfigurations: ManagedNotificationConfigurationStructure[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationEventsRequest {
  /**
   * The earliest time of events to return from this call.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Latest time of events to return from this call.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The locale code of the language used for the retrieved NotificationEvent. The default locale is English (en_US).
   *
   * @public
   */
  locale?: LocaleCode | undefined;

  /**
   * The Amazon Web Services service the event originates from. For example aws.cloudwatch.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The maximum number of results to be returned in this call. Defaults to 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous `ListManagedNotificationChannelAssociations` call. Next token uses Base64 encoding.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Organizational Unit Id that an Amazon Web Services account belongs to.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the Managed Notification Events.
   *
   * @public
   */
  relatedAccount?: string | undefined;

  /**
   * Specifies whether to include sensitive events in the result. By default, only non-sensitive events are returned. The `notifications:AccessSensitiveEvents` permission controls access to sensitive events.
   *
   * @public
   */
  includeSensitiveEvents?: boolean | undefined;
}

/**
 * A short summary of a `ManagedNotificationEvent`. This is only used when listing managed notification events.
 *
 * @public
 */
export interface ManagedNotificationEventSummary {
  /**
   * The schema version of the `ManagedNotificationEvent`.
   *
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * Contains metadata about the event that caused the `ManagedNotificationEvent`.
   *
   * @public
   */
  sourceEventMetadata: ManagedSourceEventMetadataSummary | undefined;

  /**
   * Contains the headline message component.
   *
   * @public
   */
  messageComponents: MessageComponentsSummary | undefined;

  /**
   * The managed notification event status.
   *
   * - Values:
   *
   *   - `HEALTHY`
   *
   *     - All `EventRules` are `ACTIVE`.
   *   - `UNHEALTHY`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`.
   *
   * @public
   */
  eventStatus: EventStatus | undefined;

  /**
   * The Type of event causing the notification.
   *
   * - Values:
   *
   *   - `ALERT`
   *
   *     - A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.
   *   - `WARNING`
   *
   *     - A notification about an event where an issue is about to arise. For example, something is approaching a threshold.
   *   - `ANNOUNCEMENT`
   *
   *     - A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.
   *   - `INFORMATIONAL`
   *
   *     - A notification about informational messages. For example, recommendations, service announcements, or reminders.
   *
   * @public
   */
  notificationType: NotificationType | undefined;
}

/**
 * Describes an overview and metadata for a ManagedNotificationEvent.
 *
 * @public
 */
export interface ManagedNotificationEventOverview {
  /**
   * The Amazon Resource Name (ARN) of the ManagedNotificationEvent.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration`.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * The account that related to the `ManagedNotificationEvent`.
   *
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * The creation time of the `ManagedNotificationEvent`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * @public
   */
  notificationEvent: ManagedNotificationEventSummary | undefined;

  /**
   * The notifications aggregation type.
   *
   * - Values:
   *
   *   - `AGGREGATE`
   *
   *     - The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period.
   *   - `CHILD`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`. Any call can be run.
   *   - `NONE`
   *
   *     - The notification isn't aggregated.
   *
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * The Organizational Unit Id that an Amazon Web Services account belongs to.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * Provides additional information about the aggregation key.
   *
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * The list of the regions where the aggregated notifications in this `NotificationEvent` originated.
   *
   * @public
   */
  aggregatedNotificationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationEventsResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Managed Notification Events matching the request criteria.
   *
   * @public
   */
  managedNotificationEvents: ManagedNotificationEventOverview[] | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification configuration used to filter the member accounts.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid values are 1-100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. Use the value returned in the previous response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The member account identifier used to filter the results.
   *
   * @public
   */
  memberAccount?: string | undefined;

  /**
   * The status used to filter the member accounts.
   *
   * @public
   */
  status?: MemberAccountNotificationConfigurationStatus | undefined;

  /**
   * The organizational unit ID used to filter the member accounts.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * Contains information about a member account.
 *
 * @public
 */
export interface MemberAccount {
  /**
   * The Amazon Resource Name (ARN) of the notification configuration associated with the member account.
   *
   * @public
   */
  notificationConfigurationArn?: string | undefined;

  /**
   * The AWS account ID of the member account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The current status of the member account.
   *
   * @public
   */
  status: MemberAccountNotificationConfigurationStatus | undefined;

  /**
   * The reason for the current status of the member account.
   *
   * @public
   */
  statusReason: string | undefined;

  /**
   * The unique identifier of the organizational unit containing the member account.
   *
   * @public
   */
  organizationalUnitId: string | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsResponse {
  /**
   * The list of member accounts that match the specified criteria.
   *
   * @public
   */
  memberAccounts: MemberAccount[] | undefined;

  /**
   * The token to use for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsRequest {
  /**
   * The matched event source.
   *
   * Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  eventRuleSource?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Channel to match.
   *
   * @public
   */
  channelArn?: string | undefined;

  /**
   * The `NotificationConfiguration` status to match.
   *
   * - Values:
   *
   *   - `ACTIVE`
   *
   *     - All `EventRules` are `ACTIVE` and any call can be run.
   *   - `PARTIALLY_ACTIVE`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`. Any call can be run.
   *     - Any call can be run.
   *   - `INACTIVE`
   *
   *     - All `EventRules` are `INACTIVE` and any call can be run.
   *   - `DELETING`
   *
   *     - This `NotificationConfiguration` is being deleted.
   *     - Only `GET` and `LIST` calls can be run.
   *
   * @public
   */
  status?: NotificationConfigurationStatus | undefined;

  /**
   * The subtype used to filter the notification configurations in the request.
   *
   * @public
   */
  subtype?: NotificationConfigurationSubtype | undefined;

  /**
   * The maximum number of results to be returned in this call. Defaults to 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous `ListEventRules` call. Next token uses Base64 encoding.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the complete list of fields for a NotificationConfiguration.
 *
 * @public
 */
export interface NotificationConfigurationStructure {
  /**
   * The Amazon Resource Name (ARN) of the `NotificationConfiguration` resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the `NotificationConfiguration`. Supports RFC 3986's unreserved characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the `NotificationConfiguration`.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The current status of the `NotificationConfiguration`.
   *
   * @public
   */
  status: NotificationConfigurationStatus | undefined;

  /**
   * The creation time of the `NotificationConfiguration`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The aggregation preference of the `NotificationConfiguration`.
   *
   * - Values:
   *
   *   - `LONG`
   *
   *     - Aggregate notifications for long periods of time (12 hours).
   *   - `SHORT`
   *
   *     - Aggregate notifications for short periods of time (5 minutes).
   *   - `NONE`
   *
   *     - Don't aggregate notifications.
   *
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;

  /**
   * The subtype of the notification configuration.
   *
   * @public
   */
  subtype?: NotificationConfigurationSubtype | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The `NotificationConfigurations` in the account.
   *
   * @public
   */
  notificationConfigurations: NotificationConfigurationStructure[] | undefined;
}

/**
 * @public
 */
export interface ListNotificationEventsRequest {
  /**
   * The earliest time of events to return from this call.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Latest time of events to return from this call.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The locale code of the language used for the retrieved `NotificationEvent`. The default locale is English `(en_US)`.
   *
   * @public
   */
  locale?: LocaleCode | undefined;

  /**
   * The matched event source.
   *
   * Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * Include aggregated child events in the result.
   *
   * @public
   */
  includeChildEvents?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `aggregatedNotificationEventArn` to match.
   *
   * @public
   */
  aggregateNotificationEventArn?: string | undefined;

  /**
   * The maximum number of results to be returned in this call. Defaults to 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The start token for paginated calls. Retrieved from the response of a previous `ListEventRules` call. Next token uses Base64 encoding.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier of the organizational unit used to filter notification events.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * Contains metadata about the event that caused the `NotificationEvent`. For other specific values, see `sourceEventMetadata`.
 *
 * @public
 */
export interface SourceEventMetadataSummary {
  /**
   * The Region where the notification originated.
   *
   * Unavailable for aggregated notifications.
   *
   * @public
   */
  eventOriginRegion?: string | undefined;

  /**
   * The matched event source.
   *
   * Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  source: string | undefined;

  /**
   * The event type to match.
   *
   * Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and Amazon CloudWatch Alarm State Change. For more information, see [Event delivery from Amazon Web Services services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  eventType: string | undefined;
}

/**
 * Describes a short summary and metadata for a `NotificationEvent`.
 *
 * @public
 */
export interface NotificationEventSummary {
  /**
   * The schema version of the Notification Event.
   *
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * The source event metadata.
   *
   * @public
   */
  sourceEventMetadata: SourceEventMetadataSummary | undefined;

  /**
   * The message components of a notification event.
   *
   * @public
   */
  messageComponents: MessageComponentsSummary | undefined;

  /**
   * Provides additional information about the current status of the `NotificationEvent`.
   *
   * - Values:
   *
   *   - `HEALTHY`
   *
   *     - All `EventRules` are `ACTIVE`.
   *   - `UNHEALTHY`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`.
   *
   * @public
   */
  eventStatus: EventStatus | undefined;

  /**
   * The type of event causing the notification.
   *
   * - Values:
   *
   *   - `ALERT`
   *
   *     - A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.
   *   - `WARNING`
   *
   *     - A notification about an event where an issue is about to arise. For example, something is approaching a threshold.
   *   - `ANNOUNCEMENT`
   *
   *     - A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.
   *   - `INFORMATIONAL`
   *
   *     - A notification about informational messages. For example, recommendations, service announcements, or reminders.
   *
   * @public
   */
  notificationType: NotificationType | undefined;
}

/**
 * Describes a short summary of a `NotificationEvent`. This is only used when listing notification events.
 *
 * @public
 */
export interface NotificationEventOverview {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARN of the `NotificationConfiguration`.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The account name containing the `NotificationHub`.
   *
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * The creation time of the `NotificationEvent`.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Refers to a `NotificationEventSummary` object.
   *
   * Similar in structure to `content` in the `GetNotificationEvent` response.
   *
   * @public
   */
  notificationEvent: NotificationEventSummary | undefined;

  /**
   * The `NotificationConfiguration`'s aggregation type.
   *
   * - Values:
   *
   *   - `AGGREGATE`
   *
   *     - The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period.
   *   - `CHILD`
   *
   *     - Some `EventRules` are `ACTIVE` and some are `INACTIVE`. Any call can be run.
   *   - `NONE`
   *
   *     - The notification isn't aggregated.
   *
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * The ARN of the `aggregatedNotificationEventArn` to match.
   *
   * @public
   */
  aggregateNotificationEventArn?: string | undefined;

  /**
   * Provides an aggregated summary data for notification events.
   *
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * The unique identifier of the organizational unit in the notification event overview.
   *
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationEventsResponse {
  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of notification events.
   *
   * @public
   */
  notificationEvents: NotificationEventOverview[] | undefined;
}

/**
 * @public
 */
export interface ListNotificationHubsRequest {
  /**
   * The maximum number of records to list in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token. Set to null to start listing notification hubs from the start.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes an overview of a `NotificationHub`.
 *
 * A `NotificationConfiguration` is an account-level setting used to select the Regions where you want to store, process and replicate your notifications.
 *
 * @public
 */
export interface NotificationHubOverview {
  /**
   * The Region of the resource.
   *
   * @public
   */
  notificationHubRegion: string | undefined;

  /**
   * The status summary of the resource.
   *
   * @public
   */
  statusSummary: NotificationHubStatusSummary | undefined;

  /**
   * The date and time the `NotificationHubOverview` was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The most recent time this `NotificationHub` had an `ACTIVE` status.
   *
   * @public
   */
  lastActivationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotificationHubsResponse {
  /**
   * The `NotificationHubs` in the account.
   *
   * @public
   */
  notificationHubs: NotificationHubOverview[] | undefined;

  /**
   * A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification configuration used to filter the organizational units.
   *
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * The maximum number of organizational units to return in a single call. Valid values are 1-100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results. Use the value returned in the previous response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsResponse {
  /**
   * The list of organizational units that match the specified criteria.
   *
   * @public
   */
  organizationalUnits: string[] | undefined;

  /**
   * The token to use for the next page of results. If there are no additional results, this value is null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to list tags.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags for the specified ARN.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) used to update the `NotificationConfiguration`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the `NotificationConfiguration`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the `NotificationConfiguration`.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The aggregation preference of the `NotificationConfiguration`.
   *
   * - Values:
   *
   *   - `LONG`
   *
   *     - Aggregate notifications for long periods of time (12 hours).
   *   - `SHORT`
   *
   *     - Aggregate notifications for short periods of time (5 minutes).
   *   - `NONE`
   *
   *     - Don't aggregate notifications.
   *
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationResponse {
  /**
   * The ARN used to update the `NotificationConfiguration`.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface RegisterNotificationHubRequest {
  /**
   * The Region of the `NotificationHub`.
   *
   * @public
   */
  notificationHubRegion: string | undefined;
}

/**
 * @public
 */
export interface RegisterNotificationHubResponse {
  /**
   * The Region of the `NotificationHub`.
   *
   * @public
   */
  notificationHubRegion: string | undefined;

  /**
   * Provides additional information about the current `NotificationHub` status information.
   *
   * @public
   */
  statusSummary: NotificationHubStatusSummary | undefined;

  /**
   * The date the resource was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The date the resource was last activated.
   *
   * @public
   */
  lastActivationTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) to use to tag a resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
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
   * The Amazon Resource Name (ARN) to use to untag a resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The tag keys to use to untag a resource.
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
export interface UpdateManagedNotificationChannelAssociationRequest {
  /**
   * The Amazon Resource Name (ARN) of the `ManagedNotificationConfiguration` whose Channel association property you want to update.
   *
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * The identifier of the channel association to update. You can specify one of the following:
   *
   * - An Account contact identifier.
   * - A Channel ARN.
   *
   * @public
   */
  channelIdentifier: string | undefined;

  /**
   * Specifies whether the association is subscribed to sensitive events. The `notifications:SubscribeSensitiveEvents` permission controls access to sensitive events.
   *
   * @public
   */
  isSensitiveEventsSubscribed?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateManagedNotificationChannelAssociationResponse {}
