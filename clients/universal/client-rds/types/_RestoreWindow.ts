/**
 * <p>Earliest and latest time an instance can be restored to:</p>
 */
export interface _RestoreWindow {
  /**
   * <p>The earliest time you can restore an instance to.</p>
   */
  EarliestTime?: Date | string | number;

  /**
   * <p>The latest time you can restore an instance to.</p>
   */
  LatestTime?: Date | string | number;
}

export interface _UnmarshalledRestoreWindow extends _RestoreWindow {
  /**
   * <p>The earliest time you can restore an instance to.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest time you can restore an instance to.</p>
   */
  LatestTime?: Date;
}
