/**
 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _ReceiptIpFilter {
  /**
   * <p>Indicates whether to block or allow incoming mail from the specified IP addresses.</p>
   */
  Policy: "Block" | "Allow" | string;

  /**
   * <p>A single IP address or a range of IP addresses that you want to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation. An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see <a href="https://tools.ietf.org/html/rfc2317">RFC 2317</a>.</p>
   */
  Cidr: string;
}

export type _UnmarshalledReceiptIpFilter = _ReceiptIpFilter;
