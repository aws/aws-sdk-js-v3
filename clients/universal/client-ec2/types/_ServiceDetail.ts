import {
  _ServiceTypeDetail,
  _UnmarshalledServiceTypeDetail
} from "./_ServiceTypeDetail";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a VPC endpoint service.</p>
 */
export interface _ServiceDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  ServiceName?: string;

  /**
   * <p>The ID of the endpoint service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The type of service.</p>
   */
  ServiceType?: Array<_ServiceTypeDetail> | Iterable<_ServiceTypeDetail>;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The AWS account ID of the service owner.</p>
   */
  Owner?: string;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: Array<string> | Iterable<string>;

  /**
   * <p>The private DNS name for the service.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>Indicates whether the service supports endpoint policies.</p>
   */
  VpcEndpointPolicySupported?: boolean;

  /**
   * <p>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>Indicates whether the service manages it's VPC endpoints. Management of the service VPC endpoints using the VPC endpoint API is restricted.</p>
   */
  ManagesVpcEndpoints?: boolean;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledServiceDetail extends _ServiceDetail {
  /**
   * <p>The type of service.</p>
   */
  ServiceType?: Array<_UnmarshalledServiceTypeDetail>;

  /**
   * <p>The Availability Zones in which the service is available.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The DNS names for the service.</p>
   */
  BaseEndpointDnsNames?: Array<string>;

  /**
   * <p>Any tags assigned to the service.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
