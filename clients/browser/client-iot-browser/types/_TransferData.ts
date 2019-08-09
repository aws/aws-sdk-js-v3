/**
 * <p>Data used to transfer a certificate to an AWS account.</p>
 */
export interface _TransferData {
  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The reason why the transfer was rejected.</p>
   */
  rejectReason?: string;

  /**
   * <p>The date the transfer took place.</p>
   */
  transferDate?: Date | string | number;

  /**
   * <p>The date the transfer was accepted.</p>
   */
  acceptDate?: Date | string | number;

  /**
   * <p>The date the transfer was rejected.</p>
   */
  rejectDate?: Date | string | number;
}

export interface _UnmarshalledTransferData extends _TransferData {
  /**
   * <p>The date the transfer took place.</p>
   */
  transferDate?: Date;

  /**
   * <p>The date the transfer was accepted.</p>
   */
  acceptDate?: Date;

  /**
   * <p>The date the transfer was rejected.</p>
   */
  rejectDate?: Date;
}
