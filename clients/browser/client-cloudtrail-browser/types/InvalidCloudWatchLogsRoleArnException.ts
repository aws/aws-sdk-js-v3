import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the provided role is not valid.</p>
 */
export interface InvalidCloudWatchLogsRoleArnException
  extends __ServiceException__<_InvalidCloudWatchLogsRoleArnExceptionDetails> {
  name: "InvalidCloudWatchLogsRoleArnException";
}

export interface _InvalidCloudWatchLogsRoleArnExceptionDetails {}
