/**
 * <p>Provides information about the results of sending a message directly to an endpoint address.</p>
 */
export interface _MessageResult {
  /**
   * <p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>OPT_OUT - The user who's associated with the endpoint address has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint address.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint address.</p></li> <li><p>TIMEOUT - The message couldn't be sent within the timeout period.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>
   */
  DeliveryStatus:
    | "SUCCESSFUL"
    | "THROTTLED"
    | "TEMPORARY_FAILURE"
    | "PERMANENT_FAILURE"
    | "UNKNOWN_FAILURE"
    | "OPT_OUT"
    | "DUPLICATE"
    | string;

  /**
   * <p>The unique identifier for the message that was sent.</p>
   */
  MessageId?: string;

  /**
   * <p>The downstream service status code for delivering the message.</p>
   */
  StatusCode: number;

  /**
   * <p>The status message for delivering the message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>For push notifications that are sent through the GCM channel, specifies whether the token was updated as part of delivering the message.</p>
   */
  UpdatedToken?: string;
}

export type _UnmarshalledMessageResult = _MessageResult;
