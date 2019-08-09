import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The endpoint being called is in a Region different from your EC2 instance. The Region of the Metering Service endpoint and the Region of the EC2 instance must match.</p>
 */
export interface InvalidEndpointRegionException
  extends __ServiceException__<_InvalidEndpointRegionExceptionDetails> {
  name: "InvalidEndpointRegionException";
}

export interface _InvalidEndpointRegionExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
