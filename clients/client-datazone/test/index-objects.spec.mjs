import {
  AcceptChoice$,
  AcceptPredictions$,
  AcceptPredictionsCommand,
  AcceptPredictionsInput$,
  AcceptPredictionsOutput$,
  AcceptRule$,
  AcceptRuleBehavior,
  AcceptSubscriptionRequest$,
  AcceptSubscriptionRequestCommand,
  AcceptSubscriptionRequestInput$,
  AcceptSubscriptionRequestOutput$,
  AcceptedAssetScope$,
  AccessDeniedException,
  AccessDeniedException$,
  AccountInfo$,
  AccountPoolSummary$,
  AccountSource$,
  ActionParameters$,
  AddEntityOwner$,
  AddEntityOwnerCommand,
  AddEntityOwnerInput$,
  AddEntityOwnerOutput$,
  AddPolicyGrant$,
  AddPolicyGrantCommand,
  AddPolicyGrantInput$,
  AddPolicyGrantOutput$,
  AddToProjectMemberPoolPolicyGrantDetail$,
  AggregationListItem$,
  AggregationOutput$,
  AggregationOutputItem$,
  AllDomainUnitsGrantFilter$,
  AllUsersGrantFilter$,
  AmazonQPropertiesInput$,
  AmazonQPropertiesOutput$,
  AmazonQPropertiesPatch$,
  AssetFilterConfiguration$,
  AssetFilterSummary$,
  AssetInDataProductListingItem$,
  AssetItem$,
  AssetItemAdditionalAttributes$,
  AssetListing$,
  AssetListingDetails$,
  AssetListingItem$,
  AssetListingItemAdditionalAttributes$,
  AssetPermission$,
  AssetRevision$,
  AssetScope$,
  AssetTargetNameMap$,
  AssetTypeItem$,
  AssetTypesForRule$,
  AssociateEnvironmentRole$,
  AssociateEnvironmentRoleCommand,
  AssociateEnvironmentRoleInput$,
  AssociateEnvironmentRoleOutput$,
  AssociateGovernedTerms$,
  AssociateGovernedTermsCommand,
  AssociateGovernedTermsInput$,
  AssociateGovernedTermsOutput$,
  AthenaPropertiesInput$,
  AthenaPropertiesOutput$,
  AthenaPropertiesPatch$,
  AttributeEntityType,
  AttributeError$,
  AttributeInput$,
  AuthType,
  AuthenticationConfiguration$,
  AuthenticationConfigurationInput$,
  AuthenticationConfigurationPatch$,
  AuthenticationType,
  AuthorizationCodeProperties$,
  AwsAccount$,
  AwsConsoleLinkParameters$,
  AwsLocation$,
  BasicAuthenticationCredentials$,
  BatchGetAttributeOutput$,
  BatchGetAttributesMetadata$,
  BatchGetAttributesMetadataCommand,
  BatchGetAttributesMetadataInput$,
  BatchGetAttributesMetadataOutput$,
  BatchPutAttributeOutput$,
  BatchPutAttributesMetadata$,
  BatchPutAttributesMetadataCommand,
  BatchPutAttributesMetadataInput$,
  BatchPutAttributesMetadataOutput$,
  BusinessNameGenerationConfiguration$,
  CancelMetadataGenerationRun$,
  CancelMetadataGenerationRunCommand,
  CancelMetadataGenerationRunInput$,
  CancelMetadataGenerationRunOutput$,
  CancelSubscription$,
  CancelSubscriptionCommand,
  CancelSubscriptionInput$,
  CancelSubscriptionOutput$,
  ChangeAction,
  CloudFormationProperties$,
  ColumnFilterConfiguration$,
  ComputeEnvironments,
  ConfigurableActionParameter$,
  ConfigurableActionTypeAuthorization,
  ConfigurableEnvironmentAction$,
  ConfigurationStatus,
  ConflictException,
  ConflictException$,
  ConnectionCredentials$,
  ConnectionPropertiesInput$,
  ConnectionPropertiesOutput$,
  ConnectionPropertiesPatch$,
  ConnectionScope,
  ConnectionStatus,
  ConnectionSummary$,
  ConnectionType,
  CreateAccountPool$,
  CreateAccountPoolCommand,
  CreateAccountPoolInput$,
  CreateAccountPoolOutput$,
  CreateAsset$,
  CreateAssetCommand,
  CreateAssetFilter$,
  CreateAssetFilterCommand,
  CreateAssetFilterInput$,
  CreateAssetFilterOutput$,
  CreateAssetInput$,
  CreateAssetOutput$,
  CreateAssetRevision$,
  CreateAssetRevisionCommand,
  CreateAssetRevisionInput$,
  CreateAssetRevisionOutput$,
  CreateAssetType$,
  CreateAssetTypeCommand,
  CreateAssetTypeInput$,
  CreateAssetTypeOutput$,
  CreateAssetTypePolicyGrantDetail$,
  CreateConnection$,
  CreateConnectionCommand,
  CreateConnectionInput$,
  CreateConnectionOutput$,
  CreateDataProduct$,
  CreateDataProductCommand,
  CreateDataProductInput$,
  CreateDataProductOutput$,
  CreateDataProductRevision$,
  CreateDataProductRevisionCommand,
  CreateDataProductRevisionInput$,
  CreateDataProductRevisionOutput$,
  CreateDataSource$,
  CreateDataSourceCommand,
  CreateDataSourceInput$,
  CreateDataSourceOutput$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainInput$,
  CreateDomainOutput$,
  CreateDomainUnit$,
  CreateDomainUnitCommand,
  CreateDomainUnitInput$,
  CreateDomainUnitOutput$,
  CreateDomainUnitPolicyGrantDetail$,
  CreateEnvironment$,
  CreateEnvironmentAction$,
  CreateEnvironmentActionCommand,
  CreateEnvironmentActionInput$,
  CreateEnvironmentActionOutput$,
  CreateEnvironmentBlueprint$,
  CreateEnvironmentBlueprintCommand,
  CreateEnvironmentBlueprintInput$,
  CreateEnvironmentBlueprintOutput$,
  CreateEnvironmentCommand,
  CreateEnvironmentInput$,
  CreateEnvironmentOutput$,
  CreateEnvironmentProfile$,
  CreateEnvironmentProfileCommand,
  CreateEnvironmentProfileInput$,
  CreateEnvironmentProfileOutput$,
  CreateEnvironmentProfilePolicyGrantDetail$,
  CreateFormType$,
  CreateFormTypeCommand,
  CreateFormTypeInput$,
  CreateFormTypeOutput$,
  CreateFormTypePolicyGrantDetail$,
  CreateGlossary$,
  CreateGlossaryCommand,
  CreateGlossaryInput$,
  CreateGlossaryOutput$,
  CreateGlossaryPolicyGrantDetail$,
  CreateGlossaryTerm$,
  CreateGlossaryTermCommand,
  CreateGlossaryTermInput$,
  CreateGlossaryTermOutput$,
  CreateGroupProfile$,
  CreateGroupProfileCommand,
  CreateGroupProfileInput$,
  CreateGroupProfileOutput$,
  CreateListingChangeSet$,
  CreateListingChangeSetCommand,
  CreateListingChangeSetInput$,
  CreateListingChangeSetOutput$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectFromProjectProfilePolicyGrantDetail$,
  CreateProjectInput$,
  CreateProjectMembership$,
  CreateProjectMembershipCommand,
  CreateProjectMembershipInput$,
  CreateProjectMembershipOutput$,
  CreateProjectOutput$,
  CreateProjectPolicyGrantDetail$,
  CreateProjectProfile$,
  CreateProjectProfileCommand,
  CreateProjectProfileInput$,
  CreateProjectProfileOutput$,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleInput$,
  CreateRuleOutput$,
  CreateSubscriptionGrant$,
  CreateSubscriptionGrantCommand,
  CreateSubscriptionGrantInput$,
  CreateSubscriptionGrantOutput$,
  CreateSubscriptionRequest$,
  CreateSubscriptionRequestCommand,
  CreateSubscriptionRequestInput$,
  CreateSubscriptionRequestOutput$,
  CreateSubscriptionTarget$,
  CreateSubscriptionTargetCommand,
  CreateSubscriptionTargetInput$,
  CreateSubscriptionTargetOutput$,
  CreateUserProfile$,
  CreateUserProfileCommand,
  CreateUserProfileInput$,
  CreateUserProfileOutput$,
  CustomAccountPoolHandler$,
  CustomParameter$,
  DataAssetActivityStatus,
  DataProductItem$,
  DataProductItemAdditionalAttributes$,
  DataProductItemType,
  DataProductListing$,
  DataProductListingItem$,
  DataProductListingItemAdditionalAttributes$,
  DataProductResultItem$,
  DataProductRevision$,
  DataProductStatus,
  DataSourceConfigurationInput$,
  DataSourceConfigurationOutput$,
  DataSourceErrorMessage$,
  DataSourceErrorType,
  DataSourceRunActivity$,
  DataSourceRunLineageSummary$,
  DataSourceRunStatus,
  DataSourceRunSummary$,
  DataSourceRunType,
  DataSourceStatus,
  DataSourceSummary$,
  DataZone,
  DataZoneClient,
  DataZoneEntityType,
  DataZoneServiceException,
  DeleteAccountPool$,
  DeleteAccountPoolCommand,
  DeleteAccountPoolInput$,
  DeleteAccountPoolOutput$,
  DeleteAsset$,
  DeleteAssetCommand,
  DeleteAssetFilter$,
  DeleteAssetFilterCommand,
  DeleteAssetFilterInput$,
  DeleteAssetInput$,
  DeleteAssetOutput$,
  DeleteAssetType$,
  DeleteAssetTypeCommand,
  DeleteAssetTypeInput$,
  DeleteAssetTypeOutput$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionInput$,
  DeleteConnectionOutput$,
  DeleteDataProduct$,
  DeleteDataProductCommand,
  DeleteDataProductInput$,
  DeleteDataProductOutput$,
  DeleteDataSource$,
  DeleteDataSourceCommand,
  DeleteDataSourceInput$,
  DeleteDataSourceOutput$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainInput$,
  DeleteDomainOutput$,
  DeleteDomainUnit$,
  DeleteDomainUnitCommand,
  DeleteDomainUnitInput$,
  DeleteDomainUnitOutput$,
  DeleteEnvironment$,
  DeleteEnvironmentAction$,
  DeleteEnvironmentActionCommand,
  DeleteEnvironmentActionInput$,
  DeleteEnvironmentBlueprint$,
  DeleteEnvironmentBlueprintCommand,
  DeleteEnvironmentBlueprintConfiguration$,
  DeleteEnvironmentBlueprintConfigurationCommand,
  DeleteEnvironmentBlueprintConfigurationInput$,
  DeleteEnvironmentBlueprintConfigurationOutput$,
  DeleteEnvironmentBlueprintInput$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentInput$,
  DeleteEnvironmentProfile$,
  DeleteEnvironmentProfileCommand,
  DeleteEnvironmentProfileInput$,
  DeleteFormType$,
  DeleteFormTypeCommand,
  DeleteFormTypeInput$,
  DeleteFormTypeOutput$,
  DeleteGlossary$,
  DeleteGlossaryCommand,
  DeleteGlossaryInput$,
  DeleteGlossaryOutput$,
  DeleteGlossaryTerm$,
  DeleteGlossaryTermCommand,
  DeleteGlossaryTermInput$,
  DeleteGlossaryTermOutput$,
  DeleteListing$,
  DeleteListingCommand,
  DeleteListingInput$,
  DeleteListingOutput$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectInput$,
  DeleteProjectMembership$,
  DeleteProjectMembershipCommand,
  DeleteProjectMembershipInput$,
  DeleteProjectMembershipOutput$,
  DeleteProjectOutput$,
  DeleteProjectProfile$,
  DeleteProjectProfileCommand,
  DeleteProjectProfileInput$,
  DeleteProjectProfileOutput$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleInput$,
  DeleteRuleOutput$,
  DeleteSubscriptionGrant$,
  DeleteSubscriptionGrantCommand,
  DeleteSubscriptionGrantInput$,
  DeleteSubscriptionGrantOutput$,
  DeleteSubscriptionRequest$,
  DeleteSubscriptionRequestCommand,
  DeleteSubscriptionRequestInput$,
  DeleteSubscriptionTarget$,
  DeleteSubscriptionTargetCommand,
  DeleteSubscriptionTargetInput$,
  DeleteTimeSeriesDataPoints$,
  DeleteTimeSeriesDataPointsCommand,
  DeleteTimeSeriesDataPointsInput$,
  DeleteTimeSeriesDataPointsOutput$,
  Deployment$,
  DeploymentMode,
  DeploymentProperties$,
  DeploymentStatus,
  DeploymentType,
  DetailedGlossaryTerm$,
  DisassociateEnvironmentRole$,
  DisassociateEnvironmentRoleCommand,
  DisassociateEnvironmentRoleInput$,
  DisassociateEnvironmentRoleOutput$,
  DisassociateGovernedTerms$,
  DisassociateGovernedTermsCommand,
  DisassociateGovernedTermsInput$,
  DisassociateGovernedTermsOutput$,
  DomainStatus,
  DomainSummary$,
  DomainUnitDesignation,
  DomainUnitFilterForProject$,
  DomainUnitGrantFilter$,
  DomainUnitGroupProperties$,
  DomainUnitOwnerProperties$,
  DomainUnitPolicyGrantPrincipal$,
  DomainUnitSummary$,
  DomainUnitTarget$,
  DomainUnitUserProperties$,
  DomainVersion,
  EdgeDirection,
  EnableSetting,
  EncryptionConfiguration$,
  EntityType,
  EnvironmentActionSummary$,
  EnvironmentBlueprintConfigurationItem$,
  EnvironmentBlueprintSummary$,
  EnvironmentConfiguration$,
  EnvironmentConfigurationParameter$,
  EnvironmentConfigurationParametersDetails$,
  EnvironmentConfigurationUserParameter$,
  EnvironmentDeploymentDetails$,
  EnvironmentError$,
  EnvironmentParameter$,
  EnvironmentProfileSummary$,
  EnvironmentResolvedAccount$,
  EnvironmentStatus,
  EnvironmentSummary$,
  EqualToExpression$,
  EventSummary$,
  FailureCause$,
  Filter$,
  FilterClause$,
  FilterExpression$,
  FilterExpressionType,
  FilterStatus,
  FormEntryInput$,
  FormEntryOutput$,
  FormInput$,
  FormOutput$,
  FormTypeData$,
  FormTypeStatus,
  GetAccountPool$,
  GetAccountPoolCommand,
  GetAccountPoolInput$,
  GetAccountPoolOutput$,
  GetAsset$,
  GetAssetCommand,
  GetAssetFilter$,
  GetAssetFilterCommand,
  GetAssetFilterInput$,
  GetAssetFilterOutput$,
  GetAssetInput$,
  GetAssetOutput$,
  GetAssetType$,
  GetAssetTypeCommand,
  GetAssetTypeInput$,
  GetAssetTypeOutput$,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionInput$,
  GetConnectionOutput$,
  GetDataExportConfiguration$,
  GetDataExportConfigurationCommand,
  GetDataExportConfigurationInput$,
  GetDataExportConfigurationOutput$,
  GetDataProduct$,
  GetDataProductCommand,
  GetDataProductInput$,
  GetDataProductOutput$,
  GetDataSource$,
  GetDataSourceCommand,
  GetDataSourceInput$,
  GetDataSourceOutput$,
  GetDataSourceRun$,
  GetDataSourceRunCommand,
  GetDataSourceRunInput$,
  GetDataSourceRunOutput$,
  GetDomain$,
  GetDomainCommand,
  GetDomainInput$,
  GetDomainOutput$,
  GetDomainUnit$,
  GetDomainUnitCommand,
  GetDomainUnitInput$,
  GetDomainUnitOutput$,
  GetEnvironment$,
  GetEnvironmentAction$,
  GetEnvironmentActionCommand,
  GetEnvironmentActionInput$,
  GetEnvironmentActionOutput$,
  GetEnvironmentBlueprint$,
  GetEnvironmentBlueprintCommand,
  GetEnvironmentBlueprintConfiguration$,
  GetEnvironmentBlueprintConfigurationCommand,
  GetEnvironmentBlueprintConfigurationInput$,
  GetEnvironmentBlueprintConfigurationOutput$,
  GetEnvironmentBlueprintInput$,
  GetEnvironmentBlueprintOutput$,
  GetEnvironmentCommand,
  GetEnvironmentCredentials$,
  GetEnvironmentCredentialsCommand,
  GetEnvironmentCredentialsInput$,
  GetEnvironmentCredentialsOutput$,
  GetEnvironmentInput$,
  GetEnvironmentOutput$,
  GetEnvironmentProfile$,
  GetEnvironmentProfileCommand,
  GetEnvironmentProfileInput$,
  GetEnvironmentProfileOutput$,
  GetFormType$,
  GetFormTypeCommand,
  GetFormTypeInput$,
  GetFormTypeOutput$,
  GetGlossary$,
  GetGlossaryCommand,
  GetGlossaryInput$,
  GetGlossaryOutput$,
  GetGlossaryTerm$,
  GetGlossaryTermCommand,
  GetGlossaryTermInput$,
  GetGlossaryTermOutput$,
  GetGroupProfile$,
  GetGroupProfileCommand,
  GetGroupProfileInput$,
  GetGroupProfileOutput$,
  GetIamPortalLoginUrl$,
  GetIamPortalLoginUrlCommand,
  GetIamPortalLoginUrlInput$,
  GetIamPortalLoginUrlOutput$,
  GetJobRun$,
  GetJobRunCommand,
  GetJobRunInput$,
  GetJobRunOutput$,
  GetLineageEvent$,
  GetLineageEventCommand,
  GetLineageEventInput$,
  GetLineageEventOutput$,
  GetLineageNode$,
  GetLineageNodeCommand,
  GetLineageNodeInput$,
  GetLineageNodeOutput$,
  GetListing$,
  GetListingCommand,
  GetListingInput$,
  GetListingOutput$,
  GetMetadataGenerationRun$,
  GetMetadataGenerationRunCommand,
  GetMetadataGenerationRunInput$,
  GetMetadataGenerationRunOutput$,
  GetProject$,
  GetProjectCommand,
  GetProjectInput$,
  GetProjectOutput$,
  GetProjectProfile$,
  GetProjectProfileCommand,
  GetProjectProfileInput$,
  GetProjectProfileOutput$,
  GetRule$,
  GetRuleCommand,
  GetRuleInput$,
  GetRuleOutput$,
  GetSubscription$,
  GetSubscriptionCommand,
  GetSubscriptionGrant$,
  GetSubscriptionGrantCommand,
  GetSubscriptionGrantInput$,
  GetSubscriptionGrantOutput$,
  GetSubscriptionInput$,
  GetSubscriptionOutput$,
  GetSubscriptionRequestDetails$,
  GetSubscriptionRequestDetailsCommand,
  GetSubscriptionRequestDetailsInput$,
  GetSubscriptionRequestDetailsOutput$,
  GetSubscriptionTarget$,
  GetSubscriptionTargetCommand,
  GetSubscriptionTargetInput$,
  GetSubscriptionTargetOutput$,
  GetTimeSeriesDataPoint$,
  GetTimeSeriesDataPointCommand,
  GetTimeSeriesDataPointInput$,
  GetTimeSeriesDataPointOutput$,
  GetUserProfile$,
  GetUserProfileCommand,
  GetUserProfileInput$,
  GetUserProfileOutput$,
  GlossaryItem$,
  GlossaryItemAdditionalAttributes$,
  GlossaryStatus,
  GlossaryTermEnforcementDetail$,
  GlossaryTermItem$,
  GlossaryTermItemAdditionalAttributes$,
  GlossaryTermStatus,
  GlossaryUsageRestriction,
  GlueConnection$,
  GlueConnectionInput$,
  GlueConnectionPatch$,
  GlueConnectionType,
  GlueOAuth2Credentials$,
  GluePropertiesInput$,
  GluePropertiesOutput$,
  GluePropertiesPatch$,
  GlueRunConfigurationInput$,
  GlueRunConfigurationOutput$,
  GlueSelfGrantStatusOutput$,
  GovernanceType,
  GovernedEntityType,
  GrantedEntity$,
  GrantedEntityInput$,
  GreaterThanExpression$,
  GreaterThanOrEqualToExpression$,
  GroupDetails$,
  GroupPolicyGrantPrincipal$,
  GroupProfileStatus,
  GroupProfileSummary$,
  GroupSearchType,
  HyperPodOrchestrator,
  HyperPodPropertiesInput$,
  HyperPodPropertiesOutput$,
  IamPropertiesInput$,
  IamPropertiesOutput$,
  IamPropertiesPatch$,
  IamUserProfileDetails$,
  Import$,
  InExpression$,
  InternalServerException,
  InternalServerException$,
  InventorySearchScope,
  IsNotNullExpression$,
  IsNullExpression$,
  JobRunDetails$,
  JobRunError$,
  JobRunMode,
  JobRunStatus,
  JobRunSummary$,
  JobType,
  LakeFormationConfiguration$,
  LessThanExpression$,
  LessThanOrEqualToExpression$,
  LikeExpression$,
  LineageEventProcessingStatus,
  LineageEventSummary$,
  LineageImportStatus,
  LineageInfo$,
  LineageNodeReference$,
  LineageNodeSummary$,
  LineageNodeTypeItem$,
  LineageRunDetails$,
  LineageSqlQueryRunDetails$,
  LineageSyncSchedule$,
  ListAccountPools$,
  ListAccountPoolsCommand,
  ListAccountPoolsInput$,
  ListAccountPoolsOutput$,
  ListAccountsInAccountPool$,
  ListAccountsInAccountPoolCommand,
  ListAccountsInAccountPoolInput$,
  ListAccountsInAccountPoolOutput$,
  ListAssetFilters$,
  ListAssetFiltersCommand,
  ListAssetFiltersInput$,
  ListAssetFiltersOutput$,
  ListAssetRevisions$,
  ListAssetRevisionsCommand,
  ListAssetRevisionsInput$,
  ListAssetRevisionsOutput$,
  ListConnections$,
  ListConnectionsCommand,
  ListConnectionsInput$,
  ListConnectionsOutput$,
  ListDataProductRevisions$,
  ListDataProductRevisionsCommand,
  ListDataProductRevisionsInput$,
  ListDataProductRevisionsOutput$,
  ListDataSourceRunActivities$,
  ListDataSourceRunActivitiesCommand,
  ListDataSourceRunActivitiesInput$,
  ListDataSourceRunActivitiesOutput$,
  ListDataSourceRuns$,
  ListDataSourceRunsCommand,
  ListDataSourceRunsInput$,
  ListDataSourceRunsOutput$,
  ListDataSources$,
  ListDataSourcesCommand,
  ListDataSourcesInput$,
  ListDataSourcesOutput$,
  ListDomainUnitsForParent$,
  ListDomainUnitsForParentCommand,
  ListDomainUnitsForParentInput$,
  ListDomainUnitsForParentOutput$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsInput$,
  ListDomainsOutput$,
  ListEntityOwners$,
  ListEntityOwnersCommand,
  ListEntityOwnersInput$,
  ListEntityOwnersOutput$,
  ListEnvironmentActions$,
  ListEnvironmentActionsCommand,
  ListEnvironmentActionsInput$,
  ListEnvironmentActionsOutput$,
  ListEnvironmentBlueprintConfigurations$,
  ListEnvironmentBlueprintConfigurationsCommand,
  ListEnvironmentBlueprintConfigurationsInput$,
  ListEnvironmentBlueprintConfigurationsOutput$,
  ListEnvironmentBlueprints$,
  ListEnvironmentBlueprintsCommand,
  ListEnvironmentBlueprintsInput$,
  ListEnvironmentBlueprintsOutput$,
  ListEnvironmentProfiles$,
  ListEnvironmentProfilesCommand,
  ListEnvironmentProfilesInput$,
  ListEnvironmentProfilesOutput$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsInput$,
  ListEnvironmentsOutput$,
  ListJobRuns$,
  ListJobRunsCommand,
  ListJobRunsInput$,
  ListJobRunsOutput$,
  ListLineageEvents$,
  ListLineageEventsCommand,
  ListLineageEventsInput$,
  ListLineageEventsOutput$,
  ListLineageNodeHistory$,
  ListLineageNodeHistoryCommand,
  ListLineageNodeHistoryInput$,
  ListLineageNodeHistoryOutput$,
  ListMetadataGenerationRuns$,
  ListMetadataGenerationRunsCommand,
  ListMetadataGenerationRunsInput$,
  ListMetadataGenerationRunsOutput$,
  ListNotifications$,
  ListNotificationsCommand,
  ListNotificationsInput$,
  ListNotificationsOutput$,
  ListPolicyGrants$,
  ListPolicyGrantsCommand,
  ListPolicyGrantsInput$,
  ListPolicyGrantsOutput$,
  ListProjectMemberships$,
  ListProjectMembershipsCommand,
  ListProjectMembershipsInput$,
  ListProjectMembershipsOutput$,
  ListProjectProfiles$,
  ListProjectProfilesCommand,
  ListProjectProfilesInput$,
  ListProjectProfilesOutput$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsInput$,
  ListProjectsOutput$,
  ListRules$,
  ListRulesCommand,
  ListRulesInput$,
  ListRulesOutput$,
  ListSubscriptionGrants$,
  ListSubscriptionGrantsCommand,
  ListSubscriptionGrantsInput$,
  ListSubscriptionGrantsOutput$,
  ListSubscriptionRequests$,
  ListSubscriptionRequestsCommand,
  ListSubscriptionRequestsInput$,
  ListSubscriptionRequestsOutput$,
  ListSubscriptionTargets$,
  ListSubscriptionTargetsCommand,
  ListSubscriptionTargetsInput$,
  ListSubscriptionTargetsOutput$,
  ListSubscriptions$,
  ListSubscriptionsCommand,
  ListSubscriptionsInput$,
  ListSubscriptionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTimeSeriesDataPoints$,
  ListTimeSeriesDataPointsCommand,
  ListTimeSeriesDataPointsInput$,
  ListTimeSeriesDataPointsOutput$,
  ListingItem$,
  ListingRevision$,
  ListingRevisionInput$,
  ListingStatus,
  ListingSummary$,
  ListingSummaryItem$,
  ManagedEndpointCredentials$,
  ManagedPolicyType,
  MatchOffset$,
  MatchRationaleItem$,
  Member$,
  MemberDetails$,
  MetadataFormEnforcementDetail$,
  MetadataFormReference$,
  MetadataFormSummary$,
  MetadataGenerationRunItem$,
  MetadataGenerationRunStatus,
  MetadataGenerationRunTarget$,
  MetadataGenerationRunType,
  MetadataGenerationRunTypeStat$,
  MetadataGenerationTargetType,
  MlflowPropertiesInput$,
  MlflowPropertiesOutput$,
  MlflowPropertiesPatch$,
  Model$,
  NameIdentifier$,
  NotEqualToExpression$,
  NotInExpression$,
  NotLikeExpression$,
  NotificationOutput$,
  NotificationResource$,
  NotificationResourceType,
  NotificationRole,
  NotificationType,
  OAuth2ClientApplication$,
  OAuth2GrantType,
  OAuth2Properties$,
  OpenLineageRunEventSummary$,
  OpenLineageRunState,
  OverallDeploymentStatus,
  OverrideDomainUnitOwnersPolicyGrantDetail$,
  OverrideProjectOwnersPolicyGrantDetail$,
  OwnerGroupProperties$,
  OwnerGroupPropertiesOutput$,
  OwnerProperties$,
  OwnerPropertiesOutput$,
  OwnerUserProperties$,
  OwnerUserPropertiesOutput$,
  Permissions$,
  PhysicalConnectionRequirements$,
  PhysicalEndpoint$,
  PolicyGrantDetail$,
  PolicyGrantMember$,
  PolicyGrantPrincipal$,
  PostLineageEvent$,
  PostLineageEventCommand,
  PostLineageEventInput$,
  PostLineageEventOutput$,
  PostTimeSeriesDataPoints$,
  PostTimeSeriesDataPointsCommand,
  PostTimeSeriesDataPointsInput$,
  PostTimeSeriesDataPointsOutput$,
  PredictionConfiguration$,
  ProjectDeletionError$,
  ProjectDesignation,
  ProjectGrantFilter$,
  ProjectMember$,
  ProjectPolicyGrantPrincipal$,
  ProjectProfileSummary$,
  ProjectStatus,
  ProjectSummary$,
  ProjectsForRule$,
  Protocol,
  ProvisioningConfiguration$,
  ProvisioningProperties$,
  PutDataExportConfiguration$,
  PutDataExportConfigurationCommand,
  PutDataExportConfigurationInput$,
  PutDataExportConfigurationOutput$,
  PutEnvironmentBlueprintConfiguration$,
  PutEnvironmentBlueprintConfigurationCommand,
  PutEnvironmentBlueprintConfigurationInput$,
  PutEnvironmentBlueprintConfigurationOutput$,
  RecommendationConfiguration$,
  RedshiftClusterStorage$,
  RedshiftCredentialConfiguration$,
  RedshiftCredentials$,
  RedshiftLineageSyncConfigurationInput$,
  RedshiftLineageSyncConfigurationOutput$,
  RedshiftPropertiesInput$,
  RedshiftPropertiesOutput$,
  RedshiftPropertiesPatch$,
  RedshiftRunConfigurationInput$,
  RedshiftRunConfigurationOutput$,
  RedshiftSelfGrantStatusOutput$,
  RedshiftServerlessStorage$,
  RedshiftStorage$,
  RedshiftStorageProperties$,
  Region$,
  RejectChoice$,
  RejectPredictions$,
  RejectPredictionsCommand,
  RejectPredictionsInput$,
  RejectPredictionsOutput$,
  RejectRule$,
  RejectRuleBehavior,
  RejectSubscriptionRequest$,
  RejectSubscriptionRequestCommand,
  RejectSubscriptionRequestInput$,
  RejectSubscriptionRequestOutput$,
  RelationalFilterConfiguration$,
  RemoveEntityOwner$,
  RemoveEntityOwnerCommand,
  RemoveEntityOwnerInput$,
  RemoveEntityOwnerOutput$,
  RemovePolicyGrant$,
  RemovePolicyGrantCommand,
  RemovePolicyGrantInput$,
  RemovePolicyGrantOutput$,
  ResolutionStrategy,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  ResourceTagParameter$,
  ResourceTagSource,
  RevokeSubscription$,
  RevokeSubscriptionCommand,
  RevokeSubscriptionInput$,
  RevokeSubscriptionOutput$,
  RowFilter$,
  RowFilterConfiguration$,
  RowFilterExpression$,
  RuleAction,
  RuleDetail$,
  RuleScope$,
  RuleScopeSelectionMode,
  RuleSummary$,
  RuleTarget$,
  RuleTargetType,
  RuleType,
  RunStatisticsForAssets$,
  S3Permission,
  S3PropertiesInput$,
  S3PropertiesOutput$,
  S3PropertiesPatch$,
  SageMakerRunConfigurationInput$,
  SageMakerRunConfigurationOutput$,
  ScheduleConfiguration$,
  Search$,
  SearchCommand,
  SearchGroupProfiles$,
  SearchGroupProfilesCommand,
  SearchGroupProfilesInput$,
  SearchGroupProfilesOutput$,
  SearchInItem$,
  SearchInput$,
  SearchInventoryResultItem$,
  SearchListings$,
  SearchListingsCommand,
  SearchListingsInput$,
  SearchListingsOutput$,
  SearchOutput$,
  SearchOutputAdditionalAttribute,
  SearchResultItem$,
  SearchSort$,
  SearchTypes$,
  SearchTypesCommand,
  SearchTypesInput$,
  SearchTypesOutput$,
  SearchTypesResultItem$,
  SearchUserProfiles$,
  SearchUserProfilesCommand,
  SearchUserProfilesInput$,
  SearchUserProfilesOutput$,
  SelfGrantStatus,
  SelfGrantStatusDetail$,
  SelfGrantStatusOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SingleSignOn$,
  SortFieldAccountPool,
  SortFieldConnection,
  SortFieldProject,
  SortKey,
  SortOrder,
  SparkEmrPropertiesInput$,
  SparkEmrPropertiesOutput$,
  SparkEmrPropertiesPatch$,
  SparkGlueArgs$,
  SparkGluePropertiesInput$,
  SparkGluePropertiesOutput$,
  SsoUserProfileDetails$,
  StartDataSourceRun$,
  StartDataSourceRunCommand,
  StartDataSourceRunInput$,
  StartDataSourceRunOutput$,
  StartMetadataGenerationRun$,
  StartMetadataGenerationRunCommand,
  StartMetadataGenerationRunInput$,
  StartMetadataGenerationRunOutput$,
  Status,
  SubscribedAsset$,
  SubscribedAssetListing$,
  SubscribedGroup$,
  SubscribedGroupInput$,
  SubscribedListing$,
  SubscribedListingInput$,
  SubscribedListingItem$,
  SubscribedPrincipal$,
  SubscribedPrincipalInput$,
  SubscribedProductListing$,
  SubscribedProject$,
  SubscribedProjectInput$,
  SubscribedUser$,
  SubscribedUserInput$,
  SubscriptionGrantOverallStatus,
  SubscriptionGrantStatus,
  SubscriptionGrantSummary$,
  SubscriptionRequestStatus,
  SubscriptionRequestSummary$,
  SubscriptionStatus,
  SubscriptionSummary$,
  SubscriptionTargetForm$,
  SubscriptionTargetSummary$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetEntityType,
  TaskStatus,
  TermRelations$,
  TextMatchItem$,
  ThrottlingException,
  ThrottlingException$,
  TimeSeriesDataPointFormInput$,
  TimeSeriesDataPointFormOutput$,
  TimeSeriesDataPointSummaryFormOutput$,
  TimeSeriesEntityType,
  Timezone,
  Topic$,
  TypesSearchScope,
  UnauthorizedException,
  UnauthorizedException$,
  Unit$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccountPool$,
  UpdateAccountPoolCommand,
  UpdateAccountPoolInput$,
  UpdateAccountPoolOutput$,
  UpdateAssetFilter$,
  UpdateAssetFilterCommand,
  UpdateAssetFilterInput$,
  UpdateAssetFilterOutput$,
  UpdateConnection$,
  UpdateConnectionCommand,
  UpdateConnectionInput$,
  UpdateConnectionOutput$,
  UpdateDataSource$,
  UpdateDataSourceCommand,
  UpdateDataSourceInput$,
  UpdateDataSourceOutput$,
  UpdateDomain$,
  UpdateDomainCommand,
  UpdateDomainInput$,
  UpdateDomainOutput$,
  UpdateDomainUnit$,
  UpdateDomainUnitCommand,
  UpdateDomainUnitInput$,
  UpdateDomainUnitOutput$,
  UpdateEnvironment$,
  UpdateEnvironmentAction$,
  UpdateEnvironmentActionCommand,
  UpdateEnvironmentActionInput$,
  UpdateEnvironmentActionOutput$,
  UpdateEnvironmentBlueprint$,
  UpdateEnvironmentBlueprintCommand,
  UpdateEnvironmentBlueprintInput$,
  UpdateEnvironmentBlueprintOutput$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentInput$,
  UpdateEnvironmentOutput$,
  UpdateEnvironmentProfile$,
  UpdateEnvironmentProfileCommand,
  UpdateEnvironmentProfileInput$,
  UpdateEnvironmentProfileOutput$,
  UpdateGlossary$,
  UpdateGlossaryCommand,
  UpdateGlossaryInput$,
  UpdateGlossaryOutput$,
  UpdateGlossaryTerm$,
  UpdateGlossaryTermCommand,
  UpdateGlossaryTermInput$,
  UpdateGlossaryTermOutput$,
  UpdateGroupProfile$,
  UpdateGroupProfileCommand,
  UpdateGroupProfileInput$,
  UpdateGroupProfileOutput$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectInput$,
  UpdateProjectOutput$,
  UpdateProjectProfile$,
  UpdateProjectProfileCommand,
  UpdateProjectProfileInput$,
  UpdateProjectProfileOutput$,
  UpdateRootDomainUnitOwner$,
  UpdateRootDomainUnitOwnerCommand,
  UpdateRootDomainUnitOwnerInput$,
  UpdateRootDomainUnitOwnerOutput$,
  UpdateRule$,
  UpdateRuleCommand,
  UpdateRuleInput$,
  UpdateRuleOutput$,
  UpdateSubscriptionGrantStatus$,
  UpdateSubscriptionGrantStatusCommand,
  UpdateSubscriptionGrantStatusInput$,
  UpdateSubscriptionGrantStatusOutput$,
  UpdateSubscriptionRequest$,
  UpdateSubscriptionRequestCommand,
  UpdateSubscriptionRequestInput$,
  UpdateSubscriptionRequestOutput$,
  UpdateSubscriptionTarget$,
  UpdateSubscriptionTargetCommand,
  UpdateSubscriptionTargetInput$,
  UpdateSubscriptionTargetOutput$,
  UpdateUserProfile$,
  UpdateUserProfileCommand,
  UpdateUserProfileInput$,
  UpdateUserProfileOutput$,
  UseAssetTypePolicyGrantDetail$,
  UserAssignment,
  UserDesignation,
  UserDetails$,
  UserPolicyGrantPrincipal$,
  UserProfileDetails$,
  UserProfileStatus,
  UserProfileSummary$,
  UserProfileType,
  UserSearchType,
  UserType,
  UsernamePassword$,
  ValidationException,
  ValidationException$,
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
assert(typeof AcceptPredictions$ === "object");
assert(typeof AcceptSubscriptionRequestCommand === "function");
assert(typeof AcceptSubscriptionRequest$ === "object");
assert(typeof AddEntityOwnerCommand === "function");
assert(typeof AddEntityOwner$ === "object");
assert(typeof AddPolicyGrantCommand === "function");
assert(typeof AddPolicyGrant$ === "object");
assert(typeof AssociateEnvironmentRoleCommand === "function");
assert(typeof AssociateEnvironmentRole$ === "object");
assert(typeof AssociateGovernedTermsCommand === "function");
assert(typeof AssociateGovernedTerms$ === "object");
assert(typeof BatchGetAttributesMetadataCommand === "function");
assert(typeof BatchGetAttributesMetadata$ === "object");
assert(typeof BatchPutAttributesMetadataCommand === "function");
assert(typeof BatchPutAttributesMetadata$ === "object");
assert(typeof CancelMetadataGenerationRunCommand === "function");
assert(typeof CancelMetadataGenerationRun$ === "object");
assert(typeof CancelSubscriptionCommand === "function");
assert(typeof CancelSubscription$ === "object");
assert(typeof CreateAccountPoolCommand === "function");
assert(typeof CreateAccountPool$ === "object");
assert(typeof CreateAssetCommand === "function");
assert(typeof CreateAsset$ === "object");
assert(typeof CreateAssetFilterCommand === "function");
assert(typeof CreateAssetFilter$ === "object");
assert(typeof CreateAssetRevisionCommand === "function");
assert(typeof CreateAssetRevision$ === "object");
assert(typeof CreateAssetTypeCommand === "function");
assert(typeof CreateAssetType$ === "object");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof CreateDataProductCommand === "function");
assert(typeof CreateDataProduct$ === "object");
assert(typeof CreateDataProductRevisionCommand === "function");
assert(typeof CreateDataProductRevision$ === "object");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateDataSource$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateDomainUnitCommand === "function");
assert(typeof CreateDomainUnit$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateEnvironmentActionCommand === "function");
assert(typeof CreateEnvironmentAction$ === "object");
assert(typeof CreateEnvironmentBlueprintCommand === "function");
assert(typeof CreateEnvironmentBlueprint$ === "object");
assert(typeof CreateEnvironmentProfileCommand === "function");
assert(typeof CreateEnvironmentProfile$ === "object");
assert(typeof CreateFormTypeCommand === "function");
assert(typeof CreateFormType$ === "object");
assert(typeof CreateGlossaryCommand === "function");
assert(typeof CreateGlossary$ === "object");
assert(typeof CreateGlossaryTermCommand === "function");
assert(typeof CreateGlossaryTerm$ === "object");
assert(typeof CreateGroupProfileCommand === "function");
assert(typeof CreateGroupProfile$ === "object");
assert(typeof CreateListingChangeSetCommand === "function");
assert(typeof CreateListingChangeSet$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateProjectMembershipCommand === "function");
assert(typeof CreateProjectMembership$ === "object");
assert(typeof CreateProjectProfileCommand === "function");
assert(typeof CreateProjectProfile$ === "object");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof CreateSubscriptionGrantCommand === "function");
assert(typeof CreateSubscriptionGrant$ === "object");
assert(typeof CreateSubscriptionRequestCommand === "function");
assert(typeof CreateSubscriptionRequest$ === "object");
assert(typeof CreateSubscriptionTargetCommand === "function");
assert(typeof CreateSubscriptionTarget$ === "object");
assert(typeof CreateUserProfileCommand === "function");
assert(typeof CreateUserProfile$ === "object");
assert(typeof DeleteAccountPoolCommand === "function");
assert(typeof DeleteAccountPool$ === "object");
assert(typeof DeleteAssetCommand === "function");
assert(typeof DeleteAsset$ === "object");
assert(typeof DeleteAssetFilterCommand === "function");
assert(typeof DeleteAssetFilter$ === "object");
assert(typeof DeleteAssetTypeCommand === "function");
assert(typeof DeleteAssetType$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteDataProductCommand === "function");
assert(typeof DeleteDataProduct$ === "object");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDataSource$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteDomainUnitCommand === "function");
assert(typeof DeleteDomainUnit$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteEnvironmentActionCommand === "function");
assert(typeof DeleteEnvironmentAction$ === "object");
assert(typeof DeleteEnvironmentBlueprintCommand === "function");
assert(typeof DeleteEnvironmentBlueprint$ === "object");
assert(typeof DeleteEnvironmentBlueprintConfigurationCommand === "function");
assert(typeof DeleteEnvironmentBlueprintConfiguration$ === "object");
assert(typeof DeleteEnvironmentProfileCommand === "function");
assert(typeof DeleteEnvironmentProfile$ === "object");
assert(typeof DeleteFormTypeCommand === "function");
assert(typeof DeleteFormType$ === "object");
assert(typeof DeleteGlossaryCommand === "function");
assert(typeof DeleteGlossary$ === "object");
assert(typeof DeleteGlossaryTermCommand === "function");
assert(typeof DeleteGlossaryTerm$ === "object");
assert(typeof DeleteListingCommand === "function");
assert(typeof DeleteListing$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteProjectMembershipCommand === "function");
assert(typeof DeleteProjectMembership$ === "object");
assert(typeof DeleteProjectProfileCommand === "function");
assert(typeof DeleteProjectProfile$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DeleteSubscriptionGrantCommand === "function");
assert(typeof DeleteSubscriptionGrant$ === "object");
assert(typeof DeleteSubscriptionRequestCommand === "function");
assert(typeof DeleteSubscriptionRequest$ === "object");
assert(typeof DeleteSubscriptionTargetCommand === "function");
assert(typeof DeleteSubscriptionTarget$ === "object");
assert(typeof DeleteTimeSeriesDataPointsCommand === "function");
assert(typeof DeleteTimeSeriesDataPoints$ === "object");
assert(typeof DisassociateEnvironmentRoleCommand === "function");
assert(typeof DisassociateEnvironmentRole$ === "object");
assert(typeof DisassociateGovernedTermsCommand === "function");
assert(typeof DisassociateGovernedTerms$ === "object");
assert(typeof GetAccountPoolCommand === "function");
assert(typeof GetAccountPool$ === "object");
assert(typeof GetAssetCommand === "function");
assert(typeof GetAsset$ === "object");
assert(typeof GetAssetFilterCommand === "function");
assert(typeof GetAssetFilter$ === "object");
assert(typeof GetAssetTypeCommand === "function");
assert(typeof GetAssetType$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof GetDataExportConfigurationCommand === "function");
assert(typeof GetDataExportConfiguration$ === "object");
assert(typeof GetDataProductCommand === "function");
assert(typeof GetDataProduct$ === "object");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDataSource$ === "object");
assert(typeof GetDataSourceRunCommand === "function");
assert(typeof GetDataSourceRun$ === "object");
assert(typeof GetDomainCommand === "function");
assert(typeof GetDomain$ === "object");
assert(typeof GetDomainUnitCommand === "function");
assert(typeof GetDomainUnit$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetEnvironmentActionCommand === "function");
assert(typeof GetEnvironmentAction$ === "object");
assert(typeof GetEnvironmentBlueprintCommand === "function");
assert(typeof GetEnvironmentBlueprint$ === "object");
assert(typeof GetEnvironmentBlueprintConfigurationCommand === "function");
assert(typeof GetEnvironmentBlueprintConfiguration$ === "object");
assert(typeof GetEnvironmentCredentialsCommand === "function");
assert(typeof GetEnvironmentCredentials$ === "object");
assert(typeof GetEnvironmentProfileCommand === "function");
assert(typeof GetEnvironmentProfile$ === "object");
assert(typeof GetFormTypeCommand === "function");
assert(typeof GetFormType$ === "object");
assert(typeof GetGlossaryCommand === "function");
assert(typeof GetGlossary$ === "object");
assert(typeof GetGlossaryTermCommand === "function");
assert(typeof GetGlossaryTerm$ === "object");
assert(typeof GetGroupProfileCommand === "function");
assert(typeof GetGroupProfile$ === "object");
assert(typeof GetIamPortalLoginUrlCommand === "function");
assert(typeof GetIamPortalLoginUrl$ === "object");
assert(typeof GetJobRunCommand === "function");
assert(typeof GetJobRun$ === "object");
assert(typeof GetLineageEventCommand === "function");
assert(typeof GetLineageEvent$ === "object");
assert(typeof GetLineageNodeCommand === "function");
assert(typeof GetLineageNode$ === "object");
assert(typeof GetListingCommand === "function");
assert(typeof GetListing$ === "object");
assert(typeof GetMetadataGenerationRunCommand === "function");
assert(typeof GetMetadataGenerationRun$ === "object");
assert(typeof GetProjectCommand === "function");
assert(typeof GetProject$ === "object");
assert(typeof GetProjectProfileCommand === "function");
assert(typeof GetProjectProfile$ === "object");
assert(typeof GetRuleCommand === "function");
assert(typeof GetRule$ === "object");
assert(typeof GetSubscriptionCommand === "function");
assert(typeof GetSubscription$ === "object");
assert(typeof GetSubscriptionGrantCommand === "function");
assert(typeof GetSubscriptionGrant$ === "object");
assert(typeof GetSubscriptionRequestDetailsCommand === "function");
assert(typeof GetSubscriptionRequestDetails$ === "object");
assert(typeof GetSubscriptionTargetCommand === "function");
assert(typeof GetSubscriptionTarget$ === "object");
assert(typeof GetTimeSeriesDataPointCommand === "function");
assert(typeof GetTimeSeriesDataPoint$ === "object");
assert(typeof GetUserProfileCommand === "function");
assert(typeof GetUserProfile$ === "object");
assert(typeof ListAccountPoolsCommand === "function");
assert(typeof ListAccountPools$ === "object");
assert(typeof ListAccountsInAccountPoolCommand === "function");
assert(typeof ListAccountsInAccountPool$ === "object");
assert(typeof ListAssetFiltersCommand === "function");
assert(typeof ListAssetFilters$ === "object");
assert(typeof ListAssetRevisionsCommand === "function");
assert(typeof ListAssetRevisions$ === "object");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListConnections$ === "object");
assert(typeof ListDataProductRevisionsCommand === "function");
assert(typeof ListDataProductRevisions$ === "object");
assert(typeof ListDataSourceRunActivitiesCommand === "function");
assert(typeof ListDataSourceRunActivities$ === "object");
assert(typeof ListDataSourceRunsCommand === "function");
assert(typeof ListDataSourceRuns$ === "object");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSources$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListDomainUnitsForParentCommand === "function");
assert(typeof ListDomainUnitsForParent$ === "object");
assert(typeof ListEntityOwnersCommand === "function");
assert(typeof ListEntityOwners$ === "object");
assert(typeof ListEnvironmentActionsCommand === "function");
assert(typeof ListEnvironmentActions$ === "object");
assert(typeof ListEnvironmentBlueprintConfigurationsCommand === "function");
assert(typeof ListEnvironmentBlueprintConfigurations$ === "object");
assert(typeof ListEnvironmentBlueprintsCommand === "function");
assert(typeof ListEnvironmentBlueprints$ === "object");
assert(typeof ListEnvironmentProfilesCommand === "function");
assert(typeof ListEnvironmentProfiles$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListJobRunsCommand === "function");
assert(typeof ListJobRuns$ === "object");
assert(typeof ListLineageEventsCommand === "function");
assert(typeof ListLineageEvents$ === "object");
assert(typeof ListLineageNodeHistoryCommand === "function");
assert(typeof ListLineageNodeHistory$ === "object");
assert(typeof ListMetadataGenerationRunsCommand === "function");
assert(typeof ListMetadataGenerationRuns$ === "object");
assert(typeof ListNotificationsCommand === "function");
assert(typeof ListNotifications$ === "object");
assert(typeof ListPolicyGrantsCommand === "function");
assert(typeof ListPolicyGrants$ === "object");
assert(typeof ListProjectMembershipsCommand === "function");
assert(typeof ListProjectMemberships$ === "object");
assert(typeof ListProjectProfilesCommand === "function");
assert(typeof ListProjectProfiles$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListSubscriptionGrantsCommand === "function");
assert(typeof ListSubscriptionGrants$ === "object");
assert(typeof ListSubscriptionRequestsCommand === "function");
assert(typeof ListSubscriptionRequests$ === "object");
assert(typeof ListSubscriptionsCommand === "function");
assert(typeof ListSubscriptions$ === "object");
assert(typeof ListSubscriptionTargetsCommand === "function");
assert(typeof ListSubscriptionTargets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTimeSeriesDataPointsCommand === "function");
assert(typeof ListTimeSeriesDataPoints$ === "object");
assert(typeof PostLineageEventCommand === "function");
assert(typeof PostLineageEvent$ === "object");
assert(typeof PostTimeSeriesDataPointsCommand === "function");
assert(typeof PostTimeSeriesDataPoints$ === "object");
assert(typeof PutDataExportConfigurationCommand === "function");
assert(typeof PutDataExportConfiguration$ === "object");
assert(typeof PutEnvironmentBlueprintConfigurationCommand === "function");
assert(typeof PutEnvironmentBlueprintConfiguration$ === "object");
assert(typeof RejectPredictionsCommand === "function");
assert(typeof RejectPredictions$ === "object");
assert(typeof RejectSubscriptionRequestCommand === "function");
assert(typeof RejectSubscriptionRequest$ === "object");
assert(typeof RemoveEntityOwnerCommand === "function");
assert(typeof RemoveEntityOwner$ === "object");
assert(typeof RemovePolicyGrantCommand === "function");
assert(typeof RemovePolicyGrant$ === "object");
assert(typeof RevokeSubscriptionCommand === "function");
assert(typeof RevokeSubscription$ === "object");
assert(typeof SearchCommand === "function");
assert(typeof Search$ === "object");
assert(typeof SearchGroupProfilesCommand === "function");
assert(typeof SearchGroupProfiles$ === "object");
assert(typeof SearchListingsCommand === "function");
assert(typeof SearchListings$ === "object");
assert(typeof SearchTypesCommand === "function");
assert(typeof SearchTypes$ === "object");
assert(typeof SearchUserProfilesCommand === "function");
assert(typeof SearchUserProfiles$ === "object");
assert(typeof StartDataSourceRunCommand === "function");
assert(typeof StartDataSourceRun$ === "object");
assert(typeof StartMetadataGenerationRunCommand === "function");
assert(typeof StartMetadataGenerationRun$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountPoolCommand === "function");
assert(typeof UpdateAccountPool$ === "object");
assert(typeof UpdateAssetFilterCommand === "function");
assert(typeof UpdateAssetFilter$ === "object");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateConnection$ === "object");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDataSource$ === "object");
assert(typeof UpdateDomainCommand === "function");
assert(typeof UpdateDomain$ === "object");
assert(typeof UpdateDomainUnitCommand === "function");
assert(typeof UpdateDomainUnit$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateEnvironmentActionCommand === "function");
assert(typeof UpdateEnvironmentAction$ === "object");
assert(typeof UpdateEnvironmentBlueprintCommand === "function");
assert(typeof UpdateEnvironmentBlueprint$ === "object");
assert(typeof UpdateEnvironmentProfileCommand === "function");
assert(typeof UpdateEnvironmentProfile$ === "object");
assert(typeof UpdateGlossaryCommand === "function");
assert(typeof UpdateGlossary$ === "object");
assert(typeof UpdateGlossaryTermCommand === "function");
assert(typeof UpdateGlossaryTerm$ === "object");
assert(typeof UpdateGroupProfileCommand === "function");
assert(typeof UpdateGroupProfile$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateProjectProfileCommand === "function");
assert(typeof UpdateProjectProfile$ === "object");
assert(typeof UpdateRootDomainUnitOwnerCommand === "function");
assert(typeof UpdateRootDomainUnitOwner$ === "object");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateRule$ === "object");
assert(typeof UpdateSubscriptionGrantStatusCommand === "function");
assert(typeof UpdateSubscriptionGrantStatus$ === "object");
assert(typeof UpdateSubscriptionRequestCommand === "function");
assert(typeof UpdateSubscriptionRequest$ === "object");
assert(typeof UpdateSubscriptionTargetCommand === "function");
assert(typeof UpdateSubscriptionTarget$ === "object");
assert(typeof UpdateUserProfileCommand === "function");
assert(typeof UpdateUserProfile$ === "object");
// structural schemas
assert(typeof AcceptChoice$ === "object");
assert(typeof AcceptedAssetScope$ === "object");
assert(typeof AcceptPredictionsInput$ === "object");
assert(typeof AcceptPredictionsOutput$ === "object");
assert(typeof AcceptRule$ === "object");
assert(typeof AcceptSubscriptionRequestInput$ === "object");
assert(typeof AcceptSubscriptionRequestOutput$ === "object");
assert(typeof AccountInfo$ === "object");
assert(typeof AccountPoolSummary$ === "object");
assert(typeof AccountSource$ === "object");
assert(typeof ActionParameters$ === "object");
assert(typeof AddEntityOwnerInput$ === "object");
assert(typeof AddEntityOwnerOutput$ === "object");
assert(typeof AddPolicyGrantInput$ === "object");
assert(typeof AddPolicyGrantOutput$ === "object");
assert(typeof AddToProjectMemberPoolPolicyGrantDetail$ === "object");
assert(typeof AggregationListItem$ === "object");
assert(typeof AggregationOutput$ === "object");
assert(typeof AggregationOutputItem$ === "object");
assert(typeof AllDomainUnitsGrantFilter$ === "object");
assert(typeof AllUsersGrantFilter$ === "object");
assert(typeof AmazonQPropertiesInput$ === "object");
assert(typeof AmazonQPropertiesOutput$ === "object");
assert(typeof AmazonQPropertiesPatch$ === "object");
assert(typeof AssetFilterConfiguration$ === "object");
assert(typeof AssetFilterSummary$ === "object");
assert(typeof AssetInDataProductListingItem$ === "object");
assert(typeof AssetItem$ === "object");
assert(typeof AssetItemAdditionalAttributes$ === "object");
assert(typeof AssetListing$ === "object");
assert(typeof AssetListingDetails$ === "object");
assert(typeof AssetListingItem$ === "object");
assert(typeof AssetListingItemAdditionalAttributes$ === "object");
assert(typeof AssetPermission$ === "object");
assert(typeof AssetRevision$ === "object");
assert(typeof AssetScope$ === "object");
assert(typeof AssetTargetNameMap$ === "object");
assert(typeof AssetTypeItem$ === "object");
assert(typeof AssetTypesForRule$ === "object");
assert(typeof AssociateEnvironmentRoleInput$ === "object");
assert(typeof AssociateEnvironmentRoleOutput$ === "object");
assert(typeof AssociateGovernedTermsInput$ === "object");
assert(typeof AssociateGovernedTermsOutput$ === "object");
assert(typeof AthenaPropertiesInput$ === "object");
assert(typeof AthenaPropertiesOutput$ === "object");
assert(typeof AthenaPropertiesPatch$ === "object");
assert(typeof AttributeError$ === "object");
assert(typeof AttributeInput$ === "object");
assert(typeof AuthenticationConfiguration$ === "object");
assert(typeof AuthenticationConfigurationInput$ === "object");
assert(typeof AuthenticationConfigurationPatch$ === "object");
assert(typeof AuthorizationCodeProperties$ === "object");
assert(typeof AwsAccount$ === "object");
assert(typeof AwsConsoleLinkParameters$ === "object");
assert(typeof AwsLocation$ === "object");
assert(typeof BasicAuthenticationCredentials$ === "object");
assert(typeof BatchGetAttributeOutput$ === "object");
assert(typeof BatchGetAttributesMetadataInput$ === "object");
assert(typeof BatchGetAttributesMetadataOutput$ === "object");
assert(typeof BatchPutAttributeOutput$ === "object");
assert(typeof BatchPutAttributesMetadataInput$ === "object");
assert(typeof BatchPutAttributesMetadataOutput$ === "object");
assert(typeof BusinessNameGenerationConfiguration$ === "object");
assert(typeof CancelMetadataGenerationRunInput$ === "object");
assert(typeof CancelMetadataGenerationRunOutput$ === "object");
assert(typeof CancelSubscriptionInput$ === "object");
assert(typeof CancelSubscriptionOutput$ === "object");
assert(typeof CloudFormationProperties$ === "object");
assert(typeof ColumnFilterConfiguration$ === "object");
assert(typeof ConfigurableActionParameter$ === "object");
assert(typeof ConfigurableEnvironmentAction$ === "object");
assert(typeof ConnectionCredentials$ === "object");
assert(typeof ConnectionPropertiesInput$ === "object");
assert(typeof ConnectionPropertiesOutput$ === "object");
assert(typeof ConnectionPropertiesPatch$ === "object");
assert(typeof ConnectionSummary$ === "object");
assert(typeof CreateAccountPoolInput$ === "object");
assert(typeof CreateAccountPoolOutput$ === "object");
assert(typeof CreateAssetFilterInput$ === "object");
assert(typeof CreateAssetFilterOutput$ === "object");
assert(typeof CreateAssetInput$ === "object");
assert(typeof CreateAssetOutput$ === "object");
assert(typeof CreateAssetRevisionInput$ === "object");
assert(typeof CreateAssetRevisionOutput$ === "object");
assert(typeof CreateAssetTypeInput$ === "object");
assert(typeof CreateAssetTypeOutput$ === "object");
assert(typeof CreateAssetTypePolicyGrantDetail$ === "object");
assert(typeof CreateConnectionInput$ === "object");
assert(typeof CreateConnectionOutput$ === "object");
assert(typeof CreateDataProductInput$ === "object");
assert(typeof CreateDataProductOutput$ === "object");
assert(typeof CreateDataProductRevisionInput$ === "object");
assert(typeof CreateDataProductRevisionOutput$ === "object");
assert(typeof CreateDataSourceInput$ === "object");
assert(typeof CreateDataSourceOutput$ === "object");
assert(typeof CreateDomainInput$ === "object");
assert(typeof CreateDomainOutput$ === "object");
assert(typeof CreateDomainUnitInput$ === "object");
assert(typeof CreateDomainUnitOutput$ === "object");
assert(typeof CreateDomainUnitPolicyGrantDetail$ === "object");
assert(typeof CreateEnvironmentActionInput$ === "object");
assert(typeof CreateEnvironmentActionOutput$ === "object");
assert(typeof CreateEnvironmentBlueprintInput$ === "object");
assert(typeof CreateEnvironmentBlueprintOutput$ === "object");
assert(typeof CreateEnvironmentInput$ === "object");
assert(typeof CreateEnvironmentOutput$ === "object");
assert(typeof CreateEnvironmentProfileInput$ === "object");
assert(typeof CreateEnvironmentProfileOutput$ === "object");
assert(typeof CreateEnvironmentProfilePolicyGrantDetail$ === "object");
assert(typeof CreateFormTypeInput$ === "object");
assert(typeof CreateFormTypeOutput$ === "object");
assert(typeof CreateFormTypePolicyGrantDetail$ === "object");
assert(typeof CreateGlossaryInput$ === "object");
assert(typeof CreateGlossaryOutput$ === "object");
assert(typeof CreateGlossaryPolicyGrantDetail$ === "object");
assert(typeof CreateGlossaryTermInput$ === "object");
assert(typeof CreateGlossaryTermOutput$ === "object");
assert(typeof CreateGroupProfileInput$ === "object");
assert(typeof CreateGroupProfileOutput$ === "object");
assert(typeof CreateListingChangeSetInput$ === "object");
assert(typeof CreateListingChangeSetOutput$ === "object");
assert(typeof CreateProjectFromProjectProfilePolicyGrantDetail$ === "object");
assert(typeof CreateProjectInput$ === "object");
assert(typeof CreateProjectMembershipInput$ === "object");
assert(typeof CreateProjectMembershipOutput$ === "object");
assert(typeof CreateProjectOutput$ === "object");
assert(typeof CreateProjectPolicyGrantDetail$ === "object");
assert(typeof CreateProjectProfileInput$ === "object");
assert(typeof CreateProjectProfileOutput$ === "object");
assert(typeof CreateRuleInput$ === "object");
assert(typeof CreateRuleOutput$ === "object");
assert(typeof CreateSubscriptionGrantInput$ === "object");
assert(typeof CreateSubscriptionGrantOutput$ === "object");
assert(typeof CreateSubscriptionRequestInput$ === "object");
assert(typeof CreateSubscriptionRequestOutput$ === "object");
assert(typeof CreateSubscriptionTargetInput$ === "object");
assert(typeof CreateSubscriptionTargetOutput$ === "object");
assert(typeof CreateUserProfileInput$ === "object");
assert(typeof CreateUserProfileOutput$ === "object");
assert(typeof CustomAccountPoolHandler$ === "object");
assert(typeof CustomParameter$ === "object");
assert(typeof DataProductItem$ === "object");
assert(typeof DataProductItemAdditionalAttributes$ === "object");
assert(typeof DataProductListing$ === "object");
assert(typeof DataProductListingItem$ === "object");
assert(typeof DataProductListingItemAdditionalAttributes$ === "object");
assert(typeof DataProductResultItem$ === "object");
assert(typeof DataProductRevision$ === "object");
assert(typeof DataSourceConfigurationInput$ === "object");
assert(typeof DataSourceConfigurationOutput$ === "object");
assert(typeof DataSourceErrorMessage$ === "object");
assert(typeof DataSourceRunActivity$ === "object");
assert(typeof DataSourceRunLineageSummary$ === "object");
assert(typeof DataSourceRunSummary$ === "object");
assert(typeof DataSourceSummary$ === "object");
assert(typeof DeleteAccountPoolInput$ === "object");
assert(typeof DeleteAccountPoolOutput$ === "object");
assert(typeof DeleteAssetFilterInput$ === "object");
assert(typeof DeleteAssetInput$ === "object");
assert(typeof DeleteAssetOutput$ === "object");
assert(typeof DeleteAssetTypeInput$ === "object");
assert(typeof DeleteAssetTypeOutput$ === "object");
assert(typeof DeleteConnectionInput$ === "object");
assert(typeof DeleteConnectionOutput$ === "object");
assert(typeof DeleteDataProductInput$ === "object");
assert(typeof DeleteDataProductOutput$ === "object");
assert(typeof DeleteDataSourceInput$ === "object");
assert(typeof DeleteDataSourceOutput$ === "object");
assert(typeof DeleteDomainInput$ === "object");
assert(typeof DeleteDomainOutput$ === "object");
assert(typeof DeleteDomainUnitInput$ === "object");
assert(typeof DeleteDomainUnitOutput$ === "object");
assert(typeof DeleteEnvironmentActionInput$ === "object");
assert(typeof DeleteEnvironmentBlueprintConfigurationInput$ === "object");
assert(typeof DeleteEnvironmentBlueprintConfigurationOutput$ === "object");
assert(typeof DeleteEnvironmentBlueprintInput$ === "object");
assert(typeof DeleteEnvironmentInput$ === "object");
assert(typeof DeleteEnvironmentProfileInput$ === "object");
assert(typeof DeleteFormTypeInput$ === "object");
assert(typeof DeleteFormTypeOutput$ === "object");
assert(typeof DeleteGlossaryInput$ === "object");
assert(typeof DeleteGlossaryOutput$ === "object");
assert(typeof DeleteGlossaryTermInput$ === "object");
assert(typeof DeleteGlossaryTermOutput$ === "object");
assert(typeof DeleteListingInput$ === "object");
assert(typeof DeleteListingOutput$ === "object");
assert(typeof DeleteProjectInput$ === "object");
assert(typeof DeleteProjectMembershipInput$ === "object");
assert(typeof DeleteProjectMembershipOutput$ === "object");
assert(typeof DeleteProjectOutput$ === "object");
assert(typeof DeleteProjectProfileInput$ === "object");
assert(typeof DeleteProjectProfileOutput$ === "object");
assert(typeof DeleteRuleInput$ === "object");
assert(typeof DeleteRuleOutput$ === "object");
assert(typeof DeleteSubscriptionGrantInput$ === "object");
assert(typeof DeleteSubscriptionGrantOutput$ === "object");
assert(typeof DeleteSubscriptionRequestInput$ === "object");
assert(typeof DeleteSubscriptionTargetInput$ === "object");
assert(typeof DeleteTimeSeriesDataPointsInput$ === "object");
assert(typeof DeleteTimeSeriesDataPointsOutput$ === "object");
assert(typeof Deployment$ === "object");
assert(typeof DeploymentProperties$ === "object");
assert(typeof DetailedGlossaryTerm$ === "object");
assert(typeof DisassociateEnvironmentRoleInput$ === "object");
assert(typeof DisassociateEnvironmentRoleOutput$ === "object");
assert(typeof DisassociateGovernedTermsInput$ === "object");
assert(typeof DisassociateGovernedTermsOutput$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof DomainUnitFilterForProject$ === "object");
assert(typeof DomainUnitGrantFilter$ === "object");
assert(typeof DomainUnitGroupProperties$ === "object");
assert(typeof DomainUnitOwnerProperties$ === "object");
assert(typeof DomainUnitPolicyGrantPrincipal$ === "object");
assert(typeof DomainUnitSummary$ === "object");
assert(typeof DomainUnitTarget$ === "object");
assert(typeof DomainUnitUserProperties$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EnvironmentActionSummary$ === "object");
assert(typeof EnvironmentBlueprintConfigurationItem$ === "object");
assert(typeof EnvironmentBlueprintSummary$ === "object");
assert(typeof EnvironmentConfiguration$ === "object");
assert(typeof EnvironmentConfigurationParameter$ === "object");
assert(typeof EnvironmentConfigurationParametersDetails$ === "object");
assert(typeof EnvironmentConfigurationUserParameter$ === "object");
assert(typeof EnvironmentDeploymentDetails$ === "object");
assert(typeof EnvironmentError$ === "object");
assert(typeof EnvironmentParameter$ === "object");
assert(typeof EnvironmentProfileSummary$ === "object");
assert(typeof EnvironmentResolvedAccount$ === "object");
assert(typeof EnvironmentSummary$ === "object");
assert(typeof EqualToExpression$ === "object");
assert(typeof EventSummary$ === "object");
assert(typeof FailureCause$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterClause$ === "object");
assert(typeof FilterExpression$ === "object");
assert(typeof FormEntryInput$ === "object");
assert(typeof FormEntryOutput$ === "object");
assert(typeof FormInput$ === "object");
assert(typeof FormOutput$ === "object");
assert(typeof FormTypeData$ === "object");
assert(typeof GetAccountPoolInput$ === "object");
assert(typeof GetAccountPoolOutput$ === "object");
assert(typeof GetAssetFilterInput$ === "object");
assert(typeof GetAssetFilterOutput$ === "object");
assert(typeof GetAssetInput$ === "object");
assert(typeof GetAssetOutput$ === "object");
assert(typeof GetAssetTypeInput$ === "object");
assert(typeof GetAssetTypeOutput$ === "object");
assert(typeof GetConnectionInput$ === "object");
assert(typeof GetConnectionOutput$ === "object");
assert(typeof GetDataExportConfigurationInput$ === "object");
assert(typeof GetDataExportConfigurationOutput$ === "object");
assert(typeof GetDataProductInput$ === "object");
assert(typeof GetDataProductOutput$ === "object");
assert(typeof GetDataSourceInput$ === "object");
assert(typeof GetDataSourceOutput$ === "object");
assert(typeof GetDataSourceRunInput$ === "object");
assert(typeof GetDataSourceRunOutput$ === "object");
assert(typeof GetDomainInput$ === "object");
assert(typeof GetDomainOutput$ === "object");
assert(typeof GetDomainUnitInput$ === "object");
assert(typeof GetDomainUnitOutput$ === "object");
assert(typeof GetEnvironmentActionInput$ === "object");
assert(typeof GetEnvironmentActionOutput$ === "object");
assert(typeof GetEnvironmentBlueprintConfigurationInput$ === "object");
assert(typeof GetEnvironmentBlueprintConfigurationOutput$ === "object");
assert(typeof GetEnvironmentBlueprintInput$ === "object");
assert(typeof GetEnvironmentBlueprintOutput$ === "object");
assert(typeof GetEnvironmentCredentialsInput$ === "object");
assert(typeof GetEnvironmentCredentialsOutput$ === "object");
assert(typeof GetEnvironmentInput$ === "object");
assert(typeof GetEnvironmentOutput$ === "object");
assert(typeof GetEnvironmentProfileInput$ === "object");
assert(typeof GetEnvironmentProfileOutput$ === "object");
assert(typeof GetFormTypeInput$ === "object");
assert(typeof GetFormTypeOutput$ === "object");
assert(typeof GetGlossaryInput$ === "object");
assert(typeof GetGlossaryOutput$ === "object");
assert(typeof GetGlossaryTermInput$ === "object");
assert(typeof GetGlossaryTermOutput$ === "object");
assert(typeof GetGroupProfileInput$ === "object");
assert(typeof GetGroupProfileOutput$ === "object");
assert(typeof GetIamPortalLoginUrlInput$ === "object");
assert(typeof GetIamPortalLoginUrlOutput$ === "object");
assert(typeof GetJobRunInput$ === "object");
assert(typeof GetJobRunOutput$ === "object");
assert(typeof GetLineageEventInput$ === "object");
assert(typeof GetLineageEventOutput$ === "object");
assert(typeof GetLineageNodeInput$ === "object");
assert(typeof GetLineageNodeOutput$ === "object");
assert(typeof GetListingInput$ === "object");
assert(typeof GetListingOutput$ === "object");
assert(typeof GetMetadataGenerationRunInput$ === "object");
assert(typeof GetMetadataGenerationRunOutput$ === "object");
assert(typeof GetProjectInput$ === "object");
assert(typeof GetProjectOutput$ === "object");
assert(typeof GetProjectProfileInput$ === "object");
assert(typeof GetProjectProfileOutput$ === "object");
assert(typeof GetRuleInput$ === "object");
assert(typeof GetRuleOutput$ === "object");
assert(typeof GetSubscriptionGrantInput$ === "object");
assert(typeof GetSubscriptionGrantOutput$ === "object");
assert(typeof GetSubscriptionInput$ === "object");
assert(typeof GetSubscriptionOutput$ === "object");
assert(typeof GetSubscriptionRequestDetailsInput$ === "object");
assert(typeof GetSubscriptionRequestDetailsOutput$ === "object");
assert(typeof GetSubscriptionTargetInput$ === "object");
assert(typeof GetSubscriptionTargetOutput$ === "object");
assert(typeof GetTimeSeriesDataPointInput$ === "object");
assert(typeof GetTimeSeriesDataPointOutput$ === "object");
assert(typeof GetUserProfileInput$ === "object");
assert(typeof GetUserProfileOutput$ === "object");
assert(typeof GlossaryItem$ === "object");
assert(typeof GlossaryItemAdditionalAttributes$ === "object");
assert(typeof GlossaryTermEnforcementDetail$ === "object");
assert(typeof GlossaryTermItem$ === "object");
assert(typeof GlossaryTermItemAdditionalAttributes$ === "object");
assert(typeof GlueConnection$ === "object");
assert(typeof GlueConnectionInput$ === "object");
assert(typeof GlueConnectionPatch$ === "object");
assert(typeof GlueOAuth2Credentials$ === "object");
assert(typeof GluePropertiesInput$ === "object");
assert(typeof GluePropertiesOutput$ === "object");
assert(typeof GluePropertiesPatch$ === "object");
assert(typeof GlueRunConfigurationInput$ === "object");
assert(typeof GlueRunConfigurationOutput$ === "object");
assert(typeof GlueSelfGrantStatusOutput$ === "object");
assert(typeof GrantedEntity$ === "object");
assert(typeof GrantedEntityInput$ === "object");
assert(typeof GreaterThanExpression$ === "object");
assert(typeof GreaterThanOrEqualToExpression$ === "object");
assert(typeof GroupDetails$ === "object");
assert(typeof GroupPolicyGrantPrincipal$ === "object");
assert(typeof GroupProfileSummary$ === "object");
assert(typeof HyperPodPropertiesInput$ === "object");
assert(typeof HyperPodPropertiesOutput$ === "object");
assert(typeof IamPropertiesInput$ === "object");
assert(typeof IamPropertiesOutput$ === "object");
assert(typeof IamPropertiesPatch$ === "object");
assert(typeof IamUserProfileDetails$ === "object");
assert(typeof Import$ === "object");
assert(typeof InExpression$ === "object");
assert(typeof IsNotNullExpression$ === "object");
assert(typeof IsNullExpression$ === "object");
assert(typeof JobRunDetails$ === "object");
assert(typeof JobRunError$ === "object");
assert(typeof JobRunSummary$ === "object");
assert(typeof LakeFormationConfiguration$ === "object");
assert(typeof LessThanExpression$ === "object");
assert(typeof LessThanOrEqualToExpression$ === "object");
assert(typeof LikeExpression$ === "object");
assert(typeof LineageEventSummary$ === "object");
assert(typeof LineageInfo$ === "object");
assert(typeof LineageNodeReference$ === "object");
assert(typeof LineageNodeSummary$ === "object");
assert(typeof LineageNodeTypeItem$ === "object");
assert(typeof LineageRunDetails$ === "object");
assert(typeof LineageSqlQueryRunDetails$ === "object");
assert(typeof LineageSyncSchedule$ === "object");
assert(typeof ListAccountPoolsInput$ === "object");
assert(typeof ListAccountPoolsOutput$ === "object");
assert(typeof ListAccountsInAccountPoolInput$ === "object");
assert(typeof ListAccountsInAccountPoolOutput$ === "object");
assert(typeof ListAssetFiltersInput$ === "object");
assert(typeof ListAssetFiltersOutput$ === "object");
assert(typeof ListAssetRevisionsInput$ === "object");
assert(typeof ListAssetRevisionsOutput$ === "object");
assert(typeof ListConnectionsInput$ === "object");
assert(typeof ListConnectionsOutput$ === "object");
assert(typeof ListDataProductRevisionsInput$ === "object");
assert(typeof ListDataProductRevisionsOutput$ === "object");
assert(typeof ListDataSourceRunActivitiesInput$ === "object");
assert(typeof ListDataSourceRunActivitiesOutput$ === "object");
assert(typeof ListDataSourceRunsInput$ === "object");
assert(typeof ListDataSourceRunsOutput$ === "object");
assert(typeof ListDataSourcesInput$ === "object");
assert(typeof ListDataSourcesOutput$ === "object");
assert(typeof ListDomainsInput$ === "object");
assert(typeof ListDomainsOutput$ === "object");
assert(typeof ListDomainUnitsForParentInput$ === "object");
assert(typeof ListDomainUnitsForParentOutput$ === "object");
assert(typeof ListEntityOwnersInput$ === "object");
assert(typeof ListEntityOwnersOutput$ === "object");
assert(typeof ListEnvironmentActionsInput$ === "object");
assert(typeof ListEnvironmentActionsOutput$ === "object");
assert(typeof ListEnvironmentBlueprintConfigurationsInput$ === "object");
assert(typeof ListEnvironmentBlueprintConfigurationsOutput$ === "object");
assert(typeof ListEnvironmentBlueprintsInput$ === "object");
assert(typeof ListEnvironmentBlueprintsOutput$ === "object");
assert(typeof ListEnvironmentProfilesInput$ === "object");
assert(typeof ListEnvironmentProfilesOutput$ === "object");
assert(typeof ListEnvironmentsInput$ === "object");
assert(typeof ListEnvironmentsOutput$ === "object");
assert(typeof ListingItem$ === "object");
assert(typeof ListingRevision$ === "object");
assert(typeof ListingRevisionInput$ === "object");
assert(typeof ListingSummary$ === "object");
assert(typeof ListingSummaryItem$ === "object");
assert(typeof ListJobRunsInput$ === "object");
assert(typeof ListJobRunsOutput$ === "object");
assert(typeof ListLineageEventsInput$ === "object");
assert(typeof ListLineageEventsOutput$ === "object");
assert(typeof ListLineageNodeHistoryInput$ === "object");
assert(typeof ListLineageNodeHistoryOutput$ === "object");
assert(typeof ListMetadataGenerationRunsInput$ === "object");
assert(typeof ListMetadataGenerationRunsOutput$ === "object");
assert(typeof ListNotificationsInput$ === "object");
assert(typeof ListNotificationsOutput$ === "object");
assert(typeof ListPolicyGrantsInput$ === "object");
assert(typeof ListPolicyGrantsOutput$ === "object");
assert(typeof ListProjectMembershipsInput$ === "object");
assert(typeof ListProjectMembershipsOutput$ === "object");
assert(typeof ListProjectProfilesInput$ === "object");
assert(typeof ListProjectProfilesOutput$ === "object");
assert(typeof ListProjectsInput$ === "object");
assert(typeof ListProjectsOutput$ === "object");
assert(typeof ListRulesInput$ === "object");
assert(typeof ListRulesOutput$ === "object");
assert(typeof ListSubscriptionGrantsInput$ === "object");
assert(typeof ListSubscriptionGrantsOutput$ === "object");
assert(typeof ListSubscriptionRequestsInput$ === "object");
assert(typeof ListSubscriptionRequestsOutput$ === "object");
assert(typeof ListSubscriptionsInput$ === "object");
assert(typeof ListSubscriptionsOutput$ === "object");
assert(typeof ListSubscriptionTargetsInput$ === "object");
assert(typeof ListSubscriptionTargetsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTimeSeriesDataPointsInput$ === "object");
assert(typeof ListTimeSeriesDataPointsOutput$ === "object");
assert(typeof ManagedEndpointCredentials$ === "object");
assert(typeof MatchOffset$ === "object");
assert(typeof MatchRationaleItem$ === "object");
assert(typeof Member$ === "object");
assert(typeof MemberDetails$ === "object");
assert(typeof MetadataFormEnforcementDetail$ === "object");
assert(typeof MetadataFormReference$ === "object");
assert(typeof MetadataFormSummary$ === "object");
assert(typeof MetadataGenerationRunItem$ === "object");
assert(typeof MetadataGenerationRunTarget$ === "object");
assert(typeof MetadataGenerationRunTypeStat$ === "object");
assert(typeof MlflowPropertiesInput$ === "object");
assert(typeof MlflowPropertiesOutput$ === "object");
assert(typeof MlflowPropertiesPatch$ === "object");
assert(typeof Model$ === "object");
assert(typeof NameIdentifier$ === "object");
assert(typeof NotEqualToExpression$ === "object");
assert(typeof NotificationOutput$ === "object");
assert(typeof NotificationResource$ === "object");
assert(typeof NotInExpression$ === "object");
assert(typeof NotLikeExpression$ === "object");
assert(typeof OAuth2ClientApplication$ === "object");
assert(typeof OAuth2Properties$ === "object");
assert(typeof OpenLineageRunEventSummary$ === "object");
assert(typeof OverrideDomainUnitOwnersPolicyGrantDetail$ === "object");
assert(typeof OverrideProjectOwnersPolicyGrantDetail$ === "object");
assert(typeof OwnerGroupProperties$ === "object");
assert(typeof OwnerGroupPropertiesOutput$ === "object");
assert(typeof OwnerProperties$ === "object");
assert(typeof OwnerPropertiesOutput$ === "object");
assert(typeof OwnerUserProperties$ === "object");
assert(typeof OwnerUserPropertiesOutput$ === "object");
assert(typeof Permissions$ === "object");
assert(typeof PhysicalConnectionRequirements$ === "object");
assert(typeof PhysicalEndpoint$ === "object");
assert(typeof PolicyGrantDetail$ === "object");
assert(typeof PolicyGrantMember$ === "object");
assert(typeof PolicyGrantPrincipal$ === "object");
assert(typeof PostLineageEventInput$ === "object");
assert(typeof PostLineageEventOutput$ === "object");
assert(typeof PostTimeSeriesDataPointsInput$ === "object");
assert(typeof PostTimeSeriesDataPointsOutput$ === "object");
assert(typeof PredictionConfiguration$ === "object");
assert(typeof ProjectDeletionError$ === "object");
assert(typeof ProjectGrantFilter$ === "object");
assert(typeof ProjectMember$ === "object");
assert(typeof ProjectPolicyGrantPrincipal$ === "object");
assert(typeof ProjectProfileSummary$ === "object");
assert(typeof ProjectsForRule$ === "object");
assert(typeof ProjectSummary$ === "object");
assert(typeof ProvisioningConfiguration$ === "object");
assert(typeof ProvisioningProperties$ === "object");
assert(typeof PutDataExportConfigurationInput$ === "object");
assert(typeof PutDataExportConfigurationOutput$ === "object");
assert(typeof PutEnvironmentBlueprintConfigurationInput$ === "object");
assert(typeof PutEnvironmentBlueprintConfigurationOutput$ === "object");
assert(typeof RecommendationConfiguration$ === "object");
assert(typeof RedshiftClusterStorage$ === "object");
assert(typeof RedshiftCredentialConfiguration$ === "object");
assert(typeof RedshiftCredentials$ === "object");
assert(typeof RedshiftLineageSyncConfigurationInput$ === "object");
assert(typeof RedshiftLineageSyncConfigurationOutput$ === "object");
assert(typeof RedshiftPropertiesInput$ === "object");
assert(typeof RedshiftPropertiesOutput$ === "object");
assert(typeof RedshiftPropertiesPatch$ === "object");
assert(typeof RedshiftRunConfigurationInput$ === "object");
assert(typeof RedshiftRunConfigurationOutput$ === "object");
assert(typeof RedshiftSelfGrantStatusOutput$ === "object");
assert(typeof RedshiftServerlessStorage$ === "object");
assert(typeof RedshiftStorage$ === "object");
assert(typeof RedshiftStorageProperties$ === "object");
assert(typeof Region$ === "object");
assert(typeof RejectChoice$ === "object");
assert(typeof RejectPredictionsInput$ === "object");
assert(typeof RejectPredictionsOutput$ === "object");
assert(typeof RejectRule$ === "object");
assert(typeof RejectSubscriptionRequestInput$ === "object");
assert(typeof RejectSubscriptionRequestOutput$ === "object");
assert(typeof RelationalFilterConfiguration$ === "object");
assert(typeof RemoveEntityOwnerInput$ === "object");
assert(typeof RemoveEntityOwnerOutput$ === "object");
assert(typeof RemovePolicyGrantInput$ === "object");
assert(typeof RemovePolicyGrantOutput$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof ResourceTagParameter$ === "object");
assert(typeof RevokeSubscriptionInput$ === "object");
assert(typeof RevokeSubscriptionOutput$ === "object");
assert(typeof RowFilter$ === "object");
assert(typeof RowFilterConfiguration$ === "object");
assert(typeof RowFilterExpression$ === "object");
assert(typeof RuleDetail$ === "object");
assert(typeof RuleScope$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof RuleTarget$ === "object");
assert(typeof RunStatisticsForAssets$ === "object");
assert(typeof S3PropertiesInput$ === "object");
assert(typeof S3PropertiesOutput$ === "object");
assert(typeof S3PropertiesPatch$ === "object");
assert(typeof SageMakerRunConfigurationInput$ === "object");
assert(typeof SageMakerRunConfigurationOutput$ === "object");
assert(typeof ScheduleConfiguration$ === "object");
assert(typeof SearchGroupProfilesInput$ === "object");
assert(typeof SearchGroupProfilesOutput$ === "object");
assert(typeof SearchInItem$ === "object");
assert(typeof SearchInput$ === "object");
assert(typeof SearchInventoryResultItem$ === "object");
assert(typeof SearchListingsInput$ === "object");
assert(typeof SearchListingsOutput$ === "object");
assert(typeof SearchOutput$ === "object");
assert(typeof SearchResultItem$ === "object");
assert(typeof SearchSort$ === "object");
assert(typeof SearchTypesInput$ === "object");
assert(typeof SearchTypesOutput$ === "object");
assert(typeof SearchTypesResultItem$ === "object");
assert(typeof SearchUserProfilesInput$ === "object");
assert(typeof SearchUserProfilesOutput$ === "object");
assert(typeof SelfGrantStatusDetail$ === "object");
assert(typeof SelfGrantStatusOutput$ === "object");
assert(typeof SingleSignOn$ === "object");
assert(typeof SparkEmrPropertiesInput$ === "object");
assert(typeof SparkEmrPropertiesOutput$ === "object");
assert(typeof SparkEmrPropertiesPatch$ === "object");
assert(typeof SparkGlueArgs$ === "object");
assert(typeof SparkGluePropertiesInput$ === "object");
assert(typeof SparkGluePropertiesOutput$ === "object");
assert(typeof SsoUserProfileDetails$ === "object");
assert(typeof StartDataSourceRunInput$ === "object");
assert(typeof StartDataSourceRunOutput$ === "object");
assert(typeof StartMetadataGenerationRunInput$ === "object");
assert(typeof StartMetadataGenerationRunOutput$ === "object");
assert(typeof SubscribedAsset$ === "object");
assert(typeof SubscribedAssetListing$ === "object");
assert(typeof SubscribedGroup$ === "object");
assert(typeof SubscribedGroupInput$ === "object");
assert(typeof SubscribedListing$ === "object");
assert(typeof SubscribedListingInput$ === "object");
assert(typeof SubscribedListingItem$ === "object");
assert(typeof SubscribedPrincipal$ === "object");
assert(typeof SubscribedPrincipalInput$ === "object");
assert(typeof SubscribedProductListing$ === "object");
assert(typeof SubscribedProject$ === "object");
assert(typeof SubscribedProjectInput$ === "object");
assert(typeof SubscribedUser$ === "object");
assert(typeof SubscribedUserInput$ === "object");
assert(typeof SubscriptionGrantSummary$ === "object");
assert(typeof SubscriptionRequestSummary$ === "object");
assert(typeof SubscriptionSummary$ === "object");
assert(typeof SubscriptionTargetForm$ === "object");
assert(typeof SubscriptionTargetSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TermRelations$ === "object");
assert(typeof TextMatchItem$ === "object");
assert(typeof TimeSeriesDataPointFormInput$ === "object");
assert(typeof TimeSeriesDataPointFormOutput$ === "object");
assert(typeof TimeSeriesDataPointSummaryFormOutput$ === "object");
assert(typeof Topic$ === "object");
assert(typeof Unit$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccountPoolInput$ === "object");
assert(typeof UpdateAccountPoolOutput$ === "object");
assert(typeof UpdateAssetFilterInput$ === "object");
assert(typeof UpdateAssetFilterOutput$ === "object");
assert(typeof UpdateConnectionInput$ === "object");
assert(typeof UpdateConnectionOutput$ === "object");
assert(typeof UpdateDataSourceInput$ === "object");
assert(typeof UpdateDataSourceOutput$ === "object");
assert(typeof UpdateDomainInput$ === "object");
assert(typeof UpdateDomainOutput$ === "object");
assert(typeof UpdateDomainUnitInput$ === "object");
assert(typeof UpdateDomainUnitOutput$ === "object");
assert(typeof UpdateEnvironmentActionInput$ === "object");
assert(typeof UpdateEnvironmentActionOutput$ === "object");
assert(typeof UpdateEnvironmentBlueprintInput$ === "object");
assert(typeof UpdateEnvironmentBlueprintOutput$ === "object");
assert(typeof UpdateEnvironmentInput$ === "object");
assert(typeof UpdateEnvironmentOutput$ === "object");
assert(typeof UpdateEnvironmentProfileInput$ === "object");
assert(typeof UpdateEnvironmentProfileOutput$ === "object");
assert(typeof UpdateGlossaryInput$ === "object");
assert(typeof UpdateGlossaryOutput$ === "object");
assert(typeof UpdateGlossaryTermInput$ === "object");
assert(typeof UpdateGlossaryTermOutput$ === "object");
assert(typeof UpdateGroupProfileInput$ === "object");
assert(typeof UpdateGroupProfileOutput$ === "object");
assert(typeof UpdateProjectInput$ === "object");
assert(typeof UpdateProjectOutput$ === "object");
assert(typeof UpdateProjectProfileInput$ === "object");
assert(typeof UpdateProjectProfileOutput$ === "object");
assert(typeof UpdateRootDomainUnitOwnerInput$ === "object");
assert(typeof UpdateRootDomainUnitOwnerOutput$ === "object");
assert(typeof UpdateRuleInput$ === "object");
assert(typeof UpdateRuleOutput$ === "object");
assert(typeof UpdateSubscriptionGrantStatusInput$ === "object");
assert(typeof UpdateSubscriptionGrantStatusOutput$ === "object");
assert(typeof UpdateSubscriptionRequestInput$ === "object");
assert(typeof UpdateSubscriptionRequestOutput$ === "object");
assert(typeof UpdateSubscriptionTargetInput$ === "object");
assert(typeof UpdateSubscriptionTargetOutput$ === "object");
assert(typeof UpdateUserProfileInput$ === "object");
assert(typeof UpdateUserProfileOutput$ === "object");
assert(typeof UseAssetTypePolicyGrantDetail$ === "object");
assert(typeof UserDetails$ === "object");
assert(typeof UsernamePassword$ === "object");
assert(typeof UserPolicyGrantPrincipal$ === "object");
assert(typeof UserProfileDetails$ === "object");
assert(typeof UserProfileSummary$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DataZoneServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DataZoneServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DataZoneServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DataZoneServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DataZoneServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof DataZoneServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof DataZoneServiceException);
assert(typeof ValidationException$ === "object");
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
