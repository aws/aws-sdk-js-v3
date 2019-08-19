import { _DataSource, _UnmarshalledDataSource } from "./_DataSource";

/**
 * <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
 */
export interface _DatasetImportJob {
  /**
   * <p>The name of the import job.</p>
   */
  jobName?: string;

  /**
   * <p>The ARN of the dataset import job.</p>
   */
  datasetImportJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that receives the imported data.</p>
   */
  datasetArn?: string;

  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   */
  dataSource?: _DataSource;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that has permissions to read from the Amazon S3 data source.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the dataset import job.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The creation date and time (in Unix time) of the dataset import job.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) the dataset was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>If a dataset import job fails, provides the reason why.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledDatasetImportJob extends _DatasetImportJob {
  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   */
  dataSource?: _UnmarshalledDataSource;

  /**
   * <p>The creation date and time (in Unix time) of the dataset import job.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) the dataset was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
