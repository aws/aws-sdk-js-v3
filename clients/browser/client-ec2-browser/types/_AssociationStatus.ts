/**
 * <p>Describes the state of a target network association.</p>
 */
export interface _AssociationStatus {
  /**
   * <p>The state of the target network association.</p>
   */
  Code?:
    | "associating"
    | "associated"
    | "association-failed"
    | "disassociating"
    | "disassociated"
    | string;

  /**
   * <p>A message about the status of the target network association, if applicable.</p>
   */
  Message?: string;
}

export type _UnmarshalledAssociationStatus = _AssociationStatus;
