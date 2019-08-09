import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>At least one of your specified cluster subnets is in an Availability Zone that does not support Amazon EKS. The exception output specifies the supported Availability Zones for your account, from which you can choose subnets for your cluster.</p>
 */
export interface UnsupportedAvailabilityZoneException
  extends __ServiceException__<_UnsupportedAvailabilityZoneExceptionDetails> {
  name: "UnsupportedAvailabilityZoneException";
}

export interface _UnsupportedAvailabilityZoneExceptionDetails {
  /**
   * _String shape
   */
  message?: string;

  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The supported Availability Zones for your account. Choose subnets in these Availability Zones for your cluster.</p>
   */
  validZones?: Array<string>;
}
