/**
 * <p>Represents a target that failed to be added to a rule.</p>
 */
export interface _PutTargetsResultEntry {
  /**
   * <p>The ID of the target.</p>
   */
  TargetId?: string;

  /**
   * <p>The error code that indicates why the target addition failed. If the value is <code>ConcurrentModificationException</code>, too many requests were made at the same time.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the target addition failed.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledPutTargetsResultEntry = _PutTargetsResultEntry;
