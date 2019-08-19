/**
 * <p>An object representing authorization data for an Amazon ECR registry.</p>
 */
export interface _AuthorizationData {
  /**
   * <p>A base64-encoded string that contains authorization data for the specified Amazon ECR registry. When the string is decoded, it is presented in the format <code>user:password</code> for private registry authentication using <code>docker login</code>.</p>
   */
  authorizationToken?: string;

  /**
   * <p>The Unix time in seconds and milliseconds when the authorization token expires. Authorization tokens are valid for 12 hours.</p>
   */
  expiresAt?: Date | string | number;

  /**
   * <p>The registry URL to use for this authorization token in a <code>docker login</code> command. The Amazon ECR registry URL format is <code>https://aws_account_id.dkr.ecr.region.amazonaws.com</code>. For example, <code>https://012345678910.dkr.ecr.us-east-1.amazonaws.com</code>.. </p>
   */
  proxyEndpoint?: string;
}

export interface _UnmarshalledAuthorizationData extends _AuthorizationData {
  /**
   * <p>The Unix time in seconds and milliseconds when the authorization token expires. Authorization tokens are valid for 12 hours.</p>
   */
  expiresAt?: Date;
}
