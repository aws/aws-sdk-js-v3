/**
 * <p>An OTA update summary.</p>
 */
export interface _OTAUpdateSummary {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledOTAUpdateSummary extends _OTAUpdateSummary {
  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;
}
