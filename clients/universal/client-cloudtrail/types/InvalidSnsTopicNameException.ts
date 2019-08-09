import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the provided SNS topic name is not valid.</p>
 */
export interface InvalidSnsTopicNameException
  extends __ServiceException__<_InvalidSnsTopicNameExceptionDetails> {
  name: "InvalidSnsTopicNameException";
}

export interface _InvalidSnsTopicNameExceptionDetails {}
