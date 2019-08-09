/**
 * <p>The <code>ulimit</code> settings to pass to the container.</p>
 */
export interface _Ulimit {
  /**
   * <p>The hard limit for the <code>ulimit</code> type.</p>
   */
  hardLimit: number;

  /**
   * <p>The <code>type</code> of the <code>ulimit</code>.</p>
   */
  name: string;

  /**
   * <p>The soft limit for the <code>ulimit</code> type.</p>
   */
  softLimit: number;
}

export type _UnmarshalledUlimit = _Ulimit;
