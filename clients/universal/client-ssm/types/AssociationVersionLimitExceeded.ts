import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have reached the maximum number versions allowed for an association. Each association has a limit of 1,000 versions. </p>
 */
export interface AssociationVersionLimitExceeded
  extends __ServiceException__<_AssociationVersionLimitExceededDetails> {
  name: "AssociationVersionLimitExceeded";
}

export interface _AssociationVersionLimitExceededDetails {
  /**
   * _String shape
   */
  Message?: string;
}
