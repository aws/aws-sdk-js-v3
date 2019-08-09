import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no applicable schedule.</p>
 */
export interface NoScheduleException
  extends __ServiceException__<_NoScheduleExceptionDetails> {
  name: "NoScheduleException";
}

export interface _NoScheduleExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
