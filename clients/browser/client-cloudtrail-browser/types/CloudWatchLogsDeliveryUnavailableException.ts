import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cannot set a CloudWatch Logs delivery for this region.</p>
 */
export interface CloudWatchLogsDeliveryUnavailableException
  extends __ServiceException__<
    _CloudWatchLogsDeliveryUnavailableExceptionDetails
  > {
  name: "CloudWatchLogsDeliveryUnavailableException";
}

export interface _CloudWatchLogsDeliveryUnavailableExceptionDetails {}
