import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This engine is not compatible with the voice that you have designated. Choose a new voice that is compatible with the engine or change the engine and restart the operation.</p>
 */
export interface EngineNotSupportedException
  extends __ServiceException__<_EngineNotSupportedExceptionDetails> {
  name: "EngineNotSupportedException";
}

export interface _EngineNotSupportedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
