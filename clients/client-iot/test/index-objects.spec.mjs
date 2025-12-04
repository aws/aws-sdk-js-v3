import {
  AbortAction,
  AcceptCertificateTransferCommand,
  ActionType,
  AddThingToBillingGroupCommand,
  AddThingToThingGroupCommand,
  AggregationTypeName,
  AlertTargetType,
  ApplicationProtocol,
  AssociateSbomWithPackageVersionCommand,
  AssociateTargetsWithJobCommand,
  AttachPolicyCommand,
  AttachPrincipalPolicyCommand,
  AttachSecurityProfileCommand,
  AttachThingPrincipalCommand,
  AuditCheckRunStatus,
  AuditFindingSeverity,
  AuditFrequency,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskStatus,
  AuditNotificationType,
  AuditTaskStatus,
  AuditTaskType,
  AuthDecision,
  AuthenticationType,
  AuthorizerStatus,
  AutoRegistrationStatus,
  AwsJobAbortCriteriaAbortAction,
  AwsJobAbortCriteriaFailureType,
  BehaviorCriteriaType,
  CACertificateStatus,
  CACertificateUpdateAction,
  CancelAuditMitigationActionsTaskCommand,
  CancelAuditTaskCommand,
  CancelCertificateTransferCommand,
  CancelDetectMitigationActionsTaskCommand,
  CancelJobCommand,
  CancelJobExecutionCommand,
  CannedAccessControlList,
  CertificateMode,
  CertificateProviderOperation,
  CertificateStatus,
  ClearDefaultAuthorizerCommand,
  CommandExecutionStatus,
  CommandNamespace,
  ComparisonOperator,
  ConfidenceLevel,
  ConfigName,
  ConfigurationStatus,
  ConfirmTopicRuleDestinationCommand,
  CreateAuditSuppressionCommand,
  CreateAuthorizerCommand,
  CreateBillingGroupCommand,
  CreateCertificateFromCsrCommand,
  CreateCertificateProviderCommand,
  CreateCommandCommand,
  CreateCustomMetricCommand,
  CreateDimensionCommand,
  CreateDomainConfigurationCommand,
  CreateDynamicThingGroupCommand,
  CreateFleetMetricCommand,
  CreateJobCommand,
  CreateJobTemplateCommand,
  CreateKeysAndCertificateCommand,
  CreateMitigationActionCommand,
  CreateOTAUpdateCommand,
  CreatePackageCommand,
  CreatePackageVersionCommand,
  CreatePolicyCommand,
  CreatePolicyVersionCommand,
  CreateProvisioningClaimCommand,
  CreateProvisioningTemplateCommand,
  CreateProvisioningTemplateVersionCommand,
  CreateRoleAliasCommand,
  CreateScheduledAuditCommand,
  CreateSecurityProfileCommand,
  CreateStreamCommand,
  CreateThingCommand,
  CreateThingGroupCommand,
  CreateThingTypeCommand,
  CreateTopicRuleCommand,
  CreateTopicRuleDestinationCommand,
  CustomMetricType,
  DayOfWeek,
  DeleteAccountAuditConfigurationCommand,
  DeleteAuditSuppressionCommand,
  DeleteAuthorizerCommand,
  DeleteBillingGroupCommand,
  DeleteCACertificateCommand,
  DeleteCertificateCommand,
  DeleteCertificateProviderCommand,
  DeleteCommandCommand,
  DeleteCommandExecutionCommand,
  DeleteCustomMetricCommand,
  DeleteDimensionCommand,
  DeleteDomainConfigurationCommand,
  DeleteDynamicThingGroupCommand,
  DeleteFleetMetricCommand,
  DeleteJobCommand,
  DeleteJobExecutionCommand,
  DeleteJobTemplateCommand,
  DeleteMitigationActionCommand,
  DeleteOTAUpdateCommand,
  DeletePackageCommand,
  DeletePackageVersionCommand,
  DeletePolicyCommand,
  DeletePolicyVersionCommand,
  DeleteProvisioningTemplateCommand,
  DeleteProvisioningTemplateVersionCommand,
  DeleteRegistrationCodeCommand,
  DeleteRoleAliasCommand,
  DeleteScheduledAuditCommand,
  DeleteSecurityProfileCommand,
  DeleteStreamCommand,
  DeleteThingCommand,
  DeleteThingGroupCommand,
  DeleteThingTypeCommand,
  DeleteTopicRuleCommand,
  DeleteTopicRuleDestinationCommand,
  DeleteV2LoggingLevelCommand,
  DeprecateThingTypeCommand,
  DescribeAccountAuditConfigurationCommand,
  DescribeAuditFindingCommand,
  DescribeAuditMitigationActionsTaskCommand,
  DescribeAuditSuppressionCommand,
  DescribeAuditTaskCommand,
  DescribeAuthorizerCommand,
  DescribeBillingGroupCommand,
  DescribeCACertificateCommand,
  DescribeCertificateCommand,
  DescribeCertificateProviderCommand,
  DescribeCustomMetricCommand,
  DescribeDefaultAuthorizerCommand,
  DescribeDetectMitigationActionsTaskCommand,
  DescribeDimensionCommand,
  DescribeDomainConfigurationCommand,
  DescribeEncryptionConfigurationCommand,
  DescribeEndpointCommand,
  DescribeEventConfigurationsCommand,
  DescribeFleetMetricCommand,
  DescribeIndexCommand,
  DescribeJobCommand,
  DescribeJobExecutionCommand,
  DescribeJobTemplateCommand,
  DescribeManagedJobTemplateCommand,
  DescribeMitigationActionCommand,
  DescribeProvisioningTemplateCommand,
  DescribeProvisioningTemplateVersionCommand,
  DescribeRoleAliasCommand,
  DescribeScheduledAuditCommand,
  DescribeSecurityProfileCommand,
  DescribeStreamCommand,
  DescribeThingCommand,
  DescribeThingGroupCommand,
  DescribeThingRegistrationTaskCommand,
  DescribeThingTypeCommand,
  DetachPolicyCommand,
  DetachPrincipalPolicyCommand,
  DetachSecurityProfileCommand,
  DetachThingPrincipalCommand,
  DetectMitigationActionExecutionStatus,
  DetectMitigationActionsTaskStatus,
  DeviceCertificateUpdateAction,
  DeviceDefenderIndexingMode,
  DimensionType,
  DimensionValueOperator,
  DisableTopicRuleCommand,
  DisassociateSbomFromPackageVersionCommand,
  DisconnectReasonValue,
  DomainConfigurationStatus,
  DomainType,
  DynamicGroupStatus,
  DynamoKeyType,
  EnableTopicRuleCommand,
  EncryptionType,
  EventType,
  FieldType,
  FleetMetricUnit,
  GetBehaviorModelTrainingSummariesCommand,
  GetBucketsAggregationCommand,
  GetCardinalityCommand,
  GetCommandCommand,
  GetCommandExecutionCommand,
  GetEffectivePoliciesCommand,
  GetIndexingConfigurationCommand,
  GetJobDocumentCommand,
  GetLoggingOptionsCommand,
  GetOTAUpdateCommand,
  GetPackageCommand,
  GetPackageConfigurationCommand,
  GetPackageVersionCommand,
  GetPercentilesCommand,
  GetPolicyCommand,
  GetPolicyVersionCommand,
  GetRegistrationCodeCommand,
  GetStatisticsCommand,
  GetThingConnectivityDataCommand,
  GetTopicRuleCommand,
  GetTopicRuleDestinationCommand,
  GetV2LoggingOptionsCommand,
  IndexStatus,
  IoT,
  IoTClient,
  IoTServiceException,
  JobEndBehavior,
  JobExecutionFailureType,
  JobExecutionStatus,
  JobStatus,
  ListActiveViolationsCommand,
  ListAttachedPoliciesCommand,
  ListAuditFindingsCommand,
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsTasksCommand,
  ListAuditSuppressionsCommand,
  ListAuditTasksCommand,
  ListAuthorizersCommand,
  ListBillingGroupsCommand,
  ListCACertificatesCommand,
  ListCertificateProvidersCommand,
  ListCertificatesByCACommand,
  ListCertificatesCommand,
  ListCommandExecutionsCommand,
  ListCommandsCommand,
  ListCustomMetricsCommand,
  ListDetectMitigationActionsExecutionsCommand,
  ListDetectMitigationActionsTasksCommand,
  ListDimensionsCommand,
  ListDomainConfigurationsCommand,
  ListFleetMetricsCommand,
  ListIndicesCommand,
  ListJobExecutionsForJobCommand,
  ListJobExecutionsForThingCommand,
  ListJobTemplatesCommand,
  ListJobsCommand,
  ListManagedJobTemplatesCommand,
  ListMetricValuesCommand,
  ListMitigationActionsCommand,
  ListOTAUpdatesCommand,
  ListOutgoingCertificatesCommand,
  ListPackageVersionsCommand,
  ListPackagesCommand,
  ListPoliciesCommand,
  ListPolicyPrincipalsCommand,
  ListPolicyVersionsCommand,
  ListPrincipalPoliciesCommand,
  ListPrincipalThingsCommand,
  ListPrincipalThingsV2Command,
  ListProvisioningTemplateVersionsCommand,
  ListProvisioningTemplatesCommand,
  ListRelatedResourcesForAuditFindingCommand,
  ListRoleAliasesCommand,
  ListSbomValidationResultsCommand,
  ListScheduledAuditsCommand,
  ListSecurityProfilesCommand,
  ListSecurityProfilesForTargetCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTargetsForPolicyCommand,
  ListTargetsForSecurityProfileCommand,
  ListThingGroupsCommand,
  ListThingGroupsForThingCommand,
  ListThingPrincipalsCommand,
  ListThingPrincipalsV2Command,
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTasksCommand,
  ListThingTypesCommand,
  ListThingsCommand,
  ListThingsInBillingGroupCommand,
  ListThingsInThingGroupCommand,
  ListTopicRuleDestinationsCommand,
  ListTopicRulesCommand,
  ListV2LoggingLevelsCommand,
  ListViolationEventsCommand,
  LogLevel,
  LogTargetType,
  MessageFormat,
  MitigationActionType,
  ModelStatus,
  NamedShadowIndexingMode,
  OTAUpdateStatus,
  PackageVersionAction,
  PackageVersionStatus,
  PolicyTemplateName,
  Protocol,
  PutVerificationStateOnViolationCommand,
  RegisterCACertificateCommand,
  RegisterCertificateCommand,
  RegisterCertificateWithoutCACommand,
  RegisterThingCommand,
  RejectCertificateTransferCommand,
  RemoveThingFromBillingGroupCommand,
  RemoveThingFromThingGroupCommand,
  ReplaceTopicRuleCommand,
  ReportType,
  ResourceType,
  RetryableFailureType,
  SbomValidationErrorCode,
  SbomValidationResult,
  SbomValidationStatus,
  SearchIndexCommand,
  ServerCertificateStatus,
  ServiceType,
  SetDefaultAuthorizerCommand,
  SetDefaultPolicyVersionCommand,
  SetLoggingOptionsCommand,
  SetV2LoggingLevelCommand,
  SetV2LoggingOptionsCommand,
  SortOrder,
  StartAuditMitigationActionsTaskCommand,
  StartDetectMitigationActionsTaskCommand,
  StartOnDemandAuditTaskCommand,
  StartThingRegistrationTaskCommand,
  Status,
  StopThingRegistrationTaskCommand,
  TagResourceCommand,
  TargetFieldOrder,
  TargetSelection,
  TemplateType,
  TestAuthorizationCommand,
  TestInvokeAuthorizerCommand,
  ThingConnectivityIndexingMode,
  ThingGroupIndexingMode,
  ThingIndexingMode,
  ThingPrincipalType,
  TopicRuleDestinationStatus,
  TransferCertificateCommand,
  UntagResourceCommand,
  UpdateAccountAuditConfigurationCommand,
  UpdateAuditSuppressionCommand,
  UpdateAuthorizerCommand,
  UpdateBillingGroupCommand,
  UpdateCACertificateCommand,
  UpdateCertificateCommand,
  UpdateCertificateProviderCommand,
  UpdateCommandCommand,
  UpdateCustomMetricCommand,
  UpdateDimensionCommand,
  UpdateDomainConfigurationCommand,
  UpdateDynamicThingGroupCommand,
  UpdateEncryptionConfigurationCommand,
  UpdateEventConfigurationsCommand,
  UpdateFleetMetricCommand,
  UpdateIndexingConfigurationCommand,
  UpdateJobCommand,
  UpdateMitigationActionCommand,
  UpdatePackageCommand,
  UpdatePackageConfigurationCommand,
  UpdatePackageVersionCommand,
  UpdateProvisioningTemplateCommand,
  UpdateRoleAliasCommand,
  UpdateScheduledAuditCommand,
  UpdateSecurityProfileCommand,
  UpdateStreamCommand,
  UpdateThingCommand,
  UpdateThingGroupCommand,
  UpdateThingGroupsForThingCommand,
  UpdateThingTypeCommand,
  UpdateTopicRuleDestinationCommand,
  ValidateSecurityProfileBehaviorsCommand,
  VerificationState,
  ViolationEventType,
  paginateGetBehaviorModelTrainingSummaries,
  paginateListActiveViolations,
  paginateListAttachedPolicies,
  paginateListAuditFindings,
  paginateListAuditMitigationActionsExecutions,
  paginateListAuditMitigationActionsTasks,
  paginateListAuditSuppressions,
  paginateListAuditTasks,
  paginateListAuthorizers,
  paginateListBillingGroups,
  paginateListCACertificates,
  paginateListCertificates,
  paginateListCertificatesByCA,
  paginateListCommandExecutions,
  paginateListCommands,
  paginateListCustomMetrics,
  paginateListDetectMitigationActionsExecutions,
  paginateListDetectMitigationActionsTasks,
  paginateListDimensions,
  paginateListDomainConfigurations,
  paginateListFleetMetrics,
  paginateListIndices,
  paginateListJobExecutionsForJob,
  paginateListJobExecutionsForThing,
  paginateListJobTemplates,
  paginateListJobs,
  paginateListManagedJobTemplates,
  paginateListMetricValues,
  paginateListMitigationActions,
  paginateListOTAUpdates,
  paginateListOutgoingCertificates,
  paginateListPackageVersions,
  paginateListPackages,
  paginateListPolicies,
  paginateListPolicyPrincipals,
  paginateListPrincipalPolicies,
  paginateListPrincipalThings,
  paginateListPrincipalThingsV2,
  paginateListProvisioningTemplateVersions,
  paginateListProvisioningTemplates,
  paginateListRelatedResourcesForAuditFinding,
  paginateListRoleAliases,
  paginateListSbomValidationResults,
  paginateListScheduledAudits,
  paginateListSecurityProfiles,
  paginateListSecurityProfilesForTarget,
  paginateListStreams,
  paginateListTagsForResource,
  paginateListTargetsForPolicy,
  paginateListTargetsForSecurityProfile,
  paginateListThingGroups,
  paginateListThingGroupsForThing,
  paginateListThingPrincipals,
  paginateListThingPrincipalsV2,
  paginateListThingRegistrationTaskReports,
  paginateListThingRegistrationTasks,
  paginateListThingTypes,
  paginateListThings,
  paginateListThingsInBillingGroup,
  paginateListThingsInThingGroup,
  paginateListTopicRuleDestinations,
  paginateListTopicRules,
  paginateListV2LoggingLevels,
  paginateListViolationEvents,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTClient === "function");
assert(typeof IoT === "function");
// commands
assert(typeof AcceptCertificateTransferCommand === "function");
assert(typeof AddThingToBillingGroupCommand === "function");
assert(typeof AddThingToThingGroupCommand === "function");
assert(typeof AssociateSbomWithPackageVersionCommand === "function");
assert(typeof AssociateTargetsWithJobCommand === "function");
assert(typeof AttachPolicyCommand === "function");
assert(typeof AttachPrincipalPolicyCommand === "function");
assert(typeof AttachSecurityProfileCommand === "function");
assert(typeof AttachThingPrincipalCommand === "function");
assert(typeof CancelAuditMitigationActionsTaskCommand === "function");
assert(typeof CancelAuditTaskCommand === "function");
assert(typeof CancelCertificateTransferCommand === "function");
assert(typeof CancelDetectMitigationActionsTaskCommand === "function");
assert(typeof CancelJobCommand === "function");
assert(typeof CancelJobExecutionCommand === "function");
assert(typeof ClearDefaultAuthorizerCommand === "function");
assert(typeof ConfirmTopicRuleDestinationCommand === "function");
assert(typeof CreateAuditSuppressionCommand === "function");
assert(typeof CreateAuthorizerCommand === "function");
assert(typeof CreateBillingGroupCommand === "function");
assert(typeof CreateCertificateFromCsrCommand === "function");
assert(typeof CreateCertificateProviderCommand === "function");
assert(typeof CreateCommandCommand === "function");
assert(typeof CreateCustomMetricCommand === "function");
assert(typeof CreateDimensionCommand === "function");
assert(typeof CreateDomainConfigurationCommand === "function");
assert(typeof CreateDynamicThingGroupCommand === "function");
assert(typeof CreateFleetMetricCommand === "function");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJobTemplateCommand === "function");
assert(typeof CreateKeysAndCertificateCommand === "function");
assert(typeof CreateMitigationActionCommand === "function");
assert(typeof CreateOTAUpdateCommand === "function");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreatePackageVersionCommand === "function");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicyVersionCommand === "function");
assert(typeof CreateProvisioningClaimCommand === "function");
assert(typeof CreateProvisioningTemplateCommand === "function");
assert(typeof CreateProvisioningTemplateVersionCommand === "function");
assert(typeof CreateRoleAliasCommand === "function");
assert(typeof CreateScheduledAuditCommand === "function");
assert(typeof CreateSecurityProfileCommand === "function");
assert(typeof CreateStreamCommand === "function");
assert(typeof CreateThingCommand === "function");
assert(typeof CreateThingGroupCommand === "function");
assert(typeof CreateThingTypeCommand === "function");
assert(typeof CreateTopicRuleCommand === "function");
assert(typeof CreateTopicRuleDestinationCommand === "function");
assert(typeof DeleteAccountAuditConfigurationCommand === "function");
assert(typeof DeleteAuditSuppressionCommand === "function");
assert(typeof DeleteAuthorizerCommand === "function");
assert(typeof DeleteBillingGroupCommand === "function");
assert(typeof DeleteCACertificateCommand === "function");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteCertificateProviderCommand === "function");
assert(typeof DeleteCommandCommand === "function");
assert(typeof DeleteCommandExecutionCommand === "function");
assert(typeof DeleteCustomMetricCommand === "function");
assert(typeof DeleteDimensionCommand === "function");
assert(typeof DeleteDomainConfigurationCommand === "function");
assert(typeof DeleteDynamicThingGroupCommand === "function");
assert(typeof DeleteFleetMetricCommand === "function");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteJobExecutionCommand === "function");
assert(typeof DeleteJobTemplateCommand === "function");
assert(typeof DeleteMitigationActionCommand === "function");
assert(typeof DeleteOTAUpdateCommand === "function");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeletePackageVersionCommand === "function");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicyVersionCommand === "function");
assert(typeof DeleteProvisioningTemplateCommand === "function");
assert(typeof DeleteProvisioningTemplateVersionCommand === "function");
assert(typeof DeleteRegistrationCodeCommand === "function");
assert(typeof DeleteRoleAliasCommand === "function");
assert(typeof DeleteScheduledAuditCommand === "function");
assert(typeof DeleteSecurityProfileCommand === "function");
assert(typeof DeleteStreamCommand === "function");
assert(typeof DeleteThingCommand === "function");
assert(typeof DeleteThingGroupCommand === "function");
assert(typeof DeleteThingTypeCommand === "function");
assert(typeof DeleteTopicRuleCommand === "function");
assert(typeof DeleteTopicRuleDestinationCommand === "function");
assert(typeof DeleteV2LoggingLevelCommand === "function");
assert(typeof DeprecateThingTypeCommand === "function");
assert(typeof DescribeAccountAuditConfigurationCommand === "function");
assert(typeof DescribeAuditFindingCommand === "function");
assert(typeof DescribeAuditMitigationActionsTaskCommand === "function");
assert(typeof DescribeAuditSuppressionCommand === "function");
assert(typeof DescribeAuditTaskCommand === "function");
assert(typeof DescribeAuthorizerCommand === "function");
assert(typeof DescribeBillingGroupCommand === "function");
assert(typeof DescribeCACertificateCommand === "function");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof DescribeCertificateProviderCommand === "function");
assert(typeof DescribeCustomMetricCommand === "function");
assert(typeof DescribeDefaultAuthorizerCommand === "function");
assert(typeof DescribeDetectMitigationActionsTaskCommand === "function");
assert(typeof DescribeDimensionCommand === "function");
assert(typeof DescribeDomainConfigurationCommand === "function");
assert(typeof DescribeEncryptionConfigurationCommand === "function");
assert(typeof DescribeEndpointCommand === "function");
assert(typeof DescribeEventConfigurationsCommand === "function");
assert(typeof DescribeFleetMetricCommand === "function");
assert(typeof DescribeIndexCommand === "function");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeJobExecutionCommand === "function");
assert(typeof DescribeJobTemplateCommand === "function");
assert(typeof DescribeManagedJobTemplateCommand === "function");
assert(typeof DescribeMitigationActionCommand === "function");
assert(typeof DescribeProvisioningTemplateCommand === "function");
assert(typeof DescribeProvisioningTemplateVersionCommand === "function");
assert(typeof DescribeRoleAliasCommand === "function");
assert(typeof DescribeScheduledAuditCommand === "function");
assert(typeof DescribeSecurityProfileCommand === "function");
assert(typeof DescribeStreamCommand === "function");
assert(typeof DescribeThingCommand === "function");
assert(typeof DescribeThingGroupCommand === "function");
assert(typeof DescribeThingRegistrationTaskCommand === "function");
assert(typeof DescribeThingTypeCommand === "function");
assert(typeof DetachPolicyCommand === "function");
assert(typeof DetachPrincipalPolicyCommand === "function");
assert(typeof DetachSecurityProfileCommand === "function");
assert(typeof DetachThingPrincipalCommand === "function");
assert(typeof DisableTopicRuleCommand === "function");
assert(typeof DisassociateSbomFromPackageVersionCommand === "function");
assert(typeof EnableTopicRuleCommand === "function");
assert(typeof GetBehaviorModelTrainingSummariesCommand === "function");
assert(typeof GetBucketsAggregationCommand === "function");
assert(typeof GetCardinalityCommand === "function");
assert(typeof GetCommandCommand === "function");
assert(typeof GetCommandExecutionCommand === "function");
assert(typeof GetEffectivePoliciesCommand === "function");
assert(typeof GetIndexingConfigurationCommand === "function");
assert(typeof GetJobDocumentCommand === "function");
assert(typeof GetLoggingOptionsCommand === "function");
assert(typeof GetOTAUpdateCommand === "function");
assert(typeof GetPackageCommand === "function");
assert(typeof GetPackageConfigurationCommand === "function");
assert(typeof GetPackageVersionCommand === "function");
assert(typeof GetPercentilesCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicyVersionCommand === "function");
assert(typeof GetRegistrationCodeCommand === "function");
assert(typeof GetStatisticsCommand === "function");
assert(typeof GetThingConnectivityDataCommand === "function");
assert(typeof GetTopicRuleCommand === "function");
assert(typeof GetTopicRuleDestinationCommand === "function");
assert(typeof GetV2LoggingOptionsCommand === "function");
assert(typeof ListActiveViolationsCommand === "function");
assert(typeof ListAttachedPoliciesCommand === "function");
assert(typeof ListAuditFindingsCommand === "function");
assert(typeof ListAuditMitigationActionsExecutionsCommand === "function");
assert(typeof ListAuditMitigationActionsTasksCommand === "function");
assert(typeof ListAuditSuppressionsCommand === "function");
assert(typeof ListAuditTasksCommand === "function");
assert(typeof ListAuthorizersCommand === "function");
assert(typeof ListBillingGroupsCommand === "function");
assert(typeof ListCACertificatesCommand === "function");
assert(typeof ListCertificateProvidersCommand === "function");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListCertificatesByCACommand === "function");
assert(typeof ListCommandExecutionsCommand === "function");
assert(typeof ListCommandsCommand === "function");
assert(typeof ListCustomMetricsCommand === "function");
assert(typeof ListDetectMitigationActionsExecutionsCommand === "function");
assert(typeof ListDetectMitigationActionsTasksCommand === "function");
assert(typeof ListDimensionsCommand === "function");
assert(typeof ListDomainConfigurationsCommand === "function");
assert(typeof ListFleetMetricsCommand === "function");
assert(typeof ListIndicesCommand === "function");
assert(typeof ListJobExecutionsForJobCommand === "function");
assert(typeof ListJobExecutionsForThingCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobTemplatesCommand === "function");
assert(typeof ListManagedJobTemplatesCommand === "function");
assert(typeof ListMetricValuesCommand === "function");
assert(typeof ListMitigationActionsCommand === "function");
assert(typeof ListOTAUpdatesCommand === "function");
assert(typeof ListOutgoingCertificatesCommand === "function");
assert(typeof ListPackagesCommand === "function");
assert(typeof ListPackageVersionsCommand === "function");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicyPrincipalsCommand === "function");
assert(typeof ListPolicyVersionsCommand === "function");
assert(typeof ListPrincipalPoliciesCommand === "function");
assert(typeof ListPrincipalThingsCommand === "function");
assert(typeof ListPrincipalThingsV2Command === "function");
assert(typeof ListProvisioningTemplatesCommand === "function");
assert(typeof ListProvisioningTemplateVersionsCommand === "function");
assert(typeof ListRelatedResourcesForAuditFindingCommand === "function");
assert(typeof ListRoleAliasesCommand === "function");
assert(typeof ListSbomValidationResultsCommand === "function");
assert(typeof ListScheduledAuditsCommand === "function");
assert(typeof ListSecurityProfilesCommand === "function");
assert(typeof ListSecurityProfilesForTargetCommand === "function");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTargetsForPolicyCommand === "function");
assert(typeof ListTargetsForSecurityProfileCommand === "function");
assert(typeof ListThingGroupsCommand === "function");
assert(typeof ListThingGroupsForThingCommand === "function");
assert(typeof ListThingPrincipalsCommand === "function");
assert(typeof ListThingPrincipalsV2Command === "function");
assert(typeof ListThingRegistrationTaskReportsCommand === "function");
assert(typeof ListThingRegistrationTasksCommand === "function");
assert(typeof ListThingsCommand === "function");
assert(typeof ListThingsInBillingGroupCommand === "function");
assert(typeof ListThingsInThingGroupCommand === "function");
assert(typeof ListThingTypesCommand === "function");
assert(typeof ListTopicRuleDestinationsCommand === "function");
assert(typeof ListTopicRulesCommand === "function");
assert(typeof ListV2LoggingLevelsCommand === "function");
assert(typeof ListViolationEventsCommand === "function");
assert(typeof PutVerificationStateOnViolationCommand === "function");
assert(typeof RegisterCACertificateCommand === "function");
assert(typeof RegisterCertificateCommand === "function");
assert(typeof RegisterCertificateWithoutCACommand === "function");
assert(typeof RegisterThingCommand === "function");
assert(typeof RejectCertificateTransferCommand === "function");
assert(typeof RemoveThingFromBillingGroupCommand === "function");
assert(typeof RemoveThingFromThingGroupCommand === "function");
assert(typeof ReplaceTopicRuleCommand === "function");
assert(typeof SearchIndexCommand === "function");
assert(typeof SetDefaultAuthorizerCommand === "function");
assert(typeof SetDefaultPolicyVersionCommand === "function");
assert(typeof SetLoggingOptionsCommand === "function");
assert(typeof SetV2LoggingLevelCommand === "function");
assert(typeof SetV2LoggingOptionsCommand === "function");
assert(typeof StartAuditMitigationActionsTaskCommand === "function");
assert(typeof StartDetectMitigationActionsTaskCommand === "function");
assert(typeof StartOnDemandAuditTaskCommand === "function");
assert(typeof StartThingRegistrationTaskCommand === "function");
assert(typeof StopThingRegistrationTaskCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestAuthorizationCommand === "function");
assert(typeof TestInvokeAuthorizerCommand === "function");
assert(typeof TransferCertificateCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountAuditConfigurationCommand === "function");
assert(typeof UpdateAuditSuppressionCommand === "function");
assert(typeof UpdateAuthorizerCommand === "function");
assert(typeof UpdateBillingGroupCommand === "function");
assert(typeof UpdateCACertificateCommand === "function");
assert(typeof UpdateCertificateCommand === "function");
assert(typeof UpdateCertificateProviderCommand === "function");
assert(typeof UpdateCommandCommand === "function");
assert(typeof UpdateCustomMetricCommand === "function");
assert(typeof UpdateDimensionCommand === "function");
assert(typeof UpdateDomainConfigurationCommand === "function");
assert(typeof UpdateDynamicThingGroupCommand === "function");
assert(typeof UpdateEncryptionConfigurationCommand === "function");
assert(typeof UpdateEventConfigurationsCommand === "function");
assert(typeof UpdateFleetMetricCommand === "function");
assert(typeof UpdateIndexingConfigurationCommand === "function");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateMitigationActionCommand === "function");
assert(typeof UpdatePackageCommand === "function");
assert(typeof UpdatePackageConfigurationCommand === "function");
assert(typeof UpdatePackageVersionCommand === "function");
assert(typeof UpdateProvisioningTemplateCommand === "function");
assert(typeof UpdateRoleAliasCommand === "function");
assert(typeof UpdateScheduledAuditCommand === "function");
assert(typeof UpdateSecurityProfileCommand === "function");
assert(typeof UpdateStreamCommand === "function");
assert(typeof UpdateThingCommand === "function");
assert(typeof UpdateThingGroupCommand === "function");
assert(typeof UpdateThingGroupsForThingCommand === "function");
assert(typeof UpdateThingTypeCommand === "function");
assert(typeof UpdateTopicRuleDestinationCommand === "function");
assert(typeof ValidateSecurityProfileBehaviorsCommand === "function");
// enums
assert(typeof AbortAction === "object");
assert(typeof ActionType === "object");
assert(typeof AggregationTypeName === "object");
assert(typeof AlertTargetType === "object");
assert(typeof ApplicationProtocol === "object");
assert(typeof AuditCheckRunStatus === "object");
assert(typeof AuditFindingSeverity === "object");
assert(typeof AuditFrequency === "object");
assert(typeof AuditMitigationActionsExecutionStatus === "object");
assert(typeof AuditMitigationActionsTaskStatus === "object");
assert(typeof AuditNotificationType === "object");
assert(typeof AuditTaskStatus === "object");
assert(typeof AuditTaskType === "object");
assert(typeof AuthDecision === "object");
assert(typeof AuthenticationType === "object");
assert(typeof AuthorizerStatus === "object");
assert(typeof AutoRegistrationStatus === "object");
assert(typeof AwsJobAbortCriteriaAbortAction === "object");
assert(typeof AwsJobAbortCriteriaFailureType === "object");
assert(typeof BehaviorCriteriaType === "object");
assert(typeof CACertificateStatus === "object");
assert(typeof CACertificateUpdateAction === "object");
assert(typeof CannedAccessControlList === "object");
assert(typeof CertificateMode === "object");
assert(typeof CertificateProviderOperation === "object");
assert(typeof CertificateStatus === "object");
assert(typeof CommandExecutionStatus === "object");
assert(typeof CommandNamespace === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof ConfidenceLevel === "object");
assert(typeof ConfigName === "object");
assert(typeof ConfigurationStatus === "object");
assert(typeof CustomMetricType === "object");
assert(typeof DayOfWeek === "object");
assert(typeof DetectMitigationActionExecutionStatus === "object");
assert(typeof DetectMitigationActionsTaskStatus === "object");
assert(typeof DeviceCertificateUpdateAction === "object");
assert(typeof DeviceDefenderIndexingMode === "object");
assert(typeof DimensionType === "object");
assert(typeof DimensionValueOperator === "object");
assert(typeof DisconnectReasonValue === "object");
assert(typeof DomainConfigurationStatus === "object");
assert(typeof DomainType === "object");
assert(typeof DynamicGroupStatus === "object");
assert(typeof DynamoKeyType === "object");
assert(typeof EncryptionType === "object");
assert(typeof EventType === "object");
assert(typeof FieldType === "object");
assert(typeof FleetMetricUnit === "object");
assert(typeof IndexStatus === "object");
assert(typeof JobEndBehavior === "object");
assert(typeof JobExecutionFailureType === "object");
assert(typeof JobExecutionStatus === "object");
assert(typeof JobStatus === "object");
assert(typeof LogLevel === "object");
assert(typeof LogTargetType === "object");
assert(typeof MessageFormat === "object");
assert(typeof MitigationActionType === "object");
assert(typeof ModelStatus === "object");
assert(typeof NamedShadowIndexingMode === "object");
assert(typeof OTAUpdateStatus === "object");
assert(typeof PackageVersionAction === "object");
assert(typeof PackageVersionStatus === "object");
assert(typeof PolicyTemplateName === "object");
assert(typeof Protocol === "object");
assert(typeof ReportType === "object");
assert(typeof ResourceType === "object");
assert(typeof RetryableFailureType === "object");
assert(typeof SbomValidationErrorCode === "object");
assert(typeof SbomValidationResult === "object");
assert(typeof SbomValidationStatus === "object");
assert(typeof ServerCertificateStatus === "object");
assert(typeof ServiceType === "object");
assert(typeof SortOrder === "object");
assert(typeof Status === "object");
assert(typeof TargetFieldOrder === "object");
assert(typeof TargetSelection === "object");
assert(typeof TemplateType === "object");
assert(typeof ThingConnectivityIndexingMode === "object");
assert(typeof ThingGroupIndexingMode === "object");
assert(typeof ThingIndexingMode === "object");
assert(typeof ThingPrincipalType === "object");
assert(typeof TopicRuleDestinationStatus === "object");
assert(typeof VerificationState === "object");
assert(typeof ViolationEventType === "object");
// errors
assert(IoTServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetBehaviorModelTrainingSummaries === "function");
assert(typeof paginateListActiveViolations === "function");
assert(typeof paginateListAttachedPolicies === "function");
assert(typeof paginateListAuditFindings === "function");
assert(typeof paginateListAuditMitigationActionsExecutions === "function");
assert(typeof paginateListAuditMitigationActionsTasks === "function");
assert(typeof paginateListAuditSuppressions === "function");
assert(typeof paginateListAuditTasks === "function");
assert(typeof paginateListAuthorizers === "function");
assert(typeof paginateListBillingGroups === "function");
assert(typeof paginateListCACertificates === "function");
assert(typeof paginateListCertificates === "function");
assert(typeof paginateListCertificatesByCA === "function");
assert(typeof paginateListCommandExecutions === "function");
assert(typeof paginateListCommands === "function");
assert(typeof paginateListCustomMetrics === "function");
assert(typeof paginateListDetectMitigationActionsExecutions === "function");
assert(typeof paginateListDetectMitigationActionsTasks === "function");
assert(typeof paginateListDimensions === "function");
assert(typeof paginateListDomainConfigurations === "function");
assert(typeof paginateListFleetMetrics === "function");
assert(typeof paginateListIndices === "function");
assert(typeof paginateListJobExecutionsForJob === "function");
assert(typeof paginateListJobExecutionsForThing === "function");
assert(typeof paginateListJobTemplates === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListManagedJobTemplates === "function");
assert(typeof paginateListMetricValues === "function");
assert(typeof paginateListMitigationActions === "function");
assert(typeof paginateListOTAUpdates === "function");
assert(typeof paginateListOutgoingCertificates === "function");
assert(typeof paginateListPackageVersions === "function");
assert(typeof paginateListPackages === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyPrincipals === "function");
assert(typeof paginateListPrincipalPolicies === "function");
assert(typeof paginateListPrincipalThings === "function");
assert(typeof paginateListPrincipalThingsV2 === "function");
assert(typeof paginateListProvisioningTemplateVersions === "function");
assert(typeof paginateListProvisioningTemplates === "function");
assert(typeof paginateListRelatedResourcesForAuditFinding === "function");
assert(typeof paginateListRoleAliases === "function");
assert(typeof paginateListSbomValidationResults === "function");
assert(typeof paginateListScheduledAudits === "function");
assert(typeof paginateListSecurityProfiles === "function");
assert(typeof paginateListSecurityProfilesForTarget === "function");
assert(typeof paginateListStreams === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTargetsForPolicy === "function");
assert(typeof paginateListTargetsForSecurityProfile === "function");
assert(typeof paginateListThingGroups === "function");
assert(typeof paginateListThingGroupsForThing === "function");
assert(typeof paginateListThingPrincipals === "function");
assert(typeof paginateListThingPrincipalsV2 === "function");
assert(typeof paginateListThingRegistrationTaskReports === "function");
assert(typeof paginateListThingRegistrationTasks === "function");
assert(typeof paginateListThingTypes === "function");
assert(typeof paginateListThings === "function");
assert(typeof paginateListThingsInBillingGroup === "function");
assert(typeof paginateListThingsInThingGroup === "function");
assert(typeof paginateListTopicRuleDestinations === "function");
assert(typeof paginateListTopicRules === "function");
assert(typeof paginateListV2LoggingLevels === "function");
assert(typeof paginateListViolationEvents === "function");
console.log(`IoT index test passed.`);
