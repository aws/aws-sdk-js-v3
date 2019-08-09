import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because no source files or file content have been specified for the commit.</p>
 */
export interface SourceFileOrContentRequiredException
  extends __ServiceException__<_SourceFileOrContentRequiredExceptionDetails> {
  name: "SourceFileOrContentRequiredException";
}

export interface _SourceFileOrContentRequiredExceptionDetails {}
