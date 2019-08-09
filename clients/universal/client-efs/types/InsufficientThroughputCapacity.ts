import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if there's not enough capacity to provision additional throughput. This value might be returned when you try to create a file system in provisioned throughput mode, when you attempt to increase the provisioned throughput of an existing file system, or when you attempt to change an existing file system from bursting to provisioned throughput mode.</p>
 */
export interface InsufficientThroughputCapacity
  extends __ServiceException__<_InsufficientThroughputCapacityDetails> {
  name: "InsufficientThroughputCapacity";
}

export interface _InsufficientThroughputCapacityDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
