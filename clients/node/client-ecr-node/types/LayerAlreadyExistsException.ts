import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The image layer already exists in the associated repository.</p>
 */
export interface LayerAlreadyExistsException
  extends __ServiceException__<_LayerAlreadyExistsExceptionDetails> {
  name: "LayerAlreadyExistsException";
}

export interface _LayerAlreadyExistsExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
