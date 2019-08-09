import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified stage declaration was specified in an invalid format.</p>
 */
export interface InvalidStageDeclarationException
  extends __ServiceException__<_InvalidStageDeclarationExceptionDetails> {
  name: "InvalidStageDeclarationException";
}

export interface _InvalidStageDeclarationExceptionDetails {}
