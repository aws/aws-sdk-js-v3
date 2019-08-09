import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified pipeline has been deleted.</p>
 */
export interface PipelineDeletedException
  extends __ServiceException__<_PipelineDeletedExceptionDetails> {
  name: "PipelineDeletedException";
}

export interface _PipelineDeletedExceptionDetails {
  /**
   * <p>Description of the error message.</p>
   */
  message?: string;
}
