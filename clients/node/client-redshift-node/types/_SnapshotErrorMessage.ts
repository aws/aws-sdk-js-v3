/**
 * <p>Describes the errors returned by a snapshot.</p>
 */
export interface _SnapshotErrorMessage {
  /**
   * <p>A unique identifier for the snapshot returning the error.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>A unique identifier for the cluster.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The failure code for the error.</p>
   */
  FailureCode?: string;

  /**
   * <p>The text message describing the error.</p>
   */
  FailureReason?: string;
}

export type _UnmarshalledSnapshotErrorMessage = _SnapshotErrorMessage;
