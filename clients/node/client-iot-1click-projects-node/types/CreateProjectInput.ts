import { _PlacementTemplate } from "./_PlacementTemplate";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProjectInput shape
 */
export interface CreateProjectInput {
  /**
   * <p>The name of the project to create.</p>
   */
  projectName: string;

  /**
   * <p>An optional description for the project.</p>
   */
  description?: string;

  /**
   * <p>The schema defining the placement to be created. A placement template defines placement default attributes and device templates. You cannot add or remove device templates after the project has been created. However, you can update <code>callbackOverrides</code> for the device templates using the <code>UpdateProject</code> API.</p>
   */
  placementTemplate?: _PlacementTemplate;

  /**
   * <p>Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.</p>
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
