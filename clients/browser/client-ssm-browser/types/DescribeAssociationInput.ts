import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAssociationInput shape
 */
export interface DescribeAssociationInput {
  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The association ID for which you want information.</p>
   */
  AssociationId?: string;

  /**
   * <p>Specify the association version to retrieve. To view the latest version, either specify <code>$LATEST</code> for this parameter, or omit this parameter. To view a list of all associations for an instance, use <a>ListAssociations</a>. To get a list of versions for a specific association, use <a>ListAssociationVersions</a>. </p>
   */
  AssociationVersion?: string;

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
