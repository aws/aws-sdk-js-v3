import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You must disassociate a document from all instances before you can delete it.</p>
 */
export interface AssociatedInstances
  extends __ServiceException__<_AssociatedInstancesDetails> {
  name: "AssociatedInstances";
}

export interface _AssociatedInstancesDetails {}
