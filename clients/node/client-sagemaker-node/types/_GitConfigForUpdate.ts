/**
 * <p>Specifies configuration details for a Git repository when the repository is updated.</p>
 */
export interface _GitConfigForUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of <code>AWSCURRENT</code> and must be in the following format:</p> <p> <code>{"username": <i>UserName</i>, "password": <i>Password</i>}</code> </p>
   */
  SecretArn?: string;
}

export type _UnmarshalledGitConfigForUpdate = _GitConfigForUpdate;
