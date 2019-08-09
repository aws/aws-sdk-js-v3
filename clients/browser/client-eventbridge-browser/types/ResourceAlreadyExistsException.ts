import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource that you're trying to create already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {}
