import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 */
export interface InternalServerError
  extends __ServiceException__<_InternalServerErrorDetails> {
  name: "InternalServerError";
}

export interface _InternalServerErrorDetails {}
