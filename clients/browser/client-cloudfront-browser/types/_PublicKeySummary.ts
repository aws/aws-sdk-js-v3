/**
 * <p>A complex data type for public key information. </p>
 */
export interface _PublicKeySummary {
  /**
   * <p> ID for public key information summary. </p>
   */
  Id: string;

  /**
   * <p> Name for public key information summary. </p>
   */
  Name: string;

  /**
   * <p> Creation time for public key information summary. </p>
   */
  CreatedTime: Date | string | number;

  /**
   * <p> Encoded key for public key information summary. </p>
   */
  EncodedKey: string;

  /**
   * <p> Comment for public key information summary. </p>
   */
  Comment?: string;
}

export interface _UnmarshalledPublicKeySummary extends _PublicKeySummary {
  /**
   * <p> Creation time for public key information summary. </p>
   */
  CreatedTime: Date;
}
