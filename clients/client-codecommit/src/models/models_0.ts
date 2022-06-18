// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CodeCommitServiceException as __BaseException } from "./CodeCommitServiceException";
import {
  Approval,
  ApprovalRule,
  ApprovalRuleTemplate,
  ApprovalState,
  BatchAssociateApprovalRuleTemplateWithRepositoriesError,
  BatchDescribeMergeConflictsError,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesError,
  BatchGetCommitsError,
  BranchInfo,
  Comment,
  CommentsForComparedCommit,
  CommentsForPullRequest,
  Commit,
  Conflict,
  ConflictDetailLevelTypeEnum,
  ConflictMetadata,
  ConflictResolution,
  ConflictResolutionStrategyTypeEnum,
  DeleteFileEntry,
  Difference,
  Evaluation,
  File,
  FileMetadata,
  FileModeTypeEnum,
  Folder,
  Location,
  MergeHunk,
  MergeOptionTypeEnum,
  OrderEnum,
  OverrideStatus,
  PullRequest,
  PullRequestEvent,
  PullRequestEventType,
  PullRequestStatusEnum,
  PutFileEntry,
  ReactionForComment,
  RepositoryMetadata,
  RepositoryNameIdPair,
  RepositoryTrigger,
  RepositoryTriggerExecutionFailure,
  SetFileModeEntry,
  SortByEnum,
  SubModule,
  SymbolicLink,
  Target,
} from "./models_1";

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export class ActorDoesNotExistException extends __BaseException {
  readonly name: "ActorDoesNotExistException" = "ActorDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActorDoesNotExistException, __BaseException>) {
    super({
      name: "ActorDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActorDoesNotExistException.prototype);
  }
}

/**
 * <p>The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.</p>
 */
export class ApprovalRuleContentRequiredException extends __BaseException {
  readonly name: "ApprovalRuleContentRequiredException" = "ApprovalRuleContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleContentRequiredException, __BaseException>) {
    super({
      name: "ApprovalRuleContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleContentRequiredException.prototype);
  }
}

/**
 * <p>An approval rule with that name already exists. Approval rule names must be unique
 *             within the scope of a pull request.</p>
 */
export class ApprovalRuleNameAlreadyExistsException extends __BaseException {
  readonly name: "ApprovalRuleNameAlreadyExistsException" = "ApprovalRuleNameAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleNameAlreadyExistsException, __BaseException>) {
    super({
      name: "ApprovalRuleNameAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleNameAlreadyExistsException.prototype);
  }
}

/**
 * <p>An approval rule name is required, but was not specified.</p>
 */
export class ApprovalRuleNameRequiredException extends __BaseException {
  readonly name: "ApprovalRuleNameRequiredException" = "ApprovalRuleNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleNameRequiredException, __BaseException>) {
    super({
      name: "ApprovalRuleNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleNameRequiredException.prototype);
  }
}

/**
 * <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 */
export class ApprovalRuleTemplateContentRequiredException extends __BaseException {
  readonly name: "ApprovalRuleTemplateContentRequiredException" = "ApprovalRuleTemplateContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleTemplateContentRequiredException, __BaseException>) {
    super({
      name: "ApprovalRuleTemplateContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleTemplateContentRequiredException.prototype);
  }
}

/**
 * <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the AWS Region where the template
 *         was created, and then try again.</p>
 */
export class ApprovalRuleTemplateDoesNotExistException extends __BaseException {
  readonly name: "ApprovalRuleTemplateDoesNotExistException" = "ApprovalRuleTemplateDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleTemplateDoesNotExistException, __BaseException>) {
    super({
      name: "ApprovalRuleTemplateDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleTemplateDoesNotExistException.prototype);
  }
}

/**
 * <p>The approval rule template is associated with one or more repositories. You cannot delete a template that is associated with a repository. Remove
 *         all associations, and then try again.</p>
 */
export class ApprovalRuleTemplateInUseException extends __BaseException {
  readonly name: "ApprovalRuleTemplateInUseException" = "ApprovalRuleTemplateInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleTemplateInUseException, __BaseException>) {
    super({
      name: "ApprovalRuleTemplateInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleTemplateInUseException.prototype);
  }
}

/**
 * <p>You cannot create an approval rule template with that name because a template with
 *             that name already exists in this AWS Region for your AWS account. Approval rule template
 *             names must be unique.</p>
 */
export class ApprovalRuleTemplateNameAlreadyExistsException extends __BaseException {
  readonly name: "ApprovalRuleTemplateNameAlreadyExistsException" = "ApprovalRuleTemplateNameAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleTemplateNameAlreadyExistsException, __BaseException>) {
    super({
      name: "ApprovalRuleTemplateNameAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleTemplateNameAlreadyExistsException.prototype);
  }
}

/**
 * <p>An approval rule template name is required, but was not specified.</p>
 */
export class ApprovalRuleTemplateNameRequiredException extends __BaseException {
  readonly name: "ApprovalRuleTemplateNameRequiredException" = "ApprovalRuleTemplateNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApprovalRuleTemplateNameRequiredException, __BaseException>) {
    super({
      name: "ApprovalRuleTemplateNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApprovalRuleTemplateNameRequiredException.prototype);
  }
}

export interface AssociateApprovalRuleTemplateWithRepositoryInput {
  /**
   * <p>The name for the approval rule template. </p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The name of the repository that you want to associate with the template.</p>
   */
  repositoryName: string | undefined;
}

export namespace AssociateApprovalRuleTemplateWithRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateApprovalRuleTemplateWithRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>An encryption integrity check failed.</p>
 */
export class EncryptionIntegrityChecksFailedException extends __BaseException {
  readonly name: "EncryptionIntegrityChecksFailedException" = "EncryptionIntegrityChecksFailedException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionIntegrityChecksFailedException, __BaseException>) {
    super({
      name: "EncryptionIntegrityChecksFailedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionIntegrityChecksFailedException.prototype);
  }
}

/**
 * <p>An encryption key could not be accessed.</p>
 */
export class EncryptionKeyAccessDeniedException extends __BaseException {
  readonly name: "EncryptionKeyAccessDeniedException" = "EncryptionKeyAccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyAccessDeniedException, __BaseException>) {
    super({
      name: "EncryptionKeyAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyAccessDeniedException.prototype);
  }
}

/**
 * <p>The encryption key is disabled.</p>
 */
export class EncryptionKeyDisabledException extends __BaseException {
  readonly name: "EncryptionKeyDisabledException" = "EncryptionKeyDisabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyDisabledException, __BaseException>) {
    super({
      name: "EncryptionKeyDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyDisabledException.prototype);
  }
}

/**
 * <p>No encryption key was found.</p>
 */
export class EncryptionKeyNotFoundException extends __BaseException {
  readonly name: "EncryptionKeyNotFoundException" = "EncryptionKeyNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyNotFoundException, __BaseException>) {
    super({
      name: "EncryptionKeyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyNotFoundException.prototype);
  }
}

/**
 * <p>The encryption key is not available.</p>
 */
export class EncryptionKeyUnavailableException extends __BaseException {
  readonly name: "EncryptionKeyUnavailableException" = "EncryptionKeyUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyUnavailableException, __BaseException>) {
    super({
      name: "EncryptionKeyUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyUnavailableException.prototype);
  }
}

/**
 * <p>The name of the approval rule template is not valid. Template names must be between 1
 *             and 100 valid characters in length. For more information about limits in AWS CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS
 *                 CodeCommit User Guide</a>.</p>
 */
export class InvalidApprovalRuleTemplateNameException extends __BaseException {
  readonly name: "InvalidApprovalRuleTemplateNameException" = "InvalidApprovalRuleTemplateNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalRuleTemplateNameException, __BaseException>) {
    super({
      name: "InvalidApprovalRuleTemplateNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalRuleTemplateNameException.prototype);
  }
}

/**
 * <p>A specified repository name is not valid.</p>
 *
 *         <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 */
export class InvalidRepositoryNameException extends __BaseException {
  readonly name: "InvalidRepositoryNameException" = "InvalidRepositoryNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryNameException, __BaseException>) {
    super({
      name: "InvalidRepositoryNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryNameException.prototype);
  }
}

/**
 * <p>The maximum number of approval rule templates for a repository has been exceeded. You cannot associate more than 25
 *         approval rule templates with a repository.</p>
 */
export class MaximumRuleTemplatesAssociatedWithRepositoryException extends __BaseException {
  readonly name: "MaximumRuleTemplatesAssociatedWithRepositoryException" =
    "MaximumRuleTemplatesAssociatedWithRepositoryException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumRuleTemplatesAssociatedWithRepositoryException, __BaseException>) {
    super({
      name: "MaximumRuleTemplatesAssociatedWithRepositoryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumRuleTemplatesAssociatedWithRepositoryException.prototype);
  }
}

/**
 * <p>The specified repository does not exist.</p>
 */
export class RepositoryDoesNotExistException extends __BaseException {
  readonly name: "RepositoryDoesNotExistException" = "RepositoryDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryDoesNotExistException, __BaseException>) {
    super({
      name: "RepositoryDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryDoesNotExistException.prototype);
  }
}

/**
 * <p>A repository name is required, but was not specified.</p>
 */
export class RepositoryNameRequiredException extends __BaseException {
  readonly name: "RepositoryNameRequiredException" = "RepositoryNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNameRequiredException, __BaseException>) {
    super({
      name: "RepositoryNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNameRequiredException.prototype);
  }
}

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the AWS account.</p>
 */
export class AuthorDoesNotExistException extends __BaseException {
  readonly name: "AuthorDoesNotExistException" = "AuthorDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorDoesNotExistException, __BaseException>) {
    super({
      name: "AuthorDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorDoesNotExistException.prototype);
  }
}

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  /**
   * <p>The name of the template you want to associate with one or more repositories.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The names of the repositories you want to associate with the template.</p>
   *         <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   */
  repositoryNames: string[] | undefined;
}

export namespace BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateApprovalRuleTemplateWithRepositoriesInput): any => ({
    ...obj,
  });
}

export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  /**
   * <p>A list of names of the repositories that have been associated with the template.</p>
   */
  associatedRepositoryNames: string[] | undefined;

  /**
   * <p>A list of any errors that might have occurred while attempting to create the association between the template and the repositories.</p>
   */
  errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[] | undefined;
}

export namespace BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 */
export class MaximumRepositoryNamesExceededException extends __BaseException {
  readonly name: "MaximumRepositoryNamesExceededException" = "MaximumRepositoryNamesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumRepositoryNamesExceededException, __BaseException>) {
    super({
      name: "MaximumRepositoryNamesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumRepositoryNamesExceededException.prototype);
  }
}

/**
 * <p>At least one repository name object is required, but was not specified.</p>
 */
export class RepositoryNamesRequiredException extends __BaseException {
  readonly name: "RepositoryNamesRequiredException" = "RepositoryNamesRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNamesRequiredException, __BaseException>) {
    super({
      name: "RepositoryNamesRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNamesRequiredException.prototype);
  }
}

export interface BatchDescribeMergeConflictsInput {
  /**
   * <p>The name of the repository that contains the merge conflicts you want to review.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   */
  maxMergeHunks?: number;

  /**
   * <p>The maximum number of files to include in the output.</p>
   */
  maxConflictFiles?: number;

  /**
   * <p>The path of the target files used to describe the conflicts. If not specified, the default is all conflict files.</p>
   */
  filePaths?: string[];

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace BatchDescribeMergeConflictsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeMergeConflictsInput): any => ({
    ...obj,
  });
}

export interface BatchDescribeMergeConflictsOutput {
  /**
   * <p>A list of conflicts for each file, including the conflict metadata and the hunks of the differences between the files.</p>
   */
  conflicts: Conflict[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of any errors returned while describing the merge conflicts for each file.</p>
   */
  errors?: BatchDescribeMergeConflictsError[];

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;
}

export namespace BatchDescribeMergeConflictsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeMergeConflictsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 */
export class CommitDoesNotExistException extends __BaseException {
  readonly name: "CommitDoesNotExistException" = "CommitDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommitDoesNotExistException, __BaseException>) {
    super({
      name: "CommitDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommitDoesNotExistException.prototype);
  }
}

/**
 * <p>A commit was not specified.</p>
 */
export class CommitRequiredException extends __BaseException {
  readonly name: "CommitRequiredException" = "CommitRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommitRequiredException, __BaseException>) {
    super({
      name: "CommitRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommitRequiredException.prototype);
  }
}

/**
 * <p>The specified commit is not valid.</p>
 */
export class InvalidCommitException extends __BaseException {
  readonly name: "InvalidCommitException" = "InvalidCommitException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCommitException, __BaseException>) {
    super({
      name: "InvalidCommitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCommitException.prototype);
  }
}

/**
 * <p>The specified conflict detail level is not valid.</p>
 */
export class InvalidConflictDetailLevelException extends __BaseException {
  readonly name: "InvalidConflictDetailLevelException" = "InvalidConflictDetailLevelException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConflictDetailLevelException, __BaseException>) {
    super({
      name: "InvalidConflictDetailLevelException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConflictDetailLevelException.prototype);
  }
}

/**
 * <p>The specified conflict resolution strategy is not valid.</p>
 */
export class InvalidConflictResolutionStrategyException extends __BaseException {
  readonly name: "InvalidConflictResolutionStrategyException" = "InvalidConflictResolutionStrategyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConflictResolutionStrategyException, __BaseException>) {
    super({
      name: "InvalidConflictResolutionStrategyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConflictResolutionStrategyException.prototype);
  }
}

/**
 * <p>The specified continuation token is not valid.</p>
 */
export class InvalidContinuationTokenException extends __BaseException {
  readonly name: "InvalidContinuationTokenException" = "InvalidContinuationTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContinuationTokenException, __BaseException>) {
    super({
      name: "InvalidContinuationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContinuationTokenException.prototype);
  }
}

/**
 * <p>The specified value for the number of conflict files to return is not valid.</p>
 */
export class InvalidMaxConflictFilesException extends __BaseException {
  readonly name: "InvalidMaxConflictFilesException" = "InvalidMaxConflictFilesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMaxConflictFilesException, __BaseException>) {
    super({
      name: "InvalidMaxConflictFilesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMaxConflictFilesException.prototype);
  }
}

/**
 * <p>The specified value for the number of merge hunks to return is not valid.</p>
 */
export class InvalidMaxMergeHunksException extends __BaseException {
  readonly name: "InvalidMaxMergeHunksException" = "InvalidMaxMergeHunksException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMaxMergeHunksException, __BaseException>) {
    super({
      name: "InvalidMaxMergeHunksException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMaxMergeHunksException.prototype);
  }
}

/**
 * <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
 */
export class InvalidMergeOptionException extends __BaseException {
  readonly name: "InvalidMergeOptionException" = "InvalidMergeOptionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMergeOptionException, __BaseException>) {
    super({
      name: "InvalidMergeOptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMergeOptionException.prototype);
  }
}

/**
 * <p>The number of files to load exceeds the allowed limit.</p>
 */
export class MaximumFileContentToLoadExceededException extends __BaseException {
  readonly name: "MaximumFileContentToLoadExceededException" = "MaximumFileContentToLoadExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumFileContentToLoadExceededException, __BaseException>) {
    super({
      name: "MaximumFileContentToLoadExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumFileContentToLoadExceededException.prototype);
  }
}

/**
 * <p>The number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
 */
export class MaximumItemsToCompareExceededException extends __BaseException {
  readonly name: "MaximumItemsToCompareExceededException" = "MaximumItemsToCompareExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumItemsToCompareExceededException, __BaseException>) {
    super({
      name: "MaximumItemsToCompareExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumItemsToCompareExceededException.prototype);
  }
}

/**
 * <p>A merge option or stategy is required, and none was provided.</p>
 */
export class MergeOptionRequiredException extends __BaseException {
  readonly name: "MergeOptionRequiredException" = "MergeOptionRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MergeOptionRequiredException, __BaseException>) {
    super({
      name: "MergeOptionRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MergeOptionRequiredException.prototype);
  }
}

/**
 * <p>The divergence between the tips of the provided commit specifiers is too great to determine whether there might be
 *             any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.</p>
 */
export class TipsDivergenceExceededException extends __BaseException {
  readonly name: "TipsDivergenceExceededException" = "TipsDivergenceExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TipsDivergenceExceededException, __BaseException>) {
    super({
      name: "TipsDivergenceExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TipsDivergenceExceededException.prototype);
  }
}

export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  /**
   * <p>The name of the template that you want to disassociate from one or more repositories.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The repository names that you want to disassociate from the approval rule
   *             template.</p>
   *         <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   */
  repositoryNames: string[] | undefined;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput): any => ({
    ...obj,
  });
}

export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  /**
   * <p>A list of repository names that have had their association with the template
   *             removed.</p>
   */
  disassociatedRepositoryNames: string[] | undefined;

  /**
   * <p>A list of any errors that might have occurred while attempting to remove the association between the template and the repositories.</p>
   */
  errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] | undefined;
}

export namespace BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput): any => ({
    ...obj,
  });
}

export interface BatchGetCommitsInput {
  /**
   * <p>The full commit IDs of the commits to get information about.</p>
   *         <note>
   *             <p>You must supply the full SHA IDs of each commit. You cannot use shortened SHA
   *                 IDs.</p>
   *         </note>
   */
  commitIds: string[] | undefined;

  /**
   * <p>The name of the repository that contains the commits.</p>
   */
  repositoryName: string | undefined;
}

export namespace BatchGetCommitsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCommitsInput): any => ({
    ...obj,
  });
}

export interface BatchGetCommitsOutput {
  /**
   * <p>An array of commit data type objects, each of which contains information about a specified commit.</p>
   */
  commits?: Commit[];

  /**
   * <p>Returns any commit IDs for which information could not be found. For example, if one
   *             of the commit IDs was a shortened SHA ID or that commit was not found in the specified
   *             repository, the ID returns an error object with more information.</p>
   */
  errors?: BatchGetCommitsError[];
}

export namespace BatchGetCommitsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetCommitsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of allowed commit IDs in a batch request is 100. Verify that your batch requests contains no more than 100 commit IDs, and then try again.</p>
 */
export class CommitIdsLimitExceededException extends __BaseException {
  readonly name: "CommitIdsLimitExceededException" = "CommitIdsLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommitIdsLimitExceededException, __BaseException>) {
    super({
      name: "CommitIdsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommitIdsLimitExceededException.prototype);
  }
}

/**
 * <p>A list of commit IDs is required, but was either not specified or the list was empty.</p>
 */
export class CommitIdsListRequiredException extends __BaseException {
  readonly name: "CommitIdsListRequiredException" = "CommitIdsListRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommitIdsListRequiredException, __BaseException>) {
    super({
      name: "CommitIdsListRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommitIdsListRequiredException.prototype);
  }
}

/**
 * <p>Represents the input of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesInput {
  /**
   * <p>The names of the repositories to get information about.</p>
   *         <note>
   *             <p>The length constraint limit is for each string in the array. The array itself can be empty.</p>
   *          </note>
   */
  repositoryNames: string[] | undefined;
}

export namespace BatchGetRepositoriesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetRepositoriesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesOutput {
  /**
   * <p>A list of repositories returned by the batch get repositories operation.</p>
   */
  repositories?: RepositoryMetadata[];

  /**
   * <p>Returns a list of repository names for which information could not be found.</p>
   */
  repositoriesNotFound?: string[];
}

export namespace BatchGetRepositoriesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetRepositoriesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 */
export class BeforeCommitIdAndAfterCommitIdAreSameException extends __BaseException {
  readonly name: "BeforeCommitIdAndAfterCommitIdAreSameException" = "BeforeCommitIdAndAfterCommitIdAreSameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BeforeCommitIdAndAfterCommitIdAreSameException, __BaseException>) {
    super({
      name: "BeforeCommitIdAndAfterCommitIdAreSameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BeforeCommitIdAndAfterCommitIdAreSameException.prototype);
  }
}

/**
 * <p>The specified blob does not exist.</p>
 */
export class BlobIdDoesNotExistException extends __BaseException {
  readonly name: "BlobIdDoesNotExistException" = "BlobIdDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlobIdDoesNotExistException, __BaseException>) {
    super({
      name: "BlobIdDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlobIdDoesNotExistException.prototype);
  }
}

/**
 * <p>A blob ID is required, but was not specified.</p>
 */
export class BlobIdRequiredException extends __BaseException {
  readonly name: "BlobIdRequiredException" = "BlobIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BlobIdRequiredException, __BaseException>) {
    super({
      name: "BlobIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BlobIdRequiredException.prototype);
  }
}

/**
 * <p>The specified branch does not exist.</p>
 */
export class BranchDoesNotExistException extends __BaseException {
  readonly name: "BranchDoesNotExistException" = "BranchDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BranchDoesNotExistException, __BaseException>) {
    super({
      name: "BranchDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BranchDoesNotExistException.prototype);
  }
}

/**
 * <p>Cannot create the branch with the specified name because the commit conflicts with an existing branch with the same name.
 *             Branch names must be unique.</p>
 */
export class BranchNameExistsException extends __BaseException {
  readonly name: "BranchNameExistsException" = "BranchNameExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BranchNameExistsException, __BaseException>) {
    super({
      name: "BranchNameExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BranchNameExistsException.prototype);
  }
}

/**
 * <p>The specified branch name is not valid because it is a tag name. Enter the name of a
 *             branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.</p>
 */
export class BranchNameIsTagNameException extends __BaseException {
  readonly name: "BranchNameIsTagNameException" = "BranchNameIsTagNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BranchNameIsTagNameException, __BaseException>) {
    super({
      name: "BranchNameIsTagNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BranchNameIsTagNameException.prototype);
  }
}

/**
 * <p>A branch name is required, but was not specified.</p>
 */
export class BranchNameRequiredException extends __BaseException {
  readonly name: "BranchNameRequiredException" = "BranchNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BranchNameRequiredException, __BaseException>) {
    super({
      name: "BranchNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BranchNameRequiredException.prototype);
  }
}

/**
 * <p>The approval rule cannot be deleted from the pull request because it was created by an
 *             approval rule template and applied to the pull request automatically.</p>
 */
export class CannotDeleteApprovalRuleFromTemplateException extends __BaseException {
  readonly name: "CannotDeleteApprovalRuleFromTemplateException" = "CannotDeleteApprovalRuleFromTemplateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CannotDeleteApprovalRuleFromTemplateException, __BaseException>) {
    super({
      name: "CannotDeleteApprovalRuleFromTemplateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CannotDeleteApprovalRuleFromTemplateException.prototype);
  }
}

/**
 * <p>A client request token is required. A client request token is an unique,
 *             client-generated idempotency token that, when provided in a request, ensures the request
 *             cannot be repeated with a changed parameter. If a request is received with the same
 *             parameters and a token is included, the request returns information about the initial
 *             request that used that token.</p>
 */
export class ClientRequestTokenRequiredException extends __BaseException {
  readonly name: "ClientRequestTokenRequiredException" = "ClientRequestTokenRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientRequestTokenRequiredException, __BaseException>) {
    super({
      name: "ClientRequestTokenRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientRequestTokenRequiredException.prototype);
  }
}

export interface CreateApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template. Provide descriptive names, because this name
   *             is applied to the approval rules created automatically in associated
   *             repositories.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The content of the approval rule that is created on pull requests in associated
   *             repositories. If you specify one or more destination references (branches), approval
   *             rules are created in an associated repository only if their destination references
   *             (branches) match those specified in the template.</p>
   *         <note>
   *             <p>When you create the content of the approval rule template, you can specify
   *                 approvers in an approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                     <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an AWS account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the AWS account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following are counted as
   *                         approvals coming from that user:</p>
   *                     <ul>
   *                      <li>
   *                             <p>An IAM user in the account
   *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                      <li>
   *                             <p>A federated user identified in IAM as Mary_Major
   *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                   </ul>
   *                     <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                 </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *
   *         </note>
   */
  approvalRuleTemplateContent: string | undefined;

  /**
   * <p>The description of the approval rule template. Consider providing a description that
   *             explains what this template does and when it might be appropriate to associate it with
   *             repositories.</p>
   */
  approvalRuleTemplateDescription?: string;
}

export namespace CreateApprovalRuleTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApprovalRuleTemplateInput): any => ({
    ...obj,
  });
}

export interface CreateApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the created approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace CreateApprovalRuleTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApprovalRuleTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The content of the approval rule template is not valid.</p>
 */
export class InvalidApprovalRuleTemplateContentException extends __BaseException {
  readonly name: "InvalidApprovalRuleTemplateContentException" = "InvalidApprovalRuleTemplateContentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalRuleTemplateContentException, __BaseException>) {
    super({
      name: "InvalidApprovalRuleTemplateContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalRuleTemplateContentException.prototype);
  }
}

/**
 * <p>The description for the approval rule template is not valid because it exceeds the
 *             maximum characters allowed for a description. For more information about limits in AWS
 *             CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User
 *             Guide</a>.</p>
 */
export class InvalidApprovalRuleTemplateDescriptionException extends __BaseException {
  readonly name: "InvalidApprovalRuleTemplateDescriptionException" = "InvalidApprovalRuleTemplateDescriptionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalRuleTemplateDescriptionException, __BaseException>) {
    super({
      name: "InvalidApprovalRuleTemplateDescriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalRuleTemplateDescriptionException.prototype);
  }
}

/**
 * <p>The maximum number of approval rule templates has been exceeded for this AWS Region. </p>
 */
export class NumberOfRuleTemplatesExceededException extends __BaseException {
  readonly name: "NumberOfRuleTemplatesExceededException" = "NumberOfRuleTemplatesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NumberOfRuleTemplatesExceededException, __BaseException>) {
    super({
      name: "NumberOfRuleTemplatesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NumberOfRuleTemplatesExceededException.prototype);
  }
}

/**
 * <p>A commit ID was not specified.</p>
 */
export class CommitIdRequiredException extends __BaseException {
  readonly name: "CommitIdRequiredException" = "CommitIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommitIdRequiredException, __BaseException>) {
    super({
      name: "CommitIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommitIdRequiredException.prototype);
  }
}

/**
 * <p>Represents the input of a create branch operation.</p>
 */
export interface CreateBranchInput {
  /**
   * <p>The name of the repository in which you want to create the new branch.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the new branch to create.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The ID of the commit to point the new branch to.</p>
   */
  commitId: string | undefined;
}

export namespace CreateBranchInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBranchInput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reference name is not valid.</p>
 */
export class InvalidBranchNameException extends __BaseException {
  readonly name: "InvalidBranchNameException" = "InvalidBranchNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBranchNameException, __BaseException>) {
    super({
      name: "InvalidBranchNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBranchNameException.prototype);
  }
}

/**
 * <p>The specified commit ID is not valid.</p>
 */
export class InvalidCommitIdException extends __BaseException {
  readonly name: "InvalidCommitIdException" = "InvalidCommitIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCommitIdException, __BaseException>) {
    super({
      name: "InvalidCommitIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCommitIdException.prototype);
  }
}

/**
 * <p>The commit message is too long. Provide a shorter string. </p>
 */
export class CommitMessageLengthExceededException extends __BaseException {
  readonly name: "CommitMessageLengthExceededException" = "CommitMessageLengthExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommitMessageLengthExceededException, __BaseException>) {
    super({
      name: "CommitMessageLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommitMessageLengthExceededException.prototype);
  }
}

export interface CreateCommitInput {
  /**
   * <p>The name of the repository where you create the commit.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where you create the commit.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The ID of the commit that is the parent of the commit you create. Not required if this
   *             is an empty repository.</p>
   */
  parentCommitId?: string;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address of the person who created the commit.</p>
   */
  email?: string;

  /**
   * <p>The commit message you want to include in the commit. Commit messages are limited to
   *             256 KB. If no message is specified, a default message is used.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a ..gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The files to add or update in this commit.</p>
   */
  putFiles?: PutFileEntry[];

  /**
   * <p>The files to delete in this commit. These files still exist in earlier commits.</p>
   */
  deleteFiles?: DeleteFileEntry[];

  /**
   * <p>The file modes to update for files in this commit.</p>
   */
  setFileModes?: SetFileModeEntry[];
}

export namespace CreateCommitInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCommitInput): any => ({
    ...obj,
  });
}

export interface CreateCommitOutput {
  /**
   * <p>The full commit ID of the commit that contains your committed file changes.</p>
   */
  commitId?: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.</p>
   */
  treeId?: string;

  /**
   * <p>The files added as part of the committed file changes.</p>
   */
  filesAdded?: FileMetadata[];

  /**
   * <p>The files updated as part of the commited file changes.</p>
   */
  filesUpdated?: FileMetadata[];

  /**
   * <p>The files deleted as part of the committed file changes.</p>
   */
  filesDeleted?: FileMetadata[];
}

export namespace CreateCommitOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCommitOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository.
 *         Either provide a different name for the file, or specify a different path for the file.</p>
 */
export class DirectoryNameConflictsWithFileNameException extends __BaseException {
  readonly name: "DirectoryNameConflictsWithFileNameException" = "DirectoryNameConflictsWithFileNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryNameConflictsWithFileNameException, __BaseException>) {
    super({
      name: "DirectoryNameConflictsWithFileNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryNameConflictsWithFileNameException.prototype);
  }
}

/**
 * <p>The commit cannot be created because both a source file and file content have been
 *             specified for the same file. You cannot provide both. Either specify a source file or
 *             provide the file content directly.</p>
 */
export class FileContentAndSourceFileSpecifiedException extends __BaseException {
  readonly name: "FileContentAndSourceFileSpecifiedException" = "FileContentAndSourceFileSpecifiedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileContentAndSourceFileSpecifiedException, __BaseException>) {
    super({
      name: "FileContentAndSourceFileSpecifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileContentAndSourceFileSpecifiedException.prototype);
  }
}

/**
 * <p>The file cannot be added because it is too large. The maximum file size is 6 MB, and
 *             the combined file content change size is 7 MB. Consider making these changes using a Git
 *             client.</p>
 */
export class FileContentSizeLimitExceededException extends __BaseException {
  readonly name: "FileContentSizeLimitExceededException" = "FileContentSizeLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileContentSizeLimitExceededException, __BaseException>) {
    super({
      name: "FileContentSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileContentSizeLimitExceededException.prototype);
  }
}

/**
 * <p>The specified file does not exist. Verify that you have used the correct file name,
 *             full path, and extension.</p>
 */
export class FileDoesNotExistException extends __BaseException {
  readonly name: "FileDoesNotExistException" = "FileDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileDoesNotExistException, __BaseException>) {
    super({
      name: "FileDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileDoesNotExistException.prototype);
  }
}

/**
 * <p>The commit cannot be created because no files have been specified as added, updated, or changed (PutFile or DeleteFile) for the commit.</p>
 */
export class FileEntryRequiredException extends __BaseException {
  readonly name: "FileEntryRequiredException" = "FileEntryRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileEntryRequiredException, __BaseException>) {
    super({
      name: "FileEntryRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileEntryRequiredException.prototype);
  }
}

/**
 * <p>The commit cannot be created because no file mode has been specified. A file mode is
 *             required to update mode permissions for a file.</p>
 */
export class FileModeRequiredException extends __BaseException {
  readonly name: "FileModeRequiredException" = "FileModeRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileModeRequiredException, __BaseException>) {
    super({
      name: "FileModeRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileModeRequiredException.prototype);
  }
}

/**
 * <p>A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide
 *         another name for the file, or add the file in a directory that does not match the file name.</p>
 */
export class FileNameConflictsWithDirectoryNameException extends __BaseException {
  readonly name: "FileNameConflictsWithDirectoryNameException" = "FileNameConflictsWithDirectoryNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileNameConflictsWithDirectoryNameException, __BaseException>) {
    super({
      name: "FileNameConflictsWithDirectoryNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileNameConflictsWithDirectoryNameException.prototype);
  }
}

/**
 * <p>The commit cannot be created because a specified file path points to a submodule. Verify that the destination files
 *         have valid file paths that do not point to a submodule.</p>
 */
export class FilePathConflictsWithSubmodulePathException extends __BaseException {
  readonly name: "FilePathConflictsWithSubmodulePathException" = "FilePathConflictsWithSubmodulePathException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FilePathConflictsWithSubmodulePathException, __BaseException>) {
    super({
      name: "FilePathConflictsWithSubmodulePathException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FilePathConflictsWithSubmodulePathException.prototype);
  }
}

/**
 * <p>The commit cannot be created because at least one of the overall changes in the commit results in a
 *             folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes,
 *         or split the changes across multiple folders.</p>
 */
export class FolderContentSizeLimitExceededException extends __BaseException {
  readonly name: "FolderContentSizeLimitExceededException" = "FolderContentSizeLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FolderContentSizeLimitExceededException, __BaseException>) {
    super({
      name: "FolderContentSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FolderContentSizeLimitExceededException.prototype);
  }
}

/**
 * <p>The specified deletion parameter is not valid.</p>
 */
export class InvalidDeletionParameterException extends __BaseException {
  readonly name: "InvalidDeletionParameterException" = "InvalidDeletionParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeletionParameterException, __BaseException>) {
    super({
      name: "InvalidDeletionParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeletionParameterException.prototype);
  }
}

/**
 * <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters
 *         allowed for an email address.</p>
 */
export class InvalidEmailException extends __BaseException {
  readonly name: "InvalidEmailException" = "InvalidEmailException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEmailException, __BaseException>) {
    super({
      name: "InvalidEmailException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEmailException.prototype);
  }
}

/**
 * <p>The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. </p>
 */
export class InvalidFileModeException extends __BaseException {
  readonly name: "InvalidFileModeException" = "InvalidFileModeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFileModeException, __BaseException>) {
    super({
      name: "InvalidFileModeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFileModeException.prototype);
  }
}

/**
 * <p>The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you
 *         want to add or update a file.</p>
 */
export class InvalidParentCommitIdException extends __BaseException {
  readonly name: "InvalidParentCommitIdException" = "InvalidParentCommitIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParentCommitIdException, __BaseException>) {
    super({
      name: "InvalidParentCommitIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParentCommitIdException.prototype);
  }
}

/**
 * <p>The specified path is not valid.</p>
 */
export class InvalidPathException extends __BaseException {
  readonly name: "InvalidPathException" = "InvalidPathException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPathException, __BaseException>) {
    super({
      name: "InvalidPathException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPathException.prototype);
  }
}

/**
 * <p>The number of specified files to change as part of this commit exceeds the maximum number of files
 *         that can be changed in a single commit. Consider using a Git client for these changes.</p>
 */
export class MaximumFileEntriesExceededException extends __BaseException {
  readonly name: "MaximumFileEntriesExceededException" = "MaximumFileEntriesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumFileEntriesExceededException, __BaseException>) {
    super({
      name: "MaximumFileEntriesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumFileEntriesExceededException.prototype);
  }
}

/**
 * <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 */
export class NameLengthExceededException extends __BaseException {
  readonly name: "NameLengthExceededException" = "NameLengthExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NameLengthExceededException, __BaseException>) {
    super({
      name: "NameLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NameLengthExceededException.prototype);
  }
}

/**
 * <p>The commit cannot be created because no changes will be made to the repository as a result of this commit. A commit must contain at least one change.</p>
 */
export class NoChangeException extends __BaseException {
  readonly name: "NoChangeException" = "NoChangeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoChangeException, __BaseException>) {
    super({
      name: "NoChangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoChangeException.prototype);
  }
}

/**
 * <p>The parent commit ID is not valid because it does not exist. The specified parent commit ID does not exist in the specified branch of the repository.</p>
 */
export class ParentCommitDoesNotExistException extends __BaseException {
  readonly name: "ParentCommitDoesNotExistException" = "ParentCommitDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParentCommitDoesNotExistException, __BaseException>) {
    super({
      name: "ParentCommitDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParentCommitDoesNotExistException.prototype);
  }
}

/**
 * <p>The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head
 *         of the branch, use <a>GetBranch</a>.</p>
 */
export class ParentCommitIdOutdatedException extends __BaseException {
  readonly name: "ParentCommitIdOutdatedException" = "ParentCommitIdOutdatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParentCommitIdOutdatedException, __BaseException>) {
    super({
      name: "ParentCommitIdOutdatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParentCommitIdOutdatedException.prototype);
  }
}

/**
 * <p>A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command
 *         (for example, git pull or git log).</p>
 */
export class ParentCommitIdRequiredException extends __BaseException {
  readonly name: "ParentCommitIdRequiredException" = "ParentCommitIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParentCommitIdRequiredException, __BaseException>) {
    super({
      name: "ParentCommitIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParentCommitIdRequiredException.prototype);
  }
}

/**
 * <p>The folderPath for a location cannot be null.</p>
 */
export class PathRequiredException extends __BaseException {
  readonly name: "PathRequiredException" = "PathRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PathRequiredException, __BaseException>) {
    super({
      name: "PathRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PathRequiredException.prototype);
  }
}

/**
 * <p>The commit cannot be created because one or more files specified in the commit reference both a file and a folder.</p>
 */
export class PutFileEntryConflictException extends __BaseException {
  readonly name: "PutFileEntryConflictException" = "PutFileEntryConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PutFileEntryConflictException, __BaseException>) {
    super({
      name: "PutFileEntryConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PutFileEntryConflictException.prototype);
  }
}

/**
 * <p>The commit cannot be created because one of the changes specifies copying or moving a .gitkeep file.</p>
 */
export class RestrictedSourceFileException extends __BaseException {
  readonly name: "RestrictedSourceFileException" = "RestrictedSourceFileException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RestrictedSourceFileException, __BaseException>) {
    super({
      name: "RestrictedSourceFileException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RestrictedSourceFileException.prototype);
  }
}

/**
 * <p>The commit cannot be created because one or more changes in this commit duplicate actions in the same file path. For example,
 *         you cannot make the same delete request to the same file in the same file path twice, or make a delete request and a move request to the same
 *         file as part of the same commit.</p>
 */
export class SamePathRequestException extends __BaseException {
  readonly name: "SamePathRequestException" = "SamePathRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SamePathRequestException, __BaseException>) {
    super({
      name: "SamePathRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SamePathRequestException.prototype);
  }
}

/**
 * <p>The commit cannot be created because no source files or file content have been specified for the commit.</p>
 */
export class SourceFileOrContentRequiredException extends __BaseException {
  readonly name: "SourceFileOrContentRequiredException" = "SourceFileOrContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceFileOrContentRequiredException, __BaseException>) {
    super({
      name: "SourceFileOrContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceFileOrContentRequiredException.prototype);
  }
}

export interface CreatePullRequestInput {
  /**
   * <p>The title of the pull request. This title is used to identify the pull request to
   *             other users in the repository.</p>
   */
  title: string | undefined;

  /**
   * <p>A description of the pull request.</p>
   */
  description?: string;

  /**
   * <p>The targets for the pull request, including the source of the code to be reviewed (the
   *             source branch) and the destination where the creator of the pull request intends the
   *             code to be merged after the pull request is closed (the destination branch).</p>
   */
  targets: Target[] | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   *         <note>
   *             <p>The AWS SDKs prepopulate client request tokens. If you are using an AWS SDK, an
   *                 idempotency token is created for you.</p>
   *         </note>
   */
  clientRequestToken?: string;
}

export namespace CreatePullRequestInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePullRequestInput): any => ({
    ...obj,
  });
}

export interface CreatePullRequestOutput {
  /**
   * <p>Information about the newly created pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace CreatePullRequestOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePullRequestOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The client request token is not valid. Either the token is not in a valid format, or
 *             the token has been used in a previous request and cannot be reused.</p>
 */
export class IdempotencyParameterMismatchException extends __BaseException {
  readonly name: "IdempotencyParameterMismatchException" = "IdempotencyParameterMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotencyParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyParameterMismatchException.prototype);
  }
}

/**
 * <p>The client request token is not valid.</p>
 */
export class InvalidClientRequestTokenException extends __BaseException {
  readonly name: "InvalidClientRequestTokenException" = "InvalidClientRequestTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientRequestTokenException, __BaseException>) {
    super({
      name: "InvalidClientRequestTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientRequestTokenException.prototype);
  }
}

/**
 * <p>The pull request description is not valid. Descriptions cannot be more than 1,000
 *             characters.</p>
 */
export class InvalidDescriptionException extends __BaseException {
  readonly name: "InvalidDescriptionException" = "InvalidDescriptionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDescriptionException, __BaseException>) {
    super({
      name: "InvalidDescriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDescriptionException.prototype);
  }
}

/**
 * <p>The specified reference name format is not valid. Reference names must conform to the
 *             Git references format (for example, refs/heads/master). For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals -
 *                 Git References</a> or consult your Git documentation.</p>
 */
export class InvalidReferenceNameException extends __BaseException {
  readonly name: "InvalidReferenceNameException" = "InvalidReferenceNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReferenceNameException, __BaseException>) {
    super({
      name: "InvalidReferenceNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReferenceNameException.prototype);
  }
}

/**
 * <p>The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export class InvalidTargetException extends __BaseException {
  readonly name: "InvalidTargetException" = "InvalidTargetException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetException, __BaseException>) {
    super({
      name: "InvalidTargetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetException.prototype);
  }
}

/**
 * <p>The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for
 *             the repository name, source branch, and destination branch for a pull request.</p>
 */
export class InvalidTargetsException extends __BaseException {
  readonly name: "InvalidTargetsException" = "InvalidTargetsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetsException, __BaseException>) {
    super({
      name: "InvalidTargetsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetsException.prototype);
  }
}

/**
 * <p>The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.</p>
 */
export class InvalidTitleException extends __BaseException {
  readonly name: "InvalidTitleException" = "InvalidTitleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTitleException, __BaseException>) {
    super({
      name: "InvalidTitleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTitleException.prototype);
  }
}

/**
 * <p>You cannot create the pull request because the repository has too many open pull requests.
 *             The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.</p>
 */
export class MaximumOpenPullRequestsExceededException extends __BaseException {
  readonly name: "MaximumOpenPullRequestsExceededException" = "MaximumOpenPullRequestsExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumOpenPullRequestsExceededException, __BaseException>) {
    super({
      name: "MaximumOpenPullRequestsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumOpenPullRequestsExceededException.prototype);
  }
}

/**
 * <p>You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.</p>
 */
export class MultipleRepositoriesInPullRequestException extends __BaseException {
  readonly name: "MultipleRepositoriesInPullRequestException" = "MultipleRepositoriesInPullRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MultipleRepositoriesInPullRequestException, __BaseException>) {
    super({
      name: "MultipleRepositoriesInPullRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MultipleRepositoriesInPullRequestException.prototype);
  }
}

/**
 * <p>The specified reference does not exist. You must provide a full commit ID.</p>
 */
export class ReferenceDoesNotExistException extends __BaseException {
  readonly name: "ReferenceDoesNotExistException" = "ReferenceDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReferenceDoesNotExistException, __BaseException>) {
    super({
      name: "ReferenceDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReferenceDoesNotExistException.prototype);
  }
}

/**
 * <p>A reference name is required, but none was provided.</p>
 */
export class ReferenceNameRequiredException extends __BaseException {
  readonly name: "ReferenceNameRequiredException" = "ReferenceNameRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReferenceNameRequiredException, __BaseException>) {
    super({
      name: "ReferenceNameRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReferenceNameRequiredException.prototype);
  }
}

/**
 * <p>The specified reference is not a supported type. </p>
 */
export class ReferenceTypeNotSupportedException extends __BaseException {
  readonly name: "ReferenceTypeNotSupportedException" = "ReferenceTypeNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReferenceTypeNotSupportedException, __BaseException>) {
    super({
      name: "ReferenceTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReferenceTypeNotSupportedException.prototype);
  }
}

/**
 * <p>The source branch and destination branch for the pull request are the same. You must
 *             specify different branches for the source and destination.</p>
 */
export class SourceAndDestinationAreSameException extends __BaseException {
  readonly name: "SourceAndDestinationAreSameException" = "SourceAndDestinationAreSameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceAndDestinationAreSameException, __BaseException>) {
    super({
      name: "SourceAndDestinationAreSameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceAndDestinationAreSameException.prototype);
  }
}

/**
 * <p>A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.</p>
 */
export class TargetRequiredException extends __BaseException {
  readonly name: "TargetRequiredException" = "TargetRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetRequiredException, __BaseException>) {
    super({
      name: "TargetRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetRequiredException.prototype);
  }
}

/**
 * <p>An array of target objects is required. It cannot be empty or null.</p>
 */
export class TargetsRequiredException extends __BaseException {
  readonly name: "TargetsRequiredException" = "TargetsRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetsRequiredException, __BaseException>) {
    super({
      name: "TargetsRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetsRequiredException.prototype);
  }
}

/**
 * <p>A pull request title is required. It cannot be empty or null.</p>
 */
export class TitleRequiredException extends __BaseException {
  readonly name: "TitleRequiredException" = "TitleRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TitleRequiredException, __BaseException>) {
    super({
      name: "TitleRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TitleRequiredException.prototype);
  }
}

export interface CreatePullRequestApprovalRuleInput {
  /**
   * <p>The system-generated ID of the pull request for which you want to create the approval rule.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name for the approval rule.</p>
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The content of the approval rule, including the number of approvals needed and the structure of an approval pool defined for approvals, if any. For more information
   *         about approval pools, see the AWS CodeCommit User Guide.</p>
   *         <note>
   *             <p>When you create the content of the approval rule, you can specify approvers in an
   *                 approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                     <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an AWS account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the AWS account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following would be counted
   *                         as approvals coming from that user:</p>
   *                     <ul>
   *                      <li>
   *                             <p>An IAM user in the account
   *                                     (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                      <li>
   *                             <p>A federated user identified in IAM as Mary_Major
   *                                     (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                   </ul>
   *                     <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                 </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                 Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *
   *         </note>
   */
  approvalRuleContent: string | undefined;
}

export namespace CreatePullRequestApprovalRuleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePullRequestApprovalRuleInput): any => ({
    ...obj,
  });
}

export interface CreatePullRequestApprovalRuleOutput {
  /**
   * <p>Information about the created approval rule.</p>
   */
  approvalRule: ApprovalRule | undefined;
}

export namespace CreatePullRequestApprovalRuleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePullRequestApprovalRuleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The content for the approval rule is not valid.</p>
 */
export class InvalidApprovalRuleContentException extends __BaseException {
  readonly name: "InvalidApprovalRuleContentException" = "InvalidApprovalRuleContentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalRuleContentException, __BaseException>) {
    super({
      name: "InvalidApprovalRuleContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalRuleContentException.prototype);
  }
}

/**
 * <p>The name for the approval rule is not valid.</p>
 */
export class InvalidApprovalRuleNameException extends __BaseException {
  readonly name: "InvalidApprovalRuleNameException" = "InvalidApprovalRuleNameException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApprovalRuleNameException, __BaseException>) {
    super({
      name: "InvalidApprovalRuleNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApprovalRuleNameException.prototype);
  }
}

/**
 * <p>The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.</p>
 */
export class InvalidPullRequestIdException extends __BaseException {
  readonly name: "InvalidPullRequestIdException" = "InvalidPullRequestIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPullRequestIdException, __BaseException>) {
    super({
      name: "InvalidPullRequestIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPullRequestIdException.prototype);
  }
}

/**
 * <p>The approval rule cannot be added. The pull request has the maximum number of approval rules associated with it.</p>
 */
export class NumberOfRulesExceededException extends __BaseException {
  readonly name: "NumberOfRulesExceededException" = "NumberOfRulesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NumberOfRulesExceededException, __BaseException>) {
    super({
      name: "NumberOfRulesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NumberOfRulesExceededException.prototype);
  }
}

/**
 * <p>The pull request status cannot be updated because it is already closed.</p>
 */
export class PullRequestAlreadyClosedException extends __BaseException {
  readonly name: "PullRequestAlreadyClosedException" = "PullRequestAlreadyClosedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestAlreadyClosedException, __BaseException>) {
    super({
      name: "PullRequestAlreadyClosedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestAlreadyClosedException.prototype);
  }
}

/**
 * <p>The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.</p>
 */
export class PullRequestDoesNotExistException extends __BaseException {
  readonly name: "PullRequestDoesNotExistException" = "PullRequestDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestDoesNotExistException, __BaseException>) {
    super({
      name: "PullRequestDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestDoesNotExistException.prototype);
  }
}

/**
 * <p>A pull request ID is required, but none was provided.</p>
 */
export class PullRequestIdRequiredException extends __BaseException {
  readonly name: "PullRequestIdRequiredException" = "PullRequestIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestIdRequiredException, __BaseException>) {
    super({
      name: "PullRequestIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestIdRequiredException.prototype);
  }
}

/**
 * <p>Represents the input of a create repository operation.</p>
 */
export interface CreateRepositoryInput {
  /**
   * <p>The name of the new repository to be created.</p>
   *         <note>
   *             <p>The repository name must be unique across the calling AWS account. Repository names
   *                 are limited to 100 alphanumeric, dash, and underscore characters, and cannot include
   *                 certain characters. For more information about the limits on repository names, see
   *                     <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the <i>AWS CodeCommit User Guide</i>. The
   *                 suffix .git is prohibited.</p>
   *          </note>
   */
  repositoryName: string | undefined;

  /**
   * <p>A comment or description about the new repository.</p>
   *         <note>
   *             <p>The description field for a repository accepts all HTML characters and all valid
   *                 Unicode characters. Applications that do not HTML-encode the description and display
   *                 it in a webpage can expose users to potentially malicious code. Make sure that you
   *                 HTML-encode the description field in any application that uses this API to display
   *                 the repository description on a webpage.</p>
   *          </note>
   */
  repositoryDescription?: string;

  /**
   * <p>One or more tag key-value pairs to use when tagging this repository.</p>
   */
  tags?: Record<string, string>;
}

export namespace CreateRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a create repository operation.</p>
 */
export interface CreateRepositoryOutput {
  /**
   * <p>Information about the newly created repository.</p>
   */
  repositoryMetadata?: RepositoryMetadata;
}

export namespace CreateRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRepositoryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified repository description is not valid.</p>
 */
export class InvalidRepositoryDescriptionException extends __BaseException {
  readonly name: "InvalidRepositoryDescriptionException" = "InvalidRepositoryDescriptionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRepositoryDescriptionException, __BaseException>) {
    super({
      name: "InvalidRepositoryDescriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRepositoryDescriptionException.prototype);
  }
}

/**
 * <p>The specified tag is not valid. Key names cannot be prefixed with aws:.</p>
 */
export class InvalidSystemTagUsageException extends __BaseException {
  readonly name: "InvalidSystemTagUsageException" = "InvalidSystemTagUsageException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSystemTagUsageException, __BaseException>) {
    super({
      name: "InvalidSystemTagUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSystemTagUsageException.prototype);
  }
}

/**
 * <p>The map of tags is not valid.</p>
 */
export class InvalidTagsMapException extends __BaseException {
  readonly name: "InvalidTagsMapException" = "InvalidTagsMapException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagsMapException, __BaseException>) {
    super({
      name: "InvalidTagsMapException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagsMapException.prototype);
  }
}

/**
 * <p>A repository resource limit was exceeded.</p>
 */
export class RepositoryLimitExceededException extends __BaseException {
  readonly name: "RepositoryLimitExceededException" = "RepositoryLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryLimitExceededException, __BaseException>) {
    super({
      name: "RepositoryLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryLimitExceededException.prototype);
  }
}

/**
 * <p>The specified repository name already exists.</p>
 */
export class RepositoryNameExistsException extends __BaseException {
  readonly name: "RepositoryNameExistsException" = "RepositoryNameExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNameExistsException, __BaseException>) {
    super({
      name: "RepositoryNameExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNameExistsException.prototype);
  }
}

/**
 * <p>The tag policy is not valid.</p>
 */
export class TagPolicyException extends __BaseException {
  readonly name: "TagPolicyException" = "TagPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
  }
}

/**
 * <p>The maximum number of tags for an AWS CodeCommit resource has been exceeded.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
 */
export class ConcurrentReferenceUpdateException extends __BaseException {
  readonly name: "ConcurrentReferenceUpdateException" = "ConcurrentReferenceUpdateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentReferenceUpdateException, __BaseException>) {
    super({
      name: "ConcurrentReferenceUpdateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentReferenceUpdateException.prototype);
  }
}

export interface CreateUnreferencedMergeCommitInput {
  /**
   * <p>The name of the repository where you want to create the unreferenced merge commit.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The name of the author who created the unreferenced commit. This information is used
   *             as both the author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address for the person who created the unreferenced commit.</p>
   */
  email?: string;

  /**
   * <p>The commit message for the unreferenced commit.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

export namespace CreateUnreferencedMergeCommitInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUnreferencedMergeCommitInput): any => ({
    ...obj,
  });
}

export interface CreateUnreferencedMergeCommitOutput {
  /**
   * <p>The full commit ID of the commit that contains your merge results.</p>
   */
  commitId?: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the merge results.</p>
   */
  treeId?: string;
}

export namespace CreateUnreferencedMergeCommitOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUnreferencedMergeCommitOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified conflict resolution list is not valid.</p>
 */
export class InvalidConflictResolutionException extends __BaseException {
  readonly name: "InvalidConflictResolutionException" = "InvalidConflictResolutionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConflictResolutionException, __BaseException>) {
    super({
      name: "InvalidConflictResolutionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConflictResolutionException.prototype);
  }
}

/**
 * <p>Automerge was specified for resolving the conflict, but the replacement type is not valid or content is missing. </p>
 */
export class InvalidReplacementContentException extends __BaseException {
  readonly name: "InvalidReplacementContentException" = "InvalidReplacementContentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReplacementContentException, __BaseException>) {
    super({
      name: "InvalidReplacementContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReplacementContentException.prototype);
  }
}

/**
 * <p>Automerge was specified for resolving the conflict, but the specified replacement type is not valid.</p>
 */
export class InvalidReplacementTypeException extends __BaseException {
  readonly name: "InvalidReplacementTypeException" = "InvalidReplacementTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReplacementTypeException, __BaseException>) {
    super({
      name: "InvalidReplacementTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReplacementTypeException.prototype);
  }
}

/**
 * <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 */
export class ManualMergeRequiredException extends __BaseException {
  readonly name: "ManualMergeRequiredException" = "ManualMergeRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ManualMergeRequiredException, __BaseException>) {
    super({
      name: "ManualMergeRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ManualMergeRequiredException.prototype);
  }
}

/**
 * <p>The number of allowed conflict resolution entries was exceeded.</p>
 */
export class MaximumConflictResolutionEntriesExceededException extends __BaseException {
  readonly name: "MaximumConflictResolutionEntriesExceededException" =
    "MaximumConflictResolutionEntriesExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumConflictResolutionEntriesExceededException, __BaseException>) {
    super({
      name: "MaximumConflictResolutionEntriesExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumConflictResolutionEntriesExceededException.prototype);
  }
}

/**
 * <p>More than one conflict resolution entries exists for the conflict. A conflict can have only one conflict resolution entry.</p>
 */
export class MultipleConflictResolutionEntriesException extends __BaseException {
  readonly name: "MultipleConflictResolutionEntriesException" = "MultipleConflictResolutionEntriesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MultipleConflictResolutionEntriesException, __BaseException>) {
    super({
      name: "MultipleConflictResolutionEntriesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MultipleConflictResolutionEntriesException.prototype);
  }
}

/**
 * <p>USE_NEW_CONTENT was specified, but no replacement content has been provided.</p>
 */
export class ReplacementContentRequiredException extends __BaseException {
  readonly name: "ReplacementContentRequiredException" = "ReplacementContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplacementContentRequiredException, __BaseException>) {
    super({
      name: "ReplacementContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplacementContentRequiredException.prototype);
  }
}

/**
 * <p>A replacement type is required.</p>
 */
export class ReplacementTypeRequiredException extends __BaseException {
  readonly name: "ReplacementTypeRequiredException" = "ReplacementTypeRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplacementTypeRequiredException, __BaseException>) {
    super({
      name: "ReplacementTypeRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplacementTypeRequiredException.prototype);
  }
}

export interface DeleteApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template to delete.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace DeleteApprovalRuleTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApprovalRuleTemplateInput): any => ({
    ...obj,
  });
}

export interface DeleteApprovalRuleTemplateOutput {
  /**
   * <p>The system-generated ID of the deleted approval rule template. If the template has
   *             been previously deleted, the only response is a 200 OK.</p>
   */
  approvalRuleTemplateId: string | undefined;
}

export namespace DeleteApprovalRuleTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApprovalRuleTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
 */
export class DefaultBranchCannotBeDeletedException extends __BaseException {
  readonly name: "DefaultBranchCannotBeDeletedException" = "DefaultBranchCannotBeDeletedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DefaultBranchCannotBeDeletedException, __BaseException>) {
    super({
      name: "DefaultBranchCannotBeDeletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DefaultBranchCannotBeDeletedException.prototype);
  }
}

/**
 * <p>Represents the input of a delete branch operation.</p>
 */
export interface DeleteBranchInput {
  /**
   * <p>The name of the repository that contains the branch to be deleted.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch to delete.</p>
   */
  branchName: string | undefined;
}

export namespace DeleteBranchInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBranchInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a delete branch operation.</p>
 */
export interface DeleteBranchOutput {
  /**
   * <p>Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.</p>
   */
  deletedBranch?: BranchInfo;
}

export namespace DeleteBranchOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBranchOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
 */
export class CommentDeletedException extends __BaseException {
  readonly name: "CommentDeletedException" = "CommentDeletedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentDeletedException, __BaseException>) {
    super({
      name: "CommentDeletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentDeletedException.prototype);
  }
}

/**
 * <p>No comment exists with the provided ID. Verify that you have used the correct ID, and
 *             then try again.</p>
 */
export class CommentDoesNotExistException extends __BaseException {
  readonly name: "CommentDoesNotExistException" = "CommentDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentDoesNotExistException, __BaseException>) {
    super({
      name: "CommentDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentDoesNotExistException.prototype);
  }
}

/**
 * <p>The comment ID is missing or null. A comment ID is required.</p>
 */
export class CommentIdRequiredException extends __BaseException {
  readonly name: "CommentIdRequiredException" = "CommentIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentIdRequiredException, __BaseException>) {
    super({
      name: "CommentIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentIdRequiredException.prototype);
  }
}

export interface DeleteCommentContentInput {
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *          or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;
}

export namespace DeleteCommentContentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCommentContentInput): any => ({
    ...obj,
  });
}

export interface DeleteCommentContentOutput {
  /**
   * <p>Information about the comment you just deleted.</p>
   */
  comment?: Comment;
}

export namespace DeleteCommentContentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCommentContentOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 */
export class InvalidCommentIdException extends __BaseException {
  readonly name: "InvalidCommentIdException" = "InvalidCommentIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCommentIdException, __BaseException>) {
    super({
      name: "InvalidCommentIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCommentIdException.prototype);
  }
}

export interface DeleteFileInput {
  /**
   * <p>The name of the repository that contains the file to delete.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where the commit that deletes the file is made.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The fully qualified path to the file that to be deleted, including the full name and
   *             extension of that file. For example, /examples/file.md is a fully qualified path to a
   *             file named file.md in a folder named examples.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The ID of the commit that is the tip of the branch where you want to create the commit
   *             that deletes the file. This must be the HEAD commit for the branch. The commit that
   *             deletes the file is created from this commit ID.</p>
   */
  parentCommitId: string | undefined;

  /**
   * <p>If a file is the only object in the folder or directory, specifies whether to delete
   *             the folder or directory that contains the file. By default, empty folders are deleted.
   *             This includes empty folders that are part of the directory structure. For example, if
   *             the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the
   *             last file in dir4 also deletes the empty folders dir4, dir3, and dir2.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>The commit message you want to include as part of deleting the file. Commit messages
   *             are limited to 256 KB. If no message is specified, a default message is used.</p>
   */
  commitMessage?: string;

  /**
   * <p>The name of the author of the commit that deletes the file. If no name is specified,
   *             the user's ARN is used as the author name and committer name.</p>
   */
  name?: string;

  /**
   * <p>The email address for the commit that deletes the file. If no email address is
   *             specified, the email address is left blank.</p>
   */
  email?: string;
}

export namespace DeleteFileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileInput): any => ({
    ...obj,
  });
}

export interface DeleteFileOutput {
  /**
   * <p>The full commit ID of the commit that contains the change that deletes the file.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The blob ID removed from the tree as part of deleting the file.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the delete file change.</p>
   */
  treeId: string | undefined;

  /**
   * <p>The fully qualified path to the file to be deleted, including the full name and
   *             extension of that file.</p>
   */
  filePath: string | undefined;
}

export namespace DeleteFileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFileOutput): any => ({
    ...obj,
  });
}

export interface DeletePullRequestApprovalRuleInput {
  /**
   * <p>The system-generated ID of the pull request that contains the approval rule you want to delete.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the approval rule you want to delete.</p>
   */
  approvalRuleName: string | undefined;
}

export namespace DeletePullRequestApprovalRuleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePullRequestApprovalRuleInput): any => ({
    ...obj,
  });
}

export interface DeletePullRequestApprovalRuleOutput {
  /**
   * <p>The ID of the deleted approval rule. </p>
   *         <note>
   *             <p>If the approval rule was deleted in an earlier API call, the response is 200 OK without
   *                 content.</p>
   *          </note>
   */
  approvalRuleId: string | undefined;
}

export namespace DeletePullRequestApprovalRuleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePullRequestApprovalRuleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a delete repository operation.</p>
 */
export interface DeleteRepositoryInput {
  /**
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;
}

export namespace DeleteRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a delete repository operation.</p>
 */
export interface DeleteRepositoryOutput {
  /**
   * <p>The ID of the repository that was deleted.</p>
   */
  repositoryId?: string;
}

export namespace DeleteRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRepositoryOutput): any => ({
    ...obj,
  });
}

export interface DescribeMergeConflictsInput {
  /**
   * <p>The name of the repository where you want to get information about a merge conflict.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.</p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The maximum number of merge hunks to include in the output.</p>
   */
  maxMergeHunks?: number;

  /**
   * <p>The path of the target files used to describe the conflicts. </p>
   */
  filePath: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace DescribeMergeConflictsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMergeConflictsInput): any => ({
    ...obj,
  });
}

export interface DescribeMergeConflictsOutput {
  /**
   * <p>Contains metadata about the conflicts found in the merge.</p>
   */
  conflictMetadata: ConflictMetadata | undefined;

  /**
   * <p>A list of merge hunks of the differences between the files or lines.</p>
   */
  mergeHunks: MergeHunk[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;
}

export namespace DescribeMergeConflictsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMergeConflictsOutput): any => ({
    ...obj,
  });
}

export interface DescribePullRequestEventsInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>Optional. The pull request event type about which you want to return information.</p>
   */
  pullRequestEventType?: PullRequestEventType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user whose actions resulted in the event.
   *             Examples include updating the pull request with more commits or changing the status of a
   *             pull request.</p>
   */
  actorArn?: string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.
   *             The default is 100 events, which is also the maximum number of events that can be returned in a result.</p>
   */
  maxResults?: number;
}

export namespace DescribePullRequestEventsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePullRequestEventsInput): any => ({
    ...obj,
  });
}

export interface DescribePullRequestEventsOutput {
  /**
   * <p>Information about the pull request events.</p>
   */
  pullRequestEvents: PullRequestEvent[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace DescribePullRequestEventsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePullRequestEventsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request,
 *             and then try again.</p>
 */
export class InvalidActorArnException extends __BaseException {
  readonly name: "InvalidActorArnException" = "InvalidActorArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidActorArnException, __BaseException>) {
    super({
      name: "InvalidActorArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidActorArnException.prototype);
  }
}

/**
 * <p>The specified number of maximum results is not valid.</p>
 */
export class InvalidMaxResultsException extends __BaseException {
  readonly name: "InvalidMaxResultsException" = "InvalidMaxResultsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMaxResultsException, __BaseException>) {
    super({
      name: "InvalidMaxResultsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMaxResultsException.prototype);
  }
}

/**
 * <p>The pull request event type is not valid. </p>
 */
export class InvalidPullRequestEventTypeException extends __BaseException {
  readonly name: "InvalidPullRequestEventTypeException" = "InvalidPullRequestEventTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPullRequestEventTypeException, __BaseException>) {
    super({
      name: "InvalidPullRequestEventTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPullRequestEventTypeException.prototype);
  }
}

export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
  /**
   * <p>The name of the approval rule template to disassociate from a specified repository.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The name of the repository you want to disassociate from the template.</p>
   */
  repositoryName: string | undefined;
}

export namespace DisassociateApprovalRuleTemplateFromRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateApprovalRuleTemplateFromRepositoryInput): any => ({
    ...obj,
  });
}

export interface EvaluatePullRequestApprovalRulesInput {
  /**
   * <p>The system-generated ID of the pull request you want to evaluate.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID for the pull request revision. To retrieve the most recent
   *             revision ID for a pull request, use
   *             <a>GetPullRequest</a>.</p>
   */
  revisionId: string | undefined;
}

export namespace EvaluatePullRequestApprovalRulesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluatePullRequestApprovalRulesInput): any => ({
    ...obj,
  });
}

export interface EvaluatePullRequestApprovalRulesOutput {
  /**
   * <p>The result of the evaluation, including the names of the rules whose conditions have been met (if any), the names of the rules whose conditions have
   *         not been met (if any), whether the pull request is in the approved state, and whether the pull request approval rule has been set aside by an override. </p>
   */
  evaluation: Evaluation | undefined;
}

export namespace EvaluatePullRequestApprovalRulesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluatePullRequestApprovalRulesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 */
export class InvalidRevisionIdException extends __BaseException {
  readonly name: "InvalidRevisionIdException" = "InvalidRevisionIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRevisionIdException, __BaseException>) {
    super({
      name: "InvalidRevisionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRevisionIdException.prototype);
  }
}

/**
 * <p>A revision ID is required, but was not provided.</p>
 */
export class RevisionIdRequiredException extends __BaseException {
  readonly name: "RevisionIdRequiredException" = "RevisionIdRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevisionIdRequiredException, __BaseException>) {
    super({
      name: "RevisionIdRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevisionIdRequiredException.prototype);
  }
}

/**
 * <p>The revision ID provided in the request does not match the current revision ID. Use GetPullRequest to retrieve the current revision ID.</p>
 */
export class RevisionNotCurrentException extends __BaseException {
  readonly name: "RevisionNotCurrentException" = "RevisionNotCurrentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevisionNotCurrentException, __BaseException>) {
    super({
      name: "RevisionNotCurrentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevisionNotCurrentException.prototype);
  }
}

export interface GetApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template for which you want to get information.</p>
   */
  approvalRuleTemplateName: string | undefined;
}

export namespace GetApprovalRuleTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApprovalRuleTemplateInput): any => ({
    ...obj,
  });
}

export interface GetApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace GetApprovalRuleTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApprovalRuleTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.</p>
 */
export class FileTooLargeException extends __BaseException {
  readonly name: "FileTooLargeException" = "FileTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FileTooLargeException, __BaseException>) {
    super({
      name: "FileTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FileTooLargeException.prototype);
  }
}

/**
 * <p>Represents the input of a get blob operation.</p>
 */
export interface GetBlobInput {
  /**
   * <p>The name of the repository that contains the blob.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   */
  blobId: string | undefined;
}

export namespace GetBlobInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlobInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get blob operation.</p>
 */
export interface GetBlobOutput {
  /**
   * <p>The content of the blob, usually a file.</p>
   */
  content: Uint8Array | undefined;
}

export namespace GetBlobOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlobOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified blob is not valid.</p>
 */
export class InvalidBlobIdException extends __BaseException {
  readonly name: "InvalidBlobIdException" = "InvalidBlobIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBlobIdException, __BaseException>) {
    super({
      name: "InvalidBlobIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBlobIdException.prototype);
  }
}

/**
 * <p>Represents the input of a get branch operation.</p>
 */
export interface GetBranchInput {
  /**
   * <p>The name of the repository that contains the branch for which you want to retrieve information.</p>
   */
  repositoryName?: string;

  /**
   * <p>The name of the branch for which you want to retrieve information.</p>
   */
  branchName?: string;
}

export namespace GetBranchInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBranchInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get branch operation.</p>
 */
export interface GetBranchOutput {
  /**
   * <p>The name of the branch.</p>
   */
  branch?: BranchInfo;
}

export namespace GetBranchOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBranchOutput): any => ({
    ...obj,
  });
}

export interface GetCommentInput {
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;
}

export namespace GetCommentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentInput): any => ({
    ...obj,
  });
}

export interface GetCommentOutput {
  /**
   * <p>The contents of the comment.</p>
   */
  comment?: Comment;
}

export namespace GetCommentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentOutput): any => ({
    ...obj,
  });
}

export interface GetCommentReactionsInput {
  /**
   * <p>The ID of the comment for which you want to get reactions information.</p>
   */
  commentId: string | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user or identity for which you want to get reaction information.</p>
   */
  reactionUserArn?: string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the results. </p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.  The default is the same as the allowed maximum, 1,000.</p>
   */
  maxResults?: number;
}

export namespace GetCommentReactionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentReactionsInput): any => ({
    ...obj,
  });
}

export interface GetCommentReactionsOutput {
  /**
   * <p>An array of reactions to the specified comment.</p>
   */
  reactionsForComment: ReactionForComment[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetCommentReactionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentReactionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) of the user or identity is not valid.</p>
 */
export class InvalidReactionUserArnException extends __BaseException {
  readonly name: "InvalidReactionUserArnException" = "InvalidReactionUserArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReactionUserArnException, __BaseException>) {
    super({
      name: "InvalidReactionUserArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReactionUserArnException.prototype);
  }
}

export interface GetCommentsForComparedCommitInput {
  /**
   * <p>The name of the repository where you want to compare commits.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   */
  afterCommitId: string | undefined;

  /**
   * <p>An enumeration token that when provided in a request, returns the next batch of the results. </p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The
   *             default is 100 comments, but you can configure up to 500.</p>
   */
  maxResults?: number;
}

export namespace GetCommentsForComparedCommitInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentsForComparedCommitInput): any => ({
    ...obj,
  });
}

export interface GetCommentsForComparedCommitOutput {
  /**
   * <p>A list of comment objects on the compared commit.</p>
   */
  commentsForComparedCommitData?: CommentsForComparedCommit[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetCommentsForComparedCommitOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentsForComparedCommitOutput): any => ({
    ...obj,
  });
}

export interface GetCommentsForPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository that contains the pull request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made.</p>
   */
  afterCommitId?: string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results. The default is 100 comments.
   *             You can return up to 500 comments with a single request.</p>
   */
  maxResults?: number;
}

export namespace GetCommentsForPullRequestInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentsForPullRequestInput): any => ({
    ...obj,
  });
}

export interface GetCommentsForPullRequestOutput {
  /**
   * <p>An array of comment objects on the pull request.</p>
   */
  commentsForPullRequestData?: CommentsForPullRequest[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetCommentsForPullRequestOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommentsForPullRequestOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 */
export class RepositoryNotAssociatedWithPullRequestException extends __BaseException {
  readonly name: "RepositoryNotAssociatedWithPullRequestException" = "RepositoryNotAssociatedWithPullRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RepositoryNotAssociatedWithPullRequestException, __BaseException>) {
    super({
      name: "RepositoryNotAssociatedWithPullRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RepositoryNotAssociatedWithPullRequestException.prototype);
  }
}

/**
 * <p>The specified commit ID does not exist.</p>
 */
export class CommitIdDoesNotExistException extends __BaseException {
  readonly name: "CommitIdDoesNotExistException" = "CommitIdDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommitIdDoesNotExistException, __BaseException>) {
    super({
      name: "CommitIdDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommitIdDoesNotExistException.prototype);
  }
}

/**
 * <p>Represents the input of a get commit operation.</p>
 */
export interface GetCommitInput {
  /**
   * <p>The name of the repository to which the commit was made.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The commit ID. Commit IDs are the full SHA ID of the commit.</p>
   */
  commitId: string | undefined;
}

export namespace GetCommitInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommitInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get commit operation.</p>
 */
export interface GetCommitOutput {
  /**
   * <p>A commit data type object that contains information about the specified commit.</p>
   */
  commit: Commit | undefined;
}

export namespace GetCommitOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCommitOutput): any => ({
    ...obj,
  });
}

export interface GetDifferencesInput {
  /**
   * <p>The name of the repository where you want to get differences.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, the full commit ID). Optional. If not specified, all changes before the
   *                 <code>afterCommitSpecifier</code> value are shown. If you do not use
   *                 <code>beforeCommitSpecifier</code> in your request, consider limiting the results
   *             with <code>maxResults</code>.</p>
   */
  beforeCommitSpecifier?: string;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit.</p>
   */
  afterCommitSpecifier: string | undefined;

  /**
   * <p>The file path in which to check for differences. Limits the results to this path. Can
   *             also be used to specify the previous name of a directory or folder. If
   *                 <code>beforePath</code> and <code>afterPath</code> are not specified, differences
   *             are shown for all paths.</p>
   */
  beforePath?: string;

  /**
   * <p>The file path in which to check differences. Limits the results to this path. Can also
   *             be used to specify the changed name of a directory or folder, if it has changed. If not
   *             specified, differences are shown for all paths.</p>
   */
  afterPath?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  MaxResults?: number;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  NextToken?: string;
}

export namespace GetDifferencesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDifferencesInput): any => ({
    ...obj,
  });
}

export interface GetDifferencesOutput {
  /**
   * <p>A data type object that contains information about the differences, including whether
   *             the difference is added, modified, or deleted (A, D, M).</p>
   */
  differences?: Difference[];

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  NextToken?: string;
}

export namespace GetDifferencesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDifferencesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified path does not exist.</p>
 */
export class PathDoesNotExistException extends __BaseException {
  readonly name: "PathDoesNotExistException" = "PathDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PathDoesNotExistException, __BaseException>) {
    super({
      name: "PathDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PathDoesNotExistException.prototype);
  }
}

export interface GetFileInput {
  /**
   * <p>The name of the repository that contains the file.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The fully quaified reference that identifies the commit that contains the file. For
   *             example, you can specify a full commit ID, a tag, a branch name, or a reference such as
   *             refs/heads/master. If none is provided, the head commit is used.</p>
   */
  commitSpecifier?: string;

  /**
   * <p>The fully qualified path to the file, including the full name and extension of the
   *             file. For example, /examples/file.md is the fully qualified path to a file named file.md
   *             in a folder named examples.</p>
   */
  filePath: string | undefined;
}

export namespace GetFileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFileInput): any => ({
    ...obj,
  });
}

export interface GetFileOutput {
  /**
   * <p>The full commit ID of the commit that contains the content returned by GetFile.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The blob ID of the object that represents the file content.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The fully qualified path to the specified file. Returns the name and extension of the
   *             file.</p>
   */
  filePath: string | undefined;

  /**
   * <p>The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values.</p>
   *         <note>
   *             <p>The file mode permissions returned by this API are not the standard file mode
   *                 permission values, such as 100644, but rather extrapolated values. See the supported
   *                 return values.</p>
   *         </note>
   */
  fileMode: FileModeTypeEnum | string | undefined;

  /**
   * <p>The size of the contents of the file, in bytes.</p>
   */
  fileSize: number | undefined;

  /**
   * <p>The base-64 encoded binary data object that represents the content of the file.</p>
   */
  fileContent: Uint8Array | undefined;
}

export namespace GetFileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFileOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified folder does not exist. Either the folder name is not correct, or you did
 *             not enter the full path to the folder.</p>
 */
export class FolderDoesNotExistException extends __BaseException {
  readonly name: "FolderDoesNotExistException" = "FolderDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FolderDoesNotExistException, __BaseException>) {
    super({
      name: "FolderDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FolderDoesNotExistException.prototype);
  }
}

export interface GetFolderInput {
  /**
   * <p>The name of the repository.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>A fully qualified reference used to identify a commit that contains the version of the
   *             folder's content to return. A fully qualified reference can be a commit ID, branch name,
   *             tag, or reference such as HEAD. If no specifier is provided, the folder content is
   *             returned as it exists in the HEAD commit.</p>
   */
  commitSpecifier?: string;

  /**
   * <p>The fully qualified path to the folder whose contents are returned, including the
   *             folder name. For example, /examples is a fully-qualified path to a folder named examples
   *             that was created off of the root directory (/) of a repository. </p>
   */
  folderPath: string | undefined;
}

export namespace GetFolderInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFolderInput): any => ({
    ...obj,
  });
}

export interface GetFolderOutput {
  /**
   * <p>The full commit ID used as a reference for the returned version of the folder
   *             content.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The fully qualified path of the folder whose contents are returned.</p>
   */
  folderPath: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the folder.</p>
   */
  treeId?: string;

  /**
   * <p>The list of folders that exist under the specified folder, if any.</p>
   */
  subFolders?: Folder[];

  /**
   * <p>The list of files in the specified folder, if any.</p>
   */
  files?: File[];

  /**
   * <p>The list of symbolic links to other files and folders in the specified folder, if
   *             any.</p>
   */
  symbolicLinks?: SymbolicLink[];

  /**
   * <p>The list of submodules in the specified folder, if any.</p>
   */
  subModules?: SubModule[];
}

export namespace GetFolderOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFolderOutput): any => ({
    ...obj,
  });
}

export interface GetMergeCommitInput {
  /**
   * <p>The name of the repository that contains the merge commit about which you want to get information.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;
}

export namespace GetMergeCommitInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMergeCommitInput): any => ({
    ...obj,
  });
}

export interface GetMergeCommitOutput {
  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>The commit ID for the merge commit created when the source branch was merged into the
   *             destination branch. If the fast-forward merge strategy was used, there is no merge
   *             commit.</p>
   */
  mergedCommitId?: string;
}

export namespace GetMergeCommitOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMergeCommitOutput): any => ({
    ...obj,
  });
}

export interface GetMergeConflictsInput {
  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The merge option or strategy you want to use to merge the code.  </p>
   */
  mergeOption: MergeOptionTypeEnum | string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>The maximum number of files to include in the output.</p>
   */
  maxConflictFiles?: number;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace GetMergeConflictsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMergeConflictsInput): any => ({
    ...obj,
  });
}

export interface GetMergeConflictsOutput {
  /**
   * <p>A Boolean value that indicates whether the code is mergeable by the specified merge option.</p>
   */
  mergeable: boolean | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>A list of metadata for any conflicting files. If the specified merge strategy is
   *             FAST_FORWARD_MERGE, this list is always empty.</p>
   */
  conflictMetadataList: ConflictMetadata[] | undefined;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;
}

export namespace GetMergeConflictsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMergeConflictsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
 */
export class InvalidDestinationCommitSpecifierException extends __BaseException {
  readonly name: "InvalidDestinationCommitSpecifierException" = "InvalidDestinationCommitSpecifierException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDestinationCommitSpecifierException, __BaseException>) {
    super({
      name: "InvalidDestinationCommitSpecifierException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDestinationCommitSpecifierException.prototype);
  }
}

/**
 * <p>The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.</p>
 */
export class InvalidSourceCommitSpecifierException extends __BaseException {
  readonly name: "InvalidSourceCommitSpecifierException" = "InvalidSourceCommitSpecifierException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSourceCommitSpecifierException, __BaseException>) {
    super({
      name: "InvalidSourceCommitSpecifierException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSourceCommitSpecifierException.prototype);
  }
}

export interface GetMergeOptionsInput {
  /**
   * <p>The name of the repository that contains the commits about which you want to get merge options.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;
}

export namespace GetMergeOptionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMergeOptionsInput): any => ({
    ...obj,
  });
}

export interface GetMergeOptionsOutput {
  /**
   * <p>The merge option or strategy used to merge the code.</p>
   */
  mergeOptions: (MergeOptionTypeEnum | string)[] | undefined;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string | undefined;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string | undefined;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId: string | undefined;
}

export namespace GetMergeOptionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMergeOptionsOutput): any => ({
    ...obj,
  });
}

export interface GetPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;
}

export namespace GetPullRequestInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPullRequestInput): any => ({
    ...obj,
  });
}

export interface GetPullRequestOutput {
  /**
   * <p>Information about the specified pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace GetPullRequestOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPullRequestOutput): any => ({
    ...obj,
  });
}

export interface GetPullRequestApprovalStatesInput {
  /**
   * <p>The system-generated ID for the pull request.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID for the pull request revision.</p>
   */
  revisionId: string | undefined;
}

export namespace GetPullRequestApprovalStatesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPullRequestApprovalStatesInput): any => ({
    ...obj,
  });
}

export interface GetPullRequestApprovalStatesOutput {
  /**
   * <p>Information about users who have approved the pull request.</p>
   */
  approvals?: Approval[];
}

export namespace GetPullRequestApprovalStatesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPullRequestApprovalStatesOutput): any => ({
    ...obj,
  });
}

export interface GetPullRequestOverrideStateInput {
  /**
   * <p>The ID of the pull request for which you want to get information about whether approval rules have been set aside (overridden).</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the revision for the pull request. To retrieve the most
   *             recent revision ID, use
   *             <a>GetPullRequest</a>.</p>
   */
  revisionId: string | undefined;
}

export namespace GetPullRequestOverrideStateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPullRequestOverrideStateInput): any => ({
    ...obj,
  });
}

export interface GetPullRequestOverrideStateOutput {
  /**
   * <p>A Boolean value that indicates whether a pull request has had its rules set aside (TRUE) or whether all approval rules still apply (FALSE).</p>
   */
  overridden?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
   */
  overrider?: string;
}

export namespace GetPullRequestOverrideStateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPullRequestOverrideStateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a get repository operation.</p>
 */
export interface GetRepositoryInput {
  /**
   * <p>The name of the repository to get information about.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get repository operation.</p>
 */
export interface GetRepositoryOutput {
  /**
   * <p>Information about the repository.</p>
   */
  repositoryMetadata?: RepositoryMetadata;
}

export namespace GetRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersInput {
  /**
   * <p>The name of the repository for which the trigger is configured.</p>
   */
  repositoryName: string | undefined;
}

export namespace GetRepositoryTriggersInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryTriggersInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersOutput {
  /**
   * <p>The system-generated unique ID for the trigger.</p>
   */
  configurationId?: string;

  /**
   * <p>The JSON block of configuration information for each trigger.</p>
   */
  triggers?: RepositoryTrigger[];
}

export namespace GetRepositoryTriggersOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRepositoryTriggersOutput): any => ({
    ...obj,
  });
}

export interface ListApprovalRuleTemplatesInput {
  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

export namespace ListApprovalRuleTemplatesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApprovalRuleTemplatesInput): any => ({
    ...obj,
  });
}

export interface ListApprovalRuleTemplatesOutput {
  /**
   * <p>The names of all the approval rule templates found in the AWS Region for your AWS account.</p>
   */
  approvalRuleTemplateNames?: string[];

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListApprovalRuleTemplatesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApprovalRuleTemplatesOutput): any => ({
    ...obj,
  });
}

export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  /**
   * <p>The name of the repository for which you want to list all associated approval rule templates.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

export namespace ListAssociatedApprovalRuleTemplatesForRepositoryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedApprovalRuleTemplatesForRepositoryInput): any => ({
    ...obj,
  });
}

export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  /**
   * <p>The names of all approval rule templates associated with the repository.</p>
   */
  approvalRuleTemplateNames?: string[];

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedApprovalRuleTemplatesForRepositoryOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a list branches operation.</p>
 */
export interface ListBranchesInput {
  /**
   * <p>The name of the repository that contains the branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the results.</p>
   */
  nextToken?: string;
}

export namespace ListBranchesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBranchesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a list branches operation.</p>
 */
export interface ListBranchesOutput {
  /**
   * <p>The list of branch names.</p>
   */
  branches?: string[];

  /**
   * <p>An enumeration token that returns the batch of the results.</p>
   */
  nextToken?: string;
}

export namespace ListBranchesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBranchesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
 */
export class InvalidAuthorArnException extends __BaseException {
  readonly name: "InvalidAuthorArnException" = "InvalidAuthorArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidAuthorArnException, __BaseException>) {
    super({
      name: "InvalidAuthorArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidAuthorArnException.prototype);
  }
}

/**
 * <p>The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.</p>
 */
export class InvalidPullRequestStatusException extends __BaseException {
  readonly name: "InvalidPullRequestStatusException" = "InvalidPullRequestStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPullRequestStatusException, __BaseException>) {
    super({
      name: "InvalidPullRequestStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPullRequestStatusException.prototype);
  }
}

export interface ListPullRequestsInput {
  /**
   * <p>The name of the repository for which you want to list pull requests.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results
   *         to pull requests created by that user.</p>
   */
  authorArn?: string;

  /**
   * <p>Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

export namespace ListPullRequestsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPullRequestsInput): any => ({
    ...obj,
  });
}

export interface ListPullRequestsOutput {
  /**
   * <p>The system-generated IDs of the pull requests.</p>
   */
  pullRequestIds: string[] | undefined;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListPullRequestsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPullRequestsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified sort order is not valid.</p>
 */
export class InvalidOrderException extends __BaseException {
  readonly name: "InvalidOrderException" = "InvalidOrderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOrderException, __BaseException>) {
    super({
      name: "InvalidOrderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOrderException.prototype);
  }
}

/**
 * <p>The specified sort by value is not valid.</p>
 */
export class InvalidSortByException extends __BaseException {
  readonly name: "InvalidSortByException" = "InvalidSortByException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSortByException, __BaseException>) {
    super({
      name: "InvalidSortByException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSortByException.prototype);
  }
}

/**
 * <p>Represents the input of a list repositories operation.</p>
 */
export interface ListRepositoriesInput {
  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria used to sort the results of a list repositories operation.</p>
   */
  sortBy?: SortByEnum | string;

  /**
   * <p>The order in which to sort the results of a list repositories operation.</p>
   */
  order?: OrderEnum | string;
}

export namespace ListRepositoriesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRepositoriesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a list repositories operation.</p>
 */
export interface ListRepositoriesOutput {
  /**
   * <p>Lists the repositories called by the list repositories operation.</p>
   */
  repositories?: RepositoryNameIdPair[];

  /**
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   */
  nextToken?: string;
}

export namespace ListRepositoriesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRepositoriesOutput): any => ({
    ...obj,
  });
}

export interface ListRepositoriesForApprovalRuleTemplateInput {
  /**
   * <p>The name of the approval rule template for which you want to list repositories that are associated with that template.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

export namespace ListRepositoriesForApprovalRuleTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRepositoriesForApprovalRuleTemplateInput): any => ({
    ...obj,
  });
}

export interface ListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * <p>A list of repository names that are associated with the specified approval rule template.</p>
   */
  repositoryNames?: string[];

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRepositoriesForApprovalRuleTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 */
export class InvalidResourceArnException extends __BaseException {
  readonly name: "InvalidResourceArnException" = "InvalidResourceArnException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceArnException, __BaseException>) {
    super({
      name: "InvalidResourceArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceArnException.prototype);
  }
}

export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information
   *             about tags, if any.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceOutput {
  /**
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the AWS CodeCommit User Guide.</p>
 */
export class ResourceArnRequiredException extends __BaseException {
  readonly name: "ResourceArnRequiredException" = "ResourceArnRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceArnRequiredException, __BaseException>) {
    super({
      name: "ResourceArnRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceArnRequiredException.prototype);
  }
}

/**
 * <p>The specified target branch is not valid.</p>
 */
export class InvalidTargetBranchException extends __BaseException {
  readonly name: "InvalidTargetBranchException" = "InvalidTargetBranchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetBranchException, __BaseException>) {
    super({
      name: "InvalidTargetBranchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetBranchException.prototype);
  }
}

export interface MergeBranchesByFastForwardInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied.</p>
   */
  targetBranch?: string;
}

export namespace MergeBranchesByFastForwardInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeBranchesByFastForwardInput): any => ({
    ...obj,
  });
}

export interface MergeBranchesByFastForwardOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

export namespace MergeBranchesByFastForwardOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeBranchesByFastForwardOutput): any => ({
    ...obj,
  });
}

export interface MergeBranchesBySquashInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   */
  targetBranch?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>The commit message for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

export namespace MergeBranchesBySquashInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeBranchesBySquashInput): any => ({
    ...obj,
  });
}

export interface MergeBranchesBySquashOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

export namespace MergeBranchesBySquashOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeBranchesBySquashOutput): any => ({
    ...obj,
  });
}

export interface MergeBranchesByThreeWayInput {
  /**
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * <p>The branch where the merge is applied. </p>
   */
  targetBranch?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

export namespace MergeBranchesByThreeWayInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeBranchesByThreeWayInput): any => ({
    ...obj,
  });
}

export interface MergeBranchesByThreeWayOutput {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

export namespace MergeBranchesByThreeWayOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergeBranchesByThreeWayOutput): any => ({
    ...obj,
  });
}

export interface MergePullRequestByFastForwardInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *         exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;
}

export namespace MergePullRequestByFastForwardInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergePullRequestByFastForwardInput): any => ({
    ...obj,
  });
}

export interface MergePullRequestByFastForwardOutput {
  /**
   * <p>Information about the specified pull request, including the merge.</p>
   */
  pullRequest?: PullRequest;
}

export namespace MergePullRequestByFastForwardOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergePullRequestByFastForwardOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The pull request cannot be merged because one or more approval rules applied to the pull request have conditions that have not been met.</p>
 */
export class PullRequestApprovalRulesNotSatisfiedException extends __BaseException {
  readonly name: "PullRequestApprovalRulesNotSatisfiedException" = "PullRequestApprovalRulesNotSatisfiedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PullRequestApprovalRulesNotSatisfiedException, __BaseException>) {
    super({
      name: "PullRequestApprovalRulesNotSatisfiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PullRequestApprovalRulesNotSatisfiedException.prototype);
  }
}

/**
 * <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request.
 *             The pull request might have been updated. Make sure that you have the latest changes.</p>
 */
export class TipOfSourceReferenceIsDifferentException extends __BaseException {
  readonly name: "TipOfSourceReferenceIsDifferentException" = "TipOfSourceReferenceIsDifferentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TipOfSourceReferenceIsDifferentException, __BaseException>) {
    super({
      name: "TipOfSourceReferenceIsDifferentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TipOfSourceReferenceIsDifferentException.prototype);
  }
}

export interface MergePullRequestBySquashInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

export namespace MergePullRequestBySquashInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergePullRequestBySquashInput): any => ({
    ...obj,
  });
}

export interface MergePullRequestBySquashOutput {
  /**
   * <p>Returns information about a pull request.</p>
   */
  pullRequest?: PullRequest;
}

export namespace MergePullRequestBySquashOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergePullRequestBySquashOutput): any => ({
    ...obj,
  });
}

export interface MergePullRequestByThreeWayInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum | string;

  /**
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum | string;

  /**
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

export namespace MergePullRequestByThreeWayInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergePullRequestByThreeWayInput): any => ({
    ...obj,
  });
}

export interface MergePullRequestByThreeWayOutput {
  /**
   * <p>Returns information about a pull request.</p>
   */
  pullRequest?: PullRequest;
}

export namespace MergePullRequestByThreeWayOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MergePullRequestByThreeWayOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The override status is not valid. Valid statuses are OVERRIDE and REVOKE.</p>
 */
export class InvalidOverrideStatusException extends __BaseException {
  readonly name: "InvalidOverrideStatusException" = "InvalidOverrideStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOverrideStatusException, __BaseException>) {
    super({
      name: "InvalidOverrideStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOverrideStatusException.prototype);
  }
}

/**
 * <p>The pull request has already had its approval rules set to override.</p>
 */
export class OverrideAlreadySetException extends __BaseException {
  readonly name: "OverrideAlreadySetException" = "OverrideAlreadySetException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OverrideAlreadySetException, __BaseException>) {
    super({
      name: "OverrideAlreadySetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OverrideAlreadySetException.prototype);
  }
}

export interface OverridePullRequestApprovalRulesInput {
  /**
   * <p>The system-generated ID of the pull request for which you want to override all
   *             approval rule requirements. To get this information, use
   *             <a>GetPullRequest</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request.
   *             To get the revision ID, use GetPullRequest.</p>
   */
  revisionId: string | undefined;

  /**
   * <p>Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply
   *         approval rule requirements (REVOKE). REVOKE status is not stored.</p>
   */
  overrideStatus: OverrideStatus | string | undefined;
}

export namespace OverridePullRequestApprovalRulesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OverridePullRequestApprovalRulesInput): any => ({
    ...obj,
  });
}

/**
 * <p>An override status is required, but no value was provided. Valid values include OVERRIDE and REVOKE.</p>
 */
export class OverrideStatusRequiredException extends __BaseException {
  readonly name: "OverrideStatusRequiredException" = "OverrideStatusRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OverrideStatusRequiredException, __BaseException>) {
    super({
      name: "OverrideStatusRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OverrideStatusRequiredException.prototype);
  }
}

/**
 * <p>The comment is empty. You must provide some content for a comment. The content cannot be null.</p>
 */
export class CommentContentRequiredException extends __BaseException {
  readonly name: "CommentContentRequiredException" = "CommentContentRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentContentRequiredException, __BaseException>) {
    super({
      name: "CommentContentRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentContentRequiredException.prototype);
  }
}

/**
 * <p>The comment is too large. Comments are limited to 1,000 characters.</p>
 */
export class CommentContentSizeLimitExceededException extends __BaseException {
  readonly name: "CommentContentSizeLimitExceededException" = "CommentContentSizeLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CommentContentSizeLimitExceededException, __BaseException>) {
    super({
      name: "CommentContentSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CommentContentSizeLimitExceededException.prototype);
  }
}

/**
 * <p>The location of the file is not valid. Make sure that you include the file name and
 *             extension.</p>
 */
export class InvalidFileLocationException extends __BaseException {
  readonly name: "InvalidFileLocationException" = "InvalidFileLocationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFileLocationException, __BaseException>) {
    super({
      name: "InvalidFileLocationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFileLocationException.prototype);
  }
}

/**
 * <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
 */
export class InvalidFilePositionException extends __BaseException {
  readonly name: "InvalidFilePositionException" = "InvalidFilePositionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilePositionException, __BaseException>) {
    super({
      name: "InvalidFilePositionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilePositionException.prototype);
  }
}

/**
 * <p>Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.</p>
 */
export class InvalidRelativeFileVersionEnumException extends __BaseException {
  readonly name: "InvalidRelativeFileVersionEnumException" = "InvalidRelativeFileVersionEnumException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRelativeFileVersionEnumException, __BaseException>) {
    super({
      name: "InvalidRelativeFileVersionEnumException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRelativeFileVersionEnumException.prototype);
  }
}

export interface PostCommentForComparedCommitInput {
  /**
   * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit. Required for commenting on any commit unless that commit is the initial
   *             commit.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   */
  afterCommitId: string | undefined;

  /**
   * <p>The location of the comparison where you want to comment.</p>
   */
  location?: Location;

  /**
   * <p>The content of the comment you want to make.</p>
   */
  content: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;
}

export namespace PostCommentForComparedCommitInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostCommentForComparedCommitInput): any => ({
    ...obj,
  });
}

export interface PostCommentForComparedCommitOutput {
  /**
   * <p>The name of the repository where you posted a comment on the comparison between commits.</p>
   */
  repositoryName?: string;

  /**
   * <p>In the directionality you established, the full commit ID of the before commit.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>In the directionality you established, the full commit ID of the after commit.</p>
   */
  afterCommitId?: string;

  /**
   * <p>In the directionality you established, the blob ID of the before blob.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>In the directionality you established, the blob ID of the after blob.</p>
   */
  afterBlobId?: string;

  /**
   * <p>The location of the comment in the comparison between the two commits.</p>
   */
  location?: Location;

  /**
   * <p>The content of the comment you posted.</p>
   */
  comment?: Comment;
}

export namespace PostCommentForComparedCommitOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostCommentForComparedCommitOutput): any => ({
    ...obj,
  });
}

export interface PostCommentForPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the repository where you want to post a comment on a pull request.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   */
  beforeCommitId: string | undefined;

  /**
   * <p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>
   */
  afterCommitId: string | undefined;

  /**
   * <p>The location of the change where you want to post your comment. If no location is
   *             provided, the comment is posted as a general comment on the pull request difference
   *             between the before commit ID and the after commit ID.</p>
   */
  location?: Location;

  /**
   * <p>The content of your comment on the change.</p>
   */
  content: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;
}

export namespace PostCommentForPullRequestInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostCommentForPullRequestInput): any => ({
    ...obj,
  });
}

export interface PostCommentForPullRequestOutput {
  /**
   * <p>The name of the repository where you posted a comment on a pull request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The system-generated ID of the pull request. </p>
   */
  pullRequestId?: string;

  /**
   * <p>The full commit ID of the commit in the source branch used to create the pull request,
   *             or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>
   */
  beforeCommitId?: string;

  /**
   * <p>The full commit ID of the commit in the destination branch where the pull request is
   *             merged.</p>
   */
  afterCommitId?: string;

  /**
   * <p>In the directionality of the pull request, the blob ID of the before blob.</p>
   */
  beforeBlobId?: string;

  /**
   * <p>In the directionality of the pull request, the blob ID of the after blob.</p>
   */
  afterBlobId?: string;

  /**
   * <p>The location of the change where you posted your comment.</p>
   */
  location?: Location;

  /**
   * <p>The content of the comment you posted.</p>
   */
  comment?: Comment;
}

export namespace PostCommentForPullRequestOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostCommentForPullRequestOutput): any => ({
    ...obj,
  });
}

export interface PostCommentReplyInput {
  /**
   * <p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *         or <a>GetCommentsForPullRequest</a>.</p>
   */
  inReplyTo: string | undefined;

  /**
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The contents of your reply to a comment.</p>
   */
  content: string | undefined;
}

export namespace PostCommentReplyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostCommentReplyInput): any => ({
    ...obj,
  });
}

export interface PostCommentReplyOutput {
  /**
   * <p>Information about the reply to a comment.</p>
   */
  comment?: Comment;
}

export namespace PostCommentReplyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostCommentReplyOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The value of the reaction is not valid. For more information, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>
 */
export class InvalidReactionValueException extends __BaseException {
  readonly name: "InvalidReactionValueException" = "InvalidReactionValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidReactionValueException, __BaseException>) {
    super({
      name: "InvalidReactionValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidReactionValueException.prototype);
  }
}

export interface PutCommentReactionInput {
  /**
   * <p>The ID of the comment to which you want to add or update a reaction.</p>
   */
  commentId: string | undefined;

  /**
   * <p>The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none.
   *             For information about emoji reaction values supported in AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-commit-comment.html#emoji-reaction-table">AWS CodeCommit User Guide</a>.</p>
   */
  reactionValue: string | undefined;
}

export namespace PutCommentReactionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutCommentReactionInput): any => ({
    ...obj,
  });
}

/**
 * <p>The number of reactions has been exceeded. Reactions are limited to one reaction per user for each individual comment ID.</p>
 */
export class ReactionLimitExceededException extends __BaseException {
  readonly name: "ReactionLimitExceededException" = "ReactionLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReactionLimitExceededException, __BaseException>) {
    super({
      name: "ReactionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReactionLimitExceededException.prototype);
  }
}

/**
 * <p>A reaction value is required. </p>
 */
export class ReactionValueRequiredException extends __BaseException {
  readonly name: "ReactionValueRequiredException" = "ReactionValueRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReactionValueRequiredException, __BaseException>) {
    super({
      name: "ReactionValueRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReactionValueRequiredException.prototype);
  }
}

export interface PutFileInput {
  /**
   * <p>The name of the repository where you want to add or update the file.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch where you want to add or update the file. If this is an empty
   *             repository, this branch is created.</p>
   */
  branchName: string | undefined;

  /**
   * <p>The content of the file, in binary object format. </p>
   */
  fileContent: Uint8Array | undefined;

  /**
   * <p>The name of the file you want to add or update, including the relative path to the file in the repository.</p>
   *         <note>
   *             <p>If the path does not currently exist in the repository, the path is created as part of adding
   *                 the file.</p>
   *          </note>
   */
  filePath: string | undefined;

  /**
   * <p>The file mode permissions of the blob. Valid file mode permissions are listed
   *             here.</p>
   */
  fileMode?: FileModeTypeEnum | string;

  /**
   * <p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository,
   *             no commit ID is required. If this is not an empty repository, a commit ID is required. </p>
   *         <p>The commit ID must match the ID of the head commit at the time of the operation.
   *             Otherwise, an error occurs, and the file is not added or updated.</p>
   */
  parentCommitId?: string;

  /**
   * <p>A message about why this file was added or updated. Although it is optional, a message
   *             makes the commit history for your repository more useful.</p>
   */
  commitMessage?: string;

  /**
   * <p>The name of the person adding or updating the file. Although it is optional, a name
   *             makes the commit history for your repository more useful.</p>
   */
  name?: string;

  /**
   * <p>An email address for the person adding or updating the file.</p>
   */
  email?: string;
}

export namespace PutFileInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFileInput): any => ({
    ...obj,
  });
}

export interface PutFileOutput {
  /**
   * <p>The full SHA ID of the commit that contains this file change.</p>
   */
  commitId: string | undefined;

  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   */
  blobId: string | undefined;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>
   */
  treeId: string | undefined;
}

export namespace PutFileOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFileOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersInput {
  /**
   * <p>The name of the repository where you want to create or update the trigger.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The JSON block of configuration information for each trigger.</p>
   */
  triggers: RepositoryTrigger[] | undefined;
}

export namespace PutRepositoryTriggersInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRepositoryTriggersInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersOutput {
  /**
   * <p>The system-generated unique ID for the create or update operation.</p>
   */
  configurationId?: string;
}

export namespace PutRepositoryTriggersOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRepositoryTriggersOutput): any => ({
    ...obj,
  });
}

export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The key-value pair to use when tagging this repository.</p>
   */
  tags: Record<string, string> | undefined;
}

export namespace TagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersInput {
  /**
   * <p>The name of the repository in which to test the triggers.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The list of triggers to test.</p>
   */
  triggers: RepositoryTrigger[] | undefined;
}

export namespace TestRepositoryTriggersInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestRepositoryTriggersInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the output of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersOutput {
  /**
   * <p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>
   */
  successfulExecutions?: string[];

  /**
   * <p>The list of triggers that were not tested. This list provides the names of the
   *             triggers that could not be tested, separated by commas.</p>
   */
  failedExecutions?: RepositoryTriggerExecutionFailure[];
}

export namespace TestRepositoryTriggersOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestRepositoryTriggersOutput): any => ({
    ...obj,
  });
}

export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to remove tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
}

export interface UpdateApprovalRuleTemplateContentInput {
  /**
   * <p>The name of the approval rule template where you want to update the content of the rule. </p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The content that replaces the existing content of the rule. Content statements must be
   *             complete. You cannot provide only the changes.</p>
   */
  newRuleContent: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   */
  existingRuleContentSha256?: string;
}

export namespace UpdateApprovalRuleTemplateContentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApprovalRuleTemplateContentInput): any => ({
    ...obj,
  });
}

export interface UpdateApprovalRuleTemplateContentOutput {
  /**
   * <p>Returns information about an approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace UpdateApprovalRuleTemplateContentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApprovalRuleTemplateContentOutput): any => ({
    ...obj,
  });
}

export interface UpdateApprovalRuleTemplateDescriptionInput {
  /**
   * <p>The name of the template for which you want to update the description.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * <p>The updated description of the approval rule template.</p>
   */
  approvalRuleTemplateDescription: string | undefined;
}

export namespace UpdateApprovalRuleTemplateDescriptionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApprovalRuleTemplateDescriptionInput): any => ({
    ...obj,
  });
}

export interface UpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace UpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApprovalRuleTemplateDescriptionOutput): any => ({
    ...obj,
  });
}

export interface UpdateApprovalRuleTemplateNameInput {
  /**
   * <p>The current name of the approval rule template.</p>
   */
  oldApprovalRuleTemplateName: string | undefined;

  /**
   * <p>The new name you want to apply to the approval rule template.</p>
   */
  newApprovalRuleTemplateName: string | undefined;
}

export namespace UpdateApprovalRuleTemplateNameInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApprovalRuleTemplateNameInput): any => ({
    ...obj,
  });
}

export interface UpdateApprovalRuleTemplateNameOutput {
  /**
   * <p>The structure and content of the updated approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

export namespace UpdateApprovalRuleTemplateNameOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApprovalRuleTemplateNameOutput): any => ({
    ...obj,
  });
}

export interface UpdateCommentInput {
  /**
   * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;

  /**
   * <p>The updated content to replace the existing content of the comment.</p>
   */
  content: string | undefined;
}

export namespace UpdateCommentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCommentInput): any => ({
    ...obj,
  });
}

export interface UpdateCommentOutput {
  /**
   * <p>Information about the updated comment.</p>
   */
  comment?: Comment;
}

export namespace UpdateCommentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCommentOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of an update default branch operation.</p>
 */
export interface UpdateDefaultBranchInput {
  /**
   * <p>The name of the repository to set or change the default branch for.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch to set as the default.</p>
   */
  defaultBranchName: string | undefined;
}

export namespace UpdateDefaultBranchInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDefaultBranchInput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestApprovalRuleContentInput {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The name of the approval rule you want to update.</p>
   */
  approvalRuleName: string | undefined;

  /**
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   */
  existingRuleContentSha256?: string;

  /**
   * <p>The updated content for the approval rule.</p>
   *         <note>
   *             <p>When you update the content of the approval rule, you can specify approvers in an
   *                 approval pool in one of two ways:</p>
   *             <ul>
   *                <li>
   *                     <p>
   *                      <b>CodeCommitApprovers</b>: This option only
   *                         requires an AWS account and a resource. It can be used for both IAM users
   *                         and federated access users whose name matches the provided resource name.
   *                         This is a very powerful option that offers a great deal of flexibility. For
   *                         example, if you specify the AWS account <i>123456789012</i>
   *                         and <i>Mary_Major</i>, all of the following are counted as
   *                         approvals coming from that user:</p>
   *                     <ul>
   *                      <li>
   *                             <p>An IAM user in the account
   *                                 (arn:aws:iam::<i>123456789012</i>:user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                      <li>
   *                             <p>A federated user identified in IAM as Mary_Major
   *                                 (arn:aws:sts::<i>123456789012</i>:federated-user/<i>Mary_Major</i>)</p>
   *                         </li>
   *                   </ul>
   *                     <p>This option does not recognize an active session of someone assuming the
   *                         role of CodeCommitReview with a role session name of
   *                             <i>Mary_Major</i>
   *                             (arn:aws:sts::<i>123456789012</i>:assumed-role/CodeCommitReview/<i>Mary_Major</i>)
   *                         unless you include a wildcard (*Mary_Major).</p>
   *                 </li>
   *                <li>
   *                     <p>
   *                      <b>Fully qualified ARN</b>: This option allows
   *                         you to specify the fully qualified Amazon Resource Name (ARN) of the IAM
   *                         user or role. </p>
   *                 </li>
   *             </ul>
   *             <p>For more information about IAM ARNs, wildcards, and formats, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *                     Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *
   *         </note>
   */
  newRuleContent: string | undefined;
}

export namespace UpdatePullRequestApprovalRuleContentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestApprovalRuleContentInput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestApprovalRuleContentOutput {
  /**
   * <p>Information about the updated approval rule.</p>
   */
  approvalRule: ApprovalRule | undefined;
}

export namespace UpdatePullRequestApprovalRuleContentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestApprovalRuleContentOutput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestApprovalStateInput {
  /**
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The system-generated ID of the revision.</p>
   */
  revisionId: string | undefined;

  /**
   * <p>The approval state to associate with the user on the pull request.</p>
   */
  approvalState: ApprovalState | string | undefined;
}

export namespace UpdatePullRequestApprovalStateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestApprovalStateInput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestDescriptionInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The updated content of the description for the pull request. This content replaces the
   *             existing description.</p>
   */
  description: string | undefined;
}

export namespace UpdatePullRequestDescriptionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestDescriptionInput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestDescriptionOutput {
  /**
   * <p>Information about the updated pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace UpdatePullRequestDescriptionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestDescriptionOutput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestStatusInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The status of the pull request. The only valid operations are to update the status
   *             from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or
   *             from <code>CLOSED</code> to <code>CLOSED</code>.</p>
   */
  pullRequestStatus: PullRequestStatusEnum | string | undefined;
}

export namespace UpdatePullRequestStatusInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestStatusInput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestStatusOutput {
  /**
   * <p>Information about the pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace UpdatePullRequestStatusOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestStatusOutput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestTitleInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * <p>The updated title of the pull request. This replaces the existing title.</p>
   */
  title: string | undefined;
}

export namespace UpdatePullRequestTitleInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestTitleInput): any => ({
    ...obj,
  });
}

export interface UpdatePullRequestTitleOutput {
  /**
   * <p>Information about the updated pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

export namespace UpdatePullRequestTitleOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePullRequestTitleOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryDescriptionInput {
  /**
   * <p>The name of the repository to set or change the comment or description for.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>
   */
  repositoryDescription?: string;
}

export namespace UpdateRepositoryDescriptionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRepositoryDescriptionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryNameInput {
  /**
   * <p>The current name of the repository.</p>
   */
  oldName: string | undefined;

  /**
   * <p>The new name for the repository.</p>
   */
  newName: string | undefined;
}

export namespace UpdateRepositoryNameInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRepositoryNameInput): any => ({
    ...obj,
  });
}
