import { _DataSource } from "./_DataSource";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDatasetImportJobInput shape
 */
export interface CreateDatasetImportJobInput {
  /**
   * <p>The name for the dataset import job.</p>
   */
  jobName: string;

  /**
   * <p>The ARN of the dataset that receives the imported data.</p>
   */
  datasetArn: string;

  /**
   * <p>The Amazon S3 bucket that contains the training data to import.</p>
   */
  dataSource: _DataSource;

  /**
   * <p>The ARN of the IAM role that has permissions to read from the Amazon S3 data source.</p>
   */
  roleArn: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
