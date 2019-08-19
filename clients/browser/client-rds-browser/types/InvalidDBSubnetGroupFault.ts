import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing cross-region read replica of the same source instance.</p>
 */
export interface InvalidDBSubnetGroupFault
  extends __ServiceException__<_InvalidDBSubnetGroupFaultDetails> {
  name: "InvalidDBSubnetGroupFault";
}

export interface _InvalidDBSubnetGroupFaultDetails {}
