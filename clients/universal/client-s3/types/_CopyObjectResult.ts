/**
 * <p/>
 */
export interface _CopyObjectResult {
  /**
   * <p/>
   */
  ETag?: string;

  /**
   * <p/>
   */
  LastModified?: Date | string | number;
}

export interface _UnmarshalledCopyObjectResult extends _CopyObjectResult {
  /**
   * <p/>
   */
  LastModified?: Date;
}
