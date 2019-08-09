/**
 * <p> The task assessment report in JSON format. </p>
 */
export interface _ReplicationTaskAssessmentResult {
  /**
   * <p> The replication task identifier of the task on which the task assessment was run. </p>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The date the task assessment was completed. </p>
   */
  ReplicationTaskLastAssessmentDate?: Date | string | number;

  /**
   * <p> The status of the task assessment. </p>
   */
  AssessmentStatus?: string;

  /**
   * <p> The file containing the results of the task assessment. </p>
   */
  AssessmentResultsFile?: string;

  /**
   * <p> The task assessment results in JSON format. </p>
   */
  AssessmentResults?: string;

  /**
   * <p> The URL of the S3 object containing the task assessment results. </p>
   */
  S3ObjectUrl?: string;
}

export interface _UnmarshalledReplicationTaskAssessmentResult
  extends _ReplicationTaskAssessmentResult {
  /**
   * <p>The date the task assessment was completed. </p>
   */
  ReplicationTaskLastAssessmentDate?: Date;
}
