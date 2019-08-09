import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The output location is not valid or does not exist.</p>
 */
export interface InvalidOutputLocation
  extends __ServiceException__<_InvalidOutputLocationDetails> {
  name: "InvalidOutputLocation";
}

export interface _InvalidOutputLocationDetails {}
