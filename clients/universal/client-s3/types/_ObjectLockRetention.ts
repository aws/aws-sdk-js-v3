/**
 * <p>A Retention configuration for an object.</p>
 */
export interface _ObjectLockRetention {
  /**
   * <p>Indicates the Retention mode for the specified object.</p>
   */
  Mode?: "GOVERNANCE" | "COMPLIANCE" | string;

  /**
   * <p>The date on which this object lock retention expires.</p>
   */
  RetainUntilDate?: Date | string | number;
}

export interface _UnmarshalledObjectLockRetention extends _ObjectLockRetention {
  /**
   * <p>The date on which this object lock retention expires.</p>
   */
  RetainUntilDate?: Date;
}
