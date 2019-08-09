import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Access denied.</p>
 */
export interface AccessDenied
  extends __ServiceException__<_AccessDeniedDetails> {
  name: "AccessDenied";
}

export interface _AccessDeniedDetails {
  /**
   * _string shape
   */
  Message?: string;
}
