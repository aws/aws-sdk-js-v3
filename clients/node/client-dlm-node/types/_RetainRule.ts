/**
 * <p>Specifies the number of snapshots to keep for each EBS volume.</p>
 */
export interface _RetainRule {
  /**
   * <p>The number of snapshots to keep for each volume, up to a maximum of 1000.</p>
   */
  Count: number;
}

export type _UnmarshalledRetainRule = _RetainRule;
