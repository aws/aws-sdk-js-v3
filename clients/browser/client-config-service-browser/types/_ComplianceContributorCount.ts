/**
 * <p>The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number.</p>
 */
export interface _ComplianceContributorCount {
  /**
   * <p>The number of AWS resources or AWS Config rules responsible for the current compliance of the item.</p>
   */
  CappedCount?: number;

  /**
   * <p>Indicates whether the maximum count is reached.</p>
   */
  CapExceeded?: boolean;
}

export type _UnmarshalledComplianceContributorCount = _ComplianceContributorCount;
