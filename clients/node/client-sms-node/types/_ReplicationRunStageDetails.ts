/**
 * <p>Details of the current stage of a replication run.</p>
 */
export interface _ReplicationRunStageDetails {
  /**
   * <p>String describing the current stage of a replication run.</p>
   */
  stage?: string;

  /**
   * <p>String describing the progress of the current stage of a replication run.</p>
   */
  stageProgress?: string;
}

export type _UnmarshalledReplicationRunStageDetails = _ReplicationRunStageDetails;
