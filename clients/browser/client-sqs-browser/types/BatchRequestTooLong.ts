import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The length of all the messages put together is more than the limit.</p>
 */
export interface BatchRequestTooLong
  extends __ServiceException__<_BatchRequestTooLongDetails> {
  name: "BatchRequestTooLong";
}

export interface _BatchRequestTooLongDetails {}
