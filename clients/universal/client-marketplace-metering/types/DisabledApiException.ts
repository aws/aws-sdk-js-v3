import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The API is disabled in the Region.</p>
 */
export interface DisabledApiException
  extends __ServiceException__<_DisabledApiExceptionDetails> {
  name: "DisabledApiException";
}

export interface _DisabledApiExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
