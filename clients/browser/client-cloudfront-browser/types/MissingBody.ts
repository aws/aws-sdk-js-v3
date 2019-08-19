import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
 */
export interface MissingBody extends __ServiceException__<_MissingBodyDetails> {
  name: "MissingBody";
}

export interface _MissingBodyDetails {
  /**
   * _string shape
   */
  Message?: string;
}
