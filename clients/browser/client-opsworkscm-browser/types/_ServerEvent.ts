/**
 * <p>An event that is related to the server, such as the start of maintenance or backup. </p>
 */
export interface _ServerEvent {
  /**
   * <p>The time when the event occurred. </p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>The name of the server on or for which the event occurred. </p>
   */
  ServerName?: string;

  /**
   * <p>A human-readable informational or status message.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon S3 URL of the event's log file.</p>
   */
  LogUrl?: string;
}

export interface _UnmarshalledServerEvent extends _ServerEvent {
  /**
   * <p>The time when the event occurred. </p>
   */
  CreatedAt?: Date;
}
