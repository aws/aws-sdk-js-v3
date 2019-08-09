/**
 * <p>Describes a database log event.</p>
 */
export interface _LogEvent {
  /**
   * <p>The timestamp when the database log event was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The message of the database log event.</p>
   */
  message?: string;
}

export interface _UnmarshalledLogEvent extends _LogEvent {
  /**
   * <p>The timestamp when the database log event was created.</p>
   */
  createdAt?: Date;
}
