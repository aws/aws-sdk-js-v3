// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CodeCommitServiceException as __BaseException } from "./CodeCommitServiceException";

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

export interface CreateApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the created approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
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

/**
 * <p>A file that is deleted as part of a commit.</p>
 */
export interface DeleteFileEntry {
  /**
   * <p>The full path of the file to be deleted, including the name of the file.</p>
   */
  filePath: string | undefined;
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

export interface CreatePullRequestOutput {
  /**
   * <p>Information about the newly created pull request.</p>
   */
  pullRequest: PullRequest | undefined;
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

export interface CreatePullRequestApprovalRuleOutput {
  /**
   * <p>Information about the created approval rule.</p>
   */
  approvalRule: ApprovalRule | undefined;
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

/**
 * <p>Represents the output of a create repository operation.</p>
 */
export interface CreateRepositoryOutput {
  /**
   * <p>Information about the newly created repository.</p>
   */
  repositoryMetadata?: RepositoryMetadata;
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

export interface DeleteApprovalRuleTemplateOutput {
  /**
   * <p>The system-generated ID of the deleted approval rule template. If the template has
   *             been previously deleted, the only response is a 200 OK.</p>
   */
  approvalRuleTemplateId: string | undefined;
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

/**
 * <p>Represents the output of a delete branch operation.</p>
 */
export interface DeleteBranchOutput {
  /**
   * <p>Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.</p>
   */
  deletedBranch?: BranchInfo;
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

export interface DeleteCommentContentOutput {
  /**
   * <p>Information about the comment you just deleted.</p>
   */
  comment?: Comment;
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

/**
 * <p>Represents the input of a delete repository operation.</p>
 */
export interface DeleteRepositoryInput {
  /**
   * <p>The name of the repository to delete.</p>
   */
  repositoryName: string | undefined;
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

/**
 * <p>Information about a change to the status of a pull request.</p>
 */
export interface PullRequestStatusChangedEventMetadata {
  /**
   * <p>The changed status of the pull request.</p>
   */
  pullRequestStatus?: PullRequestStatusEnum | string;
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

export interface EvaluatePullRequestApprovalRulesOutput {
  /**
   * <p>The result of the evaluation, including the names of the rules whose conditions have been met (if any), the names of the rules whose conditions have
   *         not been met (if any), whether the pull request is in the approved state, and whether the pull request approval rule has been set aside by an override. </p>
   */
  evaluation: Evaluation | undefined;
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

export interface GetApprovalRuleTemplateOutput {
  /**
   * <p>The content and structure of the approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
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

/**
 * <p>Represents the output of a get blob operation.</p>
 */
export interface GetBlobOutput {
  /**
   * <p>The content of the blob, usually a file.</p>
   */
  content: Uint8Array | undefined;
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

/**
 * <p>Represents the output of a get branch operation.</p>
 */
export interface GetBranchOutput {
  /**
   * <p>The name of the branch.</p>
   */
  branch?: BranchInfo;
}

export interface GetCommentInput {
  /**
   * <p>The unique, system-generated ID of the comment. To get this ID, use  <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;
}

export interface GetCommentOutput {
  /**
   * <p>The contents of the comment.</p>
   */
  comment?: Comment;
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

/**
 * <p>Represents the output of a get commit operation.</p>
 */
export interface GetCommitOutput {
  /**
   * <p>A commit data type object that contains information about the specified commit.</p>
   */
  commit: Commit | undefined;
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

export interface GetPullRequestInput {
  /**
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;
}

export interface GetPullRequestOutput {
  /**
   * <p>Information about the specified pull request.</p>
   */
  pullRequest: PullRequest | undefined;
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

export interface GetPullRequestApprovalStatesOutput {
  /**
   * <p>Information about users who have approved the pull request.</p>
   */
  approvals?: Approval[];
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

/**
 * <p>Represents the input of a get repository operation.</p>
 */
export interface GetRepositoryInput {
  /**
   * <p>The name of the repository to get information about.</p>
   */
  repositoryName: string | undefined;
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

/**
 * <p>Represents the input of a get repository triggers operation.</p>
 */
export interface GetRepositoryTriggersInput {
  /**
   * <p>The name of the repository for which the trigger is configured.</p>
   */
  repositoryName: string | undefined;
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
 * @internal
 */
export const ApprovalFilterSensitiveLog = (obj: Approval): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OriginApprovalRuleTemplateFilterSensitiveLog = (obj: OriginApprovalRuleTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApprovalRuleFilterSensitiveLog = (obj: ApprovalRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApprovalRuleEventMetadataFilterSensitiveLog = (obj: ApprovalRuleEventMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApprovalRuleOverriddenEventMetadataFilterSensitiveLog = (
  obj: ApprovalRuleOverriddenEventMetadata
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApprovalRuleTemplateFilterSensitiveLog = (obj: ApprovalRuleTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApprovalStateChangedEventMetadataFilterSensitiveLog = (obj: ApprovalStateChangedEventMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateApprovalRuleTemplateWithRepositoryInputFilterSensitiveLog = (
  obj: AssociateApprovalRuleTemplateWithRepositoryInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateApprovalRuleTemplateWithRepositoriesInputFilterSensitiveLog = (
  obj: BatchAssociateApprovalRuleTemplateWithRepositoriesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateApprovalRuleTemplateWithRepositoriesErrorFilterSensitiveLog = (
  obj: BatchAssociateApprovalRuleTemplateWithRepositoriesError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateApprovalRuleTemplateWithRepositoriesOutputFilterSensitiveLog = (
  obj: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeMergeConflictsInputFilterSensitiveLog = (obj: BatchDescribeMergeConflictsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileModesFilterSensitiveLog = (obj: FileModes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileSizesFilterSensitiveLog = (obj: FileSizes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IsBinaryFileFilterSensitiveLog = (obj: IsBinaryFile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MergeOperationsFilterSensitiveLog = (obj: MergeOperations): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObjectTypesFilterSensitiveLog = (obj: ObjectTypes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConflictMetadataFilterSensitiveLog = (obj: ConflictMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MergeHunkDetailFilterSensitiveLog = (obj: MergeHunkDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MergeHunkFilterSensitiveLog = (obj: MergeHunk): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConflictFilterSensitiveLog = (obj: Conflict): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeMergeConflictsErrorFilterSensitiveLog = (obj: BatchDescribeMergeConflictsError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDescribeMergeConflictsOutputFilterSensitiveLog = (obj: BatchDescribeMergeConflictsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateApprovalRuleTemplateFromRepositoriesInputFilterSensitiveLog = (
  obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorFilterSensitiveLog = (
  obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesError
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateApprovalRuleTemplateFromRepositoriesOutputFilterSensitiveLog = (
  obj: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetCommitsInputFilterSensitiveLog = (obj: BatchGetCommitsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserInfoFilterSensitiveLog = (obj: UserInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommitFilterSensitiveLog = (obj: Commit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetCommitsErrorFilterSensitiveLog = (obj: BatchGetCommitsError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetCommitsOutputFilterSensitiveLog = (obj: BatchGetCommitsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRepositoriesInputFilterSensitiveLog = (obj: BatchGetRepositoriesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryMetadataFilterSensitiveLog = (obj: RepositoryMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRepositoriesOutputFilterSensitiveLog = (obj: BatchGetRepositoriesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlobMetadataFilterSensitiveLog = (obj: BlobMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BranchInfoFilterSensitiveLog = (obj: BranchInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApprovalRuleTemplateInputFilterSensitiveLog = (obj: CreateApprovalRuleTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApprovalRuleTemplateOutputFilterSensitiveLog = (obj: CreateApprovalRuleTemplateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBranchInputFilterSensitiveLog = (obj: CreateBranchInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileEntryFilterSensitiveLog = (obj: DeleteFileEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceFileSpecifierFilterSensitiveLog = (obj: SourceFileSpecifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutFileEntryFilterSensitiveLog = (obj: PutFileEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetFileModeEntryFilterSensitiveLog = (obj: SetFileModeEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCommitInputFilterSensitiveLog = (obj: CreateCommitInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileMetadataFilterSensitiveLog = (obj: FileMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCommitOutputFilterSensitiveLog = (obj: CreateCommitOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePullRequestInputFilterSensitiveLog = (obj: CreatePullRequestInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MergeMetadataFilterSensitiveLog = (obj: MergeMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PullRequestTargetFilterSensitiveLog = (obj: PullRequestTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PullRequestFilterSensitiveLog = (obj: PullRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePullRequestOutputFilterSensitiveLog = (obj: CreatePullRequestOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePullRequestApprovalRuleInputFilterSensitiveLog = (obj: CreatePullRequestApprovalRuleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePullRequestApprovalRuleOutputFilterSensitiveLog = (
  obj: CreatePullRequestApprovalRuleOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRepositoryInputFilterSensitiveLog = (obj: CreateRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRepositoryOutputFilterSensitiveLog = (obj: CreateRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceContentEntryFilterSensitiveLog = (obj: ReplaceContentEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConflictResolutionFilterSensitiveLog = (obj: ConflictResolution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUnreferencedMergeCommitInputFilterSensitiveLog = (obj: CreateUnreferencedMergeCommitInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUnreferencedMergeCommitOutputFilterSensitiveLog = (
  obj: CreateUnreferencedMergeCommitOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApprovalRuleTemplateInputFilterSensitiveLog = (obj: DeleteApprovalRuleTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApprovalRuleTemplateOutputFilterSensitiveLog = (obj: DeleteApprovalRuleTemplateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBranchInputFilterSensitiveLog = (obj: DeleteBranchInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBranchOutputFilterSensitiveLog = (obj: DeleteBranchOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCommentContentInputFilterSensitiveLog = (obj: DeleteCommentContentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommentFilterSensitiveLog = (obj: Comment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCommentContentOutputFilterSensitiveLog = (obj: DeleteCommentContentOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileInputFilterSensitiveLog = (obj: DeleteFileInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFileOutputFilterSensitiveLog = (obj: DeleteFileOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePullRequestApprovalRuleInputFilterSensitiveLog = (obj: DeletePullRequestApprovalRuleInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePullRequestApprovalRuleOutputFilterSensitiveLog = (
  obj: DeletePullRequestApprovalRuleOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryInputFilterSensitiveLog = (obj: DeleteRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRepositoryOutputFilterSensitiveLog = (obj: DeleteRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMergeConflictsInputFilterSensitiveLog = (obj: DescribeMergeConflictsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMergeConflictsOutputFilterSensitiveLog = (obj: DescribeMergeConflictsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePullRequestEventsInputFilterSensitiveLog = (obj: DescribePullRequestEventsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PullRequestCreatedEventMetadataFilterSensitiveLog = (obj: PullRequestCreatedEventMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PullRequestMergedStateChangedEventMetadataFilterSensitiveLog = (
  obj: PullRequestMergedStateChangedEventMetadata
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PullRequestSourceReferenceUpdatedEventMetadataFilterSensitiveLog = (
  obj: PullRequestSourceReferenceUpdatedEventMetadata
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PullRequestStatusChangedEventMetadataFilterSensitiveLog = (
  obj: PullRequestStatusChangedEventMetadata
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PullRequestEventFilterSensitiveLog = (obj: PullRequestEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePullRequestEventsOutputFilterSensitiveLog = (obj: DescribePullRequestEventsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateApprovalRuleTemplateFromRepositoryInputFilterSensitiveLog = (
  obj: DisassociateApprovalRuleTemplateFromRepositoryInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluatePullRequestApprovalRulesInputFilterSensitiveLog = (
  obj: EvaluatePullRequestApprovalRulesInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluationFilterSensitiveLog = (obj: Evaluation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EvaluatePullRequestApprovalRulesOutputFilterSensitiveLog = (
  obj: EvaluatePullRequestApprovalRulesOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApprovalRuleTemplateInputFilterSensitiveLog = (obj: GetApprovalRuleTemplateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApprovalRuleTemplateOutputFilterSensitiveLog = (obj: GetApprovalRuleTemplateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBlobInputFilterSensitiveLog = (obj: GetBlobInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBlobOutputFilterSensitiveLog = (obj: GetBlobOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBranchInputFilterSensitiveLog = (obj: GetBranchInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBranchOutputFilterSensitiveLog = (obj: GetBranchOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentInputFilterSensitiveLog = (obj: GetCommentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentOutputFilterSensitiveLog = (obj: GetCommentOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentReactionsInputFilterSensitiveLog = (obj: GetCommentReactionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReactionValueFormatsFilterSensitiveLog = (obj: ReactionValueFormats): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReactionForCommentFilterSensitiveLog = (obj: ReactionForComment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentReactionsOutputFilterSensitiveLog = (obj: GetCommentReactionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentsForComparedCommitInputFilterSensitiveLog = (obj: GetCommentsForComparedCommitInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LocationFilterSensitiveLog = (obj: Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommentsForComparedCommitFilterSensitiveLog = (obj: CommentsForComparedCommit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentsForComparedCommitOutputFilterSensitiveLog = (obj: GetCommentsForComparedCommitOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentsForPullRequestInputFilterSensitiveLog = (obj: GetCommentsForPullRequestInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CommentsForPullRequestFilterSensitiveLog = (obj: CommentsForPullRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommentsForPullRequestOutputFilterSensitiveLog = (obj: GetCommentsForPullRequestOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommitInputFilterSensitiveLog = (obj: GetCommitInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCommitOutputFilterSensitiveLog = (obj: GetCommitOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDifferencesInputFilterSensitiveLog = (obj: GetDifferencesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DifferenceFilterSensitiveLog = (obj: Difference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDifferencesOutputFilterSensitiveLog = (obj: GetDifferencesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFileInputFilterSensitiveLog = (obj: GetFileInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFileOutputFilterSensitiveLog = (obj: GetFileOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFolderInputFilterSensitiveLog = (obj: GetFolderInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileFilterSensitiveLog = (obj: File): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FolderFilterSensitiveLog = (obj: Folder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubModuleFilterSensitiveLog = (obj: SubModule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SymbolicLinkFilterSensitiveLog = (obj: SymbolicLink): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFolderOutputFilterSensitiveLog = (obj: GetFolderOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMergeCommitInputFilterSensitiveLog = (obj: GetMergeCommitInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMergeCommitOutputFilterSensitiveLog = (obj: GetMergeCommitOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMergeConflictsInputFilterSensitiveLog = (obj: GetMergeConflictsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMergeConflictsOutputFilterSensitiveLog = (obj: GetMergeConflictsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMergeOptionsInputFilterSensitiveLog = (obj: GetMergeOptionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMergeOptionsOutputFilterSensitiveLog = (obj: GetMergeOptionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPullRequestInputFilterSensitiveLog = (obj: GetPullRequestInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPullRequestOutputFilterSensitiveLog = (obj: GetPullRequestOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPullRequestApprovalStatesInputFilterSensitiveLog = (obj: GetPullRequestApprovalStatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPullRequestApprovalStatesOutputFilterSensitiveLog = (obj: GetPullRequestApprovalStatesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPullRequestOverrideStateInputFilterSensitiveLog = (obj: GetPullRequestOverrideStateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPullRequestOverrideStateOutputFilterSensitiveLog = (obj: GetPullRequestOverrideStateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryInputFilterSensitiveLog = (obj: GetRepositoryInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryOutputFilterSensitiveLog = (obj: GetRepositoryOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryTriggersInputFilterSensitiveLog = (obj: GetRepositoryTriggersInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RepositoryTriggerFilterSensitiveLog = (obj: RepositoryTrigger): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRepositoryTriggersOutputFilterSensitiveLog = (obj: GetRepositoryTriggersOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApprovalRuleTemplatesInputFilterSensitiveLog = (obj: ListApprovalRuleTemplatesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApprovalRuleTemplatesOutputFilterSensitiveLog = (obj: ListApprovalRuleTemplatesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedApprovalRuleTemplatesForRepositoryInputFilterSensitiveLog = (
  obj: ListAssociatedApprovalRuleTemplatesForRepositoryInput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedApprovalRuleTemplatesForRepositoryOutputFilterSensitiveLog = (
  obj: ListAssociatedApprovalRuleTemplatesForRepositoryOutput
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBranchesInputFilterSensitiveLog = (obj: ListBranchesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBranchesOutputFilterSensitiveLog = (obj: ListBranchesOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPullRequestsInputFilterSensitiveLog = (obj: ListPullRequestsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPullRequestsOutputFilterSensitiveLog = (obj: ListPullRequestsOutput): any => ({
  ...obj,
});
