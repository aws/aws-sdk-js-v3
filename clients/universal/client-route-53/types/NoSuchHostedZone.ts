import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No hosted zone exists with the ID that you specified.</p>
 */
export interface NoSuchHostedZone
  extends __ServiceException__<_NoSuchHostedZoneDetails> {
  name: "NoSuchHostedZone";
}

export interface _NoSuchHostedZoneDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
