/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
 */
export interface _SpekeKeyProvider {
  /**
   * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
   * MediaPackage will assume when accessing the key provider service.
   *
   */
  RoleArn: string;

  /**
   * The system IDs to include in key requests.
   */
  SystemIds: Array<string> | Iterable<string>;

  /**
   * The URL of the external key provider service.
   */
  Url: string;
}

export interface _UnmarshalledSpekeKeyProvider extends _SpekeKeyProvider {
  /**
   * The system IDs to include in key requests.
   */
  SystemIds: Array<string>;
}
