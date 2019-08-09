import { _Progress, _UnmarshalledProgress } from "./_Progress";

/**
 * <p/>
 */
export interface _ProgressEvent {
  /**
   * <p>The Progress event details.</p>
   */
  Details?: _Progress;
}

export interface _UnmarshalledProgressEvent extends _ProgressEvent {
  /**
   * <p>The Progress event details.</p>
   */
  Details?: _UnmarshalledProgress;
}
