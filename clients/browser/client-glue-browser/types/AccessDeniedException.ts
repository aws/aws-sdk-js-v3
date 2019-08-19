import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Access to a resource was denied.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
