/**
 * <p>The summary of the certificate authority (CA).</p>
 */
export interface _WebsiteCaSummary {
  /**
   * <p>A unique identifier for the CA.</p>
   */
  WebsiteCaId?: string;

  /**
   * <p>The time when the CA was added.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;
}

export interface _UnmarshalledWebsiteCaSummary extends _WebsiteCaSummary {
  /**
   * <p>The time when the CA was added.</p>
   */
  CreatedTime?: Date;
}
