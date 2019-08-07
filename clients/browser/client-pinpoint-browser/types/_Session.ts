/**
 * Information about a session.
 */
export interface _Session {
  /**
   * The duration of the session, in milliseconds.
   */
  Duration?: number;

  /**
   * A unique identifier for the session.
   */
  Id?: string;

  /**
   * The date and time when the session began.
   */
  StartTimestamp?: string;

  /**
   * The date and time when the session ended.
   */
  StopTimestamp?: string;
}

export type _UnmarshalledSession = _Session;
