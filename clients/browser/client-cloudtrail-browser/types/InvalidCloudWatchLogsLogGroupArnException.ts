import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the provided CloudWatch log group is not valid.</p>
 */
export interface InvalidCloudWatchLogsLogGroupArnException
  extends __ServiceException__<
    _InvalidCloudWatchLogsLogGroupArnExceptionDetails
  > {
  name: "InvalidCloudWatchLogsLogGroupArnException";
}

export interface _InvalidCloudWatchLogsLogGroupArnExceptionDetails {}
