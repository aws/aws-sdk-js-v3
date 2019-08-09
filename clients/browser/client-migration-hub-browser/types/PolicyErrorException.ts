import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception raised when there are problems accessing ADS (Application Discovery Service); most likely due to a misconfigured policy or the <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
 */
export interface PolicyErrorException
  extends __ServiceException__<_PolicyErrorExceptionDetails> {
  name: "PolicyErrorException";
}

export interface _PolicyErrorExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
