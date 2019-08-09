import { _ReferenceDataSource } from "./_ReferenceDataSource";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddApplicationReferenceDataSourceInput shape
 */
export interface AddApplicationReferenceDataSourceInput {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string;

  /**
   * <p>The version of the application for which you are adding the reference data source. You can use the <a>DescribeApplication</a> operation to get the current application version. If the version specified is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. </p>
   */
  ReferenceDataSource: _ReferenceDataSource;

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
