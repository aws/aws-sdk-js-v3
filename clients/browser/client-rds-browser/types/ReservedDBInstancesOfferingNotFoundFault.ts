import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Specified offering does not exist.</p>
 */
export interface ReservedDBInstancesOfferingNotFoundFault
  extends __ServiceException__<
    _ReservedDBInstancesOfferingNotFoundFaultDetails
  > {
  name: "ReservedDBInstancesOfferingNotFoundFault";
}

export interface _ReservedDBInstancesOfferingNotFoundFaultDetails {}
