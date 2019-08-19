import {
  _ServiceTypeDetail,
  _UnmarshalledServiceTypeDetail
} from "./_ServiceTypeDetail";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a service configuration for a VPC endpoint service.</p>
 */
export interface _ServiceConfiguration {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: Array<_ServiceTypeDetail> | Iterable<_ServiceTypeDetail>;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The service state.</p>
   */
  ServiceState?:
    | "Pending"
    | "Available"
    | "Deleting"
    | "Deleted"
    | "Failed"
    | string;

  /**
   * <p>In the Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether requests from other AWS accounts to create an endpoint to the service must first be accepted.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages it's VPC endpoints. Management of the service VPC endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: Array<string> | Iterable<string>;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: Array<string> | Iterable<string>;

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledServiceConfiguration
  extends _ServiceConfiguration {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: Array<_UnmarshalledServiceTypeDetail>;

  /**
   * <p>In the Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</p>
   */
  NetworkLoadBalancerArns?: Array<string>;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: Array<string>;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
