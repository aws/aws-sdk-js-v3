import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified association does not exist.</p>
 */
export interface AssociationDoesNotExist
  extends __ServiceException__<_AssociationDoesNotExistDetails> {
  name: "AssociationDoesNotExist";
}

export interface _AssociationDoesNotExistDetails {
  /**
   * _String shape
   */
  Message?: string;
}
