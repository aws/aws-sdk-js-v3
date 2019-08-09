import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { _InstanceBlockDeviceMappingSpecification } from "./_InstanceBlockDeviceMappingSpecification";
import { _AttributeValue } from "./_AttributeValue";
import { _BlobAttributeValue } from "./_BlobAttributeValue";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyInstanceAttributeInput shape
 */
export interface ModifyInstanceAttributeInput {
  /**
   * <p>Specifies whether source/destination checking is enabled. A value of <code>true</code> means that checking is enabled, and <code>false</code> means that checking is disabled. This value must be <code>false</code> for a NAT instance to perform NAT.</p>
   */
  SourceDestCheck?: _AttributeBooleanValue;

  /**
   * <p>The name of the attribute.</p>
   */
  Attribute?:
    | "instanceType"
    | "kernel"
    | "ramdisk"
    | "userData"
    | "disableApiTermination"
    | "instanceInitiatedShutdownBehavior"
    | "rootDeviceName"
    | "blockDeviceMapping"
    | "productCodes"
    | "sourceDestCheck"
    | "groupSet"
    | "ebsOptimized"
    | "sriovNetSupport"
    | "enaSupport"
    | string;

  /**
   * <p>Modifies the <code>DeleteOnTermination</code> attribute for volumes that are currently attached. The volume must be owned by the caller. If no value is specified for <code>DeleteOnTermination</code>, the default is <code>true</code> and the volume is deleted when the instance is terminated.</p> <p>To add instance store volumes to an Amazon EBS-backed instance, you must add them when you launch the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html#Using_OverridingAMIBDM">Updating the Block Device Mapping when Launching an Instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  BlockDeviceMappings?:
    | Array<_InstanceBlockDeviceMappingSpecification>
    | Iterable<_InstanceBlockDeviceMappingSpecification>;

  /**
   * <p>If the value is <code>true</code>, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. You cannot use this parameter for Spot Instances.</p>
   */
  DisableApiTermination?: _AttributeBooleanValue;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</p>
   */
  EbsOptimized?: _AttributeBooleanValue;

  /**
   * <p>Set to <code>true</code> to enable enhanced networking with ENA for the instance.</p> <p>This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.</p>
   */
  EnaSupport?: _AttributeBooleanValue;

  /**
   * <p>[EC2-VPC] Changes the security groups of the instance. You must specify at least one security group, even if it's just the default security group for the VPC. You must specify the security group ID, not the security group name.</p>
   */
  Groups?: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string;

  /**
   * <p>Specifies whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</p>
   */
  InstanceInitiatedShutdownBehavior?: _AttributeValue;

  /**
   * <p>Changes the instance type to the specified value. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a>. If the instance type is not valid, the error returned is <code>InvalidInstanceAttributeValue</code>.</p>
   */
  InstanceType?: _AttributeValue;

  /**
   * <p>Changes the instance's kernel to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Kernel?: _AttributeValue;

  /**
   * <p>Changes the instance's RAM disk to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">PV-GRUB</a>.</p>
   */
  Ramdisk?: _AttributeValue;

  /**
   * <p>Set to <code>simple</code> to enable enhanced networking with the Intel 82599 Virtual Function interface for the instance.</p> <p>There is no way to disable enhanced networking with the Intel 82599 Virtual Function interface at this time.</p> <p>This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.</p>
   */
  SriovNetSupport?: _AttributeValue;

  /**
   * <p>Changes the instance's user data to the specified value. If you are using an AWS SDK or command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text.</p>
   */
  UserData?: _BlobAttributeValue;

  /**
   * <p>A new value for the attribute. Use only with the <code>kernel</code>, <code>ramdisk</code>, <code>userData</code>, <code>disableApiTermination</code>, or <code>instanceInitiatedShutdownBehavior</code> attribute.</p>
   */
  Value?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
