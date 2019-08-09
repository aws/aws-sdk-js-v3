/**
 * <p>A Legal Hold configuration for an object.</p>
 */
export interface _ObjectLockLegalHold {
  /**
   * <p>Indicates whether the specified object has a Legal Hold in place.</p>
   */
  Status?: "ON" | "OFF" | string;
}

export type _UnmarshalledObjectLockLegalHold = _ObjectLockLegalHold;
