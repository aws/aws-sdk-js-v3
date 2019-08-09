/**
 * <p/>
 */
export interface _CopyPartResult {
  /**
   * <p>Entity tag of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   */
  LastModified?: Date | string | number;
}

export interface _UnmarshalledCopyPartResult extends _CopyPartResult {
  /**
   * <p>Date and time at which the object was uploaded.</p>
   */
  LastModified?: Date;
}
