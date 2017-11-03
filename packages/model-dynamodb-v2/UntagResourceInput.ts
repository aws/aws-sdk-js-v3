/**
 * UntagResourceInput shape
 */
export interface UntagResourceInput {
    /**
     * <p>The Amazon DyanamoDB resource the tags will be removed from. This value is an Amazon Resource Name (ARN).</p>
     */
    ResourceArn: string;
    
    /**
     * <p>A list of tag keys. Existing tags of the resource whose keys are members of this list will be removed from the Amazon DynamoDB resource.</p>
     */
    TagKeys: Array<string>|Iterable<string>;
}