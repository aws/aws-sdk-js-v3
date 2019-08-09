import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartThingRegistrationTaskInput shape
 */
export interface StartThingRegistrationTaskInput {
  /**
   * <p>The provisioning template.</p>
   */
  templateBody: string;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket: string;

  /**
   * <p>The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).</p>
   */
  inputFileKey: string;

  /**
   * <p>The IAM role ARN that grants permission the input file.</p>
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
