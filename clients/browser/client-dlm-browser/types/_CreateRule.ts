/**
 * <p>Specifies when to create snapshots of EBS volumes.</p>
 */
export interface _CreateRule {
  /**
   * <p>The interval between snapshots. The supported values are 2, 3, 4, 6, 8, 12, and 24.</p>
   */
  Interval: number;

  /**
   * <p>The interval unit.</p>
   */
  IntervalUnit: "HOURS" | string;

  /**
   * <p>The time, in UTC, to start the operation. The supported format is hh:mm.</p> <p>The operation occurs within a one-hour window following the specified time.</p>
   */
  Times?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledCreateRule extends _CreateRule {
  /**
   * <p>The time, in UTC, to start the operation. The supported format is hh:mm.</p> <p>The operation occurs within a one-hour window following the specified time.</p>
   */
  Times?: Array<string>;
}
