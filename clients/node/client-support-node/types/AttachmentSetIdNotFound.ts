import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An attachment set with the specified ID could not be found.</p>
 */
export interface AttachmentSetIdNotFound
  extends __ServiceException__<_AttachmentSetIdNotFoundDetails> {
  name: "AttachmentSetIdNotFound";
}

export interface _AttachmentSetIdNotFoundDetails {
  /**
   * <p>An attachment set with the specified ID could not be found.</p>
   */
  message?: string;
}
