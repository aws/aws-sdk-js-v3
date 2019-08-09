import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 */
export interface UnsupportedTLD
  extends __ServiceException__<_UnsupportedTLDDetails> {
  name: "UnsupportedTLD";
}

export interface _UnsupportedTLDDetails {
  /**
   * <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
   */
  message?: string;
}
