import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request is invalid.</p>
 */
export interface RequestError
  extends __ServiceException__<_RequestErrorDetails> {
  name: "RequestError";
}

export interface _RequestErrorDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;

  /**
   * _TurkErrorCode shape
   */
  TurkErrorCode?: string;
}
