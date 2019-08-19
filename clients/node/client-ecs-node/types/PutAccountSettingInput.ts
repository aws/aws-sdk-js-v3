import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAccountSettingInput shape
 */
export interface PutAccountSettingInput {
  /**
   * <p>The Amazon ECS resource name for which to modify the account setting. If <code>serviceLongArnFormat</code> is specified, the ARN for your Amazon ECS services is affected. If <code>taskLongArnFormat</code> is specified, the ARN and resource ID for your Amazon ECS tasks is affected. If <code>containerInstanceLongArnFormat</code> is specified, the ARN and resource ID for your Amazon ECS container instances is affected. If <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for your Amazon ECS container instances is affected. If <code>containerInsights</code> is specified, the default setting for CloudWatch Container Insights for your clusters is affected.</p>
   */
  name:
    | "serviceLongArnFormat"
    | "taskLongArnFormat"
    | "containerInstanceLongArnFormat"
    | "awsvpcTrunking"
    | "containerInsights"
    | string;

  /**
   * <p>The account setting value for the specified principal ARN. Accepted values are <code>enabled</code> and <code>disabled</code>.</p>
   */
  value: string;

  /**
   * <p>The ARN of the principal, which can be an IAM user, IAM role, or the root user. If you specify the root user, it modifies the account setting for all IAM users, IAM roles, and the root user of the account unless an IAM user or role explicitly overrides these settings. If this field is omitted, the setting is changed only for the authenticated user.</p>
   */
  principalArn?: string;

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
