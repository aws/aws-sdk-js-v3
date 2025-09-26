// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BillingServiceException as __BaseException } from "./BillingServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>A time range with a start and end time.</p>
 * @public
 */
export interface ActiveTimeRange {
  /**
   * <p>The inclusive time range start date.</p>
   * @public
   */
  activeAfterInclusive: Date | undefined;

  /**
   * <p> The inclusive time range end date. </p>
   * @public
   */
  activeBeforeInclusive: Date | undefined;
}

/**
 * @public
 */
export interface AssociateSourceViewsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing view to associate source views with. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A list of ARNs of the source billing views to associate. </p>
   * @public
   */
  sourceViews: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateSourceViewsResponse {
  /**
   * <p> The ARN of the billing view that the source views were associated with. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p> Exception thrown when a billing view's health status prevents an operation from being performed. This may occur if the billing view is in a state other than <code>HEALTHY</code>.</p>
 * @public
 */
export class BillingViewHealthStatusException extends __BaseException {
  readonly name: "BillingViewHealthStatusException" = "BillingViewHealthStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BillingViewHealthStatusException, __BaseException>) {
    super({
      name: "BillingViewHealthStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BillingViewHealthStatusException.prototype);
  }
}

/**
 * <p> The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p> The identifier for the service resource associated with the request. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of resource associated with the request. </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request processing failed because of an unknown error, exception, or failure. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * <p> The specified ARN in the request doesn't exist. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p> Value is a list of resource IDs that were not found. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> Value is the type of resource that was not found. </p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p> You've reached the limit of resources you can create, or exceeded the size of an individual resource. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p> The ID of the resource. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of Amazon Web Services resource. </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p> The container for the <code>serviceCode</code>. </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p> The container for the <code>quotaCode</code>. </p>
   * @public
   */
  quotaCode: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The request was denied due to request throttling. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The field's information of a request that resulted in an exception. </p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message describing why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * @enum
 */
export const Dimension = {
  LINKED_ACCOUNT: "LINKED_ACCOUNT",
} as const;

/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * <p> The metadata that you can use to filter and group your results. </p>
 * @public
 */
export interface DimensionValues {
  /**
   * <p> The names of the metadata types that you can use to filter and group your results. </p>
   * @public
   */
  key: Dimension | undefined;

  /**
   * <p> The metadata values that you can use to filter and group your results. </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p> The values that are available for a tag. </p>
 * @public
 */
export interface TagValues {
  /**
   * <p> The key for the tag. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p> The specific value of the tag. </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p> Specifies a time range with inclusive begin and end dates. </p>
 * @public
 */
export interface TimeRange {
  /**
   * <p> The inclusive start date of the time range. </p>
   * @public
   */
  beginDateInclusive?: Date | undefined;

  /**
   * <p> The inclusive end date of the time range. </p>
   * @public
   */
  endDateInclusive?: Date | undefined;
}

/**
 * <p> See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>. </p>
 * @public
 */
export interface Expression {
  /**
   * <p> The specific <code>Dimension</code> to use for <code>Expression</code>. </p>
   * @public
   */
  dimensions?: DimensionValues | undefined;

  /**
   * <p> The specific <code>Tag</code> to use for <code>Expression</code>. </p>
   * @public
   */
  tags?: TagValues | undefined;

  /**
   * <p> Specifies a time range filter for the billing view data. </p>
   * @public
   */
  timeRange?: TimeRange | undefined;
}

/**
 * <p> The tag structure that contains a tag key and value. </p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p> The key that's associated with the tag. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p> The value that's associated with the tag. </p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewRequest {
  /**
   * <p> The name of the billing view. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of billing views used as the data source for the custom billing view.</p>
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * <p> See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>. </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * <p>A unique, case-sensitive identifier you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. If the original request completes successfully, any subsequent retries complete successfully without performing any further actions with an idempotent request. </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key value map specifying tags associated to the billing view being created. </p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewResponse {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The time when the billing view was created. </p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> If set to true, forces deletion of the billing view even if it has derived resources (e.g. other billing views or budgets). Use with caution as this may break dependent resources. </p>
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteBillingViewResponse {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceViewsRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the billing view to disassociate source views from. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> A list of ARNs of the source billing views to disassociate. </p>
   * @public
   */
  sourceViews: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceViewsResponse {
  /**
   * <p> The ARN of the billing view that the source views were disassociated from. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BillingViewType = {
  BILLING_GROUP: "BILLING_GROUP",
  CUSTOM: "CUSTOM",
  PRIMARY: "PRIMARY",
} as const;

/**
 * @public
 */
export type BillingViewType = (typeof BillingViewType)[keyof typeof BillingViewType];

/**
 * @public
 * @enum
 */
export const BillingViewStatus = {
  CREATING: "CREATING",
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type BillingViewStatus = (typeof BillingViewStatus)[keyof typeof BillingViewStatus];

/**
 * @public
 * @enum
 */
export const BillingViewStatusReason = {
  AGGREGATE_SOURCE: "AGGREGATE_SOURCE",
  CYCLIC_DEPENDENCY: "CYCLIC_DEPENDENCY",
  SOURCE_VIEW_ACCESS_DENIED: "SOURCE_VIEW_ACCESS_DENIED",
  SOURCE_VIEW_DEPTH_EXCEEDED: "SOURCE_VIEW_DEPTH_EXCEEDED",
  SOURCE_VIEW_NOT_FOUND: "SOURCE_VIEW_NOT_FOUND",
  SOURCE_VIEW_UNHEALTHY: "SOURCE_VIEW_UNHEALTHY",
  SOURCE_VIEW_UPDATING: "SOURCE_VIEW_UPDATING",
  VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT: "VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT",
} as const;

/**
 * @public
 */
export type BillingViewStatusReason = (typeof BillingViewStatusReason)[keyof typeof BillingViewStatusReason];

/**
 * <p> Represents the health status of a billing view, including a status code and optional reasons for the status. </p>
 * @public
 */
export interface BillingViewHealthStatus {
  /**
   * <p>The current health status code of the billing view.</p>
   * @public
   */
  statusCode?: BillingViewStatus | undefined;

  /**
   * <p>A list of reasons explaining the current health status, if applicable.</p>
   * @public
   */
  statusReasons?: BillingViewStatusReason[] | undefined;
}

/**
 * <p>The metadata associated to the billing view. </p>
 * @public
 */
export interface BillingViewElement {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The account name of the billing view. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of billing group. </p>
   * @public
   */
  billingViewType?: BillingViewType | undefined;

  /**
   * <p>The account owner of the billing view. </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p> The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view. </p>
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * <p> See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>. </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * <p>The time when the billing view was created. </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time when the billing view was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p> The number of billing views that use this billing view as a source. </p>
   * @public
   */
  derivedViewCount?: number | undefined;

  /**
   * <p> The number of source views associated with this billing view. </p>
   * @public
   */
  sourceViewCount?: number | undefined;

  /**
   * <p> The timestamp of when the billing view definition was last updated. </p>
   * @public
   */
  viewDefinitionLastUpdatedAt?: Date | undefined;

  /**
   * <p> The current health status of the billing view. </p>
   * @public
   */
  healthStatus?: BillingViewHealthStatus | undefined;
}

/**
 * @public
 */
export interface GetBillingViewResponse {
  /**
   * <p>The billing view element associated with the specified ARN. </p>
   * @public
   */
  billingView: BillingViewElement | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The resource-based policy document attached to the resource in <code>JSON</code> format. </p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingViewsRequest {
  /**
   * <p> The time range for the billing views listed. <code>PRIMARY</code> billing view is always listed. <code>BILLING_GROUP</code> billing views are listed for time ranges when the associated billing group resource in Billing Conductor is active. The time range must be within one calendar month. </p>
   * @public
   */
  activeTimeRange?: ActiveTimeRange | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arns?: string[] | undefined;

  /**
   * <p>The type of billing view.</p>
   * @public
   */
  billingViewTypes?: BillingViewType[] | undefined;

  /**
   * <p> The list of owners of the billing view. </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p> Filters the results to include only billing views that use the specified account as a source. </p>
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * <p>The maximum number of billing views to retrieve. Default is 100. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that is used on subsequent calls to list billing views.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A representation of a billing view.</p>
 * @public
 */
export interface BillingViewListElement {
  /**
   * <p>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> A list of names of the Billing view. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The list of owners of the Billing view. </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p> The Amazon Web Services account ID that owns the source billing view, if this is a derived billing view. </p>
   * @public
   */
  sourceAccountId?: string | undefined;

  /**
   * <p>The type of billing view.</p>
   * @public
   */
  billingViewType?: BillingViewType | undefined;

  /**
   * <p> The current health status of the billing view. </p>
   * @public
   */
  healthStatus?: BillingViewHealthStatus | undefined;
}

/**
 * @public
 */
export interface ListBillingViewsResponse {
  /**
   * <p>A list of <code>BillingViewListElement</code> retrieved.</p>
   * @public
   */
  billingViews: BillingViewListElement[] | undefined;

  /**
   * <p>The pagination token to use on subsequent calls to list billing views. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The number of entries a paginated response contains. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The pagination token that is used on subsequent calls to list billing views. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewResponse {
  /**
   * <p>A list of billing views used as the data source for the custom billing view. </p>
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * <p> The pagination token that is used on subsequent calls to list billing views. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> A list of tag key value pairs that are associated with the resource. </p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> A list of tag key value pairs that are associated with the resource. </p>
   * @public
   */
  resourceTags: ResourceTag[] | undefined;
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
   * <p> The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p> A list of tag key value pairs that are associated with the resource. </p>
   * @public
   */
  resourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBillingViewRequest {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The name of the billing view. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The description of the billing view. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_billing_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>. </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;
}

/**
 * @public
 */
export interface UpdateBillingViewResponse {
  /**
   * <p> The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p> The time when the billing view was last updated. </p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @internal
 */
export const CreateBillingViewRequestFilterSensitiveLog = (obj: CreateBillingViewRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BillingViewElementFilterSensitiveLog = (obj: BillingViewElement): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetBillingViewResponseFilterSensitiveLog = (obj: GetBillingViewResponse): any => ({
  ...obj,
  ...(obj.billingView && { billingView: BillingViewElementFilterSensitiveLog(obj.billingView) }),
});

/**
 * @internal
 */
export const BillingViewListElementFilterSensitiveLog = (obj: BillingViewListElement): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListBillingViewsResponseFilterSensitiveLog = (obj: ListBillingViewsResponse): any => ({
  ...obj,
  ...(obj.billingViews && {
    billingViews: obj.billingViews.map((item) => BillingViewListElementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateBillingViewRequestFilterSensitiveLog = (obj: UpdateBillingViewRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});
