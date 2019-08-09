import {
  _SessionManagerOutputUrl,
  _UnmarshalledSessionManagerOutputUrl
} from "./_SessionManagerOutputUrl";

/**
 * <p>Information about a Session Manager connection to an instance.</p>
 */
export interface _Session {
  /**
   * <p>The ID of the session.</p>
   */
  SessionId?: string;

  /**
   * <p>The instance that the Session Manager session connected to.</p>
   */
  Target?: string;

  /**
   * <p>The status of the session. For example, "Connected" or "Terminated".</p>
   */
  Status?:
    | "Connected"
    | "Connecting"
    | "Disconnected"
    | "Terminated"
    | "Terminating"
    | "Failed"
    | string;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session began.</p>
   */
  StartDate?: Date | string | number;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session was terminated.</p>
   */
  EndDate?: Date | string | number;

  /**
   * <p>The name of the Session Manager SSM document used to define the parameters and plugin settings for the session. For example, <code>SSM-SessionManagerRunShell</code>.</p>
   */
  DocumentName?: string;

  /**
   * <p>The ID of the AWS user account that started the session.</p>
   */
  Owner?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Details?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  OutputUrl?: _SessionManagerOutputUrl;
}

export interface _UnmarshalledSession extends _Session {
  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session began.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date and time, in ISO-8601 Extended format, when the session was terminated.</p>
   */
  EndDate?: Date;

  /**
   * <p>Reserved for future use.</p>
   */
  OutputUrl?: _UnmarshalledSessionManagerOutputUrl;
}
