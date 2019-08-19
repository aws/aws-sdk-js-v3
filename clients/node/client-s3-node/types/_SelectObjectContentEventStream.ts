import { _RecordsEvent, _UnmarshalledRecordsEvent } from "./_RecordsEvent";
import { _StatsEvent, _UnmarshalledStatsEvent } from "./_StatsEvent";
import { _ProgressEvent, _UnmarshalledProgressEvent } from "./_ProgressEvent";
import {
  _ContinuationEvent,
  _UnmarshalledContinuationEvent
} from "./_ContinuationEvent";
import { _EndEvent, _UnmarshalledEndEvent } from "./_EndEvent";

/**
 * <p/>
 */
export interface _SelectObjectContentEventStream {
  /**
   * <p>The Records Event.</p>
   */
  Records?: _RecordsEvent;

  /**
   * <p>The Stats Event.</p>
   */
  Stats?: _StatsEvent;

  /**
   * <p>The Progress Event.</p>
   */
  Progress?: _ProgressEvent;

  /**
   * <p>The Continuation Event.</p>
   */
  Cont?: _ContinuationEvent;

  /**
   * <p>The End Event.</p>
   */
  End?: _EndEvent;
}

export interface _UnmarshalledSelectObjectContentEventStream
  extends _SelectObjectContentEventStream {
  /**
   * <p>The Records Event.</p>
   */
  Records?: _UnmarshalledRecordsEvent;

  /**
   * <p>The Stats Event.</p>
   */
  Stats?: _UnmarshalledStatsEvent;

  /**
   * <p>The Progress Event.</p>
   */
  Progress?: _UnmarshalledProgressEvent;

  /**
   * <p>The Continuation Event.</p>
   */
  Cont?: _UnmarshalledContinuationEvent;

  /**
   * <p>The End Event.</p>
   */
  End?: _UnmarshalledEndEvent;
}
