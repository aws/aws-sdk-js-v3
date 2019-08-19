/**
 * <p>Provides information about an API request or response.</p>
 */
export interface _MessageBody {
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export type _UnmarshalledMessageBody = _MessageBody;
