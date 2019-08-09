/**
 * <p>Provides information about a session.</p>
 */
export interface _Session {
  /**
   * <p>The duration of the session, in milliseconds.</p>
   */
  Duration?: number;

  /**
   * <p>The unique identifier for the session.</p>
   */
  Id: string;

  /**
   * <p>The date and time when the session began.</p>
   */
  StartTimestamp: string;

  /**
   * <p>The date and time when the session ended.</p>
   */
  StopTimestamp?: string;
}

export type _UnmarshalledSession = _Session;
