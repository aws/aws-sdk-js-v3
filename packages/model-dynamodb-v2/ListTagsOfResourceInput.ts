/**
 * ListTagsOfResourceInput shape
 */
export interface ListTagsOfResourceInput {
    /**
     * <p>The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN).</p>
     */
    ResourceArn: string;
    
    /**
     * <p>An optional string that, if supplied, must be copied from the output of a previous call to ListTagOfResource. When provided in this manner, this API fetches the next page of results.</p>
     */
    NextToken?: string;
}