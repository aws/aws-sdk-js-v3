import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFunctionCodeInput shape
 */
export interface UpdateFunctionCodeInput {
  /**
   * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string;

  /**
   * <p>The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately.</p>
   */
  Publish?: boolean;

  /**
   * <p>Set to true to validate the request parameters and access permissions without modifying the function code.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.</p>
   */
  RevisionId?: string;

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
