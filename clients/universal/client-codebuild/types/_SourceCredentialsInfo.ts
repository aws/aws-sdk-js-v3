/**
 * <p> Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. </p>
 */
export interface _SourceCredentialsInfo {
  /**
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   */
  arn?: string;

  /**
   * <p> The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, or BITBUCKET. </p>
   */
  serverType?: "GITHUB" | "BITBUCKET" | "GITHUB_ENTERPRISE" | string;

  /**
   * <p> The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, or PERSONAL_ACCESS_TOKEN. </p>
   */
  authType?: "OAUTH" | "BASIC_AUTH" | "PERSONAL_ACCESS_TOKEN" | string;
}

export type _UnmarshalledSourceCredentialsInfo = _SourceCredentialsInfo;
