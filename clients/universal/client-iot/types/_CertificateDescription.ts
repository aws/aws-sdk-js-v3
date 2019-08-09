import { _TransferData, _UnmarshalledTransferData } from "./_TransferData";
import {
  _CertificateValidity,
  _UnmarshalledCertificateValidity
} from "./_CertificateValidity";

/**
 * <p>Describes a certificate.</p>
 */
export interface _CertificateDescription {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The status of the certificate.</p>
   */
  status?:
    | "ACTIVE"
    | "INACTIVE"
    | "REVOKED"
    | "PENDING_TRANSFER"
    | "REGISTER_INACTIVE"
    | "PENDING_ACTIVATION"
    | string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The ID of the AWS account that owns the certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the AWS account of the previous owner of the certificate.</p>
   */
  previousOwnedBy?: string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date | string | number;

  /**
   * <p>The date and time the certificate was last modified.</p>
   */
  lastModifiedDate?: Date | string | number;

  /**
   * <p>The customer version of the certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The transfer data.</p>
   */
  transferData?: _TransferData;

  /**
   * <p>The generation ID of the certificate.</p>
   */
  generationId?: string;

  /**
   * <p>When the certificate is valid.</p>
   */
  validity?: _CertificateValidity;
}

export interface _UnmarshalledCertificateDescription
  extends _CertificateDescription {
  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time the certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The transfer data.</p>
   */
  transferData?: _UnmarshalledTransferData;

  /**
   * <p>When the certificate is valid.</p>
   */
  validity?: _UnmarshalledCertificateValidity;
}
