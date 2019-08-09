import {
  _AttributeValue,
  _UnmarshalledAttributeValue
} from "./_AttributeValue";

/**
 * <p>Describes a DHCP configuration option.</p>
 */
export interface _DhcpConfiguration {
  /**
   * <p>The name of a DHCP option.</p>
   */
  Key?: string;

  /**
   * <p>One or more values for the DHCP option.</p>
   */
  Values?: Array<_AttributeValue> | Iterable<_AttributeValue>;
}

export interface _UnmarshalledDhcpConfiguration extends _DhcpConfiguration {
  /**
   * <p>One or more values for the DHCP option.</p>
   */
  Values?: Array<_UnmarshalledAttributeValue>;
}
