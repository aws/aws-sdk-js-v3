import {
  _CertificateValidity,
  _UnmarshalledCertificateValidity
} from "./_CertificateValidity";

/**
 * <p>Describes a CA certificate.</p>
 */
export interface _CACertificateDescription {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of a CA certificate.</p>
   */
  status?: "ACTIVE" | "INACTIVE" | string;

  /**
   * <p>The CA certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The owner of the CA certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date | string | number;

  /**
   * <p>Whether the CA certificate configured for auto registration of device certificates. Valid values are "ENABLE" and "DISABLE"</p>
   */
  autoRegistrationStatus?: "ENABLE" | "DISABLE" | string;

  /**
   * <p>The date the CA certificate was last modified.</p>
   */
  lastModifiedDate?: Date | string | number;

  /**
   * <p>The customer version of the CA certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the CA certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the CA certificate is valid.</p>
   */
  validity?: _CertificateValidity;
}

export interface _UnmarshalledCACertificateDescription
  extends _CACertificateDescription {
  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the CA certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>When the CA certificate is valid.</p>
   */
  validity?: _UnmarshalledCertificateValidity;
}
