import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request again.</p>
 */
export interface CopyToRegionDisabledFault
  extends __ServiceException__<_CopyToRegionDisabledFaultDetails> {
  name: "CopyToRegionDisabledFault";
}

export interface _CopyToRegionDisabledFaultDetails {}
