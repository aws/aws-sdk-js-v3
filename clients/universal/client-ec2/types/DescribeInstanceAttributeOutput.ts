import { _UnmarshalledGroupIdentifier } from "./_GroupIdentifier";
import { _UnmarshalledInstanceBlockDeviceMapping } from "./_InstanceBlockDeviceMapping";
import { _UnmarshalledAttributeBooleanValue } from "./_AttributeBooleanValue";
import { _UnmarshalledAttributeValue } from "./_AttributeValue";
import { _UnmarshalledProductCode } from "./_ProductCode";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes an instance attribute.</p>
 */
export interface DescribeInstanceAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The security groups associated with the instance.</p>
   */
  Groups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>The block device mapping of the instance.</p>
   */
  BlockDeviceMappings?: Array<_UnmarshalledInstanceBlockDeviceMapping>;

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance through the Amazon EC2 console, CLI, or API; otherwise, you can.</p>
   */
  DisableApiTermination?: _UnmarshalledAttributeBooleanValue;

  /**
   * <p>Indicates whether enhanced networking with ENA is enabled.</p>
   */
  EnaSupport?: _UnmarshalledAttributeBooleanValue;

  /**
   * <p>Indicates whether the instance is optimized for Amazon EBS I/O.</p>
   */
  EbsOptimized?: _UnmarshalledAttributeBooleanValue;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: _UnmarshalledAttributeValue;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: _UnmarshalledAttributeValue;

  /**
   * <p>The kernel ID.</p>
   */
  KernelId?: _UnmarshalledAttributeValue;

  /**
   * <p>A list of product codes.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>The RAM disk ID.</p>
   */
  RamdiskId?: _UnmarshalledAttributeValue;

  /**
   * <p>The device name of the root device volume (for example, <code>/dev/sda1</code>).</p>
   */
  RootDeviceName?: _UnmarshalledAttributeValue;

  /**
   * <p>Indicates whether source/destination checking is enabled. A value of <code>true</code> means that checking is enabled, and <code>false</code> means that checking is disabled. This value must be <code>false</code> for a NAT instance to perform NAT.</p>
   */
  SourceDestCheck?: _UnmarshalledAttributeBooleanValue;

  /**
   * <p>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</p>
   */
  SriovNetSupport?: _UnmarshalledAttributeValue;

  /**
   * <p>The user data.</p>
   */
  UserData?: _UnmarshalledAttributeValue;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
