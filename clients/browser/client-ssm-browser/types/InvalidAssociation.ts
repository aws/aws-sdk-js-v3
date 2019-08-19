import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The association is not valid or does not exist. </p>
 */
export interface InvalidAssociation
  extends __ServiceException__<_InvalidAssociationDetails> {
  name: "InvalidAssociation";
}

export interface _InvalidAssociationDetails {
  /**
   * _String shape
   */
  Message?: string;
}
