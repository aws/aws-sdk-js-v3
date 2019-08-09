/**
 * <p>Provides metadata for a dataset.</p>
 */
export interface _Dataset {
  /**
   * <p>The name of the dataset.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that you want metadata for.</p>
   */
  datasetArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>One of the following values:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul>
   */
  datasetType?: string;

  /**
   * <p>The ARN of the associated schema.</p>
   */
  schemaArn?: string;

  /**
   * <p>The status of the dataset.</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>A time stamp that shows when the dataset was updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledDataset extends _Dataset {
  /**
   * <p>The creation date and time (in Unix time) of the dataset.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A time stamp that shows when the dataset was updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
