import { _EngineAttribute } from "./_EngineAttribute";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateNodeInput shape
 */
export interface AssociateNodeInput {
  /**
   * <p>The name of the server with which to associate the node. </p>
   */
  ServerName: string;

  /**
   * <p>The name of the node. </p>
   */
  NodeName: string;

  /**
   * <p>Engine attributes used for associating the node. </p> <p class="title"> <b>Attributes accepted in a AssociateNode request for Chef</b> </p> <ul> <li> <p> <code>CHEF_ORGANIZATION</code>: The Chef organization with which the node is associated. By default only one organization named <code>default</code> can exist. </p> </li> <li> <p> <code>CHEF_NODE_PUBLIC_KEY</code>: A PEM-formatted public key. This key is required for the <code>chef-client</code> agent to access the Chef API. </p> </li> </ul> <p class="title"> <b>Attributes accepted in a AssociateNode request for Puppet</b> </p> <ul> <li> <p> <code>PUPPET_NODE_CSR</code>: A PEM-formatted certificate-signing request (CSR) that is created by the node. </p> </li> </ul>
   */
  EngineAttributes: Array<_EngineAttribute> | Iterable<_EngineAttribute>;

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
