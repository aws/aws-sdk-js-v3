import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The message can't be sent because it contains invalid content.</p>
 */
export interface MessageRejected
  extends __ServiceException__<_MessageRejectedDetails> {
  name: "MessageRejected";
}

export interface _MessageRejectedDetails {}
