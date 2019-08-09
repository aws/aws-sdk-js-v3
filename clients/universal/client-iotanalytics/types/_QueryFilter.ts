import { _DeltaTime, _UnmarshalledDeltaTime } from "./_DeltaTime";

/**
 * <p>Information which is used to filter message data, to segregate it according to the time frame in which it arrives.</p>
 */
export interface _QueryFilter {
  /**
   * <p>Used to limit data to that which has arrived since the last execution of the action.</p>
   */
  deltaTime?: _DeltaTime;
}

export interface _UnmarshalledQueryFilter extends _QueryFilter {
  /**
   * <p>Used to limit data to that which has arrived since the last execution of the action.</p>
   */
  deltaTime?: _UnmarshalledDeltaTime;
}
