import {
  _IamInstanceProfile,
  _UnmarshalledIamInstanceProfile
} from "./_IamInstanceProfile";
import {
  _NetworkInterface,
  _UnmarshalledNetworkInterface
} from "./_NetworkInterface";
import { _ProductCode, _UnmarshalledProductCode } from "./_ProductCode";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * _InstanceDetails shape
 */
export interface _InstanceDetails {
  /**
   * <p>The availability zone of the EC2 instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The profile information of the EC2 instance.</p>
   */
  IamInstanceProfile?: _IamInstanceProfile;

  /**
   * <p>The image description of the EC2 instance.</p>
   */
  ImageDescription?: string;

  /**
   * <p>The image ID of the EC2 instance.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The state of the EC2 instance.</p>
   */
  InstanceState?: string;

  /**
   * <p>The type of the EC2 instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The launch time of the EC2 instance.</p>
   */
  LaunchTime?: string;

  /**
   * <p>The network interface information of the EC2 instance.</p>
   */
  NetworkInterfaces?: Array<_NetworkInterface> | Iterable<_NetworkInterface>;

  /**
   * <p>The platform of the EC2 instance.</p>
   */
  Platform?: string;

  /**
   * <p>The product code of the EC2 instance.</p>
   */
  ProductCodes?: Array<_ProductCode> | Iterable<_ProductCode>;

  /**
   * <p>The tags of the EC2 instance.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledInstanceDetails extends _InstanceDetails {
  /**
   * <p>The profile information of the EC2 instance.</p>
   */
  IamInstanceProfile?: _UnmarshalledIamInstanceProfile;

  /**
   * <p>The network interface information of the EC2 instance.</p>
   */
  NetworkInterfaces?: Array<_UnmarshalledNetworkInterface>;

  /**
   * <p>The product code of the EC2 instance.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>The tags of the EC2 instance.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
