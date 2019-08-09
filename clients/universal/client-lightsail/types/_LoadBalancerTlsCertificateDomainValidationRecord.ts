/**
 * <p>Describes the validation record of each domain name in the SSL/TLS certificate.</p>
 */
export interface _LoadBalancerTlsCertificateDomainValidationRecord {
  /**
   * <p>A fully qualified domain name in the certificate. For example, <code>example.com</code>.</p>
   */
  name?: string;

  /**
   * <p>The type of validation record. For example, <code>CNAME</code> for domain validation.</p>
   */
  type?: string;

  /**
   * <p>The value for that type.</p>
   */
  value?: string;

  /**
   * <p>The validation status. Valid values are listed below.</p>
   */
  validationStatus?: "PENDING_VALIDATION" | "FAILED" | "SUCCESS" | string;

  /**
   * <p>The domain name against which your SSL/TLS certificate was validated.</p>
   */
  domainName?: string;
}

export type _UnmarshalledLoadBalancerTlsCertificateDomainValidationRecord = _LoadBalancerTlsCertificateDomainValidationRecord;
