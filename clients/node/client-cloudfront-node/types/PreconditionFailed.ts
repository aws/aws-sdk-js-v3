import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
 */
export interface PreconditionFailed
  extends __ServiceException__<_PreconditionFailedDetails> {
  name: "PreconditionFailed";
}

export interface _PreconditionFailedDetails {
  /**
   * _string shape
   */
  Message?: string;
}
