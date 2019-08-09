import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Dependency encountered an error.</p>
 */
export interface DependencyException
  extends __ServiceException__<_DependencyExceptionDetails> {
  name: "DependencyException";
}

export interface _DependencyExceptionDetails {
  /**
   * _String shape
   */
  message?: string;

  /**
   * <p/>
   */
  parameterName?: string;
}
