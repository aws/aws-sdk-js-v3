/**
 * <p/>
 */
export interface _ReplicationTaskStats {
  /**
   * <p>The percent complete for the full load migration task.</p>
   */
  FullLoadProgressPercent?: number;

  /**
   * <p>The elapsed time of the task, in milliseconds.</p>
   */
  ElapsedTimeMillis?: number;

  /**
   * <p>The number of tables loaded for this task.</p>
   */
  TablesLoaded?: number;

  /**
   * <p>The number of tables currently loading for this task.</p>
   */
  TablesLoading?: number;

  /**
   * <p>The number of tables queued for this task.</p>
   */
  TablesQueued?: number;

  /**
   * <p>The number of errors that have occurred during this task.</p>
   */
  TablesErrored?: number;
}

export type _UnmarshalledReplicationTaskStats = _ReplicationTaskStats;
