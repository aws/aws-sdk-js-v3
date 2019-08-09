import {
  _EC2ResourceDetails,
  _UnmarshalledEC2ResourceDetails
} from "./_EC2ResourceDetails";

/**
 * <p>Details on the resource.</p>
 */
export interface _ResourceDetails {
  /**
   * <p>Details on the Amazon EC2 resource.</p>
   */
  EC2ResourceDetails?: _EC2ResourceDetails;
}

export interface _UnmarshalledResourceDetails extends _ResourceDetails {
  /**
   * <p>Details on the Amazon EC2 resource.</p>
   */
  EC2ResourceDetails?: _UnmarshalledEC2ResourceDetails;
}
