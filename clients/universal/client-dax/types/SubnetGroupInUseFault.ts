import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified subnet group is currently in use.</p>
 */
export interface SubnetGroupInUseFault
  extends __ServiceException__<_SubnetGroupInUseFaultDetails> {
  name: "SubnetGroupInUseFault";
}

export interface _SubnetGroupInUseFaultDetails {}
