import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _InstanceHardware,
  _UnmarshalledInstanceHardware
} from "./_InstanceHardware";
import {
  _InstanceNetworking,
  _UnmarshalledInstanceNetworking
} from "./_InstanceNetworking";
import { _InstanceState, _UnmarshalledInstanceState } from "./_InstanceState";

/**
 * <p>Describes an instance (a virtual private server).</p>
 */
export interface _Instance {
  /**
   * <p>The name the user gave the instance (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the instance was created (e.g., <code>1479734909.17</code>).</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The region name and Availability Zone where the instance is located.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The type of resource (usually <code>Instance</code>).</p>
   */
  resourceType?:
    | "Instance"
    | "StaticIp"
    | "KeyPair"
    | "InstanceSnapshot"
    | "Domain"
    | "PeeredVpc"
    | "LoadBalancer"
    | "LoadBalancerTlsCertificate"
    | "Disk"
    | "DiskSnapshot"
    | "RelationalDatabase"
    | "RelationalDatabaseSnapshot"
    | "ExportSnapshotRecord"
    | "CloudFormationStackRecord"
    | string;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The blueprint ID (e.g., <code>os_amlinux_2016_03</code>).</p>
   */
  blueprintId?: string;

  /**
   * <p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>
   */
  blueprintName?: string;

  /**
   * <p>The bundle for the instance (e.g., <code>micro_1_0</code>).</p>
   */
  bundleId?: string;

  /**
   * <p>A Boolean value indicating whether this instance has a static IP assigned to it.</p>
   */
  isStaticIp?: boolean;

  /**
   * <p>The private IP address of the instance.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The public IP address of the instance.</p>
   */
  publicIpAddress?: string;

  /**
   * <p>The IPv6 address of the instance.</p>
   */
  ipv6Address?: string;

  /**
   * <p>The size of the vCPU and the amount of RAM for the instance.</p>
   */
  hardware?: _InstanceHardware;

  /**
   * <p>Information about the public ports and monthly data transfer rates for the instance.</p>
   */
  networking?: _InstanceNetworking;

  /**
   * <p>The status code and the state (e.g., <code>running</code>) for the instance.</p>
   */
  state?: _InstanceState;

  /**
   * <p>The user name for connecting to the instance (e.g., <code>ec2-user</code>).</p>
   */
  username?: string;

  /**
   * <p>The name of the SSH key being used to connect to the instance (e.g., <code>LightsailDefaultKeyPair</code>).</p>
   */
  sshKeyName?: string;
}

export interface _UnmarshalledInstance extends _Instance {
  /**
   * <p>The timestamp when the instance was created (e.g., <code>1479734909.17</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region name and Availability Zone where the instance is located.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>The size of the vCPU and the amount of RAM for the instance.</p>
   */
  hardware?: _UnmarshalledInstanceHardware;

  /**
   * <p>Information about the public ports and monthly data transfer rates for the instance.</p>
   */
  networking?: _UnmarshalledInstanceNetworking;

  /**
   * <p>The status code and the state (e.g., <code>running</code>) for the instance.</p>
   */
  state?: _UnmarshalledInstanceState;
}
