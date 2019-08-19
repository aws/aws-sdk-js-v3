/**
 * <p>Specifies configuration details for a Git repository in your AWS account.</p>
 */
export interface _GitConfig {
  /**
   * <p>The URL where the Git repository is located.</p>
   */
  RepositoryUrl: string;

  /**
   * <p>The default branch for the Git repository.</p>
   */
  Branch?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of <code>AWSCURRENT</code> and must be in the following format:</p> <p> <code>{"username": <i>UserName</i>, "password": <i>Password</i>}</code> </p>
   */
  SecretArn?: string;
}

export type _UnmarshalledGitConfig = _GitConfig;
