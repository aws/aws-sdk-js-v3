import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the throughput mode or amount of provisioned throughput can't be changed because the throughput limit of 1024 MiB/s has been reached.</p>
 */
export interface ThroughputLimitExceeded
  extends __ServiceException__<_ThroughputLimitExceededDetails> {
  name: "ThroughputLimitExceeded";
}

export interface _ThroughputLimitExceededDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
