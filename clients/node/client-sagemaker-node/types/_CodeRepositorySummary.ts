import { _GitConfig, _UnmarshalledGitConfig } from "./_GitConfig";

/**
 * <p>Specifies summary information about a Git repository.</p>
 */
export interface _CodeRepositorySummary {
  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string;

  /**
   * <p>The date and time that the Git repository was created.</p>
   */
  CreationTime: Date | string | number;

  /**
   * <p>The date and time that the Git repository was last modified.</p>
   */
  LastModifiedTime: Date | string | number;

  /**
   * <p>Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.</p>
   */
  GitConfig?: _GitConfig;
}

export interface _UnmarshalledCodeRepositorySummary
  extends _CodeRepositorySummary {
  /**
   * <p>The date and time that the Git repository was created.</p>
   */
  CreationTime: Date;

  /**
   * <p>The date and time that the Git repository was last modified.</p>
   */
  LastModifiedTime: Date;

  /**
   * <p>Configuration details for the Git repository, including the URL where it is located and the ARN of the AWS Secrets Manager secret that contains the credentials used to access the repository.</p>
   */
  GitConfig?: _UnmarshalledGitConfig;
}
