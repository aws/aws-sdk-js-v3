/**
 * <p> Information about credentials that provide access to a private Docker registry. When this is set: </p> <ul> <li> <p> <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>. </p> </li> <li> <p> images cannot be curated or an Amazon ECR image.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with AWS Secrets Manager Sample for AWS CodeBuild</a>. </p>
 */
export interface _RegistryCredential {
  /**
   * <p> The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets Manager. </p> <note> <p> The <code>credential</code> can use the name of the credentials only if they exist in your current region. </p> </note>
   */
  credential: string;

  /**
   * <p> The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for AWS Secrets Manager. </p>
   */
  credentialProvider: "SECRETS_MANAGER" | string;
}

export type _UnmarshalledRegistryCredential = _RegistryCredential;
