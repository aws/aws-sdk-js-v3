import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The retention period specified is either in the past or is not a valid value.</p> <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 */
export interface InvalidRetentionPeriodFault
  extends __ServiceException__<_InvalidRetentionPeriodFaultDetails> {
  name: "InvalidRetentionPeriodFault";
}

export interface _InvalidRetentionPeriodFaultDetails {}
