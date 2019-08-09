import {
  _AwsCloudMapServiceDiscovery,
  _UnmarshalledAwsCloudMapServiceDiscovery
} from "./_AwsCloudMapServiceDiscovery";
import {
  _DnsServiceDiscovery,
  _UnmarshalledDnsServiceDiscovery
} from "./_DnsServiceDiscovery";

/**
 * <p>An object representing the service discovery information for a virtual node.</p>
 */
export interface _ServiceDiscovery {
  /**
   * <p>Specifies any AWS Cloud Map information for the virtual node.</p>
   */
  awsCloudMap?: _AwsCloudMapServiceDiscovery;

  /**
   * <p>Specifies the DNS information for the virtual node.</p>
   */
  dns?: _DnsServiceDiscovery;
}

export interface _UnmarshalledServiceDiscovery extends _ServiceDiscovery {
  /**
   * <p>Specifies any AWS Cloud Map information for the virtual node.</p>
   */
  awsCloudMap?: _UnmarshalledAwsCloudMapServiceDiscovery;

  /**
   * <p>Specifies the DNS information for the virtual node.</p>
   */
  dns?: _UnmarshalledDnsServiceDiscovery;
}
