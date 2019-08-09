import { _CodeSource, _UnmarshalledCodeSource } from "./_CodeSource";
import {
  _CodeDestination,
  _UnmarshalledCodeDestination
} from "./_CodeDestination";

/**
 * <p>Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.</p>
 */
export interface _Code {
  /**
   * <p>The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.</p>
   */
  source: _CodeSource;

  /**
   * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.</p>
   */
  destination: _CodeDestination;
}

export interface _UnmarshalledCode extends _Code {
  /**
   * <p>The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.</p>
   */
  source: _UnmarshalledCodeSource;

  /**
   * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.</p>
   */
  destination: _UnmarshalledCodeDestination;
}
