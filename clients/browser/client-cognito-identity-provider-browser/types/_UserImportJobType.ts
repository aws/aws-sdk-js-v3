/**
 * <p>The user import job type.</p>
 */
export interface _UserImportJobType {
  /**
   * <p>The job name for the user import job.</p>
   */
  JobName?: string;

  /**
   * <p>The job ID for the user import job.</p>
   */
  JobId?: string;

  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The pre-signed URL to be used to upload the <code>.csv</code> file.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>The date the user import job was created.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The date when the user import job was started.</p>
   */
  StartDate?: Date | string | number;

  /**
   * <p>The date when the user import job was completed.</p>
   */
  CompletionDate?: Date | string | number;

  /**
   * <p>The status of the user import job. One of the following:</p> <ul> <li> <p> <code>Created</code> - The job was created but not started.</p> </li> <li> <p> <code>Pending</code> - A transition state. You have started the job, but it has not begun importing users yet.</p> </li> <li> <p> <code>InProgress</code> - The job has started, and users are being imported.</p> </li> <li> <p> <code>Stopping</code> - You have stopped the job, but the job has not stopped importing users yet.</p> </li> <li> <p> <code>Stopped</code> - You have stopped the job, and the job has stopped importing users.</p> </li> <li> <p> <code>Succeeded</code> - The job has completed successfully.</p> </li> <li> <p> <code>Failed</code> - The job has stopped due to an error.</p> </li> <li> <p> <code>Expired</code> - You created a job, but did not start the job within 24-48 hours. All data associated with the job was deleted, and the job cannot be started.</p> </li> </ul>
   */
  Status?:
    | "Created"
    | "Pending"
    | "InProgress"
    | "Stopping"
    | "Expired"
    | "Stopped"
    | "Failed"
    | "Succeeded"
    | string;

  /**
   * <p>The role ARN for the Amazon CloudWatch Logging role for the user import job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer Guide.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>The number of users that were successfully imported.</p>
   */
  ImportedUsers?: number;

  /**
   * <p>The number of users that were skipped.</p>
   */
  SkippedUsers?: number;

  /**
   * <p>The number of users that could not be imported.</p>
   */
  FailedUsers?: number;

  /**
   * <p>The message returned when the user import job is completed.</p>
   */
  CompletionMessage?: string;
}

export interface _UnmarshalledUserImportJobType extends _UserImportJobType {
  /**
   * <p>The date the user import job was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date when the user import job was started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date when the user import job was completed.</p>
   */
  CompletionDate?: Date;
}
