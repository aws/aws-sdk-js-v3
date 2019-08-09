/**
 * <p>Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API.</p>
 */
export interface _DatasetGroupSummary {
  /**
   * <p>The name of the dataset group.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  datasetGroupArn?: string;

  /**
   * <p>The status of the dataset group.</p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the dataset group was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the dataset group was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>If creating a dataset group fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledDatasetGroupSummary extends _DatasetGroupSummary {
  /**
   * <p>The date and time (in Unix time) that the dataset group was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the dataset group was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
