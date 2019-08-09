import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyDBClusterEndpointInput shape
 */
export interface ModifyDBClusterEndpointInput {
  /**
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>ANY</code>. </p>
   */
  EndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: Array<string> | Iterable<string>;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: Array<string> | Iterable<string>;

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
