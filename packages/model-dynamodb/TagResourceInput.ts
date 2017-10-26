import {_Tag} from './_Tag';

/**
 * TagResourceInput shape
 */
export interface TagResourceInput {
    /**
     * <p>Identifies the Amazon DynamoDB resource to which tags should be added. This value is an Amazon Resource Name (ARN).</p>
     */
    ResourceArn: string;
    
    /**
     * <p>The tags to be assigned to the Amazon DynamoDB resource.</p>
     */
    Tags: Array<_Tag>|Iterable<_Tag>;
}