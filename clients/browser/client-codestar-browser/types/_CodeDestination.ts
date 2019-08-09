import {
  _CodeCommitCodeDestination,
  _UnmarshalledCodeCommitCodeDestination
} from "./_CodeCommitCodeDestination";
import {
  _GitHubCodeDestination,
  _UnmarshalledGitHubCodeDestination
} from "./_GitHubCodeDestination";

/**
 * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.</p>
 */
export interface _CodeDestination {
  /**
   * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.</p>
   */
  codeCommit?: _CodeCommitCodeDestination;

  /**
   * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.</p>
   */
  gitHub?: _GitHubCodeDestination;
}

export interface _UnmarshalledCodeDestination extends _CodeDestination {
  /**
   * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.</p>
   */
  codeCommit?: _UnmarshalledCodeCommitCodeDestination;

  /**
   * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation.</p>
   */
  gitHub?: _UnmarshalledGitHubCodeDestination;
}
