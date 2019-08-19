/**
 * <p>A certificate that has been transferred but not yet accepted.</p>
 */
export interface _OutgoingCertificate {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The AWS account to which the transfer was made.</p>
   */
  transferredTo?: string;

  /**
   * <p>The date the transfer was initiated.</p>
   */
  transferDate?: Date | string | number;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The certificate creation date.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledOutgoingCertificate extends _OutgoingCertificate {
  /**
   * <p>The date the transfer was initiated.</p>
   */
  transferDate?: Date;

  /**
   * <p>The certificate creation date.</p>
   */
  creationDate?: Date;
}
