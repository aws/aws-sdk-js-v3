import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified subnet is already in use by another cluster.</p>
 */
export interface SubnetAlreadyInUse
  extends __ServiceException__<_SubnetAlreadyInUseDetails> {
  name: "SubnetAlreadyInUse";
}

export interface _SubnetAlreadyInUseDetails {}
