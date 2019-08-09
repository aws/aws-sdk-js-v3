/**
 * <p>Represents revision details of an artifact. </p>
 */
export interface _ArtifactRevision {
  /**
   * <p>The name of an artifact. This name might be system-generated, such as "MyApp", or might be defined by the user when an action is created.</p>
   */
  name?: string;

  /**
   * <p>The revision ID of the artifact.</p>
   */
  revisionId?: string;

  /**
   * <p>An additional identifier for a revision, such as a commit date or, for artifacts stored in Amazon S3 buckets, the ETag value.</p>
   */
  revisionChangeIdentifier?: string;

  /**
   * <p>Summary information about the most recent revision of the artifact. For GitHub and AWS CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a <code>codepipeline-artifact-revision-summary</code> key specified in the object metadata.</p>
   */
  revisionSummary?: string;

  /**
   * <p>The date and time when the most recent revision of the artifact was created, in timestamp format.</p>
   */
  created?: Date | string | number;

  /**
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or AWS CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   */
  revisionUrl?: string;
}

export interface _UnmarshalledArtifactRevision extends _ArtifactRevision {
  /**
   * <p>The date and time when the most recent revision of the artifact was created, in timestamp format.</p>
   */
  created?: Date;
}
