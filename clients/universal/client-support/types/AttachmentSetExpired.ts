import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The expiration time of the attachment set has passed. The set expires 1 hour after it is created.</p>
 */
export interface AttachmentSetExpired
  extends __ServiceException__<_AttachmentSetExpiredDetails> {
  name: "AttachmentSetExpired";
}

export interface _AttachmentSetExpiredDetails {
  /**
   * <p>The expiration time of the attachment set has passed. The set expires 1 hour after it is created.</p>
   */
  message?: string;
}
