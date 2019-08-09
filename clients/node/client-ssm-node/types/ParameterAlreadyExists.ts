import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameter already exists. You can't create duplicate parameters.</p>
 */
export interface ParameterAlreadyExists
  extends __ServiceException__<_ParameterAlreadyExistsDetails> {
  name: "ParameterAlreadyExists";
}

export interface _ParameterAlreadyExistsDetails {
  /**
   * _String shape
   */
  message?: string;
}
