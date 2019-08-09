import {
  _LoadBalancerTlsCertificateDomainValidationOption,
  _UnmarshalledLoadBalancerTlsCertificateDomainValidationOption
} from "./_LoadBalancerTlsCertificateDomainValidationOption";

/**
 * <p>Contains information about the status of Lightsail's managed renewal for the certificate.</p>
 */
export interface _LoadBalancerTlsCertificateRenewalSummary {
  /**
   * <p>The status of Lightsail's managed renewal of the certificate. Valid values are listed below.</p>
   */
  renewalStatus?:
    | "PENDING_AUTO_RENEWAL"
    | "PENDING_VALIDATION"
    | "SUCCESS"
    | "FAILED"
    | string;

  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it pertains to Lightsail's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request.</p>
   */
  domainValidationOptions?:
    | Array<_LoadBalancerTlsCertificateDomainValidationOption>
    | Iterable<_LoadBalancerTlsCertificateDomainValidationOption>;
}

export interface _UnmarshalledLoadBalancerTlsCertificateRenewalSummary
  extends _LoadBalancerTlsCertificateRenewalSummary {
  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it pertains to Lightsail's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request.</p>
   */
  domainValidationOptions?: Array<
    _UnmarshalledLoadBalancerTlsCertificateDomainValidationOption
  >;
}
