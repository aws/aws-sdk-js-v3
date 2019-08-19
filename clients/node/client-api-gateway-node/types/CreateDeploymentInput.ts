import { _DeploymentCanarySettings } from "./_DeploymentCanarySettings";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Requests API Gateway to create a <a>Deployment</a> resource.</p>
 */
export interface CreateDeploymentInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>The name of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>
   */
  stageName?: string;

  /**
   * <p>The description of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.</p>
   */
  stageDescription?: string;

  /**
   * <p>The description for the <a>Deployment</a> resource to create.</p>
   */
  description?: string;

  /**
   * <p>Enables a cache cluster for the <a>Stage</a> resource specified in the input.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>Specifies the cache cluster size for the <a>Stage</a> resource specified in the input, if a cache cluster is enabled.</p>
   */
  cacheClusterSize?:
    | "0.5"
    | "1.6"
    | "6.1"
    | "13.5"
    | "28.4"
    | "58.2"
    | "118"
    | "237"
    | string;

  /**
   * <p>A map that defines the stage variables for the <a>Stage</a> resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.</p>
   */
  variables?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The input configuration for the canary deployment when the deployment is a canary release deployment. </p>
   */
  canarySettings?: _DeploymentCanarySettings;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

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
