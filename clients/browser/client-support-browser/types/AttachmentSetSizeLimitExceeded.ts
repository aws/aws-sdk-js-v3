import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A limit for the size of an attachment set has been exceeded. The limits are 3 attachments and 5 MB per attachment.</p>
 */
export interface AttachmentSetSizeLimitExceeded
  extends __ServiceException__<_AttachmentSetSizeLimitExceededDetails> {
  name: "AttachmentSetSizeLimitExceeded";
}

export interface _AttachmentSetSizeLimitExceededDetails {
  /**
   * <p>A limit for the size of an attachment set has been exceeded. The limits are 3 attachments and 5 MB per attachment.</p>
   */
  message?: string;
}
