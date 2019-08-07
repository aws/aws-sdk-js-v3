import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified receipt handle isn't valid for the current version.</p>
 */
export interface InvalidIdFormat
  extends __ServiceException__<_InvalidIdFormatDetails> {
  name: "InvalidIdFormat";
}

export interface _InvalidIdFormatDetails {}
