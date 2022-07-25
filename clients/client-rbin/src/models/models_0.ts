// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { RbinServiceException as __BaseException } from "./RbinServiceException";

/**
 * <p>Information about the resource tags used to identify resources that are retained by the retention
 *       rule.</p>
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

export enum ResourceType {
  EBS_SNAPSHOT = "EBS_SNAPSHOT",
  EC2_IMAGE = "EC2_IMAGE",
}

export enum RetentionPeriodUnit {
  DAYS = "DAYS",
}

/**
 * <p>Information about the retention period for which the retention rule is to retain resources.</p>
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

/**
 * <p>Information about the tags to assign to the retention rule.</p>
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

export interface CreateRuleRequest {
  /**
   * <p>Information about the retention period for which the retention rule is to retain resources.</p>
   */
  RetentionPeriod: RetentionPeriod | undefined;

  /**
   * <p>The retention rule description.</p>
   */
  Description?: string;

  /**
   * <p>Information about the tags to assign to the retention rule.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots
   *       and EBS-backed AMIs are supported. To retain snapshots, specify <code>EBS_SNAPSHOT</code>. To
   *       retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>Specifies the resource tags to use to identify resources that are to be retained by a
   *   tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that
   *   have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have
   *   any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p>
   *          <p>You can add the same tag key and value pair to a maximum or five retention rules.</p>
   *          <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule
   *       does not have any resource tags specified. It retains all deleted resources of the specified
   *       resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
   */
  ResourceTags?: ResourceTag[];
}

export enum RuleStatus {
  AVAILABLE = "available",
  PENDING = "pending",
}

export interface CreateRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier?: string;

  /**
   * <p>Information about the retention period for which the retention rule is to retain resources.</p>
   */
  RetentionPeriod?: RetentionPeriod;

  /**
   * <p>The retention rule description.</p>
   */
  Description?: string;

  /**
   * <p>Information about the tags assigned to the retention rule.</p>
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
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   */
  Status?: RuleStatus | string;
}

/**
 * <p>The service could not respond to the request due to an internal problem.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export enum ServiceQuotaExceededExceptionReason {
  SERVICE_QUOTA_EXCEEDED = "SERVICE_QUOTA_EXCEEDED",
}

/**
 * <p>The request would cause a service quota for the number of tags per resource to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ServiceQuotaExceededExceptionReason | string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

export enum ValidationExceptionReason {
  INVALID_PAGE_TOKEN = "INVALID_PAGE_TOKEN",
  INVALID_PARAMETER_VALUE = "INVALID_PARAMETER_VALUE",
}

/**
 * <p>One or more of the parameters in the request is not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ValidationExceptionReason | string;
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
    this.Reason = opts.Reason;
  }
}

export interface DeleteRuleRequest {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier: string | undefined;
}

export interface DeleteRuleResponse {}

export enum ResourceNotFoundExceptionReason {
  RULE_NOT_FOUND = "RULE_NOT_FOUND",
}

/**
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The reason for the exception.</p>
   */
  Reason?: ResourceNotFoundExceptionReason | string;
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
    this.Reason = opts.Reason;
  }
}

export interface GetRuleRequest {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier: string | undefined;
}

export interface GetRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier?: string;

  /**
   * <p>The retention rule description.</p>
   */
  Description?: string;

  /**
   * <p>The resource type retained by the retention rule.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Information about the retention period for which the retention rule is to retain resources.</p>
   */
  RetentionPeriod?: RetentionPeriod;

  /**
   * <p>Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   */
  ResourceTags?: ResourceTag[];

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   */
  Status?: RuleStatus | string;
}

export interface ListRulesRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The resource type retained by the retention rule. Only retention rules that retain
   *       the specified resource type are listed. Currently, only Amazon EBS snapshots and EBS-backed
   *       AMIs are supported. To list retention rules that retain snapshots, specify
   *       <code>EBS_SNAPSHOT</code>. To list retention rules that retain EBS-backed AMIs, specify
   *       <code>EC2_IMAGE</code>.</p>
   */
  ResourceType: ResourceType | string | undefined;

  /**
   * <p>Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   */
  ResourceTags?: ResourceTag[];
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
   * <p>The retention rule description.</p>
   */
  Description?: string;

  /**
   * <p>Information about the retention period for which the retention rule is to retain resources.</p>
   */
  RetentionPeriod?: RetentionPeriod;
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags assigned to the retention rule.</p>
   */
  Tags?: Tag[];
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Information about the tags to assign to the retention rule.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to unassign. All tags that have the specified tag key are unassigned.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateRuleRequest {
  /**
   * <p>The unique ID of the retention rule.</p>
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
   * <p>The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots
   *       and EBS-backed AMIs are supported. To retain snapshots, specify <code>EBS_SNAPSHOT</code>. To
   *       retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>Specifies the resource tags to use to identify resources that are to be retained by a
   *   tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that
   *   have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have
   *   any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p>
   *          <p>You can add the same tag key and value pair to a maximum or five retention rules.</p>
   *          <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule
   *       does not have any resource tags specified. It retains all deleted resources of the specified
   *       resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
   */
  ResourceTags?: ResourceTag[];
}

export interface UpdateRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   */
  Identifier?: string;

  /**
   * <p>Information about the retention period for which the retention rule is to retain resources.</p>
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
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   */
  Status?: RuleStatus | string;
}

/**
 * @internal
 */
export const ResourceTagFilterSensitiveLog = (obj: ResourceTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetentionPeriodFilterSensitiveLog = (obj: RetentionPeriod): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleRequestFilterSensitiveLog = (obj: CreateRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleResponseFilterSensitiveLog = (obj: CreateRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleRequestFilterSensitiveLog = (obj: DeleteRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleResponseFilterSensitiveLog = (obj: DeleteRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRuleRequestFilterSensitiveLog = (obj: GetRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRuleResponseFilterSensitiveLog = (obj: GetRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRulesRequestFilterSensitiveLog = (obj: ListRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleSummaryFilterSensitiveLog = (obj: RuleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRulesResponseFilterSensitiveLog = (obj: ListRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRuleRequestFilterSensitiveLog = (obj: UpdateRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRuleResponseFilterSensitiveLog = (obj: UpdateRuleResponse): any => ({
  ...obj,
});
