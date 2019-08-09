/**
 * <p>The authorizer description.</p>
 */
export interface _AuthorizerDescription {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer's Lambda function ARN.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to validate the token signature returned by your custom authentication service.</p>
   */
  tokenSigningPublicKeys?:
    | { [key: string]: string }
    | Iterable<[string, string]>;

  /**
   * <p>The status of the authorizer.</p>
   */
  status?: "ACTIVE" | "INACTIVE" | string;

  /**
   * <p>The UNIX timestamp of when the authorizer was created.</p>
   */
  creationDate?: Date | string | number;

  /**
   * <p>The UNIX timestamp of when the authorizer was last updated.</p>
   */
  lastModifiedDate?: Date | string | number;
}

export interface _UnmarshalledAuthorizerDescription
  extends _AuthorizerDescription {
  /**
   * <p>The public keys used to validate the token signature returned by your custom authentication service.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * <p>The UNIX timestamp of when the authorizer was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the authorizer was last updated.</p>
   */
  lastModifiedDate?: Date;
}
