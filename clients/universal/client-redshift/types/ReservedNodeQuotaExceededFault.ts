import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Request would exceed the user's compute node quota. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface ReservedNodeQuotaExceededFault
  extends __ServiceException__<_ReservedNodeQuotaExceededFaultDetails> {
  name: "ReservedNodeQuotaExceededFault";
}

export interface _ReservedNodeQuotaExceededFaultDetails {}
