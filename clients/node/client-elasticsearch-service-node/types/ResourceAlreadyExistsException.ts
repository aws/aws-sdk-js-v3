import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {}
