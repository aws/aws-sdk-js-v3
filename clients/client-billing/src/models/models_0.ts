// smithy-typescript generated code
import { BillingViewStatus, BillingViewStatusReason, BillingViewType, Dimension, SearchOption } from "./enums";

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
 * <p> A structure that defines how to search for string values. You can specify a search option and the value to search for. </p>
 * @public
 */
export interface StringSearch {
  /**
   * <p> The type of search operation to perform on the string value. Determines how the search value is matched against the target field. </p>
   * @public
   */
  searchOption: SearchOption | undefined;

  /**
   * <p> The string value to use in the search operation. This value is compared against the target field using the specified search option. </p>
   * @public
   */
  searchValue: string | undefined;
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
   * <p> Filters the list of billing views by name. You can specify search criteria to match billing view names based on the search option provided. </p>
   * @public
   */
  names?: StringSearch[] | undefined;

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
