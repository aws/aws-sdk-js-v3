import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is deprecated.</p>
 */
export interface KmsKeyDisabledException
  extends __ServiceException__<_KmsKeyDisabledExceptionDetails> {
  name: "KmsKeyDisabledException";
}

export interface _KmsKeyDisabledExceptionDetails {}
