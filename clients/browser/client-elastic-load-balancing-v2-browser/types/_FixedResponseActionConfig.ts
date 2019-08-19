/**
 * <p>Information about an action that returns a custom HTTP response.</p>
 */
export interface _FixedResponseActionConfig {
  /**
   * <p>The message.</p>
   */
  MessageBody?: string;

  /**
   * <p>The HTTP response code (2XX, 4XX, or 5XX).</p>
   */
  StatusCode: string;

  /**
   * <p>The content type.</p> <p>Valid Values: text/plain | text/css | text/html | application/javascript | application/json</p>
   */
  ContentType?: string;
}

export type _UnmarshalledFixedResponseActionConfig = _FixedResponseActionConfig;
