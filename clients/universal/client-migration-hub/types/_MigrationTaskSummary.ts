/**
 * <p>MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.</p>
 */
export interface _MigrationTaskSummary {
  /**
   * <p>An AWS resource used for access control. It should uniquely identify the migration tool as it is used for all updates made by the tool.</p>
   */
  ProgressUpdateStream?: string;

  /**
   * <p>Unique identifier that references the migration task.</p>
   */
  MigrationTaskName?: string;

  /**
   * <p>Status of the task.</p>
   */
  Status?: "NOT_STARTED" | "IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p/>
   */
  ProgressPercent?: number;

  /**
   * <p>Detail information of what is being done within the overall status state.</p>
   */
  StatusDetail?: string;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date | string | number;
}

export interface _UnmarshalledMigrationTaskSummary
  extends _MigrationTaskSummary {
  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date;
}
