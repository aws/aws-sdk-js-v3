import { _InstanceSpecification } from "./_InstanceSpecification";
import { _TagSpecification } from "./_TagSpecification";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSnapshotsInput shape
 */
export interface CreateSnapshotsInput {
  /**
   * <p> A description propagated to every snapshot specified by the instance.</p>
   */
  Description?: string;

  /**
   * <p>The instance to specify which volumes should be included in the snapshots.</p>
   */
  InstanceSpecification: _InstanceSpecification;

  /**
   * <p>Tags to apply to every snapshot specified by the instance.</p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

  /**
   * <p>Checks whether you have the required permissions for the action without actually making the request. Provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Copies the tags from the specified volume to corresponding snapshot.</p>
   */
  CopyTagsFromSource?: "volume" | string;

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
