import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
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
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
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
  export const isa = (o: any): o is ConcurrentModificationException => __isa(o, "ConcurrentModificationException");
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
  export const isa = (o: any): o is ConfigurationException => __isa(o, "ConfigurationException");
}

export interface CreateNotificationRuleRequest {
  __type?: "CreateNotificationRuleRequest";
  /**
   * <p>A list of tags to apply to this notification rule. Key names cannot start with "aws". </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A list of event types associated with this notification rule. For a list of allowed
   *             events, see <a>EventTypeSummary</a>.</p>
   */
  EventTypeIds: string[] | undefined;

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
   * <p>The level of detail to include in the notifications for this resource. BASIC will include only the
   *         contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information
   *         provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType: DetailType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in AWS CodePipeline,
   *       repositories in AWS CodeCommit, and build projects in AWS CodeBuild.</p>
   */
  Resource: string | undefined;

  /**
   * <p>The status of the notification rule. The default value is ENABLED. If the status is
   *             set to DISABLED, notifications aren't sent for the notification rule.</p>
   */
  Status?: NotificationRuleStatus | string;

  /**
   * <p>A list of Amazon Resource Names (ARNs) of SNS topics to associate with the
   *       notification rule.</p>
   */
  Targets: Target[] | undefined;

  /**
   * <p>The name for the notification rule. Notifictaion rule names must be unique in your AWS
   *             account.</p>
   */
  Name: string | undefined;
}

export namespace CreateNotificationRuleRequest {
  export const filterSensitiveLog = (obj: CreateNotificationRuleRequest): any => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => Target.filterSensitiveLog(item)) }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is CreateNotificationRuleRequest => __isa(o, "CreateNotificationRuleRequest");
}

export interface CreateNotificationRuleResult {
  __type?: "CreateNotificationRuleResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn?: string;
}

export namespace CreateNotificationRuleResult {
  export const filterSensitiveLog = (obj: CreateNotificationRuleResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateNotificationRuleResult => __isa(o, "CreateNotificationRuleResult");
}

export interface DeleteNotificationRuleRequest {
  __type?: "DeleteNotificationRuleRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule you want to delete.</p>
   */
  Arn: string | undefined;
}

export namespace DeleteNotificationRuleRequest {
  export const filterSensitiveLog = (obj: DeleteNotificationRuleRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteNotificationRuleRequest => __isa(o, "DeleteNotificationRuleRequest");
}

export interface DeleteNotificationRuleResult {
  __type?: "DeleteNotificationRuleResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted notification rule.</p>
   */
  Arn?: string;
}

export namespace DeleteNotificationRuleResult {
  export const filterSensitiveLog = (obj: DeleteNotificationRuleResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteNotificationRuleResult => __isa(o, "DeleteNotificationRuleResult");
}

export interface DeleteTargetRequest {
  __type?: "DeleteTargetRequest";
  /**
   * <p>A Boolean value that can be used to delete all associations with this SNS topic. The
   *             default value is FALSE. If set to TRUE, all associations between that target and every
   *             notification rule in your AWS account are deleted.</p>
   */
  ForceUnsubscribeAll?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to delete.</p>
   */
  TargetAddress: string | undefined;
}

export namespace DeleteTargetRequest {
  export const filterSensitiveLog = (obj: DeleteTargetRequest): any => ({
    ...obj,
    ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DeleteTargetRequest => __isa(o, "DeleteTargetRequest");
}

export interface DeleteTargetResult {
  __type?: "DeleteTargetResult";
}

export namespace DeleteTargetResult {
  export const filterSensitiveLog = (obj: DeleteTargetResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteTargetResult => __isa(o, "DeleteTargetResult");
}

export interface DescribeNotificationRuleRequest {
  __type?: "DescribeNotificationRuleRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;
}

export namespace DescribeNotificationRuleRequest {
  export const filterSensitiveLog = (obj: DescribeNotificationRuleRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeNotificationRuleRequest => __isa(o, "DescribeNotificationRuleRequest");
}

export interface DescribeNotificationRuleResult {
  __type?: "DescribeNotificationRuleResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time the notification rule was most recently updated, in timestamp
   *             format.</p>
   */
  LastModifiedTimestamp?: Date;

  /**
   * <p>The level of detail included in the notifications for this resource. BASIC will include only the
   *             contents of the event as it would appear in AWS CloudWatch. FULL will include any supplemental information
   *             provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.</p>
   */
  DetailType?: DetailType | string;

  /**
   * <p>The status of the notification rule. Valid statuses are on (sending notifications) or off
   *       (not sending notifications).</p>
   */
  Status?: NotificationRuleStatus | string;

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
   * <p>The name of the notification rule.</p>
   */
  Name?: string;

  /**
   * <p>The tags associated with the notification rule.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The date and time the notification rule was created, in timestamp format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>A list of the SNS topics associated with the notification rule.</p>
   */
  Targets?: TargetSummary[];

  /**
   * <p>The name or email alias of the person who created the notification rule.</p>
   */
  CreatedBy?: string;
}

export namespace DescribeNotificationRuleResult {
  export const filterSensitiveLog = (obj: DescribeNotificationRuleResult): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummary.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is DescribeNotificationRuleResult => __isa(o, "DescribeNotificationRuleResult");
}

export enum DetailType {
  BASIC = "BASIC",
  FULL = "FULL",
}

/**
 * <p>Returns information about an event that has triggered a notification rule.</p>
 */
export interface EventTypeSummary {
  __type?: "EventTypeSummary";
  /**
   * <p>The system-generated ID of the event.</p>
   */
  EventTypeId?: string;

  /**
   * <p>The resource type of the event.</p>
   */
  ResourceType?: string;

  /**
   * <p>The name of the service for which the event applies.</p>
   */
  ServiceName?: string;

  /**
   * <p>The name of the event.</p>
   */
  EventTypeName?: string;
}

export namespace EventTypeSummary {
  export const filterSensitiveLog = (obj: EventTypeSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventTypeSummary => __isa(o, "EventTypeSummary");
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
  export const isa = (o: any): o is InvalidNextTokenException => __isa(o, "InvalidNextTokenException");
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
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

/**
 * <p>Information about a filter to apply to the list of returned event types. You can filter
 *       by resource type or service name.</p>
 */
export interface ListEventTypesFilter {
  __type?: "ListEventTypesFilter";
  /**
   * <p>The name of the resource type (for example, pipeline) or service name (for example,
   *       CodePipeline) that you want to filter by.</p>
   */
  Value: string | undefined;

  /**
   * <p>The system-generated name of the filter type you want to filter by.</p>
   */
  Name: ListEventTypesFilterName | string | undefined;
}

export namespace ListEventTypesFilter {
  export const filterSensitiveLog = (obj: ListEventTypesFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEventTypesFilter => __isa(o, "ListEventTypesFilter");
}

export enum ListEventTypesFilterName {
  RESOURCE_TYPE = "RESOURCE_TYPE",
  SERVICE_NAME = "SERVICE_NAME",
}

export interface ListEventTypesRequest {
  __type?: "ListEventTypesRequest";
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
  export const isa = (o: any): o is ListEventTypesRequest => __isa(o, "ListEventTypesRequest");
}

export interface ListEventTypesResult {
  __type?: "ListEventTypesResult";
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
  export const isa = (o: any): o is ListEventTypesResult => __isa(o, "ListEventTypesResult");
}

/**
 * <p>Information about a filter to apply to the list of returned notification rules. You can
 *       filter by event type, owner, resource, or target.</p>
 */
export interface ListNotificationRulesFilter {
  __type?: "ListNotificationRulesFilter";
  /**
   * <p>The value of the attribute you want to use to filter the returned notification rules. For example, if you specify filtering by <i>RESOURCE</i>
   *           in Name, you might specify the ARN of a pipeline in AWS CodePipeline for the value.</p>
   */
  Value: string | undefined;

  /**
   * <p>The name of the attribute you want to use to filter the returned notification rules.</p>
   */
  Name: ListNotificationRulesFilterName | string | undefined;
}

export namespace ListNotificationRulesFilter {
  export const filterSensitiveLog = (obj: ListNotificationRulesFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListNotificationRulesFilter => __isa(o, "ListNotificationRulesFilter");
}

export enum ListNotificationRulesFilterName {
  CREATED_BY = "CREATED_BY",
  EVENT_TYPE_ID = "EVENT_TYPE_ID",
  RESOURCE = "RESOURCE",
  TARGET_ADDRESS = "TARGET_ADDRESS",
}

export interface ListNotificationRulesRequest {
  __type?: "ListNotificationRulesRequest";
  /**
   * <p>A non-negative integer used to limit the number of returned results. The maximum number of
   *       results that can be returned is 100.</p>
   */
  MaxResults?: number;

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
}

export namespace ListNotificationRulesRequest {
  export const filterSensitiveLog = (obj: ListNotificationRulesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListNotificationRulesRequest => __isa(o, "ListNotificationRulesRequest");
}

export interface ListNotificationRulesResult {
  __type?: "ListNotificationRulesResult";
  /**
   * <p>The list of notification rules for the AWS account, by Amazon Resource Name (ARN) and ID. </p>
   */
  NotificationRules?: NotificationRuleSummary[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;
}

export namespace ListNotificationRulesResult {
  export const filterSensitiveLog = (obj: ListNotificationRulesResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListNotificationRulesResult => __isa(o, "ListNotificationRulesResult");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) for the notification rule.</p>
   */
  Arn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResult {
  __type?: "ListTagsForResourceResult";
  /**
   * <p>The tags associated with the notification rule.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResult {
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResult => __isa(o, "ListTagsForResourceResult");
}

/**
 * <p>Information about a filter to apply to the list of returned targets. You can filter by
 *             target type, address, or status. For example, to filter results to notification rules
 *             that have active Amazon SNS topics as targets, you could specify a ListTargetsFilter
 *             Name as TargetType and a Value of SNS, and a Name of TARGET_STATUS and a Value of
 *             ACTIVE.</p>
 */
export interface ListTargetsFilter {
  __type?: "ListTargetsFilter";
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
  export const isa = (o: any): o is ListTargetsFilter => __isa(o, "ListTargetsFilter");
}

export enum ListTargetsFilterName {
  TARGET_ADDRESS = "TARGET_ADDRESS",
  TARGET_STATUS = "TARGET_STATUS",
  TARGET_TYPE = "TARGET_TYPE",
}

export interface ListTargetsRequest {
  __type?: "ListTargetsRequest";
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
  export const isa = (o: any): o is ListTargetsRequest => __isa(o, "ListTargetsRequest");
}

export interface ListTargetsResult {
  __type?: "ListTargetsResult";
  /**
   * <p>An enumeration token that can be used in a request to return the next batch of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of notification rule targets. </p>
   */
  Targets?: TargetSummary[];
}

export namespace ListTargetsResult {
  export const filterSensitiveLog = (obj: ListTargetsResult): any => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetSummary.filterSensitiveLog(item)) }),
  });
  export const isa = (o: any): o is ListTargetsResult => __isa(o, "ListTargetsResult");
}

export enum NotificationRuleStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Information about a specified notification rule.</p>
 */
export interface NotificationRuleSummary {
  __type?: "NotificationRuleSummary";
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
  export const isa = (o: any): o is NotificationRuleSummary => __isa(o, "NotificationRuleSummary");
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
  export const isa = (o: any): o is ResourceAlreadyExistsException => __isa(o, "ResourceAlreadyExistsException");
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
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

export interface SubscribeRequest {
  __type?: "SubscribeRequest";
  /**
   * <p>Information about the SNS topics associated with a  notification rule.</p>
   */
  Target: Target | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.</p>
   */
  Arn: string | undefined;

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
  export const isa = (o: any): o is SubscribeRequest => __isa(o, "SubscribeRequest");
}

export interface SubscribeResult {
  __type?: "SubscribeResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule for which you have created assocations.</p>
   */
  Arn?: string;
}

export namespace SubscribeResult {
  export const filterSensitiveLog = (obj: SubscribeResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SubscribeResult => __isa(o, "SubscribeResult");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The list of tags to associate with the resource. Tag key names cannot start with "aws".</p>
   */
  Tags: { [key: string]: string } | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule to tag.</p>
   */
  Arn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResult {
  __type?: "TagResourceResult";
  /**
   * <p>The list of tags associated with the resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace TagResourceResult {
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResult => __isa(o, "TagResourceResult");
}

/**
 * <p>Information about the SNS topics associated with a  notification rule.</p>
 */
export interface Target {
  __type?: "Target";
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic.</p>
   */
  TargetAddress?: string;

  /**
   * <p>The target type. Can be an Amazon SNS topic.</p>
   */
  TargetType?: string;
}

export namespace Target {
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
    ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is Target => __isa(o, "Target");
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
  __type?: "TargetSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic.</p>
   */
  TargetAddress?: string;

  /**
   * <p>The status of the target.</p>
   */
  TargetStatus?: TargetStatus | string;

  /**
   * <p>The type of the target (for example, SNS).</p>
   */
  TargetType?: string;
}

export namespace TargetSummary {
  export const filterSensitiveLog = (obj: TargetSummary): any => ({
    ...obj,
    ...(obj.TargetAddress && { TargetAddress: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is TargetSummary => __isa(o, "TargetSummary");
}

export interface UnsubscribeRequest {
  __type?: "UnsubscribeRequest";
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
  export const isa = (o: any): o is UnsubscribeRequest => __isa(o, "UnsubscribeRequest");
}

export interface UnsubscribeResult {
  __type?: "UnsubscribeResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the the notification rule from which you have removed a subscription.</p>
   */
  Arn: string | undefined;
}

export namespace UnsubscribeResult {
  export const filterSensitiveLog = (obj: UnsubscribeResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsubscribeResult => __isa(o, "UnsubscribeResult");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The key names of the tags to remove.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule from which to remove the
   *       tags.</p>
   */
  Arn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResult {
  __type?: "UntagResourceResult";
}

export namespace UntagResourceResult {
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResult => __isa(o, "UntagResourceResult");
}

export interface UpdateNotificationRuleRequest {
  __type?: "UpdateNotificationRuleRequest";
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

  /**
   * <p>A list of event types associated with this notification rule.</p>
   */
  EventTypeIds?: string[];

  /**
   * <p>The status of the notification rule. Valid statuses include enabled (sending notifications) or
   *       disabled (not sending notifications).</p>
   */
  Status?: NotificationRuleStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification rule.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the notification rule.</p>
   */
  Name?: string;
}

export namespace UpdateNotificationRuleRequest {
  export const filterSensitiveLog = (obj: UpdateNotificationRuleRequest): any => ({
    ...obj,
    ...(obj.Targets && { Targets: obj.Targets.map((item) => Target.filterSensitiveLog(item)) }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is UpdateNotificationRuleRequest => __isa(o, "UpdateNotificationRuleRequest");
}

export interface UpdateNotificationRuleResult {
  __type?: "UpdateNotificationRuleResult";
}

export namespace UpdateNotificationRuleResult {
  export const filterSensitiveLog = (obj: UpdateNotificationRuleResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateNotificationRuleResult => __isa(o, "UpdateNotificationRuleResult");
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
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
