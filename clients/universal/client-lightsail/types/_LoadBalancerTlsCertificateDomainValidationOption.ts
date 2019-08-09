/**
 * <p>Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.</p>
 */
export interface _LoadBalancerTlsCertificateDomainValidationOption {
  /**
   * <p>The fully qualified domain name in the certificate request.</p>
   */
  domainName?: string;

  /**
   * <p>The status of the domain validation. Valid values are listed below.</p>
   */
  validationStatus?: "PENDING_VALIDATION" | "FAILED" | "SUCCESS" | string;
}

export type _UnmarshalledLoadBalancerTlsCertificateDomainValidationOption = _LoadBalancerTlsCertificateDomainValidationOption;
