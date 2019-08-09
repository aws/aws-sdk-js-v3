import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation is not supported in the region specified.</p>
 */
export interface UnsupportedRegionException
  extends __ServiceException__<_UnsupportedRegionExceptionDetails> {
  name: "UnsupportedRegionException";
}

export interface _UnsupportedRegionExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
