import { _ContactDetail } from "./_ContactDetail";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The RegisterDomain request includes the following elements.</p>
 */
export interface RegisterDomainInput {
  /**
   * <p>The domain name that you want to register.</p> <p>Constraints: The domain name can contain only the letters a through z, the numbers 0 through 9, and hyphen (-). Internationalized Domain Names are not supported.</p>
   */
  DomainName: string;

  /**
   * <p>Reserved for future use.</p>
   */
  IdnLangCode?: string;

  /**
   * <p>The number of years that you want to register the domain for. Domains are registered for a minimum of one year. The maximum period depends on the top-level domain. For the range of valid values for your domain, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains that You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Default: 1</p>
   */
  DurationInYears: number;

  /**
   * <p>Indicates whether the domain will be automatically renewed (<code>true</code>) or not (<code>false</code>). Autorenewal only takes effect after the account is charged.</p> <p>Default: <code>true</code> </p>
   */
  AutoRenew?: boolean;

  /**
   * <p>Provides detailed contact information.</p>
   */
  AdminContact: _ContactDetail;

  /**
   * <p>Provides detailed contact information.</p>
   */
  RegistrantContact: _ContactDetail;

  /**
   * <p>Provides detailed contact information.</p>
   */
  TechContact: _ContactDetail;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the admin contact.</p> <p>Default: <code>true</code> </p>
   */
  PrivacyProtectAdminContact?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the registrant contact (the domain owner).</p> <p>Default: <code>true</code> </p>
   */
  PrivacyProtectRegistrantContact?: boolean;

  /**
   * <p>Whether you want to conceal contact information from WHOIS queries. If you specify <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify <code>false</code>, WHOIS queries return the information that you entered for the technical contact.</p> <p>Default: <code>true</code> </p>
   */
  PrivacyProtectTechContact?: boolean;

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
