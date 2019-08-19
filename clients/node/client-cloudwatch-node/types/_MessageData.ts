/**
 * <p>A message returned by the <code>GetMetricData</code>API, including a code and a description.</p>
 */
export interface _MessageData {
  /**
   * <p>The error code or status code associated with the message.</p>
   */
  Code?: string;

  /**
   * <p>The message text.</p>
   */
  Value?: string;
}

export type _UnmarshalledMessageData = _MessageData;
