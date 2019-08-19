import {
  _CertificateAuthorityConfiguration,
  _UnmarshalledCertificateAuthorityConfiguration
} from "./_CertificateAuthorityConfiguration";
import {
  _RevocationConfiguration,
  _UnmarshalledRevocationConfiguration
} from "./_RevocationConfiguration";

/**
 * <p>Contains information about your private certificate authority (CA). Your private CA can issue and revoke X.509 digital certificates. Digital certificates verify that the entity named in the certificate <b>Subject</b> field owns or controls the public key contained in the <b>Subject Public Key Info</b> field. Call the <a>CreateCertificateAuthority</a> action to create your private CA. You must then call the <a>GetCertificateAuthorityCertificate</a> action to retrieve a private CA certificate signing request (CSR). Sign the CSR with your ACM Private CA-hosted or on-premises root or subordinate CA certificate. Call the <a>ImportCertificateAuthorityCertificate</a> action to import the signed certificate into AWS Certificate Manager (ACM). </p>
 */
export interface _CertificateAuthority {
  /**
   * <p>Amazon Resource Name (ARN) for your private certificate authority (CA). The format is <code> <i>12345678-1234-1234-1234-123456789012</i> </code>.</p>
   */
  Arn?: string;

  /**
   * <p>Date and time at which your private CA was created.</p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>Date and time at which your private CA was last updated.</p>
   */
  LastStateChangeAt?: Date | string | number;

  /**
   * <p>Type of your private CA.</p>
   */
  Type?: "ROOT" | "SUBORDINATE" | string;

  /**
   * <p>Serial number of your private CA.</p>
   */
  Serial?: string;

  /**
   * <p>Status of your private CA.</p>
   */
  Status?:
    | "CREATING"
    | "PENDING_CERTIFICATE"
    | "ACTIVE"
    | "DELETED"
    | "DISABLED"
    | "EXPIRED"
    | "FAILED"
    | string;

  /**
   * <p>Date and time before which your private CA certificate is not valid.</p>
   */
  NotBefore?: Date | string | number;

  /**
   * <p>Date and time after which your private CA certificate is not valid.</p>
   */
  NotAfter?: Date | string | number;

  /**
   * <p>Reason the request to create your private CA failed.</p>
   */
  FailureReason?:
    | "REQUEST_TIMED_OUT"
    | "UNSUPPORTED_ALGORITHM"
    | "OTHER"
    | string;

  /**
   * <p>Your private CA configuration.</p>
   */
  CertificateAuthorityConfiguration?: _CertificateAuthorityConfiguration;

  /**
   * <p>Information about the certificate revocation list (CRL) created and maintained by your private CA. </p>
   */
  RevocationConfiguration?: _RevocationConfiguration;

  /**
   * <p>The period during which a deleted CA can be restored. For more information, see the <code>PermanentDeletionTimeInDays</code> parameter of the <a>DeleteCertificateAuthorityRequest</a> action. </p>
   */
  RestorableUntil?: Date | string | number;
}

export interface _UnmarshalledCertificateAuthority
  extends _CertificateAuthority {
  /**
   * <p>Date and time at which your private CA was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>Date and time at which your private CA was last updated.</p>
   */
  LastStateChangeAt?: Date;

  /**
   * <p>Date and time before which your private CA certificate is not valid.</p>
   */
  NotBefore?: Date;

  /**
   * <p>Date and time after which your private CA certificate is not valid.</p>
   */
  NotAfter?: Date;

  /**
   * <p>Your private CA configuration.</p>
   */
  CertificateAuthorityConfiguration?: _UnmarshalledCertificateAuthorityConfiguration;

  /**
   * <p>Information about the certificate revocation list (CRL) created and maintained by your private CA. </p>
   */
  RevocationConfiguration?: _UnmarshalledRevocationConfiguration;

  /**
   * <p>The period during which a deleted CA can be restored. For more information, see the <code>PermanentDeletionTimeInDays</code> parameter of the <a>DeleteCertificateAuthorityRequest</a> action. </p>
   */
  RestorableUntil?: Date;
}
