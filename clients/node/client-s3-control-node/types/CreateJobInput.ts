import { _JobOperation } from "./_JobOperation";
import { _JobReport } from "./_JobReport";
import { _JobManifest } from "./_JobManifest";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateJobInput shape
 */
export interface CreateJobInput {
  /**
   * <p/>
   */
  AccountId: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 runs the job. Confirmation is only required for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Operation: _JobOperation;

  /**
   * <p>Configuration parameters for the optional job-completion report.</p>
   */
  Report: _JobReport;

  /**
   * <p>An idempotency token to ensure that you don't accidentally submit the same request twice. You can use any string up to the maximum length.</p>
   */
  ClientRequestToken: string;

  /**
   * <p>Configuration parameters for the manifest.</p>
   */
  Manifest: _JobManifest;

  /**
   * <p>A description for this job. You can use any string within the permitted length. Descriptions don't need to be unique and can be used for multiple jobs.</p>
   */
  Description?: string;

  /**
   * <p>The numerical priority for this job. Higher numbers indicate higher priority.</p>
   */
  Priority: number;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) Role that batch operations will use to execute this job's operation on each object in the manifest.</p>
   */
  RoleArn: string;

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
