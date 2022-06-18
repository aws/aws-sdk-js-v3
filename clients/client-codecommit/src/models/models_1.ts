// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CodeCommitServiceException as __BaseException } from "./CodeCommitServiceException";

export enum ApprovalState {
  APPROVE = "APPROVE",
  REVOKE = "REVOKE",
}

/**
 * <p>Returns information about a specific approval on a pull request.</p>
 */
export interface Approval {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  userArn?: string;

  /**
   * <p>The state of the approval, APPROVE or REVOKE. REVOKE states are not stored.</p>
   */
  approvalState?: ApprovalState | string;
}

export namespace Approval {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Approval): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the template that created the approval rule for a pull request.</p>
 */
export interface OriginApprovalRuleTemplate {
  /**
   * <p>The ID of the template that created the approval rule.</p>
   */
  approvalRuleTemplateId?: string;

  /**
   * <p>The name of the template that created the approval rule.</p>
   */
  approvalRuleTemplateName?: string;
}

export namespace OriginApprovalRuleTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginApprovalRuleTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an approval rule.</p>
 */
export interface ApprovalRule {
  /**
   * <p>The system-generated ID of the approval rule.</p>
   */
  approvalRuleId?: string;

  /**
   * <p>The name of the approval rule.</p>
   */
  approvalRuleName?: string;

  /**
   * <p>The content of the approval rule.</p>
   */
  approvalRuleContent?: string;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule.</p>
   */
  ruleContentSha256?: string;

  /**
   * <p>The date the approval rule was most recently changed, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The date the approval rule was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule.</p>
   */
  lastModifiedUser?: string;

  /**
   * <p>The approval rule template used to create the rule.</p>
   */
  originApprovalRuleTemplate?: OriginApprovalRuleTemplate;
}

export namespace ApprovalRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApprovalRule): any => ({
    ...obj,
  });
}

/**
 * <p>The specified approval rule does not exist.</p>
 */
export class ApprovalRuleDoesNotExistException extends __BaseException {
  readonly name: "ApprovalRuleDoesNotExistException" = "ApprovalRuleDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleDoesNotExistException, __BaseException>) {
    super({
      name: "ApprovalRuleDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleDoesNotExistException.prototype);
  }
}

/**
 * <p>Returns information about an event for an approval rule.</p>
 */
export interface ApprovalRuleEventMetadata {
  /**
   * <p>The name of the approval rule.</p>
   */
  approvalRuleName?: string;

  /**
   * <p>The system-generated ID of the approval rule.</p>
   */
  approvalRuleId?: string;

  /**
   * <p>The content of the approval rule.</p>
   */
  approvalRuleContent?: string;
}

export namespace ApprovalRuleEventMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApprovalRuleEventMetadata): any => ({
    ...obj,
  });
}

export enum OverrideStatus {
  OVERRIDE = "OVERRIDE",
  REVOKE = "REVOKE",
}

/**
 * <p>Returns information about an override event for approval rules for a pull request.</p>
 */
export interface ApprovalRuleOverriddenEventMetadata {
  /**
   * <p>The revision ID of the pull request when the override event occurred.</p>
   */
  revisionId?: string;

  /**
   * <p>The status of the override event.</p>
   */
  overrideStatus?: OverrideStatus | string;
}

export namespace ApprovalRuleOverriddenEventMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApprovalRuleOverriddenEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an approval rule template.</p>
 */
export interface ApprovalRuleTemplate {
  /**
   * <p>The system-generated ID of the approval rule template.</p>
   */
  approvalRuleTemplateId?: string;

  /**
   * <p>The name of the approval rule template.</p>
   */
  approvalRuleTemplateName?: string;

  /**
   * <p>The description of the approval rule template.</p>
   */
  approvalRuleTemplateDescription?: string;

  /**
   * <p>The content of the approval rule template.</p>
   */
  approvalRuleTemplateContent?: string;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule template.</p>
   */
  ruleContentSha256?: string;

  /**
   * <p>The date the approval rule template was most recently changed, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The date the approval rule template was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.</p>
   */
  lastModifiedUser?: string;
}

export namespace ApprovalRuleTemplate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApprovalRuleTemplate): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a change in the approval state for a pull request.</p>
 */
export interface ApprovalStateChangedEventMetadata {
  /**
   * <p>The revision ID of the pull request when the approval state changed.</p>
   */
  revisionId?: string;

  /**
   * <p>The approval status for the pull request.</p>
   */
  approvalStatus?: ApprovalState | string;
}

export namespace ApprovalStateChangedEventMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApprovalStateChangedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>An approval state is required, but was not specified.</p>
 */
export class ApprovalStateRequiredException extends __BaseException {
  readonly name: "ApprovalStateRequiredException" = "ApprovalStateRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalStateRequiredException, __BaseException>) {
    super({
      name: "ApprovalStateRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalStateRequiredException.prototype);
  }
}

/**
 * <p>Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.</p>
 */
export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  /**
   * <p>The name of the repository where the association was not made.</p>
   */
  repositoryName?: string;

  /**
   * <p>An error code that specifies whether the repository name was not valid or not found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides details about why the repository name was not found or not valid.</p>
   */
  errorMessage?: string;
}

export namespace BatchAssociateApprovalRuleTemplateWithRepositoriesError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateApprovalRuleTemplateWithRepositoriesError): any => ({
    ...obj,
  });
}

export enum ConflictDetailLevelTypeEnum {
  FILE_LEVEL = "FILE_LEVEL",
  LINE_LEVEL = "LINE_LEVEL",
}

export enum ConflictResolutionStrategyTypeEnum {
  ACCEPT_DESTINATION = "ACCEPT_DESTINATION",
  ACCEPT_SOURCE = "ACCEPT_SOURCE",
  AUTOMERGE = "AUTOMERGE",
  NONE = "NONE",
}

export enum MergeOptionTypeEnum {
  FAST_FORWARD_MERGE = "FAST_FORWARD_MERGE",
  SQUASH_MERGE = "SQUASH_MERGE",
  THREE_WAY_MERGE = "THREE_WAY_MERGE",
}

export enum FileModeTypeEnum {
  EXECUTABLE = "EXECUTABLE",
  NORMAL = "NORMAL",
  SYMLINK = "SYMLINK",
}

/**
 * <p>Information about file modes in a merge or pull request.</p>
 */
export interface FileModes {
  /**
   * <p>The file mode of a file in the source of a merge or pull request.</p>
   */
  source?: FileModeTypeEnum | string;

  /**
   * <p>The file mode of a file in the destination of a merge or pull request.</p>
   */
  destination?: FileModeTypeEnum | string;

  /**
   * <p>The file mode of a file in the base of a merge or pull request.</p>
   */
  base?: FileModeTypeEnum | string;
}

export namespace FileModes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileModes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the size of files in a merge or pull request.</p>
 */
export interface FileSizes {
  /**
   * <p>The  size of a file in the source of a merge or pull request.</p>
   */
  source?: number;

  /**
   * <p>The size of a file in the destination of a merge or pull request.</p>
   */
  destination?: number;

  /**
   * <p>The size of a file in the base of a merge or pull request.</p>
   */
  base?: number;
}

export namespace FileSizes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSizes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about whether a file is binary or textual in a merge or pull request operation.</p>
 */
export interface IsBinaryFile {
  /**
   * <p>The binary or non-binary status of file in the source of a merge or pull request.</p>
   */
  source?: boolean;

  /**
   * <p>The binary or non-binary status of a file in the destination of a merge or pull request.</p>
   */
  destination?: boolean;

  /**
   * <p>The binary or non-binary status of a file in the base of a merge or pull request.</p>
   */
  base?: boolean;
}

export namespace IsBinaryFile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IsBinaryFile): any => ({
    ...obj,
  });
}

export enum ChangeTypeEnum {
  ADDED = "A",
  DELETED = "D",
  MODIFIED = "M",
}

/**
 * <p>Information about the file operation conflicts in a merge operation.</p>
 */
export interface MergeOperations {
  /**
   * <p>The operation (add, modify, or delete) on a file in the source of a merge or pull
   *             request.</p>
   */
  source?: ChangeTypeEnum | string;

  /**
   * <p>The operation on a file in the destination of a merge or pull request.</p>
   */
  destination?: ChangeTypeEnum | string;
}

export namespace MergeOperations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeOperations): any => ({
    ...obj,
  });
}

export enum ObjectTypeEnum {
  DIRECTORY = "DIRECTORY",
  FILE = "FILE",
  GIT_LINK = "GIT_LINK",
  SYMBOLIC_LINK = "SYMBOLIC_LINK",
}

/**
 * <p>Information about the type of an object in a merge operation.</p>
 */
export interface ObjectTypes {
  /**
   * <p>The type of the object in the source branch.</p>
   */
  source?: ObjectTypeEnum | string;

  /**
   * <p>The type of the object in the destination branch.</p>
   */
  destination?: ObjectTypeEnum | string;

  /**
   * <p>The type of the object in the base commit of the merge.</p>
   */
  base?: ObjectTypeEnum | string;
}

export namespace ObjectTypes {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObjectTypes): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the metadata for a conflict in a merge operation.</p>
 */
export interface ConflictMetadata {
  /**
   * <p>The path of the file that contains conflicts.</p>
   */
  filePath?: string;

  /**
   * <p>The file sizes of the file in the source, destination, and base of the merge.</p>
   */
  fileSizes?: FileSizes;

  /**
   * <p>The file modes of the file in the source, destination, and base of the merge.</p>
   */
  fileModes?: FileModes;

  /**
   * <p>Information about any object type conflicts in a merge operation.</p>
   */
  objectTypes?: ObjectTypes;

  /**
   * <p>The number of conflicts, including both hunk conflicts and metadata conflicts.</p>
   */
  numberOfConflicts?: number;

  /**
   * <p>A boolean value (true or false) indicating whether the file is binary or textual in the source, destination, and base of the merge.</p>
   */
  isBinaryFile?: IsBinaryFile;

  /**
   * <p>A boolean value indicating whether there are conflicts in the content of a file.</p>
   */
  contentConflict?: boolean;

  /**
   * <p>A boolean value indicating whether there are conflicts in the file mode of a file.</p>
   */
  fileModeConflict?: boolean;

  /**
   * <p>A boolean value (true or false) indicating whether there are conflicts between the branches in the object type of a file, folder, or submodule.</p>
   */
  objectTypeConflict?: boolean;

  /**
   * <p>Whether an add, modify, or delete operation caused the conflict between the source and destination of the merge.</p>
   */
  mergeOperations?: MergeOperations;
}

export namespace ConflictMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.</p>
 */
export interface MergeHunkDetail {
  /**
   * <p>The start position of the hunk in the merge result.</p>
   */
  startLine?: number;

  /**
   * <p>The end position of the hunk in the merge result.</p>
   */
  endLine?: number;

  /**
   * <p>The base-64 encoded content of the hunk merged region that might contain a
   *             conflict.</p>
   */
  hunkContent?: string;
}

export namespace MergeHunkDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeHunkDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Information about merge hunks in a merge or pull request operation.</p>
 */
export interface MergeHunk {
  /**
   * <p>A Boolean value indicating whether a combination of hunks contains a conflict.
   *             Conflicts occur when the same file or the same lines in a file were modified in both the
   *             source and destination of a merge or pull request. Valid values include true, false, and
   *             null. True when the hunk represents a conflict and one or more files contains a line
   *             conflict. File mode conflicts in a merge do not set this to true.</p>
   */
  isConflict?: boolean;

  /**
   * <p>Information about the merge hunk in the source of a merge or pull request.</p>
   */
  source?: MergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the destination of a merge or pull request.</p>
   */
  destination?: MergeHunkDetail;

  /**
   * <p>Information about the merge hunk in the base of a merge or pull request.</p>
   */
  base?: MergeHunkDetail;
}

export namespace MergeHunk {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeHunk): any => ({
    ...obj,
  });
}

/**
 * <p>Information about conflicts in a merge operation.</p>
 */
export interface Conflict {
  /**
   * <p>Metadata about a conflict in a merge operation.</p>
   */
  conflictMetadata?: ConflictMetadata;

  /**
   * <p>A list of hunks that contain the differences between files or lines causing the conflict.</p>
   */
  mergeHunks?: MergeHunk[];
}

export namespace Conflict {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Conflict): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about errors in a BatchDescribeMergeConflicts operation.</p>
 */
export interface BatchDescribeMergeConflictsError {
  /**
   * <p>The path to the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The name of the exception.</p>
   */
  exceptionName: string | undefined;

  /**
   * <p>The message provided by the exception.</p>
   */
  message: string | undefined;
}

export namespace BatchDescribeMergeConflictsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeMergeConflictsError): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.</p>
 */
export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  /**
   * <p>The name of the repository where the association with the template was not able to be removed.</p>
   */
  repositoryName?: string;

  /**
   * <p>An error code that specifies whether the repository name was not valid or not
   *             found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides details about why the repository name was either not found or not valid.</p>
   */
  errorMessage?: string;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesError): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the user who made a specified commit.</p>
 */
export interface UserInfo {
  /**
   * <p>The name of the user who made the specified commit.</p>
   */
  name?: string;

  /**
   * <p>The email address associated with the user who made the commit, if any.</p>
   */
  email?: string;

  /**
   * <p>The date when the specified commit was commited, in timestamp format with GMT offset.</p>
   */
  date?: string;
}

export namespace UserInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a specific commit.</p>
 */
export interface Commit {
  /**
   * <p>The full SHA ID of the specified commit. </p>
   */
  commitId?: string;

  /**
   * <p>Tree information for the specified commit.</p>
   */
  treeId?: string;

  /**
   * <p>A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.</p>
   */
  parents?: string[];

  /**
   * <p>The commit message associated with the specified commit.</p>
   */
  message?: string;

  /**
   * <p>Information about the author of the specified commit. Information includes
   *             the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured
   *             in Git.</p>
   */
  author?: UserInfo;

  /**
   * <p>Information about the person who committed the specified commit, also known as the committer. Information includes
   *         the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured
   *         in Git.</p>
   *         <p>For more information
   *             about the difference between an author and a committer in Git, see <a href="http://git-scm.com/book/ch2-3.html">Viewing the Commit History</a> in Pro Git
   *             by Scott Chacon and Ben Straub.</p>
   */
  committer?: UserInfo;

  /**
   * <p>Any other data associated with the specified commit.</p>
   */
  additionalData?: string;
}

export namespace Commit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Commit): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about errors in a BatchGetCommits operation.</p>
 */
export interface BatchGetCommitsError {
  /**
   * <p>A commit ID that either could not be found or was not in a valid format.</p>
   */
  commitId?: string;

  /**
   * <p>An error code that specifies whether the commit ID was not valid or not found.</p>
   */
  errorCode?: string;

  /**
   * <p>An error message that provides detail about why the commit ID either was not found or was not valid.</p>
   */
  errorMessage?: string;
}

export namespace BatchGetCommitsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCommitsError): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a repository.</p>
 */
export interface RepositoryMetadata {
  /**
   * <p>The ID of the AWS account associated with the repository.</p>
   */
  accountId?: string;

  /**
   * <p>The ID of the repository.</p>
   */
  repositoryId?: string;

  /**
   * <p>The repository's name.</p>
   */
  repositoryName?: string;

  /**
   * <p>A comment or description about the repository.</p>
   */
  repositoryDescription?: string;

  /**
   * <p>The repository's default branch name.</p>
   */
  defaultBranch?: string;

  /**
   * <p>The date and time the repository was last modified, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The date and time the repository was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The URL to use for cloning the repository over HTTPS.</p>
   */
  cloneUrlHttp?: string;

  /**
   * <p>The URL to use for cloning the repository over SSH.</p>
   */
  cloneUrlSsh?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the repository.</p>
   */
  Arn?: string;
}

export namespace RepositoryMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a specific Git blob object.</p>
 */
export interface BlobMetadata {
  /**
   * <p>The full ID of the blob.</p>
   */
  blobId?: string;

  /**
   * <p>The path to the blob and associated file name, if any.</p>
   */
  path?: string;

  /**
   * <p>The file mode permissions of the blob. File mode permission codes include:</p>
   *         <ul>
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
   */
  mode?: string;
}

export namespace BlobMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlobMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a branch.</p>
 */
export interface BranchInfo {
  /**
   * <p>The name of the branch.</p>
   */
  branchName?: string;

  /**
   * <p>The ID of the last commit made to the branch.</p>
   */
  commitId?: string;
}

export namespace BranchInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BranchInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The approval rule cannot be modified for the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 */
export class CannotModifyApprovalRuleFromTemplateException extends __BaseException {
  readonly name: "CannotModifyApprovalRuleFromTemplateException" = "CannotModifyApprovalRuleFromTemplateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotModifyApprovalRuleFromTemplateException, __BaseException>) {
    super({
      name: "CannotModifyApprovalRuleFromTemplateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotModifyApprovalRuleFromTemplateException.prototype);
  }
}

/**
 * <p>A file that is deleted as part of a commit.</p>
 */
export interface DeleteFileEntry {
  /**
   * <p>The full path of the file to be deleted, including the name of the file.</p>
   */
  filePath: string | undefined;
}

export namespace DeleteFileEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a source file that is part of changes made in a commit.</p>
 */
export interface SourceFileSpecifier {
  /**
   * <p>The full path to the file, including the name of the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>Whether to remove the source file from the parent commit.</p>
   */
  isMove?: boolean;
}

export namespace SourceFileSpecifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceFileSpecifier): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a file added or updated as part of a commit.</p>
 */
export interface PutFileEntry {
  /**
   * <p>The full path to the file in the repository, including the name of the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The content of the file, if a source file is not specified.</p>
   */
  fileContent?: Uint8Array;

  /**
   * <p>The name and full path of the file that contains the changes you want to make as part of the commit,
   *         if you are not providing the file content directly.</p>
   */
  sourceFile?: SourceFileSpecifier;
}

export namespace PutFileEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFileEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the file mode changes.</p>
 */
export interface SetFileModeEntry {
  /**
   * <p>The full path to the file, including the name of the file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The file mode for the file.</p>
   */
  fileMode: FileModeTypeEnum | string | undefined;
}

export namespace SetFileModeEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetFileModeEntry): any => ({
    ...obj,
  });
}

/**
 * <p>A file to be added, updated, or deleted as part of a commit.</p>
 */
export interface FileMetadata {
  /**
   * <p>The full path to the file to be added or updated, including the name of the
   *             file.</p>
   */
  absolutePath?: string;

  /**
   * <p>The blob ID that contains the file information.</p>
   */
  blobId?: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace FileMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a target for a pull request.</p>
 */
export interface Target {
  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   */
  sourceReference: string | undefined;

  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch.</p>
   */
  destinationReference?: string;
}

export namespace Target {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
  });
}

export enum PullRequestStatusEnum {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
}

/**
 * <p>Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.</p>
 */
export interface MergeMetadata {
  /**
   * <p>A Boolean value indicating whether the merge has been made.</p>
   */
  isMerged?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who merged the branches.</p>
   */
  mergedBy?: string;

  /**
   * <p>The commit ID for the merge commit, if any.</p>
   */
  mergeCommitId?: string;

  /**
   * <p>The merge strategy used in the merge.</p>
   */
  mergeOption?: MergeOptionTypeEnum | string;
}

export namespace MergeMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a pull request target.</p>
 */
export interface PullRequestTarget {
  /**
   * <p>The name of the repository that contains the pull request source and destination branches.</p>
   */
  repositoryName?: string;

  /**
   * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
   */
  sourceReference?: string;

  /**
   * <p>The branch of the repository where the pull request changes are merged. Also known as
   *             the destination branch. </p>
   */
  destinationReference?: string;

  /**
   * <p>The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.</p>
   */
  destinationCommit?: string;

  /**
   * <p>The full commit ID of the tip of the source branch used to create the pull request. If
   *             the pull request branch is updated by a push while the pull request is open, the commit
   *             ID changes to reflect the new tip of the branch.</p>
   */
  sourceCommit?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;

  /**
   * <p>Returns metadata about the state of the merge, including whether the merge has been made.</p>
   */
  mergeMetadata?: MergeMetadata;
}

export namespace PullRequestTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PullRequestTarget): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a pull request.</p>
 */
export interface PullRequest {
  /**
   * <p>The system-generated ID of the pull request. </p>
   */
  pullRequestId?: string;

  /**
   * <p>The user-defined title of the pull request. This title is displayed in the list of
   *             pull requests to other repository users.</p>
   */
  title?: string;

  /**
   * <p>The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.</p>
   */
  description?: string;

  /**
   * <p>The day and time of the last user or system activity on the pull request, in timestamp format.</p>
   */
  lastActivityDate?: Date;

  /**
   * <p>The date and time the pull request was originally created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The status of the pull request. Pull request status can only change from <code>OPEN</code> to <code>CLOSED</code>.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the pull request.</p>
   */
  authorArn?: string;

  /**
   * <p>The targets of the pull request, including the source branch and destination branch for the pull request.</p>
   */
  pullRequestTargets?: PullRequestTarget[];

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The system-generated revision ID for the pull request.</p>
   */
  revisionId?: string;

  /**
   * <p>The approval rules applied to the pull request.</p>
   */
  approvalRules?: ApprovalRule[];
}

export namespace PullRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PullRequest): any => ({
    ...obj,
  });
}

export enum ReplacementTypeEnum {
  KEEP_BASE = "KEEP_BASE",
  KEEP_DESTINATION = "KEEP_DESTINATION",
  KEEP_SOURCE = "KEEP_SOURCE",
  USE_NEW_CONTENT = "USE_NEW_CONTENT",
}

/**
 * <p>Information about a replacement content entry in the conflict of a merge or pull request operation.</p>
 */
export interface ReplaceContentEntry {
  /**
   * <p>The path of the conflicting file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The replacement type to use when determining how to resolve the conflict.</p>
   */
  replacementType: ReplacementTypeEnum | string | undefined;

  /**
   * <p>The base-64 encoded content to use when the replacement type is USE_NEW_CONTENT.</p>
   */
  content?: Uint8Array;

  /**
   * <p>The file mode to apply during conflict resoltion.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace ReplaceContentEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReplaceContentEntry): any => ({
    ...obj,
  });
}

/**
 * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
 *             resolving conflicts during a merge.</p>
 */
export interface ConflictResolution {
  /**
   * <p>Files to have content replaced as part of the merge conflict resolution.</p>
   */
  replaceContents?: ReplaceContentEntry[];

  /**
   * <p>Files to be deleted as part of the merge conflict resolution.</p>
   */
  deleteFiles?: DeleteFileEntry[];

  /**
   * <p>File modes that are set as part of the merge conflict resolution.</p>
   */
  setFileModes?: SetFileModeEntry[];
}

export namespace ConflictResolution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictResolution): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a specific comment.</p>
 */
export interface Comment {
  /**
   * <p>The system-generated comment ID.</p>
   */
  commentId?: string;

  /**
   * <p>The content of the comment.</p>
   */
  content?: string;

  /**
   * <p>The ID of the comment for which this comment is a reply, if any.</p>
   */
  inReplyTo?: string;

  /**
   * <p>The date and time the comment was created, in timestamp format.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time the comment was most recently modified, in timestamp format.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the person who posted the comment.</p>
   */
  authorArn?: string;

  /**
   * <p>A Boolean value indicating whether the comment has been deleted.</p>
   */
  deleted?: boolean;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The emoji reactions to a comment, if any, submitted by the user whose credentials are associated with the call to the API.</p>
   */
  callerReactions?: string[];

  /**
   * <p>A string to integer map that represents the number of individual users who have responded to a comment with the specified reactions.</p>
   */
  reactionCounts?: Record<string, number>;
}

export namespace Comment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Comment): any => ({
    ...obj,
  });
}

export enum PullRequestEventType {
  PULL_REQUEST_APPROVAL_RULE_CREATED = "PULL_REQUEST_APPROVAL_RULE_CREATED",
  PULL_REQUEST_APPROVAL_RULE_DELETED = "PULL_REQUEST_APPROVAL_RULE_DELETED",
  PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN",
  PULL_REQUEST_APPROVAL_RULE_UPDATED = "PULL_REQUEST_APPROVAL_RULE_UPDATED",
  PULL_REQUEST_APPROVAL_STATE_CHANGED = "PULL_REQUEST_APPROVAL_STATE_CHANGED",
  PULL_REQUEST_CREATED = "PULL_REQUEST_CREATED",
  PULL_REQUEST_MERGE_STATE_CHANGED = "PULL_REQUEST_MERGE_STATE_CHANGED",
  PULL_REQUEST_SOURCE_REFERENCE_UPDATED = "PULL_REQUEST_SOURCE_REFERENCE_UPDATED",
  PULL_REQUEST_STATUS_CHANGED = "PULL_REQUEST_STATUS_CHANGED",
}

/**
 * <p>Metadata about the pull request that is used when comparing the pull request source with its destination.</p>
 */
export interface PullRequestCreatedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;

  /**
   * <p>The commit ID on the source branch used when the pull request was created.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The commit ID of the tip of the branch specified as the destination branch when the pull request was created.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;
}

export namespace PullRequestCreatedEventMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PullRequestCreatedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the change in the merge state for a pull request event. </p>
 */
export interface PullRequestMergedStateChangedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName?: string;

  /**
   * <p>The name of the branch that the pull request is merged into.</p>
   */
  destinationReference?: string;

  /**
   * <p>Information about the merge state change event.</p>
   */
  mergeMetadata?: MergeMetadata;
}

export namespace PullRequestMergedStateChangedEventMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PullRequestMergedStateChangedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an update to the source branch of a pull request.</p>
 */
export interface PullRequestSourceReferenceUpdatedEventMetadata {
  /**
   * <p>The name of the repository where the pull request was updated.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.</p>
   */
  afterCommitId?: string;

  /**
   * <p>The commit ID of the most recent commit that the source branch and the destination branch have in common.</p>
   */
  mergeBase?: string;
}

export namespace PullRequestSourceReferenceUpdatedEventMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PullRequestSourceReferenceUpdatedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a change to the status of a pull request.</p>
 */
export interface PullRequestStatusChangedEventMetadata {
  /**
   * <p>The changed status of the pull request.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;
}

export namespace PullRequestStatusChangedEventMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PullRequestStatusChangedEventMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a pull request event.</p>
 */
export interface PullRequestEvent {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>The day and time of the pull request event, in timestamp format.</p>
   */
  eventDate?: Date;

  /**
   * <p>The type of the pull request event (for example, a status change event
   *             (PULL_REQUEST_STATUS_CHANGED) or update event
   *             (PULL_REQUEST_SOURCE_REFERENCE_UPDATED)).</p>
   */
  pullRequestEventType?: PullRequestEventType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   */
  actorArn?: string;

  /**
   * <p>Information about the source and destination branches for the pull request.</p>
   */
  pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

  /**
   * <p>Information about the change in status for the pull request event.</p>
   */
  pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;

  /**
   * <p>Information about the updated source branch for the pull request event. </p>
   */
  pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

  /**
   * <p>Information about the change in mergability state for the pull request event.</p>
   */
  pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

  /**
   * <p>Information about a pull request event.</p>
   */
  approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

  /**
   * <p>Information about an approval state change for a pull request.</p>
   */
  approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

  /**
   * <p>Information about an approval rule override event for a pull request.</p>
   */
  approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;
}

export namespace PullRequestEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PullRequestEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the approval rules applied to a pull request and whether conditions have been met.</p>
 */
export interface Evaluation {
  /**
   * <p>Whether the state of the pull request is approved.</p>
   */
  approved?: boolean;

  /**
   * <p>Whether the approval rule requirements for the pull request have been overridden and no longer need to be met.</p>
   */
  overridden?: boolean;

  /**
   * <p>The names of the approval rules that have had their conditions met.</p>
   */
  approvalRulesSatisfied?: string[];

  /**
   * <p>The names of the approval rules that have not had their conditions met.</p>
   */
  approvalRulesNotSatisfied?: string[];
}

export namespace Evaluation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Evaluation): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.</p>
 */
export interface ReactionValueFormats {
  /**
   * <p>The Emoji Version 1.0 graphic of the reaction. These graphics are interpreted slightly differently on different operating systems.</p>
   */
  emoji?: string;

  /**
   * <p>The emoji short code for the reaction. Short codes are interpreted slightly differently on different operating systems. </p>
   */
  shortCode?: string;

  /**
   * <p>The Unicode codepoint for the reaction.</p>
   */
  unicode?: string;
}

export namespace ReactionValueFormats {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReactionValueFormats): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the reaction values provided by users on a comment.</p>
 */
export interface ReactionForComment {
  /**
   * <p>The reaction for a specified comment.</p>
   */
  reaction?: ReactionValueFormats;

  /**
   * <p>The Amazon Resource Names (ARNs) of users who have provided reactions to the comment.</p>
   */
  reactionUsers?: string[];

  /**
   * <p>A numerical count of users who reacted with the specified emoji whose identities have been subsequently deleted
   *             from IAM. While these IAM users or roles no longer exist, the reactions might still appear in total reaction counts.</p>
   */
  reactionsFromDeletedUsersCount?: number;
}

export namespace ReactionForComment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReactionForComment): any => ({
    ...obj,
  });
}

export enum RelativeFileVersionEnum {
  AFTER = "AFTER",
  BEFORE = "BEFORE",
}

/**
 * <p>Returns information about the location of a change or comment in the comparison between two commits or a pull request.</p>
 */
export interface Location {
  /**
   * <p>The name of the file being compared, including its extension and subdirectory, if any.</p>
   */
  filePath?: string;

  /**
   * <p>The position of a change in a compared file, in line number format.</p>
   */
  filePosition?: number;

  /**
   * <p>In a comparison of commits or a pull request, whether the change is in the before or
   *             after of that comparison.</p>
   */
  relativeFileVersion?: RelativeFileVersionEnum | string;
}

export namespace Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about comments on the comparison between two commits.</p>
 */
export interface CommentsForComparedCommit {
  /**
   * <p>The name of the repository that contains the compared commits.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit used to establish the before of the
   *             comparison.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit used to establish the after of the comparison.</p>
   */
  afterCommitId?: string;

  /**
   * <p>The full blob ID of the commit used to establish the before of the comparison.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>The full blob ID of the commit used to establish the after of the comparison.</p>
   */
  afterBlobId?: string;

  /**
   * <p>Location information about the comment on the comparison, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE or
   *             AFTER.</p>
   */
  location?: Location;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the comparison
   *          between commits.</p>
   */
  comments?: Comment[];
}

export namespace CommentsForComparedCommit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommentsForComparedCommit): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about comments on a pull request.</p>
 */
export interface CommentsForPullRequest {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId?: string;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit that was the tip of the destination branch when the
   *             pull request was created. This commit is superceded by the after commit in the source
   *             branch when and if you merge the source branch into the destination branch.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit that was the tip of the source branch at the time the
   *             comment was made. </p>
   */
  afterCommitId?: string;

  /**
   * <p>The full blob ID of the file on which you want to comment on the destination commit.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>The full blob ID of the file on which you want to comment on the source commit.</p>
   */
  afterBlobId?: string;

  /**
   * <p>Location information about the comment on the pull request, including the file name,
   *             line number, and whether the version of the file where the comment was made is BEFORE
   *             (destination branch) or AFTER (source branch).</p>
   */
  location?: Location;

  /**
   * <p>An array of comment objects. Each comment object contains information about a comment on the pull request.</p>
   */
  comments?: Comment[];
}

export namespace CommentsForPullRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CommentsForPullRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a set of differences for a commit specifier.</p>
 */
export interface Difference {
  /**
   * <p>Information about a <code>beforeBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   */
  beforeBlob?: BlobMetadata;

  /**
   * <p>Information about an <code>afterBlob</code> data type object, including the ID,
   *             the file mode permission code, and the path.</p>
   */
  afterBlob?: BlobMetadata;

  /**
   * <p>Whether the change type of the difference is an addition (A), deletion (D), or modification (M).</p>
   */
  changeType?: ChangeTypeEnum | string;
}

export namespace Difference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Difference): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a file in a repository.</p>
 */
export interface File {
  /**
   * <p>The blob ID that contains the file information.</p>
   */
  blobId?: string;

  /**
   * <p>The fully qualified path to the file in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the file from the folder where the query originated.</p>
   */
  relativePath?: string;

  /**
   * <p>The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace File {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: File): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a folder in a repository.</p>
 */
export interface Folder {
  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   */
  treeId?: string;

  /**
   * <p>The fully qualified path of the folder in the repository.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the specified folder from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export namespace Folder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Folder): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a submodule reference in a repository folder.</p>
 */
export interface SubModule {
  /**
   * <p>The commit ID that contains the reference to the submodule.</p>
   */
  commitId?: string;

  /**
   * <p>The fully qualified path to the folder that contains the reference to the submodule.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the submodule from the folder where the query originated.</p>
   */
  relativePath?: string;
}

export namespace SubModule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubModule): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about a symbolic link in a repository folder.</p>
 */
export interface SymbolicLink {
  /**
   * <p>The blob ID that contains the information about the symbolic link.</p>
   */
  blobId?: string;

  /**
   * <p>The fully qualified path to the folder that contains the symbolic link.</p>
   */
  absolutePath?: string;

  /**
   * <p>The relative path of the symbolic link from the folder where the query originated.</p>
   */
  relativePath?: string;

  /**
   * <p>The file mode permissions of the blob that cotains information about the symbolic link.</p>
   */
  fileMode?: FileModeTypeEnum | string;
}

export namespace SymbolicLink {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SymbolicLink): any => ({
    ...obj,
  });
}

export enum RepositoryTriggerEventEnum {
  ALL = "all",
  CREATE_REFERENCE = "createReference",
  DELETE_REFERENCE = "deleteReference",
  UPDATE_REFERENCE = "updateReference",
}

/**
 * <p>Information about a trigger for a repository.</p>
 */
export interface RepositoryTrigger {
  /**
   * <p>The name of the trigger.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the resource that is the target for a trigger (for example, the ARN of a
   *             topic in Amazon SNS).</p>
   */
  destinationArn: string | undefined;

  /**
   * <p>Any custom data associated with the trigger to be included in the information sent to
   *             the target of the trigger.</p>
   */
  customData?: string;

  /**
   * <p>The branches to be included in the trigger configuration. If you specify an empty
   *             array, the trigger applies to all branches.</p>
   *         <note>
   *             <p>Although no content is required in the array, you must include the array itself.</p>
   *         </note>
   */
  branches?: string[];

  /**
   * <p>The repository events that cause the trigger to run actions in another service, such
   *             as sending a notification through Amazon SNS.
   *
   *         </p>
   *          <note>
   *             <p>The valid value "all" cannot be used with any other values.</p>
   *          </note>
   */
  events: (RepositoryTriggerEventEnum | string)[] | undefined;
}

export namespace RepositoryTrigger {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryTrigger): any => ({
    ...obj,
  });
}

export enum OrderEnum {
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export enum SortByEnum {
  MODIFIED_DATE = "lastModifiedDate",
  REPOSITORY_NAME = "repositoryName",
}

/**
 * <p>Information about a repository name and ID.</p>
 */
export interface RepositoryNameIdPair {
  /**
   * <p>The name associated with the repository.</p>
   */
  repositoryName?: string;

  /**
   * <p>The ID associated with the repository.</p>
   */
  repositoryId?: string;
}

export namespace RepositoryNameIdPair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryNameIdPair): any => ({
    ...obj,
  });
}

/**
 * <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
 */
export class FileContentRequiredException extends __BaseException {
  readonly name: "FileContentRequiredException" = "FileContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileContentRequiredException, __BaseException>) {
    super({
      name: "FileContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileContentRequiredException.prototype);
  }
}

/**
 * <p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch
 *         that you specified.</p>
 */
export class SameFileContentException extends __BaseException {
  readonly name: "SameFileContentException" = "SameFileContentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SameFileContentException, __BaseException>) {
    super({
      name: "SameFileContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SameFileContentException.prototype);
  }
}

/**
 * <p>One or more branch names specified for the trigger is not valid.</p>
 */
export class InvalidRepositoryTriggerBranchNameException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerBranchNameException" = "InvalidRepositoryTriggerBranchNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerBranchNameException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerBranchNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerBranchNameException.prototype);
  }
}

/**
 * <p>The custom data provided for the trigger is not valid.</p>
 */
export class InvalidRepositoryTriggerCustomDataException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerCustomDataException" = "InvalidRepositoryTriggerCustomDataException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerCustomDataException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerCustomDataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerCustomDataException.prototype);
  }
}

/**
 * <p>The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.</p>
 */
export class InvalidRepositoryTriggerDestinationArnException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerDestinationArnException" = "InvalidRepositoryTriggerDestinationArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerDestinationArnException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerDestinationArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerDestinationArnException.prototype);
  }
}

/**
 * <p>One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.</p>
 */
export class InvalidRepositoryTriggerEventsException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerEventsException" = "InvalidRepositoryTriggerEventsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerEventsException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerEventsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerEventsException.prototype);
  }
}

/**
 * <p>The name of the trigger is not valid.</p>
 */
export class InvalidRepositoryTriggerNameException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerNameException" = "InvalidRepositoryTriggerNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerNameException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerNameException.prototype);
  }
}

/**
 * <p>The AWS Region for the trigger target does not match the AWS Region for the
 *             repository. Triggers must be created in the same Region as the target for the
 *             trigger.</p>
 */
export class InvalidRepositoryTriggerRegionException extends __BaseException {
  readonly name: "InvalidRepositoryTriggerRegionException" = "InvalidRepositoryTriggerRegionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryTriggerRegionException, __BaseException>) {
    super({
      name: "InvalidRepositoryTriggerRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryTriggerRegionException.prototype);
  }
}

/**
 * <p>The number of branches for the trigger was exceeded.</p>
 */
export class MaximumBranchesExceededException extends __BaseException {
  readonly name: "MaximumBranchesExceededException" = "MaximumBranchesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumBranchesExceededException, __BaseException>) {
    super({
      name: "MaximumBranchesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumBranchesExceededException.prototype);
  }
}

/**
 * <p>The number of triggers allowed for the repository was exceeded.</p>
 */
export class MaximumRepositoryTriggersExceededException extends __BaseException {
  readonly name: "MaximumRepositoryTriggersExceededException" = "MaximumRepositoryTriggersExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumRepositoryTriggersExceededException, __BaseException>) {
    super({
      name: "MaximumRepositoryTriggersExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumRepositoryTriggersExceededException.prototype);
  }
}

/**
 * <p>At least one branch name is required, but was not specified in the trigger
 *             configuration.</p>
 */
export class RepositoryTriggerBranchNameListRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerBranchNameListRequiredException" =
    "RepositoryTriggerBranchNameListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerBranchNameListRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerBranchNameListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerBranchNameListRequiredException.prototype);
  }
}

/**
 * <p>A destination ARN for the target service for the trigger is required, but was not
 *             specified.</p>
 */
export class RepositoryTriggerDestinationArnRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerDestinationArnRequiredException" =
    "RepositoryTriggerDestinationArnRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerDestinationArnRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerDestinationArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerDestinationArnRequiredException.prototype);
  }
}

/**
 * <p>At least one event for the trigger is required, but was not specified.</p>
 */
export class RepositoryTriggerEventsListRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerEventsListRequiredException" = "RepositoryTriggerEventsListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerEventsListRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerEventsListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerEventsListRequiredException.prototype);
  }
}

/**
 * <p>A name for the trigger is required, but was not specified.</p>
 */
export class RepositoryTriggerNameRequiredException extends __BaseException {
  readonly name: "RepositoryTriggerNameRequiredException" = "RepositoryTriggerNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggerNameRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggerNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggerNameRequiredException.prototype);
  }
}

/**
 * <p>The list of triggers for the repository is required, but was not specified.</p>
 */
export class RepositoryTriggersListRequiredException extends __BaseException {
  readonly name: "RepositoryTriggersListRequiredException" = "RepositoryTriggersListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryTriggersListRequiredException, __BaseException>) {
    super({
      name: "RepositoryTriggersListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryTriggersListRequiredException.prototype);
  }
}

/**
 * <p>A map of tags is required.</p>
 */
export class TagsMapRequiredException extends __BaseException {
  readonly name: "TagsMapRequiredException" = "TagsMapRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagsMapRequiredException, __BaseException>) {
    super({
      name: "TagsMapRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagsMapRequiredException.prototype);
  }
}

/**
 * <p>A trigger failed to run.</p>
 */
export interface RepositoryTriggerExecutionFailure {
  /**
   * <p>The name of the trigger that did not run.</p>
   */
  trigger?: string;

  /**
   * <p>Message information about the trigger that did not run.</p>
   */
  failureMessage?: string;
}

export namespace RepositoryTriggerExecutionFailure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryTriggerExecutionFailure): any => ({
    ...obj,
  });
}

/**
 * <p>The list of tags is not valid.</p>
 */
export class InvalidTagKeysListException extends __BaseException {
  readonly name: "InvalidTagKeysListException" = "InvalidTagKeysListException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagKeysListException, __BaseException>) {
    super({
      name: "InvalidTagKeysListException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagKeysListException.prototype);
  }
}

/**
 * <p>A list of tag keys is required. The list cannot be empty or null.</p>
 */
export class TagKeysListRequiredException extends __BaseException {
  readonly name: "TagKeysListRequiredException" = "TagKeysListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagKeysListRequiredException, __BaseException>) {
    super({
      name: "TagKeysListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagKeysListRequiredException.prototype);
  }
}

/**
 * <p>The SHA-256 hash signature for the rule content is not valid.</p>
 */
export class InvalidRuleContentSha256Exception extends __BaseException {
  readonly name: "InvalidRuleContentSha256Exception" = "InvalidRuleContentSha256Exception";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRuleContentSha256Exception, __BaseException>) {
    super({
      name: "InvalidRuleContentSha256Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRuleContentSha256Exception.prototype);
  }
}

/**
 * <p>You cannot modify or delete this comment. Only comment authors can modify or delete their comments.</p>
 */
export class CommentNotCreatedByCallerException extends __BaseException {
  readonly name: "CommentNotCreatedByCallerException" = "CommentNotCreatedByCallerException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentNotCreatedByCallerException, __BaseException>) {
    super({
      name: "CommentNotCreatedByCallerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentNotCreatedByCallerException.prototype);
  }
}

/**
 * <p>The state for the approval is not valid. Valid values include APPROVE and REVOKE. </p>
 */
export class InvalidApprovalStateException extends __BaseException {
  readonly name: "InvalidApprovalStateException" = "InvalidApprovalStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalStateException, __BaseException>) {
    super({
      name: "InvalidApprovalStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalStateException.prototype);
  }
}

/**
 * <p>The number of approvals required for the approval rule exceeds the maximum number allowed.</p>
 */
export class MaximumNumberOfApprovalsExceededException extends __BaseException {
  readonly name: "MaximumNumberOfApprovalsExceededException" = "MaximumNumberOfApprovalsExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumNumberOfApprovalsExceededException, __BaseException>) {
    super({
      name: "MaximumNumberOfApprovalsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumNumberOfApprovalsExceededException.prototype);
  }
}

/**
 * <p>The approval cannot be applied because the user approving the pull request matches the user who created the pull request. You cannot approve a pull
 *         request that you created.</p>
 */
export class PullRequestCannotBeApprovedByAuthorException extends __BaseException {
  readonly name: "PullRequestCannotBeApprovedByAuthorException" = "PullRequestCannotBeApprovedByAuthorException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestCannotBeApprovedByAuthorException, __BaseException>) {
    super({
      name: "PullRequestCannotBeApprovedByAuthorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestCannotBeApprovedByAuthorException.prototype);
  }
}

/**
 * <p>The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.</p>
 */
export class InvalidPullRequestStatusUpdateException extends __BaseException {
  readonly name: "InvalidPullRequestStatusUpdateException" = "InvalidPullRequestStatusUpdateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPullRequestStatusUpdateException, __BaseException>) {
    super({
      name: "InvalidPullRequestStatusUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPullRequestStatusUpdateException.prototype);
  }
}

/**
 * <p>A pull request status is required, but none was provided.</p>
 */
export class PullRequestStatusRequiredException extends __BaseException {
  readonly name: "PullRequestStatusRequiredException" = "PullRequestStatusRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestStatusRequiredException, __BaseException>) {
    super({
      name: "PullRequestStatusRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestStatusRequiredException.prototype);
  }
}
