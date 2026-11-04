// smithy-typescript generated code
import type {
  DetailType,
  ListEventTypesFilterName,
  ListNotificationRulesFilterName,
  ListTargetsFilterName,
  NotificationRuleStatus,
  TargetStatus,
} from "./enums";

/**
 * Information about the Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients associated with a notification rule.
 *
 * @public
 */
export interface Target {
  /**
   * The target type. Can be an Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client.
   *
   * - Amazon Q Developer in chat applications topics are specified as `SNS`.
   * - Amazon Q Developer in chat applications clients are specified as `AWSChatbotSlack`.
   * - Amazon Q Developer in chat applications clients for Microsoft Teams are specified as `AWSChatbotMicrosoftTeams`.
   *
   * @public
   */
  TargetType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client.
   *
   * @public
   */
  TargetAddress?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotificationRuleRequest {
  /**
   * The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of event types associated with this notification rule. For a list of allowed events, see EventTypeSummary.
   *
   * @public
   */
  EventTypeIds: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline, repositories in CodeCommit, and build projects in CodeBuild.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Amazon Q Developer in chat applications clients to associate with the notification rule.
   *
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * The level of detail to include in the notifications for this resource. `BASIC` will include only the contents of the event as it would appear in Amazon CloudWatch. `FULL` will include any supplemental information provided by CodeStar Notifications and/or the service for the resource for which the notification is created.
   *
   * @public
   */
  DetailType: DetailType | undefined;

  /**
   * A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request with the same parameters is received and a token is included, the request returns information about the initial request that used that token.
   *
   * > **Note:** The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an idempotency token is created for you.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * A list of tags to apply to this notification rule. Key names cannot start with "`aws`".
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The status of the notification rule. The default value is `ENABLED`. If the status is set to `DISABLED`, notifications aren't sent for the notification rule.
   *
   * @public
   */
  Status?: NotificationRuleStatus | undefined;
}

/**
 * @public
 */
export interface CreateNotificationRuleResult {
  /**
   * The Amazon Resource Name (ARN) of the notification rule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationRuleRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification rule you want to delete.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationRuleResult {
  /**
   * The Amazon Resource Name (ARN) of the deleted notification rule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client to delete.
   *
   * @public
   */
  TargetAddress: string | undefined;

  /**
   * A Boolean value that can be used to delete all associations with this Amazon Q Developer in chat applications topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your Amazon Web Services account are deleted.
   *
   * @public
   */
  ForceUnsubscribeAll?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteTargetResult {}

/**
 * @public
 */
export interface DescribeNotificationRuleRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification rule.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * Returns information about an event that has triggered a notification rule.
 *
 * @public
 */
export interface EventTypeSummary {
  /**
   * The system-generated ID of the event. For a complete list of event types and IDs, see [Notification concepts](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api) in the *Developer Tools Console User Guide*.
   *
   * @public
   */
  EventTypeId?: string | undefined;

  /**
   * The name of the service for which the event applies.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The name of the event.
   *
   * @public
   */
  EventTypeName?: string | undefined;

  /**
   * The resource type of the event.
   *
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * Information about the targets specified for a notification rule.
 *
 * @public
 */
export interface TargetSummary {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client.
   *
   * @public
   */
  TargetAddress?: string | undefined;

  /**
   * The type of the target (for example, `SNS`).
   *
   * - Amazon Q Developer in chat applications topics are specified as `SNS`.
   * - Amazon Q Developer in chat applications clients for Slack are specified as `AWSChatbotSlack`.
   * - Amazon Q Developer in chat applications clients for Microsoft Teams are specified as `AWSChatbotMicrosoftTeams`.
   *
   * @public
   */
  TargetType?: string | undefined;

  /**
   * The status of the target.
   *
   * @public
   */
  TargetStatus?: TargetStatus | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationRuleResult {
  /**
   * The Amazon Resource Name (ARN) of the notification rule.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the notification rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of the event types associated with the notification rule.
   *
   * @public
   */
  EventTypes?: EventTypeSummary[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource associated with the notification rule.
   *
   * @public
   */
  Resource?: string | undefined;

  /**
   * A list of the Amazon Q Developer in chat applications topics and Amazon Q Developer in chat applications clients associated with the notification rule.
   *
   * @public
   */
  Targets?: TargetSummary[] | undefined;

  /**
   * The level of detail included in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by CodeStar Notifications and/or the service for the resource for which the notification is created.
   *
   * @public
   */
  DetailType?: DetailType | undefined;

  /**
   * The name or email alias of the person who created the notification rule.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The status of the notification rule. Valid statuses are on (sending notifications) or off (not sending notifications).
   *
   * @public
   */
  Status?: NotificationRuleStatus | undefined;

  /**
   * The date and time the notification rule was created, in timestamp format.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The date and time the notification rule was most recently updated, in timestamp format.
   *
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;

  /**
   * The tags associated with the notification rule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Information about a filter to apply to the list of returned event types. You can filter by resource type or service name.
 *
 * @public
 */
export interface ListEventTypesFilter {
  /**
   * The system-generated name of the filter type you want to filter by.
   *
   * @public
   */
  Name: ListEventTypesFilterName | undefined;

  /**
   * The name of the resource type (for example, pipeline) or service name (for example, CodePipeline) that you want to filter by.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListEventTypesRequest {
  /**
   * The filters to use to return information by service or resource type.
   *
   * @public
   */
  Filters?: ListEventTypesFilter[] | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEventTypesResult {
  /**
   * Information about each event, including service name, resource type, event ID, and event name.
   *
   * @public
   */
  EventTypes?: EventTypeSummary[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about a filter to apply to the list of returned notification rules. You can filter by event type, owner, resource, or target.
 *
 * @public
 */
export interface ListNotificationRulesFilter {
  /**
   * The name of the attribute you want to use to filter the returned notification rules.
   *
   * @public
   */
  Name: ListNotificationRulesFilterName | undefined;

  /**
   * The value of the attribute you want to use to filter the returned notification rules. For example, if you specify filtering by *RESOURCE* in Name, you might specify the ARN of a pipeline in CodePipeline for the value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationRulesRequest {
  /**
   * The filters to use to return information by service or resource type. For valid values, see ListNotificationRulesFilter.
   *
   * > **Note:** A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.
   *
   * @public
   */
  Filters?: ListNotificationRulesFilter[] | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about a specified notification rule.
 *
 * @public
 */
export interface NotificationRuleSummary {
  /**
   * The unique ID of the notification rule.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification rule.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationRulesResult {
  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of notification rules for the Amazon Web Services account, by Amazon Resource Name (ARN) and ID.
   *
   * @public
   */
  NotificationRules?: NotificationRuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the notification rule.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * The tags associated with the notification rule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Information about a filter to apply to the list of returned targets. You can filter by target type, address, or status. For example, to filter results to notification rules that have active Amazon Q Developer in chat applications topics as targets, you could specify a ListTargetsFilter Name as `TargetType` and a Value of `SNS`, and a Name of `TARGET_STATUS` and a Value of `ACTIVE`.
 *
 * @public
 */
export interface ListTargetsFilter {
  /**
   * The name of the attribute you want to use to filter the returned targets.
   *
   * @public
   */
  Name: ListTargetsFilterName | undefined;

  /**
   * The value of the attribute you want to use to filter the returned targets. For example, if you specify `SNS` for the Target type, you could specify an Amazon Resource Name (ARN) for a topic as the value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsRequest {
  /**
   * The filters to use to return information by service or resource type. Valid filters include target type, target address, and target status.
   *
   * > **Note:** A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.
   *
   * @public
   */
  Filters?: ListTargetsFilter[] | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A non-negative integer used to limit the number of returned results. The maximum number of results that can be returned is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTargetsResult {
  /**
   * The list of notification rule targets.
   *
   * @public
   */
  Targets?: TargetSummary[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubscribeRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Information about the Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients associated with a notification rule.
   *
   * @public
   */
  Target: Target | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface SubscribeResult {
  /**
   * The Amazon Resource Name (ARN) of the notification rule for which you have created assocations.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification rule to tag.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The list of tags to associate with the resource. Tag key names cannot start with "`aws`".
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {
  /**
   * The list of tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UnsubscribeRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification rule.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The ARN of the Amazon Q Developer in chat applications topic to unsubscribe from the notification rule.
   *
   * @public
   */
  TargetAddress: string | undefined;
}

/**
 * @public
 */
export interface UnsubscribeResult {
  /**
   * The Amazon Resource Name (ARN) of the the notification rule from which you have removed a subscription.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification rule from which to remove the tags.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The key names of the tags to remove.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}

/**
 * @public
 */
export interface UpdateNotificationRuleRequest {
  /**
   * The Amazon Resource Name (ARN) of the notification rule.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the notification rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the notification rule. Valid statuses include enabled (sending notifications) or disabled (not sending notifications).
   *
   * @public
   */
  Status?: NotificationRuleStatus | undefined;

  /**
   * A list of event types associated with this notification rule. For a complete list of event types and IDs, see [Notification concepts](https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api) in the *Developer Tools Console User Guide*.
   *
   * @public
   */
  EventTypeIds?: string[] | undefined;

  /**
   * The address and type of the targets to receive notifications from this notification rule.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * The level of detail to include in the notifications for this resource. BASIC will include only the contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information provided by CodeStar Notifications and/or the service for the resource for which the notification is created.
   *
   * @public
   */
  DetailType?: DetailType | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationRuleResult {}
