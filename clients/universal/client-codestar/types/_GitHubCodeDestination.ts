/**
 * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.</p>
 */
export interface _GitHubCodeDestination {
  /**
   * <p>Name of the GitHub repository to be created in AWS CodeStar.</p>
   */
  name: string;

  /**
   * <p>Description for the GitHub repository to be created in AWS CodeStar. This description displays in GitHub after the repository is created.</p>
   */
  description?: string;

  /**
   * <p>The type of GitHub repository to be created in AWS CodeStar. Valid values are User or Organization.</p>
   */
  type: string;

  /**
   * <p>The GitHub username for the owner of the GitHub repository to be created in AWS CodeStar. If this repository should be owned by a GitHub organization, provide its name.</p>
   */
  owner: string;

  /**
   * <p>Whether the GitHub repository is to be a private repository.</p>
   */
  privateRepository: boolean;

  /**
   * <p>Whether to enable issues for the GitHub repository.</p>
   */
  issuesEnabled: boolean;

  /**
   * <p>The GitHub user's personal access token for the GitHub repository.</p>
   */
  token: string;
}

export type _UnmarshalledGitHubCodeDestination = _GitHubCodeDestination;
