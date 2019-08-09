import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The top-level domain does not support this operation.</p>
 */
export interface TLDRulesViolation
  extends __ServiceException__<_TLDRulesViolationDetails> {
  name: "TLDRulesViolation";
}

export interface _TLDRulesViolationDetails {
  /**
   * <p>The top-level domain does not support this operation.</p>
   */
  message?: string;
}
