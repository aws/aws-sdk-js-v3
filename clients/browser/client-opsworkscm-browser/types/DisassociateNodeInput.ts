import { _EngineAttribute } from "./_EngineAttribute";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateNodeInput shape
 */
export interface DisassociateNodeInput {
  /**
   * <p>The name of the server from which to disassociate the node. </p>
   */
  ServerName: string;

  /**
   * <p>The name of the client node. </p>
   */
  NodeName: string;

  /**
   * <p>Engine attributes that are used for disassociating the node. No attributes are required for Puppet. </p> <p class="title"> <b>Attributes required in a DisassociateNode request for Chef</b> </p> <ul> <li> <p> <code>CHEF_ORGANIZATION</code>: The Chef organization with which the node was associated. By default only one organization named <code>default</code> can exist. </p> </li> </ul>
   */
  EngineAttributes?: Array<_EngineAttribute> | Iterable<_EngineAttribute>;

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
