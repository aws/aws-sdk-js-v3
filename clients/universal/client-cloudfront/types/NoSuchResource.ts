import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource that was specified is not valid.</p>
 */
export interface NoSuchResource
  extends __ServiceException__<_NoSuchResourceDetails> {
  name: "NoSuchResource";
}

export interface _NoSuchResourceDetails {
  /**
   * _string shape
   */
  Message?: string;
}
