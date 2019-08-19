import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Config throws an exception if the recording group does not contain a valid list of resource types. Invalid values might also be incorrectly formatted.</p>
 */
export interface InvalidRecordingGroupException
  extends __ServiceException__<_InvalidRecordingGroupExceptionDetails> {
  name: "InvalidRecordingGroupException";
}

export interface _InvalidRecordingGroupExceptionDetails {}
