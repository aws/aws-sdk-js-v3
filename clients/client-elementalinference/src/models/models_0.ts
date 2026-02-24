// smithy-typescript generated code
import { FeedStatus, OutputStatus } from "./enums";

/**
 * <p>A type of OutputConfig, used when the output in a feed is for the clip feature.</p>
 * @public
 */
export interface ClippingConfig {
  /**
   * <p>The metadata that is the result of the clip request to Elemental Inference. </p>
   * @public
   */
  callbackMetadata?: string | undefined;
}

/**
 * <p>A type of OutputConfig, used when the output in a feed is for the crop feature.</p>
 * @public
 */
export interface CroppingConfig {}

/**
 * <p>Contains one typed output. It is used in the CreateOutput, GetOutput, and Update Output structures. </p>
 * @public
 */
export type OutputConfig =
  | OutputConfig.ClippingMember
  | OutputConfig.CroppingMember
  | OutputConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputConfig {
  /**
   * <p>The output config type that applies to the cropping feature.</p>
   * @public
   */
  export interface CroppingMember {
    cropping: CroppingConfig;
    clipping?: never;
    $unknown?: never;
  }

  /**
   * <p>The output config type that applies to the clipping feature.</p>
   * @public
   */
  export interface ClippingMember {
    cropping?: never;
    clipping: ClippingConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cropping?: never;
    clipping?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cropping: (value: CroppingConfig) => T;
    clipping: (value: ClippingConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configuration information about one output in a feed. It is used in the AssociateFeed and the CreateFeed actions.</p>
 * @public
 */
export interface CreateOutput {
  /**
   * <p>A name for the output.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A typed property for an output in a feed. It is used in the CreateFeed and AssociateFeed actions. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature. </p>
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * <p>The status to assign to the output.</p>
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * <p>A description for the output.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFeedRequest {
  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An identifier for the resource. If the resource is from an AWS service, this identifier must be the full ARN of that resource. Otherwise, the identifier is a name that you assign and that is appropriate for the application that owns the resource. This name must not resemble an ARN.</p>
   * @public
   */
  associatedResourceName?: string | undefined;

  /**
   * <p>The outputs to add to this feed. You must specify at least one output. You can later use the UpdateFeed action to change the list of outputs.</p>
   * @public
   */
  outputs: CreateOutput[] | undefined;

  /**
   * <p>Set to true if you want to do a dry run of the associate action.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateFeedResponse {
  /**
   * <p>The AWS ARN for this association.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>An ID for this response. It is unique in Elemental Inference for this AWS account.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface CreateFeedRequest {
  /**
   * <p>A name for this feed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An array of outputs for this feed. Each output represents a specific Elemental Inference feature. For example, an output might represent the crop feature. </p>
   * @public
   */
  outputs: CreateOutput[] | undefined;

  /**
   * <p>If you want to include tags, add them now. You won't be able to add them later.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains information about the resource that is associated with a feed. It is used in the FeedSummary that is used in the response of a ListFeeds action.</p>
 * @public
 */
export interface FeedAssociation {
  /**
   * <p>The name of the associated resource.</p>
   * @public
   */
  associatedResourceName: string | undefined;
}

/**
 * <p>Contains configuration information about one output in a feed. It is used in the GetFeed action.</p>
 * @public
 */
export interface GetOutput {
  /**
   * <p>The ARN of the output.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A typed property for an output in a feed. It is used in the GetFeed action. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature. </p>
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * <p>The status of the output.</p>
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * <p>The description of the output.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>True means that the output was originally created in the feed by the AssociateFeed operation. False means it was created using CreateFeed or UpdateFeed. You will need this value if you use the UpdateFeed operation to modify the list of outputs in the feed.</p>
   * @public
   */
  fromAssociation?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFeedResponse {
  /**
   * <p>A unique ARN that Elemental Inference assigns to the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name that you specified.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A unique ID that Elemental Inference assigns to the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A unique ARN that Elemental Inference assigns to the feed.</p>
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * <p>Data endpoints that Elemental Inference assigns to the feed.</p>
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * <p>The current status of the feed. After creation of the feed has succeeded, the status will be AVAILABLE.</p>
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * <p>The association for this feed. When you create the feed, this property is empty. You must associate a resource with the feed using AssociateFeed.</p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>Any tags that you included when you created the feed.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteFeedRequest {
  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteFeedResponse {
  /**
   * <p>The ARN of the deleted feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the deleted feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The current status of the feed. When deletion of the feed has succeeded, the status will be DELETED.</p>
   * @public
   */
  status: FeedStatus | undefined;
}

/**
 * @public
 */
export interface DisassociateFeedRequest {
  /**
   * <p>The ID of the feed where you want to release the resource.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the resource currently associated with the feed'.</p>
   * @public
   */
  associatedResourceName?: string | undefined;

  /**
   * <p>Set to true if you want to do a dry run of the disassociate action.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateFeedResponse {
  /**
   * <p>The ID of the feed where you deleted the associated resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARN of the resource that you deleted.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFeedRequest {
  /**
   * <p>The ID of the feed to query.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFeedResponse {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the feed being queried.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the feed being queried.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The dataEndpoints of the feed being queried.</p>
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * <p>An array of the outputs in the feed being queried.</p>
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * <p>The status of the feed being queried.</p>
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * <p>Information about the resource, if any, associated with the feed being queried.</p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>A list of the tags, if any, for the feed being queried.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListFeedsRequest {
  /**
   * <p>The maximum number of results to return per API request.</p> <p>For example, you submit a list request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.)</p> <p>The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</p> <p>Valid Range: Minimum value of 1. Maximum value of 1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token that identifies the batch of results that you want to see.</p> <p>For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains configuration information about a feed. It is used in the ListFeeds action.</p>
 * @public
 */
export interface FeedSummary {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the feed</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The resource, if any, associated with the feed.</p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>The status of the feed.</p>
   * @public
   */
  status: FeedStatus | undefined;
}

/**
 * @public
 */
export interface ListFeedsResponse {
  /**
   * <p>A list of feed summaries.</p>
   * @public
   */
  feeds: FeedSummary[] | undefined;

  /**
   * <p>The token that identifies the batch of results that you want to see. For example, you submit a list request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the list request a second time and specify the NextToken value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains configuration information about one output in a feed. It is used in the UpdateFeed action.</p>
 * @public
 */
export interface UpdateOutput {
  /**
   * <p>The name start here</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A typed property for an output in a feed. It is used in the UpdateFeed action. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature. </p>
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * <p>The status of the output.</p>
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * <p>A description of the output.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This property is set by the service when you add the output to the feed, and indicates how you added the output. True means that you used the AssociateFeed operation. False means that you used the CreateFeed or UpdateFeed operation. Use GetFeed to obtain the value. If the value is True, include this field here with a value of True. If the value is False, omit the field here.</p>
   * @public
   */
  fromAssociation?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFeedRequest {
  /**
   * <p>Required. You can specify the existing name (to leave it unchanged) or a new name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the feed to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Required. You can specify the existing array of outputs (to leave outputs unchanged) or you can specify a new array. </p>
   * @public
   */
  outputs: UpdateOutput[] | undefined;
}

/**
 * @public
 */
export interface UpdateFeedResponse {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The updated or original name of the feed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The data endpoints of the feed.</p>
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * <p>The array of outputs in the feed. You might have left this array unchanged, or you might have changed it.</p>
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * <p>The status of the output.</p>
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * <p>True means that the output was originally created in the feed by the AssociateFeed operation. False means it was created using CreateFeed or UpdateFeed. You will need this value if you use the UpdateFeed operation to modify the list of outputs in the feed.</p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>The name of the resource currently associated with the feed, if any.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to query. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of the tags that belong to this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource where you want to add tags. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to add to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource where you want to delete one or more tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to delete.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
