import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
 */
export interface ResourceNotFound
  extends __ServiceException__<_ResourceNotFoundDetails> {
  name: "ResourceNotFound";
}

export interface _ResourceNotFoundDetails {
  /**
   * <p>The resource ARN of the resource that can't be found.</p>
   */
  ResourceARN: string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
