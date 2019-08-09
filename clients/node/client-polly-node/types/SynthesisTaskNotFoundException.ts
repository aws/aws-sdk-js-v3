import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Speech Synthesis task with requested Task ID cannot be found.</p>
 */
export interface SynthesisTaskNotFoundException
  extends __ServiceException__<_SynthesisTaskNotFoundExceptionDetails> {
  name: "SynthesisTaskNotFoundException";
}

export interface _SynthesisTaskNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
