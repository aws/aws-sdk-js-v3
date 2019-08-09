import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
 */
export interface InvalidElasticIpFault
  extends __ServiceException__<_InvalidElasticIpFaultDetails> {
  name: "InvalidElasticIpFault";
}

export interface _InvalidElasticIpFaultDetails {}
