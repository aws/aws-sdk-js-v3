// smithy-typescript generated code
import type {
  AlertTargetType,
  ApplicationProtocol,
  AuditFrequency,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskStatus,
  AuditNotificationType,
  AuditTaskStatus,
  AuditTaskType,
  AuthenticationType,
  AuthorizerStatus,
  AutoRegistrationStatus,
  BehaviorCriteriaType,
  CACertificateStatus,
  CertificateMode,
  CertificateProviderOperation,
  CertificateStatus,
  CommandExecutionStatus,
  CommandNamespace,
  ConfigurationStatus,
  CustomMetricType,
  DayOfWeek,
  DetectMitigationActionExecutionStatus,
  DetectMitigationActionsTaskStatus,
  DeviceDefenderIndexingMode,
  DimensionType,
  DimensionValueOperator,
  DisconnectReasonValue,
  DomainConfigurationStatus,
  DomainType,
  DynamicGroupStatus,
  EncryptionType,
  EventType,
  FieldType,
  FleetIndexingApi,
  FleetMetricUnit,
  IndexStatus,
  JobExecutionStatus,
  JobStatus,
  LogLevel,
  LogTargetType,
  MitigationActionType,
  ModelStatus,
  NamedShadowIndexingMode,
  OTAUpdateStatus,
  PackageVersionStatus,
  Protocol,
  SbomValidationErrorCode,
  SbomValidationResult,
  SbomValidationStatus,
  ServerCertificateStatus,
  ServiceType,
  SortOrder,
  Status,
  TargetFieldOrder,
  TargetSelection,
  TemplateType,
  ThingConnectivityIndexingMode,
  ThingGroupIndexingMode,
  ThingIndexingMode,
  ThingPrincipalType,
  VerificationState,
} from "./enums";
import type {
  AbortConfig,
  Action,
  ActiveViolation,
  AggregationType,
  AlertTarget,
  AuditCheckConfiguration,
  AuditCheckDetails,
  AuditFinding,
  AuditMitigationActionExecutionMetadata,
  AuditMitigationActionsTaskMetadata,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuditSuppression,
  AuditTaskMetadata,
  AuthorizerConfig,
  AuthorizerDescription,
  AuthorizerSummary,
  AwsJobExecutionsRolloutConfig,
  AwsJobPresignedUrlConfig,
  Behavior,
  BillingGroupProperties,
  ClientCertificateConfig,
  CommandParameter,
  CommandParameterValue,
  CommandPayload,
  CommandPreprocessor,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  MaintenanceWindow,
  MetricsExportConfig,
  MetricToRetain,
  MetricValue,
  MitigationActionParams,
  OTAUpdateFile,
  PackageVersionArtifact,
  Policy,
  PresignedUrlConfig,
  ProvisioningHook,
  RelatedResource,
  ResourceIdentifier,
  Sbom,
  SchedulingConfig,
  ServerCertificateConfig,
  StreamFile,
  TaskStatisticsForAuditCheck,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TlsConfig,
  TopicRuleDestination,
} from "./models_0";

/**
 * @public
 */
export interface DeleteTopicRuleDestinationResponse {}

/**
 * @public
 */
export interface DeleteV2LoggingLevelRequest {
  /**
   * The type of resource for which you are configuring logging. Must be `DEFAULT`, `THING_GROUP`, `CLIENT_ID`, `SOURCE_IP`, or `PRINCIPAL_ID`.
   *
   * @public
   */
  targetType: LogTargetType | undefined;

  /**
   * The name of the resource for which you are configuring logging.
   *
   * @public
   */
  targetName: string | undefined;
}

/**
 * The input for the DeprecateThingType operation.
 *
 * @public
 */
export interface DeprecateThingTypeRequest {
  /**
   * The name of the thing type to deprecate.
   *
   * @public
   */
  thingTypeName: string | undefined;

  /**
   * Whether to undeprecate a deprecated thing type. If **true**, the thing type will not be deprecated anymore and you can associate it with things.
   *
   * @public
   */
  undoDeprecate?: boolean | undefined;
}

/**
 * The output for the DeprecateThingType operation.
 *
 * @public
 */
export interface DeprecateThingTypeResponse {}

/**
 * @public
 */
export interface DescribeAccountAuditConfigurationRequest {}

/**
 * @public
 */
export interface DescribeAccountAuditConfigurationResponse {
  /**
   * The ARN of the role that grants permission to IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
   *
   * On the first call to `UpdateAccountAuditConfiguration`, this parameter is required.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Information about the targets to which audit notifications are sent for this account.
   *
   * @public
   */
  auditNotificationTargetConfigurations?: Partial<Record<AuditNotificationType, AuditNotificationTarget>> | undefined;

  /**
   * Which audit checks are enabled and disabled for this account.
   *
   * @public
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration> | undefined;
}

/**
 * @public
 */
export interface DescribeAuditFindingRequest {
  /**
   * A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.
   *
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuditFindingResponse {
  /**
   * The findings (results) of the audit.
   *
   * @public
   */
  finding?: AuditFinding | undefined;
}

/**
 * @public
 */
export interface DescribeAuditMitigationActionsTaskRequest {
  /**
   * The unique identifier for the audit mitigation task.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * Describes which changes should be applied as part of a mitigation action.
 *
 * @public
 */
export interface MitigationAction {
  /**
   * A user-friendly name for the mitigation action.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A unique identifier for the mitigation action.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The IAM role ARN used to apply this mitigation action.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.
   *
   * @public
   */
  actionParams?: MitigationActionParams | undefined;
}

/**
 * @public
 */
export interface DescribeAuditMitigationActionsTaskResponse {
  /**
   * The current status of the task.
   *
   * @public
   */
  taskStatus?: AuditMitigationActionsTaskStatus | undefined;

  /**
   * The date and time when the task was started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time when the task was completed or canceled.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.
   *
   * @public
   */
  taskStatistics?: Record<string, TaskStatisticsForAuditCheck> | undefined;

  /**
   * Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.
   *
   * @public
   */
  target?: AuditMitigationActionsTaskTarget | undefined;

  /**
   * Specifies the mitigation actions that should be applied to specific audit checks.
   *
   * @public
   */
  auditCheckToActionsMapping?: Record<string, string[]> | undefined;

  /**
   * Specifies the mitigation actions and their parameters that are applied as part of this task.
   *
   * @public
   */
  actionsDefinition?: MitigationAction[] | undefined;
}

/**
 * @public
 */
export interface DescribeAuditSuppressionRequest {
  /**
   * An audit check name. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  checkName: string | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface DescribeAuditSuppressionResponse {
  /**
   * An audit check name. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  checkName?: string | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * The epoch timestamp in seconds at which this suppression expires.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * Indicates whether a suppression should exist indefinitely or not.
   *
   * @public
   */
  suppressIndefinitely?: boolean | undefined;

  /**
   * The description of the audit suppression.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuditTaskRequest {
  /**
   * The ID of the audit whose information you want to get.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * Statistics for the checks performed during the audit.
 *
 * @public
 */
export interface TaskStatistics {
  /**
   * The number of checks in this audit.
   *
   * @public
   */
  totalChecks?: number | undefined;

  /**
   * The number of checks in progress.
   *
   * @public
   */
  inProgressChecks?: number | undefined;

  /**
   * The number of checks waiting for data collection.
   *
   * @public
   */
  waitingForDataCollectionChecks?: number | undefined;

  /**
   * The number of checks that found compliant resources.
   *
   * @public
   */
  compliantChecks?: number | undefined;

  /**
   * The number of checks that found noncompliant resources.
   *
   * @public
   */
  nonCompliantChecks?: number | undefined;

  /**
   * The number of checks.
   *
   * @public
   */
  failedChecks?: number | undefined;

  /**
   * The number of checks that did not run because the audit was canceled.
   *
   * @public
   */
  canceledChecks?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAuditTaskResponse {
  /**
   * The status of the audit: one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".
   *
   * @public
   */
  taskStatus?: AuditTaskStatus | undefined;

  /**
   * The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".
   *
   * @public
   */
  taskType?: AuditTaskType | undefined;

  /**
   * The time the audit started.
   *
   * @public
   */
  taskStartTime?: Date | undefined;

  /**
   * Statistical information about the audit.
   *
   * @public
   */
  taskStatistics?: TaskStatistics | undefined;

  /**
   * The name of the scheduled audit (only if the audit was a scheduled audit).
   *
   * @public
   */
  scheduledAuditName?: string | undefined;

  /**
   * Detailed information about each check performed during this audit.
   *
   * @public
   */
  auditDetails?: Record<string, AuditCheckDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeAuthorizerRequest {
  /**
   * The name of the authorizer to describe.
   *
   * @public
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuthorizerResponse {
  /**
   * The authorizer description.
   *
   * @public
   */
  authorizerDescription?: AuthorizerDescription | undefined;
}

/**
 * @public
 */
export interface DescribeBillingGroupRequest {
  /**
   * The name of the billing group.
   *
   * @public
   */
  billingGroupName: string | undefined;
}

/**
 * Additional information about the billing group.
 *
 * @public
 */
export interface BillingGroupMetadata {
  /**
   * The date the billing group was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBillingGroupResponse {
  /**
   * The name of the billing group.
   *
   * @public
   */
  billingGroupName?: string | undefined;

  /**
   * The ID of the billing group.
   *
   * @public
   */
  billingGroupId?: string | undefined;

  /**
   * The ARN of the billing group.
   *
   * @public
   */
  billingGroupArn?: string | undefined;

  /**
   * The version of the billing group.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The properties of the billing group.
   *
   * @public
   */
  billingGroupProperties?: BillingGroupProperties | undefined;

  /**
   * Additional information about the billing group.
   *
   * @public
   */
  billingGroupMetadata?: BillingGroupMetadata | undefined;
}

/**
 * The input for the DescribeCACertificate operation.
 *
 * @public
 */
export interface DescribeCACertificateRequest {
  /**
   * The CA certificate identifier.
   *
   * @public
   */
  certificateId: string | undefined;
}

/**
 * When the certificate is valid.
 *
 * @public
 */
export interface CertificateValidity {
  /**
   * The certificate is not valid before this date.
   *
   * @public
   */
  notBefore?: Date | undefined;

  /**
   * The certificate is not valid after this date.
   *
   * @public
   */
  notAfter?: Date | undefined;
}

/**
 * Describes a CA certificate.
 *
 * @public
 */
export interface CACertificateDescription {
  /**
   * The CA certificate ARN.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The CA certificate ID.
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The status of a CA certificate.
   *
   * @public
   */
  status?: CACertificateStatus | undefined;

  /**
   * The CA certificate data, in PEM format.
   *
   * @public
   */
  certificatePem?: string | undefined;

  /**
   * The owner of the CA certificate.
   *
   * @public
   */
  ownedBy?: string | undefined;

  /**
   * The date the CA certificate was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * Whether the CA certificate configured for auto registration of device certificates. Valid values are "ENABLE" and "DISABLE"
   *
   * @public
   */
  autoRegistrationStatus?: AutoRegistrationStatus | undefined;

  /**
   * The date the CA certificate was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The customer version of the CA certificate.
   *
   * @public
   */
  customerVersion?: number | undefined;

  /**
   * The generation ID of the CA certificate.
   *
   * @public
   */
  generationId?: string | undefined;

  /**
   * When the CA certificate is valid.
   *
   * @public
   */
  validity?: CertificateValidity | undefined;

  /**
   * The mode of the CA.
   *
   * All the device certificates that are registered using this CA will be registered in the same mode as the CA. For more information about certificate mode for device certificates, see [certificate mode](https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode).
   *
   * @public
   */
  certificateMode?: CertificateMode | undefined;
}

/**
 * The registration configuration.
 *
 * @public
 */
export interface RegistrationConfig {
  /**
   * The template body.
   *
   * @public
   */
  templateBody?: string | undefined;

  /**
   * The ARN of the role.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName?: string | undefined;
}

/**
 * The output from the DescribeCACertificate operation.
 *
 * @public
 */
export interface DescribeCACertificateResponse {
  /**
   * The CA certificate description.
   *
   * @public
   */
  certificateDescription?: CACertificateDescription | undefined;

  /**
   * Information about the registration configuration.
   *
   * @public
   */
  registrationConfig?: RegistrationConfig | undefined;
}

/**
 * The input for the DescribeCertificate operation.
 *
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;
}

/**
 * Data used to transfer a certificate to an Amazon Web Services account.
 *
 * @public
 */
export interface TransferData {
  /**
   * The transfer message.
   *
   * @public
   */
  transferMessage?: string | undefined;

  /**
   * The reason why the transfer was rejected.
   *
   * @public
   */
  rejectReason?: string | undefined;

  /**
   * The date the transfer took place.
   *
   * @public
   */
  transferDate?: Date | undefined;

  /**
   * The date the transfer was accepted.
   *
   * @public
   */
  acceptDate?: Date | undefined;

  /**
   * The date the transfer was rejected.
   *
   * @public
   */
  rejectDate?: Date | undefined;
}

/**
 * Describes a certificate.
 *
 * @public
 */
export interface CertificateDescription {
  /**
   * The ARN of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The ID of the certificate.
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The certificate ID of the CA certificate used to sign this certificate.
   *
   * @public
   */
  caCertificateId?: string | undefined;

  /**
   * The status of the certificate.
   *
   * @public
   */
  status?: CertificateStatus | undefined;

  /**
   * The certificate data, in PEM format.
   *
   * @public
   */
  certificatePem?: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the certificate.
   *
   * @public
   */
  ownedBy?: string | undefined;

  /**
   * The ID of the Amazon Web Services account of the previous owner of the certificate.
   *
   * @public
   */
  previousOwnedBy?: string | undefined;

  /**
   * The date and time the certificate was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date and time the certificate was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The customer version of the certificate.
   *
   * @public
   */
  customerVersion?: number | undefined;

  /**
   * The transfer data.
   *
   * @public
   */
  transferData?: TransferData | undefined;

  /**
   * The generation ID of the certificate.
   *
   * @public
   */
  generationId?: string | undefined;

  /**
   * When the certificate is valid.
   *
   * @public
   */
  validity?: CertificateValidity | undefined;

  /**
   * The mode of the certificate.
   *
   * `DEFAULT`: A certificate in `DEFAULT` mode is either generated by Amazon Web Services IoT Core or registered with an issuer certificate authority (CA) in `DEFAULT` mode. Devices with certificates in `DEFAULT` mode aren't required to send the Server Name Indication (SNI) extension when connecting to Amazon Web Services IoT Core. However, to use features such as custom domains and VPC endpoints, we recommend that you use the SNI extension when connecting to Amazon Web Services IoT Core.
   *
   * `SNI_ONLY`: A certificate in `SNI_ONLY` mode is registered without an issuer CA. Devices with certificates in `SNI_ONLY` mode must send the SNI extension when connecting to Amazon Web Services IoT Core.
   *
   * For more information about the value for SNI extension, see [Transport security in IoT](https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html).
   *
   * @public
   */
  certificateMode?: CertificateMode | undefined;
}

/**
 * The output of the DescribeCertificate operation.
 *
 * @public
 */
export interface DescribeCertificateResponse {
  /**
   * The description of the certificate.
   *
   * @public
   */
  certificateDescription?: CertificateDescription | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateProviderRequest {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateProviderResponse {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName?: string | undefined;

  /**
   * The ARN of the certificate provider.
   *
   * @public
   */
  certificateProviderArn?: string | undefined;

  /**
   * The Lambda function ARN that's associated with the certificate provider.
   *
   * @public
   */
  lambdaFunctionArn?: string | undefined;

  /**
   * A list of the operations that the certificate provider will use to generate certificates. Valid value: `CreateCertificateFromCsr`.
   *
   * @public
   */
  accountDefaultForOperations?: CertificateProviderOperation[] | undefined;

  /**
   * The date-time string that indicates when the certificate provider was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date-time string that indicates when the certificate provider was last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeCustomMetricRequest {
  /**
   * The name of the custom metric.
   *
   * @public
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomMetricResponse {
  /**
   * The name of the custom metric.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the custom metric.
   *
   * @public
   */
  metricArn?: string | undefined;

  /**
   * The type of the custom metric.
   *
   * > **Important:** The type `number` only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.
   *
   * @public
   */
  metricType?: CustomMetricType | undefined;

  /**
   * Field represents a friendly name in the console for the custom metric; doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The creation date of the custom metric in milliseconds since epoch.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The time the custom metric was last modified in milliseconds since epoch.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultAuthorizerRequest {}

/**
 * @public
 */
export interface DescribeDefaultAuthorizerResponse {
  /**
   * The default authorizer's description.
   *
   * @public
   */
  authorizerDescription?: AuthorizerDescription | undefined;
}

/**
 * @public
 */
export interface DescribeDetectMitigationActionsTaskRequest {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * The target of a mitigation action task.
 *
 * @public
 */
export interface DetectMitigationActionsTaskTarget {
  /**
   * The unique identifiers of the violations.
   *
   * @public
   */
  violationIds?: string[] | undefined;

  /**
   * The name of the security profile.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The name of the behavior.
   *
   * @public
   */
  behaviorName?: string | undefined;
}

/**
 * The statistics of a mitigation action task.
 *
 * @public
 */
export interface DetectMitigationActionsTaskStatistics {
  /**
   * The actions that were performed.
   *
   * @public
   */
  actionsExecuted?: number | undefined;

  /**
   * The actions that were skipped.
   *
   * @public
   */
  actionsSkipped?: number | undefined;

  /**
   * The actions that failed.
   *
   * @public
   */
  actionsFailed?: number | undefined;
}

/**
 * Specifies the time period of which violation events occurred between.
 *
 * @public
 */
export interface ViolationEventOccurrenceRange {
  /**
   * The start date and time of a time period in which violation events occurred.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end date and time of a time period in which violation events occurred.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * The summary of the mitigation action tasks.
 *
 * @public
 */
export interface DetectMitigationActionsTaskSummary {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The status of the task.
   *
   * @public
   */
  taskStatus?: DetectMitigationActionsTaskStatus | undefined;

  /**
   * The date the task started.
   *
   * @public
   */
  taskStartTime?: Date | undefined;

  /**
   * The date the task ended.
   *
   * @public
   */
  taskEndTime?: Date | undefined;

  /**
   * Specifies the ML Detect findings to which the mitigation actions are applied.
   *
   * @public
   */
  target?: DetectMitigationActionsTaskTarget | undefined;

  /**
   * Specifies the time period of which violation events occurred between.
   *
   * @public
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange | undefined;

  /**
   * Includes only active violations.
   *
   * @public
   */
  onlyActiveViolationsIncluded?: boolean | undefined;

  /**
   * Includes suppressed alerts.
   *
   * @public
   */
  suppressedAlertsIncluded?: boolean | undefined;

  /**
   * The definition of the actions.
   *
   * @public
   */
  actionsDefinition?: MitigationAction[] | undefined;

  /**
   * The statistics of a mitigation action task.
   *
   * @public
   */
  taskStatistics?: DetectMitigationActionsTaskStatistics | undefined;
}

/**
 * @public
 */
export interface DescribeDetectMitigationActionsTaskResponse {
  /**
   * The description of a task.
   *
   * @public
   */
  taskSummary?: DetectMitigationActionsTaskSummary | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionRequest {
  /**
   * The unique identifier for the dimension.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionResponse {
  /**
   * The unique identifier for the dimension.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the dimension.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of the dimension.
   *
   * @public
   */
  type?: DimensionType | undefined;

  /**
   * The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.
   *
   * @public
   */
  stringValues?: string[] | undefined;

  /**
   * The date the dimension was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the dimension was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDomainConfigurationRequest {
  /**
   * The name of the domain configuration.
   *
   * @public
   */
  domainConfigurationName: string | undefined;
}

/**
 * An object that contains information about a server certificate.
 *
 * @public
 */
export interface ServerCertificateSummary {
  /**
   * The ARN of the server certificate.
   *
   * @public
   */
  serverCertificateArn?: string | undefined;

  /**
   * The status of the server certificate.
   *
   * @public
   */
  serverCertificateStatus?: ServerCertificateStatus | undefined;

  /**
   * Details that explain the status of the server certificate.
   *
   * @public
   */
  serverCertificateStatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainConfigurationResponse {
  /**
   * The name of the domain configuration.
   *
   * @public
   */
  domainConfigurationName?: string | undefined;

  /**
   * The ARN of the domain configuration.
   *
   * @public
   */
  domainConfigurationArn?: string | undefined;

  /**
   * The name of the domain.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * A list containing summary information about the server certificate included in the domain configuration.
   *
   * @public
   */
  serverCertificates?: ServerCertificateSummary[] | undefined;

  /**
   * An object that specifies the authorization service for a domain.
   *
   * @public
   */
  authorizerConfig?: AuthorizerConfig | undefined;

  /**
   * A Boolean value that specifies the current state of the domain configuration.
   *
   * @public
   */
  domainConfigurationStatus?: DomainConfigurationStatus | undefined;

  /**
   * The type of service delivered by the endpoint.
   *
   * @public
   */
  serviceType?: ServiceType | undefined;

  /**
   * The type of the domain.
   *
   * @public
   */
  domainType?: DomainType | undefined;

  /**
   * The date and time the domain configuration's status was last changed.
   *
   * @public
   */
  lastStatusChangeDate?: Date | undefined;

  /**
   * An object that specifies the TLS configuration for a domain.
   *
   * @public
   */
  tlsConfig?: TlsConfig | undefined;

  /**
   * The server certificate configuration.
   *
   * @public
   */
  serverCertificateConfig?: ServerCertificateConfig | undefined;

  /**
   * An enumerated string that speciﬁes the authentication type.
   *
   * - `CUSTOM_AUTH_X509` - Use custom authentication and authorization with additional details from the X.509 client certificate.
   *
   * - `CUSTOM_AUTH` - Use custom authentication and authorization. For more information, see [Custom authentication and authorization](https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html).
   *
   * - `AWS_X509` - Use X.509 client certificates without custom authentication and authorization. For more information, see [X.509 client certificates](https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html).
   *
   * - `AWS_SIGV4` - Use Amazon Web Services Signature Version 4. For more information, see [IAM users, groups, and roles](https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html).
   *
   * - `DEFAULT` - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify authentication type. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html).
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * An enumerated string that speciﬁes the application-layer protocol.
   *
   * - `SECURE_MQTT` - MQTT over TLS.
   *
   * - `MQTT_WSS` - MQTT over WebSocket.
   *
   * - `HTTPS` - HTTP over TLS.
   *
   * - `DEFAULT` - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify application_layer protocol. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html).
   *
   * @public
   */
  applicationProtocol?: ApplicationProtocol | undefined;

  /**
   * An object that speciﬁes the client certificate conﬁguration for a domain.
   *
   * @public
   */
  clientCertificateConfig?: ClientCertificateConfig | undefined;
}

/**
 * @public
 */
export interface DescribeEncryptionConfigurationRequest {}

/**
 * The encryption configuration details that include the status information of the Key Management Service (KMS) key and the KMS access role.
 *
 * @public
 */
export interface ConfigurationDetails {
  /**
   * The health status of KMS key and KMS access role. If either KMS key or KMS access role is `UNHEALTHY`, the return value will be `UNHEALTHY`. To use a customer managed KMS key, the value of `configurationStatus` must be `HEALTHY`.
   *
   * @public
   */
  configurationStatus?: ConfigurationStatus | undefined;

  /**
   * The error code that indicates either the KMS key or the KMS access role is `UNHEALTHY`. Valid values: `KMS_KEY_VALIDATION_ERROR` and `ROLE_VALIDATION_ERROR`.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The detailed error message that corresponds to the `errorCode`.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEncryptionConfigurationResponse {
  /**
   * The type of the KMS key.
   *
   * @public
   */
  encryptionType?: EncryptionType | undefined;

  /**
   * The ARN of the customer managed KMS key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role assumed by Amazon Web Services IoT Core to call KMS on behalf of the customer.
   *
   * @public
   */
  kmsAccessRoleArn?: string | undefined;

  /**
   * The encryption configuration details that include the status information of the KMS key and the KMS access role.
   *
   * @public
   */
  configurationDetails?: ConfigurationDetails | undefined;

  /**
   * The date when encryption configuration is last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * The input for the DescribeEndpoint operation.
 *
 * @public
 */
export interface DescribeEndpointRequest {
  /**
   * The endpoint type. Valid endpoint types include:
   *
   * - `iot:Data` - Returns a VeriSign signed data endpoint.
   *
   * - `iot:Data-ATS` - Returns an ATS signed data endpoint.
   *
   * - `iot:CredentialProvider` - Returns an IoT credentials provider API endpoint.
   *
   * - `iot:Jobs` - Returns an IoT device management Jobs API endpoint.
   *
   * We strongly recommend that customers use the newer `iot:Data-ATS` endpoint type to avoid issues related to the widespread distrust of Symantec certificate authorities. ATS Signed Certificates are more secure and are trusted by most popular browsers.
   *
   * @public
   */
  endpointType?: string | undefined;
}

/**
 * The output from the DescribeEndpoint operation.
 *
 * @public
 */
export interface DescribeEndpointResponse {
  /**
   * The endpoint. The format of the endpoint is as follows: *identifier*.iot.*region*.amazonaws.com.
   *
   * @public
   */
  endpointAddress?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventConfigurationsRequest {}

/**
 * Configuration.
 *
 * @public
 */
export interface Configuration {
  /**
   * True to enable the configuration.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeEventConfigurationsResponse {
  /**
   * The event configurations.
   *
   * @public
   */
  eventConfigurations?: Partial<Record<EventType, Configuration>> | undefined;

  /**
   * The creation date of the event configuration.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the event configurations were last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFleetMetricRequest {
  /**
   * The name of the fleet metric to describe.
   *
   * @public
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetMetricResponse {
  /**
   * The name of the fleet metric to describe.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * The search query string.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The type of the aggregation query.
   *
   * @public
   */
  aggregationType?: AggregationType | undefined;

  /**
   * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
   *
   * @public
   */
  period?: number | undefined;

  /**
   * The field to aggregate.
   *
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * The fleet metric description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The query version.
   *
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * The name of the index to search.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The date when the fleet metric is created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date when the fleet metric is last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * Used to support unit transformation such as milliseconds to seconds. The unit must be supported by [CW metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html).
   *
   * @public
   */
  unit?: FleetMetricUnit | undefined;

  /**
   * The version of the fleet metric.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The ARN of the fleet metric to describe.
   *
   * @public
   */
  metricArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIndexRequest {
  /**
   * The index name.
   *
   * @public
   */
  indexName: string | undefined;
}

/**
 * @public
 */
export interface DescribeIndexResponse {
  /**
   * The index name.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The index status.
   *
   * @public
   */
  indexStatus?: IndexStatus | undefined;

  /**
   * Contains a value that specifies the type of indexing performed. Valid values are:
   *
   * - REGISTRY – Your thing index contains only registry data.
   * - REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data.
   * - REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and thing connectivity status data.
   * - REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry data, shadow data, and thing connectivity status data.
   * - MULTI_INDEXING_MODE - Your thing index contains multiple data sources. For more information, see [GetIndexingConfiguration](https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html).
   *
   * @public
   */
  schema?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * Provides a view of the job document before and after the substitution parameters have been resolved with their exact values.
   *
   * @public
   */
  beforeSubstitution?: boolean | undefined;
}

/**
 * The job process details.
 *
 * @public
 */
export interface JobProcessDetails {
  /**
   * The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.
   *
   * @public
   */
  processingTargets?: string[] | undefined;

  /**
   * The number of things that cancelled the job.
   *
   * @public
   */
  numberOfCanceledThings?: number | undefined;

  /**
   * The number of things which successfully completed the job.
   *
   * @public
   */
  numberOfSucceededThings?: number | undefined;

  /**
   * The number of things that failed executing the job.
   *
   * @public
   */
  numberOfFailedThings?: number | undefined;

  /**
   * The number of things that rejected the job.
   *
   * @public
   */
  numberOfRejectedThings?: number | undefined;

  /**
   * The number of things that are awaiting execution of the job.
   *
   * @public
   */
  numberOfQueuedThings?: number | undefined;

  /**
   * The number of things currently executing the job.
   *
   * @public
   */
  numberOfInProgressThings?: number | undefined;

  /**
   * The number of things that are no longer scheduled to execute the job because they have been deleted or have been removed from the group that was a target of the job.
   *
   * @public
   */
  numberOfRemovedThings?: number | undefined;

  /**
   * The number of things whose job execution status is `TIMED_OUT`.
   *
   * @public
   */
  numberOfTimedOutThings?: number | undefined;
}

/**
 * Displays the next seven maintenance window occurrences and their start times.
 *
 * @public
 */
export interface ScheduledJobRollout {
  /**
   * Displays the start times of the next seven maintenance window occurrences.
   *
   * @public
   */
  startTime?: string | undefined;
}

/**
 * The `Job` object contains details about a job.
 *
 * @public
 */
export interface Job {
  /**
   * An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a device when the thing representing the device is added to a target group, even after the job was completed by all things originally in the group.
   *
   * > **Note:** We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.
   *
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * The status of the job, one of `IN_PROGRESS`, `CANCELED`, `DELETION_IN_PROGRESS` or `COMPLETED`.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * Will be `true` if the job was canceled with the optional `force` parameter set to `true`.
   *
   * @public
   */
  forceCanceled?: boolean | undefined;

  /**
   * If the job was updated, provides the reason code for the update.
   *
   * @public
   */
  reasonCode?: string | undefined;

  /**
   * If the job was updated, describes the reason for the update.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * A list of IoT things and thing groups to which the job should be sent.
   *
   * @public
   */
  targets?: string[] | undefined;

  /**
   * A short text description of the job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration for pre-signed S3 URLs.
   *
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig | undefined;

  /**
   * Allows you to create a staged rollout of a job.
   *
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined;

  /**
   * Configuration for criteria to abort the job.
   *
   * @public
   */
  abortConfig?: AbortConfig | undefined;

  /**
   * The time, in seconds since the epoch, when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job was completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * Details about the job process.
   *
   * @public
   */
  jobProcessDetails?: JobProcessDetails | undefined;

  /**
   * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
   *
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The ARN of the job template used to create the job.
   *
   * @public
   */
  jobTemplateArn?: string | undefined;

  /**
   * The configuration for the criteria to retry the job.
   *
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig | undefined;

  /**
   * A key-value map that pairs the patterns that need to be replaced in a managed template job document schema. You can use the description of each key as a guidance to specify the inputs during runtime when creating a job.
   *
   * > **Note:** `documentParameters` can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.
   *
   * @public
   */
  documentParameters?: Record<string, string> | undefined;

  /**
   * Indicates whether a job is concurrent. Will be true when a job is rolling out new job executions or canceling previously created executions, otherwise false.
   *
   * @public
   */
  isConcurrent?: boolean | undefined;

  /**
   * The configuration that allows you to schedule a job for a future date and time in addition to specifying the end behavior for each job execution.
   *
   * @public
   */
  schedulingConfig?: SchedulingConfig | undefined;

  /**
   * Displays the next seven maintenance window occurrences and their start times.
   *
   * @public
   */
  scheduledJobRollouts?: ScheduledJobRollout[] | undefined;

  /**
   * The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. The package version must be in either the Published or Deprecated state when the job deploys. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).The package version must be in either the Published or Deprecated state when the job deploys. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * **Note:**The following Length Constraints relates to a single ARN. Up to 25 package version ARNs are allowed.
   *
   * @public
   */
  destinationPackageVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeJobResponse {
  /**
   * An S3 link to the job document.
   *
   * @public
   */
  documentSource?: string | undefined;

  /**
   * Information about the job.
   *
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionRequest {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the thing on which the job execution is running.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.
   *
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * Details of the job execution status.
 *
 * @public
 */
export interface JobExecutionStatusDetails {
  /**
   * The job execution status.
   *
   * @public
   */
  detailsMap?: Record<string, string> | undefined;
}

/**
 * The job execution object represents the execution of a job on a particular device.
 *
 * @public
 */
export interface JobExecution {
  /**
   * The unique identifier you assigned to the job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT, CANCELED, or REJECTED).
   *
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * Will be `true` if the job execution was canceled with the optional `force` parameter set to `true`.
   *
   * @public
   */
  forceCanceled?: boolean | undefined;

  /**
   * A collection of name/value pairs that describe the status of the job execution.
   *
   * @public
   */
  statusDetails?: JobExecutionStatusDetails | undefined;

  /**
   * The ARN of the thing on which the job execution is running.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was queued.
   *
   * @public
   */
  queuedAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * A string (consisting of the digits "0" through "9") which identifies this particular job execution on this particular device. It can be used in commands which return or update job execution information.
   *
   * @public
   */
  executionNumber?: number | undefined;

  /**
   * The version of the job execution. Job execution versions are incremented each time they are updated by a device.
   *
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * The estimated number of seconds that remain before the job execution status will be changed to `TIMED_OUT`. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The actual job execution timeout can occur up to 60 seconds later than the estimated duration. This value will not be included if the job execution has reached a terminal status.
   *
   * @public
   */
  approximateSecondsBeforeTimedOut?: number | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionResponse {
  /**
   * Information about the job execution.
   *
   * @public
   */
  execution?: JobExecution | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateRequest {
  /**
   * The unique identifier of the job template.
   *
   * @public
   */
  jobTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateResponse {
  /**
   * The ARN of the job template.
   *
   * @public
   */
  jobTemplateArn?: string | undefined;

  /**
   * The unique identifier of the job template.
   *
   * @public
   */
  jobTemplateId?: string | undefined;

  /**
   * A description of the job template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An S3 link to the job document.
   *
   * @public
   */
  documentSource?: string | undefined;

  /**
   * The job document.
   *
   * @public
   */
  document?: string | undefined;

  /**
   * The time, in seconds since the epoch, when the job template was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Configuration for pre-signed S3 URLs.
   *
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig | undefined;

  /**
   * Allows you to create a staged rollout of a job.
   *
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined;

  /**
   * The criteria that determine when and how a job abort takes place.
   *
   * @public
   */
  abortConfig?: AbortConfig | undefined;

  /**
   * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
   *
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * The configuration that determines how many retries are allowed for each failure type for a job.
   *
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig | undefined;

  /**
   * Allows you to configure an optional maintenance window for the rollout of a job document to all devices in the target group for a job.
   *
   * @public
   */
  maintenanceWindows?: MaintenanceWindow[] | undefined;

  /**
   * The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. The package version must be in either the Published or Deprecated state when the job deploys. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * **Note:**The following Length Constraints relates to a single ARN. Up to 25 package version ARNs are allowed.
   *
   * @public
   */
  destinationPackageVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeManagedJobTemplateRequest {
  /**
   * The unique name of a managed job template, which is required.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * An optional parameter to specify version of a managed template. If not specified, the pre-defined default version is returned.
   *
   * @public
   */
  templateVersion?: string | undefined;
}

/**
 * A map of key-value pairs containing the patterns that need to be replaced in a managed template job document schema. You can use the description of each key as a guidance to specify the inputs during runtime when creating a job.
 *
 * > **Note:** `documentParameters` can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.
 *
 * @public
 */
export interface DocumentParameter {
  /**
   * Key of the map field containing the patterns that need to be replaced in a managed template job document schema.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * Description of the map field containing the patterns that need to be replaced in a managed template job document schema.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A regular expression of the patterns that need to be replaced in a managed template job document schema.
   *
   * @public
   */
  regex?: string | undefined;

  /**
   * An example illustrating a pattern that need to be replaced in a managed template job document schema.
   *
   * @public
   */
  example?: string | undefined;

  /**
   * Specifies whether a pattern that needs to be replaced in a managed template job document schema is optional or required.
   *
   * @public
   */
  optional?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeManagedJobTemplateResponse {
  /**
   * The unique name of a managed template, such as `AWS-Reboot`.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * The unique Amazon Resource Name (ARN) of the managed template.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The unique description of a managed template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version for a managed template.
   *
   * @public
   */
  templateVersion?: string | undefined;

  /**
   * A list of environments that are supported with the managed job template.
   *
   * @public
   */
  environments?: string[] | undefined;

  /**
   * A map of key-value pairs that you can use as guidance to specify the inputs for creating a job from a managed template.
   *
   * > **Note:** `documentParameters` can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.
   *
   * @public
   */
  documentParameters?: DocumentParameter[] | undefined;

  /**
   * The document schema for a managed job template.
   *
   * @public
   */
  document?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMitigationActionRequest {
  /**
   * The friendly name that uniquely identifies the mitigation action.
   *
   * @public
   */
  actionName: string | undefined;
}

/**
 * @public
 */
export interface DescribeMitigationActionResponse {
  /**
   * The friendly name that uniquely identifies the mitigation action.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * The type of mitigation action.
   *
   * @public
   */
  actionType?: MitigationActionType | undefined;

  /**
   * The ARN that identifies this migration action.
   *
   * @public
   */
  actionArn?: string | undefined;

  /**
   * A unique identifier for this action.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * The ARN of the IAM role used to apply this action.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Parameters that control how the mitigation action is applied, specific to the type of mitigation action.
   *
   * @public
   */
  actionParams?: MitigationActionParams | undefined;

  /**
   * The date and time when the mitigation action was added to your Amazon Web Services accounts.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date and time when the mitigation action was last changed.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateRequest {
  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateResponse {
  /**
   * The ARN of the provisioning template.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * The description of the provisioning template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date when the provisioning template was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date when the provisioning template was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The default fleet template version ID.
   *
   * @public
   */
  defaultVersionId?: number | undefined;

  /**
   * The JSON formatted contents of the provisioning template.
   *
   * @public
   */
  templateBody?: string | undefined;

  /**
   * True if the provisioning template is enabled, otherwise false.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.
   *
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * Gets information about a pre-provisioned hook.
   *
   * @public
   */
  preProvisioningHook?: ProvisioningHook | undefined;

  /**
   * The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is `FLEET_PROVISIONING`. For more information about provisioning template, see: [Provisioning template](https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html).
   *
   * @public
   */
  type?: TemplateType | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateVersionRequest {
  /**
   * The template name.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The provisioning template version ID.
   *
   * @public
   */
  versionId: number | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateVersionResponse {
  /**
   * The provisioning template version ID.
   *
   * @public
   */
  versionId?: number | undefined;

  /**
   * The date when the provisioning template version was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The JSON formatted contents of the provisioning template version.
   *
   * @public
   */
  templateBody?: string | undefined;

  /**
   * True if the provisioning template version is the default version.
   *
   * @public
   */
  isDefaultVersion?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRoleAliasRequest {
  /**
   * The role alias to describe.
   *
   * @public
   */
  roleAlias: string | undefined;
}

/**
 * Role alias description.
 *
 * @public
 */
export interface RoleAliasDescription {
  /**
   * The role alias.
   *
   * @public
   */
  roleAlias?: string | undefined;

  /**
   * The ARN of the role alias.
   *
   * @public
   */
  roleAliasArn?: string | undefined;

  /**
   * The role ARN.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The role alias owner.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The number of seconds for which the credential is valid.
   *
   * @public
   */
  credentialDurationSeconds?: number | undefined;

  /**
   * The UNIX timestamp of when the role alias was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The UNIX timestamp of when the role alias was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRoleAliasResponse {
  /**
   * The role alias description.
   *
   * @public
   */
  roleAliasDescription?: RoleAliasDescription | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledAuditRequest {
  /**
   * The name of the scheduled audit whose information you want to get.
   *
   * @public
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledAuditResponse {
  /**
   * How often the scheduled audit takes place, either one of `DAILY`, `WEEKLY`, `BIWEEKLY`, or `MONTHLY`. The start time of each audit is determined by the system.
   *
   * @public
   */
  frequency?: AuditFrequency | undefined;

  /**
   * The day of the month on which the scheduled audit takes place. This is will be `1` through `31` or `LAST`. If days `29`-`31` are specified, and the month does not have that many days, the audit takes place on the `LAST` day of the month.
   *
   * @public
   */
  dayOfMonth?: string | undefined;

  /**
   * The day of the week on which the scheduled audit takes place, either one of `SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, or `SAT`.
   *
   * @public
   */
  dayOfWeek?: DayOfWeek | undefined;

  /**
   * Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  targetCheckNames?: string[] | undefined;

  /**
   * The name of the scheduled audit.
   *
   * @public
   */
  scheduledAuditName?: string | undefined;

  /**
   * The ARN of the scheduled audit.
   *
   * @public
   */
  scheduledAuditArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
  /**
   * The name of the security profile whose information you want to get.
   *
   * @public
   */
  securityProfileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileResponse {
  /**
   * The name of the security profile.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The ARN of the security profile.
   *
   * @public
   */
  securityProfileArn?: string | undefined;

  /**
   * A description of the security profile (associated with the security profile when it was created or updated).
   *
   * @public
   */
  securityProfileDescription?: string | undefined;

  /**
   * Specifies the behaviors that, when violated by a device (thing), cause an alert.
   *
   * @public
   */
  behaviors?: Behavior[] | undefined;

  /**
   * Where the alerts are sent. (Alerts are always sent to the console.)
   *
   * @public
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>> | undefined;

  /**
   * *Please use DescribeSecurityProfileResponse$additionalMetricsToRetainV2 instead.*
   *
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's `behaviors`, but it is also retained for any metric specified here.
   *
   * @deprecated Use additionalMetricsToRetainV2.
   * @public
   */
  additionalMetricsToRetain?: string[] | undefined;

  /**
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.
   *
   * @public
   */
  additionalMetricsToRetainV2?: MetricToRetain[] | undefined;

  /**
   * The version of the security profile. A new version is generated whenever the security profile is updated.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The time the security profile was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The time the security profile was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * Specifies the MQTT topic and role ARN required for metric export.
   *
   * @public
   */
  metricsExportConfig?: MetricsExportConfig | undefined;
}

/**
 * @public
 */
export interface DescribeStreamRequest {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId: string | undefined;
}

/**
 * Information about a stream.
 *
 * @public
 */
export interface StreamInfo {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * The stream ARN.
   *
   * @public
   */
  streamArn?: string | undefined;

  /**
   * The stream version.
   *
   * @public
   */
  streamVersion?: number | undefined;

  /**
   * The description of the stream.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The files to stream.
   *
   * @public
   */
  files?: StreamFile[] | undefined;

  /**
   * The date when the stream was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date when the stream was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * An IAM role IoT assumes to access your S3 files.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamResponse {
  /**
   * Information about the stream.
   *
   * @public
   */
  streamInfo?: StreamInfo | undefined;
}

/**
 * The input for the DescribeThing operation.
 *
 * @public
 */
export interface DescribeThingRequest {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;
}

/**
 * The output from the DescribeThing operation.
 *
 * @public
 */
export interface DescribeThingResponse {
  /**
   * The default MQTT client ID. For a typical device, the thing name is also used as the default MQTT client ID. Although we don’t require a mapping between a thing's registry name and its use of MQTT client IDs, certificates, or shadow state, we recommend that you choose a thing name and use it as the MQTT client ID for the registry and the Device Shadow service.
   *
   * This lets you better organize your IoT fleet without removing the flexibility of the underlying device certificate model or shadows.
   *
   * @public
   */
  defaultClientId?: string | undefined;

  /**
   * The name of the thing.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The ID of the thing to describe.
   *
   * @public
   */
  thingId?: string | undefined;

  /**
   * The ARN of the thing to describe.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * The thing type name.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * The thing attributes.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The current version of the thing record in the registry.
   *
   * > **Note:** To avoid unintentional changes to the information in the registry, you can pass the version information in the `expectedVersion` parameter of the `UpdateThing` and `DeleteThing` calls.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The name of the billing group the thing belongs to.
   *
   * @public
   */
  billingGroupName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeThingGroupRequest {
  /**
   * The name of the thing group.
   *
   * @public
   */
  thingGroupName: string | undefined;
}

/**
 * The name and ARN of a group.
 *
 * @public
 */
export interface GroupNameAndArn {
  /**
   * The group name.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The group ARN.
   *
   * @public
   */
  groupArn?: string | undefined;
}

/**
 * Thing group metadata.
 *
 * @public
 */
export interface ThingGroupMetadata {
  /**
   * The parent thing group name.
   *
   * @public
   */
  parentGroupName?: string | undefined;

  /**
   * The root parent thing group.
   *
   * @public
   */
  rootToParentThingGroups?: GroupNameAndArn[] | undefined;

  /**
   * The UNIX timestamp of when the thing group was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeThingGroupResponse {
  /**
   * The name of the thing group.
   *
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * The thing group ID.
   *
   * @public
   */
  thingGroupId?: string | undefined;

  /**
   * The thing group ARN.
   *
   * @public
   */
  thingGroupArn?: string | undefined;

  /**
   * The version of the thing group.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The thing group properties.
   *
   * @public
   */
  thingGroupProperties?: ThingGroupProperties | undefined;

  /**
   * Thing group metadata.
   *
   * @public
   */
  thingGroupMetadata?: ThingGroupMetadata | undefined;

  /**
   * The dynamic thing group index name.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The dynamic thing group search query string.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The dynamic thing group query version.
   *
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * The dynamic thing group status.
   *
   * @public
   */
  status?: DynamicGroupStatus | undefined;
}

/**
 * @public
 */
export interface DescribeThingRegistrationTaskRequest {
  /**
   * The task ID.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface DescribeThingRegistrationTaskResponse {
  /**
   * The task ID.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The task creation date.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date when the task was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The task's template.
   *
   * @public
   */
  templateBody?: string | undefined;

  /**
   * The S3 bucket that contains the input file.
   *
   * @public
   */
  inputFileBucket?: string | undefined;

  /**
   * The input file key.
   *
   * @public
   */
  inputFileKey?: string | undefined;

  /**
   * The role ARN that grants access to the input file bucket.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The status of the bulk thing provisioning task.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The message.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The number of things successfully provisioned.
   *
   * @public
   */
  successCount?: number | undefined;

  /**
   * The number of things that failed to be provisioned.
   *
   * @public
   */
  failureCount?: number | undefined;

  /**
   * The progress of the bulk provisioning task expressed as a percentage.
   *
   * @public
   */
  percentageProgress?: number | undefined;
}

/**
 * The input for the DescribeThingType operation.
 *
 * @public
 */
export interface DescribeThingTypeRequest {
  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName: string | undefined;
}

/**
 * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.
 *
 * @public
 */
export interface ThingTypeMetadata {
  /**
   * Whether the thing type is deprecated. If **true**, no new things could be associated with this type.
   *
   * @public
   */
  deprecated?: boolean | undefined;

  /**
   * The date and time when the thing type was deprecated.
   *
   * @public
   */
  deprecationDate?: Date | undefined;

  /**
   * The date and time when the thing type was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * The output for the DescribeThingType operation.
 *
 * @public
 */
export interface DescribeThingTypeResponse {
  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * The thing type ID.
   *
   * @public
   */
  thingTypeId?: string | undefined;

  /**
   * The thing type ARN.
   *
   * @public
   */
  thingTypeArn?: string | undefined;

  /**
   * The ThingTypeProperties contains information about the thing type including description, a list of searchable thing attribute names, and MQTT5 configuration.
   *
   * @public
   */
  thingTypeProperties?: ThingTypeProperties | undefined;

  /**
   * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.
   *
   * @public
   */
  thingTypeMetadata?: ThingTypeMetadata | undefined;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * The policy to detach.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The target from which the policy will be detached.
   *
   * @public
   */
  target: string | undefined;
}

/**
 * The input for the DetachPrincipalPolicy operation.
 *
 * @public
 */
export interface DetachPrincipalPolicyRequest {
  /**
   * The name of the policy to detach.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The principal.
   *
   * Valid principals are CertificateArn (arn:aws:iot:*region*:*accountId*:cert/*certificateId*), thingGroupArn (arn:aws:iot:*region*:*accountId*:thinggroup/*groupName*) and CognitoId (*region*:*id*).
   *
   * @public
   */
  principal: string | undefined;
}

/**
 * @public
 */
export interface DetachSecurityProfileRequest {
  /**
   * The security profile that is detached.
   *
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * The ARN of the thing group from which the security profile is detached.
   *
   * @public
   */
  securityProfileTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DetachSecurityProfileResponse {}

/**
 * The input for the DetachThingPrincipal operation.
 *
 * @public
 */
export interface DetachThingPrincipalRequest {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * If the principal is a certificate, this value must be ARN of the certificate. If the principal is an Amazon Cognito identity, this value must be the ID of the Amazon Cognito identity.
   *
   * @public
   */
  principal: string | undefined;
}

/**
 * The output from the DetachThingPrincipal operation.
 *
 * @public
 */
export interface DetachThingPrincipalResponse {}

/**
 * The input for the DisableTopicRuleRequest operation.
 *
 * @public
 */
export interface DisableTopicRuleRequest {
  /**
   * The name of the rule to disable.
   *
   * @public
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSbomFromPackageVersionRequest {
  /**
   * The name of the new software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The name of the new package version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSbomFromPackageVersionResponse {}

/**
 * The input for the EnableTopicRuleRequest operation.
 *
 * @public
 */
export interface EnableTopicRuleRequest {
  /**
   * The name of the topic rule to enable.
   *
   * @public
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface GetBehaviorModelTrainingSummariesRequest {
  /**
   * The name of the security profile.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summary of an ML Detect behavior model.
 *
 * @public
 */
export interface BehaviorModelTrainingSummary {
  /**
   * The name of the security profile.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The name of the behavior.
   *
   * @public
   */
  behaviorName?: string | undefined;

  /**
   * The date a training model started collecting data.
   *
   * @public
   */
  trainingDataCollectionStartDate?: Date | undefined;

  /**
   * The status of the behavior model.
   *
   * @public
   */
  modelStatus?: ModelStatus | undefined;

  /**
   * The percentage of datapoints collected.
   *
   * @public
   */
  datapointsCollectionPercentage?: number | undefined;

  /**
   * The date the model was last refreshed.
   *
   * @public
   */
  lastModelRefreshDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetBehaviorModelTrainingSummariesResponse {
  /**
   * A list of all ML Detect behaviors and their model status for a given Security Profile.
   *
   * @public
   */
  summaries?: BehaviorModelTrainingSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.
 *
 * @public
 */
export interface TermsAggregation {
  /**
   * The number of buckets to return in the response. Default to 10.
   *
   * @public
   */
  maxBuckets?: number | undefined;
}

/**
 * The type of bucketed aggregation performed.
 *
 * @public
 */
export interface BucketsAggregationType {
  /**
   * Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.
   *
   * @public
   */
  termsAggregation?: TermsAggregation | undefined;
}

/**
 * @public
 */
export interface GetBucketsAggregationRequest {
  /**
   * The name of the index to search.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The search query string.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The aggregation field.
   *
   * @public
   */
  aggregationField: string | undefined;

  /**
   * The version of the query.
   *
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * The basic control of the response shape and the bucket aggregation type to perform.
   *
   * @public
   */
  bucketsAggregationType: BucketsAggregationType | undefined;
}

/**
 * A count of documents that meets a specific aggregation criteria.
 *
 * @public
 */
export interface Bucket {
  /**
   * The value counted for the particular bucket.
   *
   * @public
   */
  keyValue?: string | undefined;

  /**
   * The number of documents that have the value counted for the particular bucket.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * @public
 */
export interface GetBucketsAggregationResponse {
  /**
   * The total number of things that fit the query string criteria.
   *
   * @public
   */
  totalCount?: number | undefined;

  /**
   * The main part of the response with a list of buckets. Each bucket contains a `keyValue` and a `count`.
   *
   * `keyValue`: The aggregation field value counted for the particular bucket.
   *
   * `count`: The number of documents that have that value.
   *
   * @public
   */
  buckets?: Bucket[] | undefined;
}

/**
 * @public
 */
export interface GetCardinalityRequest {
  /**
   * The name of the index to search.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The search query string.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The field to aggregate.
   *
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * The query version.
   *
   * @public
   */
  queryVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetCardinalityResponse {
  /**
   * The approximate count of unique values that match the query.
   *
   * @public
   */
  cardinality?: number | undefined;
}

/**
 * @public
 */
export interface GetCommandRequest {
  /**
   * The unique identifier of the command for which you want to retrieve information.
   *
   * @public
   */
  commandId: string | undefined;
}

/**
 * @public
 */
export interface GetCommandResponse {
  /**
   * The unique identifier of the command.
   *
   * @public
   */
  commandId?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the command. For example, `arn:aws:iot:<region>:<accountid>:command/<commandId>`
   *
   * @public
   */
  commandArn?: string | undefined;

  /**
   * The namespace of the command.
   *
   * @public
   */
  namespace?: CommandNamespace | undefined;

  /**
   * The user-friendly name in the console for the command.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A short text description of the command.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of parameters for the command created.
   *
   * @public
   */
  mandatoryParameters?: CommandParameter[] | undefined;

  /**
   * The payload object that you provided for the command.
   *
   * @public
   */
  payload?: CommandPayload | undefined;

  /**
   * The payload template for the dynamic command.
   *
   * @public
   */
  payloadTemplate?: string | undefined;

  /**
   * Configuration that determines how `payloadTemplate` is processed to generate command execution payload.
   *
   * @public
   */
  preprocessor?: CommandPreprocessor | undefined;

  /**
   * The IAM role that you provided when creating the command with `AWS-IoT-FleetWise` as the namespace.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The timestamp, when the command was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp, when the command was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * Indicates whether the command has been deprecated.
   *
   * @public
   */
  deprecated?: boolean | undefined;

  /**
   * Indicates whether the command is being deleted.
   *
   * @public
   */
  pendingDeletion?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCommandExecutionRequest {
  /**
   * The unique identifier for the command execution. This information is returned as a response of the `StartCommandExecution` API request.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the device on which the command execution is being performed.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * Can be used to specify whether to include the result of the command execution in the `GetCommandExecution` API response. Your device can use this field to provide additional information about the command execution. You only need to specify this field when using the `AWS-IoT` namespace.
   *
   * @public
   */
  includeResult?: boolean | undefined;
}

/**
 * The result value of the command execution. The device can use the result field to share additional details about the execution such as a return value of a remote function call.
 *
 * > **Note:** This field is not applicable if you use the `AWS-IoT-FleetWise` namespace.
 *
 * @public
 */
export interface CommandExecutionResult {
  /**
   * An attribute of type String. For example:
   *
   * `"S": "Hello"`
   *
   * @public
   */
  S?: string | undefined;

  /**
   * An attribute of type Boolean. For example:
   *
   * `"BOOL": true`
   *
   * @public
   */
  B?: boolean | undefined;

  /**
   * An attribute of type Binary.
   *
   * @public
   */
  BIN?: Uint8Array | undefined;
}

/**
 * Provide additional context about the status of a command execution using a reason code and description.
 *
 * @public
 */
export interface StatusReason {
  /**
   * A code that provides additional context for the command execution status.
   *
   * @public
   */
  reasonCode: string | undefined;

  /**
   * A literal string for devices to optionally provide additional information about the reason code for a command execution status.
   *
   * @public
   */
  reasonDescription?: string | undefined;
}

/**
 * @public
 */
export interface GetCommandExecutionResponse {
  /**
   * The unique identifier of the command execution.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the command. For example, arn:aws:iot:<region>:<accountid>:command/<commandId>
   *
   * @public
   */
  commandArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the device on which the command execution is being performed.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The status of the command execution. After your devices receive the command and start performing the operations specified in the command, it can use the `UpdateCommandExecution` MQTT API to update the status information.
   *
   * @public
   */
  status?: CommandExecutionStatus | undefined;

  /**
   * Your devices can use this parameter to provide additional context about the status of a command execution using a reason code and description.
   *
   * @public
   */
  statusReason?: StatusReason | undefined;

  /**
   * The result value for the current state of the command execution. The status provides information about the progress of the command execution. The device can use the result field to share additional details about the execution such as a return value of a remote function call.
   *
   * > **Note:** If you use the `AWS-IoT-FleetWise` namespace, then this field is not applicable in the API response.
   *
   * @public
   */
  result?: Record<string, CommandExecutionResult> | undefined;

  /**
   * The list of parameters that the `StartCommandExecution` API used when performing the command on the device.
   *
   * @public
   */
  parameters?: Record<string, CommandParameterValue> | undefined;

  /**
   * Specifies the amount of time in seconds that the device can take to finish a command execution. A timer starts when the command execution is created. If the command execution status is not set to another terminal state before the timer expires, it will automatically update to `TIMED_OUT`.
   *
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * The timestamp, when the command execution was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp, when the command execution was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The timestamp, when the command execution was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp, when the command execution was completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The time to live (TTL) parameter that indicates the duration for which executions will be retained in your account. The default value is six months.
   *
   * @public
   */
  timeToLive?: Date | undefined;
}

/**
 * @public
 */
export interface GetEffectivePoliciesRequest {
  /**
   * The principal. Valid principals are CertificateArn (arn:aws:iot:*region*:*accountId*:cert/*certificateId*), thingGroupArn (arn:aws:iot:*region*:*accountId*:thinggroup/*groupName*) and CognitoId (*region*:*id*).
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * The Cognito identity pool ID.
   *
   * @public
   */
  cognitoIdentityPoolId?: string | undefined;

  /**
   * The thing name.
   *
   * @public
   */
  thingName?: string | undefined;
}

/**
 * The policy that has the effect on the authorization results.
 *
 * @public
 */
export interface EffectivePolicy {
  /**
   * The policy name.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The policy ARN.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The IAM policy document.
   *
   * @public
   */
  policyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetEffectivePoliciesResponse {
  /**
   * The effective policies.
   *
   * @public
   */
  effectivePolicies?: EffectivePolicy[] | undefined;
}

/**
 * @public
 */
export interface GetIndexingConfigurationRequest {}

/**
 * Describes the name and data type at a field.
 *
 * @public
 */
export interface Field {
  /**
   * The name of the field.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The data type of the field.
   *
   * @public
   */
  type?: FieldType | undefined;
}

/**
 * Thing group indexing configuration.
 *
 * @public
 */
export interface ThingGroupIndexingConfiguration {
  /**
   * Thing group indexing mode.
   *
   * @public
   */
  thingGroupIndexingMode: ThingGroupIndexingMode | undefined;

  /**
   * Contains fields that are indexed and whose types are already known by the Fleet Indexing service. This is an optional field. For more information, see [Managed fields](https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html#managed-field) in the *Amazon Web Services IoT Core Developer Guide*.
   *
   * > **Note:** You can't modify managed fields by updating fleet indexing configuration.
   *
   * @public
   */
  managedFields?: Field[] | undefined;

  /**
   * A list of thing group fields to index. This list cannot contain any managed fields. Use the GetIndexingConfiguration API to get a list of managed fields.
   *
   * Contains custom field names and their data type.
   *
   * @public
   */
  customFields?: Field[] | undefined;
}

/**
 * Provides connectivity filter selections for the fleet indexing configuration.
 *
 * @public
 */
export interface ConnectivityFilter {
  /**
   * A list of fleet indexing APIs for which to enable socket information retrieval. Currently, the only supported value is `GET_THING_CONNECTIVITY_DATA`.
   *
   * @public
   */
  includeSocketInformation?: FleetIndexingApi[] | undefined;
}

/**
 * A geolocation target that you select to index. Each geolocation target contains a `name` and `order` key-value pair that specifies the geolocation target fields.
 *
 * @public
 */
export interface GeoLocationTarget {
  /**
   * The `name` of the geolocation target field. If the target field is part of a named shadow, you must select the named shadow using the `namedShadow` filter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The `order` of the geolocation target field. This field is optional. The default value is `LatLon`.
   *
   * @public
   */
  order?: TargetFieldOrder | undefined;
}

/**
 * Provides additional selections for named shadows and geolocation data.
 *
 * To add named shadows to your fleet indexing configuration, set `namedShadowIndexingMode` to be ON and specify your shadow names in `namedShadowNames` filter.
 *
 * To add geolocation data to your fleet indexing configuration:
 *
 * - If you store geolocation data in a class/unnamed shadow, set `thingIndexingMode` to be `REGISTRY_AND_SHADOW` and specify your geolocation data in `geoLocations` filter.
 * - If you store geolocation data in a named shadow, set `namedShadowIndexingMode` to be `ON`, add the shadow name in `namedShadowNames` filter, and specify your geolocation data in `geoLocations` filter. For more information, see [Managing fleet indexing](https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html).
 *
 * @public
 */
export interface IndexingFilter {
  /**
   * The shadow names that you select to index. The default maximum number of shadow names for indexing is 10. To increase the limit, see [Amazon Web Services IoT Device Management Quotas](https://docs.aws.amazon.com/general/latest/gr/iot_device_management.html#fleet-indexing-limits) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  namedShadowNames?: string[] | undefined;

  /**
   * The list of geolocation targets that you select to index. The default maximum number of geolocation targets for indexing is `1`. To increase the limit, see [Amazon Web Services IoT Device Management Quotas](https://docs.aws.amazon.com/general/latest/gr/iot_device_management.html#fleet-indexing-limits) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  geoLocations?: GeoLocationTarget[] | undefined;

  /**
   * Provides additional connectivity filter selections for the fleet indexing configuration.
   *
   * @public
   */
  connectivity?: ConnectivityFilter | undefined;
}

/**
 * The thing indexing configuration. For more information, see [Managing Thing Indexing](https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html).
 *
 * @public
 */
export interface ThingIndexingConfiguration {
  /**
   * Thing indexing mode. Valid values are:
   *
   * - REGISTRY – Your thing index contains registry data only.
   * - REGISTRY_AND_SHADOW - Your thing index contains registry and shadow data.
   * - OFF - Thing indexing is disabled.
   *
   * @public
   */
  thingIndexingMode: ThingIndexingMode | undefined;

  /**
   * Thing connectivity indexing mode. Valid values are:
   *
   * - STATUS – Your thing index contains connectivity status. To enable thing connectivity indexing, *thingIndexMode* must not be set to OFF.
   * - OFF - Thing connectivity status indexing is disabled.
   *
   * @public
   */
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | undefined;

  /**
   * Device Defender indexing mode. Valid values are:
   *
   * - VIOLATIONS – Your thing index contains Device Defender violations. To enable Device Defender indexing, *deviceDefenderIndexingMode* must not be set to OFF.
   * - OFF - Device Defender indexing is disabled.
   *
   * For more information about Device Defender violations, see [Device Defender Detect.](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html)
   *
   * @public
   */
  deviceDefenderIndexingMode?: DeviceDefenderIndexingMode | undefined;

  /**
   * Named shadow indexing mode. Valid values are:
   *
   * - ON – Your thing index contains named shadow. To enable thing named shadow indexing, *namedShadowIndexingMode* must not be set to OFF.
   * - OFF - Named shadow indexing is disabled.
   *
   * For more information about Shadows, see [IoT Device Shadow service.](https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html)
   *
   * @public
   */
  namedShadowIndexingMode?: NamedShadowIndexingMode | undefined;

  /**
   * Contains fields that are indexed and whose types are already known by the Fleet Indexing service. This is an optional field. For more information, see [Managed fields](https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html#managed-field) in the *Amazon Web Services IoT Core Developer Guide*.
   *
   * > **Note:** You can't modify managed fields by updating fleet indexing configuration.
   *
   * @public
   */
  managedFields?: Field[] | undefined;

  /**
   * Contains custom field names and their data type.
   *
   * @public
   */
  customFields?: Field[] | undefined;

  /**
   * Provides additional selections for named shadows and geolocation data.
   *
   * To add named shadows to your fleet indexing configuration, set `namedShadowIndexingMode` to be ON and specify your shadow names in `namedShadowNames` filter.
   *
   * To add geolocation data to your fleet indexing configuration:
   *
   * - If you store geolocation data in a class/unnamed shadow, set `thingIndexingMode` to be `REGISTRY_AND_SHADOW` and specify your geolocation data in `geoLocations` filter.
   * - If you store geolocation data in a named shadow, set `namedShadowIndexingMode` to be `ON`, add the shadow name in `namedShadowNames` filter, and specify your geolocation data in `geoLocations` filter. For more information, see [Managing fleet indexing](https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html).
   *
   * @public
   */
  filter?: IndexingFilter | undefined;
}

/**
 * @public
 */
export interface GetIndexingConfigurationResponse {
  /**
   * Thing indexing configuration.
   *
   * @public
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration | undefined;

  /**
   * The index configuration.
   *
   * @public
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetJobDocumentRequest {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * Provides a view of the job document before and after the substitution parameters have been resolved with their exact values.
   *
   * @public
   */
  beforeSubstitution?: boolean | undefined;
}

/**
 * @public
 */
export interface GetJobDocumentResponse {
  /**
   * The job document content.
   *
   * @public
   */
  document?: string | undefined;
}

/**
 * The input for the GetLoggingOptions operation.
 *
 * @public
 */
export interface GetLoggingOptionsRequest {}

/**
 * The output from the GetLoggingOptions operation.
 *
 * @public
 */
export interface GetLoggingOptionsResponse {
  /**
   * The ARN of the IAM role that grants access.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The logging level.
   *
   * @public
   */
  logLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetOTAUpdateRequest {
  /**
   * The OTA update ID.
   *
   * @public
   */
  otaUpdateId: string | undefined;
}

/**
 * Error information.
 *
 * @public
 */
export interface ErrorInfo {
  /**
   * The error code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Information about an OTA update.
 *
 * @public
 */
export interface OTAUpdateInfo {
  /**
   * The OTA update ID.
   *
   * @public
   */
  otaUpdateId?: string | undefined;

  /**
   * The OTA update ARN.
   *
   * @public
   */
  otaUpdateArn?: string | undefined;

  /**
   * The date when the OTA update was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date when the OTA update was last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * A description of the OTA update.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The targets of the OTA update.
   *
   * @public
   */
  targets?: string[] | undefined;

  /**
   * The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both HTTP and MQTT are specified, the target device can choose the protocol.
   *
   * @public
   */
  protocols?: Protocol[] | undefined;

  /**
   * Configuration for the rollout of OTA updates.
   *
   * @public
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig | undefined;

  /**
   * Configuration information for pre-signed URLs. Valid when `protocols` contains HTTP.
   *
   * @public
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig | undefined;

  /**
   * Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when the thing is added to a target group, even after the OTA update was completed by all things originally in the group.
   *
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * A list of files associated with the OTA update.
   *
   * @public
   */
  otaUpdateFiles?: OTAUpdateFile[] | undefined;

  /**
   * The status of the OTA update.
   *
   * @public
   */
  otaUpdateStatus?: OTAUpdateStatus | undefined;

  /**
   * The IoT job ID associated with the OTA update.
   *
   * @public
   */
  awsIotJobId?: string | undefined;

  /**
   * The IoT job ARN associated with the OTA update.
   *
   * @public
   */
  awsIotJobArn?: string | undefined;

  /**
   * Error information associated with the OTA update.
   *
   * @public
   */
  errorInfo?: ErrorInfo | undefined;

  /**
   * A collection of name/value pairs
   *
   * @public
   */
  additionalParameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOTAUpdateResponse {
  /**
   * The OTA update info.
   *
   * @public
   */
  otaUpdateInfo?: OTAUpdateInfo | undefined;
}

/**
 * @public
 */
export interface GetPackageRequest {
  /**
   * The name of the target software package.
   *
   * @public
   */
  packageName: string | undefined;
}

/**
 * @public
 */
export interface GetPackageResponse {
  /**
   * The name of the software package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The ARN for the package.
   *
   * @public
   */
  packageArn?: string | undefined;

  /**
   * The package description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the default package version.
   *
   * @public
   */
  defaultVersionName?: string | undefined;

  /**
   * The date the package was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date when the package was last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetPackageConfigurationRequest {}

/**
 * Configuration to manage IoT Job's package version reporting. If configured, Jobs updates the thing's reserved named shadow with the package version information up on successful job completion.
 *
 * **Note:** For each job, the destinationPackageVersions attribute has to be set with the correct data for Jobs to report to the thing shadow.
 *
 * @public
 */
export interface VersionUpdateByJobsConfig {
  /**
   * Indicates whether the Job is enabled or not.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that grants permission to the IoT jobs service to update the reserved named shadow when the job successfully completes.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetPackageConfigurationResponse {
  /**
   * The version that is associated to a specific job.
   *
   * @public
   */
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionRequest {
  /**
   * The name of the associated package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The name of the target package version.
   *
   * @public
   */
  versionName: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionResponse {
  /**
   * The ARN for the package version.
   *
   * @public
   */
  packageVersionArn?: string | undefined;

  /**
   * The name of the software package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The name of the package version.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * The package version description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Metadata that were added to the package version that can be used to define a package version’s configuration.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The various components that make up a software package version.
   *
   * @public
   */
  artifact?: PackageVersionArtifact | undefined;

  /**
   * The status associated to the package version. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * Error reason for a package version failure during creation or update.
   *
   * @public
   */
  errorReason?: string | undefined;

  /**
   * The date when the package version was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date when the package version was last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The software bill of materials for a software package version.
   *
   * @public
   */
  sbom?: Sbom | undefined;

  /**
   * The status of the validation for a new software bill of materials added to a software package version.
   *
   * @public
   */
  sbomValidationStatus?: SbomValidationStatus | undefined;

  /**
   * The inline job document associated with a software package version used for a quick job deployment.
   *
   * @public
   */
  recipe?: string | undefined;
}

/**
 * @public
 */
export interface GetPercentilesRequest {
  /**
   * The name of the index to search.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The search query string.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The field to aggregate.
   *
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * The query version.
   *
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * The percentile groups returned.
   *
   * @public
   */
  percents?: number[] | undefined;
}

/**
 * Describes the percentile and percentile value.
 *
 * @public
 */
export interface PercentPair {
  /**
   * The percentile.
   *
   * @public
   */
  percent?: number | undefined;

  /**
   * The value of the percentile.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * @public
 */
export interface GetPercentilesResponse {
  /**
   * The percentile values of the aggregated fields.
   *
   * @public
   */
  percentiles?: PercentPair[] | undefined;
}

/**
 * The input for the GetPolicy operation.
 *
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;
}

/**
 * The output from the GetPolicy operation.
 *
 * @public
 */
export interface GetPolicyResponse {
  /**
   * The policy name.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The policy ARN.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The JSON document that describes the policy.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The default policy version ID.
   *
   * @public
   */
  defaultVersionId?: string | undefined;

  /**
   * The date the policy was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the policy was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The generation ID of the policy.
   *
   * @public
   */
  generationId?: string | undefined;
}

/**
 * The input for the GetPolicyVersion operation.
 *
 * @public
 */
export interface GetPolicyVersionRequest {
  /**
   * The name of the policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The policy version ID.
   *
   * @public
   */
  policyVersionId: string | undefined;
}

/**
 * The output from the GetPolicyVersion operation.
 *
 * @public
 */
export interface GetPolicyVersionResponse {
  /**
   * The policy ARN.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The policy name.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * The JSON document that describes the policy.
   *
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * The policy version ID.
   *
   * @public
   */
  policyVersionId?: string | undefined;

  /**
   * Specifies whether the policy version is the default.
   *
   * @public
   */
  isDefaultVersion?: boolean | undefined;

  /**
   * The date the policy was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the policy was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * The generation ID of the policy version.
   *
   * @public
   */
  generationId?: string | undefined;
}

/**
 * The input to the GetRegistrationCode operation.
 *
 * @public
 */
export interface GetRegistrationCodeRequest {}

/**
 * The output from the GetRegistrationCode operation.
 *
 * @public
 */
export interface GetRegistrationCodeResponse {
  /**
   * The CA certificate registration code.
   *
   * @public
   */
  registrationCode?: string | undefined;
}

/**
 * @public
 */
export interface GetStatisticsRequest {
  /**
   * The name of the index to search. The default value is `AWS_Things`.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your Amazon Web Services account.
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The aggregation field name.
   *
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * The version of the query used to search.
   *
   * @public
   */
  queryVersion?: string | undefined;
}

/**
 * A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API, consult [Fleet indexing troubleshooting guide](https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html).
 *
 * @public
 */
export interface Statistics {
  /**
   * The count of things that match the query string criteria and contain a valid aggregation field value.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The average of the aggregated field values.
   *
   * @public
   */
  average?: number | undefined;

  /**
   * The sum of the aggregated field values.
   *
   * @public
   */
  sum?: number | undefined;

  /**
   * The minimum aggregated field value.
   *
   * @public
   */
  minimum?: number | undefined;

  /**
   * The maximum aggregated field value.
   *
   * @public
   */
  maximum?: number | undefined;

  /**
   * The sum of the squares of the aggregated field values.
   *
   * @public
   */
  sumOfSquares?: number | undefined;

  /**
   * The variance of the aggregated field values.
   *
   * @public
   */
  variance?: number | undefined;

  /**
   * The standard deviation of the aggregated field values.
   *
   * @public
   */
  stdDeviation?: number | undefined;
}

/**
 * @public
 */
export interface GetStatisticsResponse {
  /**
   * The statistics returned by the Fleet Indexing service based on the query and aggregation field.
   *
   * @public
   */
  statistics?: Statistics | undefined;
}

/**
 * @public
 */
export interface GetThingConnectivityDataRequest {
  /**
   * The name of your IoT thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * Specifies if socket information (sourcePort, targetPort, sourceIp, targetIp, vpcEndpointId) should be included in the GetThingConnectivityData response. Set to `true` to include socket information. Set to `false` to omit socket information. By default, this is set to `false`.
   *
   * @public
   */
  includeSocketInformation?: boolean | undefined;
}

/**
 * @public
 */
export interface GetThingConnectivityDataResponse {
  /**
   * The name of your IoT thing.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * A Boolean that indicates the connectivity status.
   *
   * @public
   */
  connected?: boolean | undefined;

  /**
   * The timestamp of when the device connected or disconnected.
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * The reason that the client is disconnected.
   *
   * @public
   */
  disconnectReason?: DisconnectReasonValue | undefined;

  /**
   * The IP address of the client that initiated the connection.
   *
   * @public
   */
  sourceIp?: string | undefined;

  /**
   * The client's source port.
   *
   * @public
   */
  sourcePort?: number | undefined;

  /**
   * The IP address of the Amazon Web Services IoT Core endpoint that the client connected to.
   *
   * @public
   */
  targetIp?: string | undefined;

  /**
   * The port number of the Amazon Web Services IoT Core endpoint that the client connected to.
   *
   * @public
   */
  targetPort?: number | undefined;

  /**
   * The ID of the VPC endpoint. Present for clients connected to Amazon Web Services IoT Core via a VPC endpoint.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * The keep-alive interval in seconds that the client specified when establishing the connection.
   *
   * @public
   */
  keepAliveDuration?: number | undefined;

  /**
   * Indicates whether the client is using a clean session. Returns `true` for clean sessions.
   *
   * @public
   */
  cleanSession?: boolean | undefined;

  /**
   * The session expiry interval in seconds for the MQTT client connection. This value indicates how long the session will remain active after the client disconnects.
   *
   * @public
   */
  sessionExpiry?: number | undefined;

  /**
   * The unique identifier of the MQTT client.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * The input for the GetTopicRule operation.
 *
 * @public
 */
export interface GetTopicRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;
}

/**
 * Describes a rule.
 *
 * @public
 */
export interface TopicRule {
  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName?: string | undefined;

  /**
   * The SQL statement used to query the topic. When using a SQL query with multiple lines, be sure to escape the newline characters.
   *
   * @public
   */
  sql?: string | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date and time the rule was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The actions associated with the rule.
   *
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * Specifies whether the rule is disabled.
   *
   * @public
   */
  ruleDisabled?: boolean | undefined;

  /**
   * The version of the SQL rules engine to use when evaluating the rule.
   *
   * @public
   */
  awsIotSqlVersion?: string | undefined;

  /**
   * The action to perform when an error occurs.
   *
   * @public
   */
  errorAction?: Action | undefined;
}

/**
 * The output from the GetTopicRule operation.
 *
 * @public
 */
export interface GetTopicRuleResponse {
  /**
   * The rule ARN.
   *
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * The rule.
   *
   * @public
   */
  rule?: TopicRule | undefined;
}

/**
 * @public
 */
export interface GetTopicRuleDestinationRequest {
  /**
   * The ARN of the topic rule destination.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetTopicRuleDestinationResponse {
  /**
   * The topic rule destination.
   *
   * @public
   */
  topicRuleDestination?: TopicRuleDestination | undefined;
}

/**
 * @public
 */
export interface GetV2LoggingOptionsRequest {
  /**
   * The flag is used to get all the event types and their respective configuration that event-based logging supports.
   *
   * @public
   */
  verbose?: boolean | undefined;
}

/**
 * Configuration for event-based logging that specifies which event types to log and their logging settings. Used for account-level logging overrides.
 *
 * @public
 */
export interface LogEventConfiguration {
  /**
   * The type of event to log. These include event types like Connect, Publish, and Disconnect.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * The logging level for the specified event type. Determines the verbosity of log messages generated for this event type.
   *
   * @public
   */
  logLevel?: LogLevel | undefined;

  /**
   * CloudWatch Log Group for event-based logging. Specifies where log events should be sent. The log destination for event-based logging overrides default Log Group for the specified event type and applies to all resources associated with that event.
   *
   * @public
   */
  logDestination?: string | undefined;
}

/**
 * @public
 */
export interface GetV2LoggingOptionsResponse {
  /**
   * The IAM role ARN IoT uses to write to your CloudWatch logs.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The default log level.
   *
   * @public
   */
  defaultLogLevel?: LogLevel | undefined;

  /**
   * Disables all logs.
   *
   * @public
   */
  disableAllLogs?: boolean | undefined;

  /**
   * The list of event configurations that override account-level logging.
   *
   * @public
   */
  eventConfigurations?: LogEventConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListActiveViolationsRequest {
  /**
   * The name of the thing whose active violations are listed.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The name of the Device Defender security profile for which violations are listed.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The criteria for a behavior.
   *
   * @public
   */
  behaviorCriteriaType?: BehaviorCriteriaType | undefined;

  /**
   * A list of all suppressed alerts.
   *
   * @public
   */
  listSuppressedAlerts?: boolean | undefined;

  /**
   * The verification state of the violation (detect alarm).
   *
   * @public
   */
  verificationState?: VerificationState | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListActiveViolationsResponse {
  /**
   * The list of active violations.
   *
   * @public
   */
  activeViolations?: ActiveViolation[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedPoliciesRequest {
  /**
   * The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:*region*:*accountId*:cert/*certificateId*), thingGroupArn (arn:aws:iot:*region*:*accountId*:thinggroup/*groupName*) and CognitoId (*region*:*id*).
   *
   * @public
   */
  target: string | undefined;

  /**
   * When true, recursively list attached policies.
   *
   * @public
   */
  recursive?: boolean | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAttachedPoliciesResponse {
  /**
   * The policies.
   *
   * @public
   */
  policies?: Policy[] | undefined;

  /**
   * The token to retrieve the next set of results, or ``null`` if there are no more results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditFindingsRequest {
  /**
   * A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * A filter to limit results to the findings for the specified audit check.
   *
   * @public
   */
  checkName?: string | undefined;

  /**
   * Information identifying the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings.
   *
   * @public
   */
  listSuppressedFindings?: boolean | undefined;
}

/**
 * @public
 */
export interface ListAuditFindingsResponse {
  /**
   * The findings (results) of the audit.
   *
   * @public
   */
  findings?: AuditFinding[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsExecutionsRequest {
  /**
   * Specify this filter to limit results to actions for a specific audit mitigation actions task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * Specify this filter to limit results to those with a specific status.
   *
   * @public
   */
  actionStatus?: AuditMitigationActionsExecutionStatus | undefined;

  /**
   * Specify this filter to limit results to those that were applied to a specific audit finding.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsExecutionsResponse {
  /**
   * A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.
   *
   * @public
   */
  actionsExecutions?: AuditMitigationActionExecutionMetadata[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsTasksRequest {
  /**
   * Specify this filter to limit results to tasks that were applied to results for a specific audit.
   *
   * @public
   */
  auditTaskId?: string | undefined;

  /**
   * Specify this filter to limit results to tasks that were applied to a specific audit finding.
   *
   * @public
   */
  findingId?: string | undefined;

  /**
   * Specify this filter to limit results to tasks that are in a specific state.
   *
   * @public
   */
  taskStatus?: AuditMitigationActionsTaskStatus | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specify this filter to limit results to tasks that began on or after a specific date and time.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsTasksResponse {
  /**
   * The collection of audit mitigation tasks that matched the filter criteria.
   *
   * @public
   */
  tasks?: AuditMitigationActionsTaskMetadata[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditSuppressionsRequest {
  /**
   * An audit check name. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  checkName?: string | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, `ascendingOrder=true`.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAuditSuppressionsResponse {
  /**
   * List of audit suppressions.
   *
   * @public
   */
  suppressions?: AuditSuppression[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditTasksRequest {
  /**
   * The beginning of the time period. Audit information is retained for a limited time (90 days). Requesting a start time prior to what is retained results in an "InvalidRequestException".
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end of the time period.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * A filter to limit the output to the specified type of audit: can be one of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".
   *
   * @public
   */
  taskType?: AuditTaskType | undefined;

  /**
   * A filter to limit the output to audits with the specified completion status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".
   *
   * @public
   */
  taskStatus?: AuditTaskStatus | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAuditTasksResponse {
  /**
   * The audits that were performed during the specified time period.
   *
   * @public
   */
  tasks?: AuditTaskMetadata[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthorizersRequest {
  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * A marker used to get the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Return the list of authorizers in ascending alphabetical order.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;

  /**
   * The status of the list authorizers request.
   *
   * @public
   */
  status?: AuthorizerStatus | undefined;
}

/**
 * @public
 */
export interface ListAuthorizersResponse {
  /**
   * The authorizers.
   *
   * @public
   */
  authorizers?: AuthorizerSummary[] | undefined;

  /**
   * A marker used to get the next set of results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Limit the results to billing groups whose names have the given prefix.
   *
   * @public
   */
  namePrefixFilter?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsResponse {
  /**
   * The list of billing groups.
   *
   * @public
   */
  billingGroups?: GroupNameAndArn[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for the ListCACertificates operation.
 *
 * @public
 */
export interface ListCACertificatesRequest {
  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Determines the order of the results.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;

  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName?: string | undefined;
}

/**
 * A CA certificate.
 *
 * @public
 */
export interface CACertificate {
  /**
   * The ARN of the CA certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The ID of the CA certificate.
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The status of the CA certificate.
   *
   * The status value REGISTER_INACTIVE is deprecated and should not be used.
   *
   * @public
   */
  status?: CACertificateStatus | undefined;

  /**
   * The date the CA certificate was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * The output from the ListCACertificates operation.
 *
 * @public
 */
export interface ListCACertificatesResponse {
  /**
   * The CA certificates registered in your Amazon Web Services account.
   *
   * @public
   */
  certificates?: CACertificate[] | undefined;

  /**
   * The current position within the list of CA certificates.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateProvidersRequest {
  /**
   * The token for the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Returns the list of certificate providers in ascending alphabetical order.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * The certificate provider summary.
 *
 * @public
 */
export interface CertificateProviderSummary {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName?: string | undefined;

  /**
   * The ARN of the certificate provider.
   *
   * @public
   */
  certificateProviderArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateProvidersResponse {
  /**
   * The list of certificate providers in your Amazon Web Services account.
   *
   * @public
   */
  certificateProviders?: CertificateProviderSummary[] | undefined;

  /**
   * The token for the next set of results, or `null` if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for the ListCertificates operation.
 *
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * Information about a certificate.
 *
 * @public
 */
export interface Certificate {
  /**
   * The ARN of the certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The status of the certificate.
   *
   * The status value REGISTER_INACTIVE is deprecated and should not be used.
   *
   * @public
   */
  status?: CertificateStatus | undefined;

  /**
   * The mode of the certificate.
   *
   * `DEFAULT`: A certificate in `DEFAULT` mode is either generated by Amazon Web Services IoT Core or registered with an issuer certificate authority (CA) in `DEFAULT` mode. Devices with certificates in `DEFAULT` mode aren't required to send the Server Name Indication (SNI) extension when connecting to Amazon Web Services IoT Core. However, to use features such as custom domains and VPC endpoints, we recommend that you use the SNI extension when connecting to Amazon Web Services IoT Core.
   *
   * `SNI_ONLY`: A certificate in `SNI_ONLY` mode is registered without an issuer CA. Devices with certificates in `SNI_ONLY` mode must send the SNI extension when connecting to Amazon Web Services IoT Core.
   *
   * @public
   */
  certificateMode?: CertificateMode | undefined;

  /**
   * The date and time the certificate was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * The output of the ListCertificates operation.
 *
 * @public
 */
export interface ListCertificatesResponse {
  /**
   * The descriptions of the certificates.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The marker for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * The input to the ListCertificatesByCA operation.
 *
 * @public
 */
export interface ListCertificatesByCARequest {
  /**
   * The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.
   *
   * @public
   */
  caCertificateId: string | undefined;

  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * The output of the ListCertificatesByCA operation.
 *
 * @public
 */
export interface ListCertificatesByCAResponse {
  /**
   * The device certificates signed by the specified CA certificate.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The marker for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * A filter that can be used to list command executions for a device that started or completed before or after a particular date and time.
 *
 * @public
 */
export interface TimeFilter {
  /**
   * Filter to display command executions that started or completed only after a particular date and time.
   *
   * @public
   */
  after?: string | undefined;

  /**
   * Filter to display command executions that started or completed only before a particular date and time.
   *
   * @public
   */
  before?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandExecutionsRequest {
  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise `null` to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The namespace of the command.
   *
   * @public
   */
  namespace?: CommandNamespace | undefined;

  /**
   * List all command executions for the device that have a particular status. For example, you can filter the list to display only command executions that have failed or timed out.
   *
   * @public
   */
  status?: CommandExecutionStatus | undefined;

  /**
   * Specify whether to list the command executions that were created in the ascending or descending order. By default, the API returns all commands in the descending order based on the start time or completion time of the executions, that are determined by the `startTimeFilter` and `completeTimeFilter` parameters.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * List all command executions that started any time before or after the date and time that you specify. The date and time uses the format `yyyy-MM-dd'T'HH:mm`.
   *
   * @public
   */
  startedTimeFilter?: TimeFilter | undefined;

  /**
   * List all command executions that completed any time before or after the date and time that you specify. The date and time uses the format `yyyy-MM-dd'T'HH:mm`.
   *
   * @public
   */
  completedTimeFilter?: TimeFilter | undefined;

  /**
   * The Amazon Resource Number (ARN) of the target device. You can use this information to list all command executions for a particular device.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the command. You can use this information to list all command executions for a particular command.
   *
   * @public
   */
  commandArn?: string | undefined;
}

/**
 * Summary information about a particular command execution.
 *
 * @public
 */
export interface CommandExecutionSummary {
  /**
   * The Amazon Resource Name (ARN) of the command execution.
   *
   * @public
   */
  commandArn?: string | undefined;

  /**
   * The unique identifier of the command execution.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target device for which the command is being executed.
   *
   * @public
   */
  targetArn?: string | undefined;

  /**
   * The status of the command executions.
   *
   * @public
   */
  status?: CommandExecutionStatus | undefined;

  /**
   * The date and time at which the command execution was created for the target device.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time at which the command started executing on the target device.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time at which the command completed executing on the target device.
   *
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCommandExecutionsResponse {
  /**
   * The list of command executions.
   *
   * @public
   */
  commandExecutions?: CommandExecutionSummary[] | undefined;

  /**
   * The token to use to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandsRequest {
  /**
   * The maximum number of results to return in this operation. By default, the API returns up to a maximum of 25 results. You can override this default value to return up to a maximum of 100 results for this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise `null` to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The namespace of the command. By default, the API returns all commands that have been created for both `AWS-IoT` and `AWS-IoT-FleetWise` namespaces. You can override this default value if you want to return all commands that have been created only for a specific namespace.
   *
   * @public
   */
  namespace?: CommandNamespace | undefined;

  /**
   * A filter that can be used to display the list of commands that have a specific command parameter name.
   *
   * @public
   */
  commandParameterName?: string | undefined;

  /**
   * Specify whether to list the commands that you have created in the ascending or descending order. By default, the API returns all commands in the descending order based on the time that they were created.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Summary information about a particular command resource.
 *
 * @public
 */
export interface CommandSummary {
  /**
   * The Amazon Resource Name (ARN) of the command.
   *
   * @public
   */
  commandArn?: string | undefined;

  /**
   * The unique identifier of the command.
   *
   * @public
   */
  commandId?: string | undefined;

  /**
   * The display name of the command.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Indicates whether the command has been deprecated.
   *
   * @public
   */
  deprecated?: boolean | undefined;

  /**
   * The timestamp, when the command was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp, when the command was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * Indicates whether the command is pending deletion.
   *
   * @public
   */
  pendingDeletion?: boolean | undefined;
}

/**
 * @public
 */
export interface ListCommandsResponse {
  /**
   * The list of commands.
   *
   * @public
   */
  commands?: CommandSummary[] | undefined;

  /**
   * The token to use to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomMetricsRequest {
  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCustomMetricsResponse {
  /**
   * The name of the custom metric.
   *
   * @public
   */
  metricNames?: string[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsExecutionsRequest {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The unique identifier of the violation.
   *
   * @public
   */
  violationId?: string | undefined;

  /**
   * The name of the thing whose mitigation actions are listed.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end of the time period for which ML Detect mitigation actions executions are returned.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes which mitigation actions should be executed.
 *
 * @public
 */
export interface DetectMitigationActionExecution {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The unique identifier of the violation.
   *
   * @public
   */
  violationId?: string | undefined;

  /**
   * The friendly name that uniquely identifies the mitigation action.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * The name of the thing.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The date a mitigation action was started.
   *
   * @public
   */
  executionStartDate?: Date | undefined;

  /**
   * The date a mitigation action ended.
   *
   * @public
   */
  executionEndDate?: Date | undefined;

  /**
   * The status of a mitigation action.
   *
   * @public
   */
  status?: DetectMitigationActionExecutionStatus | undefined;

  /**
   * The error code of a mitigation action.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The message of a mitigation action.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsExecutionsResponse {
  /**
   * List of actions executions.
   *
   * @public
   */
  actionsExecutions?: DetectMitigationActionExecution[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsTasksRequest {
  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end of the time period for which ML Detect mitigation actions tasks are returned.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * @public
 */
export interface ListDetectMitigationActionsTasksResponse {
  /**
   * The collection of ML Detect mitigation tasks that matched the filter criteria.
   *
   * @public
   */
  tasks?: DetectMitigationActionsTaskSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDimensionsRequest {
  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to retrieve at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDimensionsResponse {
  /**
   * A list of the names of the defined dimensions. Use `DescribeDimension` to get details for a dimension.
   *
   * @public
   */
  dimensionNames?: string[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainConfigurationsRequest {
  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The type of service delivered by the endpoint.
   *
   * @public
   */
  serviceType?: ServiceType | undefined;
}

/**
 * The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an Amazon Web Services-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.
 *
 * - Data
 * - Jobs
 * - CredentialProvider
 *
 * @public
 */
export interface DomainConfigurationSummary {
  /**
   * The name of the domain configuration. This value must be unique to a region.
   *
   * @public
   */
  domainConfigurationName?: string | undefined;

  /**
   * The ARN of the domain configuration.
   *
   * @public
   */
  domainConfigurationArn?: string | undefined;

  /**
   * The type of service delivered by the endpoint.
   *
   * @public
   */
  serviceType?: ServiceType | undefined;
}

/**
 * @public
 */
export interface ListDomainConfigurationsResponse {
  /**
   * A list of objects that contain summary information about the user's domain configurations.
   *
   * @public
   */
  domainConfigurations?: DomainConfigurationSummary[] | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetMetricsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise `null` to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The name and ARN of a fleet metric.
 *
 * @public
 */
export interface FleetMetricNameAndArn {
  /**
   * The fleet metric name.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * The fleet metric ARN.
   *
   * @public
   */
  metricArn?: string | undefined;
}

/**
 * @public
 */
export interface ListFleetMetricsResponse {
  /**
   * The list of fleet metrics objects.
   *
   * @public
   */
  fleetMetrics?: FleetMetricNameAndArn[] | undefined;

  /**
   * The token for the next set of results. Will not be returned if the operation has returned all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIndicesRequest {
  /**
   * The token used to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIndicesResponse {
  /**
   * The index names.
   *
   * @public
   */
  indexNames?: string[] | undefined;

  /**
   * The token used to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobExecutionsForJobRequest {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The status of the job.
   *
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The job execution summary.
 *
 * @public
 */
export interface JobExecutionSummary {
  /**
   * The status of the job execution.
   *
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was queued.
   *
   * @public
   */
  queuedAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * A string (consisting of the digits "0" through "9") which identifies this particular job execution on this particular device. It can be used later in commands which return or update job execution information.
   *
   * @public
   */
  executionNumber?: number | undefined;

  /**
   * The number that indicates how many retry attempts have been completed for this job on this device.
   *
   * @public
   */
  retryAttempt?: number | undefined;
}

/**
 * Contains a summary of information about job executions for a specific job.
 *
 * @public
 */
export interface JobExecutionSummaryForJob {
  /**
   * The ARN of the thing on which the job execution is running.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * Contains a subset of information about a job execution.
   *
   * @public
   */
  jobExecutionSummary?: JobExecutionSummary | undefined;
}

/**
 * @public
 */
export interface ListJobExecutionsForJobResponse {
  /**
   * A list of job execution summaries.
   *
   * @public
   */
  executionSummaries?: JobExecutionSummaryForJob[] | undefined;

  /**
   * The token for the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobExecutionsForThingRequest {
  /**
   * The thing name.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * An optional filter that lets you search for jobs that have the specified status.
   *
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The maximum number of results to be returned per request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;
}

/**
 * The job execution summary for a thing.
 *
 * @public
 */
export interface JobExecutionSummaryForThing {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Contains a subset of information about a job execution.
   *
   * @public
   */
  jobExecutionSummary?: JobExecutionSummary | undefined;
}

/**
 * @public
 */
export interface ListJobExecutionsForThingResponse {
  /**
   * A list of job execution summaries.
   *
   * @public
   */
  executionSummaries?: JobExecutionSummaryForThing[] | undefined;

  /**
   * The token for the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * An optional filter that lets you search for jobs that have the specified status.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.
   *
   * > **Note:** We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.
   *
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * The maximum number of results to return per request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A filter that limits the returned jobs to those for the specified group.
   *
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * A filter that limits the returned jobs to those for the specified group.
   *
   * @public
   */
  thingGroupId?: string | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;
}

/**
 * The job summary.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The job ARN.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The ID of the thing group.
   *
   * @public
   */
  thingGroupId?: string | undefined;

  /**
   * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.
   *
   * > **Note:** We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.
   *
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * The job summary status.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The time, in seconds since the epoch, when the job was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The time, in seconds since the epoch, when the job completed.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * Indicates whether a job is concurrent. Will be true when a job is rolling out new job executions or canceling previously created executions, otherwise false.
   *
   * @public
   */
  isConcurrent?: boolean | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * A list of jobs.
   *
   * @public
   */
  jobs?: JobSummary[] | undefined;

  /**
   * The token for the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesRequest {
  /**
   * The maximum number of results to return in the list.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to use to return the next set of results in the list.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains information about the job template.
 *
 * @public
 */
export interface JobTemplateSummary {
  /**
   * The ARN of the job template.
   *
   * @public
   */
  jobTemplateArn?: string | undefined;

  /**
   * The unique identifier of the job template.
   *
   * @public
   */
  jobTemplateId?: string | undefined;

  /**
   * A description of the job template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time, in seconds since the epoch, when the job template was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListJobTemplatesResponse {
  /**
   * A list of objects that contain information about the job templates.
   *
   * @public
   */
  jobTemplates?: JobTemplateSummary[] | undefined;

  /**
   * The token for the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedJobTemplatesRequest {
  /**
   * An optional parameter for template name. If specified, only the versions of the managed job templates that have the specified template name will be returned.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * Maximum number of entries that can be returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that contains information about the managed template.
 *
 * @public
 */
export interface ManagedJobTemplateSummary {
  /**
   * The Amazon Resource Name (ARN) for a managed template.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The unique Name for a managed template.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * The description for a managed template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of environments that are supported with the managed job template.
   *
   * @public
   */
  environments?: string[] | undefined;

  /**
   * The version for a managed template.
   *
   * @public
   */
  templateVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedJobTemplatesResponse {
  /**
   * A list of managed job templates that are returned.
   *
   * @public
   */
  managedJobTemplates?: ManagedJobTemplateSummary[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMetricValuesRequest {
  /**
   * The name of the thing for which security profile metric values are returned.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The name of the security profile metric for which values are returned.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * The dimension name.
   *
   * @public
   */
  dimensionName?: string | undefined;

  /**
   * The dimension value operator.
   *
   * @public
   */
  dimensionValueOperator?: DimensionValueOperator | undefined;

  /**
   * The start of the time period for which metric values are returned.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end of the time period for which metric values are returned.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A metric.
 *
 * @public
 */
export interface MetricDatum {
  /**
   * The time the metric value was reported.
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * The value reported for the metric.
   *
   * @public
   */
  value?: MetricValue | undefined;
}

/**
 * @public
 */
export interface ListMetricValuesResponse {
  /**
   * The data the thing reports for the metric during the specified time period.
   *
   * @public
   */
  metricDatumList?: MetricDatum[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMitigationActionsRequest {
  /**
   * Specify a value to limit the result to mitigation actions with a specific action type.
   *
   * @public
   */
  actionType?: MitigationActionType | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information that identifies a mitigation action. This information is returned by ListMitigationActions.
 *
 * @public
 */
export interface MitigationActionIdentifier {
  /**
   * The friendly name of the mitigation action.
   *
   * @public
   */
  actionName?: string | undefined;

  /**
   * The IAM role ARN used to apply this mitigation action.
   *
   * @public
   */
  actionArn?: string | undefined;

  /**
   * The date when this mitigation action was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListMitigationActionsResponse {
  /**
   * A set of actions that matched the specified filter criteria.
   *
   * @public
   */
  actionIdentifiers?: MitigationActionIdentifier[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOTAUpdatesRequest {
  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The OTA update job status.
   *
   * @public
   */
  otaUpdateStatus?: OTAUpdateStatus | undefined;
}

/**
 * An OTA update summary.
 *
 * @public
 */
export interface OTAUpdateSummary {
  /**
   * The OTA update ID.
   *
   * @public
   */
  otaUpdateId?: string | undefined;

  /**
   * The OTA update ARN.
   *
   * @public
   */
  otaUpdateArn?: string | undefined;

  /**
   * The date when the OTA update was created.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListOTAUpdatesResponse {
  /**
   * A list of OTA update jobs.
   *
   * @public
   */
  otaUpdates?: OTAUpdateSummary[] | undefined;

  /**
   * A token to use to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input to the ListOutgoingCertificates operation.
 *
 * @public
 */
export interface ListOutgoingCertificatesRequest {
  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * A certificate that has been transferred but not yet accepted.
 *
 * @public
 */
export interface OutgoingCertificate {
  /**
   * The certificate ARN.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The certificate ID.
   *
   * @public
   */
  certificateId?: string | undefined;

  /**
   * The Amazon Web Services account to which the transfer was made.
   *
   * @public
   */
  transferredTo?: string | undefined;

  /**
   * The date the transfer was initiated.
   *
   * @public
   */
  transferDate?: Date | undefined;

  /**
   * The transfer message.
   *
   * @public
   */
  transferMessage?: string | undefined;

  /**
   * The certificate creation date.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * The output from the ListOutgoingCertificates operation.
 *
 * @public
 */
export interface ListOutgoingCertificatesResponse {
  /**
   * The certificates that are being transferred but not yet accepted.
   *
   * @public
   */
  outgoingCertificates?: OutgoingCertificate[] | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListPackagesRequest {
  /**
   * The maximum number of results returned at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of information about a software package.
 *
 * @public
 */
export interface PackageSummary {
  /**
   * The name for the target software package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The name of the default package version.
   *
   * @public
   */
  defaultVersionName?: string | undefined;

  /**
   * The date that the package was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date that the package was last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListPackagesResponse {
  /**
   * The software package summary.
   *
   * @public
   */
  packageSummaries?: PackageSummary[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionsRequest {
  /**
   * The name of the target software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The status of the package version. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of information about a package version.
 *
 * @public
 */
export interface PackageVersionSummary {
  /**
   * The name of the associated software package.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The name of the target package version.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * The status of the package version. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * The date that the package version was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date that the package version was last updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListPackageVersionsResponse {
  /**
   * Lists the package versions associated to the package.
   *
   * @public
   */
  packageVersionSummaries?: PackageVersionSummary[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for the ListPolicies operation.
 *
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * Specifies the order for results. If true, the results are returned in ascending creation order.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * The output from the ListPolicies operation.
 *
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * The descriptions of the policies.
   *
   * @public
   */
  policies?: Policy[] | undefined;

  /**
   * The marker for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * The input for the ListPolicyPrincipals operation.
 *
 * @public
 */
export interface ListPolicyPrincipalsRequest {
  /**
   * The policy name.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * Specifies the order for results. If true, the results are returned in ascending creation order.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * The output from the ListPolicyPrincipals operation.
 *
 * @public
 */
export interface ListPolicyPrincipalsResponse {
  /**
   * The descriptions of the principals.
   *
   * @public
   */
  principals?: string[] | undefined;

  /**
   * The marker for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * The input for the ListPolicyVersions operation.
 *
 * @public
 */
export interface ListPolicyVersionsRequest {
  /**
   * The policy name.
   *
   * @public
   */
  policyName: string | undefined;
}

/**
 * Describes a policy version.
 *
 * @public
 */
export interface PolicyVersion {
  /**
   * The policy version ID.
   *
   * @public
   */
  versionId?: string | undefined;

  /**
   * Specifies whether the policy version is the default.
   *
   * @public
   */
  isDefaultVersion?: boolean | undefined;

  /**
   * The date and time the policy was created.
   *
   * @public
   */
  createDate?: Date | undefined;
}

/**
 * The output from the ListPolicyVersions operation.
 *
 * @public
 */
export interface ListPolicyVersionsResponse {
  /**
   * The policy versions.
   *
   * @public
   */
  policyVersions?: PolicyVersion[] | undefined;
}

/**
 * The input for the ListPrincipalPolicies operation.
 *
 * @public
 */
export interface ListPrincipalPoliciesRequest {
  /**
   * The principal. Valid principals are CertificateArn (arn:aws:iot:*region*:*accountId*:cert/*certificateId*), thingGroupArn (arn:aws:iot:*region*:*accountId*:thinggroup/*groupName*) and CognitoId (*region*:*id*).
   *
   * @public
   */
  principal: string | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The result page size.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * Specifies the order for results. If true, results are returned in ascending creation order.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * The output from the ListPrincipalPolicies operation.
 *
 * @public
 */
export interface ListPrincipalPoliciesResponse {
  /**
   * The policies.
   *
   * @public
   */
  policies?: Policy[] | undefined;

  /**
   * The marker for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * The input for the ListPrincipalThings operation.
 *
 * @public
 */
export interface ListPrincipalThingsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The principal.
   *
   * @public
   */
  principal: string | undefined;
}

/**
 * The output from the ListPrincipalThings operation.
 *
 * @public
 */
export interface ListPrincipalThingsResponse {
  /**
   * The things.
   *
   * @public
   */
  things?: string[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPrincipalThingsV2Request {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The principal. A principal can be an X.509 certificate or an Amazon Cognito ID.
   *
   * @public
   */
  principal: string | undefined;

  /**
   * The type of the relation you want to filter in the response. If no value is provided in this field, the response will list all things, including both the `EXCLUSIVE_THING` and `NON_EXCLUSIVE_THING` attachment types.
   *
   * - `EXCLUSIVE_THING` - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal.
   *
   * - `NON_EXCLUSIVE_THING` - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal.
   *
   * @public
   */
  thingPrincipalType?: ThingPrincipalType | undefined;
}

/**
 * An object that represents the thing and the type of relation it has with the principal.
 *
 * @public
 */
export interface PrincipalThingObject {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The type of the relation you want to specify when you attach a principal to a thing. The value defaults to `NON_EXCLUSIVE_THING`.
   *
   * - `EXCLUSIVE_THING` - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal.
   *
   * - `NON_EXCLUSIVE_THING` - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal.
   *
   * @public
   */
  thingPrincipalType?: ThingPrincipalType | undefined;
}

/**
 * @public
 */
export interface ListPrincipalThingsV2Response {
  /**
   * A list of `thingPrincipalObject` that represents the principal and the type of relation it has with the thing.
   *
   * @public
   */
  principalThingObjects?: PrincipalThingObject[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningTemplatesRequest {
  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of information about a provisioning template.
 *
 * @public
 */
export interface ProvisioningTemplateSummary {
  /**
   * The ARN of the provisioning template.
   *
   * @public
   */
  templateArn?: string | undefined;

  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName?: string | undefined;

  /**
   * The description of the provisioning template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date when the provisioning template summary was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date when the provisioning template summary was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * True if the fleet provision template is enabled, otherwise false.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is `FLEET_PROVISIONING`. For more information about provisioning template, see: [Provisioning template](https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html).
   *
   * @public
   */
  type?: TemplateType | undefined;
}

/**
 * @public
 */
export interface ListProvisioningTemplatesResponse {
  /**
   * A list of provisioning templates
   *
   * @public
   */
  templates?: ProvisioningTemplateSummary[] | undefined;

  /**
   * A token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningTemplateVersionsRequest {
  /**
   * The name of the provisioning template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of information about a fleet provision template version.
 *
 * @public
 */
export interface ProvisioningTemplateVersionSummary {
  /**
   * The ID of the fleet provisioning template version.
   *
   * @public
   */
  versionId?: number | undefined;

  /**
   * The date when the provisioning template version was created
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * True if the provisioning template version is the default version, otherwise false.
   *
   * @public
   */
  isDefaultVersion?: boolean | undefined;
}

/**
 * @public
 */
export interface ListProvisioningTemplateVersionsResponse {
  /**
   * The list of provisioning template versions.
   *
   * @public
   */
  versions?: ProvisioningTemplateVersionSummary[] | undefined;

  /**
   * A token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRelatedResourcesForAuditFindingRequest {
  /**
   * The finding Id.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRelatedResourcesForAuditFindingResponse {
  /**
   * The related resources.
   *
   * @public
   */
  relatedResources?: RelatedResource[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` for the first API call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoleAliasesRequest {
  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  pageSize?: number | undefined;

  /**
   * A marker used to get the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * Return the list of role aliases in ascending alphabetical order.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * @public
 */
export interface ListRoleAliasesResponse {
  /**
   * The role aliases.
   *
   * @public
   */
  roleAliases?: string[] | undefined;

  /**
   * A marker used to get the next set of results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListSbomValidationResultsRequest {
  /**
   * The name of the new software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The name of the new package version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The end result of the
   *
   * @public
   */
  validationResult?: SbomValidationResult | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of the validation results for a specific software bill of materials (SBOM) attached to a software package version.
 *
 * @public
 */
export interface SbomValidationResultSummary {
  /**
   * The name of the SBOM file.
   *
   * @public
   */
  fileName?: string | undefined;

  /**
   * The end result of the SBOM validation.
   *
   * @public
   */
  validationResult?: SbomValidationResult | undefined;

  /**
   * The `errorCode` representing the validation failure error if the SBOM validation failed.
   *
   * @public
   */
  errorCode?: SbomValidationErrorCode | undefined;

  /**
   * The `errorMessage` representing the validation failure error if the SBOM validation failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListSbomValidationResultsResponse {
  /**
   * A summary of the validation results for each software bill of materials attached to a software package version.
   *
   * @public
   */
  validationResultSummaries?: SbomValidationResultSummary[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScheduledAuditsRequest {
  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time. The default is 25.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the scheduled audit.
 *
 * @public
 */
export interface ScheduledAuditMetadata {
  /**
   * The name of the scheduled audit.
   *
   * @public
   */
  scheduledAuditName?: string | undefined;

  /**
   * The ARN of the scheduled audit.
   *
   * @public
   */
  scheduledAuditArn?: string | undefined;

  /**
   * How often the scheduled audit occurs.
   *
   * @public
   */
  frequency?: AuditFrequency | undefined;

  /**
   * The day of the month on which the scheduled audit is run (if the `frequency` is "MONTHLY"). If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
   *
   * @public
   */
  dayOfMonth?: string | undefined;

  /**
   * The day of the week on which the scheduled audit is run (if the `frequency` is "WEEKLY" or "BIWEEKLY").
   *
   * @public
   */
  dayOfWeek?: DayOfWeek | undefined;
}

/**
 * @public
 */
export interface ListScheduledAuditsResponse {
  /**
   * The list of scheduled audits.
   *
   * @public
   */
  scheduledAudits?: ScheduledAuditMetadata[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A filter to limit results to the security profiles that use the defined dimension. Cannot be used with `metricName`
   *
   * @public
   */
  dimensionName?: string | undefined;

  /**
   * The name of the custom metric. Cannot be used with `dimensionName`.
   *
   * @public
   */
  metricName?: string | undefined;
}

/**
 * Identifying information for a Device Defender security profile.
 *
 * @public
 */
export interface SecurityProfileIdentifier {
  /**
   * The name you've given to the security profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the security profile.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * A list of security profile identifiers (names and ARNs).
   *
   * @public
   */
  securityProfileIdentifiers?: SecurityProfileIdentifier[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesForTargetRequest {
  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If true, return child groups too.
   *
   * @public
   */
  recursive?: boolean | undefined;

  /**
   * The ARN of the target (thing group) whose attached security profiles you want to get.
   *
   * @public
   */
  securityProfileTargetArn: string | undefined;
}

/**
 * A target to which an alert is sent when a security profile behavior is violated.
 *
 * @public
 */
export interface SecurityProfileTarget {
  /**
   * The ARN of the security profile.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Information about a security profile and the target associated with it.
 *
 * @public
 */
export interface SecurityProfileTargetMapping {
  /**
   * Information that identifies the security profile.
   *
   * @public
   */
  securityProfileIdentifier?: SecurityProfileIdentifier | undefined;

  /**
   * Information about the target (thing group) associated with the security profile.
   *
   * @public
   */
  target?: SecurityProfileTarget | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesForTargetResponse {
  /**
   * A list of security profiles and their associated targets.
   *
   * @public
   */
  securityProfileTargetMappings?: SecurityProfileTargetMapping[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStreamsRequest {
  /**
   * The maximum number of results to return at a time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token used to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Set to true to return the list of streams in ascending order.
   *
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * A summary of a stream.
 *
 * @public
 */
export interface StreamSummary {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * The stream ARN.
   *
   * @public
   */
  streamArn?: string | undefined;

  /**
   * The stream version.
   *
   * @public
   */
  streamVersion?: number | undefined;

  /**
   * A description of the stream.
   *
   * @public
   */
  description?: string | undefined;
}
