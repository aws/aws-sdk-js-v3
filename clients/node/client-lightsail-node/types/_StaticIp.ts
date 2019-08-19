import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";

/**
 * <p>Describes the static IP.</p>
 */
export interface _StaticIp {
  /**
   * <p>The name of the static IP (e.g., <code>StaticIP-Ohio-EXAMPLE</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the static IP (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the static IP was created (e.g., <code>1479735304.222</code>).</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The region and Availability Zone where the static IP was created.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The resource type (usually <code>StaticIp</code>).</p>
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
   * <p>The static IP address.</p>
   */
  ipAddress?: string;

  /**
   * <p>The instance where the static IP is attached (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).</p>
   */
  attachedTo?: string;

  /**
   * <p>A Boolean value indicating whether the static IP is attached.</p>
   */
  isAttached?: boolean;
}

export interface _UnmarshalledStaticIp extends _StaticIp {
  /**
   * <p>The timestamp when the static IP was created (e.g., <code>1479735304.222</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region and Availability Zone where the static IP was created.</p>
   */
  location?: _UnmarshalledResourceLocation;
}
