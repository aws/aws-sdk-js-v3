/**
 * UntagResourceInput shape
 */
export interface UntagResourceInput {
    /**
     * _ResourceArnString shape
     */
    ResourceArn: string;
    
    /**
     * _TagKeyList shape
     */
    TagKeys: Array<string>|Iterable<string>;
}