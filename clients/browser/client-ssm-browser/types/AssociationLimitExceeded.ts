import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can have at most 2,000 active associations.</p>
 */
export interface AssociationLimitExceeded
  extends __ServiceException__<_AssociationLimitExceededDetails> {
  name: "AssociationLimitExceeded";
}

export interface _AssociationLimitExceededDetails {}
