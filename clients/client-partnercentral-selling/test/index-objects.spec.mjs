import {
  AcceptEngagementInvitation$,
  AcceptEngagementInvitationCommand,
  AcceptEngagementInvitationRequest$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionErrorCode,
  Account$,
  AccountReceiver$,
  AccountSummary$,
  Address$,
  AddressSummary$,
  AssignOpportunity$,
  AssignOpportunityCommand,
  AssignOpportunityRequest$,
  AssigneeContact$,
  AssociateOpportunity$,
  AssociateOpportunityCommand,
  AssociateOpportunityRequest$,
  AwsClosedLostReason,
  AwsFundingUsed,
  AwsMemberBusinessTitle,
  AwsOpportunityCustomer$,
  AwsOpportunityInsights$,
  AwsOpportunityLifeCycle$,
  AwsOpportunityProject$,
  AwsOpportunityRelatedEntities$,
  AwsOpportunityStage,
  AwsPartition,
  AwsProductDetails$,
  AwsProductInsights$,
  AwsProductOptimization$,
  AwsProductsSpendInsightsBySource$,
  AwsSubmission$,
  AwsTeamMember$,
  Channel,
  ClosedLostReason,
  CompetitorName,
  ConflictException,
  ConflictException$,
  Contact$,
  CountryCode,
  CreateEngagement$,
  CreateEngagementCommand,
  CreateEngagementContext$,
  CreateEngagementContextCommand,
  CreateEngagementContextRequest$,
  CreateEngagementContextResponse$,
  CreateEngagementInvitation$,
  CreateEngagementInvitationCommand,
  CreateEngagementInvitationRequest$,
  CreateEngagementInvitationResponse$,
  CreateEngagementRequest$,
  CreateEngagementResponse$,
  CreateOpportunity$,
  CreateOpportunityCommand,
  CreateOpportunityRequest$,
  CreateOpportunityResponse$,
  CreateResourceSnapshot$,
  CreateResourceSnapshotCommand,
  CreateResourceSnapshotJob$,
  CreateResourceSnapshotJobCommand,
  CreateResourceSnapshotJobRequest$,
  CreateResourceSnapshotJobResponse$,
  CreateResourceSnapshotRequest$,
  CreateResourceSnapshotResponse$,
  CurrencyCode,
  Customer$,
  CustomerProjectsContext$,
  CustomerSummary$,
  DeleteResourceSnapshotJob$,
  DeleteResourceSnapshotJobCommand,
  DeleteResourceSnapshotJobRequest$,
  DeliveryModel,
  DisassociateOpportunity$,
  DisassociateOpportunityCommand,
  DisassociateOpportunityRequest$,
  EngagementContextDetails$,
  EngagementContextPayload$,
  EngagementContextType,
  EngagementCustomer$,
  EngagementCustomerProjectDetails$,
  EngagementInvitationPayloadType,
  EngagementInvitationSummary$,
  EngagementMember$,
  EngagementMemberSummary$,
  EngagementResourceAssociationSummary$,
  EngagementScore,
  EngagementSort$,
  EngagementSortName,
  EngagementSummary$,
  ExpectedCustomerSpend$,
  GetAwsOpportunitySummary$,
  GetAwsOpportunitySummaryCommand,
  GetAwsOpportunitySummaryRequest$,
  GetAwsOpportunitySummaryResponse$,
  GetEngagement$,
  GetEngagementCommand,
  GetEngagementInvitation$,
  GetEngagementInvitationCommand,
  GetEngagementInvitationRequest$,
  GetEngagementInvitationResponse$,
  GetEngagementRequest$,
  GetEngagementResponse$,
  GetOpportunity$,
  GetOpportunityCommand,
  GetOpportunityRequest$,
  GetOpportunityResponse$,
  GetResourceSnapshot$,
  GetResourceSnapshotCommand,
  GetResourceSnapshotJob$,
  GetResourceSnapshotJobCommand,
  GetResourceSnapshotJobRequest$,
  GetResourceSnapshotJobResponse$,
  GetResourceSnapshotRequest$,
  GetResourceSnapshotResponse$,
  GetSellingSystemSettings$,
  GetSellingSystemSettingsCommand,
  GetSellingSystemSettingsRequest$,
  GetSellingSystemSettingsResponse$,
  Industry,
  InternalServerException,
  InternalServerException$,
  Invitation$,
  InvitationStatus,
  InvolvementTypeChangeReason,
  LastModifiedDate$,
  LeadContact$,
  LeadContext$,
  LeadCustomer$,
  LeadInteraction$,
  LeadInvitationCustomer$,
  LeadInvitationInteraction$,
  LeadInvitationPayload$,
  LifeCycle$,
  LifeCycleForView$,
  LifeCycleSummary$,
  ListEngagementByAcceptingInvitationTaskSummary$,
  ListEngagementByAcceptingInvitationTasks$,
  ListEngagementByAcceptingInvitationTasksCommand,
  ListEngagementByAcceptingInvitationTasksRequest$,
  ListEngagementByAcceptingInvitationTasksResponse$,
  ListEngagementFromOpportunityTaskSummary$,
  ListEngagementFromOpportunityTasks$,
  ListEngagementFromOpportunityTasksCommand,
  ListEngagementFromOpportunityTasksRequest$,
  ListEngagementFromOpportunityTasksResponse$,
  ListEngagementInvitations$,
  ListEngagementInvitationsCommand,
  ListEngagementInvitationsRequest$,
  ListEngagementInvitationsResponse$,
  ListEngagementMembers$,
  ListEngagementMembersCommand,
  ListEngagementMembersRequest$,
  ListEngagementMembersResponse$,
  ListEngagementResourceAssociations$,
  ListEngagementResourceAssociationsCommand,
  ListEngagementResourceAssociationsRequest$,
  ListEngagementResourceAssociationsResponse$,
  ListEngagements$,
  ListEngagementsCommand,
  ListEngagementsRequest$,
  ListEngagementsResponse$,
  ListOpportunities$,
  ListOpportunitiesCommand,
  ListOpportunitiesRequest$,
  ListOpportunitiesResponse$,
  ListOpportunityFromEngagementTaskSummary$,
  ListOpportunityFromEngagementTasks$,
  ListOpportunityFromEngagementTasksCommand,
  ListOpportunityFromEngagementTasksRequest$,
  ListOpportunityFromEngagementTasksResponse$,
  ListResourceSnapshotJobs$,
  ListResourceSnapshotJobsCommand,
  ListResourceSnapshotJobsRequest$,
  ListResourceSnapshotJobsResponse$,
  ListResourceSnapshots$,
  ListResourceSnapshotsCommand,
  ListResourceSnapshotsRequest$,
  ListResourceSnapshotsResponse$,
  ListSolutions$,
  ListSolutionsCommand,
  ListSolutionsRequest$,
  ListSolutionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTasksSortBase$,
  ListTasksSortName,
  MarketSegment,
  Marketing$,
  MarketingSource,
  MonetaryValue$,
  NationalSecurity,
  NextStepsHistory$,
  OpportunityEngagementInvitationSort$,
  OpportunityEngagementInvitationSortName,
  OpportunityInvitationPayload$,
  OpportunityOrigin,
  OpportunitySort$,
  OpportunitySortName,
  OpportunitySummary$,
  OpportunitySummaryView$,
  OpportunityType,
  ParticipantType,
  PartnerCentralSelling,
  PartnerCentralSellingClient,
  PartnerCentralSellingServiceException,
  Payload$,
  PaymentFrequency,
  PrimaryNeedFromAws,
  ProfileNextStepsHistory$,
  Project$,
  ProjectDetails$,
  ProjectSummary$,
  ProjectView$,
  PutSellingSystemSettings$,
  PutSellingSystemSettingsCommand,
  PutSellingSystemSettingsRequest$,
  PutSellingSystemSettingsResponse$,
  ReasonCode,
  Receiver$,
  ReceiverResponsibility,
  RejectEngagementInvitation$,
  RejectEngagementInvitationCommand,
  RejectEngagementInvitationRequest$,
  RelatedEntityIdentifiers$,
  RelatedEntityType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSnapshotJobStatus,
  ResourceSnapshotJobSummary$,
  ResourceSnapshotPayload$,
  ResourceSnapshotSummary$,
  ResourceType,
  RevenueModel,
  ReviewStatus,
  SalesActivity,
  SalesInvolvementType,
  SenderContact$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SoftwareRevenue$,
  SolutionBase$,
  SolutionSort$,
  SolutionSortName,
  SolutionStatus,
  SortBy,
  SortObject$,
  SortOrder,
  Stage,
  StartEngagementByAcceptingInvitationTask$,
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementByAcceptingInvitationTaskRequest$,
  StartEngagementByAcceptingInvitationTaskResponse$,
  StartEngagementFromOpportunityTask$,
  StartEngagementFromOpportunityTaskCommand,
  StartEngagementFromOpportunityTaskRequest$,
  StartEngagementFromOpportunityTaskResponse$,
  StartOpportunityFromEngagementTask$,
  StartOpportunityFromEngagementTaskCommand,
  StartOpportunityFromEngagementTaskRequest$,
  StartOpportunityFromEngagementTaskResponse$,
  StartResourceSnapshotJob$,
  StartResourceSnapshotJobCommand,
  StartResourceSnapshotJobRequest$,
  StopResourceSnapshotJob$,
  StopResourceSnapshotJobCommand,
  StopResourceSnapshotJobRequest$,
  SubmitOpportunity$,
  SubmitOpportunityCommand,
  SubmitOpportunityRequest$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskStatus,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateEngagementContext$,
  UpdateEngagementContextCommand,
  UpdateEngagementContextPayload$,
  UpdateEngagementContextRequest$,
  UpdateEngagementContextResponse$,
  UpdateLeadContext$,
  UpdateOpportunity$,
  UpdateOpportunityCommand,
  UpdateOpportunityRequest$,
  UpdateOpportunityResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionError$,
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
assert(typeof AcceptEngagementInvitation$ === "object");
assert(typeof AssignOpportunityCommand === "function");
assert(typeof AssignOpportunity$ === "object");
assert(typeof AssociateOpportunityCommand === "function");
assert(typeof AssociateOpportunity$ === "object");
assert(typeof CreateEngagementCommand === "function");
assert(typeof CreateEngagement$ === "object");
assert(typeof CreateEngagementContextCommand === "function");
assert(typeof CreateEngagementContext$ === "object");
assert(typeof CreateEngagementInvitationCommand === "function");
assert(typeof CreateEngagementInvitation$ === "object");
assert(typeof CreateOpportunityCommand === "function");
assert(typeof CreateOpportunity$ === "object");
assert(typeof CreateResourceSnapshotCommand === "function");
assert(typeof CreateResourceSnapshot$ === "object");
assert(typeof CreateResourceSnapshotJobCommand === "function");
assert(typeof CreateResourceSnapshotJob$ === "object");
assert(typeof DeleteResourceSnapshotJobCommand === "function");
assert(typeof DeleteResourceSnapshotJob$ === "object");
assert(typeof DisassociateOpportunityCommand === "function");
assert(typeof DisassociateOpportunity$ === "object");
assert(typeof GetAwsOpportunitySummaryCommand === "function");
assert(typeof GetAwsOpportunitySummary$ === "object");
assert(typeof GetEngagementCommand === "function");
assert(typeof GetEngagement$ === "object");
assert(typeof GetEngagementInvitationCommand === "function");
assert(typeof GetEngagementInvitation$ === "object");
assert(typeof GetOpportunityCommand === "function");
assert(typeof GetOpportunity$ === "object");
assert(typeof GetResourceSnapshotCommand === "function");
assert(typeof GetResourceSnapshot$ === "object");
assert(typeof GetResourceSnapshotJobCommand === "function");
assert(typeof GetResourceSnapshotJob$ === "object");
assert(typeof GetSellingSystemSettingsCommand === "function");
assert(typeof GetSellingSystemSettings$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTasksCommand === "function");
assert(typeof ListEngagementByAcceptingInvitationTasks$ === "object");
assert(typeof ListEngagementFromOpportunityTasksCommand === "function");
assert(typeof ListEngagementFromOpportunityTasks$ === "object");
assert(typeof ListEngagementInvitationsCommand === "function");
assert(typeof ListEngagementInvitations$ === "object");
assert(typeof ListEngagementMembersCommand === "function");
assert(typeof ListEngagementMembers$ === "object");
assert(typeof ListEngagementResourceAssociationsCommand === "function");
assert(typeof ListEngagementResourceAssociations$ === "object");
assert(typeof ListEngagementsCommand === "function");
assert(typeof ListEngagements$ === "object");
assert(typeof ListOpportunitiesCommand === "function");
assert(typeof ListOpportunities$ === "object");
assert(typeof ListOpportunityFromEngagementTasksCommand === "function");
assert(typeof ListOpportunityFromEngagementTasks$ === "object");
assert(typeof ListResourceSnapshotJobsCommand === "function");
assert(typeof ListResourceSnapshotJobs$ === "object");
assert(typeof ListResourceSnapshotsCommand === "function");
assert(typeof ListResourceSnapshots$ === "object");
assert(typeof ListSolutionsCommand === "function");
assert(typeof ListSolutions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutSellingSystemSettingsCommand === "function");
assert(typeof PutSellingSystemSettings$ === "object");
assert(typeof RejectEngagementInvitationCommand === "function");
assert(typeof RejectEngagementInvitation$ === "object");
assert(typeof StartEngagementByAcceptingInvitationTaskCommand === "function");
assert(typeof StartEngagementByAcceptingInvitationTask$ === "object");
assert(typeof StartEngagementFromOpportunityTaskCommand === "function");
assert(typeof StartEngagementFromOpportunityTask$ === "object");
assert(typeof StartOpportunityFromEngagementTaskCommand === "function");
assert(typeof StartOpportunityFromEngagementTask$ === "object");
assert(typeof StartResourceSnapshotJobCommand === "function");
assert(typeof StartResourceSnapshotJob$ === "object");
assert(typeof StopResourceSnapshotJobCommand === "function");
assert(typeof StopResourceSnapshotJob$ === "object");
assert(typeof SubmitOpportunityCommand === "function");
assert(typeof SubmitOpportunity$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEngagementContextCommand === "function");
assert(typeof UpdateEngagementContext$ === "object");
assert(typeof UpdateOpportunityCommand === "function");
assert(typeof UpdateOpportunity$ === "object");
// structural schemas
assert(typeof AcceptEngagementInvitationRequest$ === "object");
assert(typeof Account$ === "object");
assert(typeof AccountReceiver$ === "object");
assert(typeof AccountSummary$ === "object");
assert(typeof Address$ === "object");
assert(typeof AddressSummary$ === "object");
assert(typeof AssigneeContact$ === "object");
assert(typeof AssignOpportunityRequest$ === "object");
assert(typeof AssociateOpportunityRequest$ === "object");
assert(typeof AwsOpportunityCustomer$ === "object");
assert(typeof AwsOpportunityInsights$ === "object");
assert(typeof AwsOpportunityLifeCycle$ === "object");
assert(typeof AwsOpportunityProject$ === "object");
assert(typeof AwsOpportunityRelatedEntities$ === "object");
assert(typeof AwsProductDetails$ === "object");
assert(typeof AwsProductInsights$ === "object");
assert(typeof AwsProductOptimization$ === "object");
assert(typeof AwsProductsSpendInsightsBySource$ === "object");
assert(typeof AwsSubmission$ === "object");
assert(typeof AwsTeamMember$ === "object");
assert(typeof Contact$ === "object");
assert(typeof CreateEngagementContextRequest$ === "object");
assert(typeof CreateEngagementContextResponse$ === "object");
assert(typeof CreateEngagementInvitationRequest$ === "object");
assert(typeof CreateEngagementInvitationResponse$ === "object");
assert(typeof CreateEngagementRequest$ === "object");
assert(typeof CreateEngagementResponse$ === "object");
assert(typeof CreateOpportunityRequest$ === "object");
assert(typeof CreateOpportunityResponse$ === "object");
assert(typeof CreateResourceSnapshotJobRequest$ === "object");
assert(typeof CreateResourceSnapshotJobResponse$ === "object");
assert(typeof CreateResourceSnapshotRequest$ === "object");
assert(typeof CreateResourceSnapshotResponse$ === "object");
assert(typeof Customer$ === "object");
assert(typeof CustomerProjectsContext$ === "object");
assert(typeof CustomerSummary$ === "object");
assert(typeof DeleteResourceSnapshotJobRequest$ === "object");
assert(typeof DisassociateOpportunityRequest$ === "object");
assert(typeof EngagementContextDetails$ === "object");
assert(typeof EngagementContextPayload$ === "object");
assert(typeof EngagementCustomer$ === "object");
assert(typeof EngagementCustomerProjectDetails$ === "object");
assert(typeof EngagementInvitationSummary$ === "object");
assert(typeof EngagementMember$ === "object");
assert(typeof EngagementMemberSummary$ === "object");
assert(typeof EngagementResourceAssociationSummary$ === "object");
assert(typeof EngagementSort$ === "object");
assert(typeof EngagementSummary$ === "object");
assert(typeof ExpectedCustomerSpend$ === "object");
assert(typeof GetAwsOpportunitySummaryRequest$ === "object");
assert(typeof GetAwsOpportunitySummaryResponse$ === "object");
assert(typeof GetEngagementInvitationRequest$ === "object");
assert(typeof GetEngagementInvitationResponse$ === "object");
assert(typeof GetEngagementRequest$ === "object");
assert(typeof GetEngagementResponse$ === "object");
assert(typeof GetOpportunityRequest$ === "object");
assert(typeof GetOpportunityResponse$ === "object");
assert(typeof GetResourceSnapshotJobRequest$ === "object");
assert(typeof GetResourceSnapshotJobResponse$ === "object");
assert(typeof GetResourceSnapshotRequest$ === "object");
assert(typeof GetResourceSnapshotResponse$ === "object");
assert(typeof GetSellingSystemSettingsRequest$ === "object");
assert(typeof GetSellingSystemSettingsResponse$ === "object");
assert(typeof Invitation$ === "object");
assert(typeof LastModifiedDate$ === "object");
assert(typeof LeadContact$ === "object");
assert(typeof LeadContext$ === "object");
assert(typeof LeadCustomer$ === "object");
assert(typeof LeadInteraction$ === "object");
assert(typeof LeadInvitationCustomer$ === "object");
assert(typeof LeadInvitationInteraction$ === "object");
assert(typeof LeadInvitationPayload$ === "object");
assert(typeof LifeCycle$ === "object");
assert(typeof LifeCycleForView$ === "object");
assert(typeof LifeCycleSummary$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTasksRequest$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTasksResponse$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTaskSummary$ === "object");
assert(typeof ListEngagementFromOpportunityTasksRequest$ === "object");
assert(typeof ListEngagementFromOpportunityTasksResponse$ === "object");
assert(typeof ListEngagementFromOpportunityTaskSummary$ === "object");
assert(typeof ListEngagementInvitationsRequest$ === "object");
assert(typeof ListEngagementInvitationsResponse$ === "object");
assert(typeof ListEngagementMembersRequest$ === "object");
assert(typeof ListEngagementMembersResponse$ === "object");
assert(typeof ListEngagementResourceAssociationsRequest$ === "object");
assert(typeof ListEngagementResourceAssociationsResponse$ === "object");
assert(typeof ListEngagementsRequest$ === "object");
assert(typeof ListEngagementsResponse$ === "object");
assert(typeof ListOpportunitiesRequest$ === "object");
assert(typeof ListOpportunitiesResponse$ === "object");
assert(typeof ListOpportunityFromEngagementTasksRequest$ === "object");
assert(typeof ListOpportunityFromEngagementTasksResponse$ === "object");
assert(typeof ListOpportunityFromEngagementTaskSummary$ === "object");
assert(typeof ListResourceSnapshotJobsRequest$ === "object");
assert(typeof ListResourceSnapshotJobsResponse$ === "object");
assert(typeof ListResourceSnapshotsRequest$ === "object");
assert(typeof ListResourceSnapshotsResponse$ === "object");
assert(typeof ListSolutionsRequest$ === "object");
assert(typeof ListSolutionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTasksSortBase$ === "object");
assert(typeof Marketing$ === "object");
assert(typeof MonetaryValue$ === "object");
assert(typeof NextStepsHistory$ === "object");
assert(typeof OpportunityEngagementInvitationSort$ === "object");
assert(typeof OpportunityInvitationPayload$ === "object");
assert(typeof OpportunitySort$ === "object");
assert(typeof OpportunitySummary$ === "object");
assert(typeof OpportunitySummaryView$ === "object");
assert(typeof Payload$ === "object");
assert(typeof ProfileNextStepsHistory$ === "object");
assert(typeof Project$ === "object");
assert(typeof ProjectDetails$ === "object");
assert(typeof ProjectSummary$ === "object");
assert(typeof ProjectView$ === "object");
assert(typeof PutSellingSystemSettingsRequest$ === "object");
assert(typeof PutSellingSystemSettingsResponse$ === "object");
assert(typeof Receiver$ === "object");
assert(typeof RejectEngagementInvitationRequest$ === "object");
assert(typeof RelatedEntityIdentifiers$ === "object");
assert(typeof ResourceSnapshotJobSummary$ === "object");
assert(typeof ResourceSnapshotPayload$ === "object");
assert(typeof ResourceSnapshotSummary$ === "object");
assert(typeof SenderContact$ === "object");
assert(typeof SoftwareRevenue$ === "object");
assert(typeof SolutionBase$ === "object");
assert(typeof SolutionSort$ === "object");
assert(typeof SortObject$ === "object");
assert(typeof StartEngagementByAcceptingInvitationTaskRequest$ === "object");
assert(typeof StartEngagementByAcceptingInvitationTaskResponse$ === "object");
assert(typeof StartEngagementFromOpportunityTaskRequest$ === "object");
assert(typeof StartEngagementFromOpportunityTaskResponse$ === "object");
assert(typeof StartOpportunityFromEngagementTaskRequest$ === "object");
assert(typeof StartOpportunityFromEngagementTaskResponse$ === "object");
assert(typeof StartResourceSnapshotJobRequest$ === "object");
assert(typeof StopResourceSnapshotJobRequest$ === "object");
assert(typeof SubmitOpportunityRequest$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateEngagementContextPayload$ === "object");
assert(typeof UpdateEngagementContextRequest$ === "object");
assert(typeof UpdateEngagementContextResponse$ === "object");
assert(typeof UpdateLeadContext$ === "object");
assert(typeof UpdateOpportunityRequest$ === "object");
assert(typeof UpdateOpportunityResponse$ === "object");
assert(typeof ValidationExceptionError$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PartnerCentralSellingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PartnerCentralSellingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PartnerCentralSellingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralSellingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PartnerCentralSellingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PartnerCentralSellingServiceException);
assert(typeof ValidationException$ === "object");
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
