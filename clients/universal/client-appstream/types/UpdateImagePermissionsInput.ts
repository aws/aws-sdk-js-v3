import { _ImagePermissions } from "./_ImagePermissions";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateImagePermissionsInput shape
 */
export interface UpdateImagePermissionsInput {
  /**
   * <p>The name of the private image.</p>
   */
  Name: string;

  /**
   * <p>The 12-digit identifier of the AWS account for which you want add or update image permissions.</p>
   */
  SharedAccountId: string;

  /**
   * <p>The permissions for the image.</p>
   */
  ImagePermissions: _ImagePermissions;

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
