import { _DnsProperties, _UnmarshalledDnsProperties } from "./_DnsProperties";
import {
  _HttpProperties,
  _UnmarshalledHttpProperties
} from "./_HttpProperties";

/**
 * <p>A complex type that contains information that is specific to the namespace type.</p>
 */
export interface _NamespaceProperties {
  /**
   * <p>A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.</p>
   */
  DnsProperties?: _DnsProperties;

  /**
   * <p>A complex type that contains the name of an HTTP namespace.</p>
   */
  HttpProperties?: _HttpProperties;
}

export interface _UnmarshalledNamespaceProperties extends _NamespaceProperties {
  /**
   * <p>A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.</p>
   */
  DnsProperties?: _UnmarshalledDnsProperties;

  /**
   * <p>A complex type that contains the name of an HTTP namespace.</p>
   */
  HttpProperties?: _UnmarshalledHttpProperties;
}
