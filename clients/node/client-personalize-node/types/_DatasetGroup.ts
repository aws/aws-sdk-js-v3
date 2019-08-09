/**
 * <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an AWS Key Management Service (KMS) key to encrypt the datasets in the group.</p>
 */
export interface _DatasetGroup {
  /**
   * <p>The name of the dataset group.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The current status of the dataset group.</p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The ARN of the IAM role that has permissions to create the dataset group.</p>
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the datasets.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset group.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The last update date and time (in Unix time) of the dataset group.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>If creating a dataset group fails, provides the reason why.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledDatasetGroup extends _DatasetGroup {
  /**
   * <p>The creation date and time (in Unix time) of the dataset group.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The last update date and time (in Unix time) of the dataset group.</p>
   */
  lastUpdatedDateTime?: Date;
}
