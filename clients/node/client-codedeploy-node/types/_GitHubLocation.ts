/**
 * <p>Information about the location of application artifacts stored in GitHub.</p>
 */
export interface _GitHubLocation {
  /**
   * <p>The GitHub account and repository pair that stores a reference to the commit that represents the bundled artifacts for the application revision. </p> <p>Specified as account/repository.</p>
   */
  repository?: string;

  /**
   * <p>The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.</p>
   */
  commitId?: string;
}

export type _UnmarshalledGitHubLocation = _GitHubLocation;
