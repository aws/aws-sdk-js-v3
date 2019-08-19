import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
 */
export interface AccountSetupInProgressException
  extends __ServiceException__<_AccountSetupInProgressExceptionDetails> {
  name: "AccountSetupInProgressException";
}

export interface _AccountSetupInProgressExceptionDetails {
  /**
   * _string shape
   */
  code?: string;

  /**
   * _string shape
   */
  docs?: string;

  /**
   * _string shape
   */
  message?: string;

  /**
   * _string shape
   */
  tip?: string;
}
