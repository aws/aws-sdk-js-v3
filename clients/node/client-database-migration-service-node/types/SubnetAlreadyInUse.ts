import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified subnet is already in use.</p>
 */
export interface SubnetAlreadyInUse
  extends __ServiceException__<_SubnetAlreadyInUseDetails> {
  name: "SubnetAlreadyInUse";
}

export interface _SubnetAlreadyInUseDetails {
  /**
   * <p/>
   */
  message?: string;
}
