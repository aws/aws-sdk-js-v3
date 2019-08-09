import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified action declaration was specified in an invalid format.</p>
 */
export interface InvalidActionDeclarationException
  extends __ServiceException__<_InvalidActionDeclarationExceptionDetails> {
  name: "InvalidActionDeclarationException";
}

export interface _InvalidActionDeclarationExceptionDetails {}
