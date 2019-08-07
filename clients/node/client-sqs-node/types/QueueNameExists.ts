import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A queue with this name already exists. Amazon SQS returns this error only if the request includes attributes whose values differ from those of the existing queue.</p>
 */
export interface QueueNameExists
  extends __ServiceException__<_QueueNameExistsDetails> {
  name: "QueueNameExists";
}

export interface _QueueNameExistsDetails {}
