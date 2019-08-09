import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The ARN of a resource is required, but was not found. </p>
 */
export interface ResourceArnRequiredException
  extends __ServiceException__<_ResourceArnRequiredExceptionDetails> {
  name: "ResourceArnRequiredException";
}

export interface _ResourceArnRequiredExceptionDetails {}
