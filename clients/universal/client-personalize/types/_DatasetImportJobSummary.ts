/**
 * <p>Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API.</p>
 */
export interface _DatasetImportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  datasetImportJobArn?: string;

  /**
   * <p>The name of the dataset import job.</p>
   */
  jobName?: string;

  /**
   * <p>The status of the dataset import job.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the dataset import job was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the dataset was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>If a dataset import job fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledDatasetImportJobSummary
  extends _DatasetImportJobSummary {
  /**
   * <p>The date and time (in Unix time) that the dataset import job was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the dataset was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
