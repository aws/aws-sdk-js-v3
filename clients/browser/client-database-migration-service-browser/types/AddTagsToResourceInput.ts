import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Associates a set of tags with an AWS DMS resource.</p>
 */
export interface AddTagsToResourceInput {
  /**
   * <p>Identifies the AWS DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN).</p> <p>For AWS DMS, you can tag a replication instance, an endpoint, or a replication task.</p>
   */
  ResourceArn: string;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   */
  Tags: Array<_Tag> | Iterable<_Tag>;

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
