import {
  ApprovalState,
  AssociateApprovalRuleTemplateWithRepositoryCommand,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  BatchDescribeMergeConflictsCommand,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
  BatchGetCommitsCommand,
  BatchGetRepositoriesCommand,
  BatchGetRepositoriesErrorCodeEnum,
  ChangeTypeEnum,
  CodeCommit,
  CodeCommitClient,
  CodeCommitServiceException,
  ConflictDetailLevelTypeEnum,
  ConflictResolutionStrategyTypeEnum,
  CreateApprovalRuleTemplateCommand,
  CreateBranchCommand,
  CreateCommitCommand,
  CreatePullRequestApprovalRuleCommand,
  CreatePullRequestCommand,
  CreateRepositoryCommand,
  CreateUnreferencedMergeCommitCommand,
  DeleteApprovalRuleTemplateCommand,
  DeleteBranchCommand,
  DeleteCommentContentCommand,
  DeleteFileCommand,
  DeletePullRequestApprovalRuleCommand,
  DeleteRepositoryCommand,
  DescribeMergeConflictsCommand,
  DescribePullRequestEventsCommand,
  DisassociateApprovalRuleTemplateFromRepositoryCommand,
  EvaluatePullRequestApprovalRulesCommand,
  FileModeTypeEnum,
  GetApprovalRuleTemplateCommand,
  GetBlobCommand,
  GetBranchCommand,
  GetCommentCommand,
  GetCommentReactionsCommand,
  GetCommentsForComparedCommitCommand,
  GetCommentsForPullRequestCommand,
  GetCommitCommand,
  GetDifferencesCommand,
  GetFileCommand,
  GetFolderCommand,
  GetMergeCommitCommand,
  GetMergeConflictsCommand,
  GetMergeOptionsCommand,
  GetPullRequestApprovalStatesCommand,
  GetPullRequestCommand,
  GetPullRequestOverrideStateCommand,
  GetRepositoryCommand,
  GetRepositoryTriggersCommand,
  ListApprovalRuleTemplatesCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListBranchesCommand,
  ListFileCommitHistoryCommand,
  ListPullRequestsCommand,
  ListRepositoriesCommand,
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListTagsForResourceCommand,
  MergeBranchesByFastForwardCommand,
  MergeBranchesBySquashCommand,
  MergeBranchesByThreeWayCommand,
  MergeOptionTypeEnum,
  MergePullRequestByFastForwardCommand,
  MergePullRequestBySquashCommand,
  MergePullRequestByThreeWayCommand,
  ObjectTypeEnum,
  OrderEnum,
  OverridePullRequestApprovalRulesCommand,
  OverrideStatus,
  PostCommentForComparedCommitCommand,
  PostCommentForPullRequestCommand,
  PostCommentReplyCommand,
  PullRequestEventType,
  PullRequestStatusEnum,
  PutCommentReactionCommand,
  PutFileCommand,
  PutRepositoryTriggersCommand,
  RelativeFileVersionEnum,
  ReplacementTypeEnum,
  RepositoryTriggerEventEnum,
  SortByEnum,
  TagResourceCommand,
  TestRepositoryTriggersCommand,
  UntagResourceCommand,
  UpdateApprovalRuleTemplateContentCommand,
  UpdateApprovalRuleTemplateDescriptionCommand,
  UpdateApprovalRuleTemplateNameCommand,
  UpdateCommentCommand,
  UpdateDefaultBranchCommand,
  UpdatePullRequestApprovalRuleContentCommand,
  UpdatePullRequestApprovalStateCommand,
  UpdatePullRequestDescriptionCommand,
  UpdatePullRequestStatusCommand,
  UpdatePullRequestTitleCommand,
  UpdateRepositoryDescriptionCommand,
  UpdateRepositoryEncryptionKeyCommand,
  UpdateRepositoryNameCommand,
  paginateDescribeMergeConflicts,
  paginateDescribePullRequestEvents,
  paginateGetCommentReactions,
  paginateGetCommentsForComparedCommit,
  paginateGetCommentsForPullRequest,
  paginateGetDifferences,
  paginateGetMergeConflicts,
  paginateListApprovalRuleTemplates,
  paginateListAssociatedApprovalRuleTemplatesForRepository,
  paginateListBranches,
  paginateListFileCommitHistory,
  paginateListPullRequests,
  paginateListRepositories,
  paginateListRepositoriesForApprovalRuleTemplate,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeCommitClient === "function")
assert(typeof CodeCommit === "function")
// commands
assert(typeof AssociateApprovalRuleTemplateWithRepositoryCommand === "function")
assert(typeof BatchAssociateApprovalRuleTemplateWithRepositoriesCommand === "function")
assert(typeof BatchDescribeMergeConflictsCommand === "function")
assert(typeof BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand === "function")
assert(typeof BatchGetCommitsCommand === "function")
assert(typeof BatchGetRepositoriesCommand === "function")
assert(typeof CreateApprovalRuleTemplateCommand === "function")
assert(typeof CreateBranchCommand === "function")
assert(typeof CreateCommitCommand === "function")
assert(typeof CreatePullRequestCommand === "function")
assert(typeof CreatePullRequestApprovalRuleCommand === "function")
assert(typeof CreateRepositoryCommand === "function")
assert(typeof CreateUnreferencedMergeCommitCommand === "function")
assert(typeof DeleteApprovalRuleTemplateCommand === "function")
assert(typeof DeleteBranchCommand === "function")
assert(typeof DeleteCommentContentCommand === "function")
assert(typeof DeleteFileCommand === "function")
assert(typeof DeletePullRequestApprovalRuleCommand === "function")
assert(typeof DeleteRepositoryCommand === "function")
assert(typeof DescribeMergeConflictsCommand === "function")
assert(typeof DescribePullRequestEventsCommand === "function")
assert(typeof DisassociateApprovalRuleTemplateFromRepositoryCommand === "function")
assert(typeof EvaluatePullRequestApprovalRulesCommand === "function")
assert(typeof GetApprovalRuleTemplateCommand === "function")
assert(typeof GetBlobCommand === "function")
assert(typeof GetBranchCommand === "function")
assert(typeof GetCommentCommand === "function")
assert(typeof GetCommentReactionsCommand === "function")
assert(typeof GetCommentsForComparedCommitCommand === "function")
assert(typeof GetCommentsForPullRequestCommand === "function")
assert(typeof GetCommitCommand === "function")
assert(typeof GetDifferencesCommand === "function")
assert(typeof GetFileCommand === "function")
assert(typeof GetFolderCommand === "function")
assert(typeof GetMergeCommitCommand === "function")
assert(typeof GetMergeConflictsCommand === "function")
assert(typeof GetMergeOptionsCommand === "function")
assert(typeof GetPullRequestCommand === "function")
assert(typeof GetPullRequestApprovalStatesCommand === "function")
assert(typeof GetPullRequestOverrideStateCommand === "function")
assert(typeof GetRepositoryCommand === "function")
assert(typeof GetRepositoryTriggersCommand === "function")
assert(typeof ListApprovalRuleTemplatesCommand === "function")
assert(typeof ListAssociatedApprovalRuleTemplatesForRepositoryCommand === "function")
assert(typeof ListBranchesCommand === "function")
assert(typeof ListFileCommitHistoryCommand === "function")
assert(typeof ListPullRequestsCommand === "function")
assert(typeof ListRepositoriesCommand === "function")
assert(typeof ListRepositoriesForApprovalRuleTemplateCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof MergeBranchesByFastForwardCommand === "function")
assert(typeof MergeBranchesBySquashCommand === "function")
assert(typeof MergeBranchesByThreeWayCommand === "function")
assert(typeof MergePullRequestByFastForwardCommand === "function")
assert(typeof MergePullRequestBySquashCommand === "function")
assert(typeof MergePullRequestByThreeWayCommand === "function")
assert(typeof OverridePullRequestApprovalRulesCommand === "function")
assert(typeof PostCommentForComparedCommitCommand === "function")
assert(typeof PostCommentForPullRequestCommand === "function")
assert(typeof PostCommentReplyCommand === "function")
assert(typeof PutCommentReactionCommand === "function")
assert(typeof PutFileCommand === "function")
assert(typeof PutRepositoryTriggersCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TestRepositoryTriggersCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateApprovalRuleTemplateContentCommand === "function")
assert(typeof UpdateApprovalRuleTemplateDescriptionCommand === "function")
assert(typeof UpdateApprovalRuleTemplateNameCommand === "function")
assert(typeof UpdateCommentCommand === "function")
assert(typeof UpdateDefaultBranchCommand === "function")
assert(typeof UpdatePullRequestApprovalRuleContentCommand === "function")
assert(typeof UpdatePullRequestApprovalStateCommand === "function")
assert(typeof UpdatePullRequestDescriptionCommand === "function")
assert(typeof UpdatePullRequestStatusCommand === "function")
assert(typeof UpdatePullRequestTitleCommand === "function")
assert(typeof UpdateRepositoryDescriptionCommand === "function")
assert(typeof UpdateRepositoryEncryptionKeyCommand === "function")
assert(typeof UpdateRepositoryNameCommand === "function")
// enums
assert(typeof ApprovalState === "object");
assert(typeof BatchGetRepositoriesErrorCodeEnum === "object");
assert(typeof ChangeTypeEnum === "object");
assert(typeof ConflictDetailLevelTypeEnum === "object");
assert(typeof ConflictResolutionStrategyTypeEnum === "object");
assert(typeof FileModeTypeEnum === "object");
assert(typeof MergeOptionTypeEnum === "object");
assert(typeof ObjectTypeEnum === "object");
assert(typeof OrderEnum === "object");
assert(typeof OverrideStatus === "object");
assert(typeof PullRequestEventType === "object");
assert(typeof PullRequestStatusEnum === "object");
assert(typeof RelativeFileVersionEnum === "object");
assert(typeof ReplacementTypeEnum === "object");
assert(typeof RepositoryTriggerEventEnum === "object");
assert(typeof SortByEnum === "object");
// errors
assert(CodeCommitServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeMergeConflicts === "function")
assert(typeof paginateDescribePullRequestEvents === "function")
assert(typeof paginateGetCommentReactions === "function")
assert(typeof paginateGetCommentsForComparedCommit === "function")
assert(typeof paginateGetCommentsForPullRequest === "function")
assert(typeof paginateGetDifferences === "function")
assert(typeof paginateGetMergeConflicts === "function")
assert(typeof paginateListApprovalRuleTemplates === "function")
assert(typeof paginateListAssociatedApprovalRuleTemplatesForRepository === "function")
assert(typeof paginateListBranches === "function")
assert(typeof paginateListFileCommitHistory === "function")
assert(typeof paginateListPullRequests === "function")
assert(typeof paginateListRepositories === "function")
assert(typeof paginateListRepositoriesForApprovalRuleTemplate === "function")
console.log(`CodeCommit index test passed.`);
