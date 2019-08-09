import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Tagging specified in the response body is not valid.</p>
 */
export interface InvalidTagging
  extends __ServiceException__<_InvalidTaggingDetails> {
  name: "InvalidTagging";
}

export interface _InvalidTaggingDetails {
  /**
   * _string shape
   */
  Message?: string;
}
