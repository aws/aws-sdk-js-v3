import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 */
export interface HsmConfigurationNotFoundFault
  extends __ServiceException__<_HsmConfigurationNotFoundFaultDetails> {
  name: "HsmConfigurationNotFoundFault";
}

export interface _HsmConfigurationNotFoundFaultDetails {}
