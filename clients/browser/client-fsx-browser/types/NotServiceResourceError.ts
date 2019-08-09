import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource specified for the tagging operation is not a resource type owned by Amazon FSx. Use the API of the relevant service to perform the operation. </p>
 */
export interface NotServiceResourceError
  extends __ServiceException__<_NotServiceResourceErrorDetails> {
  name: "NotServiceResourceError";
}

export interface _NotServiceResourceErrorDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the non-Amazon FSx resource.</p>
   */
  ResourceARN: string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
