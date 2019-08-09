/**
 * <p>Describes the time period for a Scheduled Instance to start its first schedule.</p>
 */
export interface _SlotStartTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime?: Date | string | number;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  LatestTime?: Date | string | number;
}

export interface _UnmarshalledSlotStartTimeRangeRequest
  extends _SlotStartTimeRangeRequest {
  /**
   * <p>The earliest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest date and time, in UTC, for the Scheduled Instance to start.</p>
   */
  LatestTime?: Date;
}
