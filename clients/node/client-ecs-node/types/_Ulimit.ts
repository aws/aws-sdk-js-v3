/**
 * <p>The <code>ulimit</code> settings to pass to the container.</p>
 */
export interface _Ulimit {
  /**
   * <p>The <code>type</code> of the <code>ulimit</code>.</p>
   */
  name:
    | "core"
    | "cpu"
    | "data"
    | "fsize"
    | "locks"
    | "memlock"
    | "msgqueue"
    | "nice"
    | "nofile"
    | "nproc"
    | "rss"
    | "rtprio"
    | "rttime"
    | "sigpending"
    | "stack"
    | string;

  /**
   * <p>The soft limit for the ulimit type.</p>
   */
  softLimit: number;

  /**
   * <p>The hard limit for the ulimit type.</p>
   */
  hardLimit: number;
}

export type _UnmarshalledUlimit = _Ulimit;
