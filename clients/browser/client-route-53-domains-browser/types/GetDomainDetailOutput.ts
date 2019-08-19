import { _UnmarshalledNameserver } from "./_Nameserver";
import { _UnmarshalledContactDetail } from "./_ContactDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The GetDomainDetail response includes the following elements.</p>
 */
export interface GetDomainDetailOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of a domain.</p>
   */
  DomainName: string;

  /**
   * <p>The name of the domain.</p>
   */
  Nameservers: Array<_UnmarshalledNameserver>;

  /**
   * <p>Specifies whether the domain registration is set to renew automatically.</p>
   */
  AutoRenew?: boolean;

  /**
   * <p>Provides details about the domain administrative contact.</p>
   */
  AdminContact: _UnmarshalledContactDetail;

  /**
   * <p>Provides details about the domain registrant.</p>
   */
  RegistrantContact: _UnmarshalledContactDetail;

  /**
   * <p>Provides details about the domain technical contact.</p>
   */
  TechContact: _UnmarshalledContactDetail;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the information that you entered for the admin contact.</p>
   */
  AdminPrivacy?: boolean;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the information that you entered for the registrant contact (domain owner).</p>
   */
  RegistrantPrivacy?: boolean;

  /**
   * <p>Specifies whether contact information is concealed from WHOIS queries. If the value is <code>true</code>, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is <code>false</code>, WHOIS queries return the information that you entered for the technical contact.</p>
   */
  TechPrivacy?: boolean;

  /**
   * <p>Name of the registrar of the domain as identified in the registry. Domains with a .com, .net, or .org TLD are registered by Amazon Registrar. All other domains are registered by our registrar associate, Gandi. The value for domains that are registered by Gandi is <code>"GANDI SAS"</code>. </p>
   */
  RegistrarName?: string;

  /**
   * <p>The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.</p>
   */
  WhoIsServer?: string;

  /**
   * <p>Web address of the registrar.</p>
   */
  RegistrarUrl?: string;

  /**
   * <p>Email address to contact to report incorrect contact information for a domain, to report that the domain is being used to send spam, to report that someone is cybersquatting on a domain name, or report some other type of abuse.</p>
   */
  AbuseContactEmail?: string;

  /**
   * <p>Phone number for reporting abuse.</p>
   */
  AbuseContactPhone?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  RegistryDomainId?: string;

  /**
   * <p>The date when the domain was created as found in the response to a WHOIS query. The date and time is in Coordinated Universal time (UTC).</p>
   */
  CreationDate?: Date;

  /**
   * <p>The last updated date of the domain as found in the response to a WHOIS query. The date and time is in Coordinated Universal time (UTC).</p>
   */
  UpdatedDate?: Date;

  /**
   * <p>The date when the registration for the domain is set to expire. The date and time is in Coordinated Universal time (UTC).</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>Reseller of the domain. Domains registered or transferred using Amazon Route 53 domains will have <code>"Amazon"</code> as the reseller. </p>
   */
  Reseller?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  DnsSec?: string;

  /**
   * <p>An array of domain name status codes, also known as Extensible Provisioning Protocol (EPP) status codes.</p> <p>ICANN, the organization that maintains a central database of domain names, has developed a set of domain name status codes that tell you the status of a variety of operations on a domain name, for example, registering a domain name, transferring a domain name to another registrar, renewing the registration for a domain name, and so on. All registrars use this same set of status codes.</p> <p>For a current list of domain name status codes and an explanation of what each code means, go to the <a href="https://www.icann.org/">ICANN website</a> and search for <code>epp status codes</code>. (Search on the ICANN website; web searches sometimes return an old version of the document.)</p>
   */
  StatusList?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
