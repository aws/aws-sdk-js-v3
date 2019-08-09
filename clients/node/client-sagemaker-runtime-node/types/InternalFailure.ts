import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> An internal failure occurred. </p>
 */
export interface InternalFailure
  extends __ServiceException__<_InternalFailureDetails> {
  name: "InternalFailure";
}

export interface _InternalFailureDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
