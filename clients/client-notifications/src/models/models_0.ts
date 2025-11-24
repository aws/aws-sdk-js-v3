// smithy-typescript generated code
import {
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
 * <p>Provides detailed information about the dimensions used for event summarization and aggregation.</p>
 * @public
 */
export interface SummarizationDimensionDetail {
  /**
   * <p>The name of the SummarizationDimensionDetail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Value of the property used to summarize aggregated events.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Provides detailed information about the dimensions used for aggregation.</p>
 * @public
 */
export interface AggregationDetail {
  /**
   * <p>Properties used to summarize aggregated events.</p>
   * @public
   */
  summarizationDimensions?: SummarizationDimensionDetail[] | undefined;
}

/**
 * <p>Key-value collection that indicate how notifications are grouped.</p>
 * @public
 */
export interface AggregationKey {
  /**
   * <p>Indicates the type of aggregation key.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Indicates the value associated with the aggregation key name.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Provides an overview of how data is summarized across different dimensions.</p>
 * @public
 */
export interface SummarizationDimensionOverview {
  /**
   * <p>Name of the summarization dimension.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Total number of occurrences for this dimension.</p>
   * @public
   */
  count: number | undefined;

  /**
   * <p>Indicates the sample values found within the dimension.</p>
   * @public
   */
  sampleValues?: string[] | undefined;
}

/**
 * <p>Provides additional information about the aggregation key.</p>
 * @public
 */
export interface AggregationSummary {
  /**
   * <p>Indicates the number of events associated with the aggregation key.</p>
   * @public
   */
  eventCount: number | undefined;

  /**
   * <p>Indicates the criteria or rules by which notifications have been grouped together.</p>
   * @public
   */
  aggregatedBy: AggregationKey[] | undefined;

  /**
   * <p>Indicates the Amazon Web Services accounts in the aggregation key.</p>
   * @public
   */
  aggregatedAccounts: SummarizationDimensionOverview | undefined;

  /**
   * <p>Indicates the Amazon Web Services Regions in the aggregation key.</p>
   * @public
   */
  aggregatedRegions: SummarizationDimensionOverview | undefined;

  /**
   * <p>Indicates the collection of organizational units that are involved in the aggregation key.</p>
   * @public
   */
  aggregatedOrganizationalUnits?: SummarizationDimensionOverview | undefined;

  /**
   * <p>List of additional dimensions used to group and summarize data.</p>
   * @public
   */
  additionalSummarizationDimensions?: SummarizationDimensionOverview[] | undefined;
}

/**
 * @public
 */
export interface AssociateChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Channel to associate with the <code>NotificationConfiguration</code>.</p> <p>Supported ARNs include Amazon Q Developer in chat applications, the Console Mobile Application, and notifications-contacts.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the <code>NotificationConfiguration</code> to associate with the Channel.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateChannelResponse {}

/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name where the invalid entry was detected.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message with the reason for the validation exception error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface AssociateManagedNotificationAccountContactRequest {
  /**
   * <p>A unique value of an Account Contact Type to associate with the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  contactIdentifier: AccountContactType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code> to associate with the Account Contact.</p>
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Channel to associate with the <code>ManagedNotificationConfiguration</code>.</p> <p>Supported ARNs include Amazon Q Developer in chat applications, the Console Mobile Application, and email (notifications-contacts).</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code> to associate with the additional Channel.</p>
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;
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
   * <p>The unique identifier of the organizational unit to associate.</p>
   * @public
   */
  organizationalUnitId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification configuration to associate with the organizational unit.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Channel to disassociate.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the <code>NotificationConfiguration</code> to disassociate.</p>
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
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous ListNotificationEvents call. <code>NextToken</code> uses Base64 encoding.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of Channels.</p>
   * @public
   */
  channels: string[] | undefined;
}

/**
 * @public
 */
export interface CreateEventRuleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationConfiguration</code> associated with this <code>EventRule</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The matched event source.</p> <p>Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, <code>aws.ec2</code> and <code>aws.cloudwatch</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The event type to match.</p> <p>Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and Amazon CloudWatch Alarm State Change. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>An additional event pattern used to further filter the events this <code>EventRule</code> receives.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a> in the <i>Amazon EventBridge User Guide.</i> </p>
   * @public
   */
  eventPattern?: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions that send events to this <code>EventRule</code>.</p>
   * @public
   */
  regions: string[] | undefined;
}

/**
 * <p>Provides additional information about the current <code>EventRule</code> status.</p>
 * @public
 */
export interface EventRuleStatusSummary {
  /**
   * <p>The status of the <code>EventRule</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ACTIVE</code> </p> <ul> <li> <p>The <code>EventRule</code> can process events.</p> </li> </ul> </li> <li> <p> <code>INACTIVE</code> </p> <ul> <li> <p>The <code>EventRule</code> may be unable to process events.</p> </li> </ul> </li> <li> <p> <code>CREATING</code> </p> <ul> <li> <p>The <code>EventRule</code> is being created.</p> <p>Only <code>GET</code> and <code>LIST</code> calls can be run.</p> </li> </ul> </li> <li> <p> <code>UPDATING</code> </p> <ul> <li> <p>The <code>EventRule</code> is being updated.</p> <p>Only <code>GET</code> and <code>LIST</code> calls can be run.</p> </li> </ul> </li> <li> <p> <code>DELETING</code> </p> <ul> <li> <p>The <code>EventRule</code> is being deleted.</p> <p>Only <code>GET</code> and <code>LIST</code> calls can be run.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  status: EventRuleStatus | undefined;

  /**
   * <p>A human-readable reason for <code>EventRuleStatus</code>.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface CreateEventRuleResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of a <code>NotificationConfiguration</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>A list of an <code>EventRule</code>'s status by Region. Regions are mapped to <code>EventRuleStatusSummary</code>.</p>
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationRequest {
  /**
   * <p>The name of the <code>NotificationConfiguration</code>. Supports RFC 3986's unreserved characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The aggregation preference of the <code>NotificationConfiguration</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>LONG</code> </p> <ul> <li> <p>Aggregate notifications for long periods of time (12 hours).</p> </li> </ul> </li> <li> <p> <code>SHORT</code> </p> <ul> <li> <p>Aggregate notifications for short periods of time (5 minutes).</p> </li> </ul> </li> <li> <p> <code>NONE</code> </p> <ul> <li> <p>Don't aggregate notifications.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of this <code>NotificationConfiguration</code>.</p>
   * @public
   */
  status: NotificationConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteEventRuleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>EventRule</code> to delete.</p>
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
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationConfiguration</code> to delete.</p>
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
   * <p>The <code>NotificationConfiguration</code> Region.</p>
   * @public
   */
  notificationHubRegion: string | undefined;
}

/**
 * <p>Provides additional information about the current <code>NotificationHub</code> status.</p>
 * @public
 */
export interface NotificationHubStatusSummary {
  /**
   * <p>Status information about the <code>NotificationHub</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ACTIVE</code> </p> <ul> <li> <p>Incoming <code>NotificationEvents</code> are replicated to this <code>NotificationHub</code>.</p> </li> </ul> </li> <li> <p> <code>REGISTERING</code> </p> <ul> <li> <p>The <code>NotificationConfiguration</code> is initializing. A <code>NotificationConfiguration</code> with this status can't be deregistered.</p> </li> </ul> </li> <li> <p> <code>DEREGISTERING</code> </p> <ul> <li> <p>The <code>NotificationConfiguration</code> is being deleted. You can't register additional <code>NotificationHubs</code> in the same Region as a <code>NotificationConfiguration</code> with this status.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  status: NotificationHubStatus | undefined;

  /**
   * <p>An explanation for the current status.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * @public
 */
export interface DeregisterNotificationHubResponse {
  /**
   * <p>The <code>NotificationConfiguration</code> Region.</p>
   * @public
   */
  notificationHubRegion: string | undefined;

  /**
   * <p> <code>NotificationConfiguration</code> status information.</p>
   * @public
   */
  statusSummary: NotificationHubStatusSummary | undefined;
}

/**
 * <p>The key-value pair of properties for an event.</p>
 * @public
 */
export interface Dimension {
  /**
   * <p>The name of the dimension</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
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
   * <p>The unique value of an Account Contact Type to associate with the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  contactIdentifier: AccountContactType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code> to associate with the Account Contact.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Channel to associate with the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Managed Notification Configuration to associate with the additional Channel.</p>
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
   * <p>The unique identifier of the organizational unit to disassociate.</p>
   * @public
   */
  organizationalUnitId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification configuration to disassociate from the organizational unit.</p>
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
   * <p>The Amazon Resource Name (ARN) of the <code>EventRule</code> to return.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetEventRuleResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of a <code>NotificationConfiguration</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The date when the <code>EventRule</code> was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The matched event source.</p> <p>Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, <code>aws.ec2</code> and <code>aws.cloudwatch</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The event type to match.</p> <p>Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and Amazon CloudWatch Alarm State Change. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>An additional event pattern used to further filter the events this <code>EventRule</code> receives.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a> in the <i>Amazon EventBridge User Guide.</i> </p>
   * @public
   */
  eventPattern: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions that send events to this <code>EventRule</code>.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>A list of managed rules from EventBridge that are associated with this <code>EventRule</code>.</p> <note> <p>These are created by User Notifications within your account so this <code>EventRule</code> functions.</p> </note>
   * @public
   */
  managedRules: string[] | undefined;

  /**
   * <p>A list of an <code>EventRule</code>'s status by Region. Regions are mapped to <code>EventRuleStatusSummary</code>.</p>
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface ListEventRulesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous <code>ListEventRules</code> call. Next token uses Base64 encoding.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains a complete list of fields related to an <code>EventRule</code>.</p>
 * @public
 */
export interface EventRuleStructure {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>EventRule</code>. CloudFormation stack generates this ARN and then uses this ARN to associate with the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN for the <code>NotificationConfiguration</code> associated with this <code>EventRule</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The creation time of the <code>EventRule</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The event source this rule should match with the EventBridge event sources. It must match with atleast one of the valid EventBridge event sources. Only Amazon Web Services service sourced events are supported. For example, <code>aws.ec2</code> and <code>aws.cloudwatch</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i> Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The event type this rule should match with the EventBridge events. It must match with atleast one of the valid EventBridge event types. For example, Amazon EC2 Instance State change Notification and Amazon CloudWatch State Change. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i> Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>An additional event pattern used to further filter the events this <code>EventRule</code> receives.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a> in the <i>Amazon EventBridge User Guide.</i> </p>
   * @public
   */
  eventPattern: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions that send events to this <code>EventRule</code>.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>A list of Amazon EventBridge Managed Rule ARNs associated with this <code>EventRule</code>.</p> <note> <p>These are created by User Notifications within your account so your <code>EventRules</code> can function.</p> </note>
   * @public
   */
  managedRules: string[] | undefined;

  /**
   * <p>A list of an <code>EventRule</code>'s status by Region. Regions are mapped to <code>EventRuleStatusSummary</code>.</p>
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface ListEventRulesResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of <code>EventRules</code>.</p>
   * @public
   */
  eventRules: EventRuleStructure[] | undefined;
}

/**
 * @public
 */
export interface UpdateEventRuleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to update the <code>EventRule</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An additional event pattern used to further filter the events this <code>EventRule</code> receives.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event patterns</a> in the <i>Amazon EventBridge User Guide.</i> </p>
   * @public
   */
  eventPattern?: string | undefined;

  /**
   * <p>A list of Amazon Web Services Regions that sends events to this <code>EventRule</code>.</p>
   * @public
   */
  regions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEventRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) to use to update the <code>EventRule</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The status of the action by Region.</p>
   * @public
   */
  statusSummaryByRegion: Record<string, EventRuleStatusSummary> | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationChildEventRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationChildEvent</code> to return.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The locale code of the language used for the retrieved <code>ManagedNotificationChildEvent</code>. The default locale is English <code>en_US</code>.</p>
   * @public
   */
  locale?: LocaleCode | undefined;
}

/**
 * <p>Describes the components of a notification message.</p>
 * @public
 */
export interface MessageComponents {
  /**
   * <p>A sentence long summary. For example, titles or an email subject line.</p>
   * @public
   */
  headline?: string | undefined;

  /**
   * <p>A paragraph long or multiple sentence summary. For example, Amazon Q Developer in chat applications notifications.</p>
   * @public
   */
  paragraphSummary?: string | undefined;

  /**
   * <p>A complete summary with all possible relevant information.</p>
   * @public
   */
  completeDescription?: string | undefined;

  /**
   * <p>A list of properties in key-value pairs. Pairs are shown in order of importance from most important to least important. Channels may limit the number of dimensions shown to the notification viewer.</p> <note> <p>Included dimensions, keys, and values are subject to change.</p> </note>
   * @public
   */
  dimensions?: Dimension[] | undefined;
}

/**
 * <p>Describes text information objects containing fields that determine how text part objects are composed.</p>
 * @public
 */
export interface TextPartValue {
  /**
   * <p>The type of text part. Determines the usage of all other fields and whether or not they're required.</p>
   * @public
   */
  type: TextPartType | undefined;

  /**
   * <p>A short single line description of the link. Must be hyper-linked with the URL itself. </p> <p>Used for text parts with the type <code>URL</code>.</p>
   * @public
   */
  displayText?: string | undefined;

  /**
   * <p>A map of locales to the text in that locale.</p>
   * @public
   */
  textByLocale?: Partial<Record<LocaleCode, string>> | undefined;

  /**
   * <p>The URL itself.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>A ManagedNotificationChildEvent is a notification-focused representation of an event. They contain semantic information used to create aggregated or non-aggregated end-user notifications.</p>
 * @public
 */
export interface ManagedNotificationChildEvent {
  /**
   * <p>The schema version of the Managed Notification Child Event.</p>
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * <p>The unique identifier for a Managed Notification Child Event.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Describes the components of a notification message.</p>
   * @public
   */
  messageComponents: MessageComponents | undefined;

  /**
   * <p>The source event URL.</p>
   * @public
   */
  sourceEventDetailUrl?: string | undefined;

  /**
   * <p>The detailed URL for the source event.</p>
   * @public
   */
  sourceEventDetailUrlDisplayText?: string | undefined;

  /**
   * <p>The type of event causing the notification.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ALERT</code> </p> <ul> <li> <p>A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.</p> </li> </ul> </li> <li> <p> <code>WARNING</code> </p> <ul> <li> <p>A notification about an event where an issue is about to arise. For example, something is approaching a threshold.</p> </li> </ul> </li> <li> <p> <code>ANNOUNCEMENT</code> </p> <ul> <li> <p>A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.</p> </li> </ul> </li> <li> <p> <code>INFORMATIONAL</code> </p> <ul> <li> <p>A notification about informational messages. For example, recommendations, service announcements, or reminders.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  notificationType: NotificationType | undefined;

  /**
   * <p>The assesed nature of the event.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>HEALTHY</code> </p> <ul> <li> <p>All <code>EventRules</code> are <code>ACTIVE</code>.</p> </li> </ul> </li> <li> <p> <code>UNHEALTHY</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ManagedNotificationEvent that is associated with this Managed Notification Child Event.</p>
   * @public
   */
  aggregateManagedNotificationEventArn: string | undefined;

  /**
   * <p>The notification event start time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of the event.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>A list of text values.</p>
   * @public
   */
  textParts: Record<string, TextPartValue> | undefined;

  /**
   * <p>The Organizational Unit Id that an Amazon Web Services account belongs to.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * <p>Provides detailed information about the dimensions used for event summarization and aggregation.</p>
   * @public
   */
  aggregationDetail?: AggregationDetail | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationChildEventResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code> associated with the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * <p>The creation time of the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The content of the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  content: ManagedNotificationChildEvent | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code> to return.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationConfigurationResponse {
  /**
   * <p>The ARN of the <code>ManagedNotificationConfiguration</code> resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The category of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  category: string | undefined;

  /**
   * <p>The subCategory of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  subCategory: string | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationEventRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationEvent</code> to return.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The locale code of the language used for the retrieved <code>ManagedNotificationEvent</code>. The default locale is English <code>(en_US)</code>.</p>
   * @public
   */
  locale?: LocaleCode | undefined;
}

/**
 * <p>A notification-focused representation of an event. They contain semantic information used by AccountContacts or Additional Channels to create end-user notifications.</p>
 * @public
 */
export interface ManagedNotificationEvent {
  /**
   * <p>Version of the <code>ManagedNotificationEvent</code> schema.</p>
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * <p>Unique identifier for a <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Describes the components of a notification message.</p>
   * @public
   */
  messageComponents: MessageComponents | undefined;

  /**
   * <p>URL defined by Source Service to be used by notification consumers to get additional information about event.</p>
   * @public
   */
  sourceEventDetailUrl?: string | undefined;

  /**
   * <p>Text that needs to be hyperlinked with the sourceEventDetailUrl. For example, the description of the sourceEventDetailUrl.</p>
   * @public
   */
  sourceEventDetailUrlDisplayText?: string | undefined;

  /**
   * <p>The nature of the event causing this notification.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ALERT</code> </p> <ul> <li> <p>A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.</p> </li> </ul> </li> <li> <p> <code>WARNING</code> </p> <ul> <li> <p>A notification about an event where an issue is about to arise. For example, something is approaching a threshold.</p> </li> </ul> </li> <li> <p> <code>ANNOUNCEMENT</code> </p> <ul> <li> <p>A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.</p> </li> </ul> </li> <li> <p> <code>INFORMATIONAL</code> </p> <ul> <li> <p>A notification about informational messages. For example, recommendations, service announcements, or reminders.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  notificationType: NotificationType | undefined;

  /**
   * <p>The status of an event.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>HEALTHY</code> </p> <ul> <li> <p>All EventRules are <code>ACTIVE</code> and any call can be run.</p> </li> </ul> </li> <li> <p> <code>UNHEALTHY</code> </p> <ul> <li> <p>Some EventRules are <code>ACTIVE</code> and some are <code>INACTIVE</code>. Any call can be run.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * <p>The notifications aggregation type.</p>
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * <p>Provides additional information about the aggregation key.</p>
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * <p>The earliest time of events to return from this call.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of the notification event.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>A list of text values.</p>
   * @public
   */
  textParts: Record<string, TextPartValue> | undefined;

  /**
   * <p>The Organizational Unit Id that an Amazon Web Services account belongs to.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetManagedNotificationEventResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * <p>The creation time of the <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The content of the <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  content: ManagedNotificationEvent | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationConfiguration</code> to return.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The status of this <code>NotificationConfiguration</code>.</p>
   * @public
   */
  status: NotificationConfigurationStatus | undefined;

  /**
   * <p>The creation time of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The aggregation preference of the <code>NotificationConfiguration</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>LONG</code> </p> <ul> <li> <p>Aggregate notifications for long periods of time (12 hours).</p> </li> </ul> </li> <li> <p> <code>SHORT</code> </p> <ul> <li> <p>Aggregate notifications for short periods of time (5 minutes).</p> </li> </ul> </li> <li> <p> <code>NONE</code> </p> <ul> <li> <p>Don't aggregate notifications.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;

  /**
   * <p>The subtype of the notification configuration returned in the response.</p>
   * @public
   */
  subtype?: NotificationConfigurationSubtype | undefined;
}

/**
 * @public
 */
export interface GetNotificationEventRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationEvent</code> to return.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The locale code of the language used for the retrieved <code>NotificationEvent</code>. The default locale is English <code>en_US</code>.</p>
   * @public
   */
  locale?: LocaleCode | undefined;
}

/**
 * <p>Describes a media element.</p>
 * @public
 */
export interface MediaElement {
  /**
   * <p>The unique ID for the media.</p>
   * @public
   */
  mediaId: string | undefined;

  /**
   * <p>The type of media.</p>
   * @public
   */
  type: MediaElementType | undefined;

  /**
   * <p>The URL of the media.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The caption of the media.</p>
   * @public
   */
  caption: string | undefined;
}

/**
 * <p>A resource affected by or closely linked to an event.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The unique identifier for the resource.</p> <p>At least one id or ARN is required.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource. At least one id or ARN is required.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The URL to the resource's detail page. If a detail page URL is unavailable, it is the URL to an informational page that describes the resource's type.</p>
   * @public
   */
  detailUrl?: string | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  tags?: string[] | undefined;
}

/**
 * <p>Describes the metadata for a source event.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-events-structure.html">Event structure reference</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface SourceEventMetadata {
  /**
   * <p>The version of the type of event.</p>
   * @public
   */
  eventTypeVersion: string | undefined;

  /**
   * <p>The source event id.</p>
   * @public
   */
  sourceEventId: string | undefined;

  /**
   * <p>The Region the event originated from.</p>
   * @public
   */
  eventOriginRegion?: string | undefined;

  /**
   * <p>The primary Amazon Web Services account of <code>SourceEvent</code>.</p>
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * <p>The Amazon Web Services service the event originates from. For example <code>aws.cloudwatch</code>.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The date and time the source event occurred. This is based on the Source Event.</p>
   * @public
   */
  eventOccurrenceTime: Date | undefined;

  /**
   * <p>The type of event. For example, an Amazon CloudWatch state change.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>A list of resources related to this <code>NotificationEvent</code>.</p>
   * @public
   */
  relatedResources: Resource[] | undefined;
}

/**
 * <p>A <code>NotificationEvent</code> is a notification-focused representation of an event. They contain semantic information used by Channels to create end-user notifications.</p>
 * @public
 */
export interface NotificationEventSchema {
  /**
   * <p>The schema version of the Notification Event.</p>
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * <p>The unique identifier for a <code>NotificationEvent</code>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The source event metadata.</p>
   * @public
   */
  sourceEventMetadata: SourceEventMetadata | undefined;

  /**
   * <p>Describes the components of a notification message.</p>
   * @public
   */
  messageComponents: MessageComponents | undefined;

  /**
   * <p>The source event URL.</p>
   * @public
   */
  sourceEventDetailUrl?: string | undefined;

  /**
   * <p>The detailed URL for the source event.</p>
   * @public
   */
  sourceEventDetailUrlDisplayText?: string | undefined;

  /**
   * <p>The type of event causing the notification.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ALERT</code> </p> <ul> <li> <p>A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.</p> </li> </ul> </li> <li> <p> <code>WARNING</code> </p> <ul> <li> <p>A notification about an event where an issue is about to arise. For example, something is approaching a threshold.</p> </li> </ul> </li> <li> <p> <code>ANNOUNCEMENT</code> </p> <ul> <li> <p>A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.</p> </li> </ul> </li> <li> <p> <code>INFORMATIONAL</code> </p> <ul> <li> <p>A notification about informational messages. For example, recommendations, service announcements, or reminders.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  notificationType: NotificationType | undefined;

  /**
   * <p>The assessed nature of the event.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>HEALTHY</code> </p> <ul> <li> <p>All <code>EventRules</code> are <code>ACTIVE</code> and any call can be run.</p> </li> </ul> </li> <li> <p> <code>UNHEALTHY</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>. Any call can be run.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  eventStatus?: EventStatus | undefined;

  /**
   * <p>The aggregation type of the <code>NotificationConfiguration</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>AGGREGATE</code> </p> <ul> <li> <p>The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period.</p> </li> </ul> </li> <li> <p> <code>CHILD</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>. Any call can be run.</p> </li> </ul> </li> <li> <p> <code>NONE</code> </p> <ul> <li> <p>The notification isn't aggregated.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * <p>If the value of <code>aggregationEventType</code> is not <code>NONE</code>, this is the Amazon Resource Event (ARN) of the parent aggregate notification.</p> <p>This is omitted if notification isn't aggregated.</p>
   * @public
   */
  aggregateNotificationEventArn?: string | undefined;

  /**
   * <p>Provides additional information about how multiple notifications are grouped.</p>
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * <p>The notification event start time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of the event.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>A list of text values.</p>
   * @public
   */
  textParts: Record<string, TextPartValue> | undefined;

  /**
   * <p>A list of media elements.</p>
   * @public
   */
  media: MediaElement[] | undefined;

  /**
   * <p>The unique identifier of the organizational unit associated with the notification event.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface GetNotificationEventResponse {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The creation time of the <code>NotificationEvent</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The content of the <code>NotificationEvent</code>.</p>
   * @public
   */
  content: NotificationEventSchema | undefined;
}

/**
 * @public
 */
export interface GetNotificationsAccessForOrganizationRequest {}

/**
 * <p>Orgs Service trust for User Notifications.</p>
 * @public
 */
export interface NotificationsAccessForOrganization {
  /**
   * <p>Access Status for the Orgs Service.</p>
   * @public
   */
  accessStatus: AccessStatus | undefined;
}

/**
 * @public
 */
export interface GetNotificationsAccessForOrganizationResponse {
  /**
   * <p>The <code>AccessStatus</code> of Service Trust Enablement for User Notifications to Amazon Web Services Organizations.</p>
   * @public
   */
  notificationsAccessForOrganization: NotificationsAccessForOrganization | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChannelAssociationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code> to match.</p>
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. Defaults to 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous <code>ListManagedNotificationChannelAssociations</code> call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Provides a summary of channel associations for a managed notification configuration.</p>
 * @public
 */
export interface ManagedNotificationChannelAssociationSummary {
  /**
   * <p>The unique identifier for the notification channel.</p>
   * @public
   */
  channelIdentifier: string | undefined;

  /**
   * <p>The type of notification channel used for message delivery.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ACCOUNT_CONTACT</code> </p> <ul> <li> <p>Delivers notifications to Account Managed contacts through the User Notification Service.</p> </li> </ul> </li> <li> <p> <code>MOBILE</code> </p> <ul> <li> <p>Delivers notifications through the Amazon Web Services Console Mobile Application to mobile devices.</p> </li> </ul> </li> <li> <p> <code>CHATBOT</code> </p> <ul> <li> <p>Delivers notifications through Amazon Q Developer in chat applications to collaboration platforms (Slack, Chime).</p> </li> </ul> </li> <li> <p> <code>EMAIL</code> </p> <ul> <li> <p>Delivers notifications to email addresses.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  channelType: ChannelType | undefined;

  /**
   * <p>Controls whether users can modify channel associations for a notification configuration.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ENABLED</code> </p> <ul> <li> <p>Users can associate or disassociate channels with the notification configuration.</p> </li> </ul> </li> <li> <p> <code>DISABLED</code> </p> <ul> <li> <p>Users cannot associate or disassociate channels with the notification configuration.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  overrideOption?: ChannelAssociationOverrideOption | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChannelAssociationsResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list that contains the following information about a channel association.</p>
   * @public
   */
  channelAssociations: ManagedNotificationChannelAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChildEventsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  aggregateManagedNotificationEventArn: string | undefined;

  /**
   * <p>The earliest time of events to return from this call.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>Latest time of events to return from this call.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The locale code of the language used for the retrieved <code>NotificationEvent</code>. The default locale is English.<code>en_US</code>.</p>
   * @public
   */
  locale?: LocaleCode | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. Defaults to 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the Managed Notification Child Events.</p>
   * @public
   */
  relatedAccount?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Organizations organizational unit (OU) associated with the Managed Notification Child Events.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous ListManagedNotificationChannelAssociations call. Next token uses Base64 encoding.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the headline message component.</p>
 * @public
 */
export interface MessageComponentsSummary {
  /**
   * <p>A sentence long summary. For example, titles or an email subject line.</p>
   * @public
   */
  headline: string | undefined;
}

/**
 * <p>A short summary and metadata for a managed notification event.</p>
 * @public
 */
export interface ManagedSourceEventMetadataSummary {
  /**
   * <p>The Region where the notification originated.</p>
   * @public
   */
  eventOriginRegion?: string | undefined;

  /**
   * <p>The source service of the notification.</p> <p>Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, <code>aws.ec2</code> and <code>aws.cloudwatch</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The event Type of the notification.</p>
   * @public
   */
  eventType: string | undefined;
}

/**
 * <p>Describes a short summary and metadata for a <code>ManagedNotificationChildEvent</code>.</p>
 * @public
 */
export interface ManagedNotificationChildEventSummary {
  /**
   * <p>The schema version of the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * <p>Contains all event metadata present identically across all <code>NotificationEvents</code>. All fields are present in Source Events via Eventbridge.</p>
   * @public
   */
  sourceEventMetadata: ManagedSourceEventMetadataSummary | undefined;

  /**
   * <p>Contains the headline message component.</p>
   * @public
   */
  messageComponents: MessageComponentsSummary | undefined;

  /**
   * <p>Provides detailed information about the dimensions used for event summarization and aggregation.</p>
   * @public
   */
  aggregationDetail: AggregationDetail | undefined;

  /**
   * <p>The perceived nature of the event.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>HEALTHY</code> </p> <ul> <li> <p>All EventRules are <code>ACTIVE</code> and any call can be run.</p> </li> </ul> </li> <li> <p> <code>UNHEALTHY</code> </p> <ul> <li> <p>Some EventRules are <code>ACTIVE</code> and some are <code>INACTIVE</code>. Any call can be run.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  eventStatus: EventStatus | undefined;

  /**
   * <p>The Type of the event causing this notification.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ALERT</code> </p> <ul> <li> <p>A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.</p> </li> </ul> </li> <li> <p> <code>WARNING</code> </p> <ul> <li> <p>A notification about an event where an issue is about to arise. For example, something is approaching a threshold.</p> </li> </ul> </li> <li> <p> <code>ANNOUNCEMENT</code> </p> <ul> <li> <p>A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.</p> </li> </ul> </li> <li> <p> <code>INFORMATIONAL</code> </p> <ul> <li> <p>A notification about informational messages. For example, recommendations, service announcements, or reminders.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  notificationType: NotificationType | undefined;
}

/**
 * <p>Describes an overview and metadata for a <code>ManagedNotificationChildEvent</code>.</p>
 * @public
 */
export interface ManagedNotificationChildEventOverview {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * <p>The account that related to the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * <p>The creation time of the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The content of the <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  childEvent: ManagedNotificationChildEventSummary | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ManagedNotificationEvent that is associated with this <code>ManagedNotificationChildEvent</code>.</p>
   * @public
   */
  aggregateManagedNotificationEventArn: string | undefined;

  /**
   * <p>The Organizational Unit Id that an AWS account belongs to.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationChildEventsResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  managedNotificationChildEvents: ManagedNotificationChildEventOverview[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationConfigurationsRequest {
  /**
   * <p>The identifier or ARN of the notification channel to filter configurations by.</p>
   * @public
   */
  channelIdentifier?: string | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. Defaults to 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous ListManagedNotificationChannelAssociations call. Next token uses Base64 encoding.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes the basic structure and properties of a <code>ManagedNotificationConfiguration</code>.</p>
 * @public
 */
export interface ManagedNotificationConfigurationStructure {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationConfigurationsResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of Managed Notification Configurations matching the request criteria.</p>
   * @public
   */
  managedNotificationConfigurations: ManagedNotificationConfigurationStructure[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationEventsRequest {
  /**
   * <p>The earliest time of events to return from this call.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>Latest time of events to return from this call.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The locale code of the language used for the retrieved NotificationEvent. The default locale is English (en_US).</p>
   * @public
   */
  locale?: LocaleCode | undefined;

  /**
   * <p>The Amazon Web Services service the event originates from. For example aws.cloudwatch.</p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. Defaults to 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous <code>ListManagedNotificationChannelAssociations</code> call. Next token uses Base64 encoding.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Organizational Unit Id that an Amazon Web Services account belongs to.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the Managed Notification Events.</p>
   * @public
   */
  relatedAccount?: string | undefined;
}

/**
 * <p>A short summary of a <code>ManagedNotificationEvent</code>. This is only used when listing managed notification events.</p>
 * @public
 */
export interface ManagedNotificationEventSummary {
  /**
   * <p>The schema version of the <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * <p>Contains metadata about the event that caused the <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  sourceEventMetadata: ManagedSourceEventMetadataSummary | undefined;

  /**
   * <p>Contains the headline message component.</p>
   * @public
   */
  messageComponents: MessageComponentsSummary | undefined;

  /**
   * <p>The managed notification event status.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>HEALTHY</code> </p> <ul> <li> <p>All <code>EventRules</code> are <code>ACTIVE</code>.</p> </li> </ul> </li> <li> <p> <code>UNHEALTHY</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  eventStatus: EventStatus | undefined;

  /**
   * <p>The Type of event causing the notification.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ALERT</code> </p> <ul> <li> <p>A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.</p> </li> </ul> </li> <li> <p> <code>WARNING</code> </p> <ul> <li> <p>A notification about an event where an issue is about to arise. For example, something is approaching a threshold.</p> </li> </ul> </li> <li> <p> <code>ANNOUNCEMENT</code> </p> <ul> <li> <p>A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.</p> </li> </ul> </li> <li> <p> <code>INFORMATIONAL</code> </p> <ul> <li> <p>A notification about informational messages. For example, recommendations, service announcements, or reminders.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  notificationType: NotificationType | undefined;
}

/**
 * <p>Describes an overview and metadata for a ManagedNotificationEvent.</p>
 * @public
 */
export interface ManagedNotificationEventOverview {
  /**
   * <p>The Amazon Resource Name (ARN) of the ManagedNotificationEvent.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>ManagedNotificationConfiguration</code>.</p>
   * @public
   */
  managedNotificationConfigurationArn: string | undefined;

  /**
   * <p>The account that related to the <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * <p>The creation time of the <code>ManagedNotificationEvent</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p/>
   * @public
   */
  notificationEvent: ManagedNotificationEventSummary | undefined;

  /**
   * <p>The notifications aggregation type.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>AGGREGATE</code> </p> <ul> <li> <p>The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period.</p> </li> </ul> </li> <li> <p> <code>CHILD</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>. Any call can be run.</p> </li> </ul> </li> <li> <p> <code>NONE</code> </p> <ul> <li> <p>The notification isn't aggregated.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * <p>The Organizational Unit Id that an Amazon Web Services account belongs to.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;

  /**
   * <p>Provides additional information about the aggregation key.</p>
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * <p>The list of the regions where the aggregated notifications in this <code>NotificationEvent</code> originated.</p>
   * @public
   */
  aggregatedNotificationRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListManagedNotificationEventsResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of Managed Notification Events matching the request criteria.</p>
   * @public
   */
  managedNotificationEvents: ManagedNotificationEventOverview[] | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification configuration used to filter the member accounts.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid values are 1-100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. Use the value returned in the previous response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The member account identifier used to filter the results.</p>
   * @public
   */
  memberAccount?: string | undefined;

  /**
   * <p>The status used to filter the member accounts.</p>
   * @public
   */
  status?: MemberAccountNotificationConfigurationStatus | undefined;

  /**
   * <p>The organizational unit ID used to filter the member accounts.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * <p>Contains information about a member account.</p>
 * @public
 */
export interface MemberAccount {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification configuration associated with the member account.</p>
   * @public
   */
  notificationConfigurationArn?: string | undefined;

  /**
   * <p>The AWS account ID of the member account.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The current status of the member account.</p>
   * @public
   */
  status: MemberAccountNotificationConfigurationStatus | undefined;

  /**
   * <p>The reason for the current status of the member account.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The unique identifier of the organizational unit containing the member account.</p>
   * @public
   */
  organizationalUnitId: string | undefined;
}

/**
 * @public
 */
export interface ListMemberAccountsResponse {
  /**
   * <p>The list of member accounts that match the specified criteria.</p>
   * @public
   */
  memberAccounts: MemberAccount[] | undefined;

  /**
   * <p>The token to use for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsRequest {
  /**
   * <p>The matched event source.</p> <p>Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, <code>aws.ec2</code> and <code>aws.cloudwatch</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  eventRuleSource?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Channel to match.</p>
   * @public
   */
  channelArn?: string | undefined;

  /**
   * <p>The <code>NotificationConfiguration</code> status to match.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ACTIVE</code> </p> <ul> <li> <p>All <code>EventRules</code> are <code>ACTIVE</code> and any call can be run.</p> </li> </ul> </li> <li> <p> <code>PARTIALLY_ACTIVE</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>. Any call can be run.</p> </li> <li> <p>Any call can be run.</p> </li> </ul> </li> <li> <p> <code>INACTIVE</code> </p> <ul> <li> <p>All <code>EventRules</code> are <code>INACTIVE</code> and any call can be run.</p> </li> </ul> </li> <li> <p> <code>DELETING</code> </p> <ul> <li> <p>This <code>NotificationConfiguration</code> is being deleted.</p> </li> <li> <p>Only <code>GET</code> and <code>LIST</code> calls can be run.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  status?: NotificationConfigurationStatus | undefined;

  /**
   * <p>The subtype used to filter the notification configurations in the request.</p>
   * @public
   */
  subtype?: NotificationConfigurationSubtype | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. Defaults to 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous <code>ListEventRules</code> call. Next token uses Base64 encoding.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the complete list of fields for a NotificationConfiguration.</p>
 * @public
 */
export interface NotificationConfigurationStructure {
  /**
   * <p>The Amazon Resource Name (ARN) of the <code>NotificationConfiguration</code> resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the <code>NotificationConfiguration</code>. Supports RFC 3986's unreserved characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The current status of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  status: NotificationConfigurationStatus | undefined;

  /**
   * <p>The creation time of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The aggregation preference of the <code>NotificationConfiguration</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>LONG</code> </p> <ul> <li> <p>Aggregate notifications for long periods of time (12 hours).</p> </li> </ul> </li> <li> <p> <code>SHORT</code> </p> <ul> <li> <p>Aggregate notifications for short periods of time (5 minutes).</p> </li> </ul> </li> <li> <p> <code>NONE</code> </p> <ul> <li> <p>Don't aggregate notifications.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;

  /**
   * <p>The subtype of the notification configuration.</p>
   * @public
   */
  subtype?: NotificationConfigurationSubtype | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The <code>NotificationConfigurations</code> in the account.</p>
   * @public
   */
  notificationConfigurations: NotificationConfigurationStructure[] | undefined;
}

/**
 * @public
 */
export interface ListNotificationEventsRequest {
  /**
   * <p>The earliest time of events to return from this call.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>Latest time of events to return from this call.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The locale code of the language used for the retrieved <code>NotificationEvent</code>. The default locale is English <code>(en_US)</code>.</p>
   * @public
   */
  locale?: LocaleCode | undefined;

  /**
   * <p>The matched event source.</p> <p>Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, <code>aws.ec2</code> and <code>aws.cloudwatch</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>Include aggregated child events in the result.</p>
   * @public
   */
  includeChildEvents?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>aggregatedNotificationEventArn</code> to match.</p>
   * @public
   */
  aggregateNotificationEventArn?: string | undefined;

  /**
   * <p>The maximum number of results to be returned in this call. Defaults to 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The start token for paginated calls. Retrieved from the response of a previous <code>ListEventRules</code> call. Next token uses Base64 encoding.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The unique identifier of the organizational unit used to filter notification events.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * <p>Contains metadata about the event that caused the <code>NotificationEvent</code>. For other specific values, see <code>sourceEventMetadata</code>.</p>
 * @public
 */
export interface SourceEventMetadataSummary {
  /**
   * <p>The Region where the notification originated.</p> <p>Unavailable for aggregated notifications.</p>
   * @public
   */
  eventOriginRegion?: string | undefined;

  /**
   * <p>The matched event source.</p> <p>Must match one of the valid EventBridge sources. Only Amazon Web Services service sourced events are supported. For example, <code>aws.ec2</code> and <code>aws.cloudwatch</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>The event type to match.</p> <p>Must match one of the valid Amazon EventBridge event types. For example, EC2 Instance State-change Notification and Amazon CloudWatch Alarm State Change. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level">Event delivery from Amazon Web Services services</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  eventType: string | undefined;
}

/**
 * <p>Describes a short summary and metadata for a <code>NotificationEvent</code>.</p>
 * @public
 */
export interface NotificationEventSummary {
  /**
   * <p>The schema version of the Notification Event.</p>
   * @public
   */
  schemaVersion: SchemaVersion | undefined;

  /**
   * <p>The source event metadata.</p>
   * @public
   */
  sourceEventMetadata: SourceEventMetadataSummary | undefined;

  /**
   * <p>The message components of a notification event.</p>
   * @public
   */
  messageComponents: MessageComponentsSummary | undefined;

  /**
   * <p>Provides additional information about the current status of the <code>NotificationEvent</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>HEALTHY</code> </p> <ul> <li> <p>All <code>EventRules</code> are <code>ACTIVE</code>.</p> </li> </ul> </li> <li> <p> <code>UNHEALTHY</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  eventStatus: EventStatus | undefined;

  /**
   * <p>The type of event causing the notification.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>ALERT</code> </p> <ul> <li> <p>A notification about an event where something was triggered, initiated, reopened, deployed, or a threshold was breached.</p> </li> </ul> </li> <li> <p> <code>WARNING</code> </p> <ul> <li> <p>A notification about an event where an issue is about to arise. For example, something is approaching a threshold.</p> </li> </ul> </li> <li> <p> <code>ANNOUNCEMENT</code> </p> <ul> <li> <p>A notification about an important event. For example, a step in a workflow or escalation path or that a workflow was updated.</p> </li> </ul> </li> <li> <p> <code>INFORMATIONAL</code> </p> <ul> <li> <p>A notification about informational messages. For example, recommendations, service announcements, or reminders.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  notificationType: NotificationType | undefined;
}

/**
 * <p>Describes a short summary of a <code>NotificationEvent</code>. This is only used when listing notification events.</p>
 * @public
 */
export interface NotificationEventOverview {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The account name containing the <code>NotificationHub</code>.</p>
   * @public
   */
  relatedAccount: string | undefined;

  /**
   * <p>The creation time of the <code>NotificationEvent</code>.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Refers to a <code>NotificationEventSummary</code> object.</p> <p>Similar in structure to <code>content</code> in the <code>GetNotificationEvent</code> response.</p>
   * @public
   */
  notificationEvent: NotificationEventSummary | undefined;

  /**
   * <p>The <code>NotificationConfiguration</code>'s aggregation type.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>AGGREGATE</code> </p> <ul> <li> <p>The notification event is an aggregate notification. Aggregate notifications summarize grouped events over a specified time period.</p> </li> </ul> </li> <li> <p> <code>CHILD</code> </p> <ul> <li> <p>Some <code>EventRules</code> are <code>ACTIVE</code> and some are <code>INACTIVE</code>. Any call can be run.</p> </li> </ul> </li> <li> <p> <code>NONE</code> </p> <ul> <li> <p>The notification isn't aggregated.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  aggregationEventType?: AggregationEventType | undefined;

  /**
   * <p>The ARN of the <code>aggregatedNotificationEventArn</code> to match.</p>
   * @public
   */
  aggregateNotificationEventArn?: string | undefined;

  /**
   * <p>Provides an aggregated summary data for notification events.</p>
   * @public
   */
  aggregationSummary?: AggregationSummary | undefined;

  /**
   * <p>The unique identifier of the organizational unit in the notification event overview.</p>
   * @public
   */
  organizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationEventsResponse {
  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of notification events.</p>
   * @public
   */
  notificationEvents: NotificationEventOverview[] | undefined;
}

/**
 * @public
 */
export interface ListNotificationHubsRequest {
  /**
   * <p>The maximum number of records to list in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token. Set to null to start listing notification hubs from the start.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Describes an overview of a <code>NotificationHub</code>.</p> <p>A <code>NotificationConfiguration</code> is an account-level setting used to select the Regions where you want to store, process and replicate your notifications.</p>
 * @public
 */
export interface NotificationHubOverview {
  /**
   * <p>The Region of the resource.</p>
   * @public
   */
  notificationHubRegion: string | undefined;

  /**
   * <p>The status summary of the resource.</p>
   * @public
   */
  statusSummary: NotificationHubStatusSummary | undefined;

  /**
   * <p>The date and time the <code>NotificationHubOverview</code> was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The most recent time this <code>NotificationHub</code> had an <code>ACTIVE</code> status.</p>
   * @public
   */
  lastActivationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListNotificationHubsResponse {
  /**
   * <p>The <code>NotificationHubs</code> in the account.</p>
   * @public
   */
  notificationHubs: NotificationHubOverview[] | undefined;

  /**
   * <p>A pagination token. If a non-null pagination token is returned in a result, pass its value in another request to retrieve more entries.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification configuration used to filter the organizational units.</p>
   * @public
   */
  notificationConfigurationArn: string | undefined;

  /**
   * <p>The maximum number of organizational units to return in a single call. Valid values are 1-100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. Use the value returned in the previous response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationalUnitsResponse {
  /**
   * <p>The list of organizational units that match the specified criteria.</p>
   * @public
   */
  organizationalUnits: string[] | undefined;

  /**
   * <p>The token to use for the next page of results. If there are no additional results, this value is null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to list tags.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags for the specified ARN.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) used to update the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The aggregation preference of the <code>NotificationConfiguration</code>.</p> <ul> <li> <p>Values:</p> <ul> <li> <p> <code>LONG</code> </p> <ul> <li> <p>Aggregate notifications for long periods of time (12 hours).</p> </li> </ul> </li> <li> <p> <code>SHORT</code> </p> <ul> <li> <p>Aggregate notifications for short periods of time (5 minutes).</p> </li> </ul> </li> <li> <p> <code>NONE</code> </p> <ul> <li> <p>Don't aggregate notifications.</p> </li> </ul> </li> </ul> </li> </ul>
   * @public
   */
  aggregationDuration?: AggregationDuration | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationResponse {
  /**
   * <p>The ARN used to update the <code>NotificationConfiguration</code>.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface RegisterNotificationHubRequest {
  /**
   * <p>The Region of the <code>NotificationHub</code>.</p>
   * @public
   */
  notificationHubRegion: string | undefined;
}

/**
 * @public
 */
export interface RegisterNotificationHubResponse {
  /**
   * <p>The Region of the <code>NotificationHub</code>.</p>
   * @public
   */
  notificationHubRegion: string | undefined;

  /**
   * <p>Provides additional information about the current <code>NotificationConfiguration</code> status information.</p>
   * @public
   */
  statusSummary: NotificationHubStatusSummary | undefined;

  /**
   * <p>The date the resource was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The date the resource was last activated.</p>
   * @public
   */
  lastActivationTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) to use to tag a resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
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
   * <p>The Amazon Resource Name (ARN) to use to untag a resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The tag keys to use to untag a resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
