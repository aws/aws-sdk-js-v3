import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Updates a conditional forwarder.</p>
 */
export interface UpdateConditionalForwarderInput {
  /**
   * <p>The directory ID of the AWS directory for which to update the conditional forwarder.</p>
   */
  DirectoryId: string;

  /**
   * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.</p>
   */
  RemoteDomainName: string;

  /**
   * <p>The updated IP addresses of the remote DNS server associated with the conditional forwarder.</p>
   */
  DnsIpAddrs: Array<string> | Iterable<string>;

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
