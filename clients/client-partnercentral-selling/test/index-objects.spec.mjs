import {
  AcceptEngagementInvitation$,
  AcceptEngagementInvitationCommand,
  AcceptEngagementInvitationRequest$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionErrorCode,
  Account$,
  AccountCustomer$,
  AccountPlanningInvitationPayload$,
  AccountReceiver$,
  AccountSummary$,
  Address$,
  AddressSummary$,
  AggregatableField,
  AggregationRequest$,
  AggregationResult$,
  AssigneeContact$,
  AssignOpportunity$,
  AssignOpportunityCommand,
  AssignOpportunityRequest$,
  AssociateOpportunity$,
  AssociateOpportunityCommand,
  AssociateOpportunityRequest$,
  AwsClosedLostReason,
  AwsEnrichment$,
  AwsEnrichmentCustomer$,
  AwsEnrichmentCustomerSummary$,
  AwsEnrichmentInsights$,
  AwsEnrichmentInsightsSummary$,
  AwsEnrichmentSummary$,
  AwsFundingUsed,
  AwsMemberBusinessTitle,
  AwsOpportunityCustomer$,
  AwsOpportunityInsights$,
  AwsOpportunityLifeCycle$,
  AwsOpportunityProject$,
  AwsOpportunityRelatedEntities$,
  AwsOpportunityStage,
  AwsOpportunitySummaryFullView$,
  AwsPartition,
  AwsProductDetails$,
  AwsProductInsights$,
  AwsProductOptimization$,
  AwsProductsSpendInsightsBySource$,
  AwsSoftwareRevenue$,
  AwsSubmission$,
  AwsTeamMember$,
  BestOutreachWindow$,
  Bucket$,
  BulkFileFormat,
  BulkJobResult$,
  BulkJobStatus,
  BulkOperationType,
  BulkRecordStatus,
  BulkReportStatus,
  BulkReportType,
  Channel,
  ChannelRecommendation$,
  ClosedLostReason,
  CompetitorName,
  ConflictException,
  ConflictException$,
  Contact$,
  ContactWindow,
  CountryCode,
  CreateCustomerAccount$,
  CreateCustomerAccountCommand,
  CreateCustomerAccountRequest$,
  CreateCustomerAccountResponse$,
  CreatedDateFilter$,
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
  CustomerAccountBulkJobFilter$,
  CustomerAccountBulkJobSummary$,
  CustomerAccountContext$,
  CustomerAccountData$,
  CustomerAccountDetailsSummary$,
  CustomerAccountFailureReason,
  CustomerAccountSort$,
  CustomerAccountSummary$,
  CustomerProjectsContext$,
  CustomerSummary$,
  DayOfWeek,
  DeleteCustomerAccount$,
  DeleteCustomerAccountCommand,
  DeleteCustomerAccountRequest$,
  DeleteCustomerAccountResponse$,
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
  EngagementGroupSort$,
  EngagementGroupSortName,
  EngagementGroupSummary$,
  EngagementInvitationPayloadType,
  EngagementInvitationSummary$,
  EngagementMember$,
  EngagementMemberSummary$,
  EngagementProspectingResult$,
  EngagementResourceAssociationSummary$,
  EngagementScore,
  EngagementSearchFilter$,
  EngagementSearchFilterName,
  EngagementSearchFilterValue$,
  EngagementSearchPredicate$,
  EngagementSearchSort$,
  EngagementSearchSortName,
  EngagementSearchSummary$,
  EngagementSort$,
  EngagementSortName,
  EngagementSummary$,
  EnrichmentContext$,
  EnrichmentStatus,
  ExpectedContractDuration$,
  ExpectedContractDurationTerm,
  ExpectedCustomerSpend$,
  Filter$,
  FilterableField,
  FilterCondition$,
  FilterValue$,
  GetAwsOpportunitySummary$,
  GetAwsOpportunitySummaryCommand,
  GetAwsOpportunitySummaryRequest$,
  GetAwsOpportunitySummaryResponse$,
  GetCustomerAccount$,
  GetCustomerAccountBulkJob$,
  GetCustomerAccountBulkJobCommand,
  GetCustomerAccountBulkJobReportUrl$,
  GetCustomerAccountBulkJobReportUrlCommand,
  GetCustomerAccountBulkJobReportUrlRequest$,
  GetCustomerAccountBulkJobReportUrlResponse$,
  GetCustomerAccountBulkJobRequest$,
  GetCustomerAccountBulkJobResponse$,
  GetCustomerAccountCommand,
  GetCustomerAccountRequest$,
  GetCustomerAccountResponse$,
  GetCustomerAccountStatistics$,
  GetCustomerAccountStatisticsCommand,
  GetCustomerAccountStatisticsRequest$,
  GetCustomerAccountStatisticsResponse$,
  GetEngagement$,
  GetEngagementCommand,
  GetEngagementInvitation$,
  GetEngagementInvitationCommand,
  GetEngagementInvitationRequest$,
  GetEngagementInvitationResponse$,
  GetEngagementRequest$,
  GetEngagementResponse$,
  GetOpportunity$,
  GetOpportunityBulkJobReportUrl$,
  GetOpportunityBulkJobReportUrlCommand,
  GetOpportunityBulkJobReportUrlRequest$,
  GetOpportunityBulkJobReportUrlResponse$,
  GetOpportunityCommand,
  GetOpportunityRequest$,
  GetOpportunityResponse$,
  GetProspectingFromEngagementTask$,
  GetProspectingFromEngagementTaskCommand,
  GetProspectingFromEngagementTaskRequest$,
  GetProspectingFromEngagementTaskResponse$,
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
  InvitationProspectingResultAws$,
  InvitationStatus,
  InvolvementTypeChangeReason,
  Issue$,
  LastModifiedDate$,
  LeadAddress$,
  LeadContact$,
  LeadContext$,
  LeadCustomer$,
  LeadInsights$,
  LeadInteraction$,
  LeadInvitationCustomer$,
  LeadInvitationInteraction$,
  LeadInvitationPayload$,
  LifeCycle$,
  LifeCycleForView$,
  LifeCycleSummary$,
  ListCustomerAccountBulkJobResults$,
  ListCustomerAccountBulkJobResultsCommand,
  ListCustomerAccountBulkJobResultsRequest$,
  ListCustomerAccountBulkJobResultsResponse$,
  ListCustomerAccountBulkJobs$,
  ListCustomerAccountBulkJobsCommand,
  ListCustomerAccountBulkJobsRequest$,
  ListCustomerAccountBulkJobsResponse$,
  ListEngagementByAcceptingInvitationTasks$,
  ListEngagementByAcceptingInvitationTasksCommand,
  ListEngagementByAcceptingInvitationTasksRequest$,
  ListEngagementByAcceptingInvitationTasksResponse$,
  ListEngagementByAcceptingInvitationTaskSummary$,
  ListEngagementFromOpportunityTasks$,
  ListEngagementFromOpportunityTasksCommand,
  ListEngagementFromOpportunityTasksRequest$,
  ListEngagementFromOpportunityTasksResponse$,
  ListEngagementFromOpportunityTaskSummary$,
  ListEngagementGroups$,
  ListEngagementGroupsCommand,
  ListEngagementGroupsRequest$,
  ListEngagementGroupsResponse$,
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
  ListOpportunityBulkJobResults$,
  ListOpportunityBulkJobResultsCommand,
  ListOpportunityBulkJobResultsRequest$,
  ListOpportunityBulkJobResultsResponse$,
  ListOpportunityBulkJobs$,
  ListOpportunityBulkJobsCommand,
  ListOpportunityBulkJobsRequest$,
  ListOpportunityBulkJobsResponse$,
  ListOpportunityFromEngagementTasks$,
  ListOpportunityFromEngagementTasksCommand,
  ListOpportunityFromEngagementTasksRequest$,
  ListOpportunityFromEngagementTasksResponse$,
  ListOpportunityFromEngagementTaskSummary$,
  ListProspectingFromEngagementTasks$,
  ListProspectingFromEngagementTasksCommand,
  ListProspectingFromEngagementTasksRequest$,
  ListProspectingFromEngagementTasksResponse$,
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
  Marketing$,
  MarketingSource,
  MonetaryValue$,
  NationalSecurity,
  NextStepsHistory$,
  OpportunityBulkJobSummary$,
  OpportunityEngagementInvitationSort$,
  OpportunityEngagementInvitationSortName,
  OpportunityInvitationPayload$,
  OpportunityOrigin,
  OpportunityQuality$,
  OpportunitySearchAccount$,
  OpportunitySearchAddress$,
  OpportunitySearchAwsSummary$,
  OpportunitySearchCustomer$,
  OpportunitySearchExpectedCustomerSpend$,
  OpportunitySearchFilter$,
  OpportunitySearchFilterName,
  OpportunitySearchFilterValue$,
  OpportunitySearchInsights$,
  OpportunitySearchLifeCycle$,
  OpportunitySearchOpportunityQuality$,
  OpportunitySearchPredicate$,
  OpportunitySearchProject$,
  OpportunitySearchRelatedEntityIdentifiers$,
  OpportunitySearchSort$,
  OpportunitySearchSortName,
  OpportunitySearchSummary$,
  OpportunitySearchTeamMember$,
  OpportunitySort$,
  OpportunitySortName,
  OpportunitySummary$,
  OpportunitySummaryView$,
  OpportunityType,
  paginateListCustomerAccountBulkJobResults,
  paginateListCustomerAccountBulkJobs,
  paginateListEngagementByAcceptingInvitationTasks,
  paginateListEngagementFromOpportunityTasks,
  paginateListEngagementGroups,
  paginateListEngagementInvitations,
  paginateListEngagementMembers,
  paginateListEngagementResourceAssociations,
  paginateListEngagements,
  paginateListOpportunities,
  paginateListOpportunityBulkJobResults,
  paginateListOpportunityBulkJobs,
  paginateListOpportunityFromEngagementTasks,
  paginateListProspectingFromEngagementTasks,
  paginateListResourceSnapshotJobs,
  paginateListResourceSnapshots,
  paginateListSolutions,
  paginateSearchCustomerAccounts,
  paginateSearchEngagements,
  paginateSearchOpportunities,
  ParticipantType,
  PartnerCentralSelling,
  PartnerCentralSellingClient,
  PartnerCentralSellingServiceException,
  Payload$,
  PaymentFrequency,
  PreferredContactWindow$,
  PrimaryNeedFromAws,
  ProfileNextStepsHistory$,
  Project$,
  ProjectDetails$,
  ProjectSummary$,
  ProjectView$,
  ProspectingFromEngagementTaskSort$,
  ProspectingFromEngagementTaskSortName,
  ProspectingInsights$,
  ProspectingResult$,
  ProspectingResultAws$,
  ProspectingResultCustomer$,
  ProspectingTaskStatus,
  ProspectingTaskSummary$,
  PutSellingSystemSettings$,
  PutSellingSystemSettingsCommand,
  PutSellingSystemSettingsRequest$,
  PutSellingSystemSettingsResponse$,
  ReadinessLevel,
  ReasonCode,
  Receiver$,
  ReceiverResponsibility,
  Recommendation$,
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
  SearchCustomerAccounts$,
  SearchCustomerAccountsCommand,
  SearchCustomerAccountsRequest$,
  SearchCustomerAccountsResponse$,
  SearchEngagements$,
  SearchEngagementsCommand,
  SearchEngagementScore,
  SearchEngagementsRequest$,
  SearchEngagementsResponse$,
  SearchOpportunities$,
  SearchOpportunitiesCommand,
  SearchOpportunitiesRequest$,
  SearchOpportunitiesResponse$,
  SenderContact$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SoftwareRevenue$,
  SolutionBase$,
  SolutionSort$,
  SolutionSortName,
  SolutionStatus,
  SortableField,
  SortBy,
  SortObject$,
  SortOrder,
  Stage,
  StartCustomerAccountBulkJob$,
  StartCustomerAccountBulkJobCommand,
  StartCustomerAccountBulkJobRequest$,
  StartCustomerAccountBulkJobResponse$,
  StartEngagementByAcceptingInvitationTask$,
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementByAcceptingInvitationTaskRequest$,
  StartEngagementByAcceptingInvitationTaskResponse$,
  StartEngagementFromOpportunityTask$,
  StartEngagementFromOpportunityTaskCommand,
  StartEngagementFromOpportunityTaskRequest$,
  StartEngagementFromOpportunityTaskResponse$,
  StartOpportunityBulkJob$,
  StartOpportunityBulkJobCommand,
  StartOpportunityBulkJobRequest$,
  StartOpportunityBulkJobResponse$,
  StartOpportunityFromEngagementTask$,
  StartOpportunityFromEngagementTaskCommand,
  StartOpportunityFromEngagementTaskRequest$,
  StartOpportunityFromEngagementTaskResponse$,
  StartProspectingFromEngagementTask$,
  StartProspectingFromEngagementTaskCommand,
  StartProspectingFromEngagementTaskRequest$,
  StartProspectingFromEngagementTaskResponse$,
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
  TargetCloseDateFilter$,
  TaskStatus,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCustomerAccount$,
  UpdateCustomerAccountCommand,
  UpdateCustomerAccountRequest$,
  UpdateCustomerAccountResponse$,
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
assert(typeof CreateCustomerAccountCommand === "function");
assert(typeof CreateCustomerAccount$ === "object");
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
assert(typeof DeleteCustomerAccountCommand === "function");
assert(typeof DeleteCustomerAccount$ === "object");
assert(typeof DeleteResourceSnapshotJobCommand === "function");
assert(typeof DeleteResourceSnapshotJob$ === "object");
assert(typeof DisassociateOpportunityCommand === "function");
assert(typeof DisassociateOpportunity$ === "object");
assert(typeof GetAwsOpportunitySummaryCommand === "function");
assert(typeof GetAwsOpportunitySummary$ === "object");
assert(typeof GetCustomerAccountCommand === "function");
assert(typeof GetCustomerAccount$ === "object");
assert(typeof GetCustomerAccountBulkJobCommand === "function");
assert(typeof GetCustomerAccountBulkJob$ === "object");
assert(typeof GetCustomerAccountBulkJobReportUrlCommand === "function");
assert(typeof GetCustomerAccountBulkJobReportUrl$ === "object");
assert(typeof GetCustomerAccountStatisticsCommand === "function");
assert(typeof GetCustomerAccountStatistics$ === "object");
assert(typeof GetEngagementCommand === "function");
assert(typeof GetEngagement$ === "object");
assert(typeof GetEngagementInvitationCommand === "function");
assert(typeof GetEngagementInvitation$ === "object");
assert(typeof GetOpportunityCommand === "function");
assert(typeof GetOpportunity$ === "object");
assert(typeof GetOpportunityBulkJobReportUrlCommand === "function");
assert(typeof GetOpportunityBulkJobReportUrl$ === "object");
assert(typeof GetProspectingFromEngagementTaskCommand === "function");
assert(typeof GetProspectingFromEngagementTask$ === "object");
assert(typeof GetResourceSnapshotCommand === "function");
assert(typeof GetResourceSnapshot$ === "object");
assert(typeof GetResourceSnapshotJobCommand === "function");
assert(typeof GetResourceSnapshotJob$ === "object");
assert(typeof GetSellingSystemSettingsCommand === "function");
assert(typeof GetSellingSystemSettings$ === "object");
assert(typeof ListCustomerAccountBulkJobResultsCommand === "function");
assert(typeof ListCustomerAccountBulkJobResults$ === "object");
assert(typeof ListCustomerAccountBulkJobsCommand === "function");
assert(typeof ListCustomerAccountBulkJobs$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTasksCommand === "function");
assert(typeof ListEngagementByAcceptingInvitationTasks$ === "object");
assert(typeof ListEngagementFromOpportunityTasksCommand === "function");
assert(typeof ListEngagementFromOpportunityTasks$ === "object");
assert(typeof ListEngagementGroupsCommand === "function");
assert(typeof ListEngagementGroups$ === "object");
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
assert(typeof ListOpportunityBulkJobResultsCommand === "function");
assert(typeof ListOpportunityBulkJobResults$ === "object");
assert(typeof ListOpportunityBulkJobsCommand === "function");
assert(typeof ListOpportunityBulkJobs$ === "object");
assert(typeof ListOpportunityFromEngagementTasksCommand === "function");
assert(typeof ListOpportunityFromEngagementTasks$ === "object");
assert(typeof ListProspectingFromEngagementTasksCommand === "function");
assert(typeof ListProspectingFromEngagementTasks$ === "object");
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
assert(typeof SearchCustomerAccountsCommand === "function");
assert(typeof SearchCustomerAccounts$ === "object");
assert(typeof SearchEngagementsCommand === "function");
assert(typeof SearchEngagements$ === "object");
assert(typeof SearchOpportunitiesCommand === "function");
assert(typeof SearchOpportunities$ === "object");
assert(typeof StartCustomerAccountBulkJobCommand === "function");
assert(typeof StartCustomerAccountBulkJob$ === "object");
assert(typeof StartEngagementByAcceptingInvitationTaskCommand === "function");
assert(typeof StartEngagementByAcceptingInvitationTask$ === "object");
assert(typeof StartEngagementFromOpportunityTaskCommand === "function");
assert(typeof StartEngagementFromOpportunityTask$ === "object");
assert(typeof StartOpportunityBulkJobCommand === "function");
assert(typeof StartOpportunityBulkJob$ === "object");
assert(typeof StartOpportunityFromEngagementTaskCommand === "function");
assert(typeof StartOpportunityFromEngagementTask$ === "object");
assert(typeof StartProspectingFromEngagementTaskCommand === "function");
assert(typeof StartProspectingFromEngagementTask$ === "object");
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
assert(typeof UpdateCustomerAccountCommand === "function");
assert(typeof UpdateCustomerAccount$ === "object");
assert(typeof UpdateEngagementContextCommand === "function");
assert(typeof UpdateEngagementContext$ === "object");
assert(typeof UpdateOpportunityCommand === "function");
assert(typeof UpdateOpportunity$ === "object");
// structural schemas
assert(typeof AcceptEngagementInvitationRequest$ === "object");
assert(typeof Account$ === "object");
assert(typeof AccountCustomer$ === "object");
assert(typeof AccountPlanningInvitationPayload$ === "object");
assert(typeof AccountReceiver$ === "object");
assert(typeof AccountSummary$ === "object");
assert(typeof Address$ === "object");
assert(typeof AddressSummary$ === "object");
assert(typeof AggregationRequest$ === "object");
assert(typeof AggregationResult$ === "object");
assert(typeof AssigneeContact$ === "object");
assert(typeof AssignOpportunityRequest$ === "object");
assert(typeof AssociateOpportunityRequest$ === "object");
assert(typeof AwsEnrichment$ === "object");
assert(typeof AwsEnrichmentCustomer$ === "object");
assert(typeof AwsEnrichmentCustomerSummary$ === "object");
assert(typeof AwsEnrichmentInsights$ === "object");
assert(typeof AwsEnrichmentInsightsSummary$ === "object");
assert(typeof AwsEnrichmentSummary$ === "object");
assert(typeof AwsOpportunityCustomer$ === "object");
assert(typeof AwsOpportunityInsights$ === "object");
assert(typeof AwsOpportunityLifeCycle$ === "object");
assert(typeof AwsOpportunityProject$ === "object");
assert(typeof AwsOpportunityRelatedEntities$ === "object");
assert(typeof AwsOpportunitySummaryFullView$ === "object");
assert(typeof AwsProductDetails$ === "object");
assert(typeof AwsProductInsights$ === "object");
assert(typeof AwsProductOptimization$ === "object");
assert(typeof AwsProductsSpendInsightsBySource$ === "object");
assert(typeof AwsSoftwareRevenue$ === "object");
assert(typeof AwsSubmission$ === "object");
assert(typeof AwsTeamMember$ === "object");
assert(typeof BestOutreachWindow$ === "object");
assert(typeof Bucket$ === "object");
assert(typeof BulkJobResult$ === "object");
assert(typeof ChannelRecommendation$ === "object");
assert(typeof Contact$ === "object");
assert(typeof CreateCustomerAccountRequest$ === "object");
assert(typeof CreateCustomerAccountResponse$ === "object");
assert(typeof CreatedDateFilter$ === "object");
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
assert(typeof CustomerAccountBulkJobFilter$ === "object");
assert(typeof CustomerAccountBulkJobSummary$ === "object");
assert(typeof CustomerAccountContext$ === "object");
assert(typeof CustomerAccountData$ === "object");
assert(typeof CustomerAccountDetailsSummary$ === "object");
assert(typeof CustomerAccountSort$ === "object");
assert(typeof CustomerAccountSummary$ === "object");
assert(typeof CustomerProjectsContext$ === "object");
assert(typeof CustomerSummary$ === "object");
assert(typeof DeleteCustomerAccountRequest$ === "object");
assert(typeof DeleteCustomerAccountResponse$ === "object");
assert(typeof DeleteResourceSnapshotJobRequest$ === "object");
assert(typeof DisassociateOpportunityRequest$ === "object");
assert(typeof EngagementContextDetails$ === "object");
assert(typeof EngagementContextPayload$ === "object");
assert(typeof EngagementCustomer$ === "object");
assert(typeof EngagementCustomerProjectDetails$ === "object");
assert(typeof EngagementGroupSort$ === "object");
assert(typeof EngagementGroupSummary$ === "object");
assert(typeof EngagementInvitationSummary$ === "object");
assert(typeof EngagementMember$ === "object");
assert(typeof EngagementMemberSummary$ === "object");
assert(typeof EngagementProspectingResult$ === "object");
assert(typeof EngagementResourceAssociationSummary$ === "object");
assert(typeof EngagementSearchFilter$ === "object");
assert(typeof EngagementSearchFilterValue$ === "object");
assert(typeof EngagementSearchPredicate$ === "object");
assert(typeof EngagementSearchSort$ === "object");
assert(typeof EngagementSearchSummary$ === "object");
assert(typeof EngagementSort$ === "object");
assert(typeof EngagementSummary$ === "object");
assert(typeof EnrichmentContext$ === "object");
assert(typeof ExpectedContractDuration$ === "object");
assert(typeof ExpectedCustomerSpend$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterCondition$ === "object");
assert(typeof FilterValue$ === "object");
assert(typeof GetAwsOpportunitySummaryRequest$ === "object");
assert(typeof GetAwsOpportunitySummaryResponse$ === "object");
assert(typeof GetCustomerAccountBulkJobReportUrlRequest$ === "object");
assert(typeof GetCustomerAccountBulkJobReportUrlResponse$ === "object");
assert(typeof GetCustomerAccountBulkJobRequest$ === "object");
assert(typeof GetCustomerAccountBulkJobResponse$ === "object");
assert(typeof GetCustomerAccountRequest$ === "object");
assert(typeof GetCustomerAccountResponse$ === "object");
assert(typeof GetCustomerAccountStatisticsRequest$ === "object");
assert(typeof GetCustomerAccountStatisticsResponse$ === "object");
assert(typeof GetEngagementInvitationRequest$ === "object");
assert(typeof GetEngagementInvitationResponse$ === "object");
assert(typeof GetEngagementRequest$ === "object");
assert(typeof GetEngagementResponse$ === "object");
assert(typeof GetOpportunityBulkJobReportUrlRequest$ === "object");
assert(typeof GetOpportunityBulkJobReportUrlResponse$ === "object");
assert(typeof GetOpportunityRequest$ === "object");
assert(typeof GetOpportunityResponse$ === "object");
assert(typeof GetProspectingFromEngagementTaskRequest$ === "object");
assert(typeof GetProspectingFromEngagementTaskResponse$ === "object");
assert(typeof GetResourceSnapshotJobRequest$ === "object");
assert(typeof GetResourceSnapshotJobResponse$ === "object");
assert(typeof GetResourceSnapshotRequest$ === "object");
assert(typeof GetResourceSnapshotResponse$ === "object");
assert(typeof GetSellingSystemSettingsRequest$ === "object");
assert(typeof GetSellingSystemSettingsResponse$ === "object");
assert(typeof Invitation$ === "object");
assert(typeof InvitationProspectingResultAws$ === "object");
assert(typeof Issue$ === "object");
assert(typeof LastModifiedDate$ === "object");
assert(typeof LeadAddress$ === "object");
assert(typeof LeadContact$ === "object");
assert(typeof LeadContext$ === "object");
assert(typeof LeadCustomer$ === "object");
assert(typeof LeadInsights$ === "object");
assert(typeof LeadInteraction$ === "object");
assert(typeof LeadInvitationCustomer$ === "object");
assert(typeof LeadInvitationInteraction$ === "object");
assert(typeof LeadInvitationPayload$ === "object");
assert(typeof LifeCycle$ === "object");
assert(typeof LifeCycleForView$ === "object");
assert(typeof LifeCycleSummary$ === "object");
assert(typeof ListCustomerAccountBulkJobResultsRequest$ === "object");
assert(typeof ListCustomerAccountBulkJobResultsResponse$ === "object");
assert(typeof ListCustomerAccountBulkJobsRequest$ === "object");
assert(typeof ListCustomerAccountBulkJobsResponse$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTasksRequest$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTasksResponse$ === "object");
assert(typeof ListEngagementByAcceptingInvitationTaskSummary$ === "object");
assert(typeof ListEngagementFromOpportunityTasksRequest$ === "object");
assert(typeof ListEngagementFromOpportunityTasksResponse$ === "object");
assert(typeof ListEngagementFromOpportunityTaskSummary$ === "object");
assert(typeof ListEngagementGroupsRequest$ === "object");
assert(typeof ListEngagementGroupsResponse$ === "object");
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
assert(typeof ListOpportunityBulkJobResultsRequest$ === "object");
assert(typeof ListOpportunityBulkJobResultsResponse$ === "object");
assert(typeof ListOpportunityBulkJobsRequest$ === "object");
assert(typeof ListOpportunityBulkJobsResponse$ === "object");
assert(typeof ListOpportunityFromEngagementTasksRequest$ === "object");
assert(typeof ListOpportunityFromEngagementTasksResponse$ === "object");
assert(typeof ListOpportunityFromEngagementTaskSummary$ === "object");
assert(typeof ListProspectingFromEngagementTasksRequest$ === "object");
assert(typeof ListProspectingFromEngagementTasksResponse$ === "object");
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
assert(typeof OpportunityBulkJobSummary$ === "object");
assert(typeof OpportunityEngagementInvitationSort$ === "object");
assert(typeof OpportunityInvitationPayload$ === "object");
assert(typeof OpportunityQuality$ === "object");
assert(typeof OpportunitySearchAccount$ === "object");
assert(typeof OpportunitySearchAddress$ === "object");
assert(typeof OpportunitySearchAwsSummary$ === "object");
assert(typeof OpportunitySearchCustomer$ === "object");
assert(typeof OpportunitySearchExpectedCustomerSpend$ === "object");
assert(typeof OpportunitySearchFilter$ === "object");
assert(typeof OpportunitySearchFilterValue$ === "object");
assert(typeof OpportunitySearchInsights$ === "object");
assert(typeof OpportunitySearchLifeCycle$ === "object");
assert(typeof OpportunitySearchOpportunityQuality$ === "object");
assert(typeof OpportunitySearchPredicate$ === "object");
assert(typeof OpportunitySearchProject$ === "object");
assert(typeof OpportunitySearchRelatedEntityIdentifiers$ === "object");
assert(typeof OpportunitySearchSort$ === "object");
assert(typeof OpportunitySearchSummary$ === "object");
assert(typeof OpportunitySearchTeamMember$ === "object");
assert(typeof OpportunitySort$ === "object");
assert(typeof OpportunitySummary$ === "object");
assert(typeof OpportunitySummaryView$ === "object");
assert(typeof Payload$ === "object");
assert(typeof PreferredContactWindow$ === "object");
assert(typeof ProfileNextStepsHistory$ === "object");
assert(typeof Project$ === "object");
assert(typeof ProjectDetails$ === "object");
assert(typeof ProjectSummary$ === "object");
assert(typeof ProjectView$ === "object");
assert(typeof ProspectingFromEngagementTaskSort$ === "object");
assert(typeof ProspectingInsights$ === "object");
assert(typeof ProspectingResult$ === "object");
assert(typeof ProspectingResultAws$ === "object");
assert(typeof ProspectingResultCustomer$ === "object");
assert(typeof ProspectingTaskSummary$ === "object");
assert(typeof PutSellingSystemSettingsRequest$ === "object");
assert(typeof PutSellingSystemSettingsResponse$ === "object");
assert(typeof Receiver$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RejectEngagementInvitationRequest$ === "object");
assert(typeof RelatedEntityIdentifiers$ === "object");
assert(typeof ResourceSnapshotJobSummary$ === "object");
assert(typeof ResourceSnapshotPayload$ === "object");
assert(typeof ResourceSnapshotSummary$ === "object");
assert(typeof SearchCustomerAccountsRequest$ === "object");
assert(typeof SearchCustomerAccountsResponse$ === "object");
assert(typeof SearchEngagementsRequest$ === "object");
assert(typeof SearchEngagementsResponse$ === "object");
assert(typeof SearchOpportunitiesRequest$ === "object");
assert(typeof SearchOpportunitiesResponse$ === "object");
assert(typeof SenderContact$ === "object");
assert(typeof SoftwareRevenue$ === "object");
assert(typeof SolutionBase$ === "object");
assert(typeof SolutionSort$ === "object");
assert(typeof SortObject$ === "object");
assert(typeof StartCustomerAccountBulkJobRequest$ === "object");
assert(typeof StartCustomerAccountBulkJobResponse$ === "object");
assert(typeof StartEngagementByAcceptingInvitationTaskRequest$ === "object");
assert(typeof StartEngagementByAcceptingInvitationTaskResponse$ === "object");
assert(typeof StartEngagementFromOpportunityTaskRequest$ === "object");
assert(typeof StartEngagementFromOpportunityTaskResponse$ === "object");
assert(typeof StartOpportunityBulkJobRequest$ === "object");
assert(typeof StartOpportunityBulkJobResponse$ === "object");
assert(typeof StartOpportunityFromEngagementTaskRequest$ === "object");
assert(typeof StartOpportunityFromEngagementTaskResponse$ === "object");
assert(typeof StartProspectingFromEngagementTaskRequest$ === "object");
assert(typeof StartProspectingFromEngagementTaskResponse$ === "object");
assert(typeof StartResourceSnapshotJobRequest$ === "object");
assert(typeof StopResourceSnapshotJobRequest$ === "object");
assert(typeof SubmitOpportunityRequest$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetCloseDateFilter$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCustomerAccountRequest$ === "object");
assert(typeof UpdateCustomerAccountResponse$ === "object");
assert(typeof UpdateEngagementContextPayload$ === "object");
assert(typeof UpdateEngagementContextRequest$ === "object");
assert(typeof UpdateEngagementContextResponse$ === "object");
assert(typeof UpdateLeadContext$ === "object");
assert(typeof UpdateOpportunityRequest$ === "object");
assert(typeof UpdateOpportunityResponse$ === "object");
assert(typeof ValidationExceptionError$ === "object");
// enums
assert(typeof AccessDeniedExceptionErrorCode === "object");
assert(typeof AggregatableField === "object");
assert(typeof AwsClosedLostReason === "object");
assert(typeof AwsFundingUsed === "object");
assert(typeof AwsMemberBusinessTitle === "object");
assert(typeof AwsOpportunityStage === "object");
assert(typeof AwsPartition === "object");
assert(typeof BulkFileFormat === "object");
assert(typeof BulkJobStatus === "object");
assert(typeof BulkOperationType === "object");
assert(typeof BulkRecordStatus === "object");
assert(typeof BulkReportStatus === "object");
assert(typeof BulkReportType === "object");
assert(typeof Channel === "object");
assert(typeof ClosedLostReason === "object");
assert(typeof CompetitorName === "object");
assert(typeof ContactWindow === "object");
assert(typeof CountryCode === "object");
assert(typeof CurrencyCode === "object");
assert(typeof CustomerAccountFailureReason === "object");
assert(typeof DayOfWeek === "object");
assert(typeof DeliveryModel === "object");
assert(typeof EngagementContextType === "object");
assert(typeof EngagementGroupSortName === "object");
assert(typeof EngagementInvitationPayloadType === "object");
assert(typeof EngagementScore === "object");
assert(typeof EngagementSearchFilterName === "object");
assert(typeof EngagementSearchSortName === "object");
assert(typeof EngagementSortName === "object");
assert(typeof EnrichmentStatus === "object");
assert(typeof ExpectedContractDurationTerm === "object");
assert(typeof FilterableField === "object");
assert(typeof Industry === "object");
assert(typeof InvitationStatus === "object");
assert(typeof InvolvementTypeChangeReason === "object");
assert(typeof ListTasksSortName === "object");
assert(typeof MarketingSource === "object");
assert(typeof NationalSecurity === "object");
assert(typeof OpportunityEngagementInvitationSortName === "object");
assert(typeof OpportunityOrigin === "object");
assert(typeof OpportunitySearchFilterName === "object");
assert(typeof OpportunitySearchSortName === "object");
assert(typeof OpportunitySortName === "object");
assert(typeof OpportunityType === "object");
assert(typeof ParticipantType === "object");
assert(typeof PaymentFrequency === "object");
assert(typeof PrimaryNeedFromAws === "object");
assert(typeof ProspectingFromEngagementTaskSortName === "object");
assert(typeof ProspectingTaskStatus === "object");
assert(typeof ReadinessLevel === "object");
assert(typeof ReasonCode === "object");
assert(typeof ReceiverResponsibility === "object");
assert(typeof RelatedEntityType === "object");
assert(typeof ResourceSnapshotJobStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof RevenueModel === "object");
assert(typeof ReviewStatus === "object");
assert(typeof SalesActivity === "object");
assert(typeof SalesInvolvementType === "object");
assert(typeof SearchEngagementScore === "object");
assert(typeof SolutionSortName === "object");
assert(typeof SolutionStatus === "object");
assert(typeof SortableField === "object");
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
assert(typeof paginateListCustomerAccountBulkJobResults === "function");
assert(typeof paginateListCustomerAccountBulkJobs === "function");
assert(typeof paginateListEngagementByAcceptingInvitationTasks === "function");
assert(typeof paginateListEngagementFromOpportunityTasks === "function");
assert(typeof paginateListEngagementGroups === "function");
assert(typeof paginateListEngagementInvitations === "function");
assert(typeof paginateListEngagementMembers === "function");
assert(typeof paginateListEngagementResourceAssociations === "function");
assert(typeof paginateListEngagements === "function");
assert(typeof paginateListOpportunities === "function");
assert(typeof paginateListOpportunityBulkJobResults === "function");
assert(typeof paginateListOpportunityBulkJobs === "function");
assert(typeof paginateListOpportunityFromEngagementTasks === "function");
assert(typeof paginateListProspectingFromEngagementTasks === "function");
assert(typeof paginateListResourceSnapshotJobs === "function");
assert(typeof paginateListResourceSnapshots === "function");
assert(typeof paginateListSolutions === "function");
assert(typeof paginateSearchCustomerAccounts === "function");
assert(typeof paginateSearchEngagements === "function");
assert(typeof paginateSearchOpportunities === "function");
console.log(`PartnerCentralSelling index test passed.`);
