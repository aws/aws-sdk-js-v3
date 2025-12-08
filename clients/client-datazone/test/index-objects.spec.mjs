import {
  AcceptPredictionsCommand,
  AcceptRuleBehavior,
  AcceptSubscriptionRequestCommand,
  AccessDeniedException,
  AddEntityOwnerCommand,
  AddPolicyGrantCommand,
  AssociateEnvironmentRoleCommand,
  AssociateGovernedTermsCommand,
  AttributeEntityType,
  AuthType,
  AuthenticationType,
  BatchGetAttributesMetadataCommand,
  BatchPutAttributesMetadataCommand,
  CancelMetadataGenerationRunCommand,
  CancelSubscriptionCommand,
  ChangeAction,
  ComputeEnvironments,
  ConfigurableActionTypeAuthorization,
  ConfigurationStatus,
  ConflictException,
  ConnectionScope,
  ConnectionStatus,
  ConnectionType,
  CreateAccountPoolCommand,
  CreateAssetCommand,
  CreateAssetFilterCommand,
  CreateAssetRevisionCommand,
  CreateAssetTypeCommand,
  CreateConnectionCommand,
  CreateDataProductCommand,
  CreateDataProductRevisionCommand,
  CreateDataSourceCommand,
  CreateDomainCommand,
  CreateDomainUnitCommand,
  CreateEnvironmentActionCommand,
  CreateEnvironmentBlueprintCommand,
  CreateEnvironmentCommand,
  CreateEnvironmentProfileCommand,
  CreateFormTypeCommand,
  CreateGlossaryCommand,
  CreateGlossaryTermCommand,
  CreateGroupProfileCommand,
  CreateListingChangeSetCommand,
  CreateProjectCommand,
  CreateProjectMembershipCommand,
  CreateProjectProfileCommand,
  CreateRuleCommand,
  CreateSubscriptionGrantCommand,
  CreateSubscriptionRequestCommand,
  CreateSubscriptionTargetCommand,
  CreateUserProfileCommand,
  DataAssetActivityStatus,
  DataProductItemType,
  DataProductStatus,
  DataSourceErrorType,
  DataSourceRunStatus,
  DataSourceRunType,
  DataSourceStatus,
  DataZone,
  DataZoneClient,
  DataZoneEntityType,
  DataZoneServiceException,
  DeleteAccountPoolCommand,
  DeleteAssetCommand,
  DeleteAssetFilterCommand,
  DeleteAssetTypeCommand,
  DeleteConnectionCommand,
  DeleteDataProductCommand,
  DeleteDataSourceCommand,
  DeleteDomainCommand,
  DeleteDomainUnitCommand,
  DeleteEnvironmentActionCommand,
  DeleteEnvironmentBlueprintCommand,
  DeleteEnvironmentBlueprintConfigurationCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentProfileCommand,
  DeleteFormTypeCommand,
  DeleteGlossaryCommand,
  DeleteGlossaryTermCommand,
  DeleteListingCommand,
  DeleteProjectCommand,
  DeleteProjectMembershipCommand,
  DeleteProjectProfileCommand,
  DeleteRuleCommand,
  DeleteSubscriptionGrantCommand,
  DeleteSubscriptionRequestCommand,
  DeleteSubscriptionTargetCommand,
  DeleteTimeSeriesDataPointsCommand,
  DeploymentMode,
  DeploymentStatus,
  DeploymentType,
  DisassociateEnvironmentRoleCommand,
  DisassociateGovernedTermsCommand,
  DomainStatus,
  DomainUnitDesignation,
  DomainVersion,
  EdgeDirection,
  EnableSetting,
  EntityType,
  EnvironmentStatus,
  FilterExpressionType,
  FilterStatus,
  FormTypeStatus,
  GetAccountPoolCommand,
  GetAssetCommand,
  GetAssetFilterCommand,
  GetAssetTypeCommand,
  GetConnectionCommand,
  GetDataExportConfigurationCommand,
  GetDataProductCommand,
  GetDataSourceCommand,
  GetDataSourceRunCommand,
  GetDomainCommand,
  GetDomainUnitCommand,
  GetEnvironmentActionCommand,
  GetEnvironmentBlueprintCommand,
  GetEnvironmentBlueprintConfigurationCommand,
  GetEnvironmentCommand,
  GetEnvironmentCredentialsCommand,
  GetEnvironmentProfileCommand,
  GetFormTypeCommand,
  GetGlossaryCommand,
  GetGlossaryTermCommand,
  GetGroupProfileCommand,
  GetIamPortalLoginUrlCommand,
  GetJobRunCommand,
  GetLineageEventCommand,
  GetLineageNodeCommand,
  GetListingCommand,
  GetMetadataGenerationRunCommand,
  GetProjectCommand,
  GetProjectProfileCommand,
  GetRuleCommand,
  GetSubscriptionCommand,
  GetSubscriptionGrantCommand,
  GetSubscriptionRequestDetailsCommand,
  GetSubscriptionTargetCommand,
  GetTimeSeriesDataPointCommand,
  GetUserProfileCommand,
  GlossaryStatus,
  GlossaryTermStatus,
  GlossaryUsageRestriction,
  GlueConnectionType,
  GovernanceType,
  GovernedEntityType,
  GroupProfileStatus,
  GroupSearchType,
  HyperPodOrchestrator,
  InternalServerException,
  InventorySearchScope,
  JobRunMode,
  JobRunStatus,
  JobType,
  LineageEventProcessingStatus,
  LineageImportStatus,
  ListAccountPoolsCommand,
  ListAccountsInAccountPoolCommand,
  ListAssetFiltersCommand,
  ListAssetRevisionsCommand,
  ListConnectionsCommand,
  ListDataProductRevisionsCommand,
  ListDataSourceRunActivitiesCommand,
  ListDataSourceRunsCommand,
  ListDataSourcesCommand,
  ListDomainUnitsForParentCommand,
  ListDomainsCommand,
  ListEntityOwnersCommand,
  ListEnvironmentActionsCommand,
  ListEnvironmentBlueprintConfigurationsCommand,
  ListEnvironmentBlueprintsCommand,
  ListEnvironmentProfilesCommand,
  ListEnvironmentsCommand,
  ListJobRunsCommand,
  ListLineageEventsCommand,
  ListLineageNodeHistoryCommand,
  ListMetadataGenerationRunsCommand,
  ListNotificationsCommand,
  ListPolicyGrantsCommand,
  ListProjectMembershipsCommand,
  ListProjectProfilesCommand,
  ListProjectsCommand,
  ListRulesCommand,
  ListSubscriptionGrantsCommand,
  ListSubscriptionRequestsCommand,
  ListSubscriptionTargetsCommand,
  ListSubscriptionsCommand,
  ListTagsForResourceCommand,
  ListTimeSeriesDataPointsCommand,
  ListingStatus,
  ManagedPolicyType,
  MetadataGenerationRunStatus,
  MetadataGenerationRunType,
  MetadataGenerationTargetType,
  NotificationResourceType,
  NotificationRole,
  NotificationType,
  OAuth2GrantType,
  OpenLineageRunState,
  OverallDeploymentStatus,
  PostLineageEventCommand,
  PostTimeSeriesDataPointsCommand,
  ProjectDesignation,
  ProjectStatus,
  Protocol,
  PutDataExportConfigurationCommand,
  PutEnvironmentBlueprintConfigurationCommand,
  RejectPredictionsCommand,
  RejectRuleBehavior,
  RejectSubscriptionRequestCommand,
  RemoveEntityOwnerCommand,
  RemovePolicyGrantCommand,
  ResolutionStrategy,
  ResourceNotFoundException,
  ResourceTagSource,
  RevokeSubscriptionCommand,
  RuleAction,
  RuleScopeSelectionMode,
  RuleTargetType,
  RuleType,
  S3Permission,
  SearchCommand,
  SearchGroupProfilesCommand,
  SearchListingsCommand,
  SearchOutputAdditionalAttribute,
  SearchTypesCommand,
  SearchUserProfilesCommand,
  SelfGrantStatus,
  ServiceQuotaExceededException,
  SortFieldAccountPool,
  SortFieldConnection,
  SortFieldProject,
  SortKey,
  SortOrder,
  StartDataSourceRunCommand,
  StartMetadataGenerationRunCommand,
  Status,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionRequestStatus,
  SubscriptionStatus,
  TagResourceCommand,
  TargetEntityType,
  TaskStatus,
  ThrottlingException,
  TimeSeriesEntityType,
  Timezone,
  TypesSearchScope,
  UnauthorizedException,
  UntagResourceCommand,
  UpdateAccountPoolCommand,
  UpdateAssetFilterCommand,
  UpdateConnectionCommand,
  UpdateDataSourceCommand,
  UpdateDomainCommand,
  UpdateDomainUnitCommand,
  UpdateEnvironmentActionCommand,
  UpdateEnvironmentBlueprintCommand,
  UpdateEnvironmentCommand,
  UpdateEnvironmentProfileCommand,
  UpdateGlossaryCommand,
  UpdateGlossaryTermCommand,
  UpdateGroupProfileCommand,
  UpdateProjectCommand,
  UpdateProjectProfileCommand,
  UpdateRootDomainUnitOwnerCommand,
  UpdateRuleCommand,
  UpdateSubscriptionGrantStatusCommand,
  UpdateSubscriptionRequestCommand,
  UpdateSubscriptionTargetCommand,
  UpdateUserProfileCommand,
  UserAssignment,
  UserDesignation,
  UserProfileStatus,
  UserProfileType,
  UserSearchType,
  UserType,
  ValidationException,
  paginateListAccountPools,
  paginateListAccountsInAccountPool,
  paginateListAssetFilters,
  paginateListAssetRevisions,
  paginateListConnections,
  paginateListDataProductRevisions,
  paginateListDataSourceRunActivities,
  paginateListDataSourceRuns,
  paginateListDataSources,
  paginateListDomainUnitsForParent,
  paginateListDomains,
  paginateListEntityOwners,
  paginateListEnvironmentActions,
  paginateListEnvironmentBlueprintConfigurations,
  paginateListEnvironmentBlueprints,
  paginateListEnvironmentProfiles,
  paginateListEnvironments,
  paginateListJobRuns,
  paginateListLineageEvents,
  paginateListLineageNodeHistory,
  paginateListMetadataGenerationRuns,
  paginateListNotifications,
  paginateListPolicyGrants,
  paginateListProjectMemberships,
  paginateListProjectProfiles,
  paginateListProjects,
  paginateListRules,
  paginateListSubscriptionGrants,
  paginateListSubscriptionRequests,
  paginateListSubscriptionTargets,
  paginateListSubscriptions,
  paginateListTimeSeriesDataPoints,
  paginateSearch,
  paginateSearchGroupProfiles,
  paginateSearchListings,
  paginateSearchTypes,
  paginateSearchUserProfiles,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DataZoneClient === "function");
assert(typeof DataZone === "function");
// commands
assert(typeof AcceptPredictionsCommand === "function");
assert(typeof AcceptSubscriptionRequestCommand === "function");
assert(typeof AddEntityOwnerCommand === "function");
assert(typeof AddPolicyGrantCommand === "function");
assert(typeof AssociateEnvironmentRoleCommand === "function");
assert(typeof AssociateGovernedTermsCommand === "function");
assert(typeof BatchGetAttributesMetadataCommand === "function");
assert(typeof BatchPutAttributesMetadataCommand === "function");
assert(typeof CancelMetadataGenerationRunCommand === "function");
assert(typeof CancelSubscriptionCommand === "function");
assert(typeof CreateAccountPoolCommand === "function");
assert(typeof CreateAssetCommand === "function");
assert(typeof CreateAssetFilterCommand === "function");
assert(typeof CreateAssetRevisionCommand === "function");
assert(typeof CreateAssetTypeCommand === "function");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateDataProductCommand === "function");
assert(typeof CreateDataProductRevisionCommand === "function");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomainUnitCommand === "function");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironmentActionCommand === "function");
assert(typeof CreateEnvironmentBlueprintCommand === "function");
assert(typeof CreateEnvironmentProfileCommand === "function");
assert(typeof CreateFormTypeCommand === "function");
assert(typeof CreateGlossaryCommand === "function");
assert(typeof CreateGlossaryTermCommand === "function");
assert(typeof CreateGroupProfileCommand === "function");
assert(typeof CreateListingChangeSetCommand === "function");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProjectMembershipCommand === "function");
assert(typeof CreateProjectProfileCommand === "function");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateSubscriptionGrantCommand === "function");
assert(typeof CreateSubscriptionRequestCommand === "function");
assert(typeof CreateSubscriptionTargetCommand === "function");
assert(typeof CreateUserProfileCommand === "function");
assert(typeof DeleteAccountPoolCommand === "function");
assert(typeof DeleteAssetCommand === "function");
assert(typeof DeleteAssetFilterCommand === "function");
assert(typeof DeleteAssetTypeCommand === "function");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteDataProductCommand === "function");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomainUnitCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironmentActionCommand === "function");
assert(typeof DeleteEnvironmentBlueprintCommand === "function");
assert(typeof DeleteEnvironmentBlueprintConfigurationCommand === "function");
assert(typeof DeleteEnvironmentProfileCommand === "function");
assert(typeof DeleteFormTypeCommand === "function");
assert(typeof DeleteGlossaryCommand === "function");
assert(typeof DeleteGlossaryTermCommand === "function");
assert(typeof DeleteListingCommand === "function");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProjectMembershipCommand === "function");
assert(typeof DeleteProjectProfileCommand === "function");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteSubscriptionGrantCommand === "function");
assert(typeof DeleteSubscriptionRequestCommand === "function");
assert(typeof DeleteSubscriptionTargetCommand === "function");
assert(typeof DeleteTimeSeriesDataPointsCommand === "function");
assert(typeof DisassociateEnvironmentRoleCommand === "function");
assert(typeof DisassociateGovernedTermsCommand === "function");
assert(typeof GetAccountPoolCommand === "function");
assert(typeof GetAssetCommand === "function");
assert(typeof GetAssetFilterCommand === "function");
assert(typeof GetAssetTypeCommand === "function");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetDataExportConfigurationCommand === "function");
assert(typeof GetDataProductCommand === "function");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDataSourceRunCommand === "function");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomainUnitCommand === "function");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironmentActionCommand === "function");
assert(typeof GetEnvironmentBlueprintCommand === "function");
assert(typeof GetEnvironmentBlueprintConfigurationCommand === "function");
assert(typeof GetEnvironmentCredentialsCommand === "function");
assert(typeof GetEnvironmentProfileCommand === "function");
assert(typeof GetFormTypeCommand === "function");
assert(typeof GetGlossaryCommand === "function");
assert(typeof GetGlossaryTermCommand === "function");
assert(typeof GetGroupProfileCommand === "function");
assert(typeof GetIamPortalLoginUrlCommand === "function");
assert(typeof GetJobRunCommand === "function");
assert(typeof GetLineageEventCommand === "function");
assert(typeof GetLineageNodeCommand === "function");
assert(typeof GetListingCommand === "function");
assert(typeof GetMetadataGenerationRunCommand === "function");
assert(typeof GetProjectCommand === "function");
assert(typeof GetProjectProfileCommand === "function");
assert(typeof GetRuleCommand === "function");
assert(typeof GetSubscriptionCommand === "function");
assert(typeof GetSubscriptionGrantCommand === "function");
assert(typeof GetSubscriptionRequestDetailsCommand === "function");
assert(typeof GetSubscriptionTargetCommand === "function");
assert(typeof GetTimeSeriesDataPointCommand === "function");
assert(typeof GetUserProfileCommand === "function");
assert(typeof ListAccountPoolsCommand === "function");
assert(typeof ListAccountsInAccountPoolCommand === "function");
assert(typeof ListAssetFiltersCommand === "function");
assert(typeof ListAssetRevisionsCommand === "function");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListDataProductRevisionsCommand === "function");
assert(typeof ListDataSourceRunActivitiesCommand === "function");
assert(typeof ListDataSourceRunsCommand === "function");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomainUnitsForParentCommand === "function");
assert(typeof ListEntityOwnersCommand === "function");
assert(typeof ListEnvironmentActionsCommand === "function");
assert(typeof ListEnvironmentBlueprintConfigurationsCommand === "function");
assert(typeof ListEnvironmentBlueprintsCommand === "function");
assert(typeof ListEnvironmentProfilesCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListJobRunsCommand === "function");
assert(typeof ListLineageEventsCommand === "function");
assert(typeof ListLineageNodeHistoryCommand === "function");
assert(typeof ListMetadataGenerationRunsCommand === "function");
assert(typeof ListNotificationsCommand === "function");
assert(typeof ListPolicyGrantsCommand === "function");
assert(typeof ListProjectMembershipsCommand === "function");
assert(typeof ListProjectProfilesCommand === "function");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListRulesCommand === "function");
assert(typeof ListSubscriptionGrantsCommand === "function");
assert(typeof ListSubscriptionRequestsCommand === "function");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptionTargetsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTimeSeriesDataPointsCommand === "function");
assert(typeof PostLineageEventCommand === "function");
assert(typeof PostTimeSeriesDataPointsCommand === "function");
assert(typeof PutDataExportConfigurationCommand === "function");
assert(typeof PutEnvironmentBlueprintConfigurationCommand === "function");
assert(typeof RejectPredictionsCommand === "function");
assert(typeof RejectSubscriptionRequestCommand === "function");
assert(typeof RemoveEntityOwnerCommand === "function");
assert(typeof RemovePolicyGrantCommand === "function");
assert(typeof RevokeSubscriptionCommand === "function");
assert(typeof SearchCommand === "function");
assert(typeof SearchGroupProfilesCommand === "function");
assert(typeof SearchListingsCommand === "function");
assert(typeof SearchTypesCommand === "function");
assert(typeof SearchUserProfilesCommand === "function");
assert(typeof StartDataSourceRunCommand === "function");
assert(typeof StartMetadataGenerationRunCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountPoolCommand === "function");
assert(typeof UpdateAssetFilterCommand === "function");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateDomainUnitCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironmentActionCommand === "function");
assert(typeof UpdateEnvironmentBlueprintCommand === "function");
assert(typeof UpdateEnvironmentProfileCommand === "function");
assert(typeof UpdateGlossaryCommand === "function");
assert(typeof UpdateGlossaryTermCommand === "function");
assert(typeof UpdateGroupProfileCommand === "function");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProjectProfileCommand === "function");
assert(typeof UpdateRootDomainUnitOwnerCommand === "function");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateSubscriptionGrantStatusCommand === "function");
assert(typeof UpdateSubscriptionRequestCommand === "function");
assert(typeof UpdateSubscriptionTargetCommand === "function");
assert(typeof UpdateUserProfileCommand === "function");
// enums
assert(typeof AcceptRuleBehavior === "object");
assert(typeof AttributeEntityType === "object");
assert(typeof AuthenticationType === "object");
assert(typeof AuthType === "object");
assert(typeof ChangeAction === "object");
assert(typeof ComputeEnvironments === "object");
assert(typeof ConfigurableActionTypeAuthorization === "object");
assert(typeof ConfigurationStatus === "object");
assert(typeof ConnectionScope === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof ConnectionType === "object");
assert(typeof DataAssetActivityStatus === "object");
assert(typeof DataProductItemType === "object");
assert(typeof DataProductStatus === "object");
assert(typeof DataSourceErrorType === "object");
assert(typeof DataSourceRunStatus === "object");
assert(typeof DataSourceRunType === "object");
assert(typeof DataSourceStatus === "object");
assert(typeof DataZoneEntityType === "object");
assert(typeof DeploymentMode === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DeploymentType === "object");
assert(typeof DomainStatus === "object");
assert(typeof DomainUnitDesignation === "object");
assert(typeof DomainVersion === "object");
assert(typeof EdgeDirection === "object");
assert(typeof EnableSetting === "object");
assert(typeof EntityType === "object");
assert(typeof EnvironmentStatus === "object");
assert(typeof FilterExpressionType === "object");
assert(typeof FilterStatus === "object");
assert(typeof FormTypeStatus === "object");
assert(typeof GlossaryStatus === "object");
assert(typeof GlossaryTermStatus === "object");
assert(typeof GlossaryUsageRestriction === "object");
assert(typeof GlueConnectionType === "object");
assert(typeof GovernanceType === "object");
assert(typeof GovernedEntityType === "object");
assert(typeof GroupProfileStatus === "object");
assert(typeof GroupSearchType === "object");
assert(typeof HyperPodOrchestrator === "object");
assert(typeof InventorySearchScope === "object");
assert(typeof JobRunMode === "object");
assert(typeof JobRunStatus === "object");
assert(typeof JobType === "object");
assert(typeof LineageEventProcessingStatus === "object");
assert(typeof LineageImportStatus === "object");
assert(typeof ListingStatus === "object");
assert(typeof ManagedPolicyType === "object");
assert(typeof MetadataGenerationRunStatus === "object");
assert(typeof MetadataGenerationRunType === "object");
assert(typeof MetadataGenerationTargetType === "object");
assert(typeof NotificationResourceType === "object");
assert(typeof NotificationRole === "object");
assert(typeof NotificationType === "object");
assert(typeof OAuth2GrantType === "object");
assert(typeof OpenLineageRunState === "object");
assert(typeof OverallDeploymentStatus === "object");
assert(typeof ProjectDesignation === "object");
assert(typeof ProjectStatus === "object");
assert(typeof Protocol === "object");
assert(typeof RejectRuleBehavior === "object");
assert(typeof ResolutionStrategy === "object");
assert(typeof ResourceTagSource === "object");
assert(typeof RuleAction === "object");
assert(typeof RuleScopeSelectionMode === "object");
assert(typeof RuleTargetType === "object");
assert(typeof RuleType === "object");
assert(typeof S3Permission === "object");
assert(typeof SearchOutputAdditionalAttribute === "object");
assert(typeof SelfGrantStatus === "object");
assert(typeof SortFieldAccountPool === "object");
assert(typeof SortFieldConnection === "object");
assert(typeof SortFieldProject === "object");
assert(typeof SortKey === "object");
assert(typeof SortOrder === "object");
assert(typeof Status === "object");
assert(typeof SubscriptionGrantOverallStatus === "object");
assert(typeof SubscriptionGrantStatus === "object");
assert(typeof SubscriptionRequestStatus === "object");
assert(typeof SubscriptionStatus === "object");
assert(typeof TargetEntityType === "object");
assert(typeof TaskStatus === "object");
assert(typeof TimeSeriesEntityType === "object");
assert(typeof Timezone === "object");
assert(typeof TypesSearchScope === "object");
assert(typeof UserAssignment === "object");
assert(typeof UserDesignation === "object");
assert(typeof UserProfileStatus === "object");
assert(typeof UserProfileType === "object");
assert(typeof UserSearchType === "object");
assert(typeof UserType === "object");
// errors
assert(AccessDeniedException.prototype instanceof DataZoneServiceException);
assert(ConflictException.prototype instanceof DataZoneServiceException);
assert(InternalServerException.prototype instanceof DataZoneServiceException);
assert(ResourceNotFoundException.prototype instanceof DataZoneServiceException);
assert(ServiceQuotaExceededException.prototype instanceof DataZoneServiceException);
assert(ThrottlingException.prototype instanceof DataZoneServiceException);
assert(UnauthorizedException.prototype instanceof DataZoneServiceException);
assert(ValidationException.prototype instanceof DataZoneServiceException);
assert(DataZoneServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccountPools === "function");
assert(typeof paginateListAccountsInAccountPool === "function");
assert(typeof paginateListAssetFilters === "function");
assert(typeof paginateListAssetRevisions === "function");
assert(typeof paginateListConnections === "function");
assert(typeof paginateListDataProductRevisions === "function");
assert(typeof paginateListDataSourceRunActivities === "function");
assert(typeof paginateListDataSourceRuns === "function");
assert(typeof paginateListDataSources === "function");
assert(typeof paginateListDomainUnitsForParent === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListEntityOwners === "function");
assert(typeof paginateListEnvironmentActions === "function");
assert(typeof paginateListEnvironmentBlueprintConfigurations === "function");
assert(typeof paginateListEnvironmentBlueprints === "function");
assert(typeof paginateListEnvironmentProfiles === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListJobRuns === "function");
assert(typeof paginateListLineageEvents === "function");
assert(typeof paginateListLineageNodeHistory === "function");
assert(typeof paginateListMetadataGenerationRuns === "function");
assert(typeof paginateListNotifications === "function");
assert(typeof paginateListPolicyGrants === "function");
assert(typeof paginateListProjectMemberships === "function");
assert(typeof paginateListProjectProfiles === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListRules === "function");
assert(typeof paginateListSubscriptionGrants === "function");
assert(typeof paginateListSubscriptionRequests === "function");
assert(typeof paginateListSubscriptionTargets === "function");
assert(typeof paginateListSubscriptions === "function");
assert(typeof paginateListTimeSeriesDataPoints === "function");
assert(typeof paginateSearch === "function");
assert(typeof paginateSearchGroupProfiles === "function");
assert(typeof paginateSearchListings === "function");
assert(typeof paginateSearchTypes === "function");
assert(typeof paginateSearchUserProfiles === "function");
console.log(`DataZone index test passed.`);
