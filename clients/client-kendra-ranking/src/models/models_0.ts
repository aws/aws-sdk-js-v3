// smithy-typescript generated code
import type { RescoreExecutionPlanStatus } from "./enums";

/**
 * Sets additional capacity units configured for your rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API. You can add and remove capacity units to fit your usage requirements.
 *
 * @public
 */
export interface CapacityUnitsConfiguration {
  /**
   * The amount of extra capacity for your rescore execution plan.
   *
   * A single extra capacity unit for a rescore execution plan provides 0.01 rescore requests per second. You can add up to 1000 extra capacity units.
   *
   * @public
   */
  RescoreCapacityUnits: number | undefined;
}

/**
 * A key-value pair that identifies or categorizes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API. You can also use a tag to help control access to a rescore execution plan. A tag key and value can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
 *
 * @public
 */
export interface Tag {
  /**
   * The key for the tag. Keys are not case sensitive and must be unique.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value associated with the tag. The value can be an empty string but it can't be null.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateRescoreExecutionPlanRequest {
  /**
   * A name for the rescore execution plan.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the rescore execution plan.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * You can set additional capacity units to meet the needs of your rescore execution plan. You are given a single capacity unit by default. If you want to use the default capacity, you don't set additional capacity units. For more information on the default capacity and additional capacity units, see [Adjusting capacity](https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html).
   *
   * @public
   */
  CapacityUnits?: CapacityUnitsConfiguration | undefined;

  /**
   * A list of key-value pairs that identify or categorize your rescore execution plan. You can also use tags to help control access to the rescore execution plan. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token that you provide to identify the request to create a rescore execution plan. Multiple calls to the `CreateRescoreExecutionPlanRequest` API with the same client token will create only one rescore execution plan.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRescoreExecutionPlanResponse {
  /**
   * The identifier of the rescore execution plan.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rescore execution plan.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRescoreExecutionPlanRequest {
  /**
   * The identifier of the rescore execution plan that you want to delete.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeRescoreExecutionPlanRequest {
  /**
   * The identifier of the rescore execution plan that you want to get information on.
   *
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DescribeRescoreExecutionPlanResponse {
  /**
   * The identifier of the rescore execution plan.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rescore execution plan.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name for the rescore execution plan.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description for the rescore execution plan.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The capacity units set for the rescore execution plan. A capacity of zero indicates that the rescore execution plan is using the default capacity. For more information on the default capacity and additional capacity units, see [Adjusting capacity](https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html).
   *
   * @public
   */
  CapacityUnits?: CapacityUnitsConfiguration | undefined;

  /**
   * The Unix timestamp of when the rescore execution plan was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The Unix timestamp of when the rescore execution plan was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The current status of the rescore execution plan. When the value is `ACTIVE`, the rescore execution plan is ready for use. If the `Status` field value is `FAILED`, the `ErrorMessage` field contains a message that explains why.
   *
   * @public
   */
  Status?: RescoreExecutionPlanStatus | undefined;

  /**
   * When the `Status` field value is `FAILED`, the `ErrorMessage` field contains a message that explains why.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListRescoreExecutionPlansRequest {
  /**
   * If the response is truncated, Amazon Kendra Intelligent Ranking returns a pagination token in the response. You can use this pagination token to retrieve the next set of rescore execution plans.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of rescore execution plans to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information for a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API.
 *
 * @public
 */
export interface RescoreExecutionPlanSummary {
  /**
   * The name of the rescore execution plan.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The identifier of the rescore execution plan.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Unix timestamp when the rescore execution plan was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The Unix timestamp when the rescore execution plan was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The current status of the rescore execution plan. When the value is `ACTIVE`, the rescore execution plan is ready for use.
   *
   * @public
   */
  Status?: RescoreExecutionPlanStatus | undefined;
}

/**
 * @public
 */
export interface ListRescoreExecutionPlansResponse {
  /**
   * An array of summary information for one or more rescore execution plans.
   *
   * @public
   */
  SummaryItems?: RescoreExecutionPlanSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Kendra Intelligent Ranking returns a pagination token in the response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request information for listing tags associated with a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the rescore execution plan to get a list of tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response.
 *
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags associated with the rescore execution plan.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Information about a document from a search service such as OpenSearch (self managed). Amazon Kendra Intelligent Ranking uses this information to rank and score on.
 *
 * @public
 */
export interface Document {
  /**
   * The identifier of the document from the search service.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The optional group identifier of the document from the search service. Documents with the same group identifier are grouped together and processed as one document within the service.
   *
   * @public
   */
  GroupId?: string | undefined;

  /**
   * The title of the search service's document.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The body text of the search service's document.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The title of the search service's document represented as a list of tokens or words. You must choose to provide `Title` or `TokenizedTitle`. You cannot provide both.
   *
   * @public
   */
  TokenizedTitle?: string[] | undefined;

  /**
   * The body text of the search service's document represented as a list of tokens or words. You must choose to provide `Body` or `TokenizedBody`. You cannot provide both.
   *
   * @public
   */
  TokenizedBody?: string[] | undefined;

  /**
   * The original document score or rank from the search service. Amazon Kendra Intelligent Ranking gives the document a new score or rank based on its intelligent search algorithms.
   *
   * @public
   */
  OriginalScore: number | undefined;
}

/**
 * @public
 */
export interface RescoreRequest {
  /**
   * The identifier of the rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API.
   *
   * @public
   */
  RescoreExecutionPlanId: string | undefined;

  /**
   * The input query from the search service.
   *
   * @public
   */
  SearchQuery: string | undefined;

  /**
   * The list of documents for Amazon Kendra Intelligent Ranking to rescore or rank on.
   *
   * @public
   */
  Documents: Document[] | undefined;
}

/**
 * A result item for a document with a new relevancy score.
 *
 * @public
 */
export interface RescoreResultItem {
  /**
   * The identifier of the document from the search service.
   *
   * @public
   */
  DocumentId?: string | undefined;

  /**
   * The relevancy score or rank that Amazon Kendra Intelligent Ranking gives to the result.
   *
   * @public
   */
  Score?: number | undefined;
}

/**
 * @public
 */
export interface RescoreResult {
  /**
   * The identifier associated with the scores that Amazon Kendra Intelligent Ranking gives to the results. Amazon Kendra Intelligent Ranking rescores or re-ranks the results for the search service.
   *
   * @public
   */
  RescoreId?: string | undefined;

  /**
   * A list of result items for documents with new relevancy scores. The results are in descending order.
   *
   * @public
   */
  ResultItems?: RescoreResultItem[] | undefined;
}

/**
 * The request information for tagging a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the rescore execution plan to tag.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tag keys to add to a rescore execution plan. If a tag already exists, the existing value is replaced with the new value.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface TagResourceResponse {}

/**
 * The request information to remove a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the `Rescore` API.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the rescore execution plan to remove the tag.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tag keys to remove from the rescore execution plan. If a tag key does not exist on the resource, it is ignored.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateRescoreExecutionPlanRequest {
  /**
   * The identifier of the rescore execution plan that you want to update.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * A new name for the rescore execution plan.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A new description for the rescore execution plan.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * You can set additional capacity units to meet the needs of your rescore execution plan. You are given a single capacity unit by default. If you want to use the default capacity, you don't set additional capacity units. For more information on the default capacity and additional capacity units, see [Adjusting capacity](https://docs.aws.amazon.com/kendra/latest/dg/adjusting-capacity.html).
   *
   * @public
   */
  CapacityUnits?: CapacityUnitsConfiguration | undefined;
}
