import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested <code>caseId</code> could not be located.</p>
 */
export interface CaseIdNotFound
  extends __ServiceException__<_CaseIdNotFoundDetails> {
  name: "CaseIdNotFound";
}

export interface _CaseIdNotFoundDetails {
  /**
   * <p>The requested <code>CaseId</code> could not be located.</p>
   */
  message?: string;
}
