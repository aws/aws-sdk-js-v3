import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
 */
export interface InvalidSystemTagUsageException
  extends __ServiceException__<_InvalidSystemTagUsageExceptionDetails> {
  name: "InvalidSystemTagUsageException";
}

export interface _InvalidSystemTagUsageExceptionDetails {}
