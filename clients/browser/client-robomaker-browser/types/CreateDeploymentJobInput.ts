import { _DeploymentConfig } from "./_DeploymentConfig";
import { _DeploymentApplicationConfig } from "./_DeploymentApplicationConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDeploymentJobInput shape
 */
export interface CreateDeploymentJobInput {
  /**
   * <p>The requested deployment configuration.</p>
   */
  deploymentConfig?: _DeploymentConfig;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet to deploy.</p>
   */
  fleet: string;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs:
    | Array<_DeploymentApplicationConfig>
    | Iterable<_DeploymentApplicationConfig>;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

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
