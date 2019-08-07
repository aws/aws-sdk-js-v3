import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The message contains characters outside the allowed set.</p>
 */
export interface InvalidMessageContents
  extends __ServiceException__<_InvalidMessageContentsDetails> {
  name: "InvalidMessageContents";
}

export interface _InvalidMessageContentsDetails {}
