import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The message can't be sent because the account's ability to send email is currently paused.</p>
 */
export interface SendingPausedException
  extends __ServiceException__<_SendingPausedExceptionDetails> {
  name: "SendingPausedException";
}

export interface _SendingPausedExceptionDetails {}
