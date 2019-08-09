import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified structure was specified in an invalid format.</p>
 */
export interface InvalidStructureException
  extends __ServiceException__<_InvalidStructureExceptionDetails> {
  name: "InvalidStructureException";
}

export interface _InvalidStructureExceptionDetails {}
