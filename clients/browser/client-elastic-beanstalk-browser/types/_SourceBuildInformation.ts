/**
 * <p>Location of the source code for an application version.</p>
 */
export interface _SourceBuildInformation {
  /**
   * <p>The type of repository.</p> <ul> <li> <p> <code>Git</code> </p> </li> <li> <p> <code>Zip</code> </p> </li> </ul>
   */
  SourceType: "Git" | "Zip" | string;

  /**
   * <p>Location where the repository is stored.</p> <ul> <li> <p> <code>CodeCommit</code> </p> </li> <li> <p> <code>S3</code> </p> </li> </ul>
   */
  SourceRepository: "CodeCommit" | "S3" | string;

  /**
   * <p>The location of the source code, as a formatted string, depending on the value of <code>SourceRepository</code> </p> <ul> <li> <p>For <code>CodeCommit</code>, the format is the repository name and commit ID, separated by a forward slash. For example, <code>my-git-repo/265cfa0cf6af46153527f55d6503ec030551f57a</code>.</p> </li> <li> <p>For <code>S3</code>, the format is the S3 bucket name and object key, separated by a forward slash. For example, <code>my-s3-bucket/Folders/my-source-file</code>.</p> </li> </ul>
   */
  SourceLocation: string;
}

export type _UnmarshalledSourceBuildInformation = _SourceBuildInformation;
