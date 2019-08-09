import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 */
export interface ProvisionedIopsNotAvailableInAZFault
  extends __ServiceException__<_ProvisionedIopsNotAvailableInAZFaultDetails> {
  name: "ProvisionedIopsNotAvailableInAZFault";
}

export interface _ProvisionedIopsNotAvailableInAZFaultDetails {}
