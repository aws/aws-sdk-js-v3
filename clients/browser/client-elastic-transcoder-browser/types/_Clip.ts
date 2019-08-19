import { _TimeSpan, _UnmarshalledTimeSpan } from "./_TimeSpan";

/**
 * <p>Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.</p>
 */
export interface _Clip {
  /**
   * <p>Settings that determine when a clip begins and how long it lasts.</p>
   */
  TimeSpan?: _TimeSpan;
}

export interface _UnmarshalledClip extends _Clip {
  /**
   * <p>Settings that determine when a clip begins and how long it lasts.</p>
   */
  TimeSpan?: _UnmarshalledTimeSpan;
}
