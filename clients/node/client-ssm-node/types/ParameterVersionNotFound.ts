import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified parameter version was not found. Verify the parameter name and version, and try again.</p>
 */
export interface ParameterVersionNotFound
  extends __ServiceException__<_ParameterVersionNotFoundDetails> {
  name: "ParameterVersionNotFound";
}

export interface _ParameterVersionNotFoundDetails {
  /**
   * _String shape
   */
  message?: string;
}
