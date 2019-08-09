import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified attribute doesn't exist.</p>
 */
export interface InvalidAttributeName
  extends __ServiceException__<_InvalidAttributeNameDetails> {
  name: "InvalidAttributeName";
}

export interface _InvalidAttributeNameDetails {}
