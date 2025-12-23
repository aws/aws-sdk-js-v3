import {
  AccessDeniedException,
  AccessDeniedException$,
  AnalysisType,
  AssociateRepository$,
  AssociateRepositoryCommand,
  AssociateRepositoryRequest$,
  AssociateRepositoryResponse$,
  BranchDiffSourceCodeType$,
  CodeArtifacts$,
  CodeCommitRepository$,
  CodeGuruReviewer,
  CodeGuruReviewerClient,
  CodeGuruReviewerServiceException,
  CodeReview$,
  CodeReviewSummary$,
  CodeReviewType$,
  CommitDiffSourceCodeType$,
  ConfigFileState,
  ConflictException,
  ConflictException$,
  CreateCodeReview$,
  CreateCodeReviewCommand,
  CreateCodeReviewRequest$,
  CreateCodeReviewResponse$,
  DescribeCodeReview$,
  DescribeCodeReviewCommand,
  DescribeCodeReviewRequest$,
  DescribeCodeReviewResponse$,
  DescribeRecommendationFeedback$,
  DescribeRecommendationFeedbackCommand,
  DescribeRecommendationFeedbackRequest$,
  DescribeRecommendationFeedbackResponse$,
  DescribeRepositoryAssociation$,
  DescribeRepositoryAssociationCommand,
  DescribeRepositoryAssociationRequest$,
  DescribeRepositoryAssociationResponse$,
  DisassociateRepository$,
  DisassociateRepositoryCommand,
  DisassociateRepositoryRequest$,
  DisassociateRepositoryResponse$,
  EncryptionOption,
  EventInfo$,
  InternalServerException,
  InternalServerException$,
  JobState,
  KMSKeyDetails$,
  ListCodeReviews$,
  ListCodeReviewsCommand,
  ListCodeReviewsRequest$,
  ListCodeReviewsResponse$,
  ListRecommendationFeedback$,
  ListRecommendationFeedbackCommand,
  ListRecommendationFeedbackRequest$,
  ListRecommendationFeedbackResponse$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsRequest$,
  ListRecommendationsResponse$,
  ListRepositoryAssociations$,
  ListRepositoryAssociationsCommand,
  ListRepositoryAssociationsRequest$,
  ListRepositoryAssociationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Metrics$,
  MetricsSummary$,
  NotFoundException,
  NotFoundException$,
  paginateListCodeReviews,
  paginateListRecommendationFeedback,
  paginateListRecommendations,
  paginateListRepositoryAssociations,
  ProviderType,
  PutRecommendationFeedback$,
  PutRecommendationFeedbackCommand,
  PutRecommendationFeedbackRequest$,
  PutRecommendationFeedbackResponse$,
  Reaction,
  RecommendationCategory,
  RecommendationFeedback$,
  RecommendationFeedbackSummary$,
  RecommendationSummary$,
  Repository$,
  RepositoryAnalysis$,
  RepositoryAssociation$,
  RepositoryAssociationState,
  RepositoryAssociationSummary$,
  RepositoryHeadSourceCodeType$,
  RequestMetadata$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuleMetadata$,
  S3BucketRepository$,
  S3Repository$,
  S3RepositoryDetails$,
  Severity,
  SourceCodeType$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThirdPartySourceRepository$,
  ThrottlingException,
  ThrottlingException$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  VendorName,
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
assert(typeof AssociateRepository$ === "object");
assert(typeof CreateCodeReviewCommand === "function");
assert(typeof CreateCodeReview$ === "object");
assert(typeof DescribeCodeReviewCommand === "function");
assert(typeof DescribeCodeReview$ === "object");
assert(typeof DescribeRecommendationFeedbackCommand === "function");
assert(typeof DescribeRecommendationFeedback$ === "object");
assert(typeof DescribeRepositoryAssociationCommand === "function");
assert(typeof DescribeRepositoryAssociation$ === "object");
assert(typeof DisassociateRepositoryCommand === "function");
assert(typeof DisassociateRepository$ === "object");
assert(typeof ListCodeReviewsCommand === "function");
assert(typeof ListCodeReviews$ === "object");
assert(typeof ListRecommendationFeedbackCommand === "function");
assert(typeof ListRecommendationFeedback$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof ListRepositoryAssociationsCommand === "function");
assert(typeof ListRepositoryAssociations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutRecommendationFeedbackCommand === "function");
assert(typeof PutRecommendationFeedback$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AssociateRepositoryRequest$ === "object");
assert(typeof AssociateRepositoryResponse$ === "object");
assert(typeof BranchDiffSourceCodeType$ === "object");
assert(typeof CodeArtifacts$ === "object");
assert(typeof CodeCommitRepository$ === "object");
assert(typeof CodeReview$ === "object");
assert(typeof CodeReviewSummary$ === "object");
assert(typeof CodeReviewType$ === "object");
assert(typeof CommitDiffSourceCodeType$ === "object");
assert(typeof CreateCodeReviewRequest$ === "object");
assert(typeof CreateCodeReviewResponse$ === "object");
assert(typeof DescribeCodeReviewRequest$ === "object");
assert(typeof DescribeCodeReviewResponse$ === "object");
assert(typeof DescribeRecommendationFeedbackRequest$ === "object");
assert(typeof DescribeRecommendationFeedbackResponse$ === "object");
assert(typeof DescribeRepositoryAssociationRequest$ === "object");
assert(typeof DescribeRepositoryAssociationResponse$ === "object");
assert(typeof DisassociateRepositoryRequest$ === "object");
assert(typeof DisassociateRepositoryResponse$ === "object");
assert(typeof EventInfo$ === "object");
assert(typeof KMSKeyDetails$ === "object");
assert(typeof ListCodeReviewsRequest$ === "object");
assert(typeof ListCodeReviewsResponse$ === "object");
assert(typeof ListRecommendationFeedbackRequest$ === "object");
assert(typeof ListRecommendationFeedbackResponse$ === "object");
assert(typeof ListRecommendationsRequest$ === "object");
assert(typeof ListRecommendationsResponse$ === "object");
assert(typeof ListRepositoryAssociationsRequest$ === "object");
assert(typeof ListRepositoryAssociationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Metrics$ === "object");
assert(typeof MetricsSummary$ === "object");
assert(typeof PutRecommendationFeedbackRequest$ === "object");
assert(typeof PutRecommendationFeedbackResponse$ === "object");
assert(typeof RecommendationFeedback$ === "object");
assert(typeof RecommendationFeedbackSummary$ === "object");
assert(typeof RecommendationSummary$ === "object");
assert(typeof Repository$ === "object");
assert(typeof RepositoryAnalysis$ === "object");
assert(typeof RepositoryAssociation$ === "object");
assert(typeof RepositoryAssociationSummary$ === "object");
assert(typeof RepositoryHeadSourceCodeType$ === "object");
assert(typeof RequestMetadata$ === "object");
assert(typeof RuleMetadata$ === "object");
assert(typeof S3BucketRepository$ === "object");
assert(typeof S3Repository$ === "object");
assert(typeof S3RepositoryDetails$ === "object");
assert(typeof SourceCodeType$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof ThirdPartySourceRepository$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
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
assert(AccessDeniedException.prototype instanceof CodeGuruReviewerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CodeGuruReviewerServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CodeGuruReviewerServiceException);
assert(typeof InternalServerException$ === "object");
assert(NotFoundException.prototype instanceof CodeGuruReviewerServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodeGuruReviewerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof CodeGuruReviewerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CodeGuruReviewerServiceException);
assert(typeof ValidationException$ === "object");
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
