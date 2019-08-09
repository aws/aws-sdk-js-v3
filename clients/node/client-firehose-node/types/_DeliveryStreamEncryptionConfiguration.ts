/**
 * <p>Indicates the server-side encryption (SSE) status for the delivery stream.</p>
 */
export interface _DeliveryStreamEncryptionConfiguration {
  /**
   * <p>For a full description of the different values of this status, see <a>StartDeliveryStreamEncryption</a> and <a>StopDeliveryStreamEncryption</a>.</p>
   */
  Status?: "ENABLED" | "ENABLING" | "DISABLED" | "DISABLING" | string;
}

export type _UnmarshalledDeliveryStreamEncryptionConfiguration = _DeliveryStreamEncryptionConfiguration;
