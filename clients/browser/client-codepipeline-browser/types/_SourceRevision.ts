/**
 * <p>Information about the version (or revision) of a source artifact that initiated a pipeline execution.</p>
 */
export interface _SourceRevision {
  /**
   * <p>The name of the action that processed the revision to the source artifact.</p>
   */
  actionName: string;

  /**
   * <p>The system-generated unique ID that identifies the revision number of the artifact.</p>
   */
  revisionId?: string;

  /**
   * <p>Summary information about the most recent revision of the artifact. For GitHub and AWS CodeCommit repositories, the commit message. For Amazon S3 buckets or actions, the user-provided content of a <code>codepipeline-artifact-revision-summary</code> key specified in the object metadata.</p>
   */
  revisionSummary?: string;

  /**
   * <p>The commit ID for the artifact revision. For artifacts stored in GitHub or AWS CodeCommit repositories, the commit ID is linked to a commit details page.</p>
   */
  revisionUrl?: string;
}

export type _UnmarshalledSourceRevision = _SourceRevision;
