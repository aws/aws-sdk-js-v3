import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified AWS resource cannot be created, because an AWS resource with the same settings already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {}
