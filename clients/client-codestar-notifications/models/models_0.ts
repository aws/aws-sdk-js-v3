import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>AWS CodeStar Notifications can't create the notification rule because you do not have sufficient
 *       permissions.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS CodeStar Notifications can't complete the request because the resource is being modified by
 *       another process. Wait a few minutes and try again.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>Some or all of the configuration is incomplete, missing, or not valid.</p>
 */
export interface ConfigurationException extends __SmithyException, $MetadataBearer {
  name: "ConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace ConfigurationException {
  export const filterSensitiveLog = (obj: ConfigurationException): any => ({
    ...obj,
  });
}

export enum DetailType {
  BASIC = "BASIC",
  FULL = "FULL",
}

export enum NotificationRuleStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Information about the SNS topics associated with a  notification rule.</p>
 */
export interface Target {
  /**
   * <p>The target type. Can be an Amazon SNS topic.</p>
   */
  TargetType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic.</p>
   */
  TargetAddress?: string;
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
    ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
  });
}

export interface CreateNotificationRuleRequest {
  /**
   * <p>The name for the notification rule. Notifictaion rule names must be unique in your AWS
   *             account.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of event types associated with this notification rule. For a list of allowed
   *             events, see <a>EventTypeSummary</a>.</p>
   */
  EventTypeIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in AWS CodePipeline,
   *       repositories in AWS CodeCommit, and build projects in AWS CodeBuild.</p>
   */
  Resource: string | undefined;

  /**
   * <p>A list of Amazon Resource Names (ARNs) of SNS topics to associate with the
   *       notification rule.</p>
   */
  Targets: Target[] | undefined;

  /**
   * <p>The level of detail to include in the notifications for this resource. BASIC will include only the
   *         contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information
   *         provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType: DetailType | string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request with the same
   *             parameters is received and a token is included, the request returns information about
   *             the initial request that used that token.</p>
   *         <note>
   *             <p>The AWS SDKs prepopulate client request tokens. If you are using an AWS SDK, an
   *                 idempotency token is created for you.</p>
   *         </note>
   */
  ClientRequestToken?: string;

  /**
   * <p>A list of tags to apply to this notification rule. Key names cannot start with "aws". </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The status of the notification rule. The default value is ENABLED. If the status is
   *             set to DISABLED, notifications aren't sent for the notification rule.</p>
   */
  Status?: NotificationRuleStatus | string;
}

export namespace CreateNotificationRuleRequest {
  export const filterSensitiveLog = (obj: CreateNotificationRuleRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Targets && { Targets: obj.Targets.map((item) => Target.filterSensitiveLog(item)) }),
  });
}

export interface CreateNotificationRuleResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn?: string;
}

export namespace CreateNotificationRuleResult {
  export const filterSensitiveLog = (obj: CreateNotificationRuleResult): any => ({
    ...obj,
  });
}

/**
 * <p>One of the AWS CodeStar Notifications limits has been exceeded. Limits apply to
 *             accounts, notification rules, notifications, resources, and targets. For more
 *             information, see Limits.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the same name or ID already exists. Notification rule names must be
 *             unique in your AWS account.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteNotificationRuleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule you want to delete.</p>
   */
  Arn: string | undefined;
}

export namespace DeleteNotificationRuleRequest {
  export const filterSensitiveLog = (obj: DeleteNotificationRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteNotificationRuleResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted notification rule.</p>
   */
  Arn?: string;
}

export namespace DeleteNotificationRuleResult {
  export const filterSensitiveLog = (obj: DeleteNotificationRuleResult): any => ({
    ...obj,
  });
}

export interface DeleteTargetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to delete.</p>
   */
  TargetAddress: string | undefined;

  /**
   * <p>A Boolean value that can be used to delete all associations with this SNS topic. The
   *             default value is FALSE. If set to TRUE, all associations between that target and every
   *             notification rule in your AWS account are deleted.</p>
   */
  ForceUnsubscribeAll?: boolean;
}

export namespace DeleteTargetRequest {
  export const filterSensitiveLog = (obj: DeleteTargetRequest): any => ({
    ...obj,
    ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
  });
}

export interface DeleteTargetResult {}

export namespace DeleteTargetResult {
  export const filterSensitiveLog = (obj: DeleteTargetResult): any => ({
    ...obj,
  });
}

export interface DescribeNotificationRuleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;
}

export namespace DescribeNotificationRuleRequest {
  export const filterSensitiveLog = (obj: DescribeNotificationRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an event that has triggered a notification rule.</p>
 */
export interface EventTypeSummary {
  /**
   * <p>The system-generated ID of the event.</p>
   */
  EventTypeId?: string;

  /**
   * <p>The name of the service for which the event applies.</p>
   */
  ServiceName?: string;

  /**
   * <p>The name of the event.</p>
   */
  EventTypeName?: string;

  /**
   * <p>The resource type of the event.</p>
   */
  ResourceType?: string;
}

export namespace EventTypeSummary {
  export const filterSensitiveLog = (obj: EventTypeSummary): any => ({
    ...obj,
  });
}

export enum TargetStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
  UNREACHABLE = "UNREACHABLE",
}

/**
 * <p>Information about the targets specified for a notification rule.</p>
 */
export interface TargetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic.</p>
   */
  TargetAddress?: string;

  /**
   * <p>The type of the target (for example, SNS).</p>
   */
  TargetType?: string;

  /**
   * <p>The status of the target.</p>
   */
  TargetStatus?: TargetStatus | string;
}

export namespace TargetSummary {
  export const filterSensitiveLog = (obj: TargetSummary): any => ({
    ...obj,
    ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
  });
}

export interface DescribeNotificationRuleResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the notification rule.</p>
   */
  Name?: string;

  /**
   * <p>A list of the event types associated with the notification rule.</p>
   */
  EventTypes?: EventTypeSummary[];

  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the notification
   *       rule.</p>
   */
  Resource?: string;

  /**
   * <p>A list of the SNS topics associated with the notification rule.</p>
   */
  Targets?: TargetSummary[];

  /**
   * <p>The level of detail included in the notifications for this resource. BASIC will include only the
   *             contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information
   *             provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType?: DetailType | string;

  /**
   * <p>The name or email alias of the person who created the notification rule.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The status of the notification rule. Valid statuses are on (sending notifications) or off
   *       (not sending notifications).</p>
   */
  Status?: NotificationRuleStatus | string;

  /**
   * <p>The date and time the notification rule was created, in timestamp format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The date and time the notification rule was most recently updated, in timestamp
   *             format.</p>
   */
  LastModifiedTimestamp?: Date;

  /**
   * <p>The tags associated with the notification rule.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeNotificationRuleResult {
  export const filterSensitiveLog = (obj: DescribeNotificationRuleResult): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummary.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>AWS CodeStar Notifications can't find a resource that matches the provided ARN. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The value for the enumeration token used in the request to return the next batch of the results is not valid. </p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export enum ListEventTypesFilterName {
  RESOURCE_TYPE = "RESOURCE_TYPE",
  SERVICE_NAME = "SERVICE_NAME",
}

/**
 * <p>Information about a filter to apply to the list of returned event types. You can filter
 *       by resource type or service name.</p>
 */
export interface ListEventTypesFilter {
  /**
   * <p>The system-generated name of the filter type you want to filter by.</p>
   */
  Name: ListEventTypesFilterName | string | undefined;

  /**
   * <p>The name of the resource type (for example, pipeline) or service name (for example,
   *       CodePipeline) that you want to filter by.</p>
   */
  Value: string | undefined;
}

export namespace ListEventTypesFilter {
  export const filterSensitiveLog = (obj: ListEventTypesFilter): any => ({
    ...obj,
  });
}

export interface ListEventTypesRequest {
  /**
   * <p>The filters to use to return information by service or resource type.</p>
   */
  Filters?: ListEventTypesFilter[];

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of
   *       results that can be returned is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListEventTypesRequest {
  export const filterSensitiveLog = (obj: ListEventTypesRequest): any => ({
    ...obj,
  });
}

export interface ListEventTypesResult {
  /**
   * <p>Information about each event, including service name, resource type, event ID, and event
   *       name.</p>
   */
  EventTypes?: EventTypeSummary[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;
}

export namespace ListEventTypesResult {
  export const filterSensitiveLog = (obj: ListEventTypesResult): any => ({
    ...obj,
  });
}

export enum ListNotificationRulesFilterName {
  CREATED_BY = "CREATED_BY",
  EVENT_TYPE_ID = "EVENT_TYPE_ID",
  RESOURCE = "RESOURCE",
  TARGET_ADDRESS = "TARGET_ADDRESS",
}

/**
 * <p>Information about a filter to apply to the list of returned notification rules. You can
 *       filter by event type, owner, resource, or target.</p>
 */
export interface ListNotificationRulesFilter {
  /**
   * <p>The name of the attribute you want to use to filter the returned notification rules.</p>
   */
  Name: ListNotificationRulesFilterName | string | undefined;

  /**
   * <p>The value of the attribute you want to use to filter the returned notification rules. For example, if you specify filtering by <i>RESOURCE</i>
   *           in Name, you might specify the ARN of a pipeline in AWS CodePipeline for the value.</p>
   */
  Value: string | undefined;
}

export namespace ListNotificationRulesFilter {
  export const filterSensitiveLog = (obj: ListNotificationRulesFilter): any => ({
    ...obj,
  });
}

export interface ListNotificationRulesRequest {
  /**
   * <p>The filters to use to return information by service or resource type. For valid values,
   *             see <a>ListNotificationRulesFilter</a>.</p>
   *          <note>
   *             <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p>
   *          </note>
   */
  Filters?: ListNotificationRulesFilter[];

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>A non-negative integer used to limit the number of returned results. The maximum number of
   *       results that can be returned is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListNotificationRulesRequest {
  export const filterSensitiveLog = (obj: ListNotificationRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a specified notification rule.</p>
 */
export interface NotificationRuleSummary {
  /**
   * <p>The unique ID of the notification rule.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn?: string;
}

export namespace NotificationRuleSummary {
  export const filterSensitiveLog = (obj: NotificationRuleSummary): any => ({
    ...obj,
  });
}

export interface ListNotificationRulesResult {
  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of notification rules for the AWS account, by Amazon Resource Name (ARN) and ID. </p>
   */
  NotificationRules?: NotificationRuleSummary[];
}

export namespace ListNotificationRulesResult {
  export const filterSensitiveLog = (obj: ListNotificationRulesResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the notification rule.</p>
   */
  Arn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResult {
  /**
   * <p>The tags associated with the notification rule.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResult {
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
}

export enum ListTargetsFilterName {
  TARGET_ADDRESS = "TARGET_ADDRESS",
  TARGET_STATUS = "TARGET_STATUS",
  TARGET_TYPE = "TARGET_TYPE",
}

/**
 * <p>Information about a filter to apply to the list of returned targets. You can filter by
 *             target type, address, or status. For example, to filter results to notification rules
 *             that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter
 *             Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of
 *             ACTIVE.</p>
 */
export interface ListTargetsFilter {
  /**
   * <p>The name of the attribute you want to use to filter the returned targets.</p>
   */
  Name: ListTargetsFilterName | string | undefined;

  /**
   * <p>The value of the attribute you want to use to filter the returned targets. For example,
   *             if you specify <i>SNS</i> for the Target type, you could specify an Amazon
   *             Resource Name (ARN) for a topic as the value.</p>
   */
  Value: string | undefined;
}

export namespace ListTargetsFilter {
  export const filterSensitiveLog = (obj: ListTargetsFilter): any => ({
    ...obj,
  });
}

export interface ListTargetsRequest {
  /**
   * <p>The filters to use to return information by service or resource type. Valid filters
   *             include target type, target address, and target status.</p>
   *          <note>
   *             <p>A filter with the same name can appear more than once when used with OR statements. Filters with different names should be applied with AND statements.</p>
   *          </note>
   */
  Filters?: ListTargetsFilter[];

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>A non-negative integer used to limit the number of returned results. The maximum number of
   *       results that can be returned is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListTargetsRequest {
  export const filterSensitiveLog = (obj: ListTargetsRequest): any => ({
    ...obj,
  });
}

export interface ListTargetsResult {
  /**
   * <p>The list of notification rule targets. </p>
   */
  Targets?: TargetSummary[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of
   *             results.</p>
   */
  NextToken?: string;
}

export namespace ListTargetsResult {
  export const filterSensitiveLog = (obj: ListTargetsResult): any => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummary.filterSensitiveLog(item)) }),
  });
}

export interface SubscribeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Information about the SNS topics associated with a  notification rule.</p>
   */
  Target: Target | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  ClientRequestToken?: string;
}

export namespace SubscribeRequest {
  export const filterSensitiveLog = (obj: SubscribeRequest): any => ({
    ...obj,
    ...(obj.Target && { Target: Target.filterSensitiveLog(obj.Target) }),
  });
}

export interface SubscribeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you have created assocations.</p>
   */
  Arn?: string;
}

export namespace SubscribeResult {
  export const filterSensitiveLog = (obj: SubscribeResult): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule to tag.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The list of tags to associate with the resource. Tag key names cannot start with "aws".</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResult {
  /**
   * <p>The list of tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace TagResourceResult {
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
}

export interface UnsubscribeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The ARN of the SNS topic to unsubscribe from the notification rule.</p>
   */
  TargetAddress: string | undefined;
}

export namespace UnsubscribeRequest {
  export const filterSensitiveLog = (obj: UnsubscribeRequest): any => ({
    ...obj,
    ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
  });
}

export interface UnsubscribeResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the the notification rule from which you have removed a subscription.</p>
   */
  Arn: string | undefined;
}

export namespace UnsubscribeResult {
  export const filterSensitiveLog = (obj: UnsubscribeResult): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule from which to remove the
   *       tags.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The key names of the tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResult {}

export namespace UntagResourceResult {
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
}

export interface UpdateNotificationRuleRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the notification rule.</p>
   */
  Name?: string;

  /**
   * <p>The status of the notification rule. Valid statuses include enabled (sending notifications) or
   *       disabled (not sending notifications).</p>
   */
  Status?: NotificationRuleStatus | string;

  /**
   * <p>A list of event types associated with this notification rule.</p>
   */
  EventTypeIds?: string[];

  /**
   * <p>The address and type of the targets to receive notifications from this notification
   *       rule.</p>
   */
  Targets?: Target[];

  /**
   * <p>The level of detail to include in the notifications for this resource. BASIC will include only the
   *             contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information
   *             provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType?: DetailType | string;
}

export namespace UpdateNotificationRuleRequest {
  export const filterSensitiveLog = (obj: UpdateNotificationRuleRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Targets && { Targets: obj.Targets.map((item) => Target.filterSensitiveLog(item)) }),
  });
}

export interface UpdateNotificationRuleResult {}

export namespace UpdateNotificationRuleResult {
  export const filterSensitiveLog = (obj: UpdateNotificationRuleResult): any => ({
    ...obj,
  });
}
