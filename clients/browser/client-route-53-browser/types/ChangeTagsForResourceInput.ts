import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains information about the tags that you want to add, edit, or delete.</p>
 */
export interface ChangeTagsForResourceInput {
  /**
   * <p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>
   */
  ResourceType: "healthcheck" | "hostedzone" | string;

  /**
   * <p>The ID of the resource for which you want to add, change, or delete tags.</p>
   */
  ResourceId: string;

  /**
   * <p>A complex type that contains a list of the tags that you want to add to the specified health check or hosted zone and/or the tags that you want to edit <code>Value</code> for.</p> <p>You can add a maximum of 10 tags to a health check or a hosted zone.</p>
   */
  AddTags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>A complex type that contains a list of the tags that you want to delete from the specified health check or hosted zone. You can specify up to 10 keys.</p>
   */
  RemoveTagKeys?: Array<string> | Iterable<string>;

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
