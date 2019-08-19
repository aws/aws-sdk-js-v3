import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The updated status is the same as the current status.</p>
 */
export interface StatusUnchanged
  extends __ServiceException__<_StatusUnchangedDetails> {
  name: "StatusUnchanged";
}

export interface _StatusUnchangedDetails {}
