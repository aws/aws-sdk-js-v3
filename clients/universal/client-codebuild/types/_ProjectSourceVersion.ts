/**
 * <p> A source identifier and its corresponding version. </p>
 */
export interface _ProjectSourceVersion {
  /**
   * <p>An identifier for a source in the build project.</p>
   */
  sourceIdentifier: string;

  /**
   * <p>The source version for the corresponding source identifier. If specified, must be one of:</p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example, <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion: string;
}

export type _UnmarshalledProjectSourceVersion = _ProjectSourceVersion;
