import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of alarms for a deployment group (10) was exceeded.</p>
 */
export interface AlarmsLimitExceededException
  extends __ServiceException__<_AlarmsLimitExceededExceptionDetails> {
  name: "AlarmsLimitExceededException";
}

export interface _AlarmsLimitExceededExceptionDetails {}
