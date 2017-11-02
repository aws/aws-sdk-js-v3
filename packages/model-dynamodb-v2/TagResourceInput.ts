import {_Tag} from './_Tag';

/**
 * TagResourceInput shape
 */
export interface TagResourceInput {
    /**
     * _ResourceArnString shape
     */
    ResourceArn: string;
    
    /**
     * _TagList shape
     */
    Tags: Array<_Tag>|Iterable<_Tag>;
}