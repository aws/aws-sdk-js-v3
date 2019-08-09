import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There was a version conflict.</p>
 */
export interface VersionMismatchException
  extends __ServiceException__<_VersionMismatchExceptionDetails> {
  name: "VersionMismatchException";
}

export interface _VersionMismatchExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
