import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes the SSH key pair.</p>
 */
export interface _KeyPair {
  /**
   * <p>The friendly name of the SSH key pair.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the key pair (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The timestamp when the key pair was created (e.g., <code>1479816991.349</code>).</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The region name and Availability Zone where the key pair was created.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The resource type (usually <code>KeyPair</code>).</p>
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
   * <p>The RSA fingerprint of the key pair.</p>
   */
  fingerprint?: string;
}

export interface _UnmarshalledKeyPair extends _KeyPair {
  /**
   * <p>The timestamp when the key pair was created (e.g., <code>1479816991.349</code>).</p>
   */
  createdAt?: Date;

  /**
   * <p>The region name and Availability Zone where the key pair was created.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
