import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The target instance configuration is invalid. Possible causes include:</p> <ul> <li> <p>Configuration data for target instances was entered for an in-place deployment.</p> </li> <li> <p>The limit of 10 tags for a tag type was exceeded.</p> </li> <li> <p>The combined length of the tag names exceeded the limit. </p> </li> <li> <p>A specified tag is not currently applied to any instances.</p> </li> </ul>
 */
export interface InvalidTargetInstancesException
  extends __ServiceException__<_InvalidTargetInstancesExceptionDetails> {
  name: "InvalidTargetInstancesException";
}

export interface _InvalidTargetInstancesExceptionDetails {}
