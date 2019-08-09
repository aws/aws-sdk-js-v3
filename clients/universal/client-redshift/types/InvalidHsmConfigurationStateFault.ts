import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified HSM configuration is not in the <code>available</code> state, or it is still in use by one or more Amazon Redshift clusters.</p>
 */
export interface InvalidHsmConfigurationStateFault
  extends __ServiceException__<_InvalidHsmConfigurationStateFaultDetails> {
  name: "InvalidHsmConfigurationStateFault";
}

export interface _InvalidHsmConfigurationStateFaultDetails {}
