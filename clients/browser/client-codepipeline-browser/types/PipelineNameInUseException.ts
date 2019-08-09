import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified pipeline name is already in use.</p>
 */
export interface PipelineNameInUseException
  extends __ServiceException__<_PipelineNameInUseExceptionDetails> {
  name: "PipelineNameInUseException";
}

export interface _PipelineNameInUseExceptionDetails {}
