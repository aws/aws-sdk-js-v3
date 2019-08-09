import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The limit for the number of attachment sets created in a short period of time has been exceeded.</p>
 */
export interface AttachmentLimitExceeded
  extends __ServiceException__<_AttachmentLimitExceededDetails> {
  name: "AttachmentLimitExceeded";
}

export interface _AttachmentLimitExceededDetails {
  /**
   * <p>The limit for the number of attachment sets created in a short period of time has been exceeded.</p>
   */
  message?: string;
}
