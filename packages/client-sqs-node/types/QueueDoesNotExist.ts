import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified queue doesn't exist.</p>
 */
export interface QueueDoesNotExist
  extends __ServiceException__<_QueueDoesNotExistDetails> {
  name: "QueueDoesNotExist";
}

export interface _QueueDoesNotExistDetails {}
