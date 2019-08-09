import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
 */
export interface InvalidReplacementContentException
  extends __ServiceException__<_InvalidReplacementContentExceptionDetails> {
  name: "InvalidReplacementContentException";
}

export interface _InvalidReplacementContentExceptionDetails {}
