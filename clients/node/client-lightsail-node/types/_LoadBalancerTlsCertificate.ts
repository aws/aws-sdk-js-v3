import {
  _ResourceLocation,
  _UnmarshalledResourceLocation
} from "./_ResourceLocation";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import {
  _LoadBalancerTlsCertificateDomainValidationRecord,
  _UnmarshalledLoadBalancerTlsCertificateDomainValidationRecord
} from "./_LoadBalancerTlsCertificateDomainValidationRecord";
import {
  _LoadBalancerTlsCertificateRenewalSummary,
  _UnmarshalledLoadBalancerTlsCertificateRenewalSummary
} from "./_LoadBalancerTlsCertificateRenewalSummary";

/**
 * <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 */
export interface _LoadBalancerTlsCertificate {
  /**
   * <p>The name of the SSL/TLS certificate (e.g., <code>my-certificate</code>).</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the SSL/TLS certificate.</p>
   */
  arn?: string;

  /**
   * <p>The support code. Include this code in your email to support when you have questions about your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to look up your Lightsail information more easily.</p>
   */
  supportCode?: string;

  /**
   * <p>The time when you created your SSL/TLS certificate.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The AWS Region and Availability Zone where you created your certificate.</p>
   */
  location?: _ResourceLocation;

  /**
   * <p>The resource type (e.g., <code>LoadBalancerTlsCertificate</code>).</p> <ul> <li> <p> <b> <code>Instance</code> </b> - A Lightsail instance (a virtual private server)</p> </li> <li> <p> <b> <code>StaticIp</code> </b> - A static IP address</p> </li> <li> <p> <b> <code>KeyPair</code> </b> - The key pair used to connect to a Lightsail instance</p> </li> <li> <p> <b> <code>InstanceSnapshot</code> </b> - A Lightsail instance snapshot</p> </li> <li> <p> <b> <code>Domain</code> </b> - A DNS zone</p> </li> <li> <p> <b> <code>PeeredVpc</code> </b> - A peered VPC</p> </li> <li> <p> <b> <code>LoadBalancer</code> </b> - A Lightsail load balancer</p> </li> <li> <p> <b> <code>LoadBalancerTlsCertificate</code> </b> - An SSL/TLS certificate associated with a Lightsail load balancer</p> </li> <li> <p> <b> <code>Disk</code> </b> - A Lightsail block storage disk</p> </li> <li> <p> <b> <code>DiskSnapshot</code> </b> - A block storage disk snapshot</p> </li> </ul>
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
   * <p>The load balancer name where your SSL/TLS certificate is attached.</p>
   */
  loadBalancerName?: string;

  /**
   * <p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load balancer.</p>
   */
  isAttached?: boolean;

  /**
   * <p>The status of the SSL/TLS certificate. Valid values are below.</p>
   */
  status?:
    | "PENDING_VALIDATION"
    | "ISSUED"
    | "INACTIVE"
    | "EXPIRED"
    | "VALIDATION_TIMED_OUT"
    | "REVOKED"
    | "FAILED"
    | "UNKNOWN"
    | string;

  /**
   * <p>The domain name for your SSL/TLS certificate.</p>
   */
  domainName?: string;

  /**
   * <p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the records.</p>
   */
  domainValidationRecords?:
    | Array<_LoadBalancerTlsCertificateDomainValidationRecord>
    | Iterable<_LoadBalancerTlsCertificateDomainValidationRecord>;

  /**
   * <p>The reason for the SSL/TLS certificate validation failure.</p>
   */
  failureReason?:
    | "NO_AVAILABLE_CONTACTS"
    | "ADDITIONAL_VERIFICATION_REQUIRED"
    | "DOMAIN_NOT_ALLOWED"
    | "INVALID_PUBLIC_DOMAIN"
    | "OTHER"
    | string;

  /**
   * <p>The time when the SSL/TLS certificate was issued.</p>
   */
  issuedAt?: Date | string | number;

  /**
   * <p>The issuer of the certificate.</p>
   */
  issuer?: string;

  /**
   * <p>The algorithm that was used to generate the key pair (the public and private key).</p>
   */
  keyAlgorithm?: string;

  /**
   * <p>The timestamp when the SSL/TLS certificate expires.</p>
   */
  notAfter?: Date | string | number;

  /**
   * <p>The timestamp when the SSL/TLS certificate is first valid.</p>
   */
  notBefore?: Date | string | number;

  /**
   * <p>An object containing information about the status of Lightsail's managed renewal for the certificate.</p>
   */
  renewalSummary?: _LoadBalancerTlsCertificateRenewalSummary;

  /**
   * <p>The reason the certificate was revoked. Valid values are below.</p>
   */
  revocationReason?:
    | "UNSPECIFIED"
    | "KEY_COMPROMISE"
    | "CA_COMPROMISE"
    | "AFFILIATION_CHANGED"
    | "SUPERCEDED"
    | "CESSATION_OF_OPERATION"
    | "CERTIFICATE_HOLD"
    | "REMOVE_FROM_CRL"
    | "PRIVILEGE_WITHDRAWN"
    | "A_A_COMPROMISE"
    | string;

  /**
   * <p>The timestamp when the SSL/TLS certificate was revoked.</p>
   */
  revokedAt?: Date | string | number;

  /**
   * <p>The serial number of the certificate.</p>
   */
  serial?: string;

  /**
   * <p>The algorithm that was used to sign the certificate.</p>
   */
  signatureAlgorithm?: string;

  /**
   * <p>The name of the entity that is associated with the public key contained in the certificate.</p>
   */
  subject?: string;

  /**
   * <p>One or more domains or subdomains included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CNAME) of the certificate and additional domain names that can be used to connect to the website, such as <code>example.com</code>, <code>www.example.com</code>, or <code>m.example.com</code>.</p>
   */
  subjectAlternativeNames?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledLoadBalancerTlsCertificate
  extends _LoadBalancerTlsCertificate {
  /**
   * <p>The time when you created your SSL/TLS certificate.</p>
   */
  createdAt?: Date;

  /**
   * <p>The AWS Region and Availability Zone where you created your certificate.</p>
   */
  location?: _UnmarshalledResourceLocation;

  /**
   * <p>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the records.</p>
   */
  domainValidationRecords?: Array<
    _UnmarshalledLoadBalancerTlsCertificateDomainValidationRecord
  >;

  /**
   * <p>The time when the SSL/TLS certificate was issued.</p>
   */
  issuedAt?: Date;

  /**
   * <p>The timestamp when the SSL/TLS certificate expires.</p>
   */
  notAfter?: Date;

  /**
   * <p>The timestamp when the SSL/TLS certificate is first valid.</p>
   */
  notBefore?: Date;

  /**
   * <p>An object containing information about the status of Lightsail's managed renewal for the certificate.</p>
   */
  renewalSummary?: _UnmarshalledLoadBalancerTlsCertificateRenewalSummary;

  /**
   * <p>The timestamp when the SSL/TLS certificate was revoked.</p>
   */
  revokedAt?: Date;

  /**
   * <p>One or more domains or subdomains included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CNAME) of the certificate and additional domain names that can be used to connect to the website, such as <code>example.com</code>, <code>www.example.com</code>, or <code>m.example.com</code>.</p>
   */
  subjectAlternativeNames?: Array<string>;
}
