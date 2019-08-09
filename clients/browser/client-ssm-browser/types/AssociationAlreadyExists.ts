import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified association already exists.</p>
 */
export interface AssociationAlreadyExists
  extends __ServiceException__<_AssociationAlreadyExistsDetails> {
  name: "AssociationAlreadyExists";
}

export interface _AssociationAlreadyExistsDetails {}
