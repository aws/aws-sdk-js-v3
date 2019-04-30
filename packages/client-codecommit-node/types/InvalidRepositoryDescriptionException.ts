import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified repository description is not valid.</p>
 */
export interface InvalidRepositoryDescriptionException
  extends __ServiceException__<_InvalidRepositoryDescriptionExceptionDetails> {
  name: "InvalidRepositoryDescriptionException";
}

export interface _InvalidRepositoryDescriptionExceptionDetails {}
