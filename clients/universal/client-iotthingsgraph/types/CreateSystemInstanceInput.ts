import { _Tag } from "./_Tag";
import { _DefinitionDocument } from "./_DefinitionDocument";
import { _MetricsConfiguration } from "./_MetricsConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSystemInstanceInput shape
 */
export interface CreateSystemInstanceInput {
  /**
   * <p>Metadata, consisting of key-value pairs, that can be used to categorize your system instances.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>A document that defines an entity. </p>
   */
  definition: _DefinitionDocument;

  /**
   * <p>The target type of the deployment. Valid values are <code>GREENGRASS</code> and <code>CLOUD</code>.</p>
   */
  target: "GREENGRASS" | "CLOUD" | string;

  /**
   * <p>The name of the Greengrass group where the system instance will be deployed. This value is required if the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   */
  greengrassGroupName?: string;

  /**
   * <p>The name of the Amazon Simple Storage Service bucket that will be used to store and deploy the system instance's resource file. This value is required if the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   */
  s3BucketName?: string;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   */
  metricsConfiguration?: _MetricsConfiguration;

  /**
   * <p>The ARN of the IAM role that AWS IoT Things Graph will assume when it executes the flow. This role must have read and write access to AWS Lambda and AWS IoT and any other AWS services that the flow uses when it executes. This value is required if the value of the <code>target</code> parameter is <code>CLOUD</code>.</p>
   */
  flowActionsRoleArn?: string;

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
