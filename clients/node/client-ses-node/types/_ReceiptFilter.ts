import {
  _ReceiptIpFilter,
  _UnmarshalledReceiptIpFilter
} from "./_ReceiptIpFilter";

/**
 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _ReceiptFilter {
  /**
   * <p>The name of the IP address filter. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>
   */
  Name: string;

  /**
   * <p>A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.</p>
   */
  IpFilter: _ReceiptIpFilter;
}

export interface _UnmarshalledReceiptFilter extends _ReceiptFilter {
  /**
   * <p>A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.</p>
   */
  IpFilter: _UnmarshalledReceiptIpFilter;
}
