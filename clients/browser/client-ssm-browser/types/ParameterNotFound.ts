import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameter could not be found. Verify the name and try again.</p>
 */
export interface ParameterNotFound
  extends __ServiceException__<_ParameterNotFoundDetails> {
  name: "ParameterNotFound";
}

export interface _ParameterNotFoundDetails {
  /**
   * _String shape
   */
  message?: string;
}
