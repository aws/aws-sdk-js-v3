/**
 * <p>Details on an event associated with a service.</p>
 */
export interface _ServiceEvent {
  /**
   * <p>The ID string of the event.</p>
   */
  id?: string;

  /**
   * <p>The Unix timestamp for when the event was triggered.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The event message.</p>
   */
  message?: string;
}

export interface _UnmarshalledServiceEvent extends _ServiceEvent {
  /**
   * <p>The Unix timestamp for when the event was triggered.</p>
   */
  createdAt?: Date;
}
