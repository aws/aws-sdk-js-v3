import { _CanarySettings } from "./_CanarySettings";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Requests API Gateway to create a <a>Stage</a> resource.</p>
 */
export interface CreateStageInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] The name for the <a>Stage</a> resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  stageName: string;

  /**
   * <p>[Required] The identifier of the <a>Deployment</a> resource for the <a>Stage</a> resource.</p>
   */
  deploymentId: string;

  /**
   * <p>The description of the <a>Stage</a> resource.</p>
   */
  description?: string;

  /**
   * <p>Whether cache clustering is enabled for the stage.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>The stage's cache cluster size.</p>
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
   * <p>A map that defines the stage variables for the new <a>Stage</a> resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.</p>
   */
  variables?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The version of the associated API documentation.</p>
   */
  documentationVersion?: string;

  /**
   * <p>The canary deployment settings of this stage.</p>
   */
  canarySettings?: _CanarySettings;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
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
