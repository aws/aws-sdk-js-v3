import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
 */
export interface InvalidReplacementTypeException
  extends __ServiceException__<_InvalidReplacementTypeExceptionDetails> {
  name: "InvalidReplacementTypeException";
}

export interface _InvalidReplacementTypeExceptionDetails {}
