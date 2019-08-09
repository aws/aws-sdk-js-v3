import {
  _SupportedOperation,
  _UnmarshalledSupportedOperation
} from "./_SupportedOperation";

/**
 * <p>A maintenance track that you can switch the current track to.</p>
 */
export interface _UpdateTarget {
  /**
   * <p>The name of the new maintenance track.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>The cluster version for the new maintenance track.</p>
   */
  DatabaseVersion?: string;

  /**
   * <p>A list of operations supported by the maintenance track.</p>
   */
  SupportedOperations?:
    | Array<_SupportedOperation>
    | Iterable<_SupportedOperation>;
}

export interface _UnmarshalledUpdateTarget extends _UpdateTarget {
  /**
   * <p>A list of operations supported by the maintenance track.</p>
   */
  SupportedOperations?: Array<_UnmarshalledSupportedOperation>;
}
