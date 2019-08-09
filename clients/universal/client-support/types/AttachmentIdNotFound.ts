import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An attachment with the specified ID could not be found.</p>
 */
export interface AttachmentIdNotFound
  extends __ServiceException__<_AttachmentIdNotFoundDetails> {
  name: "AttachmentIdNotFound";
}

export interface _AttachmentIdNotFoundDetails {
  /**
   * <p>An attachment with the specified ID could not be found.</p>
   */
  message?: string;
}
