/**
 * <p>A CA certificate.</p>
 */
export interface _CACertificate {
  /**
   * <p>The ARN of the CA certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the CA certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The status of the CA certificate.</p> <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: "ACTIVE" | "INACTIVE" | string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledCACertificate extends _CACertificate {
  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;
}
