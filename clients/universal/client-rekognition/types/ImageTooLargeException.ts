import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The input image size exceeds the allowed limit. For more information, see Limits in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 */
export interface ImageTooLargeException
  extends __ServiceException__<_ImageTooLargeExceptionDetails> {
  name: "ImageTooLargeException";
}

export interface _ImageTooLargeExceptionDetails {}
