import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified execution ID does not exist. Verify the ID number and try again.</p>
 */
export interface AssociationExecutionDoesNotExist
  extends __ServiceException__<_AssociationExecutionDoesNotExistDetails> {
  name: "AssociationExecutionDoesNotExist";
}

export interface _AssociationExecutionDoesNotExistDetails {
  /**
   * _String shape
   */
  Message?: string;
}
