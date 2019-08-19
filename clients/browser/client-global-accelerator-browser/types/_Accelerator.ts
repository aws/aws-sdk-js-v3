import { _IpSet, _UnmarshalledIpSet } from "./_IpSet";

/**
 * <p>An accelerator is a complex type that includes one or more listeners that process inbound connections and then direct traffic to one or more endpoint groups, each of which includes endpoints, such as load balancers.</p>
 */
export interface _Accelerator {
  /**
   * <p>The Amazon Resource Name (ARN) of the accelerator.</p>
   */
  AcceleratorArn?: string;

  /**
   * <p>The name of the accelerator. The name can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.</p>
   */
  Name?: string;

  /**
   * <p>The value for the address type must be IPv4. </p>
   */
  IpAddressType?: "IPV4" | string;

  /**
   * <p>Indicates whether theaccelerator is enabled. The value is true or false. The default value is true. </p> <p>If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>IP address set associated with the accelerator.</p>
   */
  IpSets?: Array<_IpSet> | Iterable<_IpSet>;

  /**
   * <p>Describes the deployment status of the accelerator.</p>
   */
  Status?: "DEPLOYED" | "IN_PROGRESS" | string;

  /**
   * <p>The date and time that the accelerator was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   */
  LastModifiedTime?: Date | string | number;
}

export interface _UnmarshalledAccelerator extends _Accelerator {
  /**
   * <p>IP address set associated with the accelerator.</p>
   */
  IpSets?: Array<_UnmarshalledIpSet>;

  /**
   * <p>The date and time that the accelerator was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date and time that the accelerator was last modified.</p>
   */
  LastModifiedTime?: Date;
}
