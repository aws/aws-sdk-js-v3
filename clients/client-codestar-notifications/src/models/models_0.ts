// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodestarNotificationsServiceException as __BaseException } from "./CodestarNotificationsServiceException";

/**
 * @public
 * <p>AWS CodeStar Notifications can't create the notification rule because you do not have sufficient
 *       permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>AWS CodeStar Notifications can't complete the request because the resource is being modified by
 *       another process. Wait a few minutes and try again.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 */
export class ConfigurationException extends __BaseException {
  readonly name: "ConfigurationException" = "ConfigurationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Information about the Chatbot topics or Chatbot clients associated with a  notification rule.</p>
 */
export interface Target {
  /**
   * @public
   * <p>The target type. Can be an Chatbot topic or Chatbot client.</p>
   *          <ul>
   *             <li>
   *                <p>Chatbot topics are specified as <code>SNS</code>.</p>
   *             </li>
   *             <li>
   *                <p>Chatbot clients are specified as <code>AWSChatbotSlack</code>.</p>
   *             </li>
   *          </ul>
   */
  TargetType?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client.</p>
   */
  TargetAddress?: string;
}

/**
 * @public
 */
export interface CreateNotificationRuleRequest {
  /**
   * @public
   * <p>The name for the notification rule. Notification rule names must be unique in your Amazon Web Services account.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A list of event types associated with this notification rule. For a list of allowed
   *             events, see <a>EventTypeSummary</a>.</p>
   */
  EventTypeIds: string[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in CodePipeline,
   *       repositories in CodeCommit, and build projects in CodeBuild.</p>
   */
  Resource: string | undefined;

  /**
   * @public
   * <p>A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and Chatbot clients to associate with the
   *       notification rule.</p>
   */
  Targets: Target[] | undefined;

  /**
   * @public
   * <p>The level of detail to include in the notifications for this resource. <code>BASIC</code> will include only the
   *         contents of the event as it would appear in Amazon CloudWatch. <code>FULL</code> will include any supplemental information
   *         provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType: DetailType | undefined;

  /**
   * @public
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request with the same
   *             parameters is received and a token is included, the request returns information about
   *             the initial request that used that token.</p>
   *          <note>
   *             <p>The Amazon Web Services SDKs prepopulate client request tokens. If you are using an Amazon Web Services SDK, an
   *                 idempotency token is created for you.</p>
   *          </note>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>A list of tags to apply to this notification rule. Key names cannot start with "<code>aws</code>". </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The status of the notification rule. The default value is <code>ENABLED</code>. If the status is
   *             set to <code>DISABLED</code>, notifications aren't sent for the notification rule.</p>
   */
  Status?: NotificationRuleStatus;
}

/**
 * @public
 */
export interface CreateNotificationRuleResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>One of the AWS CodeStar Notifications limits has been exceeded. Limits apply to
 *             accounts, notification rules, notifications, resources, and targets. For more
 *             information, see Limits.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>A resource with the same name or ID already exists. Notification rule names must be
 *             unique in your Amazon Web Services account.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>One or more parameter values are not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule you want to delete.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationRuleResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the deleted notification rule.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DeleteTargetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client to delete.</p>
   */
  TargetAddress: string | undefined;

  /**
   * @public
   * <p>A Boolean value that can be used to delete all associations with this Chatbot topic. The
   *             default value is FALSE. If set to TRUE, all associations between that target and every
   *             notification rule in your Amazon Web Services account are deleted.</p>
   */
  ForceUnsubscribeAll?: boolean;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>Returns information about an event that has triggered a notification rule.</p>
 */
export interface EventTypeSummary {
  /**
   * @public
   * <p>The system-generated ID of the event. For a complete list of event types and IDs, see
   *           <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a>
   *           in the <i>Developer Tools Console User Guide</i>.</p>
   */
  EventTypeId?: string;

  /**
   * @public
   * <p>The name of the service for which the event applies.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>The name of the event.</p>
   */
  EventTypeName?: string;

  /**
   * @public
   * <p>The resource type of the event.</p>
   */
  ResourceType?: string;
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
 * @public
 * <p>Information about the targets specified for a notification rule.</p>
 */
export interface TargetSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client.</p>
   */
  TargetAddress?: string;

  /**
   * @public
   * <p>The type of the target (for example, <code>SNS</code>).</p>
   *          <ul>
   *             <li>
   *                <p>Chatbot topics are specified as <code>SNS</code>.</p>
   *             </li>
   *             <li>
   *                <p>Chatbot clients are specified as <code>AWSChatbotSlack</code>.</p>
   *             </li>
   *          </ul>
   */
  TargetType?: string;

  /**
   * @public
   * <p>The status of the target.</p>
   */
  TargetStatus?: TargetStatus;
}

/**
 * @public
 */
export interface DescribeNotificationRuleResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The name of the notification rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A list of the event types associated with the notification rule.</p>
   */
  EventTypes?: EventTypeSummary[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource associated with the notification
   *       rule.</p>
   */
  Resource?: string;

  /**
   * @public
   * <p>A list of the Chatbot topics and Chatbot clients associated with the notification rule.</p>
   */
  Targets?: TargetSummary[];

  /**
   * @public
   * <p>The level of detail included in the notifications for this resource. BASIC will include only the
   *             contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information
   *             provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType?: DetailType;

  /**
   * @public
   * <p>The name or email alias of the person who created the notification rule.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The status of the notification rule. Valid statuses are on (sending notifications) or off
   *       (not sending notifications).</p>
   */
  Status?: NotificationRuleStatus;

  /**
   * @public
   * <p>The date and time the notification rule was created, in timestamp format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The date and time the notification rule was most recently updated, in timestamp
   *             format.</p>
   */
  LastModifiedTimestamp?: Date;

  /**
   * @public
   * <p>The tags associated with the notification rule.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>AWS CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The value for the enumeration token used in the request to return the next batch of the results is not valid. </p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Information about a filter to apply to the list of returned event types. You can filter
 *       by resource type or service name.</p>
 */
export interface ListEventTypesFilter {
  /**
   * @public
   * <p>The system-generated name of the filter type you want to filter by.</p>
   */
  Name: ListEventTypesFilterName | undefined;

  /**
   * @public
   * <p>The name of the resource type (for example, pipeline) or service name (for example,
   *       CodePipeline) that you want to filter by.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListEventTypesRequest {
  /**
   * @public
   * <p>The filters to use to return information by service or resource type.</p>
   */
  Filters?: ListEventTypesFilter[];

  /**
   * @public
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of
   *       results that can be returned is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEventTypesResult {
  /**
   * @public
   * <p>Information about each event, including service name, resource type, event ID, and event
   *       name.</p>
   */
  EventTypes?: EventTypeSummary[];

  /**
   * @public
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;
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
 * @public
 * <p>Information about a filter to apply to the list of returned notification rules. You can
 *       filter by event type, owner, resource, or target.</p>
 */
export interface ListNotificationRulesFilter {
  /**
   * @public
   * <p>The name of the attribute you want to use to filter the returned notification rules.</p>
   */
  Name: ListNotificationRulesFilterName | undefined;

  /**
   * @public
   * <p>The value of the attribute you want to use to filter the returned notification rules. For example, if you specify filtering by <i>RESOURCE</i>
   *           in Name, you might specify the ARN of a pipeline in CodePipeline for the value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationRulesRequest {
  /**
   * @public
   * <p>The filters to use to return information by service or resource type. For valid values,
   *             see <a>ListNotificationRulesFilter</a>.</p>
   *          <note>
   *             <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p>
   *          </note>
   */
  Filters?: ListNotificationRulesFilter[];

  /**
   * @public
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A non-negative integer used to limit the number of returned results. The maximum number of
   *       results that can be returned is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Information about a specified notification rule.</p>
 */
export interface NotificationRuleSummary {
  /**
   * @public
   * <p>The unique ID of the notification rule.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ListNotificationRulesResult {
  /**
   * @public
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of notification rules for the Amazon Web Services account, by Amazon Resource Name (ARN) and ID. </p>
   */
  NotificationRules?: NotificationRuleSummary[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the notification rule.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * @public
   * <p>The tags associated with the notification rule.</p>
   */
  Tags?: Record<string, string>;
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
 * @public
 * <p>Information about a filter to apply to the list of returned targets. You can filter by
 *             target type, address, or status. For example, to filter results to notification rules
 *             that have active Chatbot topics as targets, you could specify a ListTargetsFilter
 *             Name as <code>TargetType</code> and a Value of <code>SNS</code>, and a Name of <code>TARGET_STATUS</code> and a Value of
 *             <code>ACTIVE</code>.</p>
 */
export interface ListTargetsFilter {
  /**
   * @public
   * <p>The name of the attribute you want to use to filter the returned targets.</p>
   */
  Name: ListTargetsFilterName | undefined;

  /**
   * @public
   * <p>The value of the attribute you want to use to filter the returned targets. For example,
   *             if you specify <code>SNS</code> for the Target type, you could specify an Amazon
   *             Resource Name (ARN) for a topic as the value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsRequest {
  /**
   * @public
   * <p>The filters to use to return information by service or resource type. Valid filters
   *             include target type, target address, and target status.</p>
   *          <note>
   *             <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p>
   *          </note>
   */
  Filters?: ListTargetsFilter[];

  /**
   * @public
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A non-negative integer used to limit the number of returned results. The maximum number of
   *       results that can be returned is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTargetsResult {
  /**
   * @public
   * <p>The list of notification rule targets. </p>
   */
  Targets?: TargetSummary[];

  /**
   * @public
   * <p>An enumeration token that can be used in a request to return the next batch of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SubscribeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>Information about the Chatbot topics or Chatbot clients associated with a  notification rule.</p>
   */
  Target: Target | undefined;

  /**
   * @public
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface SubscribeResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you have created assocations.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule to tag.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The list of tags to associate with the resource. Tag key names cannot start with "<code>aws</code>".</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {
  /**
   * @public
   * <p>The list of tags associated with the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UnsubscribeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The ARN of the Chatbot topic to unsubscribe from the notification rule.</p>
   */
  TargetAddress: string | undefined;
}

/**
 * @public
 */
export interface UnsubscribeResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the the notification rule from which you have removed a subscription.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule from which to remove the
   *       tags.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The key names of the tags to remove.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The name of the notification rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the notification rule. Valid statuses include enabled (sending notifications) or
   *       disabled (not sending notifications).</p>
   */
  Status?: NotificationRuleStatus;

  /**
   * @public
   * <p>A list of event types associated with this notification rule. For a complete list of event types and IDs, see
   *           <a href="https://docs.aws.amazon.com/codestar-notifications/latest/userguide/concepts.html#concepts-api">Notification concepts</a>
   *        in the <i>Developer Tools Console User Guide</i>.</p>
   */
  EventTypeIds?: string[];

  /**
   * @public
   * <p>The address and type of the targets to receive notifications from this notification
   *       rule.</p>
   */
  Targets?: Target[];

  /**
   * @public
   * <p>The level of detail to include in the notifications for this resource. BASIC will include only the
   *             contents of the event as it would appear in Amazon CloudWatch. FULL will include any supplemental information
   *             provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType?: DetailType;
}

/**
 * @public
 */
export interface UpdateNotificationRuleResult {}

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
  ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateNotificationRuleRequestFilterSensitiveLog = (obj: CreateNotificationRuleRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DeleteTargetRequestFilterSensitiveLog = (obj: DeleteTargetRequest): any => ({
  ...obj,
  ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TargetSummaryFilterSensitiveLog = (obj: TargetSummary): any => ({
  ...obj,
  ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeNotificationRuleResultFilterSensitiveLog = (obj: DescribeNotificationRuleResult): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTargetsResultFilterSensitiveLog = (obj: ListTargetsResult): any => ({
  ...obj,
  ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SubscribeRequestFilterSensitiveLog = (obj: SubscribeRequest): any => ({
  ...obj,
  ...(obj.Target && { Target: TargetFilterSensitiveLog(obj.Target) }),
});

/**
 * @internal
 */
export const UnsubscribeRequestFilterSensitiveLog = (obj: UnsubscribeRequest): any => ({
  ...obj,
  ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateNotificationRuleRequestFilterSensitiveLog = (obj: UpdateNotificationRuleRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetFilterSensitiveLog(item)) }),
});
