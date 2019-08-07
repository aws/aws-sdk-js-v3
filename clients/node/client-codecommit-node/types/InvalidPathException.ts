import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified path is not valid.</p>
 */
export interface InvalidPathException
  extends __ServiceException__<_InvalidPathExceptionDetails> {
  name: "InvalidPathException";
}

export interface _InvalidPathExceptionDetails {}
