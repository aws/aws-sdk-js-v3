import { _AwsJobExecutionsRolloutConfig } from "./_AwsJobExecutionsRolloutConfig";
import { _OTAUpdateFile } from "./_OTAUpdateFile";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateOTAUpdateInput shape
 */
export interface CreateOTAUpdateInput {
  /**
   * <p>The ID of the OTA update to be created.</p>
   */
  otaUpdateId: string;

  /**
   * <p>The description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The targeted devices to receive OTA updates.</p>
   */
  targets: Array<string> | Iterable<string>;

  /**
   * <p>Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT.</p>
   */
  targetSelection?: "CONTINUOUS" | "SNAPSHOT" | string;

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: _AwsJobExecutionsRolloutConfig;

  /**
   * <p>The files to be streamed by the OTA update.</p>
   */
  files: Array<_OTAUpdateFile> | Iterable<_OTAUpdateFile>;

  /**
   * <p>The IAM role that allows access to the AWS IoT Jobs service.</p>
   */
  roleArn: string;

  /**
   * <p>A list of additional OTA update parameters which are name-value pairs.</p>
   */
  additionalParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Metadata which can be used to manage updates.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
