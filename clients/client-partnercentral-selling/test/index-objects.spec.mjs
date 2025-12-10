import {
  AcceptEngagementInvitationCommand,
  AccessDeniedException,
  AccessDeniedExceptionErrorCode,
  AssignOpportunityCommand,
  AssociateOpportunityCommand,
  AwsClosedLostReason,
  AwsFundingUsed,
  AwsMemberBusinessTitle,
  AwsOpportunityStage,
  AwsPartition,
  Channel,
  ClosedLostReason,
  CompetitorName,
  ConflictException,
  CountryCode,
  CreateEngagementCommand,
  CreateEngagementContextCommand,
  CreateEngagementInvitationCommand,
  CreateOpportunityCommand,
  CreateResourceSnapshotCommand,
  CreateResourceSnapshotJobCommand,
  CurrencyCode,
  DeleteResourceSnapshotJobCommand,
  DeliveryModel,
  DisassociateOpportunityCommand,
  EngagementContextType,
  EngagementInvitationPayloadType,
  EngagementScore,
  EngagementSortName,
  GetAwsOpportunitySummaryCommand,
  GetEngagementCommand,
  GetEngagementInvitationCommand,
  GetOpportunityCommand,
  GetResourceSnapshotCommand,
  GetResourceSnapshotJobCommand,
  GetSellingSystemSettingsCommand,
  Industry,
  InternalServerException,
  InvitationStatus,
  InvolvementTypeChangeReason,
  ListEngagementByAcceptingInvitationTasksCommand,
  ListEngagementFromOpportunityTasksCommand,
  ListEngagementInvitationsCommand,
  ListEngagementMembersCommand,
  ListEngagementResourceAssociationsCommand,
  ListEngagementsCommand,
  ListOpportunitiesCommand,
  ListOpportunityFromEngagementTasksCommand,
  ListResourceSnapshotJobsCommand,
  ListResourceSnapshotsCommand,
  ListSolutionsCommand,
  ListTagsForResourceCommand,
  ListTasksSortName,
  MarketSegment,
  MarketingSource,
  NationalSecurity,
  OpportunityEngagementInvitationSortName,
  OpportunityOrigin,
  OpportunitySortName,
  OpportunityType,
  ParticipantType,
  PartnerCentralSelling,
  PartnerCentralSellingClient,
  PartnerCentralSellingServiceException,
  PaymentFrequency,
  PrimaryNeedFromAws,
  PutSellingSystemSettingsCommand,
  ReasonCode,
  ReceiverResponsibility,
  RejectEngagementInvitationCommand,
  RelatedEntityType,
  ResourceNotFoundException,
  ResourceSnapshotJobStatus,
  ResourceType,
  RevenueModel,
  ReviewStatus,
  SalesActivity,
  SalesInvolvementType,
  ServiceQuotaExceededException,
  SolutionSortName,
  SolutionStatus,
  SortBy,
  SortOrder,
  Stage,
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementFromOpportunityTaskCommand,
  StartOpportunityFromEngagementTaskCommand,
  StartResourceSnapshotJobCommand,
  StopResourceSnapshotJobCommand,
  SubmitOpportunityCommand,
  TagResourceCommand,
  TaskStatus,
  ThrottlingException,
  UntagResourceCommand,
  UpdateEngagementContextCommand,
  UpdateOpportunityCommand,
  ValidationException,
  ValidationExceptionErrorCode,
  ValidationExceptionReason,
  Visibility,
  paginateListEngagementByAcceptingInvitationTasks,
  paginateListEngagementFromOpportunityTasks,
  paginateListEngagementInvitations,
  paginateListEngagementMembers,
  paginateListEngagementResourceAssociations,
  paginateListEngagements,
  paginateListOpportunities,
  paginateListOpportunityFromEngagementTasks,
  paginateListResourceSnapshotJobs,
  paginateListResourceSnapshots,
  paginateListSolutions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralSellingClient === "function");
assert(typeof PartnerCentralSelling === "function");
// commands
assert(typeof AcceptEngagementInvitationCommand === "function");
assert(typeof AssignOpportunityCommand === "function");
assert(typeof AssociateOpportunityCommand === "function");
assert(typeof CreateEngagementCommand === "function");
assert(typeof CreateEngagementContextCommand === "function");
assert(typeof CreateEngagementInvitationCommand === "function");
assert(typeof CreateOpportunityCommand === "function");
assert(typeof CreateResourceSnapshotCommand === "function");
assert(typeof CreateResourceSnapshotJobCommand === "function");
assert(typeof DeleteResourceSnapshotJobCommand === "function");
assert(typeof DisassociateOpportunityCommand === "function");
assert(typeof GetAwsOpportunitySummaryCommand === "function");
assert(typeof GetEngagementCommand === "function");
assert(typeof GetEngagementInvitationCommand === "function");
assert(typeof GetOpportunityCommand === "function");
assert(typeof GetResourceSnapshotCommand === "function");
assert(typeof GetResourceSnapshotJobCommand === "function");
assert(typeof GetSellingSystemSettingsCommand === "function");
assert(typeof ListEngagementByAcceptingInvitationTasksCommand === "function");
assert(typeof ListEngagementFromOpportunityTasksCommand === "function");
assert(typeof ListEngagementInvitationsCommand === "function");
assert(typeof ListEngagementMembersCommand === "function");
assert(typeof ListEngagementResourceAssociationsCommand === "function");
assert(typeof ListEngagementsCommand === "function");
assert(typeof ListOpportunitiesCommand === "function");
assert(typeof ListOpportunityFromEngagementTasksCommand === "function");
assert(typeof ListResourceSnapshotJobsCommand === "function");
assert(typeof ListResourceSnapshotsCommand === "function");
assert(typeof ListSolutionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutSellingSystemSettingsCommand === "function");
assert(typeof RejectEngagementInvitationCommand === "function");
assert(typeof StartEngagementByAcceptingInvitationTaskCommand === "function");
assert(typeof StartEngagementFromOpportunityTaskCommand === "function");
assert(typeof StartOpportunityFromEngagementTaskCommand === "function");
assert(typeof StartResourceSnapshotJobCommand === "function");
assert(typeof StopResourceSnapshotJobCommand === "function");
assert(typeof SubmitOpportunityCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateEngagementContextCommand === "function");
assert(typeof UpdateOpportunityCommand === "function");
// enums
assert(typeof AccessDeniedExceptionErrorCode === "object");
assert(typeof AwsClosedLostReason === "object");
assert(typeof AwsFundingUsed === "object");
assert(typeof AwsMemberBusinessTitle === "object");
assert(typeof AwsOpportunityStage === "object");
assert(typeof AwsPartition === "object");
assert(typeof Channel === "object");
assert(typeof ClosedLostReason === "object");
assert(typeof CompetitorName === "object");
assert(typeof CountryCode === "object");
assert(typeof CurrencyCode === "object");
assert(typeof DeliveryModel === "object");
assert(typeof EngagementContextType === "object");
assert(typeof EngagementInvitationPayloadType === "object");
assert(typeof EngagementScore === "object");
assert(typeof EngagementSortName === "object");
assert(typeof Industry === "object");
assert(typeof InvitationStatus === "object");
assert(typeof InvolvementTypeChangeReason === "object");
assert(typeof ListTasksSortName === "object");
assert(typeof MarketingSource === "object");
assert(typeof MarketSegment === "object");
assert(typeof NationalSecurity === "object");
assert(typeof OpportunityEngagementInvitationSortName === "object");
assert(typeof OpportunityOrigin === "object");
assert(typeof OpportunitySortName === "object");
assert(typeof OpportunityType === "object");
assert(typeof ParticipantType === "object");
assert(typeof PaymentFrequency === "object");
assert(typeof PrimaryNeedFromAws === "object");
assert(typeof ReasonCode === "object");
assert(typeof ReceiverResponsibility === "object");
assert(typeof RelatedEntityType === "object");
assert(typeof ResourceSnapshotJobStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof RevenueModel === "object");
assert(typeof ReviewStatus === "object");
assert(typeof SalesActivity === "object");
assert(typeof SalesInvolvementType === "object");
assert(typeof SolutionSortName === "object");
assert(typeof SolutionStatus === "object");
assert(typeof SortBy === "object");
assert(typeof SortOrder === "object");
assert(typeof Stage === "object");
assert(typeof TaskStatus === "object");
assert(typeof ValidationExceptionErrorCode === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof Visibility === "object");
// errors
assert(AccessDeniedException.prototype instanceof PartnerCentralSellingServiceException);
assert(ConflictException.prototype instanceof PartnerCentralSellingServiceException);
assert(InternalServerException.prototype instanceof PartnerCentralSellingServiceException);
assert(ResourceNotFoundException.prototype instanceof PartnerCentralSellingServiceException);
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralSellingServiceException);
assert(ThrottlingException.prototype instanceof PartnerCentralSellingServiceException);
assert(ValidationException.prototype instanceof PartnerCentralSellingServiceException);
assert(PartnerCentralSellingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEngagementByAcceptingInvitationTasks === "function");
assert(typeof paginateListEngagementFromOpportunityTasks === "function");
assert(typeof paginateListEngagementInvitations === "function");
assert(typeof paginateListEngagementMembers === "function");
assert(typeof paginateListEngagementResourceAssociations === "function");
assert(typeof paginateListEngagements === "function");
assert(typeof paginateListOpportunities === "function");
assert(typeof paginateListOpportunityFromEngagementTasks === "function");
assert(typeof paginateListResourceSnapshotJobs === "function");
assert(typeof paginateListResourceSnapshots === "function");
assert(typeof paginateListSolutions === "function");
console.log(`PartnerCentralSelling index test passed.`);
