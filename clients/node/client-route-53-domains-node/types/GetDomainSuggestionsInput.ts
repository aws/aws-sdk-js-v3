import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDomainSuggestionsInput shape
 */
export interface GetDomainSuggestionsInput {
  /**
   * <p>A domain name that you want to use as the basis for a list of possible domain names. The domain name must contain a top-level domain (TLD), such as .com, that Amazon Route 53 supports. For a list of TLDs, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
   */
  DomainName: string;

  /**
   * <p>The number of suggested domain names that you want Amazon Route 53 to return.</p>
   */
  SuggestionCount: number;

  /**
   * <p>If <code>OnlyAvailable</code> is <code>true</code>, Amazon Route 53 returns only domain names that are available. If <code>OnlyAvailable</code> is <code>false</code>, Amazon Route 53 returns domain names without checking whether they're available to be registered. To determine whether the domain is available, you can call <code>checkDomainAvailability</code> for each suggestion.</p>
   */
  OnlyAvailable: boolean;

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
