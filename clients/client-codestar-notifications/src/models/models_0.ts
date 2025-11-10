// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodestarNotificationsServiceException as __BaseException } from "./CodestarNotificationsServiceException";

/**
 * <p>CodeStar Notifications can't create the notification rule because you do not have sufficient
 *       permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>CodeStar Notifications can't complete the request because the resource is being modified by
 *       another process. Wait a few minutes and try again.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 * @public
 */
export class ConfigurationException extends __BaseException {
  readonly name: "ConfigurationException" = "ConfigurationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConfigurationException, __BaseException>) {
    super({
      name: "ConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DetailType = {
  BASIC: "BASIC",
  FULL: "FULL",
} as const;

/**
 * @public
 */
export type DetailType = (typeof DetailType)[keyof typeof DetailType];

/**
 * @public
 * @enum
 */
export const NotificationRuleStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type NotificationRuleStatus = (typeof NotificationRuleStatus)[keyof typeof NotificationRuleStatus];

/**
 * <p>Information about the Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients associated with a  notification rule.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The target type. Can be an Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Q Developer in chat applications topics are specified as <code>SNS</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Q Developer in chat applications clients are specified as <code>AWSChatbotSlack</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client.</p>
   * @public
   */
  TargetAddress?: string | undefined;
}

/**
 * @public
 */
export interface CreateNotificationRuleRequest {
  /**
   * <p>The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of event types associated with this notification rule. For a list of allowed
   *             events, see <a>EventTypeSummary</a>.</p>
   * @public
   */
  EventTypeIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline,
   *       repositories in CodeCommit, and build projects in CodeBuild.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Amazon Q Developer in chat applications clients to associate with the
   *       notification rule.</p>
   * @public
   */
  Targets: Target[] | undefined;

  /**
   * <p>The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the
   *         contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information
   *         provided by CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   * @public
   */
  DetailType: DetailType | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request with the same
   *             parameters is received and a token is included, the request returns information about
   *             the initial request that used that token.</p>
   *          <note>
   *             <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an
   *                 idempotency token is created for you.</p>
   *          </note>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>". </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The status of the notification rule. The default value is <code>ENABLED</code>. If the status is
   *             set to <code>DISABLED</code>, notifications aren't sent for the notification rule.</p>
   * @public
   */
  Status?: NotificationRuleStatus | undefined;
}

/**
 * @public
 */
export interface CreateNotificationRuleResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>One of the CodeStar Notifications limits has been exceeded. Limits apply to
 *             accounts, notification rules, notifications, resources, and targets. For more
 *             information, see Limits.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource with the same name or ID already exists. Notification rule names must be
 *             unique in your Amazon Web Services account.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more parameter values are not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteNotificationRuleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule you want to delete.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationRuleResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted notification rule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTargetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client to delete.</p>
   * @public
   */
  TargetAddress: string | undefined;

  /**
   * <p>A Boolean value that can be used to delete all associations with this Amazon Q Developer in chat applications topic. The
   *             default value is FALSE. If set to TRUE, all associations between that target and every
   *             notification rule in your Amazon Web Services account are deleted.</p>
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
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>Returns information about an event that has triggered a notification rule.</p>
 * @public
 */
export interface EventTypeSummary {
  /**
   * <p>The system-generated ID of the event. For a complete list of event types and IDs, see
   *           <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a>
   *           in the <i>Developer Tools Console User Guide</i>.</p>
   * @public
   */
  EventTypeId?: string | undefined;

  /**
   * <p>The name of the service for which the event applies.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>The name of the event.</p>
   * @public
   */
  EventTypeName?: string | undefined;

  /**
   * <p>The resource type of the event.</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  ACTIVE: "ACTIVE",
  DEACTIVATED: "DEACTIVATED",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
  UNREACHABLE: "UNREACHABLE",
} as const;

/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

/**
 * <p>Information about the targets specified for a notification rule.</p>
 * @public
 */
export interface TargetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Developer in chat applications topic or Amazon Q Developer in chat applications client.</p>
   * @public
   */
  TargetAddress?: string | undefined;

  /**
   * <p>The type of the target (for example, <code>SNS</code>).</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Q Developer in chat applications topics are specified as <code>SNS</code>.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Q Developer in chat applications clients are specified as <code>AWSChatbotSlack</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TargetType?: string | undefined;

  /**
   * <p>The status of the target.</p>
   * @public
   */
  TargetStatus?: TargetStatus | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationRuleResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the notification rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of the event types associated with the notification rule.</p>
   * @public
   */
  EventTypes?: EventTypeSummary[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the notification
   *       rule.</p>
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>A list of the Amazon Q Developer in chat applications topics and Amazon Q Developer in chat applications clients associated with the notification rule.</p>
   * @public
   */
  Targets?: TargetSummary[] | undefined;

  /**
   * <p>The level of detail included in the notifications for this resource. BASIC will include only the
   *             contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information
   *             provided by CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   * @public
   */
  DetailType?: DetailType | undefined;

  /**
   * <p>The name or email alias of the person who created the notification rule.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The status of the notification rule. Valid statuses are on (sending notifications) or off
   *       (not sending notifications).</p>
   * @public
   */
  Status?: NotificationRuleStatus | undefined;

  /**
   * <p>The date and time the notification rule was created, in timestamp format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The date and time the notification rule was most recently updated, in timestamp
   *             format.</p>
   * @public
   */
  LastModifiedTimestamp?: Date | undefined;

  /**
   * <p>The tags associated with the notification rule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The value for the enumeration token used in the request to return the next batch of the results is not valid. </p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ListEventTypesFilterName = {
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SERVICE_NAME: "SERVICE_NAME",
} as const;

/**
 * @public
 */
export type ListEventTypesFilterName = (typeof ListEventTypesFilterName)[keyof typeof ListEventTypesFilterName];

/**
 * <p>Information about a filter to apply to the list of returned event types. You can filter
 *       by resource type or service name.</p>
 * @public
 */
export interface ListEventTypesFilter {
  /**
   * <p>The system-generated name of the filter type you want to filter by.</p>
   * @public
   */
  Name: ListEventTypesFilterName | undefined;

  /**
   * <p>The name of the resource type (for example, pipeline) or service name (for example,
   *       CodePipeline) that you want to filter by.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListEventTypesRequest {
  /**
   * <p>The filters to use to return information by service or resource type.</p>
   * @public
   */
  Filters?: ListEventTypesFilter[] | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of
   *       results that can be returned is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEventTypesResult {
  /**
   * <p>Information about each event, including service name, resource type, event ID, and event
   *       name.</p>
   * @public
   */
  EventTypes?: EventTypeSummary[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListNotificationRulesFilterName = {
  CREATED_BY: "CREATED_BY",
  EVENT_TYPE_ID: "EVENT_TYPE_ID",
  RESOURCE: "RESOURCE",
  TARGET_ADDRESS: "TARGET_ADDRESS",
} as const;

/**
 * @public
 */
export type ListNotificationRulesFilterName =
  (typeof ListNotificationRulesFilterName)[keyof typeof ListNotificationRulesFilterName];

/**
 * <p>Information about a filter to apply to the list of returned notification rules. You can
 *       filter by event type, owner, resource, or target.</p>
 * @public
 */
export interface ListNotificationRulesFilter {
  /**
   * <p>The name of the attribute you want to use to filter the returned notification rules.</p>
   * @public
   */
  Name: ListNotificationRulesFilterName | undefined;

  /**
   * <p>The value of the attribute you want to use to filter the returned notification rules. For example, if you specify filtering by <i>RESOURCE</i>
   *           in Name, you might specify the ARN of a pipeline in CodePipeline for the value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationRulesRequest {
  /**
   * <p>The filters to use to return information by service or resource type. For valid values,
   *             see <a>ListNotificationRulesFilter</a>.</p>
   *          <note>
   *             <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p>
   *          </note>
   * @public
   */
  Filters?: ListNotificationRulesFilter[] | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A non-negative integer used to limit the number of returned results. The maximum number of
   *       results that can be returned is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about a specified notification rule.</p>
 * @public
 */
export interface NotificationRuleSummary {
  /**
   * <p>The unique ID of the notification rule.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationRulesResult {
  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of notification rules for the Amazon Web Services account, by Amazon Resource Name (ARN) and ID. </p>
   * @public
   */
  NotificationRules?: NotificationRuleSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the notification rule.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>The tags associated with the notification rule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ListTargetsFilterName = {
  TARGET_ADDRESS: "TARGET_ADDRESS",
  TARGET_STATUS: "TARGET_STATUS",
  TARGET_TYPE: "TARGET_TYPE",
} as const;

/**
 * @public
 */
export type ListTargetsFilterName = (typeof ListTargetsFilterName)[keyof typeof ListTargetsFilterName];

/**
 * <p>Information about a filter to apply to the list of returned targets. You can filter by
 *             target type, address, or status. For example, to filter results to notification rules
 *             that have active Amazon Q Developer in chat applications topics as targets, you could specify a ListTargetsFilter
 *             Name as <code>TargetType</code> and a Value of <code>SNS</code>, and a Name of <code>TARGET_STATUS</code> and a Value of
 *             <code>ACTIVE</code>.</p>
 * @public
 */
export interface ListTargetsFilter {
  /**
   * <p>The name of the attribute you want to use to filter the returned targets.</p>
   * @public
   */
  Name: ListTargetsFilterName | undefined;

  /**
   * <p>The value of the attribute you want to use to filter the returned targets. For example,
   *             if you specify <code>SNS</code> for the Target type, you could specify an Amazon
   *             Resource Name (ARN) for a topic as the value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsRequest {
  /**
   * <p>The filters to use to return information by service or resource type. Valid filters
   *             include target type, target address, and target status.</p>
   *          <note>
   *             <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p>
   *          </note>
   * @public
   */
  Filters?: ListTargetsFilter[] | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A non-negative integer used to limit the number of returned results. The maximum number of
   *       results that can be returned is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTargetsResult {
  /**
   * <p>The list of notification rule targets. </p>
   * @public
   */
  Targets?: TargetSummary[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubscribeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Information about the Amazon Q Developer in chat applications topics or Amazon Q Developer in chat applications clients associated with a  notification rule.</p>
   * @public
   */
  Target: Target | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface SubscribeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you have created assocations.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule to tag.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The list of tags to associate with the resource. Tag key names cannot start with "<code>aws</code>".</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {
  /**
   * <p>The list of tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UnsubscribeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The ARN of the Amazon Q Developer in chat applications topic to unsubscribe from the notification rule.</p>
   * @public
   */
  TargetAddress: string | undefined;
}

/**
 * @public
 */
export interface UnsubscribeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the the notification rule from which you have removed a subscription.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule from which to remove the
   *       tags.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The key names of the tags to remove.</p>
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
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the notification rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the notification rule. Valid statuses include enabled (sending notifications) or
   *       disabled (not sending notifications).</p>
   * @public
   */
  Status?: NotificationRuleStatus | undefined;

  /**
   * <p>A list of event types associated with this notification rule. For a complete list of event types and IDs, see
   *           <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a>
   *        in the <i>Developer Tools Console User Guide</i>.</p>
   * @public
   */
  EventTypeIds?: string[] | undefined;

  /**
   * <p>The address and type of the targets to receive notifications from this notification
   *       rule.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>The level of detail to include in the notifications for this resource. BASIC will include only the
   *             contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information
   *             provided by CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   * @public
   */
  DetailType?: DetailType | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationRuleResult {}
