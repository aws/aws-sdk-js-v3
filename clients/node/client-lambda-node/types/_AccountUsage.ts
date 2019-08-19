/**
 * <p>The number of functions and amount of storage in use.</p>
 */
export interface _AccountUsage {
  /**
   * <p>The amount of storage space, in bytes, that's being used by deployment packages and layer archives.</p>
   */
  TotalCodeSize?: number;

  /**
   * <p>The number of Lambda functions.</p>
   */
  FunctionCount?: number;
}

export type _UnmarshalledAccountUsage = _AccountUsage;
