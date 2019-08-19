import { _DeploymentCommand } from "./_DeploymentCommand";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDeploymentInput shape
 */
export interface CreateDeploymentInput {
  /**
   * <p>The stack ID.</p>
   */
  StackId: string;

  /**
   * <p>The app ID. This parameter is required for app deployments, but not for other deployment commands.</p>
   */
  AppId?: string;

  /**
   * <p>The instance IDs for the deployment targets.</p>
   */
  InstanceIds?: Array<string> | Iterable<string>;

  /**
   * <p>The layer IDs for the deployment targets.</p>
   */
  LayerIds?: Array<string> | Iterable<string>;

  /**
   * <p>A <code>DeploymentCommand</code> object that specifies the deployment command and any associated arguments.</p>
   */
  Command: _DeploymentCommand;

  /**
   * <p>A user-defined comment.</p>
   */
  Comment?: string;

  /**
   * <p>A string that contains user-defined, custom JSON. You can use this parameter to override some corresponding default stack configuration JSON values. The string should be in the following format:</p> <p> <code>"{\"key1\": \"value1\", \"key2\": \"value2\",...}"</code> </p> <p>For more information about custom JSON, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-json.html">Use Custom JSON to Modify the Stack Configuration Attributes</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-json-override.html">Overriding Attributes With Custom JSON</a>.</p>
   */
  CustomJson?: string;

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
