/**
 * <p>Specifies configuration properties of a notification.</p>
 */
export interface _NotificationProperty {
  /**
   * <p>After a job run starts, the number of minutes to wait before sending a job run delay notification.</p>
   */
  NotifyDelayAfter?: number;
}

export type _UnmarshalledNotificationProperty = _NotificationProperty;
