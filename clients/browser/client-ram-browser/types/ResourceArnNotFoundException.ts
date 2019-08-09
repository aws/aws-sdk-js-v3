import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An Amazon Resource Name (ARN) was not found.</p>
 */
export interface ResourceArnNotFoundException
  extends __ServiceException__<_ResourceArnNotFoundExceptionDetails> {
  name: "ResourceArnNotFoundException";
}

export interface _ResourceArnNotFoundExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
