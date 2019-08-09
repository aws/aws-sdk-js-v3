import { _ServiceAccountCredentials } from "./_ServiceAccountCredentials";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDirectoryConfigInput shape
 */
export interface UpdateDirectoryConfigInput {
  /**
   * <p>The name of the Directory Config object.</p>
   */
  DirectoryName: string;

  /**
   * <p>The distinguished names of the organizational units for computer accounts.</p>
   */
  OrganizationalUnitDistinguishedNames?: Array<string> | Iterable<string>;

  /**
   * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
   */
  ServiceAccountCredentials?: _ServiceAccountCredentials;

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
