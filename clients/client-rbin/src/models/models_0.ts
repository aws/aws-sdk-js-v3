import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Information about a resource tag used to identify resources that are to be retained by a Recycle Bin retention rule.</p>
 */
export interface ResourceTag {
  /**
   * <p>The tag key.</p>
   */
  ResourceTagKey: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  ResourceTagValue?: string;
}

export namespace ResourceTag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTag): any => ({
    ...obj,
  });
}

export enum ResourceType {
  EBS_SNAPSHOT = "EBS_SNAPSHOT",
}

export enum RetentionPeriodUnit {
  DAYS = "DAYS",
}

/**
 * <p>Information about the retention period for which a retention rule is to retain resources.</p>
 */
export interface RetentionPeriod {
  /**
   * <p>The period value for which the retention rule is to retain resources. The period is measured using
   *       the unit specified for <b>RetentionPeriodUnit</b>.</p>
   */
  RetentionPeriodValue: number | undefined;

  /**
   * <p>The unit of time in which the retention period is measured. Currently, only <code>DAYS</code>
   *       is supported.</p>
   */
  RetentionPeriodUnit: RetentionPeriodUnit | string | undefined;
}

export namespace RetentionPeriod {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetentionPeriod): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the tags assigned to a Recycle Bin retention rule.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateRuleRequest {
  /**
   * <p>Information about the retention period for which the retention rule is to retain resources.</p>
   */
  RetentionPeriod: RetentionPeriod | undefined;

  /**
   * <p>A brief description for the retention rule.</p>
   */
  Description?: string;

  /**
   * <p>Information about the tags to assign to the retention rule.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots are
   *       supported.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>Information about the resource tags to use to identify resources that are to be retained
   *       by the retention rule. The retention rule retains only deleted snapshots that have one or more
   *       of the specified tag key and value pairs. If a snapshot is deleted, but it does not have
   *       any of the specified tag key and value pairs, it is immediately deleted without being retained
   *       by the retention rule.</p>
   *          <p>You can add the same tag key and value pair to a maximum or five retention rules.</p>
   */
  ResourceTags?: ResourceTag[];
}

export namespace CreateRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleRequest): any => ({
    ...obj,
  });
}

export enum RuleStatus {
  AVAILABLE = "available",
  PENDING = "pending",
}

export interface CreateRuleResponse {
  /**
   * <p>The unique identifier of the retention rule.</p>
   */
  Identifier?: string;

  /**
   * <p>Information about the retention period for which a retention rule is to retain resources.</p>
   */
  RetentionPeriod?: RetentionPeriod;

  /**
   * <p>The retention rule description.</p>
   */
  Description?: string;

  /**
   * <p>The tags assigned to the retention rule.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The resource type retained by the retention rule.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   */
  ResourceTags?: ResourceTag[];

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code> state retain snapshots.</p>
   */
  Status?: RuleStatus | string;
}

export namespace CreateRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export enum ServiceQuotaExceededExceptionReason {
  SERVICE_QUOTA_EXCEEDED = "SERVICE_QUOTA_EXCEEDED",
}

/**
 * <p>The request would cause a service quota for the number of tags per resource to be exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ServiceQuotaExceededExceptionReason | string;
}

export enum ValidationExceptionReason {
  INVALID_PAGE_TOKEN = "INVALID_PAGE_TOKEN",
  INVALID_PARAMETER_VALUE = "INVALID_PARAMETER_VALUE",
}

/**
 * <p>One or more of the parameters in the request is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ValidationExceptionReason | string;
}

export interface DeleteRuleRequest {
  /**
   * <p>The unique ID of the retention rule to delete.</p>
   */
  Identifier: string | undefined;
}

export namespace DeleteRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteRuleResponse {}

export namespace DeleteRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRuleResponse): any => ({
    ...obj,
  });
}

export enum ResourceNotFoundExceptionReason {
  RULE_NOT_FOUND = "RULE_NOT_FOUND",
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ResourceNotFoundExceptionReason | string;
}

export interface GetRuleRequest {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier: string | undefined;
}

export namespace GetRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRuleRequest): any => ({
    ...obj,
  });
}

export interface GetRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier?: string;

  /**
   * <p>The description assigned to the retention rule.</p>
   */
  Description?: string;

  /**
   * <p>The resource type retained by the retention rule. Currently, only Amazon EBS snapshots are supported.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Information about the period for which the retention rule retains resources.</p>
   */
  RetentionPeriod?: RetentionPeriod;

  /**
   * <p>The resource tags used to identify resources that are to be retained by the retention rule.</p>
   */
  ResourceTags?: ResourceTag[];

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code> state retain snapshots.</p>
   */
  Status?: RuleStatus | string;
}

export namespace GetRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRuleResponse): any => ({
    ...obj,
  });
}

export interface ListRulesRequest {
  /**
   * <p>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned <code>nextToken</code> value. This value can be between 5 and 500. If <code>maxResults</code> is given a larger value than 500, you receive an error.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The resource type retained by the retention rule. Only retention rules that retain the specified resource type
   *       are listed.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>The tags used to identify resources that are to be retained by the retention rule.</p>
   */
  ResourceTags?: ResourceTag[];
}

export namespace ListRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a Recycle Bin retention rule.</p>
 */
export interface RuleSummary {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier?: string;

  /**
   * <p>The description for the retention rule.</p>
   */
  Description?: string;

  /**
   * <p>Information about the retention period for which the retention rule retains resources</p>
   */
  RetentionPeriod?: RetentionPeriod;
}

export namespace RuleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleSummary): any => ({
    ...obj,
  });
}

export interface ListRulesResponse {
  /**
   * <p>Information about the retention rules.</p>
   */
  Rules?: RuleSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;
}

export namespace ListRulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRulesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list the tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags assigned to the resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which to assign the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Information about the tags to assign to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to unassign the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Information about the tags to unassign from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateRuleRequest {
  /**
   * <p>The unique ID of the retention rule to update.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to retain resources.</p>
   */
  RetentionPeriod?: RetentionPeriod;

  /**
   * <p>The retention rule description.</p>
   */
  Description?: string;

  /**
   * <p>The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots are supported.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Information about the resource tags to use to identify resources that are to be retained
   *       by the retention rule. The retention rule retains only deleted snapshots that have one or more
   *       of the specified tag key and value pairs. If a snapshot is deleted, but it does not have
   *       any of the specified tag key and value pairs, it is immediately deleted without being retained
   *       by the retention rule. </p>
   *          <p>You can add the same tag key and value pair to a maximum or five retention rules.</p>
   */
  ResourceTags?: ResourceTag[];
}

export namespace UpdateRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier?: string;

  /**
   * <p>Information about the retention period for which a retention rule is to retain resources.</p>
   */
  RetentionPeriod?: RetentionPeriod;

  /**
   * <p>The retention rule description.</p>
   */
  Description?: string;

  /**
   * <p>The resource type retained by the retention rule.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   */
  ResourceTags?: ResourceTag[];

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code> state retain snapshots.</p>
   */
  Status?: RuleStatus | string;
}

export namespace UpdateRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRuleResponse): any => ({
    ...obj,
  });
}
