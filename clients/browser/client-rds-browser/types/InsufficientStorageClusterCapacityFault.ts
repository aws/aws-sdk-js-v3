import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is insufficient storage available for the current action. You might be able to resolve this error by updating your subnet group to use different Availability Zones that have more storage available.</p>
 */
export interface InsufficientStorageClusterCapacityFault
  extends __ServiceException__<
    _InsufficientStorageClusterCapacityFaultDetails
  > {
  name: "InsufficientStorageClusterCapacityFault";
}

export interface _InsufficientStorageClusterCapacityFaultDetails {}
