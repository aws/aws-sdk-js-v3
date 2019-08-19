import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 */
export interface PipelineNotFoundException
  extends __ServiceException__<_PipelineNotFoundExceptionDetails> {
  name: "PipelineNotFoundException";
}

export interface _PipelineNotFoundExceptionDetails {
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}
