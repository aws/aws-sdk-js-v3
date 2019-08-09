import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when an operation is called on a trail from a region other than the region in which the trail was created.</p>
 */
export interface InvalidHomeRegionException
  extends __ServiceException__<_InvalidHomeRegionExceptionDetails> {
  name: "InvalidHomeRegionException";
}

export interface _InvalidHomeRegionExceptionDetails {}
