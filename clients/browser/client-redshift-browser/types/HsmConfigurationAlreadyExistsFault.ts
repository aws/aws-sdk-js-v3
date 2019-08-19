import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is already an existing Amazon Redshift HSM configuration with the specified identifier.</p>
 */
export interface HsmConfigurationAlreadyExistsFault
  extends __ServiceException__<_HsmConfigurationAlreadyExistsFaultDetails> {
  name: "HsmConfigurationAlreadyExistsFault";
}

export interface _HsmConfigurationAlreadyExistsFaultDetails {}
