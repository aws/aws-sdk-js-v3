import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the specified resource type is not supported by CloudTrail.</p>
 */
export interface ResourceTypeNotSupportedException
  extends __ServiceException__<_ResourceTypeNotSupportedExceptionDetails> {
  name: "ResourceTypeNotSupportedException";
}

export interface _ResourceTypeNotSupportedExceptionDetails {}
