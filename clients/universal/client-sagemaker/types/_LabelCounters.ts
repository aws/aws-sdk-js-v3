/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 */
export interface _LabelCounters {
  /**
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects not yet labeled.</p>
   */
  Unlabeled?: number;
}

export type _UnmarshalledLabelCounters = _LabelCounters;
