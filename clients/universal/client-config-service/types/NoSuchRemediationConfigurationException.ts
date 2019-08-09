import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You specified an AWS Config rule without a remediation configuration.</p>
 */
export interface NoSuchRemediationConfigurationException
  extends __ServiceException__<
    _NoSuchRemediationConfigurationExceptionDetails
  > {
  name: "NoSuchRemediationConfigurationException";
}

export interface _NoSuchRemediationConfigurationExceptionDetails {}
