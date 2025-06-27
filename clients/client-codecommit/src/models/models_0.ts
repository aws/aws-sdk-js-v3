// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeCommitServiceException as __BaseException } from "./CodeCommitServiceException";

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the Amazon Web Services account.</p>
 * @public
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
 * @public
 * @enum
 */
export const ApprovalState = {
  APPROVE: "APPROVE",
  REVOKE: "REVOKE",
} as const;

/**
 * @public
 */
export type ApprovalState = (typeof ApprovalState)[keyof typeof ApprovalState];

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
 * <p>The content for the approval rule is empty. You must provide some content for an approval rule. The content cannot be null.</p>
 * @public
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
 * @public
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
 * <p>An approval rule with that name already exists. Approval rule names must be unique
 *             within the scope of a pull request.</p>
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const OverrideStatus = {
  OVERRIDE: "OVERRIDE",
  REVOKE: "REVOKE",
} as const;

/**
 * @public
 */
export type OverrideStatus = (typeof OverrideStatus)[keyof typeof OverrideStatus];

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
 * <p>The content for the approval rule template is empty. You must provide some content for an approval rule template. The content cannot be null.</p>
 * @public
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
 * <p>The specified approval rule template does not exist. Verify that the name is correct and that you are signed in to the Amazon Web Services Region where the template
 *         was created, and then try again.</p>
 * @public
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
 * @public
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
 *             that name already exists in this Amazon Web Services Region for your Amazon Web Services account. Approval rule template
 *             names must be unique.</p>
 * @public
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
 * @public
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
 * <p>An approval state is required, but was not specified.</p>
 * @public
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
 * <p>An encryption integrity check failed.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 *             and 100 valid characters in length. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 * @public
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
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>The specified Amazon Resource Name (ARN) does not exist in the Amazon Web Services account.</p>
 * @public
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
 * <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ConflictDetailLevelTypeEnum = {
  FILE_LEVEL: "FILE_LEVEL",
  LINE_LEVEL: "LINE_LEVEL",
} as const;

/**
 * @public
 */
export type ConflictDetailLevelTypeEnum =
  (typeof ConflictDetailLevelTypeEnum)[keyof typeof ConflictDetailLevelTypeEnum];

/**
 * @public
 * @enum
 */
export const ConflictResolutionStrategyTypeEnum = {
  ACCEPT_DESTINATION: "ACCEPT_DESTINATION",
  ACCEPT_SOURCE: "ACCEPT_SOURCE",
  AUTOMERGE: "AUTOMERGE",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ConflictResolutionStrategyTypeEnum =
  (typeof ConflictResolutionStrategyTypeEnum)[keyof typeof ConflictResolutionStrategyTypeEnum];

/**
 * @public
 * @enum
 */
export const MergeOptionTypeEnum = {
  FAST_FORWARD_MERGE: "FAST_FORWARD_MERGE",
  SQUASH_MERGE: "SQUASH_MERGE",
  THREE_WAY_MERGE: "THREE_WAY_MERGE",
} as const;

/**
 * @public
 */
export type MergeOptionTypeEnum = (typeof MergeOptionTypeEnum)[keyof typeof MergeOptionTypeEnum];

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
 * @public
 * @enum
 */
export const FileModeTypeEnum = {
  EXECUTABLE: "EXECUTABLE",
  NORMAL: "NORMAL",
  SYMLINK: "SYMLINK",
} as const;

/**
 * @public
 */
export type FileModeTypeEnum = (typeof FileModeTypeEnum)[keyof typeof FileModeTypeEnum];

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
 * @public
 * @enum
 */
export const ChangeTypeEnum = {
  ADDED: "A",
  DELETED: "D",
  MODIFIED: "M",
} as const;

/**
 * @public
 */
export type ChangeTypeEnum = (typeof ChangeTypeEnum)[keyof typeof ChangeTypeEnum];

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
 * @public
 * @enum
 */
export const ObjectTypeEnum = {
  DIRECTORY: "DIRECTORY",
  FILE: "FILE",
  GIT_LINK: "GIT_LINK",
  SYMBOLIC_LINK: "SYMBOLIC_LINK",
} as const;

/**
 * @public
 */
export type ObjectTypeEnum = (typeof ObjectTypeEnum)[keyof typeof ObjectTypeEnum];

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
 * <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>The maximum number of allowed commit IDs in a batch request is 100. Verify that your batch requests contains no more than 100 commit IDs, and then try again.</p>
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const BatchGetRepositoriesErrorCodeEnum = {
  ENCRYPTION_INTEGRITY_CHECKS_FAILED_EXCEPTION: "EncryptionIntegrityChecksFailedException",
  ENCRYPTION_KEY_ACCESS_DENIED_EXCEPTION: "EncryptionKeyAccessDeniedException",
  ENCRYPTION_KEY_DISABLED_EXCEPTION: "EncryptionKeyDisabledException",
  ENCRYPTION_KEY_NOT_FOUND_EXCEPTION: "EncryptionKeyNotFoundException",
  ENCRYPTION_KEY_UNAVAILABLE_EXCEPTION: "EncryptionKeyUnavailableException",
  REPOSITORY_DOES_NOT_EXIST_EXCEPTION: "RepositoryDoesNotExistException",
} as const;

/**
 * @public
 */
export type BatchGetRepositoriesErrorCodeEnum =
  (typeof BatchGetRepositoriesErrorCodeEnum)[keyof typeof BatchGetRepositoriesErrorCodeEnum];

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
 * <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>The specified branch does not exist.</p>
 * @public
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
 * <p>Cannot create the branch with the specified name because the commit conflicts with an existing branch with the same name.
 *
 *             Branch names must be unique.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>The content of the approval rule template is not valid.</p>
 * @public
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
 *             maximum characters allowed for a description. For more information about limits in CodeCommit,
 *             see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 * @public
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
 * <p>The maximum number of approval rule templates has been exceeded for this Amazon Web Services Region. </p>
 * @public
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
 * @public
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
 * <p>The specified reference name is not valid.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository.
 *         Either provide a different name for the file, or specify a different path for the file.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const PullRequestStatusEnum = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;

/**
 * @public
 */
export type PullRequestStatusEnum = (typeof PullRequestStatusEnum)[keyof typeof PullRequestStatusEnum];

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
 * <p>The client request token is not valid. Either the token is not in a valid format, or
 *             the token has been used in a previous request and cannot be reused.</p>
 * @public
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
 * @public
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
 * @public
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
 *             Git references format (for example, refs/heads/main). For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals -
 *                 Git References</a> or consult your Git documentation.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>The content for the approval rule is not valid.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>The Key Management Service encryption key is not valid.</p>
 * @public
 */
export class EncryptionKeyInvalidIdException extends __BaseException {
  readonly name: "EncryptionKeyInvalidIdException" = "EncryptionKeyInvalidIdException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyInvalidIdException, __BaseException>) {
    super({
      name: "EncryptionKeyInvalidIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyInvalidIdException.prototype);
  }
}

/**
 * <p>A KMS encryption key was used to try and encrypt or decrypt a repository, but either the repository or the key was not
 *         in a valid state to support the operation.</p>
 * @public
 */
export class EncryptionKeyInvalidUsageException extends __BaseException {
  readonly name: "EncryptionKeyInvalidUsageException" = "EncryptionKeyInvalidUsageException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyInvalidUsageException, __BaseException>) {
    super({
      name: "EncryptionKeyInvalidUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyInvalidUsageException.prototype);
  }
}

/**
 * <p>The specified repository description is not valid.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>The requested action is not allowed.</p>
 * @public
 */
export class OperationNotAllowedException extends __BaseException {
  readonly name: "OperationNotAllowedException" = "OperationNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotAllowedException, __BaseException>) {
    super({
      name: "OperationNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotAllowedException.prototype);
  }
}

/**
 * <p>A repository resource limit was exceeded.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>The maximum number of tags for an CodeCommit resource has been exceeded.</p>
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const ReplacementTypeEnum = {
  KEEP_BASE: "KEEP_BASE",
  KEEP_DESTINATION: "KEEP_DESTINATION",
  KEEP_SOURCE: "KEEP_SOURCE",
  USE_NEW_CONTENT: "USE_NEW_CONTENT",
} as const;

/**
 * @public
 */
export type ReplacementTypeEnum = (typeof ReplacementTypeEnum)[keyof typeof ReplacementTypeEnum];

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
 * <p>The specified conflict resolution list is not valid.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
 * @public
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
 * <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 * @public
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
 * @enum
 */
export const PullRequestEventType = {
  PULL_REQUEST_APPROVAL_RULE_CREATED: "PULL_REQUEST_APPROVAL_RULE_CREATED",
  PULL_REQUEST_APPROVAL_RULE_DELETED: "PULL_REQUEST_APPROVAL_RULE_DELETED",
  PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN: "PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN",
  PULL_REQUEST_APPROVAL_RULE_UPDATED: "PULL_REQUEST_APPROVAL_RULE_UPDATED",
  PULL_REQUEST_APPROVAL_STATE_CHANGED: "PULL_REQUEST_APPROVAL_STATE_CHANGED",
  PULL_REQUEST_CREATED: "PULL_REQUEST_CREATED",
  PULL_REQUEST_MERGE_STATE_CHANGED: "PULL_REQUEST_MERGE_STATE_CHANGED",
  PULL_REQUEST_SOURCE_REFERENCE_UPDATED: "PULL_REQUEST_SOURCE_REFERENCE_UPDATED",
  PULL_REQUEST_STATUS_CHANGED: "PULL_REQUEST_STATUS_CHANGED",
} as const;

/**
 * @public
 */
export type PullRequestEventType = (typeof PullRequestEventType)[keyof typeof PullRequestEventType];

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
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request,
 *             and then try again.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 * @public
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
 * @public
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
 * @public
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
 * <p>The specified file exceeds the file size limit for CodeCommit. For more information about limits in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 * @public
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
 * <p>The specified blob is not valid.</p>
 * @public
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
 * <p>The Amazon Resource Name (ARN) of the user or identity is not valid.</p>
 * @public
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
 * @public
 * @enum
 */
export const RelativeFileVersionEnum = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
} as const;

/**
 * @public
 */
export type RelativeFileVersionEnum = (typeof RelativeFileVersionEnum)[keyof typeof RelativeFileVersionEnum];

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
 * <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 * @public
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
 * @public
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
 * <p>The specified path does not exist.</p>
 * @public
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
 * <p>The specified folder does not exist. Either the folder name is not correct, or you did
 *             not enter the full path to the folder.</p>
 * @public
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
 * <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const RepositoryTriggerEventEnum = {
  ALL: "all",
  CREATE_REFERENCE: "createReference",
  DELETE_REFERENCE: "deleteReference",
  UPDATE_REFERENCE: "updateReference",
} as const;

/**
 * @public
 */
export type RepositoryTriggerEventEnum = (typeof RepositoryTriggerEventEnum)[keyof typeof RepositoryTriggerEventEnum];

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
