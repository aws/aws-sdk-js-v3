import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested subnet group name does not refer to an existing subnet group.</p>
 */
export interface SubnetGroupNotFoundFault
  extends __ServiceException__<_SubnetGroupNotFoundFaultDetails> {
  name: "SubnetGroupNotFoundFault";
}

export interface _SubnetGroupNotFoundFaultDetails {}
