import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceInput shape
 */
export interface ListTagsForResourceInput {
  /**
   * <p>Returns a list of tags for a specific resource type.</p>
   */
  ResourceType:
    | "Document"
    | "ManagedInstance"
    | "MaintenanceWindow"
    | "Parameter"
    | "PatchBaseline"
    | "OpsItem"
    | string;

  /**
   * <p>The resource ID for which you want to see a list of tags.</p>
   */
  ResourceId: string;

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
