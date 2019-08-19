import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested subnet is being used by another subnet group.</p>
 */
export interface SubnetInUse extends __ServiceException__<_SubnetInUseDetails> {
  name: "SubnetInUse";
}

export interface _SubnetInUseDetails {}
