/**
 * <p>Contains an array of <code>Transition</code> objects specifying how long in days before a recovery point transitions to cold storage or is deleted.</p>
 */
export interface _Lifecycle {
  /**
   * <p>Specifies the number of days after creation that a recovery point is moved to cold storage.</p>
   */
  MoveToColdStorageAfterDays?: number;

  /**
   * <p>Specifies the number of days after creation that a recovery point is deleted. Must be greater than <code>MoveToColdStorageAfterDays</code>.</p>
   */
  DeleteAfterDays?: number;
}

export type _UnmarshalledLifecycle = _Lifecycle;
