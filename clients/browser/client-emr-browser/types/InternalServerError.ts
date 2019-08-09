import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that an error occurred while processing the request and that the request was not completed.</p>
 */
export interface InternalServerError
  extends __ServiceException__<_InternalServerErrorDetails> {
  name: "InternalServerError";
}

export interface _InternalServerErrorDetails {}
