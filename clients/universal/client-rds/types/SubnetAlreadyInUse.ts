import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse
  extends __ServiceException__<_SubnetAlreadyInUseDetails> {
  name: "SubnetAlreadyInUse";
}

export interface _SubnetAlreadyInUseDetails {}
