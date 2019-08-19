/**
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and encryption settings.</p>
 */
export interface _VoiceConnector {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name?: string;

  /**
   * <p>The outbound host name for the Amazon Chime Voice Connector.</p>
   */
  OutboundHostName?: string;

  /**
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption?: boolean;

  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date | string | number;
}

export interface _UnmarshalledVoiceConnector extends _VoiceConnector {
  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}
