import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLifecyclePoliciesInput shape
 */
export interface GetLifecyclePoliciesInput {
  /**
   * <p>The identifiers of the data lifecycle policies.</p>
   */
  PolicyIds?: Array<string> | Iterable<string>;

  /**
   * <p>The activation state.</p>
   */
  State?: "ENABLED" | "DISABLED" | "ERROR" | string;

  /**
   * <p>The resource type.</p>
   */
  ResourceTypes?:
    | Array<"VOLUME" | "INSTANCE" | string>
    | Iterable<"VOLUME" | "INSTANCE" | string>;

  /**
   * <p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>
   */
  TargetTags?: Array<string> | Iterable<string>;

  /**
   * <p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the AWS-added lifecycle tags.</p>
   */
  TagsToAdd?: Array<string> | Iterable<string>;

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
