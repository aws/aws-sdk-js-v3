// smithy-typescript generated code
import {
  ApprovalState,
  BatchGetRepositoriesErrorCodeEnum,
  ChangeTypeEnum,
  ConflictDetailLevelTypeEnum,
  ConflictResolutionStrategyTypeEnum,
  FileModeTypeEnum,
  MergeOptionTypeEnum,
  ObjectTypeEnum,
  OrderEnum,
  OverrideStatus,
  PullRequestEventType,
  PullRequestStatusEnum,
  RelativeFileVersionEnum,
  ReplacementTypeEnum,
  RepositoryTriggerEventEnum,
  SortByEnum,
} from "./enums";

/**
 * <p>Returns information about a specific approval on a pull request.</p>
 * @public
 */
export interface Approval {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  userArn?: string | undefined;

  /**
   * <p>The state of the approval, APPROVE or REVOKE. REVOKE states are not stored.</p>
   * @public
   */
  approvalState?: ApprovalState | undefined;
}

/**
 * <p>Returns information about the template that created the approval rule for a pull request.</p>
 * @public
 */
export interface OriginApprovalRuleTemplate {
  /**
   * <p>The ID of the template that created the approval rule.</p>
   * @public
   */
  approvalRuleTemplateId?: string | undefined;

  /**
   * <p>The name of the template that created the approval rule.</p>
   * @public
   */
  approvalRuleTemplateName?: string | undefined;
}

/**
 * <p>Returns information about an approval rule.</p>
 * @public
 */
export interface ApprovalRule {
  /**
   * <p>The system-generated ID of the approval rule.</p>
   * @public
   */
  approvalRuleId?: string | undefined;

  /**
   * <p>The name of the approval rule.</p>
   * @public
   */
  approvalRuleName?: string | undefined;

  /**
   * <p>The content of the approval rule.</p>
   * @public
   */
  approvalRuleContent?: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule.</p>
   * @public
   */
  ruleContentSha256?: string | undefined;

  /**
   * <p>The date the approval rule was most recently changed, in timestamp format.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The date the approval rule was created, in timestamp format.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule.</p>
   * @public
   */
  lastModifiedUser?: string | undefined;

  /**
   * <p>The approval rule template used to create the rule.</p>
   * @public
   */
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate | undefined;
}

/**
 * <p>Returns information about an event for an approval rule.</p>
 * @public
 */
export interface ApprovalRuleEventMetadata {
  /**
   * <p>The name of the approval rule.</p>
   * @public
   */
  approvalRuleName?: string | undefined;

  /**
   * <p>The system-generated ID of the approval rule.</p>
   * @public
   */
  approvalRuleId?: string | undefined;

  /**
   * <p>The content of the approval rule.</p>
   * @public
   */
  approvalRuleContent?: string | undefined;
}

/**
 * <p>Returns information about an override event for approval rules for a pull request.</p>
 * @public
 */
export interface ApprovalRuleOverriddenEventMetadata {
  /**
   * <p>The revision ID of the pull request when the override event occurred.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The status of the override event.</p>
   * @public
   */
  overrideStatus?: OverrideStatus | undefined;
}

/**
 * <p>Returns information about an approval rule template.</p>
 * @public
 */
export interface ApprovalRuleTemplate {
  /**
   * <p>The system-generated ID of the approval rule template.</p>
   * @public
   */
  approvalRuleTemplateId?: string | undefined;

  /**
   * <p>The name of the approval rule template.</p>
   * @public
   */
  approvalRuleTemplateName?: string | undefined;

  /**
   * <p>The description of the approval rule template.</p>
   * @public
   */
  approvalRuleTemplateDescription?: string | undefined;

  /**
   * <p>The content of the approval rule template.</p>
   * @public
   */
  approvalRuleTemplateContent?: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule template.</p>
   * @public
   */
  ruleContentSha256?: string | undefined;

  /**
   * <p>The date the approval rule template was most recently changed, in timestamp format.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The date the approval rule template was created, in timestamp format.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.</p>
   * @public
   */
  lastModifiedUser?: string | undefined;
}

/**
 * <p>Returns information about a change in the approval state for a pull request.</p>
 * @public
 */
export interface ApprovalStateChangedEventMetadata {
  /**
   * <p>The revision ID of the pull request when the approval state changed.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The approval status for the pull request.</p>
   * @public
   */
  approvalStatus?: ApprovalState | undefined;
}

/**
 * @public
 */
export interface AssociateApprovalRuleTemplateWithRepositoryInput {
  /**
   * <p>The name for the approval rule template. </p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The name of the repository that you want to associate with the template.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  /**
   * <p>The name of the template you want to associate with one or more repositories.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The names of the repositories you want to associate with the template.</p>
   *          <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   * @public
   */
  repositoryNames: string[] | undefined;
}

/**
 * <p>Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.</p>
 * @public
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  /**
   * <p>The name of the repository where the association was not made.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An error code that specifies whether the repository name was not valid or not found.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>An error message that provides details about why the repository name was not found or not valid.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  /**
   * <p>A list of names of the repositories that have been associated with the template.</p>
   * @public
   */
  associatedRepositoryNames: string[] | undefined;

  /**
   * <p>A list of any errors that might have occurred while attempting to create the association between the template and the repositories.</p>
   * @public
   */
  errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[] | undefined;
}

/**
 * @public
 */
export interface BatchDescribeMergeConflictsInput {
  /**
   * <p>The name of the repository that contains the merge conflicts you want to review.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   * @public
   */
  maxMergeHunks?: number | undefined;

  /**
   * <p>The maximum number of files to include in the output.</p>
   * @public
   */
  maxConflictFiles?: number | undefined;

  /**
   * <p>The path of the target files used to describe the conflicts. If not specified, the default is all conflict files.</p>
   * @public
   */
  filePaths?: string[] | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about file modes in a merge or pull request.</p>
 * @public
 */
export interface FileModes {
  /**
   * <p>The file mode of a file in the source of a merge or pull request.</p>
   * @public
   */
  source?: FileModeTypeEnum | undefined;

  /**
   * <p>The file mode of a file in the destination of a merge or pull request.</p>
   * @public
   */
  destination?: FileModeTypeEnum | undefined;

  /**
   * <p>The file mode of a file in the base of a merge or pull request.</p>
   * @public
   */
  base?: FileModeTypeEnum | undefined;
}

/**
 * <p>Information about the size of files in a merge or pull request.</p>
 * @public
 */
export interface FileSizes {
  /**
   * <p>The  size of a file in the source of a merge or pull request.</p>
   * @public
   */
  source?: number | undefined;

  /**
   * <p>The size of a file in the destination of a merge or pull request.</p>
   * @public
   */
  destination?: number | undefined;

  /**
   * <p>The size of a file in the base of a merge or pull request.</p>
   * @public
   */
  base?: number | undefined;
}

/**
 * <p>Information about whether a file is binary or textual in a merge or pull request operation.</p>
 * @public
 */
export interface IsBinaryFile {
  /**
   * <p>The binary or non-binary status of file in the source of a merge or pull request.</p>
   * @public
   */
  source?: boolean | undefined;

  /**
   * <p>The binary or non-binary status of a file in the destination of a merge or pull request.</p>
   * @public
   */
  destination?: boolean | undefined;

  /**
   * <p>The binary or non-binary status of a file in the base of a merge or pull request.</p>
   * @public
   */
  base?: boolean | undefined;
}

/**
 * <p>Information about the file operation conflicts in a merge operation.</p>
 * @public
 */
export interface MergeOperations {
  /**
   * <p>The operation (add, modify, or delete) on a file in the source of a merge or pull
   *             request.</p>
   * @public
   */
  source?: ChangeTypeEnum | undefined;

  /**
   * <p>The operation on a file in the destination of a merge or pull request.</p>
   * @public
   */
  destination?: ChangeTypeEnum | undefined;
}

/**
 * <p>Information about the type of an object in a merge operation.</p>
 * @public
 */
export interface ObjectTypes {
  /**
   * <p>The type of the object in the source branch.</p>
   * @public
   */
  source?: ObjectTypeEnum | undefined;

  /**
   * <p>The type of the object in the destination branch.</p>
   * @public
   */
  destination?: ObjectTypeEnum | undefined;

  /**
   * <p>The type of the object in the base commit of the merge.</p>
   * @public
   */
  base?: ObjectTypeEnum | undefined;
}

/**
 * <p>Information about the metadata for a conflict in a merge operation.</p>
 * @public
 */
export interface ConflictMetadata {
  /**
   * <p>The path of the file that contains conflicts.</p>
   * @public
   */
  filePath?: string | undefined;

  /**
   * <p>The file sizes of the file in the source, destination, and base of the merge.</p>
   * @public
   */
  fileSizes?: FileSizes | undefined;

  /**
   * <p>The file modes of the file in the source, destination, and base of the merge.</p>
   * @public
   */
  fileModes?: FileModes | undefined;

  /**
   * <p>Information about any object type conflicts in a merge operation.</p>
   * @public
   */
  objectTypes?: ObjectTypes | undefined;

  /**
   * <p>The number of conflicts, including both hunk conflicts and metadata conflicts.</p>
   * @public
   */
  numberOfConflicts?: number | undefined;

  /**
   * <p>A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.</p>
   * @public
   */
  isBinaryFile?: IsBinaryFile | undefined;

  /**
   * <p>A boolean value indicating whether there are conflicts in the content of a file.</p>
   * @public
   */
  contentConflict?: boolean | undefined;

  /**
   * <p>A boolean value indicating whether there are conflicts in the file mode of a file.</p>
   * @public
   */
  fileModeConflict?: boolean | undefined;

  /**
   * <p>A boolean value (true or false) indicating whether there are conflicts between the branches in the object type of a file, folder, or submodule.</p>
   * @public
   */
  objectTypeConflict?: boolean | undefined;

  /**
   * <p>Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.</p>
   * @public
   */
  mergeOperations?: MergeOperations | undefined;
}

/**
 * <p>Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.</p>
 * @public
 */
export interface MergeHunkDetail {
  /**
   * <p>The start position of the hunk in the merge result.</p>
   * @public
   */
  startLine?: number | undefined;

  /**
   * <p>The end position of the hunk in the merge result.</p>
   * @public
   */
  endLine?: number | undefined;

  /**
   * <p>The base-64 encoded content of the hunk merged region that might contain a
   *             conflict.</p>
   * @public
   */
  hunkContent?: string | undefined;
}

/**
 * <p>Information about merge hunks in a merge or pull request operation.</p>
 * @public
 */
export interface MergeHunk {
  /**
   * <p>A Boolean value indicating whether a combination of hunks contains a conflict.
   *             Conflicts occur when the same file or the same lines in a file were modified in both the
   *             source and destination of a merge or pull request. Valid values include true, false, and
   *             null. True when the hunk represents a conflict and one or more files contains a line
   *             conflict. File mode conflicts in a merge do not set this to true.</p>
   * @public
   */
  isConflict?: boolean | undefined;

  /**
   * <p>Information about the merge hunk in the source of a merge or pull request.</p>
   * @public
   */
  source?: MergeHunkDetail | undefined;

  /**
   * <p>Information about the merge hunk in the destination of a merge or pull request.</p>
   * @public
   */
  destination?: MergeHunkDetail | undefined;

  /**
   * <p>Information about the merge hunk in the base of a merge or pull request.</p>
   * @public
   */
  base?: MergeHunkDetail | undefined;
}

/**
 * <p>Information about conflicts in a merge operation.</p>
 * @public
 */
export interface Conflict {
  /**
   * <p>Metadata about a conflict in a merge operation.</p>
   * @public
   */
  conflictMetadata?: ConflictMetadata | undefined;

  /**
   * <p>A list of hunks that contain the differences between files or lines causing the conflict.</p>
   * @public
   */
  mergeHunks?: MergeHunk[] | undefined;
}

/**
 * <p>Returns information about errors in a BatchDescribeMergeConflicts operation.</p>
 * @public
 */
export interface BatchDescribeMergeConflictsError {
  /**
   * <p>The path to the file.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The name of the exception.</p>
   * @public
   */
  exceptionName: string | undefined;

  /**
   * <p>The message provided by the exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeMergeConflictsOutput {
  /**
   * <p>A list of conflicts for each file, including the conflict metadata and the hunks of the differences between the files.</p>
   * @public
   */
  conflicts: Conflict[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of any errors returned while describing the merge conflicts for each file.</p>
   * @public
   */
  errors?: BatchDescribeMergeConflictsError[] | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   * @public
   */
  baseCommitId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  /**
   * <p>The name of the template that you want to disassociate from one or more repositories.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The repository names that you want to disassociate from the approval rule
   *             template.</p>
   *          <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   * @public
   */
  repositoryNames: string[] | undefined;
}

/**
 * <p>Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.</p>
 * @public
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  /**
   * <p>The name of the repository where the association with the template was not able to be removed.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An error code that specifies whether the repository name was not valid or not
   *             found.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>An error message that provides details about why the repository name was either not found or not valid.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  /**
   * <p>A list of repository names that have had their association with the template
   *             removed.</p>
   * @public
   */
  disassociatedRepositoryNames: string[] | undefined;

  /**
   * <p>A list of any errors that might have occurred while attempting to remove the association between the template and the repositories.</p>
   * @public
   */
  errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCommitsInput {
  /**
   * <p>The full commit IDs of the commits to get information about.</p>
   *          <note>
   *             <p>You must supply the full SHA IDs of each commit. You cannot use shortened SHA
   *                 IDs.</p>
   *          </note>
   * @public
   */
  commitIds: string[] | undefined;

  /**
   * <p>The name of the repository that contains the commits.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * <p>Information about the user who made a specified commit.</p>
 * @public
 */
export interface UserInfo {
  /**
   * <p>The name of the user who made the specified commit.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The email address associated with the user who made the commit, if any.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The date when the specified commit was commited, in timestamp format with GMT offset.</p>
   * @public
   */
  date?: string | undefined;
}

/**
 * <p>Returns information about a specific commit.</p>
 * @public
 */
export interface Commit {
  /**
   * <p>The full SHA ID of the specified commit. </p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>Tree information for the specified commit.</p>
   * @public
   */
  treeId?: string | undefined;

  /**
   * <p>A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.</p>
   * @public
   */
  parents?: string[] | undefined;

  /**
   * <p>The commit message associated with the specified commit.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Information about the author of the specified commit. Information includes
   *             the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured
   *             in Git.</p>
   * @public
   */
  author?: UserInfo | undefined;

  /**
   * <p>Information about the person who committed the specified commit, also known as the committer. Information includes
   *         the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured
   *         in Git.</p>
   *          <p>For more information
   *             about the difference between an author and a committer in Git, see <a href="http://git-scm.com/book/ch2-3.html">Viewing the Commit History</a> in Pro Git
   *             by Scott Chacon and Ben Straub.</p>
   * @public
   */
  committer?: UserInfo | undefined;

  /**
   * <p>Any other data associated with the specified commit.</p>
   * @public
   */
  additionalData?: string | undefined;
}

/**
 * <p>Returns information about errors in a BatchGetCommits operation.</p>
 * @public
 */
export interface BatchGetCommitsError {
  /**
   * <p>A commit ID that either could not be found or was not in a valid format.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>An error code that specifies whether the commit ID was not valid or not found.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>An error message that provides detail about why the commit ID either was not found or was not valid.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCommitsOutput {
  /**
   * <p>An array of commit data type objects, each of which contains information about a specified commit.</p>
   * @public
   */
  commits?: Commit[] | undefined;

  /**
   * <p>Returns any commit IDs for which information could not be found. For example, if one
   *             of the commit IDs was a shortened SHA ID or that commit was not found in the specified
   *             repository, the ID returns an error object with more information.</p>
   * @public
   */
  errors?: BatchGetCommitsError[] | undefined;
}

/**
 * <p>Represents the input of a batch get repositories operation.</p>
 * @public
 */
export interface BatchGetRepositoriesInput {
  /**
   * <p>The names of the repositories to get information about.</p>
   *          <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   * @public
   */
  repositoryNames: string[] | undefined;
}

/**
 * <p>Returns information about errors in a BatchGetRepositories operation.</p>
 * @public
 */
export interface BatchGetRepositoriesError {
  /**
   * <p>The ID of a repository that either could not be found or was not in a valid state.</p>
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * <p>The name of a repository that either could not be found or was not in a valid state.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>An error code that specifies the type of failure.</p>
   * @public
   */
  errorCode?: BatchGetRepositoriesErrorCodeEnum | undefined;

  /**
   * <p>An error message that provides detail about why the repository either was not found or was not in a valid state.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Information about a repository.</p>
 * @public
 */
export interface RepositoryMetadata {
  /**
   * <p>The ID of the Amazon Web Services account associated with the repository.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The ID of the repository.</p>
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * <p>The repository's name.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>A comment or description about the repository.</p>
   * @public
   */
  repositoryDescription?: string | undefined;

  /**
   * <p>The repository's default branch name.</p>
   * @public
   */
  defaultBranch?: string | undefined;

  /**
   * <p>The date and time the repository was last modified, in timestamp format.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time the repository was created, in timestamp format.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The URL to use for cloning the repository over HTTPS.</p>
   * @public
   */
  cloneUrlHttp?: string | undefined;

  /**
   * <p>The URL to use for cloning the repository over SSH.</p>
   * @public
   */
  cloneUrlSsh?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the Key Management Service encryption key used to encrypt and decrypt the repository.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>Represents the output of a batch get repositories operation.</p>
 * @public
 */
export interface BatchGetRepositoriesOutput {
  /**
   * <p>A list of repositories returned by the batch get repositories operation.</p>
   * @public
   */
  repositories?: RepositoryMetadata[] | undefined;

  /**
   * <p>Returns a list of repository names for which information could not be found.</p>
   * @public
   */
  repositoriesNotFound?: string[] | undefined;

  /**
   * <p>Returns information about any errors returned when attempting to retrieve information about the repositories.</p>
   * @public
   */
  errors?: BatchGetRepositoriesError[] | undefined;
}

/**
 * <p>Returns information about a specific Git blob object.</p>
 * @public
 */
export interface BlobMetadata {
  /**
   * <p>The full ID of the blob.</p>
   * @public
   */
  blobId?: string | undefined;

  /**
   * <p>The path to the blob and associated file name, if any.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The file mode permissions of the blob. File mode permission codes include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>100644</code> indicates read/write</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>100755</code> indicates read/write/execute</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>160000</code> indicates a submodule</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>120000</code> indicates a symlink</p>
   *             </li>
   *          </ul>
   * @public
   */
  mode?: string | undefined;
}

/**
 * <p>Returns information about a branch.</p>
 * @public
 */
export interface BranchInfo {
  /**
   * <p>The name of the branch.</p>
   * @public
   */
  branchName?: string | undefined;

  /**
   * <p>The ID of the last commit made to the branch.</p>
   * @public
   */
  commitId?: string | undefined;
}

/**
 * @public
 */
export interface CreateApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template. Provide descriptive names, because this name
   *             is applied to the approval rules created automatically in associated
   *             repositories.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The content of the approval rule that is created on pull requests in associated
   *             repositories. If you specify one or more destination references (branches), approval
   *             rules are created in an associated repository only if their destination references
   *             (branches) match those specified in the template.</p>
   *          <note>
   *             <p>When you create the content of the approval rule template, you can specify
   *                 approvers in an approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an Amazon Web Services account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the Amazon Web Services account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following are counted as
   *                         approvals coming from that user:</p>
   *                   <ul>
   *                      <li>
   *                         <p>An IAM user in the account
   *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                      <li>
   *                         <p>A federated user identified in IAM as Mary_Major
   *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                   </ul>
   *                   <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          </note>
   * @public
   */
  approvalRuleTemplateContent: string | undefined;

  /**
   * <p>The description of the approval rule template. Consider providing a description that
   *             explains what this template does and when it might be appropriate to associate it with
   *             repositories.</p>
   * @public
   */
  approvalRuleTemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the created approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * <p>Represents the input of a create branch operation.</p>
 * @public
 */
export interface CreateBranchInput {
  /**
   * <p>The name of the repository in which you want to create the new branch.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the new branch to create.</p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The ID of the commit to point the new branch to.</p>
   * @public
   */
  commitId: string | undefined;
}

/**
 * <p>A file that is deleted as part of a commit.</p>
 * @public
 */
export interface DeleteFileEntry {
  /**
   * <p>The full path of the file to be deleted, including the name of the file.</p>
   * @public
   */
  filePath: string | undefined;
}

/**
 * <p>Information about a source file that is part of changes made in a commit.</p>
 * @public
 */
export interface SourceFileSpecifier {
  /**
   * <p>The full path to the file, including the name of the file.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>Whether to remove the source file from the parent commit.</p>
   * @public
   */
  isMove?: boolean | undefined;
}

/**
 * <p>Information about a file added or updated as part of a commit.</p>
 * @public
 */
export interface PutFileEntry {
  /**
   * <p>The full path to the file in the repository, including the name of the file.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;

  /**
   * <p>The content of the file, if a source file is not specified.</p>
   * @public
   */
  fileContent?: Uint8Array | undefined;

  /**
   * <p>The name and full path of the file that contains the changes you want to make as part of the commit,
   *         if you are not providing the file content directly.</p>
   * @public
   */
  sourceFile?: SourceFileSpecifier | undefined;
}

/**
 * <p>Information about the file mode changes.</p>
 * @public
 */
export interface SetFileModeEntry {
  /**
   * <p>The full path to the file, including the name of the file.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The file mode for the file.</p>
   * @public
   */
  fileMode: FileModeTypeEnum | undefined;
}

/**
 * @public
 */
export interface CreateCommitInput {
  /**
   * <p>The name of the repository where you create the commit.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where you create the commit.</p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The ID of the commit that is the parent of the commit you create. Not required if this
   *             is an empty repository.</p>
   * @public
   */
  parentCommitId?: string | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person who created the commit.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The commit message you want to include in the commit. Commit messages are limited to
   *             256 KB. If no message is specified, a default message is used.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a ..gitkeep file is created for empty folders.
   *             The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>The files to add or update in this commit.</p>
   * @public
   */
  putFiles?: PutFileEntry[] | undefined;

  /**
   * <p>The files to delete in this commit. These files still exist in earlier commits.</p>
   * @public
   */
  deleteFiles?: DeleteFileEntry[] | undefined;

  /**
   * <p>The file modes to update for files in this commit.</p>
   * @public
   */
  setFileModes?: SetFileModeEntry[] | undefined;
}

/**
 * <p>A file to be added, updated, or deleted as part of a commit.</p>
 * @public
 */
export interface FileMetadata {
  /**
   * <p>The full path to the file to be added or updated, including the name of the
   *             file.</p>
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * <p>The blob ID that contains the file information.</p>
   * @public
   */
  blobId?: string | undefined;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * @public
 */
export interface CreateCommitOutput {
  /**
   * <p>The full commit ID of the commit that contains your committed file changes.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.</p>
   * @public
   */
  treeId?: string | undefined;

  /**
   * <p>The files added as part of the committed file changes.</p>
   * @public
   */
  filesAdded?: FileMetadata[] | undefined;

  /**
   * <p>The files updated as part of the commited file changes.</p>
   * @public
   */
  filesUpdated?: FileMetadata[] | undefined;

  /**
   * <p>The files deleted as part of the committed file changes.</p>
   * @public
   */
  filesDeleted?: FileMetadata[] | undefined;
}

/**
 * <p>Returns information about a target for a pull request.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The name of the repository that contains the pull request.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   * @public
   */
  sourceReference: string | undefined;

  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch.</p>
   * @public
   */
  destinationReference?: string | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestInput {
  /**
   * <p>The title of the pull request. This title is used to identify the pull request to
   *             other users in the repository.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>A description of the pull request.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The targets for the pull request, including the source of the code to be reviewed (the
   *             source branch) and the destination where the creator of the pull request intends the
   *             code to be merged after the pull request is closed (the destination branch).</p>
   * @public
   */
  targets: Target[] | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   *          <note>
   *             <p>The Amazon Web ServicesSDKs prepopulate client request tokens. If you are using an Amazon Web ServicesSDK, an
   *                 idempotency token is created for you.</p>
   *          </note>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * <p>Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.</p>
 * @public
 */
export interface MergeMetadata {
  /**
   * <p>A Boolean value indicating whether the merge has been made.</p>
   * @public
   */
  isMerged?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who merged the branches.</p>
   * @public
   */
  mergedBy?: string | undefined;

  /**
   * <p>The commit ID for the merge commit, if any.</p>
   * @public
   */
  mergeCommitId?: string | undefined;

  /**
   * <p>The merge strategy used in the merge.</p>
   * @public
   */
  mergeOption?: MergeOptionTypeEnum | undefined;
}

/**
 * <p>Returns information about a pull request target.</p>
 * @public
 */
export interface PullRequestTarget {
  /**
   * <p>The name of the repository that contains the pull request source and destination branches.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   * @public
   */
  sourceReference?: string | undefined;

  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch. </p>
   * @public
   */
  destinationReference?: string | undefined;

  /**
   * <p>The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.</p>
   * @public
   */
  destinationCommit?: string | undefined;

  /**
   * <p>The full commit ID of the tip of the source branch used to create the pull request. If
   *             the pull request branch is updated by a push while the pull request is open, the commit
   *             ID changes to reflect the new tip of the branch.</p>
   * @public
   */
  sourceCommit?: string | undefined;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   * @public
   */
  mergeBase?: string | undefined;

  /**
   * <p>Returns metadata about the state of the merge, including whether the merge has been made.</p>
   * @public
   */
  mergeMetadata?: MergeMetadata | undefined;
}

/**
 * <p>Returns information about a pull request.</p>
 * @public
 */
export interface PullRequest {
  /**
   * <p>The system-generated ID of the pull request. </p>
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * <p>The user-defined title of the pull request. This title is displayed in the list of
   *             pull requests to other repository users.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The day and time of the last user or system activity on the pull request, in timestamp format.</p>
   * @public
   */
  lastActivityDate?: Date | undefined;

  /**
   * <p>The date and time the pull request was originally created, in timestamp format.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The status of the pull request. Pull request status can only change from <code>OPEN</code> to <code>CLOSED</code>.</p>
   * @public
   */
  pullRequestStatus?: PullRequestStatusEnum | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the pull request.</p>
   * @public
   */
  authorArn?: string | undefined;

  /**
   * <p>The targets of the pull request, including the source branch and destination branch for the pull request.</p>
   * @public
   */
  pullRequestTargets?: PullRequestTarget[] | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The system-generated revision ID for the pull request.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The approval rules applied to the pull request.</p>
   * @public
   */
  approvalRules?: ApprovalRule[] | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestOutput {
  /**
   * <p>Information about the newly created pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestApprovalRuleInput {
  /**
   * <p>The system-generated ID of the pull request for which you want to create the approval rule.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name for the approval rule.</p>
   * @public
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The content of the approval rule, including the number of approvals needed and the structure of an approval pool defined for approvals, if any. For more information
   *         about approval pools, see the CodeCommit User Guide.</p>
   *          <note>
   *             <p>When you create the content of the approval rule, you can specify approvers in an
   *                 approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an Amazon Web Services account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the Amazon Web Services account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following would be counted
   *                         as approvals coming from that user:</p>
   *                   <ul>
   *                      <li>
   *                         <p>An IAM user in the account
   *                                     (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                      <li>
   *                         <p>A federated user identified in IAM as Mary_Major
   *                                     (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                   </ul>
   *                   <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                 Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          </note>
   * @public
   */
  approvalRuleContent: string | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestApprovalRuleOutput {
  /**
   * <p>Information about the created approval rule.</p>
   * @public
   */
  approvalRule: ApprovalRule | undefined;
}

/**
 * <p>Represents the input of a create repository operation.</p>
 * @public
 */
export interface CreateRepositoryInput {
  /**
   * <p>The name of the new repository to be created.</p>
   *          <note>
   *             <p>The repository name must be unique across the calling Amazon Web Services account. Repository names
   *                 are limited to 100 alphanumeric, dash, and underscore characters, and cannot include
   *                 certain characters. For more information about the limits on repository names, see
   *                     <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>. The
   *                 suffix .git is prohibited.</p>
   *          </note>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>A comment or description about the new repository.</p>
   *          <note>
   *             <p>The description field for a repository accepts all HTML characters and all valid
   *                 Unicode characters. Applications that do not HTML-encode the description and display
   *                 it in a webpage can expose users to potentially malicious code. Make sure that you
   *                 HTML-encode the description field in any application that uses this API to display
   *                 the repository description on a webpage.</p>
   *          </note>
   * @public
   */
  repositoryDescription?: string | undefined;

  /**
   * <p>One or more tag key-value pairs to use when tagging this repository.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to
   *             programmatically retrieve a key ID. For more information about acceptable values for kmsKeyID, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html#KMS-Decrypt-request-KeyId">KeyId</a> in the Decrypt API description in
   *             the <i>Key Management Service API Reference</i>.</p>
   *          <p>If no key is specified, the default <code>aws/codecommit</code> Amazon Web Services managed key is used.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>Represents the output of a create repository operation.</p>
 * @public
 */
export interface CreateRepositoryOutput {
  /**
   * <p>Information about the newly created repository.</p>
   * @public
   */
  repositoryMetadata?: RepositoryMetadata | undefined;
}

/**
 * <p>Information about a replacement content entry in the conflict of a merge or pull request operation.</p>
 * @public
 */
export interface ReplaceContentEntry {
  /**
   * <p>The path of the conflicting file.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The replacement type to use when determining how to resolve the conflict.</p>
   * @public
   */
  replacementType: ReplacementTypeEnum | undefined;

  /**
   * <p>The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.</p>
   * @public
   */
  content?: Uint8Array | undefined;

  /**
   * <p>The file mode to apply during conflict resoltion.</p>
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
 *             resolving conflicts during a merge.</p>
 * @public
 */
export interface ConflictResolution {
  /**
   * <p>Files to have content replaced as part of the merge conflict resolution.</p>
   * @public
   */
  replaceContents?: ReplaceContentEntry[] | undefined;

  /**
   * <p>Files to be deleted as part of the merge conflict resolution.</p>
   * @public
   */
  deleteFiles?: DeleteFileEntry[] | undefined;

  /**
   * <p>File modes that are set as part of the merge conflict resolution.</p>
   * @public
   */
  setFileModes?: SetFileModeEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateUnreferencedMergeCommitInput {
  /**
   * <p>The name of the repository where you want to create the unreferenced merge commit.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The name of the author who created the unreferenced commit. This information is used
   *             as both the author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address for the person who created the unreferenced commit.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The commit message for the unreferenced commit.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface CreateUnreferencedMergeCommitOutput {
  /**
   * <p>The full commit ID of the commit that contains your merge results.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the merge results.</p>
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template to delete.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteApprovalRuleTemplateOutput {
  /**
   * <p>The system-generated ID of the deleted approval rule template. If the template has
   *             been previously deleted, the only response is a 200 OK.</p>
   * @public
   */
  approvalRuleTemplateId: string | undefined;
}

/**
 * <p>Represents the input of a delete branch operation.</p>
 * @public
 */
export interface DeleteBranchInput {
  /**
   * <p>The name of the repository that contains the branch to be deleted.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch to delete.</p>
   * @public
   */
  branchName: string | undefined;
}

/**
 * <p>Represents the output of a delete branch operation.</p>
 * @public
 */
export interface DeleteBranchOutput {
  /**
   * <p>Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.</p>
   * @public
   */
  deletedBranch?: BranchInfo | undefined;
}

/**
 * @public
 */
export interface DeleteCommentContentInput {
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *          or <a>GetCommentsForPullRequest</a>.</p>
   * @public
   */
  commentId: string | undefined;
}

/**
 * <p>Returns information about a specific comment.</p>
 * @public
 */
export interface Comment {
  /**
   * <p>The system-generated comment ID.</p>
   * @public
   */
  commentId?: string | undefined;

  /**
   * <p>The content of the comment.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>The ID of the comment for which this comment is a reply, if any.</p>
   * @public
   */
  inReplyTo?: string | undefined;

  /**
   * <p>The date and time the comment was created, in timestamp format.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date and time the comment was most recently modified, in timestamp format.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the person who posted the comment.</p>
   * @public
   */
  authorArn?: string | undefined;

  /**
   * <p>A Boolean value indicating whether the comment has been deleted.</p>
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The emoji reactions to a comment, if any, submitted by the user whose credentials are associated with the call to the API.</p>
   * @public
   */
  callerReactions?: string[] | undefined;

  /**
   * <p>A string to integer map that represents the number of individual users who have responded to a comment with the specified reactions.</p>
   * @public
   */
  reactionCounts?: Record<string, number> | undefined;
}

/**
 * @public
 */
export interface DeleteCommentContentOutput {
  /**
   * <p>Information about the comment you just deleted.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface DeleteFileInput {
  /**
   * <p>The name of the repository that contains the file to delete.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where the commit that deletes the file is made.</p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The fully qualified path to the file that to be deleted, including the full name and
   *             extension of that file. For example, /examples/file.md is a fully qualified path to a
   *             file named file.md in a folder named examples.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The ID of the commit that is the tip of the branch where you want to create the commit
   *             that deletes the file. This must be the HEAD commit for the branch. The commit that
   *             deletes the file is created from this commit ID.</p>
   * @public
   */
  parentCommitId: string | undefined;

  /**
   * <p>If a file is the only object in the folder or directory, specifies whether to delete
   *             the folder or directory that contains the file. By default, empty folders are deleted.
   *             This includes empty folders that are part of the directory structure. For example, if
   *             the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the
   *             last file in dir4 also deletes the empty folders dir4, dir3, and dir2.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>The commit message you want to include as part of deleting the file. Commit messages
   *             are limited to 256 KB. If no message is specified, a default message is used.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The name of the author of the commit that deletes the file. If no name is specified,
   *             the user's ARN is used as the author name and committer name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The email address for the commit that deletes the file. If no email address is
   *             specified, the email address is left blank.</p>
   * @public
   */
  email?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFileOutput {
  /**
   * <p>The full commit ID of the commit that contains the change that deletes the file.</p>
   * @public
   */
  commitId: string | undefined;

  /**
   * <p>The blob ID removed from the tree as part of deleting the file.</p>
   * @public
   */
  blobId: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the delete file change.</p>
   * @public
   */
  treeId: string | undefined;

  /**
   * <p>The fully qualified path to the file to be deleted, including the full name and
   *             extension of that file.</p>
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface DeletePullRequestApprovalRuleInput {
  /**
   * <p>The system-generated ID of the pull request that contains the approval rule you want to delete.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the approval rule you want to delete.</p>
   * @public
   */
  approvalRuleName: string | undefined;
}

/**
 * @public
 */
export interface DeletePullRequestApprovalRuleOutput {
  /**
   * <p>The ID of the deleted approval rule. </p>
   *          <note>
   *             <p>If the approval rule was deleted in an earlier API call, the response is 200 OK without
   *                 content.</p>
   *          </note>
   * @public
   */
  approvalRuleId: string | undefined;
}

/**
 * <p>Represents the input of a delete repository operation.</p>
 * @public
 */
export interface DeleteRepositoryInput {
  /**
   * <p>The name of the repository to delete.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * <p>Represents the output of a delete repository operation.</p>
 * @public
 */
export interface DeleteRepositoryOutput {
  /**
   * <p>The ID of the repository that was deleted.</p>
   * @public
   */
  repositoryId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMergeConflictsInput {
  /**
   * <p>The name of the repository where you want to get information about a merge conflict.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   * @public
   */
  maxMergeHunks?: number | undefined;

  /**
   * <p>The path of the target files used to describe the conflicts. </p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMergeConflictsOutput {
  /**
   * <p>Contains metadata about the conflicts found in the merge.</p>
   * @public
   */
  conflictMetadata: ConflictMetadata | undefined;

  /**
   * <p>A list of merge hunks of the differences between the files or lines.</p>
   * @public
   */
  mergeHunks: MergeHunk[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   * @public
   */
  baseCommitId?: string | undefined;
}

/**
 * @public
 */
export interface DescribePullRequestEventsInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>Optional. The pull request event type about which you want to return information.</p>
   * @public
   */
  pullRequestEventType?: PullRequestEventType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   * @public
   */
  actorArn?: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.
   *             The default is 100 events, which is also the maximum number of events that can be returned in a result.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Metadata about the pull request that is used when comparing the pull request source with its destination.</p>
 * @public
 */
export interface PullRequestCreatedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The commit ID on the source branch used when the pull request was created.</p>
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * <p>The commit ID of the tip of the branch specified as the destination branch when the pull request was created.</p>
   * @public
   */
  destinationCommitId?: string | undefined;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   * @public
   */
  mergeBase?: string | undefined;
}

/**
 * <p>Returns information about the change in the merge state for a pull request event. </p>
 * @public
 */
export interface PullRequestMergedStateChangedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The name of the branch that the pull request is merged into.</p>
   * @public
   */
  destinationReference?: string | undefined;

  /**
   * <p>Information about the merge state change event.</p>
   * @public
   */
  mergeMetadata?: MergeMetadata | undefined;
}

/**
 * <p>Information about an update to the source branch of a pull request.</p>
 * @public
 */
export interface PullRequestSourceReferenceUpdatedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was updated.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.</p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   * @public
   */
  mergeBase?: string | undefined;
}

/**
 * <p>Information about a change to the status of a pull request.</p>
 * @public
 */
export interface PullRequestStatusChangedEventMetadata {
  /**
   * <p>The changed status of the pull request.</p>
   * @public
   */
  pullRequestStatus?: PullRequestStatusEnum | undefined;
}

/**
 * <p>Returns information about a pull request event.</p>
 * @public
 */
export interface PullRequestEvent {
  /**
   * <p>The system-generated ID of the pull request.</p>
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * <p>The day and time of the pull request event, in timestamp format.</p>
   * @public
   */
  eventDate?: Date | undefined;

  /**
   * <p>The type of the pull request event (for example, a status change event
   *             (PULL_REQUEST_STATUS_CHANGED) or update event
   *             (PULL_REQUEST_SOURCE_REFERENCE_UPDATED)).</p>
   * @public
   */
  pullRequestEventType?: PullRequestEventType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   * @public
   */
  actorArn?: string | undefined;

  /**
   * <p>Information about the source and destination branches for the pull request.</p>
   * @public
   */
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata | undefined;

  /**
   * <p>Information about the change in status for the pull request event.</p>
   * @public
   */
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata | undefined;

  /**
   * <p>Information about the updated source branch for the pull request event. </p>
   * @public
   */
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata | undefined;

  /**
   * <p>Information about the change in mergability state for the pull request event.</p>
   * @public
   */
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata | undefined;

  /**
   * <p>Information about a pull request event.</p>
   * @public
   */
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata | undefined;

  /**
   * <p>Information about an approval state change for a pull request.</p>
   * @public
   */
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata | undefined;

  /**
   * <p>Information about an approval rule override event for a pull request.</p>
   * @public
   */
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata | undefined;
}

/**
 * @public
 */
export interface DescribePullRequestEventsOutput {
  /**
   * <p>Information about the pull request events.</p>
   * @public
   */
  pullRequestEvents: PullRequestEvent[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
  /**
   * <p>The name of the approval rule template to disassociate from a specified repository.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The name of the repository you want to disassociate from the template.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface EvaluatePullRequestApprovalRulesInput {
  /**
   * <p>The system-generated ID of the pull request you want to evaluate.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID for the pull request revision. To retrieve the most recent
   *             revision ID for a pull request, use
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>Returns information about the approval rules applied to a pull request and whether conditions have been met.</p>
 * @public
 */
export interface Evaluation {
  /**
   * <p>Whether the state of the pull request is approved.</p>
   * @public
   */
  approved?: boolean | undefined;

  /**
   * <p>Whether the approval rule requirements for the pull request have been overridden and no longer need to be met.</p>
   * @public
   */
  overridden?: boolean | undefined;

  /**
   * <p>The names of the approval rules that have had their conditions met.</p>
   * @public
   */
  approvalRulesSatisfied?: string[] | undefined;

  /**
   * <p>The names of the approval rules that have not had their conditions met.</p>
   * @public
   */
  approvalRulesNotSatisfied?: string[] | undefined;
}

/**
 * @public
 */
export interface EvaluatePullRequestApprovalRulesOutput {
  /**
   * <p>The result of the evaluation, including the names of the rules whose conditions have been met (if any), the names of the rules whose conditions have
   *         not been met (if any), whether the pull request is in the approved state, and whether the pull request approval rule has been set aside by an override. </p>
   * @public
   */
  evaluation: Evaluation | undefined;
}

/**
 * @public
 */
export interface GetApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template for which you want to get information.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface GetApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * <p>Represents the input of a get blob operation.</p>
 * @public
 */
export interface GetBlobInput {
  /**
   * <p>The name of the repository that contains the blob.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   * @public
   */
  blobId: string | undefined;
}

/**
 * <p>Represents the output of a get blob operation.</p>
 * @public
 */
export interface GetBlobOutput {
  /**
   * <p>The content of the blob, usually a file.</p>
   * @public
   */
  content: Uint8Array | undefined;
}

/**
 * <p>Represents the input of a get branch operation.</p>
 * @public
 */
export interface GetBranchInput {
  /**
   * <p>The name of the repository that contains the branch for which you want to retrieve information.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The name of the branch for which you want to retrieve information.</p>
   * @public
   */
  branchName?: string | undefined;
}

/**
 * <p>Represents the output of a get branch operation.</p>
 * @public
 */
export interface GetBranchOutput {
  /**
   * <p>The name of the branch.</p>
   * @public
   */
  branch?: BranchInfo | undefined;
}

/**
 * @public
 */
export interface GetCommentInput {
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   * @public
   */
  commentId: string | undefined;
}

/**
 * @public
 */
export interface GetCommentOutput {
  /**
   * <p>The contents of the comment.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface GetCommentReactionsInput {
  /**
   * <p>The ID of the comment for which you want to get reactions information.</p>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user or identity for which you want to get reaction information.</p>
   * @public
   */
  reactionUserArn?: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.  The default is the same as the allowed maximum, 1,000.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about the values for reactions to a comment. CodeCommit supports a limited set of reactions.</p>
 * @public
 */
export interface ReactionValueFormats {
  /**
   * <p>The Emoji Version 1.0 graphic of the reaction. These graphics are interpreted slightly differently on different operating systems.</p>
   * @public
   */
  emoji?: string | undefined;

  /**
   * <p>The emoji short code for the reaction. Short codes are interpreted slightly differently on different operating systems. </p>
   * @public
   */
  shortCode?: string | undefined;

  /**
   * <p>The Unicode codepoint for the reaction.</p>
   * @public
   */
  unicode?: string | undefined;
}

/**
 * <p>Information about the reaction values provided by users on a comment.</p>
 * @public
 */
export interface ReactionForComment {
  /**
   * <p>The reaction for a specified comment.</p>
   * @public
   */
  reaction?: ReactionValueFormats | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of users who have provided reactions to the comment.</p>
   * @public
   */
  reactionUsers?: string[] | undefined;

  /**
   * <p>A numerical count of users who reacted with the specified emoji whose identities have been subsequently deleted
   *             from IAM. While these IAM users or roles no longer exist, the reactions might still appear in total reaction counts.</p>
   * @public
   */
  reactionsFromDeletedUsersCount?: number | undefined;
}

/**
 * @public
 */
export interface GetCommentReactionsOutput {
  /**
   * <p>An array of reactions to the specified comment.</p>
   * @public
   */
  reactionsForComment: ReactionForComment[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCommentsForComparedCommitInput {
  /**
   * <p>The name of the repository where you want to compare commits.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * <p>An enumeration token that when provided in a request, returns the next batch of the results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The
   *             default is 100 comments, but you can configure up to 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Returns information about the location of a change or comment in the comparison between two commits or a pull request.</p>
 * @public
 */
export interface Location {
  /**
   * <p>The name of the file being compared, including its extension and subdirectory, if any.</p>
   * @public
   */
  filePath?: string | undefined;

  /**
   * <p>The position of a change in a compared file, in line number format.</p>
   * @public
   */
  filePosition?: number | undefined;

  /**
   * <p>In a comparison of commits or a pull request, whether the change is in the before or
   *             after of that comparison.</p>
   * @public
   */
  relativeFileVersion?: RelativeFileVersionEnum | undefined;
}

/**
 * <p>Returns information about comments on the comparison between two commits.</p>
 * @public
 */
export interface CommentsForComparedCommit {
  /**
   * <p>The name of the repository that contains the compared commits.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The full commit ID of the commit used to establish the before of the
   *             comparison.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>The full commit ID of the commit used to establish the after of the comparison.</p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>The full blob ID of the commit used to establish the before of the comparison.</p>
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * <p>The full blob ID of the commit used to establish the after of the comparison.</p>
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * <p>Location information about the comment on the comparison, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE or
   *             AFTER.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the comparison
   *          between commits.</p>
   * @public
   */
  comments?: Comment[] | undefined;
}

/**
 * @public
 */
export interface GetCommentsForComparedCommitOutput {
  /**
   * <p>A list of comment objects on the compared commit.</p>
   * @public
   */
  commentsForComparedCommitData?: CommentsForComparedCommit[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCommentsForPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository that contains the pull request. Requirement is conditional: <code>repositoryName</code> must be specified when
   *             <code>beforeCommitId</code> and <code>afterCommitId</code> are included.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created. Requirement is conditional:
   *             <code>beforeCommitId</code> must be specified when <code>repositoryName</code> is included.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made. Requirement is conditional:
   *             <code>afterCommitId</code> must be specified when <code>repositoryName</code> is included.</p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments.
   *             You can return up to 500 comments with a single request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Returns information about comments on a pull request.</p>
 * @public
 */
export interface CommentsForPullRequest {
  /**
   * <p>The system-generated ID of the pull request.</p>
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The full commit ID of the commit that was the tip of the destination branch when the
   *             pull request was created. This commit is superceded by the after commit in the source
   *             branch when and if you merge the source branch into the destination branch.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>The full commit ID of the commit that was the tip of the source branch at the time the
   *             comment was made. </p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>The full blob ID of the file on which you want to comment on the destination commit.</p>
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * <p>The full blob ID of the file on which you want to comment on the source commit.</p>
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * <p>Location information about the comment on the pull request, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE
   *             (destination branch) or AFTER (source branch).</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the pull request.</p>
   * @public
   */
  comments?: Comment[] | undefined;
}

/**
 * @public
 */
export interface GetCommentsForPullRequestOutput {
  /**
   * <p>An array of comment objects on the pull request.</p>
   * @public
   */
  commentsForPullRequestData?: CommentsForPullRequest[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a get commit operation.</p>
 * @public
 */
export interface GetCommitInput {
  /**
   * <p>The name of the repository to which the commit was made.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The commit ID. Commit IDs are the full SHA ID of the commit.</p>
   * @public
   */
  commitId: string | undefined;
}

/**
 * <p>Represents the output of a get commit operation.</p>
 * @public
 */
export interface GetCommitOutput {
  /**
   * <p>A commit data type object that contains information about the specified commit.</p>
   * @public
   */
  commit: Commit | undefined;
}

/**
 * @public
 */
export interface GetDifferencesInput {
  /**
   * <p>The name of the repository where you want to get differences.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, the full commit ID). Optional. If not specified, all changes before the
   *                 <code>afterCommitSpecifier</code> value are shown. If you do not use
   *                 <code>beforeCommitSpecifier</code> in your request, consider limiting the results
   *             with <code>maxResults</code>.</p>
   * @public
   */
  beforeCommitSpecifier?: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit.</p>
   * @public
   */
  afterCommitSpecifier: string | undefined;

  /**
   * <p>The file path in which to check for differences. Limits the results to this path. Can
   *             also be used to specify the previous name of a directory or folder. If
   *                 <code>beforePath</code> and <code>afterPath</code> are not specified, differences
   *             are shown for all paths.</p>
   * @public
   */
  beforePath?: string | undefined;

  /**
   * <p>The file path in which to check differences. Limits the results to this path. Can also
   *             be used to specify the changed name of a directory or folder, if it has changed. If not
   *             specified, differences are shown for all paths.</p>
   * @public
   */
  afterPath?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Returns information about a set of differences for a commit specifier.</p>
 * @public
 */
export interface Difference {
  /**
   * <p>Information about a <code>beforeBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   * @public
   */
  beforeBlob?: BlobMetadata | undefined;

  /**
   * <p>Information about an <code>afterBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   * @public
   */
  afterBlob?: BlobMetadata | undefined;

  /**
   * <p>Whether the change type of the difference is an addition (A), deletion (D), or modification (M).</p>
   * @public
   */
  changeType?: ChangeTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetDifferencesOutput {
  /**
   * <p>A data type object that contains information about the differences, including whether
   *             the difference is added, modified, or deleted (A, D, M).</p>
   * @public
   */
  differences?: Difference[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFileInput {
  /**
   * <p>The name of the repository that contains the file.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The fully quaified reference that identifies the commit that contains the file. For
   *             example, you can specify a full commit ID, a tag, a branch name, or a reference such as
   *             refs/heads/main. If none is provided, the head commit is used.</p>
   * @public
   */
  commitSpecifier?: string | undefined;

  /**
   * <p>The fully qualified path to the file, including the full name and extension of the
   *             file. For example, /examples/file.md is the fully qualified path to a file named file.md
   *             in a folder named examples.</p>
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface GetFileOutput {
  /**
   * <p>The full commit ID of the commit that contains the content returned by GetFile.</p>
   * @public
   */
  commitId: string | undefined;

  /**
   * <p>The blob ID of the object that represents the file content.</p>
   * @public
   */
  blobId: string | undefined;

  /**
   * <p>The fully qualified path to the specified file. Returns the name and extension of the
   *             file.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values.</p>
   *          <note>
   *             <p>The file mode permissions returned by this API are not the standard file mode
   *                 permission values, such as 100644, but rather extrapolated values. See the supported
   *                 return values.</p>
   *          </note>
   * @public
   */
  fileMode: FileModeTypeEnum | undefined;

  /**
   * <p>The size of the contents of the file, in bytes.</p>
   * @public
   */
  fileSize: number | undefined;

  /**
   * <p>The base-64 encoded binary data object that represents the content of the file.</p>
   * @public
   */
  fileContent: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetFolderInput {
  /**
   * <p>The name of the repository.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>A fully qualified reference used to identify a commit that contains the version of the
   *             folder's content to return. A fully qualified reference can be a commit ID, branch name,
   *             tag, or reference such as HEAD. If no specifier is provided, the folder content is
   *             returned as it exists in the HEAD commit.</p>
   * @public
   */
  commitSpecifier?: string | undefined;

  /**
   * <p>The fully qualified path to the folder whose contents are returned, including the
   *             folder name. For example, /examples is a fully-qualified path to a folder named examples
   *             that was created off of the root directory (/) of a repository. </p>
   * @public
   */
  folderPath: string | undefined;
}

/**
 * <p>Returns information about a file in a repository.</p>
 * @public
 */
export interface File {
  /**
   * <p>The blob ID that contains the file information.</p>
   * @public
   */
  blobId?: string | undefined;

  /**
   * <p>The fully qualified path to the file in the repository.</p>
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * <p>The relative path of the file from the folder where the query originated.</p>
   * @public
   */
  relativePath?: string | undefined;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * <p>Returns information about a folder in a repository.</p>
 * @public
 */
export interface Folder {
  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   * @public
   */
  treeId?: string | undefined;

  /**
   * <p>The fully qualified path of the folder in the repository.</p>
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * <p>The relative path of the specified folder from the folder where the query originated.</p>
   * @public
   */
  relativePath?: string | undefined;
}

/**
 * <p>Returns information about a submodule reference in a repository folder.</p>
 * @public
 */
export interface SubModule {
  /**
   * <p>The commit ID that contains the reference to the submodule.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The fully qualified path to the folder that contains the reference to the submodule.</p>
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * <p>The relative path of the submodule from the folder where the query originated.</p>
   * @public
   */
  relativePath?: string | undefined;
}

/**
 * <p>Returns information about a symbolic link in a repository folder.</p>
 * @public
 */
export interface SymbolicLink {
  /**
   * <p>The blob ID that contains the information about the symbolic link.</p>
   * @public
   */
  blobId?: string | undefined;

  /**
   * <p>The fully qualified path to the folder that contains the symbolic link.</p>
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * <p>The relative path of the symbolic link from the folder where the query originated.</p>
   * @public
   */
  relativePath?: string | undefined;

  /**
   * <p>The file mode permissions of the blob that cotains information about the symbolic link.</p>
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetFolderOutput {
  /**
   * <p>The full commit ID used as a reference for the returned version of the folder
   *             content.</p>
   * @public
   */
  commitId: string | undefined;

  /**
   * <p>The fully qualified path of the folder whose contents are returned.</p>
   * @public
   */
  folderPath: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   * @public
   */
  treeId?: string | undefined;

  /**
   * <p>The list of folders that exist under the specified folder, if any.</p>
   * @public
   */
  subFolders?: Folder[] | undefined;

  /**
   * <p>The list of files in the specified folder, if any.</p>
   * @public
   */
  files?: File[] | undefined;

  /**
   * <p>The list of symbolic links to other files and folders in the specified folder, if
   *             any.</p>
   * @public
   */
  symbolicLinks?: SymbolicLink[] | undefined;

  /**
   * <p>The list of submodules in the specified folder, if any.</p>
   * @public
   */
  subModules?: SubModule[] | undefined;
}

/**
 * @public
 */
export interface GetMergeCommitInput {
  /**
   * <p>The name of the repository that contains the merge commit about which you want to get information.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetMergeCommitOutput {
  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  destinationCommitId?: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   * @public
   */
  baseCommitId?: string | undefined;

  /**
   * <p>The commit ID for the merge commit created when the source branch was merged into the
   *             destination branch. If the fast-forward merge strategy was used, there is no merge
   *             commit.</p>
   * @public
   */
  mergedCommitId?: string | undefined;
}

/**
 * @public
 */
export interface GetMergeConflictsInput {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.  </p>
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>The maximum number of files to include in the output.</p>
   * @public
   */
  maxConflictFiles?: number | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMergeConflictsOutput {
  /**
   * <p>A Boolean value that indicates whether the code is mergeable by the specified merge option.</p>
   * @public
   */
  mergeable: boolean | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   * @public
   */
  baseCommitId?: string | undefined;

  /**
   * <p>A list of metadata for any conflicting files. If the specified merge strategy is
   *             FAST_FORWARD_MERGE, this list is always empty.</p>
   * @public
   */
  conflictMetadataList: ConflictMetadata[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMergeOptionsInput {
  /**
   * <p>The name of the repository that contains the commits about which you want to get merge options.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetMergeOptionsOutput {
  /**
   * <p>The merge option or strategy used to merge the code.</p>
   * @public
   */
  mergeOptions: MergeOptionTypeEnum[] | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   * @public
   */
  baseCommitId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestOutput {
  /**
   * <p>Information about the specified pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface GetPullRequestApprovalStatesInput {
  /**
   * <p>The system-generated ID for the pull request.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID for the pull request revision.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestApprovalStatesOutput {
  /**
   * <p>Information about users who have approved the pull request.</p>
   * @public
   */
  approvals?: Approval[] | undefined;
}

/**
 * @public
 */
export interface GetPullRequestOverrideStateInput {
  /**
   * <p>The ID of the pull request for which you want to get information about whether approval rules have been set aside (overridden).</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the revision for the pull request. To retrieve the most
   *             recent revision ID, use
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestOverrideStateOutput {
  /**
   * <p>A Boolean value that indicates whether a pull request has had its rules set aside (TRUE) or whether all approval rules still apply (FALSE).</p>
   * @public
   */
  overridden?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
   * @public
   */
  overrider?: string | undefined;
}

/**
 * <p>Represents the input of a get repository operation.</p>
 * @public
 */
export interface GetRepositoryInput {
  /**
   * <p>The name of the repository to get information about.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * <p>Represents the output of a get repository operation.</p>
 * @public
 */
export interface GetRepositoryOutput {
  /**
   * <p>Information about the repository.</p>
   * @public
   */
  repositoryMetadata?: RepositoryMetadata | undefined;
}

/**
 * <p>Represents the input of a get repository triggers operation.</p>
 * @public
 */
export interface GetRepositoryTriggersInput {
  /**
   * <p>The name of the repository for which the trigger is configured.</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * <p>Information about a trigger for a repository. </p>
 *          <note>
 *             <p>If you want to receive notifications about repository events, consider using notifications instead of
 *             triggers.  For more information, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-repository-email.html">Configuring
 *             notifications for repository events</a>.</p>
 *          </note>
 * @public
 */
export interface RepositoryTrigger {
  /**
   * <p>The name of the trigger.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the resource that is the target for a trigger (for example, the ARN of a
   *             topic in Amazon SNS).</p>
   * @public
   */
  destinationArn: string | undefined;

  /**
   * <p>Any custom data associated with the trigger to be included in the information sent to
   *             the target of the trigger.</p>
   * @public
   */
  customData?: string | undefined;

  /**
   * <p>The branches to be included in the trigger configuration. If you specify an empty
   *             array, the trigger applies to all branches.</p>
   *          <note>
   *             <p>Although no content is required in the array, you must include the array itself.</p>
   *          </note>
   * @public
   */
  branches?: string[] | undefined;

  /**
   * <p>The repository events that cause the trigger to run actions in another service, such
   *             as sending a notification through Amazon SNS.
   *
   *         </p>
   *          <note>
   *             <p>The valid value "all" cannot be used with any other values.</p>
   *          </note>
   * @public
   */
  events: RepositoryTriggerEventEnum[] | undefined;
}

/**
 * <p>Represents the output of a get repository triggers operation.</p>
 * @public
 */
export interface GetRepositoryTriggersOutput {
  /**
   * <p>The system-generated unique ID for the trigger.</p>
   * @public
   */
  configurationId?: string | undefined;

  /**
   * <p>The JSON block of configuration information for each trigger.</p>
   * @public
   */
  triggers?: RepositoryTrigger[] | undefined;
}

/**
 * @public
 */
export interface ListApprovalRuleTemplatesInput {
  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApprovalRuleTemplatesOutput {
  /**
   * <p>The names of all the approval rule templates found in the Amazon Web Services Region for your Amazon Web Services account.</p>
   * @public
   */
  approvalRuleTemplateNames?: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  /**
   * <p>The name of the repository for which you want to list all associated approval rule templates.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  /**
   * <p>The names of all approval rule templates associated with the repository.</p>
   * @public
   */
  approvalRuleTemplateNames?: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a list branches operation.</p>
 * @public
 */
export interface ListBranchesInput {
  /**
   * <p>The name of the repository that contains the branches.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the output of a list branches operation.</p>
 * @public
 */
export interface ListBranchesOutput {
  /**
   * <p>The list of branch names.</p>
   * @public
   */
  branches?: string[] | undefined;

  /**
   * <p>An enumeration token that returns the batch of the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFileCommitHistoryRequest {
  /**
   * <p>The name of the repository that contains the file.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The fully quaified reference that identifies the commit that contains the file. For
   *             example, you can specify a full commit ID, a tag, a branch name, or a reference such as
   *             <code>refs/heads/main</code>. If none is provided, the head commit is used.</p>
   * @public
   */
  commitSpecifier?: string | undefined;

  /**
   * <p>The full path of the file whose history you want to retrieve, including the name of the file.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about a version of a file.</p>
 * @public
 */
export interface FileVersion {
  /**
   * <p>Returns information about a specific commit.</p>
   * @public
   */
  commit?: Commit | undefined;

  /**
   * <p>The blob ID of the object that represents the content of the file in this version.</p>
   * @public
   */
  blobId?: string | undefined;

  /**
   * <p>The name and path of the file at which this blob is indexed which contains the data for this version of the file. This value will
   *         vary between file versions if a file is renamed or if its path changes.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>An array of commit IDs that contain more recent versions of this file. If there are no additional versions of the file, this array will be empty.</p>
   * @public
   */
  revisionChildren?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFileCommitHistoryResponse {
  /**
   * <p>An array of FileVersion objects that form a directed acyclic graph (DAG) of the changes to the file made by the commits that changed the file.</p>
   * @public
   */
  revisionDag: FileVersion[] | undefined;

  /**
   * <p>An enumeration token that can be used to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPullRequestsInput {
  /**
   * <p>The name of the repository for which you want to list pull requests.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results
   *         to pull requests created by that user.</p>
   * @public
   */
  authorArn?: string | undefined;

  /**
   * <p>Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.</p>
   * @public
   */
  pullRequestStatus?: PullRequestStatusEnum | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPullRequestsOutput {
  /**
   * <p>The system-generated IDs of the pull requests.</p>
   * @public
   */
  pullRequestIds: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a list repositories operation.</p>
 * @public
 */
export interface ListRepositoriesInput {
  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The criteria used to sort the results of a list repositories operation.</p>
   * @public
   */
  sortBy?: SortByEnum | undefined;

  /**
   * <p>The order in which to sort the results of a list repositories operation.</p>
   * @public
   */
  order?: OrderEnum | undefined;
}

/**
 * <p>Information about a repository name and ID.</p>
 * @public
 */
export interface RepositoryNameIdPair {
  /**
   * <p>The name associated with the repository.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The ID associated with the repository.</p>
   * @public
   */
  repositoryId?: string | undefined;
}

/**
 * <p>Represents the output of a list repositories operation.</p>
 * @public
 */
export interface ListRepositoriesOutput {
  /**
   * <p>Lists the repositories called by the list repositories operation.</p>
   * @public
   */
  repositories?: RepositoryNameIdPair[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template for which you want to list repositories that are associated with that template.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * <p>A list of repository names that are associated with the specified approval rule template.</p>
   * @public
   */
  repositoryNames?: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information
   *             about tags, if any.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByFastForwardInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied.</p>
   * @public
   */
  targetBranch?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByFastForwardOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesBySquashInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   * @public
   */
  targetBranch?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The commit message for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergeBranchesBySquashOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   * @public
   */
  targetBranch?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   * @public
   */
  commitId?: string | undefined;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *         exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   * @public
   */
  sourceCommitId?: string | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardOutput {
  /**
   * <p>Information about the specified pull request, including the merge.</p>
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * @public
 */
export interface MergePullRequestBySquashInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergePullRequestBySquashOutput {
  /**
   * <p>Returns information about a pull request.</p>
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   * @public
   */
  authorName?: string | undefined;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayOutput {
  /**
   * <p>Returns information about a pull request.</p>
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * @public
 */
export interface OverridePullRequestApprovalRulesInput {
  /**
   * <p>The system-generated ID of the pull request for which you want to override all
   *             approval rule requirements. To get this information, use
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request.
   *             To get the revision ID, use GetPullRequest.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply
   *         approval rule requirements (REVOKE). REVOKE status is not stored.</p>
   * @public
   */
  overrideStatus: OverrideStatus | undefined;
}

/**
 * @public
 */
export interface PostCommentForComparedCommitInput {
  /**
   * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit. Required for commenting on any commit unless that commit is the initial
   *             commit.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * <p>The location of the comparison where you want to comment.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of the comment you want to make.</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface PostCommentForComparedCommitOutput {
  /**
   * <p>The name of the repository where you posted a comment on the comparison between commits.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>In the directionality you established, the full commit ID of the before commit.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>In the directionality you established, the full commit ID of the after commit.</p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>In the directionality you established, the blob ID of the before blob.</p>
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * <p>In the directionality you established, the blob ID of the after blob.</p>
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * <p>The location of the comment in the comparison between the two commits.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of the comment you posted.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PostCommentForPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where you want to post a comment on a pull request.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   * @public
   */
  beforeCommitId: string | undefined;

  /**
   * <p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * <p>The location of the change where you want to post your comment. If no location is
   *             provided, the comment is posted as a general comment on the pull request difference
   *             between the before commit ID and the after commit ID.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of your comment on the change.</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface PostCommentForPullRequestOutput {
  /**
   * <p>The name of the repository where you posted a comment on a pull request.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The system-generated ID of the pull request. </p>
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the source branch used to create the pull request,
   *             or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch where the pull request is
   *             merged.</p>
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * <p>In the directionality of the pull request, the blob ID of the before blob.</p>
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * <p>In the directionality of the pull request, the blob ID of the after blob.</p>
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * <p>The location of the change where you posted your comment.</p>
   * @public
   */
  location?: Location | undefined;

  /**
   * <p>The content of the comment you posted.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PostCommentReplyInput {
  /**
   * <p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *         or <a>GetCommentsForPullRequest</a>.</p>
   * @public
   */
  inReplyTo: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The contents of your reply to a comment.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface PostCommentReplyOutput {
  /**
   * <p>Information about the reply to a comment.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PutCommentReactionInput {
  /**
   * <p>The ID of the comment to which you want to add or update a reaction.</p>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p>The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none.
   *             For information about emoji reaction values supported in CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-commit-comment.html#emoji-reaction-table">CodeCommit User Guide</a>.</p>
   * @public
   */
  reactionValue: string | undefined;
}

/**
 * @public
 */
export interface PutFileInput {
  /**
   * <p>The name of the repository where you want to add or update the file.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where you want to add or update the file. If this is an empty
   *             repository, this branch is created.</p>
   * @public
   */
  branchName: string | undefined;

  /**
   * <p>The content of the file, in binary object format. </p>
   * @public
   */
  fileContent: Uint8Array | undefined;

  /**
   * <p>The name of the file you want to add or update, including the relative path to the file in the repository.</p>
   *          <note>
   *             <p>If the path does not currently exist in the repository, the path is created as part of adding
   *                 the file.</p>
   *          </note>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The file mode permissions of the blob. Valid file mode permissions are listed
   *             here.</p>
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;

  /**
   * <p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository,
   *             no commit ID is required. If this is not an empty repository, a commit ID is required. </p>
   *          <p>The commit ID must match the ID of the head commit at the time of the operation.
   *             Otherwise, an error occurs, and the file is not added or updated.</p>
   * @public
   */
  parentCommitId?: string | undefined;

  /**
   * <p>A message about why this file was added or updated. Although it is optional, a message
   *             makes the commit history for your repository more useful.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The name of the person adding or updating the file. Although it is optional, a name
   *             makes the commit history for your repository more useful.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>An email address for the person adding or updating the file.</p>
   * @public
   */
  email?: string | undefined;
}

/**
 * @public
 */
export interface PutFileOutput {
  /**
   * <p>The full SHA ID of the commit that contains this file change.</p>
   * @public
   */
  commitId: string | undefined;

  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   * @public
   */
  blobId: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>
   * @public
   */
  treeId: string | undefined;
}

/**
 * <p>Represents the input of a put repository triggers operation.</p>
 * @public
 */
export interface PutRepositoryTriggersInput {
  /**
   * <p>The name of the repository where you want to create or update the trigger.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON block of configuration information for each trigger.</p>
   * @public
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * <p>Represents the output of a put repository triggers operation.</p>
 * @public
 */
export interface PutRepositoryTriggersOutput {
  /**
   * <p>The system-generated unique ID for the create or update operation.</p>
   * @public
   */
  configurationId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key-value pair to use when tagging this repository.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>Represents the input of a test repository triggers operation.</p>
 * @public
 */
export interface TestRepositoryTriggersInput {
  /**
   * <p>The name of the repository in which to test the triggers.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of triggers to test.</p>
   * @public
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * <p>A trigger failed to run.</p>
 * @public
 */
export interface RepositoryTriggerExecutionFailure {
  /**
   * <p>The name of the trigger that did not run.</p>
   * @public
   */
  trigger?: string | undefined;

  /**
   * <p>Message information about the trigger that did not run.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * <p>Represents the output of a test repository triggers operation.</p>
 * @public
 */
export interface TestRepositoryTriggersOutput {
  /**
   * <p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>
   * @public
   */
  successfulExecutions?: string[] | undefined;

  /**
   * <p>The list of triggers that were not tested. This list provides the names of the
   *             triggers that could not be tested, separated by commas.</p>
   * @public
   */
  failedExecutions?: RepositoryTriggerExecutionFailure[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateContentInput {
  /**
   * <p>The name of the approval rule template where you want to update the content of the rule. </p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The content that replaces the existing content of the rule. Content statements must be
   *             complete. You cannot provide only the changes.</p>
   * @public
   */
  newRuleContent: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  existingRuleContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateContentOutput {
  /**
   * <p>Returns information about an approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionInput {
  /**
   * <p>The name of the template for which you want to update the description.</p>
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The updated description of the approval rule template.</p>
   * @public
   */
  approvalRuleTemplateDescription: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameInput {
  /**
   * <p>The current name of the approval rule template.</p>
   * @public
   */
  oldApprovalRuleTemplateName: string | undefined;

  /**
   * <p>The new name you want to apply to the approval rule template.</p>
   * @public
   */
  newApprovalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameOutput {
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateCommentInput {
  /**
   * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   * @public
   */
  commentId: string | undefined;

  /**
   * <p>The updated content to replace the existing content of the comment.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface UpdateCommentOutput {
  /**
   * <p>Information about the updated comment.</p>
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * <p>Represents the input of an update default branch operation.</p>
 * @public
 */
export interface UpdateDefaultBranchInput {
  /**
   * <p>The name of the repository for which you want to set or change the default branch.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch to set as the default branch.</p>
   * @public
   */
  defaultBranchName: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentInput {
  /**
   * <p>The system-generated ID of the pull request.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the approval rule you want to update.</p>
   * @public
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   * @public
   */
  existingRuleContentSha256?: string | undefined;

  /**
   * <p>The updated content for the approval rule.</p>
   *          <note>
   *             <p>When you update the content of the approval rule, you can specify approvers in an
   *                 approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an Amazon Web Services account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the Amazon Web Services account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following are counted as
   *                         approvals coming from that user:</p>
   *                   <ul>
   *                      <li>
   *                         <p>An IAM user in the account
   *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                      <li>
   *                         <p>A federated user identified in IAM as Mary_Major
   *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                      </li>
   *                   </ul>
   *                   <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          </note>
   * @public
   */
  newRuleContent: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentOutput {
  /**
   * <p>Information about the updated approval rule.</p>
   * @public
   */
  approvalRule: ApprovalRule | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalStateInput {
  /**
   * <p>The system-generated ID of the pull request.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The approval state to associate with the user on the pull request.</p>
   * @public
   */
  approvalState: ApprovalState | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The updated content of the description for the pull request. This content replaces the
   *             existing description.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionOutput {
  /**
   * <p>Information about the updated pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestStatusInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The status of the pull request. The only valid operations are to update the status
   *             from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or
   *             from <code>CLOSED</code> to <code>CLOSED</code>.</p>
   * @public
   */
  pullRequestStatus: PullRequestStatusEnum | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestStatusOutput {
  /**
   * <p>Information about the pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * <p>The updated title of the pull request. This replaces the existing title.</p>
   * @public
   */
  title: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleOutput {
  /**
   * <p>Information about the updated pull request.</p>
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 * @public
 */
export interface UpdateRepositoryDescriptionInput {
  /**
   * <p>The name of the repository to set or change the comment or description for.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>
   * @public
   */
  repositoryDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryEncryptionKeyInput {
  /**
   * <p>The name of the repository for which you want to update the KMS encryption key used to encrypt and decrypt the repository.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to
   *             programmatically retrieve a key ID. For more information about acceptable values for keyID, see
   *             <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html#KMS-Decrypt-request-KeyId">KeyId</a> in the Decrypt API description in
   *         the <i>Key Management Service API Reference</i>.</p>
   * @public
   */
  kmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryEncryptionKeyOutput {
  /**
   * <p>The ID of the repository.</p>
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * <p>The ID of the encryption key.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The ID of the encryption key formerly used to encrypt and decrypt the repository.</p>
   * @public
   */
  originalKmsKeyId?: string | undefined;
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 * @public
 */
export interface UpdateRepositoryNameInput {
  /**
   * <p>The current name of the repository.</p>
   * @public
   */
  oldName: string | undefined;

  /**
   * <p>The new name for the repository.</p>
   * @public
   */
  newName: string | undefined;
}
