import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The layer digest calculation performed by Amazon ECR upon receipt of the image layer does not match the digest specified.</p>
 */
export interface InvalidLayerException
  extends __ServiceException__<_InvalidLayerExceptionDetails> {
  name: "InvalidLayerException";
}

export interface _InvalidLayerExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
