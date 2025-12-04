import {
  AnalysisType,
  AssociateRepositoryCommand,
  CodeGuruReviewer,
  CodeGuruReviewerClient,
  CodeGuruReviewerServiceException,
  ConfigFileState,
  CreateCodeReviewCommand,
  DescribeCodeReviewCommand,
  DescribeRecommendationFeedbackCommand,
  DescribeRepositoryAssociationCommand,
  DisassociateRepositoryCommand,
  EncryptionOption,
  JobState,
  ListCodeReviewsCommand,
  ListRecommendationFeedbackCommand,
  ListRecommendationsCommand,
  ListRepositoryAssociationsCommand,
  ListTagsForResourceCommand,
  ProviderType,
  PutRecommendationFeedbackCommand,
  Reaction,
  RecommendationCategory,
  RepositoryAssociationState,
  Severity,
  TagResourceCommand,
  Type,
  UntagResourceCommand,
  VendorName,
  paginateListCodeReviews,
  paginateListRecommendationFeedback,
  paginateListRecommendations,
  paginateListRepositoryAssociations,
  waitForCodeReviewCompleted,
  waitForRepositoryAssociationSucceeded,
  waitUntilCodeReviewCompleted,
  waitUntilRepositoryAssociationSucceeded,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeGuruReviewerClient === "function");
assert(typeof CodeGuruReviewer === "function");
// commands
assert(typeof AssociateRepositoryCommand === "function");
assert(typeof CreateCodeReviewCommand === "function");
assert(typeof DescribeCodeReviewCommand === "function");
assert(typeof DescribeRecommendationFeedbackCommand === "function");
assert(typeof DescribeRepositoryAssociationCommand === "function");
assert(typeof DisassociateRepositoryCommand === "function");
assert(typeof ListCodeReviewsCommand === "function");
assert(typeof ListRecommendationFeedbackCommand === "function");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRepositoryAssociationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutRecommendationFeedbackCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof AnalysisType === "object");
assert(typeof ConfigFileState === "object");
assert(typeof EncryptionOption === "object");
assert(typeof JobState === "object");
assert(typeof ProviderType === "object");
assert(typeof Reaction === "object");
assert(typeof RecommendationCategory === "object");
assert(typeof RepositoryAssociationState === "object");
assert(typeof Severity === "object");
assert(typeof Type === "object");
assert(typeof VendorName === "object");
// errors
assert(CodeGuruReviewerServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCodeReviewCompleted === "function");
assert(typeof waitForRepositoryAssociationSucceeded === "function");
assert(typeof waitUntilCodeReviewCompleted === "function");
assert(typeof waitUntilRepositoryAssociationSucceeded === "function");
// paginators
assert(typeof paginateListCodeReviews === "function");
assert(typeof paginateListRecommendationFeedback === "function");
assert(typeof paginateListRecommendations === "function");
assert(typeof paginateListRepositoryAssociations === "function");
console.log(`CodeGuruReviewer index test passed.`);
