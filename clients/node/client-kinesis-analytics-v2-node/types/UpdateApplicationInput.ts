import { _ApplicationConfigurationUpdate } from "./_ApplicationConfigurationUpdate";
import { _RunConfigurationUpdate } from "./_RunConfigurationUpdate";
import { _CloudWatchLoggingOptionUpdate } from "./_CloudWatchLoggingOptionUpdate";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApplicationInput shape
 */
export interface UpdateApplicationInput {
  /**
   * <p>The name of the application to update.</p>
   */
  ApplicationName: string;

  /**
   * <p>The current application version ID. You can retrieve the application version ID using <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number;

  /**
   * <p>Describes application configuration updates.</p>
   */
  ApplicationConfigurationUpdate?: _ApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the service execution role.</p>
   */
  ServiceExecutionRoleUpdate?: string;

  /**
   * <p>Describes updates to the application's starting parameters.</p>
   */
  RunConfigurationUpdate?: _RunConfigurationUpdate;

  /**
   * <p>Describes application Amazon CloudWatch logging option updates. You can only update existing CloudWatch logging options with this action. To add a new CloudWatch logging option, use <a>AddApplicationCloudWatchLoggingOption</a>.</p>
   */
  CloudWatchLoggingOptionUpdates?:
    | Array<_CloudWatchLoggingOptionUpdate>
    | Iterable<_CloudWatchLoggingOptionUpdate>;

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
