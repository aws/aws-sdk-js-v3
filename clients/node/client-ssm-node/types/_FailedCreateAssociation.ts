import {
  _CreateAssociationBatchRequestEntry,
  _UnmarshalledCreateAssociationBatchRequestEntry
} from "./_CreateAssociationBatchRequestEntry";

/**
 * <p>Describes a failed association.</p>
 */
export interface _FailedCreateAssociation {
  /**
   * <p>The association.</p>
   */
  Entry?: _CreateAssociationBatchRequestEntry;

  /**
   * <p>A description of the failure.</p>
   */
  Message?: string;

  /**
   * <p>The source of the failure.</p>
   */
  Fault?: "Client" | "Server" | "Unknown" | string;
}

export interface _UnmarshalledFailedCreateAssociation
  extends _FailedCreateAssociation {
  /**
   * <p>The association.</p>
   */
  Entry?: _UnmarshalledCreateAssociationBatchRequestEntry;
}
