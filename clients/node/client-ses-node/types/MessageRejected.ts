import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the action failed, and the message could not be sent. Check the error stack for more information about what caused the error.</p>
 */
export interface MessageRejected
  extends __ServiceException__<_MessageRejectedDetails> {
  name: "MessageRejected";
}

export interface _MessageRejectedDetails {}
