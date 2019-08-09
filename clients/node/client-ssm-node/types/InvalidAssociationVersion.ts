import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The version you specified is not valid. Use ListAssociationVersions to view all versions of an association according to the association ID. Or, use the <code>$LATEST</code> parameter to view the latest version of the association.</p>
 */
export interface InvalidAssociationVersion
  extends __ServiceException__<_InvalidAssociationVersionDetails> {
  name: "InvalidAssociationVersion";
}

export interface _InvalidAssociationVersionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
