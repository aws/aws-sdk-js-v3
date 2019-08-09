import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
 */
export interface InvalidSchedule
  extends __ServiceException__<_InvalidScheduleDetails> {
  name: "InvalidSchedule";
}

export interface _InvalidScheduleDetails {
  /**
   * _String shape
   */
  Message?: string;
}
