import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified hosted zone is a public hosted zone, not a private hosted zone.</p>
 */
export interface HostedZoneNotPrivate
  extends __ServiceException__<_HostedZoneNotPrivateDetails> {
  name: "HostedZoneNotPrivate";
}

export interface _HostedZoneNotPrivateDetails {
  /**
   * <p>Descriptive message for the error response.</p>
   */
  message?: string;
}
