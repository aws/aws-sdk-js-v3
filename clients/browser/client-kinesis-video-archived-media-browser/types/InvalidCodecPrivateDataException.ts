import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The codec private data in at least one of the tracks of the video stream is not valid for this operation.</p>
 */
export interface InvalidCodecPrivateDataException
  extends __ServiceException__<_InvalidCodecPrivateDataExceptionDetails> {
  name: "InvalidCodecPrivateDataException";
}

export interface _InvalidCodecPrivateDataExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
