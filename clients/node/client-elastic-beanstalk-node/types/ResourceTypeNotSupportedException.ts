import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.</p>
 */
export interface ResourceTypeNotSupportedException
  extends __ServiceException__<_ResourceTypeNotSupportedExceptionDetails> {
  name: "ResourceTypeNotSupportedException";
}

export interface _ResourceTypeNotSupportedExceptionDetails {}
