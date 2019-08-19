/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface _LabelCountersForWorkteam {
  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

export type _UnmarshalledLabelCountersForWorkteam = _LabelCountersForWorkteam;
