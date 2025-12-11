// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeCommitServiceException as __BaseException } from "./CodeCommitServiceException";

/**
 * <p>The specified Amazon Resource Name (ARN) does not exist in the Amazon Web Services account.</p>
 * @public
 */
export class ActorDoesNotExistException extends __BaseException {
  readonly name = "ActorDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class ApprovalRuleContentRequiredException extends __BaseException {
  readonly name = "ApprovalRuleContentRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ApprovalRuleDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 * <p>An approval rule with that name already exists. Approval rule names must be unique
 *             within the scope of a pull request.</p>
 * @public
 */
export class ApprovalRuleNameAlreadyExistsException extends __BaseException {
  readonly name = "ApprovalRuleNameAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ApprovalRuleNameRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class ApprovalRuleTemplateContentRequiredException extends __BaseException {
  readonly name = "ApprovalRuleTemplateContentRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ApprovalRuleTemplateDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ApprovalRuleTemplateInUseException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ApprovalRuleTemplateNameAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ApprovalRuleTemplateNameRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>An approval state is required, but was not specified.</p>
 * @public
 */
export class ApprovalStateRequiredException extends __BaseException {
  readonly name = "ApprovalStateRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>An encryption integrity check failed.</p>
 * @public
 */
export class EncryptionIntegrityChecksFailedException extends __BaseException {
  readonly name = "EncryptionIntegrityChecksFailedException" as const;
  readonly $fault = "server" as const;
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
  readonly name = "EncryptionKeyAccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EncryptionKeyDisabledException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EncryptionKeyNotFoundException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EncryptionKeyUnavailableException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidApprovalRuleTemplateNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidRepositoryNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MaximumRuleTemplatesAssociatedWithRepositoryException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RepositoryDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RepositoryNameRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "AuthorDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 * <p>The maximum number of allowed repository names was exceeded. Currently, this number is 100.</p>
 * @public
 */
export class MaximumRepositoryNamesExceededException extends __BaseException {
  readonly name = "MaximumRepositoryNamesExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RepositoryNamesRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified commit does not exist or no commit was specified, and the specified repository has no default branch.</p>
 * @public
 */
export class CommitDoesNotExistException extends __BaseException {
  readonly name = "CommitDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CommitRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidCommitException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidConflictDetailLevelException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidConflictResolutionStrategyException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidContinuationTokenException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidMaxConflictFilesException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidMaxMergeHunksException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidMergeOptionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MaximumFileContentToLoadExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MaximumItemsToCompareExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MergeOptionRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TipsDivergenceExceededException" as const;
  readonly $fault = "client" as const;
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
 * <p>The maximum number of allowed commit IDs in a batch request is 100. Verify that your batch requests contains no more than 100 commit IDs, and then try again.</p>
 * @public
 */
export class CommitIdsLimitExceededException extends __BaseException {
  readonly name = "CommitIdsLimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CommitIdsListRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 * @public
 */
export class BeforeCommitIdAndAfterCommitIdAreSameException extends __BaseException {
  readonly name = "BeforeCommitIdAndAfterCommitIdAreSameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "BlobIdDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "BlobIdRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class BranchDoesNotExistException extends __BaseException {
  readonly name = "BranchDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 *
 *             Branch names must be unique.</p>
 * @public
 */
export class BranchNameExistsException extends __BaseException {
  readonly name = "BranchNameExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "BranchNameIsTagNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "BranchNameRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CannotDeleteApprovalRuleFromTemplateException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CannotModifyApprovalRuleFromTemplateException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ClientRequestTokenRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The content of the approval rule template is not valid.</p>
 * @public
 */
export class InvalidApprovalRuleTemplateContentException extends __BaseException {
  readonly name = "InvalidApprovalRuleTemplateContentException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidApprovalRuleTemplateDescriptionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "NumberOfRuleTemplatesExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CommitIdRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified reference name is not valid.</p>
 * @public
 */
export class InvalidBranchNameException extends __BaseException {
  readonly name = "InvalidBranchNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidCommitIdException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CommitMessageLengthExceededException" as const;
  readonly $fault = "client" as const;
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
 * <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository.
 *         Either provide a different name for the file, or specify a different path for the file.</p>
 * @public
 */
export class DirectoryNameConflictsWithFileNameException extends __BaseException {
  readonly name = "DirectoryNameConflictsWithFileNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FileContentAndSourceFileSpecifiedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FileContentSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FileDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FileEntryRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FileModeRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FileNameConflictsWithDirectoryNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FilePathConflictsWithSubmodulePathException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "FolderContentSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidDeletionParameterException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidEmailException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidFileModeException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidParentCommitIdException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidPathException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MaximumFileEntriesExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "NameLengthExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "NoChangeException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ParentCommitDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ParentCommitIdOutdatedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ParentCommitIdRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "PathRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "PutFileEntryConflictException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RestrictedSourceFileException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "SamePathRequestException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "SourceFileOrContentRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The client request token is not valid. Either the token is not in a valid format, or
 *             the token has been used in a previous request and cannot be reused.</p>
 * @public
 */
export class IdempotencyParameterMismatchException extends __BaseException {
  readonly name = "IdempotencyParameterMismatchException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidClientRequestTokenException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidDescriptionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidReferenceNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidTargetException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidTargetsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidTitleException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MaximumOpenPullRequestsExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MultipleRepositoriesInPullRequestException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ReferenceDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ReferenceNameRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ReferenceTypeNotSupportedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "SourceAndDestinationAreSameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TargetRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TargetsRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TitleRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The content for the approval rule is not valid.</p>
 * @public
 */
export class InvalidApprovalRuleContentException extends __BaseException {
  readonly name = "InvalidApprovalRuleContentException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidApprovalRuleNameException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidPullRequestIdException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "NumberOfRulesExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "PullRequestAlreadyClosedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "PullRequestDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "PullRequestIdRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The Key Management Service encryption key is not valid.</p>
 * @public
 */
export class EncryptionKeyInvalidIdException extends __BaseException {
  readonly name = "EncryptionKeyInvalidIdException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "EncryptionKeyInvalidUsageException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidRepositoryDescriptionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidSystemTagUsageException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidTagsMapException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "OperationNotAllowedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RepositoryLimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RepositoryNameExistsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TagPolicyException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ConcurrentReferenceUpdateException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified conflict resolution list is not valid.</p>
 * @public
 */
export class InvalidConflictResolutionException extends __BaseException {
  readonly name = "InvalidConflictResolutionException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidReplacementContentException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidReplacementTypeException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ManualMergeRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MaximumConflictResolutionEntriesExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "MultipleConflictResolutionEntriesException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ReplacementContentRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "ReplacementTypeRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.</p>
 * @public
 */
export class DefaultBranchCannotBeDeletedException extends __BaseException {
  readonly name = "DefaultBranchCannotBeDeletedException" as const;
  readonly $fault = "client" as const;
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
 * <p>This comment has already been deleted. You cannot edit or delete a deleted comment.</p>
 * @public
 */
export class CommentDeletedException extends __BaseException {
  readonly name = "CommentDeletedException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CommentDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CommentIdRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The comment ID is not in a valid format. Make sure that you have provided the full comment ID.</p>
 * @public
 */
export class InvalidCommentIdException extends __BaseException {
  readonly name = "InvalidCommentIdException" as const;
  readonly $fault = "client" as const;
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
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request,
 *             and then try again.</p>
 * @public
 */
export class InvalidActorArnException extends __BaseException {
  readonly name = "InvalidActorArnException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidMaxResultsException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidPullRequestEventTypeException" as const;
  readonly $fault = "client" as const;
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
 * <p>The revision ID is not valid. Use GetPullRequest to determine the value.</p>
 * @public
 */
export class InvalidRevisionIdException extends __BaseException {
  readonly name = "InvalidRevisionIdException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RevisionIdRequiredException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "RevisionNotCurrentException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified file exceeds the file size limit for CodeCommit. For more information about limits in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Quotas</a> in the <i>CodeCommit User Guide</i>.</p>
 * @public
 */
export class FileTooLargeException extends __BaseException {
  readonly name = "FileTooLargeException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified blob is not valid.</p>
 * @public
 */
export class InvalidBlobIdException extends __BaseException {
  readonly name = "InvalidBlobIdException" as const;
  readonly $fault = "client" as const;
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
 * <p>The Amazon Resource Name (ARN) of the user or identity is not valid.</p>
 * @public
 */
export class InvalidReactionUserArnException extends __BaseException {
  readonly name = "InvalidReactionUserArnException" as const;
  readonly $fault = "client" as const;
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
 * <p>The repository does not contain any pull requests with that pull request ID. Use GetPullRequest to verify the correct repository name for the pull request ID.</p>
 * @public
 */
export class RepositoryNotAssociatedWithPullRequestException extends __BaseException {
  readonly name = "RepositoryNotAssociatedWithPullRequestException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CommitIdDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified path does not exist.</p>
 * @public
 */
export class PathDoesNotExistException extends __BaseException {
  readonly name = "PathDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified folder does not exist. Either the folder name is not correct, or you did
 *             not enter the full path to the folder.</p>
 * @public
 */
export class FolderDoesNotExistException extends __BaseException {
  readonly name = "FolderDoesNotExistException" as const;
  readonly $fault = "client" as const;
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
 * <p>The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. </p>
 * @public
 */
export class InvalidDestinationCommitSpecifierException extends __BaseException {
  readonly name = "InvalidDestinationCommitSpecifierException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidSourceCommitSpecifierException" as const;
  readonly $fault = "client" as const;
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
 * <p>The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.</p>
 * @public
 */
export class InvalidAuthorArnException extends __BaseException {
  readonly name = "InvalidAuthorArnException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidPullRequestStatusException extends __BaseException {
  readonly name = "InvalidPullRequestStatusException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The specified sort order is not valid.</p>
 * @public
 */
export class InvalidOrderException extends __BaseException {
  readonly name = "InvalidOrderException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidSortByException extends __BaseException {
  readonly name = "InvalidSortByException" as const;
  readonly $fault = "client" as const;
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
 * <p>The value for the resource ARN is not valid. For more information about resources in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the CodeCommit User Guide.</p>
 * @public
 */
export class InvalidResourceArnException extends __BaseException {
  readonly name = "InvalidResourceArnException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>A valid Amazon Resource Name (ARN) for an CodeCommit resource is required. For a list of valid resources in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the CodeCommit User Guide.</p>
 * @public
 */
export class ResourceArnRequiredException extends __BaseException {
  readonly name = "ResourceArnRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidTargetBranchException extends __BaseException {
  readonly name = "InvalidTargetBranchException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The pull request cannot be merged because one or more approval rules applied to the pull request have conditions that have not been met.</p>
 * @public
 */
export class PullRequestApprovalRulesNotSatisfiedException extends __BaseException {
  readonly name = "PullRequestApprovalRulesNotSatisfiedException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class TipOfSourceReferenceIsDifferentException extends __BaseException {
  readonly name = "TipOfSourceReferenceIsDifferentException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The override status is not valid. Valid statuses are OVERRIDE and REVOKE.</p>
 * @public
 */
export class InvalidOverrideStatusException extends __BaseException {
  readonly name = "InvalidOverrideStatusException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class OverrideAlreadySetException extends __BaseException {
  readonly name = "OverrideAlreadySetException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>An override status is required, but no value was provided. Valid values include OVERRIDE and REVOKE.</p>
 * @public
 */
export class OverrideStatusRequiredException extends __BaseException {
  readonly name = "OverrideStatusRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CommentContentRequiredException extends __BaseException {
  readonly name = "CommentContentRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The comment is too large. Comments are limited to 10,240 characters.</p>
 * @public
 */
export class CommentContentSizeLimitExceededException extends __BaseException {
  readonly name = "CommentContentSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidFileLocationException extends __BaseException {
  readonly name = "InvalidFileLocationException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidFilePositionException extends __BaseException {
  readonly name = "InvalidFilePositionException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidRelativeFileVersionEnumException extends __BaseException {
  readonly name = "InvalidRelativeFileVersionEnumException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The value of the reaction is not valid. For more information, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit User Guide</a>.</p>
 * @public
 */
export class InvalidReactionValueException extends __BaseException {
  readonly name = "InvalidReactionValueException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The number of reactions has been exceeded. Reactions are limited to one reaction per user for each individual comment ID.</p>
 * @public
 */
export class ReactionLimitExceededException extends __BaseException {
  readonly name = "ReactionLimitExceededException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class ReactionValueRequiredException extends __BaseException {
  readonly name = "ReactionValueRequiredException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.</p>
 * @public
 */
export class FileContentRequiredException extends __BaseException {
  readonly name = "FileContentRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class SameFileContentException extends __BaseException {
  readonly name = "SameFileContentException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidRepositoryTriggerBranchNameException extends __BaseException {
  readonly name = "InvalidRepositoryTriggerBranchNameException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidRepositoryTriggerCustomDataException extends __BaseException {
  readonly name = "InvalidRepositoryTriggerCustomDataException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidRepositoryTriggerDestinationArnException extends __BaseException {
  readonly name = "InvalidRepositoryTriggerDestinationArnException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidRepositoryTriggerEventsException extends __BaseException {
  readonly name = "InvalidRepositoryTriggerEventsException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidRepositoryTriggerNameException extends __BaseException {
  readonly name = "InvalidRepositoryTriggerNameException" as const;
  readonly $fault = "client" as const;
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
 * <p>The Amazon Web Services Region for the trigger target does not match the Amazon Web Services Region for the
 *             repository. Triggers must be created in the same Amazon Web Services Region as the target for the
 *             trigger.</p>
 * @public
 */
export class InvalidRepositoryTriggerRegionException extends __BaseException {
  readonly name = "InvalidRepositoryTriggerRegionException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class MaximumBranchesExceededException extends __BaseException {
  readonly name = "MaximumBranchesExceededException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class MaximumRepositoryTriggersExceededException extends __BaseException {
  readonly name = "MaximumRepositoryTriggersExceededException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class RepositoryTriggerBranchNameListRequiredException extends __BaseException {
  readonly name = "RepositoryTriggerBranchNameListRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class RepositoryTriggerDestinationArnRequiredException extends __BaseException {
  readonly name = "RepositoryTriggerDestinationArnRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class RepositoryTriggerEventsListRequiredException extends __BaseException {
  readonly name = "RepositoryTriggerEventsListRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class RepositoryTriggerNameRequiredException extends __BaseException {
  readonly name = "RepositoryTriggerNameRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class RepositoryTriggersListRequiredException extends __BaseException {
  readonly name = "RepositoryTriggersListRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class TagsMapRequiredException extends __BaseException {
  readonly name = "TagsMapRequiredException" as const;
  readonly $fault = "client" as const;
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
 * <p>The list of tags is not valid.</p>
 * @public
 */
export class InvalidTagKeysListException extends __BaseException {
  readonly name = "InvalidTagKeysListException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class TagKeysListRequiredException extends __BaseException {
  readonly name = "TagKeysListRequiredException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidRuleContentSha256Exception extends __BaseException {
  readonly name = "InvalidRuleContentSha256Exception" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class CommentNotCreatedByCallerException extends __BaseException {
  readonly name = "CommentNotCreatedByCallerException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidApprovalStateException extends __BaseException {
  readonly name = "InvalidApprovalStateException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class MaximumNumberOfApprovalsExceededException extends __BaseException {
  readonly name = "MaximumNumberOfApprovalsExceededException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class PullRequestCannotBeApprovedByAuthorException extends __BaseException {
  readonly name = "PullRequestCannotBeApprovedByAuthorException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class InvalidPullRequestStatusUpdateException extends __BaseException {
  readonly name = "InvalidPullRequestStatusUpdateException" as const;
  readonly $fault = "client" as const;
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
 * @public
 */
export class PullRequestStatusRequiredException extends __BaseException {
  readonly name = "PullRequestStatusRequiredException" as const;
  readonly $fault = "client" as const;
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

/**
 * <p>A KMS encryption key ID is required but was not specified.</p>
 * @public
 */
export class EncryptionKeyRequiredException extends __BaseException {
  readonly name = "EncryptionKeyRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionKeyRequiredException, __BaseException>) {
    super({
      name: "EncryptionKeyRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionKeyRequiredException.prototype);
  }
}
