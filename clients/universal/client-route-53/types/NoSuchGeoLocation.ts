import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Route 53 doesn't support the specified geographic location.</p>
 */
export interface NoSuchGeoLocation
  extends __ServiceException__<_NoSuchGeoLocationDetails> {
  name: "NoSuchGeoLocation";
}

export interface _NoSuchGeoLocationDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
