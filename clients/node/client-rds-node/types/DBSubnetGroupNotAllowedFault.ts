import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie in the same region as the source instance.</p>
 */
export interface DBSubnetGroupNotAllowedFault
  extends __ServiceException__<_DBSubnetGroupNotAllowedFaultDetails> {
  name: "DBSubnetGroupNotAllowedFault";
}

export interface _DBSubnetGroupNotAllowedFaultDetails {}
