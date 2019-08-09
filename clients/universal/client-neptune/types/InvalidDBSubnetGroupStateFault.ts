import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB subnet group cannot be deleted because it is in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault
  extends __ServiceException__<_InvalidDBSubnetGroupStateFaultDetails> {
  name: "InvalidDBSubnetGroupStateFault";
}

export interface _InvalidDBSubnetGroupStateFaultDetails {}
