import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddPermissionInput shape
 */
export interface AddPermissionInput {
  /**
   * <p>The name of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string;

  /**
   * <p>A statement identifier that differentiates the statement from others in the same policy.</p>
   */
  StatementId: string;

  /**
   * <p>The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.</p>
   */
  Action: string;

  /**
   * <p>The AWS service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.</p>
   */
  Principal: string;

  /**
   * <p>For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p>
   */
  SourceArn?: string;

  /**
   * <p>For AWS services, the ID of the account that owns the resource. Use this instead of <code>SourceArn</code> to grant permission to resources that are owned by another account (for example, all of an account's Amazon S3 buckets). Or use it together with <code>SourceArn</code> to ensure that the resource is owned by the specified account. For example, an Amazon S3 bucket could be deleted by its owner and recreated by another account.</p>
   */
  SourceAccount?: string;

  /**
   * <p>For Alexa Smart Home functions, a token that must be supplied by the invoker.</p>
   */
  EventSourceToken?: string;

  /**
   * <p>Specify a version or alias to add permissions to a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.</p>
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
