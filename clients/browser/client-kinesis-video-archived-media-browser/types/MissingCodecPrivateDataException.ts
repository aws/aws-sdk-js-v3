import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No codec private data was found in at least one of tracks of the video stream.</p>
 */
export interface MissingCodecPrivateDataException
  extends __ServiceException__<_MissingCodecPrivateDataExceptionDetails> {
  name: "MissingCodecPrivateDataException";
}

export interface _MissingCodecPrivateDataExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
