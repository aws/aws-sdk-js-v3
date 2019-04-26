/**
 * _CopyObjectResult shape
 */
export interface _CopyObjectResult {
    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _LastModified shape
     */
    LastModified?: Date|string|number;
}

export interface _UnmarshalledCopyObjectResult extends _CopyObjectResult {
    /**
     * _LastModified shape
     */
    LastModified?: Date;
}