/**
 * <p/>
 */
export interface _S3ObjectMetadata {
  /**
   * <p/>
   */
  CacheControl?: string;

  /**
   * <p/>
   */
  ContentDisposition?: string;

  /**
   * <p/>
   */
  ContentEncoding?: string;

  /**
   * <p/>
   */
  ContentLanguage?: string;

  /**
   * <p/>
   */
  UserMetadata?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p/>
   */
  ContentLength?: number;

  /**
   * <p/>
   */
  ContentMD5?: string;

  /**
   * <p/>
   */
  ContentType?: string;

  /**
   * <p/>
   */
  HttpExpiresDate?: Date | string | number;

  /**
   * <p/>
   */
  RequesterCharged?: boolean;

  /**
   * <p/>
   */
  SSEAlgorithm?: "AES256" | "KMS" | string;
}

export interface _UnmarshalledS3ObjectMetadata extends _S3ObjectMetadata {
  /**
   * <p/>
   */
  UserMetadata?: { [key: string]: string };

  /**
   * <p/>
   */
  HttpExpiresDate?: Date;
}
