/**
 * <p/>
 */
export interface _S3Grantee {
  /**
   * <p/>
   */
  TypeIdentifier?: "id" | "emailAddress" | "uri" | string;

  /**
   * <p/>
   */
  Identifier?: string;

  /**
   * <p/>
   */
  DisplayName?: string;
}

export type _UnmarshalledS3Grantee = _S3Grantee;
