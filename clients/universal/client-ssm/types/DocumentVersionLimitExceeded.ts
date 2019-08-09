import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The document has too many versions. Delete one or more document versions and try again.</p>
 */
export interface DocumentVersionLimitExceeded
  extends __ServiceException__<_DocumentVersionLimitExceededDetails> {
  name: "DocumentVersionLimitExceeded";
}

export interface _DocumentVersionLimitExceededDetails {
  /**
   * _String shape
   */
  Message?: string;
}
