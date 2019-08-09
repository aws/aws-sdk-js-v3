import {
  _DomainValidation,
  _UnmarshalledDomainValidation
} from "./_DomainValidation";

/**
 * <p>Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
 */
export interface _RenewalSummary {
  /**
   * <p>The status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> of the certificate.</p>
   */
  RenewalStatus:
    | "PENDING_AUTO_RENEWAL"
    | "PENDING_VALIDATION"
    | "SUCCESS"
    | "FAILED"
    | string;

  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it pertains to ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a>. This is different from the initial validation that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   */
  DomainValidationOptions:
    | Array<_DomainValidation>
    | Iterable<_DomainValidation>;

  /**
   * <p>The reason that a renewal request was unsuccessful.</p>
   */
  RenewalStatusReason?:
    | "NO_AVAILABLE_CONTACTS"
    | "ADDITIONAL_VERIFICATION_REQUIRED"
    | "DOMAIN_NOT_ALLOWED"
    | "INVALID_PUBLIC_DOMAIN"
    | "DOMAIN_VALIDATION_DENIED"
    | "CAA_ERROR"
    | "PCA_LIMIT_EXCEEDED"
    | "PCA_INVALID_ARN"
    | "PCA_INVALID_STATE"
    | "PCA_REQUEST_FAILED"
    | "PCA_RESOURCE_NOT_FOUND"
    | "PCA_INVALID_ARGS"
    | "PCA_INVALID_DURATION"
    | "PCA_ACCESS_DENIED"
    | "OTHER"
    | string;

  /**
   * <p>The time at which the renewal summary was last updated.</p>
   */
  UpdatedAt: Date | string | number;
}

export interface _UnmarshalledRenewalSummary extends _RenewalSummary {
  /**
   * <p>Contains information about the validation of each domain name in the certificate, as it pertains to ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a>. This is different from the initial validation that occurs as a result of the <a>RequestCertificate</a> request. This field exists only when the certificate type is <code>AMAZON_ISSUED</code>.</p>
   */
  DomainValidationOptions: Array<_UnmarshalledDomainValidation>;

  /**
   * <p>The time at which the renewal summary was last updated.</p>
   */
  UpdatedAt: Date;
}
