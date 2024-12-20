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
   * <p>
   *       The inclusive time range end date.
   *     </p>
   * @public
   */
  activeBeforeInclusive: Date | undefined;
}

/**
 * <p>
 *       The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *     </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *       The identifier for the service resource associated with the request.
   *     </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>
   *       The type of resource associated with the request.
   *     </p>
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
 * <p>
 *       The metadata that you can use to filter and group your results.
 *     </p>
 * @public
 */
export interface DimensionValues {
  /**
   * <p>
   *       The names of the metadata types that you can use to filter and group your results.
   *     </p>
   * @public
   */
  key: Dimension | undefined;

  /**
   * <p>
   *       The metadata values that you can use to filter and group your results.
   *     </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>
 *       The values that are available for a tag.
 *     </p>
 * @public
 */
export interface TagValues {
  /**
   * <p>
   *       The key for the tag.
   *     </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>
   *       The specific value of the tag.
   *     </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>
 *       See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>.
 *     </p>
 * @public
 */
export interface Expression {
  /**
   * <p>
   *       The specific <code>Dimension</code> to use for <code>Expression</code>.
   *     </p>
   * @public
   */
  dimensions?: DimensionValues | undefined;

  /**
   * <p>
   *       The specific <code>Tag</code> to use for <code>Expression</code>.
   *     </p>
   * @public
   */
  tags?: TagValues | undefined;
}

/**
 * <p>
 *       The tag structure that contains a tag key and value.
 *     </p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>
   *       The key that's associated with the tag.
   *     </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>
   *       The value that's associated with the tag.
   *     </p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewRequest {
  /**
   * <p>
   *      The name of the billing view.
   *     </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *       The description of the billing view.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of billing views used as the data source for the custom billing view.</p>
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * <p>
   *       See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>.
   *     </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * <p>A unique, case-sensitive identifier you specify to ensure idempotency of the request. Idempotency ensures that an API request completes no more than one time. If the original request completes successfully, any subsequent retries complete successfully without performing any further actions with an idempotent request.
   *     </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key value map specifying tags associated to the billing view being created.
   *     </p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateBillingViewResponse {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>
   *       The time when the billing view was created.
   *     </p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * <p>The request processing failed because of an unknown error, exception, or failure.
 *       </p>
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
 * <p>
 *       You've reached the limit of resources you can create, or exceeded the size of an individual resource.
 *     </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *       The ID of the resource.
   *     </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>
   *       The type of Amazon Web Services resource.
   *     </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>
   *       The container for the <code>serviceCode</code>.
   *     </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>
   *       The container for the <code>quotaCode</code>.
   *     </p>
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
 * <p>The request was denied due to request throttling.
 *       </p>
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
 * <p>The field's information of a request that resulted in an exception.
 *       </p>
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *       </p>
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
 */
export interface DeleteBillingViewRequest {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBillingViewResponse {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetBillingViewRequest {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
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
 * <p>The metadata associated to the billing view.
 *     </p>
 * @public
 */
export interface BillingViewElement {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       A list of names of the billing view.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *       The description of the billing view.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of billing group.
   *     </p>
   * @public
   */
  billingViewType?: BillingViewType | undefined;

  /**
   * <p>
   *       The list of owners of the billing view.
   *     </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p>
   *       See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>.
   *     </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;

  /**
   * <p>The time when the billing view was created.
   *     </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time when the billing view was last updated.
   *     </p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetBillingViewResponse {
  /**
   * <p>The billing view element associated with the specified ARN.
   *     </p>
   * @public
   */
  billingView: BillingViewElement | undefined;
}

/**
 * <p>
 *       The specified ARN in the request doesn't exist.
 *     </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>
   *       Value is a list of resource IDs that were not found.
   *     </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>
   *       Value is the type of resource that was not found.
   *     </p>
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
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to.
   *     </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the billing view resource to which the policy is attached to.
   *     </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The resource-based policy document attached to the resource in <code>JSON</code> format.
   *     </p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingViewsRequest {
  /**
   * <p>
   *       The time range for the billing views listed. <code>PRIMARY</code> billing view is always listed. <code>BILLING_GROUP</code> billing views are listed for time ranges when the associated billing group resource in Billing Conductor is active. The time range must be within one calendar month.
   *     </p>
   * @public
   */
  activeTimeRange?: ActiveTimeRange | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *       </p>
   * @public
   */
  arns?: string[] | undefined;

  /**
   * <p>The type of billing view.</p>
   * @public
   */
  billingViewTypes?: BillingViewType[] | undefined;

  /**
   * <p>
   *       The list of owners of the billing view.
   *     </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p>The maximum number of billing views to retrieve. Default is 100.
   *       </p>
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
   * <p>The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *       </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>
   *       A list of names of the Billing view.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *       The description of the billing view.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   *       The list of owners of the Billing view.
   *     </p>
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * <p>The type of billing view.</p>
   * @public
   */
  billingViewType?: BillingViewType | undefined;
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
   * <p>The pagination token to use on subsequent calls to list billing views.
   *       </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewRequest {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>
   *       The number of entries a paginated response contains.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       The pagination token that is used on subsequent calls to list billing views.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceViewsForBillingViewResponse {
  /**
   * <p>A list of billing views used as the data source for the custom billing view.
   *     </p>
   * @public
   */
  sourceViews: string[] | undefined;

  /**
   * <p>
   *       The pagination token that is used on subsequent calls to list billing views.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the resource.
   *     </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>
   *       A list of tag key value pairs that are associated with the resource.
   *     </p>
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the resource.
   *     </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *       A list of tag key value pairs that are associated with the resource.
   *     </p>
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
   * <p>
   *       The Amazon Resource Name (ARN) of the resource.
   *     </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *       A list of tag key value pairs that are associated with the resource.
   *     </p>
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
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>
   *       The name of the billing view.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *       The description of the billing view.
   *     </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>See <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. Billing view only supports <code>LINKED_ACCOUNT</code> and <code>Tags</code>.
   *     </p>
   * @public
   */
  dataFilterExpression?: Expression | undefined;
}

/**
 * @public
 */
export interface UpdateBillingViewResponse {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) that can be used to uniquely identify the billing view.
   *     </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>
   *       The time when the billing view was last updated.
   *     </p>
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
