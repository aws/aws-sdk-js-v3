import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Availability Zone is not supported.</p>
 */
export interface AvailabilityZoneNotSupportedException
  extends __ServiceException__<_AvailabilityZoneNotSupportedExceptionDetails> {
  name: "AvailabilityZoneNotSupportedException";
}

export interface _AvailabilityZoneNotSupportedExceptionDetails {}
