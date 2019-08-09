import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 */
export interface AlreadyExistsFault
  extends __ServiceException__<_AlreadyExistsFaultDetails> {
  name: "AlreadyExistsFault";
}

export interface _AlreadyExistsFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
