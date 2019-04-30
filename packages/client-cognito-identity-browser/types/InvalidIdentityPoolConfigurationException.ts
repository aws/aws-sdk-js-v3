import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Thrown if the identity pool has no role associated for the given auth type (auth/unauth) or if the AssumeRole fails.</p>
 */
export interface InvalidIdentityPoolConfigurationException
  extends __ServiceException__<
    _InvalidIdentityPoolConfigurationExceptionDetails
  > {
  name: "InvalidIdentityPoolConfigurationException";
}

export interface _InvalidIdentityPoolConfigurationExceptionDetails {
  /**
   * <p>The message returned for an <code>InvalidIdentityPoolConfigurationException</code> </p>
   */
  message?: string;
}
