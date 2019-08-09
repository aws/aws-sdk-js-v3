import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation can't be performed because the resource is in use.</p>
 */
export interface ResourceInUseFault
  extends __ServiceException__<_ResourceInUseFaultDetails> {
  name: "ResourceInUseFault";
}

export interface _ResourceInUseFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
