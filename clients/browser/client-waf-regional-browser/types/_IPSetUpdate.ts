import {
  _IPSetDescriptor,
  _UnmarshalledIPSetDescriptor
} from "./_IPSetDescriptor";

/**
 * <p>Specifies the type of update to perform to an <a>IPSet</a> with <a>UpdateIPSet</a>.</p>
 */
export interface _IPSetUpdate {
  /**
   * <p>Specifies whether to insert or delete an IP address with <a>UpdateIPSet</a>.</p>
   */
  Action: "INSERT" | "DELETE" | string;

  /**
   * <p>The IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR notation) that web requests originate from.</p>
   */
  IPSetDescriptor: _IPSetDescriptor;
}

export interface _UnmarshalledIPSetUpdate extends _IPSetUpdate {
  /**
   * <p>The IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR notation) that web requests originate from.</p>
   */
  IPSetDescriptor: _UnmarshalledIPSetDescriptor;
}
