import {
  _Stream$,
  AbortAction,
  AbortConfig$,
  AbortCriteria$,
  AcceptCertificateTransfer$,
  AcceptCertificateTransferCommand,
  AcceptCertificateTransferRequest$,
  Action$,
  ActionType,
  ActiveViolation$,
  AddThingsToThingGroupParams$,
  AddThingToBillingGroup$,
  AddThingToBillingGroupCommand,
  AddThingToBillingGroupRequest$,
  AddThingToBillingGroupResponse$,
  AddThingToThingGroup$,
  AddThingToThingGroupCommand,
  AddThingToThingGroupRequest$,
  AddThingToThingGroupResponse$,
  AggregationType$,
  AggregationTypeName,
  AlertTarget$,
  AlertTargetType,
  Allowed$,
  ApplicationProtocol,
  AssetPropertyTimestamp$,
  AssetPropertyValue$,
  AssetPropertyVariant$,
  AssociateSbomWithPackageVersion$,
  AssociateSbomWithPackageVersionCommand,
  AssociateSbomWithPackageVersionRequest$,
  AssociateSbomWithPackageVersionResponse$,
  AssociateTargetsWithJob$,
  AssociateTargetsWithJobCommand,
  AssociateTargetsWithJobRequest$,
  AssociateTargetsWithJobResponse$,
  AttachPolicy$,
  AttachPolicyCommand,
  AttachPolicyRequest$,
  AttachPrincipalPolicy$,
  AttachPrincipalPolicyCommand,
  AttachPrincipalPolicyRequest$,
  AttachSecurityProfile$,
  AttachSecurityProfileCommand,
  AttachSecurityProfileRequest$,
  AttachSecurityProfileResponse$,
  AttachThingPrincipal$,
  AttachThingPrincipalCommand,
  AttachThingPrincipalRequest$,
  AttachThingPrincipalResponse$,
  AttributePayload$,
  AuditCheckConfiguration$,
  AuditCheckDetails$,
  AuditCheckRunStatus,
  AuditFinding$,
  AuditFindingSeverity,
  AuditFrequency,
  AuditMitigationActionExecutionMetadata$,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskMetadata$,
  AuditMitigationActionsTaskStatus,
  AuditMitigationActionsTaskTarget$,
  AuditNotificationTarget$,
  AuditNotificationType,
  AuditSuppression$,
  AuditTaskMetadata$,
  AuditTaskStatus,
  AuditTaskType,
  AuthDecision,
  AuthenticationType,
  AuthInfo$,
  AuthorizerConfig$,
  AuthorizerDescription$,
  AuthorizerStatus,
  AuthorizerSummary$,
  AuthResult$,
  AutoRegistrationStatus,
  AwsJobAbortConfig$,
  AwsJobAbortCriteria$,
  AwsJobAbortCriteriaAbortAction,
  AwsJobAbortCriteriaFailureType,
  AwsJobExecutionsRolloutConfig$,
  AwsJobExponentialRolloutRate$,
  AwsJobPresignedUrlConfig$,
  AwsJobRateIncreaseCriteria$,
  AwsJobTimeoutConfig$,
  AwsJsonSubstitutionCommandPreprocessorConfig$,
  BatchConfig$,
  Behavior$,
  BehaviorCriteria$,
  BehaviorCriteriaType,
  BehaviorModelTrainingSummary$,
  BillingGroupMetadata$,
  BillingGroupProperties$,
  Bucket$,
  BucketsAggregationType$,
  CACertificate$,
  CACertificateDescription$,
  CACertificateStatus,
  CACertificateUpdateAction,
  CancelAuditMitigationActionsTask$,
  CancelAuditMitigationActionsTaskCommand,
  CancelAuditMitigationActionsTaskRequest$,
  CancelAuditMitigationActionsTaskResponse$,
  CancelAuditTask$,
  CancelAuditTaskCommand,
  CancelAuditTaskRequest$,
  CancelAuditTaskResponse$,
  CancelCertificateTransfer$,
  CancelCertificateTransferCommand,
  CancelCertificateTransferRequest$,
  CancelDetectMitigationActionsTask$,
  CancelDetectMitigationActionsTaskCommand,
  CancelDetectMitigationActionsTaskRequest$,
  CancelDetectMitigationActionsTaskResponse$,
  CancelJob$,
  CancelJobCommand,
  CancelJobExecution$,
  CancelJobExecutionCommand,
  CancelJobExecutionRequest$,
  CancelJobRequest$,
  CancelJobResponse$,
  CannedAccessControlList,
  Certificate$,
  CertificateConflictException,
  CertificateConflictException$,
  CertificateDescription$,
  CertificateMode,
  CertificateProviderOperation,
  CertificateProviderSummary$,
  CertificateStateException,
  CertificateStateException$,
  CertificateStatus,
  CertificateValidationException,
  CertificateValidationException$,
  CertificateValidity$,
  ClearDefaultAuthorizer$,
  ClearDefaultAuthorizerCommand,
  ClearDefaultAuthorizerRequest$,
  ClearDefaultAuthorizerResponse$,
  ClientCertificateConfig$,
  CloudwatchAlarmAction$,
  CloudwatchLogsAction$,
  CloudwatchMetricAction$,
  CodeSigning$,
  CodeSigningCertificateChain$,
  CodeSigningSignature$,
  CommandExecutionResult$,
  CommandExecutionStatus,
  CommandExecutionSummary$,
  CommandNamespace,
  CommandParameter$,
  CommandParameterType,
  CommandParameterValue$,
  CommandParameterValueComparisonOperand$,
  CommandParameterValueComparisonOperator,
  CommandParameterValueCondition$,
  CommandParameterValueNumberRange$,
  CommandPayload$,
  CommandPreprocessor$,
  CommandSummary$,
  ComparisonOperator,
  ConfidenceLevel,
  ConfigName,
  Configuration$,
  ConfigurationDetails$,
  ConfigurationStatus,
  ConfirmTopicRuleDestination$,
  ConfirmTopicRuleDestinationCommand,
  ConfirmTopicRuleDestinationRequest$,
  ConfirmTopicRuleDestinationResponse$,
  ConflictException,
  ConflictException$,
  ConflictingResourceUpdateException,
  ConflictingResourceUpdateException$,
  CreateAuditSuppression$,
  CreateAuditSuppressionCommand,
  CreateAuditSuppressionRequest$,
  CreateAuditSuppressionResponse$,
  CreateAuthorizer$,
  CreateAuthorizerCommand,
  CreateAuthorizerRequest$,
  CreateAuthorizerResponse$,
  CreateBillingGroup$,
  CreateBillingGroupCommand,
  CreateBillingGroupRequest$,
  CreateBillingGroupResponse$,
  CreateCertificateFromCsr$,
  CreateCertificateFromCsrCommand,
  CreateCertificateFromCsrRequest$,
  CreateCertificateFromCsrResponse$,
  CreateCertificateProvider$,
  CreateCertificateProviderCommand,
  CreateCertificateProviderRequest$,
  CreateCertificateProviderResponse$,
  CreateCommand$,
  CreateCommandCommand,
  CreateCommandRequest$,
  CreateCommandResponse$,
  CreateCustomMetric$,
  CreateCustomMetricCommand,
  CreateCustomMetricRequest$,
  CreateCustomMetricResponse$,
  CreateDimension$,
  CreateDimensionCommand,
  CreateDimensionRequest$,
  CreateDimensionResponse$,
  CreateDomainConfiguration$,
  CreateDomainConfigurationCommand,
  CreateDomainConfigurationRequest$,
  CreateDomainConfigurationResponse$,
  CreateDynamicThingGroup$,
  CreateDynamicThingGroupCommand,
  CreateDynamicThingGroupRequest$,
  CreateDynamicThingGroupResponse$,
  CreateFleetMetric$,
  CreateFleetMetricCommand,
  CreateFleetMetricRequest$,
  CreateFleetMetricResponse$,
  CreateJob$,
  CreateJobCommand,
  CreateJobRequest$,
  CreateJobResponse$,
  CreateJobTemplate$,
  CreateJobTemplateCommand,
  CreateJobTemplateRequest$,
  CreateJobTemplateResponse$,
  CreateKeysAndCertificate$,
  CreateKeysAndCertificateCommand,
  CreateKeysAndCertificateRequest$,
  CreateKeysAndCertificateResponse$,
  CreateMitigationAction$,
  CreateMitigationActionCommand,
  CreateMitigationActionRequest$,
  CreateMitigationActionResponse$,
  CreateOTAUpdate$,
  CreateOTAUpdateCommand,
  CreateOTAUpdateRequest$,
  CreateOTAUpdateResponse$,
  CreatePackage$,
  CreatePackageCommand,
  CreatePackageRequest$,
  CreatePackageResponse$,
  CreatePackageVersion$,
  CreatePackageVersionCommand,
  CreatePackageVersionRequest$,
  CreatePackageVersionResponse$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyRequest$,
  CreatePolicyResponse$,
  CreatePolicyVersion$,
  CreatePolicyVersionCommand,
  CreatePolicyVersionRequest$,
  CreatePolicyVersionResponse$,
  CreateProvisioningClaim$,
  CreateProvisioningClaimCommand,
  CreateProvisioningClaimRequest$,
  CreateProvisioningClaimResponse$,
  CreateProvisioningTemplate$,
  CreateProvisioningTemplateCommand,
  CreateProvisioningTemplateRequest$,
  CreateProvisioningTemplateResponse$,
  CreateProvisioningTemplateVersion$,
  CreateProvisioningTemplateVersionCommand,
  CreateProvisioningTemplateVersionRequest$,
  CreateProvisioningTemplateVersionResponse$,
  CreateRoleAlias$,
  CreateRoleAliasCommand,
  CreateRoleAliasRequest$,
  CreateRoleAliasResponse$,
  CreateScheduledAudit$,
  CreateScheduledAuditCommand,
  CreateScheduledAuditRequest$,
  CreateScheduledAuditResponse$,
  CreateSecurityProfile$,
  CreateSecurityProfileCommand,
  CreateSecurityProfileRequest$,
  CreateSecurityProfileResponse$,
  CreateStream$,
  CreateStreamCommand,
  CreateStreamRequest$,
  CreateStreamResponse$,
  CreateThing$,
  CreateThingCommand,
  CreateThingGroup$,
  CreateThingGroupCommand,
  CreateThingGroupRequest$,
  CreateThingGroupResponse$,
  CreateThingRequest$,
  CreateThingResponse$,
  CreateThingType$,
  CreateThingTypeCommand,
  CreateThingTypeRequest$,
  CreateThingTypeResponse$,
  CreateTopicRule$,
  CreateTopicRuleCommand,
  CreateTopicRuleDestination$,
  CreateTopicRuleDestinationCommand,
  CreateTopicRuleDestinationRequest$,
  CreateTopicRuleDestinationResponse$,
  CreateTopicRuleRequest$,
  CustomCodeSigning$,
  CustomMetricType,
  DayOfWeek,
  DeleteAccountAuditConfiguration$,
  DeleteAccountAuditConfigurationCommand,
  DeleteAccountAuditConfigurationRequest$,
  DeleteAccountAuditConfigurationResponse$,
  DeleteAuditSuppression$,
  DeleteAuditSuppressionCommand,
  DeleteAuditSuppressionRequest$,
  DeleteAuditSuppressionResponse$,
  DeleteAuthorizer$,
  DeleteAuthorizerCommand,
  DeleteAuthorizerRequest$,
  DeleteAuthorizerResponse$,
  DeleteBillingGroup$,
  DeleteBillingGroupCommand,
  DeleteBillingGroupRequest$,
  DeleteBillingGroupResponse$,
  DeleteCACertificate$,
  DeleteCACertificateCommand,
  DeleteCACertificateRequest$,
  DeleteCACertificateResponse$,
  DeleteCertificate$,
  DeleteCertificateCommand,
  DeleteCertificateProvider$,
  DeleteCertificateProviderCommand,
  DeleteCertificateProviderRequest$,
  DeleteCertificateProviderResponse$,
  DeleteCertificateRequest$,
  DeleteCommand$,
  DeleteCommandCommand,
  DeleteCommandExecution$,
  DeleteCommandExecutionCommand,
  DeleteCommandExecutionRequest$,
  DeleteCommandExecutionResponse$,
  DeleteCommandRequest$,
  DeleteCommandResponse$,
  DeleteConflictException,
  DeleteConflictException$,
  DeleteCustomMetric$,
  DeleteCustomMetricCommand,
  DeleteCustomMetricRequest$,
  DeleteCustomMetricResponse$,
  DeleteDimension$,
  DeleteDimensionCommand,
  DeleteDimensionRequest$,
  DeleteDimensionResponse$,
  DeleteDomainConfiguration$,
  DeleteDomainConfigurationCommand,
  DeleteDomainConfigurationRequest$,
  DeleteDomainConfigurationResponse$,
  DeleteDynamicThingGroup$,
  DeleteDynamicThingGroupCommand,
  DeleteDynamicThingGroupRequest$,
  DeleteDynamicThingGroupResponse$,
  DeleteFleetMetric$,
  DeleteFleetMetricCommand,
  DeleteFleetMetricRequest$,
  DeleteJob$,
  DeleteJobCommand,
  DeleteJobExecution$,
  DeleteJobExecutionCommand,
  DeleteJobExecutionRequest$,
  DeleteJobRequest$,
  DeleteJobTemplate$,
  DeleteJobTemplateCommand,
  DeleteJobTemplateRequest$,
  DeleteMitigationAction$,
  DeleteMitigationActionCommand,
  DeleteMitigationActionRequest$,
  DeleteMitigationActionResponse$,
  DeleteOTAUpdate$,
  DeleteOTAUpdateCommand,
  DeleteOTAUpdateRequest$,
  DeleteOTAUpdateResponse$,
  DeletePackage$,
  DeletePackageCommand,
  DeletePackageRequest$,
  DeletePackageResponse$,
  DeletePackageVersion$,
  DeletePackageVersionCommand,
  DeletePackageVersionRequest$,
  DeletePackageVersionResponse$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyRequest$,
  DeletePolicyVersion$,
  DeletePolicyVersionCommand,
  DeletePolicyVersionRequest$,
  DeleteProvisioningTemplate$,
  DeleteProvisioningTemplateCommand,
  DeleteProvisioningTemplateRequest$,
  DeleteProvisioningTemplateResponse$,
  DeleteProvisioningTemplateVersion$,
  DeleteProvisioningTemplateVersionCommand,
  DeleteProvisioningTemplateVersionRequest$,
  DeleteProvisioningTemplateVersionResponse$,
  DeleteRegistrationCode$,
  DeleteRegistrationCodeCommand,
  DeleteRegistrationCodeRequest$,
  DeleteRegistrationCodeResponse$,
  DeleteRoleAlias$,
  DeleteRoleAliasCommand,
  DeleteRoleAliasRequest$,
  DeleteRoleAliasResponse$,
  DeleteScheduledAudit$,
  DeleteScheduledAuditCommand,
  DeleteScheduledAuditRequest$,
  DeleteScheduledAuditResponse$,
  DeleteSecurityProfile$,
  DeleteSecurityProfileCommand,
  DeleteSecurityProfileRequest$,
  DeleteSecurityProfileResponse$,
  DeleteStream$,
  DeleteStreamCommand,
  DeleteStreamRequest$,
  DeleteStreamResponse$,
  DeleteThing$,
  DeleteThingCommand,
  DeleteThingGroup$,
  DeleteThingGroupCommand,
  DeleteThingGroupRequest$,
  DeleteThingGroupResponse$,
  DeleteThingRequest$,
  DeleteThingResponse$,
  DeleteThingType$,
  DeleteThingTypeCommand,
  DeleteThingTypeRequest$,
  DeleteThingTypeResponse$,
  DeleteTopicRule$,
  DeleteTopicRuleCommand,
  DeleteTopicRuleDestination$,
  DeleteTopicRuleDestinationCommand,
  DeleteTopicRuleDestinationRequest$,
  DeleteTopicRuleDestinationResponse$,
  DeleteTopicRuleRequest$,
  DeleteV2LoggingLevel$,
  DeleteV2LoggingLevelCommand,
  DeleteV2LoggingLevelRequest$,
  Denied$,
  DeprecateThingType$,
  DeprecateThingTypeCommand,
  DeprecateThingTypeRequest$,
  DeprecateThingTypeResponse$,
  DescribeAccountAuditConfiguration$,
  DescribeAccountAuditConfigurationCommand,
  DescribeAccountAuditConfigurationRequest$,
  DescribeAccountAuditConfigurationResponse$,
  DescribeAuditFinding$,
  DescribeAuditFindingCommand,
  DescribeAuditFindingRequest$,
  DescribeAuditFindingResponse$,
  DescribeAuditMitigationActionsTask$,
  DescribeAuditMitigationActionsTaskCommand,
  DescribeAuditMitigationActionsTaskRequest$,
  DescribeAuditMitigationActionsTaskResponse$,
  DescribeAuditSuppression$,
  DescribeAuditSuppressionCommand,
  DescribeAuditSuppressionRequest$,
  DescribeAuditSuppressionResponse$,
  DescribeAuditTask$,
  DescribeAuditTaskCommand,
  DescribeAuditTaskRequest$,
  DescribeAuditTaskResponse$,
  DescribeAuthorizer$,
  DescribeAuthorizerCommand,
  DescribeAuthorizerRequest$,
  DescribeAuthorizerResponse$,
  DescribeBillingGroup$,
  DescribeBillingGroupCommand,
  DescribeBillingGroupRequest$,
  DescribeBillingGroupResponse$,
  DescribeCACertificate$,
  DescribeCACertificateCommand,
  DescribeCACertificateRequest$,
  DescribeCACertificateResponse$,
  DescribeCertificate$,
  DescribeCertificateCommand,
  DescribeCertificateProvider$,
  DescribeCertificateProviderCommand,
  DescribeCertificateProviderRequest$,
  DescribeCertificateProviderResponse$,
  DescribeCertificateRequest$,
  DescribeCertificateResponse$,
  DescribeCustomMetric$,
  DescribeCustomMetricCommand,
  DescribeCustomMetricRequest$,
  DescribeCustomMetricResponse$,
  DescribeDefaultAuthorizer$,
  DescribeDefaultAuthorizerCommand,
  DescribeDefaultAuthorizerRequest$,
  DescribeDefaultAuthorizerResponse$,
  DescribeDetectMitigationActionsTask$,
  DescribeDetectMitigationActionsTaskCommand,
  DescribeDetectMitigationActionsTaskRequest$,
  DescribeDetectMitigationActionsTaskResponse$,
  DescribeDimension$,
  DescribeDimensionCommand,
  DescribeDimensionRequest$,
  DescribeDimensionResponse$,
  DescribeDomainConfiguration$,
  DescribeDomainConfigurationCommand,
  DescribeDomainConfigurationRequest$,
  DescribeDomainConfigurationResponse$,
  DescribeEncryptionConfiguration$,
  DescribeEncryptionConfigurationCommand,
  DescribeEncryptionConfigurationRequest$,
  DescribeEncryptionConfigurationResponse$,
  DescribeEndpoint$,
  DescribeEndpointCommand,
  DescribeEndpointRequest$,
  DescribeEndpointResponse$,
  DescribeEventConfigurations$,
  DescribeEventConfigurationsCommand,
  DescribeEventConfigurationsRequest$,
  DescribeEventConfigurationsResponse$,
  DescribeFleetMetric$,
  DescribeFleetMetricCommand,
  DescribeFleetMetricRequest$,
  DescribeFleetMetricResponse$,
  DescribeIndex$,
  DescribeIndexCommand,
  DescribeIndexRequest$,
  DescribeIndexResponse$,
  DescribeJob$,
  DescribeJobCommand,
  DescribeJobExecution$,
  DescribeJobExecutionCommand,
  DescribeJobExecutionRequest$,
  DescribeJobExecutionResponse$,
  DescribeJobRequest$,
  DescribeJobResponse$,
  DescribeJobTemplate$,
  DescribeJobTemplateCommand,
  DescribeJobTemplateRequest$,
  DescribeJobTemplateResponse$,
  DescribeManagedJobTemplate$,
  DescribeManagedJobTemplateCommand,
  DescribeManagedJobTemplateRequest$,
  DescribeManagedJobTemplateResponse$,
  DescribeMitigationAction$,
  DescribeMitigationActionCommand,
  DescribeMitigationActionRequest$,
  DescribeMitigationActionResponse$,
  DescribeProvisioningTemplate$,
  DescribeProvisioningTemplateCommand,
  DescribeProvisioningTemplateRequest$,
  DescribeProvisioningTemplateResponse$,
  DescribeProvisioningTemplateVersion$,
  DescribeProvisioningTemplateVersionCommand,
  DescribeProvisioningTemplateVersionRequest$,
  DescribeProvisioningTemplateVersionResponse$,
  DescribeRoleAlias$,
  DescribeRoleAliasCommand,
  DescribeRoleAliasRequest$,
  DescribeRoleAliasResponse$,
  DescribeScheduledAudit$,
  DescribeScheduledAuditCommand,
  DescribeScheduledAuditRequest$,
  DescribeScheduledAuditResponse$,
  DescribeSecurityProfile$,
  DescribeSecurityProfileCommand,
  DescribeSecurityProfileRequest$,
  DescribeSecurityProfileResponse$,
  DescribeStream$,
  DescribeStreamCommand,
  DescribeStreamRequest$,
  DescribeStreamResponse$,
  DescribeThing$,
  DescribeThingCommand,
  DescribeThingGroup$,
  DescribeThingGroupCommand,
  DescribeThingGroupRequest$,
  DescribeThingGroupResponse$,
  DescribeThingRegistrationTask$,
  DescribeThingRegistrationTaskCommand,
  DescribeThingRegistrationTaskRequest$,
  DescribeThingRegistrationTaskResponse$,
  DescribeThingRequest$,
  DescribeThingResponse$,
  DescribeThingType$,
  DescribeThingTypeCommand,
  DescribeThingTypeRequest$,
  DescribeThingTypeResponse$,
  Destination$,
  DetachPolicy$,
  DetachPolicyCommand,
  DetachPolicyRequest$,
  DetachPrincipalPolicy$,
  DetachPrincipalPolicyCommand,
  DetachPrincipalPolicyRequest$,
  DetachSecurityProfile$,
  DetachSecurityProfileCommand,
  DetachSecurityProfileRequest$,
  DetachSecurityProfileResponse$,
  DetachThingPrincipal$,
  DetachThingPrincipalCommand,
  DetachThingPrincipalRequest$,
  DetachThingPrincipalResponse$,
  DetectMitigationActionExecution$,
  DetectMitigationActionExecutionStatus,
  DetectMitigationActionsTaskStatistics$,
  DetectMitigationActionsTaskStatus,
  DetectMitigationActionsTaskSummary$,
  DetectMitigationActionsTaskTarget$,
  DeviceCertificateUpdateAction,
  DeviceDefenderIndexingMode,
  DimensionType,
  DimensionValueOperator,
  DisableTopicRule$,
  DisableTopicRuleCommand,
  DisableTopicRuleRequest$,
  DisassociateSbomFromPackageVersion$,
  DisassociateSbomFromPackageVersionCommand,
  DisassociateSbomFromPackageVersionRequest$,
  DisassociateSbomFromPackageVersionResponse$,
  DisconnectReasonValue,
  DocumentParameter$,
  DomainConfigurationStatus,
  DomainConfigurationSummary$,
  DomainType,
  DynamicGroupStatus,
  DynamoDBAction$,
  DynamoDBv2Action$,
  DynamoKeyType,
  EffectivePolicy$,
  ElasticsearchAction$,
  EnableIoTLoggingParams$,
  EnableTopicRule$,
  EnableTopicRuleCommand,
  EnableTopicRuleRequest$,
  EncryptionType,
  ErrorInfo$,
  EventType,
  ExplicitDeny$,
  ExponentialRolloutRate$,
  Field$,
  FieldType,
  FileLocation$,
  FirehoseAction$,
  FleetMetricNameAndArn$,
  FleetMetricUnit,
  GeoLocationTarget$,
  GetBehaviorModelTrainingSummaries$,
  GetBehaviorModelTrainingSummariesCommand,
  GetBehaviorModelTrainingSummariesRequest$,
  GetBehaviorModelTrainingSummariesResponse$,
  GetBucketsAggregation$,
  GetBucketsAggregationCommand,
  GetBucketsAggregationRequest$,
  GetBucketsAggregationResponse$,
  GetCardinality$,
  GetCardinalityCommand,
  GetCardinalityRequest$,
  GetCardinalityResponse$,
  GetCommand$,
  GetCommandCommand,
  GetCommandExecution$,
  GetCommandExecutionCommand,
  GetCommandExecutionRequest$,
  GetCommandExecutionResponse$,
  GetCommandRequest$,
  GetCommandResponse$,
  GetEffectivePolicies$,
  GetEffectivePoliciesCommand,
  GetEffectivePoliciesRequest$,
  GetEffectivePoliciesResponse$,
  GetIndexingConfiguration$,
  GetIndexingConfigurationCommand,
  GetIndexingConfigurationRequest$,
  GetIndexingConfigurationResponse$,
  GetJobDocument$,
  GetJobDocumentCommand,
  GetJobDocumentRequest$,
  GetJobDocumentResponse$,
  GetLoggingOptions$,
  GetLoggingOptionsCommand,
  GetLoggingOptionsRequest$,
  GetLoggingOptionsResponse$,
  GetOTAUpdate$,
  GetOTAUpdateCommand,
  GetOTAUpdateRequest$,
  GetOTAUpdateResponse$,
  GetPackage$,
  GetPackageCommand,
  GetPackageConfiguration$,
  GetPackageConfigurationCommand,
  GetPackageConfigurationRequest$,
  GetPackageConfigurationResponse$,
  GetPackageRequest$,
  GetPackageResponse$,
  GetPackageVersion$,
  GetPackageVersionCommand,
  GetPackageVersionRequest$,
  GetPackageVersionResponse$,
  GetPercentiles$,
  GetPercentilesCommand,
  GetPercentilesRequest$,
  GetPercentilesResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetPolicyVersion$,
  GetPolicyVersionCommand,
  GetPolicyVersionRequest$,
  GetPolicyVersionResponse$,
  GetRegistrationCode$,
  GetRegistrationCodeCommand,
  GetRegistrationCodeRequest$,
  GetRegistrationCodeResponse$,
  GetStatistics$,
  GetStatisticsCommand,
  GetStatisticsRequest$,
  GetStatisticsResponse$,
  GetThingConnectivityData$,
  GetThingConnectivityDataCommand,
  GetThingConnectivityDataRequest$,
  GetThingConnectivityDataResponse$,
  GetTopicRule$,
  GetTopicRuleCommand,
  GetTopicRuleDestination$,
  GetTopicRuleDestinationCommand,
  GetTopicRuleDestinationRequest$,
  GetTopicRuleDestinationResponse$,
  GetTopicRuleRequest$,
  GetTopicRuleResponse$,
  GetV2LoggingOptions$,
  GetV2LoggingOptionsCommand,
  GetV2LoggingOptionsRequest$,
  GetV2LoggingOptionsResponse$,
  GroupNameAndArn$,
  HttpAction$,
  HttpActionHeader$,
  HttpAuthorization$,
  HttpContext$,
  HttpUrlDestinationConfiguration$,
  HttpUrlDestinationProperties$,
  HttpUrlDestinationSummary$,
  ImplicitDeny$,
  IndexingFilter$,
  IndexNotReadyException,
  IndexNotReadyException$,
  IndexStatus,
  InternalException,
  InternalException$,
  InternalFailureException,
  InternalFailureException$,
  InternalServerException,
  InternalServerException$,
  InvalidAggregationException,
  InvalidAggregationException$,
  InvalidQueryException,
  InvalidQueryException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidResponseException,
  InvalidResponseException$,
  InvalidStateTransitionException,
  InvalidStateTransitionException$,
  IoT,
  IotAnalyticsAction$,
  IoTClient,
  IotEventsAction$,
  IoTServiceException,
  IotSiteWiseAction$,
  IssuerCertificateIdentifier$,
  Job$,
  JobEndBehavior,
  JobExecution$,
  JobExecutionFailureType,
  JobExecutionsRetryConfig$,
  JobExecutionsRolloutConfig$,
  JobExecutionStatus,
  JobExecutionStatusDetails$,
  JobExecutionSummary$,
  JobExecutionSummaryForJob$,
  JobExecutionSummaryForThing$,
  JobProcessDetails$,
  JobStatus,
  JobSummary$,
  JobTemplateSummary$,
  KafkaAction$,
  KafkaActionHeader$,
  KeyPair$,
  KinesisAction$,
  LambdaAction$,
  LimitExceededException,
  LimitExceededException$,
  ListActiveViolations$,
  ListActiveViolationsCommand,
  ListActiveViolationsRequest$,
  ListActiveViolationsResponse$,
  ListAttachedPolicies$,
  ListAttachedPoliciesCommand,
  ListAttachedPoliciesRequest$,
  ListAttachedPoliciesResponse$,
  ListAuditFindings$,
  ListAuditFindingsCommand,
  ListAuditFindingsRequest$,
  ListAuditFindingsResponse$,
  ListAuditMitigationActionsExecutions$,
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsExecutionsRequest$,
  ListAuditMitigationActionsExecutionsResponse$,
  ListAuditMitigationActionsTasks$,
  ListAuditMitigationActionsTasksCommand,
  ListAuditMitigationActionsTasksRequest$,
  ListAuditMitigationActionsTasksResponse$,
  ListAuditSuppressions$,
  ListAuditSuppressionsCommand,
  ListAuditSuppressionsRequest$,
  ListAuditSuppressionsResponse$,
  ListAuditTasks$,
  ListAuditTasksCommand,
  ListAuditTasksRequest$,
  ListAuditTasksResponse$,
  ListAuthorizers$,
  ListAuthorizersCommand,
  ListAuthorizersRequest$,
  ListAuthorizersResponse$,
  ListBillingGroups$,
  ListBillingGroupsCommand,
  ListBillingGroupsRequest$,
  ListBillingGroupsResponse$,
  ListCACertificates$,
  ListCACertificatesCommand,
  ListCACertificatesRequest$,
  ListCACertificatesResponse$,
  ListCertificateProviders$,
  ListCertificateProvidersCommand,
  ListCertificateProvidersRequest$,
  ListCertificateProvidersResponse$,
  ListCertificates$,
  ListCertificatesByCA$,
  ListCertificatesByCACommand,
  ListCertificatesByCARequest$,
  ListCertificatesByCAResponse$,
  ListCertificatesCommand,
  ListCertificatesRequest$,
  ListCertificatesResponse$,
  ListCommandExecutions$,
  ListCommandExecutionsCommand,
  ListCommandExecutionsRequest$,
  ListCommandExecutionsResponse$,
  ListCommands$,
  ListCommandsCommand,
  ListCommandsRequest$,
  ListCommandsResponse$,
  ListCustomMetrics$,
  ListCustomMetricsCommand,
  ListCustomMetricsRequest$,
  ListCustomMetricsResponse$,
  ListDetectMitigationActionsExecutions$,
  ListDetectMitigationActionsExecutionsCommand,
  ListDetectMitigationActionsExecutionsRequest$,
  ListDetectMitigationActionsExecutionsResponse$,
  ListDetectMitigationActionsTasks$,
  ListDetectMitigationActionsTasksCommand,
  ListDetectMitigationActionsTasksRequest$,
  ListDetectMitigationActionsTasksResponse$,
  ListDimensions$,
  ListDimensionsCommand,
  ListDimensionsRequest$,
  ListDimensionsResponse$,
  ListDomainConfigurations$,
  ListDomainConfigurationsCommand,
  ListDomainConfigurationsRequest$,
  ListDomainConfigurationsResponse$,
  ListFleetMetrics$,
  ListFleetMetricsCommand,
  ListFleetMetricsRequest$,
  ListFleetMetricsResponse$,
  ListIndices$,
  ListIndicesCommand,
  ListIndicesRequest$,
  ListIndicesResponse$,
  ListJobExecutionsForJob$,
  ListJobExecutionsForJobCommand,
  ListJobExecutionsForJobRequest$,
  ListJobExecutionsForJobResponse$,
  ListJobExecutionsForThing$,
  ListJobExecutionsForThingCommand,
  ListJobExecutionsForThingRequest$,
  ListJobExecutionsForThingResponse$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResponse$,
  ListJobTemplates$,
  ListJobTemplatesCommand,
  ListJobTemplatesRequest$,
  ListJobTemplatesResponse$,
  ListManagedJobTemplates$,
  ListManagedJobTemplatesCommand,
  ListManagedJobTemplatesRequest$,
  ListManagedJobTemplatesResponse$,
  ListMetricValues$,
  ListMetricValuesCommand,
  ListMetricValuesRequest$,
  ListMetricValuesResponse$,
  ListMitigationActions$,
  ListMitigationActionsCommand,
  ListMitigationActionsRequest$,
  ListMitigationActionsResponse$,
  ListOTAUpdates$,
  ListOTAUpdatesCommand,
  ListOTAUpdatesRequest$,
  ListOTAUpdatesResponse$,
  ListOutgoingCertificates$,
  ListOutgoingCertificatesCommand,
  ListOutgoingCertificatesRequest$,
  ListOutgoingCertificatesResponse$,
  ListPackages$,
  ListPackagesCommand,
  ListPackagesRequest$,
  ListPackagesResponse$,
  ListPackageVersions$,
  ListPackageVersionsCommand,
  ListPackageVersionsRequest$,
  ListPackageVersionsResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListPolicyPrincipals$,
  ListPolicyPrincipalsCommand,
  ListPolicyPrincipalsRequest$,
  ListPolicyPrincipalsResponse$,
  ListPolicyVersions$,
  ListPolicyVersionsCommand,
  ListPolicyVersionsRequest$,
  ListPolicyVersionsResponse$,
  ListPrincipalPolicies$,
  ListPrincipalPoliciesCommand,
  ListPrincipalPoliciesRequest$,
  ListPrincipalPoliciesResponse$,
  ListPrincipalThings$,
  ListPrincipalThingsCommand,
  ListPrincipalThingsRequest$,
  ListPrincipalThingsResponse$,
  ListPrincipalThingsV2$,
  ListPrincipalThingsV2Command,
  ListPrincipalThingsV2Request$,
  ListPrincipalThingsV2Response$,
  ListProvisioningTemplates$,
  ListProvisioningTemplatesCommand,
  ListProvisioningTemplatesRequest$,
  ListProvisioningTemplatesResponse$,
  ListProvisioningTemplateVersions$,
  ListProvisioningTemplateVersionsCommand,
  ListProvisioningTemplateVersionsRequest$,
  ListProvisioningTemplateVersionsResponse$,
  ListRelatedResourcesForAuditFinding$,
  ListRelatedResourcesForAuditFindingCommand,
  ListRelatedResourcesForAuditFindingRequest$,
  ListRelatedResourcesForAuditFindingResponse$,
  ListRoleAliases$,
  ListRoleAliasesCommand,
  ListRoleAliasesRequest$,
  ListRoleAliasesResponse$,
  ListSbomValidationResults$,
  ListSbomValidationResultsCommand,
  ListSbomValidationResultsRequest$,
  ListSbomValidationResultsResponse$,
  ListScheduledAudits$,
  ListScheduledAuditsCommand,
  ListScheduledAuditsRequest$,
  ListScheduledAuditsResponse$,
  ListSecurityProfiles$,
  ListSecurityProfilesCommand,
  ListSecurityProfilesForTarget$,
  ListSecurityProfilesForTargetCommand,
  ListSecurityProfilesForTargetRequest$,
  ListSecurityProfilesForTargetResponse$,
  ListSecurityProfilesRequest$,
  ListSecurityProfilesResponse$,
  ListStreams$,
  ListStreamsCommand,
  ListStreamsRequest$,
  ListStreamsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTargetsForPolicy$,
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyRequest$,
  ListTargetsForPolicyResponse$,
  ListTargetsForSecurityProfile$,
  ListTargetsForSecurityProfileCommand,
  ListTargetsForSecurityProfileRequest$,
  ListTargetsForSecurityProfileResponse$,
  ListThingGroups$,
  ListThingGroupsCommand,
  ListThingGroupsForThing$,
  ListThingGroupsForThingCommand,
  ListThingGroupsForThingRequest$,
  ListThingGroupsForThingResponse$,
  ListThingGroupsRequest$,
  ListThingGroupsResponse$,
  ListThingPrincipals$,
  ListThingPrincipalsCommand,
  ListThingPrincipalsRequest$,
  ListThingPrincipalsResponse$,
  ListThingPrincipalsV2$,
  ListThingPrincipalsV2Command,
  ListThingPrincipalsV2Request$,
  ListThingPrincipalsV2Response$,
  ListThingRegistrationTaskReports$,
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTaskReportsRequest$,
  ListThingRegistrationTaskReportsResponse$,
  ListThingRegistrationTasks$,
  ListThingRegistrationTasksCommand,
  ListThingRegistrationTasksRequest$,
  ListThingRegistrationTasksResponse$,
  ListThings$,
  ListThingsCommand,
  ListThingsInBillingGroup$,
  ListThingsInBillingGroupCommand,
  ListThingsInBillingGroupRequest$,
  ListThingsInBillingGroupResponse$,
  ListThingsInThingGroup$,
  ListThingsInThingGroupCommand,
  ListThingsInThingGroupRequest$,
  ListThingsInThingGroupResponse$,
  ListThingsRequest$,
  ListThingsResponse$,
  ListThingTypes$,
  ListThingTypesCommand,
  ListThingTypesRequest$,
  ListThingTypesResponse$,
  ListTopicRuleDestinations$,
  ListTopicRuleDestinationsCommand,
  ListTopicRuleDestinationsRequest$,
  ListTopicRuleDestinationsResponse$,
  ListTopicRules$,
  ListTopicRulesCommand,
  ListTopicRulesRequest$,
  ListTopicRulesResponse$,
  ListV2LoggingLevels$,
  ListV2LoggingLevelsCommand,
  ListV2LoggingLevelsRequest$,
  ListV2LoggingLevelsResponse$,
  ListViolationEvents$,
  ListViolationEventsCommand,
  ListViolationEventsRequest$,
  ListViolationEventsResponse$,
  LocationAction$,
  LocationTimestamp$,
  LogEventConfiguration$,
  LoggingOptionsPayload$,
  LogLevel,
  LogTarget$,
  LogTargetConfiguration$,
  LogTargetType,
  MachineLearningDetectionConfig$,
  MaintenanceWindow$,
  MalformedPolicyException,
  MalformedPolicyException$,
  ManagedJobTemplateSummary$,
  MessageFormat,
  MetricDatum$,
  MetricDimension$,
  MetricsExportConfig$,
  MetricToRetain$,
  MetricValue$,
  MitigationAction$,
  MitigationActionIdentifier$,
  MitigationActionParams$,
  MitigationActionType,
  ModelStatus,
  Mqtt5Configuration$,
  MqttContext$,
  MqttHeaders$,
  NamedShadowIndexingMode,
  NonCompliantResource$,
  NotConfiguredException,
  NotConfiguredException$,
  OpenSearchAction$,
  OTAUpdateFile$,
  OTAUpdateInfo$,
  OTAUpdateStatus,
  OTAUpdateSummary$,
  OutgoingCertificate$,
  OutputFormat,
  PackageSummary$,
  PackageVersionAction,
  PackageVersionArtifact$,
  PackageVersionStatus,
  PackageVersionSummary$,
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
  paginateListJobs,
  paginateListJobTemplates,
  paginateListManagedJobTemplates,
  paginateListMetricValues,
  paginateListMitigationActions,
  paginateListOTAUpdates,
  paginateListOutgoingCertificates,
  paginateListPackages,
  paginateListPackageVersions,
  paginateListPolicies,
  paginateListPolicyPrincipals,
  paginateListPrincipalPolicies,
  paginateListPrincipalThings,
  paginateListPrincipalThingsV2,
  paginateListProvisioningTemplates,
  paginateListProvisioningTemplateVersions,
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
  paginateListThings,
  paginateListThingsInBillingGroup,
  paginateListThingsInThingGroup,
  paginateListThingTypes,
  paginateListTopicRuleDestinations,
  paginateListTopicRules,
  paginateListV2LoggingLevels,
  paginateListViolationEvents,
  PercentPair$,
  Policy$,
  PolicyTemplateName,
  PolicyVersion$,
  PolicyVersionIdentifier$,
  PresignedUrlConfig$,
  PrincipalThingObject$,
  PropagatingAttribute$,
  Protocol,
  ProvisioningHook$,
  ProvisioningTemplateSummary$,
  ProvisioningTemplateVersionSummary$,
  PublishFindingToSnsParams$,
  PutAssetPropertyValueEntry$,
  PutItemInput$,
  PutVerificationStateOnViolation$,
  PutVerificationStateOnViolationCommand,
  PutVerificationStateOnViolationRequest$,
  PutVerificationStateOnViolationResponse$,
  RateIncreaseCriteria$,
  RegisterCACertificate$,
  RegisterCACertificateCommand,
  RegisterCACertificateRequest$,
  RegisterCACertificateResponse$,
  RegisterCertificate$,
  RegisterCertificateCommand,
  RegisterCertificateRequest$,
  RegisterCertificateResponse$,
  RegisterCertificateWithoutCA$,
  RegisterCertificateWithoutCACommand,
  RegisterCertificateWithoutCARequest$,
  RegisterCertificateWithoutCAResponse$,
  RegisterThing$,
  RegisterThingCommand,
  RegisterThingRequest$,
  RegisterThingResponse$,
  RegistrationCodeValidationException,
  RegistrationCodeValidationException$,
  RegistrationConfig$,
  RejectCertificateTransfer$,
  RejectCertificateTransferCommand,
  RejectCertificateTransferRequest$,
  RelatedResource$,
  RemoveThingFromBillingGroup$,
  RemoveThingFromBillingGroupCommand,
  RemoveThingFromBillingGroupRequest$,
  RemoveThingFromBillingGroupResponse$,
  RemoveThingFromThingGroup$,
  RemoveThingFromThingGroupCommand,
  RemoveThingFromThingGroupRequest$,
  RemoveThingFromThingGroupResponse$,
  ReplaceDefaultPolicyVersionParams$,
  ReplaceTopicRule$,
  ReplaceTopicRuleCommand,
  ReplaceTopicRuleRequest$,
  ReportType,
  RepublishAction$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceIdentifier$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceRegistrationFailureException,
  ResourceRegistrationFailureException$,
  ResourceType,
  RetryableFailureType,
  RetryCriteria$,
  RoleAliasDescription$,
  S3Action$,
  S3Destination$,
  S3Location$,
  SalesforceAction$,
  Sbom$,
  SbomValidationErrorCode,
  SbomValidationResult,
  SbomValidationResultSummary$,
  SbomValidationStatus,
  ScheduledAuditMetadata$,
  ScheduledJobRollout$,
  SchedulingConfig$,
  SearchIndex$,
  SearchIndexCommand,
  SearchIndexRequest$,
  SearchIndexResponse$,
  SecurityProfileIdentifier$,
  SecurityProfileTarget$,
  SecurityProfileTargetMapping$,
  ServerCertificateConfig$,
  ServerCertificateStatus,
  ServerCertificateSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceType,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SetDefaultAuthorizer$,
  SetDefaultAuthorizerCommand,
  SetDefaultAuthorizerRequest$,
  SetDefaultAuthorizerResponse$,
  SetDefaultPolicyVersion$,
  SetDefaultPolicyVersionCommand,
  SetDefaultPolicyVersionRequest$,
  SetLoggingOptions$,
  SetLoggingOptionsCommand,
  SetLoggingOptionsRequest$,
  SetV2LoggingLevel$,
  SetV2LoggingLevelCommand,
  SetV2LoggingLevelRequest$,
  SetV2LoggingOptions$,
  SetV2LoggingOptionsCommand,
  SetV2LoggingOptionsRequest$,
  SigningProfileParameter$,
  SigV4Authorization$,
  SnsAction$,
  SortOrder,
  SqlParseException,
  SqlParseException$,
  SqsAction$,
  StartAuditMitigationActionsTask$,
  StartAuditMitigationActionsTaskCommand,
  StartAuditMitigationActionsTaskRequest$,
  StartAuditMitigationActionsTaskResponse$,
  StartDetectMitigationActionsTask$,
  StartDetectMitigationActionsTaskCommand,
  StartDetectMitigationActionsTaskRequest$,
  StartDetectMitigationActionsTaskResponse$,
  StartOnDemandAuditTask$,
  StartOnDemandAuditTaskCommand,
  StartOnDemandAuditTaskRequest$,
  StartOnDemandAuditTaskResponse$,
  StartSigningJobParameter$,
  StartThingRegistrationTask$,
  StartThingRegistrationTaskCommand,
  StartThingRegistrationTaskRequest$,
  StartThingRegistrationTaskResponse$,
  StatisticalThreshold$,
  Statistics$,
  Status,
  StatusReason$,
  StepFunctionsAction$,
  StopThingRegistrationTask$,
  StopThingRegistrationTaskCommand,
  StopThingRegistrationTaskRequest$,
  StopThingRegistrationTaskResponse$,
  StreamFile$,
  StreamInfo$,
  StreamSummary$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetFieldOrder,
  TargetSelection,
  TaskAlreadyExistsException,
  TaskAlreadyExistsException$,
  TaskStatistics$,
  TaskStatisticsForAuditCheck$,
  TemplateType,
  TermsAggregation$,
  TestAuthorization$,
  TestAuthorizationCommand,
  TestAuthorizationRequest$,
  TestAuthorizationResponse$,
  TestInvokeAuthorizer$,
  TestInvokeAuthorizerCommand,
  TestInvokeAuthorizerRequest$,
  TestInvokeAuthorizerResponse$,
  ThingAttribute$,
  ThingConnectivity$,
  ThingConnectivityIndexingMode,
  ThingDocument$,
  ThingGroupDocument$,
  ThingGroupIndexingConfiguration$,
  ThingGroupIndexingMode,
  ThingGroupMetadata$,
  ThingGroupProperties$,
  ThingIndexingConfiguration$,
  ThingIndexingMode,
  ThingPrincipalObject$,
  ThingPrincipalType,
  ThingTypeDefinition$,
  ThingTypeMetadata$,
  ThingTypeProperties$,
  ThrottlingException,
  ThrottlingException$,
  TimeFilter$,
  TimeoutConfig$,
  TimestreamAction$,
  TimestreamDimension$,
  TimestreamTimestamp$,
  TlsConfig$,
  TlsContext$,
  TopicRule$,
  TopicRuleDestination$,
  TopicRuleDestinationConfiguration$,
  TopicRuleDestinationStatus,
  TopicRuleDestinationSummary$,
  TopicRuleListItem$,
  TopicRulePayload$,
  TransferAlreadyCompletedException,
  TransferAlreadyCompletedException$,
  TransferCertificate$,
  TransferCertificateCommand,
  TransferCertificateRequest$,
  TransferCertificateResponse$,
  TransferConflictException,
  TransferConflictException$,
  TransferData$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccountAuditConfiguration$,
  UpdateAccountAuditConfigurationCommand,
  UpdateAccountAuditConfigurationRequest$,
  UpdateAccountAuditConfigurationResponse$,
  UpdateAuditSuppression$,
  UpdateAuditSuppressionCommand,
  UpdateAuditSuppressionRequest$,
  UpdateAuditSuppressionResponse$,
  UpdateAuthorizer$,
  UpdateAuthorizerCommand,
  UpdateAuthorizerRequest$,
  UpdateAuthorizerResponse$,
  UpdateBillingGroup$,
  UpdateBillingGroupCommand,
  UpdateBillingGroupRequest$,
  UpdateBillingGroupResponse$,
  UpdateCACertificate$,
  UpdateCACertificateCommand,
  UpdateCACertificateParams$,
  UpdateCACertificateRequest$,
  UpdateCertificate$,
  UpdateCertificateCommand,
  UpdateCertificateProvider$,
  UpdateCertificateProviderCommand,
  UpdateCertificateProviderRequest$,
  UpdateCertificateProviderResponse$,
  UpdateCertificateRequest$,
  UpdateCommand$,
  UpdateCommandCommand,
  UpdateCommandRequest$,
  UpdateCommandResponse$,
  UpdateCustomMetric$,
  UpdateCustomMetricCommand,
  UpdateCustomMetricRequest$,
  UpdateCustomMetricResponse$,
  UpdateDeviceCertificateParams$,
  UpdateDimension$,
  UpdateDimensionCommand,
  UpdateDimensionRequest$,
  UpdateDimensionResponse$,
  UpdateDomainConfiguration$,
  UpdateDomainConfigurationCommand,
  UpdateDomainConfigurationRequest$,
  UpdateDomainConfigurationResponse$,
  UpdateDynamicThingGroup$,
  UpdateDynamicThingGroupCommand,
  UpdateDynamicThingGroupRequest$,
  UpdateDynamicThingGroupResponse$,
  UpdateEncryptionConfiguration$,
  UpdateEncryptionConfigurationCommand,
  UpdateEncryptionConfigurationRequest$,
  UpdateEncryptionConfigurationResponse$,
  UpdateEventConfigurations$,
  UpdateEventConfigurationsCommand,
  UpdateEventConfigurationsRequest$,
  UpdateEventConfigurationsResponse$,
  UpdateFleetMetric$,
  UpdateFleetMetricCommand,
  UpdateFleetMetricRequest$,
  UpdateIndexingConfiguration$,
  UpdateIndexingConfigurationCommand,
  UpdateIndexingConfigurationRequest$,
  UpdateIndexingConfigurationResponse$,
  UpdateJob$,
  UpdateJobCommand,
  UpdateJobRequest$,
  UpdateMitigationAction$,
  UpdateMitigationActionCommand,
  UpdateMitigationActionRequest$,
  UpdateMitigationActionResponse$,
  UpdatePackage$,
  UpdatePackageCommand,
  UpdatePackageConfiguration$,
  UpdatePackageConfigurationCommand,
  UpdatePackageConfigurationRequest$,
  UpdatePackageConfigurationResponse$,
  UpdatePackageRequest$,
  UpdatePackageResponse$,
  UpdatePackageVersion$,
  UpdatePackageVersionCommand,
  UpdatePackageVersionRequest$,
  UpdatePackageVersionResponse$,
  UpdateProvisioningTemplate$,
  UpdateProvisioningTemplateCommand,
  UpdateProvisioningTemplateRequest$,
  UpdateProvisioningTemplateResponse$,
  UpdateRoleAlias$,
  UpdateRoleAliasCommand,
  UpdateRoleAliasRequest$,
  UpdateRoleAliasResponse$,
  UpdateScheduledAudit$,
  UpdateScheduledAuditCommand,
  UpdateScheduledAuditRequest$,
  UpdateScheduledAuditResponse$,
  UpdateSecurityProfile$,
  UpdateSecurityProfileCommand,
  UpdateSecurityProfileRequest$,
  UpdateSecurityProfileResponse$,
  UpdateStream$,
  UpdateStreamCommand,
  UpdateStreamRequest$,
  UpdateStreamResponse$,
  UpdateThing$,
  UpdateThingCommand,
  UpdateThingGroup$,
  UpdateThingGroupCommand,
  UpdateThingGroupRequest$,
  UpdateThingGroupResponse$,
  UpdateThingGroupsForThing$,
  UpdateThingGroupsForThingCommand,
  UpdateThingGroupsForThingRequest$,
  UpdateThingGroupsForThingResponse$,
  UpdateThingRequest$,
  UpdateThingResponse$,
  UpdateThingType$,
  UpdateThingTypeCommand,
  UpdateThingTypeRequest$,
  UpdateThingTypeResponse$,
  UpdateTopicRuleDestination$,
  UpdateTopicRuleDestinationCommand,
  UpdateTopicRuleDestinationRequest$,
  UpdateTopicRuleDestinationResponse$,
  UserProperty$,
  ValidateSecurityProfileBehaviors$,
  ValidateSecurityProfileBehaviorsCommand,
  ValidateSecurityProfileBehaviorsRequest$,
  ValidateSecurityProfileBehaviorsResponse$,
  ValidationError$,
  ValidationException,
  ValidationException$,
  VerificationState,
  VersionConflictException,
  VersionConflictException$,
  VersionsLimitExceededException,
  VersionsLimitExceededException$,
  VersionUpdateByJobsConfig$,
  ViolationEvent$,
  ViolationEventAdditionalInfo$,
  ViolationEventOccurrenceRange$,
  ViolationEventType,
  VpcDestinationConfiguration$,
  VpcDestinationProperties$,
  VpcDestinationSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTClient === "function");
assert(typeof IoT === "function");
// commands
assert(typeof AcceptCertificateTransferCommand === "function");
assert(typeof AcceptCertificateTransfer$ === "object");
assert(typeof AddThingToBillingGroupCommand === "function");
assert(typeof AddThingToBillingGroup$ === "object");
assert(typeof AddThingToThingGroupCommand === "function");
assert(typeof AddThingToThingGroup$ === "object");
assert(typeof AssociateSbomWithPackageVersionCommand === "function");
assert(typeof AssociateSbomWithPackageVersion$ === "object");
assert(typeof AssociateTargetsWithJobCommand === "function");
assert(typeof AssociateTargetsWithJob$ === "object");
assert(typeof AttachPolicyCommand === "function");
assert(typeof AttachPolicy$ === "object");
assert(typeof AttachPrincipalPolicyCommand === "function");
assert(typeof AttachPrincipalPolicy$ === "object");
assert(typeof AttachSecurityProfileCommand === "function");
assert(typeof AttachSecurityProfile$ === "object");
assert(typeof AttachThingPrincipalCommand === "function");
assert(typeof AttachThingPrincipal$ === "object");
assert(typeof CancelAuditMitigationActionsTaskCommand === "function");
assert(typeof CancelAuditMitigationActionsTask$ === "object");
assert(typeof CancelAuditTaskCommand === "function");
assert(typeof CancelAuditTask$ === "object");
assert(typeof CancelCertificateTransferCommand === "function");
assert(typeof CancelCertificateTransfer$ === "object");
assert(typeof CancelDetectMitigationActionsTaskCommand === "function");
assert(typeof CancelDetectMitigationActionsTask$ === "object");
assert(typeof CancelJobCommand === "function");
assert(typeof CancelJob$ === "object");
assert(typeof CancelJobExecutionCommand === "function");
assert(typeof CancelJobExecution$ === "object");
assert(typeof ClearDefaultAuthorizerCommand === "function");
assert(typeof ClearDefaultAuthorizer$ === "object");
assert(typeof ConfirmTopicRuleDestinationCommand === "function");
assert(typeof ConfirmTopicRuleDestination$ === "object");
assert(typeof CreateAuditSuppressionCommand === "function");
assert(typeof CreateAuditSuppression$ === "object");
assert(typeof CreateAuthorizerCommand === "function");
assert(typeof CreateAuthorizer$ === "object");
assert(typeof CreateBillingGroupCommand === "function");
assert(typeof CreateBillingGroup$ === "object");
assert(typeof CreateCertificateFromCsrCommand === "function");
assert(typeof CreateCertificateFromCsr$ === "object");
assert(typeof CreateCertificateProviderCommand === "function");
assert(typeof CreateCertificateProvider$ === "object");
assert(typeof CreateCommandCommand === "function");
assert(typeof CreateCommand$ === "object");
assert(typeof CreateCustomMetricCommand === "function");
assert(typeof CreateCustomMetric$ === "object");
assert(typeof CreateDimensionCommand === "function");
assert(typeof CreateDimension$ === "object");
assert(typeof CreateDomainConfigurationCommand === "function");
assert(typeof CreateDomainConfiguration$ === "object");
assert(typeof CreateDynamicThingGroupCommand === "function");
assert(typeof CreateDynamicThingGroup$ === "object");
assert(typeof CreateFleetMetricCommand === "function");
assert(typeof CreateFleetMetric$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreateJobTemplateCommand === "function");
assert(typeof CreateJobTemplate$ === "object");
assert(typeof CreateKeysAndCertificateCommand === "function");
assert(typeof CreateKeysAndCertificate$ === "object");
assert(typeof CreateMitigationActionCommand === "function");
assert(typeof CreateMitigationAction$ === "object");
assert(typeof CreateOTAUpdateCommand === "function");
assert(typeof CreateOTAUpdate$ === "object");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreatePackage$ === "object");
assert(typeof CreatePackageVersionCommand === "function");
assert(typeof CreatePackageVersion$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof CreatePolicyVersionCommand === "function");
assert(typeof CreatePolicyVersion$ === "object");
assert(typeof CreateProvisioningClaimCommand === "function");
assert(typeof CreateProvisioningClaim$ === "object");
assert(typeof CreateProvisioningTemplateCommand === "function");
assert(typeof CreateProvisioningTemplate$ === "object");
assert(typeof CreateProvisioningTemplateVersionCommand === "function");
assert(typeof CreateProvisioningTemplateVersion$ === "object");
assert(typeof CreateRoleAliasCommand === "function");
assert(typeof CreateRoleAlias$ === "object");
assert(typeof CreateScheduledAuditCommand === "function");
assert(typeof CreateScheduledAudit$ === "object");
assert(typeof CreateSecurityProfileCommand === "function");
assert(typeof CreateSecurityProfile$ === "object");
assert(typeof CreateStreamCommand === "function");
assert(typeof CreateStream$ === "object");
assert(typeof CreateThingCommand === "function");
assert(typeof CreateThing$ === "object");
assert(typeof CreateThingGroupCommand === "function");
assert(typeof CreateThingGroup$ === "object");
assert(typeof CreateThingTypeCommand === "function");
assert(typeof CreateThingType$ === "object");
assert(typeof CreateTopicRuleCommand === "function");
assert(typeof CreateTopicRule$ === "object");
assert(typeof CreateTopicRuleDestinationCommand === "function");
assert(typeof CreateTopicRuleDestination$ === "object");
assert(typeof DeleteAccountAuditConfigurationCommand === "function");
assert(typeof DeleteAccountAuditConfiguration$ === "object");
assert(typeof DeleteAuditSuppressionCommand === "function");
assert(typeof DeleteAuditSuppression$ === "object");
assert(typeof DeleteAuthorizerCommand === "function");
assert(typeof DeleteAuthorizer$ === "object");
assert(typeof DeleteBillingGroupCommand === "function");
assert(typeof DeleteBillingGroup$ === "object");
assert(typeof DeleteCACertificateCommand === "function");
assert(typeof DeleteCACertificate$ === "object");
assert(typeof DeleteCertificateCommand === "function");
assert(typeof DeleteCertificate$ === "object");
assert(typeof DeleteCertificateProviderCommand === "function");
assert(typeof DeleteCertificateProvider$ === "object");
assert(typeof DeleteCommandCommand === "function");
assert(typeof DeleteCommand$ === "object");
assert(typeof DeleteCommandExecutionCommand === "function");
assert(typeof DeleteCommandExecution$ === "object");
assert(typeof DeleteCustomMetricCommand === "function");
assert(typeof DeleteCustomMetric$ === "object");
assert(typeof DeleteDimensionCommand === "function");
assert(typeof DeleteDimension$ === "object");
assert(typeof DeleteDomainConfigurationCommand === "function");
assert(typeof DeleteDomainConfiguration$ === "object");
assert(typeof DeleteDynamicThingGroupCommand === "function");
assert(typeof DeleteDynamicThingGroup$ === "object");
assert(typeof DeleteFleetMetricCommand === "function");
assert(typeof DeleteFleetMetric$ === "object");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteJob$ === "object");
assert(typeof DeleteJobExecutionCommand === "function");
assert(typeof DeleteJobExecution$ === "object");
assert(typeof DeleteJobTemplateCommand === "function");
assert(typeof DeleteJobTemplate$ === "object");
assert(typeof DeleteMitigationActionCommand === "function");
assert(typeof DeleteMitigationAction$ === "object");
assert(typeof DeleteOTAUpdateCommand === "function");
assert(typeof DeleteOTAUpdate$ === "object");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeletePackage$ === "object");
assert(typeof DeletePackageVersionCommand === "function");
assert(typeof DeletePackageVersion$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeletePolicyVersionCommand === "function");
assert(typeof DeletePolicyVersion$ === "object");
assert(typeof DeleteProvisioningTemplateCommand === "function");
assert(typeof DeleteProvisioningTemplate$ === "object");
assert(typeof DeleteProvisioningTemplateVersionCommand === "function");
assert(typeof DeleteProvisioningTemplateVersion$ === "object");
assert(typeof DeleteRegistrationCodeCommand === "function");
assert(typeof DeleteRegistrationCode$ === "object");
assert(typeof DeleteRoleAliasCommand === "function");
assert(typeof DeleteRoleAlias$ === "object");
assert(typeof DeleteScheduledAuditCommand === "function");
assert(typeof DeleteScheduledAudit$ === "object");
assert(typeof DeleteSecurityProfileCommand === "function");
assert(typeof DeleteSecurityProfile$ === "object");
assert(typeof DeleteStreamCommand === "function");
assert(typeof DeleteStream$ === "object");
assert(typeof DeleteThingCommand === "function");
assert(typeof DeleteThing$ === "object");
assert(typeof DeleteThingGroupCommand === "function");
assert(typeof DeleteThingGroup$ === "object");
assert(typeof DeleteThingTypeCommand === "function");
assert(typeof DeleteThingType$ === "object");
assert(typeof DeleteTopicRuleCommand === "function");
assert(typeof DeleteTopicRule$ === "object");
assert(typeof DeleteTopicRuleDestinationCommand === "function");
assert(typeof DeleteTopicRuleDestination$ === "object");
assert(typeof DeleteV2LoggingLevelCommand === "function");
assert(typeof DeleteV2LoggingLevel$ === "object");
assert(typeof DeprecateThingTypeCommand === "function");
assert(typeof DeprecateThingType$ === "object");
assert(typeof DescribeAccountAuditConfigurationCommand === "function");
assert(typeof DescribeAccountAuditConfiguration$ === "object");
assert(typeof DescribeAuditFindingCommand === "function");
assert(typeof DescribeAuditFinding$ === "object");
assert(typeof DescribeAuditMitigationActionsTaskCommand === "function");
assert(typeof DescribeAuditMitigationActionsTask$ === "object");
assert(typeof DescribeAuditSuppressionCommand === "function");
assert(typeof DescribeAuditSuppression$ === "object");
assert(typeof DescribeAuditTaskCommand === "function");
assert(typeof DescribeAuditTask$ === "object");
assert(typeof DescribeAuthorizerCommand === "function");
assert(typeof DescribeAuthorizer$ === "object");
assert(typeof DescribeBillingGroupCommand === "function");
assert(typeof DescribeBillingGroup$ === "object");
assert(typeof DescribeCACertificateCommand === "function");
assert(typeof DescribeCACertificate$ === "object");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof DescribeCertificate$ === "object");
assert(typeof DescribeCertificateProviderCommand === "function");
assert(typeof DescribeCertificateProvider$ === "object");
assert(typeof DescribeCustomMetricCommand === "function");
assert(typeof DescribeCustomMetric$ === "object");
assert(typeof DescribeDefaultAuthorizerCommand === "function");
assert(typeof DescribeDefaultAuthorizer$ === "object");
assert(typeof DescribeDetectMitigationActionsTaskCommand === "function");
assert(typeof DescribeDetectMitigationActionsTask$ === "object");
assert(typeof DescribeDimensionCommand === "function");
assert(typeof DescribeDimension$ === "object");
assert(typeof DescribeDomainConfigurationCommand === "function");
assert(typeof DescribeDomainConfiguration$ === "object");
assert(typeof DescribeEncryptionConfigurationCommand === "function");
assert(typeof DescribeEncryptionConfiguration$ === "object");
assert(typeof DescribeEndpointCommand === "function");
assert(typeof DescribeEndpoint$ === "object");
assert(typeof DescribeEventConfigurationsCommand === "function");
assert(typeof DescribeEventConfigurations$ === "object");
assert(typeof DescribeFleetMetricCommand === "function");
assert(typeof DescribeFleetMetric$ === "object");
assert(typeof DescribeIndexCommand === "function");
assert(typeof DescribeIndex$ === "object");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeJob$ === "object");
assert(typeof DescribeJobExecutionCommand === "function");
assert(typeof DescribeJobExecution$ === "object");
assert(typeof DescribeJobTemplateCommand === "function");
assert(typeof DescribeJobTemplate$ === "object");
assert(typeof DescribeManagedJobTemplateCommand === "function");
assert(typeof DescribeManagedJobTemplate$ === "object");
assert(typeof DescribeMitigationActionCommand === "function");
assert(typeof DescribeMitigationAction$ === "object");
assert(typeof DescribeProvisioningTemplateCommand === "function");
assert(typeof DescribeProvisioningTemplate$ === "object");
assert(typeof DescribeProvisioningTemplateVersionCommand === "function");
assert(typeof DescribeProvisioningTemplateVersion$ === "object");
assert(typeof DescribeRoleAliasCommand === "function");
assert(typeof DescribeRoleAlias$ === "object");
assert(typeof DescribeScheduledAuditCommand === "function");
assert(typeof DescribeScheduledAudit$ === "object");
assert(typeof DescribeSecurityProfileCommand === "function");
assert(typeof DescribeSecurityProfile$ === "object");
assert(typeof DescribeStreamCommand === "function");
assert(typeof DescribeStream$ === "object");
assert(typeof DescribeThingCommand === "function");
assert(typeof DescribeThing$ === "object");
assert(typeof DescribeThingGroupCommand === "function");
assert(typeof DescribeThingGroup$ === "object");
assert(typeof DescribeThingRegistrationTaskCommand === "function");
assert(typeof DescribeThingRegistrationTask$ === "object");
assert(typeof DescribeThingTypeCommand === "function");
assert(typeof DescribeThingType$ === "object");
assert(typeof DetachPolicyCommand === "function");
assert(typeof DetachPolicy$ === "object");
assert(typeof DetachPrincipalPolicyCommand === "function");
assert(typeof DetachPrincipalPolicy$ === "object");
assert(typeof DetachSecurityProfileCommand === "function");
assert(typeof DetachSecurityProfile$ === "object");
assert(typeof DetachThingPrincipalCommand === "function");
assert(typeof DetachThingPrincipal$ === "object");
assert(typeof DisableTopicRuleCommand === "function");
assert(typeof DisableTopicRule$ === "object");
assert(typeof DisassociateSbomFromPackageVersionCommand === "function");
assert(typeof DisassociateSbomFromPackageVersion$ === "object");
assert(typeof EnableTopicRuleCommand === "function");
assert(typeof EnableTopicRule$ === "object");
assert(typeof GetBehaviorModelTrainingSummariesCommand === "function");
assert(typeof GetBehaviorModelTrainingSummaries$ === "object");
assert(typeof GetBucketsAggregationCommand === "function");
assert(typeof GetBucketsAggregation$ === "object");
assert(typeof GetCardinalityCommand === "function");
assert(typeof GetCardinality$ === "object");
assert(typeof GetCommandCommand === "function");
assert(typeof GetCommand$ === "object");
assert(typeof GetCommandExecutionCommand === "function");
assert(typeof GetCommandExecution$ === "object");
assert(typeof GetEffectivePoliciesCommand === "function");
assert(typeof GetEffectivePolicies$ === "object");
assert(typeof GetIndexingConfigurationCommand === "function");
assert(typeof GetIndexingConfiguration$ === "object");
assert(typeof GetJobDocumentCommand === "function");
assert(typeof GetJobDocument$ === "object");
assert(typeof GetLoggingOptionsCommand === "function");
assert(typeof GetLoggingOptions$ === "object");
assert(typeof GetOTAUpdateCommand === "function");
assert(typeof GetOTAUpdate$ === "object");
assert(typeof GetPackageCommand === "function");
assert(typeof GetPackage$ === "object");
assert(typeof GetPackageConfigurationCommand === "function");
assert(typeof GetPackageConfiguration$ === "object");
assert(typeof GetPackageVersionCommand === "function");
assert(typeof GetPackageVersion$ === "object");
assert(typeof GetPercentilesCommand === "function");
assert(typeof GetPercentiles$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetPolicyVersionCommand === "function");
assert(typeof GetPolicyVersion$ === "object");
assert(typeof GetRegistrationCodeCommand === "function");
assert(typeof GetRegistrationCode$ === "object");
assert(typeof GetStatisticsCommand === "function");
assert(typeof GetStatistics$ === "object");
assert(typeof GetThingConnectivityDataCommand === "function");
assert(typeof GetThingConnectivityData$ === "object");
assert(typeof GetTopicRuleCommand === "function");
assert(typeof GetTopicRule$ === "object");
assert(typeof GetTopicRuleDestinationCommand === "function");
assert(typeof GetTopicRuleDestination$ === "object");
assert(typeof GetV2LoggingOptionsCommand === "function");
assert(typeof GetV2LoggingOptions$ === "object");
assert(typeof ListActiveViolationsCommand === "function");
assert(typeof ListActiveViolations$ === "object");
assert(typeof ListAttachedPoliciesCommand === "function");
assert(typeof ListAttachedPolicies$ === "object");
assert(typeof ListAuditFindingsCommand === "function");
assert(typeof ListAuditFindings$ === "object");
assert(typeof ListAuditMitigationActionsExecutionsCommand === "function");
assert(typeof ListAuditMitigationActionsExecutions$ === "object");
assert(typeof ListAuditMitigationActionsTasksCommand === "function");
assert(typeof ListAuditMitigationActionsTasks$ === "object");
assert(typeof ListAuditSuppressionsCommand === "function");
assert(typeof ListAuditSuppressions$ === "object");
assert(typeof ListAuditTasksCommand === "function");
assert(typeof ListAuditTasks$ === "object");
assert(typeof ListAuthorizersCommand === "function");
assert(typeof ListAuthorizers$ === "object");
assert(typeof ListBillingGroupsCommand === "function");
assert(typeof ListBillingGroups$ === "object");
assert(typeof ListCACertificatesCommand === "function");
assert(typeof ListCACertificates$ === "object");
assert(typeof ListCertificateProvidersCommand === "function");
assert(typeof ListCertificateProviders$ === "object");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListCertificates$ === "object");
assert(typeof ListCertificatesByCACommand === "function");
assert(typeof ListCertificatesByCA$ === "object");
assert(typeof ListCommandExecutionsCommand === "function");
assert(typeof ListCommandExecutions$ === "object");
assert(typeof ListCommandsCommand === "function");
assert(typeof ListCommands$ === "object");
assert(typeof ListCustomMetricsCommand === "function");
assert(typeof ListCustomMetrics$ === "object");
assert(typeof ListDetectMitigationActionsExecutionsCommand === "function");
assert(typeof ListDetectMitigationActionsExecutions$ === "object");
assert(typeof ListDetectMitigationActionsTasksCommand === "function");
assert(typeof ListDetectMitigationActionsTasks$ === "object");
assert(typeof ListDimensionsCommand === "function");
assert(typeof ListDimensions$ === "object");
assert(typeof ListDomainConfigurationsCommand === "function");
assert(typeof ListDomainConfigurations$ === "object");
assert(typeof ListFleetMetricsCommand === "function");
assert(typeof ListFleetMetrics$ === "object");
assert(typeof ListIndicesCommand === "function");
assert(typeof ListIndices$ === "object");
assert(typeof ListJobExecutionsForJobCommand === "function");
assert(typeof ListJobExecutionsForJob$ === "object");
assert(typeof ListJobExecutionsForThingCommand === "function");
assert(typeof ListJobExecutionsForThing$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListJobTemplatesCommand === "function");
assert(typeof ListJobTemplates$ === "object");
assert(typeof ListManagedJobTemplatesCommand === "function");
assert(typeof ListManagedJobTemplates$ === "object");
assert(typeof ListMetricValuesCommand === "function");
assert(typeof ListMetricValues$ === "object");
assert(typeof ListMitigationActionsCommand === "function");
assert(typeof ListMitigationActions$ === "object");
assert(typeof ListOTAUpdatesCommand === "function");
assert(typeof ListOTAUpdates$ === "object");
assert(typeof ListOutgoingCertificatesCommand === "function");
assert(typeof ListOutgoingCertificates$ === "object");
assert(typeof ListPackagesCommand === "function");
assert(typeof ListPackages$ === "object");
assert(typeof ListPackageVersionsCommand === "function");
assert(typeof ListPackageVersions$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPolicyPrincipalsCommand === "function");
assert(typeof ListPolicyPrincipals$ === "object");
assert(typeof ListPolicyVersionsCommand === "function");
assert(typeof ListPolicyVersions$ === "object");
assert(typeof ListPrincipalPoliciesCommand === "function");
assert(typeof ListPrincipalPolicies$ === "object");
assert(typeof ListPrincipalThingsCommand === "function");
assert(typeof ListPrincipalThings$ === "object");
assert(typeof ListPrincipalThingsV2Command === "function");
assert(typeof ListPrincipalThingsV2$ === "object");
assert(typeof ListProvisioningTemplatesCommand === "function");
assert(typeof ListProvisioningTemplates$ === "object");
assert(typeof ListProvisioningTemplateVersionsCommand === "function");
assert(typeof ListProvisioningTemplateVersions$ === "object");
assert(typeof ListRelatedResourcesForAuditFindingCommand === "function");
assert(typeof ListRelatedResourcesForAuditFinding$ === "object");
assert(typeof ListRoleAliasesCommand === "function");
assert(typeof ListRoleAliases$ === "object");
assert(typeof ListSbomValidationResultsCommand === "function");
assert(typeof ListSbomValidationResults$ === "object");
assert(typeof ListScheduledAuditsCommand === "function");
assert(typeof ListScheduledAudits$ === "object");
assert(typeof ListSecurityProfilesCommand === "function");
assert(typeof ListSecurityProfiles$ === "object");
assert(typeof ListSecurityProfilesForTargetCommand === "function");
assert(typeof ListSecurityProfilesForTarget$ === "object");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListStreams$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetsForPolicyCommand === "function");
assert(typeof ListTargetsForPolicy$ === "object");
assert(typeof ListTargetsForSecurityProfileCommand === "function");
assert(typeof ListTargetsForSecurityProfile$ === "object");
assert(typeof ListThingGroupsCommand === "function");
assert(typeof ListThingGroups$ === "object");
assert(typeof ListThingGroupsForThingCommand === "function");
assert(typeof ListThingGroupsForThing$ === "object");
assert(typeof ListThingPrincipalsCommand === "function");
assert(typeof ListThingPrincipals$ === "object");
assert(typeof ListThingPrincipalsV2Command === "function");
assert(typeof ListThingPrincipalsV2$ === "object");
assert(typeof ListThingRegistrationTaskReportsCommand === "function");
assert(typeof ListThingRegistrationTaskReports$ === "object");
assert(typeof ListThingRegistrationTasksCommand === "function");
assert(typeof ListThingRegistrationTasks$ === "object");
assert(typeof ListThingsCommand === "function");
assert(typeof ListThings$ === "object");
assert(typeof ListThingsInBillingGroupCommand === "function");
assert(typeof ListThingsInBillingGroup$ === "object");
assert(typeof ListThingsInThingGroupCommand === "function");
assert(typeof ListThingsInThingGroup$ === "object");
assert(typeof ListThingTypesCommand === "function");
assert(typeof ListThingTypes$ === "object");
assert(typeof ListTopicRuleDestinationsCommand === "function");
assert(typeof ListTopicRuleDestinations$ === "object");
assert(typeof ListTopicRulesCommand === "function");
assert(typeof ListTopicRules$ === "object");
assert(typeof ListV2LoggingLevelsCommand === "function");
assert(typeof ListV2LoggingLevels$ === "object");
assert(typeof ListViolationEventsCommand === "function");
assert(typeof ListViolationEvents$ === "object");
assert(typeof PutVerificationStateOnViolationCommand === "function");
assert(typeof PutVerificationStateOnViolation$ === "object");
assert(typeof RegisterCACertificateCommand === "function");
assert(typeof RegisterCACertificate$ === "object");
assert(typeof RegisterCertificateCommand === "function");
assert(typeof RegisterCertificate$ === "object");
assert(typeof RegisterCertificateWithoutCACommand === "function");
assert(typeof RegisterCertificateWithoutCA$ === "object");
assert(typeof RegisterThingCommand === "function");
assert(typeof RegisterThing$ === "object");
assert(typeof RejectCertificateTransferCommand === "function");
assert(typeof RejectCertificateTransfer$ === "object");
assert(typeof RemoveThingFromBillingGroupCommand === "function");
assert(typeof RemoveThingFromBillingGroup$ === "object");
assert(typeof RemoveThingFromThingGroupCommand === "function");
assert(typeof RemoveThingFromThingGroup$ === "object");
assert(typeof ReplaceTopicRuleCommand === "function");
assert(typeof ReplaceTopicRule$ === "object");
assert(typeof SearchIndexCommand === "function");
assert(typeof SearchIndex$ === "object");
assert(typeof SetDefaultAuthorizerCommand === "function");
assert(typeof SetDefaultAuthorizer$ === "object");
assert(typeof SetDefaultPolicyVersionCommand === "function");
assert(typeof SetDefaultPolicyVersion$ === "object");
assert(typeof SetLoggingOptionsCommand === "function");
assert(typeof SetLoggingOptions$ === "object");
assert(typeof SetV2LoggingLevelCommand === "function");
assert(typeof SetV2LoggingLevel$ === "object");
assert(typeof SetV2LoggingOptionsCommand === "function");
assert(typeof SetV2LoggingOptions$ === "object");
assert(typeof StartAuditMitigationActionsTaskCommand === "function");
assert(typeof StartAuditMitigationActionsTask$ === "object");
assert(typeof StartDetectMitigationActionsTaskCommand === "function");
assert(typeof StartDetectMitigationActionsTask$ === "object");
assert(typeof StartOnDemandAuditTaskCommand === "function");
assert(typeof StartOnDemandAuditTask$ === "object");
assert(typeof StartThingRegistrationTaskCommand === "function");
assert(typeof StartThingRegistrationTask$ === "object");
assert(typeof StopThingRegistrationTaskCommand === "function");
assert(typeof StopThingRegistrationTask$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestAuthorizationCommand === "function");
assert(typeof TestAuthorization$ === "object");
assert(typeof TestInvokeAuthorizerCommand === "function");
assert(typeof TestInvokeAuthorizer$ === "object");
assert(typeof TransferCertificateCommand === "function");
assert(typeof TransferCertificate$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountAuditConfigurationCommand === "function");
assert(typeof UpdateAccountAuditConfiguration$ === "object");
assert(typeof UpdateAuditSuppressionCommand === "function");
assert(typeof UpdateAuditSuppression$ === "object");
assert(typeof UpdateAuthorizerCommand === "function");
assert(typeof UpdateAuthorizer$ === "object");
assert(typeof UpdateBillingGroupCommand === "function");
assert(typeof UpdateBillingGroup$ === "object");
assert(typeof UpdateCACertificateCommand === "function");
assert(typeof UpdateCACertificate$ === "object");
assert(typeof UpdateCertificateCommand === "function");
assert(typeof UpdateCertificate$ === "object");
assert(typeof UpdateCertificateProviderCommand === "function");
assert(typeof UpdateCertificateProvider$ === "object");
assert(typeof UpdateCommandCommand === "function");
assert(typeof UpdateCommand$ === "object");
assert(typeof UpdateCustomMetricCommand === "function");
assert(typeof UpdateCustomMetric$ === "object");
assert(typeof UpdateDimensionCommand === "function");
assert(typeof UpdateDimension$ === "object");
assert(typeof UpdateDomainConfigurationCommand === "function");
assert(typeof UpdateDomainConfiguration$ === "object");
assert(typeof UpdateDynamicThingGroupCommand === "function");
assert(typeof UpdateDynamicThingGroup$ === "object");
assert(typeof UpdateEncryptionConfigurationCommand === "function");
assert(typeof UpdateEncryptionConfiguration$ === "object");
assert(typeof UpdateEventConfigurationsCommand === "function");
assert(typeof UpdateEventConfigurations$ === "object");
assert(typeof UpdateFleetMetricCommand === "function");
assert(typeof UpdateFleetMetric$ === "object");
assert(typeof UpdateIndexingConfigurationCommand === "function");
assert(typeof UpdateIndexingConfiguration$ === "object");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateJob$ === "object");
assert(typeof UpdateMitigationActionCommand === "function");
assert(typeof UpdateMitigationAction$ === "object");
assert(typeof UpdatePackageCommand === "function");
assert(typeof UpdatePackage$ === "object");
assert(typeof UpdatePackageConfigurationCommand === "function");
assert(typeof UpdatePackageConfiguration$ === "object");
assert(typeof UpdatePackageVersionCommand === "function");
assert(typeof UpdatePackageVersion$ === "object");
assert(typeof UpdateProvisioningTemplateCommand === "function");
assert(typeof UpdateProvisioningTemplate$ === "object");
assert(typeof UpdateRoleAliasCommand === "function");
assert(typeof UpdateRoleAlias$ === "object");
assert(typeof UpdateScheduledAuditCommand === "function");
assert(typeof UpdateScheduledAudit$ === "object");
assert(typeof UpdateSecurityProfileCommand === "function");
assert(typeof UpdateSecurityProfile$ === "object");
assert(typeof UpdateStreamCommand === "function");
assert(typeof UpdateStream$ === "object");
assert(typeof UpdateThingCommand === "function");
assert(typeof UpdateThing$ === "object");
assert(typeof UpdateThingGroupCommand === "function");
assert(typeof UpdateThingGroup$ === "object");
assert(typeof UpdateThingGroupsForThingCommand === "function");
assert(typeof UpdateThingGroupsForThing$ === "object");
assert(typeof UpdateThingTypeCommand === "function");
assert(typeof UpdateThingType$ === "object");
assert(typeof UpdateTopicRuleDestinationCommand === "function");
assert(typeof UpdateTopicRuleDestination$ === "object");
assert(typeof ValidateSecurityProfileBehaviorsCommand === "function");
assert(typeof ValidateSecurityProfileBehaviors$ === "object");
// structural schemas
assert(typeof AbortConfig$ === "object");
assert(typeof AbortCriteria$ === "object");
assert(typeof AcceptCertificateTransferRequest$ === "object");
assert(typeof Action$ === "object");
assert(typeof ActiveViolation$ === "object");
assert(typeof AddThingsToThingGroupParams$ === "object");
assert(typeof AddThingToBillingGroupRequest$ === "object");
assert(typeof AddThingToBillingGroupResponse$ === "object");
assert(typeof AddThingToThingGroupRequest$ === "object");
assert(typeof AddThingToThingGroupResponse$ === "object");
assert(typeof AggregationType$ === "object");
assert(typeof AlertTarget$ === "object");
assert(typeof Allowed$ === "object");
assert(typeof AssetPropertyTimestamp$ === "object");
assert(typeof AssetPropertyValue$ === "object");
assert(typeof AssetPropertyVariant$ === "object");
assert(typeof AssociateSbomWithPackageVersionRequest$ === "object");
assert(typeof AssociateSbomWithPackageVersionResponse$ === "object");
assert(typeof AssociateTargetsWithJobRequest$ === "object");
assert(typeof AssociateTargetsWithJobResponse$ === "object");
assert(typeof AttachPolicyRequest$ === "object");
assert(typeof AttachPrincipalPolicyRequest$ === "object");
assert(typeof AttachSecurityProfileRequest$ === "object");
assert(typeof AttachSecurityProfileResponse$ === "object");
assert(typeof AttachThingPrincipalRequest$ === "object");
assert(typeof AttachThingPrincipalResponse$ === "object");
assert(typeof AttributePayload$ === "object");
assert(typeof AuditCheckConfiguration$ === "object");
assert(typeof AuditCheckDetails$ === "object");
assert(typeof AuditFinding$ === "object");
assert(typeof AuditMitigationActionExecutionMetadata$ === "object");
assert(typeof AuditMitigationActionsTaskMetadata$ === "object");
assert(typeof AuditMitigationActionsTaskTarget$ === "object");
assert(typeof AuditNotificationTarget$ === "object");
assert(typeof AuditSuppression$ === "object");
assert(typeof AuditTaskMetadata$ === "object");
assert(typeof AuthInfo$ === "object");
assert(typeof AuthorizerConfig$ === "object");
assert(typeof AuthorizerDescription$ === "object");
assert(typeof AuthorizerSummary$ === "object");
assert(typeof AuthResult$ === "object");
assert(typeof AwsJobAbortConfig$ === "object");
assert(typeof AwsJobAbortCriteria$ === "object");
assert(typeof AwsJobExecutionsRolloutConfig$ === "object");
assert(typeof AwsJobExponentialRolloutRate$ === "object");
assert(typeof AwsJobPresignedUrlConfig$ === "object");
assert(typeof AwsJobRateIncreaseCriteria$ === "object");
assert(typeof AwsJobTimeoutConfig$ === "object");
assert(typeof AwsJsonSubstitutionCommandPreprocessorConfig$ === "object");
assert(typeof BatchConfig$ === "object");
assert(typeof Behavior$ === "object");
assert(typeof BehaviorCriteria$ === "object");
assert(typeof BehaviorModelTrainingSummary$ === "object");
assert(typeof BillingGroupMetadata$ === "object");
assert(typeof BillingGroupProperties$ === "object");
assert(typeof Bucket$ === "object");
assert(typeof BucketsAggregationType$ === "object");
assert(typeof CACertificate$ === "object");
assert(typeof CACertificateDescription$ === "object");
assert(typeof CancelAuditMitigationActionsTaskRequest$ === "object");
assert(typeof CancelAuditMitigationActionsTaskResponse$ === "object");
assert(typeof CancelAuditTaskRequest$ === "object");
assert(typeof CancelAuditTaskResponse$ === "object");
assert(typeof CancelCertificateTransferRequest$ === "object");
assert(typeof CancelDetectMitigationActionsTaskRequest$ === "object");
assert(typeof CancelDetectMitigationActionsTaskResponse$ === "object");
assert(typeof CancelJobExecutionRequest$ === "object");
assert(typeof CancelJobRequest$ === "object");
assert(typeof CancelJobResponse$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateDescription$ === "object");
assert(typeof CertificateProviderSummary$ === "object");
assert(typeof CertificateValidity$ === "object");
assert(typeof ClearDefaultAuthorizerRequest$ === "object");
assert(typeof ClearDefaultAuthorizerResponse$ === "object");
assert(typeof ClientCertificateConfig$ === "object");
assert(typeof CloudwatchAlarmAction$ === "object");
assert(typeof CloudwatchLogsAction$ === "object");
assert(typeof CloudwatchMetricAction$ === "object");
assert(typeof CodeSigning$ === "object");
assert(typeof CodeSigningCertificateChain$ === "object");
assert(typeof CodeSigningSignature$ === "object");
assert(typeof CommandExecutionResult$ === "object");
assert(typeof CommandExecutionSummary$ === "object");
assert(typeof CommandParameter$ === "object");
assert(typeof CommandParameterValue$ === "object");
assert(typeof CommandParameterValueComparisonOperand$ === "object");
assert(typeof CommandParameterValueCondition$ === "object");
assert(typeof CommandParameterValueNumberRange$ === "object");
assert(typeof CommandPayload$ === "object");
assert(typeof CommandPreprocessor$ === "object");
assert(typeof CommandSummary$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConfigurationDetails$ === "object");
assert(typeof ConfirmTopicRuleDestinationRequest$ === "object");
assert(typeof ConfirmTopicRuleDestinationResponse$ === "object");
assert(typeof CreateAuditSuppressionRequest$ === "object");
assert(typeof CreateAuditSuppressionResponse$ === "object");
assert(typeof CreateAuthorizerRequest$ === "object");
assert(typeof CreateAuthorizerResponse$ === "object");
assert(typeof CreateBillingGroupRequest$ === "object");
assert(typeof CreateBillingGroupResponse$ === "object");
assert(typeof CreateCertificateFromCsrRequest$ === "object");
assert(typeof CreateCertificateFromCsrResponse$ === "object");
assert(typeof CreateCertificateProviderRequest$ === "object");
assert(typeof CreateCertificateProviderResponse$ === "object");
assert(typeof CreateCommandRequest$ === "object");
assert(typeof CreateCommandResponse$ === "object");
assert(typeof CreateCustomMetricRequest$ === "object");
assert(typeof CreateCustomMetricResponse$ === "object");
assert(typeof CreateDimensionRequest$ === "object");
assert(typeof CreateDimensionResponse$ === "object");
assert(typeof CreateDomainConfigurationRequest$ === "object");
assert(typeof CreateDomainConfigurationResponse$ === "object");
assert(typeof CreateDynamicThingGroupRequest$ === "object");
assert(typeof CreateDynamicThingGroupResponse$ === "object");
assert(typeof CreateFleetMetricRequest$ === "object");
assert(typeof CreateFleetMetricResponse$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResponse$ === "object");
assert(typeof CreateJobTemplateRequest$ === "object");
assert(typeof CreateJobTemplateResponse$ === "object");
assert(typeof CreateKeysAndCertificateRequest$ === "object");
assert(typeof CreateKeysAndCertificateResponse$ === "object");
assert(typeof CreateMitigationActionRequest$ === "object");
assert(typeof CreateMitigationActionResponse$ === "object");
assert(typeof CreateOTAUpdateRequest$ === "object");
assert(typeof CreateOTAUpdateResponse$ === "object");
assert(typeof CreatePackageRequest$ === "object");
assert(typeof CreatePackageResponse$ === "object");
assert(typeof CreatePackageVersionRequest$ === "object");
assert(typeof CreatePackageVersionResponse$ === "object");
assert(typeof CreatePolicyRequest$ === "object");
assert(typeof CreatePolicyResponse$ === "object");
assert(typeof CreatePolicyVersionRequest$ === "object");
assert(typeof CreatePolicyVersionResponse$ === "object");
assert(typeof CreateProvisioningClaimRequest$ === "object");
assert(typeof CreateProvisioningClaimResponse$ === "object");
assert(typeof CreateProvisioningTemplateRequest$ === "object");
assert(typeof CreateProvisioningTemplateResponse$ === "object");
assert(typeof CreateProvisioningTemplateVersionRequest$ === "object");
assert(typeof CreateProvisioningTemplateVersionResponse$ === "object");
assert(typeof CreateRoleAliasRequest$ === "object");
assert(typeof CreateRoleAliasResponse$ === "object");
assert(typeof CreateScheduledAuditRequest$ === "object");
assert(typeof CreateScheduledAuditResponse$ === "object");
assert(typeof CreateSecurityProfileRequest$ === "object");
assert(typeof CreateSecurityProfileResponse$ === "object");
assert(typeof CreateStreamRequest$ === "object");
assert(typeof CreateStreamResponse$ === "object");
assert(typeof CreateThingGroupRequest$ === "object");
assert(typeof CreateThingGroupResponse$ === "object");
assert(typeof CreateThingRequest$ === "object");
assert(typeof CreateThingResponse$ === "object");
assert(typeof CreateThingTypeRequest$ === "object");
assert(typeof CreateThingTypeResponse$ === "object");
assert(typeof CreateTopicRuleDestinationRequest$ === "object");
assert(typeof CreateTopicRuleDestinationResponse$ === "object");
assert(typeof CreateTopicRuleRequest$ === "object");
assert(typeof CustomCodeSigning$ === "object");
assert(typeof DeleteAccountAuditConfigurationRequest$ === "object");
assert(typeof DeleteAccountAuditConfigurationResponse$ === "object");
assert(typeof DeleteAuditSuppressionRequest$ === "object");
assert(typeof DeleteAuditSuppressionResponse$ === "object");
assert(typeof DeleteAuthorizerRequest$ === "object");
assert(typeof DeleteAuthorizerResponse$ === "object");
assert(typeof DeleteBillingGroupRequest$ === "object");
assert(typeof DeleteBillingGroupResponse$ === "object");
assert(typeof DeleteCACertificateRequest$ === "object");
assert(typeof DeleteCACertificateResponse$ === "object");
assert(typeof DeleteCertificateProviderRequest$ === "object");
assert(typeof DeleteCertificateProviderResponse$ === "object");
assert(typeof DeleteCertificateRequest$ === "object");
assert(typeof DeleteCommandExecutionRequest$ === "object");
assert(typeof DeleteCommandExecutionResponse$ === "object");
assert(typeof DeleteCommandRequest$ === "object");
assert(typeof DeleteCommandResponse$ === "object");
assert(typeof DeleteCustomMetricRequest$ === "object");
assert(typeof DeleteCustomMetricResponse$ === "object");
assert(typeof DeleteDimensionRequest$ === "object");
assert(typeof DeleteDimensionResponse$ === "object");
assert(typeof DeleteDomainConfigurationRequest$ === "object");
assert(typeof DeleteDomainConfigurationResponse$ === "object");
assert(typeof DeleteDynamicThingGroupRequest$ === "object");
assert(typeof DeleteDynamicThingGroupResponse$ === "object");
assert(typeof DeleteFleetMetricRequest$ === "object");
assert(typeof DeleteJobExecutionRequest$ === "object");
assert(typeof DeleteJobRequest$ === "object");
assert(typeof DeleteJobTemplateRequest$ === "object");
assert(typeof DeleteMitigationActionRequest$ === "object");
assert(typeof DeleteMitigationActionResponse$ === "object");
assert(typeof DeleteOTAUpdateRequest$ === "object");
assert(typeof DeleteOTAUpdateResponse$ === "object");
assert(typeof DeletePackageRequest$ === "object");
assert(typeof DeletePackageResponse$ === "object");
assert(typeof DeletePackageVersionRequest$ === "object");
assert(typeof DeletePackageVersionResponse$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DeletePolicyVersionRequest$ === "object");
assert(typeof DeleteProvisioningTemplateRequest$ === "object");
assert(typeof DeleteProvisioningTemplateResponse$ === "object");
assert(typeof DeleteProvisioningTemplateVersionRequest$ === "object");
assert(typeof DeleteProvisioningTemplateVersionResponse$ === "object");
assert(typeof DeleteRegistrationCodeRequest$ === "object");
assert(typeof DeleteRegistrationCodeResponse$ === "object");
assert(typeof DeleteRoleAliasRequest$ === "object");
assert(typeof DeleteRoleAliasResponse$ === "object");
assert(typeof DeleteScheduledAuditRequest$ === "object");
assert(typeof DeleteScheduledAuditResponse$ === "object");
assert(typeof DeleteSecurityProfileRequest$ === "object");
assert(typeof DeleteSecurityProfileResponse$ === "object");
assert(typeof DeleteStreamRequest$ === "object");
assert(typeof DeleteStreamResponse$ === "object");
assert(typeof DeleteThingGroupRequest$ === "object");
assert(typeof DeleteThingGroupResponse$ === "object");
assert(typeof DeleteThingRequest$ === "object");
assert(typeof DeleteThingResponse$ === "object");
assert(typeof DeleteThingTypeRequest$ === "object");
assert(typeof DeleteThingTypeResponse$ === "object");
assert(typeof DeleteTopicRuleDestinationRequest$ === "object");
assert(typeof DeleteTopicRuleDestinationResponse$ === "object");
assert(typeof DeleteTopicRuleRequest$ === "object");
assert(typeof DeleteV2LoggingLevelRequest$ === "object");
assert(typeof Denied$ === "object");
assert(typeof DeprecateThingTypeRequest$ === "object");
assert(typeof DeprecateThingTypeResponse$ === "object");
assert(typeof DescribeAccountAuditConfigurationRequest$ === "object");
assert(typeof DescribeAccountAuditConfigurationResponse$ === "object");
assert(typeof DescribeAuditFindingRequest$ === "object");
assert(typeof DescribeAuditFindingResponse$ === "object");
assert(typeof DescribeAuditMitigationActionsTaskRequest$ === "object");
assert(typeof DescribeAuditMitigationActionsTaskResponse$ === "object");
assert(typeof DescribeAuditSuppressionRequest$ === "object");
assert(typeof DescribeAuditSuppressionResponse$ === "object");
assert(typeof DescribeAuditTaskRequest$ === "object");
assert(typeof DescribeAuditTaskResponse$ === "object");
assert(typeof DescribeAuthorizerRequest$ === "object");
assert(typeof DescribeAuthorizerResponse$ === "object");
assert(typeof DescribeBillingGroupRequest$ === "object");
assert(typeof DescribeBillingGroupResponse$ === "object");
assert(typeof DescribeCACertificateRequest$ === "object");
assert(typeof DescribeCACertificateResponse$ === "object");
assert(typeof DescribeCertificateProviderRequest$ === "object");
assert(typeof DescribeCertificateProviderResponse$ === "object");
assert(typeof DescribeCertificateRequest$ === "object");
assert(typeof DescribeCertificateResponse$ === "object");
assert(typeof DescribeCustomMetricRequest$ === "object");
assert(typeof DescribeCustomMetricResponse$ === "object");
assert(typeof DescribeDefaultAuthorizerRequest$ === "object");
assert(typeof DescribeDefaultAuthorizerResponse$ === "object");
assert(typeof DescribeDetectMitigationActionsTaskRequest$ === "object");
assert(typeof DescribeDetectMitigationActionsTaskResponse$ === "object");
assert(typeof DescribeDimensionRequest$ === "object");
assert(typeof DescribeDimensionResponse$ === "object");
assert(typeof DescribeDomainConfigurationRequest$ === "object");
assert(typeof DescribeDomainConfigurationResponse$ === "object");
assert(typeof DescribeEncryptionConfigurationRequest$ === "object");
assert(typeof DescribeEncryptionConfigurationResponse$ === "object");
assert(typeof DescribeEndpointRequest$ === "object");
assert(typeof DescribeEndpointResponse$ === "object");
assert(typeof DescribeEventConfigurationsRequest$ === "object");
assert(typeof DescribeEventConfigurationsResponse$ === "object");
assert(typeof DescribeFleetMetricRequest$ === "object");
assert(typeof DescribeFleetMetricResponse$ === "object");
assert(typeof DescribeIndexRequest$ === "object");
assert(typeof DescribeIndexResponse$ === "object");
assert(typeof DescribeJobExecutionRequest$ === "object");
assert(typeof DescribeJobExecutionResponse$ === "object");
assert(typeof DescribeJobRequest$ === "object");
assert(typeof DescribeJobResponse$ === "object");
assert(typeof DescribeJobTemplateRequest$ === "object");
assert(typeof DescribeJobTemplateResponse$ === "object");
assert(typeof DescribeManagedJobTemplateRequest$ === "object");
assert(typeof DescribeManagedJobTemplateResponse$ === "object");
assert(typeof DescribeMitigationActionRequest$ === "object");
assert(typeof DescribeMitigationActionResponse$ === "object");
assert(typeof DescribeProvisioningTemplateRequest$ === "object");
assert(typeof DescribeProvisioningTemplateResponse$ === "object");
assert(typeof DescribeProvisioningTemplateVersionRequest$ === "object");
assert(typeof DescribeProvisioningTemplateVersionResponse$ === "object");
assert(typeof DescribeRoleAliasRequest$ === "object");
assert(typeof DescribeRoleAliasResponse$ === "object");
assert(typeof DescribeScheduledAuditRequest$ === "object");
assert(typeof DescribeScheduledAuditResponse$ === "object");
assert(typeof DescribeSecurityProfileRequest$ === "object");
assert(typeof DescribeSecurityProfileResponse$ === "object");
assert(typeof DescribeStreamRequest$ === "object");
assert(typeof DescribeStreamResponse$ === "object");
assert(typeof DescribeThingGroupRequest$ === "object");
assert(typeof DescribeThingGroupResponse$ === "object");
assert(typeof DescribeThingRegistrationTaskRequest$ === "object");
assert(typeof DescribeThingRegistrationTaskResponse$ === "object");
assert(typeof DescribeThingRequest$ === "object");
assert(typeof DescribeThingResponse$ === "object");
assert(typeof DescribeThingTypeRequest$ === "object");
assert(typeof DescribeThingTypeResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DetachPolicyRequest$ === "object");
assert(typeof DetachPrincipalPolicyRequest$ === "object");
assert(typeof DetachSecurityProfileRequest$ === "object");
assert(typeof DetachSecurityProfileResponse$ === "object");
assert(typeof DetachThingPrincipalRequest$ === "object");
assert(typeof DetachThingPrincipalResponse$ === "object");
assert(typeof DetectMitigationActionExecution$ === "object");
assert(typeof DetectMitigationActionsTaskStatistics$ === "object");
assert(typeof DetectMitigationActionsTaskSummary$ === "object");
assert(typeof DetectMitigationActionsTaskTarget$ === "object");
assert(typeof DisableTopicRuleRequest$ === "object");
assert(typeof DisassociateSbomFromPackageVersionRequest$ === "object");
assert(typeof DisassociateSbomFromPackageVersionResponse$ === "object");
assert(typeof DocumentParameter$ === "object");
assert(typeof DomainConfigurationSummary$ === "object");
assert(typeof DynamoDBAction$ === "object");
assert(typeof DynamoDBv2Action$ === "object");
assert(typeof EffectivePolicy$ === "object");
assert(typeof ElasticsearchAction$ === "object");
assert(typeof EnableIoTLoggingParams$ === "object");
assert(typeof EnableTopicRuleRequest$ === "object");
assert(typeof ErrorInfo$ === "object");
assert(typeof ExplicitDeny$ === "object");
assert(typeof ExponentialRolloutRate$ === "object");
assert(typeof Field$ === "object");
assert(typeof FileLocation$ === "object");
assert(typeof FirehoseAction$ === "object");
assert(typeof FleetMetricNameAndArn$ === "object");
assert(typeof GeoLocationTarget$ === "object");
assert(typeof GetBehaviorModelTrainingSummariesRequest$ === "object");
assert(typeof GetBehaviorModelTrainingSummariesResponse$ === "object");
assert(typeof GetBucketsAggregationRequest$ === "object");
assert(typeof GetBucketsAggregationResponse$ === "object");
assert(typeof GetCardinalityRequest$ === "object");
assert(typeof GetCardinalityResponse$ === "object");
assert(typeof GetCommandExecutionRequest$ === "object");
assert(typeof GetCommandExecutionResponse$ === "object");
assert(typeof GetCommandRequest$ === "object");
assert(typeof GetCommandResponse$ === "object");
assert(typeof GetEffectivePoliciesRequest$ === "object");
assert(typeof GetEffectivePoliciesResponse$ === "object");
assert(typeof GetIndexingConfigurationRequest$ === "object");
assert(typeof GetIndexingConfigurationResponse$ === "object");
assert(typeof GetJobDocumentRequest$ === "object");
assert(typeof GetJobDocumentResponse$ === "object");
assert(typeof GetLoggingOptionsRequest$ === "object");
assert(typeof GetLoggingOptionsResponse$ === "object");
assert(typeof GetOTAUpdateRequest$ === "object");
assert(typeof GetOTAUpdateResponse$ === "object");
assert(typeof GetPackageConfigurationRequest$ === "object");
assert(typeof GetPackageConfigurationResponse$ === "object");
assert(typeof GetPackageRequest$ === "object");
assert(typeof GetPackageResponse$ === "object");
assert(typeof GetPackageVersionRequest$ === "object");
assert(typeof GetPackageVersionResponse$ === "object");
assert(typeof GetPercentilesRequest$ === "object");
assert(typeof GetPercentilesResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetPolicyVersionRequest$ === "object");
assert(typeof GetPolicyVersionResponse$ === "object");
assert(typeof GetRegistrationCodeRequest$ === "object");
assert(typeof GetRegistrationCodeResponse$ === "object");
assert(typeof GetStatisticsRequest$ === "object");
assert(typeof GetStatisticsResponse$ === "object");
assert(typeof GetThingConnectivityDataRequest$ === "object");
assert(typeof GetThingConnectivityDataResponse$ === "object");
assert(typeof GetTopicRuleDestinationRequest$ === "object");
assert(typeof GetTopicRuleDestinationResponse$ === "object");
assert(typeof GetTopicRuleRequest$ === "object");
assert(typeof GetTopicRuleResponse$ === "object");
assert(typeof GetV2LoggingOptionsRequest$ === "object");
assert(typeof GetV2LoggingOptionsResponse$ === "object");
assert(typeof GroupNameAndArn$ === "object");
assert(typeof HttpAction$ === "object");
assert(typeof HttpActionHeader$ === "object");
assert(typeof HttpAuthorization$ === "object");
assert(typeof HttpContext$ === "object");
assert(typeof HttpUrlDestinationConfiguration$ === "object");
assert(typeof HttpUrlDestinationProperties$ === "object");
assert(typeof HttpUrlDestinationSummary$ === "object");
assert(typeof ImplicitDeny$ === "object");
assert(typeof IndexingFilter$ === "object");
assert(typeof IotAnalyticsAction$ === "object");
assert(typeof IotEventsAction$ === "object");
assert(typeof IotSiteWiseAction$ === "object");
assert(typeof IssuerCertificateIdentifier$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobExecution$ === "object");
assert(typeof JobExecutionsRetryConfig$ === "object");
assert(typeof JobExecutionsRolloutConfig$ === "object");
assert(typeof JobExecutionStatusDetails$ === "object");
assert(typeof JobExecutionSummary$ === "object");
assert(typeof JobExecutionSummaryForJob$ === "object");
assert(typeof JobExecutionSummaryForThing$ === "object");
assert(typeof JobProcessDetails$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof JobTemplateSummary$ === "object");
assert(typeof KafkaAction$ === "object");
assert(typeof KafkaActionHeader$ === "object");
assert(typeof KeyPair$ === "object");
assert(typeof KinesisAction$ === "object");
assert(typeof LambdaAction$ === "object");
assert(typeof ListActiveViolationsRequest$ === "object");
assert(typeof ListActiveViolationsResponse$ === "object");
assert(typeof ListAttachedPoliciesRequest$ === "object");
assert(typeof ListAttachedPoliciesResponse$ === "object");
assert(typeof ListAuditFindingsRequest$ === "object");
assert(typeof ListAuditFindingsResponse$ === "object");
assert(typeof ListAuditMitigationActionsExecutionsRequest$ === "object");
assert(typeof ListAuditMitigationActionsExecutionsResponse$ === "object");
assert(typeof ListAuditMitigationActionsTasksRequest$ === "object");
assert(typeof ListAuditMitigationActionsTasksResponse$ === "object");
assert(typeof ListAuditSuppressionsRequest$ === "object");
assert(typeof ListAuditSuppressionsResponse$ === "object");
assert(typeof ListAuditTasksRequest$ === "object");
assert(typeof ListAuditTasksResponse$ === "object");
assert(typeof ListAuthorizersRequest$ === "object");
assert(typeof ListAuthorizersResponse$ === "object");
assert(typeof ListBillingGroupsRequest$ === "object");
assert(typeof ListBillingGroupsResponse$ === "object");
assert(typeof ListCACertificatesRequest$ === "object");
assert(typeof ListCACertificatesResponse$ === "object");
assert(typeof ListCertificateProvidersRequest$ === "object");
assert(typeof ListCertificateProvidersResponse$ === "object");
assert(typeof ListCertificatesByCARequest$ === "object");
assert(typeof ListCertificatesByCAResponse$ === "object");
assert(typeof ListCertificatesRequest$ === "object");
assert(typeof ListCertificatesResponse$ === "object");
assert(typeof ListCommandExecutionsRequest$ === "object");
assert(typeof ListCommandExecutionsResponse$ === "object");
assert(typeof ListCommandsRequest$ === "object");
assert(typeof ListCommandsResponse$ === "object");
assert(typeof ListCustomMetricsRequest$ === "object");
assert(typeof ListCustomMetricsResponse$ === "object");
assert(typeof ListDetectMitigationActionsExecutionsRequest$ === "object");
assert(typeof ListDetectMitigationActionsExecutionsResponse$ === "object");
assert(typeof ListDetectMitigationActionsTasksRequest$ === "object");
assert(typeof ListDetectMitigationActionsTasksResponse$ === "object");
assert(typeof ListDimensionsRequest$ === "object");
assert(typeof ListDimensionsResponse$ === "object");
assert(typeof ListDomainConfigurationsRequest$ === "object");
assert(typeof ListDomainConfigurationsResponse$ === "object");
assert(typeof ListFleetMetricsRequest$ === "object");
assert(typeof ListFleetMetricsResponse$ === "object");
assert(typeof ListIndicesRequest$ === "object");
assert(typeof ListIndicesResponse$ === "object");
assert(typeof ListJobExecutionsForJobRequest$ === "object");
assert(typeof ListJobExecutionsForJobResponse$ === "object");
assert(typeof ListJobExecutionsForThingRequest$ === "object");
assert(typeof ListJobExecutionsForThingResponse$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResponse$ === "object");
assert(typeof ListJobTemplatesRequest$ === "object");
assert(typeof ListJobTemplatesResponse$ === "object");
assert(typeof ListManagedJobTemplatesRequest$ === "object");
assert(typeof ListManagedJobTemplatesResponse$ === "object");
assert(typeof ListMetricValuesRequest$ === "object");
assert(typeof ListMetricValuesResponse$ === "object");
assert(typeof ListMitigationActionsRequest$ === "object");
assert(typeof ListMitigationActionsResponse$ === "object");
assert(typeof ListOTAUpdatesRequest$ === "object");
assert(typeof ListOTAUpdatesResponse$ === "object");
assert(typeof ListOutgoingCertificatesRequest$ === "object");
assert(typeof ListOutgoingCertificatesResponse$ === "object");
assert(typeof ListPackagesRequest$ === "object");
assert(typeof ListPackagesResponse$ === "object");
assert(typeof ListPackageVersionsRequest$ === "object");
assert(typeof ListPackageVersionsResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListPolicyPrincipalsRequest$ === "object");
assert(typeof ListPolicyPrincipalsResponse$ === "object");
assert(typeof ListPolicyVersionsRequest$ === "object");
assert(typeof ListPolicyVersionsResponse$ === "object");
assert(typeof ListPrincipalPoliciesRequest$ === "object");
assert(typeof ListPrincipalPoliciesResponse$ === "object");
assert(typeof ListPrincipalThingsRequest$ === "object");
assert(typeof ListPrincipalThingsResponse$ === "object");
assert(typeof ListPrincipalThingsV2Request$ === "object");
assert(typeof ListPrincipalThingsV2Response$ === "object");
assert(typeof ListProvisioningTemplatesRequest$ === "object");
assert(typeof ListProvisioningTemplatesResponse$ === "object");
assert(typeof ListProvisioningTemplateVersionsRequest$ === "object");
assert(typeof ListProvisioningTemplateVersionsResponse$ === "object");
assert(typeof ListRelatedResourcesForAuditFindingRequest$ === "object");
assert(typeof ListRelatedResourcesForAuditFindingResponse$ === "object");
assert(typeof ListRoleAliasesRequest$ === "object");
assert(typeof ListRoleAliasesResponse$ === "object");
assert(typeof ListSbomValidationResultsRequest$ === "object");
assert(typeof ListSbomValidationResultsResponse$ === "object");
assert(typeof ListScheduledAuditsRequest$ === "object");
assert(typeof ListScheduledAuditsResponse$ === "object");
assert(typeof ListSecurityProfilesForTargetRequest$ === "object");
assert(typeof ListSecurityProfilesForTargetResponse$ === "object");
assert(typeof ListSecurityProfilesRequest$ === "object");
assert(typeof ListSecurityProfilesResponse$ === "object");
assert(typeof ListStreamsRequest$ === "object");
assert(typeof ListStreamsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTargetsForPolicyRequest$ === "object");
assert(typeof ListTargetsForPolicyResponse$ === "object");
assert(typeof ListTargetsForSecurityProfileRequest$ === "object");
assert(typeof ListTargetsForSecurityProfileResponse$ === "object");
assert(typeof ListThingGroupsForThingRequest$ === "object");
assert(typeof ListThingGroupsForThingResponse$ === "object");
assert(typeof ListThingGroupsRequest$ === "object");
assert(typeof ListThingGroupsResponse$ === "object");
assert(typeof ListThingPrincipalsRequest$ === "object");
assert(typeof ListThingPrincipalsResponse$ === "object");
assert(typeof ListThingPrincipalsV2Request$ === "object");
assert(typeof ListThingPrincipalsV2Response$ === "object");
assert(typeof ListThingRegistrationTaskReportsRequest$ === "object");
assert(typeof ListThingRegistrationTaskReportsResponse$ === "object");
assert(typeof ListThingRegistrationTasksRequest$ === "object");
assert(typeof ListThingRegistrationTasksResponse$ === "object");
assert(typeof ListThingsInBillingGroupRequest$ === "object");
assert(typeof ListThingsInBillingGroupResponse$ === "object");
assert(typeof ListThingsInThingGroupRequest$ === "object");
assert(typeof ListThingsInThingGroupResponse$ === "object");
assert(typeof ListThingsRequest$ === "object");
assert(typeof ListThingsResponse$ === "object");
assert(typeof ListThingTypesRequest$ === "object");
assert(typeof ListThingTypesResponse$ === "object");
assert(typeof ListTopicRuleDestinationsRequest$ === "object");
assert(typeof ListTopicRuleDestinationsResponse$ === "object");
assert(typeof ListTopicRulesRequest$ === "object");
assert(typeof ListTopicRulesResponse$ === "object");
assert(typeof ListV2LoggingLevelsRequest$ === "object");
assert(typeof ListV2LoggingLevelsResponse$ === "object");
assert(typeof ListViolationEventsRequest$ === "object");
assert(typeof ListViolationEventsResponse$ === "object");
assert(typeof LocationAction$ === "object");
assert(typeof LocationTimestamp$ === "object");
assert(typeof LogEventConfiguration$ === "object");
assert(typeof LoggingOptionsPayload$ === "object");
assert(typeof LogTarget$ === "object");
assert(typeof LogTargetConfiguration$ === "object");
assert(typeof MachineLearningDetectionConfig$ === "object");
assert(typeof MaintenanceWindow$ === "object");
assert(typeof ManagedJobTemplateSummary$ === "object");
assert(typeof MetricDatum$ === "object");
assert(typeof MetricDimension$ === "object");
assert(typeof MetricsExportConfig$ === "object");
assert(typeof MetricToRetain$ === "object");
assert(typeof MetricValue$ === "object");
assert(typeof MitigationAction$ === "object");
assert(typeof MitigationActionIdentifier$ === "object");
assert(typeof MitigationActionParams$ === "object");
assert(typeof Mqtt5Configuration$ === "object");
assert(typeof MqttContext$ === "object");
assert(typeof MqttHeaders$ === "object");
assert(typeof NonCompliantResource$ === "object");
assert(typeof OpenSearchAction$ === "object");
assert(typeof OTAUpdateFile$ === "object");
assert(typeof OTAUpdateInfo$ === "object");
assert(typeof OTAUpdateSummary$ === "object");
assert(typeof OutgoingCertificate$ === "object");
assert(typeof PackageSummary$ === "object");
assert(typeof PackageVersionArtifact$ === "object");
assert(typeof PackageVersionSummary$ === "object");
assert(typeof PercentPair$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicyVersion$ === "object");
assert(typeof PolicyVersionIdentifier$ === "object");
assert(typeof PresignedUrlConfig$ === "object");
assert(typeof PrincipalThingObject$ === "object");
assert(typeof PropagatingAttribute$ === "object");
assert(typeof ProvisioningHook$ === "object");
assert(typeof ProvisioningTemplateSummary$ === "object");
assert(typeof ProvisioningTemplateVersionSummary$ === "object");
assert(typeof PublishFindingToSnsParams$ === "object");
assert(typeof PutAssetPropertyValueEntry$ === "object");
assert(typeof PutItemInput$ === "object");
assert(typeof PutVerificationStateOnViolationRequest$ === "object");
assert(typeof PutVerificationStateOnViolationResponse$ === "object");
assert(typeof RateIncreaseCriteria$ === "object");
assert(typeof RegisterCACertificateRequest$ === "object");
assert(typeof RegisterCACertificateResponse$ === "object");
assert(typeof RegisterCertificateRequest$ === "object");
assert(typeof RegisterCertificateResponse$ === "object");
assert(typeof RegisterCertificateWithoutCARequest$ === "object");
assert(typeof RegisterCertificateWithoutCAResponse$ === "object");
assert(typeof RegisterThingRequest$ === "object");
assert(typeof RegisterThingResponse$ === "object");
assert(typeof RegistrationConfig$ === "object");
assert(typeof RejectCertificateTransferRequest$ === "object");
assert(typeof RelatedResource$ === "object");
assert(typeof RemoveThingFromBillingGroupRequest$ === "object");
assert(typeof RemoveThingFromBillingGroupResponse$ === "object");
assert(typeof RemoveThingFromThingGroupRequest$ === "object");
assert(typeof RemoveThingFromThingGroupResponse$ === "object");
assert(typeof ReplaceDefaultPolicyVersionParams$ === "object");
assert(typeof ReplaceTopicRuleRequest$ === "object");
assert(typeof RepublishAction$ === "object");
assert(typeof ResourceIdentifier$ === "object");
assert(typeof RetryCriteria$ === "object");
assert(typeof RoleAliasDescription$ === "object");
assert(typeof S3Action$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SalesforceAction$ === "object");
assert(typeof Sbom$ === "object");
assert(typeof SbomValidationResultSummary$ === "object");
assert(typeof ScheduledAuditMetadata$ === "object");
assert(typeof ScheduledJobRollout$ === "object");
assert(typeof SchedulingConfig$ === "object");
assert(typeof SearchIndexRequest$ === "object");
assert(typeof SearchIndexResponse$ === "object");
assert(typeof SecurityProfileIdentifier$ === "object");
assert(typeof SecurityProfileTarget$ === "object");
assert(typeof SecurityProfileTargetMapping$ === "object");
assert(typeof ServerCertificateConfig$ === "object");
assert(typeof ServerCertificateSummary$ === "object");
assert(typeof SetDefaultAuthorizerRequest$ === "object");
assert(typeof SetDefaultAuthorizerResponse$ === "object");
assert(typeof SetDefaultPolicyVersionRequest$ === "object");
assert(typeof SetLoggingOptionsRequest$ === "object");
assert(typeof SetV2LoggingLevelRequest$ === "object");
assert(typeof SetV2LoggingOptionsRequest$ === "object");
assert(typeof SigningProfileParameter$ === "object");
assert(typeof SigV4Authorization$ === "object");
assert(typeof SnsAction$ === "object");
assert(typeof SqsAction$ === "object");
assert(typeof StartAuditMitigationActionsTaskRequest$ === "object");
assert(typeof StartAuditMitigationActionsTaskResponse$ === "object");
assert(typeof StartDetectMitigationActionsTaskRequest$ === "object");
assert(typeof StartDetectMitigationActionsTaskResponse$ === "object");
assert(typeof StartOnDemandAuditTaskRequest$ === "object");
assert(typeof StartOnDemandAuditTaskResponse$ === "object");
assert(typeof StartSigningJobParameter$ === "object");
assert(typeof StartThingRegistrationTaskRequest$ === "object");
assert(typeof StartThingRegistrationTaskResponse$ === "object");
assert(typeof StatisticalThreshold$ === "object");
assert(typeof Statistics$ === "object");
assert(typeof StatusReason$ === "object");
assert(typeof StepFunctionsAction$ === "object");
assert(typeof StopThingRegistrationTaskRequest$ === "object");
assert(typeof StopThingRegistrationTaskResponse$ === "object");
assert(typeof _Stream$ === "object");
assert(typeof StreamFile$ === "object");
assert(typeof StreamInfo$ === "object");
assert(typeof StreamSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskStatistics$ === "object");
assert(typeof TaskStatisticsForAuditCheck$ === "object");
assert(typeof TermsAggregation$ === "object");
assert(typeof TestAuthorizationRequest$ === "object");
assert(typeof TestAuthorizationResponse$ === "object");
assert(typeof TestInvokeAuthorizerRequest$ === "object");
assert(typeof TestInvokeAuthorizerResponse$ === "object");
assert(typeof ThingAttribute$ === "object");
assert(typeof ThingConnectivity$ === "object");
assert(typeof ThingDocument$ === "object");
assert(typeof ThingGroupDocument$ === "object");
assert(typeof ThingGroupIndexingConfiguration$ === "object");
assert(typeof ThingGroupMetadata$ === "object");
assert(typeof ThingGroupProperties$ === "object");
assert(typeof ThingIndexingConfiguration$ === "object");
assert(typeof ThingPrincipalObject$ === "object");
assert(typeof ThingTypeDefinition$ === "object");
assert(typeof ThingTypeMetadata$ === "object");
assert(typeof ThingTypeProperties$ === "object");
assert(typeof TimeFilter$ === "object");
assert(typeof TimeoutConfig$ === "object");
assert(typeof TimestreamAction$ === "object");
assert(typeof TimestreamDimension$ === "object");
assert(typeof TimestreamTimestamp$ === "object");
assert(typeof TlsConfig$ === "object");
assert(typeof TlsContext$ === "object");
assert(typeof TopicRule$ === "object");
assert(typeof TopicRuleDestination$ === "object");
assert(typeof TopicRuleDestinationConfiguration$ === "object");
assert(typeof TopicRuleDestinationSummary$ === "object");
assert(typeof TopicRuleListItem$ === "object");
assert(typeof TopicRulePayload$ === "object");
assert(typeof TransferCertificateRequest$ === "object");
assert(typeof TransferCertificateResponse$ === "object");
assert(typeof TransferData$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccountAuditConfigurationRequest$ === "object");
assert(typeof UpdateAccountAuditConfigurationResponse$ === "object");
assert(typeof UpdateAuditSuppressionRequest$ === "object");
assert(typeof UpdateAuditSuppressionResponse$ === "object");
assert(typeof UpdateAuthorizerRequest$ === "object");
assert(typeof UpdateAuthorizerResponse$ === "object");
assert(typeof UpdateBillingGroupRequest$ === "object");
assert(typeof UpdateBillingGroupResponse$ === "object");
assert(typeof UpdateCACertificateParams$ === "object");
assert(typeof UpdateCACertificateRequest$ === "object");
assert(typeof UpdateCertificateProviderRequest$ === "object");
assert(typeof UpdateCertificateProviderResponse$ === "object");
assert(typeof UpdateCertificateRequest$ === "object");
assert(typeof UpdateCommandRequest$ === "object");
assert(typeof UpdateCommandResponse$ === "object");
assert(typeof UpdateCustomMetricRequest$ === "object");
assert(typeof UpdateCustomMetricResponse$ === "object");
assert(typeof UpdateDeviceCertificateParams$ === "object");
assert(typeof UpdateDimensionRequest$ === "object");
assert(typeof UpdateDimensionResponse$ === "object");
assert(typeof UpdateDomainConfigurationRequest$ === "object");
assert(typeof UpdateDomainConfigurationResponse$ === "object");
assert(typeof UpdateDynamicThingGroupRequest$ === "object");
assert(typeof UpdateDynamicThingGroupResponse$ === "object");
assert(typeof UpdateEncryptionConfigurationRequest$ === "object");
assert(typeof UpdateEncryptionConfigurationResponse$ === "object");
assert(typeof UpdateEventConfigurationsRequest$ === "object");
assert(typeof UpdateEventConfigurationsResponse$ === "object");
assert(typeof UpdateFleetMetricRequest$ === "object");
assert(typeof UpdateIndexingConfigurationRequest$ === "object");
assert(typeof UpdateIndexingConfigurationResponse$ === "object");
assert(typeof UpdateJobRequest$ === "object");
assert(typeof UpdateMitigationActionRequest$ === "object");
assert(typeof UpdateMitigationActionResponse$ === "object");
assert(typeof UpdatePackageConfigurationRequest$ === "object");
assert(typeof UpdatePackageConfigurationResponse$ === "object");
assert(typeof UpdatePackageRequest$ === "object");
assert(typeof UpdatePackageResponse$ === "object");
assert(typeof UpdatePackageVersionRequest$ === "object");
assert(typeof UpdatePackageVersionResponse$ === "object");
assert(typeof UpdateProvisioningTemplateRequest$ === "object");
assert(typeof UpdateProvisioningTemplateResponse$ === "object");
assert(typeof UpdateRoleAliasRequest$ === "object");
assert(typeof UpdateRoleAliasResponse$ === "object");
assert(typeof UpdateScheduledAuditRequest$ === "object");
assert(typeof UpdateScheduledAuditResponse$ === "object");
assert(typeof UpdateSecurityProfileRequest$ === "object");
assert(typeof UpdateSecurityProfileResponse$ === "object");
assert(typeof UpdateStreamRequest$ === "object");
assert(typeof UpdateStreamResponse$ === "object");
assert(typeof UpdateThingGroupRequest$ === "object");
assert(typeof UpdateThingGroupResponse$ === "object");
assert(typeof UpdateThingGroupsForThingRequest$ === "object");
assert(typeof UpdateThingGroupsForThingResponse$ === "object");
assert(typeof UpdateThingRequest$ === "object");
assert(typeof UpdateThingResponse$ === "object");
assert(typeof UpdateThingTypeRequest$ === "object");
assert(typeof UpdateThingTypeResponse$ === "object");
assert(typeof UpdateTopicRuleDestinationRequest$ === "object");
assert(typeof UpdateTopicRuleDestinationResponse$ === "object");
assert(typeof UserProperty$ === "object");
assert(typeof ValidateSecurityProfileBehaviorsRequest$ === "object");
assert(typeof ValidateSecurityProfileBehaviorsResponse$ === "object");
assert(typeof ValidationError$ === "object");
assert(typeof VersionUpdateByJobsConfig$ === "object");
assert(typeof ViolationEvent$ === "object");
assert(typeof ViolationEventAdditionalInfo$ === "object");
assert(typeof ViolationEventOccurrenceRange$ === "object");
assert(typeof VpcDestinationConfiguration$ === "object");
assert(typeof VpcDestinationProperties$ === "object");
assert(typeof VpcDestinationSummary$ === "object");
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
assert(typeof CommandParameterType === "object");
assert(typeof CommandParameterValueComparisonOperator === "object");
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
assert(typeof OutputFormat === "object");
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
assert(CertificateConflictException.prototype instanceof IoTServiceException);
assert(typeof CertificateConflictException$ === "object");
assert(CertificateStateException.prototype instanceof IoTServiceException);
assert(typeof CertificateStateException$ === "object");
assert(CertificateValidationException.prototype instanceof IoTServiceException);
assert(typeof CertificateValidationException$ === "object");
assert(ConflictException.prototype instanceof IoTServiceException);
assert(typeof ConflictException$ === "object");
assert(ConflictingResourceUpdateException.prototype instanceof IoTServiceException);
assert(typeof ConflictingResourceUpdateException$ === "object");
assert(DeleteConflictException.prototype instanceof IoTServiceException);
assert(typeof DeleteConflictException$ === "object");
assert(IndexNotReadyException.prototype instanceof IoTServiceException);
assert(typeof IndexNotReadyException$ === "object");
assert(InternalException.prototype instanceof IoTServiceException);
assert(typeof InternalException$ === "object");
assert(InternalFailureException.prototype instanceof IoTServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InternalServerException.prototype instanceof IoTServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidAggregationException.prototype instanceof IoTServiceException);
assert(typeof InvalidAggregationException$ === "object");
assert(InvalidQueryException.prototype instanceof IoTServiceException);
assert(typeof InvalidQueryException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidResponseException.prototype instanceof IoTServiceException);
assert(typeof InvalidResponseException$ === "object");
assert(InvalidStateTransitionException.prototype instanceof IoTServiceException);
assert(typeof InvalidStateTransitionException$ === "object");
assert(LimitExceededException.prototype instanceof IoTServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MalformedPolicyException.prototype instanceof IoTServiceException);
assert(typeof MalformedPolicyException$ === "object");
assert(NotConfiguredException.prototype instanceof IoTServiceException);
assert(typeof NotConfiguredException$ === "object");
assert(RegistrationCodeValidationException.prototype instanceof IoTServiceException);
assert(typeof RegistrationCodeValidationException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof IoTServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceRegistrationFailureException.prototype instanceof IoTServiceException);
assert(typeof ResourceRegistrationFailureException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IoTServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof IoTServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(SqlParseException.prototype instanceof IoTServiceException);
assert(typeof SqlParseException$ === "object");
assert(TaskAlreadyExistsException.prototype instanceof IoTServiceException);
assert(typeof TaskAlreadyExistsException$ === "object");
assert(ThrottlingException.prototype instanceof IoTServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TransferAlreadyCompletedException.prototype instanceof IoTServiceException);
assert(typeof TransferAlreadyCompletedException$ === "object");
assert(TransferConflictException.prototype instanceof IoTServiceException);
assert(typeof TransferConflictException$ === "object");
assert(UnauthorizedException.prototype instanceof IoTServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof IoTServiceException);
assert(typeof ValidationException$ === "object");
assert(VersionConflictException.prototype instanceof IoTServiceException);
assert(typeof VersionConflictException$ === "object");
assert(VersionsLimitExceededException.prototype instanceof IoTServiceException);
assert(typeof VersionsLimitExceededException$ === "object");
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
