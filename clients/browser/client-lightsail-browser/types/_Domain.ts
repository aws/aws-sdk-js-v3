import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _DomainEntry, _UnmarshalledDomainEntry } from "./_DomainEntry";

/**
 * <p>Describes a domain where you are storing recordsets in Lightsail.</p>
 */
export interface _Domain {
  /**
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the domain recordset (e.g., <code>arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE</code>).</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The date when the domain recordset was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The AWS Region and Availability Zones where the domain recordset was created.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The resource type. </p>
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
   * <p>An array of key-value pairs containing information about the domain entries.</p>
   */
  domainEntries?: Array<_DomainEntry> | Iterable<_DomainEntry>;
}

export interface _UnmarshalledDomain extends _Domain {
  /**
   * <p>The date when the domain recordset was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zones where the domain recordset was created.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>An array of key-value pairs containing information about the domain entries.</p>
   */
  domainEntries?: Array<_UnmarshalledDomainEntry>;
}
