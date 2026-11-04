// smithy-typescript generated code
import type {
  ApprovalState,
  BatchGetRepositoriesErrorCodeEnum,
  ChangeTypeEnum,
  ConflictDetailLevelTypeEnum,
  ConflictResolutionStrategyTypeEnum,
  DiffChangeType,
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
 * Returns information about a specific approval on a pull request.
 *
 * @public
 */
export interface Approval {
  /**
   * The Amazon Resource Name (ARN) of the user.
   *
   * @public
   */
  userArn?: string | undefined;

  /**
   * The state of the approval, APPROVE or REVOKE. REVOKE states are not stored.
   *
   * @public
   */
  approvalState?: ApprovalState | undefined;
}

/**
 * Returns information about the template that created the approval rule for a pull request.
 *
 * @public
 */
export interface OriginApprovalRuleTemplate {
  /**
   * The ID of the template that created the approval rule.
   *
   * @public
   */
  approvalRuleTemplateId?: string | undefined;

  /**
   * The name of the template that created the approval rule.
   *
   * @public
   */
  approvalRuleTemplateName?: string | undefined;
}

/**
 * Returns information about an approval rule.
 *
 * @public
 */
export interface ApprovalRule {
  /**
   * The system-generated ID of the approval rule.
   *
   * @public
   */
  approvalRuleId?: string | undefined;

  /**
   * The name of the approval rule.
   *
   * @public
   */
  approvalRuleName?: string | undefined;

  /**
   * The content of the approval rule.
   *
   * @public
   */
  approvalRuleContent?: string | undefined;

  /**
   * The SHA-256 hash signature for the content of the approval rule.
   *
   * @public
   */
  ruleContentSha256?: string | undefined;

  /**
   * The date the approval rule was most recently changed, in timestamp format.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The date the approval rule was created, in timestamp format.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule.
   *
   * @public
   */
  lastModifiedUser?: string | undefined;

  /**
   * The approval rule template used to create the rule.
   *
   * @public
   */
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate | undefined;
}

/**
 * Returns information about an event for an approval rule.
 *
 * @public
 */
export interface ApprovalRuleEventMetadata {
  /**
   * The name of the approval rule.
   *
   * @public
   */
  approvalRuleName?: string | undefined;

  /**
   * The system-generated ID of the approval rule.
   *
   * @public
   */
  approvalRuleId?: string | undefined;

  /**
   * The content of the approval rule.
   *
   * @public
   */
  approvalRuleContent?: string | undefined;
}

/**
 * Returns information about an override event for approval rules for a pull request.
 *
 * @public
 */
export interface ApprovalRuleOverriddenEventMetadata {
  /**
   * The revision ID of the pull request when the override event occurred.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The status of the override event.
   *
   * @public
   */
  overrideStatus?: OverrideStatus | undefined;
}

/**
 * Returns information about an approval rule template.
 *
 * @public
 */
export interface ApprovalRuleTemplate {
  /**
   * The system-generated ID of the approval rule template.
   *
   * @public
   */
  approvalRuleTemplateId?: string | undefined;

  /**
   * The name of the approval rule template.
   *
   * @public
   */
  approvalRuleTemplateName?: string | undefined;

  /**
   * The description of the approval rule template.
   *
   * @public
   */
  approvalRuleTemplateDescription?: string | undefined;

  /**
   * The content of the approval rule template.
   *
   * @public
   */
  approvalRuleTemplateContent?: string | undefined;

  /**
   * The SHA-256 hash signature for the content of the approval rule template.
   *
   * @public
   */
  ruleContentSha256?: string | undefined;

  /**
   * The date the approval rule template was most recently changed, in timestamp format.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The date the approval rule template was created, in timestamp format.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.
   *
   * @public
   */
  lastModifiedUser?: string | undefined;
}

/**
 * Returns information about a change in the approval state for a pull request.
 *
 * @public
 */
export interface ApprovalStateChangedEventMetadata {
  /**
   * The revision ID of the pull request when the approval state changed.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The approval status for the pull request.
   *
   * @public
   */
  approvalStatus?: ApprovalState | undefined;
}

/**
 * @public
 */
export interface AssociateApprovalRuleTemplateWithRepositoryInput {
  /**
   * The name for the approval rule template.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * The name of the repository that you want to associate with the template.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  /**
   * The name of the template you want to associate with one or more repositories.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * The names of the repositories you want to associate with the template.
   *
   * > **Note:** The length constraint limit is for each string in the array. The array itself can be empty.
   *
   * @public
   */
  repositoryNames: string[] | undefined;
}

/**
 * Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.
 *
 * @public
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  /**
   * The name of the repository where the association was not made.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An error code that specifies whether the repository name was not valid or not found.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * An error message that provides details about why the repository name was not found or not valid.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  /**
   * A list of names of the repositories that have been associated with the template.
   *
   * @public
   */
  associatedRepositoryNames: string[] | undefined;

  /**
   * A list of any errors that might have occurred while attempting to create the association between the template and the repositories.
   *
   * @public
   */
  errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[] | undefined;
}

/**
 * @public
 */
export interface BatchDescribeMergeConflictsInput {
  /**
   * The name of the repository that contains the merge conflicts you want to review.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The merge option or strategy you want to use to merge the code.
   *
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * The maximum number of merge hunks to include in the output.
   *
   * @public
   */
  maxMergeHunks?: number | undefined;

  /**
   * The maximum number of files to include in the output.
   *
   * @public
   */
  maxConflictFiles?: number | undefined;

  /**
   * The path of the target files used to describe the conflicts. If not specified, the default is all conflict files.
   *
   * @public
   */
  filePaths?: string[] | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about file modes in a merge or pull request.
 *
 * @public
 */
export interface FileModes {
  /**
   * The file mode of a file in the source of a merge or pull request.
   *
   * @public
   */
  source?: FileModeTypeEnum | undefined;

  /**
   * The file mode of a file in the destination of a merge or pull request.
   *
   * @public
   */
  destination?: FileModeTypeEnum | undefined;

  /**
   * The file mode of a file in the base of a merge or pull request.
   *
   * @public
   */
  base?: FileModeTypeEnum | undefined;
}

/**
 * Information about the size of files in a merge or pull request.
 *
 * @public
 */
export interface FileSizes {
  /**
   * The size of a file in the source of a merge or pull request.
   *
   * @public
   */
  source?: number | undefined;

  /**
   * The size of a file in the destination of a merge or pull request.
   *
   * @public
   */
  destination?: number | undefined;

  /**
   * The size of a file in the base of a merge or pull request.
   *
   * @public
   */
  base?: number | undefined;
}

/**
 * Information about whether a file is binary or textual in a merge or pull request operation.
 *
 * @public
 */
export interface IsBinaryFile {
  /**
   * The binary or non-binary status of file in the source of a merge or pull request.
   *
   * @public
   */
  source?: boolean | undefined;

  /**
   * The binary or non-binary status of a file in the destination of a merge or pull request.
   *
   * @public
   */
  destination?: boolean | undefined;

  /**
   * The binary or non-binary status of a file in the base of a merge or pull request.
   *
   * @public
   */
  base?: boolean | undefined;
}

/**
 * Information about the file operation conflicts in a merge operation.
 *
 * @public
 */
export interface MergeOperations {
  /**
   * The operation (add, modify, or delete) on a file in the source of a merge or pull request.
   *
   * @public
   */
  source?: ChangeTypeEnum | undefined;

  /**
   * The operation on a file in the destination of a merge or pull request.
   *
   * @public
   */
  destination?: ChangeTypeEnum | undefined;
}

/**
 * Information about the type of an object in a merge operation.
 *
 * @public
 */
export interface ObjectTypes {
  /**
   * The type of the object in the source branch.
   *
   * @public
   */
  source?: ObjectTypeEnum | undefined;

  /**
   * The type of the object in the destination branch.
   *
   * @public
   */
  destination?: ObjectTypeEnum | undefined;

  /**
   * The type of the object in the base commit of the merge.
   *
   * @public
   */
  base?: ObjectTypeEnum | undefined;
}

/**
 * Information about the metadata for a conflict in a merge operation.
 *
 * @public
 */
export interface ConflictMetadata {
  /**
   * The path of the file that contains conflicts.
   *
   * @public
   */
  filePath?: string | undefined;

  /**
   * The file sizes of the file in the source, destination, and base of the merge.
   *
   * @public
   */
  fileSizes?: FileSizes | undefined;

  /**
   * The file modes of the file in the source, destination, and base of the merge.
   *
   * @public
   */
  fileModes?: FileModes | undefined;

  /**
   * Information about any object type conflicts in a merge operation.
   *
   * @public
   */
  objectTypes?: ObjectTypes | undefined;

  /**
   * The number of conflicts, including both hunk conflicts and metadata conflicts.
   *
   * @public
   */
  numberOfConflicts?: number | undefined;

  /**
   * A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.
   *
   * @public
   */
  isBinaryFile?: IsBinaryFile | undefined;

  /**
   * A boolean value indicating whether there are conflicts in the content of a file.
   *
   * @public
   */
  contentConflict?: boolean | undefined;

  /**
   * A boolean value indicating whether there are conflicts in the file mode of a file.
   *
   * @public
   */
  fileModeConflict?: boolean | undefined;

  /**
   * A boolean value (true or false) indicating whether there are conflicts between the branches in the object type of a file, folder, or submodule.
   *
   * @public
   */
  objectTypeConflict?: boolean | undefined;

  /**
   * Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.
   *
   * @public
   */
  mergeOperations?: MergeOperations | undefined;
}

/**
 * Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
 *
 * @public
 */
export interface MergeHunkDetail {
  /**
   * The start position of the hunk in the merge result.
   *
   * @public
   */
  startLine?: number | undefined;

  /**
   * The end position of the hunk in the merge result.
   *
   * @public
   */
  endLine?: number | undefined;

  /**
   * The base-64 encoded content of the hunk merged region that might contain a conflict.
   *
   * @public
   */
  hunkContent?: string | undefined;
}

/**
 * Information about merge hunks in a merge or pull request operation.
 *
 * @public
 */
export interface MergeHunk {
  /**
   * A Boolean value indicating whether a combination of hunks contains a conflict. Conflicts occur when the same file or the same lines in a file were modified in both the source and destination of a merge or pull request. Valid values include true, false, and null. True when the hunk represents a conflict and one or more files contains a line conflict. File mode conflicts in a merge do not set this to true.
   *
   * @public
   */
  isConflict?: boolean | undefined;

  /**
   * Information about the merge hunk in the source of a merge or pull request.
   *
   * @public
   */
  source?: MergeHunkDetail | undefined;

  /**
   * Information about the merge hunk in the destination of a merge or pull request.
   *
   * @public
   */
  destination?: MergeHunkDetail | undefined;

  /**
   * Information about the merge hunk in the base of a merge or pull request.
   *
   * @public
   */
  base?: MergeHunkDetail | undefined;
}

/**
 * Information about conflicts in a merge operation.
 *
 * @public
 */
export interface Conflict {
  /**
   * Metadata about a conflict in a merge operation.
   *
   * @public
   */
  conflictMetadata?: ConflictMetadata | undefined;

  /**
   * A list of hunks that contain the differences between files or lines causing the conflict.
   *
   * @public
   */
  mergeHunks?: MergeHunk[] | undefined;
}

/**
 * Returns information about errors in a BatchDescribeMergeConflicts operation.
 *
 * @public
 */
export interface BatchDescribeMergeConflictsError {
  /**
   * The path to the file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The name of the exception.
   *
   * @public
   */
  exceptionName: string | undefined;

  /**
   * The message provided by the exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeMergeConflictsOutput {
  /**
   * A list of conflicts for each file, including the conflict metadata and the hunks of the differences between the files.
   *
   * @public
   */
  conflicts: Conflict[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of any errors returned while describing the merge conflicts for each file.
   *
   * @public
   */
  errors?: BatchDescribeMergeConflictsError[] | undefined;

  /**
   * The commit ID of the destination commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * The commit ID of the source commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * The commit ID of the merge base.
   *
   * @public
   */
  baseCommitId?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  /**
   * The name of the template that you want to disassociate from one or more repositories.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * The repository names that you want to disassociate from the approval rule template.
   *
   * > **Note:** The length constraint limit is for each string in the array. The array itself can be empty.
   *
   * @public
   */
  repositoryNames: string[] | undefined;
}

/**
 * Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.
 *
 * @public
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  /**
   * The name of the repository where the association with the template was not able to be removed.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An error code that specifies whether the repository name was not valid or not found.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * An error message that provides details about why the repository name was either not found or not valid.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  /**
   * A list of repository names that have had their association with the template removed.
   *
   * @public
   */
  disassociatedRepositoryNames: string[] | undefined;

  /**
   * A list of any errors that might have occurred while attempting to remove the association between the template and the repositories.
   *
   * @public
   */
  errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCommitsInput {
  /**
   * The full commit IDs of the commits to get information about.
   *
   * > **Note:** You must supply the full SHA IDs of each commit. You cannot use shortened SHA IDs.
   *
   * @public
   */
  commitIds: string[] | undefined;

  /**
   * The name of the repository that contains the commits.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * Information about the user who made a specified commit.
 *
 * @public
 */
export interface UserInfo {
  /**
   * The name of the user who made the specified commit.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The email address associated with the user who made the commit, if any.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The date when the specified commit was commited, in timestamp format with GMT offset.
   *
   * @public
   */
  date?: string | undefined;
}

/**
 * Returns information about a specific commit.
 *
 * @public
 */
export interface Commit {
  /**
   * The full SHA ID of the specified commit.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * Tree information for the specified commit.
   *
   * @public
   */
  treeId?: string | undefined;

  /**
   * A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.
   *
   * @public
   */
  parents?: string[] | undefined;

  /**
   * The commit message associated with the specified commit.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Information about the author of the specified commit. Information includes the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured in Git.
   *
   * @public
   */
  author?: UserInfo | undefined;

  /**
   * Information about the person who committed the specified commit, also known as the committer. Information includes the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured in Git.
   *
   * For more information about the difference between an author and a committer in Git, see [Viewing the Commit History](http://git-scm.com/book/ch2-3.html) in Pro Git by Scott Chacon and Ben Straub.
   *
   * @public
   */
  committer?: UserInfo | undefined;

  /**
   * Any other data associated with the specified commit.
   *
   * @public
   */
  additionalData?: string | undefined;
}

/**
 * Returns information about errors in a BatchGetCommits operation.
 *
 * @public
 */
export interface BatchGetCommitsError {
  /**
   * A commit ID that either could not be found or was not in a valid format.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * An error code that specifies whether the commit ID was not valid or not found.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * An error message that provides detail about why the commit ID either was not found or was not valid.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCommitsOutput {
  /**
   * An array of commit data type objects, each of which contains information about a specified commit.
   *
   * @public
   */
  commits?: Commit[] | undefined;

  /**
   * Returns any commit IDs for which information could not be found. For example, if one of the commit IDs was a shortened SHA ID or that commit was not found in the specified repository, the ID returns an error object with more information.
   *
   * @public
   */
  errors?: BatchGetCommitsError[] | undefined;
}

/**
 * Represents the input of a batch get repositories operation.
 *
 * @public
 */
export interface BatchGetRepositoriesInput {
  /**
   * The names of the repositories to get information about.
   *
   * > **Note:** The length constraint limit is for each string in the array. The array itself can be empty.
   *
   * @public
   */
  repositoryNames: string[] | undefined;
}

/**
 * Returns information about errors in a BatchGetRepositories operation.
 *
 * @public
 */
export interface BatchGetRepositoriesError {
  /**
   * The ID of a repository that either could not be found or was not in a valid state.
   *
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * The name of a repository that either could not be found or was not in a valid state.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * An error code that specifies the type of failure.
   *
   * @public
   */
  errorCode?: BatchGetRepositoriesErrorCodeEnum | undefined;

  /**
   * An error message that provides detail about why the repository either was not found or was not in a valid state.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Information about a repository.
 *
 * @public
 */
export interface RepositoryMetadata {
  /**
   * The ID of the Amazon Web Services account associated with the repository.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The ID of the repository.
   *
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * The repository's name.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * A comment or description about the repository.
   *
   * @public
   */
  repositoryDescription?: string | undefined;

  /**
   * The repository's default branch name.
   *
   * @public
   */
  defaultBranch?: string | undefined;

  /**
   * The date and time the repository was last modified, in timestamp format.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The date and time the repository was created, in timestamp format.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The URL to use for cloning the repository over HTTPS.
   *
   * @public
   */
  cloneUrlHttp?: string | undefined;

  /**
   * The URL to use for cloning the repository over SSH.
   *
   * @public
   */
  cloneUrlSsh?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the repository.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the Key Management Service encryption key used to encrypt and decrypt the repository.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Represents the output of a batch get repositories operation.
 *
 * @public
 */
export interface BatchGetRepositoriesOutput {
  /**
   * A list of repositories returned by the batch get repositories operation.
   *
   * @public
   */
  repositories?: RepositoryMetadata[] | undefined;

  /**
   * Returns a list of repository names for which information could not be found.
   *
   * @public
   */
  repositoriesNotFound?: string[] | undefined;

  /**
   * Returns information about any errors returned when attempting to retrieve information about the repositories.
   *
   * @public
   */
  errors?: BatchGetRepositoriesError[] | undefined;
}

/**
 * Returns information about a specific Git blob object.
 *
 * @public
 */
export interface BlobMetadata {
  /**
   * The full ID of the blob.
   *
   * @public
   */
  blobId?: string | undefined;

  /**
   * The path to the blob and associated file name, if any.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The file mode permissions of the blob. File mode permission codes include:
   *
   * - `100644` indicates read/write
   * - `100755` indicates read/write/execute
   * - `160000` indicates a submodule
   * - `120000` indicates a symlink
   *
   * @public
   */
  mode?: string | undefined;
}

/**
 * Returns information about a branch.
 *
 * @public
 */
export interface BranchInfo {
  /**
   * The name of the branch.
   *
   * @public
   */
  branchName?: string | undefined;

  /**
   * The ID of the last commit made to the branch.
   *
   * @public
   */
  commitId?: string | undefined;
}

/**
 * @public
 */
export interface CreateApprovalRuleTemplateInput {
  /**
   * The name of the approval rule template. Provide descriptive names, because this name is applied to the approval rules created automatically in associated repositories.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * The content of the approval rule that is created on pull requests in associated repositories. If you specify one or more destination references (branches), approval rules are created in an associated repository only if their destination references (branches) match those specified in the template.
   *
   * > **Note:**
   * >
   * > When you create the content of the approval rule template, you can specify approvers in an approval pool in one of two ways:
   * >
   * > - **CodeCommitApprovers**: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account *123456789012* and *Mary_Major*, all of the following are counted as approvals coming from that user:
   * >
   * >   - An IAM user in the account (arn:aws:iam::*123456789012*:user/*Mary_Major*)
   * >   - A federated user identified in IAM as Mary_Major (arn:aws:sts::*123456789012*:federated-user/*Mary_Major*)
   * >
   * >   This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of *Mary_Major* (arn:aws:sts::*123456789012*:assumed-role/CodeCommitReview/*Mary_Major*) unless you include a wildcard (*Mary_Major).
   * > - **Fully qualified ARN**: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role.
   * >
   * > For more information about IAM ARNs, wildcards, and formats, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  approvalRuleTemplateContent: string | undefined;

  /**
   * The description of the approval rule template. Consider providing a description that explains what this template does and when it might be appropriate to associate it with repositories.
   *
   * @public
   */
  approvalRuleTemplateDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateApprovalRuleTemplateOutput {
  /**
   * The content and structure of the created approval rule template.
   *
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * Represents the input of a create branch operation.
 *
 * @public
 */
export interface CreateBranchInput {
  /**
   * The name of the repository in which you want to create the new branch.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the new branch to create.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The ID of the commit to point the new branch to.
   *
   * @public
   */
  commitId: string | undefined;
}

/**
 * A file that is deleted as part of a commit.
 *
 * @public
 */
export interface DeleteFileEntry {
  /**
   * The full path of the file to be deleted, including the name of the file.
   *
   * @public
   */
  filePath: string | undefined;
}

/**
 * Information about a source file that is part of changes made in a commit.
 *
 * @public
 */
export interface SourceFileSpecifier {
  /**
   * The full path to the file, including the name of the file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * Whether to remove the source file from the parent commit.
   *
   * @public
   */
  isMove?: boolean | undefined;
}

/**
 * Information about a file added or updated as part of a commit.
 *
 * @public
 */
export interface PutFileEntry {
  /**
   * The full path to the file in the repository, including the name of the file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.
   *
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;

  /**
   * The content of the file, if a source file is not specified.
   *
   * @public
   */
  fileContent?: Uint8Array | undefined;

  /**
   * The name and full path of the file that contains the changes you want to make as part of the commit, if you are not providing the file content directly.
   *
   * @public
   */
  sourceFile?: SourceFileSpecifier | undefined;
}

/**
 * Information about the file mode changes.
 *
 * @public
 */
export interface SetFileModeEntry {
  /**
   * The full path to the file, including the name of the file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The file mode for the file.
   *
   * @public
   */
  fileMode: FileModeTypeEnum | undefined;
}

/**
 * @public
 */
export interface CreateCommitInput {
  /**
   * The name of the repository where you create the commit.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the branch where you create the commit.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The ID of the commit that is the parent of the commit you create. Not required if this is an empty repository.
   *
   * @public
   */
  parentCommitId?: string | undefined;

  /**
   * The name of the author who created the commit. This information is used as both the author and committer for the commit.
   *
   * @public
   */
  authorName?: string | undefined;

  /**
   * The email address of the person who created the commit.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The commit message you want to include in the commit. Commit messages are limited to 256 KB. If no message is specified, a default message is used.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a ..gitkeep file is created for empty folders. The default is false.
   *
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * The files to add or update in this commit.
   *
   * @public
   */
  putFiles?: PutFileEntry[] | undefined;

  /**
   * The files to delete in this commit. These files still exist in earlier commits.
   *
   * @public
   */
  deleteFiles?: DeleteFileEntry[] | undefined;

  /**
   * The file modes to update for files in this commit.
   *
   * @public
   */
  setFileModes?: SetFileModeEntry[] | undefined;
}

/**
 * A file to be added, updated, or deleted as part of a commit.
 *
 * @public
 */
export interface FileMetadata {
  /**
   * The full path to the file to be added or updated, including the name of the file.
   *
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * The blob ID that contains the file information.
   *
   * @public
   */
  blobId?: string | undefined;

  /**
   * The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.
   *
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * @public
 */
export interface CreateCommitOutput {
  /**
   * The full commit ID of the commit that contains your committed file changes.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.
   *
   * @public
   */
  treeId?: string | undefined;

  /**
   * The files added as part of the committed file changes.
   *
   * @public
   */
  filesAdded?: FileMetadata[] | undefined;

  /**
   * The files updated as part of the commited file changes.
   *
   * @public
   */
  filesUpdated?: FileMetadata[] | undefined;

  /**
   * The files deleted as part of the committed file changes.
   *
   * @public
   */
  filesDeleted?: FileMetadata[] | undefined;
}

/**
 * Returns information about a target for a pull request.
 *
 * @public
 */
export interface Target {
  /**
   * The name of the repository that contains the pull request.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch of the repository that contains the changes for the pull request. Also known as the source branch.
   *
   * @public
   */
  sourceReference: string | undefined;

  /**
   * The branch of the repository where the pull request changes are merged. Also known as the destination branch.
   *
   * @public
   */
  destinationReference?: string | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestInput {
  /**
   * The title of the pull request. This title is used to identify the pull request to other users in the repository.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the pull request.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The targets for the pull request, including the source of the code to be reviewed (the source branch) and the destination where the creator of the pull request intends the code to be merged after the pull request is closed (the destination branch).
   *
   * @public
   */
  targets: Target[] | undefined;

  /**
   * A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
   *
   * > **Note:** The Amazon Web ServicesSDKs prepopulate client request tokens. If you are using an Amazon Web ServicesSDK, an idempotency token is created for you.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
 *
 * @public
 */
export interface MergeMetadata {
  /**
   * A Boolean value indicating whether the merge has been made.
   *
   * @public
   */
  isMerged?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who merged the branches.
   *
   * @public
   */
  mergedBy?: string | undefined;

  /**
   * The commit ID for the merge commit, if any.
   *
   * @public
   */
  mergeCommitId?: string | undefined;

  /**
   * The merge strategy used in the merge.
   *
   * @public
   */
  mergeOption?: MergeOptionTypeEnum | undefined;
}

/**
 * Returns information about a pull request target.
 *
 * @public
 */
export interface PullRequestTarget {
  /**
   * The name of the repository that contains the pull request source and destination branches.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The branch of the repository that contains the changes for the pull request. Also known as the source branch.
   *
   * @public
   */
  sourceReference?: string | undefined;

  /**
   * The branch of the repository where the pull request changes are merged. Also known as the destination branch.
   *
   * @public
   */
  destinationReference?: string | undefined;

  /**
   * The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.
   *
   * @public
   */
  destinationCommit?: string | undefined;

  /**
   * The full commit ID of the tip of the source branch used to create the pull request. If the pull request branch is updated by a push while the pull request is open, the commit ID changes to reflect the new tip of the branch.
   *
   * @public
   */
  sourceCommit?: string | undefined;

  /**
   * The commit ID of the most recent commit that the source branch and the destination branch have in common.
   *
   * @public
   */
  mergeBase?: string | undefined;

  /**
   * Returns metadata about the state of the merge, including whether the merge has been made.
   *
   * @public
   */
  mergeMetadata?: MergeMetadata | undefined;
}

/**
 * Returns information about a pull request.
 *
 * @public
 */
export interface PullRequest {
  /**
   * The system-generated ID of the pull request.
   *
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * The user-defined title of the pull request. This title is displayed in the list of pull requests to other repository users.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The day and time of the last user or system activity on the pull request, in timestamp format.
   *
   * @public
   */
  lastActivityDate?: Date | undefined;

  /**
   * The date and time the pull request was originally created, in timestamp format.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The status of the pull request. Pull request status can only change from `OPEN` to `CLOSED`.
   *
   * @public
   */
  pullRequestStatus?: PullRequestStatusEnum | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the pull request.
   *
   * @public
   */
  authorArn?: string | undefined;

  /**
   * The targets of the pull request, including the source branch and destination branch for the pull request.
   *
   * @public
   */
  pullRequestTargets?: PullRequestTarget[] | undefined;

  /**
   * A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The system-generated revision ID for the pull request.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The approval rules applied to the pull request.
   *
   * @public
   */
  approvalRules?: ApprovalRule[] | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestOutput {
  /**
   * Information about the newly created pull request.
   *
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestApprovalRuleInput {
  /**
   * The system-generated ID of the pull request for which you want to create the approval rule.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name for the approval rule.
   *
   * @public
   */
  approvalRuleName: string | undefined;

  /**
   * The content of the approval rule, including the number of approvals needed and the structure of an approval pool defined for approvals, if any. For more information about approval pools, see the CodeCommit User Guide.
   *
   * > **Note:**
   * >
   * > When you create the content of the approval rule, you can specify approvers in an approval pool in one of two ways:
   * >
   * > - **CodeCommitApprovers**: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account *123456789012* and *Mary_Major*, all of the following would be counted as approvals coming from that user:
   * >
   * >   - An IAM user in the account (arn:aws:iam::*123456789012*:user/*Mary_Major*)
   * >   - A federated user identified in IAM as Mary_Major (arn:aws:sts::*123456789012*:federated-user/*Mary_Major*)
   * >
   * >   This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of *Mary_Major* (arn:aws:sts::*123456789012*:assumed-role/CodeCommitReview/*Mary_Major*) unless you include a wildcard (*Mary_Major).
   * > - **Fully qualified ARN**: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role.
   * >
   * > For more information about IAM ARNs, wildcards, and formats, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  approvalRuleContent: string | undefined;
}

/**
 * @public
 */
export interface CreatePullRequestApprovalRuleOutput {
  /**
   * Information about the created approval rule.
   *
   * @public
   */
  approvalRule: ApprovalRule | undefined;
}

/**
 * Represents the input of a create repository operation.
 *
 * @public
 */
export interface CreateRepositoryInput {
  /**
   * The name of the new repository to be created.
   *
   * > **Note:** The repository name must be unique across the calling Amazon Web Services account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For more information about the limits on repository names, see [Quotas](https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html) in the *CodeCommit User Guide*. The suffix .git is prohibited.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * A comment or description about the new repository.
   *
   * > **Note:** The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.
   *
   * @public
   */
  repositoryDescription?: string | undefined;

  /**
   * One or more tag key-value pairs to use when tagging this repository.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to programmatically retrieve a key ID. For more information about acceptable values for kmsKeyID, see [KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html#KMS-Decrypt-request-KeyId) in the Decrypt API description in the *Key Management Service API Reference*.
   *
   * If no key is specified, the default `aws/codecommit` Amazon Web Services managed key is used.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Represents the output of a create repository operation.
 *
 * @public
 */
export interface CreateRepositoryOutput {
  /**
   * Information about the newly created repository.
   *
   * @public
   */
  repositoryMetadata?: RepositoryMetadata | undefined;
}

/**
 * Information about a replacement content entry in the conflict of a merge or pull request operation.
 *
 * @public
 */
export interface ReplaceContentEntry {
  /**
   * The path of the conflicting file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The replacement type to use when determining how to resolve the conflict.
   *
   * @public
   */
  replacementType: ReplacementTypeEnum | undefined;

  /**
   * The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.
   *
   * @public
   */
  content?: Uint8Array | undefined;

  /**
   * The file mode to apply during conflict resoltion.
   *
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
 *
 * @public
 */
export interface ConflictResolution {
  /**
   * Files to have content replaced as part of the merge conflict resolution.
   *
   * @public
   */
  replaceContents?: ReplaceContentEntry[] | undefined;

  /**
   * Files to be deleted as part of the merge conflict resolution.
   *
   * @public
   */
  deleteFiles?: DeleteFileEntry[] | undefined;

  /**
   * File modes that are set as part of the merge conflict resolution.
   *
   * @public
   */
  setFileModes?: SetFileModeEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateUnreferencedMergeCommitInput {
  /**
   * The name of the repository where you want to create the unreferenced merge commit.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The merge option or strategy you want to use to merge the code.
   *
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * The name of the author who created the unreferenced commit. This information is used as both the author and committer for the commit.
   *
   * @public
   */
  authorName?: string | undefined;

  /**
   * The email address for the person who created the unreferenced commit.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The commit message for the unreferenced commit.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false.
   *
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
   *
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface CreateUnreferencedMergeCommitOutput {
  /**
   * The full commit ID of the commit that contains your merge results.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * The full SHA-1 pointer of the tree information for the commit that contains the merge results.
   *
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApprovalRuleTemplateInput {
  /**
   * The name of the approval rule template to delete.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteApprovalRuleTemplateOutput {
  /**
   * The system-generated ID of the deleted approval rule template. If the template has been previously deleted, the only response is a 200 OK.
   *
   * @public
   */
  approvalRuleTemplateId: string | undefined;
}

/**
 * Represents the input of a delete branch operation.
 *
 * @public
 */
export interface DeleteBranchInput {
  /**
   * The name of the repository that contains the branch to be deleted.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the branch to delete.
   *
   * @public
   */
  branchName: string | undefined;
}

/**
 * Represents the output of a delete branch operation.
 *
 * @public
 */
export interface DeleteBranchOutput {
  /**
   * Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.
   *
   * @public
   */
  deletedBranch?: BranchInfo | undefined;
}

/**
 * @public
 */
export interface DeleteCommentContentInput {
  /**
   * The unique, system-generated ID of the comment. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
   *
   * @public
   */
  commentId: string | undefined;
}

/**
 * Returns information about a specific comment.
 *
 * @public
 */
export interface Comment {
  /**
   * The system-generated comment ID.
   *
   * @public
   */
  commentId?: string | undefined;

  /**
   * The content of the comment.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * The ID of the comment for which this comment is a reply, if any.
   *
   * @public
   */
  inReplyTo?: string | undefined;

  /**
   * The date and time the comment was created, in timestamp format.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date and time the comment was most recently modified, in timestamp format.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the person who posted the comment.
   *
   * @public
   */
  authorArn?: string | undefined;

  /**
   * A Boolean value indicating whether the comment has been deleted.
   *
   * @public
   */
  deleted?: boolean | undefined;

  /**
   * A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The emoji reactions to a comment, if any, submitted by the user whose credentials are associated with the call to the API.
   *
   * @public
   */
  callerReactions?: string[] | undefined;

  /**
   * A string to integer map that represents the number of individual users who have responded to a comment with the specified reactions.
   *
   * @public
   */
  reactionCounts?: Record<string, number> | undefined;
}

/**
 * @public
 */
export interface DeleteCommentContentOutput {
  /**
   * Information about the comment you just deleted.
   *
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface DeleteFileInput {
  /**
   * The name of the repository that contains the file to delete.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the branch where the commit that deletes the file is made.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The fully qualified path to the file that to be deleted, including the full name and extension of that file. For example, /examples/file.md is a fully qualified path to a file named file.md in a folder named examples.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The ID of the commit that is the tip of the branch where you want to create the commit that deletes the file. This must be the HEAD commit for the branch. The commit that deletes the file is created from this commit ID.
   *
   * @public
   */
  parentCommitId: string | undefined;

  /**
   * If a file is the only object in the folder or directory, specifies whether to delete the folder or directory that contains the file. By default, empty folders are deleted. This includes empty folders that are part of the directory structure. For example, if the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the last file in dir4 also deletes the empty folders dir4, dir3, and dir2.
   *
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * The commit message you want to include as part of deleting the file. Commit messages are limited to 256 KB. If no message is specified, a default message is used.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * The name of the author of the commit that deletes the file. If no name is specified, the user's ARN is used as the author name and committer name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The email address for the commit that deletes the file. If no email address is specified, the email address is left blank.
   *
   * @public
   */
  email?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFileOutput {
  /**
   * The full commit ID of the commit that contains the change that deletes the file.
   *
   * @public
   */
  commitId: string | undefined;

  /**
   * The blob ID removed from the tree as part of deleting the file.
   *
   * @public
   */
  blobId: string | undefined;

  /**
   * The full SHA-1 pointer of the tree information for the commit that contains the delete file change.
   *
   * @public
   */
  treeId: string | undefined;

  /**
   * The fully qualified path to the file to be deleted, including the full name and extension of that file.
   *
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface DeletePullRequestApprovalRuleInput {
  /**
   * The system-generated ID of the pull request that contains the approval rule you want to delete.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name of the approval rule you want to delete.
   *
   * @public
   */
  approvalRuleName: string | undefined;
}

/**
 * @public
 */
export interface DeletePullRequestApprovalRuleOutput {
  /**
   * The ID of the deleted approval rule.
   *
   * > **Note:** If the approval rule was deleted in an earlier API call, the response is 200 OK without content.
   *
   * @public
   */
  approvalRuleId: string | undefined;
}

/**
 * Represents the input of a delete repository operation.
 *
 * @public
 */
export interface DeleteRepositoryInput {
  /**
   * The name of the repository to delete.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * Represents the output of a delete repository operation.
 *
 * @public
 */
export interface DeleteRepositoryOutput {
  /**
   * The ID of the repository that was deleted.
   *
   * @public
   */
  repositoryId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMergeConflictsInput {
  /**
   * The name of the repository where you want to get information about a merge conflict.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The merge option or strategy you want to use to merge the code.
   *
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * The maximum number of merge hunks to include in the output.
   *
   * @public
   */
  maxMergeHunks?: number | undefined;

  /**
   * The path of the target files used to describe the conflicts.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMergeConflictsOutput {
  /**
   * Contains metadata about the conflicts found in the merge.
   *
   * @public
   */
  conflictMetadata: ConflictMetadata | undefined;

  /**
   * A list of merge hunks of the differences between the files or lines.
   *
   * @public
   */
  mergeHunks: MergeHunk[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The commit ID of the destination commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * The commit ID of the source commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * The commit ID of the merge base.
   *
   * @public
   */
  baseCommitId?: string | undefined;
}

/**
 * @public
 */
export interface DescribePullRequestEventsInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * Optional. The pull request event type about which you want to return information.
   *
   * @public
   */
  pullRequestEventType?: PullRequestEventType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with more commits or changing the status of a pull request.
   *
   * @public
   */
  actorArn?: string | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results. The default is 100 events, which is also the maximum number of events that can be returned in a result.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Metadata about the pull request that is used when comparing the pull request source with its destination.
 *
 * @public
 */
export interface PullRequestCreatedEventMetadata {
  /**
   * The name of the repository where the pull request was created.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The commit ID on the source branch used when the pull request was created.
   *
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * The commit ID of the tip of the branch specified as the destination branch when the pull request was created.
   *
   * @public
   */
  destinationCommitId?: string | undefined;

  /**
   * The commit ID of the most recent commit that the source branch and the destination branch have in common.
   *
   * @public
   */
  mergeBase?: string | undefined;
}

/**
 * Returns information about the change in the merge state for a pull request event.
 *
 * @public
 */
export interface PullRequestMergedStateChangedEventMetadata {
  /**
   * The name of the repository where the pull request was created.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The name of the branch that the pull request is merged into.
   *
   * @public
   */
  destinationReference?: string | undefined;

  /**
   * Information about the merge state change event.
   *
   * @public
   */
  mergeMetadata?: MergeMetadata | undefined;
}

/**
 * Information about an update to the source branch of a pull request.
 *
 * @public
 */
export interface PullRequestSourceReferenceUpdatedEventMetadata {
  /**
   * The name of the repository where the pull request was updated.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.
   *
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * The commit ID of the most recent commit that the source branch and the destination branch have in common.
   *
   * @public
   */
  mergeBase?: string | undefined;
}

/**
 * Information about a change to the status of a pull request.
 *
 * @public
 */
export interface PullRequestStatusChangedEventMetadata {
  /**
   * The changed status of the pull request.
   *
   * @public
   */
  pullRequestStatus?: PullRequestStatusEnum | undefined;
}

/**
 * Returns information about a pull request event.
 *
 * @public
 */
export interface PullRequestEvent {
  /**
   * The system-generated ID of the pull request.
   *
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * The day and time of the pull request event, in timestamp format.
   *
   * @public
   */
  eventDate?: Date | undefined;

  /**
   * The type of the pull request event (for example, a status change event (PULL_REQUEST_STATUS_CHANGED) or update event (PULL_REQUEST_SOURCE_REFERENCE_UPDATED)).
   *
   * @public
   */
  pullRequestEventType?: PullRequestEventType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with more commits or changing the status of a pull request.
   *
   * @public
   */
  actorArn?: string | undefined;

  /**
   * Information about the source and destination branches for the pull request.
   *
   * @public
   */
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata | undefined;

  /**
   * Information about the change in status for the pull request event.
   *
   * @public
   */
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata | undefined;

  /**
   * Information about the updated source branch for the pull request event.
   *
   * @public
   */
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata | undefined;

  /**
   * Information about the change in mergability state for the pull request event.
   *
   * @public
   */
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata | undefined;

  /**
   * Information about a pull request event.
   *
   * @public
   */
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata | undefined;

  /**
   * Information about an approval state change for a pull request.
   *
   * @public
   */
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata | undefined;

  /**
   * Information about an approval rule override event for a pull request.
   *
   * @public
   */
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata | undefined;
}

/**
 * @public
 */
export interface DescribePullRequestEventsOutput {
  /**
   * Information about the pull request events.
   *
   * @public
   */
  pullRequestEvents: PullRequestEvent[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
  /**
   * The name of the approval rule template to disassociate from a specified repository.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * The name of the repository you want to disassociate from the template.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * @public
 */
export interface EvaluatePullRequestApprovalRulesInput {
  /**
   * The system-generated ID of the pull request you want to evaluate.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The system-generated ID for the pull request revision. To retrieve the most recent revision ID for a pull request, use GetPullRequest.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * Returns information about the approval rules applied to a pull request and whether conditions have been met.
 *
 * @public
 */
export interface Evaluation {
  /**
   * Whether the state of the pull request is approved.
   *
   * @public
   */
  approved?: boolean | undefined;

  /**
   * Whether the approval rule requirements for the pull request have been overridden and no longer need to be met.
   *
   * @public
   */
  overridden?: boolean | undefined;

  /**
   * The names of the approval rules that have had their conditions met.
   *
   * @public
   */
  approvalRulesSatisfied?: string[] | undefined;

  /**
   * The names of the approval rules that have not had their conditions met.
   *
   * @public
   */
  approvalRulesNotSatisfied?: string[] | undefined;
}

/**
 * @public
 */
export interface EvaluatePullRequestApprovalRulesOutput {
  /**
   * The result of the evaluation, including the names of the rules whose conditions have been met (if any), the names of the rules whose conditions have not been met (if any), whether the pull request is in the approved state, and whether the pull request approval rule has been set aside by an override.
   *
   * @public
   */
  evaluation: Evaluation | undefined;
}

/**
 * @public
 */
export interface GetApprovalRuleTemplateInput {
  /**
   * The name of the approval rule template for which you want to get information.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface GetApprovalRuleTemplateOutput {
  /**
   * The content and structure of the approval rule template.
   *
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * Represents the input of a get blob operation.
 *
 * @public
 */
export interface GetBlobInput {
  /**
   * The name of the repository that contains the blob.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The ID of the blob, which is its SHA-1 pointer.
   *
   * @public
   */
  blobId: string | undefined;
}

/**
 * Represents the output of a get blob operation.
 *
 * @public
 */
export interface GetBlobOutput {
  /**
   * The content of the blob, usually a file.
   *
   * @public
   */
  content: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetBlobDifferencesInput {
  /**
   * The name of the repository that contains the blobs to compare.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The ID of the "after" (destination) blob in the diff. Typically the value of `afterBlob.blobId` from a `Difference` object returned by GetDifferences.
   *
   * @public
   */
  afterBlobId: string | undefined;

  /**
   * The ID of the "before" (source) blob in the diff. Typically the value of `beforeBlob.blobId` from a `Difference` object returned by GetDifferences.
   *
   * If you do not specify a value, the operation returns a diff against an empty before-state. This is equivalent to treating the file as newly added.
   *
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * The number of unchanged lines of context to include before and after each block of changes in a hunk. Valid values are 0 through 20. Defaults to `3`.
   *
   * @public
   */
  contextLines?: number | undefined;

  /**
   * Specifies whether to ignore whitespace-only changes when computing the diff. When `true`, the operation treats lines that differ only in whitespace as unchanged. Defaults to `false`.
   *
   * @public
   */
  ignoreWhitespace?: boolean | undefined;

  /**
   * The maximum number of `DiffHunk` entries to return in a single response page. Defaults to `100`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An enumeration token that returns the next batch of results when present in a request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A single line-level entry in a diff hunk. Each `DiffChange` describes one line and its change type: unchanged context, an addition in the after blob, or a deletion from the before blob.
 *
 * @public
 */
export interface DiffChange {
  /**
   * The type of change for this line. Possible values:
   *
   * - `CONTEXT` – Unchanged line included for surrounding context.
   * - `ADD` – Line added in the after blob.
   * - `DELETE` – Line removed from the before blob.
   *
   * @public
   */
  type?: DiffChangeType | undefined;

  /**
   * The 1-based line number in the before blob. This field is omitted for `ADD` lines.
   *
   * @public
   */
  beforeLineNumber?: number | undefined;

  /**
   * The 1-based line number in the after blob. This field is omitted for `DELETE` lines.
   *
   * @public
   */
  afterLineNumber?: number | undefined;

  /**
   * The text content of the line, without the trailing newline.
   *
   * @public
   */
  content?: string | undefined;
}

/**
 * A contiguous run of changed lines from a blob diff, together with any surrounding unchanged context lines. Hunks are returned in order from the start of the file to the end. Adjacent or overlapping hunks are merged into a single hunk in the response.
 *
 * @public
 */
export interface DiffHunk {
  /**
   * The 1-based line number in the before blob where this hunk begins. When the hunk consists entirely of additions, `beforeLineCount` is `0`.
   *
   * @public
   */
  beforeStartLine?: number | undefined;

  /**
   * The number of lines from the before blob covered by this hunk, including any context lines.
   *
   * @public
   */
  beforeLineCount?: number | undefined;

  /**
   * The 1-based line number in the after blob where this hunk begins. When the hunk consists entirely of deletions, `afterLineCount` is `0`.
   *
   * @public
   */
  afterStartLine?: number | undefined;

  /**
   * The number of lines from the after blob covered by this hunk, including any context lines.
   *
   * @public
   */
  afterLineCount?: number | undefined;

  /**
   * An ordered list of line-level changes that make up this hunk. Each entry indicates whether the line is unchanged context, an addition, or a deletion.
   *
   * @public
   */
  changes?: DiffChange[] | undefined;
}

/**
 * @public
 */
export interface GetBlobDifferencesOutput {
  /**
   * An ordered list of diff hunks. Each hunk represents a contiguous run of changed and adjacent context lines. The list is empty when the blobs are identical or when the content is binary. The list is also empty when a paginated request has already returned all hunks in earlier pages, in which case `NextToken` is also `null`.
   *
   * @public
   */
  hunks: DiffHunk[] | undefined;

  /**
   * Specifies whether the operation treated the diff content as binary. When `true`, the operation does not compute a line-level diff and `hunks` is empty.
   *
   * @public
   */
  isBinary: boolean | undefined;

  /**
   * The size, in bytes, of the blob identified by `beforeBlobId`. Returns `0` when you do not specify `beforeBlobId`.
   *
   * @public
   */
  beforeBlobSize?: number | undefined;

  /**
   * The size, in bytes, of the blob identified by `afterBlobId`.
   *
   * @public
   */
  afterBlobSize: number | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of `DiffHunk` entries. `null` when the response contains the final page of the diff.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the input of a get branch operation.
 *
 * @public
 */
export interface GetBranchInput {
  /**
   * The name of the repository that contains the branch for which you want to retrieve information.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The name of the branch for which you want to retrieve information.
   *
   * @public
   */
  branchName?: string | undefined;
}

/**
 * Represents the output of a get branch operation.
 *
 * @public
 */
export interface GetBranchOutput {
  /**
   * The name of the branch.
   *
   * @public
   */
  branch?: BranchInfo | undefined;
}

/**
 * @public
 */
export interface GetCommentInput {
  /**
   * The unique, system-generated ID of the comment. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
   *
   * @public
   */
  commentId: string | undefined;
}

/**
 * @public
 */
export interface GetCommentOutput {
  /**
   * The contents of the comment.
   *
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface GetCommentReactionsInput {
  /**
   * The ID of the comment for which you want to get reactions information.
   *
   * @public
   */
  commentId: string | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of the user or identity for which you want to get reaction information.
   *
   * @public
   */
  reactionUserArn?: string | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results. The default is the same as the allowed maximum, 1,000.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the values for reactions to a comment. CodeCommit supports a limited set of reactions.
 *
 * @public
 */
export interface ReactionValueFormats {
  /**
   * The Emoji Version 1.0 graphic of the reaction. These graphics are interpreted slightly differently on different operating systems.
   *
   * @public
   */
  emoji?: string | undefined;

  /**
   * The emoji short code for the reaction. Short codes are interpreted slightly differently on different operating systems.
   *
   * @public
   */
  shortCode?: string | undefined;

  /**
   * The Unicode codepoint for the reaction.
   *
   * @public
   */
  unicode?: string | undefined;
}

/**
 * Information about the reaction values provided by users on a comment.
 *
 * @public
 */
export interface ReactionForComment {
  /**
   * The reaction for a specified comment.
   *
   * @public
   */
  reaction?: ReactionValueFormats | undefined;

  /**
   * The Amazon Resource Names (ARNs) of users who have provided reactions to the comment.
   *
   * @public
   */
  reactionUsers?: string[] | undefined;

  /**
   * A numerical count of users who reacted with the specified emoji whose identities have been subsequently deleted from IAM. While these IAM users or roles no longer exist, the reactions might still appear in total reaction counts.
   *
   * @public
   */
  reactionsFromDeletedUsersCount?: number | undefined;
}

/**
 * @public
 */
export interface GetCommentReactionsOutput {
  /**
   * An array of reactions to the specified comment.
   *
   * @public
   */
  reactionsForComment: ReactionForComment[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCommentsForComparedCommitInput {
  /**
   * The name of the repository where you want to compare commits.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * To establish the directionality of the comparison, the full commit ID of the before commit.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * To establish the directionality of the comparison, the full commit ID of the after commit.
   *
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * An enumeration token that when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments, but you can configure up to 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Returns information about the location of a change or comment in the comparison between two commits or a pull request.
 *
 * @public
 */
export interface Location {
  /**
   * The name of the file being compared, including its extension and subdirectory, if any.
   *
   * @public
   */
  filePath?: string | undefined;

  /**
   * The position of a change in a compared file, in line number format.
   *
   * @public
   */
  filePosition?: number | undefined;

  /**
   * In a comparison of commits or a pull request, whether the change is in the before or after of that comparison.
   *
   * @public
   */
  relativeFileVersion?: RelativeFileVersionEnum | undefined;
}

/**
 * Returns information about comments on the comparison between two commits.
 *
 * @public
 */
export interface CommentsForComparedCommit {
  /**
   * The name of the repository that contains the compared commits.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The full commit ID of the commit used to establish the before of the comparison.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * The full commit ID of the commit used to establish the after of the comparison.
   *
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * The full blob ID of the commit used to establish the before of the comparison.
   *
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * The full blob ID of the commit used to establish the after of the comparison.
   *
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * Location information about the comment on the comparison, including the file name, line number, and whether the version of the file where the comment was made is BEFORE or AFTER.
   *
   * @public
   */
  location?: Location | undefined;

  /**
   * An array of comment objects. Each comment object contains information about a comment on the comparison between commits.
   *
   * @public
   */
  comments?: Comment[] | undefined;
}

/**
 * @public
 */
export interface GetCommentsForComparedCommitOutput {
  /**
   * A list of comment objects on the compared commit.
   *
   * @public
   */
  commentsForComparedCommitData?: CommentsForComparedCommit[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCommentsForPullRequestInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name of the repository that contains the pull request. Requirement is conditional: `repositoryName` must be specified when `beforeCommitId` and `afterCommitId` are included.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created. Requirement is conditional: `beforeCommitId` must be specified when `repositoryName` is included.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made. Requirement is conditional: `afterCommitId` must be specified when `repositoryName` is included.
   *
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments. You can return up to 500 comments with a single request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Returns information about comments on a pull request.
 *
 * @public
 */
export interface CommentsForPullRequest {
  /**
   * The system-generated ID of the pull request.
   *
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * The name of the repository that contains the pull request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The full commit ID of the commit that was the tip of the destination branch when the pull request was created. This commit is superceded by the after commit in the source branch when and if you merge the source branch into the destination branch.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * The full commit ID of the commit that was the tip of the source branch at the time the comment was made.
   *
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * The full blob ID of the file on which you want to comment on the destination commit.
   *
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * The full blob ID of the file on which you want to comment on the source commit.
   *
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * Location information about the comment on the pull request, including the file name, line number, and whether the version of the file where the comment was made is BEFORE (destination branch) or AFTER (source branch).
   *
   * @public
   */
  location?: Location | undefined;

  /**
   * An array of comment objects. Each comment object contains information about a comment on the pull request.
   *
   * @public
   */
  comments?: Comment[] | undefined;
}

/**
 * @public
 */
export interface GetCommentsForPullRequestOutput {
  /**
   * An array of comment objects on the pull request.
   *
   * @public
   */
  commentsForPullRequestData?: CommentsForPullRequest[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a get commit operation.
 *
 * @public
 */
export interface GetCommitInput {
  /**
   * The name of the repository to which the commit was made.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The commit ID. Commit IDs are the full SHA ID of the commit.
   *
   * @public
   */
  commitId: string | undefined;
}

/**
 * Represents the output of a get commit operation.
 *
 * @public
 */
export interface GetCommitOutput {
  /**
   * A commit data type object that contains information about the specified commit.
   *
   * @public
   */
  commit: Commit | undefined;
}

/**
 * @public
 */
export interface GetDifferencesInput {
  /**
   * The name of the repository where you want to get differences.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, the full commit ID). Optional. If not specified, all changes before the `afterCommitSpecifier` value are shown. If you do not use `beforeCommitSpecifier` in your request, consider limiting the results with `maxResults`.
   *
   * @public
   */
  beforeCommitSpecifier?: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit.
   *
   * @public
   */
  afterCommitSpecifier: string | undefined;

  /**
   * The file path in which to check for differences. Limits the results to this path. Can also be used to specify the previous name of a directory or folder. If `beforePath` and `afterPath` are not specified, differences are shown for all paths.
   *
   * @public
   */
  beforePath?: string | undefined;

  /**
   * The file path in which to check differences. Limits the results to this path. Can also be used to specify the changed name of a directory or folder, if it has changed. If not specified, differences are shown for all paths.
   *
   * @public
   */
  afterPath?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Returns information about a set of differences for a commit specifier.
 *
 * @public
 */
export interface Difference {
  /**
   * Information about a `beforeBlob` data type object, including the ID, the file mode permission code, and the path.
   *
   * @public
   */
  beforeBlob?: BlobMetadata | undefined;

  /**
   * Information about an `afterBlob` data type object, including the ID, the file mode permission code, and the path.
   *
   * @public
   */
  afterBlob?: BlobMetadata | undefined;

  /**
   * Whether the change type of the difference is an addition (A), deletion (D), or modification (M).
   *
   * @public
   */
  changeType?: ChangeTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetDifferencesOutput {
  /**
   * A data type object that contains information about the differences, including whether the difference is added, modified, or deleted (A, D, M).
   *
   * @public
   */
  differences?: Difference[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFileInput {
  /**
   * The name of the repository that contains the file.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The fully quaified reference that identifies the commit that contains the file. For example, you can specify a full commit ID, a tag, a branch name, or a reference such as refs/heads/main. If none is provided, the head commit is used.
   *
   * @public
   */
  commitSpecifier?: string | undefined;

  /**
   * The fully qualified path to the file, including the full name and extension of the file. For example, /examples/file.md is the fully qualified path to a file named file.md in a folder named examples.
   *
   * @public
   */
  filePath: string | undefined;
}

/**
 * @public
 */
export interface GetFileOutput {
  /**
   * The full commit ID of the commit that contains the content returned by GetFile.
   *
   * @public
   */
  commitId: string | undefined;

  /**
   * The blob ID of the object that represents the file content.
   *
   * @public
   */
  blobId: string | undefined;

  /**
   * The fully qualified path to the specified file. Returns the name and extension of the file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values.
   *
   * > **Note:** The file mode permissions returned by this API are not the standard file mode permission values, such as 100644, but rather extrapolated values. See the supported return values.
   *
   * @public
   */
  fileMode: FileModeTypeEnum | undefined;

  /**
   * The size of the contents of the file, in bytes.
   *
   * @public
   */
  fileSize: number | undefined;

  /**
   * The base-64 encoded binary data object that represents the content of the file.
   *
   * @public
   */
  fileContent: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetFolderInput {
  /**
   * The name of the repository.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * A fully qualified reference used to identify a commit that contains the version of the folder's content to return. A fully qualified reference can be a commit ID, branch name, tag, or reference such as HEAD. If no specifier is provided, the folder content is returned as it exists in the HEAD commit.
   *
   * @public
   */
  commitSpecifier?: string | undefined;

  /**
   * The fully qualified path to the folder whose contents are returned, including the folder name. For example, /examples is a fully-qualified path to a folder named examples that was created off of the root directory (/) of a repository.
   *
   * @public
   */
  folderPath: string | undefined;
}

/**
 * Returns information about a file in a repository.
 *
 * @public
 */
export interface File {
  /**
   * The blob ID that contains the file information.
   *
   * @public
   */
  blobId?: string | undefined;

  /**
   * The fully qualified path to the file in the repository.
   *
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * The relative path of the file from the folder where the query originated.
   *
   * @public
   */
  relativePath?: string | undefined;

  /**
   * The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.
   *
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * Returns information about a folder in a repository.
 *
 * @public
 */
export interface Folder {
  /**
   * The full SHA-1 pointer of the tree information for the commit that contains the folder.
   *
   * @public
   */
  treeId?: string | undefined;

  /**
   * The fully qualified path of the folder in the repository.
   *
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * The relative path of the specified folder from the folder where the query originated.
   *
   * @public
   */
  relativePath?: string | undefined;
}

/**
 * Returns information about a submodule reference in a repository folder.
 *
 * @public
 */
export interface SubModule {
  /**
   * The commit ID that contains the reference to the submodule.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * The fully qualified path to the folder that contains the reference to the submodule.
   *
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * The relative path of the submodule from the folder where the query originated.
   *
   * @public
   */
  relativePath?: string | undefined;
}

/**
 * Returns information about a symbolic link in a repository folder.
 *
 * @public
 */
export interface SymbolicLink {
  /**
   * The blob ID that contains the information about the symbolic link.
   *
   * @public
   */
  blobId?: string | undefined;

  /**
   * The fully qualified path to the folder that contains the symbolic link.
   *
   * @public
   */
  absolutePath?: string | undefined;

  /**
   * The relative path of the symbolic link from the folder where the query originated.
   *
   * @public
   */
  relativePath?: string | undefined;

  /**
   * The file mode permissions of the blob that cotains information about the symbolic link.
   *
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetFolderOutput {
  /**
   * The full commit ID used as a reference for the returned version of the folder content.
   *
   * @public
   */
  commitId: string | undefined;

  /**
   * The fully qualified path of the folder whose contents are returned.
   *
   * @public
   */
  folderPath: string | undefined;

  /**
   * The full SHA-1 pointer of the tree information for the commit that contains the folder.
   *
   * @public
   */
  treeId?: string | undefined;

  /**
   * The list of folders that exist under the specified folder, if any.
   *
   * @public
   */
  subFolders?: Folder[] | undefined;

  /**
   * The list of files in the specified folder, if any.
   *
   * @public
   */
  files?: File[] | undefined;

  /**
   * The list of symbolic links to other files and folders in the specified folder, if any.
   *
   * @public
   */
  symbolicLinks?: SymbolicLink[] | undefined;

  /**
   * The list of submodules in the specified folder, if any.
   *
   * @public
   */
  subModules?: SubModule[] | undefined;
}

/**
 * @public
 */
export interface GetMergeCommitInput {
  /**
   * The name of the repository that contains the merge commit about which you want to get information.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetMergeCommitOutput {
  /**
   * The commit ID of the source commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * The commit ID of the destination commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  destinationCommitId?: string | undefined;

  /**
   * The commit ID of the merge base.
   *
   * @public
   */
  baseCommitId?: string | undefined;

  /**
   * The commit ID for the merge commit created when the source branch was merged into the destination branch. If the fast-forward merge strategy was used, there is no merge commit.
   *
   * @public
   */
  mergedCommitId?: string | undefined;
}

/**
 * @public
 */
export interface GetMergeConflictsInput {
  /**
   * The name of the repository where the pull request was created.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The merge option or strategy you want to use to merge the code.
   *
   * @public
   */
  mergeOption: MergeOptionTypeEnum | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * The maximum number of files to include in the output.
   *
   * @public
   */
  maxConflictFiles?: number | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMergeConflictsOutput {
  /**
   * A Boolean value that indicates whether the code is mergeable by the specified merge option.
   *
   * @public
   */
  mergeable: boolean | undefined;

  /**
   * The commit ID of the destination commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * The commit ID of the source commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * The commit ID of the merge base.
   *
   * @public
   */
  baseCommitId?: string | undefined;

  /**
   * A list of metadata for any conflicting files. If the specified merge strategy is FAST_FORWARD_MERGE, this list is always empty.
   *
   * @public
   */
  conflictMetadataList: ConflictMetadata[] | undefined;

  /**
   * An enumeration token that can be used in a request to return the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMergeOptionsInput {
  /**
   * The name of the repository that contains the commits about which you want to get merge options.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;
}

/**
 * @public
 */
export interface GetMergeOptionsOutput {
  /**
   * The merge option or strategy used to merge the code.
   *
   * @public
   */
  mergeOptions: MergeOptionTypeEnum[] | undefined;

  /**
   * The commit ID of the source commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  sourceCommitId: string | undefined;

  /**
   * The commit ID of the destination commit specifier that was used in the merge evaluation.
   *
   * @public
   */
  destinationCommitId: string | undefined;

  /**
   * The commit ID of the merge base.
   *
   * @public
   */
  baseCommitId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestOutput {
  /**
   * Information about the specified pull request.
   *
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface GetPullRequestApprovalStatesInput {
  /**
   * The system-generated ID for the pull request.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The system-generated ID for the pull request revision.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestApprovalStatesOutput {
  /**
   * Information about users who have approved the pull request.
   *
   * @public
   */
  approvals?: Approval[] | undefined;
}

/**
 * @public
 */
export interface GetPullRequestOverrideStateInput {
  /**
   * The ID of the pull request for which you want to get information about whether approval rules have been set aside (overridden).
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The system-generated ID of the revision for the pull request. To retrieve the most recent revision ID, use GetPullRequest.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface GetPullRequestOverrideStateOutput {
  /**
   * A Boolean value that indicates whether a pull request has had its rules set aside (TRUE) or whether all approval rules still apply (FALSE).
   *
   * @public
   */
  overridden?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
   *
   * @public
   */
  overrider?: string | undefined;
}

/**
 * Represents the input of a get repository operation.
 *
 * @public
 */
export interface GetRepositoryInput {
  /**
   * The name of the repository to get information about.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * Represents the output of a get repository operation.
 *
 * @public
 */
export interface GetRepositoryOutput {
  /**
   * Information about the repository.
   *
   * @public
   */
  repositoryMetadata?: RepositoryMetadata | undefined;
}

/**
 * Represents the input of a get repository triggers operation.
 *
 * @public
 */
export interface GetRepositoryTriggersInput {
  /**
   * The name of the repository for which the trigger is configured.
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * Information about a trigger for a repository.
 *
 * > **Note:** If you want to receive notifications about repository events, consider using notifications instead of triggers. For more information, see [Configuring notifications for repository events](https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-repository-email.html).
 *
 * @public
 */
export interface RepositoryTrigger {
  /**
   * The name of the trigger.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).
   *
   * @public
   */
  destinationArn: string | undefined;

  /**
   * Any custom data associated with the trigger to be included in the information sent to the target of the trigger.
   *
   * @public
   */
  customData?: string | undefined;

  /**
   * The branches to be included in the trigger configuration. If you specify an empty array, the trigger applies to all branches.
   *
   * > **Note:** Although no content is required in the array, you must include the array itself.
   *
   * @public
   */
  branches?: string[] | undefined;

  /**
   * The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS.
   *
   * > **Note:** The valid value "all" cannot be used with any other values.
   *
   * @public
   */
  events: RepositoryTriggerEventEnum[] | undefined;
}

/**
 * Represents the output of a get repository triggers operation.
 *
 * @public
 */
export interface GetRepositoryTriggersOutput {
  /**
   * The system-generated unique ID for the trigger.
   *
   * @public
   */
  configurationId?: string | undefined;

  /**
   * The JSON block of configuration information for each trigger.
   *
   * @public
   */
  triggers?: RepositoryTrigger[] | undefined;
}

/**
 * @public
 */
export interface ListApprovalRuleTemplatesInput {
  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApprovalRuleTemplatesOutput {
  /**
   * The names of all the approval rule templates found in the Amazon Web Services Region for your Amazon Web Services account.
   *
   * @public
   */
  approvalRuleTemplateNames?: string[] | undefined;

  /**
   * An enumeration token that allows the operation to batch the next results of the operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  /**
   * The name of the repository for which you want to list all associated approval rule templates.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  /**
   * The names of all approval rule templates associated with the repository.
   *
   * @public
   */
  approvalRuleTemplateNames?: string[] | undefined;

  /**
   * An enumeration token that allows the operation to batch the next results of the operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a list branches operation.
 *
 * @public
 */
export interface ListBranchesInput {
  /**
   * The name of the repository that contains the branches.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * An enumeration token that allows the operation to batch the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the output of a list branches operation.
 *
 * @public
 */
export interface ListBranchesOutput {
  /**
   * The list of branch names.
   *
   * @public
   */
  branches?: string[] | undefined;

  /**
   * An enumeration token that returns the batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFileCommitHistoryRequest {
  /**
   * The name of the repository that contains the file.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The fully quaified reference that identifies the commit that contains the file. For example, you can specify a full commit ID, a tag, a branch name, or a reference such as `refs/heads/main`. If none is provided, the head commit is used.
   *
   * @public
   */
  commitSpecifier?: string | undefined;

  /**
   * The full path of the file whose history you want to retrieve, including the name of the file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An enumeration token that allows the operation to batch the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a version of a file.
 *
 * @public
 */
export interface FileVersion {
  /**
   * Returns information about a specific commit.
   *
   * @public
   */
  commit?: Commit | undefined;

  /**
   * The blob ID of the object that represents the content of the file in this version.
   *
   * @public
   */
  blobId?: string | undefined;

  /**
   * The name and path of the file at which this blob is indexed which contains the data for this version of the file. This value will vary between file versions if a file is renamed or if its path changes.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * An array of commit IDs that contain more recent versions of this file. If there are no additional versions of the file, this array will be empty.
   *
   * @public
   */
  revisionChildren?: string[] | undefined;
}

/**
 * @public
 */
export interface ListFileCommitHistoryResponse {
  /**
   * An array of FileVersion objects that form a directed acyclic graph (DAG) of the changes to the file made by the commits that changed the file.
   *
   * @public
   */
  revisionDag: FileVersion[] | undefined;

  /**
   * An enumeration token that can be used to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPullRequestsInput {
  /**
   * The name of the repository for which you want to list pull requests.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results to pull requests created by that user.
   *
   * @public
   */
  authorArn?: string | undefined;

  /**
   * Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.
   *
   * @public
   */
  pullRequestStatus?: PullRequestStatusEnum | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPullRequestsOutput {
  /**
   * The system-generated IDs of the pull requests.
   *
   * @public
   */
  pullRequestIds: string[] | undefined;

  /**
   * An enumeration token that allows the operation to batch the next results of the operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a list repositories operation.
 *
 * @public
 */
export interface ListRepositoriesInput {
  /**
   * An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit, another page of 1,000 records is retrieved.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The criteria used to sort the results of a list repositories operation.
   *
   * @public
   */
  sortBy?: SortByEnum | undefined;

  /**
   * The order in which to sort the results of a list repositories operation.
   *
   * @public
   */
  order?: OrderEnum | undefined;
}

/**
 * Information about a repository name and ID.
 *
 * @public
 */
export interface RepositoryNameIdPair {
  /**
   * The name associated with the repository.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The ID associated with the repository.
   *
   * @public
   */
  repositoryId?: string | undefined;
}

/**
 * Represents the output of a list repositories operation.
 *
 * @public
 */
export interface ListRepositoriesOutput {
  /**
   * Lists the repositories called by the list repositories operation.
   *
   * @public
   */
  repositories?: RepositoryNameIdPair[] | undefined;

  /**
   * An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit, another page of 1,000 records is retrieved.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateInput {
  /**
   * The name of the approval rule template for which you want to list repositories that are associated with that template.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A non-zero, non-negative integer used to limit the number of returned results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * A list of repository names that are associated with the specified approval rule template.
   *
   * @public
   */
  repositoryNames?: string[] | undefined;

  /**
   * An enumeration token that allows the operation to batch the next results of the operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to get information about tags, if any.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An enumeration token that, when provided in a request, returns the next batch of the results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * A list of tag key and value pairs associated with the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An enumeration token that allows the operation to batch the next results of the operation.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByFastForwardInput {
  /**
   * The name of the repository where you want to merge two branches.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The branch where the merge is applied.
   *
   * @public
   */
  targetBranch?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByFastForwardOutput {
  /**
   * The commit ID of the merge in the destination or target branch.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * The tree ID of the merge in the destination or target branch.
   *
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesBySquashInput {
  /**
   * The name of the repository where you want to merge two branches.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The branch where the merge is applied.
   *
   * @public
   */
  targetBranch?: string | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * The name of the author who created the commit. This information is used as both the author and committer for the commit.
   *
   * @public
   */
  authorName?: string | undefined;

  /**
   * The email address of the person merging the branches. This information is used in the commit information for the merge.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The commit message for the merge.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false.
   *
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
   *
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergeBranchesBySquashOutput {
  /**
   * The commit ID of the merge in the destination or target branch.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * The tree ID of the merge in the destination or target branch.
   *
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayInput {
  /**
   * The name of the repository where you want to merge two branches.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
   *
   * @public
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * The branch where the merge is applied.
   *
   * @public
   */
  targetBranch?: string | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * The name of the author who created the commit. This information is used as both the author and committer for the commit.
   *
   * @public
   */
  authorName?: string | undefined;

  /**
   * The email address of the person merging the branches. This information is used in the commit information for the merge.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * The commit message to include in the commit information for the merge.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false.
   *
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
   *
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayOutput {
  /**
   * The commit ID of the merge in the destination or target branch.
   *
   * @public
   */
  commitId?: string | undefined;

  /**
   * The tree ID of the merge in the destination or target branch.
   *
   * @public
   */
  treeId?: string | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name of the repository where the pull request was created.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.
   *
   * @public
   */
  sourceCommitId?: string | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardOutput {
  /**
   * Information about the specified pull request, including the merge.
   *
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * @public
 */
export interface MergePullRequestBySquashInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name of the repository where the pull request was created.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.
   *
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * The commit message to include in the commit information for the merge.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * The name of the author who created the commit. This information is used as both the author and committer for the commit.
   *
   * @public
   */
  authorName?: string | undefined;

  /**
   * The email address of the person merging the branches. This information is used in the commit information for the merge.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false.
   *
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
   *
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergePullRequestBySquashOutput {
  /**
   * Returns information about a pull request.
   *
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name of the repository where the pull request was created.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.
   *
   * @public
   */
  sourceCommitId?: string | undefined;

  /**
   * The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
   *
   * @public
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | undefined;

  /**
   * Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
   *
   * @public
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | undefined;

  /**
   * The commit message to include in the commit information for the merge.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * The name of the author who created the commit. This information is used as both the author and committer for the commit.
   *
   * @public
   */
  authorName?: string | undefined;

  /**
   * The email address of the person merging the branches. This information is used in the commit information for the merge.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a .gitkeep file is created for empty folders. The default is false.
   *
   * @public
   */
  keepEmptyFolders?: boolean | undefined;

  /**
   * If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
   *
   * @public
   */
  conflictResolution?: ConflictResolution | undefined;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayOutput {
  /**
   * Returns information about a pull request.
   *
   * @public
   */
  pullRequest?: PullRequest | undefined;
}

/**
 * @public
 */
export interface OverridePullRequestApprovalRulesInput {
  /**
   * The system-generated ID of the pull request for which you want to override all approval rule requirements. To get this information, use GetPullRequest.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request. To get the revision ID, use GetPullRequest.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply approval rule requirements (REVOKE). REVOKE status is not stored.
   *
   * @public
   */
  overrideStatus: OverrideStatus | undefined;
}

/**
 * @public
 */
export interface PostCommentForComparedCommitInput {
  /**
   * The name of the repository where you want to post a comment on the comparison between commits.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * To establish the directionality of the comparison, the full commit ID of the before commit. Required for commenting on any commit unless that commit is the initial commit.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * To establish the directionality of the comparison, the full commit ID of the after commit.
   *
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * The location of the comparison where you want to comment.
   *
   * @public
   */
  location?: Location | undefined;

  /**
   * The content of the comment you want to make.
   *
   * @public
   */
  content: string | undefined;

  /**
   * A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface PostCommentForComparedCommitOutput {
  /**
   * The name of the repository where you posted a comment on the comparison between commits.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * In the directionality you established, the full commit ID of the before commit.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * In the directionality you established, the full commit ID of the after commit.
   *
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * In the directionality you established, the blob ID of the before blob.
   *
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * In the directionality you established, the blob ID of the after blob.
   *
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * The location of the comment in the comparison between the two commits.
   *
   * @public
   */
  location?: Location | undefined;

  /**
   * The content of the comment you posted.
   *
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PostCommentForPullRequestInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name of the repository where you want to post a comment on a pull request.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.
   *
   * @public
   */
  beforeCommitId: string | undefined;

  /**
   * The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.
   *
   * @public
   */
  afterCommitId: string | undefined;

  /**
   * The location of the change where you want to post your comment. If no location is provided, the comment is posted as a general comment on the pull request difference between the before commit ID and the after commit ID.
   *
   * @public
   */
  location?: Location | undefined;

  /**
   * The content of your comment on the change.
   *
   * @public
   */
  content: string | undefined;

  /**
   * A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface PostCommentForPullRequestOutput {
  /**
   * The name of the repository where you posted a comment on a pull request.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The system-generated ID of the pull request.
   *
   * @public
   */
  pullRequestId?: string | undefined;

  /**
   * The full commit ID of the commit in the source branch used to create the pull request, or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.
   *
   * @public
   */
  beforeCommitId?: string | undefined;

  /**
   * The full commit ID of the commit in the destination branch where the pull request is merged.
   *
   * @public
   */
  afterCommitId?: string | undefined;

  /**
   * In the directionality of the pull request, the blob ID of the before blob.
   *
   * @public
   */
  beforeBlobId?: string | undefined;

  /**
   * In the directionality of the pull request, the blob ID of the after blob.
   *
   * @public
   */
  afterBlobId?: string | undefined;

  /**
   * The location of the change where you posted your comment.
   *
   * @public
   */
  location?: Location | undefined;

  /**
   * The content of the comment you posted.
   *
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PostCommentReplyInput {
  /**
   * The system-generated ID of the comment to which you want to reply. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
   *
   * @public
   */
  inReplyTo: string | undefined;

  /**
   * A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The contents of your reply to a comment.
   *
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface PostCommentReplyOutput {
  /**
   * Information about the reply to a comment.
   *
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * @public
 */
export interface PutCommentReactionInput {
  /**
   * The ID of the comment to which you want to add or update a reaction.
   *
   * @public
   */
  commentId: string | undefined;

  /**
   * The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none. For information about emoji reaction values supported in CodeCommit, see the [CodeCommit User Guide](https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-commit-comment.html#emoji-reaction-table).
   *
   * @public
   */
  reactionValue: string | undefined;
}

/**
 * @public
 */
export interface PutFileInput {
  /**
   * The name of the repository where you want to add or update the file.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the branch where you want to add or update the file. If this is an empty repository, this branch is created.
   *
   * @public
   */
  branchName: string | undefined;

  /**
   * The content of the file, in binary object format.
   *
   * @public
   */
  fileContent: Uint8Array | undefined;

  /**
   * The name of the file you want to add or update, including the relative path to the file in the repository.
   *
   * > **Note:** If the path does not currently exist in the repository, the path is created as part of adding the file.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The file mode permissions of the blob. Valid file mode permissions are listed here.
   *
   * @public
   */
  fileMode?: FileModeTypeEnum | undefined;

  /**
   * The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository, no commit ID is required. If this is not an empty repository, a commit ID is required.
   *
   * The commit ID must match the ID of the head commit at the time of the operation. Otherwise, an error occurs, and the file is not added or updated.
   *
   * @public
   */
  parentCommitId?: string | undefined;

  /**
   * A message about why this file was added or updated. Although it is optional, a message makes the commit history for your repository more useful.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * The name of the person adding or updating the file. Although it is optional, a name makes the commit history for your repository more useful.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * An email address for the person adding or updating the file.
   *
   * @public
   */
  email?: string | undefined;
}

/**
 * @public
 */
export interface PutFileOutput {
  /**
   * The full SHA ID of the commit that contains this file change.
   *
   * @public
   */
  commitId: string | undefined;

  /**
   * The ID of the blob, which is its SHA-1 pointer.
   *
   * @public
   */
  blobId: string | undefined;

  /**
   * The full SHA-1 pointer of the tree information for the commit that contains this file change.
   *
   * @public
   */
  treeId: string | undefined;
}

/**
 * Represents the input of a put repository triggers operation.
 *
 * @public
 */
export interface PutRepositoryTriggersInput {
  /**
   * The name of the repository where you want to create or update the trigger.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The JSON block of configuration information for each trigger.
   *
   * @public
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * Represents the output of a put repository triggers operation.
 *
 * @public
 */
export interface PutRepositoryTriggersOutput {
  /**
   * The system-generated unique ID for the create or update operation.
   *
   * @public
   */
  configurationId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The key-value pair to use when tagging this repository.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Represents the input of a test repository triggers operation.
 *
 * @public
 */
export interface TestRepositoryTriggersInput {
  /**
   * The name of the repository in which to test the triggers.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The list of triggers to test.
   *
   * @public
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * A trigger failed to run.
 *
 * @public
 */
export interface RepositoryTriggerExecutionFailure {
  /**
   * The name of the trigger that did not run.
   *
   * @public
   */
  trigger?: string | undefined;

  /**
   * Message information about the trigger that did not run.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * Represents the output of a test repository triggers operation.
 *
 * @public
 */
export interface TestRepositoryTriggersOutput {
  /**
   * The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.
   *
   * @public
   */
  successfulExecutions?: string[] | undefined;

  /**
   * The list of triggers that were not tested. This list provides the names of the triggers that could not be tested, separated by commas.
   *
   * @public
   */
  failedExecutions?: RepositoryTriggerExecutionFailure[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to which you want to remove tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag key for each tag that you want to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateContentInput {
  /**
   * The name of the approval rule template where you want to update the content of the rule.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * The content that replaces the existing content of the rule. Content statements must be complete. You cannot provide only the changes.
   *
   * @public
   */
  newRuleContent: string | undefined;

  /**
   * The SHA-256 hash signature for the content of the approval rule. You can retrieve this information by using GetPullRequest.
   *
   * @public
   */
  existingRuleContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateContentOutput {
  /**
   * Returns information about an approval rule template.
   *
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionInput {
  /**
   * The name of the template for which you want to update the description.
   *
   * @public
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * The updated description of the approval rule template.
   *
   * @public
   */
  approvalRuleTemplateDescription: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * The structure and content of the updated approval rule template.
   *
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameInput {
  /**
   * The current name of the approval rule template.
   *
   * @public
   */
  oldApprovalRuleTemplateName: string | undefined;

  /**
   * The new name you want to apply to the approval rule template.
   *
   * @public
   */
  newApprovalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameOutput {
  /**
   * The structure and content of the updated approval rule template.
   *
   * @public
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateCommentInput {
  /**
   * The system-generated ID of the comment you want to update. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
   *
   * @public
   */
  commentId: string | undefined;

  /**
   * The updated content to replace the existing content of the comment.
   *
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface UpdateCommentOutput {
  /**
   * Information about the updated comment.
   *
   * @public
   */
  comment?: Comment | undefined;
}

/**
 * Represents the input of an update default branch operation.
 *
 * @public
 */
export interface UpdateDefaultBranchInput {
  /**
   * The name of the repository for which you want to set or change the default branch.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the branch to set as the default branch.
   *
   * @public
   */
  defaultBranchName: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentInput {
  /**
   * The system-generated ID of the pull request.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The name of the approval rule you want to update.
   *
   * @public
   */
  approvalRuleName: string | undefined;

  /**
   * The SHA-256 hash signature for the content of the approval rule. You can retrieve this information by using GetPullRequest.
   *
   * @public
   */
  existingRuleContentSha256?: string | undefined;

  /**
   * The updated content for the approval rule.
   *
   * > **Note:**
   * >
   * > When you update the content of the approval rule, you can specify approvers in an approval pool in one of two ways:
   * >
   * > - **CodeCommitApprovers**: This option only requires an Amazon Web Services account and a resource. It can be used for both IAM users and federated access users whose name matches the provided resource name. This is a very powerful option that offers a great deal of flexibility. For example, if you specify the Amazon Web Services account *123456789012* and *Mary_Major*, all of the following are counted as approvals coming from that user:
   * >
   * >   - An IAM user in the account (arn:aws:iam::*123456789012*:user/*Mary_Major*)
   * >   - A federated user identified in IAM as Mary_Major (arn:aws:sts::*123456789012*:federated-user/*Mary_Major*)
   * >
   * >   This option does not recognize an active session of someone assuming the role of CodeCommitReview with a role session name of *Mary_Major* (arn:aws:sts::*123456789012*:assumed-role/CodeCommitReview/*Mary_Major*) unless you include a wildcard (*Mary_Major).
   * > - **Fully qualified ARN**: This option allows you to specify the fully qualified Amazon Resource Name (ARN) of the IAM user or role.
   * >
   * > For more information about IAM ARNs, wildcards, and formats, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  newRuleContent: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentOutput {
  /**
   * Information about the updated approval rule.
   *
   * @public
   */
  approvalRule: ApprovalRule | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalStateInput {
  /**
   * The system-generated ID of the pull request.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The system-generated ID of the revision.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The approval state to associate with the user on the pull request.
   *
   * @public
   */
  approvalState: ApprovalState | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The updated content of the description for the pull request. This content replaces the existing description.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionOutput {
  /**
   * Information about the updated pull request.
   *
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestStatusInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The status of the pull request. The only valid operations are to update the status from `OPEN` to `OPEN`, `OPEN` to `CLOSED` or from `CLOSED` to `CLOSED`.
   *
   * @public
   */
  pullRequestStatus: PullRequestStatusEnum | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestStatusOutput {
  /**
   * Information about the pull request.
   *
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleInput {
  /**
   * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
   *
   * @public
   */
  pullRequestId: string | undefined;

  /**
   * The updated title of the pull request. This replaces the existing title.
   *
   * @public
   */
  title: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleOutput {
  /**
   * Information about the updated pull request.
   *
   * @public
   */
  pullRequest: PullRequest | undefined;
}

/**
 * Represents the input of an update repository description operation.
 *
 * @public
 */
export interface UpdateRepositoryDescriptionInput {
  /**
   * The name of the repository to set or change the comment or description for.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.
   *
   * @public
   */
  repositoryDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryEncryptionKeyInput {
  /**
   * The name of the repository for which you want to update the KMS encryption key used to encrypt and decrypt the repository.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The ID of the encryption key. You can view the ID of an encryption key in the KMS console, or use the KMS APIs to programmatically retrieve a key ID. For more information about acceptable values for keyID, see [KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html#KMS-Decrypt-request-KeyId) in the Decrypt API description in the *Key Management Service API Reference*.
   *
   * @public
   */
  kmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRepositoryEncryptionKeyOutput {
  /**
   * The ID of the repository.
   *
   * @public
   */
  repositoryId?: string | undefined;

  /**
   * The ID of the encryption key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The ID of the encryption key formerly used to encrypt and decrypt the repository.
   *
   * @public
   */
  originalKmsKeyId?: string | undefined;
}

/**
 * Represents the input of an update repository description operation.
 *
 * @public
 */
export interface UpdateRepositoryNameInput {
  /**
   * The current name of the repository.
   *
   * @public
   */
  oldName: string | undefined;

  /**
   * The new name for the repository.
   *
   * @public
   */
  newName: string | undefined;
}
