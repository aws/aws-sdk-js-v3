import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified pipeline version was specified in an invalid format or cannot be found.</p>
 */
export interface PipelineVersionNotFoundException
  extends __ServiceException__<_PipelineVersionNotFoundExceptionDetails> {
  name: "PipelineVersionNotFoundException";
}

export interface _PipelineVersionNotFoundExceptionDetails {}
