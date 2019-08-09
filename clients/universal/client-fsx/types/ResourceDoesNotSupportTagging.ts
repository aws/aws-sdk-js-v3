import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified does not support tagging. </p>
 */
export interface ResourceDoesNotSupportTagging
  extends __ServiceException__<_ResourceDoesNotSupportTaggingDetails> {
  name: "ResourceDoesNotSupportTagging";
}

export interface _ResourceDoesNotSupportTaggingDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that doesn't support tagging.</p>
   */
  ResourceARN: string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
