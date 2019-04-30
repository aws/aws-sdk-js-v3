/**
 * <p>Represents the settings used to enable point in time recovery.</p>
 */
export interface _PointInTimeRecoverySpecification {
  /**
   * <p>Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.</p>
   */
  PointInTimeRecoveryEnabled: boolean;
}

export type _UnmarshalledPointInTimeRecoverySpecification = _PointInTimeRecoverySpecification;
