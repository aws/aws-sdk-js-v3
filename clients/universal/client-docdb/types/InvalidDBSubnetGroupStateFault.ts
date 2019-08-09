import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB subnet group can't be deleted because it's in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault
  extends __ServiceException__<_InvalidDBSubnetGroupStateFaultDetails> {
  name: "InvalidDBSubnetGroupStateFault";
}

export interface _InvalidDBSubnetGroupStateFaultDetails {}
