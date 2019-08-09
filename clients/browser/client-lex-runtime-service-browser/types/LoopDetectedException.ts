import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is not used.</p>
 */
export interface LoopDetectedException
  extends __ServiceException__<_LoopDetectedExceptionDetails> {
  name: "LoopDetectedException";
}

export interface _LoopDetectedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
