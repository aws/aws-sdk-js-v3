/**
 * <p>Information about a certificate.</p>
 */
export interface _Certificate {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the certificate.</p> <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
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
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledCertificate extends _Certificate {
  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;
}
