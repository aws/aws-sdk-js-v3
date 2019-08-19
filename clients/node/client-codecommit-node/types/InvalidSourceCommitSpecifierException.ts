import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.</p>
 */
export interface InvalidSourceCommitSpecifierException
  extends __ServiceException__<_InvalidSourceCommitSpecifierExceptionDetails> {
  name: "InvalidSourceCommitSpecifierException";
}

export interface _InvalidSourceCommitSpecifierExceptionDetails {}
