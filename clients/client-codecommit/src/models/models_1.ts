// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeCommitServiceException as __BaseException } from "./CodeCommitServiceException";

import {
  ApprovalRule,
  ApprovalRuleTemplate,
  ApprovalState,
  Comment,
  ConflictDetailLevelTypeEnum,
  ConflictResolution,
  ConflictResolutionStrategyTypeEnum,
  FileModeTypeEnum,
  Location,
  OverrideStatus,
  PullRequest,
  PullRequestStatusEnum,
  RepositoryTrigger,
} from "./models_0";

/**
 * @public
 */
export interface ListPullRequestsOutput {
  /**
   * @public
   * <p>The system-generated IDs of the pull requests.</p>
   */
  pullRequestIds: string[] | undefined;

  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const OrderEnum = {
  ASCENDING: "ascending",
  DESCENDING: "descending",
} as const;

/**
 * @public
 */
export type OrderEnum = (typeof OrderEnum)[keyof typeof OrderEnum];

/**
 * @public
 * @enum
 */
export const SortByEnum = {
  MODIFIED_DATE: "lastModifiedDate",
  REPOSITORY_NAME: "repositoryName",
} as const;

/**
 * @public
 */
export type SortByEnum = (typeof SortByEnum)[keyof typeof SortByEnum];

/**
 * @public
 * <p>Represents the input of a list repositories operation.</p>
 */
export interface ListRepositoriesInput {
  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The criteria used to sort the results of a list repositories operation.</p>
   */
  sortBy?: SortByEnum;

  /**
   * @public
   * <p>The order in which to sort the results of a list repositories operation.</p>
   */
  order?: OrderEnum;
}

/**
 * @public
 * <p>Information about a repository name and ID.</p>
 */
export interface RepositoryNameIdPair {
  /**
   * @public
   * <p>The name associated with the repository.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The ID associated with the repository.</p>
   */
  repositoryId?: string;
}

/**
 * @public
 * <p>Represents the output of a list repositories operation.</p>
 */
export interface ListRepositoriesOutput {
  /**
   * @public
   * <p>Lists the repositories called by the list repositories operation.</p>
   */
  repositories?: RepositoryNameIdPair[];

  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the results of the operation.
   *             Batch sizes are 1,000 for list repository operations. When the client sends the token back to CodeCommit,
   *             another page of 1,000 records is retrieved.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateInput {
  /**
   * @public
   * <p>The name of the approval rule template for which you want to list repositories that are associated with that template.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * @public
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A non-zero, non-negative integer used to limit the number of returned results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListRepositoriesForApprovalRuleTemplateOutput {
  /**
   * @public
   * <p>A list of repository names that are associated with the specified approval rule template.</p>
   */
  repositoryNames?: string[];

  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The value for the resource ARN is not valid. For more information about resources in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the CodeCommit User Guide.</p>
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

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to get information
   *             about tags, if any.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>An enumeration token that, when provided in a request, returns the next batch of the
   *             results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>A list of tag key and value pairs associated with the specified resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>An enumeration token that allows the operation to batch the next results of the operation.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A valid Amazon Resource Name (ARN) for an CodeCommit resource is required. For a list of valid resources in CodeCommit, see
 *             <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a>
 *             in the CodeCommit User Guide.</p>
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
 * @public
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

/**
 * @public
 */
export interface MergeBranchesByFastForwardInput {
  /**
   * @public
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * @public
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * @public
   * <p>The branch where the merge is applied.</p>
   */
  targetBranch?: string;
}

/**
 * @public
 */
export interface MergeBranchesByFastForwardOutput {
  /**
   * @public
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * @public
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

/**
 * @public
 */
export interface MergeBranchesBySquashInput {
  /**
   * @public
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * @public
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * @public
   * <p>The branch where the merge is applied. </p>
   */
  targetBranch?: string;

  /**
   * @public
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;

  /**
   * @public
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;

  /**
   * @public
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * @public
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * @public
   * <p>The commit message for the merge.</p>
   */
  commitMessage?: string;

  /**
   * @public
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If this is specified as true, a .gitkeep file is
   *             created for empty folders. The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * @public
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

/**
 * @public
 */
export interface MergeBranchesBySquashOutput {
  /**
   * @public
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * @public
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayInput {
  /**
   * @public
   * <p>The name of the repository where you want to merge two branches.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  sourceCommitSpecifier: string | undefined;

  /**
   * @public
   * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit
   *             (for example, a branch name or a full commit ID).</p>
   */
  destinationCommitSpecifier: string | undefined;

  /**
   * @public
   * <p>The branch where the merge is applied. </p>
   */
  targetBranch?: string;

  /**
   * @public
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;

  /**
   * @public
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;

  /**
   * @public
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * @public
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * @public
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * @public
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * @public
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

/**
 * @public
 */
export interface MergeBranchesByThreeWayOutput {
  /**
   * @public
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * @public
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *         exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;
}

/**
 * @public
 */
export interface MergePullRequestByFastForwardOutput {
  /**
   * @public
   * <p>Information about the specified pull request, including the merge.</p>
   */
  pullRequest?: PullRequest;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface MergePullRequestBySquashInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;

  /**
   * @public
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;

  /**
   * @public
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;

  /**
   * @public
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * @public
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * @public
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * @public
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * @public
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

/**
 * @public
 */
export interface MergePullRequestBySquashOutput {
  /**
   * @public
   * <p>Returns information about a pull request.</p>
   */
  pullRequest?: PullRequest;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The name of the repository where the pull request was created.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an
   *             exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
   */
  sourceCommitId?: string;

  /**
   * @public
   * <p>The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used,
   *             which returns a not-mergeable result if the same file has differences in both branches.
   *             If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in
   *             both branches has differences on the same line.</p>
   */
  conflictDetailLevel?: ConflictDetailLevelTypeEnum;

  /**
   * @public
   * <p>Specifies which branch to use when resolving conflicts, or whether to attempt
   *             automatically merging two versions of a file. The default is NONE, which requires any
   *             conflicts to be resolved manually before the merge operation is successful.</p>
   */
  conflictResolutionStrategy?: ConflictResolutionStrategyTypeEnum;

  /**
   * @public
   * <p>The commit message to include in the commit information for the merge.</p>
   */
  commitMessage?: string;

  /**
   * @public
   * <p>The name of the author who created the commit. This information is used as both the
   *             author and committer for the commit.</p>
   */
  authorName?: string;

  /**
   * @public
   * <p>The email address of the person merging the branches. This information is used in the
   *             commit information for the merge.</p>
   */
  email?: string;

  /**
   * @public
   * <p>If the commit contains deletions, whether to keep a folder or folder structure if the
   *             changes leave the folders empty. If true, a .gitkeep file is created for empty folders.
   *             The default is false.</p>
   */
  keepEmptyFolders?: boolean;

  /**
   * @public
   * <p>If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when
   *             resolving conflicts during a merge.</p>
   */
  conflictResolution?: ConflictResolution;
}

/**
 * @public
 */
export interface MergePullRequestByThreeWayOutput {
  /**
   * @public
   * <p>Returns information about a pull request.</p>
   */
  pullRequest?: PullRequest;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface OverridePullRequestApprovalRulesInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request for which you want to override all
   *             approval rule requirements. To get this information, use
   *             <a>GetPullRequest</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The system-generated ID of the most recent revision of the pull request. You cannot override approval rules for anything but the most recent revision of a pull request.
   *             To get the revision ID, use GetPullRequest.</p>
   */
  revisionId: string | undefined;

  /**
   * @public
   * <p>Whether you want to set aside approval rule requirements for the pull request (OVERRIDE) or revoke a previous override and apply
   *         approval rule requirements (REVOKE). REVOKE status is not stored.</p>
   */
  overrideStatus: OverrideStatus | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>The comment is too large. Comments are limited to 10,240 characters.</p>
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface PostCommentForComparedCommitInput {
  /**
   * @public
   * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>To establish the directionality of the comparison, the full commit ID of the before
   *             commit. Required for commenting on any commit unless that commit is the initial
   *             commit.</p>
   */
  beforeCommitId?: string;

  /**
   * @public
   * <p>To establish the directionality of the comparison, the full commit ID of the after
   *             commit.</p>
   */
  afterCommitId: string | undefined;

  /**
   * @public
   * <p>The location of the comparison where you want to comment.</p>
   */
  location?: Location;

  /**
   * @public
   * <p>The content of the comment you want to make.</p>
   */
  content: string | undefined;

  /**
   * @public
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface PostCommentForComparedCommitOutput {
  /**
   * @public
   * <p>The name of the repository where you posted a comment on the comparison between commits.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>In the directionality you established, the full commit ID of the before commit.</p>
   */
  beforeCommitId?: string;

  /**
   * @public
   * <p>In the directionality you established, the full commit ID of the after commit.</p>
   */
  afterCommitId?: string;

  /**
   * @public
   * <p>In the directionality you established, the blob ID of the before blob.</p>
   */
  beforeBlobId?: string;

  /**
   * @public
   * <p>In the directionality you established, the blob ID of the after blob.</p>
   */
  afterBlobId?: string;

  /**
   * @public
   * <p>The location of the comment in the comparison between the two commits.</p>
   */
  location?: Location;

  /**
   * @public
   * <p>The content of the comment you posted.</p>
   */
  comment?: Comment;
}

/**
 * @public
 */
export interface PostCommentForPullRequestInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The name of the repository where you want to post a comment on a pull request.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
   */
  beforeCommitId: string | undefined;

  /**
   * @public
   * <p>The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.</p>
   */
  afterCommitId: string | undefined;

  /**
   * @public
   * <p>The location of the change where you want to post your comment. If no location is
   *             provided, the comment is posted as a general comment on the pull request difference
   *             between the before commit ID and the after commit ID.</p>
   */
  location?: Location;

  /**
   * @public
   * <p>The content of your comment on the change.</p>
   */
  content: string | undefined;

  /**
   * @public
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface PostCommentForPullRequestOutput {
  /**
   * @public
   * <p>The name of the repository where you posted a comment on a pull request.</p>
   */
  repositoryName?: string;

  /**
   * @public
   * <p>The system-generated ID of the pull request. </p>
   */
  pullRequestId?: string;

  /**
   * @public
   * <p>The full commit ID of the commit in the source branch used to create the pull request,
   *             or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.</p>
   */
  beforeCommitId?: string;

  /**
   * @public
   * <p>The full commit ID of the commit in the destination branch where the pull request is
   *             merged.</p>
   */
  afterCommitId?: string;

  /**
   * @public
   * <p>In the directionality of the pull request, the blob ID of the before blob.</p>
   */
  beforeBlobId?: string;

  /**
   * @public
   * <p>In the directionality of the pull request, the blob ID of the after blob.</p>
   */
  afterBlobId?: string;

  /**
   * @public
   * <p>The location of the change where you posted your comment.</p>
   */
  location?: Location;

  /**
   * @public
   * <p>The content of the comment you posted.</p>
   */
  comment?: Comment;
}

/**
 * @public
 */
export interface PostCommentReplyInput {
  /**
   * @public
   * <p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *         or <a>GetCommentsForPullRequest</a>.</p>
   */
  inReplyTo: string | undefined;

  /**
   * @public
   * <p>A unique, client-generated idempotency token that, when provided in a request, ensures
   *             the request cannot be repeated with a changed parameter. If a request is received with
   *             the same parameters and a token is included, the request returns information about the
   *             initial request that used that token.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The contents of your reply to a comment.</p>
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface PostCommentReplyOutput {
  /**
   * @public
   * <p>Information about the reply to a comment.</p>
   */
  comment?: Comment;
}

/**
 * @public
 * <p>The value of the reaction is not valid. For more information, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit User Guide</a>.</p>
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

/**
 * @public
 */
export interface PutCommentReactionInput {
  /**
   * @public
   * <p>The ID of the comment to which you want to add or update a reaction.</p>
   */
  commentId: string | undefined;

  /**
   * @public
   * <p>The emoji reaction you want to add or update. To remove a reaction, provide a value of blank or null. You can also provide the value of none.
   *             For information about emoji reaction values supported in CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-commit-comment.html#emoji-reaction-table">CodeCommit User Guide</a>.</p>
   */
  reactionValue: string | undefined;
}

/**
 * @public
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
 * @public
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

/**
 * @public
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
 * @public
 */
export interface PutFileInput {
  /**
   * @public
   * <p>The name of the repository where you want to add or update the file.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The name of the branch where you want to add or update the file. If this is an empty
   *             repository, this branch is created.</p>
   */
  branchName: string | undefined;

  /**
   * @public
   * <p>The content of the file, in binary object format. </p>
   */
  fileContent: Uint8Array | undefined;

  /**
   * @public
   * <p>The name of the file you want to add or update, including the relative path to the file in the repository.</p>
   *          <note>
   *             <p>If the path does not currently exist in the repository, the path is created as part of adding
   *                 the file.</p>
   *          </note>
   */
  filePath: string | undefined;

  /**
   * @public
   * <p>The file mode permissions of the blob. Valid file mode permissions are listed
   *             here.</p>
   */
  fileMode?: FileModeTypeEnum;

  /**
   * @public
   * <p>The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository,
   *             no commit ID is required. If this is not an empty repository, a commit ID is required. </p>
   *          <p>The commit ID must match the ID of the head commit at the time of the operation.
   *             Otherwise, an error occurs, and the file is not added or updated.</p>
   */
  parentCommitId?: string;

  /**
   * @public
   * <p>A message about why this file was added or updated. Although it is optional, a message
   *             makes the commit history for your repository more useful.</p>
   */
  commitMessage?: string;

  /**
   * @public
   * <p>The name of the person adding or updating the file. Although it is optional, a name
   *             makes the commit history for your repository more useful.</p>
   */
  name?: string;

  /**
   * @public
   * <p>An email address for the person adding or updating the file.</p>
   */
  email?: string;
}

/**
 * @public
 */
export interface PutFileOutput {
  /**
   * @public
   * <p>The full SHA ID of the commit that contains this file change.</p>
   */
  commitId: string | undefined;

  /**
   * @public
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   */
  blobId: string | undefined;

  /**
   * @public
   * <p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>
   */
  treeId: string | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>The Amazon Web Services Region for the trigger target does not match the Amazon Web Services Region for the
 *             repository. Triggers must be created in the same Amazon Web Services Region as the target for the
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
 * @public
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
 * @public
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
 * @public
 * <p>Represents the input of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersInput {
  /**
   * @public
   * <p>The name of the repository where you want to create or update the trigger.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The JSON block of configuration information for each trigger.</p>
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * @public
 * <p>Represents the output of a put repository triggers operation.</p>
 */
export interface PutRepositoryTriggersOutput {
  /**
   * @public
   * <p>The system-generated unique ID for the create or update operation.</p>
   */
  configurationId?: string;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to add or update tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The key-value pair to use when tagging this repository.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
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
 * @public
 * <p>Represents the input of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersInput {
  /**
   * @public
   * <p>The name of the repository in which to test the triggers.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The list of triggers to test.</p>
   */
  triggers: RepositoryTrigger[] | undefined;
}

/**
 * @public
 * <p>A trigger failed to run.</p>
 */
export interface RepositoryTriggerExecutionFailure {
  /**
   * @public
   * <p>The name of the trigger that did not run.</p>
   */
  trigger?: string;

  /**
   * @public
   * <p>Message information about the trigger that did not run.</p>
   */
  failureMessage?: string;
}

/**
 * @public
 * <p>Represents the output of a test repository triggers operation.</p>
 */
export interface TestRepositoryTriggersOutput {
  /**
   * @public
   * <p>The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.</p>
   */
  successfulExecutions?: string[];

  /**
   * @public
   * <p>The list of triggers that were not tested. This list provides the names of the
   *             triggers that could not be tested, separated by commas.</p>
   */
  failedExecutions?: RepositoryTriggerExecutionFailure[];
}

/**
 * @public
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
 * @public
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
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to remove tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag key for each tag that you want to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
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
 * @public
 */
export interface UpdateApprovalRuleTemplateContentInput {
  /**
   * @public
   * <p>The name of the approval rule template where you want to update the content of the rule. </p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * @public
   * <p>The content that replaces the existing content of the rule. Content statements must be
   *             complete. You cannot provide only the changes.</p>
   */
  newRuleContent: string | undefined;

  /**
   * @public
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   */
  existingRuleContentSha256?: string;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateContentOutput {
  /**
   * @public
   * <p>Returns information about an approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionInput {
  /**
   * @public
   * <p>The name of the template for which you want to update the description.</p>
   */
  approvalRuleTemplateName: string | undefined;

  /**
   * @public
   * <p>The updated description of the approval rule template.</p>
   */
  approvalRuleTemplateDescription: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateDescriptionOutput {
  /**
   * @public
   * <p>The structure and content of the updated approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameInput {
  /**
   * @public
   * <p>The current name of the approval rule template.</p>
   */
  oldApprovalRuleTemplateName: string | undefined;

  /**
   * @public
   * <p>The new name you want to apply to the approval rule template.</p>
   */
  newApprovalRuleTemplateName: string | undefined;
}

/**
 * @public
 */
export interface UpdateApprovalRuleTemplateNameOutput {
  /**
   * @public
   * <p>The structure and content of the updated approval rule template.</p>
   */
  approvalRuleTemplate: ApprovalRuleTemplate | undefined;
}

/**
 * @public
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
 * @public
 */
export interface UpdateCommentInput {
  /**
   * @public
   * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a>
   *             or <a>GetCommentsForPullRequest</a>.</p>
   */
  commentId: string | undefined;

  /**
   * @public
   * <p>The updated content to replace the existing content of the comment.</p>
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface UpdateCommentOutput {
  /**
   * @public
   * <p>Information about the updated comment.</p>
   */
  comment?: Comment;
}

/**
 * @public
 * <p>Represents the input of an update default branch operation.</p>
 */
export interface UpdateDefaultBranchInput {
  /**
   * @public
   * <p>The name of the repository for which you want to set or change the default branch.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The name of the branch to set as the default branch.</p>
   */
  defaultBranchName: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The name of the approval rule you want to update.</p>
   */
  approvalRuleName: string | undefined;

  /**
   * @public
   * <p>The SHA-256 hash signature for the content of the approval rule. You can retrieve this
   *             information by using
   *             <a>GetPullRequest</a>.</p>
   */
  existingRuleContentSha256?: string;

  /**
   * @public
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
   */
  newRuleContent: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestApprovalRuleContentOutput {
  /**
   * @public
   * <p>Information about the updated approval rule.</p>
   */
  approvalRule: ApprovalRule | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface UpdatePullRequestApprovalStateInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The system-generated ID of the revision.</p>
   */
  revisionId: string | undefined;

  /**
   * @public
   * <p>The approval state to associate with the user on the pull request.</p>
   */
  approvalState: ApprovalState | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The updated content of the description for the pull request. This content replaces the
   *             existing description.</p>
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestDescriptionOutput {
  /**
   * @public
   * <p>Information about the updated pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface UpdatePullRequestStatusInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The status of the pull request. The only valid operations are to update the status
   *             from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or
   *             from <code>CLOSED</code> to <code>CLOSED</code>.</p>
   */
  pullRequestStatus: PullRequestStatusEnum | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestStatusOutput {
  /**
   * @public
   * <p>Information about the pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleInput {
  /**
   * @public
   * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
   */
  pullRequestId: string | undefined;

  /**
   * @public
   * <p>The updated title of the pull request. This replaces the existing title.</p>
   */
  title: string | undefined;
}

/**
 * @public
 */
export interface UpdatePullRequestTitleOutput {
  /**
   * @public
   * <p>Information about the updated pull request.</p>
   */
  pullRequest: PullRequest | undefined;
}

/**
 * @public
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryDescriptionInput {
  /**
   * @public
   * <p>The name of the repository to set or change the comment or description for.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.</p>
   */
  repositoryDescription?: string;
}

/**
 * @public
 * <p>Represents the input of an update repository description operation.</p>
 */
export interface UpdateRepositoryNameInput {
  /**
   * @public
   * <p>The current name of the repository.</p>
   */
  oldName: string | undefined;

  /**
   * @public
   * <p>The new name for the repository.</p>
   */
  newName: string | undefined;
}
