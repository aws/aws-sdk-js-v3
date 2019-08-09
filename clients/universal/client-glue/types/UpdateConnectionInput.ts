import { _ConnectionInput } from "./_ConnectionInput";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateConnectionInput shape
 */
export interface UpdateConnectionInput {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection definition to update.</p>
   */
  Name: string;

  /**
   * <p>A <code>ConnectionInput</code> object that redefines the connection in question.</p>
   */
  ConnectionInput: _ConnectionInput;

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
