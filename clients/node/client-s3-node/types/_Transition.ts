/**
 * <p>Specifies when an object transitions to a specified storage class.</p>
 */
export interface _Transition {
  /**
   * <p>Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date | string | number;

  /**
   * <p>Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.</p>
   */
  Days?: number;

  /**
   * <p>The storage class to which you want the object to transition.</p>
   */
  StorageClass?:
    | "GLACIER"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "DEEP_ARCHIVE"
    | string;
}

export interface _UnmarshalledTransition extends _Transition {
  /**
   * <p>Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;
}
