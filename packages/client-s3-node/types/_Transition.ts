/**
 * _Transition shape
 */
export interface _Transition {
  /**
   * <p>Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.</p>
   */
  Date?: Date | string | number;

  /**
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: "GLACIER" | "STANDARD_IA" | "ONEZONE_IA" | string;
}

export interface _UnmarshalledTransition extends _Transition {
  /**
   * <p>Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601 Format.</p>
   */
  Date?: Date;
}
