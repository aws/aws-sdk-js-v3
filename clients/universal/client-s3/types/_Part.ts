/**
 * <p/>
 */
export interface _Part {
  /**
   * <p>Part number identifying the part. This is a positive integer between 1 and 10,000.</p>
   */
  PartNumber?: number;

  /**
   * <p>Date and time at which the part was uploaded.</p>
   */
  LastModified?: Date | string | number;

  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the uploaded part data.</p>
   */
  Size?: number;
}

export interface _UnmarshalledPart extends _Part {
  /**
   * <p>Date and time at which the part was uploaded.</p>
   */
  LastModified?: Date;
}
